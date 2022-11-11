import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import Footer from "layouts/pages/pricing-page/components/Footer";
import PropTypes from "prop-types";

import SoftBox from "components/SoftBox";

import { setLayout, useSoftUIController } from "context";

function PageLayout({ background, children }) {
  const [, dispatch] = useSoftUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <SoftBox bgColor={background} mt={4}>
      <SoftBox minHeight="calc(100vh - 268px)">{children}</SoftBox>
      <SoftBox mt={8}>
        <Footer />
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
