<template>
    <section id="transfer">
        <div id="transfer_details">
            <div id="beneficiary_section">
                <div id="beneficiary_head">
                    <h3>Beneficiaries</h3>
                    <div>
                        <Search/>
                        <div id="new_beneficiary">
                            <span>+</span>
                            <p>Add new Beneficiary</p>
                        </div>
                    </div>
                </div>
                <div id="beneficiaries">
                    <div>
                        <div>
                            <img src="/src/assets/male_user.png" alt=""></div>
                        <div>
                            <h4>Byron Sanders</h4>
                            <p>sandersby@yahoo.com</p>
                        </div>
                        <Chevron/>
                    </div>
                    <div>
                        <div><img src="/src/assets/female_user.png" alt=""></div>
                        <div>
                            <h4>Jessa Covington</h4>
                            <p>jesscov@gmail.com</p>
                        </div>
                        <Chevron/>
                    </div>
                    <div>
                        <div><img src="/src/assets/male_user.png" alt=""></div>
                        <div>
                            <h4>Ali Al-Thani</h4>
                            <p>alial-thani23@gmail.com</p>
                        </div>
                        <Chevron/>
                    </div>
                </div>
            </div>         
            <div id="money_section">
                <div id="money_head">
                    <h4>Amount</h4>
                    <p>Choose from Template</p>
                </div>
                <div id="money">
                    <div>
                        <label for="amount">Pay In</label>
                        <input type="number" name="amount" id="">
                    </div>
                    <div>
                        <label for="conversion">Byron will receive</label>
                        <input type="number" name="conversion" id="">
                    </div>
                </div>
            </div>
            <div id="purpose">
                <h3></h3>
                <div id="reasons">
                    <div class="reason">
                        <div>
                            <Bill/>
                            <Chevron/>
                        </div>
                        <p>Bills<br/>Payment</p>
                    </div>
                    <div class="reason">
                        <div>
                            <Family/>
                            <Chevron/>
                        </div>
                        <p>Family<br/>Support</p>
                    </div>
                    <div class="reason">
                        <div>
                            <Subscription/>
                            <Chevron/>
                        </div>
                        <p>Subscription</p>
                    </div>
                    <div class="reason">
                        <div>
                            <Charity/>
                            <Chevron/>
                        </div>
                        <p>Charity</p>
                    </div>
                    <div class="reason">
                        <div>
                            <Contribution/>
                            <Chevron/>
                        </div>
                        <p>Contribution</p>
                    </div>
                    <div class="reason">
                        <div>
                            <Loan/>
                            <Chevron/>
                        </div>
                        <p>Loan</p>
                    </div>
                    <!-- <div class="reason">
                        <div>
                            <Subscription/>
                            <Chevron/>
                        </div>
                        <p>Subscription</p>
                    </div> -->
                    <div class="reason">
                        <div>
                            <Others/>
                            <Chevron/>
                        </div>
                        <p>Others</p>
                    </div>
                </div>
            </div>
            <div id="description">
                <label for="description">Payment Description</label>
                <textarea name="description" placeholder="Write your transfer description"></textarea>
            </div>
            <div id="funding_options">
                <h4>Funding Payment</h4>
                <div id="options">
                    <div class="option">
                        <Card/>
                        <div>
                            <p class="balance">Balance</p>
                            <p class="dinero">$15 000</p>
                        </div>
                    </div>
                    <div class="option">
                        <Card/>
                        <div>
                            <p class="balance">Balance</p>
                            <p class="dinero">$23 542</p>
                        </div>
                    </div>
                    <div class="option">
                        <Card/>
                        <div>
                            <p class="balance">Balance</p>
                            <p class="dinero">$7 695</p>
                        </div>
                    </div>
                </div>
            </div>
            <button id="proceed" type="submit">Proceed</button>
        </div>
        <TransferSummary/>
    </section>
</template>
<script>
import Card from '../components/icons/finance/Card.vue'
import Charity from '../components/icons/finance/Charity.vue'
import Contribution from '../components/icons/finance/Contribution.vue'
import Family from '../components/icons/finance/Family.vue'
import Bill from '../components/icons/finance/Bill.vue'
import Loan from '../components/icons/finance/Loan.vue'
import Others from '../components/icons/finance/Others.vue'
import Subscription from '../components/icons/finance/Subscription.vue'
import Chevron from './icons/Chevron.vue';
import Search from './icons/Search.vue';
import TransferSummary from './TransferSummary.vue'
export default {
    components: {
        Card,
        Charity,
        Chevron,
        Contribution,
        Family,
        Bill,
        Loan,
        Others,
        Search,
        Subscription,
        TransferSummary
    }
}
</script>
<style scoped>
    section {
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    #transfer_details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    #beneficiary_section {
        padding: 15px;
    }

    #beneficiary_head {
        display: flex;
        justify-content: space-between;
        padding: 7px 0;
    }

    #beneficiary_head h3 {
        color: var(--text);
    }

    #beneficiary_head > div {
        display: flex;
        justify-content: space-between;
        gap: 25px;
    }

    #new_beneficiary {
        display: flex;
        gap: 5px;
        padding: 0 10px;
        white-space: nowrap;
        cursor: pointer;
        color: var(--primary);
    }

    #new_beneficiary p,
    #new_beneficiary span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
    }

    #new_beneficiary span {
        font-size: 20px;
    }

    #beneficiaries {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 20px;
    }

    #beneficiaries > div {
        position: relative;
        display: flex;
        gap: 20px;
        padding: 20px 10px;
        border-radius: 15px;
        box-shadow: 1px 1px 1px var(--text-alternative);
        width: 290px;
        transition: .4s ease;
        margin: auto;
    }

    #beneficiaries > div:hover,
    #beneficiaries > div:focus {
        scale: 1.1;
        z-index: 2;
        box-shadow: 3px 3px 3px 20px var(--gray);
    }

    #beneficiaries > div > div:nth-child(1) {
        padding: 10px;
        width: 40px;
        height: 40px;
        background-color: var(--gray);
        border-radius: 50%;
    }

    #beneficiaries > div > div > img {
        width: 40px;
        height: 40px;
    }

    #beneficiaries > div > div > p {
        color: var(--text-alternative);
        font-size: 13px;
    }

    #beneficiaries > div > div > h4 {
        color: var(--text);
    }

    #beneficiaries #chevron {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    #money_section {
        padding: 20px;
        border-radius: 15px;
        border: 1px solid var(--gray);
    }

    #money_head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        color: var(--text);
    }

    #money_head p {
        font-size: 14px;
        color: var(--primary);
    }

    #money {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        flex-wrap: wrap;
    }
    #money > div {
        display: grid;
        gap: 10px;
        color: var(--text);
    }

    #money input {
        border: 1px solid var(--gray);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px var(--text-alternative);
        outline: none;
        min-width: 0;
    }

    #money input:focus,
    #money input:hover {
        border: 1px solid var(--primary);
    }

    #reasons {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 30px;
        flex-wrap: wrap;
    }

    .reason {
        width: 100px;
        display: flex;
        flex-direction: column;
        box-shadow: 2px 5px 5px 4px var(--gray);
        gap: 30px;
        border-radius: 15px;
        padding: 15px;
        cursor: pointer;
        transition: .4s ease;
        margin: auto;
    }

    .reason:hover,
    .reason:focus,
    .reason:active {
        scale: 1.2;
        box-shadow: 3px 3px 3px 15px var(--gray);
        border: 1px solid var(--primary);
    }
    .reason > div {
        display: flex;
        justify-content: space-between;
    }

    .reason #chevron {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .reason > div > div:nth-child(1) {
        width: 30px;
        height: 30px;
        overflow: hidden;
    }

    .reason p {
        font-size: 12px;
        color: var(--text);
        margin-bottom: 10px;
    }

    #description {
        display: grid;
        padding: 15px;
        gap: 10px;
        margin-top: 30px;
        border-radius: 20px;
        border: 1px solid var(--gray);
        color: var(--text);
    }

    #description label {
        font-weight: 700;
    }

    #description textarea {
        padding: 10px;
        border-radius: 10px;
        min-height: 70px;
        border: 1px solid var(--text-alternative);
    }

    #description textarea:hover,
    #description textarea:focus {
        border: 1px solid var(--primary);
        outline: none;
    }

    #funding_options {
        margin-top: 30px;
        padding: 20px;
        display: grid;
        gap: 20px;
        margin-bottom: 30px;
    }

    #funding_options h4 {
        color: var(--text);
    }

    #options {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 20px;
        max-width: 650px;
        padding: 20px;
        border: 1px solid var(--gray);
        border-radius: 15px;
    }

    .option {
        width: 150px;
        display: flex;
        border-radius: 15px;
        border: 1px solid var(--text-alternative);
        gap: 15px;
        padding: 15px;
        cursor: pointer;
        transition: .4s ease;
        margin: auto;
    }

    .option:hover,
    .option:focus {
        scale: 1.1
    }

    .option #money_card {
        width: 30px;
        height: 30px;
        align-self: center;
    }

    .balance {
        color: var(--text);
        font-size: 15px;
    }

    .dinero {
        color: var(--primary);
        margin-top: 20px;
        font-weight: 800;
    }

    #proceed {
        border: none;
        background-color: var(--primary);
        color: var(--gray);
        padding: 15px 30px;
        margin: 0 auto;
        border-radius: 10px;
        margin: auto;
        cursor: pointer;
        transition: .8s ease;
    }
    
    #proceed:hover,
    #proceed:focus {
        scale: 1.2;
        transition: .4s ease-in;
    }

    @media screen and (max-width: 710px) {
        #money > div {
            margin: auto;
        }
    }
</style>