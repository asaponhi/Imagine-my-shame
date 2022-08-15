export const state = () => ({
  result: ''
})

export const mutations = {
  setAnswerResult(state, answer) {
    state.result = answer
  },
}

export const getters = {
  getAnswerResultState(state) {
    return state.result
  },
}

export const actions = {
  onMessageAnswer({ commit }, { answer }) {
    commit('setAnswerResult', answer)
  },
}
