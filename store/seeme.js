export const state = () => ({
  playlists: []
})

export const actions = {
  async GET_PLAYLIST({ commit }) {
    // this.$axios.setHeader('Access-Control-Allow-Origin', '*')
    // this.$axios.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    // this.$axios.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    // console.log(this.$axios)
    const { data } = await this.$axios.get(
      `https://seeme.me/api/v4/playlists/Dr1YZE`
    )
    let clips = data.data.clips
    for (const index in clips) {
      if (clips.hasOwnProperty(index)) {
        let f = await this.$axios.$get(
          `https://graph.facebook.com/v3.3/?id=${
            clips[index].streams.mediaid
          }&fields=engagement&access_token=EAAaYt5ujUxcBAAoO8jfqtKBzxee5qOju369vjqxPvJ2X8nR9ZB7nDUCr1BT5m66stACHb84oIwu1Meu8RO7Xhxp4freyITsAi0TERAyjVSV51FZAZByTBciZApN7KoVbr1EnySSAqC5LAnEqoZCbJEQgewH0bW2DQ4TlPbSoFsZAaS3PgWjecFrZCXpSAoBq16dEVOjirKy6AZDZD`
        )
        clips[index].engagement = f.engagement
      }
    }
    commit('SET_PLAYLIST', data.data)
  }
}

export const mutations = {
  SET_PLAYLIST(state, data) {
    // console.log(data)
    state.playlists = data
  }
}
