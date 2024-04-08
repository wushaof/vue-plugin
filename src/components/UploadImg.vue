<template>
  <div class="">
    <el-upload
      action="#"
      :on-change="handleChange"
      :auto-upload="false"
      :multiple="false"
      :show-file-list="false"
      :file-list="fileList">
      <el-button size="mini" type="primary">上传图片</el-button>
    </el-upload>

    <el-row :gutter="20" class="row-container">
      <el-col :span="6">
        <el-card class="card-img">
          <div>当前上传的图片</div>
          <el-image :src="imgSrc" fit="contain">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="delete-img">
            <i class="el-icon-delete" @click="handleDeleteImg"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" style="text-align: center;">
        <el-button type="primary" size="mini" @click="handleAnalysis">分析图片</el-button>
      </el-col>
      <el-col :span="6">
        <el-card class="card-img">
          <div>分析后的结果图片</div>
          <el-image :src="analysisImg" fit="contain">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card-img">
          <div>描述{{ descript }}</div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      imgSrc: '',
      analysisImg: '',
      descript: ''
    }
  },
  methods: {
    handleChange(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.imgSrc = e.target.result
      };
      reader.readAsDataURL(file.raw);
    },
    handleAnalysis() {
      this.analysisImg = this.imgSrc
      this.descript = Math.random()
    },
    handleDeleteImg() {
      this.analysisImg = ''
      this.imgSrc = ''
      this.descript = ''
    }
  }
}
</script>

<style scoped>
  .el-icon-picture-outline {
    font-size: 35px;
  }
  .el-icon-delete {
    cursor: pointer;
  }
  .delete-img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 29px;
  }
  .delete-img:hover {
    opacity: 1;
  }
  .row-container {
    margin: 0 !important;
    padding-top: 15px;
    width: 80%;
  }
  ::v-deep .el-upload {
    margin-left: 10px;
  }
  .card-img {
    height: 500px;
    position: relative;
    background: #f5f7fa;
    .el-image {
      width: 100%;
      height: 100%;
      padding-top: 15px;
    }
  }
  ::v-deep.card-img .el-card__body {
    height: calc(100% - 70px) !important;
  }
  ::v-deep .image-slot {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
