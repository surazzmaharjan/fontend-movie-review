import React from 'react'
import MainHeader from './homeHeader';
import {
    Container
  } from 'reactstrap';

export default function PageNoMatch() {
    return (
        <div>
        <MainHeader/>
        <Container className="page-not-found main-container">
            <h2>404 ! Page not found </h2>
        </Container>
        </div>
        )
}