console.log($);

// $('selector').action(); -->syntax of jQuery!

$(document).ready(function () {
  $("h3").click(function () {
    console.log("h3 has been clicked");
    // $(this).hide();
  });
  //   $("h3").click();

  // there are three types of selector::
  // 1. Class selector
  // 2. ID selector
  // 3. Element selector

  // 3. Element Selector::
  $("p").click(function () {
    console.log("p element clicked!", this);
  });
  $("p").click(); // it clicks all the p element automatically

  // 2. ID Selector::
  $("#first").click(function () {
    $(this).hide();
  });

  $("*").click(); //clicks on all the element
  $("p.second").click(); //clicks on second class
  $("p:first").click(); //clicks on first p element

  // Events in jQuery::
  // Mouse Event => click, dblclick, mouseenter, mouseleave
  // Keyboard Event => keypress, keydown, MediaKeyStatusMap
  // Form Events => submit, change, focus, blur
  // document/window events => load, resize, scroll, unload

  $(".mouseenter").mouseenter(function () {
    console.log("mouse entered!", this);
  });

  $(".mouseenter").mouseleave(function () {
    console.log("mouse left!", this);
  });

  $(".hover").hover(function () {
    console.log("mouse hovered!", this);
  });

  //------------- on method ---------------
  $("#onMethod").on("click", function () {
    console.log(this, "clicked!");
  });

  $(".onMultiple").on({
    click: function () {
      console.log("clicked!", this);
    },
    mouseleave: function () {
      console.log("mouse left!", this);
    },
    mouseenter: function() {
      console.log("mouse entered!", this);
    }
  });

  $('div#lorem').hide(1000); //it takes 1000 mili seconds to hide :)
  $('#lorem').show(1000, function(){
    console.log('showed!'); // this function is called call back function, because it works when the event has been finished!
  });

  // toggle::
  $('#button').on("click", function () {
    $('#lorem').toggle(1000);
  });

  //Fade Out::
  $('#fadeOut').click(function() {
    $('#lorem').fadeOut(1000);
  });

  //Fade In::
  $('#fadeIn').click(function() {
    $('#lorem').fadeIn(1000);
  })

  //Slide Up::
  $('#slideUp').click(function (e) { 
    e.preventDefault();
    $('#lorem').slideUp(1000);
  });

  //Slide Down::
  $('#slideDown').click(function (e) { 
    e.preventDefault();
    $('#lorem').slideDown(2000);
  });

  //Slide Toggle::
  $('#slideToggle').click(function (e) { 
    e.preventDefault();
    $('#lorem').slideToggle(2000); //it acts like slide down and up both!
  });
});
