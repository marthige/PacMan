import { arrows } from "./functionality"

class GhostsChar {
    constructor(name, startPos, speed = 5, movement) {
        this.name = name,
        this.startPos = startPos,
        this.pos = startPos,
        this.speed = speed,
        this.movement = movement
        this.dir = arrows.ArrowDown,
        this.rotation = false,
        this.scared = false,
        this.timer = 0
    }

}