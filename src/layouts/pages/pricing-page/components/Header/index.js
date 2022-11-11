import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import pageRoutes from "page.routes";

import waves from "assets/images/shapes/waves-white.svg";

function Header() {
  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
          label: "buy now",
          color: "dark",
        }}
        transparent
        light
      />
      <SoftBox
        position="relative"
        borderRadius="xl"
        bgColor="info"
        variant="gradient"
        m={2}
        pt={12}
        pb={20}
      >
        <SoftBox component="img" src={waves} alt="waves" width="100%" position="absolute" top={0} />
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={5}>
            <SoftBox mb={1}>
              <SoftTypography variant="h3" color="white" fontWeight="bold">
                Cổng để đăng kí giấy phép công tác
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="body2" color="white" fontWeight="regular">
                Thêm mô tả cho hệ thống hoặc slogan
              </SoftTypography>
            </SoftBox>
            <Grid
              item
              xs={12}
              sm={12}
              mt={6}
              sx={{
                mx: "auto",
                display: "flex",
                flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
                gap: 2,
              }}
            >
              <SoftInput placeholder="Nhập mã để tìm kiếm giấy phép" />
              <SoftButton sx={{ width: { lg: "150px", md: "120px", sm: "130px", xs: "100%" } }}>
                Tìm kiếm
              </SoftButton>
            </Grid>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}

export default Header;
