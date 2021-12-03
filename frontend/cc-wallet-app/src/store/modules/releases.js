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
        saveRelease: ({commit}, release) => {
            commit("addRelease", release);
            commit("sumTotal");
        },

        updateTotal: ({ commit }) => commit("sumTotal"),

        removeRelease: ({ commit }, id) => {
            commit("removeRelease", id)
            commit("sumTotal");
        }
    },
    mutations: {
      addRelease: (state, release) => state.release.unshift(release),
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