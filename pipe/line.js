// line.js
import { AXIOM3 } from "./axiom3.js";

export function LINE(mode = "seq") {

    if (mode === "seq") {
        return [...AXIOM3.ONE, ...AXIOM3.TWO, ...AXIOM3.THREE];
    }

    if (mode === "mix") {
        return [
            AXIOM3.ONE[0], AXIOM3.TWO[0], AXIOM3.THREE[0],
            AXIOM3.ONE[1], AXIOM3.TWO[1], AXIOM3.THREE[1],
            AXIOM3.ONE[2], AXIOM3.TWO[2], AXIOM3.THREE[2]
        ];
    }

    if (mode === "blitz") {
        return AXIOM3;
    }
}

