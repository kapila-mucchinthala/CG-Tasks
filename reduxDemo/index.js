const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
    type: BUY_CAKE,
    info:'First Redux action'
   }
}

const initState = {
    numOfCakes:10
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default: return state
    }
}