import "./bootstrap";

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import Layout from "./Shared/Layout";

createInertiaApp({
    // resolve: (name) => require(`./Pages/${name}`),
    // resolve: (name) => import(`./Pages/${name}`),

    resolve: (name) => {
        let page = import(`./Pages/${name}`);

        if (page.layout === undefined) {
            page.layout = Layout;
        }
        return page;
    },

    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

InertiaProgress.init();
