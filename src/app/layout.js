import "./globals.css";
import "@/styles/animate.css";
import "@/styles/app.css";
import "@/styles/app.min.css";
import "@/styles/bootstrap.min.css";
import "@/styles/datepicker.min.css";
import "@/styles/fontawesome.css";
import "@/styles/icofont.css";
import "@/styles/magnific-popup.css";
import "@/styles/OverlayScrollbars.min.css";
import "@/styles/owl.carousel.min.css";
import "@/styles/owl.theme.default.min.css";
import "@/styles/plugins.css";
import "@/styles/select2.min.css";
import "@/styles/slick-theme.css";
import "@/styles/slick.css";
import "@/styles/slider-range.css";
import "@/styles/tippy.css";
import Script from "next/script";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { AppProvider } from "@/provider/AppProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Indi Tour",
  icons: {
    icon: "/images/logo/darklogo.png",
    shortcut: "/images/logo/darklogo.png",
    apple: "/images/logo/darklogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
          rel="stylesheet"
        ></link>
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/script/app.js" strategy="afterInteractive" />
        <Script src="/script/app.min.js" strategy="afterInteractive" />
        <Script src="/script/bootstrap.min.js" strategy="afterInteractive" />
        <Script
          src="/script/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script src="/script/instafeed.min.js" strategy="afterInteractive" />
        <Script src="/script/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/script/jquery-2.2.4.min.js" strategy="afterInteractive" />
        <Script src="/script/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/script/jquery.appear.js" strategy="afterInteractive" />
        <Script
          src="/script/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/script/jquery.easing.1.3.js"
          strategy="afterInteractive"
        />
        <Script
          src="/script/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/script/jquery.overlayScrollbars.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/script/jquery.scrollUp.min.js"
          strategy="afterInteractive"
        />
        <Script src="/script/moment.min.js" strategy="afterInteractive" />
        <Script src="/script/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/script/plugins.js" strategy="afterInteractive" />
        <Script src="/script/popper.min.js" strategy="afterInteractive" />
        <Script src="/script/scrollax.min.js" strategy="afterInteractive" />
        <Script src="/script/select2.min.js" strategy="afterInteractive" />
        <Script src="/script/slick.min.js" strategy="afterInteractive" />
        <Script src="/script/slider-range.js" strategy="afterInteractive" />
        <Script src="/script/tippy.all.min.js" strategy="afterInteractive" />
        <Script src="/script/TweenMax.min.js" strategy="afterInteractive" />
        <Script src="/script/vivus.min.js" strategy="afterInteractive" />
        <Script src="/script/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/script/wow.js" strategy="afterInteractive" />
      </head>

      <body>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            // Default style
            style: {
              background: "#333",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            // Success style
            success: {
              style: {
                background: "#16a34a", // green-600
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#16a34a",
              },
            },
            // Error style
            error: {
              style: {
                background: "#dc2626", // red-600
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#dc2626",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

// import "./globals.css";
// import "@/styles/animate.css";
// import "@/styles/app.css";
// import "@/styles/app.min.css";
// import "@/styles/bootstrap.min.css";
// import "@/styles/datepicker.min.css";
// import "@/styles/fontawesome.css";
// import "@/styles/icofont.css";
// import "@/styles/magnific-popup.css";
// import "@/styles/OverlayScrollbars.min.css";
// import "@/styles/owl.carousel.min.css";
// import "@/styles/owl.theme.default.min.css";
// import "@/styles/plugins.css";
// import "@/styles/select2.min.css";
// import "@/styles/slick-theme.css";
// import "@/styles/slick.css";
// import "@/styles/slider-range.css";
// import "@/styles/tippy.css";

// import Script from "next/script";

// import Navbar from "@/components/Layout/Navbar";
// import Footer from "@/components/Layout/Footer";
// import { AppProvider } from "@/provider/AppProvider";
// import { Toaster } from "react-hot-toast";

// import JqueryLoader from "@/components/JQueryLoader/JqueryLoader"

// export const metadata = {
//   title: "Indi Tour",
//   icons: {
//     icon: "/images/logo/darklogo.png",
//     shortcut: "/images/logo/darklogo.png",
//     apple: "/images/logo/darklogo.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css?family=Lato&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
//           rel="stylesheet"
//         />

//         {/* Only jQuery CDN keep here */}
//         <Script
//           src="https://code.jquery.com/jquery-3.7.1.min.js"
//           strategy="beforeInteractive"
//         />
//       </head>

//       <body>
//         <AppProvider>
//           <Navbar />
//           {children}
//           <Footer />
//         </AppProvider>

//         {/* Load all jQuery plugins dynamically */}
//         <JqueryLoader />

//         <Toaster
//           position="top-right"
//           reverseOrder={false}
//           toastOptions={{
//             style: {
//               background: "#333",
//               color: "#fff",
//               fontSize: "14px",
//               borderRadius: "8px",
//               padding: "12px 16px",
//             },
//             success: {
//               style: { background: "#16a34a" },
//               iconTheme: { primary: "#fff", secondary: "#16a34a" },
//             },
//             error: {
//               style: { background: "#dc2626" },
//               iconTheme: { primary: "#fff", secondary: "#dc2626" },
//             },
//           }}
//         />
//       </body>
//     </html>
//   );
// }
