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

        <section class="options">
            <button class="options-btn" @click.prevent="duplicate" stitle="Make a copy"><i class="fa-solid fa-copy"></i></button>
            <button class="options-btn" @click="remove" title="Delete"><i class="fa-solid fa-trash"></i></button>
            <button class="options-btn" class="color" @click="colorPalletOpen = !colorPalletOpen" title="Change color"><i class="fa-solid fa-palette"></i></button>
            <button class="options-btn" @click.prevent="pin" title="Pin"><i class="fa-solid fa-thumbtack"></i></button>
            <button class="options-btn" @click="edit" title="Edit note"><i class="fa-solid fa-pencil"></i></button> 
        </section>

    </article>
    `,
  data() {
    return {
      colorPalletOpen: false,
    }
  },
  methods: {
    duplicate() {},
    remove() {},
    pin() {},
    edit() {},
  },
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
