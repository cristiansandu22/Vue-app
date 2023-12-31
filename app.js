const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    }
  },

  methods: {
    resetValues() {
      this.perspective = 100;
      this.rotateX     = 0;
      this.rotateY     = 0;
      this.rotateZ     = 0;
    },

    // calculate() {
    //   const zAxis = Number(this.rotateZ)
    //   const yAxis = Number(this.rotateY)
    //   return this.rotateX = zAxis + yAxis
    // },

    //copy to clipboard
    async copy() {
      let text = `transform: ${this.box.transform}`;
      await navigator.clipboard.writeText(text);

      alert("CSS copied to clipboard");
    }


  },

  computed: {
    box() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `
      }
    },
  }
}).mount('#app');