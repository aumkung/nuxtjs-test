export const state = () => ({
  lists: [],
  districts: [],
  district_detail: false
})

export const actions = {
  async getData({ commit }) {
    await this.$axios
      .$get('/api/v2/states', {
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
    const data = await this.$axios
      .$get('/api/v2/cities', {
        params: {
          key: 'K5CKz6iH2PCPgy98q',
          country: 'Thailand',
          state: `${key}`
        }
      })
      .catch(error => {
        commit('SET_DISTRICT', null)
      })
    if (data) {
      commit('SET_DISTRICT', {
        data: data.data,
        key: key
      })
    }
  },
  async districtDetail({ commit }, payload) {
    const data = await this.$axios
      .$get('/api/v2/city', {
        params: {
          key: 'K5CKz6iH2PCPgy98q',
          country: 'Thailand',
          state: `${payload.key}`,
          city: `${payload.city}`
        }
      })
      .catch(error => {
        commit('SET_DISTRICT_DETAIL', null)
      })
    if (data) {
      commit('SET_DISTRICT_DETAIL', data.data)
    }
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
  SET_DISTRICT(state, payload) {
    if (payload != null) {
      state.districts = {
        data: payload.data,
        key: payload.key
      }
    } else if (payload === null) {
      state.districts = payload
    }
  },
  SET_DISTRICT_DETAIL(state, data) {
    state.district_detail = data
  }
}
