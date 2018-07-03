var makeDate = function() {
  var d = new Date();
  var formatDate = "";

  // Adding month 
  formatDate += (d.getMonth() + 1) + "_";
  // Adding date
  formatDate += d.getDate() + "_";
  // Adding year
  formatDate += d.getFullYear();

  return formatDate;
};

module.exports = makeDate;