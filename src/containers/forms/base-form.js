import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import TodoForm from '../widgets/todo';
import { bindActionCreators } from "redux";

class BaseForms extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoForm />
            </div>
        );
    }
}


BaseForms.propsTypes = {
    history: PropsTypes.object,
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
        },
        dispatch
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseForms);