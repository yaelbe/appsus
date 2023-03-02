import NodePreview from './NotePreview.js'
export default {
  props: ['notes'],
  template: `
    <section class="note-list">
    <NodePreview v-for="note in notes" :note="note" @updateNote="update"></NodePreview>
    </section>
`,

  data() {
    return {}
  },
  methods: {
    update(note) {
      this.$emit('updateNote', note)
    },
  },
  computed: {},
  created() {},
  components: {
    NodePreview,
  },
  emits: ['updateNote'],
}
