import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HubIcon from "@mui/icons-material/Hub";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Leftbar() {
  return (
    <>
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
}
