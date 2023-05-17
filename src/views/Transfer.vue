<template>
    <section class="view">
        <Menu/>
        <Transfer/>
    </section>
</template>
<script>
import Menu from '../components/Menu.vue'
import Transfer from '../components/Transfer.vue'
export default {
    components: {
        Menu,
        Transfer
    }
}
</script>