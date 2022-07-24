import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
  border-radius: 5px;
`;
export const Header = styled.span`
  display: flex;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`;
export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;
export const Item = styled.div`
  display: flex;
  width: 29%;
  margin: 2% 1%;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.18);
`;
export const Widget = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.span`
  flex: 3;
  padding: 5px;
  color: #bfbfbf;
  font-weight: bold;
  margin: 3px 0;
`;
export const Title = styled.span`
  flex: 2;
  padding: 5px;
  color: #0063c6;
  font-weight: 600;
  margin: 3px 0;
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  margin: 5px 0;
`;
export const UpdateButton = styled.button`
  padding: 5px;
  color: white;
  font-weight: bold;
  background: none;
  border: 2px solid #0072e3;
  border-radius: 5px;
  color: #0072e3;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    font-size: 20px !important;
  }
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  padding: 5px;
  color: white;
  font-weight: bold;
  background: none;
  border: 2px solid #ff2f2f;
  border-radius: 5px;
  color: #ff2f2f;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    font-size: 20px !important;
  }
  cursor: pointer;
`;
export const DetailButton = styled.button`
  padding: 5px;
  color: white;
  font-weight: bold;
  background: none;
  border: 2px solid #838383;
  border-radius: 5px;
  color: #838383;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    font-size: 20px !important;
  }
  cursor: pointer;
`;
export const LoadMore = styled.div`
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 15px;
  background: #ebebeb;
  color: #000000;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.18);
`;
export const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  border-radius: 5px;
`;
export const DetailModal = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
  border-radius: 5px;
`;
export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
  border-radius: 5px;
`;
export const InvoiceForm = styled.form`
  width: 100%;

  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
`;
export const FormTitle = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 2px;

  margin: 5px 0;
`;
export const FormButton = styled.input`
  margin: 0 10px;
  margin-top: 20px;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background: ${(props) => props.actionType && "#ff0f0f"};
  color: ${(props) => props.actionType && "white"};
`;
