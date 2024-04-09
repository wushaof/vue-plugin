<template>
  <div class="common-box">
    <div class="common-box-header">
      <div style="font-size: 20px; margin-left: 30px; font-weight: 600;">{{ title }}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
module.exports = {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
}
</script>

<style>
.common-box {
  width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  gap: 10px;
  overflow: hidden;
  background-color: #0d2a67;
}
.common-box .common-box-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #0d2a67 url("../assets/imgs/commonBoxHeaderBg.png") 0 0 / 100% 100% no-repeat;
}

.common-box .common-box-header::before {
  content: "";
  width: 18px;
  height: 20px;
  position: absolute;
  left: 8px;
  top: 16px;
  background: url("../assets/imgs/icon-1.png") 0 0 / 100% 100% no-repeat;
}
</style>
