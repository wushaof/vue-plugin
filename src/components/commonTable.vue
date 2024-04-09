<template>
  <el-table
      class="common-table-class"
      :data="list"
      height="100%"
      :header-row-style="{
          background: '#09438b',
          color: '#fff',
      }"
      :header-cell-style="{
          padding: '5px',
          background: 'transparent',
          border: 'none',
          textAlign: 'center'
      }"
      :cell-style="{
          padding: '2px',
          background: 'transparent',
          border: '1px solid #08458d',
        }"
      :row-style="{
          color: '#fff',
      }"
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
  >
    <el-table-column
        v-for="(item, index) in header"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align || 'center'"
    ></el-table-column>
  </el-table>
</template>

<script>
module.exports = {
  name: "commonTable",
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    header: {
      type: Array,
      default: () => ([])
    },
  },

  methods: {
    rowClick(e) {
      this.$emit("rowClick", e)
    },
    tableRowClassName({rowIndex}) {
      if (rowIndex % 2) {
        return 'zebra-stripe-odd'
      } else {
        return 'zebra-stripe-even';
      }
    }
  }
}
</script>

<style>
.common-table-class .zebra-stripe-odd {
  background-color: #0d2a67;
}
.common-table-class .zebra-stripe-even {
  background-color: #093d81;
}

/* 去掉table表格最后一行的边框、白线 */
.el-table::before {
  height: 0;
  display: none;
}

</style>
