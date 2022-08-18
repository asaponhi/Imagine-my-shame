import type { Ref } from 'vue'

type ControllerState = {
  questionerFlag: boolean;
  answererFlag: boolean;
}

export const useControllerStore = () => {
  return new ControllerStore()
}

class ControllerStore {
  _state: Ref<ControllerState>
  constructor() {
    this._state = useState<ControllerState>('controller_state', () => ({
      questionerFlag:false,
      answererFlag:false,
    }))
  }

  get state() {
    return readonly(this._state)
  }

  setQuestionerController(flag: boolean) {
    console.log
    this._state.value.questionerFlag = flag
  }
  
  setAnswererController(flag: boolean) {
    this._state.value.answererFlag = flag
  }
}