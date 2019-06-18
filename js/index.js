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
    const button = document.querySelector('.btn');

    button.addEventListener("click", function(){
    alert("You've clicked me!");
});