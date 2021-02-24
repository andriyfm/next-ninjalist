export interface Nav {
  name: string;
  path: string;
}

const navConfig: Nav[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "terms",
    path: "/terms",
  },
  {
    name: "ninjas",
    path: "/ninjas",
  },
];

export default navConfig