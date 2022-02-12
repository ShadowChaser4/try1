
function getdate()
{
  let today = new Date();
  array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = array [today.getDay()] + ", " + today.getDate() +", " + today.getFullYear();
  return day;
}

function getday()
{
  let today = new Date();
  array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = array [today.getDay()] ;
  return day;
}


module.exports.getdate = getdate;
module.exports.getday = getday;
