import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { CardContainer,
        Content, 
        HasInfo, 
        ImageBackground, 
        PostInfo, 
        UserInfo, 
        UserPicture 
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://hermes.dio.me/tracks/cover/7d832409-1e0b-4d7d-9dff-7651f39ca79b.png" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/67017484?v=4" />
                <div>
                    <h4>René Bastos</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito no curso de React do Bootcamp XP Inc. FullStack Developer...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript #React</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }