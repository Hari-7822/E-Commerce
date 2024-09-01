import React from "react";

// Chakra imports
import { Flex, Text } from "@chakra-ui/react";

import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Text> </Text>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
