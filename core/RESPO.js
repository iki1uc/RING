import { ROLES } from "./LINK.js";
import { SIX } from "./CONNECT.js";

export const RESPO = {
    react(p) {
        const role = autoSwitchRole(p);
        const s = SIX(p);

        return {
            role,
            ra: p.ra,
            re: p.re,
            kraft: p.kraft,
            effizienz: s.effizienz,
            wohlbefinden: s.wohlbefinden,
            freude: p.re,
            treue: p.kraft,
            bindung: p.re * p.kraft
        };
    }
};

export function autoSwitchRole(p) {
    const s = SIX(p);

    if (s.konsequenz > 1.2) p.role = "alpha";
    else if (s.konsequenz > 0.9) p.role = "beta";
    else p.role = "gamma";

    const r = ROLES[p.role];
    p.ra = r.ra;
    p.re = r.re;
    p.kraft = r.kraft;

    return p.role;
}

