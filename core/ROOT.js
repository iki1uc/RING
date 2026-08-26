import { MARKET } from "./station.js";
import { RESPO } from "./RESPO.js";

export function SYSTEM_START() {
    console.log("PC1_SYSTEM aktiviert.");

    // Initiale Reaktion aller Märkte
    Object.keys(MARKET).forEach(m => {
        const r = RESPO.react(MARKET[m]);
        console.log(m, r);
    });
}

