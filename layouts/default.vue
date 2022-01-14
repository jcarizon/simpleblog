<template>
    <div class="_container">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '~/layouts/templates/Header.vue'
import Footer from '~/layouts/templates/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
