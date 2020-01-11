<template>
  <li class="clearfix">
    <div class="message-data align-right">
      <span class="message-data-time">10:14 AM, Today</span> &nbsp; &nbsp;
      <span class="message-data-name">Olia</span>
      <i class="fa fa-circle me"></i>
    </div>
    <div class="message other-message float-right">
      Well I am not sure. 
    </div>
  </li>
</template>
<style scoped lang="scss">
.message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  width: 90%;
  position: relative;

  &:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #86bb71;
    border-width: 10px;
    margin-left: -10px;
  }
}
.other-message {
  background: #94c2ed;

  &:after {
    border-bottom-color: #94c2ed;
    left: 93%;
  }
}
</style>
<script>
export default {
  props: ["chat"]
};
</script>
