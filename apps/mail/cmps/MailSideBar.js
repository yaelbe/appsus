import { svgService } from "../../../services/svg.service.js";

export default {
  props: [],
  template: `
  <section class="main-sidebar">
    <ul class="mail-sidebar">
      <li @click="mainInbox" class="sidebar-li"><span v-html="getSvg('allInbox')"></span>Inbox</li>
      <li @click="handleStar" class="sidebar-li"><span v-html="getSvg('starFill2')"></span>Stared</li>
      <li @click="handleSent" class="sidebar-li"><span v-html="getSvg('sent2')"></span>Sent</li>
      <li class="sidebar-li"><span v-html="getSvg('draft')"></span>Draft</li>
      <li class="sidebar-li"><span v-html="getSvg('trash')"></span>Trash</li>
    </ul>
  </section>
  `,

  data() {
    return {};
  },
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName);
    },
    mainInbox() {
      this.$emit("filter", "inbox");
    },
    handleStar() {
      this.$emit("filter", "star");
    },
    handleSent() {
      this.$emit("filter", "sent");
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ["filter"],
};
