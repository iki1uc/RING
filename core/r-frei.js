/* ============================================================
   R-FREI · AXIOM.NET
   Frei-Schalter für RAWATOR, KI, USER, Axiome
   ============================================================ */

export const RFREI = {

    state: {
        rawator: false,
        ki: {},
        user: {},
        axiome: {}
    },

    marker: {
        rawator: "off",
        ki: {},
        user: {},
        axiome: {}
    },

    // --------------------------------------------------------
    // 1. RAWATOR frei / nicht frei
    // --------------------------------------------------------
    rawator(on) {
        this.state.rawator = on;
        this.marker.rawator = on ? "on" : "off";
        return `RAWATOR-FREI → ${on}`;
    },

    // --------------------------------------------------------
    // 2. KI frei / nicht frei
    // --------------------------------------------------------
    ki(id, on) {
        this.state.ki[id] = on;
        this.marker.ki[id] = on ? "on" : "off";
        return `KI-FREI(${id}) → ${on}`;
    },

    // --------------------------------------------------------
    // 3. USER frei / nicht frei
    // --------------------------------------------------------
    user(id, on) {
        this.state.user[id] = on;
        this.marker.user[id] = on ? "on" : "off";
        return `USER-FREI(${id}) → ${on}`;
    },

    // --------------------------------------------------------
    // 4. Axiom frei / nicht frei
    // --------------------------------------------------------
    axiom(id, on) {
        this.state.axiome[id] = on;
        this.marker.axiome[id] = on ? "on" : "off";
        return `AXIOM-FREI(${id}) → ${on}`;
    },

    // --------------------------------------------------------
    // 5. Zustand abfragen
    // --------------------------------------------------------
    get(id) {
        return {
            rawator: this.marker.rawator,
            ki: this.marker.ki[id],
            user: this.marker.user[id],
            axiom: this.marker.axiome[id]
        };
    },

    // --------------------------------------------------------
    // 6. Alles anzeigen
    // --------------------------------------------------------
    reveal() {
        return {
            rawator: this.marker.rawator,
            ki: this.marker.ki,
            user: this.marker.user,
            axiome: this.marker.axiome
        };
    }
};
