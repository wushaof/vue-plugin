<template>
  <div>
    测试11
    <name></name>
  </div>
</template>
<script>
  import Name from './TestName.vue'
  export default {
    name: 'QualitySupervision',
    components: {
      Name
    },
    props: {
      title: String
    }
  }
</script>