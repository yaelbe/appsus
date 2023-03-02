import { noteService } from './../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'

export default {
  props: [],
  template: `
    <section v-if="notes">
        <NoteAdd @addNote="saveNote"></NoteAdd>
        <section v-if="notes" class="note-page">
            <NoteList :notes="notes" @updateNote="saveNote"></NoteList>
        </section>
    </section>`,

  data() {
    return {
      notes: null,
    }
  },
  methods: {
    saveNote(note) {
      if (typeof note === 'string') {
        noteService
          .remove(note)
          .then(noteService.query)
          .then((notes) => (this.notes = notes))
          .catch(console.log)
      } else {
        noteService
          .save(note)
          .then(noteService.query)
          .then((notes) => (this.notes = notes))
      }
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
