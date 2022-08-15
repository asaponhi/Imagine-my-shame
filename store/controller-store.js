export const state = () => ({
  howToUseFlag: false,
  commentFlag: true,
  commentFlowFlag: true,
  fullScreenFlag: false,
  reactionFlag: true,
})

export const mutations = {
  setHowToUse(state) {
    state.howToUseFlag = !(state.howToUseFlag)
  },
  setComment(state) {
    state.commentFlag = !(state.commentFlag)
  },
  setCommentFlow(state) {
    state.commentFlowFlag = !(state.commentFlowFlag)
  },
  setFullScreen(state) {
    state.fullScreenFlag = !(state.fullScreenFlag)
  },
  setReaction(state) {
    state.reactionFlag = !(state.reactionFlag)
  },
}

export const getters = {
  getHowToUseState(state) {
    return state.howToUseFlag
  },
  getCommentState(state) {
    return state.commentFlag
  },
  getCommentFlowState(state) {
    return state.commentFlowFlag
  },
  getFullScreenState(state) {
    return state.fullScreenFlag
  },
  getReactionState(state) {
    return state.reactionFlag
  },
}

export const actions = {
  clickHowToUse({ commit },) {
    commit('setHowToUse')
  },
  clickComment({ commit },) {
    commit('setComment')
  },
  clickCommentFlow({ commit },) {
    commit('setCommentFlow')
  },
  clickFullScreen({ commit },) {
    commit('setFullScreen')
  },
  clickReaction({ commit },) {
    commit('setReaction')
  },
}
