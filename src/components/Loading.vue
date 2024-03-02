<template>
  <div class="loading-container">
    <div class="loading-spinner"></div>
    <div class="loading-text">{{ message }}</div>
  </div>
</template>


<script>
export default {
  name:'WebLoading',
  data() {
    return {
      message: '加载中...',
    };
  },
  mounted() {  
        // 模拟数据加载  
        setTimeout(() => {  
            this.isLoading = false;  
        }, 2000); // 假设数据加载需要 2 秒  
    },  
};
</script>

<style>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 10px;
  font-size: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>