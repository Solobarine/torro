<template>
    <section class="view">
        <Menu/>
        <Transactions/>
    </section>
</template>
<script>
import Menu from '../components/Menu.vue'
import Transactions from '../components/Transactions.vue'
export default {
    components: {
        Menu,
        Transactions
    }
}
</script>