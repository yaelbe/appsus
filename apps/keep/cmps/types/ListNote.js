export default {
  props: ['info'],
  template: `
    <section class="note-info">
        <h3>{{info.label}}</h3>
        <ul>
            <li v-for="task in info.tasks" :key="task.txt">
             <input type="checkbox" :checked="task.doneAt" @change="isChecked(task.txt)" />
             <p><span :class="{done: task.doneAt}">{{task.txt}}</span></p>
            </li>
        </ul>
    </section>
    `,
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
