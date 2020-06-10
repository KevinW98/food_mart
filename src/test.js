import firebase from "firebase";
import 'firebase/firestore';

const fireStore =firebase.firestore();
fireStore.collection('users').
doc('5xf2ng1eE81FmauKJK55').
collection('cartItems').
doc('0XxKcqpdyRiNZT2tKBxd')
