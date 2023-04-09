import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/srcs.avif";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
        />

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Crypto Wallah
      </Text>
    </Box>
  );
};

export default Home;