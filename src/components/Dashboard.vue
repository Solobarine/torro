<template>
    <section>
        <div id="overview">
            <div id="cashback">
                <h2>Unlimited Cashback</h2>
                <p>Instant 2% on all your transactions</p>
                <a href="#">
                    <p>Upgrade Now</p>
                    <p id="right">&#8594</p>
                </a>
            </div>
            <div id="money_flow">
                <div id="money_flow_head">
                    <h3>Money Flow</h3>
                    <div>
                        <div>
                            <div id="green"></div>
                            <p>Income</p>
                        </div>
                        <div>
                            <div id="gray"></div>
                            <p>Expenses</p>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div id="chart"></div>
            </div>
            <div id="recents">
                <div id="recents_head">
                    <h3>Recent Transactions</h3>
                    <div>
                        <p id="view_all">View all</p>
                        <Chevron/>
                    </div>
                </div>
                <div id="transactions">
                    <div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <h5>Bitcoin</h5>
                        <p class="date">Jan 12, 2023</p>
                        <h5>$835.00</h5>
                        <p class="success">success</p>
                    </div>
                    <hr>
                    <div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <h5>Stephan</h5>
                        <p class="date">Jan 12, 2023</p>
                        <h5>$400.00</h5>
                        <p class="pending">pending</p>
                    </div>
                    <hr>
                    <div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <h5>Paypal</h5>
                        <p class="date">Jan 12, 2023</p>
                        <h5>-$200.00</h5>
                        <p class="success">success</p>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        <div id="wallet_section">
            <div id="wallet">
                <div id="wallet_head">
                    <h3>Wallet</h3>
                    <p>...</p>
                </div>
                <div id="cards">
                    <Card/>
                </div>
                <div>
                <div id="links">
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
                        <More/>
                        <p>More</p>
                    </div>
                </div>
                </div>
            </div>
            <div id="quick_transfer">
                <h3>Quick Transfer</h3>
                <form>
                    <div id="card_amount">
                        <Visa/>
                        <select name="" id="">
                            <option value="">
                                    <p>$30000</p>
                            </option>
                            <option value="">
                                    <p>$26000</p>
                            </option>
                        </select>
                    </div>
                    <div id="amount">
                        <p>Enter Amount</p>
                        <input type="number" placeholder="Enter Amount">
                    </div>
                    <input type="text" id="receiver" placeholder="Enter Receiver">
                    <p id="name"></p>
                    <input type="submit" class="submit" value="Send Money">
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import Card from '../components/Card.vue'
import Chevron from './icons/Chevron.vue'
import Invoice from './icons/finance/Invoice.vue'
import More from './icons/finance/More.vue'
import Receive from './icons/finance/Receive.vue'
import Send from './icons/finance/Send.vue'
import Visa from './icons/Visa.vue'

export default {
    components: {
        Card,
        Chevron,
        Invoice,
        More,
        Receive,
        Send,
        Visa
    }
}
</script>
<style scoped>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        padding-top: 30px;
    }

    #overview {
        flex-grow: 1;
        flex-basis: 360px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    #overview h3 {
        color: var(--text);
    }

    #cashback {
        background-color: var(--primary);
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 15px;
        color: var(--gray);
    }

    #cashback > p {
        font-size: .7rem;
    }

    #cashback a {
        width: 160px;
        display: flex;
        text-decoration: none;
        margin-top: 10px;
        padding: 0 10px;
        border-radius: 10px;
        background-color: var(--gray);
    }

    #cashback a p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--primary);
    }

    #right {
        font-size: 30px;
        font-weight: 700;
    }

    #money_flow {
        border: 1px solid var(--gray);
        border-radius: 15px;
        overflow: hidden;
    }

    #money_flow_head {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    #money_flow_head > div {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    #money_flow_head > div > div {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    #money_flow_head > div > div p {
       display: flex;
       flex-direction: column;
       justify-content: center;
    }

    #green,
    #gray {
        position: relative;
        width: 20px;
        top: 50%;
        transform: translateY(-50%);
        height: 10px;
        justify-self: center;
        border-radius: 10px;
    }

    #green {
        background-color: var(--primary);
    }

    #gray {
        background-color: var(--text-alternative);
    }

    #chart {
        height: 300px;
        background-image: url('../assets/card_texture_three.svg');
        background-size: cover;
    }

    #recents {
        border: 1px solid var(--gray);
        border-radius: 15px;
        padding: 20px;
    }

    #recents_head {
        display: flex;
        justify-content: space-between;
    }

    #recents_head > div {
        display: flex;
        padding: 0 10px;
        gap: 10px;
    }

    #recents_head > div > p {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #view_all {
        white-space: nowrap;
        color: var(--primary);
        font-size: 14px;
    }

    #chevron {
        border-radius: 50%;
        rotate: -90deg;
    }

    #transactions > div {
        display: flex;
        text-align: center;
        justify-content: space-between;
        margin-top: 20px;
    }

    #transactions > div > * {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #transactions > div > div {
        overflow: hidden;
        background-color: var(--primary);
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    .date {
        color: var(--text-alternative)
    }

    #transactions > div > h5 {
        color: var(--text)
    }

    .success {
        color: var(--primary)
    }

    .pending {
        color: var(--pending);
    }

    hr {
        border-top: var(--gray);
        width: 80%;
        margin: auto;
        margin-top: 10px;
    }

    #wallet_section {
        flex-basis: 320px;
        padding: 0 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: auto;
    }

    #wallet_section h3,
    #wallet_head p {
        color: var(--text);
    }

    #wallet {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: 1px solid var(--gray);
        padding: 20px;
        border-radius: 15px;
    }

    #wallet_head {
        display: flex;
        justify-content: space-between;
    }

    .finance {
        width: 20px;
        height: 20px;
        overflow: hidden;
        margin: auto;
        border: 1px solid var(--gray);
    }

    #links {
        display: flex;
        justify-content: space-around;
    }

    .link {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        justify-content: space-between;
    }

    .link p {
        color: var(--text);
        font-size: 15px;
    }

    #quick_transfer {
        display: grid;
        gap: 10px;
        padding: 20px;
        border-radius: 15px;
        border: 1px solid var(--gray);
    }

    #quick_transfer > form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #card_amount {
        display: flex;
        justify-content: space-between;
        border: 1px solid var(--gray);
        padding: 10px;
        border-radius: 20px;
    }

    #card_amount > select {
        border: none;
        padding: 0 5px;
        border-radius: 15px;
    }

    #card_amount > #visa svg {
        fill: var(--text-alternative)
    }

    #amount {
        display: grid;
        gap: 10px;
        border: 1px solid var(--gray);
        padding: 10px;
        border-radius: 15px;
        color: var(--text);
    }

    #amount > input {
        padding: 10px 0;
        font-size: 25px;
        border: none;
        min-width: 0;
    }

    #receiver {
        border: 1px solid var(--gray);
        padding: 10px;
        border-radius: 10px;
    }

    .submit {
        margin-top: -20px;
    }
</style>