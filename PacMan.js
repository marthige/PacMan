// Here we read the keyboard

document.addEventListener("keydown", (event) => {
    pacman =  document.getElementById(pacman);
    ev = event.code;
    move = { 
        xy : () => {

            var y = parseInt(getComputedStyle(pacman).top);

            if (ev = 38)
                --y;
            else if (k == 40)
                ++y;
            return y;
        },

        x : () => {
            var x = parseInt(getComputedStyle(pacman).left);

            if (ev == 37)
                --x;
            else if (ev == 39)
                ++x;
            return x;
        }
    }

    pacman.style.top = (move.y()) + "px";
    pacman.style.left = (move.x()) + "px";
    




    //alert(event.key);  shows that key what was clicked
    // make it MOVE to one side !!

   /* switch(event.key) {
        case 37: 
            p.style.position = "absolute";
            p.style.left = 30 - 1;
            p.style.top = 156.5;
            break;
        case 38: 
            p.style.position = "absolute";
            p.style.left = 30;
            p.style.top = 156.5 - 1;
            break;
        case 39: 
            p.style.position = "absolute";
            p.style.left = 30 + 1;
            p.style.top = 156.5;
            break;
        case 40: 
            p.style.position = "absolute";
            p.style.left = 30;
            p.style.top = 156.5 + 1;
            break;
    }*/
    console.log(1); // checks what part works, even if it doesnt show


    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById "pacman"
    // this is an object and you can edit its postioin on the screen
    // https://stackoverflow.com/questions/6802956/how-to-position-a-div-in-a-specific-coordinates
    // find the current coordinates
    // increase them w/ 1
    // apply them
});