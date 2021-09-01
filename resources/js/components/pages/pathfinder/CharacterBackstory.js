import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'
import ReactHtmlParser from 'react-html-parser'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterBackstory extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeBackstoryFlag(e) {
        e.preventDefault()

        this.props.dispatch({type: 'PF_EDIT_BACKSTORY', data: this.props.record.editBackstory})
    }

    updateBackstory(e) {
        let characterBackstory = e

        const updateObject = {type: 'PF_UPDATE_BACKSTORY', edit: false, backstory: characterBackstory}
        this.props.dispatch(updateObject)
    }

    saveBackstory() {
        const updateObject = {type: 'PF_UPDATE_BACKSTORY', edit: true, backstory: null}
        this.props.dispatch(updateObject)
    }

    renderBackstoryOptions() {
        const editBackstory = this.props.record.editBackstory
        const data = this.props.record.data
        const { MIX_TINYMCE_API_KEY } = process.env

        if (!editBackstory) {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>BACKSTORY</div>
                    <div className='col-12 rect-bottom no-padding-margin' onClick={ this.changeBackstoryFlag.bind(this) }>{ ReactHtmlParser (data.backstory) }</div>
                </div>
            )
        } else {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>BACKSTORY</div>
                    <div className='col-12 rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Editor
                                apiKey={ MIX_TINYMCE_API_KEY }
                                value={ data.backstory }
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
                                onEditorChange={this.updateBackstory.bind(this)}
                                onFocusOut={this.saveBackstory.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.renderBackstoryOptions()
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

export default connect(mapStateToProps)(CharacterBackstory)
