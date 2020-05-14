import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCy0GoO_R0tiV68EN82jPDigGXL48RAlEA",
        authDomain: "catch-of-the-day-alex-vin.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-alex-vin.firebaseio.com", 
});


const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;