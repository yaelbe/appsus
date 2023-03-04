import { noteService } from '../services/note.service.js'

export default {
  props: ['note'],
  template: `
  <div v-if="updateNote.info" class="modal-overlay"  @click="cancel"></div>
    <section ref="modal" class="centerModal big hidden" :style="{width: width , backgroundColor: updateNote.style.backgroundColor }">
        <form ref="details" class="details">
        <div v-if="note.info.videoUrl" class="iframe-continuer">
            <iframe :src=note.info.videoUrl></iframe>
        </div>
            <input type="text" dir=auto name="txt"  v-model="updateNote.info.txt">
            <div  class="divEdit" dir=auto contentEditable="true" @input="subtext" :style="{direction: direction}">{{updateNote.info.subtxt}}</div>

            <section v-if="updateNote.info.tasks" class="task-list" :style="{direction: direction}">
                <div class="title">{{updateNote.info.txt}}</div>
                <ul>
                    <li v-for="task in updateNote.info.tasks" :key="task.txt">
                    <input type="checkbox" :checked="task.doneAt" @change="isChecked(task.txt)" />
                    <p><span :class="{done: task.doneAt}">{{task.txt}}</span></p>
                    </li>
                </ul>
                <button class="type-btn margin">＋Task</button>
            </section>
        </form>
        <div class="details-footer flex">
            <section class="options show">
                <!-- <button class="options-btn" @click.stop="remove" title="Delete"><i class="fa-solid fa-trash"></i></button> -->
                <button class="options-btn" @click.stop="openColorPicker($event)" title="Change color"><i class="fa-solid fa-palette"></i></button>
                <!-- <button class="options-btn" @click.stop="pin" title="Pin"><i class="fa-solid fa-thumbtack"></i></button> -->
            </section>
            <button @click.prevent="cancel" class="type-btn">Cancel</button>
            <button @click.prevent="save" class="type-btn">Create</button>
        </div>
    </section>
  `,

  data() {
    return {
      width: 10,
      updateNote: JSON.parse(JSON.stringify(this.note)),
    }
  },
  methods: {
    duplicate() {},
    remove() {},
    openColorPicker(ev) {},
    pin() {},
  },
  computed: {
    direction() {
      var rtl_rx = /[\u0591-\u07FF]/
      return rtl_rx.test(this.note.info.txt) ? 'rtl' : 'ltr'
    },
  },
  created() {},
  mounted() {
    if (!this.updateNote.info.imgUrl || this.updateNote.info.imgUrl.length === 0) return
    const getMeta = async (url) => {
      const img = new Image()
      img.src = url
      await img.decode()
      return img
    }
    getMeta(this.updateNote.info.imgUrl).then((img) => {
      const div = this.$refs.details
      let width = Math.min(div.offsetWidth, img.width)
      width = Math.max(width, 300)
      const height = (img.height / img.width) * width
      let html = `<div class="imgDiv" style="background-image: url(&quot;${this.updateNote.info.imgUrl}&quot); height: ${height}px; width: ${width}px"></div>`
      div.insertAdjacentHTML('afterbegin', html)
      this.width = width + 'px;'
      this.$refs.modal.style.width = width + 'px'
      this.$refs.modal.classList.remove('.hidden')
    })
  },
  methods: {
    save() {
      this.$emit('save', JSON.parse(JSON.stringify(this.updateNote)))
    },
    cancel() {
      this.$emit('save')
    },
    subtext(e) {
      this.updateNote.info.subtxt = e.target.innerText
    },
  },
  components: {},
  emits: ['save'],
}
