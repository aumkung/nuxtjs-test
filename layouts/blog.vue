<template>
  <div>
    <Nav />
    <div class="blog-wrap">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
export default {
  layout: 'blog',
  components: { Nav, Footer }
}
</script>
