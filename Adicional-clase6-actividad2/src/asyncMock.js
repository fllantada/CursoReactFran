const tasks = [
    { id: '1', text: 'Hacer la tarea 1', completed: false},
    { id: '2', text: 'Hacer la tarea 2', completed: false},
    { id: '3', text: 'Hacer la tarea 3', completed: false}
]

export const getTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(tasks)
        }, 1000)
    })
}