export default {
  props: ['info'],
  template: `
     <section class="note-info">
        <h3>{{info.title}}</h3>
        <pre>{{info.url}}</pre>
        <img :src="info.url" alt="info.url" />
    </section>
  `,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
    console.log('create Img Note')
  },
  components: {},
  emits: [],
}
