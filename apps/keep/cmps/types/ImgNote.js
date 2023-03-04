export default {
  props: ['info'],
  template: `
     <section ref="card" class="note-info img-note">
     <!-- <section class="note-info">
        <img :src="info.imgUrl" alt="" />
        <div class="title">{{this.info.txt}}</div>
        
    </section> -->
       
    </section>
  `,

  data() {
    return {}
  },
  methods: {
    buildNote() {
      const getMeta = async (url) => {
        const img = new Image()
        img.src = url
        await img.decode()
        return img
      }
      getMeta(this.info.imgUrl).then((img) => {
        const div = this.$refs.card
        const height = (img.height / img.width) * div.offsetWidth
        const { imgUrl: url, txt: title = '', subtxt: subtitle = '' } = this.info
        let html = `
        <div class="imgDiv" style="background-image: url('${url}'); height: ${height}px;"></div>
        <div class="title">${title}</div>
        <div class="subtitle" :style="{ direction: ${this.direction()}}">${subtitle}</div>`
        div.innerHTML = html
      })
    },
    direction() {
      var rtl_rx = /[\u0591-\u07FF]/
      return rtl_rx.test(this.info.subtxt) ? 'rtl' : 'ltr'
    },
  },
  created() {},
  mounted() {
    this.buildNote()
  },
  watch: {
    info(newVal) {
      if (!newVal) return
      this.txt = newVal.txt
      this.imgUrl = newVal.imgUrl
      this.subtxt = newVal.subtxt
      this.buildNote()
    },
  },
  components: {},
  emits: [],
}
