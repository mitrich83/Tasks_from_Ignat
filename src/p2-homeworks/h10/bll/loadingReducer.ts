const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): typeof initState => {
    switch (action.type) {
        case 'SHOW-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}
type LoadingACType = {
    type: 'SHOW-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading:boolean):LoadingACType => (
    {type: 'SHOW-LOADING', isLoading } as const )