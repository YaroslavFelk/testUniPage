import React from "react";
import '../styles/globals.css'
import {Provider} from "react-redux";
import {useStore} from "../redux/store";
import Head from "next/head";



const MyApp = ({Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}


export default MyApp
