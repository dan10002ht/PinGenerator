import Home from "../loadables/Home";
import Generate from "../loadables/Generate";
import Create from "../loadables/TemplateBuilder/Create";
import Edit from "../loadables/TemplateBuilder/Edit";
import SignIn from '../pages/Auth/SignIn.tsx';
import SignUp from '../pages/Auth/SignUp.tsx';
import NotFound from '../pages/NotFound.tsx';

export const noLayoutRoutes = [
  {path: "/auth/login", component: SignIn},
  {path: "/auth/register", component: SignUp},
  {
    path: "*",
    component: NotFound,
  },
]

export default [
  { path: "/", component: Home },
  { path: "/generate", component: Generate },
  {
    path: "/template-builder/create",
    component: Create,
  },
  {
    path: "/template-builder/:id",
    component: Edit,
  },
];
