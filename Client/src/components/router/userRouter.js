import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import { Route } from 'react-router-dom';

const userRouter = ({ component: Component, ...rest }) =>
    (
        <>
            <Header />
            <Route {...rest} render={ (props) =>
                <Component {...props}/>
            } />
            <Footer />
        </>
    )

export default userRouter;