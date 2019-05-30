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
const token =
  'EAAaYt5ujUxcBAIg6wbkTYm6tBO46M8k8j5ePc5jCqfYeDF3FsGdFepFSA4YvtwTZCUSGn7VLaKNMIo0ZCbLZB58hVXVEK1RlT0XYlIEwJ5FSRqDaAifYLt9eF6t68wMXKxifdx2nfUZBGOFg01P4cdTZBzR8Rg5DKEZCvNe9cZCDA2ohvhqI6ZA6OsoO44ZCPb40JYMyElstGUAZDZD'

export default {
  layout: 'blog',
  async asyncData({ params, $axios }) {
    let { data } = await $axios.get(`https://seeme.me/api/v4/playlists/zJRPKz`)
    let clips = data.data.clips
    for (const index in clips) {
      if (clips.hasOwnProperty(index)) {
        let f = await $axios.$get(
          `https://graph.facebook.com/v3.3/?id=${
            clips[index].streams.mediaid
          }&fields=engagement&access_token=${token}`
        )
        clips[index].engagement = f.engagement
      }
    }
    return { playlists: data.data }
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
