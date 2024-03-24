console.log({ self }, "------");

self.addEventListener("install", (ev) => {
  //Service worker is installed
  console.log("installed");
});
self.addEventListener("activate", (ev) => {
  //Service worker is actived
  console.log("Activated");
});
self.addEventListener("fetch", (ev) => {
  //Service worker intercepted fetch request
  console.log("intercept  a httpd request", ev.request);
});
self.addEventListener("message", (ev) => {
  //message from webpage
  console.log("installed installed ");
});
