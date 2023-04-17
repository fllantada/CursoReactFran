const tasks = [
    { id: '1', text: 'Hacer la tarea 1', completed: false, priority: 1},
    { id: '2', text: 'Hacer la tarea 2', completed: false, priority: 2},
    { id: '3', text: 'Hacer la tarea 3', completed: false, priority: 3}
]

export const getTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(tasks)
        }, 1000)
    })
}