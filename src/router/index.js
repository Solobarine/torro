import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Wallet from "../views/Wallet.vue"
import Dashboard from "../views/Dashboard.vue"
import Transactions from "../views/Transactions.vue"
import Transfer from "../views/Transfer.vue"
import Deposit from "../views/Deposit.vue"
import Setting from '../views/Setting.vue'
import Menu from "../components/Menu.vue"
import Landing from '../views/Landing.vue'

// Sub Components
import Appearance from '../components/Appearance.vue'
import AccountDetails from '../components/AccountDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Landing
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/wallet",
      name: "wallet",
      component: Wallet,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/deposit",
      name: "deposit",
      component: Deposit,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions,
    },
    {
      path: "/settings",
      name: "settings",
      component: Setting,
      children: [
        {
          path: 'theme',
          name: 'theme',
          component: Appearance
        },
        {
          path: 'details',
          name: 'details',
          component: AccountDetails
        },
      ]
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
    {
      path: "/transfer",
      name: "transfer",
      component: Transfer,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
