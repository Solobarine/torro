<template>
   <section>
    <div>
        <input type="search" name="search" placeholder="Search for transactions">
        <div id="transactions">
            <table>
                
                <tr>
                    <th>Name/Business</th>
                    <th>Date</th>
                    <th>Invoice ID</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td class="business_info">
                        <div class="business_image">
                            <img src="" alt="">
                        </div>
                        <div>
                            <p>Stripe</p>
                            <p class="purpose">Withdrawal</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>January 29, 2023</p>
                            <p class="time">at 08:14 PM</p>
                        </div>
                    </td>
                    <td>TR-3637883</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td class="business_info">
                        <div class="business_image">
                            <img src="" alt="">
                        </div>
                        <div>
                            <p>Stripe</p>
                            <p class="purpose">Withdrawal</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>January 29, 2023</p>
                            <p class="time">at 08:14 PM</p>
                        </div>
                    </td>
                    <td>TR-3637883</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td class="business_info">
                        <div class="business_image">
                            <img src="" alt="">
                        </div>
                        <div>
                            <p>Stripe</p>
                            <p class="purpose">Withdrawal</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>January 29, 2023</p>
                            <p class="time">at 08:14 PM</p>
                        </div>
                    </td>
                    <td>TR-3637883</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td class="business_info">
                        <div class="business_image">
                            <img src="" alt="">
                        </div>
                        <div>
                            <p>Stripe</p>
                            <p class="purpose">Withdrawal</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>January 29, 2023</p>
                            <p class="time">at 08:14 PM</p>
                        </div>
                    </td>
                    <td>TR-3637883</td>
                    <td>$500</td>
                </tr>
            </table>
        </div>
    </div>
    <div id="single_record">
        <Transaction/>
    </div>
   </section>
</template>
<script>
import Transaction from './Transaction.vue'

export default {
    components: {
        Transaction
    }
}
</script>
<style scoped>
    section {
        display: flex;
        gap: 30px;
        padding-top: 30px;
    }

    section > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 30px;
    }
    input[type=search] {
        padding: 10px;
        width: 270px;
        border: 1px solid var(--gray);
        border-radius: 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        color: var(--text-alternative);
        text-align: left;
        padding: 10px 0;
        border-top: 1px solid var(--gray);
    }

    td {
        color: var(--text);
        border-top: 1px solid var(--gray);
    }

    p,
    td {
        white-space: nowrap;
    }

    .business_info {
        display: flex;
        padding: 5px;
        gap: 15px;
    }

    .business_image {
        height: 40px;
        width: 40px;
        background-color: var(--primary);
        border-radius: 50%;
    }

    .purpose,
    .time {
        font-size: 14px;
        color: var(--text-alternative);
    }

    #single_record {
        flex-basis: 360px;
    }

</style>