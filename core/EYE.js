// ---------------------------------------------------------
// EYE.js — PQ‑Sensor · History‑Lens · Motion‑Tracker
// ---------------------------------------------------------
// Dieses Modul deckt seine Funktionen selbst auf.
// Keine Fragen, keine Abhängigkeiten — EYE zeigt, was es kann.
// ---------------------------------------------------------

export const EYE = {

    // -----------------------------------------------------
    // 1. PQ‑SENSOR
    // -----------------------------------------------------
    pqSensor(pq) {
        return {
            type: "PQ‑Sensor",
            value: pq.value,
            intensity: pq.intensity,
            pulse: pq.pulse,
            role: pq.role,
            reveal: `PQ(${pq.value}) · INT(${pq.intensity}) · PULSE(${pq.pulse}) · ROLE(${pq.role})`
        };
    },

    // -----------------------------------------------------
    // 2. HISTORY
