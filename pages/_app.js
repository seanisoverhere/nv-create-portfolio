import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>My Portfolio Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Description meta tag here */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="px-8 lg:px-12">
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
