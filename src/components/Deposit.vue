<template>
    <section>
        <div id="profile_section">
            <div id="profile">
                <div id="profile_head">
                    <h3>Your Profile</h3>
                    <Setting/>
                </div>
                <div id="picture">
                    <div id="profile_image">
                        <img src="/src/assets/male_user.png" alt="">
                    </div>
                    <div id="line"></div>
                </div>
                <div id="profile_details">
                    <div>
                        <div>
                            <img src="/src/assets/wallet.png" alt="">
                        </div>
                        <div>
                            <h4>$56870</h4>
                            <p>Balance</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/src/assets/envelope.png" alt="">
                        </div>
                        <div>
                            <h4>$75723</h4>
                            <p>Receive</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/src/assets/pay_cheque.png" alt="">
                        </div>
                        <div>
                            <h4>$20455</h4>
                            <p>Transfer</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/src/assets/coin_wallet.png" alt="">
                        </div>
                        <div>
                            <h4>$10755</h4>
                            <p>Deposit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="latest">
                <div id="latest_head">
                    <h3>Latest Actions</h3>
                    <p>&#8942;</p>
                </div>
                <div id="actions">
                    <div v-for="item in 4" class="action">
                        <div>
                            <div>
                                <img src="/src/assets/business_man.png" alt="">
                            </div>
                            <div>
                                <h4 class="name">Kent Paul</h4>
                                <p class="date">Jan 12 2023</p>
                            </div>
                        </div>
                        <p id="status">success</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="deposit_section">
            <div id="deposit_options">
                <button><ion-icon name="arrow-back-outline"></ion-icon></button>
                <h3>Exchange Funds</h3>
                <div id="options">
                    <div class="deposit_option">
                        <Paypal/>
                        <p>pay via Paypal</p>
                    </div>
                    <div class="deposit_option">
                        <WesternUnion/>
                        <p>pay via Western Union</p>
                    </div>
                    <div class="deposit_option">
                        <Amazon/>
                        <p>pay via Amazon</p>
                    </div>
                    <div class="deposit_option">
                        <Skrill/>
                        <p>pay via Skrill</p>
                    </div>
                </div>
            </div>
            <div id="details">
                <h3>{{ title }}</h3>
                <p>Select an Amount</p>
                <div id="amount">
                    <div>
                        <p>50</p>
                    </div>
                    <div>
                        <p>100</p>
                    </div>
                    <div>
                        <p>200</p>
                    </div>
                    <div>
                        <p>500</p>
                    </div>
                    <div>
                        <p>1000</p>
                    </div>
                    <div>
                        <p>5000</p>
                    </div>
                </div>
                <h4>or</h4>
                <input type="number" name="amount" placeholder="Enter Desired Amount">
                <div id="other">
                    <div>
                        <label for="email">Enter Your Email</label>
                        <input type="email" name="email" placeholder="Your Email">
                    </div>
                    <div>
                        <label for="promo_code">Enter Promo Code</label>
                        <input type="text" name="promo_code" placeholder="Enter Promo Code">
                    </div>
                    <div>
                        <!-- <label id="submit_label" for="proceed">Proceed</label> -->
                        <input type="submit" name="submit" class="submit" value="Proceed">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Amazon from './icons/finance/deposit/Amazon.vue';
import Paypal from './icons/finance/deposit/Paypal.vue';
import Skrill from './icons/finance/deposit/Skrill.vue';
import WesternUnion from './icons/finance/deposit/WesternUnion.vue';
import Setting from './icons/menu/Setting.vue';

export default {
    components: {
        Setting,
        WesternUnion,
        Paypal,
        Amazon,
        Skrill
    },

    data() {
        return {
            title: 'Paypal'
        }
    },
}
</script>
<style scoped>
    * {
        color: var(--text);
    }

    section {
        display: flex;
        gap: 40px;
        row-gap: 10px;
        flex-wrap: wrap;
        padding-top: 10px;
        /* align-items: start; */
    }

    #profile_section {
        flex-grow: 0;
        padding: 20px;
        border: 1px solid var(--gray);
        border-radius: 15px;
    }

    #profile_head {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    #picture {
        display: flex;
        gap: 10px;
    }

    #profile_image {
        width: 60px;
        height: 60px;
        background-color: var(--text-alternative);
        border-radius: 50%;
        margin: 10px;
    }

    #line {
        background-color: var(--primary);
        flex-grow: 1;
        height: 10px;
        border-radius: 10px;
        align-self: center;
    }

    #profile_details {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        min-width: 30px;
        margin: auto;
        flex-wrap: wrap;
        padding: 10px;
        gap: 20px;
    }

    #profile_details > div {
        display: flex;
        width: 180px;
        padding: 10px 5px;
        gap: 10px;
        margin: auto;
    }

    #profile_details > div > div:nth-child(1) img {
        width: 35px;
        height: 35px;
        background-color: var(--primary);
        border-radius: 10px;
        padding: 10px;
    }

    #profile_details > div > div p {
        color: var(-text-alternative);
        font-size: 14px;
    }

    #latest_head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin-top: 40px;
    }

    .action {
        display: flex;
        align-items: center;
        padding: 10px;
        justify-content: space-between;
    }

    .action > div {
        display: flex;
        gap: 15px;
        margin-bottom: 10px;
    }
    .action > p {
        padding: 10px 15px;
        color: var(--primary);
        border-radius: 10px;
        background-color: rgba(32, 185, 112, .3);

    }

    .name,
    .date {
        white-space: nowrap;
    }

    .action > div > div:nth-child(1) img {
        width: 45px;
        height: 45px;
        border-radius: 10px;
        padding: 5px;
        background-color: var(--primary);
    }

    .action > div p {
        font-size: 14px;
        color: var(--text-alternative);
    }

    
    #deposit_section {
        flex-basis: 600px;
        flex-grow: 1;
        border-radius: 20px;
        border: 1px solid var(--gray);
    }

    #deposit_options {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 15px;

    }

    #deposit_options > button {
        padding: 5px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        font-size: 25px;
        color: var(--gray);
        background-color: var(--primary);
    }

    #deposit_options > button > ion-icon {
        color: var(--gray);
    }

    #options {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }

    .deposit_option {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        border-radius: 15px;
        margin: auto;
        font-size: 13px;
        border: 1px solid var(--text-alternative);
        width: 150px;
        height: 100px;
        align-items: center;
        transition: .4s ease;
    }

    .deposit_option:hover,
    .deposit_option:focus {
        scale: 1.2;
        border: 2px solid var(--primary);
    }

    #details {
        margin-top: 30px;
        padding: 20px;
        max-width: 600px;
    }

    #details > h3 {
        margin-bottom: 6px;
    }
    #details > p {
        font-size: 14px;
    }

    #amount {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    #amount > div {
        padding: 15px;
        width: 120px;
        border: 1px solid var(--text-alternative);
        margin: auto;
        border-radius: 10px;
        transition: .4s ease;
    }

    #amount > div:hover,
    #amount > div:focus {
        scale: 1.3;
        border: 1px solid var(--primary);
    }

    #amount > div p {
        font-weight: 700;
    }

    #details > h4 {
        
        margin: 30px;
    }

    #details input {
        padding: 15px;
        border-radius: 10px;
        border: 1px solid var(--text-alternative);
    }

    #other {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        padding: 10px 0;
    }

    #other > div {
        position: relative;
        display: grid;
        gap: 10px;
    }

    #other > div:nth-child(3) {
        width: 182.33px;
        height: 85px;
    }

    #other  input {
        width: 150px;
        margin: auto;
    }

    #other input[type=submit] {
        position: absolute;
        bottom: 0;
        padding: 15px auto;
        color: var(--gray);
    }

    @media screen and (max-width: 431px) {
        #profile_section,
        #deposit_section {
            width: 100%;
        }
    }

</style>