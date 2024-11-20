import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Customer = lazy(() => import("./pages/customer"));
const Menu = lazy(() => import  ("./pages/menu"))
const Analytics = lazy(() => import  ("./pages/analytics"))
const Orders = lazy(() => import  ("./pages/orders"))

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          
          {/* // customers */}
          <Route path="/customers" element={<Customer />} />
          {/* //end  customers */}

          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
