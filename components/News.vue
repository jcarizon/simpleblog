<template>
    <section class="_news_section">
        <div class="_wrapper">
            <h1 v-if="this.$route.name == 'index'" class="news_title">NEWS</h1>
            <h2 v-else class="news_title">NEWS</h2>
        </div>
        <div class="_big_wrap">
            <div class="_row-itemcr _list">
                <template v-for="(news, index) in newslist">
                    <figure class="_col-ungrow _tile" :key="index">
                        <nuxt-link to="single"></nuxt-link>
                            <img :src="news.thumbnail" :alt="news.title">
                            <figcaption>
                                <span class="date">{{ news.date }}</span>
                                <h4 class="jp-font">{{ news.title }}</h4>
                            </figcaption>
                    </figure>
                </template>
            </div>
        </div>
        <button class="button news_load">LOAD MORE</button>
    </section>
</template>

<style lang="scss">
    @import '~/assets/scss/news.scss';
</style>

<script>
export default {
    data() {
        return {
            newslist : [
                {
                    title       : 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
                    thumbnail   : require('../assets/images/news/thumbnail.png'),
                    date        : '2019.06.19'
                },
                {
                    title       : 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
                    thumbnail   : require('../assets/images/news/thumbnail.png'),
                    date        : '2019.06.19'
                },
                {
                    title       : 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
                    thumbnail   : require('../assets/images/news/thumbnail.png'),
                    date        : '2019.06.19'
                },
                {
                    title       : 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
                    thumbnail   : require('../assets/images/news/thumbnail.png'),
                    date        : '2019.06.19'
                },
                {
                    title       : 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
                    thumbnail   : require('../assets/images/news/thumbnail.png'),
                    date        : '2019.06.19'
                },
                {
                    title       : 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ',
                    thumbnail   : require('../assets/images/news/thumbnail.png'),
                    date        : '2019.06.19'
                },
            ]
        }
    }
}
</script>