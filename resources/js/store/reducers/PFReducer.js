import {
    PF_RESET,
    PF_LOAD,
    PF_EDIT_IMAGE,
    PF_UPDATE_IMAGE,
    PF_SET_COLOR,
    PF_SAVE_DATA,
    PF_EDIT_NAME,
    PF_UPDATE_NAME,
    PF_EDIT_RACE,
    PF_UPDATE_RACE,
    PF_EDIT_GENDER,
    PF_UPDATE_GENDER,
    PF_EDIT_AGE,
    PF_UPDATE_AGE,
    PF_EDIT_SIZE,
    PF_UPDATE_SIZE,
    PF_EDIT_CLASS,
    PF_UPDATE_CLASS,
    PF_EDIT_HOMELAND,
    PF_UPDATE_HOMELAND,
    PF_EDIT_HP,
    PF_UPDATE_HP,
    PF_EDIT_MP,
    PF_UPDATE_MP,
    PF_EDIT_ENDURANCE,
    PF_UPDATE_ENDURANCE,
    PF_EDIT_SPEED,
    PF_UPDATE_SPEED,
    PF_EDIT_INTELLECT,
    PF_UPDATE_INTELLECT,
    PF_EDIT_STRENGTH,
    PF_UPDATE_STRENGTH,
    PF_EDIT_DEXTERITY,
    PF_UPDATE_DEXTERITY,
    PF_EDIT_APPEARANCE,
    PF_UPDATE_APPEARANCE,
    PF_EDIT_PERSONALITY,
    PF_UPDATE_PERSONALITY,
    PF_EDIT_BACKSTORY,
    PF_UPDATE_BACKSTORY
} from '../actionTypes/PFTypes'

/**
 * initial redux store state
 */
const initialState = {
    userImage: '/images/user.jpg',
    accentColor: '#de009b',
    editImage: false,
    editName: false,
    editRace: false,
    editGender: false,
    editAge: false,
    editSize: false,
    editClass: false,
    editHomeland: false,
    editHP: false,
    editMP: false,
    editEndurance: false,
    editSpeed: false,
    editIntellect: false,
    editStrength: false,
    editDexterity: false,
    editAppearance: false,
    editPersonality: false,
    editBackstory: false,
    data: {
        name: 'NAMEY NAMEY (NAME NAME)',
        race: 'Enter Race',
        gender: 'Enter Gender',
        age: 'Enter Age',
        size: 'Enter Size',
        class: 'Enter Class',
        homeland: 'Enter Homeland',
        HP: 0,
        MP: 0,
        endurance: 0,
        speed: 0,
        intellect: 0,
        strength: 0,
        dexterity: 0,
        appearance: '<p>No Appearance Data</p>',
        personality: '<p>No Personality Data</p>',
        backstory: '<p>No Backstory Data</p>'
    }
}

/**
 * Ano Scan Reducer
 *
 * @param   {object}  state         redux state
 * @param   {object}  initialState  our intial redux state
 * @param   {string}  action        reducer action
 *
 * @return  {object}                updated redux state
 */
// eslint-disable-next-line radar/cognitive-complexity
const PFReducer = function (state = initialState, action) {

    let name = action.characterName ? action.characterName : null
    let age = action.characterAge ? action.characterAge : null
    let gender = action.characterGender ? action.characterGender : null
    let race = action.characterRace ? action.characterRace : null
    let size = action.characterSize ? action.characterSize : null
    let charClass = action.characterClass ? action.characterClass : null
    let homeland = action.characterHomeland ? action.characterHomeland : null
    let HP = action.characterHP ? action.characterHP : null
    let MP = action.characterMP ? action.characterMP : null
    let endurance = action.endurance ? action.endurance : null
    let speed = action.speed ? action.speed : null
    let intellect = action.intellect ? action.intellect : null
    let strength = action.strength ? action.strength : null
    let dexterity = action.dexterity ? action.dexterity : null
    let appearance = action.appearance ? action.appearance : null
    let personality = action.personality ? action.personality : null
    let backstory = action.backstory ? action.backstory : null
    let dataObject = {}

    // eslint-disable-next-line radar/max-switch-cases
    switch (action.type) {
    case PF_EDIT_IMAGE:
        return {
            ...state,
            editImage: !action.data
        }
    case PF_UPDATE_IMAGE:
        return {
            ...state,
            userImage: action.file,
            editImage: !action.edit
        }
    case PF_SET_COLOR:
        return {
            ...state,
            accentColor: '#de009b'
        }
    case PF_SAVE_DATA:
        return {
            ...state,
            data: {
                name: action.data.name,
                race: action.data.race,
                gender: action.data.gender,
                age: action.data.age,
                size: action.data.size,
                class: action.data.class,
                homeland: action.data.homeland
            }
        }
    case PF_EDIT_NAME:
        return {
            ...state,
            editName: !action.data
        }
    case PF_UPDATE_NAME:
        if (name === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                name: name
            }
        }

        return {
            ...state,
            editName: !action.edit,
            data: dataObject
        }
    case PF_EDIT_RACE:
        return {
            ...state,
            editRace: !action.data
        }
    case PF_UPDATE_RACE:
        if (race === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                race: race
            }
        }

        return {
            ...state,
            editRace: !action.edit,
            data: dataObject
        }
    case PF_EDIT_GENDER:
        return {
            ...state,
            editGender: !action.data
        }
    case PF_UPDATE_GENDER:
        if (gender === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                gender: gender
            }
        }

        return {
            ...state,
            editGender: !action.edit,
            data: dataObject
        }
    case PF_EDIT_AGE:
        return {
            ...state,
            editAge: !action.data
        }
    case PF_UPDATE_AGE:
        if (age === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                age: age
            }
        }

        return {
            ...state,
            editAge: !action.edit,
            data: dataObject
        }
    case PF_EDIT_SIZE:
        return {
            ...state,
            editSize: !action.data
        }
    case PF_UPDATE_SIZE:
        if (size === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                size: size
            }
        }

        return {
            ...state,
            editSize: !action.edit,
            data: dataObject
        }
    case PF_EDIT_CLASS:
        return {
            ...state,
            editClass: !action.data
        }
    case PF_UPDATE_CLASS:
        if (charClass === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                class: charClass
            }
        }

        return {
            ...state,
            editClass: !action.edit,
            data: dataObject
        }
    case PF_EDIT_HOMELAND:
        return {
            ...state,
            editHomeland: !action.data
        }
    case PF_UPDATE_HOMELAND:
        if (homeland === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                homeland: homeland
            }
        }

        return {
            ...state,
            editHomeland: !action.edit,
            data: dataObject
        }
    case PF_EDIT_HP:
        return {
            ...state,
            editHP: !action.data
        }
    case PF_UPDATE_HP:
        if (HP === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                HP: HP
            }
        }

        return {
            ...state,
            editHP: !action.edit,
            data: dataObject
        }
    case PF_EDIT_MP:
        return {
            ...state,
            editMP: !action.data
        }
    case PF_UPDATE_MP:
        if (MP === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                MP: MP
            }
        }

        return {
            ...state,
            editMP: !action.edit,
            data: dataObject
        }
    case PF_EDIT_ENDURANCE:
        return {
            ...state,
            editEndurance: !action.data
        }
    case PF_UPDATE_ENDURANCE:
        if (endurance === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                endurance: endurance
            }
        }

        return {
            ...state,
            editEndurance: !action.edit,
            data: dataObject
        }
    case PF_EDIT_SPEED:
        return {
            ...state,
            editSpeed: !action.data
        }
    case PF_UPDATE_SPEED:
        if (speed === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                speed: speed
            }
        }

        return {
            ...state,
            editSpeed: !action.edit,
            data: dataObject
        }
    case PF_EDIT_INTELLECT:
        return {
            ...state,
            editIntellect: !action.data
        }
    case PF_UPDATE_INTELLECT:
        if (intellect === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                intellect: intellect
            }
        }

        return {
            ...state,
            editIntellect: !action.edit,
            data: dataObject
        }
    case PF_EDIT_STRENGTH:
        return {
            ...state,
            editStrength: !action.data
        }
    case PF_UPDATE_STRENGTH:
        if (strength === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                strength: strength
            }
        }

        return {
            ...state,
            editStrength: !action.edit,
            data: dataObject
        }
    case PF_EDIT_DEXTERITY:
        return {
            ...state,
            editDexterity: !action.data
        }
    case PF_UPDATE_DEXTERITY:
        if (dexterity === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                dexterity: dexterity
            }
        }

        return {
            ...state,
            editDexterity: !action.edit,
            data: dataObject
        }
    case PF_EDIT_APPEARANCE:
        return {
            ...state,
            editAppearance: !action.data
        }
    case PF_UPDATE_APPEARANCE:
        if (appearance === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                appearance: appearance
            }
        }

        return {
            ...state,
            editAppearance: !action.edit,
            data: dataObject
        }
    case PF_EDIT_PERSONALITY:
        return {
            ...state,
            editPersonality: !action.data
        }
    case PF_UPDATE_PERSONALITY:
        if (personality === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                personality: personality
            }
        }

        return {
            ...state,
            editPersonality: !action.edit,
            data: dataObject
        }
    case PF_EDIT_BACKSTORY:
        return {
            ...state,
            editBackstory: !action.data
        }
    case PF_UPDATE_BACKSTORY:
        if (backstory === null) {
            dataObject = {...state.data }
        } else {
            dataObject = {
                ...state.data,
                backstory: backstory
            }
        }

        return {
            ...state,
            editBackstory: !action.edit,
            data: dataObject
        }
    case PF_RESET:
        return {
            ...initialState,
        }
    case PF_LOAD:
        return {
            ...action.data,
        }
    default:
        return {
            ...state
        }
    }
}

export default PFReducer
