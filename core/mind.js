// CORE/mind.js

export const ParalasierenMind = {

    threads: {
        core: true,
        pipe: true,
        sli: true,
        nc: true
    },

    angleInteraction(ax1, ax2) {
        return {
            axiomA: ax1,
            axiomB: ax2,
            angle: 90,
            interaction: "ORTHO",
            result: `QUND-${ax1}-${ax2}`
        };
    }
};
