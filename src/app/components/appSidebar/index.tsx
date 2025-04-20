"use client";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ListItem } from "flowbite-react";
import { useRouter } from "next/navigation";

const AppSidebar: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    {
      title: "edit profile",
      icon: "/profile.svg",
      action: () => router.push("/profile"),
    },
    {
      title: "wallet",
      icon: "/wallet.svg",
      action: () => console.log("Wallet clicked"),
    },
    {
      title: "orders",
      icon: "/order-list.svg",
      action: () => console.log("Orders clicked"),
    },
    {
      title: "back",
      icon: "/exit.svg",
      action: () => router.back(),
    },
  ];

  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "rgb(31, 41, 55)",
        },
      }}
      open={true}
      variant="permanent"
    >
      {menuItems.map((item, index) => (
        <Box
          className="bg-gray-800 text-white"
          key={index}
          sx={{ width: 200 }}
          role="presentation"
        >
          <List>
            <ListItem onClick={item.action}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={item.icon} className="h-4 w-4" alt={item.title} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    item.title.charAt(0).toUpperCase() + item.title.slice(1)
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      ))}
    </Drawer>
  );
};

export default AppSidebar;
