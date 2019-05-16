<template>
  <footer class="footer">
    <div class="container">
      <p class="text-copy">copyright&copy; AummStudio {{ year }}</p>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    year: ''
  }),
  mounted() {
    let d = new Date()
    this.year = d.getFullYear()
  }
}
</script>
<style lang="scss">
.footer {
  background-color: #000;
  min-height: 15vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  .text-copy {
    font-size: 16px;
    margin-bottom: 0;
  }
}
</style>
