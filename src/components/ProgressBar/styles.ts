import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 80px;
`;

export const ContainerProgress = styled.div<{ width: number }>`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  width: 100%;

  &::before {
    content: '';
    background-color: gray;
    position: absolute;
    top: 28%;
    left: ${props => props.width / 2 + '%'};
    right: ${props => props.width / 2 + '%'};
    transform: translateY(-50%);
    height: 2px;
    width: ${props => 'calc(100% - ' + props.width + '%)'};
    z-index: -1;
  }
`;

export const Progress = styled.div<{ width: number, progress: number }> `
  background-color: green;
  position: absolute;
  top: 25%;
  left: ${props => props.width / 2 + '%'};
  right: ${props => props.width / 2 + '%'};
  height: 2px;
  transition: .4s ease;
  z-index: -1;
  width: ${props =>props.progress + '%'};
`;

export const Step = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width + '%'};

  span a {
    color: #212529;
    cursor: pointer;
  }

  span a:hover{
    text-decoration: none;
    color: #212529;
  }
`;

export const Bullet = styled.div<{ active: boolean, inverted: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${props => props.active ? `background-color: white` : `background-color: gray`};
  ${props => props.active && `border: 2px solid green`};
  ${props => props.inverted && `background-color green`};
`;
