<template>
    <div class="player-title-wrapper">
        <div class="player-title">{{ title }}</div>
        <div class="player-artist">{{ artist }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            artist: {
                type: String,
                required: true
            }
        },
        name: "player-title"
    };
</script>

<style lang="scss">
    .player-title-wrapper {
        padding-top: 30px;
        .player-title, .player-artist {
            text-align: center;
            font-size: 24px;
            color: white;
            text-shadow: 0 0 3px #808080;
        }

        .player-artist {
            font-size: 18px;
        }
    }
</style>
