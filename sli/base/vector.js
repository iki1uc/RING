// SLI/base/vector.js
export function SLI_VECTOR(x, y, z) {
    return {
        type: "VECTOR",
        vector: { x, y, z },
        render() {
            return `VECTOR → (${x}, ${y}, ${z})`;
        }
    };
}

