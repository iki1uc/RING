// SLI/base/form_engine.js
export function SLI_FORM_ENGINE(data) {
    return {
        type: "FORM_ENGINE",
        input: data,
        render() {
            return `FORM_ENGINE → ${JSON.stringify(data)}`;
        }
    };
}

