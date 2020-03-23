import React from 'react';

import { Container, Wrapper, Content, Video } from './styles';
import video from '../../images/videologin.mp4';
import iconlogin from '../../images/iconlogin.svg';

export default function LoginR() {
  return (
    <Container>
      <Wrapper>
        <h1>RINGS</h1>
        <form>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />

          <button>Entrar / Cadastrar</button>
        </form>
        <img src={iconlogin} alt="Kiwi standing on oval" />
      </Wrapper>

      <Content>
        <video autoPlay="true" muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </Content>
    </Container>
  );
}
