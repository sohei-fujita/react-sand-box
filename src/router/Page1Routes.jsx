import { Page1 } from "../Page1";
import { Page1Detail1A } from "../Page1DetailA";
import { Page1Detail1B } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />,
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1Detail1A />,
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1Detail1B />,
  },
];
