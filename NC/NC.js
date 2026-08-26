// NC/nc.js
import { NC_WORK } from "./nc.work.js";
import { NC_SYNC } from "./nc.sync.js";
import { NC_3X3 } from "./nc.3x3.js";

export function NC(stack = [], core, sli) {

    return {
        stack,
        work: NC_WORK(stack),
        sync: NC_SYNC(core, sli),
        matrix: NC_3X3(),
        auto: true
    };
}
