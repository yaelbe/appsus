export default {
  props: ['info'],
  template: `
    <section class="note-info">
    <div class="title" :style="{direction: direction}">{{info.txt}}</div>
    <div v-if="info.subtxt" class="subtitle" :style="{direction: direction}">{{info.subtxt}}</div>
        <ul :style="{direction: direction}">
            <li v-for="task in info.tasks" :key="task.txt">
             <input type="checkbox" :checked="task.doneAt" @change="isChecked(task.txt)" />
             <div :class="{done: task.doneAt}">{{task.txt}}</div>
            </li>
        </ul>
    </section>
    `,
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    direction() {
      var rtl_rx = /[\u0591-\u07FF]/
      return rtl_rx.test(this.info.txt) ? 'rtl' : 'ltr'
    },
  },
  watch: {
    info(newVal) {
      if (!newVal) return
      this.txt = newVal.txt
      this.tasks = newVal.tasks
      this.subtxt = newVal.subtxt
    },
  },
}
