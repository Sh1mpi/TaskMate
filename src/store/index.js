import { createStore } from 'vuex'
import {taskModule} from '@/store/taskModule';
export default createStore({
    state: {
        tasks: []
      },
      mutations: {
        updateValue(state, payload) {
            debugger;
          state.tasks.push(payload)
        }
      }
})
