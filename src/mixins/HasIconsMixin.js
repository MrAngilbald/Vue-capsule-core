let commun={
    methods:{
        getIconSize(size){
            if(size === 'large') return 'is-large';
            if(size === 'medium') return undefined;
            return 'is-small';
        }
    }
};

export const HasIconsMixin=Object.assign({},commun,{
    props:{
        iconLeft:[Object,Array],
        iconRight:[Object,Array],
    },
    computed:{
        iconContainerCssClass(){
            return [
                {'has-icons-left': this.iconLeft},
                {'has-icons-right':this.iconRight},
            ];
        },
        hasIcons(){
            return this.iconLeft || this.iconRight;
        }
    },
});

export const HasLeftIconMixin=Object.assign({},commun,{
    props:{
        icon:[Object,Array],
    },
    computed:{
        iconContainerCssClass(){
            return [
                {'has-icons-left': this.icon},
            ];
        },
        hasIcons(){
            return this.icon || false;
        }
    }
});

export const HasRightIconMixin=Object.assign({},commun,{
    props:{
        icon:[Object,Array],
    },
    computed:{
        iconContainerCssClass(){
            return [
                {'has-icons-right': this.icon},
            ];
        },

        hasIcons(){
            return this.icon || false;
        }
    }
});