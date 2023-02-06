"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[45],{67871:function(e,r,t){t.d(r,{Z:function(){return m}});var a=t(1413),o=t(45987),n=t(57829),i=t(61113),l=t(90891),s=t(29466),c=t(3404),d=t(46417),u=["links","activeLast"];function p(e){var r=e.links,t=e.activeLast,l=void 0!==t&&t,s=(0,o.Z)(e,u),p=r[r.length-1].name,h=r.map((function(e){return(0,d.jsx)(v,{link:e},e.name)})),m=r.map((function(e){return(0,d.jsx)("div",{children:e.name!==p?(0,d.jsx)(v,{link:e}):(0,d.jsx)(i.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return(0,d.jsx)(c.Z,(0,a.Z)((0,a.Z)({separator:(0,d.jsx)(n.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:l?h:m}))}function v(e){var r=e.link,t=r.href,a=r.name,o=r.icon;return(0,d.jsxs)(l.Z,{variant:"body2",component:s.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&(0,d.jsx)(n.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),a]},a)}var h=["links","action","heading","moreLink","sx"];function m(e){var r=e.links,t=e.action,s=e.heading,c=e.moreLink,u=void 0===c?[]:c,v=e.sx,m=(0,o.Z)(e,h);return(0,d.jsxs)(n.Z,{sx:(0,a.Z)({mb:5},v),children:[(0,d.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(n.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,d.jsx)(p,(0,a.Z)({links:r},m))]}),t&&(0,d.jsx)(n.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(n.Z,{sx:{mt:2},children:"string"===typeof u?(0,d.jsx)(l.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,d.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},71361:function(e,r,t){var a=t(1413),o=t(45987),n=t(75192),i=t.n(n),l=t(65964),s=t(47313),c=t(57829),d=t(46417),u=["children","title","meta"],p=(0,s.forwardRef)((function(e,r){var t=e.children,n=e.title,i=void 0===n?"":n,s=e.meta,p=(0,o.Z)(e,u);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.ql,{children:[(0,d.jsx)("title",{children:"".concat(i," | Force Host")}),s]}),(0,d.jsx)(c.Z,(0,a.Z)((0,a.Z)({ref:r},p),{},{children:t}))]})}));p.propTypes={children:i().node.isRequired,title:i().string,meta:i().node},r.Z=p},67045:function(e,r,t){t.r(r),t.d(r,{default:function(){return U}});var a=t(93433),o=t(29439),n=t(47313),i=t(4942),l=t(63366),s=t(87462),c=(t(96214),t(83061)),d=t(21921),u=t(17592),p=t(77342),v=t(91615);function h(e,r){return void 0!==r&&void 0!==e&&(Array.isArray(r)?r.indexOf(e)>=0:e===r)}var m=t(32298),f=t(77430);function g(e){return(0,m.Z)("MuiToggleButtonGroup",e)}var Z=(0,f.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),x=t(46417),b=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],y=(0,u.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[(0,i.Z)({},"& .".concat(Z.grouped),r.grouped),(0,i.Z)({},"& .".concat(Z.grouped),r["grouped".concat((0,v.Z)(t.orientation))]),r.root,"vertical"===t.orientation&&r.vertical,t.fullWidth&&r.fullWidth]}})((function(e){var r=e.ownerState,t=e.theme;return(0,s.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===r.orientation&&{flexDirection:"column"},r.fullWidth&&{width:"100%"},(0,i.Z)({},"& .".concat(Z.grouped),(0,s.Z)({},"horizontal"===r.orientation?(0,i.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(Z.selected," + .").concat(Z.grouped,".").concat(Z.selected),{borderLeft:0,marginLeft:0}):(0,i.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(Z.selected," + .").concat(Z.grouped,".").concat(Z.selected),{borderTop:0,marginTop:0}))))})),j=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiToggleButtonGroup"}),a=t.children,o=t.className,i=t.color,u=void 0===i?"standard":i,m=t.disabled,f=void 0!==m&&m,Z=t.exclusive,j=void 0!==Z&&Z,R=t.fullWidth,C=void 0!==R&&R,w=t.onChange,k=t.orientation,S=void 0===k?"horizontal":k,T=t.size,M=void 0===T?"medium":T,z=t.value,B=(0,l.Z)(t,b),N=(0,s.Z)({},t,{disabled:f,fullWidth:C,orientation:S,size:M}),P=function(e){var r=e.classes,t=e.orientation,a=e.fullWidth,o=e.disabled,n={root:["root","vertical"===t&&"vertical",a&&"fullWidth"],grouped:["grouped","grouped".concat((0,v.Z)(t)),o&&"disabled"]};return(0,d.Z)(n,g,r)}(N),W=function(e,r){if(w){var t,a=z&&z.indexOf(r);z&&a>=0?(t=z.slice()).splice(a,1):t=z?z.concat(r):[r],w(e,t)}},L=function(e,r){w&&w(e,z===r?null:r)};return(0,x.jsx)(y,(0,s.Z)({role:"group",className:(0,c.Z)(P.root,o),ref:r,ownerState:N},B,{children:n.Children.map(a,(function(e){return n.isValidElement(e)?n.cloneElement(e,{className:(0,c.Z)(P.grouped,e.props.className),onChange:j?L:W,selected:void 0===e.props.selected?h(e.props.value,z):e.props.selected,size:e.props.size||M,fullWidth:C,color:e.props.color||u,disabled:e.props.disabled||f}):null}))}))})),R=t(17551),C=t(67999);function w(e){return(0,m.Z)("MuiToggleButton",e)}var k=(0,f.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),S=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],T=(0,u.ZP)(C.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["size".concat((0,v.Z)(t.size))]]}})((function(e){var r,t,a=e.theme,o=e.ownerState,n="standard"===o.color?a.palette.text.primary:a.palette[o.color].main;return a.vars&&(n="standard"===o.color?a.vars.palette.text.primary:a.vars.palette[o.color].main,t="standard"===o.color?a.vars.palette.text.primaryChannel:a.vars.palette[o.color].mainChannel),(0,s.Z)({},a.typography.button,{borderRadius:(a.vars||a).shape.borderRadius,padding:11,border:"1px solid ".concat((a.vars||a).palette.divider),color:(a.vars||a).palette.action.active},o.fullWidth&&{width:"100%"},(r={},(0,i.Z)(r,"&.".concat(k.disabled),{color:(a.vars||a).palette.action.disabled,border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)}),(0,i.Z)(r,"&:hover",{textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,i.Z)(r,"&.".concat(k.selected),{color:n,backgroundColor:a.vars?"rgba(".concat(t," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,R.Fq)(n,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(t," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,R.Fq)(n,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(t," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,R.Fq)(n,a.palette.action.selectedOpacity)}}}),r),"small"===o.size&&{padding:7,fontSize:a.typography.pxToRem(13)},"large"===o.size&&{padding:15,fontSize:a.typography.pxToRem(15)})})),M=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiToggleButton"}),a=t.children,o=t.className,n=t.color,i=void 0===n?"standard":n,u=t.disabled,h=void 0!==u&&u,m=t.disableFocusRipple,f=void 0!==m&&m,g=t.fullWidth,Z=void 0!==g&&g,b=t.onChange,y=t.onClick,j=t.selected,R=t.size,C=void 0===R?"medium":R,k=t.value,M=(0,l.Z)(t,S),z=(0,s.Z)({},t,{color:i,disabled:h,disableFocusRipple:f,fullWidth:Z,size:C}),B=function(e){var r=e.classes,t=e.fullWidth,a=e.selected,o=e.disabled,n=e.size,i=e.color,l={root:["root",a&&"selected",o&&"disabled",t&&"fullWidth","size".concat((0,v.Z)(n)),i]};return(0,d.Z)(l,w,r)}(z);return(0,x.jsx)(T,(0,s.Z)({className:(0,c.Z)(B.root,o),disabled:h,focusRipple:!f,ref:r,onClick:function(e){y&&(y(e,k),e.defaultPrevented)||b&&b(e,k)},onChange:b,value:k,ownerState:z,"aria-pressed":j},M,{children:a}))})),z=t(61113);function B(e){return(0,m.Z)("MuiCardHeader",e)}var N=(0,f.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),P=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],W=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,s.Z)((t={},(0,i.Z)(t,"& .".concat(N.title),r.title),(0,i.Z)(t,"& .".concat(N.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),L=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),O=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),_=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),A=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiCardHeader"}),a=t.action,o=t.avatar,n=t.className,i=t.component,u=void 0===i?"div":i,v=t.disableTypography,h=void 0!==v&&v,m=t.subheader,f=t.subheaderTypographyProps,g=t.title,Z=t.titleTypographyProps,b=(0,l.Z)(t,P),y=(0,s.Z)({},t,{component:u,disableTypography:h}),j=function(e){var r=e.classes;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},B,r)}(y),R=g;null==R||R.type===z.Z||h||(R=(0,x.jsx)(z.Z,(0,s.Z)({variant:o?"body2":"h5",className:j.title,component:"span",display:"block"},Z,{children:R})));var C=m;return null==C||C.type===z.Z||h||(C=(0,x.jsx)(z.Z,(0,s.Z)({variant:o?"body2":"body1",className:j.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:C}))),(0,x.jsxs)(W,(0,s.Z)({className:(0,c.Z)(j.root,n),as:u,ref:r,ownerState:y},b,{children:[o&&(0,x.jsx)(L,{className:j.avatar,ownerState:y,children:o}),(0,x.jsxs)(_,{className:j.content,ownerState:y,children:[R,C]}),a&&(0,x.jsx)(O,{className:j.action,ownerState:y,children:a})]}))})),H=t(70178),q=t(57829),F=t(73428),I=t(11338),D=t(48175),G=t(71361),V=t(67871),E=t(89144);function U(){var e=(0,I.Z)().themeStretch,r=(0,n.useState)("admin"),t=(0,o.Z)(r,2),i=t[0],l=t[1];return(0,x.jsx)(G.Z,{title:"Permission Denied",children:(0,x.jsxs)(H.Z,{maxWidth:!e&&"lg",children:[(0,x.jsx)(V.Z,{heading:"Permission Denied",links:[{name:"Dashboard",href:D.vB.root},{name:"Permission Denied"}]}),(0,x.jsxs)(j,{exclusive:!0,value:i,onChange:function(e,r){null!==r&&l(r)},color:"primary",sx:{mb:5},children:[(0,x.jsx)(M,{value:"admin","aria-label":"admin role",children:"isAdmin"}),(0,x.jsx)(M,{value:"user","aria-label":"user role",children:"isUser"})]}),(0,x.jsx)(E.Z,{hasContent:!0,roles:[i],children:(0,x.jsx)(q.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(2, 1fr)"},children:(0,a.Z)(Array(8)).map((function(e,r){return(0,x.jsxs)(F.Z,{children:[(0,x.jsx)(A,{title:"Card ".concat(r+1),subheader:"Proin viverra ligula"}),(0,x.jsx)(z.Z,{sx:{p:3,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},r)}))})})]})})}},3404:function(e,r,t){t.d(r,{Z:function(){return z}});var a=t(93433),o=t(29439),n=t(4942),i=t(87462),l=t(63366),s=t(47313),c=(t(96214),t(83061)),d=t(21921),u=t(17592),p=t(77342),v=t(61113),h=t(17551),m=t(54750),f=t(46417),g=(0,m.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(67999),x=(0,u.ZP)(Z.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(g)({width:24,height:16});var y=function(e){var r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},j=t(32298);function R(e){return(0,j.Z)("MuiBreadcrumbs",e)}var C=(0,t(77430).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,u.ZP)(v.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(C.li),r.li),r.root]}})({}),S=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),T=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,r,t,a){return e.reduce((function(o,n,i){return i<e.length-1?o=o.concat(n,(0,f.jsx)(T,{"aria-hidden":!0,className:r,ownerState:a,children:t},"separator-".concat(i))):o.push(n),o}),[])}var z=s.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),n=t.children,u=t.className,v=t.component,h=void 0===v?"nav":v,m=t.expandText,g=void 0===m?"Show path":m,Z=t.itemsAfterCollapse,x=void 0===Z?1:Z,b=t.itemsBeforeCollapse,j=void 0===b?1:b,C=t.maxItems,T=void 0===C?8:C,z=t.separator,B=void 0===z?"/":z,N=(0,l.Z)(t,w),P=s.useState(!1),W=(0,o.Z)(P,2),L=W[0],O=W[1],_=(0,i.Z)({},t,{component:h,expanded:L,expandText:g,itemsAfterCollapse:x,itemsBeforeCollapse:j,maxItems:T,separator:B}),A=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},R,r)}(_),H=s.useRef(null),q=s.Children.toArray(n).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:A.li,children:e},"child-".concat(r))}));return(0,f.jsx)(k,(0,i.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.Z)(A.root,u),ownerState:_},N,{children:(0,f.jsx)(S,{className:A.ol,ref:H,ownerState:_,children:M(L||T&&q.length<=T?q:function(e){return j+x>=e.length?e:[].concat((0,a.Z)(e.slice(0,j)),[(0,f.jsx)(y,{"aria-label":g,onClick:function(){O(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,a.Z)(e.slice(e.length-x,e.length)))}(q),A.separator,B,_)})}))}))},73428:function(e,r,t){t.d(r,{Z:function(){return f}});var a=t(87462),o=t(63366),n=t(47313),i=t(83061),l=t(21921),s=t(17592),c=t(77342),d=t(82295),u=t(32298);function p(e){return(0,u.Z)("MuiCard",e)}(0,t(77430).Z)("MuiCard",["root"]);var v=t(46417),h=["className","raised"],m=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),f=n.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),n=t.className,s=t.raised,d=void 0!==s&&s,u=(0,o.Z)(t,h),f=(0,a.Z)({},t,{raised:d}),g=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},p,r)}(f);return(0,v.jsx)(m,(0,a.Z)({className:(0,i.Z)(g.root,n),elevation:d?8:void 0,ref:r,ownerState:f},u))}))}}]);