import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Create, DynamicForm, ViewSidebarOutlined } from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router";

const LinksList: Record<string, string> = {
  create: "/create",
  preview: "/preview",
  forms: "/myforms",
};

export const DrawerLayout = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const DrawerListItems = (
    <Box
      sx={{ display: "flex", minWidth: "300px", minHeight: '100%' }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List className="flex flex-col w-full h-fit">
        {["Create", "Forms"].map((text, index) => (
          <ListItemButton
            className="flex w-full"
            key={index}
            onClick={() => navigate(LinksList[text.toLowerCase()] as string)}
          >
            <ListItemIcon>
              {text === "Create" ? <Create /> : <DynamicForm />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex left-1 border-r-2 border-r-slate-100 h-[100vh]">
      <div className="flex justify-start items-start px-4 py-2 ">
        <Button variant="text" onClick={() => toggleDrawer(true)}>
          <ViewSidebarOutlined />
        </Button>
      </div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerListItems}
      </Drawer>
    </div>
  );
};
