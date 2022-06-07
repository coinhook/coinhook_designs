import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import "../styles/app.scss";
import type { AppProps } from 'next/app'
import { useEffect } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
