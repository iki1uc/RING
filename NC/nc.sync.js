// NC/nc.sync.js

export function NC_SYNC(core, sli) {
    return {
        core,
        sli,
        bind: true,
        state: "SYNCED"
    };
}
