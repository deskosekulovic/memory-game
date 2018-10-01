import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
	from {
    transform: rotateY(180deg);
	}
	to {
    transform: rotateY(0deg);
	}
`;

const Back = styled.div`
  width: 100%;
  height: 147px;
  backface-visibility: hidden;
  border: 5px solid gray;
  img {
    width: 100%;
    height: 100%;
  }

  animation-name: ${slideIn};
  animation-duration: 300ms;
  animation-timing-function: ease;
`;

export default Back;
