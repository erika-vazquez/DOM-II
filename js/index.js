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
//When clicked, it console logs a message.
const button = document.querySelector('.btn');

button.addEventListener("click", (e) => {
    console.log("div clicked");
})
// ADDED CONSOLE LOG FOR WHEN FUN IN THE SUNS DIV IS CLICKED 
const signUpButton1 = document.querySelector(".destination");
// STOPPING THE BUBBLING OF DIV CLICKED CONSOLE LOG
signUpButton1.addEventListener('click', (e) => {
    console.log("signup 1 clicked");
    e.stopPropagation();
  })


//using mouseover event listener where when hover over the logo, the 
//text color changes to red for 3 seconds
let logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", () => {
    //  e.preventDefault();
    document.body.style.color = "red";
    //setTimeout to reset color after 3sec
    setTimeout(function() {
        document.body.style.color = "";
      }, 3000);//3 seconds
    }, false );

//Using dblclick event listener, when the Welcome! 
//text is double clicked it changes the text to Surprise!
let welcomeH2 = document.querySelector(".intro h2");

welcomeH2.addEventListener("dblclick", () => {
    welcomeH2.innerHTML = "Surprise!";
});    

//using resize event listener so when the window is resized 
//an alert will pop up
window.addEventListener("resize", () => {
    alert("The document is being resized");
});

//used a copy event listener so when the second item in the nav bar is copied,
//the text will turn purple
let navItem = document.querySelectorAll("nav a");
navItem[1].addEventListener("copy", (e) => {
    e.preventDefault(); //prevent links from reloading page
    navItem[1].style.color = "purple";
});

//used the scroll event listener so everytime you scroll,
//an alert pops up (its pretty annoying)
window.addEventListener("scroll", function alertMeOnce() {
    alert("scroll, scroll, scroll")
    window.removeEventListener('scroll', alertMeOnce)
});

//used the contextmenu so when the bus image is right clicked,
//an alert pops up
let busImg = document.querySelector("img");
busImg.addEventListener("contextmenu", () => {
    prompt("Don't right click me!");
});

// used the onwheel event listener on the navigation section,
//so it can zoom in/out when you use the mouse wheel
let scale = 1;
const el = document.querySelector('div');

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  el.onwheel = zoom;

  //used keydown event listener to make the header section dissapear when 
  //a keyboard key is pressed
  const header = document.querySelector('header');
  const body = document.querySelector('body');
  body.addEventListener("keydown", () => header.style.opacity = "0");

//used load event listener to pop up an alert message
/*window.addEventListener("load", () => 
alert("Finished Loading!")
);
*/

  
  