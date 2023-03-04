export default {
  props: ['info'],
  template: `
    <section class="note-info">
        <audio controls>
            <source :src="info.audioUrl"/>
        </audio>
        <div class="title">{{info.txt}}</div>
        <div v-if="info.subtxt" class="subtitle">{{info.subtxt}}</div>
    </section>
    `,
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  info(newVal) {
    if (!newVal) return
    this.txt = newVal.txt
    this.audioUrl = newVal.audioUrl
    this.subtxt = newVal.subtxt
  },
}
