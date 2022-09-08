import{_ as x,d as L,r as k,i as N,b as I,j as T,a as w,c as o,w as n,u as V,m as A,e as F,g as s,o as v,F as R,h as y,t as z,k as B,l as D}from"./app.95a4fd28.js";const E=L({setup(){const a=k(!1),l=k(),e=N({title:"",author:"",page:1}),r=V(),u=k(),c=I(()=>r.state.post.posts),b=()=>{r.dispatch("post/search",e)};T(async()=>{await r.dispatch("post/search",e)});const _=t=>{r.dispatch("post/delete",t).then(()=>{r.dispatch("post/search",e)}).catch(g=>{g.response.status===404&&A.error("you can't delete other people's posts")})},f=I(()=>({total:c.value.total,current:c.value.current_page,pageSize:c.value.per_page})),p=t=>{e.page=t.current,r.dispatch("post/search",e)},m=(t,g,d)=>{e.page=t.current,u.value=d,e.sort_field=d.field,d.order==="descend"?e.sort_direction="desc":d.order==="ascend"?e.sort_direction="asc":(e.sort_field=void 0,e.sort_direction=void 0),console.log(e,"tung formState"),r.dispatch("post/search",e)},h=()=>{e.title="",e.author="",e.page=1,e.sort_field=void 0,e.sort_direction=void 0,u.value=!1},C=I(()=>{const t=u.value||{};return[{title:"ID",dataIndex:"id",sorter:!0,sortOrder:t.field==="id"&&t.order},{title:"Title",dataIndex:"title",sorter:!0,sortOrder:t.field==="title"&&t.order},{title:"Author",dataIndex:"created_by",sorter:!0,sortOrder:t.field==="created_by"&&t.order},{title:"Created At",dataIndex:"created_at",sorter:!0,sortOrder:t.field==="created_at"&&t.order},{title:"Operation",dataIndex:"operation"}]});return{formRef:l,formState:e,expand:a,onFinish:b,columns:C,posts:c,onDelete:_,pagination:f,onChange:p,onTableChange:m,resetFields:h}}}),U=y("Search"),j=y("Clear"),M=F("div",{class:"search-result-list"},"Search Result List",-1),q=y("Edit"),G=F("a",null,"Delete",-1),H=F("br",null,null,-1);function J(a,l,e,r,u,c){const b=s("a-page-header"),_=s("a-input"),f=s("a-form-item"),p=s("a-col"),m=s("a-row"),h=s("a-button"),C=s("a-form"),t=s("router-link"),g=s("a-popconfirm"),d=s("a-space"),O=s("a-table"),$=s("a-layout");return v(),w("div",null,[o(b,{style:{border:"1px solid rgb(235, 237, 240)"},title:"List","sub-title":"List of post"}),o(C,{ref:"formRef",name:"advanced_search",class:"ant-advanced-search-form",model:a.formState,onFinish:a.onFinish},{default:n(()=>[o(m,{gutter:24},{default:n(()=>[o(p,{span:8,offset:1},{default:n(()=>[o(f,{name:"title",label:"title"},{default:n(()=>[o(_,{value:a.formState.title,"onUpdate:value":l[0]||(l[0]=i=>a.formState.title=i),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1}),o(p,{span:8,offset:1},{default:n(()=>[o(f,{name:"author",label:"Author"},{default:n(()=>[o(_,{value:a.formState.author,"onUpdate:value":l[1]||(l[1]=i=>a.formState.author=i),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1})]),_:1}),o(m,null,{default:n(()=>[o(p,{span:24,style:{"text-align":"right"}},{default:n(()=>[o(h,{type:"primary","html-type":"submit"},{default:n(()=>[U]),_:1}),o(h,{style:{margin:"0 8px"},onClick:a.resetFields},{default:n(()=>[j]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["model","onFinish"]),M,o($,null,{default:n(()=>[o(O,{columns:a.columns,"data-source":a.posts.data,onChange:a.onTableChange,pagination:a.pagination},{bodyCell:n(({column:i,record:S})=>[i.dataIndex==="created_by"?(v(),w(R,{key:0},[y(z(S.user.name),1)],64)):i.dataIndex==="operation"?(v(),B(d,{key:1,size:15,style:{"text-align":"center"}},{default:n(()=>[o(t,{to:{name:"post_update",params:{id:S.id}}},{default:n(()=>[q]),_:2},1032,["to"]),a.posts.data.length?(v(),B(g,{key:0,title:"Sure to delete?",onConfirm:K=>a.onDelete(S.id)},{default:n(()=>[G]),_:2},1032,["onConfirm"])):D("",!0)]),_:2},1024)):D("",!0)]),_:1},8,["columns","data-source","onChange","pagination"])]),_:1}),H])}var Q=x(E,[["render",J]]);export{Q as default};
