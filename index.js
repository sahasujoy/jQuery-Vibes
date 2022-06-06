//:::::::::::::::::::::::::::::HTML SELECTOR => $("id/class/tag_name")::::::::::::::::::::::::::::::::
// Some JQ Methods of Text Manipulation are:: text(), html(), append(), prepend(), after(), before() etc...

// document.querySelector("h1").innerHTML = "hello";  //in js
// It can be also written as::
// $("h1").text("hello"); //in jq

$(".head1 h1").text("Welcome");
$("#p1").text("Paragraph");

// If u want to print text with html tag execution
$(".head2 h1").html("<b>The jQuery World</b>");

$("#p1").append(" - you are awesome");

$("#p1").prepend("Hey ");

//creating new tag::
var para1 = $("<p></p>").text("This is paragraph \'before\'");
$("#p1").before(para1); // here a new <p>-tag is created and added using jq

var para2 = $("<p></p>").text("This is paragraph \'after\'");
$("#p1").after(para2);


//Attribute Manipulation
//Show the attribute value
// -----------------------------------------------------------------------
// var att1 = document.querySelector("a").getAttribute("href"); //using js
// console.log(att1);

var att2 = $("a").attr("href"); //using jq
console.log(att2);

//remove an attribute
//     var att3 = $("a").removeAttr("href");
// console.log(att3);

//ser an attribute
var att4 = document.querySelector("a").setAttribute("href", "https://www.twitter.com"); //using js

var att5 = $("a").attr("href", "https://facebook.com"); // using jq

//CSS Manipulation
//-------------------------------------------------------------------------
$(".head1 h1").css("color", "blue");
$(".head1 h1").css("font-size", "3rem");
$(".head1 h1").css("font-style", "italic");

//multiple manipulation
$(".head2 h1").css({"color":"green",
                    "font-size": "5rem",
                    "background-color": "gray"});

//from css file by adding class
$("#p1").addClass("style1 style2");


//Event Listener in JS
// document.querySelector("button").addEventListener("click", function() {
//     document.querySelector(".head3").innerHTML = "you have clicked the button";
// });

//Event Listener using JQ
// $("button").click(function() {
//     $(".head3").text("you have clicked the button");
//     $(".head3").toggleClass("style1 style2"); //It has two states - apply & remove 
// });

//multiple button using js
// var totalButtons = document.querySelectorAll(".myButton").length;
// for(i=0; i<totalButtons; i++)
// {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         document.querySelector(".head4").innerHTML = text + " is clicked";
//     });
// }

//multiple button using jq
// $(".myButton").click(function () {
//     var value = this.innerHTML;
//     $(".head4").text(value+ " is clicked");
// });

//or,
$(".myButton").on("click", function () { //here we can use any event listener at the place of "click"
    var value = this.innerHTML;
    $(".head4").text(value+ " is clicked");
});

// ::::::::::::::::::::::::::::::::::::: Login Event Listener (Password Matching):::::::::::::::::::::::::::::::::::::
$("#loginButton").click(function() {
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if(password1 != "" && password2 != "")
    {
        if(password1 == password2)
        {
            alert("Successfully Logged in");
        }
        else
        {
            alert("Password Mismatch");
        }
    }
    else
    {
        alert("Please enter password first");
    }
});



// :::::::::::::::::::::::::::::::::::::::: jQuery Animation ::::::::::::::::::::::::::::::::::::::::::::::

// $("#btn").click(function() {
//     $("#div1").hide();
// });


// $("#btn").click(function() {
//     $("#div1").show(3000); // here 3000 = 3 seconds; see the output to make it clear!
// });


// $("#btn").click(function() {
//     $("#div1").hide(3000).show(3000);
// });


// $("#btn").click(function() {
//     $("#div1").toggle();
// });


// Some other methods (u can set the time parameter) ::
// fadeIn()
// fadeOut()
// fadeToggle() 
// fadeTo("milliseconds", "opacityValue")
// slideUp()
// slideDown()
// slideToggle()


// Animate Method::
$("#btn").click(function() {
    $("#div1").animate({opacity:"0.5", height:"400px", width:"900px", marginLeft:"30px"}, 2000);
});