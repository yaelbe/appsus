import ColorPicker from './ColorPicker.js'
import NoteDetails from './NoteDetails.js'
export default {
  props: [],
  template: `
    <div v-if="addLink || showList || showUrl"  class="modal-overlay"  @click="cancel"></div>

    <form  ref="mainContinuer" class="add-note-continuer" :style="{backgroundColor: bgColor}">
      <div class="top-input add-note">
        <input type="text" ref="mainInput" dir=auto v-model="note.info.txt"  @focus="showExtendedInput = true"  class="note-txt title" placeholder="What's on your mind..." />
          <nav class="add-type flex">
              <button class="type-btn" @click.prevent="txtNote" title="Just a text note"><i class="fa-regular fa-comment"></i></button>
              <button class="choose-file type-btn" title="Upload image"><i class="fa-regular fa-image"></i>
                  <input name="img" type="file" accept="image/*" @change="uploadImage($event)" />
              </button>
              <button class="type-btn" @click.prevent="urlImgNote" title="Use image link"><i class="fa-solid fa-globe"></i></button>
              <button class="type-btn" @click.prevent="videoNote" title="Use YouTube link"><i class="fa-brands fa-youtube"></i></button>
              <button class="type-btn" @click.prevent="ListNote" title="List note"><i class="fa-solid fa-list"></i></button>
          </nav>
        </div>

        <div v-if="showExtendedInput" class="bottom-input add-note flex flex-column">
          <input type="text" dir=auto v-model="note.info.subtxt"  class="note-txt sub-txt" placeholder="What's on your mind..." />
          <section class="flex space-between">
            <section class="options show border">
                <button class="options-btn" @click.prevent="colorPalletOpen = !colorPalletOpen" title="Change color"><i class="fa-solid fa-palette"></i></button>
                <button class="options-btn" @click.prevent="pin" title="Pin"><i class="fa-solid fa-thumbtack"></i></button>
                <ColorPicker v-if="colorPalletOpen" @color="updateColor" @onfocusout="colorPalletOpen=false" :style="{width: cardWidth}"></ColorPicker>
            </section>
            <button @click.prevent="reset" class="type-btn create-note">Cancel</button>
            <button @click.prevent="txtNote" class="type-btn create-note">Create</button>
           
          </section>
        </div>
    </form>
    <form v-if="addLink" class="youtube-link add-video centerModal" @submit.prevent="addYoutube">
        <h3 class="appThemTitle">Please enter Youtube link</h3>
        <div class="flex">
            <input type="url" v-model="note.info.videoUrl"  class="note-txt" placeholder="Link here" />
            <button type="submit" class="appThemBtn"><i class="fa-solid fa-play"></i></button>
        </div>
    </form>
    <form v-if="showUrl" class="add-video centerModal" @submit.prevent="imgUrlNote">
        <h3 class="appThemTitle">Please enter image link</h3>
        <div class="flex">
            <input type="url" v-model="note.info.imgUrl"  class="note-txt" placeholder="Link here" />
            <button type="submit" class="appThemBtn"><i class="fa-solid fa-play"></i></button>
        </div>
    </form>
    <form v-if="showList" class="add-video centerModal" @submit.prevent="addList($event)">
       <header class="flex">
            <input type="text" dir=auto v-model="note.info.txt"  class="note-txt grow" placeholder="List Name" />
            <button @click.prevent="addTask" class="type-btn" title="Add Task">+</button>
        </header>
            <div ref="tasks" class="flex flex-column ">
                <input type="text" dir=auto class="grow" name="task" placeholder="Task" />
            </div>
            
            <button type="submit" class="type-btn">Add Note<i class="fa-regular fa-note-sticky"></i></button>
    </form>
    <NoteDetails v-if="showDetails" :note="note" @save="save"></NoteDetails>

`,

  data() {
    return {
      note: this.emptyNote(),
      addLink: false,
      showList: false,
      showUrl: false,
      showExtendedInput: false,
      bgColor: '#fffff',
      colorPalletOpen: false,
      showDetails: false,
    }
  },
  methods: {
    cancel() {
      this.addLink = false
      this.showList = false
      this.showUrl = false
    },
    reset() {
      this.note = this.emptyNote()
      this.bgColor = 'white'
      this.showExtendedInput = false
      this.$refs.mainInput.placeholder = "What's on your mind..."
      this.showDetails = false
    },
    txtNote() {
      this.note.type = 'TxtNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      this.reset()
    },
    uploadImage(ev) {
      console.log(ev)
      const image = ev.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.note.type = 'ImgNote'
        this.note.info.imgUrl = e.target.result
        this.showDetails = true
        // this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
        // this.reset()
      }
    },
    urlImgNote() {
      this.showUrl = !this.showUrl
    },
    imgUrlNote() {
      this.urlImgNote()
      this.note.type = 'ImgNote'
      this.showDetails = true
      // this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      // this.reset()
    },
    videoNote() {
      this.addLink = !this.addLink
    },
    ListNote() {
      this.showList = !this.showList
    },
    emptyNote() {
      return {
        info: {},
        isPinned: false,
        style: { backgroundColor: '#fff' },
      }
    },
    add() {},
    addYoutube() {
      this.videoNote()
      let url = this.note.info.videoUrl
      const idx = Math.max(url.lastIndexOf('/'), url.lastIndexOf('='))
      this.note.info.videoUrl = 'https://www.youtube-nocookie.com/embed/' + url.substring(idx + 1)
      this.note.type = 'VideoNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      this.reset()
    },
    addTask() {
      const el = this.$refs.tasks
      if (el.firstChild.value === '') return
      const html = `<input type="text" dir=auto class="grow" name="task" placeholder="Task" />`
      el.insertAdjacentHTML('afterbegin', html)
      el.firstChild.focus()
    },
    addList(ev) {
      this.ListNote()
      const formData = new FormData(ev.target)
      const tasks = []
      for (const pair of formData.entries()) {
        //${pair[1] value
        const value = pair[1]
        if (value !== '') {
          tasks.push({ txt: pair[1], doneAt: null })
        }
      }
      this.note.info.tasks = tasks
      this.note.type = 'ListNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      this.reset()
    },

    mainTextFocus() {
      this.$refs.mainInput.placeholder = 'Title'
      this.showExtendedInput = !this.showExtendedInput
    },

    openColorPicker(ev) {
      this.colorPalletOpen = !this.colorPalletOpen
    },
    updateColor(color) {
      if (color === 'close') {
        this.colorPalletOpen = false
        return
      }
      if (!this.note.style) {
        this.note.style = { backgroundColor: color }
      } else {
        this.note.style.backgroundColor = color
      }
      // this.$refs.mainContinuer.style.backgroundColor = color
      this.bgColor = color
      this.colorPalletOpen = false
    },

    pin() {
      if (typeof this.note.isPinned === undefined) {
        this.note.isPinned = true
      } else {
        this.note.isPinned = !this.note.isPinned
      }
    },
    save(note) {
      if (typeof note === undefined) {
        this.reset()
        return
      }
      this.$emit('addNote', JSON.parse(JSON.stringify(note)))
      this.reset()
    },
  },
  computed: {
    cardWidth() {
      return this.$refs.mainContinuer.offsetWidth + 'px'
    },
  },
  created() {},
  components: { ColorPicker, NoteDetails },
  emits: ['addNote'],
}
