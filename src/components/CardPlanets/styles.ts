import styled from "styled-components";

export const Container = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 16px;
  margin-top: 25px;
`;

export const Row = styled.div`
  margin: 0 -5px;

    > .row:after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const Column = styled.div`
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-bottom: 12px;

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
`;
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;

  > a {
    display: block;
    width: 100%;
    border: none;
    background-color: var(--color-base);
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    color: var(--color-white);
    text-align: center;
    text-decoration: none;
  }
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-size: 16px;
  color: var(--color-black);
`;

