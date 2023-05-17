<template>
    <section>
        <div id="hero">
            <p id="small">Whatever your status or occupation</p>
            <p id="action">The Modern <span>finance</span> Platform</p>
            <p id="sub_text">All your business in one app</p>
            <p id="small_two">Manage money quickly, easily and efficiently.</p>
            <p id="small_three">Keep your money safe and secure.</p>
            <div id="links">
                <RouterLink id="register" to="/register">Register</RouterLink>
                <RouterLink id="login" to="/login">Login</RouterLink>
            </div>
        </div>
        <div id="clients">
            <h2 id="client_head">Our Top Clients</h2>
            <div id="top_users">
                <PremierLeague/>
                <Mi/>
                <CocaCola/>
                <Amd/>
                <Nba/>
            </div>
        </div>
        <div id="about_us">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti, sapiente, natus quidem est magnam ex accusamus similique dolorem unde eum iusto, aspernatur magni quasi minus reiciendis fugiat recusandae hic esse! Molestiae voluptate error repudiandae sit nemo! Nobis soluta dignissimos temporibus dolore blanditiis magni velit beatae, amet aspernatur ad praesentium.</p>
        </div>
        <div id="testimonials">
            <h2>Testimonials</h2>
            <div id="likes">
                <div class="like">
                    <div class="photo"></div>
                    <h3 class="client_name">Amazon</h3>
                    <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad quia corporis autem. Exercitationem quibusdam hic aperiam, aut amet explicabo.</p>
                </div>
                <div class="like">
                    <div class="photo"></div>
                    <h3 class="client_name">Alex J.</h3>
                    <p class="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis expedita voluptatum nobis, commodi tenetur.</p>
                </div>
                <div class="like">
                    <div class="photo"></div>
                    <h3 class="client_name">Yang T.</h3>
                    <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nesciunt error voluptas quam alias vel totam? Necessitatibus maiores laborum animi, iste libero id? Odio, eum?</p>
                </div>
                <div class="like">
                    <div class="photo"></div>
                    <h3 class="client_name">Jason K.</h3>
                    <p class="review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, facilis!</p>
                </div>
            </div>
        </div>
        <div id="partners">
            <h2 id="sponsor_head">Our Sponsors</h2>
            <div id="sponsors">
                <Barclays/>
                <Delta/>
                <Microsoft/>
                <Hugo/>
                <Oracle/>
            </div>
        </div>
        <div id="contact_us">
            <ContactForm/>
            <div id="image">
                <img src="/src/assets/lady_given_money.png" alt="">
            </div>
        </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router'
// import sponsors logos
import Barclays from '../components/icons/sponsors/Barclays.vue'
import Delta from '../components/icons/sponsors/Delta.vue'
import Hugo from '../components/icons/sponsors/Hugo.vue'
import Microsoft from '../components/icons/sponsors/Microsoft.vue'
import Oracle from '../components/icons/sponsors/Oracle.vue'

// Import Clients Logos
import PremierLeague from '../components/icons/clients/PremierLeague.vue'
import Amd from '../components/icons/clients/Amd.vue'
import CocaCola from '../components/icons/clients/CocaCola.vue'
import Mi from '../components/icons/clients/Mi.vue'
import Nba from '../components/icons/clients/Nba.vue'

import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
        Barclays,
        Delta,
        Hugo,
        Microsoft,
        Oracle,
        PremierLeague,
        Amd,
        CocaCola,
        Mi,
        Nba
    }
}
</script>
<style scoped>
    section {
        color: var(--text);
    }
    #hero {
        padding-top: 20vh;
        height: 90vh;
        background-color: greenyellow;
    }

    #hero > * {
       text-align: center;
    }

    #small,
    #small_two,
    #small_three {
        font-size: 13px;
        padding: 5px;
    }

    #action,
    #sub_text {
        font-size: 30px;
    }

    span {
        color: var(--secondary)
    }

    #links {
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-top: 20px;
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
        background-color: var(--gray);
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

    #clients,
    #partners {
        background-color: var(--gray);
    }

    #top_users,
    #sponsors {
        max-width: 900px;
        margin: auto;
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 25px;
    }

    #client_head {
        text-align: center;
        padding: 15px;
    }

    #top_users div {
        height: 40px;
        margin: auto;
    }

    #top_users > :nth-child(1) {
        height: 100px;
    }

    
    #about_us {
        padding: 20px;
    }

    #about_us p {
        max-width: 500px;
        line-height: 30px;
        margin-top: 10px;
    }

    #testimonials {
        margin: 20px 0;
        padding: 0 20px;
    }

    #testimonials h3 {
        text-align: center;
    }

    #likes {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
        padding: 15px;
    }
    
    .like {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 300px;
        gap: 10px;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 1px 5px var(--text-alternative);
    }

    .photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary);
    }
    
    .review {
        font-size: 14px;
        text-align: center;
    }

    #sponsor_head {
        text-align: center;
        padding: 15px;
    }

    #sponsors div {
        height: 30px;
        margin: auto;
    }

    #contact_us {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: center;
        gap: 50px;
        padding: 0 20px;
        padding-top: 60px;
        align-items: center;
        background-color: var(--gray);
    }

    #image {
        max-width: 400px;
    }

    @media screen and (max-width: 800px) {
        #contact_us > * {
            margin: auto;
        }
    }
    
</style>