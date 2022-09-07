<template>
    <section class="_form_container">
        <h1 class="title">LOGIN</h1>
        <form action="#" class="_form">
            <div class="_field">
                <label for="_email" name="_email">Email</label>
                <input type="text" id="_email">
            </div>
            <div class="_field">
                <label for="_password" name="_password">Password</label>
                <input type="password" id="_password">
            </div>
            <button class="button-full">LOGIN</button>
        </form>
        <p class="txt-center">No account yet? <nuxt-link to="register" class="clr-black is-bold">REGISTER HERE</nuxt-link></p>
    </section>
</template>

<style lang="scss">
    @import '~/assets/scss/auth.scss';
</style>