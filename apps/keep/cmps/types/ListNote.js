export default {
  props: ['info'],
  template: `
    <section class="note-info">
        <h3>{{info.label}}</h3>
        <ul>
            <li v-for="task in info.tasks" :key="task.txt">
                <pre>{{task}}</pre>
            </li>
        </ul>
    </section>
    `,
  created() {
    console.log('create List Note')
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
