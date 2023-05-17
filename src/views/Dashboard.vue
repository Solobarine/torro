<template>
    <section class="view">
        <Menu/>
        <Dashboard/>
    </section>
</template>
<script>
import Menu from '../components/Menu.vue'
import Dashboard from '../components/Dashboard.vue'
export default {
    components: {
        Menu,
        Dashboard
    }
}
</script>