<script setup lang="ts">
    import getRandomMusic from './common/api/getRandomMusic';
    import { ref } from 'vue';
    const audio = ref<HTMLAudioElement>();
    const canClick = ref(true);
    const title = ref<string>();
    const handleClick = async () => {
        if (canClick.value) {
            canClick.value = false;
            const music = await getRandomMusic();
            title.value = music.title;
            if (audio.value) {
                audio.value.remove();
            }
            audio.value = document.createElement('audio');
            audio.value.src = music.play_url;
            document.body.append(audio.value);
            await audio.value.play();
            canClick.value = true;
        }
    };
</script>

<template>
    <div class="app-main">
        <h1>{{ title }}</h1>
        <button @click="handleClick">点击播放</button>
    </div>
</template>

<style lang="scss">
</style>
