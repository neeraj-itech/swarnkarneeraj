if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../serviceWorker.js")
      .then((res) => console.log("Service Worker Registered ", res))
      .catch((err) => console.log("Service worker not registered ", err));
  });
}
