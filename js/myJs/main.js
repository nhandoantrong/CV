getElement=(id)=>
{
    return document.getElementById(id)
}

getAge=()=>
{
    var date= new Date();
    var today={day: date.getDate(),month: date.getMonth()+1,year: date.getFullYear()}
    var myBirthday={day: 17, month: 4, year : 1998}


    if (myBirthday.month>today.month)
    {
        return today.year-myBirthday.year-1;
    }
    else if (myBirthday.month=== today.month)
    {
        if (myBirthday.day>today.day)
        {
            return today.year-myBirthday.year-1
        }
        else return today.year-myBirthday.year;
    }
    else return today.year-myBirthday.year;
}

getElement('myAge').innerHTML=getAge();