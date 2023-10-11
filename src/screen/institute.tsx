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
import CourseForm from "./Institute/courseform";
import CourseList from "./Institute/courselist";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import StudentForm from "./Institute/studentform";
import StudentList from "./studentList";

const drawerWidth = 240;

function Institute(props:any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<any>(""); // State to manage submenu open/close
  const [pagesArr, setPagesArr] = React.useState([
    {
      text: "Institute",
      icon: <HomeWorkOutlinedIcon />,
      mainItems: [
        {     
              text: <b>Admin</b>,
            route:"admin",
            icon:<AdminPanelSettingsOutlinedIcon />
        },
      
      ],
    },
    {
      text: "Course Form",
      icon: < InsertDriveFileOutlinedIcon />,
      route: "courseform", // Specify the route to navigate to
    },
    {
      text: "Course List",
      icon: <ReceiptLongOutlinedIcon />,
      route: "courselist", // Specify the route to navigate to
    },
    // Add submenu items
    {
      text: "Registration Control",
      icon:<HowToRegIcon />,
      subItems: [
        {
          icon: <CalendarViewDayOutlinedIcon />,
          text: "Form Open",
          route: "studentform",
        },
        {
          icon: <PlaylistAddOutlinedIcon />,
          text: "Courses",
          route: "courselist",
        },
      ],
    },
    {
      text: "Students List",
      icon: <ViewModuleOutlinedIcon />,
      route: "studentlist", // Specify the route to navigate to
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const handleRouter = (route:any) => {
    navigate(`/institute/${route}`);
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
              {mainItems || subItems ? (
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
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
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
          INSTITUTE
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
          <Route path="courseform" element={<CourseForm />} />
          <Route path="courselist" element={<CourseList />} />
          <Route path="studentform" element={<StudentForm />} />
          <Route path="studentlist" element={<StudentList />} />
        </Routes>
      </Box>
    </Box>
  );
}

Institute.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Institute;
