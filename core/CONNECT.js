export function SIX(p) {
    const aktion = p.tmp;
    const reaktion = p.ra;
    const konsequenz = aktion * reaktion;

    const zeit = 1;
    const effizienz = konsequenz / zeit;
    const wohlbefinden = effizienz / (p.kraft || 1);

    return { aktion, reaktion, konsequenz, zeit, effizienz, wohlbefinden };
}

