<template>
    <section>
        <div id="settings_menu">
            <div id="percentage"></div>
            <div id="options">
                <RouterLink to="/settings/details" class="option">
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <h4>Personal Information</h4>
                        <p>View or Update your Profile</p>
                    </div>
                </RouterLink>
                <RouterLink to="/settings/theme" class="option">
                    <i class="fa-solid fa-eye"></i>
                    <div>
                        <h4>Appearance</h4>
                        <p>Customize the Appearance</p>
                    </div>
                </RouterLink>
                <RouterLink to="#" class="option">
                    <i class="fa-solid fa-credit-card"></i>
                    <div>
                        <h4>Direct Debits</h4>
                        <p>View Pending Transfers</p>
                    </div>
                </RouterLink>
                <RouterLink to="#" class="option">
                    <i class="fa-solid fa-lock"></i>
                    <div>
                        <h4>Login and Security</h4>
                        <p>Secure and Protect your account</p>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div>
            <RouterView></RouterView>
        </div>
    </section>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router';
import AccountDetails from './AccountDetails.vue'
import Appearance from './Appearance.vue'

export default {
    components: {
        AccountDetails,
        Appearance
    }
}
</script>
<style scoped>
    section {
        display: flex;
    }
    
    #settings_menu {
        width: 300px;
        padding: 20px 0;
        color: var(--text);
    }

    #percentage {
        padding: 10px;
        width: 80%;
        margin: auto;
        height: 100px;
        background-color: var(--primary);
        border-radius: 15px;
        margin-bottom: 40px;
    }

    .option {
        display: flex;
        gap: 10px;
        align-items: center;
        color: var(--text);
        padding: 10px;
        margin-bottom: 20px;
        text-decoration: none;
    }

    .option:hover {
        color: var(--gray);
        background-color: var(--primary);
    }
    
    .option p {
        font-size: 13px;
        color: var(--text-alternative);
    }

    .option:hover p {
        color: var(--gray);
    }
    
    .option i {
        font-size: 20px;
        color: var(--primary);
    }

    section > div:nth-child(2) {
        flex-grow: 1;
    }
</style>