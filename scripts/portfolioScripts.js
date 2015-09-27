
$(document).ready(function(){
  var lastClicked = null;
  var contentHeight = "60vh";
  $('#SoftwareSummaryHover').css(
    "top", function(){
      return $('#containerSoftwareSummary').offset().top;
    }
  );

  $('#DigitalMediaHover').css(
    "top", function(){
      return $('#containerDigitalMedia').offset().top;
    }
  );

  $(window).resize(function(){
    $('#SoftwareSummaryHover').css(
      "top", function(){
        return $('#containerSoftwareSummary').offset().top;
      }
    );

    $('#DigitalMediaHover').css(
      "top", function(){
        return $('#containerDigitalMedia').offset().top;
      }
    );
  });


	$('#generalPortfolioNav').click(function(e){
  	$("html, body").animate({
    		scrollTop: 0
  	}, 1500, 'easeOutExpo')
	});

	$('#SoftwareSummaryHover').mouseenter(function(){
    if (lastClicked == null || lastClicked == "Digital"){
  		$('#SoftwareSummaryHover').css("z-index", "11");
  		$('#content-portfolio-software').animate({height: "50vh"}, "fast", function(){
        $('#SoftwareSummaryHover').css("height", function(){
          return $('#containerSoftwareSummary').height();
        });
      });
  		$('#clickSoftware').animate({opacity: "1"}, "slow");
    }
	});
	$('#SoftwareSummaryHover').mouseleave(function(){
    if (lastClicked == null || lastClicked == "Digital"){
      $('#SoftwareSummaryHover').css("height", contentHeight);
  		$('#SoftwareSummaryHover').css("z-index", "10");
    	$('#content-portfolio-software').animate({height: "40vh"}, "fast");
    	$('#clickSoftware').animate({opacity: "0"}, "fast");
    }
	});


	$('#DigitalMediaHover').mouseenter(function(){
    if (lastClicked == null || lastClicked == "Software"){
  		$('#DigitalMediaHover').css("z-index", "11");
  		$('#content-portfolio-digitalmedia').animate({height: "50vh"}, "fast", function(){
        $('#DigitalMediaHover').css("height", function(){
          return $('#containerDigitalMedia').height();
        });
      });
   		$('#clickDigital').animate({opacity: "1"}, "slow");
    }
	});
	$('#DigitalMediaHover').mouseleave(function(){
    if (lastClicked == null || lastClicked == "Software"){
  		$('#DigitalMediaHover').css("height", "40vh");
  		$('#DigitalMediaHover').css("z-index", "10");
    	$('#content-portfolio-digitalmedia').animate({height: "40vh"}, "fast");
    	$('#clickDigital').animate({opacity: "0"}, "fast");
    }
	});

  //CLICKS ON SECTIONS

  $('#SoftwareSummaryClickHover').click(function(){
    if (lastClicked != "Software"){
      if (lastClicked=="Digital"){
        $('#DigitalMedia').animate({color: "#EEEEEE"}, "fast");
        $('#DigitalMediaSummary').animate({color: "#EEEEEE"}, "fast");
        $('#content-portfolio-digitalmedia').animate({"background-color": "#33CCCC"}, "fast");
        $('#digitalMediaSummaryChevron').animate({"border-top-color": "#33CCCC"}, "fast");

        // ----------------------- DIGITAL MEDIA PROJECTS ------------------------------
        $('#content-portfolio-digitalmedia-projects-1').animate({height: "0vh"}, "fast");
        $('#content-portfolio-digitalmedia-projects-2').animate({height: "0vh"}, "fast");
        $('#content-portfolio-digitalmedia-projects-3').animate({height: "0vh"}, "fast");
        $('#content-portfolio-digitalmedia-projects-4').animate({height: "0vh"}, "fast");
        $('#content-portfolio-digitalmedia-projects-5').animate({height: "0vh"}, "fast");
        // ----------------------- DIGITAL MEDIA PROJECTS ------------------------------


        $('#DigitalMediaHover').css("height", contentHeight);
        $('#DigitalMediaHover').css("z-index", "10");
        $('#content-portfolio-digitalmedia').animate({height: contentHeight}, "fast", function(){
          $('#DigitalMediaHover').css(
            "top", function(){
              return $('#containerDigitalMedia').offset().top;
            });
        });
        $('#clickDigital').animate({opacity: "0"}, "fast");
      }

      $('#Software').animate({color: "#FF6666"}, "fast");
      $('#SoftwareSummary').animate({color: "#FF6666"}, "fast");
      $('#content-portfolio-software').animate({"background-color": "#FCFCFC"}, "fast");
      $('#softwareSummaryChevron').animate({"border-top-color": "#FCFCFC"}, "fast");

      // ----------------------- SOFTWARE PROJECTS ------------------------------
      $('#content-portfolio-software-projects-1').animate({height: contentHeight}, "fast");
      $('#content-portfolio-software-projects-2').animate({height: contentHeight}, "fast");
      $('#content-portfolio-software-projects-3').animate({height: contentHeight}, "fast");
      $('#content-portfolio-software-projects-4').animate({height: contentHeight}, "fast");
      $('#content-portfolio-software-projects-5').animate({height: contentHeight}, "fast", function(){
        $('#DigitalMediaHover').css(
          "top", function(){
            return $('#containerDigitalMedia').offset().top;
          });
      });
      // ----------------------- SOFTWARE PROJECTS ------------------------------

      $('#SoftwareSummaryHover').css("z-index", "10");
      $('#clickSoftware').attr("src", "images/software_collapse.gif");

      $('#DigitalMediaHover').css("z-index", "10");
      $('#clickDigital').attr("src", "images/click.gif");

      lastClicked = "Software";
    }else{
      $('#Software').animate({color: "#FCFCFC"}, "fast");
      $('#SoftwareSummary').animate({color: "#FCFCFC"}, "fast");
      $('#content-portfolio-software').animate({"background-color": "#FF6666"}, "fast");
      $('#softwareSummaryChevron').animate({"border-top-color": "#FF6666"}, "fast");

      // ----------------------- SOFTWARE PROJECTS ------------------------------
      $('#content-portfolio-software-projects-1').animate({height: "0vh"}, "fast");
      $('#content-portfolio-software-projects-2').animate({height: "0vh"}, "fast");
      $('#content-portfolio-software-projects-3').animate({height: "0vh"}, "fast");
      $('#content-portfolio-software-projects-4').animate({height: "0vh"}, "fast");
      $('#content-portfolio-software-projects-5').animate({height: "0vh"}, "fast", function(){
        $('#DigitalMediaHover').css(
          "top", function(){
            return "calc("+$('#containerDigitalMedia').offset().top+"px - 10vh)";
          });
      });
      // ----------------------- SOFTWARE PROJECTS ------------------------------

      $('#SoftwareSummaryHover').css("z-index", "10");
      $('#clickSoftware').attr("src", "images/click.gif");


      lastClicked = null;
    }

  });

  $('#DigitalMediaClickHover').click(function(){
    if (lastClicked != "Digital"){
      if (lastClicked=="Software"){
        $('#Software').animate({color: "#EEEEEE"}, "fast");
        $('#SoftwareSummary').animate({color: "#EEEEEE"}, "fast");
        $('#content-portfolio-software').animate({"background-color": "#FF6666"}, "fast");
        $('#softwareSummaryChevron').animate({"border-top-color": "#FF6666"}, "fast");

        // ----------------------- SOFTWARE PROJECTS ------------------------------
        $('#content-portfolio-software-projects-1').animate({height: "0vh"}, "fast");
        $('#content-portfolio-software-projects-2').animate({height: "0vh"}, "fast");
        $('#content-portfolio-software-projects-3').animate({height: "0vh"}, "fast");
        $('#content-portfolio-software-projects-4').animate({height: "0vh"}, "fast");
        $('#content-portfolio-software-projects-5').animate({height: "0vh"}, "fast");
        // ----------------------- SOFTWARE PROJECTS ------------------------------

        $('#SoftwareSummaryHover').css("height", contentHeight);
        $('#SoftwareSummaryHover').css("z-index", "10");
        $('#content-portfolio-software').animate({height: contentHeight}, "fast", function(){
          $('#DigitalMediaHover').css(
            "top", function(){
              return $('#containerDigitalMedia').offset().top;
            });
            $("html, body").animate({
                scrollTop: $('#containerDigitalMedia').offset().top
            }, "fast");
        });
        $('#clickSoftware').animate({opacity: "0"}, "fast");
      }

      $('#DigitalMedia').animate({color: "#33CCCC"}, "fast");
      $('#DigitalMediaSummary').animate({color: "#33CCCC"}, "fast");
      $('#content-portfolio-digitalmedia').animate({"background-color": "#FCFCFC"}, "fast");
      $('#digitalMediaSummaryChevron').animate({"border-top-color": "#FCFCFC"}, "fast");

      // ----------------------- DIGITAL MEDIA PROJECTS ------------------------------
      $('#content-portfolio-digitalmedia-projects-1').animate({height: contentHeight}, "fast");
      $('#content-portfolio-digitalmedia-projects-2').animate({height: contentHeight}, "fast");
      $('#content-portfolio-digitalmedia-projects-3').animate({height: contentHeight}, "fast");
      $('#content-portfolio-digitalmedia-projects-4').animate({height: contentHeight}, "fast");
      $('#content-portfolio-digitalmedia-projects-5').animate({height: contentHeight}, "fast", function(){
          $('#DigitalMediaHover').css(
          "top", function(){
            return $('#containerDigitalMedia').offset().top;
          });
      });
      // ----------------------- DIGITAL MEDIA PROJECTS ------------------------------

      $('#DigitalMediaHover').css("z-index", "10");
      $('#clickDigital').attr("src", "images/digital_collapse.gif");

      $('#SoftwareSummaryHover').css("z-index", "10");
      $('#clickSoftware').attr("src", "images/click.gif");


      lastClicked = "Digital";
    }else{
      $('#DigitalMedia').animate({color: "#FCFCFC"}, "fast");
      $('#DigitalMediaSummary').animate({color: "#FCFCFC"}, "fast");
      $('#content-portfolio-digitalmedia').animate({"background-color": "#33CCCC"}, "fast");
      $('#digitalMediaSummaryChevron').animate({"border-top-color": "#33CCCC"}, "fast");

      // ----------------------- DIGITAL MEDIA PROJECTS ------------------------------
      $('#content-portfolio-digitalmedia-projects-1').animate({height: "0vh"}, "fast");
      $('#content-portfolio-digitalmedia-projects-2').animate({height: "0vh"}, "fast");
      $('#content-portfolio-digitalmedia-projects-3').animate({height: "0vh"}, "fast");
      $('#content-portfolio-digitalmedia-projects-4').animate({height: "0vh"}, "fast");
      $('#content-portfolio-digitalmedia-projects-5').animate({height: "0vh"}, "fast", function(){
          $('#DigitalMediaHover').css(
          "top", function(){
            return $('#containerDigitalMedia').offset().top;
          });
      });
      // ----------------------- DIGITAL MEDIA PROJECTS ------------------------------

      $('#DigitalMediaHover').css("z-index", "10");
      $('#clickDigital').attr("src", "images/click.gif");


      lastClicked = null;
    }

  });
});
