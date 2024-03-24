const APP = {
  SW: null,
  init() {
    //Called after DOMContentLoaded
    if ("serviceWorker" in navigator) {
      //1. Register a service worker hosted at the root of site using the default scope
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/",
        })
        .then((registration) => {
          APP.SW =
            registration.installing ||
            registration.waiting ||
            registration.active;
          console.log("Service worker registered");
        });
      //2. See if the page is currently has service worker
      if (navigator.serviceWorker.controller) {
        console.log("We have a service worker installed!");
      }
      //3. Register a handler to detect when a new or updated service worker is installed
      navigator.serviceWorker.oncontrollerchange = (event) => {
        console.log("A NEW SERVICE WORKER IS Activate!");
      };
      //4. Remove/unregister a service workers
      //   navigator.serviceWorker.getRegistration().then((regs) => {
      //     for (let reg of regs) {
      //       reg.unregister().then((isUnReg) => {
      //         console.log(isUnReg);
      //       });
      //     }
      //   });
      //5. listen to messages from service worker
    } else {
      console.log("Service workers are not supported. ");
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init());
