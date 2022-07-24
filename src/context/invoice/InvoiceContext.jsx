import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../../Api";
import RefresherContext from "../refresh/ReresherContext";
//create context
const InvoiceContext = createContext({});

//create provider
export const InvoicesProvider = ({ children }) => {
  //comsuming provided value
  const { refresh } = useContext(RefresherContext);
  //create state
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    instance
      .get("/invoice?page=1")
      .then((response) => setInvoices(response.data.results.data));
  }, [refresh]);
  return (
    <InvoiceContext.Provider value={{ invoices: invoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;
