"use client";
import {
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export interface MenuItem {
  title: string;
  icon: string;
  action: () => void;
}

const AppDropdown: React.FC = () => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      title: "profile",
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
      title: "exit",
      icon: "/exit.svg",
      action: () => console.log("Exit clicked"),
    },
  ];

  const handleMenuItemClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    e.preventDefault();
    action();
  };

  return (
    <Paper sx={{ width: 160 }} className="bg-gray-600 rounded-lg shadow-xl">
      <MenuList className="bg-gray-600">
        {menuItems.map((item) => (
          <MenuItem
            onClick={(e) => handleMenuItemClick(e, item.action)}
            className="hover:bg-gray-500"
            key={item.title}
          >
            <ListItemIcon>
              <img src={item.icon} className="h-5 w-5" alt={item.title} />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default AppDropdown;
