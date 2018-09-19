import styled from 'styled-components';

const StyledApp = styled.div`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2 {
    grid-area: title;
    text-align: center;
  }
  ul {
    grid-area: ul;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  font-size:200%;
  @media (min-width:960px) {
    display: grid;
    grid-template-columns: auto 900px auto;
    grid-row-gap: 2em;
    grid-template-areas:
    ". title ."
    ". ul ."
    ". button .";
  }
`;

export default StyledApp;
