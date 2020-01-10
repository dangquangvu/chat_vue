<template style="background: green">
    <h1 >chat area</h1>
</template>

<style></style>

<script>
export default {
  name : 'chat-area',
  props: ["msg"],
  data: function() {
      return {
          localScore : 'aa',
          //this.msg,
          flag :true
      }
  },
  methods: {
    changeScore(flag) {
      this.localScore = "mmmmmmmm";
      this.flag = !this.flag;
      this.$emit('updateScore',this.localScore);
      this.$emit('reRender');
    },
    updateScore() {
      this.localScore = 'aaaaaaaa';
      this.flag = !this.flag;
      this.$emit('updateScore',this.localScore);
      this.$emit('reRender');
    },
    clickChange (){
      if(this.flag == true){
        this.changeScore();
      }else {
        this.updateScore()
      }
    }

  }
};
</script>
