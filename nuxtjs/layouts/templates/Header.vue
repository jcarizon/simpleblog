<template>
    <header class="_header">
        <div class="_wrapper">
            <div class="_row-center _header-row">
                <div class="_col">
                    <nuxt-link class="header-logo" to="/">
                        <img src="~/assets/images/logo-header.png" alt="Blog Logo">
                    </nuxt-link>
                </div>
                <div class="_col txt-right">
                    <nuxt-link  v-if="this.$route.name == 'index'" class="header-link" to="login">
                        LOGIN
                    </nuxt-link>
                    <nuxt-link v-else class="header-link" to="/">
                        CLOSE
                    </nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @import '~/assets/scss/header.scss';
</style>