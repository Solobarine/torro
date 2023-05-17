<template lang="">
    <section>
        <div id="register_image">
        </div>
        <form>
            <h2>Create an account</h2>
            <p id="invite">Sign up now</p>
            <div id="form_inputs">
                <div class="input">
                    <label for="first_name">Enter First Name</label>
                    <input type="text" name="first_name" id="first_name" placeholder="First Name">
                </div>
                <div class="input">
                    <label for="last_name">Enter Last Name</label>
                    <input type="text" name="last_name" id="last_name" placeholder="Last Name">
                </div>
                <div class="input">
                    <label for="password">Enter Password</label>
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div class="input">
                    <label for="confirm_password">Confirm Pasword</label>
                    <input type="text" name="confirm_password" placeholder="Re-Type Password">
                </div>
            </div>
            <input type="submit" class="submit" value="Create Account">
            <h5 id="line_break">
                <span>or</span>
            </h5>
            <div id="sign_up_options">
                <a href="#">
                    <Google/>
                    <p>Sign Up with Google</p>
                </a>
                <a href="#">
                    <Apple/>
                    <p>Sign Up with Apple</p>
                </a>
                <a href="#">
                    <Facebook/>
                    <p>Sign Up with Facebook</p>
                </a>
            </div>
            <p id="login">Already a User? <RouterLink to="/login">Login</RouterLink></p>
        </form>
    </section>
</template>
<script>
    import { RouterLink } from 'vue-router';
    import Apple from '../components/icons/Apple.vue'
    import Facebook from '../components/icons/Facebook.vue'
    import Google from '../components/icons/Google.vue'
    import Logo_one from '../components/icons/finance/logo/Logo_one.vue'
    import Logo_two from '../components/icons/finance/logo/Logo_two.vue'
    export default {
        components: {
            Apple,
            Facebook,
            Google,
            Logo_one,
            Logo_two
        }
    }
</script>
<style scoped>
    section {
        display: flex;
    }

    #register_image {
        flex-grow: 1;
        background: url(/images/register.jpg);
        background-size: cover;
    }

    form {
        max-width: 600px;
        padding: 60px;
    }

    h2,
    p,
    label {
        color: var(--text);
    }

    #invite {
        margin: 15px 0 30px 0;
        color: var(--text-alternative);
    }

    #form_inputs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }

    .input {
        display: grid;
        gap: 10px;
    }

    .input > input {
        padding: 10px;
        border: 1px solid var(--gray);
        border-radius: 10px;
    }

    .submit {
        width: auto;
        padding: 15px 30px;
        margin-top: 20px;
    }

    #line_break {
        width: 90%;
        text-align: center;
        border-bottom: 2px solid var(--text-alternative);
        line-height: 0.1em;
        margin: 20px auto;
    } 
    #line_break span {
        background: #fff;
        padding:0 10px;
    }

    #sign_up_options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        gap: 25px 50px;
        padding: 10px 0;
    }

    #sign_up_options > a {
        display: flex;
        gap: 10px;
        padding: 7px 10px;
        border: 2px solid var(--gray);
        border-radius: 15px;
        text-decoration: none;
    }

    #sign_up_options > a > * {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: 600;
        justify-content: center;
        color: var(--text);
        white-space: nowrap;
        font-size: 14px;
    }

    #sign_up_options > a:hover {
        border: 2px solid var(--black);
    }

    #sign_up_options > a:hover > p {
        color: var(--black);
    }

    #login {
        margin-top: 20px;
        text-align: center;
        font-size: 16px;
    }

    #login > a {
        text-decoration: none;
        color: var(--blue);
    }

    #login > a:hover {
        color: var(--red)
    }

    #login > a:focus {
        outline: none;
        color: var(--red)
    }
</style>