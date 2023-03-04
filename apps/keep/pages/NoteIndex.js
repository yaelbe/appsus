import { noteService } from "./../services/note.service.js";
import NoteList from "../cmps/NoteList.js";
import NoteAdd from "../cmps/NoteAdd.js";

export default {
  props: [],
  template: `
    <section class="full-height" v-if="notes">
        <NoteAdd @addNote="saveNote"></NoteAdd>
        <section v-if="notes" class="note-page">
            <NoteList :notes="pinned" @updateNote="saveNote"></NoteList>
            <NoteList class="others" :notes="others" @updateNote="saveNote"></NoteList>
        </section>
    </section>`,

  data() {
    return {
      notes: null,
    };
  },
  methods: {
    saveNote(note) {
      if (typeof note === "string") {
      if (typeof note === 'string') {
        console.log('Delete')

        noteService
          .remove(note)
          .then(noteService.query)
          .then((notes) => (this.notes = notes))
          .catch(console.log);
      } else {
        noteService
          .save(note)
          .then(noteService.query)
          .then((notes) => (this.notes = notes));
          .then((notes) => {
            this.notes = notes
          })
          .catch((err) => {
            console.log('error saving ', err)
          })
      }
    },
  },
  computed: {
    pinned() {
      return this.notes.filter((note) => note.isPinned);
    },
    others() {
      return this.notes.filter((note) => !note.isPinned);
    },
  },
  created() {
    noteService.query().then((notes) => (this.notes = notes));
    console.log("route", this.$route.query.mailJson);
  },

  components: {
    NoteList,
    NoteAdd,
  },
};
