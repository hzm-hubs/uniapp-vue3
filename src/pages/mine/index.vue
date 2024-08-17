<template>
    <!-- 直接从 store 中访问 state -->
    <view>Current Count:{{ countNum }} {{ userStore.count  }}</view>
    <button @click="() => {
        userStore.increment()
    }">点击+1</button>
</template>
<script setup>
import { useUserStore } from '@/stores/index'
import { onLoad } from '@dcloudio/uni-app';
import { computed } from 'vue';

const userStore = useUserStore()

const countNum = computed(() => userStore.count)

onLoad(() => {
    console.log('123',userStore.count)
}) 
</script>