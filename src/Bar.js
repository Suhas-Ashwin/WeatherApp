import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./bar.css";

export default function Bar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="app-bar">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="appbar-text"
        >
          Weather App
        </Typography>
      </AppBar>
    </Box>
  );
}
