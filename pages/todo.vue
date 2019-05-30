<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-2 mb-3">
        <div class="text-center">
          <h1 class="header-text">ค่าอากาศ AQI</h1>
        </div>
      </div>
    </div>
    <template v-if="lists != null">
      <div class="row pt-2">
        <div class="col-12 col-md-3">
          <h2 class="text-center mb-4">เลือกจังหวัด</h2>
          <ul class="nav-left">
            <li
              v-for="(list, index) in lists"
              :key="index"
              class="nav-left-list"
            >
              <button @click="getDistrict(list.state)">{{ list.state }}</button>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-3">
          <h2 class="text-center mb-4">เลือกอำเภอ</h2>
          <template v-if="districts != null">
            <ol class="select-district">
              <li v-for="(district, index) in districts.data" :key="index">
                <button
                  class="btn-select"
                  @click="
                    districtDetail({ city: district.city, key: districts.key })
                  "
                >
                  {{ district.city }}
                </button>
              </li>
            </ol>
          </template>
          <template v-if="districts === null">
            <div class="nodata">
              <img
                class="nodata-image"
                src="~assets/images/nodata.svg"
                alt="no data"
              />
              <p class="nodata-text">เสียดายจังเราไม่มีข้อมูลอ่ะ !!</p>
            </div>
          </template>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="text-center mb-4">ผลลัพท์</h2>
          <template v-if="district_detail">
            <h4>อำเภอ : {{ district_detail.city }}</h4>
            <h4>AQI : {{ district_detail.current.pollution.aqius }}</h4>
          </template>
          <template v-else>
            <div v-if="district_detail === null" class="nodata">
              <img
                class="nodata-image"
                src="~assets/images/nodata.svg"
                alt="no data"
              />
              <p class="nodata-text">เสียดายจังเราไม่มีข้อมูลอ่ะ !!</p>
            </div>
          </template>
        </div>
      </div>
    </template>
    <template v-if="lists === null">
      <div class="row pt-2">
        <div class="col-12">
          <div class="nodata">
            <img
              class="nodata-image"
              src="~assets/images/nodata.svg"
              alt="no data"
            />
            <p class="nodata-text">เสียดายจังเราไม่มีข้อมูลอ่ะ !!</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'blog',
  computed: {
    ...mapState('airvisual', ['districts', 'district_detail'])
  },
  asyncData({ params, $axios }) {
    return $axios
      .get('/api/v2/states', {
        params: {
          key: 'K5CKz6iH2PCPgy98q',
          country: 'Thailand'
        }
      })
      .then(res => {
        return { lists: res.data.data }
      })
      .catch(e => {
        return { lists: null }
      })
  },
  methods: {
    ...mapActions('airvisual', ['getDistrict', 'districtDetail'])
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
.select-district {
  li {
    text-align: left;
    list-style: none;
    .btn-select {
      border: none;
      background-color: transparent;
      color: #fff;
      &:hover {
        border-bottom: 3px solid #1ed760;
      }
    }
  }
}
</style>
