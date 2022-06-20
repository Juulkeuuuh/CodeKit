
$(document).ready(function(){
    var count = 0;

    $("#hamb-button").click(function(){
        if (count == 0) {
            $(".nav").css("display", "block");
            count = 1;   
        } else if (count == 1){
            $(".nav").css("display", "none");
            count = 0;
        } 

    })
})

