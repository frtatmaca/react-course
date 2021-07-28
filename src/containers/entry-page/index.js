import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import styled from 'styled-components';

import BaseForms from '../forms/base-form';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #608996;    
`;

class EntryPage extends Component {   
    constructor(props) {
        super(props);
    }   

    render(){
        return (
            <Container>
                <BaseForms />                
            </Container>
        );
    }
}


EntryPage.propsTypes = {
    history: PropsTypes.object,
}

export default connect()(EntryPage);