import { Avatar, Box, Button, TextField } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TagFacesIcon from "@mui/icons-material/TagFaces";

export default function CreatePost() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          width: {
            lg: "60%",
          },
          mx: "auto",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Avatar alt="Remy Sharp" src="" />
          <TextField
            fullWidth
            label="What's on your mind, John?"
            multiline
            maxRows={4}
            variant="standard"
          />
        </Box>
        {/* <Divider variant="middle" /> */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            p: 1,
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              fontSize: "0.5rem",
              p: 1,
            }}
            variant="outlined"
            startIcon={
              <CollectionsIcon
                sx={{
                  color: "#ff6247",
                }}
              />
            }
          >
            Photo or Video
          </Button>
          <Button
            sx={{
              fontSize: "0.5rem",
              p: 1,
            }}
            variant="outlined"
            startIcon={
              <LabelIcon
                sx={{
                  color: "#0300f1",
                }}
              />
            }
          >
            Tag
          </Button>
          <Button
            sx={{
              fontSize: "0.5rem",
              p: 1,
            }}
            variant="outlined"
            startIcon={
              <LocationOnIcon
                sx={{
                  color: "#00810c",
                }}
              />
            }
          >
            Location
          </Button>
          <Button
            sx={{
              fontSize: "0.5rem",
              p: 1.25,
            }}
            variant="outlined"
            startIcon={<TagFacesIcon />}
          >
            Feeling
          </Button>
        </Box>
        <Button
          sx={{
            fontSize: "0.7rem",
            width: "50%",
            alignSelf: "center",
          }}
          variant="contained"
        >
          Post
        </Button>
      </Box>
    </>
  );
}
