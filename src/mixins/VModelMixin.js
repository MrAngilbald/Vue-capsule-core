export const InputVModelMixin={
    props:{
        value: {
            type: [String, Number, Boolean, Object, Array, Symbol, Function],
            default: undefined
        },
    },
    data(){
        return {
            val:this.value,
        }
    },
    watch:{
        value(v){
            this.val = v;
        },
        val(v){
            this.$emit('input', v);
        },
    }
};