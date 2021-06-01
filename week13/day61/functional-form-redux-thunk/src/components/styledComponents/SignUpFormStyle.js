import styled from "styled-components";

export const SignUpButton = styled.button`
  background-image: linear-gradient(
    315deg,
    rgb(31, 209, 249) 0%,
    rgb(182, 33, 254) 74%
  );
  width: 200px;
  height: 40px;
  color: white;
  font-family: sans-serif;
  font-size: 1.1rem;
  border-radius: 17px;
  border: 0;
  opacity: 0.6;
  transition: 0.7s ease;
  box-shadow: 0 3px #999;
  &:hover {
    opacity: 1;
    background: rgb(182, 33, 254);
  }
  &:active {
    transition: 0.2s;
    transform: translateY(4px);
    box-shadow: 0 1px #999;
  }
`;

export const SignUpHeader = styled.p`
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const SignUpFormInputUsername = styled.input`
  grid-column: 1/3;
  height: 2.2rem;
  width: 11rem;
  outline: 0;
  border-width: 0 0 3px;
  border: none;
  background: transparent;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  transition: 0.2s;
  &:focus {
    font-size: 18px;
  }
  /* margin-right: 20px;
  margin-left: 20px; */
`;


export const SignUpFormDiv = styled.form`
  display: grid;
  grid-template-columns: 10px 1fr 1fr 10px;
  @media (max-width: 1059px) {
    grid-gap: 10px;
  }
  /* place-items: center; */
`;

export const SignUpFormContainer = styled.div`
  display: grid;
  place-items: center;
  background-color: rgb(235, 235, 235);
  border-radius: 10px;
  width: 24rem;
  height: 24rem;
  padding: 1rem;
  @media (max-width: 1059px) {
    width: 20rem;
    height: 20rem;
    padding: 1rem;
  }
`;