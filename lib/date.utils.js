function nameOfMonthOf(month){
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
}

function numberOfDaysOf(month, year)
{
    var date = new Date(year, month+1, 0);
    return date.getDate();
}
