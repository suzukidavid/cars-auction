/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";

// Images

import vehicle1 from "assets/images/motors.stylemixthemes.com/01-6-255x135.jpg";

import VehicleCard from "../../../../components/VehicleCards/VehicleCard";
import VehicleAuctionCard from "../../../../components/VehicleCards/VehicleAuctionCard";

function Places() {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "info",
    label: "from / night",
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleAuctionCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                timeData={{timeStart: Date.now(), timeDuration: 100000}}
                topBidPrice={13000}
                allBidCount={13}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                action={actionProps}
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox mt={3}>
              <VehicleCard
                image={vehicle1}
                title="MERCEDES-BENZ C-CLASS 2015"
                vehicleInfo={{ miles: 15, fuel: "12/23", transmission: "Manual" }}
                action={actionProps}
              />
            </MKBox>
          </Grid>
        </Grid>
        <MKBox mt={5}>
          <MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Places;
