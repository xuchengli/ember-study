import Route from '@ember/routing/route';
import { scheduleOnce } from "@ember/runloop";

const CarbonComponents = window.CarbonComponents;

export default Route.extend({
    actions: {
        didTransition() {
            scheduleOnce("afterRender", this, () => {
                CarbonComponents.InteriorLeftNav.init(document.querySelector("[data-interior-left-nav]"));
            });
            return true;
        }
    }
});
