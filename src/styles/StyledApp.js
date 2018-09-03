import styled from 'styled-components';

const StyledApp = styled.div`
  height:600px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-size:200%;
  @media (max-width:1280px) {
    width: 60%;
  }
  @media (max-width:960px) {
    width: 100%;
  }
`;

export default StyledApp;
