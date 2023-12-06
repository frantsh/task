import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/Home/index.vue";
import TaskPage from "@/Pages/Task/index.vue";
import CreateTaskPage from "@/Pages/Task/create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      //get datailse task
      path: "/task/:id",
      name: "task",
       component: () => import('../Pages/Task/index.vue')
    },
    {
      path:"/task/create",
      name:"task-create",
      component:()=>import('../Pages/Task/create.vue')
    }
  ],
});

export default router;
