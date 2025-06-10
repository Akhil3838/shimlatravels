import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "AalsiBackpackers",
  description: "Pause.Discover.Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="assets/img/images/logo1.png" type="image/x-icon" />

        {/* External CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/daterangepicker.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />

        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KQ4TFK4P');`,
          }}
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQ4TFK4P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}

        {/* External JS */}
        <Script src="/assets/js/vendor/jquary-3.6.0.min.js"></Script>
        <Script src="/assets/js/vendor/bootstrap-bundle.js"></Script>
        <Script src="/assets/js/vendor/imagesloaded-pkgd.js"></Script>
        <Script src="/assets/js/vendor/waypoints.min.js"></Script>
        <Script src="/assets/js/vendor/venobox.min.js"></Script>
        <Script src="/assets/js/vendor/odometer.min.js"></Script>
        <Script src="/assets/js/vendor/meanmenu.js"></Script>
        <Script src="/assets/js/vendor/jquery.isotope.js"></Script>
        <Script src="/assets/js/vendor/swiper.min.js"></Script>
        <Script src="/assets/js/vendor/split-type.min.js"></Script>
        <Script src="/assets/js/vendor/gsap.min.js"></Script>
        <Script src="/assets/js/vendor/scroll-trigger.min.js"></Script>
        <Script src="/assets/js/vendor/smooth-scroll.js"></Script>
        <Script src="/assets/js/vendor/nice-select.js"></Script>
        <Script src="/assets/js/vendor/daterangepicker.min.js"></Script>
        <Script src="/assets/js/vendor/moment.min.js"></Script>
        <Script src="/assets/js/contact.js"></Script>
        <Script src="/assets/js/main.js"></Script>
      </body>
    </html>
  );
}
