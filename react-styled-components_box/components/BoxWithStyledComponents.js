import styled from "styled-components";
//import { css } from "styled-components";

export default function BoxWithStyledComponent({ isBlack }) {
  return <StyledBox isBlack={isBlack}></StyledBox>;
}

// const StyledBox = styled.div`
//   ${(props) =>
//     props.isBlack &&
//     css`
//       width: 100px;
//       height: 100px;
//       background-color: black;
//       margin: 2rem;
//     `}
//   ${(props) =>
//     !props.isBlack &&
//     css`
//       width: 100px;
//       height: 100px;
//       background-color: green;
//       margin: 2rem;
//     `}

//   &:hover {
//     background-color: red;
//   }
// `;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.isBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: yellow;
  }
`;
