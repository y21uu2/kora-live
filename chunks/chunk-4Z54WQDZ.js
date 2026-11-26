import{a as S}from"./chunk-6DHFEWGX.js";var Z=S(i=>{"use strict";var h=Symbol.for("react.element"),fe=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),he=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),we=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),D=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,G={};function m(e,t,r){this.props=e,this.context=t,this.refs=G,this.updater=r||V}m.prototype.isReactComponent={};m.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=m.prototype;function M(e,t,r){this.props=e,this.context=t,this.refs=G,this.updater=r||V}var P=M.prototype=new U;P.constructor=M;H(P,m.prototype);P.isPureReactComponent=!0;var j=Array.isArray,K=Object.prototype.hasOwnProperty,$={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function W(e,t,r){var n,a={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)K.call(t,n)&&!q.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:h,type:e,key:o,ref:s,props:a,_owner:$.current}}function xe(e,t){return{$$typeof:h,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function N(e){return typeof e=="object"&&e!==null&&e.$$typeof===h}function Ee(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var z=/\/+/g;function R(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ee(""+e.key):t.toString(36)}function w(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case h:case fe:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+R(s,0):n,j(a)?(r="",e!=null&&(r=e.replace(z,"$&/")+"/"),w(a,t,r,"",function(c){return c})):a!=null&&(N(a)&&(a=xe(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(z,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",j(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+R(o,l);s+=w(o,t,r,u,a)}else if(u=Ae(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+R(o,l++),s+=w(o,t,r,u,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function b(e,t,r){if(e==null)return e;var n=[],a=0;return w(e,n,"","",function(o){return t.call(r,o,a++)}),n}function Ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var d={current:null},v={transition:null},Re={ReactCurrentDispatcher:d,ReactCurrentBatchConfig:v,ReactCurrentOwner:$};function J(){throw Error("act(...) is not supported in production builds of React.")}i.Children={map:b,forEach:function(e,t,r){b(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return b(e,function(){t++}),t},toArray:function(e){return b(e,function(t){return t})||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};i.Component=m;i.Fragment=me;i.Profiler=ye;i.PureComponent=M;i.StrictMode=pe;i.Suspense=be;i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Re;i.act=J;i.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=H({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=$.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)K.call(t,u)&&!q.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:h,type:e.type,key:a,ref:o,props:n,_owner:s}};i.createContext=function(e){return e={$$typeof:he,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ge,_context:e},e.Consumer=e};i.createElement=W;i.createFactory=function(e){var t=W.bind(null,e);return t.type=e,t};i.createRef=function(){return{current:null}};i.forwardRef=function(e){return{$$typeof:Se,render:e}};i.isValidElement=N;i.lazy=function(e){return{$$typeof:ve,_payload:{_status:-1,_result:e},_init:Ce}};i.memo=function(e,t){return{$$typeof:we,type:e,compare:t===void 0?null:t}};i.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};i.unstable_act=J;i.useCallback=function(e,t){return d.current.useCallback(e,t)};i.useContext=function(e){return d.current.useContext(e)};i.useDebugValue=function(){};i.useDeferredValue=function(e){return d.current.useDeferredValue(e)};i.useEffect=function(e,t){return d.current.useEffect(e,t)};i.useId=function(){return d.current.useId()};i.useImperativeHandle=function(e,t,r){return d.current.useImperativeHandle(e,t,r)};i.useInsertionEffect=function(e,t){return d.current.useInsertionEffect(e,t)};i.useLayoutEffect=function(e,t){return d.current.useLayoutEffect(e,t)};i.useMemo=function(e,t){return d.current.useMemo(e,t)};i.useReducer=function(e,t,r){return d.current.useReducer(e,t,r)};i.useRef=function(e){return d.current.useRef(e)};i.useState=function(e){return d.current.useState(e)};i.useSyncExternalStore=function(e,t,r){return d.current.useSyncExternalStore(e,t,r)};i.useTransition=function(){return d.current.useTransition()};i.version="18.3.1"});var Q=S((qe,Y)=>{"use strict";Y.exports=Z()});var ee=S(A=>{"use strict";var Me=Q(),Pe=Symbol.for("react.element"),$e=Symbol.for("react.fragment"),Ne=Object.prototype.hasOwnProperty,_e=Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Te={key:!0,ref:!0,__self:!0,__source:!0};function X(e,t,r){var n,a={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Ne.call(t,n)&&!Te.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Pe,type:e,key:o,ref:s,props:a,_owner:_e.current}}A.Fragment=$e;A.jsx=X;A.jsxs=X});var Ie=S((Je,te)=>{"use strict";te.exports=ee()});var oe="https://site.api.espn.com/apis/site/v2/sports/soccer",Ze="https://site.api.espn.com/apis/v2/sports/soccer",T={700:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0627\u0644\u0645\u0645\u062A\u0627\u0632",slug:"eng.1"},740:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u0633\u0628\u0627\u0646\u064A",slug:"esp.1"},730:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A",slug:"ita.1"},720:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A",slug:"ger.1"},710:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0641\u0631\u0646\u0633\u064A",slug:"fra.1"},21231:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0633\u0639\u0648\u062F\u064A (\u0631\u0648\u0634\u0646)",slug:"ksa.1"},775:{ar:"\u062F\u0648\u0631\u064A \u0623\u0628\u0637\u0627\u0644 \u0623\u0648\u0631\u0648\u0628\u0627",slug:"uefa.champions"},776:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A",slug:"uefa.europa"},20296:{ar:"\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0624\u062A\u0645\u0631 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A",slug:"uefa.europa.conf"},2391:{ar:"\u062F\u0648\u0631\u064A \u0623\u0628\u0637\u0627\u0644 \u0623\u0641\u0631\u064A\u0642\u064A\u0627",slug:"caf.champions"},18e3:{ar:"\u0627\u0644\u0643\u0648\u0646\u0641\u062F\u0631\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u0641\u0631\u064A\u0642\u064A\u0629",slug:"caf.confed"},3914:{ar:"\u062A\u0634\u0627\u0645\u0628\u064A\u0648\u0646\u0634\u064A\u0628 (\u0625\u0646\u062C\u0644\u062A\u0631\u0627 2)",slug:"eng.2"},3918:{ar:"\u0643\u0623\u0633 \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A"},3920:{ar:"\u0643\u0623\u0633 \u0627\u0644\u0631\u0627\u0628\u0637\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629"},3951:{ar:"\u0643\u0623\u0633 \u0645\u0644\u0643 \u0625\u0633\u0628\u0627\u0646\u064A\u0627"},790:{ar:"\u062A\u0635\u0641\u064A\u0627\u062A \u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 - \u0623\u0641\u0631\u064A\u0642\u064A\u0627"},786:{ar:"\u062A\u0635\u0641\u064A\u0627\u062A \u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 - \u0623\u0648\u0631\u0648\u0628\u0627"},3922:{ar:"\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0648\u062F\u064A\u0629 \u062F\u0648\u0644\u064A\u0629"},3908:{ar:"\u0643\u0623\u0633 \u0627\u0644\u0623\u0645\u0645 \u0627\u0644\u0623\u0641\u0631\u064A\u0642\u064A\u0629"},630:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0628\u0631\u0627\u0632\u064A\u0644\u064A",slug:"bra.1"},745:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646\u064A",slug:"arg.1"},770:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A MLS",slug:"usa.1"},715:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0628\u0631\u062A\u063A\u0627\u0644\u064A",slug:"por.1"},725:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0647\u0648\u0644\u0646\u062F\u064A",slug:"ned.1"},3946:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u062A\u0631\u0643\u064A",slug:"tur.1"},3902:{ar:"\u062F\u0648\u0631\u064A \u0623\u0628\u0637\u0627\u0644 \u0622\u0633\u064A\u0627 \u0644\u0644\u0646\u062E\u0628\u0629"},760:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0643\u0633\u064A\u0643\u064A",slug:"mex.1"},735:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0627\u0633\u0643\u062A\u0644\u0646\u062F\u064A",slug:"sco.1"},3901:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0628\u0644\u062C\u064A\u0643\u064A",slug:"bel.1"},2395:{ar:"\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0645\u0645 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A\u0629"},783:{ar:"\u0643\u0648\u0628\u0627 \u0644\u064A\u0628\u0631\u062A\u0627\u062F\u0648\u0631\u064A\u0633"},606:{ar:"\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645"},781:{ar:"\u0628\u0637\u0648\u0644\u0629 \u0623\u0648\u0631\u0648\u0628\u0627"},3927:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A 2",slug:"ger.2"},3931:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A 2",slug:"ita.2"},3921:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u0633\u0628\u0627\u0646\u064A 2",slug:"esp.2"},3926:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0641\u0631\u0646\u0633\u064A 2",slug:"fra.2"},3955:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u064A\u0648\u0646\u0627\u0646\u064A",slug:"gre.1"},3939:{ar:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0631\u0648\u0633\u064A",slug:"rus.1"}},re=["700","740","730","720","710","21231","775","776","20296","2391","18000"],Ye=Object.entries(T).filter(([,e])=>e.slug).map(([e,t])=>({id:e,slug:t.slug,ar:t.ar})).sort((e,t)=>(re.indexOf(e.id)+1||99)-(re.indexOf(t.id)+1||99)),Qe={bein:{name:"beIN SPORTS",url:"https://www.beinsports.com/ar-mena",note:"\u0642\u0646\u0648\u0627\u062A beIN SPORTS \u0645\u0634\u0641\u0631\u0629 (\u0627\u0634\u062A\u0631\u0627\u0643)"},tod:{name:"TOD (\u0628\u062B beIN \u0627\u0644\u0631\u0642\u0645\u064A)",url:"https://www.tod.tv",note:"\u0645\u0646\u0635\u0629 \u0627\u0644\u0628\u062B \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0644\u0640 beIN"},thmanyah:{name:"\u062B\u0645\u0627\u0646\u064A\u0629",url:"https://thmanyah.com",note:"\u0627\u0644\u0646\u0627\u0642\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0633\u0639\u0648\u062F\u064A"},mbc:{name:"MBC \u0634\u0627\u0647\u062F \u0631\u064A\u0627\u0636\u0629",url:"https://shahid.mbc.net/ar",note:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A (\u062D\u0633\u0628 \u062C\u062F\u0648\u0644 24 \u0623\u0643\u062A\u0648\u0628\u0631)"},stc:{name:"stc tv",url:"https://www.stctv.com",note:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A (\u062D\u0633\u0628 \u062C\u062F\u0648\u0644 24 \u0623\u0643\u062A\u0648\u0628\u0631)"},on:{name:"ON Sport (\u0623\u0648\u0646 \u0633\u0628\u0648\u0631\u062A)",url:"https://play.google.com/store/apps/details?hl=ar&id=com.clicks.onSportsKora",note:"\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0635\u0631\u064A \u0648\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u0623\u0646\u062F\u064A\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0623\u0641\u0631\u064A\u0642\u064A\u0627\u064B"}},ke={700:{main:["bein","tod"],text:"beIN SPORTS (\u0643\u0644 \u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u062F\u0648\u0631\u064A\u060C \u062D\u0642\u0648\u0642 \u062D\u0635\u0631\u064A\u0629 \u062D\u062A\u0649 2028)"},740:{main:["bein","tod"],text:"beIN SPORTS (\u0643\u0644 \u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0625\u0633\u0628\u0627\u0646\u064A)"},710:{main:["bein","tod"],text:"beIN SPORTS (\u0643\u0644 \u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0641\u0631\u0646\u0633\u064A)"},775:{main:["bein","tod"],text:"beIN SPORTS (\u062F\u0648\u0631\u064A \u0623\u0628\u0637\u0627\u0644 \u0623\u0648\u0631\u0648\u0628\u0627)"},776:{main:["bein","tod"],text:"beIN SPORTS (\u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A)"},20296:{main:["bein","tod"],text:"beIN SPORTS (\u062F\u0648\u0631\u064A \u0627\u0644\u0645\u0624\u062A\u0645\u0631)"},3946:{main:["bein","tod"],text:"beIN SPORTS (\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0645\u062E\u062A\u0627\u0631\u0629 \u0645\u0646 \u0627\u0644\u062F\u0648\u0631\u064A \u0627\u0644\u062A\u0631\u0643\u064A)"},2391:{main:["bein","tod","on"],text:"beIN SPORTS\u060C \u0648\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u0623\u0646\u062F\u064A\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0639\u0644\u0649 ON Sport"},18e3:{main:["bein","tod","on"],text:"beIN SPORTS\u060C \u0648\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u0623\u0646\u062F\u064A\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0639\u0644\u0649 ON Sport"},21231:{main:["thmanyah"],text:"\u062B\u0645\u0627\u0646\u064A\u0629 (\u0642\u0646\u0648\u0627\u062A \u0648\u062A\u0637\u0628\u064A\u0642)"},730:{main:["stc"],text:"stc tv (\u062D\u0633\u0628 \u062C\u062F\u0648\u0644 \u0628\u062B 24 \u0623\u0643\u062A\u0648\u0628\u0631 2026)"},720:{main:["mbc"],text:"MBC \u0634\u0627\u0647\u062F \u0631\u064A\u0627\u0636\u0629 / MBC Action (\u062D\u0633\u0628 \u062C\u062F\u0648\u0644 24 \u0623\u0643\u062A\u0648\u0628\u0631 2026)"},3902:{main:["bein","tod"],text:"beIN SPORTS (\u062F\u0648\u0631\u064A \u0623\u0628\u0637\u0627\u0644 \u0622\u0633\u064A\u0627 \u0644\u0644\u0646\u062E\u0628\u0629)"}};function Xe(e){return ke[e]??null}function et(e,t){return T[e]?T[e].ar:"\u0628\u0637\u0648\u0644\u0629 \u0623\u062E\u0631\u0649"}function Fe(e){let t=/l:(\d+)/.exec(e||"");return t?t[1]:""}var Oe=e=>e&&typeof e=="object"?String(e.displayValue??e.value??""):e==null?"":String(e);function ne(e){let t=e?.team??{};return{id:String(t.id??e?.id??""),name:t.displayName??t.name??"\u061F",short:t.shortDisplayName??t.displayName??"\u061F",abbr:t.abbreviation??"",color:t.color?"#"+t.color:"#585254",score:Oe(e?.score),form:e?.form,winner:e?.winner}}function Le(e){let t=e?.competitions?.[0];if(!t)return null;let r=t.competitors??[],n=r.find(s=>s.homeAway==="home")??r[0],a=r.find(s=>s.homeAway==="away")??r[1];if(!n||!a)return null;let o=t.status??e.status??{};return{id:String(e.id),leagueId:Fe(e.uid),leagueSlug:e.season?.slug??"",date:e.date,state:o.type?.state??"pre",detail:o.type?.shortDetail??"",clock:o.displayClock??"",home:ne(n),away:ne(a),venue:t.venue?.fullName}}function tt(e){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Africa/Cairo",year:"numeric",month:"2-digit",day:"2-digit"}).format(t).replace(/-/g,"")}function rt(e){return new Intl.DateTimeFormat("ar-EG-u-nu-latn",{timeZone:"Africa/Cairo",hour:"numeric",minute:"2-digit",hour12:!0}).format(new Date(e))}function nt(e){return new Intl.DateTimeFormat("ar-EG-u-nu-latn",{timeZone:"Africa/Cairo",weekday:"long",day:"numeric",month:"long"}).format(new Date(e))}function at(e){let t=new Date(Date.now()+e*864e5);return{wd:new Intl.DateTimeFormat("ar-EG-u-nu-latn",{timeZone:"Africa/Cairo",weekday:"short"}).format(t),dm:new Intl.DateTimeFormat("ar-EG-u-nu-latn",{timeZone:"Africa/Cairo",day:"numeric",month:"numeric"}).format(t)}}async function p(e){let t=e.includes("?")?"&":"?",r=await fetch(e+t+"_="+Math.floor(Date.now()/8e3));if(!r.ok)throw new Error("HTTP "+r.status);return r.json()}async function ot(e){return((await p(`${oe}/all/scoreboard?dates=${e}&limit=400`)).events??[]).map(Le).filter(Boolean)}function it(e){return(e?.keyEvents??[]).map(t=>({id:String(t.id??t.sequence??Math.random()),type:t.type?.type??"",min:t.clock?.displayValue??"",team:t.team?.displayName??"",text:t.text??t.shortText??"",players:(t.participants??[]).map(r=>r?.athlete?.displayName).filter(Boolean),minute:t.clock?.value??0}))}function st(e,t){let r=e.type,n=e.min?` \u0641\u064A \u0627\u0644\u062F\u0642\u064A\u0642\u0629 ${e.min.replace("'","")}`:"",a=(()=>{let s=/(\d+),\s.*?(\d+)\./.exec(e.text);return s?` \u0627\u0644\u0646\u062A\u064A\u062C\u0629 ${s[1]} \u0645\u0642\u0627\u0628\u0644 ${s[2]}.`:""})(),o=e.players[0];return r==="own-goal"?`\u0647\u062F\u0641 \u0639\u0643\u0633\u064A${n}${o?" \u0645\u0646 "+o:""} \u0644\u0635\u0627\u0644\u062D \u0627\u0644\u062E\u0635\u0645.${a}`:r.includes("penalty")&&r.includes("miss")?`\u0636\u0631\u0628\u0629 \u062C\u0632\u0627\u0621 \u0636\u0627\u0626\u0639\u0629${n}${o?" \u0645\u0646 "+o:""} \u0644\u0641\u0631\u064A\u0642 ${e.team}!`:r.includes("penalty")&&(r.includes("score")||r.includes("goal"))?`\u062C\u0648\u0648\u0648\u0648\u0644 \u0645\u0646 \u0636\u0631\u0628\u0629 \u062C\u0632\u0627\u0621${n}! ${o??""} \u064A\u0633\u062C\u0644 \u0644\u0641\u0631\u064A\u0642 ${e.team}.${a}`:r.includes("penalty")&&r.includes("saved")?`\u0636\u0631\u0628\u0629 \u062C\u0632\u0627\u0621 \u064A\u062A\u0635\u062F\u0649 \u0644\u0647\u0627 \u0627\u0644\u062D\u0627\u0631\u0633${n}${o?" (\u0645\u0646 "+o+")":""}.`:r.startsWith("goal")||r.endsWith("-goal")||r==="goal---header"||r==="goal---free-kick"?`\u062C\u0648\u0648\u0648\u0648\u0644${n}! ${o??""} \u064A\u0633\u062C\u0644 \u0644\u0641\u0631\u064A\u0642 ${e.team}.${a}`:r==="yellow-card"?`\u0625\u0646\u0630\u0627\u0631 \u0623\u0635\u0641\u0631${n} \u0644\u0644\u0627\u0639\u0628 ${o??""} \u0645\u0646 ${e.team}.`:r==="red-card"?`\u0637\u0631\u062F${n}! \u0628\u0637\u0627\u0642\u0629 \u062D\u0645\u0631\u0627\u0621 \u0644\u0644\u0627\u0639\u0628 ${o??""} \u0645\u0646 ${e.team}.`:r==="substitution"?`\u062A\u0628\u062F\u064A\u0644 \u0641\u064A ${e.team}${n}: \u064A\u062F\u062E\u0644 ${e.players[0]??""} \u0628\u062F\u0644\u0627\u064B \u0645\u0646 ${e.players[1]??""}.`:r.includes("shootout")?r.includes("miss")||r.includes("save")?`\u0636\u0631\u0628\u0629 \u062A\u0631\u062C\u064A\u062D \u0636\u0627\u0626\u0639\u0629${o?" \u0645\u0646 "+o:""} (${e.team}).`:`\u0636\u0631\u0628\u0629 \u062A\u0631\u062C\u064A\u062D \u0646\u0627\u062C\u062D\u0629${o?" \u0645\u0646 "+o:""} (${e.team}).`:r==="end-extra-time"||r==="end-of-extra-time"?"\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u064A.":r==="start-extra-time"||r==="start-1st-half-extra-time"?"\u0628\u062F\u0623 \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u064A.":r==="halftime-extra-time"||r==="end-1st-half-extra-time"?"\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0634\u0648\u0637 \u0627\u0644\u0625\u0636\u0627\u0641\u064A \u0627\u0644\u0623\u0648\u0644.":r==="kickoff"?`\u0627\u0646\u0637\u0644\u0642\u062A \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629 \u0628\u064A\u0646 ${t.home} \u0648 ${t.away}.`:r==="halftime"?"\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0634\u0648\u0637 \u0627\u0644\u0623\u0648\u0644.":r==="start-2nd-half"?"\u0628\u062F\u0623 \u0627\u0644\u0634\u0648\u0637 \u0627\u0644\u062B\u0627\u0646\u064A.":r==="end-regular-time"?"\u0623\u0637\u0644\u0642 \u0627\u0644\u062D\u0643\u0645 \u0635\u0627\u0641\u0631\u0629 \u0627\u0644\u0646\u0647\u0627\u064A\u0629.":r.includes("var")?`\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 VAR${n}.`:null}var ie="https://www.thesportsdb.com/api/v1/json/123";async function ut(e){return((await p(`${ie}/eventsround.php?id=4829&r=${e}&s=2026-2027`)).events??[]).map(r=>({id:String(r.idEvent),round:e,ts:r.strTimestamp+"Z",home:r.strHomeTeam,away:r.strAwayTeam,hs:r.intHomeScore==null||r.intHomeScore===""?null:Number(r.intHomeScore),as:r.intAwayScore==null||r.intAwayScore===""?null:Number(r.intAwayScore),status:r.strStatus??"",venue:r.strVenue??""}))}async function lt(){let e=await p(`${ie}/eventspastleague.php?id=4829`);return Number(e.events?.[0]?.intRound)||1}var _=new Map,ae=e=>{let t=e.replace("http://","https://");return _.has(t)||_.set(t,p(t)),_.get(t)};async function ct(e){let t=new Date().getFullYear(),r=null;for(let s of[t,t-1])try{if(r=await p(`https://sports.core.api.espn.com/v2/sports/soccer/leagues/${e}/seasons/${s}/types/1/leaders`),r?.categories?.length)break}catch{}if(!r?.categories)throw new Error("no leaders");let n=async s=>{let u=(r.categories.find(c=>c.name===s)?.leaders??[]).slice(0,10);return Promise.all(u.map(async c=>{let[L,B]=await Promise.all([c.athlete?.$ref?ae(c.athlete.$ref).catch(()=>null):null,c.team?.$ref?ae(c.team.$ref).catch(()=>null):null]);return{name:L?.displayName??L?.fullName??"\u061F",team:B?.displayName??"",teamId:String(B?.id??""),value:Number(c.value)||0,matches:/Matches: (\d+)/.exec(c.displayValue??"")?.[1]??""}}))},[a,o]=await Promise.all([n("goalsLeaders"),n("assistsLeaders")]);return{goals:a,assists:o}}async function dt(e){return((await p(`${oe}/${e}/news?limit=20`)).articles??[]).map(r=>({id:String(r.id),title:r.headline??"",desc:r.description??"",at:r.published??r.lastModified??"",url:r.links?.web?.href??""})).filter(r=>r.title&&r.url)}var se="fb.tr.v2",f={};try{f=JSON.parse(localStorage.getItem(se)||"{}")}catch{f={}}var F=0,k=!1,Be=0,x=new Set,y=new Set,E=new Set,C=new Set,g=null,I=!1,ue=e=>/[A-Za-z\u00C0-\u024F]/.test(e)&&!/[\u0600-\u06FF]/.test(e),O=e=>e?f[e]:void 0,mt=()=>k,pt=()=>F,yt=e=>(x.add(e),()=>{x.delete(e)});function le(){let e=Object.keys(f);if(e.length>900)for(let t of e.slice(0,150))delete f[t];try{localStorage.setItem(se,JSON.stringify(f))}catch{}}async function De(e){try{let t=await fetch("https://api.mymemory.translated.net/get?langpair=en|ar&q="+encodeURIComponent(e.join(`
`)));if(!t.ok)return null;let r=await t.json(),n=r?.responseData?.translatedText??"";if(r?.responseStatus!==200||r?.quotaFinished||/MYMEMORY WARNING|QUERY LENGTH/i.test(n))return null;let a=n.split(`
`).map(o=>o.trim());return a.length===e.length?a:null}catch{return null}}async function je(e){try{let t=await fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&origin=*&type=item&limit=4&language=en&uselang=ar&search="+encodeURIComponent(e));if(!t.ok)return null;let r=await t.json();for(let n of r?.search??[]){let a=String(n.label??""),o=String(n.description??"");if(/[\u0600-\u06FF]/.test(a)&&/كرة القدم|كرة قدم|football/i.test(o))return a.replace(/\s*\(.*?\)\s*/g," ").trim()}return null}catch{return null}}async function ze(){let e=[...E];E.clear();let t=0,r=0,n=async()=>{for(;t<e.length;){let a=e[t++],o=await je(a);o?(f[a]=o,r++):y.add(a)}};await Promise.all([n(),n(),n(),n()]),r&&(le(),F++,x.forEach(a=>a()))}async function ce(){if(!I){I=!0;try{for(E.size&&await ze();y.size;){let e=[],t=0;for(let n of y){if(t+n.length>420&&e.length)break;e.push(n),t+=n.length+1,y.delete(n)}let r=await De(e);if(Be+=t,r?(k=!1,e.forEach((n,a)=>{r[a]&&r[a]!==n&&(f[n]=r[a])}),le()):k=!0,F++,x.forEach(n=>n()),!r){y.clear();break}}}finally{I=!1}}}function gt(e){let t=!1;for(let r of e)r&&r.length<120&&ue(r)&&f[r]===void 0&&!C.has(r)&&(C.add(r),y.add(r),t=!0);t&&!g&&(g=setTimeout(()=>{g=null,ce()},350))}function ht(e){let t=!1;for(let r of e)r&&r.length<60&&ue(r)&&f[r]===void 0&&!C.has(r)&&(C.add(r),E.add(r),t=!0);t&&!g&&(g=setTimeout(()=>{g=null,ce()},350))}var Ve=`Al Ahly|\u0627\u0644\u0623\u0647\u0644\u064A
Zamalek|\u0627\u0644\u0632\u0645\u0627\u0644\u0643
Pyramids FC|\u0628\u064A\u0631\u0627\u0645\u064A\u062F\u0632
Pyramids|\u0628\u064A\u0631\u0627\u0645\u064A\u062F\u0632
Al Masry|\u0627\u0644\u0645\u0635\u0631\u064A
Al Ittihad Alexandria|\u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0633\u0643\u0646\u062F\u0631\u064A
Smouha|\u0633\u0645\u0648\u062D\u0629
National Bank of Egypt|\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0623\u0647\u0644\u064A
ENPPI|\u0627\u0644\u0634\u0631\u0642\u064A\u0629 \u0625\u0646\u0628\u064A
Ceramica Cleopatra|\u0633\u064A\u0631\u0627\u0645\u064A\u0643\u0627 \u0643\u0644\u064A\u0648\u0628\u0627\u062A\u0631\u0627
Modern Sport|\u0645\u0648\u062F\u0631\u0646 \u0633\u0628\u0648\u0631\u062A
ZED|\u0632\u062F
Petrojet|\u0645\u0646\u062A\u062E\u0628 \u0627\u0644\u0633\u0648\u064A\u0633 \u0628\u062A\u0631\u0648\u062C\u064A\u062A
El Gouna|\u0627\u0644\u062C\u0648\u0646\u0629
Wadi Degla|\u0648\u0627\u062F\u064A \u062F\u062C\u0644\u0629
Tala'ea El Gaish|\u0637\u0644\u0627\u0626\u0639 \u0627\u0644\u062C\u064A\u0634
Ghazl El Mahalla|\u063A\u0632\u0644 \u0627\u0644\u0645\u062D\u0644\u0629
Al-Mokawloon al-Arab|\u0627\u0644\u0645\u0642\u0627\u0648\u0644\u0648\u0646 \u0627\u0644\u0639\u0631\u0628
Abou Qir Fertilizers|\u0623\u0628\u0648 \u0642\u064A\u0631 \u0644\u0644\u0623\u0633\u0645\u062F\u0629
Asyut Petroleum|\u0628\u062A\u0631\u0648\u0644\u064A\u0648\u0645 \u0623\u0633\u064A\u0648\u0637
El Qanah|\u0627\u0644\u0642\u0646\u0627\u0629
Ismaily|\u0627\u0644\u0625\u0633\u0645\u0627\u0639\u064A\u0644\u064A
Haras El Hodoud|\u062D\u0631\u0633 \u0627\u0644\u062D\u062F\u0648\u062F
Future FC|\u0641\u064A\u0648\u062A\u0634\u0631
Pharco|\u0641\u0627\u0631\u0643\u0648
Egypt|\u0645\u0646\u062A\u062E\u0628 \u0645\u0635\u0631
Morocco|\u0627\u0644\u0645\u063A\u0631\u0628
Saudi Arabia|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629
Tunisia|\u062A\u0648\u0646\u0633
Algeria|\u0627\u0644\u062C\u0632\u0627\u0626\u0631
Senegal|\u0627\u0644\u0633\u0646\u063A\u0627\u0644
Ghana|\u063A\u0627\u0646\u0627
Ivory Coast|\u0633\u0627\u062D\u0644 \u0627\u0644\u0639\u0627\u062C
Cape Verde|\u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062E\u0636\u0631
South Africa|\u062C\u0646\u0648\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627
Congo DR|\u0627\u0644\u0643\u0648\u0646\u063A\u0648 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629
Nigeria|\u0646\u064A\u062C\u064A\u0631\u064A\u0627
Cameroon|\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0648\u0646
Mali|\u0645\u0627\u0644\u064A
Qatar|\u0642\u0637\u0631
Iraq|\u0627\u0644\u0639\u0631\u0627\u0642
Jordan|\u0627\u0644\u0623\u0631\u062F\u0646
Iran|\u0625\u064A\u0631\u0627\u0646
Japan|\u0627\u0644\u064A\u0627\u0628\u0627\u0646
South Korea|\u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629
Australia|\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627
Uzbekistan|\u0623\u0648\u0632\u0628\u0643\u0633\u062A\u0627\u0646
Brazil|\u0627\u0644\u0628\u0631\u0627\u0632\u064A\u0644
Argentina|\u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646
Uruguay|\u0623\u0648\u0631\u0648\u063A\u0648\u0627\u064A
Colombia|\u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627
Ecuador|\u0627\u0644\u0625\u0643\u0648\u0627\u062F\u0648\u0631
Paraguay|\u0628\u0627\u0631\u0627\u063A\u0648\u0627\u064A
Mexico|\u0627\u0644\u0645\u0643\u0633\u064A\u0643
United States|\u0623\u0645\u0631\u064A\u0643\u0627
Canada|\u0643\u0646\u062F\u0627
Panama|\u0628\u0646\u0645\u0627
Haiti|\u0647\u0627\u064A\u062A\u064A
Cura\xE7ao|\u0643\u0648\u0631\u0627\u0633\u0627\u0648
France|\u0641\u0631\u0646\u0633\u0627
Spain|\u0625\u0633\u0628\u0627\u0646\u064A\u0627
Germany|\u0623\u0644\u0645\u0627\u0646\u064A\u0627
England|\u0625\u0646\u062C\u0644\u062A\u0631\u0627
Portugal|\u0627\u0644\u0628\u0631\u062A\u063A\u0627\u0644
Netherlands|\u0647\u0648\u0644\u0646\u062F\u0627
Italy|\u0625\u064A\u0637\u0627\u0644\u064A\u0627
Belgium|\u0628\u0644\u062C\u064A\u0643\u0627
Croatia|\u0643\u0631\u0648\u0627\u062A\u064A\u0627
Switzerland|\u0633\u0648\u064A\u0633\u0631\u0627
Austria|\u0627\u0644\u0646\u0645\u0633\u0627
Norway|\u0627\u0644\u0646\u0631\u0648\u064A\u062C
Sweden|\u0627\u0644\u0633\u0648\u064A\u062F
Scotland|\u0627\u0633\u0643\u062A\u0644\u0646\u062F\u0627
Czechia|\u0627\u0644\u062A\u0634\u064A\u0643
T\xFCrkiye|\u062A\u0631\u0643\u064A\u0627
Bosnia-Herzegovina|\u0627\u0644\u0628\u0648\u0633\u0646\u0629
New Zealand|\u0646\u064A\u0648\u0632\u064A\u0644\u0646\u062F\u0627
Manchester City|\u0645\u0627\u0646\u0634\u0633\u062A\u0631 \u0633\u064A\u062A\u064A
Manchester United|\u0645\u0627\u0646\u0634\u0633\u062A\u0631 \u064A\u0648\u0646\u0627\u064A\u062A\u062F
Liverpool|\u0644\u064A\u0641\u0631\u0628\u0648\u0644
Arsenal|\u0623\u0631\u0633\u0646\u0627\u0644
Chelsea|\u062A\u0634\u064A\u0644\u0633\u064A
Tottenham Hotspur|\u062A\u0648\u062A\u0646\u0647\u0627\u0645
Newcastle United|\u0646\u064A\u0648\u0643\u0627\u0633\u0644
Aston Villa|\u0623\u0633\u062A\u0648\u0646 \u0641\u064A\u0644\u0627
AFC Bournemouth|\u0628\u0648\u0631\u0646\u0645\u0648\u062B
Brentford|\u0628\u0631\u064A\u0646\u062A\u0641\u0648\u0631\u062F
Brighton & Hove Albion|\u0628\u0631\u0627\u064A\u062A\u0648\u0646
Coventry City|\u0643\u0648\u0641\u0646\u062A\u0631\u064A
Crystal Palace|\u0643\u0631\u064A\u0633\u062A\u0627\u0644 \u0628\u0627\u0644\u0627\u0633
Everton|\u0625\u064A\u0641\u0631\u062A\u0648\u0646
Fulham|\u0641\u0648\u0644\u0647\u0627\u0645
Hull City|\u0647\u0627\u0644 \u0633\u064A\u062A\u064A
Ipswich Town|\u0625\u0628\u0633\u0648\u064A\u062A\u0634
Leeds United|\u0644\u064A\u062F\u0632
Nottingham Forest|\u0646\u0648\u062A\u0646\u062C\u0647\u0627\u0645 \u0641\u0648\u0631\u0633\u062A
Sunderland|\u0633\u0646\u062F\u0631\u0644\u0627\u0646\u062F
West Ham United|\u0648\u0633\u062A \u0647\u0627\u0645
Wolverhampton Wanderers|\u0648\u0648\u0644\u0641\u0631\u0647\u0627\u0645\u0628\u062A\u0648\u0646
Burnley|\u0628\u064A\u0631\u0646\u0644\u064A
Leicester City|\u0644\u064A\u0633\u062A\u0631
Real Madrid|\u0631\u064A\u0627\u0644 \u0645\u062F\u0631\u064A\u062F
Barcelona|\u0628\u0631\u0634\u0644\u0648\u0646\u0629
Atl\xE9tico Madrid|\u0623\u062A\u0644\u062A\u064A\u0643\u0648 \u0645\u062F\u0631\u064A\u062F
Sevilla|\u0625\u0634\u0628\u064A\u0644\u064A\u0629
Valencia|\u0641\u0627\u0644\u0646\u0633\u064A\u0627
Villarreal|\u0641\u064A\u0627\u0631\u064A\u0627\u0644
Real Sociedad|\u0631\u064A\u0627\u0644 \u0633\u0648\u0633\u064A\u062F\u0627\u062F
Real Betis|\u0631\u064A\u0627\u0644 \u0628\u064A\u062A\u064A\u0633
Athletic Club|\u0623\u062A\u0644\u062A\u064A\u0643 \u0628\u0644\u0628\u0627\u0648
Celta Vigo|\u0633\u064A\u0644\u062A\u0627 \u0641\u064A\u063A\u0648
Alav\xE9s|\u0623\u0644\u0627\u0641\u064A\u0633
Elche|\u0625\u0644\u062A\u0634\u064A
Espanyol|\u0625\u0633\u0628\u0627\u0646\u064A\u0648\u0644
Getafe|\u062E\u064A\u062A\u0627\u0641\u064A
Levante|\u0644\u064A\u0641\u0627\u0646\u062A\u064A
M\xE1laga|\u0645\u0627\u0644\u0642\u0629
Osasuna|\u0623\u0648\u0633\u0627\u0633\u0648\u0646\u0627
Rayo Vallecano|\u0631\u0627\u064A\u0648 \u0641\u0627\u0644\u064A\u0643\u0627\u0646\u0648
Deportivo|\u062F\u064A\u0628\u0648\u0631\u062A\u064A\u0641\u0648
Racing Santander|\u0631\u0627\u0633\u064A\u0646\u063A \u0633\u0627\u0646\u062A\u0627\u0646\u062F\u064A\u0631
Girona|\u062C\u064A\u0631\u0648\u0646\u0627
Mallorca|\u0645\u0627\u064A\u0648\u0631\u0643\u0627
Las Palmas|\u0644\u0627\u0633 \u0628\u0627\u0644\u0645\u0627\u0633
Juventus|\u064A\u0648\u0641\u0646\u062A\u0648\u0633
Internazionale|\u0625\u0646\u062A\u0631 \u0645\u064A\u0644\u0627\u0646
AC Milan|\u0645\u064A\u0644\u0627\u0646
AS Roma|\u0631\u0648\u0645\u0627
Roma|\u0631\u0648\u0645\u0627
Lazio|\u0644\u0627\u062A\u0633\u064A\u0648
Napoli|\u0646\u0627\u0628\u0648\u0644\u064A
Atalanta|\u0623\u062A\u0627\u0644\u0627\u0646\u062A\u0627
Bologna|\u0628\u0648\u0644\u0648\u0646\u064A\u0627
Cagliari|\u0643\u0627\u0644\u064A\u0627\u0631\u064A
Como|\u0643\u0648\u0645\u0648
Fiorentina|\u0641\u064A\u0648\u0631\u0646\u062A\u064A\u0646\u0627
Frosinone|\u0641\u0631\u0648\u0632\u064A\u0646\u0648\u0646\u064A
Genoa|\u062C\u0646\u0648\u0649
Lecce|\u0644\u064A\u062A\u0634\u064A
Monza|\u0645\u0648\u0646\u0632\u0627
Parma|\u0628\u0627\u0631\u0645\u0627
Sassuolo|\u0633\u0627\u0633\u0648\u0644\u0648
Torino|\u062A\u0648\u0631\u064A\u0646\u0648
Udinese|\u0623\u0648\u062F\u064A\u0646\u064A\u0632\u064A
Venezia|\u0641\u064A\u0646\u064A\u0633\u064A\u0627
Bayern Munich|\u0628\u0627\u064A\u0631\u0646 \u0645\u064A\u0648\u0646\u062E
Borussia Dortmund|\u0628\u0648\u0631\u0648\u0633\u064A\u0627 \u062F\u0648\u0631\u062A\u0645\u0648\u0646\u062F
Bayer Leverkusen|\u0628\u0627\u064A\u0631 \u0644\u064A\u0641\u0631\u0643\u0648\u0632\u0646
RB Leipzig|\u0644\u0627\u064A\u0628\u0632\u064A\u062C
Eintracht Frankfurt|\u0622\u064A\u0646\u062A\u0631\u0627\u062E\u062A \u0641\u0631\u0627\u0646\u0643\u0641\u0648\u0631\u062A
Borussia M\xF6nchengladbach|\u0645\u0648\u0646\u0634\u0646\u063A\u0644\u0627\u062F\u0628\u0627\u062E
VfB Stuttgart|\u0634\u062A\u0648\u062A\u063A\u0627\u0631\u062A
Werder Bremen|\u0641\u064A\u0631\u062F\u0631 \u0628\u0631\u064A\u0645\u0646
Schalke 04|\u0634\u0627\u0644\u0643\u0647
TSG Hoffenheim|\u0647\u0648\u0641\u0646\u0647\u0627\u064A\u0645
SC Freiburg|\u0641\u0631\u0627\u064A\u0628\u0648\u0631\u063A
Mainz|\u0645\u0627\u064A\u0646\u0632
FC Augsburg|\u0623\u0648\u063A\u0633\u0628\u0648\u0631\u063A
FC Cologne|\u0643\u0648\u0644\u0646
Hamburg SV|\u0647\u0627\u0645\u0628\u0648\u0631\u063A
1. FC Union Berlin|\u064A\u0648\u0646\u064A\u0648\u0646 \u0628\u0631\u0644\u064A\u0646
Paris Saint-Germain|\u0628\u0627\u0631\u064A\u0633 \u0633\u0627\u0646 \u062C\u064A\u0631\u0645\u0627\u0646
Marseille|\u0645\u0627\u0631\u0633\u064A\u0644\u064A\u0627
Lyon|\u0644\u064A\u0648\u0646
AS Monaco|\u0645\u0648\u0646\u0627\u0643\u0648
Lille|\u0644\u064A\u0644
Nice|\u0646\u064A\u0633
Lens|\u0644\u0627\u0646\u0633
Stade Rennais|\u0631\u064A\u0646
Brest|\u0628\u0631\u064A\u0633\u062A
Strasbourg|\u0633\u062A\u0631\u0627\u0633\u0628\u0648\u0631\u063A
Toulouse|\u062A\u0648\u0644\u0648\u0632
Nantes|\u0646\u0627\u0646\u062A
Lorient|\u0644\u0648\u0631\u064A\u0627\u0646
Angers|\u0623\u0646\u062C\u064A\u0647
Le Havre AC|\u0644\u0648 \u0647\u0627\u0641\u0631
AJ Auxerre|\u0623\u0648\u0643\u0633\u064A\u0631
Paris FC|\u0628\u0627\u0631\u064A\u0633 \u0625\u0641 \u0633\u064A
Benfica|\u0628\u0646\u0641\u064A\u0643\u0627
FC Porto|\u0628\u0648\u0631\u062A\u0648
Sporting CP|\u0633\u0628\u0648\u0631\u062A\u064A\u0646\u063A \u0644\u0634\u0628\u0648\u0646\u0629
Braga|\u0628\u0631\u0627\u062C\u0627
Vit\xF3ria de Guimaraes|\u0641\u064A\u062A\u0648\u0631\u064A\u0627 \u063A\u064A\u0645\u0627\u0631\u064A\u0634
Ajax Amsterdam|\u0623\u064A\u0627\u0643\u0633
PSV Eindhoven|\u0622\u064A\u0646\u062F\u0647\u0648\u0641\u0646
Feyenoord Rotterdam|\u0641\u064A\u0646\u0648\u0631\u062F
AZ Alkmaar|\u0623\u0644\u0643\u0645\u0627\u0631
FC Twente|\u062A\u0641\u064A\u0646\u062A\u064A
Galatasaray|\u063A\u0644\u0637\u0629 \u0633\u0631\u0627\u064A
Fenerbahce|\u0641\u0646\u0631\u0628\u062E\u0634\u0629
Besiktas|\u0628\u0634\u0643\u062A\u0627\u0634
Trabzonspor|\u0637\u0631\u0627\u0628\u0632\u0648\u0646 \u0633\u0628\u0648\u0631
Istanbul Basaksehir|\u0628\u0627\u0634\u0627\u0643 \u0634\u0647\u064A\u0631
Al Hilal|\u0627\u0644\u0647\u0644\u0627\u0644
Al Nassr|\u0627\u0644\u0646\u0635\u0631
Al Ittihad|\u0627\u0644\u0627\u062A\u062D\u0627\u062F
Al Ahli|\u0627\u0644\u0623\u0647\u0644\u064A \u0627\u0644\u0633\u0639\u0648\u062F\u064A
Al Shabab|\u0627\u0644\u0634\u0628\u0627\u0628
Al Ettifaq|\u0627\u0644\u0627\u062A\u0641\u0627\u0642
Al Fateh|\u0627\u0644\u0641\u062A\u062D
Al Faisaly|\u0627\u0644\u0641\u064A\u0635\u0644\u064A
Al Fayha|\u0627\u0644\u0641\u064A\u062D\u0627\u0621
Al Khaleej|\u0627\u0644\u062E\u0644\u064A\u062C
Al Taawoun|\u0627\u0644\u062A\u0639\u0627\u0648\u0646
Al Qadsiah|\u0627\u0644\u0642\u0627\u062F\u0633\u064A\u0629
Al Riyadh|\u0627\u0644\u0631\u064A\u0627\u0636
Al Kholood|\u0627\u0644\u062E\u0644\u0648\u062F
Al Hazem|\u0627\u0644\u062D\u0632\u0645
Al Diriyah|\u0627\u0644\u062F\u0631\u0639\u064A\u0629
Abha|\u0623\u0628\u0647\u0627
Neom SC|\u0646\u064A\u0648\u0645
Wydad AC|\u0627\u0644\u0648\u062F\u0627\u062F
Raja Casablanca|\u0627\u0644\u0631\u062C\u0627\u0621
AS FAR|\u0627\u0644\u062C\u064A\u0634 \u0627\u0644\u0645\u0644\u0643\u064A
RSB Berkane|\u0646\u0647\u0636\u0629 \u0628\u0631\u0643\u0627\u0646
Maghreb As De F\xE8s|\u0627\u0644\u0645\u063A\u0631\u0628 \u0627\u0644\u0641\u0627\u0633\u064A
Esperance Sportive de Tunis|\u0627\u0644\u062A\u0631\u062C\u064A
Club Africain|\u0627\u0644\u0646\u0627\u062F\u064A \u0627\u0644\u0623\u0641\u0631\u064A\u0642\u064A
Club Sportif Sfaxien|\u0627\u0644\u0635\u0641\u0627\u0642\u0633\u064A
CR Belouizdad|\u0634\u0628\u0627\u0628 \u0628\u0644\u0648\u0632\u062F\u0627\u062F
MC Alger|\u0645\u0648\u0644\u0648\u062F\u064A\u0629 \u0627\u0644\u062C\u0632\u0627\u0626\u0631
USM Alger|\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u062C\u0632\u0627\u0626\u0631
JS Saoura|\u0634\u0628\u064A\u0628\u0629 \u0627\u0644\u0633\u0627\u0648\u0631\u0629
Mamelodi Sundowns|\u0635\u0646 \u062F\u0627\u0648\u0646\u0632
Orlando Pirates|\u0623\u0648\u0631\u0644\u0627\u0646\u062F\u0648 \u0628\u0627\u064A\u0631\u062A\u0633
Kaizer Chiefs|\u0643\u0627\u064A\u0632\u0631 \u062A\u0634\u064A\u0641\u0633
TP Mazembe|\u0645\u0627\u0632\u064A\u0645\u0628\u064A
Simba SC|\u0633\u064A\u0645\u0628\u0627
Young Africans|\u064A\u0627\u0646\u063A \u0623\u0641\u0631\u064A\u0643\u0627\u0646\u0632
Azam FC|\u0623\u0632\u0627\u0645
Al Hilal Omdurman|\u0627\u0644\u0647\u0644\u0627\u0644 \u0623\u0645 \u062F\u0631\u0645\u0627\u0646
Al-Merrikh|\u0627\u0644\u0645\u0631\u064A\u062E
Petro de Luanda|\u0628\u062A\u0631\u0648 \u0623\u062A\u0644\u062A\u064A\u0643\u0648
Horoya|\u0647\u0648\u0631\u0648\u064A
ASEC Mimosas|\u0623\u0633\u064A\u0643 \u0645\u064A\u0645\u0648\u0632\u0627
Gor Mahia|\u063A\u0648\u0631 \u0645\u0627\u0647\u064A\u0627
Rivers United FC|\u0631\u064A\u0641\u0631\u0632 \u064A\u0648\u0646\u0627\u064A\u062A\u062F
Stade Malien|\u0633\u062A\u0627\u062F \u0645\u0627\u0644\u064A
Jwaneng Galaxy|\u062C\u0648\u0627\u0646\u064A\u0646\u062C \u062C\u0627\u0644\u0627\u0643\u0633\u064A
Medeama|\u0645\u064A\u062F\u064A\u0645\u0627
Vipers SC|\u0641\u0627\u064A\u0628\u0631\u0632
Rayon Sport|\u0631\u0627\u064A\u0648\u0646 \u0633\u0628\u0648\u0631\u062A
Flamengo|\u0641\u0644\u0627\u0645\u0646\u063A\u0648
Palmeiras|\u0628\u0627\u0644\u0645\u064A\u0631\u0627\u0633
Corinthians|\u0643\u0648\u0631\u0646\u062B\u064A\u0627\u0646\u0632
Santos|\u0633\u0627\u0646\u062A\u0648\u0633
Fluminense|\u0641\u0644\u0648\u0645\u064A\u0646\u064A\u0646\u0633\u064A
Botafogo|\u0628\u0648\u062A\u0627\u0641\u0648\u063A\u0648
Cruzeiro|\u0643\u0631\u0648\u0632\u064A\u0631\u0648
Gr\xEAmio|\u063A\u0631\u064A\u0645\u064A\u0648
S\xE3o Paulo|\u0633\u0627\u0648 \u0628\u0627\u0648\u0644\u0648
Vasco da Gama|\u0641\u0627\u0633\u0643\u0648 \u062F\u0627 \u063A\u0627\u0645\u0627
Internacional|\u0625\u0646\u062A\u0631\u0646\u0627\u0633\u064A\u0648\u0646\u0627\u0644`,He=`Mohamed Salah|\u0645\u062D\u0645\u062F \u0635\u0644\u0627\u062D
Mohamed Elneny|\u0645\u062D\u0645\u062F \u0627\u0644\u0646\u0646\u064A
Omar Marmoush|\u0639\u0645\u0631 \u0645\u0631\u0645\u0648\u0634
Trezeguet|\u062A\u0631\u064A\u0632\u064A\u063A\u064A\u0647
Mostafa Mohamed|\u0645\u0635\u0637\u0641\u0649 \u0645\u062D\u0645\u062F
Zizo|\u0632\u064A\u0632\u0648
Ahmed Sayed Zizo|\u0632\u064A\u0632\u0648
Mohamed Abou Gabal|\u0645\u062D\u0645\u062F \u0623\u0628\u0648 \u062C\u0628\u0644
Mohamed El Shenawy|\u0645\u062D\u0645\u062F \u0627\u0644\u0634\u0646\u0627\u0648\u064A
Mahmoud Hassan Trezeguet|\u062A\u0631\u064A\u0632\u064A\u063A\u064A\u0647
Imam Ashour|\u0625\u0645\u0627\u0645 \u0639\u0627\u0634\u0648\u0631
Wessam Abou Ali|\u0648\u0633\u0627\u0645 \u0623\u0628\u0648 \u0639\u0644\u064A
Percy Tau|\u0628\u064A\u0631\u0633\u064A \u062A\u0627\u0648
Hussein El Shahat|\u062D\u0633\u064A\u0646 \u0627\u0644\u0634\u062D\u0627\u062A
Ahmed Fatouh|\u0623\u062D\u0645\u062F \u0641\u062A\u0648\u062D
Ramadan Sobhi|\u0631\u0645\u0636\u0627\u0646 \u0635\u0628\u062D\u064A
Kylian Mbapp\xE9|\u0643\u064A\u0644\u064A\u0627\u0646 \u0645\u0628\u0627\u0628\u064A
Erling Haaland|\u0625\u064A\u0631\u0644\u064A\u0646\u063A \u0647\u0627\u0644\u0627\u0646\u062F
Lionel Messi|\u0644\u064A\u0648\u0646\u064A\u0644 \u0645\u064A\u0633\u064A
Cristiano Ronaldo|\u0643\u0631\u064A\u0633\u062A\u064A\u0627\u0646\u0648 \u0631\u0648\u0646\u0627\u0644\u062F\u0648
Vin\xEDcius J\xFAnior|\u0641\u064A\u0646\u064A\u0633\u064A\u0648\u0633 \u062C\u0648\u0646\u064A\u0648\u0631
Jude Bellingham|\u062C\u0648\u062F \u0628\u064A\u0644\u064A\u0646\u063A\u0647\u0627\u0645
Lamine Yamal|\u0644\u0627\u0645\u064A\u0646 \u064A\u0627\u0645\u0627\u0644
Harry Kane|\u0647\u0627\u0631\u064A \u0643\u064A\u0646
Robert Lewandowski|\u0644\u064A\u0641\u0627\u0646\u062F\u0648\u0641\u0633\u0643\u064A
Neymar|\u0646\u064A\u0645\u0627\u0631
Karim Benzema|\u0643\u0631\u064A\u0645 \u0628\u0646\u0632\u064A\u0645\u0629
Riyad Mahrez|\u0631\u064A\u0627\u0636 \u0645\u062D\u0631\u0632
Achraf Hakimi|\u0623\u0634\u0631\u0641 \u062D\u0643\u064A\u0645\u064A
Victor Osimhen|\u0641\u064A\u0643\u062A\u0648\u0631 \u0623\u0648\u0633\u064A\u0645\u064A\u0646
Sadio Man\xE9|\u0633\u0627\u062F\u064A\u0648 \u0645\u0627\u0646\u064A
Kevin De Bruyne|\u0643\u064A\u0641\u064A\u0646 \u062F\u064A \u0628\u0631\u0648\u064A\u0646
Bukayo Saka|\u0628\u0648\u0643\u0627\u064A\u0648 \u0633\u0627\u0643\u0627
Phil Foden|\u0641\u064A\u0644 \u0641\u0648\u062F\u064A\u0646
Rodri|\u0631\u0648\u062F\u0631\u064A
Virgil van Dijk|\u0641\u0627\u0646 \u062F\u0627\u064A\u0643
Bruno Fernandes|\u0628\u0631\u0648\u0646\u0648 \u0641\u0631\u0646\u0627\u0646\u062F\u064A\u0632
Marcus Rashford|\u0631\u0627\u0634\u0641\u0648\u0631\u062F
Son Heung-Min|\u0633\u0648\u0646 \u0647\u064A\u0648\u0646\u063A \u0645\u064A\u0646
Mohammed Kudus|\u0645\u062D\u0645\u062F \u0642\u062F\u0648\u0633
Pedri|\u0628\u064A\u062F\u0631\u064A
Raphinha|\u0631\u0627\u0641\u064A\u0646\u064A\u0627
Antoine Griezmann|\u063A\u0631\u064A\u0632\u0645\u0627\u0646
Ousmane Demb\xE9l\xE9|\u0639\u062B\u0645\u0627\u0646 \u062F\u064A\u0645\u0628\u064A\u0644\u064A
Alexander Isak|\u0623\u0644\u0643\u0633\u0646\u062F\u0631 \u0625\u064A\u0632\u0627\u0643
Cole Palmer|\u0643\u0648\u0644 \u0628\u0627\u0644\u0645\u0631
Declan Rice|\u062F\u064A\u0643\u0644\u0627\u0646 \u0631\u0627\u064A\u0633
Martin \xD8degaard|\u0623\u0648\u062F\u064A\u063A\u0627\u0631\u062F
Aleksandar Mitrovi\u0107|\u0645\u064A\u062A\u0631\u0648\u0641\u064A\u062A\u0634
Karim Adeyemi|\u0623\u062F\u064A\u0645\u064A
Federico Valverde|\u0641\u0627\u0644\u0641\u064A\u0631\u062F\u064A
Luka Modri\u0107|\u0645\u0648\u062F\u0631\u064A\u062A\u0634
Thibaut Courtois|\u0643\u0648\u0631\u062A\u0648\u0627
Alisson|\u0623\u0644\u064A\u0633\u0648\u0646
Ederson|\u0625\u064A\u062F\u0631\u0633\u0648\u0646
Joshua Kimmich|\u0643\u064A\u0645\u064A\u062A\u0634
Jamal Musiala|\u0645\u0648\u0633\u064A\u0627\u0644\u0627
Florian Wirtz|\u0641\u0644\u0648\u0631\u064A\u0627\u0646 \u0641\u064A\u0631\u062A\u0632
Lautaro Mart\xEDnez|\u0644\u0627\u0648\u062A\u0627\u0631\u0648 \u0645\u0627\u0631\u062A\u064A\u0646\u064A\u0632
Paulo Dybala|\u062F\u064A\u0628\u0627\u0644\u0627
Rafael Le\xE3o|\u0631\u0627\u0641\u0627\u0626\u064A\u0644 \u0644\u064A\u0627\u0648
Ayoub El Kaabi|\u0623\u064A\u0648\u0628 \u0627\u0644\u0643\u0639\u0628\u064A
Hakim Ziyech|\u062D\u0643\u064A\u0645 \u0632\u064A\u0627\u0634
Youssef En-Nesyri|\u064A\u0648\u0633\u0641 \u0627\u0644\u0646\u0635\u064A\u0631\u064A
Yassine Bounou|\u064A\u0627\u0633\u064A\u0646 \u0628\u0648\u0646\u0648
Aleksandar Mitrovic|\u0645\u064A\u062A\u0631\u0648\u0641\u064A\u062A\u0634
Sofiane Boufal|\u0633\u0641\u064A\u0627\u0646 \u0628\u0648\u0641\u0627\u0644
Mehdi Taremi|\u0645\u0647\u062F\u064A \u0637\u0627\u0631\u0645\u064A`,de=e=>Object.fromEntries(e.split(`
`).map(t=>t.split("|"))),Ge=de(Ve),Ue=de(He),wt=e=>e?Ge[e]??O(e):void 0,vt=e=>(e?Ue[e]??O(e):void 0)??e;export{Q as a,Ie as b,oe as c,Ze as d,T as e,Ye as f,Qe as g,Xe as h,et as i,Le as j,tt as k,rt as l,nt as m,at as n,p as o,ot as p,it as q,st as r,ut as s,lt as t,ct as u,dt as v,O as w,mt as x,pt as y,yt as z,gt as A,ht as B,wt as C,vt as D};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
