import { Avatar, Box, Grid, Heading } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box>
      <Grid templateColumns="auto 1fr" gap={8} alignItems="end" p={4}>
        <Avatar size="2xl" />
        <Heading fontSize="6xl">Keverson Garcia</Heading>
      </Grid>
    </Box>
  );
};

export default Profile;
