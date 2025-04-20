<template>
    <div>
        <header>
            <h1>Dashboard Layout</h1>
            <button @click="logout">Logout</button>
        </header>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();

const logout = () => {
    localStorage.removeItem('auth');
    router.push('login');
}

</script>

<style lang="scss" scoped>

</style>