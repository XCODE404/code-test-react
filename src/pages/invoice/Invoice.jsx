import React, { useState, useContext } from "react";
import { BiDetail, BiEdit, BiTrash } from "react-icons/bi";
import {
  Container,
  Header,
  List,
  Item,
  Label,
  ButtonGroup,
  UpdateButton,
  DeleteButton,
  DetailButton,
  AddButton,
  LeftDiv,
  Modal,
  ModalContent,
  FormTitle,
  InvoiceForm,
  FormInput,
  FormButton,
  DeleteModal,
  DetailModal,
  LoadMore,
  CenterDiv,
  Widget,
  Title,
} from "./Invoice.style";
import { useForm } from "react-hook-form";
import InvoiceContext from "../../context/invoice/InvoiceContext";
import { useInvoice } from "../../control/InvoiceControl";

function Invoice() {
  //comsuming provided values
  const { invoices } = useContext(InvoiceContext);
  const invoiceController = useInvoice();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  //show Box Modal
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  //show delete modal
  const func_showDelete = (data) => {
    setSelectedData(data);
    setIsDelete(!isDelete);
  };

  //show delete modal
  const func_showDetail = (data) => {
    setSelectedData(data);
    setIsDetail(!isDelete);
  };

  //show delete modal
  const func_showUpdate = (data) => {
    setSelectedData(data);
    setIsUpdate(!isDelete);
  };

  //get select data
  const [selectedData, setSelectedData] = useState("");

  //create new invoice
  const onSubmit = (data) => {
    console.log(data);
  };

  //delete invoice
  const func_delete = () => {
    invoiceController.func_deleteInvoice(selectedData);
    setIsDelete(false);
  };

  const func_add = () => {
    invoiceController.func_addInvoice();
  };

  const onUpdateSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Header>Invoice</Header>
        <LeftDiv>
          <AddButton onClick={() => setIsAdd(!isAdd)}>Add Invoice</AddButton>
        </LeftDiv>
        <List>
          {invoices.map((item) => (
            <Item key={item.id}>
              <Widget>
                <Label>Customer Name :</Label>
                <Title>{item.customer_name}</Title>
              </Widget>
              <Widget>
                <Label>Sale Person Name : </Label>
                <Title>{item.sales_person_name}</Title>
              </Widget>
              <Label>Note :</Label>
              <Title>{item.notes}</Title>

              <ButtonGroup>
                <DetailButton onClick={() => func_showDetail(item)}>
                  <BiDetail />
                </DetailButton>
                <UpdateButton onClick={() => func_showUpdate(item)}>
                  <BiEdit />
                </UpdateButton>
                <DeleteButton onClick={() => func_showDelete(item)}>
                  <BiTrash />
                </DeleteButton>
              </ButtonGroup>
            </Item>
          ))}

          <CenterDiv>
            <LoadMore>LoadMore...</LoadMore>
          </CenterDiv>
        </List>
      </Container>
      {/* ADD INVOICE */}
      {isAdd && (
        <Modal>
          <ModalContent>
            <div>
              <FormTitle>Add Invoice </FormTitle>
              <InvoiceForm onSubmit={handleSubmit(onSubmit)}>
                <FormInput {...register("salePerson", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.salePerson && <span>This field is required</span>}
                <FormInput {...register("date", { required: true })} />
                <FormInput
                  type="date"
                  {...register("date", { required: true })}
                />

                <LeftDiv>
                  <FormButton
                    type="submit"
                    value="Create Account"
                    onClick={() => setIsAdd(false)}
                  />
                </LeftDiv>
              </InvoiceForm>
            </div>
          </ModalContent>
        </Modal>
      )}
      {/* Update INVOICE */}
      {isUpdate && (
        <Modal>
          <ModalContent>
            <div>
              <FormTitle>Update Invoice </FormTitle>
              <InvoiceForm onSubmit={handleSubmit(onUpdateSubmit)}>
                <FormInput
                  setValues
                  {...register("salePerson", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.salePerson && <span>This field is required</span>}
                <FormInput {...register("date", { required: true })} />
                <FormInput
                  type="date"
                  {...register("date", { required: true })}
                />

                <LeftDiv>
                  <FormButton
                    type="submit"
                    value="Update"
                    onClick={() => setIsUpdate(false)}
                  />
                </LeftDiv>
              </InvoiceForm>
            </div>
          </ModalContent>
        </Modal>
      )}
      {/* Delete INVOICE */}
      {isDelete && (
        <Modal>
          <DeleteModal>
            <FormTitle>Delete Confiration </FormTitle>
            <span>Are you sure?</span>
            <div>
              <FormButton
                type="submit"
                value="Delete"
                actionType="delete"
                onClick={() => func_delete()}
              />
              <FormButton
                type="submit"
                value="Cancel"
                onClick={() => setIsDelete(false)}
              />
            </div>
          </DeleteModal>
        </Modal>
      )}
      {/* Detail INVOICE */}
      {isDetail && (
        <Modal>
          <DetailModal>
            <FormTitle>Invoice Detail</FormTitle>

            <Label>21/10/22</Label>
            <Label>Sale Person</Label>
            <Label>How Are You</Label>
            <Label>I hope You are well</Label>

            <LeftDiv>
              <FormButton
                type="submit"
                value="Ok"
                onClick={() => setIsDetail(false)}
              />
            </LeftDiv>
          </DetailModal>
        </Modal>
      )}
    </>
  );
}

export default Invoice;
