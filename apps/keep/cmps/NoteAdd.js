export default {
  props: [],
  template: `
    <form class="add-note">
      <input type="text" v-model="txt"  class="note-txt" placeholder="What's on your mind..." />
        <nav class="add-type">
            <button class="type-btn" @click.prevent="txtNote"><i class="fa-regular fa-comment"></i></button>
            <button class="choose-file type-btn"><i class="fa-regular fa-image"></i>
                <input name="img" type="file" accept="image/*" @change="uploadImage($event)" />
            </button>
            <button class="type-btn" @click.prevent="videoNode"><i class="fa-brands fa-youtube"></i></button>
            <button class="type-btn" @click.prevent="ListNode"><i class="fa-solid fa-list"></i></button>
        </nav>
    </form>
`,

  data() {
    return {
      txt: '',
      note: this.emptyNote(),
    }
  },
  methods: {
    txtNote() {
      this.note.type = 'TxtNote'
      this.note.info.txt = this.txt
      this.$emit('addNote', JSON.parse(JSON.stringify(this.note)))
    },
    imgNote(ev) {
      console.log(ev)

      const image = ev.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.newNote.info.url = e.target.result
      }
    },
    videoNode() {},
    ListNode() {},
    emptyNote() {
      return {
        info: {},
        isPinned: false,
        style: { backgroundColor: '#fff' },
      }
    },
    add() {},
  },
  computed: {},
  created() {},
  components: {},
  emits: ['addNote'],
}
