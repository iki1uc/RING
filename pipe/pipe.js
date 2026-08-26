// pipe.js
import { LINE } from "./line.js";
import { AXIOM3 } from "./axiom3.js";

export function PIPE(run = 1, mode = "seq") {

    const out = {
        run,
        mode,
        line: LINE(mode),
        axiom: AXIOM3,
        bonus: null
    };

    if (run === 3) {
        out.bonus = "ICEFEUER";
    }

    return out;
}

