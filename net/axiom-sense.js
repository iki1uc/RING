/* ============================================================
   AXIOM-SENSE · Relativität, Buchung, Team-Work, Sichtbarkeit
   ============================================================ */

import { RFREI } from "../core/r-frei.js";
import { AXIOM } from "./axiom-interact.js";

export const SENSE = {

    booked: {},
    log: [],

    // --------------------------------------------------------
    // 1. Node buchen / abbuchen
    // --------------------------------------------------------
    toggle(id) {
        this.booked[id] = !this.booked[id];
        RFREI.toggle(id);
        this.log.push(`BOOK-TOGGLE → ${id} → ${this.booked[id] ? "BUCH" : "ABBUCH"}`);
        return this.booked[id];
    },

    // --------------------------------------------------------
    // 2. Relativität: jeder beeinflusst jeden
    // --------------------------------------------------------
    relativ(id) {
        const out = [];
        for (const n in this.booked) {
            if (this.booked[n]) {
                out.push(`${id} ↔ ${n}`);
            }
        }
        this.log.push(`RELATIV → ${id} → ${out.length} Verbindungen`);
        return out;
    },

    // --------------------------------------------------------
    // 3. Team-Work: KI + USER + RAWATOR
    // --------------------------------------------------------
    teamwork() {
        const out = AXIOM.reveal();
        this.log.push("TEAM-WORK");
        return out;
    },

    // --------------------------------------------------------
    // 4. Sense-Layer: Was passiert und warum
    // --------------------------------------------------------
    sense(id, type) {
        const rel = this.relativ(id);
        const team = this.teamwork();
        const mark = RFREI.marker[id];

        const info = {
            id,
            type,
            booked: this.booked[id],
            marker: mark,
            relativ: rel,
            team
        };

        this.log.push(`SENSE → ${id} · ${type}`);
        return info;
    },

    // --------------------------------------------------------
    // 5. Letzte Ereignisse
    // --------------------------------------------------------
    reveal() {
        return this.log.slice(-12);
    }
};
