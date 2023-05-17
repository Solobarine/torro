<template>
    <div id="currency">
        <h3>Currency</h3>
        <div class="country">
            <div>
                <img src="/src/assets/australia.png" alt="Australia"/>
            </div>
            <span><h4>70344</h4><p>AUD</p></span>
        </div>
        <div class="country">
            <div>
                <img src="/src/assets/european-union.png" alt="">
            </div>
            <span><h4>58800</h4><p>EUR</p></span>
        </div>
        <div class="country">
            <div>
                <img src="/src/assets/united-kingdom.png" alt="">
            </div>
            <span><h4>46000</h4><p>GBP</p></span>
        </div>
        <div class="country">
            <div>
                <img src="/src/assets/united-states.png" alt="">
            </div>
            <span><h4>56890</h4><p>USD</p></span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #currency {
        max-width: 300px;
        padding: 15px;
        flex-grow: 1;
    }

    h3 {
        margin-bottom: 20px;
    }

    .country > div {
        height: 30px;
    }

    img {
        height: 100%;
    }

    .country {
        display: flex;
        text-align: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    span {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    h4,
    p {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    p {
        font-size: 13px;
    }
</style>