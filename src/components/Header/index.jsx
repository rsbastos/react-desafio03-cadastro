import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    Container,
    Row,   
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,    
    Input,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeHolder='Buscar...'/>
                        </BuscarInputContainer>          
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}                     
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/67017484?v=4" />
                ) : (
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    </>
                )}                
            </Row>
        </Container> 
    </Wrapper>
  )
}

export { Header }
