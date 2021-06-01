import styled from "styled-components";

export const AppStyle = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  padding-top: 2rem;
  height: 100vh;
  font-weight: lighter;
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
  font-family: sans-serif;
  text-align: center;
  @media (max-width: 1059px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;