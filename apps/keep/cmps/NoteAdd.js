export default {
  props: [],
  template: `
    <form class="add-note">
      <input type="text" v-model="note.info.txt"  class="note-txt" placeholder="What's on your mind..." />
        <nav class="add-type">
            <button class="type-btn" @click.prevent="txtNote"><i class="fa-regular fa-comment"></i></button>
            <button class="choose-file type-btn"><i class="fa-regular fa-image"></i>
                <input name="img" type="file" accept="image/*" @change="uploadImage($event)" />
            </button>
            <button class="type-btn" @click.prevent="urlImgNote"><i class="fa-solid fa-globe"></i></button>
            <button class="type-btn" @click.prevent="videoNote"><i class="fa-brands fa-youtube"></i></button>
            <button class="type-btn" @click.prevent="ListNote"><i class="fa-solid fa-list"></i></button>
        </nav>
    </form>
    <form v-if="addLink" class="youtube-link add-video centerModal" @submit.prevent="addYoutube">
        <h3>Please enter Youtube link</h3>
        <div class="flex">
            <input type="url" v-model="note.info.url"  class="note-txt" placeholder="Link here" />
            <button type="submit"><i class="fa-solid fa-play"></i></button>
        </div>
    </form>
    <form v-if="showUrl" class="add-video centerModal" @submit.prevent="imgUrlNote">
        <h3>Please enter image link</h3>
        <div class="flex">
            <input type="url" v-model="note.info.url"  class="note-txt" placeholder="Link here" />
            <button type="submit"><i class="fa-solid fa-play"></i></button>
        </div>
    </form>
    <form v-if="showList" class="add-video centerModal" @submit.prevent="addList($event)">
       <header class="flex">
            <input type="text" v-model="note.info.label"  class="note-txt grow" placeholder="List Name" />
            <button @click.prevent="addTask" title="Add Task">+</button>
        </header>
            <div ref="tasks" class="flex flex-column ">
                <input type="text" class="grow" name="task" placeholder="Task" />
            </div>
            
            <button type="submit">Add Note<i class="fa-regular fa-note-sticky"></i></button>
        
    </form>
`,

  data() {
    return {
      note: this.emptyNote(),
      addLink: false,
      showList: false,
      showUrl: false,
    }
  },
  methods: {
    txtNote() {
      this.note.type = 'TxtNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
    },
    uploadImage(ev) {
      console.log(ev)
      const image = ev.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.note.type = 'ImgNote'
        this.note.info.url = e.target.result
        this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      }
    },
    urlImgNote() {
      this.showUrl = !this.showUrl
    },
    imgUrlNote() {
      this.urlImgNote()
      this.note.type = 'ImgNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      this.note = this.emptyNote()
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
      let url = this.note.info.url
      const idx = Math.max(url.lastIndexOf('/'), url.lastIndexOf('='))
      this.note.info.url = url.substring(idx + 1)
      console.log(this.note.info.url)
      this.note.type = 'VideoNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
      this.note = this.emptyNote()
    },
    addTask() {
      const el = this.$refs.tasks
      if (el.firstChild.value === '') return
      const html = `<input type="text" class="grow" name="task" placeholder="Task" />`
      el.insertAdjacentHTML('afterbegin', html)
      el.firstChild.focus()
    },
    addList(ev) {
      this.ListNote()
      const formData = new FormData(ev.target)
      const fromEntries = Object.fromEntries(formData)
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
      this.note = this.emptyNote()
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ['addNote'],
}
