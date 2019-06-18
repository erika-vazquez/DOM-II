// Your code goes here
//create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
/*
mouseover
keydown
wheel
drag / drop
load
focus
resize
scroll
select
dblclick
*/
//Using the click event listener on the first Sign Me Up! button.
//When clicked, an alert pops up with a message.
let button = document.querySelector('.btn');

button.addEventListener("click", function () {
    alert("You've clicked me!");
});

//using mouseover event listener where when hover over the logo, the 
//text color changes to red for 3 seconds
let logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", () => {
    document.body.style.color = "red";
    //setTimeout to reset color after 3sec
    setTimeout(function() {
        document.body.style.color = "";
      }, 3000);//3 seconds
    }, false );

//
let welcomeH2 = document.querySelector(".intro h2");

welcomeH2.addEventListener("dblclick", () => {
    welcomeH2.innerHTML = "Surprise!";
});    