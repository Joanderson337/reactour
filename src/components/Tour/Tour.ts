import styled from 'styled-components';
import Tour from 'reactour';

export const StyledTour = styled(Tour)`
  .sc-iVCKna { // bolinha numeração
    display: none;
  }

  .reactour__dot--is-active { // bolinhas
    background-color: red;
  }

  .druQuJ { // botão
    color: red;
    font-size: 16px;
    cursor: pointer;
  }

`;

export const ContainerTextTour = styled.div`
    margin-top: 20px;
    word-wrap: break-word;
`;
