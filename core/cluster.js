export const CLUSTER = {

    map: {},

    register(id, data) {
        this.map[id] = data;
        return `CLUSTER REGISTERED → ${id}`;
    },

    get(id) {
        return this.map[id];
    },

    all() {
        return this.map;
    }
};
