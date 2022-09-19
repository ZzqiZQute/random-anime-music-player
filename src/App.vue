<script>
    import PlayerTitle from './components/player-title.vue';
    import PlayerCd from './components/player-cd.vue';
    import PlayerControl from './components/player-control.vue';
    import getRandomMusic from './common/api/getRandomMusic';
    import { Howl, Howler } from 'howler';
    let sound;
    export default {
        components: {
            PlayerTitle,
            PlayerCd,
            PlayerControl
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
        <div class="mask" :style="{
            backgroundImage: `url(${playerCdImg})`,
        }">
        </div>
        <player-title
            :title="playerTitle"
            :artist="playerArtist"
        ></player-title>
        <player-cd
            :img-src="playerCdImg"
        ></player-cd>
        <player-control
        ></player-control>
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
                .mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    background-size: cover;
                    background-position: center;
                    filter: blur(5px);
                    z-index: -1;
                }
            }
        }
    }
</style>
