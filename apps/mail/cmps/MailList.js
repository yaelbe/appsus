import { mailService } from "../services/mail.service.js";
import mailPreview from "./MailPreview.js";

export default {
  props: ["mails"],
  template: `
  <ul class="main-list">
     <li v-for="mail in mails" :key="mail.id">
        <mailPreview :mail="mail"/>
     </li>
 </ul>
  `,

  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  components: {
    mailPreview,
  },
  emits: [],
};
