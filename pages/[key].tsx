import * as React from "react"
import Layout from "../components/Layout"
import axios, {AxiosError, AxiosResponse} from "axios"
import DefaultErrorPage from "next/error";
import Head from "next/head";
import {Col, Container, Row} from "../components/Grid";
import Page from "../components/Page";

const PageRoute = ({response}) => {

  const {status, data} = response;

  if (!status || status !== 200) return <DefaultErrorPage statusCode={status}/>

  if (data && data.status !== 'publish') return <DefaultErrorPage statusCode={403}/>

  const {title, _yoast_wpseo_focuskw, _yoast_wpseo_metadesc, _yoast_wpseo_title} = data;

  return (
    <>
      <Head>
        <title>{_yoast_wpseo_title ? _yoast_wpseo_title : `${title} | SK Design`}</title>
        { _yoast_wpseo_metadesc && <meta name="description" content={_yoast_wpseo_metadesc} />}
        <meta name="robots" content="index, follow" />
      </Head>
    </>
  );
};


PageRoute.getInitialProps = async (ctx) => {
  const key = ctx.query.key;
  const response = await requestPage(key);
  return {response}
}
const requestPage = async (key) => {
  if (!key) return await (() => {
    return {status: 404}
  })()

  const response = await fetch(`http://130.193.62.187/wp-json/rest/v1/page/${key}`)

  return await (async (fetchResponse) => {
    return {
      data: await fetchResponse.json(),
      status: fetchResponse.status
    }
  })(response)
}





export default PageRoute;