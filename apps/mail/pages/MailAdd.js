import { mailService } from "../services/mail.service.js";
import { eventBus } from "../../../services/event-bus.service.js";

export default {
  props: [],
  template: `
       <section>
            <form @submit.prevent="save">
              From: <input type="text" v-model="mail.from">
              TO: <input type="text" v-model="mail.to">
              Subject: <input type="text" v-model="mail.subject">
              body: <input type="text" v-model="mail.body">
              <button>Save</button>
            </form>
        </section>
  `,

  data() {
    return {
      mail: mailService.getEmptyMail(),
    };
  },
  methods: {
    save() {
      this.mail.sentAt = Date.now();
      this.$emit("create", JSON.parse(JSON.stringify(this.mail)));
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: [],
};
