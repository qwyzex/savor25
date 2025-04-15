import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <div id="LOVE">
                <ul>
                    <li>
                        <p>HOME</p>
                    </li>
                    <li>
                        <p>REGISTER</p>
                    </li>
                    <li>
                        <p>GUIDEBOOK</p>
                    </li>
                    <li>
                        <p>OF US</p>
                    </li>
                </ul>
            </div>
            <Head />
            <body id="bodyReal">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
