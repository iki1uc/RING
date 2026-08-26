// NC/NC_CONTINUUM.js
// Die eine Datei, die NC + PIPELINE_RUN8 + SLI + Continuum + Slide + Wette + TMP + 3x3 verbindet

import { PIPELINE_RUN8 } from "../NET/PIPELINE_RUN8.js";
import { SLI } from "../SLI/sli.js";
import { TMP1 } from "../NET/tmp1.js";
import { TMP2 } from "../NET/tmp2.js";
import { TMP3 } from "../CORE/tmp3.js";
import { AXIOM3 } from "../PIPE/axiom3.js";
import { LINE } from "../PIPE/line.js";
import { PIPE } from "../PIPE/pipe.js";

export function NC_CONTINUUM(run = 1, mode = "seq") {

    // 1. PIPELINE_RUN8 → Grundfluss
    const pipe8 = PIPELINE_RUN8(run, mode);

    // 2. PIPE → Strom + Linie + Matrix
    const pipe = PIPE(run, mode);
    const line = LINE(mode);
    const matrix = AXIOM3;

    // 3. TMP‑Führungen (1, 2, 3)
    const tmp = {
        base: TMP1,
        rar: TMP2,
        matrix: TMP3()
    };

    // 4. SLI‑Darstellung
    const sli = SLI(run, pipe);

    // 5. Slide‑Umrechnung (Bewegung / Lage / Vektor)
    const slide = line.map((l, i) => ({
        step: i + 1,
        value: l,
        slide: `SLIDE-${i + 1}`
    }));

    // 6. Wette‑Optimierung (beste Entscheidung)
    const wette = {
        best: line[0],
        mode,
        run,
        reason: "Erster Axiom‑Impuls im Continuum"
    };

    // 7. Paralasierenmind → Parallel‑Denker
    const paralasierenmind = {
        parallel: true,
        threads: [
            { name: "CORE", active: true },
            { name: "PIPE", active: true },
            { name: "SLI", active: true }
        ]
    };

    // 8. Auto‑RUN‑Trigger
    const auto = {
        active: true,
        next: run + 1,
        bonus: run === 3 ? "ATLANTIS" : null
    };

    // 9. Rückgabe → Alles in einer Datei
    return {
        run,
        mode,
        pipe8,
        pipe,
        line,
        matrix,
        tmp,
        sli,
        slide,
        wette,
        paralasierenmind,
        auto
    };
}
