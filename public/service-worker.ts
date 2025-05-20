declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = "design-workflow-app-v1";
const urlsToCache = [
  "/",
  "/manifest.json",
  "/lookscout/lookscout.png",
  "/hero/GitLab.png",
  "/hero/lookscout.png",
];

// Install service worker and cache the static assets
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache: Cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
});

// Serve cached content when offline
self.addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response: Response | undefined) => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(() => {
        if (event.request.url.includes("/api/")) {
          return new Response(
            JSON.stringify({
              error:
                "You are offline and the requested resource is not available locally.",
            }),
            {
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      });
    }),
  );
});

// Handle notification click event
self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

// Handle push notification
self.addEventListener("push", (event: PushEvent) => {
  const data = event.data
    ? event.data.json()
    : { title: "New Update!", body: "Check out what's new in the app." };

  const options: NotificationOptions = {
    body: data.body,
    icon: "/lookscout/lookscout.png",
    badge: "/hero/lookscout.png",
    vibrate: [100, 50, 100],
    data: {
      url: data.url || "/",
    },
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});
