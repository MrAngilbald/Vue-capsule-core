<template>
    <button
        :type="type"
        :class="cssClasses"
        :disabled="isDisabled"
    >
        <slot/>
    </button>
</template>
<script>
import {SizeMixin} from '../../mixins/SizeMixin.js'
import {ColorMixin} from '../../mixins/ColorMixin.js'

export default {
    mixins:[SizeMixin,ColorMixin],
    props:{
        type:{
            type:String,
            default:"button",
            validator:function(v){
                return ['button','submit','reset'].indexOf(v)!==-1;
            }
        },
        disabled:Boolean,
    },
    data(){
        return {
            isDisabled:this.disabled || false,
        };
    },
    computed:{
        cssClasses(){
            return ['button'].concat(this.sizeCssClasses, this.colorCssClasses)
        }
    },
    watch:{
        disabled(v){
            this.isDisabled=v;
        },
        isDisabled(v){
            this.$emit('update:disabled',v);
        }
    },
}
</script>
