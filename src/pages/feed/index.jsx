import { Link } from "react-router-dom";
import bannerImage from '../../assets/banner.png' 
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from "../../components/UserInfo";
import { Header } from '../../components/Header';    

import { Column, Container, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />  
        <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column  flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} nome="René Bastos" image="https://avatars.githubusercontent.com/u/67017484?v=4" />
                    <UserInfo percentual={35} nome="René Bastos" image="https://avatars.githubusercontent.com/u/67017484?v=4" />
                    <UserInfo percentual={90} nome="René Bastos" image="https://avatars.githubusercontent.com/u/67017484?v=4" />
                    <UserInfo percentual={54} nome="René Bastos" image="https://avatars.githubusercontent.com/u/67017484?v=4" />
                    <UserInfo percentual={17} nome="René Bastos" image="https://avatars.githubusercontent.com/u/67017484?v=4" />
                </Column>
            
            
        </Container>     
    </>)
}

export { Feed }