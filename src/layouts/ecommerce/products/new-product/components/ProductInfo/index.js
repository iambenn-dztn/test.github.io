import { useState } from "react";

import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";

import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Địa điểm thi công</SoftTypography>
      <SoftBox mt={3}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <SoftBox mb={3}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Khu vực
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                placeholder="Chọn khu vực làm việc"
                options={[
                  { value: "packing", label: "Packing" },
                  { value: "office", label: "Office" },
                  { value: "mixing", label: "Mixing" },
                  { value: "warehouse", label: "Warehouse" },
                ]}
              />
            </SoftBox>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              multiline
              rows={4}
              type="text"
              label="Mô tả công việc"
              placeholder="Nhập mô tả cho công việc ..."
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default ProductInfo;
