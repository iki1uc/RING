/* ============================================================
   WORK.js · AXIOM-WORK / AXIOM-MAX / AXIOM-MIN
   TPXX-Version: Jeder Beteiligte hat eigenes TMP-Axiom
   ============================================================ */

import { RFREI } from "../core/r-frei.js";
import { RINGBUS } from "../core/ring-bus.js";
import { AX9TPXX } from "./AX9TPXX.js";   // 9 TMP-Axiome
import { AX9MAIN } from "./AX9MAIN.js";   // 9 Hauptaxiome

export const WORK = {

    // 9 Hauptaxiome + 9 TMP-Axiome
    nodes: [
        ...AX9MAIN,   // KI1-AX, KI2-AX, KI3-AX, USER1-AX, USER2-AX, USER3-AX, RAW1-AX, RAW2-AX, RAW3-AX
        ...AX9TPXX    // KI1-TMP, KI2-TMP, KI3-TMP, USER1-TMP, USER2-TMP, USER3-TMP, RAW1-TMP, RAW2-TMP, RAW3-TMP
    ],

    // --------------------------------------------------------
    // WORK → Team-Arbeit aller 18 Axiome
    // --------------------------------------------------------
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

        // Wenn niemand frei → RAWATOR-TMP übernimmt
        if (out.length === 0) {
            return [{
                axiom: "AX-TMP-RAW",
                pq: 0,
                mode: "fallback",
                action: "WORK-FALLBACK"
            }];
        }

        return out;
    },

    // --------------------------------------------------------
    // MAX → stärkstes aktives Axiom
    // --------------------------------------------------------
    max() {
        let best = null;

        for (const ax of this.nodes) {
            if (RFREI.is(ax)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!best || pq > best.pq) best = { axiom: ax, pq };
            }
        }

        return best || { axiom: "AX-TMP-MAX", pq: 0 };
    },

    // --------------------------------------------------------
    // MIN → schwächstes aktives Axiom
    // --------------------------------------------------------
    min() {
        let low = null;

        for (const ax of this.nodes) {
            if (RFREI.is(ax)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!low || pq < low.pq) low = { axiom: ax, pq };
            }
        }

        return low || { axiom: "AX-TMP-MIN", pq: 0 };
    }
};
