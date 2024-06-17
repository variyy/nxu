<template>
  <div></div>
</template>

<script>
export default {
  created () {
    this.$alert('确认退出', '', {
      confirmButtonText: '确定',
      callback: action => {
        localStorage.clear()
        this.$router.push('/login')
      }
    })
  }
}
</script>

<style scoped>

</style>
