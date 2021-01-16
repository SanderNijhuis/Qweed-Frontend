import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "root",
            component: () => import("./components/user/Login"),
        },
        {
            path: "/Register",
            name:"Register",
            component: ()=> import("./components/user/Register")
        },
        {
            path: "/Login",
            name:"Login",
            component: ()=> import("./components/user/Login")
        },
        {
            path: "/Logout",
            name:"Logout",
            component: ()=> import("./components/user/Logout")
        },
        {
            path:"/user",
            name:"User",
            component: ()=> import("./components/user/UserDetails")
        },
        {
            path:"/SmokeSession/:id",
            name:"SmokeSessionDetails",
            component: ()=> import("./components/smokeSession/SmokeSessionDetails")
        },
        {
            path:"/WeedPeriod/",
            name:"WeedPeriodCreate",
            component: ()=> import("./components/weedPeriod/WeedPeriodCreate")
        }
    ]
});

export default router;