export default {
  props: ['info'],
  template: `
    <section  class="note-info">
    <h3>{{info.txt}}</h3>
    <iframe :src=info.videoUrl></iframe>
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
