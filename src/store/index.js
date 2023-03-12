import { createStore } from 'vuex'
import {taskModule} from '@/store/taskModule';
export default createStore({
    state: {
        tasks: [],
        search: '',
      },
      getters: {
        search: state => state.search,
      },
      mutations: {
        updateValue(state, payload) {
          state.tasks.push(payload)
        },
        updateSearch(state, payload) {
          state.search = payload
        },
        filter(state,payload){
          state.tasks = payload
        }
      }
})
