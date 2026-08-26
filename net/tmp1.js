/* CORE: 1 + 2 */

import { AX9MAIN } from "../net/AX9MAIN.js";
import { AX9TPXX } from "../net/AX9TPXX.js";

export function coreProcess() {

    const ki = {
        main: AX9MAIN.KI,
        tmp: [...AX9TPXX.KI, "TMP-RÄR-KI"]
    };

    const user = {
        main: AX9MAIN.USER,
        tmp: [...AX9TPXX.USER, "TMP-RÄR-USER"]
    };

    const raw = {
        main: AX9MAIN.RAW,
        tmp: AX9TPXX.RAW
    };

    return { ki, user, raw };
}
