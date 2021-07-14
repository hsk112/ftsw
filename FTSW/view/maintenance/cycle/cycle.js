var myVue = new Vue({
    el: '#mui-content',
    data: function () {
        return {
            dataList: [],
            selectId: 0,
            popId: 4,
            planState: 0, //0,待执行,1,执行中,2,已完成
            total: 0,
            isShow: false, //是否上滑
            mapHeight: '40vh',
            onFirst: true,
            remarkTxt: '', //备注信息
            currentIndex: 0, //详情列表下标(待执行)
            completeList: [],
            currentTo: 0, //当前选项下标
            pageNo: 1, //页码
            pageSize: 20, //条数
            noMore: false,
            MobileContainer: window['mobile-lib'].MobileContainer, //手机容器
            mobileContainer: null,
            pointList: [], //标记点
        }
    },
    filters: {
        toTypeFn: function (type) {
            if (type) {
                return type == 1 ? '周期性保养' : type == 2 ? '绿化' : '其他';
            } else {
                return '--';
            }
        }
    },
    methods: {
        //初始化地图
        initMapFn: function () {
            let _that = this;
            this.mobileContainer = new this.MobileContainer({
                serverUrl: config.urls.serverDomain,
                options: {
                    minZoom: 10
                },
                style: 'color'
            });
            //打标记点
            _that.showPointsFn();
        },
        checkComplete: function (guid) {
            app.openPage("./complete.html", {
                titleNView: {
                    titleText: '排水养护',
                    autoBackButton: true,
                }
            }, { menuAuth: guid });
        },
        //展开
        openFn() {
            //展开
            if (!this.isShow) {
                this.mapHeight = '80vh';
                this.initMapFn();
            } else { //收起
                this.mapHeight = '40vh';
                this.initMapFn();
            }
            this.onFirst = false;
            this.isShow = !this.isShow;
        },
        getData: function () {
            app.showLoader();
            var url = config.urls.baseUrl + 'ft-device/maintain/tasks/task_list';
            var param = {
                column: 'createTime',
                order: 'desc',
                field: 'id___logNo_planWorkName_maintenanceTypeSub_maintainUnitName_inputName_beginTime_endTime_createTime_action',
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                status: this.planState
            };
            let _that = this;
            $.ajax(url, {
                data: param,
                dataType: 'json', //服务器返回json格式数据
                type: 'get', //HTTP请求类型
                headers: {
                    "X-Access-Token": app.sessionId(),
                },
                timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
                success: function (data) {
                    app.hideLoader();
                    console.log(JSON.stringify(data));
                    if (data.code == 200 && data.result) {
                        let tempList = [];
                        //数据处理
                        tempList = _that.dataList.concat(_that.addTake(data.result.records));
                        _that.dataList = tempList;
                        if (_that.pageNo > 1) {
                            mui('#scroll1').pullRefresh().endPullupToRefresh(); //重置上拉加载
                        }
                        if (_that.pageNo == 1 && data.result.records.length == 0) {
                            mui.toast('暂无数据');
                            _that.noMore = true;
                        }
                        _that.total = data.result.total;
                    }
                },
                error: function (xhr, type, errorThrown) {
                    app.hideLoader();
                    mui.toast('登录过期,获取数据失败');
                    console.log('网络错误' + app.sessionId());
                }
            });
        },
        //添加take
        addTake: function (list) {
            if (list instanceof Array && list.length) {
                list.forEach(function (item, index) {
                    item.take = 1;
                });
                // console.log(JSON.stringify(list));
                return list;
            } else {
                return [];
            }
        },

        //操作按钮
        takeFn: function (index, takeId) {
            this.currentTo = index;
            if (takeId == 1) {
                this.toStartFn(index);
            } else {
                //参数，一个列表的所有信息，包括详情列表，加入图片id和备注（非必填）
                let param = this.dataList[index];
                let objList = param.objList;
                let isAll = true;
                if (!objList.length) {
                    this.popId = 2;
                    return;
                }
                objList.forEach(function (element, index) {
                    console.log(element.attachment);
                    if (element.attachment == null || element.strAttachment == null) {
                        isAll = false;
                    }
                });
                if (!isAll) {
                    this.popId = 2;
                    return;
                }
                this.popId = 1;
            }
        },
        //点击提交确定
        takeYes: function () {
            this.popId = 4;
            this.completeFn(this.currentTo);
        },
        //开始执行
        toStartFn: function (index) {
            app.showLoader();
            //开始执行，请求列表
            var url = config.urls.baseUrl + 'ft-device/maintain/tasks/task_details';
            var param = {
                guid: this.dataList[index].guid
            };
            let _that = this;
            $.ajax(url, {
                data: param,
                dataType: 'json', //服务器返回json格式数据
                type: 'get', //HTTP请求类型
                headers: {
                    "X-Access-Token": app.sessionId(),
                },
                success: function (data) {
                    app.hideLoader();
                    // console.log('详情数据' + JSON.stringify(data));
                    if (data.code == 200 && data.result) {
                        // console.log(JSON.stringify(data.result.objList));
                        _that.dataList[index].objList = data.result.objList;
                        _that.dataList[index].take = 2;
                        //获取经纬度
                        let objList = data.result.objList;
                        let markList = [];
                        for (let i = 0; i < objList.length; i++) {
                            let _json = {
                                position: [objList[i].smx, objList[i].smy],
                                color: 'url(../../../img/map/mark_c.png) no-repeat',
                                properties: {
                                    name: objList[i].maintObjName
                                }
                            }
                            markList.push(_json);
                            // _that.mobileContainer.markAddress(objList[i].smx, objList[i].smy);
                        }
                        _that.pointList = markList;
                        //打标点点
                        _that.showPointsFn();
                    }
                },
                error: function (xhr, type, errorThrown) {
                    app.hideLoader();
                    console.log('执行失败' + app.sessionId());
                }
            })
        },
        //显示点
        showPointsFn: function () {
            if (this.pointList.length) {
                this.mobileContainer.showPoints(this.pointList, true);
            }
        },
        //上传图片
        uploadFn: function (dIndex, index) {
            let _that = this;
            plusSelectImage(function (data, path) {
                app.toast(data.message);
                console.log(JSON.stringify(data));
                if (!data.result) {
                    // app.toast(data.message);
                    return;
                }
                let groupId = _that.uuid();

                _that.dataList[dIndex].objList[index].attachment = groupId;
                _that.dataList[dIndex].objList[index].id = _that.dataList[dIndex].objList[index].guid;
                _that.dataList[dIndex].inputeName = data.result.uploadFile.uploadUser; //操作人
                _that.dataList[dIndex].inputeTime = '2021-06-30'; //操作人
                _that.dataList[dIndex].objList[index].strAttachment = JSON.stringify([
                    {
                        groupId: groupId,
                        fileTokens: data.result.fileTokens,
                        fieldName: 'attacthment',
                        tableName: 'maint_log_detail'
                    }
                ]);
            });
        },
        //添加备注
        addRemark: function (dIndex, index, txt) {
            this.popId = 3; //显示添加备注弹窗
            this.currentIndex = index; //详情列表下标
            this.dIndex = dIndex; //数据列表下标
            this.remarkTxt = txt;
        },
        //取消
        cancelFn: function () {
            this.popId = 4;
        },
        //保存备注
        saveRemarkFn: function () {
            this.popId = 4;
            this.dataList[this.dIndex].objList[this.currentIndex].remark = this.remarkTxt;
        },
        //一键完成
        completeFn: function (index) {
            let param = this.dataList[index];
            param.status = '2';
            app.showLoader();
            //点击完成
            var url = config.urls.baseUrl + 'ft-device/maintain/tasks/task_deal_with';

            // console.log('参数:' + JSON.stringify(param));
            let _that = this;
            $.ajax(url, {
                data: JSON.stringify(param),
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                headers: {
                    "X-Access-Token": app.sessionId(),
                    "Content-Type": "application/json;charset=UTF-8"
                },
                success: function (data) {
                    app.hideLoader();
                    // console.log(JSON.stringify(data));
                    if (data.code == 200) {
                        //删除从列表移除这条数据
                        _that.dataList.splice(index, 1);
                        _that.total -= 1;
                    }
                },
                error: function (xhr, type, errorThrown) {
                    app.hideLoader();
                    console.log('执行失败' + app.sessionId());
                }
            })
        },
        //生成uuid
        uuid: function () {
            var s = []
            var hexDigits = '0123456789abcdef'
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
            }
            s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
            // s[8] = s[13] = s[18] = s[23] = "-";
            s[8] = s[13] = s[18] = s[23] = ''
            var uuid = s.join('')
            return uuid;
        },
        //切换
        changeItem: function (index) {
            this.planState = index;
            this.dataList = [];
            this.pageNo = 1;
            this.noMore = false;
            this.total = 0;
            mui('#scroll1').pullRefresh().refresh(true); //重置上拉加载
            this.getData();
            mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 0);
        },
        //滚动监听-加载
        srollAdd: function () {
            let _that = this;
            mui('#scroll1').pullRefresh({
                up: {
                    height: 50,
                    callback: function () {
                        console.log('pageNo:' + _that.pageNo);
                        if (_that.pageNo * _that.pageSize >= _that.total) {
                            _that.noMore = true;
                            // mui('#scroll1').pullRefresh().endPullupToRefresh(true);
                            mui('#scroll1').pullRefresh().disablePullupToRefresh();
                        } else {
                            _that.pageNo++;
                            _that.getData();
                        }
                    }
                }
            });
        }
    },
    created: function () {
        let _that = this;
        mui.plusReady(function () {
            _that.getData();
        })
    },
    mounted: function () {
        //移除
        document.querySelector('#mui-content').classList.remove('hide');

        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.1,
            indicators: false
        });
        //地图渲染
        this.initMapFn();
        //初始化滚动加载
        this.srollAdd();
    }
});
mui.init();