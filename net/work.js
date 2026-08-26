/* ============================================================
   AXIOM-WORK · AXIOM-MAX · AXIOM-MIN
   USER 1–3 · KI 1–3 · Fallback TMP-RESPO
   ============================================================ */

import { RFREI } from "../core/r-frei.js";
import { RINGBUS } from "../core/ring-bus.js";
import { RESPO } from "../core/RESPO.js";   // dein TMP-RESPO Fallback

export const AXWORK = {

    nodes: ["KI1","KI2","KI3","USER1","USER2","USER3"],
    fallback: "TMP-RESPO",

    // --------------------------------------------------------
    // 1. Node holen (mit Fallback)
    // --------------------------------------------------------
    getNode(id) {
        if (this.nodes.includes(id)) return id;
        return this.fallback;
    },

    // --------------------------------------------------------
    // 2. AXIOM-WORK → Team-Arbeit
    // --------------------------------------------------------
    work() {
        const out = [];

        for (const id of this.nodes) {
            if (RFREI.is(id)) {
                out.push({
                    id,
                    data: RINGBUS.reveal(),
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

    // --------------------------------------------------------
    // 3. AXIOM-MAX → stärkster aktiver Node
    // --------------------------------------------------------
    max() {
        let best = null;

        for (const id of this.nodes) {
            if (RFREI.is(id)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!best || pq > best.pq) {
                    best = { id, pq };
                }
            }
        }

        if (!best) {
            return {
                id: this.fallback,
                pq: 0,
                data: RESPO.tmp(),
                action: "MAX-FALLBACK"
            };
        }

        return best;
    },

    // --------------------------------------------------------
    // 4. AXIOM-MIN → schwächster aktiver Node
    // --------------------------------------------------------
    min() {
        let low = null;

        for (const id of this.nodes) {
            if (RFREI.is(id)) {
                const pq = RINGBUS.state.pq?.value || 0;
                if (!low || pq < low.pq) {
                    low = { id, pq };
                }
            }
        }

        if (!low) {
            return {
                id: this.fallback,
                pq: 0,
                data: RESPO.tmp(),
                action: "MIN-FALLBACK"
            };
        }

        return low;
    }
};
