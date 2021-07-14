
// 隐藏或显示某功能 ，修改 此navdict、跳转地址、标题 ；key是中文拼音首字母
var navdict = {
    'qxgl':'缺陷管理',
    'psxq':'排水小区',
    'pshgl':'排水户管理',
    'cjyb':'抽检月报',
    'xxcx':'信息查询',
    'sbjc':'水保检查',
    'gcjg':'工程建管',
    // 'jsdgl':'积水点管理',
    'zbgl':'值班管理',
    'yhgl':'养护管理',
   // 'ywjd':'运维监督',
    'zajg':'质安监管',
    'ywcc':'运维抽查',
    'kpi':'KPI考核',
    'psxj':'排水巡检',
    'gdgl':'工单管理',
    'sjgl':'事件管理'
}
// 跳转地址 - 这空提示：功能开发中
var navdicturls = {
    'qxgl':'view/defects/qx_manage_list_v2.html', //'缺陷管理',
    'psxq':'view/psxq/index.html', //'排水小区',
    'pshgl':'view/ps/index.html', //'排水户管理',
    'cjyb':'view/monthlyReport/index.html', //'抽检月报',
    'xxcx':'view/searchInfo/index.html', //'信息查询',
    'sbjc':'view/conservation/projectList.html', //'水保检查',
    'gcjg':'view/engineering/projectList2.html', //'工程建管',
    // 'jsdgl':'', //'积水点管理',
    'zbgl':'view/schedulingManage/schedulingPlan.html', //'值班管理',
    'yhgl':'view/maintenance/cycle/cycle_index.html', //'养护管理',
    'ywjd':'', //'运维监督',
    'zajg':'view/qualityControl/dailyControl/index.html', //'质安监管',
    'ywcc':'view/operationInspection/inspection.html', //'运维抽查',
    'kpi':'view/kpi/kpi_index.html', //KPI考核',
    'psxj':'view/inspection/inspection.html', //'排水巡检',
    'gdgl':'view/workorder/workorder.html', //'工单管理',
    'sjgl':'view/incident/index.html' //'事件管理'
}
// 跳转的标题
var navdicturltitles = {
    'qxgl':'缺陷管理列表',
    'psxq':'排水小区',
    'pshgl':'排水户管理',
    'cjyb':'抽检月报',
    'xxcx':'项目列表', //'信息查询',
    'sbjc':'水保检查',
    'gcjg':'工程建管',
    // 'jsdgl':'积水点管理',
    'zbgl':'值班管理',
    'yhgl':'周期养护',
    'ywjd':'运维监督',
    'zajg':'质安监管',
    'ywcc':'运维抽查',
    'kpi':'KPI考核',
    'psxj':'', // '排水巡检',
    'gdgl':'工单管理',
    'sjgl':'事件管理'
}
// var navnames = ['缺陷管理','排水小区','排水户管理','抽检月报','信息查询',
//     '水保检查','工程建管','积水点管理','值班管理','养护管理','运维监督',
//     '质安监管','运维抽查','KPI考核','排水巡检','工单管理','事件管理'];
// var navids = ['qxgl','psxq','pshgl','cjyb','xxcx',
//     'sbjc','gcjg','jsdgl','zbgl','yhgl','ywjd',
//     'zajg','ywcc','kpi','psxj','gdgl','sjgl',];
var navlists = []
function navarrfor() {
    var tmparr = [];
    var i = 1;
    for(var key in navdict) {
        var navitem = {
            name:navdict[key],
            id:key,
            active:false,
            index: i,//展示顺序
        }
        tmparr.push(navitem)
        i = i + 1;
    }
    navlists = tmparr;
   // console.log('navlists:' + JSON.stringify(navlists))
}
navarrfor()

var config = {
    urls: {
        // 测试服域名1
        domain: 'https://zhswtest.hdec.com',

        // 正式服域名1
        // domain: 'https://zhsw.hdec.com',

        //地图测试2
        serverDomain:'https://zhswtest.hdec.com',
        //地图正式2
        // serverDomain:'http://zhswiserver.hdec.com',

        // 测试服3 --原测试地址
        baseUrl: 'https://zhswtest.hdec.com/ecidi-cmp/',
          // baseUrl: 'http://192.168.1.132:9000/ecidi-cmp/',
        // baseUrl:'http://192.168.0.36:9000/ecidi-cmp/',
        // 正式服3
        // baseUrl: 'http://zhswapp.hdec.com:9000/ecidi-cmp/',

        //陈博搭建 -- 测试地址
        // baseUrl:'http://172.23.244.32/proc/',
        updateUrl:'http://cwh.free.idcfengye.com/FTSW/unpackage/release/',

        //外部签到用的
        // 测试环境：
        // web:'https://zhswtest.ecidi.com/',
        // 预发布环境：
        // web:'https://zhsw.ecidi.com/',
        // 正式环境：
        web:'https://zhsw.szft.gov.cn/',
        //ljh本地
        // web:'http://192.168.0.35:3000/',
        //测试ip
        // web:'http://172.23.244.32:8888/',

        // baseUrl: 'http://172.23.244.37:8080/',
        //本地测试参数
        //baseUrl:'http://172.23.244.37:8082/',
        // tempToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjEyMjIyOTMsInVzZXJuYW1lIjoibGluX3lyIn0.yznjiEp1IJh9QEcjfanJawJp5Hk7SBsnqo9Q_tC7woo'
    },
    actions: {
    	add3:'ft-wo/formbasenew/formBaseNew/exportXls',
    	add2:'ft-prjManage/flowablePm/process/taskComment',
      	add1:'ft-wo/formbasenew/formBaseNew/add',
      	add4:'ft-wo/formbasenew/formBaseNew/edit',

        getciphertext:'sys/getciphertext',//获取sm2公钥
        loginEncry:'sys/loginEncry',//加密登录
        needImage:'sys/needImage',//登录是否需要验证码
        login:'sys/login',//登录
        code:'sys/randomImage',//获取验证码
        updatePwd:'sys/user/updatePassword',//修改密码
        upImage: 'file/uploadFile/add',//图片上传
        getDept:'sysdepart/sysDepart/queryTreeList',//获取系统部门
        getUserByDeptId:'sys/user/userListWithDepartName',//根据部门Id获取部门人员
        getUnit: 'sys/corporation/treeList',//获取单位架构
        tasks:'flowable/tasks/list',//代办任务
        delegate:'flowable/task/delegate',//委托

        getDictItems:'sys/dict/getDictItems',//获取枚举
        getCategoryTree:"sys/category/queryTree",//获取参数树结构
        getJD:'ft-device/pull/down/listAdBase',//获取街道列表、获取社区列表
        getYWDW:'sys/corporation/treeList',//获取运维单位
        getSSLY:'ft-device/pull/down/listAttBasBase',//获取所属流域
        getSSSS:'sysdepart/sysDepart/listByPid?pid=100000004&departType=sws',//所属水所
        getDL:'ft-device/pull/down/listRoad',//道路
        getPsh:'ft-device/ps/discharger/list',//获取排水户
        getXQ:'ft-device/reArea/list',//获取小区
        getXQById:'ft-new-device/reArea/queryByGuid',//获取小区By guid
        getXQByStreet:'ft-new-device/reArea/query/byStreet',//获取小区byStreetId
        getTreatmentByGuid:'ft-new-device/treatment/queryByGuid',//通过guid查询构筑物
        getManholeByGuid: 'ft-new-device/manhole/queryByGuid' ,//通过guid查询检查井
        getManholesByGuid: 'ft-new-device/manhole/list',//通过guid查询检查井列表
        getLineByGuid: 'ft-new-device/line/queryByGuid',//通过guid查询管道
        getLinesByGuid: 'ft-device/line/list',//通过guid查询管道列表
        getApprovalPerson: 'sys/user/userListWithDepartName',//审批人列表



        //缺陷
        addQx:'ft-new-device/monitor/bug/add',//缺陷添加
        // getQxdesc:'ft-device/monitor/bugEnum/query/All',//获取缺陷（枚举）
        getDiscover:'sys/PerBase/selectPerBase',//获取发现人/负责任人
        getQx:'ft-new-device/monitor/bug/query/list',//缺陷信息分页查询
        getQxById:'ft-new-device/monitor/bug/queryByGuid',//根据guid获取缺陷信息
        //getQxType:'ft-new-device/monitor/bugEnum/query/bugType',//根据objectType获取缺陷类型
        getQxType:'sys/category/queryTree',//根据objectType获取缺陷类型
        getInspectDeviceType: 'ft-inspect/inspect/model/query/getObejects',// 设施类型，如检查井、雨水口等
        delQx:'ft-new-device/monitor/bug/delete',//删除缺陷
        editQx:'ft-new-device/monitor/bug/edit',//编辑缺陷

        //排水户【新排水户用ps目录下的页面】
        addPSH:'ft-device/flowablePm/action',//新增排水户
        editPSH:'ft-device/ps/discharger/edit',//编辑排水户
        checkPSH:'ft-device/ps/discharger/check',//检测小区是否已经登记
        psXq:'ft-device/pull/down/listAllReArea',//排水小区
        queryByGuid:'ft-device/ps/discharger/queryByGuid',//获取排水户信息(只能查询一个)
        getPshByGUIDS:'ft-device/ps/discharger/listByGuid',//根据guid，返回一组排水户
        getPshConn:'ft-device/ps/discharger/listConn',//根据id，获取排口信息
        getPshByParentId:'ft-device/ps/discharger/list',//parentId 查找关联排水户、上级排水户

        queryPhoto:'file/cmpFileGroup/findFilesByGroupId', //图片查询
        bizLicenseOCR:'ft-device/ps/discharger/bizLicenseOCR',//营业执照识别
        generalBasicOCR:'ft-device/ps/discharger/generalBasicOCR',//通用图片识别

        //巡检
        inspectTaskQueryList:'ft-inspect/inspect/task/query/list',
        getInspectTaskQueryList:'ft-inspect/inspect/task/query/list',//分页巡检任务列表查询
        // 单个巡检 - 检查修改 - 确认提交
        saveInspectDetailBatch:'ft-inspect/inspect/detail/saveInspectDetailBatch',
        getInspectTaskList:'ft-inspect/inspect/task/query/list',//分页巡检任务列表查询
        getSelectLine:'ft-inspect/inspect/line/query/list',
        // 巡检列表展开时的详情接口
        inspectDetailQueryList:'ft-inspect/inspect/detail/query/list',
        InspectqueryByGuid:'ft-inspect/inspect/task/queryByGuid',

        inspectstart:'ft-inspect/inspect/task/start',//巡检任务开始
        inspectrepeat:'ft-inspect/inspect/task/repeat',//巡检任务转发
        inspectend:'ft-inspect/inspect/task/end',//巡检任务结束

        queryGps:'ft-inspect/inspect/gps/list',//获取巡检轨迹
        sendGps:'ft-inspect/inspect/gps/add',//添加巡检轨迹
        recordNfc:'ft-inspect/inspect/task/nfc',//记录巡检NFC扫描记录
        // /ecidi-cmp/ft-inspect/inspect/model/query/getObjectObejects
        tmpInspectTaskObjectType:'ft-inspect/inspect/model/query/getObjectObejects',// 临时巡检-新增对象-对象类型
        // 获取对象类型内容接口ecidi-cmp/ft-inspect/inspect/content/query/list
        tmpInspectTaskObjectContentList:'ft-inspect/inspect/content/query/list',// 临时巡检-新增对象-对象类型的contentList
        tmpInspectTaskObjectNumberList:'ft-inspect/inspect/object/infrastructure/list',// 临时巡检-新增对象-对象编号

        inspectTaskCreate: 'ft-inspect/inspect/task/create', // 新增临时巡检

        //通讯录
        getMailList:'ft-inspect/mailList/mailList/list',//通讯录-分页列表查询

        //混接点
        delMix:'ft-new-device/monitor/mixing/edit',//通过guid删除混接点
        getMixDetail:'ft-new-device/monitor/mixing/query/One',//通过guid查询混接点
        getXQ:'ft-device/reArea/queryByGuid',//获取小区By guid
        getStreet:'ft-device/adBase/queryByGuid',//获取街道
        getHT:'ft-wo/formbase/formBase/list',//获取历史工单
        getTaskDet:'ft-wo/formbase/formBase/queryByGuid',//获取工单详情
        getMixingList:'ft-new-device/monitor/mixing/list',//分页列表查询
        getMixingListByPage:'ft-new-device/monitor/mixing/query/list',//混接点分页查询
        getMixingListByGroup:'ft-new-device/monitor/mixing/query/group',//混接点分组统计查询
        getMixingGis:'ft-new-device/monitor/mixing/query/gis',//混接点gis查询
        getMixingStatistics:'ft-new-device/monitor/mixing/query/statistics',//混接点统计查询
        getMxingByGuid:'ft-new-device/monitor/mixing/queryByGuid',//通过guid查询
        addMixing:'ft-new-device/monitor/mixing/add',//添加
        editMixing:'ft-new-device/monitor/mixing/edit',//编辑
        deleteMixing:'ft-new-device/monitor/mixing/delete',//通过guid删除
        getMixingBatchByGuids:'ft-new-device/monitor/mixing/query/batch',//根据guid批量获取混接点
        downloadFileById:'file/uploadFile/downloadFileById',//根据id下载文件
        queryNumber:"ft-new-device/monitor/coze/queryNumber",
        queryDegreeCount:"ft-new-device/monitor/mixing/countDischargerType",//获取混接点程度数量

        //检查井
        getManholeInfo:'ft-device/manhole/queryByGuid',//通过guid查询

        //小区档案
        findFilesByGroupId:'file/cmpFileGroup/findFilesByGroupId',
        sign:'ft-device/arch/main/sign',
        tree:'ft-device/area/arch/tree',
        drainageDistrictFiledownload:'ft-device/drainageDistrictFile/download',
        archlist:'ft-device/arch/main/getList',
        addNode:'ft-device/area/arch/add',
        editNode:'ft-device/area/arch/edit',
        delNode:'ft-device/area/arch/delete',
        archive:'ft-device/arch/main/archive',

        //养护
        maintainTaskList:'ft-device/maintain/tasks/getList',
        maintainStart:'ft-device/maintain/tasks/updateStatus',
        queryMaintainByGuid:'ft-device/maintenancePackage/maintenancePackage/queryPackageObjByGuid',//queryPackageObjByGuid
        maintainDetail:'ft-device/maintenancePackage/maintenancePackage/listAllPackage',
        commitTask:'ft-device/maintain/log/handleEdit',//修改养护对象状态

        //水土保持
        // conversationList:'ft-emergency/projectlist/projectList/list1',//新开工的项目列表
        conversationList:'ft-emergency/projectlist/projectList/queryPageList',//新开工的项目列表
       // addProject:'ft-emergency/projectlist/projectList/addData',//新增项目
        addProject:'ft-emergency/projectlist/projectList/add',//新增项目
        projectCount:'ft-emergency/projectlist/projectList/prjStatus',
        getProjectList:'ft-emergency/projectlist/projectList/getList?_t=1605234262',//获取项目名称
        addReform:'ft-emergency/conservation/wsConservationFile/add',//新增整改文件

        addScene:'ft-emergency/wsconservation/supervise/addData',//新增现场检查记录
        editScene:'ft-emergency/wsconservation/supervise/editData',//修改现场检查记录

        getSceneList:'ft-emergency/wsconservation/supervise/list',//获取现场检查记录、整改文件记录
        getSignFileMap:'ft-emergency/wsconservation/supervise/getSignFileMap',//获取现场检查记录文件
        getFileForm:'ft-emergency/conservation/wsConservationFile/getFileForm',//查看整改文件
        queryWs:'ft-emergency/conservation/wsConservationFile/queryWsConservationFileDetailByMainGuid',//查询签收人员
        uploadSignFile: 'ft-emergency/wsconservation/supervise/uploadFile',//上传签字文件
        previewPdf:'ft-emergency/wsconservation/supervise/previewWord',

        //巡检抽查
        supervisionQueryList:'ft-inspect/inspect/task/query/list', //抽查任务查询接口
        queryFacilityList:'ft-inspect/inspect/input/query/list', //查询巡检设施
        addBatch:'ft-inspect/inspect/input/add/batch',//抽查、添加巡检设施
        delBatch:'ft-inspect/inspect/input/deleteBatch',//删除巡检设施
        addBug:'ft-new-device/monitor/bug/add',//新增缺陷
        monthReport:'ft-inspect/inspect/line/previewPdf/monthlyReport', // 月报

        /**************工程建管*********************/
        //项目概览
        getPrjInfoList:'ft-prjManage/prjInformation/getPrjInfoStage',//获取项目列表
        getPrjInfoBySysRole:'sys/roleProject/getPrjInfoBySysRole',//根据用户判断是否为项目级/平台级用户并获取对应项目
        getPrjInformation:'ft-prjManage/prjInformation/list1',//通过输入框模糊查询
        getMonsContractPaymentInfo:'ft-prjManage/contractpaymentapply/contractPaymentApply/getMonsContractPaymentInfo',//获取单个项目金额情况
        selectProject:'ft-prjManage/prjInformation/selectProject',//进入项目时请求并过滤掉其他项目 参数为prjCode
        exitProject:'ft-prjManage/prjInformation/exitProject',//退出项目时请求并恢复所有项目 无参数
        getProjectQualityResult:'ft-prjManage/projectqualityrectify/projectQualityRectify/getProjectQualityResult',//质量情况
        getSafetyQualityResult:'ft-prjManage/safetyrectify/safetyRectify/getSafetyQualityResult',//安全情况
        getqueryLeastPlan:'ft-prjManage/prjSchedule/projectProphasePlan/queryLeastPlan',//获取前期进度信息
        getProphaseStageInfoByPlanId:'ft-prjManage/prjSchedule/projectProphaseSchedule/getProphaseStageInfoByPlanId',//获取项目进度反馈信息
        getLeastPlanByProjectId:'ft-prjManage/prjSchedule/projectConstructPlan/getLeastPlanByProjectId',//获取施工计划信息
        getProjectPackageScheduleByPlanId:'ft-prjManage/prjSchedule/projectConstructSchedule/getProjectPackageScheduleByPlanId',//获取施工进度信息
        getProjectAttendanceInfo:'ft-prjManage/projectattendencesheet/projectAttendenceSheet/listByParam',//获取项目考勤信息
        getPrjInformationList:'ft-prjManage/prjInformation/list1', //获取所有项目
        getMonthMemoribiliaByProjectIdList: 'ft-prjManage/prjSchedule/projectMonthReport/getMonthMemoribiliaByProjectId',//获取大事件
        getListProjectMonthReport: 'ft-prjManage/prjSchedule/projectMonthReport/listProjectMonthReport',//获取项目月报
        getQueryDetailByGuid: 'ft-prjManage/prjSchedule/projectMonthReport/queryDetailByGuid',//获取某个月报详情
        // 安全教育
        getEducationRecordList:'ft-prjManage/safetyeducationrecord/safetyEducationRecord/list',//安全教育记录
        getfindFiles:'file/cmpFileGroup/findFilesByGroupId',//获取对应的附件信息
        addEducationRecord:'ft-prjManage/safetyeducationrecord/safetyEducationRecord/add',//添加安全教育记录
        // queryDailyEdu: 'ft-prjManage/safetyeducationplan/safetyEducationPlan/list', //安全教育计划（日常）
        // querySpecialEdu: 'ft-prjManage/safetyeducationrecord/safetyEducationRecord/list', //安全教育计划（专项）
        // querySEByGuid:'ft-prjManage/safetyeducationrecord/safetyEducationRecord/queryByGuid', //根据guid查询专项教育计划
        // queryDEByGuid: 'ft-prjManage/safetyeducationplan/safetyEducationPlan/queryByGuid', //根据guid查询日常教育计划
        // addDEPlan:'ft-prjManage/safetyeducationplan/safetyEducationPlan/add',//新增日常教育计划
        // addSEPlan:'ft-prjManage/safetyeducationrecord/safetyEducationRecord/add',//新增专项教育计划
        //考勤
        attendanceAdd:'ft-prjManage/projectattendencecheck/projectAttendenceCheck/add',//打卡签到
        attendanceOne:'ft-prjManage/projectattendencecheck/projectAttendenceCheck/getPersonAttendenceDetails',//获取单人考勤所有信息
        attendancelist:'ft-prjManage/projectattendencecheck/projectAttendenceCheck/getProjectAttendenceDetails',//获取考勤列表所有信息
        getLoc:'ft-prjManage/projectattendencecheck/projectAttendenceCheck/getprojectSmxAndSmy',//获取考勤项目经纬度
        getAllNeedSignInDate:'ft-prjManage/projectattendencesheet/projectAttendenceSheet/listByParam',// 获取所有需打卡日期
        //质量检查
        getDailyInspection:'ft-prjManage/projectdailyinspection/projectDailyInspection/list1',//获取日常巡检列表数据 （包含条件查询）
        getInspectionSecCheck:'ft-prjManage/projectdailyinspection/projectDailyInspection/list',//质量检查列表
        addDailyInspection:'ft-prjManage/projectdailyinspection/projectDailyInspection/add',//增加日常巡检列表数据
        getDailyQualityCheck:'ft-prjManage/projectqualitycheck/projectQualityCheck/list',//获取质量检查列表数据（包含条件查询）
        addDailyQualityCheck:'ft-prjManage/projectqualitycheck/projectQualityCheck/add',//增加质量检查
        getQualityRectify:'ft-prjManage/projectqualityrectify/projectQualityRectify/list',//质量整改列表数据（包含条件查询）
        addtQualityRectify:'ft-prjManage/flowablePm/action',//增加质量整改
        queryQualitycheckItem:'ft-prjManage/projectqualityrectify/projectQualityRectify/queryProjectQualityRectifyDetailByMainGuid',//查看质量整改检查项
        queryQualityForm:'ft-prjManage/projectqualityrectify/projectQualityRectify/queryByGuid',//查看质量整改（单一）
        //安全检查
        queryDailyCheck: 'ft-prjManage/safetydailyinspetion/safetyDailyInspetion/list1',//安全检查日常巡检列表
        querySecCheck:'ft-prjManage/safetycheck/safetyCheck/list',//安全检查列表
        queryReform:'ft-prjManage/safetyrectify/safetyRectify/list',//安全整改列表
        addSDI:'ft-prjManage/safetydailyinspetion/safetyDailyInspetion/add',//新增日常巡检(安全检查)
        addCheckForm:'ft-prjManage/safetycheck/safetyCheck/add',//新增安全检查(安全检查)
        querySDI:'ft-prjManage/safetydailyinspetion/safetyDailyInspetion/queryByGuid',//查看日常巡检(安全检查)
        queryCheckForm:'ft-prjManage/safetycheck/safetyCheck/queryByGuid',//查看安全检查(安全检查)
        querySReform:'ft-prjManage/safetyrectify/safetyRectify/queryByGuid',//查看安全整改(安全检查)
        queryCItem:'ft-prjManage/safetyrectify/safetyRectify/querySafetyRectifyDetailByMainGuid',//查看安全整改检查项
        getProjectCheckStandardTree: 'ft-prjManage/projectcheckstandard/projectCheckStandard/getProjectCheckStandardTree',//获取质量检查检查项
        getSafetyCheckStandardTree: 'ft-prjManage/safetycheckstandard/safetyCheckStandard/getSafetyCheckStandardTree',//获取安全检查检查项
        addQDI:'ft-prjManage/projectdailyinspection/projectDailyInspection/add',//新增日常巡检(质量检查)
        addQualityCheck:'ft-prjManage/projectqualitycheck/projectQualityCheck/add',//新增安全检查(安全检查)
        addSReform: 'ft-prjManage/flowablePm/action',//新增安全整改(安全检查)
        queryQDI:'ft-prjManage/projectdailyinspection/projectDailyInspection/queryByGuid',//查看日常巡检(质量检查)
        queryQualityCheck:'ft-prjManage/projectqualitycheck/projectQualityCheck/queryByGuid',//查看质量检查
        getTaskComment:'ft-prjManage/flowablePm/process/taskComment',//获取审批信息


        //进度管理
        getProjectMonthReportList:"ft-prjManage/prjSchedule/projectMonthReport/list",//获取项目月报列表
        getProjectWeekReportList:"ft-prjManage/prjSchedule/projectWeekReport/list",//获取项目周报列表
        getMonthReportDetailByGuid: 'ft-prjManage/prjSchedule/projectMonthReport/queryByGuid',//获取某个月报详情
		getWeekReportDetailByGuid: 'ft-prjManage/prjSchedule/projectMonthReport/queryByGuid',//获取某个月报详情
        //信息查询
        queryAllRiverInfo: 'ft-emergency/devicePsRiver/selectRiver', //获取河流列表
        queryAllLakeInfo: 'ft-emergency/devicePsLakes/selectLakes', //获取湖泊列表
        queryRiverById: 'ft-emergency/devicePsRiver/queryById', //通过guid获取河流详情
        queryLakeById: 'ft-emergency/devicePsLakes/findById', //通过lkCode获取湖泊详情
        queryRiverSelected:'ft-emergency/devicePsRiver/selectRiver',// 河流下拉框
        queryLakeSelected:'ft-emergency/devicePsLakes/hhDropDown',// 湖泊下拉框
        queryDirectories: 'ft-emergency/hhzDirectories/queryDirectoriesList', //河湖长名录列表
        queryMixedList: 'ft-new-device/monitor/mixing/query/list', // 混接点列表（包括检索）
        queryEmList: 'ft-emergency/whstorage/queryStorageByMaterial', //应急资源列表
        queryEmDetails: 'ft-emergency/material/queryMaterialDetail' ,// 应急资源详情
        queryAllWh:'ft-emergency/wh/queryAllWh' ,// 查找所有仓库类型
        queryMaterialByName: '/ft-emergency/material/queryMaterialByName' ,//查询物资类型及名称
        queryRanksById:'ft-emergency/ranks/queryByGuid' ,//通过guid查询抢险队伍信息
        queryRanksByType:'ft-emergency/ranks/queryEgyRanksListByType',//通过队伍类型，队伍查询队伍
        querySanksById:'ft-emergency/sanc/queryByGuid',//通过guid查询避险中心信息
        queryWhById:'ft-emergency/wh/queryWhInfo',//通过guid查询三防仓库信息
        queryHHZfuzzy: 'ft-emergency/hhzDirectories/queryDirectoriesList' ,//河湖长名录模糊查询

		getStatistic:'ft-device/ps/discharger/statistic',//排水户级别统计 全部
		countPsh:'ft-device/ps/discharger/countPsh',//排水户统计

        //项目总信息
        getProjectMap: 'ft-prjManage/prjInformation/getProjectPictureMap',

        // 会议签到
        queryMeetingListById: 'ft-prjManage/safetyconferenceinfo/safetyConferenceInfo/listProject',//项目会议列表
        addMeeting: 'ft-prjManage/safetyconferenceinfo/safetyConferenceInfo/add', //新增会议
        signIn: 'ft-prjManage/meetingattendancesheet/meetingAttendanceSheet/add',
        signOut:'meetingSign',//外部签到二维码链接
        meetSearchByName:'ft-prjManage/safetyconferenceinfo/safetyConferenceInfo/listProject',//根据名称查会议

        //质量监管
        getQualityControlAllProject:'ft-prjManage/prjInformation/list1',
        getDailyControlProject:'ft-emergency/superviseDaily/task_list',//获取日常监督项目列表

        //质安监管
        getProjectListName:"ft-emergency/zajgSuperviseRecord/querySuperviseRecordList",//获取首页项目名称列表
        getProblemList:"ft-emergency/qsProblem/qs_problem_list",//获取问题列表
        //getProblemList:"ft-emergency/qsProblem/queryByGuid",
        getRecordList:"ft-emergency/superviseDaily/task_list",//获取检查记录列表
        getRecordDetail:"ft-emergency/superviseDaily/task_detail",//获取检查记录详情
        recordModification:"ft-emergency/superviseDaily/edit",//修改检查记录
        addQuestion:"ft-emergency/qsProblem/add",//新增问题
        addRecord:"ft-emergency/superviseDaily/add",//新增检查记录
        noticeCheckResultAdd:'ft-emergency/noticeCheckResult/add',//新增结果通知
        getDownloadResult:'ft-emergency/qsmonitor/download/check_result',//下载结果通知
        getRecordDetailProblem:"ft-emergency/qsProblem/all_check_results",//获取检查记录详情里面的问题列表
        getCheckStandardList:"ft-emergency/checkStandard/dropdown",//获取标准表
        questionType:"ft-emergency/checkStandard/dropdownProblemType",//问题类型
        getPhoneByPersonName:'sys/PerBase/listPerBase',//根据选择人员获取联系方式
        
        getPhoneById:'ft/emergencyFacilityDispatch/queryByRefId',
        //工作台
        getMissionUncompletedListAllProject:'flowable/tasks/list',// 任务待办列表
        getProcessTraceListAllProject:'flowable/process/list',// 流程跟踪列表
        getSearchFormListAllProject:'flowable/form/list',// 表单查询列表
        setMissionDelegation:'flowable/task/delegate',// 委托
        getMissionUncompletedDetail:'ft-prjManage/projectContractInfo/getProjectInfo',//待办任务详情
        getMissionUncompletedProcess:'ft-prjManage/flowable/tasks/form',//待办任务流程
        getMissionSafetyCheckItem:'ft-prjManage/safetyrectify/safetyRectify/querySafetyRectifyDetailByMainGuid',//待办任务安全整改检查项
        getMissionQualityCheckItem:'ft-prjManage/projectqualityrectify/projectQualityRectify/queryProjectQualityRectifyDetailByMainGuid',//待办任务质量整改检查项
        getMissionAllSafetyCheckItem:'ft-prjManage/safetycheck/safetyCheck/list',// 获取所有安全检查项
        getMissionAllQualityCheckItem:'ft-prjManage/projectqualitycheck/projectQualityCheck/list',//获取所有质量检查项
        getMissionApprovalProcess:'ft-prjManage/flowablePm/process/taskComment',//获取审批流程
        getMissionBaseFormDetail:'ft-wo/formbasenew/formBaseNew/queryByGuid',//获取通用表单
        getMissionNormalFormItem:'ft-wo/formbasenew/formBaseNew/getSubTableList',//获取通用子工单
        getProblemType:'redisDict/get/',// 问题类型
        getDeviceType:'ft-inspect/inspect/model/query/getDevice',//设施类型
        getCorrelationForm:'ft-wo/formbasenew/formBaseNew/list',// 相关工单
        submitSafetyCheck:'ft-prjManage/flowablePm/action',//提交整改
        //派发子工单
        addSellSubWorkOrder:'ft-wo/flowablePm/action',
        // eidtFormBaseOrder:'ft-wo/formbasenew/formBaseNew/edit',
        fqgd:'ft-wo/flowablePm/action',//发起工单
        //通知公告
        getNotificationListAllProject:'ft-public/public/case/queryCaseList',// 通知公告
        getNotificationDetailProject:'ft-public/public/case/queryCaseDetail',//公告详情
        getNotificationAttachment:'file/cmpFileGroup/findFilesByGroupId',//公告附件

        addNotificationFavorites:'ft-public/public/favorites/add',//收藏通知公告
        deleteNotificationFavorites:'ft-public/public/favorites/delete_list_batch',//通知公告-取消收藏
        deleteFavorites:'ft-public/public/favorites/delete_batch',//收藏列表-取消收藏

        getFavoritesListAllProject:'ft-public/public/favorites/favorites_list',// 收藏列表
       // getAddressBookListAllProject:'sysdepart/sysDepart/queryTreeList',// 通讯录列表
        //getAddressBookDetailProject:'sys/PerBase/listPerBase',// 通讯录人员结构
       // https://zhswtest.hdec.com/ecidi-cmp/sys/corporation/listAll?_t=1617182028

        // getAddressBookListAllProject:'sys/PerBase/listPerBase',// 通讯录人员结构
        getAddressBookListAllProject:'sys/PerBase/getAllPerBase',// 通讯录人员结构
        // getAddressBookDetailProject:'sys/PerBase/listPerBase',// 通讯录人员明细一样
        getAddressBookDetailProject:'sys/PerBase/queryById',// 通讯录人员明细

        //值班管理
        getSchedulingPlan:'ft-new-device/floodduty/dutyPlan/list',//值班计划、我的值班
        schedulingSignIn:'ft-new-device/floodduty/dutyPlan/edit',//签到
        addSchedulingDutyRecord:'ft-new-device/floodduty/dutyRecordDetail/add',//添加值班记录

        getdbrwlist:'ft-public/public/case/queryCaseList',// 首页待办任务
        getgzdtlist:'ft-public/public/case/queryCaseList',// 首页工作动态
        getMessageList:'system/sysAnnouncementSend/getMyAnnouncementSend',// 首页消息通知
        setMessageRead:'system/sysAnnouncementSend/editByAnntIdAndUserId',//首页通知已读回执

        //标准规范和政策法规
        getStandardList:'ft-wo/docInfo/docInfo/listByParam',//标准规范和政企法规文档

        //排水小区
        reaAreaView : "/ft-device/reArea/view", //getDangAn
        getAttachment : "ft-device/reArea/getAttachment", //获取文档
        getReAreaInfo : 'ft-device/reArea/getReAreaInfo', //设备排水户
        reAreaList: '/ft-device/reArea/list',
        listExpandInfo : '/ft-device/ps/area/listExpandInfo', //拓展信息

        // 事件管理
        gettjevent:'ft-new-device/monitor/event/add',//添加 add 新增事件 post
        editEvent:'ft-new-device/monitor/event/edit',//编辑事件
        getsjkist:'ft-new-device/monitor/event/query/list', //事件分页查询 get
        jj:'ft-new-device/monitor/event/queryByGuid',//guid   get查询
        ll:'ft-wo/formbasenew/formBaseNew/list',
        gatDeviceType:'ft-inspect/inspect/model/query/getDevice',//获取设施类型


        //首页地图设备信息
        getWaterGateInfo: 'ft-new-device/watergate/queryByGuid', //获取水闸信息
        getWhInfo: 'ft-emergency/wh/queryWhInfo',//获取仓库信息
        getOutFallInfo: 'ft-new-device/outfall/queryByGuid',//获取排放口信息
        getFloodInfo: 'ft-new-device/monitor/flood/queryByGuid', //获取积水风险
        getProcessLineDate: 'ft-new-device/monitor/processLine',//获取监测数据信息
        getPumpInfo:'ft-new-device/pump/queryByGuid',//泵站
        getSewtfInfo: 'ft-new-device/sewtf/queryByGuid' //污水水厂






    },
    settings: {
        requestTimeOut: 10000,
    },
    navlist: navlists,
    navdicturl: navdicturls,
    navdicturltitle: navdicturltitles,
    oldnavlistnotuse:[
        {
            name:'缺陷管理',
            id:'qxgl',
            active:false,
            index:1,//展示顺序
        },
        {
            name:'排水小区',
            id:'psxq',
            active:false,
            index:2,
        },
        {
            name:'排水户管理',
            id:'pshgl',
            active:false,
            index:3,
        },
        {
            name:'抽检月报',
            id:'cjyb',
            active:false,
            index:4,
        },
        {
            name:'信息查询',
            id:'xxcx',
            active:false,
            index:5,
        },
        {
            name:'水保检查',
            id:'sbjc',
            active:false,
            index:6,
        },
        {
            name:'工程监管',
            id:'gcjg',
            active:false,
            index:7,
        },
        {
            name:'积水点管理',
            id:'jsdgl',
            active:false,
            index:8,
        },
        {
            name:'值班管理',
            id:'zbgl',
            active:false,
            index:9,
        },
        {
            name:'养护管理',
            id:'yhgl',
            active:false,
            index:10,
        },
        {
            name:'运维监督',
            id:'ywjd',
            active:false,
            index:11,
        },
        {
            name:'质安监管',
            id:'zajg',
            active:false,
            index:12,
        },
        {
            name:'运维抽查', // 以前是 运维考核
            id:'ywcc', // ywkh
            active:false,
            index:13,
        },
        {
            name:'KPI考核',
            id:'kpi',
            active:false,
            index:14,
        },
        { // HuangShiHui 2021-05-06添加 ,图片名称是id.png
            name:'排水巡检',
            id:'psxj',
            active:false,
            index:15,
        },
        { // HuangShiHui 2021-05-27添加 ,图片名称是id.png
            name:'工单管理',
            id:'gdgl',
            active:false,
            index:16,
        },
        { // HuangShiHui 2021-05-28添加 ,图片名称是id.png
            name:'事件管理',
            id:'sjgl',
            active:false,
            index:17,
        }

    ]
};


//打包证书
// keyAlias 'key0'
// keyPassword '123456'
