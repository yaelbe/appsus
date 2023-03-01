import { noteService } from './../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'

export default {
  props: [],
  template: `
    <section v-if="notes">
        <h1>Notes</h1>
        <NoteAdd @addNote="createNote"></NoteAdd>
        <section v-if="notes" class="note-page">
            <NoteList :notes="notes"></NoteList>
        </section>
    </section>`,

  data() {
    return {
      notes: null,
    }
  },
  methods: {
    createNote(note) {
      noteService
        .save(note)
        .then(noteService.query)
        .then((notes) => (this.notes = notes))
    },
  },
  computed: {},
  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },
  components: {
    NoteList,
    NoteAdd,
  },
}
