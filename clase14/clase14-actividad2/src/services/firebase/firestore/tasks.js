import { collection, getDocs, query, orderBy, updateDoc, doc } from "firebase/firestore"
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

export const updateTask = (taskId, data) => {
    const taskRef = doc(db, 'tasks', taskId)

    return updateDoc(taskRef, data).then(() => {
        return true
    }).catch(error => {
        return error
    })
}