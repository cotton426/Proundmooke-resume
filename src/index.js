import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MyApp from "./App";

ReactDOM.render(
  <ChakraProvider>
    <MyApp />
  </ChakraProvider>,
  document.getElementById("root")
);
