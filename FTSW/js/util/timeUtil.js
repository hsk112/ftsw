//计算两个时间相差 x天 x时 x分
var DateDifference =function(faultDate,completeTime){

    var stime =new Date(faultDate).getTime();
    var etime = new Date(completeTime).getTime();
    var usedTime = etime - stime;  //两个时间戳相差的毫秒数
    var days=Math.floor(usedTime/(24*3600*1000));
    //计算出小时数
    var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));
    var time = days + "天"+hours+"时"+minutes+"分";
	var min = hours+" 小时 "+minutes+" 分" 
    // console.log('time',time)
    // var time = days;
	//会议这块默认同一天内，就不用天了
    return min;
}