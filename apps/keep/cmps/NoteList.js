import NodePreview from './NotePreview.js'

export default {
  props: ['notes'],
  template: `
    <section class="note-list">
    <NodePreview v-for="note in notes" :note="note" :colorOwner="colorModalOwner" 
      @updateNote="update" @colorOwnerChanged="updateColorOwner"></NodePreview>
    </section>
`,

  data() {
    return {
      colorModalOwner: '',
    }
  },
  methods: {
    update(note) {
      this.$emit('updateNote', note)
    },
    updateColorOwner(newOwner) {
      console.log('update color owner', newOwner)

      this.colorModalOwner = newOwner
    },
  },
  computed: {},
  created() {},
  components: {
    NodePreview,
  },
  emits: ['updateNote'],
}
