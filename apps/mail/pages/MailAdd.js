import { mailService } from "../services/mail.service.js";
import { eventBus } from "../../../services/event-bus.service.js";

export default {
  props: [],
  template: `
       <section>
         <button @click.stop="handleDraft">x</button>
         <form class="addMail-form" @submit.prevent="save">
              From: <input type="text" v-model="mail.from"><br/>
              To: <input type="text" v-model="mail.to"><br/>
              Subject: <input type="text" v-model="mail.subject"><br/>
              body: <input type="text" v-model="mail.body"><br/>
              <button>Save</button>
            </form>
        </section>
  `,

  data() {
    return {
      mail: mailService.getEmptyMail(),
      isDraft: false,
    };
  },
  methods: {
    save() {
      this.mail.sentAt = Date.now();
      this.$emit("create", JSON.parse(JSON.stringify(this.mail)));
    },
    handleDraft() {
      this.$emit("create", JSON.parse(JSON.stringify(this.mail)));
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ["create"],
};
