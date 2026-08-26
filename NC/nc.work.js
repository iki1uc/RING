// NC/nc.work.js
import { NC_LOGIC } from "./nc.logic.js";

export function NC_WORK(stack) {

    const logic = NC_LOGIC(stack);

    return logic.map(l => ({
        layer: l.layer,
        tmp: l.effect,
        axiom: l.axiom,
        atom: l.atom
    }));
}
