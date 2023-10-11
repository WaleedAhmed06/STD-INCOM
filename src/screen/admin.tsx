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
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import InstituteForm from "./admin/instituteform";
import UserReg from "./admin/userReg";
import InstituteAd from "./admin/institute";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import DoorbellOutlinedIcon from '@mui/icons-material/DoorbellOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const drawerWidth = 240;

function Admin(props:any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<any>(""); // State to manage submenu open/close
  const [pagesArr, setPagesArr] = React.useState([
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlinedIcon />,
      mainItems: [
        {
              text: <b>Institute</b>,
            route:"institute",
            icon:<HomeWorkOutlinedIcon/>
        },
      
      ],
    },
    {
      text: "Institute",
      icon: <DoorbellOutlinedIcon />,
      route: "institutead", // Specify the route to navigate to
    },
    {
      text: "Institute Form",
      icon: <InsertDriveFileOutlinedIcon />,
      route: "instituteform", // Specify the route to navigate to
    },
    // Add submenu items
    {
      text: "User Register",
      icon: <BadgeOutlinedIcon/>,
      route: "userReg", // Specify the route to navigate to
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const handleRouter = (route:any) => {
    navigate(`/admin/${route}`);
  };
  const handleMainRouter = (route:any) => {
    navigate(`/${route}`);
}

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
      const { text, icon, route, subItems , mainItems} = item;
      return (
        <div key={text}>
          {mainItems ? (
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
          {mainItems && (
            <Collapse
              in={openSubMenu === text}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {mainItems.map((Item :any, Index:any) => (
                  <ListItem
                    key={Index}
                    onClick={() => handleMainRouter(Item.route)}
                  >
                    <ListItemButton>
                    <ListItemIcon>{Item.icon}</ListItemIcon>
                      <ListItemText primary={Item.text} />
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
            ADMIN
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
          <Route path="institutead" element={<InstituteAd />} />
          <Route path="instituteform" element={<InstituteForm />} />
          <Route path="userReg" element={<UserReg />} />
        </Routes>
      </Box>
    </Box>
    
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Admin;
