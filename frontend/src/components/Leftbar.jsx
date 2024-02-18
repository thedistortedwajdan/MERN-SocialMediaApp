import {
  Avatar,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import HubIcon from "@mui/icons-material/Hub";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Home = () => {
  return (
    <>
      {" "}
      <Box
        flex={2.5}
        display={{
          xs: "none",
          sm: "block",
        }}
        sx={{ maxHeight: "93vh", overflowY: "scroll" }}
      >
        <Box sx={{ bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Feed" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ChatIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chats" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <OndemandVideoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Videos" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BookmarkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bookmarks" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  variant="contained"
                  sx={{
                    margin: "auto",
                    mt: "0.5rem",
                  }}
                >
                  Show More
                </Button>
              </ListItem>
            </List>
          </nav>
          <Divider variant="middle" />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    alignSelf: "center",
                  }}
                  primary="Ali Conors"
                />
              </ListItem>
            </List>
          </nav>
        </Box>
      </Box>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <Box
        flex={{
          xs: 0,
          lg: 4,
        }}
        display={{
          xs: "none",
          lg: "flex",
        }}
        height={"fit-content"}
        p={2}
        sx={{ maxHeight: "62vh", overflowY: "scroll" }}
      >
        <Box p={2}>
          <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
            Friends
          </Typography>
          <ImageList
            sx={{ width: "100%", height: 450, mb: 2 }}
            cols={3}
            rowHeight={"auto"}
          >
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300?w=164&h=164&fit=crop&auto=format 2x"
                src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                loading="lazy"
              />
              <Typography>John Doe</Typography>
            </ImageListItem>
          </ImageList>
          <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
            Photos
          </Typography>
          <ImageList
            sx={{ width: "100%", height: 450, mb: 1 }}
            cols={3}
            rowHeight={"auto"}
          >
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{ borderRadius: 10 }}
                srcSet="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 2x"
                src="https://images.pexels.com/photos/19338186/pexels-photo-19338186/free-photo-of-scenic-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Box>
      </Box>
    </>
  );
};

export default function Leftbar() {
  return (
    <>
      <Profile />
    </>
  );
}
