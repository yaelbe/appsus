import { mailService } from "../services/mail.service.js";
import { eventBus } from "../../../services/event-bus.service.js";

export default {
  props: [],
  template: `
       <section>
         <form class="addMail-form" @submit.prevent="save">
           <button class="mailForm-btn" @click.stop="handleDraft">x</button>
           <label for="text-from">From:</label>
             <input id="text-from" type="text" v-model="mail.from">
           <label for="text-to">To:</label>
             <input id="text-to" type="text" v-model="mail.to"><br/>
           <label for="text-subject">Subject:</label>
             <input id="mail-subject" type="text" v-model="mail.subject"><br/>
           <label for="text-body">Body:</label>
              <input id="text-body" type="text" v-model="mail.body"><br/>
              <button class="mailFormSave-btn">Save</button>
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
