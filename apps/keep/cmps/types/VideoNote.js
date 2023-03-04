export default {
  props: ['info'],
  template: `
    <section  class="note-info">
      <div class="iframe-continuer">
        <iframe :src=info.videoUrl></iframe>
    </div>
    <div ref="videoCard" class="title">{{info.txt}}</div>
    <div v-if="info.subtxt" class="subtitle">{{info.subtxt}}</div>
    </section>
    `,
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    youtubeFullUrl() {
      const url = `https://www.youtube-nocookie.com/embed/` + this.info.videoUrl
      return url
    },
    width() {
      if (!this.$refs.videoCard) return
      return this.$refs.videoCard.offsetWidth + 'px'
    },
  },
  info(newVal) {
    if (!newVal) return
    this.txt = newVal.txt
    this.videoUrl = newVal.videoUrl
    this.subtxt = newVal.subtxt
  },
}
