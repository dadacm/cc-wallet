import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:3000/"
})

const releaseModule = {
    state:{
        release: [],
        total: 0
    },
    getters:{
        allReleases : state => state.release,
        total: state => state.total

    },
    actions:{
        saveRelease: async ({commit}, release) => {
            await http.post('/count', release)
            commit("addRelease", release);
            commit("sumTotal");    
            location.reload();
        },

        updateTotal: ({ commit }) => commit("sumTotal"),

        removeRelease: async ({ commit }, id) =>  {
            const resposta = await http.delete(`/count/${id}`)
            if(resposta.status === 204){
            await commit("removeRelease", id)
            await commit("sumTotal");
        }
        },

        reloadReleases: async ({commit}) => {
            const allReleases = await http.get('/count');
            commit("updateReleases", allReleases.data)
            commit("sumTotal");
        }
    },
    mutations: {
        updateReleases: 
        (state, release) => state.release = release,
        

      addRelease: 
      (state, release) => state.release.unshift(release),
      sumTotal: state => {
          const total = 
          state.release.length > 0 ? state.release.map(release => release.value)
          .reduce((soma, value) => soma + value): 0;
          state.total = total
    },
    removeRelease: (state, id) => {
        state.release = state.release.filter(release => release.id !== id)
    }
}
}
export default releaseModule