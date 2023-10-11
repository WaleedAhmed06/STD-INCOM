import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {  useNavigate } from "react-router-dom";
import {  Route, Routes,} from "react-router-dom"
import HouseIcon from "@mui/icons-material/House";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Institute from "./screen/admin/institute";
import InstituteForm from "./screen/admin/instituteform";
import UserReg from "./screen/admin/userReg";


const drawerWidth = 240;

function Nav(props:any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<any>(""); // State to manage submenu open/close
  const [pagesArr, setPagesArr] = React.useState([
    {
      text: "Admin",
      icon: <HouseIcon />,
      subItems: [
        {
              text: <b>Institute</b>,
            route:"/Institute-list"
        },
      
      ],
    },
    {
      text: "institute",
      icon: <InfoIcon />,
      route: "/", // Specify the route to navigate to
    },
    {
      text: "instituteform",
      icon: <CallIcon />,
      route: "/", // Specify the route to navigate to
    },
    // Add submenu items
    {
      text: "userReg",
      icon: openSubMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />,
      subItems: [
        {
          text: "Submenu Item 1",
          route: "/",
        },
        {
          text: "Submenu Item 2",
          route: "/",
        },
      ],
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const handleRouter = (route:any) => {
    navigate(`/nav/${route}`);
  };


  const handleSubMenuClick = (text:any) => {
    // Toggle submenu open/close
    setOpenSubMenu(openSubMenu === text ? "" : text);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pagesArr.map((item :any, index:any) => {
          const { text, icon, route, subItems } = item;
          return (
            <div key={text}>
              {subItems ? (
                <ListItem onClick={() => handleSubMenuClick(text)}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem onClick={() => handleRouter(route)}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )}
              {subItems && (
                <Collapse
                  in={openSubMenu === text}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {subItems.map((subItem :any, subIndex:any) => (
                      <ListItem
                        key={subIndex}
                        onClick={() => handleRouter(subItem.route)}
                      >
                        <ListItemButton>
                          <ListItemIcon />
                          <ListItemText primary={subItem.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="institute" element={<Institute />} />
          <Route path="instituteform" element={<InstituteForm />} />
          <Route path="userReg" element={<UserReg />} />
        </Routes>
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
