<template>
    <div class='search'>
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索歌曲、歌单、专辑"></mt-search>
    </div>                            
</template>

<script>
export default {
    data() {
        return {
            value:''
        }
    }
}
</script>
