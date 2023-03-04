import { noteService } from '../services/note.service.js'
import AudioNote from './types/AudioNote.js'
import ImgNote from './types/ImgNote.js'
import ListNote from './types/ListNote.js'
import TxtNote from './types/TxtNote.js'
import VideoNote from './types/VideoNote.js'

import ColorPicker from './ColorPicker.js'
import NoteDetails from './NoteDetails.js'

export default {
  props: ['note', 'colorOwner'],
  template: `
    <article v-if="note" class="note-preview" :style="background" ref="noteCard">
        <component :is="note.type" :info="note.info" @click="toggleDetails"/>

        <section class="options">
            <button class="options-btn" @click.prevent="share" stitle="Share to mail"><i class="fa-solid fa-copy"></i></button>
            <button class="options-btn" @click.prevent="remove" title="Delete"><i class="fa-solid fa-trash"></i></button>
            <button class="options-btn" @click.prevent="openColorPicker($event)" title="Change color" :key="Date.now()"><i class="fa-solid fa-palette"></i></button>
            <button class="options-btn" @click.prevent="pin" title="Pin"><i class="fa-solid fa-thumbtack"></i></button>
        </section>

        <ColorPicker v-if="colorPalletOpen" @color="updateColor" :style="{width: cardWidth}" :key=Date.now()></ColorPicker>
        <NoteDetails v-if="showDetails" :note="note" @save="edit"></NoteDetails>
        


    </article>
    `,
  data() {
    return {
      colorPalletOpen: false,
      cardWidth: null,
      showDetails: false,
    }
  },
  methods: {
    share() {
      const noteJson = JSON.stringify(this.note)
      this.$router.push({ name: 'mail', query: { noteJson } })
    },
    remove() {
      this.$emit('updateNote', this.note.id)
    },
    pin() {
      this.note.isPinned = !this.note.isPinned
      this.$emit('updateNote', JSON.parse(JSON.stringify(this.note)))
    },
    edit(note) {
      this.showDetails = false
      this.updateNote(note)
      this.$emit('updateNote', JSON.parse(JSON.stringify(this.note)))
    },
    updateColor(color) {
      this.colorPalletOpen = !this.colorPalletOpen
      if (color === 'close') return
      this.note.style.backgroundColor = color
      this.$emit('updateNote', JSON.parse(JSON.stringify(this.note)))
    },
    openColorPicker(ev) {
      const width = this.$refs.noteCard.offsetWidth
      this.cardWidth = width + 'px'
      this.colorPalletOpen = !this.colorPalletOpen
      console.log('openColorPicker', this.note.id)
      this.$emit('colorOwnerChanged', this.note.id)
    },

    toggleDetails() {
      this.showDetails = !this.showDetails
    },

    updateNote(note) {
      if (this.note.info && note) {
        this.note.info = { ...note.info }
      }
      // this.note.style.backgroundColor = note.style.backgroundColor
    },
  },
  computed: {
    background() {
      if (this.note.style) {
        return { backgroundColor: this.note.style.backgroundColor }
      }
    },
  },

  watch: {
    colorOwner(newVal) {
      if (this.note.id !== newVal) {
        this.colorPalletOpen = false
      }
    },
  },
  components: {
    AudioNote,
    ImgNote,
    ListNote,
    TxtNote,
    VideoNote,
    AudioNote,
    ColorPicker,
    NoteDetails,
  },
}
