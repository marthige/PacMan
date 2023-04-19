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

console.log(1);

// here we create the limiting array for the map
export const y = 20;
export const x = 20;
export const arrows = {
  ArrowLeft: {
    code: 37,
    movement: -1,
    rotation: 180,
  },
  ArrowUp: {
    code: 38,
    movement: -y,
    rotation: 270,
  },
  ArrowRight: {
    code: 39,
    movement: +1,
    rotation: 0,
  },
  ArrowDown: {
    code: 40,
    movement: +y,
    rotation: 90,
  },
};

export const objectType = {
  blank: "blank",
  wall: "wall",
  dot: "dot",
  pill: "pill",
  redghost: "redghost",
  pinkghost: "pinkghost",
  tealghost: "tealghost",
  orangeghost: "orangeghost",
  pacman: "pacman",
  ghost: "ghost",
  scared: "scared",
  ghostlair: "lair",
};

export const CLASS_LIST = [
    objectType.blank,
    objectType.wall,
    objectType.dot,
    objectType.redghost,
    objectType.pinkghost,
    objectType.tealghost,
    objectType.orangeghost,
    objectType.pill,
    objectType.pacman,
    objectType.ghostlair,
];
