import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { createTaskAdaptedFromFirestore } from "../../../adapters/taskAdapter"
import { db } from "../firebaseConfig"

export const getTasks = () => {
    const tasksRef = query(collection(db, 'tasks'), orderBy('priority', 'desc'))
    
    return getDocs(tasksRef).then(snapshot => {
        const tasksAdapted = snapshot.docs.map(doc => createTaskAdaptedFromFirestore(doc))
        return tasksAdapted
    }).catch(error => {
        return error
    })
}