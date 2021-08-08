export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name <= b.name ? -1 : 1)
            }
            if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name <= b.name ? 1 : -1)
            }
        } return state
        case 'check': {
            return [...state]
                .filter(u => u.age > 18)
                .sort((a,b)=> a.age <= b.age ? -1 : 1 )
        }
        default: return state
    }
}