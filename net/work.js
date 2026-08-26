/* ============================================================
   WORK.js · AXIOM-WORK / AXIOM-MAX / AXIOM-MIN
   Nutzt KI1–KI3 und USER1–USER3
   Fallback: TMP-RESPO
   ============================================================ */

import { RFREI } from "../core/r-frei.js";
import { RINGBUS } from "../core/ring-bus.js";
import { RESPO } from "./RESPO.js";

export const WORK = {

    nodes: ["KI1","KI2","KI3","USER1","USER2","USER3"],
    fallback: "TMP-RESPO",

    getNode(id) {
        return this.nodes.includes(id) ? id : this.fallback;
    },

    work() {
        const out = [];

        for (const id of this.nodes) {
            if (RFREI.is(id)) {
                out.push({
                    id,
                    pq: RINGBUS.state.pq?.value || 0,
                    mode: RINGBUS.state.mode,
                    action: "WORK"
                });
            }
        }

        if (out.length === 0) {
            return {
                id: this.fallback,
                data: RESPO.tmp(),
                action: "WORK-FALLBACK"
            };
        }

        return out;
    },

    max() {
        let best = null;

        for (const id of this.nodes) {
            if (RFREI.is(id)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!best || pq > best.pq) best = { id, pq };
            }
        }

        return best || {
            id: this.fallback,
            pq: 0,
            data: RESPO.tmp(),
            action: "MAX-FALLBACK"
        };
    },

    min() {
        let low = null;

        for (const id of this.nodes) {
            if (RFREI.is(id)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!low || pq < low.pq) low = { id, pq };
            }
        }

        return low || {
            id: this.fallback,
            pq: 0,
            data: RESPO.tmp(),
            action: "MIN-FALLBACK"
        };
    }
};
