import AudioNote from './types/AudioNote.js'
import ImgNote from './types/ImgNote.js'
import ListNote from './types/ListNote.js'
import TxtNote from './types/TxtNote.js'
import VideoNote from './types/VideoNote.js'

export default {
  props: ['note'],
  template: `
    <article class="note-preview">
        <component :is="note.type" :info="note.info"/>
    </article>
    `,
  methods: {},
  computed: {},
  components: {
    AudioNote,
    ImgNote,
    ListNote,
    TxtNote,
    VideoNote,
    AudioNote,
  },
}
