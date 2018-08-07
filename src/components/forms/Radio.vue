
<script>
import { faCircle,faDotCircle } from '@fortawesome/free-regular-svg-icons'

import Checkbox from './Checkbox.vue';
export default {
    extends: Checkbox,
    name:'radio',
    data(){
        return {
            type:"radio",
            val:this.value
        };
    },
    methods:{
        getIcon(value){
            return value ? faDotCircle : faCircle; 
        },
    }
}
</script>