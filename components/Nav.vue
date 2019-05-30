<template>
  <div class="my-nav">
    <nav class="container">
      <ul>
        <li>
          <nuxt-link :to="{ name: 'index' }">หน้าแรก</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'user-slug', params: { slug: 'aum' } }"
            >Profile</nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{ name: 'todo' }">AQI</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'seeme' }">Seeme</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss">
.my-nav {
  background-color: #000;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    height: 95px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    justify-content: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    li {
      text-align: center;
      padding: 0.6rem 1.6rem;
      @media (min-width: 768px) {
        padding: 0.6rem 3rem;
      }
      a {
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
