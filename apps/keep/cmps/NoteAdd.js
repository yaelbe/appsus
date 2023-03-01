export default {
  props: [],
  template: `
    <form class="add-note">
      <input type="text" v-model="txt"  class="note-txt" placeholder="What's on your mind..." />
        <nav class="add-type">
            <button class="type-btn" @click.prevent="txtNote"><i class="fa-regular fa-comment"></i></button>
            <button class="type-btn" @click.prevent="imgNote"><i class="fa-regular fa-image"></i></button>
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
    imgNote() {},
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
