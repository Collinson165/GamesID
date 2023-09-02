import Document, { Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                    <link href="https://fonts.cdnfonts.com/css/press-start-2p" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;