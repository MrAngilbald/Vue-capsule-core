<template>
    <div class="field" :class="{'has-addons':hasAddons, 'has-icons':hasIcons, 'is-horizontal':horizontal }">
        <template v-if="horizontal">
            <div class="field-label">
                <label v-if="label" class="label">{{ label }}</label>
            </div>
            <div class="field-body">
                <slot/>
                <p class="help" v-if="message" v-html="formattedMessage"/>
            </div>
        </template>
        <template v-else>
            <label v-if="label" class="label">{{ label }}</label>
            <slot/>
            <p class="help" v-if="message" v-html="formattedMessage"/>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        label:String,
        horizontal:Boolean,
        hasAddons:Boolean,
        hasIcons:Boolean,
        grouped:Boolean,
        centered:Boolean,
        hasIcons:Boolean,
        message:String
    },
    data(){
        return{}
    },
    computed:{
        formattedMessage(){
            if (Array.isArray(this.newMessage)) {
                return this.newMessage.filter((value) => {
                    if (value) {
                        return value
                    }
                }).join(' <br> ')
            } else {
                return this.newMessage
            }
        }
    }
}
</script>
 