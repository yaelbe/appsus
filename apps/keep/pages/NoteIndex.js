import { noteService } from './../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'

export default {
  props: [],
  template: `
        <h1>Notes</h1>
        <NoteAdd @addNote="createNote"></NoteAdd>
        <section v-if="notes" class="note-page">
            <NoteList :notes="notes"></NoteList>
        </section>`,

  data() {
    return {
      notes: null,
    }
  },
  methods: {
    createNote(info) {
      console.log(info)
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
