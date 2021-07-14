//***********************
//项目核心
//***********************



//项目全局变量
var GlobalKey = {
	lastPageInfo:'lastPageInfo'
}


//判断是否为空
function isEmp(objectType) {
	if (objectType == undefined || objectType == "" || objectType == null||JSON.stringify(objectType) == "{}"||objectType.length==0) {
		return true;
	} else return false;
}

