import { router } from "../../../routes.js";
import { mailService } from "../services/mail.service.js";
import mailPreview from "./MailPreview.js";

export default {
  props: ["mails"],
  template: `
  <ul class="main-list">
     <li @click="handleDetails(mail.id)" v-for="mail in mails" :key="mail.id">
        <mailPreview :mail="mail"/>
     </li>
 </ul>
  `,

  data() {
    return {};
  },
  methods: {
    handleDetails(mailID) {
      router.push(`/mail/${mailID}`);
    },
  },
  computed: {},
  created() {},
  components: {
    mailPreview,
  },
  emits: [],
};
