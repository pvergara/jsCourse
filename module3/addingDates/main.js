var today = new Date();
var jan1st2000 = new Date(2000,0,1);


jan1st2000.setDate(jan1st2000.getDate() + 10);

console.log("Jan 1st of 20000 + 10 days are: {0}".format(jan1st2000));

console.log("Jan 1st of 20000 - today in milliseconds are: {0}".format(today-jan1st2000));

jan1st2000 = new Date(2000,0,1);
jan1st2000.setTime(jan1st2000.getTime()+(today-jan1st2000));
console.log("Jan 1st of 20000 + diference of two both dates are: {0} (obviously today)".format(jan1st2000));

