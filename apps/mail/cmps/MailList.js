import { router } from "../../../routes.js";
import { mailService } from "../services/mail.service.js";
import MailPreview from "./MailPreview.js";

export default {
  props: ["mails"],
  template: `
  <ul class="main-list">
     <li @click="handleDetails(mail.id)" v-for="mail in mails" :key="mail.id" class="mail-list">
        <MailPreview :mail="mail" @remove="remove"/>
     </li>  
 </ul>
  `,

  data() {
    return {};
  },
  methods: {
    handleDetails(mailId) {
      if (!mailId) return;
      router.push(`/mail/${mailId}`);
    },
    remove(mailId) {
      this.$emit("remove", mailId);
    },
  },
  computed: {},
  created() {},
  components: {
    MailPreview,
  },
  emits: ["remove"],
};
