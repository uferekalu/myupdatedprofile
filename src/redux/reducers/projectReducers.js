import * as actionTypes from '../constants/projectConstants';

export const getProjectsReducer = (state = { projects: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_PROJECTS_REQUEST:
            return {
                loading: true,
                projects: []
            }
        case actionTypes.GET_PROJECTS_SUCCESS:
            return {
                loading: false,
                projects: action.payload
            }
        case actionTypes.GET_PROJECTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getProjectDetailsReducer = (state = { project: {} }, action) => {
    switch(action.type) {
        case actionTypes.GET_PROJECT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_PROJECT_DETAILS_SUCCESS:
            return {
                loading: false,
                project: action.payload,
            }
        case actionTypes.GET_PROJECT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PROJECT_DETAILS_RESET:
            return {
                project: {}
            }
        default:
            return state
    }
}