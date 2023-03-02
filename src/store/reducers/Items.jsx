const initialStore = []

const itemsCount = (state = initialStore, { type, payload }) => {
  switch (type) {
    case 'ADD':
			const itemIdx = state.findIndex((i)=> i.id === payload)
			if(itemIdx>=0){
				state[itemIdx].count+=1
			}
			else{
				state = [...state, {count:1, id:payload}]
			}
      return state
    case 'REMOVE':
			const itemIndex = state.findIndex((i) => i.id === payload)
			if(itemIndex>=0){
				if (state[itemIndex].count===1){
					state.splice(itemIndex, 1)
				}
				state[itemIndex].count -= 1
			}
      return state
    default:
      return state
  }
}

export default itemsCount
