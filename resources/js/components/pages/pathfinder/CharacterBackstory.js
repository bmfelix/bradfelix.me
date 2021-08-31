import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

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

    changeBackstoryFlag() {
        this.props.dispatch({type: 'PF_EDIT_BACKSTORY', data: this.props.record.editBackstory})
    }

    updateBackstory(e) {
        e.preventDefault()
        let characterBackstory = e.target.value

        const updateObject = {type: 'PF_UPDATE_BACKSTORY', edit: false, backstory: characterBackstory}
        this.props.dispatch(updateObject)
    }

    saveBackstory(e) {
        e.preventDefault()

        const updateObject = {type: 'PF_UPDATE_BACKSTORY', edit: true, backstory: null}
        this.props.dispatch(updateObject)
    }

    renderBackstoryOptions() {
        const editBackstory = this.props.record.editBackstory
        const data = this.props.record.data
        let backstory = Object.keys(data.backstory).length === 0 ? 'No Backstory Data' : data.backstory

        if (!editBackstory) {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>BACKSTORY</div>
                    <div className='col-12 rect-bottom no-padding-margin' onClick={ this.changeBackstoryFlag.bind(this) }>{ backstory }</div>
                </div>
            )
        } else {
            return (
                <div className='col-12 float-left rounded-rect no-padding-margin'>
                    <div className='col-12 rect-header no-padding-margin'>BACKSTORY</div>
                    <div className='col-12 rect-bottom no-padding-margin'>
                        <div className='col-12 float-left no-padding-margin'>
                            <Editor
                                editorState={this.props.record.editorBackstory}
                                initialContentState={backstory}
                                toolbarClassName='toolbarClassName'
                                wrapperClassName='wrapperClassName'
                                editorClassName='editorClassName'
                                onEditorStateChange={this.updateBackstory.bind(this)}
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
