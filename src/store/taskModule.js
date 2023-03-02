export const taskModule = {
    state: {
        tasks: ['aa']
    },
    mutations: {
        addTask(state){
            tasks.push('kek')
        },
        deleteTask(state){
            tasks.pop()
        }
    }
}