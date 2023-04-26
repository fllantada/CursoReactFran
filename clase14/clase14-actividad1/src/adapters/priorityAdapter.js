export const createPriorityAdaptedFromFirestore = (doc) => {
    const fields = doc.data()

    const taskAdapted = {
        id: doc.id,
        text: fields.text,
        value: fields.value
    }

    return taskAdapted
}