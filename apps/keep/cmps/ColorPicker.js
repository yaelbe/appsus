export default {
  props: [],
  template: `
   <section class="colors">
            <button class="clr1 btn" :class="{checked: isActive === '#f28b82'}" @click="choose('#f28b82')"></button>
            <button class="clr2 btn" :class="{checked: isActive === '#fff475'}" @click="choose('#fff475')"></button>
            <button class="clr3 btn" :class="{checked: isActive === '#fbbc04'}" @click="choose('#fbbc04')"></button>
            <button class="clr4 btn" :class="{checked: isActive === '#ccff90'}" @click="choose('#ccff90')"></button>
            <button class="clr5 btn" :class="{checked: isActive === '#a7ffeb'}" @click="choose('#a7ffeb')"></button>
            <button class="clr6 btn" :class="{checked: isActive === '#cbf0f8'}" @click="choose('#cbf0f8')"></button>
            <button class="clr7 btn" :class="{checked: isActive === '#aecbfa'}" @click="choose('#aecbfa')"></button>
            <button class="clr8 btn" :class="{checked: isActive === '#d7aefb'}" @click="choose('#d7aefb')"></button>
            <button class="clr9 btn" :class="{checked: isActive === '#fdcfe8'}" @click="choose('#fdcfe8')"></button>
            <button class="clr10 btn" :class="{checked: isActive === '#e6c9a8'}" @click="choose('#e6c9a8')"></button>
            <button class="clr11 btn" :class="{checked: isActive === '#e8eaed'}" @click="choose('#e8eaed')"></button>
            <button class="clr12 btn" :class="{checked: isActive === '#fff'}" @click="choose('#fff')"></button>
        </section>
    `,

  data() {
    return {}
  },
  methods: {
    choose(color) {
      this.$emit('color', color)
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ['color'],
}
