<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="title text-center">Hello {{ slug }}</h1>
        <img class="image-bg" src="~assets/images/pro.jpg" alt="Fuji" />
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
