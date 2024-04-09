<template>
  <div class="quality-supervision">
    <div class="page-view">
      <!-- 标题 -->
      <div class="header">
        <div class="center">
          <image
            src="@/assets/imgs/title-icon.capture"
            style="width: 60px; height: 50px"
          ></image>
          <div>数字钢轨全寿命管理平台</div>
        </div>
      </div>

      <div class="content">
        <!-- 上 -->
        <div
          style="
            height: 60px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            align-items: center;
            background-color: #002a67;
          "
        >
          <div>
            监督时间：
            <span class="blue-style-picker">
              <el-date-picker
                style="width: 160px"
                popper-class="blue-style-picker-popover"
                size="small"
                :append-to-body="false"
                v-model="month"
                @change="dateChange"
                type="month"
                placeholder="选择月"
              >
              </el-date-picker>
            </span>
          </div>
          <div style="display: flex; gap: 10px; cursor: pointer">
            <div class="btn" @click="search">查询</div>
            <div class="btn" @click="reset">重置</div>
          </div>
        </div>

        <!-- 中 -->
        <div class="content-row1">
          <common-box
            :title="
              params.year +
              '年及' +
              params.year +
              '年' +
              params.month +
              '月钢轨监督量统计'
            "
          >
            <template #right>
              <div class="btn" @click="exportFile">导出</div>
            </template>
            <common-table
              :header="[
                { prop: 'xxx', label: '钢厂' },
                { prop: 'xxx', label: '当年成品挑出率(%)' },
                { prop: 'xxx', label: '当月成品挑出率(%)' },
                { prop: 'xxx', label: '当年过程不合格率(%)' },
                { prop: 'xxx', label: '当月过程不合格率(%)' },
                { prop: 'xxx', label: '上季度质量指数' },
              ]"
              :list="listTest"
            ></common-table>
          </common-box>
          <common-box
            :title="
              params.year +
              '年及' +
              params.year +
              '年' +
              params.month +
              '月道岔监督量统计'
            "
          >
            <template #right>
              <div class="btn" @click="exportFile">导出</div>
            </template>
            <common-table
              :header="[
                { prop: 'xxx', label: '道岔厂' },
                { prop: 'xxx', label: '当年一次校验合格率(%)' },
                { prop: 'xxx', label: '当月一次校验合格率(%)' },
                { prop: 'xxx', label: '当年过程不合格率(%)' },
                { prop: 'xxx', label: '当月过程不合格率(%)' },
              ]"
              :list="listTest"
            ></common-table>
          </common-box>
        </div>

        <!-- 下 废弃 -->
        <div class="content-row2">
          <common-box
            :title="
              params.year +
              '年及' +
              params.year +
              '年' +
              params.month +
              '月焊轨监督统计'
            "
            style="height: 310px"
          >
            <common-table
              :header="[
                { prop: 'xxx', label: '焊轨基地' },
                { prop: 'xxx', label: '芜湖北焊轨基地' },
                { prop: 'xxx', label: '红海焊轨基地' },
                { prop: 'xxx', label: '小李庄焊轨基地' },
                { prop: 'xxx', label: '石板滩焊轨基地' },
                { prop: 'xxx', label: '向塘焊轨基地' },
                { prop: 'xxx', label: '武昌南焊轨基地' },
                { prop: 'xxx', label: '沙河焊轨基地' },
              ]"
              :list="listTest"
            ></common-table>
          </common-box>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonBox from "@/components/commonBox.vue";
import commonTable from "@/components/commonTable";
export default {
  name: "WeldingRail",
  components: {
    commonBox,
    commonTable,
  },
  props: {
    title: String,
  },
  data() {
    return {
      params: {
        year: "",
        month: "",
      },
      month: new Date(),
      fileList: [],
      videoSrc: "",
      analysisImg: "",
      descript: "",
      listTest: [
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
        { xxx: "测试" },
      ],
    };
  },
  mounted() {
    this.dateChange();
  },
  methods: {
    // 头模块 日期改变
    dateChange(val = new Date()) {
      this.params.year = new Date(val).getFullYear();
      this.params.month = new Date(val).getMonth() + 1;
      this.search();
    },
    // 头模块 查询
    search() {
      console.log(this.params);
    },
    // 头模块 重置
    reset() {},
    // 下模块 按钮左
    leftFn() {},
    // 下模块 按钮右
    rightFn() {},
    // 中模块 导出按钮
    exportFile() {},
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.page-view {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/imgs/background-page.png") 0 0 / 100% 100% no-repeat;
  color: #fff;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.header .center {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 3px;
  /*background: linear-gradient(0deg,#4b97e2,#fff 39.94140625%,#fff);*/
  background: -webkit-linear-gradient(90deg, #4b97e2, #fff 39.94140625%, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content {
  padding: 40px;
}

.content .content-row1 {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  height: 310px;
}

.content .content-row2 {
  margin-top: 20px;
  height: 310px;
  border: 1px solid blue;
}

.btn {
  background: url(data:image/png;base64,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)
    0 0 / 100% 100% no-repeat;
  padding: 6px 14px;
  cursor: pointer;
}
::v-deep .blue-style-picker .el-date-editor input {
  border: none;
  color: #fff;
  background: transparent url("@/assets/imgs/bg-picker.png") 0 0 / 100% 100%
    no-repeat;
}
::v-deep .blue-style-picker-popover {
  color: #fff;
  border: 1px solid #224da7;
  background-color: rgba(11, 36, 89, 0.85);
}
::v-deep
  .blue-style-picker-popover
  .el-date-picker__header
  .el-date-picker__header-label {
  color: #fff;
}
::v-deep .blue-style-picker-popover .el-picker-panel__icon-btn {
  color: #fff;
}
::v-deep .blue-style-picker-popover .el-month-table .cell {
  color: #fff;
}
.el-table__body-wrapper {
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
}
.quality-supervision {
}
</style>
<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background: #09438b;
}

::-webkit-scrollbar-thumb {
  background: #6894f1;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #2b58b7;
}

::-webkit-scrollbar-thumb:active {
  background-color: #2b58b7;
}
</style>