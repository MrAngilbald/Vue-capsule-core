<template>
    <div :class="controlCssClasses" >
        <icon v-if="iconLeft" :class="getIconSize(size)" :icon="iconLeft" :color="currentColor"></icon>
        <input 
            ref="input"
            class="input"
            :type="type"
            :placeholder="placeholder"
            :class="[{'is-expanded':expanded}]"
            v-model="val"
        />
    </div>
</template>
<script>
import IconComponent from '../elements/Icon.vue'

import {SizeMixin} from '../../mixins/SizeMixin.js' 
import {HasIconsMixin} from '../../mixins/HasIconsMixin.js' 
import {ColorMixin} from '../../mixins/ColorMixin.js' 
import {InputVModelMixin} from '../../mixins/VModelMixin.js' 

export default {
    components:{
        'icon':IconComponent
    },
    mixins:[SizeMixin,HasIconsMixin,ColorMixin,InputVModelMixin],
    props:{
        type:{
            type:String,
            default:"text"
        },
        value:String,
        placeholder:String,
        color:String,
        disabled:Boolean,
        loading:Boolean,
        readonly:Boolean,
        expanded:Boolean,
    },
    data(){
        return {
            currentColor:this.color,
            currentPlaceholder:this.placeholder,
        };
    },
    computed:{
        controlCssClasses(){
            return [
                'control',   
            ].concat(this.sizeCssClasses, this.colorCssClasses, this.iconContainerCssClass)
        }
    },
}
</script>
