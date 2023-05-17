<template>
    <div id="transaction">
        <div id="transaction_head">
            <div>
                <Chevron/>
                <h3>Payment</h3>
            </div>
            <More/>
        </div>
        <div id="bio">
            <div id="icon"></div>
            <h3 id="money">-$200</h3>
            <p id="reason">Payment</p>
        </div>
        <div id="details">
            <div>
                <div>
                    <div class="icon"></div>
                    <p>Recipient</p>
                </div>
                <p >Amber K.</p>
            </div>
            <div>
                <div>
                    <div class="icon"></div>
                    <p>Date</p>
                </div>
                <p>Jan 22 2023, 09:45AM</p>
            </div>
            <div>
                <div>
                    <div class="icon"></div>
                    <p>Transaction Fee</p>
                </div>
                <p>$0.00</p>
            </div>
            <div>
                <div>
                    <div class="icon"></div>
                    <p>Invoice</p>
                </div>
                <p>TR-356728</p>
            </div>
        </div>
    </div>
</template>
<script>
import Chevron from '../components/icons/Chevron.vue'
import More from '../components/icons/finance/More.vue'

export default {
    components: {
        Chevron,
        More
    }
}
</script>
<style scoped>
    #transaction {
        width: 300px;
        border: 1px solid var(--gray);
        border-radius: 15px;
        margin: auto;
    }

    #transaction_head {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid var(--gray);
    }

    #transaction_head > div {
        display: flex;
        gap: 10px;
    }

    #chevron {
        width: 30px;
        height: 30px;
        rotate: 90deg;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--gray);
        border-radius: 10px;
    }

    #chevron svg {
        width: 30px;
    }

    .finance {
        background-color: var(--gray);
    }

    #bio {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 20px 0;
        padding-top: 40px;
    }

    #icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary);
        margin: auto;
        margin-bottom: 20px;
    }

    .icon {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: var(--success);
    }

    #details {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }

    #details > div {
        display: flex;
        text-align: center;
        justify-content: space-between;
    }

    #details > div {
        color: var(--text);
    }

    #details > div > div {
        display: flex;
        gap: 10px;
    }

    #details > div > div {
        color: var(--text-alternative);
    }

    #details p {
        font-size: 14px;
    }
</style>