import { Avatar, Box, Grid, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const {
    data: { user },
  } = useSession();

  return (
    <Box>
      <Grid templateColumns="auto 1fr" gap={8} alignItems="end" p={4}>
        <Avatar
          size="2xl"
          src={user?.image}
          bg={!user?.image && "whiteAlpha.400"}
        />
        <Heading fontSize="6xl">{user?.name}</Heading>
      </Grid>
    </Box>
  );
};

export default Profile;
