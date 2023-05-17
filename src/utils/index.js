import {ref, computed} from 'vue'

export const collapsed = ref(true)
export const toggleMenu = () => (collapsed.value = !collapsed.value)
export const MENU_WIDTH = 250
export const MENU_WIDTH_COLLAPSED = 50
export const menu_width = computed(() => `${collapsed.value ? MENU_WIDTH_COLLAPSED : MENU_WIDTH}px`)