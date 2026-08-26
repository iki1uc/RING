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
Wasser fließt → ${dusche}
Feuer brennt → ${sonne}
Körper trägt → ${baden}
Schatten spricht → ${albtraum}
Raum hält → ${kate}
            `;
        }
    };
}
