import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 3em;
  margin: 0px auto;
  border-radius: 50px;
  background-color: #27264d;
  position: relative;
  margin-top: 2em;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const CustomInput = styled.input`
  height: 80%;
  background-color: #27264d;
  border: none;
  width: 100%;
  border-radius: 50px;
  padding-left: 10px;
  color: white;
`;

export const AddButton = styled.button`
  position: absolute;
  background-color: #3d78af;
  border-radius: 50px;
  right: 10px;
  width: 2em;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  font-size: 13px;
`;
