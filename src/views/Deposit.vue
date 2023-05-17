<template>
    <section class="view">
        <Menu/>
        <Deposit/>
    </section>
</template>
<script>
import Menu from '../components/Menu.vue'
import Deposit from '../components/Deposit.vue'
export default {
    components: {
        Menu,
        Deposit
    }
}
</script>