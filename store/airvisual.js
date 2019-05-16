export const state = () => ({
  lists: [],
  districts: []
})

export const actions = {
  async getData({ commit }) {
    const res = await this.$axios.$get('https://api.airvisual.com/v2/states', {
      params: {
        key: 'K5CKz6iH2PCPgy98q',
        country: 'Thailand'
      }
    })
    commit('SET_DATA', res.data)
  },
  getDistrict({ commit }, key) {
    this.$axios
      .$get('https://api.airvisual.com/v2/cities', {
        params: {
          key: 'K5CKz6iH2PCPgy98q',
          country: 'Thailand',
          state: `${key}`
        }
      })
      .then(res => {
        commit('SET_DISTRICT', res.data)
      })
      .catch(err => {
        if (err.response.status === 400) {
          commit('SET_DISTRICT', null)
        }
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
  SET_DATA(state, data) {
    state.lists = data
  },
  SET_DISTRICT(state, data) {
    state.districts = data
  }
}
