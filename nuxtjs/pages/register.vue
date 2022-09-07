<template>
    <div class="_register">
        <Register />
        <main class="_main">
            <News />
        </main>
    </div>
</template>

<script>
import Register  from '~/components/Register.vue'
import News      from '~/components/News.vue'

export default {
    components: {
        Register,
        News,
    }
}
</script>
