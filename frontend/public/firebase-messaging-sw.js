importScripts("https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js"
);

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
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  console.log("in background", payload);
  const title = "Hello world";
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});
