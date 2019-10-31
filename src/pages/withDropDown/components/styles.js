import styled from 'styled-components';
// Grays
export const gray1 = '#383737';
export const gray2 = '#565555';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e0dddd';

// Colors
export const primary1 = '#6ca583';
export const accent1 = '#9b8dab';

// Fonts
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";
export const fontSize = '15px';

export const Container = styled.div`
  width: 400px;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  padding: 10px;
  input{
    width: 400px;
    margin: 3px 0px;
  };
  ul {
    width: 365px;
    position: absolute;
    max-height: 15em;
    overflow-y: scroll;
    overflow-x: hidden;
    list-style: none;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    li {
      padding: 10px 0px;
      border-top: 1px solid ${gray5};
      :first-child {
        border-top: none;
      };
      :hover{
          background: ${primary1};
      };
      :focus{
          background: ${primary1};
      }
    }
  }
`;