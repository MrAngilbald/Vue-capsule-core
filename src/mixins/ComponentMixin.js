export const ComposedComponentMixin={
    methods:{
        getComponentBindings(component){
            let res={};
            for(let prop in component.props){
                if(this[prop] )  res[prop]=this[prop];
            }
            return res;
        }
    }
};