<template>
    <div id="account_details">
        <h3>Personal Information</h3>
        <div id="profile_image">
            <div>
                <img src="/src/assets/male_user.png" alt="">
            </div>
            <input id="upload" type="submit" value="Upload New Photo">
            <input id="delete" type="submit" value="Delete">
        </div>
        <form>
            <div id="personal_inputs">
                <div>
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name">
                </div>
                <div>
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" name="email">
                </div>
                <div>
                    <label for="date_of_birth">Date of Birth</label>
                    <input type="text" name="date_of_birth">
                </div>
            </div>
            <div>
                <h3>Personal Address</h3>
                <div id="location_details">
                    <div>
                        <label for="country">Country</label>
                        <input type="text" name="country">
                    </div>
                    <div>
                        <label for="city">City</label>
                        <input type="text" name="city">
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <input type="text" name="address">
                    </div>
                    <div>
                        <label for="postal_code">Postal Code</label>
                        <input type="text" name="postal_code">
                    </div>
                </div>
            </div>
            <div id="proceed">
                <input type="submit" class="submit" value="Edit Details">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #account_details {
        color: var(--text);
        padding: 20px;
        max-width: 500px;
        margin: 40px auto;
    }

    #account_details > h3 {
        margin: 20px 0;
    }

    #profile_image {
        display: flex;
        gap: 15px 30px;
        align-items: center;
        padding: 10px 0;
        flex-wrap: wrap;
    }

    #profile_image > div {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        padding: 10px;
        background-color: var(--gray);
    }

    #profile_image input {
        padding: 15px 20px;
        border: 1px solid var(--text-alternative);
        border-radius: 10px;
        cursor: pointer;
        transition: .4s ease;
    }

    #profile_image input:hover,
    #profile_image input:focus {
        scale: 1.1;
    }

    #upload {
        background-color: var(--primary);
        color: var(--gray);
    }

    #delete {
        background-color: var(--red);
        color: var(--gray);
    }

    #personal_inputs,
    #location_details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0;
        flex-wrap: wrap;
        row-gap: 20px;
    }

    #personal_inputs > div,
    #location_details > div  {
        display: grid;
        gap: 10px;
        max-width: 220px;
    }

    #personal_inputs > div > input,
    #location_details > div > input {
        padding: 15px;
        min-width: 40px;
        border-radius: 10px;
        border: 1px solid var(--text-alternative);
        outline: none;
    }

    #location_details h3 {
        flex-grow: 1;
        margin: 20px 0;
    }

    #proceed {
        display: flex;
        justify-content: flex-end;
    }

    .submit {
        width: auto;
        padding: 15px 30px;
        border: none;
        color: var(--gray);
        transition: .4s ease;
    }

    .submit:hover,
    .submit:focus {
        scale: 1.1;
    }

    @media screen and (max-width: 730px) {
        .submit {
            width: 100%;
        }
    }

    @media screen and (max-width: 845px) {
        #personal_inputs > div,
        #location_details > div {
            margin: auto;
            margin-bottom: 10px;
            width: 100%;
        }
    }
</style>