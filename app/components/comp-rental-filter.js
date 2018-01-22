import Component from '@ember/component';

export default Component.extend({
    classNames: ["list-filter"],
    value: "",

    init() {
        this._super(...arguments);
        this.get("filter")("").then(results => this.set("results", results));
    },

    actions: {
        handleFilter() {
            let value = this.get("value");
            let action = this.get("filter");
            action(value).then(results => this.set("results", results));
        }
    }
});
