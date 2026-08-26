// NC/nc.js – Auto-Run-Trigger für CORE, PIPE, SLI

import { CORE } from "../CORE/core.js";
import { PIPE } from "../PIPE/pipe.js";
import { SLI } from "../SLI/sli.js";

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
