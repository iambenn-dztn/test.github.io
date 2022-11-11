import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";

import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

import logo from "assets/images/unilever.png";
import PageLayout from "examples/LayoutContainers/PageLayout";

function Invoice() {
  const { borderWidth } = borders;
  const { light } = colors;
  const borderBottom = `${borderWidth[1]} solid ${light.main}`;

  return (
    <PageLayout>
      <SoftBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              <SoftBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <SoftBox component="img" src={logo} width="25%" p={1} mb={1} />
                    <SoftTypography variant="h6" fontWeight="medium">
                      Chi tiết giấy phép công tác
                    </SoftTypography>
                    <SoftBox mt={1} mb={2}>
                      <SoftTypography display="block" variant="body2" color="secondary">
                        Liên hệ: (+84) 99999999
                      </SoftTypography>
                    </SoftBox>
                  </Grid>

                  <Grid item xs={12} md={7} lg={3}>
                    <SoftBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <SoftBox mt={1}>
                        <SoftTypography variant="h6" fontWeight="medium">
                          Họ và tên: Nguyễn Văn A
                        </SoftTypography>
                      </SoftBox>
                      <SoftBox mb={1}>
                        <SoftTypography variant="body2" color="secondary">
                          Địa chỉ thường trú:
                          <br />
                          Hà Nội
                          <br />
                          Việt Nam
                        </SoftTypography>
                      </SoftBox>
                    </SoftBox>
                  </Grid>
                </Grid>

                <SoftBox mt={{ xs: 1, md: 2 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                      <SoftTypography variant="h6" color="secondary" fontWeight="medium">
                        Mã số giấy phép:
                      </SoftTypography>
                      <SoftTypography variant="h5" fontWeight="medium">
                        #0453119
                      </SoftTypography>
                    </Grid>

                    <Grid item xs={12} md={7} lg={5}>
                      <SoftBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 1, md: 0 }}
                      >
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" color="secondary" fontWeight="medium">
                            Ngày cấp:
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" fontWeight="medium">
                            06/03/2019
                          </SoftTypography>
                        </SoftBox>
                      </SoftBox>
                      <SoftBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" color="secondary" fontWeight="medium">
                            Nơi cấp:
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox width="50%">
                          <SoftTypography variant="h6" fontWeight="medium">
                            Bắc Ninh
                          </SoftTypography>
                        </SoftBox>
                      </SoftBox>
                    </Grid>
                  </Grid>
                </SoftBox>
              </SoftBox>

              <SoftBox px={3}>
                <Grid item xs={12} lg={5}>
                  <SoftTypography variant="h5" fontWeight="medium">
                    Khu vực làm việc: Mixing
                  </SoftTypography>
                </Grid>
              </SoftBox>

              <SoftBox p={3}>
                <SoftBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <SoftBox component="thead">
                      <TableRow>
                        <SoftBox
                          component="th"
                          width={{ xs: "20%", md: "30%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h6" color="text" fontWeight="medium">
                            Các bước
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="h6" color="text" fontWeight="medium">
                            Mô tả
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                    </SoftBox>
                    <TableBody>
                      <TableRow>
                        <SoftBox component="td" textAlign="left" p={1} borderBottom={borderBottom}>
                          <SoftTypography variant="body2" color="text">
                            Bước 1
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            1
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                      <TableRow>
                        <SoftBox component="td" textAlign="left" p={1} borderBottom={borderBottom}>
                          <SoftTypography variant="body2" color="text">
                            Bước 2
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <SoftTypography variant="body2" color="text">
                            3
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                      <TableRow>
                        <SoftBox component="td" textAlign="left" p={1}>
                          <SoftTypography variant="body2" color="text">
                            Bước 3
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <SoftTypography variant="body2" color="text">
                            1
                          </SoftTypography>
                        </SoftBox>
                      </TableRow>
                      <TableRow>
                        <SoftBox
                          component="td"
                          textAlign="left"
                          p={1}
                          borderBottom={borderBottom}
                        />
                        <SoftBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        />
                      </TableRow>
                    </TableBody>
                  </Table>
                </SoftBox>
              </SoftBox>

              <SoftBox p={3}>
                <SoftTypography component="span" variant="h6" fontWeight="medium" color="secondary">
                  Công việc phát sinh:{" "}
                  <SoftTypography component="span" variant="h6" fontWeight="medium">
                    Không gian kín, Loto
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>

              <SoftBox p={3} mt={7}>
                <Grid container>
                  <Grid item xs={12} lg={5}></Grid>

                  <Grid item xs={12} lg={7}>
                    <SoftBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <SoftButton
                        variant="gradient"
                        color="info"
                        onClick={() => window.print(this)}
                      >
                        Quay về
                      </SoftButton>
                    </SoftBox>
                  </Grid>
                </Grid>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
    </PageLayout>
  );
}

export default Invoice;
