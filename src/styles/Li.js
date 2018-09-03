import styled from 'styled-components';

const Li = styled.li`
    width:200px;
    list-style: none;
    float: left;
    margin-bottom: 140px;
    margin-left:30px;
    padding-bottom:30px;
    position: relative;
    cursor: pointer;
    @media (max-width:1280px) {
      width: 150px;
    }
`;

export default Li;
