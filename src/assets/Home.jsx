import { Stack, Box, Text, Button, Image } from "@chakra-ui/react";

export function Home() {
  return (
    <Stack
      width="100vw"
      justify="flex-start"
      align="flex-start"
      spacing="10px"
      height="1200px"
      background="#F0EEED"
    >
      <Stack
        width="100vw"
        height="100vh"
        direction="row"
        justify="flex-start"
        align="center"
        spacing="10%"
      >
        <Stack
          width="60%"
          justify="flex-start"
          align="flex-start"
          spacing="40px"
          direction="column"
          paddingLeft="5%"
        >
          <Box>
            <Text
              fontFamily="Inter"
              lineHeight="1.26"
              fontWeight="medium"
              fontSize="9rem"
              letterSpacing="-0.04em"
              color="black"
              width="100%"
              height="50%"
              maxWidth="100%"
            >
              I’m Proundmooke. a Front-end developer.
            </Text>
          </Box>

          <Text
            fontFamily="Inter"
            lineHeight="1.51"
            fontWeight="regular"
            fontSize="2rem"
            color="#000000"
            width="650px"
            maxWidth="100%"
          >
            Front-end developer based in Thailand. I am coding with a clean and
            beautiful problem solving in mind.
          </Text>

         

          <Button>Download CV</Button>
        </Stack>

        <Image
          alt="proundmooke-picture"
          src="https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/270125614_4795081927205404_3116836941428922850_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEjuh9koJ3IBUZ1UVCQ9oauknXRutYPe3WSddG61g97dTeU8iQNScqyfPzn-lDK8soyfajnnJQYhWEt9aqaBvC4&_nc_ohc=cz9qSTk1uuIAX-TfHVj&_nc_ht=scontent.fkkc1-1.fna&oh=00_AfDU6_04T683zRty2fdX7YeaFWJDS5HeEARH1MllugCPhA&oe=640DFEAA"
          width="40%"
          padding="5%"
          height="70vh"
          objectFit="cover"
          filter="brightness(110%)"
        />
      </Stack>
    </Stack>
  );
}
