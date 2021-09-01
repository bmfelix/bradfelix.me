import React, { Component,useState } from 'react'
import { connect } from 'react-redux'
import ImgFileInput from 'react-imgfile'
import axios from 'axios'

/**
 * renders ano tag scan page
 * @extends Component
 */
class CharacterImage extends Component {

    /**
     * init the class.
     * @param {object} props the props that we mapped below.
     */
    constructor(props) {
        super(props)

    }

    changeImageFlag() {
        this.props.dispatch({type: 'PF_EDIT_IMAGE', data: this.props.record.editImage})
    }

    updateImage(files) {
        const theFile = files[0]
        if (theFile) {
            const data = new FormData()
            data.append('uploadPicture', theFile)

            axios.post('/api/upload/user/image', data).then(response => {
                if(response.data.code === 200) {
                    const fileLocation = '/' + response.data.file_location
                    console.log(fileLocation)

                    const updateObject = {type: 'PF_UPDATE_IMAGE', edit: true, file: fileLocation}
                    this.props.dispatch(updateObject)
                }
            })

        }
    }

    renderImageOptions() {
        const editImage = this.props.record.editImage
        const data = this.props.record
        if (!editImage) {
            return (
                <div className='col-md-6 col-12 float-left user-image' onClick={ this.changeImageFlag.bind(this) }>
                    <img src={ data.userImage } alt='default user'/>
                </div>
            )
        } else {
            return (
                <div className='col-md-6 col-12 float-left user-image'>
                    <ImgFileInput
                        buttonText='Choose image'
                        singleImage={true}
                        onChange={this.updateImage.bind(this)}
                        withIcon={true}
                        imgExtension={[
                            '.jpg',
                            '.gif',
                            '.png',
                            '.jpeg'
                        ]}
                        maxFileSize={5242880}
                        name='uploadPicture'
                    />
                </div>
            )
        }
    }

    render(){
        return this.renderImageOptions()
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

export default connect(mapStateToProps)(CharacterImage)
