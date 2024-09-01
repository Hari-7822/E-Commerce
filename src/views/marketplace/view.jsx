import { Box, Grid } from "@chakra-ui/react";

import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Projects from "views/admin/profile/components/Projects";

import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/user.png";
import React ,{useState, useEffect}from "react";

export default function Overview() {
  const [data, set]= useState({});
  const [pr, setpr]= useState({});
  useEffect(()=> {
    fetch('/users')
    .then(res => res.json())
    .then(data => set(data))
  });
  useEffect(() => {
    fetch('projects')
    .then(res=>res.json())
    .then(pr=>setpr(pr))
  })

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
        {data.map(us => {<Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name={us.name}
          job = {us.role}
        />
        })}
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
        {pr.map(pro => {<Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name={pro.name}
          job={pro.postedBy}
        />})}
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
      </Grid>
    </Box>
  );
}
