import styled from "styled-components";

export const CardsStyled = styled.div`
  display: grid;
  gap: 1.5em;
  padding-block: 2rem;
  width: min(95% 70rem);
  margin-inline: auto;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five";

  .container {
    border: none;
    border-radius: 10px;
    padding: 2em;
    text-align: left;

    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217, 19%, 35%);
  }

  img {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    width: 1.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  .author-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .author {
    display: flex;
    flex-direction: column;
  }

  .review {
    display: flex;
    flex-direction: column;
  }

  //Cards

  .name {
    font-weight: 600;
    font-size: 1.5em;
  }

  .status {
    opacity: 0.5;
    font-size: 1.2em;
  }

  .short {
    font-size: 2em;
    font-weight: 600;
  }

  .description {
    margin-top: 0;
    font-size: 1.2em;
    opacity: 0.7;
    line-height: 1.5em;
  }
  .container:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.moderateViolet};
    background-image: url("/images/bg-pattern-quotation.svg");
    background-repeat: no-repeat;
    background-position: top right 10%;
  }
  .container:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.veryDarkgrayishBlue};
  }
  .container:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.veryDarkBlackishBlue};
  }

  .container:nth-child(1),
  .container:nth-child(2),
  .container:nth-child(4) {
    .name {
      color: ${({ theme }) => theme.colors.lightGray};
    }
    .status {
      color: ${({ theme }) => theme.colors.lightGray};
    }

    .short {
      color: ${({ theme }) => theme.colors.white};
    }

    .description {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }
  .container:nth-child(3),
  .container:nth-child(5) {
    background-color: white;
    .name {
      color: ${({ theme }) => theme.colors.veryDarkgrayishBlue};
    }
    .status {
      color: ${({ theme }) => theme.colors.veryDarkgrayishBlue};
      opacity: 0.5;
    }

    .short {
      color: ${({ theme }) => theme.colors.veryDarkBlackishBlue};
    }

    .description {
      color: ${({ theme }) => theme.colors.veryDarkgrayishBlue};
      opacity: 0.7;
    }
  }
  .container:nth-child(1) {
    grid-area: one;
  }
  .container:nth-child(2) {
    grid-area: two;
  }
  .container:nth-child(3) {
    grid-area: three;
  }
  .container:nth-child(4) {
    grid-area: four;
  }
  .container:nth-child(5) {
    grid-area: five;
  }

  @media screen and (min-width: 33em) {
    grid-template-areas:
      "one one"
      "two three"
      "five five"
      "four four";
  }

  @media screen and (min-width: 38em) {
    grid-template-areas:
      "one one"
      "two five"
      "three five"
      "four four";
  }

  @media screen and (min-width: 54em) {
    grid-template-areas:
      "one one two"
      "five five five"
      "three four four";
  }

  @media screen and (min-width: 75em) {
    grid-template-areas:
      "one one two five"
      "three four four five";
  }
`;
