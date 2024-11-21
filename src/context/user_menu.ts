import {
  activeAnalyticsIcon,
  activeBagIcon,
  activeDashboardIcon,
  activeMenuIcon,
  activeUsersIcon,
  AnalyticsIcon,
  BagIcon,
  DashboardIcon,
  MenuIcon,
  UsersIcon,
  ArrowIcon
} from "../assets";



export interface MenuType {
  id: number,
  name: string;
  path: string;
  icon: string | "";
  activeIcon: string | "";
  icon2?:  string | ""
  dropdownItems?: { name: string; }[];
}

export const Menu: MenuType[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: DashboardIcon,
    activeIcon: activeDashboardIcon,
  },
  {
    id: 2,
    name: "Orders ",
    path: "/orders",
    icon: BagIcon,
    icon2: ArrowIcon,
    activeIcon: activeBagIcon,
    dropdownItems: [
      { name: "Breakfast" },
      { name: "Lunch"  },
      { name: "Dinner" },
    ],
  },
  {
    id: 3,
    name: "Analytics",
    path: "/analytics",
    icon: AnalyticsIcon,
    activeIcon: activeAnalyticsIcon,
  },
  {
    id: 4,
    name: "Customer",
    path: "/customers",
    icon: UsersIcon,
    activeIcon: activeUsersIcon,
  },
  {
    id: 5,
    name: "Menu",
    path: "/menu",
    icon: MenuIcon,
    activeIcon: activeMenuIcon,
  },
];
