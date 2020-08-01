/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "../seo/next-seo.config";
import GlobalCss from "../styles/globalCss";

import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <DefaultSeo config={{ ...SEO }} />
      <Component {...pageProps} />
      <GlobalCss />
    </>
  );
}

export default MyApp;
