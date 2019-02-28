

var currentcontent="#home";

$(".nav-item").click(function(){
    let link=$(this).attr("href");
    let classes=$(this).attr("class");
    classes=classes.split(" ");
    if (classes[classes.length-1]!=="active")
    {
        hideContent(currentcontent);
        $(this).addClass("active");
        displayContent(link);
        currentcontent=link;
    }
});


function displayContent(id){
    $(id).addClass('active');
    $(id).css({
        'z-index':'10'
    })
   
}
function hideContent(id){
    $(id).removeClass("active");
    $(".nav-item.active").removeClass("active");
    $(id).css({
        'z-index':'-1'
    })
}