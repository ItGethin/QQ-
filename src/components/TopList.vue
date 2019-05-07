<template>
    <div class='toplist'>
        <ul>
            <li v-for='(item,index) in data' :key="index">
                <a><img :src='item.picUrl' alt='' style='display:block' height='100' width='100'/></a>
                <div class='topic'>
                    <h3>{{item.topTitle}}</h3>
                    <p v-for='(i, key) in item.songList' :key="key">
                        {{key+1}}  
                        <span>{{i.songname}}</span>
                        - {{i.singername}}
                    </p>
                </div>
            </li>
        </ul>

        <p class='topic-more'><a> 去客户端发现更多好音乐 ></a></p>
    </div>                            
</template>

<script>
export default {
    data() {
        return {
            data:[]
        }
    },
    methods:{
        getData() {
            this.$http.get('../../src/static/data/toplist.json').then( res => {
                // console.log(res.body.data.topList);
                this.data = res.body.data.topList;
            }, err => {})
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style scope>
    @import '../css/TopList.css'
</style>

