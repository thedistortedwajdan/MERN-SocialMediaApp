import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Feed from "../components/Feed";
import { Box } from "@mui/material";
import ProfileIntro from "../components/ProfileIntro";

export default function Profile() {
  return (
    <>
      <Navbar />
      <Box
        flex={7}
        display={"flex"}
        mt={{
          xs: "3.5rem",
          sm: "4rem",
        }}
        flexDirection={"column"}
      >
        <ProfileIntro />
        <Box display={"flex"}>
          <Leftbar />
          <Feed />
        </Box>
      </Box>
    </>
  );
}
