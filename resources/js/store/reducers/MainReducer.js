import {
    CSRF_TOKEN,
    LOGGED_IN,
    NOT_LOGGED_IN,
    SHOW_ANDERSEN_CONSUMED_FORM,
    HIDE_ANDERSEN_CONSUMED_FORM,
} from '../actionTypes/MainTypes'

/**
 * initial redux store state for CSRF
 */
const initialState = {
    csrf: "",
    logged_in: false,
    token: {},
    message: "",
    error_message: "",
    showConsumedForm: false
}

/**
 * Main Reducer
 *
 * @param   {object}  state         redux state
 * @param   {object}  initialState  our intial redux state
 * @param   {string}  action        reducer action
 *
 * @return  {object}                updated redux state
 */
const mainReducer = function (state = initialState, action) {
     switch (action.type) {
        case CSRF_TOKEN:
            let token = document.head.querySelector('meta[name="csrf-token"]')
            return {
                ...state,
                csrf: token.content,
                error_message: ""
            }
        case LOGGED_IN:
            return {
                ...state,
                logged_in: true,
                token: action.data,
                error_message: "",
                message: "logged in",
            }
        case NOT_LOGGED_IN:
            return {
                ...state,
                logged_in: false,
                token: {},
                error_message: action.data
            }
        case SHOW_ANDERSEN_CONSUMED_FORM:
            return {
                ...state,
                showConsumedForm: true
            }
        case HIDE_ANDERSEN_CONSUMED_FORM:
            return {
                ...state,
                showConsumedForm: false
            }
        default:
            return state
     }
}

export default mainReducer
