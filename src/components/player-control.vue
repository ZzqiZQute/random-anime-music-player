<template>
   <div class="player-control">
       <div>播放顺序</div>
       <div>上一曲</div>
       <div @click="handlePlayButtonClick"><img :src="playIconState === 'play' ? playIcon : pauseIcon" alt></div>
       <div>下一曲</div>
       <div>收藏</div>
   </div>
</template>
<script>
    import playIcon from '../assets/播放.png';
    import pauseIcon from '../assets/暂停.png';
    export default {
        data () {
            return {
                playIconState: 'play',
                playIcon,
                pauseIcon
            }
        },
        methods: {
            handlePlayButtonClick () {
                this.playIconState = this.playIconState === 'play' ? 'pause' : 'play';
            }
        }
    };
</script>
<style lang="scss">
    .player-control {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            img {
                width: 60%;
                height: 60%;
            }
        }
    }
</style>
