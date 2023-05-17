<template>
    <section>
        <div id="login_image"></div>
        <form>
            <h2 id="greeting">Welcome!</h2>
            <p id="invite">Log in to your account</p>

            <div class="input">
                <label for="email">Enter Email</label>
                <input type="email" name="email" id="email" placeholder="email">
            </div>
            <div class="input">
                <label for="password">Enter Password</label>
                <input type="password" name="password" id="password" placeholder="password">
            </div>
            <div id="options">
                <div>
                    <input type="checkbox" name="remember_me" id="remember_me">
                    <p>Remember Me</p>
                </div>
                <p>Forgot Password?</p>
            </div>
            <input type="submit" class="submit" id="login" value="Login">
            <h5 id="line_break">
                <span>or</span>
            </h5>
            <div id="login_options">
                <a href="#">
                    <Google/>
                    <p>Continue with Google</p>
                </a>
                <a href="#">
                    <Apple/>
                    <p>Continue with Apple</p>
                </a>
                <a href="#">
                    <Facebook/>
                    <p>Continue with Facebook</p>
                </a>
            </div>
            <p id="sign_up">Don't have any account? <RouterLink to="/register">Sign Up</RouterLink></p>
        </form>
    </section>
</template>
<script>
    // import { RouterLink } from 'vue-router'
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
        gap: 20px;
    }

    #login_image {
        flex-grow: 10;
        background: url(/images/login.jpg);
        background-size: cover;
    }

    form {
        max-width: 500px;
        padding: 60px;
    }

    h2,
    p,
    label {
        color: var(--text);
    }

    #invite {
        margin: 7px 0 20px 0;
        color: var(--text-alternative);
    }

    .input {
        display: grid;
        gap: 10px;
        margin-top: 20px;
    }


    .input > input {
        border: 1px solid var(--gray);
        border-radius: 10px;
        padding: 15px;
    }

    #login {
        width: auto;
        padding: 15px 30px;
        margin-top: 10px;
    }

    #options {
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding: 20px 0;
    }

    #options > div {
        display: flex;
        text-align: center;
        gap: 8px;
    }

    #options > p {
        color: var(--text-alternative);
        cursor: pointer;
    }

    #options > p:hover,
    #options > p:focus {
        color: var(--text)
    }

    #line_break {
        width:90%;
        text-align:center;
        border-bottom: 2px solid var(--text-alternative);
        line-height:0.1em;
        margin: 20px auto;
    }
    
    #line_break span {
        background: #fff;
        padding:0 10px;
    }

    #login_options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        gap: 25px 50px;
        padding: 10px 0;
    }

    #login_options > a {
        display: flex;
        gap: 10px;
        padding: 7px 10px;
        border: 2px solid var(--gray);
        border-radius: 15px;
        text-decoration: none;
    }

    #login_options > a > * {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: 600;
        justify-content: center;
        color: var(--text);
        white-space: nowrap;
        font-size: 14px;
    }

    #login_options > a:hover {
        border: 2px solid var(--black);
    }

    #login_options > a:hover > p {
        color: var(--black);
    }

    #sign_up {
        margin-top: 20px;
        text-align: center;
        font-size: 16px;
    }

    #sign_up > a {
        text-decoration: none;
        color: var(--blue);
    }

    #sign_up > a:hover {
        color: var(--red)
    }

    #sign_up > a:focus {
        outline: none;
        color: var(--red)
    }
</style>