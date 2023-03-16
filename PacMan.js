// Here we read the keyboard
document.addEventListener("keydown", (event) => {
    // alert(event.key);
    var p = document.getElementById(pacman);
    switch(p) {
        case 37: 
            p.style.position="absolute";
            p.style.left= x_pos-1;
            p.style.top= y_pos;
            break;
        case 38: 
            p.style.position="absolute";
            p.style.left= 30;
            p.style.top= 156.5-'px';
            break;
        case 39: 
            p.style.position="absolute";
            p.style.left= 30+'px';
            p.style.top= 156.5;
            break;
        case 40: 
            p.style.position="absolute";
            p.style.left= 30;
            p.style.top= 156.5+'px';
            break;
    }


    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById "pacman"
    // this is an object and you can edit its postioin on the screen
    // https://stackoverflow.com/questions/6802956/how-to-position-a-div-in-a-specific-coordinates
    // find the current coordinates
    // increase them w/ 1
    // apply them
});