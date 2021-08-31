import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditorState, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterAppearance extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)
    }

    changeAppearanceFlag(e) {
        e.preventDefault()
        const html = this.props.record.data.appearance
        const contentBlock = htmlToDraft(html)
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
            const editorState = EditorState.createWithContent(contentState)
            localStorage.setItem('appearanceEditorState', JSON.stringify(editorState))
            this.props.dispatch({type: 'PF_INIT_APPEARANCE_EDITOR', contentState: 'appearanceContentState', editorState: 'appearanceEditorState'})
        }
        this.props.dispatch({type: 'PF_EDIT_APPEARANCE', data: this.props.record.editAppearance})
    }

    updateAppearance(e) {
        e.preventDefault()
        let characterAppearance = e.target.value

        //const updateObject = {type: 'PF_UPDATE_APPEARANCE', edit: false, appearance: characterAppearance}
        //this.props.dispatch(updateObject)
    }

    saveAppearance(e) {
        //e.preventDefault()

        //const updateObject = {type: 'PF_UPDATE_APPEARANCE', edit: true, appearance: null}
        //this.props.dispatch(updateObject)
    }

    renderAppearanceOptions() {
        const editAppearance = this.props.record.editAppearance
        const data = this.props.record.data

        const editorState = JSON.parse(localStorage.getItem('appearanceEditorState'))

        let appearance = Object.keys(data.appearance).length === 0 ? null : data.appearance

        if (!editAppearance) {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>APPEARANCE</div>
                    <div className='col-12 rect-bottom no-padding-margin' onClick={ this.changeAppearanceFlag.bind(this) }>{ appearance }</div>
                </div>
            )
        } else {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>APPEARANCE</div>
                    <div className='col-12 rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Editor
                                editorState={editorState}
                                toolbarClassName='toolbarClassName'
                                wrapperClassName='wrapperClassName'
                                editorClassName='editorClassName'
                                onEditorStateChange={this.updateAppearance.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.renderAppearanceOptions()
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

export default connect(mapStateToProps)(CharacterAppearance)
