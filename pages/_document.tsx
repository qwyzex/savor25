import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <div id="LOVE">
                <ul>
                    <li>
                        <a className="link-wrapper" href="#">
                            {/* <span className="fallback">Index</span> */}
                            <div className="shape-wrapper">
                                <div className="shape red-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#F9336B"
                                            points="29.5,8.5 150.7,0 108.1,32.7 3.1,47"
                                        />
                                    </svg>
                                </div>
                                <div className="shape cyan-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#FFB412"
                                            points="0.3,17 125.1,0 68.8,45.6 24.3,39"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <h1>TITLE</h1>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="link-wrapper" href="#">
                            {/* <span className="fallback">Ask</span> */}
                            <div className="shape-wrapper">
                                <div className="shape red-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#F9336B"
                                            points="0,7.1 127.3,0 32.3,64 4.8,58.2"
                                        />
                                    </svg>
                                </div>
                                <div className="shape cyan-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#FFB412"
                                            points="14,0.5 127.4,0 77.4,164 2.3,61.1"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <h1>TITLE</h1>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="link-wrapper" href="#">
                            {/* <span className="fallback">Archive</span> */}
                            <div className="shape-wrapper">
                                <div className="shape red-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#F9336B"
                                            points="15.5,0 70.7,0 118.1,32.7 43.1,47"
                                        />
                                    </svg>
                                </div>
                                <div className="shape cyan-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#FFB412"
                                            points="17.3,0 105.1,0 68.8,45.6 24.3,39"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <h1>TITLE</h1>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="link-wrapper" href="#">
                            {/* <span className="fallback">About</span> */}
                            <div className="shape-wrapper">
                                <div className="shape red-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#F9336B"
                                            points="19.5,0 110.7,0 80.1,32.7 3.1,47"
                                        />
                                    </svg>
                                </div>
                                <div className="shape cyan-fill jelly">
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 108.1 47"
                                        enable-background="new 0 0 108.1 47"
                                    >
                                        <polygon
                                            fill="#FFB412"
                                            points="11,3 85.1,0 118.8,45.6 14.3,29"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <h1>TITLE</h1>
                            </div>
                        </a>
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
