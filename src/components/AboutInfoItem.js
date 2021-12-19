/* eslint-disable quotes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
    font-family: "IBM Bold";
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = "Title",
  items = ["HTML", "CSS"],
  link = "Link",
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <a href={link} target="_blank">
              <PText>{item}</PText>
            </a>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
