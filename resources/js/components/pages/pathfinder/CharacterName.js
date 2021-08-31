import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterName extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeNameFlag() {
        this.props.dispatch({type: 'PF_EDIT_NAME', data: this.props.record.editName})
    }

    updateName(e) {
        e.preventDefault()
        let characterName = e.target.value

        const updateObject = {type: 'PF_UPDATE_NAME', edit: false, characterName: characterName}
        this.props.dispatch(updateObject)
    }

    saveName(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_NAME', edit: true, characterName: null}
        this.props.dispatch(updateObject)
    }

    renderNameOptions() {
        const editName = this.props.record.editName
        const data = this.props.record.data
        if (!editName) {
            return (
                <div className='col-12 float-left character-name' onClick={ this.changeNameFlag.bind(this) }>{ data.name }</div>
            )
        } else {
            return (
                <div className='col-12 float-left character-name'>
                    <div className='col-12 float-left'>
                        <Textbox
                            attributesInput={{
                                id: 'characterName',
                                name: 'characterName',
                                type: 'text',
                                placeholder: 'Enter Character Name',
                                autoFocus: true
                            }}
                            value={data.name}
                            disabled={false} // Optional.[Bool].Default: false.
                            validate={true} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the 'validationCallback' you provide.
                            validationCallback={() => {}} // Optional.[Func].Default: none. Return the validation result.
                            classNameInput='form-control col-12 rounded-text-box float-left' // Optional.[String].Default: ''.
                            onKeyUp={this.updateName.bind(this)} // Required.[Func].Default: () => {}. Will return the value.
                            onBlur={this.saveName.bind(this)} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                            validationOption={{
                                name: 'Character Name', // Optional.[String].Default: ''. To display in the Error message. i.e Please enter your ${name}.
                                check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                                min: 3, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                                max: 50, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                            }}
                        />
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.renderNameOptions()
    }
}

/**
 * Map our state to props
 * making them available on this.props
 *
 * @param {object} state  //our state from redux
 *
 * @return  {object} //our state mapped to props
 */
function mapStateToProps(state) {
    return {
        record: state.rootReducer.PFReducer,
        csrf: state.rootReducer.mainReducer.csrf
    }
}

export default connect(mapStateToProps)(CharacterName)
