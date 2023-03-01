import { noteService } from './../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'

export default {
  props: [],
  template: `
        <h1>Notes</h1>
        <NoteAdd></NoteAdd>
        <section v-if="notes" class="note-page">
            <NoteList :notes="notes"></NoteList>
        </section>`,

  data() {
    return {
      notes: null,
    }
  },
  methods: {},
  computed: {},
  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },
  components: {
    NoteList,
    NoteAdd,
  },
  emits: [],
}
