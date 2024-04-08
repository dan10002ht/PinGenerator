import Home from "../loadables/Home";
import Generate from "../loadables/Generate";
import Create from "../loadables/TemplateBuilder/Create";
import Edit from "../loadables/TemplateBuilder/Edit";

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
