export default {
  props: ['info'],
  template: `
    <section class="note-info">
    <div class="title" :style="{direction: direction}">{{info.txt}}</div>
    <div v-if="info.subtxt" class="subtitle" :style="{direction: direction}">{{info.subtxt}}</div>
    </section>
  `,

  data() {
    return {}
  },
  methods: {},
  computed: {
    direction() {
      var rtl_rx = /[\u0591-\u07FF]/
      return rtl_rx.test(this.info.txt) ? 'rtl' : 'ltr'
    },
  },
  created() {},
  components: {},
  info(newVal) {
    if (!newVal) return
    this.txt = newVal.txt
    this.subtxt = newVal.subtxt
  },
  emits: [],
}
