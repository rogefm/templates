const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebaseConfig = process.env.FIREBASE_CONFIG;
const firebaseConfigParsed = JSON.parse(firebaseConfig);

initializeApp({
  credential: cert(firebaseConfigParsed)
});

console.log('Access to DB');
const db = getFirestore();

const docRef = db.collection('whitelabel');
const newDoc = '{{label_name}}';

const main = async () => {
    console.log('Inserting new doc with data');
    const res = await docRef.doc(newDoc).set({
		  palette: {
        primary: '{{primary_color}}',
        secondary: '{{second_color}}'
	    }
    });

    console.log('Finished with success', res);
}

main();
