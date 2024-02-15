import { Box } from "@mui/material";

export default function Rightbar() {
  return (
    <>
      <Box
        flex={2.5}
        bgcolor={"blue"}
        display={{
          xs: "none",
          sm: "block",
        }}
      >
        Rightbar
      </Box>
    </>
  );
}
