export const state = () => ({
  lists: [],
  districts: []
})

export const actions = {
  async getData({ commit }) {
    await this.$axios
      .$get('/v2/states', {
        params: {
          key: 'K5CKz6iH2PCPgy98q',
          country: 'Thailand'
        }
      })
      .then(res => {
        commit('SET_DATA', res)
      })
      .catch(err => {
        commit('SET_DATA', null)
      })
  },
  async getDistrict({ commit }, key) {
    await this.$axios
      .$get('/v2/cities', {
        params: {
          key: 'K5CKz6iH2PCPgy98q',
          country: 'Thailand',
          state: `${key}`
        }
      })
      .then(res => {
        if (res.status === 'success') {
          commit('SET_DISTRICT', res)
        }
      })
      .catch(err => {
        commit('SET_DISTRICT', null)
      })
  },
  districtDetail({ commit }, key) {
    console.log(key)
    // this.$axios
    //   .$get('https://api.airvisual.com/v2/city', {
    //     params: {
    //       key: 'K5CKz6iH2PCPgy98q',
    //       country: 'Thailand',
    //       state: `${key}`
    //     }
    //   })
    //   .then(res => {
    //     commit('SET_DISTRICT', res.data)
    //   })
    //   .catch(err => {
    //     if (err.response.status === 400) {
    //       alert('ไม่มีค่า')
    //     }
    //   })
  }
}

export const mutations = {
  SET_DATA(state, res) {
    if (res != null) {
      state.lists = res.data
    } else if (res === null) {
      state.lists = res
    }
  },
  SET_DISTRICT(state, data) {
    state.districts = data
  }
}
