<style lang="scss">
    input[type="number"].no-browser-ui{
        -moz-appearance:textfield;
        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
            -webkit-appearance: none;
            margin: 0;
        }
    }
</style>
<template>
    <c-field v-bind="fieldBindings">
        <div v-if="!showSpinner" class="control">
            <c-button  ref="minus" :color="color" :size="size" @click.native="stepDown">-</c-button>
        </div>
        <c-input 
            ref="input"
            v-bind="inputBindings"
            v-model="val"
        ></c-input>
        <div v-if="showSpinner">
            <c-button class="button-spinner-up" @click.native="stepUp"></c-button>
            <c-button class="button-spinner-down" @click.native="stepDown"></c-button>
        </div>
        <div v-else class="control">
            <c-button ref="plus" :color="color" :size="size" @click.native="stepUp">+</c-button>
        </div>
    </c-field>
</template>
<script>
import FieldComponent from './Field.vue' 
import InputComponent from './Input.vue'

import ButtonComponent from '../elements/Button.vue' 
import IconComponent from '../elements/Icon.vue' 
import { faCaretUp,faCaretDown } from '@fortawesome/free-regular-svg-icons'

import {ComposedComponentMixin} from '../../mixins/ComponentMixin.js' 

console.log(FieldComponent.props)

export default {
    mixins:[
        ComposedComponentMixin
    ],
    components:{
        'c-field':FieldComponent,
        'c-input':InputComponent,
        'c-button':ButtonComponent,
    },
    props: Object.assign({
        color:String,
        size:String,
        spinner:Boolean,
        step:{
            type:Number,
            default:1
        },
    },FieldComponent.props),
    data(){
        return {
            val:this.value ? Number(this.value) : undefined,
        }
    },
    computed:{
        fieldBindings(){
            let res=this.getComponentBindings(FieldComponent);
            res.hasAddons=true;
            return res;
        },
        inputBindings(){
            return this.getComponentBindings(InputComponent);
        },
        showSpinner(){
            return this.spinner;
        },
    },
    methods:{
        stepUp(){
            this.addStep(true);
        },
        stepDown(){
            this.addStep(false);
        },
        addStep(b){
            let numVal= this.val ? Number(this.val) :0;
            let step=Number(this.step);
            if(b===false) this.val=(numVal-step).toString();
            else this.val=(numVal+step).toString();
            console.log(numVal, step, this.val);
        },
    }
}
</script>

