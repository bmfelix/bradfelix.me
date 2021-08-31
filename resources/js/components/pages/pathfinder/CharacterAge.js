import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterAge extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeAgeFlag() {
        this.props.dispatch({type: 'PF_EDIT_AGE', data: this.props.record.editAge})
    }

    updateAge(e) {
        e.preventDefault()
        let characterAge = e.target.value

        const updateObject = {type: 'PF_UPDATE_AGE', edit: false, characterAge: characterAge}
        this.props.dispatch(updateObject)

    }

    saveAge(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_AGE', edit: true, characterAge: null}
        this.props.dispatch(updateObject)
    }

    renderAgeOptions() {
        const editAge = this.props.record.editAge
        const data = this.props.record.data
        if (!editAge) {
            return (
                <div className='col-6 float-left'>
                    <div className='col-12 rounded-rect rounded-rect-top'>AGE</div>
                    <div className='col-12 rounded-rect character-age' onClick={ this.changeAgeFlag.bind(this) }>{ data.age }</div>
                </div>
            )
        } else {
            return (
                <div className='col-6 float-left'>
                    <div className='col-12 rounded-rect rounded-rect-top'>AGE</div>
                    <div className='col-12 rounded-rect rounded-rect-editing character-age float-left'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Textbox
                                attributesInput={{
                                    id: 'characterAge',
                                    name: 'characterAge',
                                    type: 'text',
                                    placeholder: 'Enter Character Age',
                                    autoFocus: true
                                }}
                                value={data.age}
                                disabled={false} // Optional.[Bool].Default: false.
                                validate={true} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the 'validationCallback' you provide.
                                validationCallback={() => {}} // Optional.[Func].Default: none. Return the validation result.
                                classNameInput='form-control col-12 rounded-text-box float-left' // Optional.[String].Default: ''.
                                onKeyUp={this.updateAge.bind(this)} // Required.[Func].Default: () => {}. Will return the value.
                                onBlur={this.saveAge.bind(this)} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationOption={{
                                    name: 'Character Age', // Optional.[String].Default: ''. To display in the Error message. i.e Please enter your ${name}.
                                    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                    required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                                    min: 1, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                                    max: 25, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                                }}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.renderAgeOptions()
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

export default connect(mapStateToProps)(CharacterAge)
