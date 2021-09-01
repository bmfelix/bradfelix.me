import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'
import ReactHtmlParser from 'react-html-parser'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterPersonality extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changePersonalityFlag(e) {
        e.preventDefault()

        this.props.dispatch({type: 'PF_EDIT_PERSONALITY', data: this.props.record.editPersonality})
    }

    updatePersonality(e) {
        let characterPersonality = e

        const updateObject = {type: 'PF_UPDATE_PERSONALITY', edit: false, personality: characterPersonality}
        this.props.dispatch(updateObject)
    }

    savePersonality() {
        const updateObject = {type: 'PF_UPDATE_PERSONALITY', edit: true, personality: null}
        this.props.dispatch(updateObject)
    }

    renderPersonalityOptions() {
        const editPersonality = this.props.record.editPersonality
        const data = this.props.record.data
        const { MIX_TINYMCE_API_KEY } = process.env

        if (!editPersonality) {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>PERSONALITY</div>
                    <div className='col-12 rect-bottom no-padding-margin' onClick={ this.changePersonalityFlag.bind(this) }>{ ReactHtmlParser (data.personality) }</div>
                </div>
            )
        } else {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>PERSONALITY</div>
                    <div className='col-12 rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Editor
                                apiKey={ MIX_TINYMCE_API_KEY }
                                value={ data.personality }
                                init={{
                                    height: 300,
                                    width: '100%',
                                    menubar: false,
                                    inline: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                                onEditorChange={this.updatePersonality.bind(this)}
                                onFocusOut={this.savePersonality.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.renderPersonalityOptions()
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

export default connect(mapStateToProps)(CharacterPersonality)
