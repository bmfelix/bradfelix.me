import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterEndurance extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeEnduranceFlag() {
        this.props.dispatch({type: 'PF_EDIT_ENDURANCE', data: this.props.record.editEndurance})
    }

    updateEndurance(e) {
        e.preventDefault()
        let characterEndurance = e.target.value

        const updateObject = {type: 'PF_UPDATE_ENDURANCE', edit: false, endurance: characterEndurance}
        this.props.dispatch(updateObject)
    }

    saveEndurance(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_ENDURANCE', edit: true, endurance: null}
        this.props.dispatch(updateObject)
    }

    renderEnduranceOptions() {
        const editEndurance = this.props.record.editEndurance
        const data = this.props.record.data
        if (!editEndurance) {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 mid-rect-header no-padding-margin'>ENDURANCE</div>
                    <div className='col-12 mid-rect-bottom no-padding-margin' onClick={ this.changeEnduranceFlag.bind(this) }>{ data.endurance }</div>
                </div>
            )
        } else {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 mid-rect-header no-padding-margin'>ENDURANCE</div>
                    <div className='col-12 mid-rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Textbox
                                attributesInput={{
                                    id: 'characterEndurance',
                                    name: 'characterEndurance',
                                    type: 'number',
                                    placeholder: 'Endurance',
                                    autoFocus: true
                                }}
                                value={data.endurance}
                                disabled={false} // Optional.[Bool].Default: false.
                                validate={true} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the 'validationCallback' you provide.
                                validationCallback={() => {}} // Optional.[Func].Default: none. Return the validation result.
                                classNameInput='form-control col-12 rounded-text-box float-left large-text-box' // Optional.[String].Default: ''.
                                onKeyUp={this.updateEndurance.bind(this)} // Required.[Func].Default: () => {}. Will return the value.
                                onClick={this.updateEndurance.bind(this)}
                                onBlur={this.saveEndurance.bind(this)} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationOption={{
                                    name: 'Character Endurance', // Optional.[String].Default: ''. To display in the Error message. i.e Please enter your ${name}.
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
        return this.renderEnduranceOptions()
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

export default connect(mapStateToProps)(CharacterEndurance)
