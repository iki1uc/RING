/* NET: WORK */

import { RFREI } from "../core/r-frei.js";
import { RINGBUS } from "../core/ring-bus.js";
import { AX9MAIN } from "./AX9MAIN.js";
import { AX9TPXX } from "./AX9TPXX.js";

export const WORK = {

    nodes: [
        ...AX9MAIN.KI,
        ...AX9MAIN.USER,
        ...AX9MAIN.RAW,
        ...AX9TPXX.KI,
        ...AX9TPXX.USER,
        ...AX9TPXX.RAW,
        "TMP-RÄR-KI",
        "TMP-RÄR-USER"
    ],

    work() {
        const out = [];

        for (const ax of this.nodes) {
            if (RFREI.is(ax)) {
                out.push({
                    axiom: ax,
                    pq: RINGBUS.state.pq?.value || 0,
                    mode: RINGBUS.state.mode,
                    action: "WORK"
                });
            }
        }

        return out.length ? out : [{
            axiom: "TMP-RÄR-KI",
            pq: 0,
            mode: "fallback",
            action: "WORK-FALLBACK"
        }];
    },

    max() {
        let best = null;

        for (const ax of this.nodes) {
            if (RFREI.is(ax)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!best || pq > best.pq) best = { axiom: ax, pq };
            }
        }

        return best || { axiom: "TMP-RÄR-KI", pq: 0 };
    },

    min() {
        let low = null;

        for (const ax of this.nodes) {
            if (RFREI.is(ax)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!low || pq < low.pq) low = { axiom: ax, pq };
            }
        }

        return low || { axiom: "TMP-RÄR-USER", pq: 0 };
    }
};
