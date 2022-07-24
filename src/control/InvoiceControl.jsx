import { createContext, useContext } from "react";
import { instance } from "../Api";
import RefresherContext from "../context/refresh/ReresherContext";
const InvoiceControlContext = createContext({});

export const InvoiceControlProvider = ({ children }) => {
  //state
  // const [invoiceInfo, setInvoiceInfo] = useState();
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [successMsg, setSuccessMsg] = useState(null);

  //comsuming provided value
  const { refresh, setRefresh } = useContext(RefresherContext);

  const func_addInvoice = (invoice) => {
    instance.post(`/invoice/`)
    .then((res) => {
      setRefresh(refresh + 1);
      return res.data.results.data;
    })
    .catch((err) => console.log(err));
  }

  //deleteInvoice
  const func_deleteInvoice = (invoice) => {
    instance
      .delete(`/invoice/${invoice.id}`)
      .then((res) => {
        setRefresh(refresh + 1);
        return res.data.results.data;
      })
      .catch((err) => console.log(err));
  };

  //rendering
  return (
    <InvoiceControlContext.Provider
      value={{
        func_deleteInvoice,
      }}
    >
      {children}
    </InvoiceControlContext.Provider>
  );
};
export const useInvoice = () => {
  return useContext(InvoiceControlContext);
};
