import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DealershipLogin1 from "./pages/DealershipLogin1";
import DealershipLogin2 from "./pages/DealershipLogin2";
import DealershipLogin4 from "./pages/DealershipLogin4";
import DealershipLogin5 from "./pages/DealershipLogin5";
import DealershipLogin3 from "./pages/DealershipLogin3";
import DealershipLogin6 from "./pages/DealershipLogin6";
import DealershipSignup11 from "./pages/DealershipSignup11";
import DealershipSignup12 from "./pages/DealershipSignup12";
import DealershipSignup13 from "./pages/DealershipSignup13";
import DealershipSignup231 from "./pages/DealershipSignup231";
import DealershipSignup232 from "./pages/DealershipSignup232";
import DealershipSignup233 from "./pages/DealershipSignup233";
import DealershipSignup234 from "./pages/DealershipSignup234";
import LiveOrdersFinanceMoreInf from "./pages/LiveOrdersFinanceMoreInf";
import InventoryFilter1 from "./pages/InventoryFilter1";
import InventoryFilter3 from "./pages/InventoryFilter3";
import Inventory1 from "./pages/Inventory1";
import Inventory2 from "./pages/Inventory2";
import Inventory3GridView from "./pages/Inventory3GridView";
import InventoryFilter2 from "./pages/InventoryFilter2";
import InventoryFilter4 from "./pages/InventoryFilter4";
import InventoryVehicle1 from "./pages/InventoryVehicle1";
import InventoryVehicle2Images from "./pages/InventoryVehicle2Images";
import InventoryVehicle3ImageRem from "./pages/InventoryVehicle3ImageRem";
import InventoryUpdate1 from "./pages/InventoryUpdate1";
import InventoryUpdate2 from "./pages/InventoryUpdate2";
import InventoryUpdate3 from "./pages/InventoryUpdate3";
import InventoryUpdate4 from "./pages/InventoryUpdate4";
import DealershipSignup14 from "./pages/DealershipSignup14";
import SignupSetup1 from "./pages/SignupSetup1";
import SignupSetup2 from "./pages/SignupSetup2";
import SignupSetup5 from "./pages/SignupSetup5";
import SignupSetup6 from "./pages/SignupSetup6";
import SignupSetup3 from "./pages/SignupSetup3";
import SignupSetup7 from "./pages/SignupSetup7";
import SignupSetup9 from "./pages/SignupSetup9";
import SignupSetup10 from "./pages/SignupSetup10";
import SignupSetup102 from "./pages/SignupSetup102";
import SignupSetup4 from "./pages/SignupSetup4";
import SignupSetup8 from "./pages/SignupSetup8";
import SignupSetup111 from "./pages/SignupSetup111";
import SignupSetup12 from "./pages/SignupSetup12";
import SignupSetup14 from "./pages/SignupSetup14";
import SignupSetup15 from "./pages/SignupSetup15";
import DashboardHomePage from "./pages/DashboardHomePage";
import DashboardHomePage1 from "./pages/DashboardHomePage1";
import LiveOrdersBuyNow2 from "./pages/LiveOrdersBuyNow2";
import LiveOrdersBuyNow1 from "./pages/LiveOrdersBuyNow1";
import DashboardHomePage2 from "./pages/DashboardHomePage2";
import LiveOrdersPreapproval1 from "./pages/LiveOrdersPreapproval1";
import LiveOrdersBuyNowDocView from "./pages/LiveOrdersBuyNowDocView";
import DashboardHomePage3 from "./pages/DashboardHomePage3";
import LiveOrdersFinance1 from "./pages/LiveOrdersFinance1";
import LiveOrdersHowItWorks1 from "./pages/LiveOrdersHowItWorks1";
import LiveOrdersHowItWorks4P from "./pages/LiveOrdersHowItWorks4P";
import LiveOrdersHowItWorks2B from "./pages/LiveOrdersHowItWorks2B";
import LiveOrdersHowItWorks3B from "./pages/LiveOrdersHowItWorks3B";
import LiveOrdersHowItWorks5A from "./pages/LiveOrdersHowItWorks5A";
import LiveOrdersFinance2Missin from "./pages/LiveOrdersFinance2Missin";
import DashboardHomePageNotificat from "./pages/DashboardHomePageNotificat";
import LiveOrdersHowItWorks6F from "./pages/LiveOrdersHowItWorks6F";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-login-2":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-login-4":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-login-5":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-login-3":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-login-6":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup1-1":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup1-2":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup1-3":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup23-1":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup23-2":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup23-3":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup23-4":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-finance-more-info":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-filter-1":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-filter-3":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-1":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-2":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-3-grid-view":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-filter-2":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-filter-4":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-vehicle-1":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-vehicle-2-images":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-vehicle-3-image-remove":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-update-1":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-update-2":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-update-3":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-update-4":
        title = "";
        metaDescription = "";
        break;
      case "/dealership-signup1-4":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-1":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-2":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-5":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-6":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-3":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-7":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-9":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-10":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-10-2":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-4":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-8":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-11-1":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-12":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-14":
        title = "";
        metaDescription = "";
        break;
      case "/signup-setup-15":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-home-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-buy-now-2":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-buy-now-1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-home-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-preapproval-1":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-buy-now-doc-view":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-home-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-finance-1":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-how-it-works-1":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-how-it-works-4-preapprove":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-how-it-works-2-buynow":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-how-it-works-3-buynow":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-how-it-works-5-actions":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-finance-2-missing-info":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-home-page-notifications":
        title = "";
        metaDescription = "";
        break;
      case "/live-orders-how-it-works-6-finance":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DealershipLogin1 />} />
      <Route path="/dealership-login-2" element={<DealershipLogin2 />} />
      <Route path="/dealership-login-4" element={<DealershipLogin4 />} />
      <Route path="/dealership-login-5" element={<DealershipLogin5 />} />
      <Route path="/dealership-login-3" element={<DealershipLogin3 />} />
      <Route path="/dealership-login-6" element={<DealershipLogin6 />} />
      <Route path="/dealership-signup1-1" element={<DealershipSignup11 />} />
      <Route path="/dealership-signup1-2" element={<DealershipSignup12 />} />
      <Route path="/dealership-signup1-3" element={<DealershipSignup13 />} />
      <Route path="/dealership-signup23-1" element={<DealershipSignup231 />} />
      <Route path="/dealership-signup23-2" element={<DealershipSignup232 />} />
      <Route path="/dealership-signup23-3" element={<DealershipSignup233 />} />
      <Route path="/dealership-signup23-4" element={<DealershipSignup234 />} />
      <Route
        path="/live-orders-finance-more-info"
        element={<LiveOrdersFinanceMoreInf />}
      />
      <Route path="/inventory-filter-1" element={<InventoryFilter1 />} />
      <Route path="/inventory-filter-3" element={<InventoryFilter3 />} />
      <Route path="/inventory-1" element={<Inventory1 />} />
      <Route path="/inventory-2" element={<Inventory2 />} />
      <Route path="/inventory-3-grid-view" element={<Inventory3GridView />} />
      <Route path="/inventory-filter-2" element={<InventoryFilter2 />} />
      <Route path="/inventory-filter-4" element={<InventoryFilter4 />} />
      <Route path="/inventory-vehicle-1" element={<InventoryVehicle1 />} />
      <Route
        path="/inventory-vehicle-2-images"
        element={<InventoryVehicle2Images />}
      />
      <Route
        path="/inventory-vehicle-3-image-remove"
        element={<InventoryVehicle3ImageRem />}
      />
      <Route path="/inventory-update-1" element={<InventoryUpdate1 />} />
      <Route path="/inventory-update-2" element={<InventoryUpdate2 />} />
      <Route path="/inventory-update-3" element={<InventoryUpdate3 />} />
      <Route path="/inventory-update-4" element={<InventoryUpdate4 />} />
      <Route path="/dealership-signup1-4" element={<DealershipSignup14 />} />
      <Route path="/signup-setup-1" element={<SignupSetup1 />} />
      <Route path="/signup-setup-2" element={<SignupSetup2 />} />
      <Route path="/signup-setup-5" element={<SignupSetup5 />} />
      <Route path="/signup-setup-6" element={<SignupSetup6 />} />
      <Route path="/signup-setup-3" element={<SignupSetup3 />} />
      <Route path="/signup-setup-7" element={<SignupSetup7 />} />
      <Route path="/signup-setup-9" element={<SignupSetup9 />} />
      <Route path="/signup-setup-10" element={<SignupSetup10 />} />
      <Route path="/signup-setup-10-2" element={<SignupSetup102 />} />
      <Route path="/signup-setup-4" element={<SignupSetup4 />} />
      <Route path="/signup-setup-8" element={<SignupSetup8 />} />
      <Route path="/signup-setup-11-1" element={<SignupSetup111 />} />
      <Route path="/signup-setup-12" element={<SignupSetup12 />} />
      <Route path="/signup-setup-14" element={<SignupSetup14 />} />
      <Route path="/signup-setup-15" element={<SignupSetup15 />} />
      <Route path="/dashboard-home-page" element={<DashboardHomePage />} />
      <Route path="/dashboard-home-page-1" element={<DashboardHomePage1 />} />
      <Route path="/live-orders-buy-now-2" element={<LiveOrdersBuyNow2 />} />
      <Route path="/live-orders-buy-now-1" element={<LiveOrdersBuyNow1 />} />
      <Route path="/dashboard-home-page-2" element={<DashboardHomePage2 />} />
      <Route
        path="/live-orders-preapproval-1"
        element={<LiveOrdersPreapproval1 />}
      />
      <Route
        path="/live-orders-buy-now-doc-view"
        element={<LiveOrdersBuyNowDocView />}
      />
      <Route path="/dashboard-home-page-3" element={<DashboardHomePage3 />} />
      <Route path="/live-orders-finance-1" element={<LiveOrdersFinance1 />} />
      <Route
        path="/live-orders-how-it-works-1"
        element={<LiveOrdersHowItWorks1 />}
      />
      <Route
        path="/live-orders-how-it-works-4-preapprove"
        element={<LiveOrdersHowItWorks4P />}
      />
      <Route
        path="/live-orders-how-it-works-2-buynow"
        element={<LiveOrdersHowItWorks2B />}
      />
      <Route
        path="/live-orders-how-it-works-3-buynow"
        element={<LiveOrdersHowItWorks3B />}
      />
      <Route
        path="/live-orders-how-it-works-5-actions"
        element={<LiveOrdersHowItWorks5A />}
      />
      <Route
        path="/live-orders-finance-2-missing-info"
        element={<LiveOrdersFinance2Missin />}
      />
      <Route
        path="/dashboard-home-page-notifications"
        element={<DashboardHomePageNotificat />}
      />
      <Route
        path="/live-orders-how-it-works-6-finance"
        element={<LiveOrdersHowItWorks6F />}
      />
    </Routes>
  );
}
export default App;
