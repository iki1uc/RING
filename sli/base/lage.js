// SLI/base/lage.js
export function SLI_LAGE(position, orientation) {
    return {
        type: "LAGE",
        position,
        orientation,
        render() {
            return `LAGE → POS:${JSON.stringify(position)} ORT:${orientation}`;
        }
    };
}

