<template>
    <span class="icon" :class="[containerSize,textColor]">
        <fontawesome :icon="currentIcon" :size="iconsize" :rotation="rotation" :flip="flip" :border="border" :pulse="pulse" :spinner="spinner" :tranform="transform"></fontawesome>
    </span>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    components:{
        'fontawesome':FontAwesomeIcon
    },
    props:{
        icon:Object,
        color:String,
        size:{
            type:String,
            validator:function(value){
                return ['small','medium','large'].indexOf(-1);
            }
        },        
        'iconsize':String,
        'rotation':Number,
        'flip':String,
        'border':Boolean,
        'spin':Boolean,
        'pulse':Boolean,
        'spinner':Boolean,
        'transform':Boolean,
    },
    data(){
        library.add(this.icon);
        return{
            currentIcon:this.icon,
            currentColor:this.color,
        }
    },
    computed:{
        containerSize(){
            return this.size ? 'is-'+this.size : undefined;
        },
        textColor(){
            return this.currentColor ? 'has-text-'+this.currentColor : undefined;
        },

    }
}
</script>

