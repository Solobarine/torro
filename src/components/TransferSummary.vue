<template>
    <div id="transfer_summary">
        <h3>Payment Summary</h3>
        <p id="sending">Sending</p>
        <p id="amount">$3000</p>
        <div class="detail">
            <div>
                <div class="icon"></div>
                <p>Recipient</p>
            </div>
            <p>Byron S.</p>
        </div>
        <div class="detail">
            <div>
                <div class="icon"></div>
                <p>Account No.</p>
            </div>
            <p>335628767</p>
        </div>
        <div class="detail">
            <div>
                <div class="icon"></div>
                <p>Wallet Fee</p>
            </div>
            <p>$0.00</p>
        </div>
        <div class="detail">
            <div>
                <div class="icon"></div>
                <p class="total">Total</p>
            </div>
            <p class="total">$3000</p>
        </div>
        <p id="terms">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloremque error sit soluta eligendi libero non asperiores ipsa ducimus quos.</p>
        <input type="submit" value="Make Payment" class="submit">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #transfer_summary {
        padding: 60px 20px;
        flex-basis: 300px;
        width: 300px;
        color: var(--text);
        border-radius: 15px;
        border: 1px solid var(--gray);
        align-self: start;
    }

    #sending {
        font-size: 14px;
        margin-top: 10px;
    }

    #amount {
        font-size: 25px;
        font-weight: 700;
        margin: 10px 0;
    }

    .detail {
        display: flex;
        padding: 10px 0;
        justify-content: space-between;
        align-items: center;
    }

    .detail > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--primary);

    }

    .total {
        color: var(--primary);
        font-weight: 600;
    }

    #terms {
        margin: 15px 0;
    }

    #transfer_summary input {
        color: var(--gray);
    }
</style>