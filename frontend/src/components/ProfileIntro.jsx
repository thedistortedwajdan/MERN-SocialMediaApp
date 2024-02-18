import { Avatar, Card, CardMedia, Typography } from "@mui/material";

export default function ProfileIntro() {
  return (
    <>
      <Card
        sx={{
          m: 2,
          mb: 0,
          position: "relative",
          borderRadius: 2,
          boxShadow: 5,
        }}
      >
        <CardMedia
          sx={{
            height: 250,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          image="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="green iguana"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/9558758/pexels-photo-9558758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 125 - 125,
            width: 200,
            height: 200,
            border: "4px solid #fff",
          }}
        />
      </Card>
      <Typography
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        sx={{
          alignSelf: "center",
        }}
      >
        John Doe
      </Typography>
    </>
  );
}
