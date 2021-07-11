import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import styled from 'styled-components';


const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #608996;    
`;

class EntryPage extends Component {
    state = {
        form: {
            username: '',
            password: ''
        },
        isLoading: false,
        isSnackbarOpen: true,
        snackbarMessage: 'Course Test',
    };

    componentWillUnmount() {

    }

    onHandleChangeForm = event => {

    }

    onToggleSnackbar = ({ message = 'Error test' }) => {
        this.setState(state => ({
            isSnackbarOpen: !state.isSnackbarOpen,
            snackbarMessage: postMessage
        }))
    }

    onHandleSubmitForm = async event => {
         event.preventDefault();
         
         const {histor} = this.props;
         const {form} = this.state;

         const isFormEmpty = Object.values(form).every(item => item ==='');
         if(isFormEmpty){
             return;
         }
    }

    render(){
        const {form, isLoading, isSnackbarOpen, snackbarMessage} = this.state;

        return (
            <Container>
                <div>Test Course Deneme</div>
                
            </Container>
        );
    }
}


EntryPage.propsTypes = {
    history: PropsTypes.object,
}

export default connect()(EntryPage);