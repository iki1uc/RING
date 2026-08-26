// SLI/dichtung/sli.dichtung.js

export function SLI_DICHTUNG({ dusche, sonne, baden, albtraum, kate }) {

    return {
        type: "SLI_DICHTUNG",
        elements: {
            wasser: dusche,
            feuer: sonne,
            körper: baden,
            schatten: albtraum,
            raum: kate
        },
        render() {
            return `
DICHTUNG:
Wasser fließt wie Erinnerung → ${dusche}
Feuer brennt wie Klarheit → ${sonne}
Körper trägt die Welt → ${baden}
Schatten spricht im Traum → ${albtraum}
Raum hält alles zusammen → ${kate}
            `;
        }
    };
}
