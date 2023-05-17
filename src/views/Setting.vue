<template>
    <section class="view">
        <Menu/>
        <Setting/>
    </section>
</template>
<script>
import Menu from '../components/Menu.vue'
import Setting from '../components/Setting.vue'
export default {
    components: {
        Menu,
        Setting
    }
}
</script>