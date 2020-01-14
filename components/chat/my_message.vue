<template>
  <div>
    <div class="message-data">
      <span class="message-data-name"
        > <font-awesome-icon
        :icon="['fas', 'circle']"
        style="color:#86BB71; font-size:8px ;margin-right: 3px;font-size: 10px"
        class="me"
      /> Vincent</span
      >
      <span class="message-data-time">10:12 AM, Today</span>
    </div>
    <div class="message my-message">
      {{chat}}
    </div>
  </div>
</template>
<style scoped lang="scss">
$green: #86BB71;
$blue: #94C2ED;
$orange: #E38968;
$gray: #92959E;
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

.message-data-time {
  color: lighten($gray, 8%);
  padding-left: 6px;
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
    border-bottom-color: $green;
    border-width: 10px;
    margin-left: -10px;
  }
}

.my-message {
  background: $green;
}
.other-message {
  background: $blue;

  &:after {
    border-bottom-color: $blue;
    left: 93%;
  }
}
</style>
<script>
export default {
  props: ["chat"]
};
</script>
