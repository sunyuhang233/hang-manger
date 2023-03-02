<script lang="ts" setup>
import LoginBox from './cpn/LoginBox.vue';
</script>

<template>
    <div class="login">
        <LoginBox />
    </div>
</template>

<style scoped lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url('../../assets/img/login-bg.svg') no-repeat center center;
}
</style>
