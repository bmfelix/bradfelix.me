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
        const data = this.props.data.data

        return(
            <div className="col-12 no-padding-margin fluid-container blackbg">
                <form method="POST" name="pathfinderSheet" id="pathfinderSheet" className="col-12 margin-top float-left no-padding-margin">
                    <div className="form-group container">
                        <div className="col-12">
                            <div className="col-md-6 col-12 float-left user-image">
                                <img src="/images/user.jpg" />
                            </div>
                            <div className="col-md-6 col-12 float-left no-padding-margin">
                                <div className="col-12">
                                    <div className="col-12 float-left character-name">{ data.name }</div>
                                    <div className="col-12 float-left no-padding-margin">
                                        <div className="col-6 float-left">
                                            <div className="col-12 rounded-rect rounded-rect-top">RACE</div>
                                            <div className="col-12 rounded-rect">{ data.race }</div>
                                        </div>
                                        <div className="col-6 float-left">
                                            <div className="col-12 rounded-rect rounded-rect-top">GENDER</div>
                                            <div className="col-12 rounded-rect">{ data.gender }</div>
                                        </div>
                                        <div className="col-6 float-left">
                                            <div className="col-12 rounded-rect rounded-rect-top">AGE</div>
                                            <div className="col-12 rounded-rect">{ data.age }</div>
                                        </div>
                                        <div className="col-6 float-left">
                                            <div className="col-12 rounded-rect rounded-rect-top">SIZE</div>
                                            <div className="col-12 rounded-rect">{ data.size }</div>
                                        </div>
                                        <div className="col-6 float-left">
                                            <div className="col-12 rounded-rect rounded-rect-top">CLASS</div>
                                            <div className="col-12 rounded-rect">{ data.class }</div>
                                        </div>
                                        <div className="col-6 float-left">
                                            <div className="col-12 rounded-rect rounded-rect-top">HOMELAND</div>
                                            <div className="col-12 rounded-rect">{ data.homeland }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 float-left no-padding-margin">
                                    <div className="col-md-2 col-12 float-left">
                                        <div className="col-md-6 col-12 float-left rounded-rect-left no-padding-margin">
                                            <div className="col-12 left-rect-header no-padding-margin">HP</div>
                                            <div className="col-12 left-rect-bottom no-padding-margin">0</div>
                                        </div>
                                        <div className="col-md-6 col-12 float-left rounded-rect-right no-padding-margin">
                                            <div className="col-12 right-rect-header no-padding-margin">MP</div>
                                            <div className="col-12 right-rect-bottom no-padding-margin">0</div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 mid-rect-header no-padding-margin">ENDURANCE</div>
                                            <div className="col-12 mid-rect-bottom no-padding-margin">0</div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 mid-rect-header no-padding-margin">SPEED</div>
                                            <div className="col-12 mid-rect-bottom no-padding-margin">0</div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 mid-rect-header no-padding-margin">INTELLECT</div>
                                            <div className="col-12 mid-rect-bottom no-padding-margin">0</div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 mid-rect-header no-padding-margin">STRENGTH</div>
                                            <div className="col-12 mid-rect-bottom no-padding-margin">0</div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 mid-rect-header no-padding-margin">DEXTERITY</div>
                                            <div className="col-12 mid-rect-bottom no-padding-margin">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 float-left no-padding-margin">
                                    <div className="col-md-6 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 rect-header no-padding-margin">APPEARANCE</div>
                                            <div className="col-12 rect-bottom no-padding-margin">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ac nibh fermentum venenatis. Quisque fringilla mauris et tempor pulvinar. Aenean quam arcu, pulvinar sit amet tempor a, bibendum sed ipsum. Praesent rhoncus, metus ut porttitor consectetur, orci sapien bibendum orci, vel elementum leo neque ultricies velit. Suspendisse elementum leo non dolor sollicitudin luctus. Maecenas ut est a risus viverra ornare vitae non odio. Maecenas accumsan dapibus dignissim. Duis volutpat tellus urna, non scelerisque purus accumsan vel. Fusce at fringilla urna. Maecenas suscipit dignissim venenatis. Cras vulputate augue eu nibh pretium ullamcorper. Nunc placerat felis sit amet felis tristique, sit amet porta justo porttitor. Duis purus erat, porttitor vel tortor quis, scelerisque molestie magna. Donec interdum pulvinar arcu, quis commodo ante.</p>

                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 rect-header no-padding-margin">PERSONALITY</div>
                                            <div className="col-12 rect-bottom no-padding-margin">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ac nibh fermentum venenatis. Quisque fringilla mauris et tempor pulvinar. Aenean quam arcu, pulvinar sit amet tempor a, bibendum sed ipsum. Praesent rhoncus, metus ut porttitor consectetur, orci sapien bibendum orci, vel elementum leo neque ultricies velit. Suspendisse elementum leo non dolor sollicitudin luctus. Maecenas ut est a risus viverra ornare vitae non odio. Maecenas accumsan dapibus dignissim. Duis volutpat tellus urna, non scelerisque purus accumsan vel. Fusce at fringilla urna. Maecenas suscipit dignissim venenatis. Cras vulputate augue eu nibh pretium ullamcorper. Nunc placerat felis sit amet felis tristique, sit amet porta justo porttitor. Duis purus erat, porttitor vel tortor quis, scelerisque molestie magna. Donec interdum pulvinar arcu, quis commodo ante.</p>

                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 float-left">
                                        <div className="col-12 float-left rounded-rect no-padding-margin">
                                            <div className="col-12 rect-header no-padding-margin">BACKSTORY</div>
                                            <div className="col-12 rect-bottom no-padding-margin">
                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ac nibh fermentum venenatis. Quisque fringilla mauris et tempor pulvinar. Aenean quam arcu, pulvinar sit amet tempor a, bibendum sed ipsum. Praesent rhoncus, metus ut porttitor consectetur, orci sapien bibendum orci, vel elementum leo neque ultricies velit. Suspendisse elementum leo non dolor sollicitudin luctus. Maecenas ut est a risus viverra ornare vitae non odio. Maecenas accumsan dapibus dignissim. Duis volutpat tellus urna, non scelerisque purus accumsan vel. Fusce at fringilla urna. Maecenas suscipit dignissim venenatis. Cras vulputate augue eu nibh pretium ullamcorper. Nunc placerat felis sit amet felis tristique, sit amet porta justo porttitor. Duis purus erat, porttitor vel tortor quis, scelerisque molestie magna. Donec interdum pulvinar arcu, quis commodo ante.</p>

                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.</p>

                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.
                                                Morbi finibus elementum consectetur. Quisque odio felis, efficitur et tempor quis, pellentesque a mauris. Vestibulum mattis at enim vel laoreet. In nec sapien pharetra, accumsan lectus non, mollis purus. Proin eu sagittis ipsum. Sed porttitor eros eu auctor auctor. Aenean et blandit odio, non venenatis urna.</p>

                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.
                                                Nulla scelerisque quam eu justo tincidunt, ac finibus enim convallis. Quisque eu congue diam. Mauris ultrices diam sit amet ultrices viverra. Donec nibh purus, tincidunt ac porttitor eu, varius ut velit. Proin tempus tellus diam. Mauris varius purus vel orci rutrum tincidunt. Maecenas venenatis non nulla ut aliquam. Curabitur aliquet, ligula non rhoncus faucibus, mauris orci interdum est, in mattis risus elit eget eros. Pellentesque consectetur molestie libero, et varius ex consequat sit amet. Sed pellentesque tristique lacus at dignissim.</p>

                                                <p>Morbi at cursus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan eu massa id consectetur. Pellentesque ut orci metus. Nullam lacus ante, pellentesque eu ligula vel, maximus placerat eros. Etiam non pharetra tellus, sit amet convallis ipsum. Curabitur eget est velit.
                                                Mauris dictum mi in nisl fermentum sollicitudin. Donec sed erat ex. Duis ante nulla, porttitor quis libero id, condimentum tristique elit. Integer sed ligula nec turpis aliquet venenatis in et lectus. Vivamus dignissim nunc in sapien facilisis, eget mollis sem venenatis. Aenean at leo ipsum. Nulla accumsan nulla ipsum, sit amet ornare leo bibendum nec. Donec a erat elit. Aliquam vitae sodales nibh, a faucibus nulla. Aenean sodales ornare turpis sit amet ornare. Mauris feugiat molestie est. Phasellus convallis tortor venenatis dolor convallis congue. Nunc rhoncus consectetur ipsum ut bibendum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        data: state.rootReducer.PFReducer,
        csrf: state.rootReducer.mainReducer.csrf
    }
}

export default connect(mapStateToProps)(Sheet)
