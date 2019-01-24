import Home from "../view/home";
import Login from "../view/login";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/course",
    component: "CourseIndv"
  }
];

export default routes;
