export default {
  props: ['info'],
  template: `
     <section ref="card" class="note-info img-note">
     <section class="note-info">
        <img :src="info.imgUrl" alt="" />
        <div class="title">{{this.info.txt}}</div>
        
    </section>
       
    </section>
  `,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  // mounted() {
  //   const getMeta = async (url) => {
  //     const img = new Image()
  //     img.src = url
  //     await img.decode()
  //     return img
  //   }
  //   getMeta(this.info.imgUrl).then((img) => {
  //     const div = this.$refs.card
  //     const height = (img.height / img.width) * div.offsetWidth
  //     let html = `
  //     <div class="imgDiv" style="background-image: url('${this.info.imgUrl}'); height: ${height}px;"></div>
  //     <div class="title">${this.info.txt}</div>`
  //     div.innerHTML = html
  //   })
  // },
  components: {},
  emits: [],
}
