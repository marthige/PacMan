import { arrows } from "./functionality"
import { randomMovement } from "./ghostMoves";


class GhostsChar {
    constructor(name, startPos, speed = 5, movement) {
        this.name = name,
        this.startPos = startPos,
        this.pos = startPos,
        this.speed = speed,
        this.movement = movement,
        this.dir = arrows.ArrowDown,
        this.rotation = false,
        this.scared = false,
        this.timer = 0
    }

    shouldMove() {
        if(this.timer == this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }

    getNextMove(checkExist) {
        var obj = randomMovement(this.pos, this.dir, checkExist)
        var newPos = obj.newPos;
        var direction = obj.direction;
        return {newPos, direction} //gets the function's parameters and sets them here, returns the new parameters
    }

    setNewPosAndDirection(newPos, dir) {
        this.pos = newPos;
        this.dir = dir;
    }

}