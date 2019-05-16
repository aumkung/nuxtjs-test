<template>
  <section class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="title">Hello {{ slug }}</h1>
        <img src="~assets/images/fuji.jpg" alt="Fuji" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blog',
  computed: {
    slug() {
      return this.$route.params.slug
    }
  }
}
</script>
<style lang="scss">
.title {
  margin-bottom: 3rem;
}
</style>
