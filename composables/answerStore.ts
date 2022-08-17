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
      answer:'test',
    }))
  }

  get state() {
    return readonly(this._state)
  }

  setAnswer(answer: string) {
    this._state.value.answer = answer
  }
}