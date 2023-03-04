import { svgService } from "../../../services/svg.service.js";
import { utilService } from "../../../services/util.service.js";
import { mailService } from "../services/mail.service.js";

export default {
  props: ["mail"],
  template: `

        <article class="mail-preview" :class="handleOpen">
            <button class="svg-preview" @click.stop="toggleStar" title="important" v-html="getSvg(handleStar)"></button>
            <h3>{{mail.subject}}</h3>
            <p>{{mail.body}}</p>
            <h6><span class="preview-time">{{handleTime}}</span></h6>
          </article>
          <section class ="options-mail">
            <button class="option-mail-btn" @click.stop="remove" title="Delete" v-html="getSvg('trashFill')"></button>
            <button class="option-mail-btn" @click.stop="toggleRead" title="mark as read" v-html="getSvg('sent')"></button>
            <button class="option-mail-btn" @click.stop="share" title="make to note" v-html="getSvg('share')"></button>
          </section>
          <article>
          <button v-if="handleDraft" @click.stop ="send" class="option-mail-btn" >Send</button>
        </article>
    `,
  created() {},
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName);
    },
    remove() {
      this.$emit("remove", this.mail);
    },
    toggleRead() {
      console.log("hello2");
      this.mail.isRead = !this.mail.isRead;
      this.$emit("toggle", JSON.parse(JSON.stringify(this.mail)));
    },
    share() {
      const mailJson = JSON.stringify(this.mail);
      this.$router.push({
        name: "keep",
        query: { mailJson },
      });
    },
    toggleStar() {
      this.mail.isStar = !this.mail.isStar;
    },
    send() {
      this.mail.sentAt = Date.now();
      mailService.update(this.mail);
    },
  },
  computed: {
    handleTime() {
      return utilService.formatTime(this.mail.sentAt);
    },
    handleOpen() {
      if (!this.mail.isRead) return "openEmail";
      return "";
    },
    handleStar() {
      if (this.mail.isStar === true) {
        return "starFill";
      }
      return "star";
    },
    handleDraft() {
      return !this.mail.sentAt;
    },
  },
  mounted() {},
  components: {},
  emits: ["remove", "toggle"],
};
