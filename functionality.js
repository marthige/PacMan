// here we create the limiting array for the map
const map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
  [0,2,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,2,0],
  [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
  [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,3,0,0,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,3,0,0,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,3,3,3,0,0,3,3,3,3,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
  [5,3,3,3,3,3,1,3,3,3,0,0,0,0,0,0,0,0,3,3,3,1,3,3,3,3,3,5],
  [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,3,3,3,3,3,3,3,3,3,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
  [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
  [0,2,1,1,0,0,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,0,0,1,1,2,0],
  [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
  [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
  [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

//here we define the starting coordinates
let cRow = 23;
let cCol = 13;

// Here we read the keyboard
document.addEventListener("keydown", (event) => {
    pacman =  document.getElementById('pacman');
    ev = event.code;
    var y = parseInt(getComputedStyle(pacman).top);
    var x = parseInt(getComputedStyle(pacman).left);
    console.log(map[cRow][cCol]);

    switch(ev) {
      case "ArrowUp":
        if(map[cRow - 1][cCol] != 0) {
          y = y - 8;
          cRow = cRow - 1;
        } else {y = y;}
      break;

      case "ArrowDown":
        if(map[cRow + 1][cCol] != 0) {
          y = y + 8;
          cRow = cRow + 1;
        } else { y = y;}
      break;

      case "ArrowLeft":
        if(map[cRow][cCol - 1] != 0) {
          x = x - 8;
          cCol = cCol - 1;
        } else { x = x;}

        if(map[cRow][cCol - 1] == 5) {
          cRow = cRow;
          cCol = 27;
        }
      break;

      case "ArrowRight":
        if(map[cRow][cCol + 1] == 5) {
          cRow = cRow; 
          cCol = 0;
          x = x + 8;
        } else if(map[cRow][cCol + 1] != 0) {
          x = x + 8;
          cCol = cCol + 1;
        } else { x = x;}
       
      break;
    }

    pacman.style.top = y + "px";
    pacman.style.left = x + "px";

});


/*
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
];  */
