import React from 'react';

import { Route } from 'react-router-dom';

const AdminRouter = ({ component: Component, ...rest }) =>
    (
        <>
            {/* <HeaderAdmin /> */}
            <Route {...rest} render={ (props) =>
                <Component {...props}/>
            } />
            {/* <FooterAdmin /> */}
        </>
    )

export default AdminRouter;