/**
 * Created by bitholic on 2017/2/3.
 */
'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterAction';
import { connect } from 'react-redux';
import Counter from '../components/counter';

class RoadMasterApp extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {state, actions } = this.props;
        return (
            <Counter
                counter={state.count}
                {...actions} />
        )
    }
}

export default connect(state => ({
        state: state.counter
    }),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(RoadMasterApp);