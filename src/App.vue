<script>
    import PlayerTitle from './components/player-title.vue';
    import PlayerCd from './components/player-cd.vue';
    import getRandomMusic from './common/api/getRandomMusic';
    import { Howl, Howler } from 'howler';
    let sound;
    export default {
        components: {
            PlayerTitle,
            PlayerCd
        },
        data () {
            return {
                playerTitle: '',
                playerArtist: '',
                playerCdImg: ''
            }
        },
        methods: {
            async handleClick () {
                const music = await getRandomMusic();
                if (!music.title || !music.artist || !music.cover) {
                    await this.handleClick();
                } else {
                    this.playerTitle = music.title;
                    this.playerArtist = music.artist;
                    this.playerCdImg = music.cover;
                    if (sound) {
                        sound.stop();
                    }
                    sound = new Howl({
                        src: [music.link]
                    });
                    sound.play();
                }
            }
        }
    };
</script>

<template>
    <div class="container">
        <player-title
            :title="playerTitle"
            :artist="playerArtist"
        ></player-title>
        <player-cd
            :img-src="playerCdImg"
        ></player-cd>
        <button @click="handleClick">切换</button>
    </div>
</template>

<style lang="scss">
    body {
        margin: 0;

        #app {
            .container {
                height: 100vh;
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>
