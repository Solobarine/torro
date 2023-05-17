<template>
    <header>
        <div id="company_logo">
           <Logo_one/>
           <h2>TORRO</h2>
        </div>
        <div id="nav_items">
            <a href="#">Blogs</a>
            <a href="#">Lorem.</a>
            <a href="#contact_us">Contact Us</a>
            <a href="#about_us">About Us</a>
        </div>
        <div v-if="!logged_in" id="links">
            <RouterLink id="register" to="/register">Register</RouterLink>
            <RouterLink id="login" to="/login">Login</RouterLink>
        </div>
        <div id="links" v-else>
            <router-link id="logout" to="/login">Logout</router-link>
        </div>
        <div id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router';
import Logo_one from './icons/finance/logo/Logo_one.vue';
export default {
    components: {
        Logo_one
    },
    data() {
        return {
            logged_in: false
        }
    }
}
</script>
<style scoped>
    header {
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 10;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px 30px;
        gap: 50px;
        border-bottom: 1px solid var(--text-alternative);
        color: var(--text);
        background-color: var(--gray);
    }
    #company_logo {
        display: flex;
        gap: 10px;
        align-self: center;
    }

    #company_logo h2 {
        align-self: center;
    }

    #company_logo .logo {
        width: 40px;
        height: 40px;
    }

    #nav_items {
        display: flex;
        gap: 20px;
    }

    #nav_items > a {
        padding: 10px 0;
        color: var(--text);
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
    }

    #nav_items > a:hover,
    #nav_items > a:focus {
        border-bottom: 1px solid var(--primary);
        color: var(--primary);
    }

    #links {
        display: flex;
        gap: 30px;
    }

    #links a {
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 10px;
        align-self: center;
        transition: .4s ease;
    }

    #links a:hover,
    #links a:focus {
        transition: .4s ease;
    }

    #login {
        color: var(--primary);
    }

    #login:hover {
        color: var(--primary);
        scale: 1.06;
    }

    #register {
        background-color: var(--primary);
        color: var(--gray);
    }

    #logout {
        background-color: var(--red);
        color: var(--gray);
    }

    #hamburger {
        padding: 5px;
        display: none;
        flex-direction: column;
        gap: 4px;
        border-radius: 4px;
        background-color: var(--primary);
    }

    #hamburger > div {
        width: 30px;
        height: 6px;
        background-color: var(--gray);
    }

    @media screen and (max-width: 680px) {
        #nav_items,
        #links {
            display: none;
        }

        #hamburger {
            display: flex;
        }
    }
</style>