import { noteService } from '../services/note.service.js'
import AudioNote from './types/AudioNote.js'
import ImgNote from './types/ImgNote.js'
import ListNote from './types/ListNote.js'
import TxtNote from './types/TxtNote.js'
import VideoNote from './types/VideoNote.js'

export default {
  props: ['note'],
  template: `
    <article v-if="note" class="note-preview" :style="background">
        <component :is="note.type" :info="note.info"/>
    </article>
    `,
  methods: {},
  computed: {
    background() {
      return { backgroundColor: this.note.style.backgroundColor }
    },
  },
  components: {
    AudioNote,
    ImgNote,
    ListNote,
    TxtNote,
    VideoNote,
    AudioNote,
  },
}
