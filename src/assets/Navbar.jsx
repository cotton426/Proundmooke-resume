import { Stack, Text, Switch, useColorMode } from "@chakra-ui/react";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      width="100%"
      direction="row"
      justify="space-between"
      align="center"
      height="125px"
      background="white"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Text
        fontFamily="Inter"
        lineHeight="1"
        fontWeight="extrabold"
        fontSize="2rem"
        letterSpacing="-0.04em"
        textTransform="uppercase"
        color="black"
        padding="5%"
      >
        My profile
      </Text>
      <Stack
        padding="5%"
        direction="row"
        justify="center"
        align="center"
        spacing="40px"
      >
        <Stack
          borderRadius="7px"
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
        >
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="1.6rem"
            letterSpacing="0.14em"
            color="black"
          >
            HOME
          </Text>
        </Stack>
        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize="1.6rem"
          letterSpacing="0.14em"
          color="black"
        >
          ABOUT
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize="1.6rem"
          letterSpacing="0.14em"
          color="black"
        >
          BLOG
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize="1.6rem"
          letterSpacing="0.14em"
          color="black"
        >
          CONTACT
        </Text>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </Stack>
    </Stack>
  );
}
