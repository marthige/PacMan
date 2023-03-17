// Here we read the keyboard

/* 1st idea: document.getElementById(pacman).style.top = 156.6;
document.getElementById(pacman).style.left = 30;

document.addEventListener("keydown", (event) => {
    var e = event.key,
    charTop = parseInt(document.getElementById(pacman).style.top),
    charLeft = parseInt(document.getElementById(pacman).style.left);

    if (e == 40) { //down function
        document.getElementById(pacman).style.top = (parseInt(document.getElementById(pacman).style.top)) + 10 + "px";
    } else if (e == 37) { //left function
        document.getElementById(pacman).style.left = (parseInt(document.getElementById(pacman).style.left)) - 10 + "px";
    } else if (e == 39) { //right function
        document.getElementById(pacman).style.left = (parseInt(document.getElementById(pacman).style.left)) + 10 + "px";
    } else if (e == 38) { //up function
        document.getElementById(pacman).style.top = (parseInt(document.getElementById(pacman).style.top)) - 10 + "px";
    }

});*/

document.addEventListener("keydown", (event) => {
    // alert(event.key);
     switch(event.key) {
        case 37: 
            p.style.position = "absolute";
            p.style.left = x_pos - 1;
            p.style.top = y_pos;
            break;
        case 38: 
            p.style.position = "absolute";
            p.style.left = 30;
            p.style.top = 156.5 - 'px';
            break;
        case 39: 
            p.style.position = "absolute";
            p.style.left = 30 + 'px';
            p.style.top = 156.5;
            break;
        case 40: 
            p.style.position = "absolute";
            p.style.left = 30;
            p.style.top = 156.5 + 'px';
            break;
    }


    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById "pacman"
    // this is an object and you can edit its postioin on the screen
    // https://stackoverflow.com/questions/6802956/how-to-position-a-div-in-a-specific-coordinates
    // find the current coordinates
    // increase them w/ 1
    // apply them
});