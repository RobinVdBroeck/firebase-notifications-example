import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXn2UpxOMkK_M760PqFpEh9s1AexMG6BM",
  authDomain: "notification-test-320f6.firebaseapp.com",
  databaseURL: "https://notification-test-320f6.firebaseio.com",
  projectId: "notification-test-320f6",
  storageBucket: "notification-test-320f6.appspot.com",
  messagingSenderId: "794780001980",
  appId: "1:794780001980:web:d480693500005ce65ed2b9",
  measurementId: "G-Q5S8D6JF3M"
};

/**
 * @param {*} dependencies Requires a router and a store
 */
export async function setup({ router, store }) {
  firebase.initializeApp(config);
  firebase.analytics();

  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(
    "BJW1qMomDpYqoIuGgL3A_nNlXa13umYvocrjCiD0RnRBquNdlisIN8S491cVWGUpsr1TZs-hGTE4vfFQFMQirGM"
  );
  try {
    await messaging.requestPermission();
    store.dispatch("allowPush", true);

    const token = await messaging.getToken();
    store.dispatch("fetchMessagingToken", token);
    messaging.onMessage({
      next: payload => {
        console.log("Received message", payload);
      },
      error: err => console.error("Error", err),
      complete: () => console.log("completed")
    });
  } catch {
    store.dispatch("allowPush", false);
  }

  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      store.dispatch("fetchUser", null);
      if (router.currentRoute.name !== "login") {
        router.replace({ name: "login" });
      }
    } else {
      store.dispatch("fetchUser", user);
      if (router.currentRoute.name !== "notifications") {
        router.replace({ name: "notifications" });
      }
    }
  });
}
