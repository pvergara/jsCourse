function nameOfMonthOf(month){

    //Beware!!!! const appear in ES6!!!! (https://www.refly.xyz/javascript/const)
    const MONTH_LONG = "MMMM";
    return moment(new Date(0,month)).format(MONTH_LONG);
}

function numberOfDaysOf(month, year)
{
    var date = new Date(year, month+1, 0);
    return date.getDate();
}
