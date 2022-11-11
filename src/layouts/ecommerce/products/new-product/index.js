import { useState } from "react";

import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";

import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

import PageLayout from "examples/LayoutContainers/PageLayout";

import Header from "layouts/ecommerce/products/new-product/components/Header";
import ProductInfo from "layouts/ecommerce/products/new-product/components/ProductInfo";
import Socials from "layouts/ecommerce/products/new-product/components/Socials";
import Pricing from "layouts/ecommerce/products/new-product/components/Pricing";

function getSteps() {
  return ["1. Khu vực làm việc", "2. Các bước làm việc", "3. Công việc đặc biệt"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ProductInfo />;
    case 1:
      return <Socials />;
    case 2:
      return <Pricing />;
    default:
      return null;
  }
}

function NewProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <PageLayout>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Card sx={{ overflow: "visible" }}>
            <SoftBox p={2}>
              <SoftBox>
                {getStepContent(activeStep)}
                <SoftBox mt={3} width="100%" display="flex" justifyContent="space-between">
                  {activeStep === 0 ? (
                    <SoftBox />
                  ) : (
                    <SoftButton variant="gradient" color="secondary" onClick={handleBack}>
                      Quay lại
                    </SoftButton>
                  )}
                  <SoftButton
                    variant="gradient"
                    color="dark"
                    onClick={!isLastStep ? handleNext : undefined}
                  >
                    {isLastStep ? "Đăng kí" : "Tiếp theo"}
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </SoftBox>
          </Card>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default NewProduct;
