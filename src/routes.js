import PricingPage from "layouts/pages/pricing-page";
import NewProduct from "layouts/ecommerce/products/new-product";
import Invoice from "layouts/pages/account/invoice";

const routes = [
  {
    name: "Pricing Page",
    key: "pricing-page",
    route: "/",
    component: <PricingPage />,
  },
  {
    name: "New Product",
    key: "new-product",
    route: "/registration/add",
    component: <NewProduct />,
  },
  {
    name: "Invoice",
    key: "invoice",
    route: "/registration/1",
    component: <Invoice />,
  },
];

export default routes;
