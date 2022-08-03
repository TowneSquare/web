import styled from "@emotion/styled";

export const Layout = styled.div<{ mt?: string }>`
  width: 100%;
  margin-top: ${(props) => props.mt ?? "0px"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Step = styled.div<{ direction?: string, px?: string }>`
  width: 80%;
  display: flex;
  flex-direction: ${(props) => props.direction ?? "row"};
  justify-content: space-between;
  align-items: center;
`;

export const StepContent = styled.div`
  width: 100px;
  margin-top: 30px;
`;
