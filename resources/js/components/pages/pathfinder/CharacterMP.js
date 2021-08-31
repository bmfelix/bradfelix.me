import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterMP extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeMPFlag() {
        this.props.dispatch({type: 'PF_EDIT_MP', data: this.props.record.editMP})
    }

    updateMP(e) {
        e.preventDefault()
        let characterMP = e.target.value

        const updateObject = {type: 'PF_UPDATE_MP', edit: false, characterMP: characterMP}
        this.props.dispatch(updateObject)
    }

    saveMP(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_MP', edit: true, characterMP: null}
        this.props.dispatch(updateObject)
    }

    renderMPOptions() {
        const editMP = this.props.record.editMP
        const data = this.props.record.data
        if (!editMP) {
            return (
                <div className='col-md-6 col-12 float-left rounded-rect-right no-padding-margin'>
                    <div className='col-12 right-rect-header no-padding-margin'>MP</div>
                    <div className='col-12 right-rect-bottom no-padding-margin' onClick={ this.changeMPFlag.bind(this) }>{ data.MP }</div>
                </div>
            )
        } else {
            return (
                <div className='col-md-6 col-12 float-left rounded-rect-right no-padding-margin'>
                    <div className='col-12 right-rect-header no-padding-margin'>MP</div>
                    <div className='col-12 right-rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Textbox
                                attributesInput={{
                                    id: 'characterMP',
                                    name: 'characterMP',
                                    type: 'number',
                                    placeholder: 'Enter Character MP',
                                    autoFocus: true
                                }}
                                value={data.MP}
                                disabled={false} // Optional.[Bool].Default: false.
                                validate={true} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the 'validationCallback' you provide.
                                validationCallback={() => {}} // Optional.[Func].Default: none. Return the validation result.
                                classNameInput='form-control col-12 rounded-text-box float-left large-text-box' // Optional.[String].Default: ''.
                                onKeyUp={this.updateMP.bind(this)} // Required.[Func].Default: () => {}. Will return the value.
                                onClick={this.updateMP.bind(this)}
                                onBlur={this.saveMP.bind(this)} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationOption={{
                                    name: 'Character MP', // Optional.[String].Default: ''. To display in the Error message. i.e Please enter your ${name}.
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
        return this.renderMPOptions()
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

export default connect(mapStateToProps)(CharacterMP)
