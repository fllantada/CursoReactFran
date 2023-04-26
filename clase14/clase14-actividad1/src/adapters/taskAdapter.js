export const createTaskAdaptedFromFirestore = (doc) => {
    const fields = doc.data()

    const taskAdapted = {
        id: doc.id,
        text: fields.text,
        completed: fields.completed,
        priority: fields.priority
    }

    return taskAdapted
}