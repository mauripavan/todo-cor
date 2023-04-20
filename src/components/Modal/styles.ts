import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #2c2d30;
  position: absolute;
  top: 10%;
  min-height: 40vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0px;
  color: white;
  border-radius: 10px;
`;

export const CustomInput = styled.input`
  background-color: #27264d;
  border: 1px solid #41449f61;
  width: 100%;
  color: white;
  padding-left: 10px;
  height: 3em;
  border-radius: 10px;
`;

export const CustomSelect = styled.select`
  background-color: #27264d;
  border: 1px solid #41449f61;
  width: 100%;
  color: white;
  padding-left: 10px;
  height: 3em;
  border-radius: 10px;
`;

export const CustomTextArea = styled.textarea`
  background-color: #27264d;
  width: 100%;
  color: white;
  padding-left: 10px;
  display: flex;
  border: 1px solid #41449f61;
  height: 5em;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  background-color: #3d78af;
  display: flex;
  width: 30%;
  justify-content: center;
  color: white;
  border-radius: 100px;
  border: 1px solid white;
`;
