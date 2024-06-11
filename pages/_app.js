// pages/_app.js
import "framework7/css/bundle";
import "../styles/globals.css";
import { App } from "framework7-react";
import f7params from "../f7";

function MyApp({ Component, pageProps }) {
  return (
    <App params={f7params}>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
