// sli.js
export function SLI(run, pipe) {

    const out = {
        run,
        view: pipe.line,
        axiom: pipe.axiom,
        bonus: null
    };

    if (run === 3) {
        out.bonus = "ATLANTIS";
    }

    return out;
}
