import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";

export default function Rightbar() {
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
        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              my: 1,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#f6fafe",
              },
            }}
          >
            <CakeIcon
              sx={{
                mr: 1,
                color: "red",
              }}
            />
            <Typography>
              <Typography component={"span"} fontWeight={"bold"}>
                Jane Dane
              </Typography>{" "}
              and{" "}
              <Typography component={"span"} fontWeight={"bold"}>
                3 others
              </Typography>{" "}
              have birthday today.
            </Typography>
          </Paper>
          <Box sx={{ bgcolor: "background.paper" }}>
            <Typography mx={"auto"} component={"span"} fontWeight={"bold"}>
              Online Friends
            </Typography>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
                    <Badge color="primary" overlap="circular" badgeContent="">
                      <Avatar alt="Remy Sharp" src="" />
                    </Badge>
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
      </Box>
    </>
  );
}
