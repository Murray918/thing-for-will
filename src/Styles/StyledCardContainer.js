import styled from "styled-components";

const StyledCardContainer = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  pointer-events: none;
  pointer-events: none;
  transition: 300ms opacity, 300ms transform;

  > * {
    pointer-events: auto;
  }

  > * {
    cursor: pointer;
    pointer-events: auto;
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
  }

  :hover > *,
  :focus-within > * {
    opacity: 0.4;
  }

  :focus-within > :focus {
    transform: scale(1.1);
    opacity: 1;
  }

  :hover > :focus:not(:hover) {
    transform: scale(1.05);
  }

  :hover > * {
    opacity: 0.4;
  }

  :hover > *:hover {
    transform: scale(1.1);
    opacity: 1;
  }

 
`;

export default StyledCardContainer;
