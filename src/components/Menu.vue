<template>
    <section ref="menu" :style="{ width: `${collapsed ? 50 : 250}px` }">
        <div id="toggle" @click="toggleMenu" :style="{rotate: (collapsed) ? 0+'deg' : 180+'deg'}">
            <Chevron />
        </div>
        <div id="menu">
            <RouterLink to="/dashboard">
                <Home />
                <p v-if="!collapsed">Dashboard</p>
            </RouterLink>
            <RouterLink to="/deposit">
                <History />
                <p v-if="!collapsed">Deposit</p>
            </RouterLink>
            <RouterLink to="#">
                <Message />
                <p v-if="!collapsed">Messages</p>
            </RouterLink>
            <RouterLink to="/transfer">
                <History />
                <p v-if="!collapsed">Transfer</p>
            </RouterLink>
            <RouterLink to="/wallet">
                <Wallet />
                <p id="my_wallets" v-if="!collapsed">My Wallets</p>
            </RouterLink>
            <RouterLink to="/transactions">
                <History />
                <p v-if="!collapsed">Transactions</p>
            </RouterLink>
            <RouterLink to="#">
                <Analytic />
                <p v-if="!collapsed">Analytics</p>
            </RouterLink>
        </div>
        <div id="others">
            <RouterLink to="#">
                <Help />
                <p id="get_help" v-if="!collapsed">Get Help</p>
            </RouterLink>
            <RouterLink to="/settings/details">
                <Setting />
                <p v-if="!collapsed">Settings</p>
            </RouterLink>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router'
import Analytic from './icons/menu/Analytic.vue'
import Chevron from './icons/Chevron.vue'
import Help from './icons/menu/Help.vue'
import History from './icons/menu/History.vue'
import Home from './icons/menu/Home.vue'
import Message from './icons/menu/Message.vue'
import Setting from './icons/menu/Setting.vue'
import Wallet from './icons/menu/Wallet.vue'
import Logo_one from '../components/icons/finance/logo/Logo_one.vue'
import Logo_two from '../components/icons/finance/logo/Logo_two.vue'
import {collapsed, toggleMenu, menu_width} from '../utils'

export default {
    components: {
        Analytic,
        Chevron,
        Help,
        History,
        Home,
        Message,
        Setting,
        Wallet,
        Logo_one,
        Logo_two
    },
    setup() {
        return { menu_width, toggleMenu, collapsed }
    }

}
</script>
<style scoped>
section {
    position: fixed;
    top: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    width: 250px;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--gray);
    height: 97vh;
    padding: 10px;
    z-index: 10;
    transition: .5s ease;
}

#chevron {
    background-color: var(--text);
    height: 30px;
    rotate: 90deg;
    border-radius: 10px;
    rotate: 0;
    scale: 1.1;
    cursor: pointer;
}

#toggle {
    position: absolute;
    right: 20px;
    z-index: 5;
    padding: 5px;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s ease;
}

.chevron {
    stroke: var(--text)
}

#menu {
    padding-top: 70px;
}

#menu>div,
#others>div {
    display: flex;
    gap: 10px;
    padding: 6px;
    cursor: pointer;
    margin-bottom: 14px;
}

#menu>div>p,
#others>div>p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--text);
}

#menu>div>div,
#others>div>div {
    width: 30px;
}

#menu>a,
#others>a {
    display: flex;
    gap: 10px;
    padding: 6px;
    cursor: pointer;
    margin-bottom: 14px;
    text-decoration: none;
}

#menu > a:hover,
#menu > a:focus,
#others > a:hover,
#others > a:focus {
    background-color: var(--primary);
    border-radius: 10px;
    color: var(--gray)
}


#menu>a>p,
#others>a>p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--text);
}

#my_wallets,
#get_help {
    white-space: nowrap;
}

#menu>a>div,
#others>a>div {
    width: 30px;
}
</style>