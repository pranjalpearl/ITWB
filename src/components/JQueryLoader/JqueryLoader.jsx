"use client";
import { useEffect } from "react";
export default function JqueryLoader() {
  useEffect(() => {
    const scripts = [
      "/script/app.js",
      "/script/app.min.js",
      "/script/bootstrap.min.js",
      "/script/imagesloaded.pkgd.min.js",
      "/script/instafeed.min.js",
      "/script/isotope.pkgd.min.js",
      "/script/jquery-2.2.4.min.js",
      "/script/jquery-ui.js",
      "/script/jquery.appear.js",
      "/script/jquery.counterup.min.js",
      "/script/jquery.easing.1.3.js",
      "/script/jquery.magnific-popup.min.js",
      "/script/jquery.overlayScrollbars.min.js",
      "/script/jquery.scrollUp.min.js",
      "/script/moment.min.js",
      "/script/owl.carousel.min.js",
      "/script/plugins.js",
      "/script/popper.min.js",
      "/script/scrollax.min.js",
      "/script/select2.min.js",
      "/script/slick.min.js",
      "/script/slider-range.js",
      "/script/tippy.all.min.js",
      "/script/TweenMax.min.js",
      "/script/vivus.min.js",
      "/script/waypoints.min.js",
      "/script/wow.js",
    ];
    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return null;
}
