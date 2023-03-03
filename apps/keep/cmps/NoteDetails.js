import { noteService } from '../services/note.service.js'

export default {
  inheritAttrs: false,
  props: ['note'],
  template: `
  <div v-if="info" class="modal-overlay"  @click="toggleModal"></div>
    <section ref="modal" class="centerModal big hidden" :style="{width: width , backgroundColor: note.style.backgroundColor }">
        <form ref="details" class="details">
            <input type="text" name="tx"  v-model="editInfo.txt">
            <div  class="divEdit" contentEditable="true">SubText</div>

            <section v-if="info.tasks" class="task-list">
                <div class="title">{{info.txt}}</div>
                <ul>
                    <li v-for="task in info.tasks" :key="task.txt">
                    <input type="checkbox" :checked="task.doneAt" @change="isChecked(task.txt)" />
                    <p><span :class="{done: task.doneAt}">{{task.txt}}</span></p>
                    </li>
                </ul>
                <button class="type-btn margin">＋Task</button>
            </section>
        </form>
        <section class="options show">
            <button class="options-btn" @click.stop="duplicate" title="Make a copy"><i class="fa-solid fa-copy"></i></button>
            <button class="options-btn" @click.stop="remove" title="Delete"><i class="fa-solid fa-trash"></i></button>
            <button class="options-btn" @click.stop="openColorPicker($event)" title="Change color"><i class="fa-solid fa-palette"></i></button>
            <button class="options-btn" @click.stop="pin" title="Pin"><i class="fa-solid fa-thumbtack"></i></button>
        </section>
    </section>
  `,

  data() {
    return {
      editInfo: this.note.info,
      width: 10,
      info: this.note.info,
    }
  },
  methods: {
    duplicate() {},
    remove() {},
    openColorPicker(ev) {},
    pin() {},
    toggleModal() {
      this.$emit('cancel')
    },
  },
  computed: {},
  created() {},
  mounted() {
    if (!this.info.imgUrl || this.info.imgUrl.length === 0) return
    const getMeta = async (url) => {
      const img = new Image()
      img.src = url
      await img.decode()
      return img
    }
    getMeta(this.info.imgUrl).then((img) => {
      const div = this.$refs.details
      let width = Math.min(div.offsetWidth, img.width)
      width = Math.max(width, 300)
      const height = (img.height / img.width) * width
      let html = `<div class="imgDiv" style="background-image: url(&quot;${this.info.imgUrl}&quot); height: ${height}px; width: ${width}px"></div>`
      div.insertAdjacentHTML('afterbegin', html)
      this.width = width + 'px;'
      this.$refs.modal.style.width = width + 'px'
      this.$refs.modal.classList.remove('.hidden')
    })
  },
  components: {},
  emits: ['cancel'],
}
