<template>
    <div :class="controlCssClasses">
        <span :class="spanCssClasses">
            <select 
                v-model="val" 
                :multiple="multiple"
            >
                <option v-if="placeholder" class="is-hidden" :selected="!val">{{placeholder}}</option>
                <slot/>
            </select>
            <icon v-if="icon" class="is-left" :class="getIconSize(size)" :icon="icon" :color="color"></icon>
        </span>
    </div>
</template>

<script>
import {SizeMixin} from '../../mixins/SizeMixin.js' 
import {HasLeftIconMixin} from '../../mixins/HasIconsMixin.js' 
import {ColorMixin} from '../../mixins/ColorMixin.js' 
import {InputVModelMixin} from '../../mixins/VModelMixin.js' 
import IconComponent from '../elements/Icon.vue'

export default {
    components:{
        'icon':IconComponent
    },
    mixins:[
        SizeMixin, HasLeftIconMixin,ColorMixin,InputVModelMixin
    ],
    props:{
        placeholder: String,
        multiple: Boolean,
        expanded:Boolean,
        loading: Boolean,
        options:[String,Array,Object]
    },
    data(){
        return{
            isLoading:this.loading || false,
        }
    },
    computed:{
        controlCssClasses(){
            return [
                'control',
                {'is-expanded': this.expanded || false},
            ].concat(this.iconContainerCssClass);
        },
        spanCssClasses(){
            return [
                'select',
                {'is-multiple': this.multiple || false},
                {'is-loading': this.isLoading},
            ].concat(this.sizeCssClasses, this.colorCssClasses);
        },
    },
    watch:{
        loading(v){
            this.isLoading=v;
        },
        isLoading(v){
            this.$emit('loading', v);
        }
    }
}
</script>

