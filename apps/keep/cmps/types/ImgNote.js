export default {
  props: ['info'],
  template: `
     <section class="note-info img-note">
        <h3>{{info.txt}}</h3>
        <img :src="info.imgUrl" alt="info.url" />
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
