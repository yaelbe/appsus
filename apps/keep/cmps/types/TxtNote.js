export default {
  props: ['info'],
  template: `
    <section class="note-info">
        <h3>{{ info.txt }}</h3>
    </section>
  `,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
    console.log('create Txt Note')
  },
  components: {},
  emits: [],
}
