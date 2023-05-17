<template>
    <form action="">
        <h3>Contact Us</h3>
        <div>
            <label for="email">Enter Your Email</label>
            <input type="text" name="email" placeholder="Email">
        </div>
        <div>
            <label for="">Enter Your Message</label>
            <textarea placeholder="Message..."></textarea>
        </div>
        <input type="submit" class="submit" value="Send Message">
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    form {
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        gap: 20px;
        padding: 20px;
        background-color: rgb(255, 255, 255, .2);
        max-width: 500px;
    }

    form > div {
        display: grid;
        gap: 10px;
    }
    
    form > div > input,
    textarea {
        padding: 15px;
        border: 1px solid var(--text-alternative);
        border-radius: 10px;
    }

    form > div > input:hover,
    form > div > input:focus,
    textarea {
        outline: 1px solid var(--primary);
    }

    .submit {
        color: var(--gray);
    }
</style>