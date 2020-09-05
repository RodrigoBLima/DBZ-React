import styled from "styled-components";

export const Card = styled.div`
  border: solid 1px #f2f2f2;
  margin: 5px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  justify-content: center;
  margin: 100px;
`;
export const CardBody = styled.div`
  padding: 10px;
`;
export const Avatar = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Info = styled.div`
  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }
`;
