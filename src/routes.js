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
            component: ()=> import("./components/user/Logout"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/user",
            name:"User",
            component: ()=> import("./components/user/UserDetails"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/SmokeSession/:id",
            name:"SmokeSessionDetails",
            component: ()=> import("./components/smokeSession/SmokeSessionDetails"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/WeedPeriod/",
            name:"WeedPeriodCreate",
            component: ()=> import("./components/weedPeriod/WeedPeriodCreate"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/WeedPeriodInitial/",
            name:"WeedPeriodInitialCreate",
            component: ()=> import("./components/weedPeriod/WeedPeriodInitialCreate"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/WeedPeriod/:id",
            name:"WeedPeriodDetails",
            component: ()=> import("./components/weedPeriod/WeedPeriodDetails"),
            meta: {
                requiresAuth: true
            }
        },
    ]
});

export default router;