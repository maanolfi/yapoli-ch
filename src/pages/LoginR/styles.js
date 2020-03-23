import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  background-color: red;
  padding: 2rem;
`;

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #a7c8f2;
  border-radius: 0 5% 5% 0;

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 50%;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;

  video {
    height: 80%;
  }

  div {
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }
`;
