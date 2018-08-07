<template>
    <figure class="image" :class="formattedSize">
        <img :src="src" :alt="alt"/>
    </figure>
</template>

<script>
    export default {
        props:{
            src:String,
            alt:String,
            size:String
        },
        computed:{
            formattedSize(){
                return this.size ? 'is-'+this.size : undefined;
            }
        }
    }
</script>
