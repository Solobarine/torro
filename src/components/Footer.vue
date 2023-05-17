<template>
    <footer>
        <div id="calling">
            <h2>Ready to Get Started</h2>
            <div>
                <RouterLink id="start" to="/dashboard">Get Started</RouterLink>
                <RouterLink id="more" to="/deposit">Learn More</RouterLink>
            </div>
        </div>
        <div id="footer_details">
            <div id="brand">
                <div id="company">
                    <Logo_one/>
                    <h2>Torro</h2>
                </div>
                <p id="pitch">We are the best in managing your finances</p>
            </div>
            <div id="other_links">
                <div>
                    <h3>Solutions</h3>
                    <p>Internal Comms</p>
                    <p>Leadership</p>
                    <p>Human Resources</p>
                    <p>Integration</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Career</p>
                    <p>Press</p>
                    <p>Blogs</p>
                    <p>Affiliates</p>
                </div>
                <div>
                    <h3>Community</h3>
                    <p>Team Plans</p>
                    <p>Refer a Friend</p>
                    <p>Cashback</p>
                    <p>Promo</p>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p>Help</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </div>
        <div id="terms_and_social">
            <div id="policy">
                <button>Terms and Conditions</button>
                <button>Privacy Policy</button>
            </div>
            <div id="socials">
                <Facebook/>
                <Instagram/>
                <Tiktok/>
                <Gmail/>
                <Google/>
            </div>
        </div>
        <p class="copyright_message">Copyright &copy;2023. All Rights Reserved</p>
    </footer>
</template>
<script>
import { RouterLink } from 'vue-router'
import Facebook from '../components/icons/socials/Facebook.vue'
import Gmail from '../components/icons/socials/Gmail.vue'
import Google from '../components/icons/socials/Google.vue'
import Instagram from '../components/icons/socials/Instagram.vue'
import Tiktok from '../components/icons/socials/Tiktok.vue'
import Logo_one from './icons/finance/logo/Logo_one.vue';

export default {
    components: {
        Logo_one,
        Facebook,
        Gmail,
        Google,
        Instagram,
        Tiktok
    }
}
</script>
<style scoped>
    footer {
        padding: 15px 40px;
        background-color: var(--gray);
    }
    * {
        color: var(--text);
    }
    #calling {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 30px;
        border-bottom: 1px solid var(--text-alternative);
    }

    #calling > h2 {
        font-size: 30px;
    }

    #calling > div {
        display: flex;
        gap: 10px;
    }

    #calling a {
        text-decoration: none;
        padding: 15px 30px;
        border-radius: 15px;
        white-space: nowrap;
        transition: .4s ease;
    }

    #start {
        background-color: var(--primary);
        color: var(--gray);
    }

    #more {
        border: 1px solid var(--text);
    }

    #start:hover,
    #start:focus,
    #more:focus,
    #more:hover {
        scale: 1.1;
    }

    #footer_details {
        display: flex;
        flex-wrap: wrap;
        row-gap: 20px;
        padding: 15px;
    }

    #brand {
        flex-grow: 10;
    }

    #company {
        display: flex;
        gap: 15px;
    }

    #company .logo {
        width: 65px;
        height: 65px;
    }

    #company h2 {
        align-self: center;
    }

    #pitch {
        margin-top: 30px;
    }

    #other_links {
        flex-grow: 30;
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px;
    }

    #other_links h3 {
        margin-bottom: 30px;
    }

    #other_links p {
        margin-bottom: 15px;
        cursor: pointer;
        transition: .4s ease;
    }

    #other_links p:hover,
    #other_links p:focus {
        scale: 1.1;
        color: var(--primary);
    }

    #terms_and_social {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 25px;
        padding: 15px;
    }

    #policy {
        display: flex;
        gap: 30px;
    }

    #policy > button {
        padding: 20px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        transition: .4s ease;
    }

    #policy > button:hover,
    #policy > button:focus {
        scale: 1.1;
        color: var(--primary);
    }

    #socials {
        display: flex;
        gap: 15px;
    }

    #socials > div {
        width: 40px;
        height: 40px;
        overflow: hidden;
        transition: .4s ease;
        align-self: center;
    }

    #socials > div:hover {
        scale: 1.1;
    }

    .copyright_message {
        text-align: center;
        font-size: 18px;
        margin-top: 20px;
    }
</style>