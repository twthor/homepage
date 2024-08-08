import React from "react";
import { Helmet } from "react-helmet";

function Header() {
  return (
    <>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PDLP8CEBF3"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PDLP8CEBF3');
          `}
        </script>
        <meta charSet="UTF-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tobias With Thorsen</title>
      </Helmet>
      {/* <header className="App-header">
        <h1 className="signature" align="center">Tobias With Thorsen</h1>
      </header> */}
    </>
  );
}

export default Header;
