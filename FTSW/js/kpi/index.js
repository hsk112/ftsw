//公共函数js
// 获取选中月的每一天,这个只返回多少天
function getDay(Year,Month) {
	var DayCount;
	if (Year<1912 || Month<1)
		return null;
	switch (Month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			DayCount=31;
			break;
		case 2:
			DayCount=28;
			if (Year%4 == 0)
				DayCount=29;
			break;
		default:
			DayCount=30;
			break;
	}
	
	return DayCount;
}
// 获取选中月的每一天,这个返回具体日期
function getDaysInMonth(year, month) {
  const daysOfMonth = [];
  month = parseInt(month, 10);
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (i < 10) {
      daysOfMonth.push("0" + i+"号"); //判断是部否小于10，如果小于加0，，例如“01”
    } else {
      daysOfMonth.push(i+""+"号");
    }
  }
	// console.log("iiiiiiiiiii",JSON.stringify(daysOfMonth))
  return daysOfMonth;
}

