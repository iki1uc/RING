// SLI/base/triangle.js
export function SLI_TRIANGLE(a, b, c) {
    return {
        type: "TRIANGLE",
        points: { a, b, c },
        render() {
            return `TRIANGLE → A:${a} B:${b} C:${c}`;
        }
    };
}

