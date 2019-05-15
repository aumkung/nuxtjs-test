<template>
  <section class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="title">Hello {{ slug }}</h1>
        <nuxt-link :to="{ name: 'index' }" class="button--green"
          >Back to Home</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    slug() {
      return this.$route.params.slug
    }
  }
}
</script>
