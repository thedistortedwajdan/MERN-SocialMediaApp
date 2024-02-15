import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function Post() {
  const [like, setlike] = useState(false);
  return (
    <>
      <Card
        sx={{
          width: {
            lg: "60%",
          },
          mx: "auto",
          my: "1.25rem",
        }}
      >
        <CardHeader
          avatar={<Avatar src=""></Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography fontWeight={600}>John Doe</Typography>}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            px: 0.5,
          }}
          image="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setlike(!like)}
            sx={{
              color: like ? "#1976d2" : "",
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <SmsIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
