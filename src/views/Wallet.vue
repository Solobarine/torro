<template>
    <section class="view">
        <Menu/>
        <Wallet/>
    </section>
</template>
<script>
import Menu from '../components/Menu.vue'
import Wallet from '../components/Wallet.vue'
export default {
    components: {
        Menu,
        Wallet
    }
}
</script>