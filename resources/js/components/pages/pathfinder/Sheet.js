import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterAge from './CharacterAge'
import CharacterAppearance from './CharacterAppearance'
import CharacterBackstory from './CharacterBackstory'
import CharacterClass from './CharacterClass'
import CharacterDexterity from './CharacterDexterity'
import CharacterEndurance from './CharacterEndurance'
import CharacterGender from './CharacterGender'
import CharacterHomeland from './CharacterHomeland'
import CharacterHP from './CharacterHP'
import CharacterImage from './CharacterImage'
import CharacterIntellect from './CharacterIntellect'
import CharacterMP from './CharacterMP'
import CharacterName from './CharacterName'
import CharacterPersonality from './CharacterPersonality'
import CharacterRace from './CharacterRace'
import CharacterSize from './CharacterSize'
import CharacterSpeed from './CharacterSpeed'
import CharacterStrength from './CharacterStrength'

let dialogText = null

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

    handleSaveSheet(e) {
        e.preventDefault()
        localStorage.setItem(this.props.record.data.name, JSON.stringify(this.props.record))
        dialogText = 'Your sheet has been saved. Do you want to reset the form now?'

        let modal = document.querySelector('#modalBodyContent')
        let modalClasses = document.querySelector('#PFModal').classList
        let modalBGClasses = document.querySelector('#modalBackdrop')

        if (modalClasses.contains('show')) {
            modalClasses.remove('show')
            document.querySelector('#PFModal').style.display = 'none'
        } else {
            modalClasses.add('show')
            document.querySelector('#PFModal').style.display = 'block'
            if(modalBGClasses.classList.contains('show')) {
                modalBGClasses.classList.remove('show')
                modalBGClasses.style.display = 'none'
            } else {
                modalBGClasses.classList.add('show')
                modalBGClasses.style.display = 'block'
            }
        }
        modal.innerText = dialogText
    }

    closeDialog() {
        let modal = document.querySelector('#modalBodyContent')
        let modalClasses = document.querySelector('#PFModal')
        let modalBGClasses = document.querySelector('#modalBackdrop')

        if (modalClasses.classList.contains('show')) {
            modalClasses.classList.remove('show')
            modalClasses.style.display = 'none'

            modalBGClasses.classList.remove('show')
            modalBGClasses.style.display = 'none'

            modal.innerText = null
        }
    }

    resetState() {
        let modal = document.querySelector('#modalBodyContent')
        let modalClasses = document.querySelector('#PFModal')
        let modalBGClasses = document.querySelector('#modalBackdrop')

        if (modalClasses.classList.contains('show')) {
            modalClasses.classList.remove('show')
            modalClasses.style.display = 'none'

            modalBGClasses.classList.remove('show')
            modalBGClasses.style.display = 'none'

            modal.innerText = null
        }

        this.props.dispatch({type: 'PF_RESET'})
    }

    handleLoadSheet(e) {
        e.preventDefault()
        let name = window.prompt('Enter the characters name we are loading (CASE SENSITIVE): ')
        let storage = JSON.parse(localStorage.getItem(name))

        this.props.dispatch({type: 'PF_LOAD', data: storage})

    }

    render(){
        return(
            <div className='col-12 no-padding-margin fluid-container blackbg'>
                <form method='POST' name='pathfinderSheet' id='pathfinderSheet' className='col-12 margin-top float-left no-padding-margin'>
                    <div className='form-group container'>
                        <div className='col-12'>
                            <CharacterImage />
                            <div className='col-md-6 col-12 float-left no-padding-margin'>
                                <div className='col-12'>
                                    <CharacterName />
                                    <div className='col-12 float-left no-padding-margin'>
                                        <CharacterRace />
                                        <CharacterGender />
                                    </div>
                                    <div className='col-12 float-left no-padding-margin'>
                                        <CharacterAge />
                                        <CharacterSize />
                                    </div>
                                    <div className='col-12 float-left no-padding-margin'>
                                        <CharacterClass />
                                        <CharacterHomeland />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='col-12 float-left no-padding-margin'>
                                    <div className='col-md-2 col-12 float-left'>
                                        <CharacterHP />
                                        <CharacterMP />
                                    </div>
                                    <div className='col-md-2 col-12 float-left'>
                                        <CharacterEndurance />
                                    </div>
                                    <div className='col-md-2 col-12 float-left'>
                                        <CharacterSpeed />
                                    </div>
                                    <div className='col-md-2 col-12 float-left'>
                                        <CharacterIntellect />
                                    </div>
                                    <div className='col-md-2 col-12 float-left'>
                                        <CharacterStrength />
                                    </div>
                                    <div className='col-md-2 col-12 float-left'>
                                        <CharacterDexterity />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='col-12 float-left no-padding-margin'>
                                    <div className='col-md-6 col-12 float-left'>
                                        <CharacterAppearance />
                                        <CharacterPersonality />
                                    </div>
                                    <div className='col-md-6 col-12 float-left'>
                                        <CharacterBackstory />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 float-left fluid-container'>
                            <div className='col-6 float-left fluid-container'>
                                <button className='btn btn-danger col-12' onClick={this.handleLoadSheet.bind(this)}>Load Character <i className='fad fa-folder-open'></i></button>
                            </div>
                            <div className='col-6 float-left fluid-container'>
                                <button className='btn btn-success col-12' onClick={this.handleSaveSheet.bind(this)}>Save Character <i className='fad fa-save'></i></button>
                            </div>
                        </div>
                    </div>
                    <input type='hidden' name='_token' value={this.props.csrf} />
                </form>
                <div className='modal fade' id='PFModal' tabIndex='-1' role='dialog' aria-modal='true'>
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                            <div className='modal-body'>
                                <div id='modalBodyContent'></div>

                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-secondary' onClick={this.closeDialog.bind(this)}>Close</button>
                                <button type='button' className='btn btn-danger' onClick={this.resetState.bind(this)}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal-backdrop fade' id='modalBackdrop' style={{display:'none'}}></div>
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
        record: state.rootReducer.PFReducer,
        csrf: state.rootReducer.mainReducer.csrf
    }
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps)(Sheet)
