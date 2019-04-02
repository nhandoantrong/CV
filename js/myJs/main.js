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


//skill progress
if($('.skills').length > 0) {

    var el = new SimpleBar($('#resume')[0]).getScrollElement();

    $(el).on('scroll', function() {

        $('.progress .progress-bar').each(function() {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();

            var progressWidth = $(this).data('progress-value') + '%';
            if (bottom_window > bottom_object) {

                $(this).css({
                    width: progressWidth
                });
                $(this).find('.progress-value').animate({
                    countNum: parseInt(progressWidth, 10)
                }, {    
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $(this).text(Math.floor(this.countNum) + '%');
                    },
                    complete: function() {
                        $(this).text(this.countNum + '%');
                    }
                });
            }
        });

    });
}
