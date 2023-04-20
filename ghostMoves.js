import { arrows, objectType } from "./functionality";

export function randomMovement(pos, dir, checkExist) {
    let dir = dir;
    let newPos = pos + dir.movement;
    let keys = Object.keys(arrows);
    while (checkExist(newPos, objectType.wall) || checkExist(newPos, objectType.ghost)) {
        const random = keys[Math.floor(Math.random() * keys.length)];
        dir = arrows[random];
        newPos = pos + dir.movement;
        return {newPos, direction: dir}
    }

}