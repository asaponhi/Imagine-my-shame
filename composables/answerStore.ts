import type { Ref } from 'vue'

type AnswerState = {
  answer: string;
}

export const useAnswerStore = () => {
  return new AnswerStore()
}

class AnswerStore {
  _state: Ref<AnswerState>
  constructor() {
    this._state = useState<AnswerState>('answer_state', () => ({
      answer: '',
      openFlag:false
    }))
  }

  get state() {
    return readonly(this._state)
  }

  setAnswer(answer: string) {
    console.log("setAnswer",answer)
    this._state.value.answer = answer
  }
  setOpenFlag(flag: boolean) {
    this._state.value.openFlag = flag
  }
}