
import firebase from './firebase'
export function double(n){
    return n*2
}

export function triple(n){
    return n*3
}

export function Quadra(n){
    return n*4
}


function getListe(collection) {
    return new Promise((res , reg)=>{
        firebase.firestore().collection(collection).get()
        .then(e =>{
            res(e.docs);
        })
        .catch(e =>{
            reg(e);
        })
    });
}
export {getListe}