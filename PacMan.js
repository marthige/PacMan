// Here we read the keyboard
document.addEventListener("keydown", (event) => {
    pacman =  document.getElementById('pacman');
    ev = event.code;
    move = { 
        y : () => {

            var y = parseInt(getComputedStyle(pacman).top);

            if (ev == "ArrowUp")
                --y;
            else if (ev == "ArrowDown")
                ++y;
            return y;
        },
        
        x : () => {
            var x = parseInt(getComputedStyle(pacman).left);

            if (ev == "ArrowLeft")
                --x;
            else if (ev == "ArrowRight")
                ++x;
            return x;
        }
    }
    pacman.style.top = (move.y()) + "px";
    pacman.style.left = (move.x()) + "px";

});

const Mx = 220;
const  My = 248;
let arr = new Array(Mx); 
for (var i = 0; i < Mx; i++) {
  arr[i] = new Array(My); 
}

console.log(arr);