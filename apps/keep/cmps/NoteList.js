import NodePreview from './NotePreview.js'
export default {
  props: ['notes'],
  template: `
    <section class="note-list">
    <NodePreview v-for="note in notes" :note="note"></NodePreview>
    </section>
`,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {
    NodePreview,
  },
  emits: [],
}
