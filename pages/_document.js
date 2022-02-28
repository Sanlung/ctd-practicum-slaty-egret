import {Html, Head, Main, NextScript} from "next/document";

const Document = () => (
  <Html lang='en'>
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.12.1/css/all.css'
        crossOrigin='anonymous'></link>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
        integrity='sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=='
        crossOrigin='anonymous'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
