<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-2 mb-3">
        <div class="text-center">
          <h1 class="header-text">ค่าอากาศ AQI</h1>
        </div>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-3">
        <ul class="nav-left">
          <li v-for="(list, index) in lists" :key="index" class="nav-left-list">
            <button @click="getDistrict(list.state)">{{ list.state }}</button>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <ol v-if="districts != null">
          <li v-for="(district, index) in districts" :key="index">
            <span>{{ district.city }}</span>
            <button @click="districtDetail(district.city)">
              ข้อมูลโดยรวมของ {{ district.city }}
            </button>
          </li>
        </ol>
        <div v-if="districts === null" class="nodata">
          <img
            class="nodata-image"
            src="~assets/images/nodata.svg"
            alt="no data"
          />
          <p class="nodata-text">เสียดายจังเราไม่มีข้อมูลอ่ะ !!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'blog',
  computed: {
    ...mapState('airvisual', ['lists', 'districts'])
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions('airvisual', ['getData', 'getDistrict', 'districtDetail'])
  }
}
</script>

<style lang="scss">
.nodata {
  .nodata-image {
    display: block;
    margin: 0 auto;
    width: 55%;
  }
  .nodata-text {
    text-align: center;
    margin: 3rem 0 1rem 0;
    font-size: 1.5em;
  }
}
.nav-left {
  list-style: none;
  padding: 0;
  .nav-left-list {
    button {
      background-color: #fff;
      width: 100%;
      border: none;
      padding: 0.6rem 2rem;
      text-align: left;
      border-bottom: 1px solid #ccc;
      &:hover {
        background-color: #1ed760;
      }
    }
  }
}
.header-text {
  border-bottom: 4px solid #1ed760;
  max-width: 134px;
  margin: 0 auto;
  padding: 7px;
  font-size: 18px;
}
</style>
