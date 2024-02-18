import { Box } from "@mui/material";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { useLocation } from "react-router-dom";

export default function Feed() {
  // const location = useLocation();
  // const currentLocation = location.pathname;
  return (
    <>
      <Box
        // flex={currentLocation !== "/profile" ? 7 : 5}
        // sx={{ maxHeight: currentLocation !== "/profile" ? "62vh" : "93vh", overflowY: "scroll" }}
        flex={{
          xs: 12,
          lg: 8,
        }}
        sx={{ maxHeight: "62vh", overflowY: "scroll" }}
      >
        <Box p={2} display={"flex"} flexDirection={"column"}>
          <CreatePost />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Box>
      </Box>
    </>
  );
}
