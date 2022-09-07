<template>
    <section class="_form_container">
        <h1 class="title">REGISTER</h1>
        <form action="#" class="_form">
            <div class="_field">
                <label for="_email" name="_email">Email</label>
                <input type="text" id="_email">
            </div>
            <div class="_field">
                <label for="_password" name="_password">Password</label>
                <input type="password" id="_password">
            </div>
            <div class="_field">
                <label for="_cpassword" name="_cpassword">Confirm Password</label>
                <input type="password" id="_cpassword">
            </div>
            <button class="button-full">REGISTER</button>
        </form>
        <p class="txt-center">Already have an account? <nuxt-link to="login" class="clr-black is-bold">LOGIN HERE</nuxt-link></p>
    </section>
</template>

<style lang="scss">
    @import '~/assets/scss/auth.scss';
</style>