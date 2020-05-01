/* eslint-disable react/no-array-index-key */
import React, { lazy, Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { LoadingScreen } from "./loadingScreen/loadingScreen";


const routesConfig = [
    {
        exact: true,
        path: "/",
        component: lazy(() => import("./planner/planner")),
    },
    {
        exact: true,
        path: "/play",
        component: lazy(() => import("./metronome/metronome")),
    },
];

const renderRoutes = (routes) =>
    routes ? (
        <Suspense fallback={<LoadingScreen />}>
            <Switch>
                {routes.map((route, i) => {
                    const Layout = route.layout || Fragment;
                    const Component = route.component;
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Layout>
                                    {route.routes ? (
                                        renderRoutes(route.routes)
                                    ) : (
                                            <Component {...props} />
                                        )}
                                </Layout>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    ) : null;

function Routes() {
    return renderRoutes(routesConfig);
}

export default Routes;
