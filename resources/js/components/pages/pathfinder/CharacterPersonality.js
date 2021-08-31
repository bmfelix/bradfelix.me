import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

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

    changePersonalityFlag() {
        this.props.dispatch({type: 'PF_EDIT_PERSONALITY', data: this.props.record.editPersonality})
    }

    updatePersonality(e) {
        e.preventDefault()
        let characterPersonality = e.target.value

        const updateObject = {type: 'PF_UPDATE_PERSONALITY', edit: false, personality: characterPersonality}
        this.props.dispatch(updateObject)
    }

    savePersonality(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_PERSONALITY', edit: true, personality: null}
        this.props.dispatch(updateObject)
    }

    renderPersonalityOptions() {
        const editPersonality = this.props.record.editPersonality
        const data = this.props.record.data
        let personality = Object.keys(data.personality).length === 0 ? 'No Personality Data' : data.personality

        if (!editPersonality) {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>PERSONALITY</div>
                    <div className='col-12 rect-bottom no-padding-margin' onClick={ this.changePersonalityFlag.bind(this) }>{ personality }</div>
                </div>
            )
        } else {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>PERSONALITY</div>
                    <div className='col-12 rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Editor
                                editorState={this.props.record.editorPersonality}
                                initialContentState={personality}
                                toolbarClassName='toolbarClassName'
                                wrapperClassName='wrapperClassName'
                                editorClassName='editorClassName'
                                onEditorStateChange={this.updatePersonality.bind(this)}
                            />
                            <div className='wrapperClassName'>
                                <div className='toolbarClassName'></div>
                                <div className='editorClassName'></div>
                            </div>
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
