import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        
        <Html>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/yll8qlt.css" />
                
                {/* Paperform Performance Optimizations - Maximum Aggressive Preloading */}
                
                {/* Highest priority connections */}
                <link rel="preconnect" href="https://paperform.co" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://mlc28uxr.paperform.co" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://mlc28uxr.paperform.co/api" crossOrigin="anonymous" />
                
                {/* DNS prefetch for faster lookups */}
                <link rel="dns-prefetch" href="https://paperform.co" />
                <link rel="dns-prefetch" href="https://mlc28uxr.paperform.co" />
                
                {/* Maximum priority preloads for critical resources */}
                <link rel="preload" href="https://mlc28uxr.paperform.co/" as="document" crossOrigin="anonymous" />
                <link rel="preload" href="https://mlc28uxr.paperform.co/css/form/mlc28uxr/" as="style" crossOrigin="anonymous" />
                <link rel="preload" href="https://paperform.co/__embed.min.js" as="script" crossOrigin="anonymous" />
                
                {/* Aggressive API and resource prefetching */}
                <link rel="preload" href="https://mlc28uxr.paperform.co/api/v1/form/684ba2b89f9b675b66028318/event" as="fetch" crossOrigin="anonymous" />
                <link rel="prefetch" href="https://mlc28uxr.paperform.co/api/v1/form/684ba2b89f9b675b66028318/collect" crossOrigin="anonymous" />
                
                {/* Additional connection warming */}
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />

                {/*DO NOT MODIFY*/}
                {/*Quora Pixel Code (JS Helper)*/}
                {/*    <script*/}
                {/*        dangerouslySetInnerHTML={{*/}
                {/*            __html: `!function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');*/}
                {/*qp('init', 'b94f8c54f1874edc91f22ac77a7b721b');*/}
                {/*qp('track', 'ViewContent');*/}
                {/*${router.asPath === '/thank-you' || router.asPath === '/commercial-thank-you' ? (*/}
                {/*                `qp('track', 'GenerateLead');`*/}
                {/*            ) : null}`,*/}
                {/*        }}*/}
                {/*    />*/}

                {/*  {router.asPath === '/thank-you' || router.asPath === '/commercial-thank-you' ? (*/}
                {/*      <script*/}
                {/*          dangerouslySetInnerHTML={{*/}
                {/*              __html: `qp('track', 'GenerateLead');*/}
                {/*`,*/}
                {/*          }}*/}
                {/*      />*/}
                {/*  ) : null}*/}

                {/* Hot Jar Tracking */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:3695182,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');
                        r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                    `,
                    }}
                />
                {/* End Hot Jar Tracking */}

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WNXKG2W');`,
                    }}
                />
                {/* End Google Tag Manager */}

                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://q.quora.com/_/ad/b94f8c54f1874edc91f22ac77a7b721b/pixel?tag=ViewContent&noscript=1"
                    />
                </noscript>
                {/*End of Quora Pixel Code*/}

                <link rel='icon' type='image/x-icon' href='/favicon.ico' />
            </Head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WNXKG2W"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
