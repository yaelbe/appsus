export default {
  template: `
        <section class="mail-filter">
            <input 
                v-model="filterBy.subject"
                @input="filter" 
                placeholder="Search"
                type="text" />
        </section>
    `,
  data() {
    return {
      filterBy: { subject: "" },
    };
  },
  methods: {
    filter() {
      console.log(this.filterBy);
      this.$emit("filter", this.filterBy);
    },
  },
  emits: ["filter"],
};
