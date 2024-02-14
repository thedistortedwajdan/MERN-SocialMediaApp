import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box display={"flex"} mt={{
        xs: "3.5rem",
        sm: "4rem",
      
      }}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </Box>
    </>
  );
}
