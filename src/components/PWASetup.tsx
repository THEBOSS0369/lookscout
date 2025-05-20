"use client";

import { useEffect } from "react";

export default function PWASetup() {
  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.ts")
          .then(
            (registration: ServiceWorkerRegistration) => {
              console.log(
                "ServiceWorker registration successful with scope: ",
                registration.scope,
              );
            },
            (err: Error) => {
              console.error("ServiceWorker registration failed: ", err);
            },
          )
          .catch((err: Error) => {
            console.error("ServiceWorker registration error: ", err);
          });
      });
    }

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);

  return null;
}
