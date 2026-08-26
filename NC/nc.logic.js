// NC/nc.logic.js

export function NC_LOGIC(stack = []) {

    const out = [];

    for (let i = 0; i < stack.length; i++) {
        out.push({
            layer: i + 1,
            cause: stack[i],
            effect: `TMP-${i + 1}`,
            axiom: `AX-${i + 1}`,
            atom: `AT-${i + 1}`
        });
    }

    return out;
}
