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
  [0,0,0,0,0,0,1,0,0,3,3,3,3,3,3,3,3,3,3,0,0,1,0,0,0,0,0,0],
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

// Here we read the keyboard (works every time a key is pressed)
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
        if(cCol - 1 == 0 && cRow == 14) {
          cRow = cRow;
          cCol = 26;
          x = x + 8*25;
        } else if(map[cRow][cCol - 1] != 0) {
          x = x - 8;
          cCol = cCol - 1;
        } else { x = x;}
      break;

      case "ArrowRight":
        if(cRow == 14 && cCol + 1 == 27) {
          cRow = cRow; 
          cCol = 1;
          x = x - 8*25;
        } else if(map[cRow][cCol + 1] != 0) {
          x = x + 8;
          cCol = cCol + 1;
        } else { x = x;}
       
      break;
    }

    if(map[cRow][cCol] == 1 ) {
      var element = document.createElement("div"); 
      element.setAttribute("id", "emptymap"); //connects the element with a css class "emptymap"
      element.style.top = (y + 3.8) + "px"; // changes (could add too) property of the class
      element.style.left = (x + 3) + "px";
      element.style.background = " url(spritesheet.png) 446.5px 230px ";
      document.getElementById('dottedmap').appendChild(element); //adds the changes made to element to the main id (dottedmap)
    } else if(map[cRow][cCol] == 2) {
      var element = document.createElement("div"); 
      element.setAttribute("id", "emptymap"); //connects the element with a css class "emptymap"
      element.style.top = (y + 0.8) + "px";
      element.style.left = x + "px";
      element.style.width = 12.6 + "px"; // makes the black square bigger only for the big dots
      element.style.height = 13.7 + "px";
      element.style.background = " url(spritesheet.png) 446.5px 230px ";
      document.getElementById('dottedmap').appendChild(element); //adds the changes made to element to the main id (dottedmap)
    }   

    pacman.style.top = y + "px";
    pacman.style.left = x + "px";

});

let rgRow = 11;
let rgCol = 13;
function moveRed() {
  redghost = document.getElementById('redghost');
  var Ghy = parseInt(getComputedStyle(redghost).top);
  var Ghx = parseInt(getComputedStyle(redghost).left);
  Ghx = Ghx + 8;
  rgCol = rgCol + 1;
  redghost.style.top = Ghy + "px";
  redghost.style.left = Ghx + "px";
}
const myInterval = setInterval(moveRed, 500);
console.log(rgCol);

function myStop() {
  clearInterval(myInterval);
}

if(map[rgRow][rgCol] == 0) {myStop();}





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
