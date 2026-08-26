/* ============================================================
   AXI-LINK PRO · RESPO-AXI-LINK.NET
   Verbindet Achsen, Lage, Weiser, Config und Router-Hook
   Zeigt seine Funktionen selbst — keine Fragen nötig.
   ============================================================ */

export const AXI = {

    async load(file) {
        try {
            return await fetch(file).then(r => r.json());
        } catch (err) {
            return { error: `AXI-LOAD-ERROR: ${file}` };
        }
    },

    async link(axis) {
        const config = await this.load("axi-config.json");
        const lage   = await this.load("axi-lage.json");
        const weiser = await this.load("axi-weiser.json");

        const info = {
            axis,
            slot: lage[axis]?.slot,
            depth: lage[axis]?.depth,
            group: lage[axis]?.group,
            route: weiser[axis]?.route || weiser.fallback,
            mode: config.mode,
            reveal: `AXI(${axis}) · SLOT(${lage[axis]?.slot}) · ROUTE(${weiser[axis]?.route}) · MODE(${config.mode})`
        };

        console.log("AXI-LINK-PRO:", info);
        return info;
    },

    async hook(axis) {
        const data = await this.link(axis);
        console.log("ROUTER-HOOK:", data.reveal);
        return data;
    }
};
