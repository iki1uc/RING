// SLI/base/form_matrix.js
export function SLI_FORM_MATRIX(matrix) {
    return {
        type: "FORM_MATRIX",
        matrix,
        render() {
            return `FORM_MATRIX → ${JSON.stringify(matrix)}`;
        }
    };
}

