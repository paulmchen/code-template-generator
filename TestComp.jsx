import React, { Component } from 'react';
import { connect } from 'react-redux';


// 1. Import your action file
//import { actions } from 'action-file';

// 2. Map actions from the action-file into your component
const mapDispatchToProps = {

}

// 3. Map the Redux state to your component
const mapStateToProps = (state) => {
    return ({

    })
}

// 4. Main component
class TestComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    handleClick = (e) => {
        e.preventDefault();

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

// 5. Combination
export default connect(mapStateToProps, mapDispatchToProps)(TestComp);
