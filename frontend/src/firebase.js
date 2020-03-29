import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";
import "firebase/auth";
import store from "./store";

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

export function setup(router) {
  firebase.initializeApp(config);
  firebase.analytics();

  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(
    "BJW1qMomDpYqoIuGgL3A_nNlXa13umYvocrjCiD0RnRBquNdlisIN8S491cVWGUpsr1TZs-hGTE4vfFQFMQirGM"
  );

  firebase.auth().onAuthStateChanged(user => {
    console.log(router.currentRoute.name, user);
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
