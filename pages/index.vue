<template>
    <div class="_index">
        <Banner />
        <main class="_main">
            <News />
        </main>
    </div>
</template>

<script>
import Banner   from '~/components/Banner.vue'
import News     from '~/components/News.vue'

export default {
    components: {
        Banner,
        News,
    }
}
</script>
