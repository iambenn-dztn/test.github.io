import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials() {
  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Các bước làm việc
      </SoftTypography>
      <SoftBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="Bước 1" placeholder="Nhập nội dung" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Bước 2" placeholder="Nhập nội dung" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Bước 3" placeholder="Nhập nội dung" />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Socials;
