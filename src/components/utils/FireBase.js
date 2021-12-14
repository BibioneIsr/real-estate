// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
class FireBase {
    constructor() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyA554p_d1EqFhjqAwZj2sAo3tsj7uL3kr4",
            authDomain: "real-estate-e9280.firebaseapp.com",
            projectId: "real-estate-e9280",
            storageBucket: "real-estate-e9280.appspot.com",
            messagingSenderId: "416207340386",
            appId: "1:416207340386:web:3241894597b8797f9ca23b"
        };
    
        // Initialize Firebase
        initializeApp(firebaseConfig);
        
        // this.db = firebase.database();
    }
    read(table) {
        return this.db.ref().child(table).get()
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const data = snapshot.val();
                    console.log(data);
                } else {
                    console.log([]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function InitFireBase() {
    const database = window.database;
    useEffect(() => {
        console.log(database);
    }, [database]);
}
const fb = new FireBase();

const read = () => {
    fb.read("users");
}
export {
    InitFireBase,
    read
};

