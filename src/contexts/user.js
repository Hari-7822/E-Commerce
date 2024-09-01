import { Box, Grid } from "@chakra-ui/react";

import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Projects from "views/admin/profile/components/Projects";
import Upload from "views/admin/profile/components/Upload";

import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/user.png";
import React ,{useState, useEffect}from "react";

export default function Overview() {
  const [data, set]= useState({});
    useEffect(() => {
        fetch('/users/:userId')
  .then(res=>res.json)
  .then(data => set(data))
  return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
            base: "1fr",    
            lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name={data.name}
          job={data.role}
          />
        <Upload
          gridArea={{
              base: "2 / 1 / 4 / 2",
              lg: "1 / 2 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe='20px'
          pb={{ base: "100px", lg: "20px" }}
          />
      </Grid>
      <Grid
        mb='20px'
        templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name={data.name}
          job={data.role}
          />
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
          />
      </Grid>
    </Box>
  );
}
)};
