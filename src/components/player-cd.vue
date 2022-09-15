<template>
    <div class="player-cd-wrapper">
        <div class="player-cd-outer">
            <div class="player-cd-inner">
                <img v-if="imgReady[imgSrc]" alt="" :src="imgSrc">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imgSrc: {
                type: String
            }
        },
        data () {
            return {
                imgReady: {}
            };
        },
        watch: {
            imgSrc: {
                handler (value) {
                    const image = new Image;
                    image.src = value;
                    image.onload = () => {
                        this.imgReady[value] = true;
                    }
                },
                immediate: true
            }
        }
    };
</script>

<style lang="scss">
    .player-cd-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .player-cd-outer {
            width: 60vw;
            height: 60vw;
            border-radius: 50%;
            background: url("../assets/cd.webp") 0 0 / 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .player-cd-inner {
                width: 35vw;
                height: 35vw;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
