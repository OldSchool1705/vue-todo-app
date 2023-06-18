import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../All-tasks.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
