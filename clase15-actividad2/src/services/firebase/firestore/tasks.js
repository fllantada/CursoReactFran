import { collection, getDocs, query, orderBy, updateDoc, doc, where, addDoc, deleteDoc } from "firebase/firestore"
import { createTaskAdaptedFromFirestore } from "../../../adapters/taskAdapter"
import { db } from "../firebaseConfig"

export const getTasks = (uid) => {
    //Para que esta query compuesta funcione debe crearse un indice compuesto en firestore, caso contrario solo podra usarse una condicion simple.
    // const tasksRef = query(collection(db, 'tasks'), where('user', '==', uid))
    const tasksRef = query(collection(db, 'tasks'), where('user', '==', uid), orderBy('priority', 'desc'))
    
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

export const createTask = (newTaskWithUser) => {
    const tasksRef = collection(db, 'tasks')

    return addDoc(tasksRef, newTaskWithUser)
}

export const deleteTask = (taskId) => {
    const taskRef = doc(db, 'tasks', taskId)

    return deleteDoc(taskRef)
}