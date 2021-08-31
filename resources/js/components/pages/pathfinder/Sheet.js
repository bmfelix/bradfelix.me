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
import CharacterIntellect from './CharacterIntellect'
import CharacterMP from './CharacterMP'
import CharacterName from './CharacterName'
import CharacterPersonality from './CharacterPersonality'
import CharacterRace from './CharacterRace'
import CharacterSize from './CharacterSize'
import CharacterSpeed from './CharacterSpeed'
import CharacterStrength from './CharacterStrength'

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
        const data = this.props.data.data
        return(
            <div className='col-12 no-padding-margin fluid-container blackbg'>
                <form method='POST' name='pathfinderSheet' id='pathfinderSheet' className='col-12 margin-top float-left no-padding-margin'>
                    <div className='form-group container'>
                        <div className='col-12'>
                            <div className='col-md-6 col-12 float-left user-image'>
                                <img src='/images/user.jpg' />
                            </div>
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
                    </div>
                    <input type='hidden' name='_token' value={this.props.csrf} />
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
        data: state.rootReducer.PFReducer,
        csrf: state.rootReducer.mainReducer.csrf
    }
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps)(Sheet)
