import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState([false, ""]);

  const login = async (e) => {
    setError([false, ""]);
    try {
      if (email === "" || password === "") {
        setError([true, "Invalid email or password."]);
        return;
      }
      e.preventDefault();
      // const res = await axios.post("/api/login", {
      //   email,
      //   password,
      // });
      setError([false, ""]);
      navigate("/home");
    } catch (err) {
      setError([true, "Server error, try again later."]);
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={{
          xs: "column",
          sm: "row",
        }}
        justifyContent={{
          xs: "space-evenly",
          sm: "space-around",
        }}
        height={"100vh"}
      >
        <Box>
          <Typography
            fontWeight={"bold"}
            fontSize={"3rem"}
            fontFamily={"monospace"}
            color={"primary"}
          >
            SocialApp
          </Typography>
          <Typography fontSize={"1.25rem"} fontWeight={"bold"}>
            Connect with the world
          </Typography>
        </Box>
        <FormControl>
          <Box
            sx={{
              borderRadius: 5,
              boxShadow: 2,
              width: "100%",
            }}
            p={2}
            display={"flex"}
            flexDirection={"column"}
          >
            {error[0] && (
              <Alert
                sx={{
                  mb: 2,
                }}
                severity="error"
              >
                {error[1]}
              </Alert>
            )}
            <TextField
              sx={{
                mb: 2,
              }}
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  login(e);
                }
              }}
            />
            <TextField
              sx={{
                mb: 2,
              }}
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  login(e);
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              sx={{
                mb: 2,
              }}
              type="submit"
              variant="contained"
              onClick={(e) => login(e)}
            >
              Login
            </Button>
            <Button
              sx={{
                mb: 1,
              }}
              variant="text"
            >
              Forgot Password?
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState([false, ""]);

  const register = async (e) => {
    setError([false, ""]);
    try {
      if (email === "" || name === "" || password === "" || cpassword === "") {
        setError([true, "Make sure to fill all the fields correctly."]);
        return;
      }
      if (password !== cpassword) {
        setError([true, "Passwords do not match."]);
        return;
      }
      e.preventDefault();
      // const res = await axios.post("/api/login", {
      //   email,
      //   password,
      // });
      setError([false, ""]);
      navigate("/");
    } catch (err) {
      setError([true, "Server error, try again later."]);
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={{
          xs: "column",
          sm: "row",
        }}
        justifyContent={{
          xs: "space-evenly",
          sm: "space-around",
        }}
        height={"100vh"}
      >
        <Box>
          <Typography
            fontWeight={"bold"}
            fontSize={"3rem"}
            fontFamily={"monospace"}
            color={"primary"}
          >
            SocialApp
          </Typography>
          <Typography fontSize={"1.25rem"} fontWeight={"bold"}>
            Connect with the world
          </Typography>
        </Box>
        <FormControl>
          <Box
            sx={{
              borderRadius: 5,
              boxShadow: 2,
              width: "100%",
            }}
            p={2}
            display={"flex"}
            flexDirection={"column"}
          >
            {error[0] && (
              <Alert
                sx={{
                  mb: 2,
                }}
                severity="error"
              >
                {error[1]}
              </Alert>
            )}
            <TextField
              sx={{
                mb: 2,
              }}
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  register(e);
                }
              }}
            />
            <TextField
              sx={{
                mb: 2,
              }}
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  register(e);
                }
              }}
            />
            <TextField
              sx={{
                mb: 2,
              }}
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  register(e);
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{
                mb: 2,
              }}
              label="Confirm Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={cpassword}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  register(e);
                }
              }}
              onChange={(e) => setcPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              sx={{
                mb: 2,
              }}
              type="submit"
              variant="contained"
              onClick={(e) => register(e)}
            >
              Register
            </Button>
            <Button
              sx={{
                mb: 1,
              }}
              variant="text"
            >
              Forgot Password?
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </Button>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default function Account() {
  const location = useLocation();
  const currenLocation = location.pathname;
  return <>{currenLocation === "/register" ? <Register /> : <Login />}</>;
}
