import { svgService } from "../../../services/svg.service.js";

export default {
  props: [],
  template: `
  <section class="main-sidebar">
    <ul class="mail-sidebar">
      <li @click="inbox" class="sidebar-li"><span v-html="getSvg('allInbox')"></span>Inbox</li>
      <li @click="star" class="sidebar-li"><span v-html="getSvg('starFill2')"></span>Stared</li>
      <li class="sidebar-li"><span v-html="getSvg('sent2')"></span>Sent</li>
      <li class="sidebar-li"><span v-html="getSvg('draft')"></span>Draft</li>
      <li class="sidebar-li"><span v-html="getSvg('trash')"></span>Trash</li>
    </ul>
  </section>
  `,

  data() {
    return {
      filterBy: {},
    };
  },
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName);
    },
    inbox() {
      this.filterBy.subject = "";
      this.$emit("filter", this.filterBy);
    },
    star() {
      this.filterBy.is;
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ["filter"],
};
