<template>
    <div class="_login">
        <Login />
        <main class="_main">
            <News />
        </main>
    </div>
</template>

<script>
import Login   from '~/components/Login.vue'
import News    from '~/components/News.vue'

export default {
    components: {
        Login,
        News,
    }
}
</script>
