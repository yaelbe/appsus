export default {
  props: ['info'],
  template: `
    <section  class="note-info">
    <iframe :src=info.videoUrl></iframe>
    <div class="title">{{info.txt}}</div>
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
  },
}
