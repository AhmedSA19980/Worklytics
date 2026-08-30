import { Permission } from "./permissions";

export const sidebaritems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    permission: Permission.Dashboard,
  },
  {
    title: "Customers",
    href: "/customers",
    permission: Permission.Customers,
  },
  {
    title: "Products",
    href: "/products",
    permission: Permission.Products,
  },
  {
    title: "Orders",
    href: "/orders",
    permission: Permission.Orders,
  },
  {
    title: "Reports",
    href: "/reports",
    permission: Permission.Reports,
  },
  {
    title: "Users",
    href: "/users",
    permission: Permission.Users,
  },
  {
    title: "Settings",
    href: "/settings",
    permission: Permission.Settings,
  },
];
