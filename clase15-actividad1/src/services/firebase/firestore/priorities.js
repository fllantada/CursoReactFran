import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { createPriorityAdaptedFromFirestore } from '../../../adapters/priorityAdapter'
import { db } from "../firebaseConfig"

export const getPriorities = () => {
    const prioritiesRef = query(collection(db, 'priorities'), orderBy('value', 'desc'))
    
    return getDocs(prioritiesRef).then(snapshot => {
        const prioritiesAdapted = snapshot.docs.map(doc => createPriorityAdaptedFromFirestore(doc))
        return prioritiesAdapted
    }).catch(error => {
        return error
    })
}