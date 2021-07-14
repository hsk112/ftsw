mui.init({
    swipeBack: false
});

$(function () {
    mui("#pullrefresh").on('tap', 'li', function (event) {
        this.click();
    });
});
var filesVue = new Vue({
    el: '#mui-content',
    data: function () {
        return {
            dataList: [],
            dataList2: [],
            pageNum: 1,
            pageSize: 10,
            total: 0, //总数
            switchId: 0, //切换id
            requestApi: 'ft-emergency/devicePsRiver/selectRiver'
        }
    },
    methods: {
        getDataFn: function () {
            app.showLoader();
            //湖泊档案：https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/devicePsLakes/selectLakes
            //河流档案: https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/devicePsRiver/selectRiver
            var url = config.urls.baseUrl + this.requestApi;
            var param = {
                pageSize: this.pageSize,
                pageNo: this.pageNum
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
                    if (data.success && data.result) {
                        let tempList = [];
                        //数据处理
                        if (_that.switchId == 1) {
                            tempList = _that.dataList2.concat(data.result.records);
                            _that.dataList2 = tempList;
                            // console.log('进来了' + _that.dataList2.length);
                        } else {
                            tempList = _that.dataList.concat(data.result.records);
                            _that.dataList = tempList;
                        }
                        _that.total = data.result.total;
                        if (_that.pageNum > 1) {
                            mui('#scroll1').pullRefresh().endPullupToRefresh(); //重置上拉加载
                        }
                        if (_that.pageNum == 1 && data.result.records.length == 0) {
                            mui.toast('暂无数据');
                        }
                    }
                },
                error: function (xhr, type, errorThrown) {
                    app.hideLoader();
                    mui.toast('登录过期，请重新登录');
                }
            });
        },
        //滚动监听-加载
        srollAdd: function () {
            let _that = this;
            mui('#scroll1').pullRefresh({
                up: {
                    height: 50,
                    callback: function () {
                        if (_that.pageNum * _that.pageSize >= _that.total) {
                            // _that.noMore = true;
                            mui('#scroll1').pullRefresh().endPullupToRefresh(true);
                            // mui('#scroll1').pullRefresh().disablePullupToRefresh();
                            mui.toast('暂无更多数据');
                        } else {
                            _that.pageNum++;
                            _that.getDataFn();
                        }
                    }
                }
            });
        },
        //tab切换
        changeItem: function (index) {
            this.switchId = index;
            this.requestApi = index == 0 ? 'ft-emergency/devicePsRiver/selectRiver' : 'ft-emergency/devicePsLakes/selectLakes';
            this.dataList = [];
            this.dataList2 = [];
            this.pageNum = 1;
            this.total = 0;
            mui('#scroll1').pullRefresh().refresh(true); //重置上拉加载
            this.getDataFn();
        },
        //查看详情
        checkComplete: function (index, guid) {
            var title = '河流(段)详情';
            if(index == 1) {
                title = '湖泊(水库)详情';
            }
            app.openPage("./files_detail.html", {
                titleNView: {
                    titleText: title,
                    autoBackButton: true,
                }
            }, { menuAuth: guid, isLake: index == 1 });
        },
    },
    created: function () {
        var _that = this;
        mui.plusReady(function () {
            _that.getDataFn();
        })
    },
    mounted: function () {
        mui('.mui-scroll-wrapper').scroll(
            {
                deceleration: 0.1,
                indicators: false
            }
        );
        //初始化滚动加载
        this.srollAdd();
    }
});