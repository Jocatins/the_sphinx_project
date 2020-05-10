import uuid from 'react-uuid';

export const projectReducer = ( state, action ) => {
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state, {
                title: action.project.title,
                author: action.project.author,
                id: uuid()
            }]
        case 'REMOVE_PROJECT':
            return state.filter(project => project.id !== action.id)
        default:
            return state
    }

}