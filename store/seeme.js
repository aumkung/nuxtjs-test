export const state = () => ({
  playlists: []
})

export const actions = {
  async GET_PLAYLIST({ commit }) {
    const { data } = await this.$axios.get(
      `https://seeme.me/api/v4/playlists/Dr1YZE`
    )
    let clips = data.data.clips
    for (const index in clips) {
      if (clips.hasOwnProperty(index)) {
        let f = await this.$axios.$get(
          `https://graph.facebook.com/v3.3/?id=${
            clips[index].streams.mediaid
          }&fields=engagement&access_token=EAAaYt5ujUxcBACxxU4NZAouUc0aV5V9zBt5ML1eawf8O4ZCbnuxV6b1pk2MFoG9JSOYUxvG4hRixLgBWFzEuwt5acV721s5cmZCX4dVZCCw56DTBAW6vUxhE5o4DvKhjz6TnKhXZB0IdKb9o6ZAhPfNxXu5ONLAxLc8u1CeH7ydsQ1crebhZBQFquMZBp87ZBIvwZD`
        )
        clips[index].engagement = f.engagement
      }
    }
    commit('SET_PLAYLIST', data.data)
  }
}

export const mutations = {
  SET_PLAYLIST(state, data) {
    state.playlists = data
  }
}
