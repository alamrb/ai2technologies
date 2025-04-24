const baseURL = "https://api.buyrealbrands.com/v3/";
// const IMAGE_URL = "https://ukbd-real-brands.s3.us-east-2.amazonaws.com/";
const IMAGE_URL = "https://minio.hrapp.uk/ukbd-real-brands/";
const GOOGLE_KEY = 'AIzaSyA0j_iI4ofSPVmpFotExikp-7YzCzqjOYE';
const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
const appStatic = {
    country: "Bangladesh",
    address: "Dhaka, Bangladesh",
    city: "Dhaka District",
    latitude: 23.810332,
    longitude: 90.4125181,
    IS_USE_AWS: true,
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyA0j_iI4ofSPVmpFotExikp-7YzCzqjOYE",
        authDomain: "lithe-record-248412.firebaseapp.com",
        databaseURL: "https://lithe-record-248412-default-rtdb.firebaseio.com",
        projectId: "lithe-record-248412",
        storageBucket: "lithe-record-248412.appspot.com",
        messagingSenderId: "992368544641",
        appId: "1:992368544641:web:8eda65b603031673aa7680"
    }
}
export {
    appStatic, baseURL, GOOGLE_KEY, IMAGE_URL
};
