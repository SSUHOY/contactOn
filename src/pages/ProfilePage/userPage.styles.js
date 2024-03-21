import styled from "styled-components";

export const UserPageContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  height: 248px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
`;

export const UserPageTitle = styled.h4`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;

export const UserFormWrapper = styled.div`
  display: flex;
  padding: 18px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  padding-bottom: 10px;
  label {
    font-size: 14px;
  }
`;

export const IsSaved = styled.div`
  text-align: center;
`;

export const Error = styled.p`
  font-size: 10px;
  color: red;
  width: 143px;
  text-align: center;
  margin: 0px;
`;
