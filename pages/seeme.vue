<template>
  <div class="container">
    <h1>{{ playlists.title }}</h1>
    <div class="row">
      <template v-for="(clip, index) in playlists.clips">
        <div :key="index" class="col-12 col-md-6 p-3">
          <h5 class="pb-3">{{ clip.title }}</h5>
          <a :href="clip.streams.mediaid">
            <img
              :src="clip.thumbnail.large.url"
              :alt="clip.title"
              :title="clip.title"
              class="w-100"
            />
          </a>
          <div class="detail">
            <div class="view-engage">
              <p class="text-header">View engagement</p>
              <p class="mt-3">view: {{ clip.viewed }}</p>
            </div>
            <div class="facebook-engage">
              <p class="text-header">Facebook engagement</p>
              <p class="mt-3">comment: {{ clip.engagement.comment_count }}</p>
              <p class="mt-3">
                comment plugin:
                {{ clip.engagement.comment_plugin_count }}
              </p>
              <p class="mt-3">reaction: {{ clip.engagement.reaction_count }}</p>
              <p class="mt-3">share: {{ clip.engagement.share_count }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'blog',
  computed: {
    ...mapState('seeme', ['playlists'])
  },
  async fetch({ store, params }) {
    await store.dispatch('seeme/GET_PLAYLIST')
  }
}
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 0 0 0;
}
.view-engage {
  .text-header {
    border-bottom: 5px solid #4d8cfd;
  }
}
.facebook-engage {
  .text-header {
    border-bottom: 5px solid #4d8cfd;
  }
}
</style>
