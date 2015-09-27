
$(document).ready(function (){
  $(".generalNav").hide();

  $('#contactOnHome').mouseenter(function(){
      $(this).animate({borderTopColor: "#66FFCC", borderBottomColor: "#66FFCC", borderLeftColor: "#66FFCC", borderRightColor: "#66FFCC"}, 'fast');
      $(this).animate({color: "#66FFCC"}, "slow");
    });

  $('#contactOnHome').mouseleave(function(){
      $(this).animate({borderTopColor: "#DDDDDD", borderBottomColor: "#DDDDDD", borderLeftColor: "#DDDDDD", borderRightColor: "#DDDDDD"}, 'fast');
      $(this).animate({color: "#DDDDDD"}, "slow");
    });

  $('#beginPortfolio a:link').mouseenter(function(){
    $(this).animate({color: "#66FFCC"}, "fast");
  });
  $('#beginPortfolio a:link').mouseleave(function(){
    $(this).animate({color: "#DDDDDD"}, "fast");
  });

  $('#beginAbout').mouseenter(function(){
    $(this).animate({color: "#66FFCC"}, "fast");
  });
  $('#beginAbout').mouseleave(function(){
    $(this).animate({color: "#DDDDDD"}, "fast");
  });

  $('#toPortfolioContainer').mouseenter(function(){
    if (!$(this).is(':animated')){
      $(this).animate({"letter-spacing": "5px"}, 1500, "easeOutQuart")
    }
  }).mouseleave(function(){
      $(this).animate({"letter-spacing": "0"}, "fast", "easeOutQuart")
  });

  var lastScrollPos = 0;
  var navBarChange = $(window).height() * 0.15;
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > lastScrollPos){
      //scrolldown
      if (scrollPos >= navBarChange && lastScrollPos <= navBarChange){
        $('.generalNav').animate({opacity: "1.0"}, "fast");
        $(".generalNav").show();
      }
    }else{
      //scrollup
      if (scrollPos <= navBarChange && lastScrollPos >= navBarChange){
        $('.generalNav').animate({opacity: "0.0"}, "fast", function(){
          $(".generalNav").hide();
        });
      }
    }
    lastScrollPos = scrollPos;
  });

  $('#beginAbout').click(function(e){
    $("html, body").animate({
      scrollTop: $('#containerAbout').offset().top
    }, 1500, 'easeOutExpo')
  });

  $('#generalHomeNav').click(function(e){
    $("html, body").animate({
      scrollTop: 0
    }, 1500, 'easeOutExpo')
  });


});
