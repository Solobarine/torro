<template>
   <section>
    <div id="heading">
        <h2>My Wallet</h2>
        <div>
            <Search/>
            <Bell/>
            <div id="profile">
                <div id="image">
                    <img src="/src/assets/male_user.png" alt="profile">
                </div>
                <h4>Solly</h4>
                <Chevron/>
            </div>
        </div>
    </div>
    <div id="balance_section">
        <div id="total_balance">
            <h3>Total Balance</h3>
            <div>
                <h1>$56,890</h1>
                <p id="date">September 5 2023</p>
            </div>
        </div>
        <div id="quick_links">
            <div>
                <h3>Quick Links</h3>
                <Chevron/>
            </div>
            <div id="links">
                <div class="link">
                    <Wallet/>
                    <p>Deposit</p>
                </div>
                <div class="link">
                    <Send/>
                    <p>Send</p>
                </div>
                <div class="link">
                    <Receive/>
                    <p>Recieve</p>
                </div>
                <div class="link">
                    <Invoice/>
                    <p>Invoicing</p>
                </div>
                <div class="link">
                    <Checkout/>
                    <p>Checkout</p>
                </div>
            </div>
        </div>
    </div>
    <div id="card_list">
        <h3>Card List <span>2</span></h3>
        <div>
            <Card/>
            <Card/>
        </div>
        <input type="submit" class="submit" value="Manage Cards">
    </div>
    <div id="statistics">
        <div>
            <div>
                <h4>Last</h4><h4>30 Days</h4>
            </div>
            <div>
                <p>Transactions</p>
                <h4>12</h4>
            </div>
            <div>
                <p>Total Spent</p>
                <h4>$8 150</h4>
            </div>
            <div>
                <p>Highest</p>
                <h4>$2 640</h4>
            </div>
        </div>
        <div id="chart">
            
        </div>
    </div>
    <div id="currency_conversion">
        <Currency/>
        <div id="conversion">
            <h3>Conversion</h3>
            <div>
                <div>
                    <select name="" id="">
                        <option value="">AUD</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                        <option value="" data-="">USD</option>
                    </select>
                    <input type="number" name="" placeholder="Enter Value">
                </div>
                <div>
                    <select name="" id="">
                        <option value="">AUD</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                        <option value="">USD</option>
                    </select>
                    <input type="number" name="" placeholder="Enter Value">
                </div>
            </div>
            <input type="submit" value="Convert" class="submit">
        </div>
    </div>
   </section>
</template>
<script>
import Bell from '../components/icons/Bell.vue'
import Chevron from '../components/icons/Chevron.vue'
import Currency from './Currency.vue'
import Invoice from '../components/icons/Invoice.vue'
import Wallet from '../components/icons/Wallet.vue'
import Checkout from '../components/icons/Checkout.vue'
import Receive from '../components/icons/Recieve.vue'
import Send from '../components/icons/Send.vue'
import Search from '../components/icons/Search.vue'
import Visa from '../components/icons/Visa.vue'
import Chip from '../components/icons/Chip.vue'

import Card from './Card.vue'
export default {
    components: {
        Bell,
        Card,
        Checkout,
        Chevron,
        Chip,
        Currency,
        Invoice,
        Receive,
        Search,
        Send,
        Visa,
        Wallet
    }
}
</script>
<style scoped>
    * {
        color: var(--text);
    }
    section {
        display: grid;
        grid-template-columns: 0.3fr 1fr;
        grid-template-rows: repeat(5, auto);
        gap: 30px;
        padding: 15px;
    }

    #heading {
        grid-column: 1 / -1;
        display: flex;
        text-align: center;
        justify-content: space-between;
        flex-wrap: wrap;
        /* padding: 6px; */
    }

    #heading > div {
        display: flex;
        text-align: center;
        justify-content: space-between;
        gap: 20px;
    }

    #heading > div > h4 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #heading > div #search,
    #heading > div #bell {
        background-color: var(--gray);
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 50%;
        padding: 5px;
    }

    #profile {
        background-color: var(--gray);
        padding: 2px 6px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        border-radius: 20px;
    }

    #profile h4,
    #profile div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #image img {
        width: 30px;
        height: 30px;
    }

    #chevron {
        rotate: 0deg;
    }

    #balance_section {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    #total_balance {
        flex-basis: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #total_balance h1 {
        font-size: 3rem;
    }

    #quick_links {
        flex-grow: 1;

    }

    #quick_links > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    #balance_section > div,
    .link {
        padding: 20px;
        border-radius: 10px;
        border: 1px solid var(--gray);
    }

    #links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }

    .link {
        display: flex;
        width: 90px;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    .link div {
        margin: auto;
    }

    .link svg {
        stroke: var(--primary);
    }

    .link img {
        height: 45px;
        width: 45px;
    }

    #card_list {
        grid-area: 3/1/span 2/span 1;
    }

    #card_list > div {
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    #statistics {
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    #statistics > div {
        display: flex;
        text-align: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    #statistics > div > div {
        display: flex;
        width: 100px;
        margin: 10px 0;
        padding: 10px;
        border-right: 2px solid var(--gray);
        border-left: 2px solid var(--gray);
        flex-direction: column;
        justify-content: center;
    }

    #chart {
        height: 200px;
        background-image: url('../assets/card_texture_one.svg');
        background-size: cover;
    }

   #currency_conversion {
        grid-area: 4/2/span 1/span 1;
        display: flex;
        justify-content: space-around;
        gap: 30px;
        align-items: start;
        flex-wrap: wrap;
   }

   #currency_conversion > div {
        border: 1px solid var(--gray);
        border-radius: 10px;
    }

    #conversion {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #conversion > div > div {
        display: grid;
        grid-template-columns: .3fr 1fr;
        gap: 40px;
        margin-bottom: 20px;
    }

    #conversion input,
    #conversion select {
        min-width: 0;
        padding: 15px;
        border-radius: 15px;
        /* outline: 1px solid var(--text-alternative); */
        outline: 0;
        border: 1px solid var(--text-alternative);
    }

    #conversion input:focus,
    #conversion select:focus {
        outline: 1px solid var(--text);
    }

    @media screen and (max-width: 905px) {
        section {
            grid-template-columns: 1fr;
        }

        #card_list {
            grid-area: 3/1/span 1/span 1;
        }

        #card_list > div > div {
            margin: auto;
        }

        #statistics{
            grid-area: 4/1/span 1/span 1;
        }
        #currency_conversion {
            grid-area: 5/1/span 1/span 1;
        }
    }
 
</style>