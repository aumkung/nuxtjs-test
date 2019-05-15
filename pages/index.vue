<template lang="html">
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxtjs-test
      </h1>
      <h2 class="subtitle">
        Buxt Project
      </h2>
      <div class="links">
        <nuxt-link
          :to="{ name: 'user-slug', params: { slug: 'aum' } }"
          class="button--green"
          >Profile</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
