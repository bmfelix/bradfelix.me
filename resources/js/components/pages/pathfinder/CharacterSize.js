import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterSize extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeSizeFlag() {
        this.props.dispatch({type: 'PF_EDIT_SIZE', data: this.props.record.editSize})
    }

    updateSize(e) {
        e.preventDefault()
        let characterSize = e.target.value

        const updateObject = {type: 'PF_UPDATE_SIZE', edit: false, characterSize: characterSize}
        this.props.dispatch(updateObject)
    }

    saveSize(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_SIZE', edit: true, characterSize: null}
        this.props.dispatch(updateObject)
    }

    renderSizeOptions() {
        const editSize = this.props.record.editSize
        const data = this.props.record.data
        if (!editSize) {
            return (
                <div className='col-6 float-left'>
                    <div className='col-12 rounded-rect rounded-rect-top'>SIZE</div>
                    <div className='col-12 rounded-rect character-age' onClick={ this.changeSizeFlag.bind(this) }>{ data.size }</div>
                </div>
            )
        } else {
            return (
                <div className='col-6 float-left'>
                    <div className='col-12 rounded-rect rounded-rect-top'>SIZE</div>
                    <div className='col-12 rounded-rect rounded-rect-editing character-age float-left'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Textbox
                                attributesInput={{
                                    id: 'characterSize',
                                    name: 'characterSize',
                                    type: 'text',
                                    placeholder: 'Enter Character Size',
                                    autoFocus: true
                                }}
                                value={data.size}
                                disabled={false} // Optional.[Bool].Default: false.
                                validate={true} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the 'validationCallback' you provide.
                                validationCallback={() => {}} // Optional.[Func].Default: none. Return the validation result.
                                classNameInput='form-control col-12 rounded-text-box float-left' // Optional.[String].Default: ''.
                                onKeyUp={this.updateSize.bind(this)} // Required.[Func].Default: () => {}. Will return the value.
                                onBlur={this.saveSize.bind(this)} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationOption={{
                                    name: 'Character Size', // Optional.[String].Default: ''. To display in the Error message. i.e Please enter your ${name}.
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
        return this.renderSizeOptions()
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

export default connect(mapStateToProps)(CharacterSize)
