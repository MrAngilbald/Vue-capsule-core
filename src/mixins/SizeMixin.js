export const SizeMixin={
    props:{
        size:{
            type:String,
            validator(v){
                return [undefined, 'small', 'medium', 'large'].indexOf(v)!=-1
            }
        }
    },
    computed:{
        sizeCssClasses(){
            let res=[];
            if(this.size) res.push('is-'+this.size);
            return res; 
        }
    }
};