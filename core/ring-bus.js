/* ============================================================
   RING-BUS · Zentraler Daten- und Funktionsverteiler
   Verbindet CORE, RESPO, EYE, MODE und REAL-CONNECT
   ============================================================ */

import { AXI } from "./respo/axi-link.js";
import { EYE } from "./eye/EYE.js";
import { CMODE } from "./mode/c.mode.js";

export const RINGBUS = {

    state: {
        axis: null,
        pq: null,
        history: null,
        motion: null,
        mode: null,
        net: []
    },

    async fromAxis(axis) {
        const axi = await AXI.link(axis);
        this.state.axis = axi;
        return axi;
    },

    fromPQ(pq) {
        this.state.pq = pq;
        return EYE.pqSensor(pq);
    },

    fromHistory(move, index) {
        this.state.history = { move, index };
        return EYE.historyLens(move, index);
    },

    fromMotion(cluster) {
        this.state.motion = cluster;
        return EYE.motionTracker(cluster);
    },

    applyMode(mode) {
        CMODE.set(mode);
        this.state.mode = CMODE.get();
        return CMODE.reveal();
    },

    connectPeer(id) {
        this.state.net.push(id);
        return `PEER CONNECTED → ${id}`;
    },

    reveal() {
        return {
            axis: this.state.axis,
            pq: this.state.pq,
            history: this.state.history,
            motion: this.state.motion,
            mode: this.state.mode,
            net: this.state.net
        };
    }
};
