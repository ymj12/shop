import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carlist: []
    },
    mutations: {
        addcart(state, obj) {
            const oldinfo = state.carlist.find(item => item.iid === obj.iid)
            if (oldinfo) {
                oldinfo.count += 1
            } else {
                obj.count = 1
                obj.checked = true
                state.carlist.push(obj)
            }
        }
    },
    actions: {},
    getters: {
        carlist(state) {
            return state.carlist
        },
        carcount(getters) {
            return getters.carlist.length
        }
    }

})