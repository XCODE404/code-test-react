import "./App.css";
import { Routes, Route } from "react-router-dom";
import Invoice from "./pages/invoice/Invoice";
import Layout from "./components/layout/Layout";
import { InvoicesProvider } from "./context/invoice/InvoiceContext";
import { InvoiceControlProvider } from "./control/InvoiceControl";
import { RefresherProvider } from "./context/refresh/ReresherContext";

function App() {
  return (
    <RefresherProvider>
      <InvoicesProvider>
        <InvoiceControlProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Invoice />}></Route>
            </Routes>
          </Layout>
        </InvoiceControlProvider>
      </InvoicesProvider>
    </RefresherProvider>
  );
}

export default App;
