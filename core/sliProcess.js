import { coreProcess } from "../core/coreProcess.js";

export function sliProcess() {
    const { team, max, min } = coreProcess();

    drawTeam(team);
    drawMarker(max.id, "max");
    drawMarker(min.id, "min");

    return { team, max, min };
}
