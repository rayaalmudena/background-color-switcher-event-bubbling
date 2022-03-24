// Happy coding!


document.querySelector(".canvas").addEventListener('click',function(event){
    console.log(event.target.id);
    //document.body.style.backgroundColor=event.target.id; 
    document.body.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
});
