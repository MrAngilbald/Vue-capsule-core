export const ColorMixin={
    props:{
        color:String,
    },
    computed:{
        colorCssClasses(){
            let res=[];
            if(this.color) res.push('is-'+this.color);
            return res; 
        },
        textColorCssClasses(){
            let res=[];
            if(this.color) res.push('has-text-'+this.color);
            return res;
        }
    }
};