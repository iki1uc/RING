import { WORK } from "../net/work.js";

export function coreProcess() {
    const team = WORK.work();
    const max  = WORK.max();
    const min  = WORK.min();

    return { team, max, min };
}
