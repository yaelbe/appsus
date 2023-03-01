export default {
  props: ['info'],
  template: `
    <section  class="note-info">
    <h3>{{info.txt}}</h3>
    <iframe :src=youtubeFullUrl></iframe>
    </section>
    `,
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    youtubeFullUrl() {
      const url = `https://www.youtube-nocookie.com/embed/` + this.info.url
      console.log('utube', url)
      return url
    },
  },
}
