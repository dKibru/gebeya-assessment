// import React from 'react'
// import { render } from 'react-dom'
// import { createInertiaApp } from '@inertiajs/inertia-react'
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// import React from 'react'
// import { render } from 'react-dom'
// import { createInertiaApp } from '@inertiajs/inertia-react'
//
// createInertiaApp({
//     // resolve: name => require(`./Pages/${name}`),
//     resolve: (name) => {
//         return resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob("./Pages/**/*.jsx"))
//     },
//     setup({ el, App, props }) {
//         render(<App {...props} />, el)
//     },
// })
//
//
// // createInertiaApp({
// //     resolve: name => require(`./Pages/${name}`),
// //     setup({ el, App, props }) {
// //         render(<App {...props} />, el)
// //     },
// // })
// createInertiaApp({
//     // resolve: async (name) => {
//     //     return (await import(`./Pages/${name}`)).default
//     // },
//     resolve: (name) => {
//         return resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob("./Pages/**/*.jsx"))
//     },
//     setup({el, App, props}) {
//         render(React.createElement(App, props), el)
//     },
// })
//
//
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createVuetify } from 'vuetify'
import { vfmPlugin } from 'vue-final-modal'
// import ElementPlus from 'element-plus'


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
            .mount(el)
    },
})

