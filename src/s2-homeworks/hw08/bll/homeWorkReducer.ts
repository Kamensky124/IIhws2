import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            if (action.payload == 'up') {
                state.sort(((a, b)=> a.name.localeCompare(b.name)))
                // state.sort()
            }
            if (action.payload == 'down') {
                state.sort(((a, b)=> b.name.localeCompare(a.name)))
            }
            return state // need to fix
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(u => u.age>=action.payload) // need to fix
        }
        default:
            return state
    }
}
