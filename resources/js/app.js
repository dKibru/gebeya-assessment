import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Notifications from '@kyvg/vue3-notification'
// import VueSimpleAlert from 'vue3-simple-alert'
import { vfmPlugin } from 'vue-final-modal'



InertiaProgress.init()
const Vue = createInertiaApp({
    // resolve: name => import(`./Pages/${name}`),
    resolve: (name) => {
        return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue"))
    },
    setup({ el, App, props, plugin }) {
        // const vuetify = createVuetify()
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(vfmPlugin)
            .use(Notifications)
            // .use(VueSimpleAlert)
            .mount(el)
    },
})

