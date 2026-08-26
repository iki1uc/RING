// nc.js – Auto-Run-Trigger für CORE, PIPE, SLI

import { CORE } from "./core.js";
import { PIPE } from "./pipe/pipe.js";
import { SLI } from "./sli/sli.js";

export function NC(run = 1, mode = "seq") {

    const core = CORE(run);
    const pipe = PIPE(run, mode);
    const sli = SLI(run, pipe);

    return {
        run,
        mode,
        core,
        pipe,
        sli,
        auto: true
    };
}
