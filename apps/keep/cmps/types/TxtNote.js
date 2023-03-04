export default {
  props: ['info'],
  template: `
    <section class="note-info">
    <div class="title">{{info.txt}}</div>
    <div v-if="info.subtxt" class="subtitle">{{info.subtxt}}</div>
    </section>
  `,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
  info(newVal) {
    if (!newVal) return
    this.txt = newVal.txt
    this.subtxt = newVal.subtxt
  },
  emits: [],
}
