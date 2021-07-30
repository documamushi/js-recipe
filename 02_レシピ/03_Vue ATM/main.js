new Vue({
  el: "#v-model",
  data: {
    nyuryokugaku: "",
    zandaka: 0,
    torihiki: [],
    // now: new Date(),
    // torihikinaiyou1: [new Date(), "入金", Number(this.nyuryokugaku)],
    // torihikinaiyou2: [new Date(), "出金", Number(this.nyuryokugaku)],
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      this.torihiki.push(new Date())
      this.torihiki.push("入金")
      this.torihiki.push(this.nyuryokugaku)
    },

    syukkin: function() {
      this.zandaka -= Number(this.nyuryokugaku)
      this.torihiki.push(new Date())
      this.torihiki.push("入金")
      this.torihiki.push(this.nyuryokugaku)
    },
  },
})
