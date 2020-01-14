<template>
  <div class="clearfix">
    <div class="message-data align-right ">
      <span class="message-data-time">10:14 AM, Today</span> &nbsp; &nbsp;
      <span class="message-data-name">Olia</span>
      <font-awesome-icon
        :icon="['fas', 'circle']"
        style="color:#94c2ed; font-size:8px ;margin-right: 3px;font-size: 10px"
        class="me"
      />
    </div>
    <div class="message other-message float-right">
      {{chat}}
    </div>
  </div>
</template>
<style scoped lang="scss">
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
  background: #e5e5fe;
}
.message-data {
  margin-bottom: 15px;
}
.align-right {
  text-align: right;
}
.message-data-time {
  color: lighten(#92959e, 8%);
  padding-left: 6px;
}

.me {
  margin-right: 3px;
  font-size: 10px;
  color: #94c2ed;
}
.message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  width: 70%;
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
