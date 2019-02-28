$("button").click(function(){
    var year=parseInt($(".year").val());  
    var name=$(".name").val();
    var interests=parseInt($(".int").val());
    var fin= 3000 - year;
    var fin2 = fin * interests;
    
    $(".str1").text(name);
    $(".str2").text(fin2);
    
    $("body").css("background-image","radial-gradient(peachpuff,gainsboro,mistyrose");
    $("p").css("color","darkslateblue");
}); 