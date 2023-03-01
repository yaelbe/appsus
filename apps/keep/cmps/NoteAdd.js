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
            <button class="type-btn" @click.prevent="videoNode"><i class="fa-brands fa-youtube"></i></button>
            <button class="type-btn" @click.prevent="ListNode"><i class="fa-solid fa-list"></i></button>
        </nav>
    </form>
    <form v-if="addLink" class="youtube-link add-video modal" @submit.prevent="addYoutube">
        <h3>Please enter Youtube link</h3>
        <div class="flex">
            <input type="url" v-model="note.info.url"  class="note-txt" placeholder="Link here" />
            <button type="submit"><i class="fa-solid fa-play"></i></button>
        </div>
    </form>
`,

  data() {
    return {
      note: this.emptyNote(),
      addLink: false,
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
    videoNode() {
      this.addLink = !this.addLink
    },
    ListNode() {},
    emptyNote() {
      return {
        info: {},
        isPinned: false,
        style: { backgroundColor: '#fff' },
      }
    },
    add() {},
    addYoutube() {
      this.videoNode()
      let url = this.note.info.url
      const idx = Math.max(url.lastIndexOf('/'), url.lastIndexOf('='))
      this.note.info.url = url.substring(idx + 1)
      console.log(this.note.info.url)
      this.note.type = 'VideoNote'
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ['addNote'],
}
