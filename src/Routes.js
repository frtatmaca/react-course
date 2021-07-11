import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';


import PageLoader from './components/page-loader';
const NoMatchPage = lazy(() => import('./components/not-found/NoMatchPage'));


const EntryLayout = lazy(() => import('./containers/entry-page'));


const Routes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => {
                        return (<EntryLayout {...props} />)
                    }}
                />
                <Route component={NoMatchPage} />
            </Switch>
        </Suspense>
    )
}

Routes.propTypes = {
    location: PropTypes.object
}

export default Routes;