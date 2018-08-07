<style>
    .checkbox > {
        margin-right: 0.25em;
    }
</style>


<template>
    <label 
        :class="[type,{'is-disabled': disabled}]" 
        :disabled="disabled" 
        :tabindex="disabled ? false : 0"
    >
        <input 
            ref="input"
            class="is-hidden" 
            :type="type" 
            :name="name" 
            :value="inputValue" 
            :disabled="disabled" 
            v-model="val"
        />
        <icon 
            ref="icon"
            :icon="getIcon(this.isChecked)"
            :color="getIconColor(this.isChecked)"                 
        ></icon>
        <span><slot></slot></span>
    </label>
</template>
<script>
import Icon from '../elements/Icon.vue'
import { faCheckSquare,faSquare } from '@fortawesome/free-regular-svg-icons'

export default {
    components:{
        Icon
    },
    props:{
        value:[String,Number,Boolean,Array,Object],
        inputValue:[String,Number,Boolean,Array,Object],
        disabled:{
            type:Boolean,
            default:false,
        },
        name:String,
        color:{
            type:String,
            default:'primary',
        },
    },
    data(){
        return {
            type:"checkbox",
            val:this.value
        };
    },
    computed:{
        isChecked(){
            if(typeof this.value !== typeof []) return this.value===this.inputValue;
            else return this.value.indexOf(this.inputValue)!==-1;
            return false
        },
        labelCssClasses(){
            return [].concat(this.textColorCssClasses())
        }
    },
    methods:{
        getIcon(value){
            return value ? faCheckSquare : faSquare; 
        },
        getIconColor(value){
            return value && !this.disabled ? this.color : undefined; 
        },
    },
    watch:{
        value(value){
            this.val=value;
            this.$refs.icon.currentIcon=this.getIcon(this.isChecked);
            this.$refs.icon.currentColor=this.getIconColor(this.isChecked);
        },
        val(value){
            this.$emit('input', value)
        },
    },
}
</script>
