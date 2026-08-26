// core.js
import { TMP3 } from "./tmp3.js";

export function CORE(run) {

    return {
        run,
        tmp: TMP3(),
        layer: run >= 2 ? "TMP" : "AXIOM"
    };
}
