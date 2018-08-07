<template>
    <div v-if="isActive" class="modal is-active">
        <div class="modal-background" @click="close('outside')"/>
        <div v-if="isCard" class="modal-card">
            <header 
                v-if="hasHead" 
                class="modal-card-head"
            >
                <p class="modal-card-title">
                    <slot name="head"></slot>
                </p>
                <button
                    v-if="showCloseButton"
                    class="delete" 
                    aria-label="close" @click="close('closeButton')"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer 
                v-if="hasFoot" 
                class="modal-card-foot"
            >
                <slot name="foot"></slot>
            </footer>
        </div>
        <template v-else>
            <div class="modal-content">
                <slot></slot>
            </div>
            <button 
                v-if="showCloseButton" 
                class="modal-close is-large" 
                aria-label="close" 
                @click="close('closeButton')"></button>
        </template>
    </div>
</template>
<script>

export default {
    props:{
        active: Boolean,
        type:{
            type:String,
            default:"default"
        },
        preventClosing:[Boolean,String,Array],
        callbacks:Object
    },
    data(){
        return{
            isActive: this.active || false,
        } 
    }, 
    computed:{
        isCard(){
            return this.hasHead || this.hasFoot;
        },
        hasHead(){
            return typeof this.$slots.head !== "undefined";
        },
        hasFoot(){
            return typeof this.$slots.foot  !== "undefined";
        },
        closeOptions(){
            let res=['escapeKeypress','closeButton','outside'];
            let removeFromRes=function(v){
                let i=res.indexOf(v);
                if(i!==-1) 
                    res.splice(i,1);
            };
            if(!this.preventClosing) return res;
            if(this.preventClosing==true) return [];
            if(this.preventClosing.constructor === Array){
                this.preventClosing.forEach(function(v){
                    removeFromRes(v);
                });
                return res;
            }
            removeFromRes(this.preventClosing);
            return res;  
        },
        showCloseButton() {
            return this.closeOptions.indexOf('closeButton') >= 0
        }
    },
    methods:{
        open(){
            this.$emit('open')
            this.$emit('update:active', true)
        },
        close(action){
            if(action && this.closeOptions.indexOf(action)!==-1){
                this.$emit('close')
                this.$emit('update:active', false)
            }
        },
        keyPress(event) {
            // Esc key
            if (this.isActive && event.keyCode === 27) this.close('escapeKeypress')
        }
    },
    watch:{
        active(value){
            this.isActive=value;
        },
        isActive(value){
            if(value==true){
                document.addEventListener('keyup', this.keyPress);
                if(this.callbacks && typeof this.callbacks.onOpen === "function")
                    this.callbacks.onOpen(this);
            }else{
                document.removeEventListener('keyup', this.keyPress);
                if(this.callbacks && typeof this.callbacks.onClosed === "function")
                    this.callbacks.onClosed(this);
            }
        }
    },
}
</script>
