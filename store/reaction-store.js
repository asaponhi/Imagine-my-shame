export const state = () => ({
  result: {
    "date": "2022-07-14", 
    "reaction_1": 0,
    "reaction_2": 0, 
    "reaction_3": 0,
    "reaction_4": 0,
    "reaction_5": 0, 
  }
})

export const mutations = {
  setReactionResult(state, reaction) {
    state.result = reaction
  },
}

export const getters = {
  getReactionResultState(state) {
    return state.result
  },
}

export const actions = {
  onMessageReaction({ commit }, { reactions }) {
    commit('setReactionResult', reactions)
  },
}
