import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "root",
            component: () => import("./components/Login"),
        },
        {
            path: "/Register",
            name:"Register",
            component: ()=> import("./components/Register")
        },
        {
            path: "/Login",
            name:"Login",
            component: ()=> import("./components/Login")
        },
        {
            path: "/Logout",
            name:"Logout",
            component: ()=> import("./components/Logout")
        },
        {
            path:"/user",
            name:"User",
            component: ()=> import("./components/User")
        }
    ]
});

export default router;