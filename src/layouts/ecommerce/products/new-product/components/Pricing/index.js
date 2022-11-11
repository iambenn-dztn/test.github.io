import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";

function Pricing() {
  return (
    <SoftBox>
      <SoftTypography variant="h5">Công việc đặc biệt</SoftTypography>
      <SoftBox mt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Chọn công việc
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              defaultValue={[
                { value: "1", label: "Phát sinh nhiệt" },
                { value: "2", label: "Loto" },
              ]}
              options={[
                { value: "1", label: "Phát sinh nhiệt" },
                { value: "2", label: "Loto" },
                { value: "3", label: "Không gian kín" },
                { value: "4", label: "Làm việc trên cao" },
              ]}
              size="large"
              isMulti
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default Pricing;
