// CORE/QundµSyn.mind.js

import { MIND_QUANT } from "./mind.quant.js";
import { AXIOM3_QUND } from "./mind.axiom3.js";

export function QundµSynMind(axA, axB, tmp) {

    const qsyn = MIND_QUANT(tmp);
    const axiom3 = AXIOM3_QUND(axA, axB);

    return {
        qsyn,
        axiom3,
        mind: "QUNDµSYN",
        state: "ACTIVE"
    };
}
