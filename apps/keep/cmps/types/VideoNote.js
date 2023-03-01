export default {
  props: ['info'],
  template: `
    <section v-html="info.url" class="note-info">
    </section>
    `,
  created() {
    console.log('create video Note')
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
