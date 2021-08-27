import {
    PF_UPDATE_IMAGE,
    PF_SET_COLOR,
    PF_SAVE_DATA,
    PF_EDIT_NAME
} from '../actionTypes/PFTypes';

/**
 * initial redux store state
 */
const initialState = {
    userImage: "/images/user.png",
    accentColor: "#de009b",
    editName: false,
    data: {
        name: "NAMEY NAMEY (NAME NAME)",
        race: "Ursaran",
        gender: "Female",
        age: "28 years",
        size: "6' 4\" 290 lbs",
        class: "Shaman",
        homeland: "Polaris"
    }
};

/**
 * Ano Scan Reducer
 *
 * @param   {object}  state         redux state
 * @param   {object}  initialState  our intial redux state
 * @param   {string}  action        reducer action
 *
 * @return  {object}                updated redux state
 */
const PFReducer = function (state = initialState, action) {
     switch (action.type) {
        case PF_UPDATE_IMAGE:
            return {
                ...state,
            }
        case PF_SET_COLOR:
            return {
                ...state,
            }
        case PF_SAVE_DATA:
            return {
                ...state,
            }
        case PF_EDIT_NAME:
            return {
                ...state,
                editName: true
            }
        default:
            return state
     }
};

export default PFReducer;
