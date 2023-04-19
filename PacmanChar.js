import { arrows, objectType } from "./functionality";

class PacmanChar {
    constructor(startPos, speed) {
        this.pos = startPos,
        this.speed = speed,
        this.dir = null,
        this.rotation = false,
        this.powerpill = false
    }

    setNewPos(newPos) {
        this.pos = newPos
    }
    
    handleKeyInput(el, checkExist) {
        var dir;
        if(el.code <= 37 && el.code >= 40) {
            dir = arrows[el.code];
        } else return;
        let newPos = this.pos + dir.movement;
        if(checkExist(newPos, objectType.wall)) return; //checks if it's possible to go on the next space
        this.dir = dir;
    }

    getNextMove(checkExist) {
        let newPos = this.pos + dir.movement;
        if(checkExist(newPos, objectType.wall) || checkExist(newPos, objectType.ghostlair)) return newPos = this.pos;
        return {newPos, direction: this.dir};
    }

    shouldMove() {
        if(!this.dir) return;
        if(this.timer == this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }

}