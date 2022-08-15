import type { Ref } from 'vue'

type CounterState = {
  count: number;
}

export const useCounterStore = () => {
  return new CounterStore()
}

class CounterStore {
  _state: Ref<CounterState>
  constructor() {
    this._state = useState<CounterState>('counter_state', () => ({
      count:0,
    }))
  }

  get state(){
    return readonly(this._state)
  }

  countUp(){
    this.setCount(this._state.value.count +1)
  }

  setCount(count: number){
    this._state.value.count = count
  }

}