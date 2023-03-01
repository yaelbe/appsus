export default {
  props: ['info'],
  template: `
     <section class="note-info">
        <h3>{{info.title}}</h3>
        <img :src="info.url" alt="info.url" />
    </section>
  `,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
  emits: [],
}
