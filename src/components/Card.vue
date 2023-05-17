<template>
    <div id="card">
        <div id="section_one">
            <Chip/>
            <p id="name">Torre</p>
        </div>
        <p id="balance_text">Balance</p>
        <div id="section_two">
            <h3 id="balance">$30 000</h3>
            <Visa/>
        </div>
    </div>
</template>
<script>
import Visa from './icons/Visa.vue'
import Chip from './icons/Chip.vue'

export default {
    components: {
        Chip,
        Visa
    }
}
</script>
<style scoped>
    #card {
        width: 300px;
        height: 180px;
        padding: 10px 20px;
        border-radius: 20px;
        background-image: url('../assets/card_texture_six.jpg');
        background-size: cover;
        border: 1px solid var(--text);
    }

    #section_one {
        display: flex;
        justify-content: space-between;
    }
    
    #chip {
        width: 60px;
        height: 60px;
    }

    #name {
        font-weight: 700;
        padding-top: 10px;
        color: var(--gray);
    }

    #balance_text {
        color: var(--gray);
        margin-top: 50px;
    }

    #section_two {
        display: flex;
        justify-content: space-between;
    }

    #balance {
        font-size: 25px;
        letter-spacing: 2px;
        color: var(--gray);
    }

    #card #visa {
        text-align: right;
        width: 80px;
    }
</style>