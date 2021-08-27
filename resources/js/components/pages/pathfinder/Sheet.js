import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

/**
 * renders ano tag scan page
 * @extends Component
 */
class Sheet extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="col-12 no-padding-margin fluid-container margin-top">
                <form method="POST" name="pathfinderSheet" id="pathfinderSheet" className="col-12">
                    <div className="form-group container">
                        <div className="col-12">
                            <Textbox
                                attributesInput={{
                                    id: "itemsPerBar",
                                    name: "itemsPerBar",
                                    type: "number",
                                    placeholder: "items per bar?",
                                    autoFocus: true
                                }}
                                disabled={false} // Optional.[Bool].Default: false.
                                validate={true} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                                validationCallback={res => {}} // Optional.[Func].Default: none. Return the validation result.
                                classNameInput="form-control col-12" // Optional.[String].Default: "".
                                onKeyUp={() => {}} // Required.[Func].Default: () => {}. Will return the value.
                                onBlur={e => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationOption={{
                                    name: "# of Bars", // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                                    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                    required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                                    min: 1, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                                    max: 3, // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                                }}
                            />
                        </div>
                    </div>
                    <input type="hidden" name="_token" value={this.props.csrf} />
                </form>
            </div>
        )
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
        data: state.rootReducer.pfReducer,
        csrf: state.rootReducer.mainReducer.csrf
    }
}

export default connect(mapStateToProps)(Sheet)
