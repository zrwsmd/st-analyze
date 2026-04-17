"use strict";var Tb=Object.create;var Ha=Object.defineProperty;var yb=Object.getOwnPropertyDescriptor;var _b=Object.getOwnPropertyNames;var vb=Object.getPrototypeOf,Rb=Object.prototype.hasOwnProperty;var xb=(t,e,r)=>e in t?Ha(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var X=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ei=(t,e)=>{for(var r in e)Ha(t,r,{get:e[r],enumerable:!0})},Fu=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of _b(e))!Rb.call(t,i)&&i!==r&&Ha(t,i,{get:()=>e[i],enumerable:!(n=yb(e,i))||n.enumerable});return t},be=(t,e,r)=>(Fu(t,e,"default"),r&&Fu(r,e,"default")),Kt=(t,e,r)=>(r=t!=null?Tb(vb(t)):{},Fu(e||!t||!t.__esModule?Ha(r,"default",{value:t,enumerable:!0}):r,t)),Nb=t=>Fu(Ha({},"__esModule",{value:!0}),t);var Ii=(t,e,r)=>(xb(t,typeof e!="symbol"?e+"":e,r),r);var Uu=X(Bt=>{"use strict";Object.defineProperty(Bt,"__esModule",{value:!0});Bt.thenable=Bt.typedArray=Bt.stringArray=Bt.array=Bt.func=Bt.error=Bt.number=Bt.string=Bt.boolean=void 0;function Ob(t){return t===!0||t===!1}Bt.boolean=Ob;function f_(t){return typeof t=="string"||t instanceof String}Bt.string=f_;function Eb(t){return typeof t=="number"||t instanceof Number}Bt.number=Eb;function Ib(t){return t instanceof Error}Bt.error=Ib;function d_(t){return typeof t=="function"}Bt.func=d_;function p_(t){return Array.isArray(t)}Bt.array=p_;function Sb(t){return p_(t)&&t.every(e=>f_(e))}Bt.stringArray=Sb;function Ab(t,e){return Array.isArray(t)&&t.every(e)}Bt.typedArray=Ab;function Db(t){return t&&d_(t.then)}Bt.thenable=Db});var ls=X(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.stringArray=fr.array=fr.func=fr.error=fr.number=fr.string=fr.boolean=void 0;function Cb(t){return t===!0||t===!1}fr.boolean=Cb;function m_(t){return typeof t=="string"||t instanceof String}fr.string=m_;function bb(t){return typeof t=="number"||t instanceof Number}fr.number=bb;function Lb(t){return t instanceof Error}fr.error=Lb;function kb(t){return typeof t=="function"}fr.func=kb;function h_(t){return Array.isArray(t)}fr.array=h_;function wb(t){return h_(t)&&t.every(e=>m_(e))}fr.stringArray=wb});var dm=X(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.Message=ae.NotificationType9=ae.NotificationType8=ae.NotificationType7=ae.NotificationType6=ae.NotificationType5=ae.NotificationType4=ae.NotificationType3=ae.NotificationType2=ae.NotificationType1=ae.NotificationType0=ae.NotificationType=ae.RequestType9=ae.RequestType8=ae.RequestType7=ae.RequestType6=ae.RequestType5=ae.RequestType4=ae.RequestType3=ae.RequestType2=ae.RequestType1=ae.RequestType=ae.RequestType0=ae.AbstractMessageSignature=ae.ParameterStructures=ae.ResponseError=ae.ErrorCodes=void 0;var fo=ls(),Vp;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Vp||(ae.ErrorCodes=Vp={}));var Gp=class t extends Error{constructor(e,r,n){super(r),this.code=fo.number(e)?e:Vp.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};ae.ResponseError=Gp;var kr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};ae.ParameterStructures=kr;kr.auto=new kr("auto");kr.byPosition=new kr("byPosition");kr.byName=new kr("byName");var rt=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return kr.auto}};ae.AbstractMessageSignature=rt;var jp=class extends rt{constructor(e){super(e,0)}};ae.RequestType0=jp;var qp=class extends rt{constructor(e,r=kr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ae.RequestType=qp;var Hp=class extends rt{constructor(e,r=kr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ae.RequestType1=Hp;var Kp=class extends rt{constructor(e){super(e,2)}};ae.RequestType2=Kp;var zp=class extends rt{constructor(e){super(e,3)}};ae.RequestType3=zp;var Yp=class extends rt{constructor(e){super(e,4)}};ae.RequestType4=Yp;var Xp=class extends rt{constructor(e){super(e,5)}};ae.RequestType5=Xp;var Jp=class extends rt{constructor(e){super(e,6)}};ae.RequestType6=Jp;var Qp=class extends rt{constructor(e){super(e,7)}};ae.RequestType7=Qp;var Zp=class extends rt{constructor(e){super(e,8)}};ae.RequestType8=Zp;var em=class extends rt{constructor(e){super(e,9)}};ae.RequestType9=em;var tm=class extends rt{constructor(e,r=kr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ae.NotificationType=tm;var rm=class extends rt{constructor(e){super(e,0)}};ae.NotificationType0=rm;var nm=class extends rt{constructor(e,r=kr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ae.NotificationType1=nm;var im=class extends rt{constructor(e){super(e,2)}};ae.NotificationType2=im;var om=class extends rt{constructor(e){super(e,3)}};ae.NotificationType3=om;var sm=class extends rt{constructor(e){super(e,4)}};ae.NotificationType4=sm;var am=class extends rt{constructor(e){super(e,5)}};ae.NotificationType5=am;var lm=class extends rt{constructor(e){super(e,6)}};ae.NotificationType6=lm;var um=class extends rt{constructor(e){super(e,7)}};ae.NotificationType7=um;var cm=class extends rt{constructor(e){super(e,8)}};ae.NotificationType8=cm;var fm=class extends rt{constructor(e){super(e,9)}};ae.NotificationType9=fm;var g_;(function(t){function e(i){let o=i;return o&&fo.string(o.method)&&(fo.string(o.id)||fo.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&fo.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(fo.string(o.id)||fo.number(o.id)||o.id===null)}t.isResponse=n})(g_||(ae.Message=g_={}))});var mm=X(Si=>{"use strict";var T_;Object.defineProperty(Si,"__esModule",{value:!0});Si.LRUCache=Si.LinkedMap=Si.Touch=void 0;var dr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(dr||(Si.Touch=dr={}));var Bu=class{constructor(){this[T_]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,r=dr.None){let n=this._map.get(e);if(n)return r!==dr.None&&this.touch(n,r),n.value}set(e,r,n=dr.None){let i=this._map.get(e);if(i)i.value=r,n!==dr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case dr.None:this.addItemLast(i);break;case dr.First:this.addItemFirst(i);break;case dr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(T_=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==dr.First&&r!==dr.Last)){if(r===dr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===dr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Si.LinkedMap=Bu;var pm=class extends Bu{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=dr.AsNew){return super.get(e,r)}peek(e){return super.get(e,dr.None)}set(e,r){return super.set(e,r,dr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Si.LRUCache=pm});var __=X(Wu=>{"use strict";Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Disposable=void 0;var y_;(function(t){function e(r){return{dispose:r}}t.create=e})(y_||(Wu.Disposable=y_={}))});var Ai=X(Tm=>{"use strict";Object.defineProperty(Tm,"__esModule",{value:!0});var hm;function gm(){if(hm===void 0)throw new Error("No runtime abstraction layer installed");return hm}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");hm=r}t.install=e})(gm||(gm={}));Tm.default=gm});var cs=X(us=>{"use strict";Object.defineProperty(us,"__esModule",{value:!0});us.Emitter=us.Event=void 0;var $b=Ai(),v_;(function(t){let e={dispose(){}};t.None=function(){return e}})(v_||(us.Event=v_={}));var ym=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,$b.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Vu=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new ym),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};us.Emitter=Vu;Vu._noop=function(){}});var qu=X(fs=>{"use strict";Object.defineProperty(fs,"__esModule",{value:!0});fs.CancellationTokenSource=fs.CancellationToken=void 0;var Pb=Ai(),Mb=ls(),_m=cs(),Gu;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:_m.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:_m.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||Mb.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Gu||(fs.CancellationToken=Gu={}));var Fb=Object.freeze(function(t,e){let r=(0,Pb.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),ju=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?Fb:(this._emitter||(this._emitter=new _m.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},vm=class{get token(){return this._token||(this._token=new ju),this._token}cancel(){this._token?this._token.cancel():this._token=Gu.Cancelled}dispose(){this._token?this._token instanceof ju&&this._token.dispose():this._token=Gu.None}};fs.CancellationTokenSource=vm});var R_=X(ds=>{"use strict";Object.defineProperty(ds,"__esModule",{value:!0});ds.SharedArrayReceiverStrategy=ds.SharedArraySenderStrategy=void 0;var Ub=qu(),Ka;(function(t){t.Continue=0,t.Cancelled=1})(Ka||(Ka={}));var Rm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=Ka.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,Ka.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};ds.SharedArraySenderStrategy=Rm;var xm=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ka.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Nm=class{constructor(e){this.token=new xm(e)}cancel(){}dispose(){}},Om=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new Ub.CancellationTokenSource:new Nm(r)}};ds.SharedArrayReceiverStrategy=Om});var Im=X(Hu=>{"use strict";Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Semaphore=void 0;var Bb=Ai(),Em=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,Bb.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Hu.Semaphore=Em});var N_=X(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.ReadableStreamMessageReader=Di.AbstractMessageReader=Di.MessageReader=void 0;var Am=Ai(),ps=ls(),Sm=cs(),Wb=Im(),x_;(function(t){function e(r){let n=r;return n&&ps.func(n.listen)&&ps.func(n.dispose)&&ps.func(n.onError)&&ps.func(n.onClose)&&ps.func(n.onPartialMessage)}t.is=e})(x_||(Di.MessageReader=x_={}));var Ku=class{constructor(){this.errorEmitter=new Sm.Emitter,this.closeEmitter=new Sm.Emitter,this.partialMessageEmitter=new Sm.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${ps.string(e.message)?e.message:"unknown"}`)}};Di.AbstractMessageReader=Ku;var Dm;(function(t){function e(r){var u;let n,i,o,s=new Map,a,l=new Map;if(r===void 0||typeof r=="string")n=r!=null?r:"utf-8";else{if(n=(u=r.charset)!=null?u:"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,s.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)s.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,l.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)l.set(c.name,c)}return a===void 0&&(a=(0,Am.default)().applicationJson.decoder,l.set(a.name,a)),{charset:n,contentDecoder:o,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:l}}t.fromOptions=e})(Dm||(Dm={}));var Cm=class extends Ku{constructor(e,r){super(),this.readable=e,this.options=Dm.fromOptions(r),this.buffer=(0,Am.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new Wb.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Am.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Di.ReadableStreamMessageReader=Cm});var A_=X(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.WriteableStreamMessageWriter=Ci.AbstractMessageWriter=Ci.MessageWriter=void 0;var O_=Ai(),za=ls(),Vb=Im(),E_=cs(),Gb="Content-Length: ",I_=`\r
`,S_;(function(t){function e(r){let n=r;return n&&za.func(n.dispose)&&za.func(n.onClose)&&za.func(n.onError)&&za.func(n.write)}t.is=e})(S_||(Ci.MessageWriter=S_={}));var zu=class{constructor(){this.errorEmitter=new E_.Emitter,this.closeEmitter=new E_.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${za.string(e.message)?e.message:"unknown"}`)}};Ci.AbstractMessageWriter=zu;var bm;(function(t){function e(r){var n,i;return r===void 0||typeof r=="string"?{charset:r!=null?r:"utf-8",contentTypeEncoder:(0,O_.default)().applicationJson.encoder}:{charset:(n=r.charset)!=null?n:"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:(i=r.contentTypeEncoder)!=null?i:(0,O_.default)().applicationJson.encoder}}t.fromOptions=e})(bm||(bm={}));var Lm=class extends zu{constructor(e,r){super(),this.writable=e,this.options=bm.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Vb.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(Gb,n.byteLength.toString(),I_),i.push(I_),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};Ci.WriteableStreamMessageWriter=Lm});var D_=X(Yu=>{"use strict";Object.defineProperty(Yu,"__esModule",{value:!0});Yu.AbstractMessageBuffer=void 0;var jb=13,qb=10,Hb=`\r
`,km=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let u=this._chunks[n];for(i=0;i<u.length;){switch(u[i]){case jb:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case qb:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=u.byteLength,n++}if(r!==4)return;let s=this._read(o+i),a=new Map,l=this.toString(s,"ascii").split(Hb);if(l.length<2)return a;for(let u=0;u<l.length-2;u++){let c=l[u],f=c.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let d=c.substr(0,f),m=c.substr(f+1).trim();a.set(e?d.toLowerCase():d,m)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],s=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let s=o.slice(0,e);r.set(s,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Yu.AbstractMessageBuffer=km});var w_=X(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.createMessageConnection=Te.ConnectionOptions=Te.MessageStrategy=Te.CancellationStrategy=Te.CancellationSenderStrategy=Te.CancellationReceiverStrategy=Te.RequestCancellationReceiverStrategy=Te.IdCancellationReceiverStrategy=Te.ConnectionStrategy=Te.ConnectionError=Te.ConnectionErrors=Te.LogTraceNotification=Te.SetTraceNotification=Te.TraceFormat=Te.TraceValues=Te.Trace=Te.NullLogger=Te.ProgressType=Te.ProgressToken=void 0;var C_=Ai(),gt=ls(),fe=dm(),b_=mm(),Ya=cs(),wm=qu(),Qa;(function(t){t.type=new fe.NotificationType("$/cancelRequest")})(Qa||(Qa={}));var $m;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})($m||(Te.ProgressToken=$m={}));var Xa;(function(t){t.type=new fe.NotificationType("$/progress")})(Xa||(Xa={}));var Pm=class{constructor(){}};Te.ProgressType=Pm;var Mm;(function(t){function e(r){return gt.func(r)}t.is=e})(Mm||(Mm={}));Te.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Pe;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Pe||(Te.Trace=Pe={}));var L_;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(L_||(Te.TraceValues=L_={}));(function(t){function e(n){if(!gt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Pe||(Te.Trace=Pe={}));var Jr;(function(t){t.Text="text",t.JSON="json"})(Jr||(Te.TraceFormat=Jr={}));(function(t){function e(r){return gt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Jr||(Te.TraceFormat=Jr={}));var Fm;(function(t){t.type=new fe.NotificationType("$/setTrace")})(Fm||(Te.SetTraceNotification=Fm={}));var Xu;(function(t){t.type=new fe.NotificationType("$/logTrace")})(Xu||(Te.LogTraceNotification=Xu={}));var Ja;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(Ja||(Te.ConnectionErrors=Ja={}));var ms=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};Te.ConnectionError=ms;var Um;(function(t){function e(r){let n=r;return n&&gt.func(n.cancelUndispatched)}t.is=e})(Um||(Te.ConnectionStrategy=Um={}));var Ju;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&gt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||gt.func(n.dispose))}t.is=e})(Ju||(Te.IdCancellationReceiverStrategy=Ju={}));var Bm;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&gt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||gt.func(n.dispose))}t.is=e})(Bm||(Te.RequestCancellationReceiverStrategy=Bm={}));var Qu;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new wm.CancellationTokenSource}});function e(r){return Ju.is(r)||Bm.is(r)}t.is=e})(Qu||(Te.CancellationReceiverStrategy=Qu={}));var Zu;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(Qa.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&gt.func(n.sendCancellation)&&gt.func(n.cleanup)}t.is=e})(Zu||(Te.CancellationSenderStrategy=Zu={}));var ec;(function(t){t.Message=Object.freeze({receiver:Qu.Message,sender:Zu.Message});function e(r){let n=r;return n&&Qu.is(n.receiver)&&Zu.is(n.sender)}t.is=e})(ec||(Te.CancellationStrategy=ec={}));var tc;(function(t){function e(r){let n=r;return n&&gt.func(n.handleMessage)}t.is=e})(tc||(Te.MessageStrategy=tc={}));var k_;(function(t){function e(r){let n=r;return n&&(ec.is(n.cancellationStrategy)||Um.is(n.connectionStrategy)||tc.is(n.messageStrategy))}t.is=e})(k_||(Te.ConnectionOptions=k_={}));var Tn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(Tn||(Tn={}));function Kb(t,e,r,n){let i=r!==void 0?r:Te.NullLogger,o=0,s=0,a=0,l="2.0",u,c=new Map,f,d=new Map,m=new Map,R,O=new b_.LinkedMap,I=new Map,E=new Set,y=new Map,T=Pe.Off,S=Jr.Text,M,te=Tn.New,ue=new Ya.Emitter,de=new Ya.Emitter,_e=new Ya.Emitter,ve=new Ya.Emitter,G=new Ya.Emitter,k=n&&n.cancellationStrategy?n.cancellationStrategy:ec.Message;function j(v){if(v===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+v.toString()}function H(v){return v===null?"res-unknown-"+(++a).toString():"res-"+v.toString()}function le(){return"not-"+(++s).toString()}function se(v,L){fe.Message.isRequest(L)?v.set(j(L.id),L):fe.Message.isResponse(L)?v.set(H(L.id),L):v.set(le(),L)}function V(v){}function U(){return te===Tn.Listening}function xe(){return te===Tn.Closed}function Ne(){return te===Tn.Disposed}function Ce(){(te===Tn.New||te===Tn.Listening)&&(te=Tn.Closed,de.fire(void 0))}function nr(v){ue.fire([v,void 0,void 0])}function Ni(v){ue.fire(v)}t.onClose(Ce),t.onError(nr),e.onClose(Ce),e.onError(Ni);function je(){R||O.size===0||(R=(0,C_.default)().timer.setImmediate(()=>{R=void 0,Zn()}))}function qt(v){fe.Message.isRequest(v)?Ht(v):fe.Message.isNotification(v)?kt(v):fe.Message.isResponse(v)?Lt(v):mt(v)}function Zn(){if(O.size===0)return;let v=O.shift();try{let L=n==null?void 0:n.messageStrategy;tc.is(L)?L.handleMessage(v,qt):qt(v)}finally{je()}}let pt=v=>{try{if(fe.Message.isNotification(v)&&v.method===Qa.type.method){let L=v.params.id,P=j(L),F=O.get(P);if(fe.Message.isRequest(F)){let re=n==null?void 0:n.connectionStrategy,Oe=re&&re.cancelUndispatched?re.cancelUndispatched(F,V):void 0;if(Oe&&(Oe.error!==void 0||Oe.result!==void 0)){O.delete(P),y.delete(L),Oe.id=F.id,Yr(Oe,v.method,Date.now()),e.write(Oe).catch(()=>i.error("Sending response for canceled message failed."));return}}let ne=y.get(L);if(ne!==void 0){ne.cancel(),Oi(v);return}else E.add(L)}se(O,v)}finally{je()}};function Ht(v){var wt;if(Ne())return;function L(Le,st,Ue){let at={jsonrpc:l,id:v.id};Le instanceof fe.ResponseError?at.error=Le.toJson():at.result=Le===void 0?null:Le,Yr(at,st,Ue),e.write(at).catch(()=>i.error("Sending response failed."))}function P(Le,st,Ue){let at={jsonrpc:l,id:v.id,error:Le.toJson()};Yr(at,st,Ue),e.write(at).catch(()=>i.error("Sending response failed."))}function F(Le,st,Ue){Le===void 0&&(Le=null);let at={jsonrpc:l,id:v.id,result:Le};Yr(at,st,Ue),e.write(at).catch(()=>i.error("Sending response failed."))}ei(v);let ne=c.get(v.method),re,Oe;ne&&(re=ne.type,Oe=ne.handler);let qe=Date.now();if(Oe||u){let Le=(wt=v.id)!=null?wt:String(Date.now()),st=Ju.is(k.receiver)?k.receiver.createCancellationTokenSource(Le):k.receiver.createCancellationTokenSource(v);v.id!==null&&E.has(v.id)&&st.cancel(),v.id!==null&&y.set(Le,st);try{let Ue;if(Oe)if(v.params===void 0){if(re!==void 0&&re.numberOfParams!==0){P(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${v.method} defines ${re.numberOfParams} params but received none.`),v.method,qe);return}Ue=Oe(st.token)}else if(Array.isArray(v.params)){if(re!==void 0&&re.parameterStructures===fe.ParameterStructures.byName){P(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${v.method} defines parameters by name but received parameters by position`),v.method,qe);return}Ue=Oe(...v.params,st.token)}else{if(re!==void 0&&re.parameterStructures===fe.ParameterStructures.byPosition){P(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${v.method} defines parameters by position but received parameters by name`),v.method,qe);return}Ue=Oe(v.params,st.token)}else u&&(Ue=u(v.method,v.params,st.token));let at=Ue;Ue?at.then?at.then($t=>{y.delete(Le),L($t,v.method,qe)},$t=>{y.delete(Le),$t instanceof fe.ResponseError?P($t,v.method,qe):$t&&gt.string($t.message)?P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${v.method} failed with message: ${$t.message}`),v.method,qe):P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${v.method} failed unexpectedly without providing any details.`),v.method,qe)}):(y.delete(Le),L(Ue,v.method,qe)):(y.delete(Le),F(Ue,v.method,qe))}catch(Ue){y.delete(Le),Ue instanceof fe.ResponseError?L(Ue,v.method,qe):Ue&&gt.string(Ue.message)?P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${v.method} failed with message: ${Ue.message}`),v.method,qe):P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${v.method} failed unexpectedly without providing any details.`),v.method,qe)}}else P(new fe.ResponseError(fe.ErrorCodes.MethodNotFound,`Unhandled method ${v.method}`),v.method,qe)}function Lt(v){if(!Ne())if(v.id===null)v.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(v.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let L=v.id,P=I.get(L);if(is(v,P),P!==void 0){I.delete(L);try{if(v.error){let F=v.error;P.reject(new fe.ResponseError(F.code,F.message,F.data))}else if(v.result!==void 0)P.resolve(v.result);else throw new Error("Should never happen.")}catch(F){F.message?i.error(`Response handler '${P.method}' failed with message: ${F.message}`):i.error(`Response handler '${P.method}' failed unexpectedly.`)}}}}function kt(v){if(Ne())return;let L,P;if(v.method===Qa.type.method){let F=v.params.id;E.delete(F),Oi(v);return}else{let F=d.get(v.method);F&&(P=F.handler,L=F.type)}if(P||f)try{if(Oi(v),P)if(v.params===void 0)L!==void 0&&L.numberOfParams!==0&&L.parameterStructures!==fe.ParameterStructures.byName&&i.error(`Notification ${v.method} defines ${L.numberOfParams} params but received none.`),P();else if(Array.isArray(v.params)){let F=v.params;v.method===Xa.type.method&&F.length===2&&$m.is(F[0])?P({token:F[0],value:F[1]}):(L!==void 0&&(L.parameterStructures===fe.ParameterStructures.byName&&i.error(`Notification ${v.method} defines parameters by name but received parameters by position`),L.numberOfParams!==v.params.length&&i.error(`Notification ${v.method} defines ${L.numberOfParams} params but received ${F.length} arguments`)),P(...F))}else L!==void 0&&L.parameterStructures===fe.ParameterStructures.byPosition&&i.error(`Notification ${v.method} defines parameters by position but received parameters by name`),P(v.params);else f&&f(v.method,v.params)}catch(F){F.message?i.error(`Notification handler '${v.method}' failed with message: ${F.message}`):i.error(`Notification handler '${v.method}' failed unexpectedly.`)}else _e.fire(v)}function mt(v){if(!v){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(v,null,4)}`);let L=v;if(gt.string(L.id)||gt.number(L.id)){let P=L.id,F=I.get(P);F&&F.reject(new Error("The received response has neither a result nor an error property."))}}function ht(v){if(v!=null)switch(T){case Pe.Verbose:return JSON.stringify(v,null,4);case Pe.Compact:return JSON.stringify(v);default:return}}function cr(v){if(!(T===Pe.Off||!M))if(S===Jr.Text){let L;(T===Pe.Verbose||T===Pe.Compact)&&v.params&&(L=`Params: ${ht(v.params)}

`),M.log(`Sending request '${v.method} - (${v.id})'.`,L)}else Xr("send-request",v)}function vr(v){if(!(T===Pe.Off||!M))if(S===Jr.Text){let L;(T===Pe.Verbose||T===Pe.Compact)&&(v.params?L=`Params: ${ht(v.params)}

`:L=`No parameters provided.

`),M.log(`Sending notification '${v.method}'.`,L)}else Xr("send-notification",v)}function Yr(v,L,P){if(!(T===Pe.Off||!M))if(S===Jr.Text){let F;(T===Pe.Verbose||T===Pe.Compact)&&(v.error&&v.error.data?F=`Error data: ${ht(v.error.data)}

`:v.result?F=`Result: ${ht(v.result)}

`:v.error===void 0&&(F=`No result returned.

`)),M.log(`Sending response '${L} - (${v.id})'. Processing request took ${Date.now()-P}ms`,F)}else Xr("send-response",v)}function ei(v){if(!(T===Pe.Off||!M))if(S===Jr.Text){let L;(T===Pe.Verbose||T===Pe.Compact)&&v.params&&(L=`Params: ${ht(v.params)}

`),M.log(`Received request '${v.method} - (${v.id})'.`,L)}else Xr("receive-request",v)}function Oi(v){if(!(T===Pe.Off||!M||v.method===Xu.type.method))if(S===Jr.Text){let L;(T===Pe.Verbose||T===Pe.Compact)&&(v.params?L=`Params: ${ht(v.params)}

`:L=`No parameters provided.

`),M.log(`Received notification '${v.method}'.`,L)}else Xr("receive-notification",v)}function is(v,L){if(!(T===Pe.Off||!M))if(S===Jr.Text){let P;if((T===Pe.Verbose||T===Pe.Compact)&&(v.error&&v.error.data?P=`Error data: ${ht(v.error.data)}

`:v.result?P=`Result: ${ht(v.result)}

`:v.error===void 0&&(P=`No result returned.

`)),L){let F=v.error?` Request failed: ${v.error.message} (${v.error.code}).`:"";M.log(`Received response '${L.method} - (${v.id})' in ${Date.now()-L.timerStart}ms.${F}`,P)}else M.log(`Received response ${v.id} without active response promise.`,P)}else Xr("receive-response",v)}function Xr(v,L){if(!M||T===Pe.Off)return;let P={isLSPMessage:!0,type:v,message:L,timestamp:Date.now()};M.log(P)}function bn(){if(xe())throw new ms(Ja.Closed,"Connection is closed.");if(Ne())throw new ms(Ja.Disposed,"Connection is disposed.")}function os(){if(U())throw new ms(Ja.AlreadyListening,"Connection is already listening")}function ss(){if(!U())throw new Error("Call listen() first.")}function Lr(v){return v===void 0?null:v}function D(v){if(v!==null)return v}function $(v){return v!=null&&!Array.isArray(v)&&typeof v=="object"}function W(v,L){switch(v){case fe.ParameterStructures.auto:return $(L)?D(L):[Lr(L)];case fe.ParameterStructures.byName:if(!$(L))throw new Error("Received parameters by name but param is not an object literal.");return D(L);case fe.ParameterStructures.byPosition:return[Lr(L)];default:throw new Error(`Unknown parameter structure ${v.toString()}`)}}function z(v,L){let P,F=v.numberOfParams;switch(F){case 0:P=void 0;break;case 1:P=W(v.parameterStructures,L[0]);break;default:P=[];for(let ne=0;ne<L.length&&ne<F;ne++)P.push(Lr(L[ne]));if(L.length<F)for(let ne=L.length;ne<F;ne++)P.push(null);break}return P}let Q={sendNotification:(v,...L)=>{bn();let P,F;if(gt.string(v)){P=v;let re=L[0],Oe=0,qe=fe.ParameterStructures.auto;fe.ParameterStructures.is(re)&&(Oe=1,qe=re);let wt=L.length,Le=wt-Oe;switch(Le){case 0:F=void 0;break;case 1:F=W(qe,L[Oe]);break;default:if(qe===fe.ParameterStructures.byName)throw new Error(`Received ${Le} parameters for 'by Name' notification parameter structure.`);F=L.slice(Oe,wt).map(st=>Lr(st));break}}else{let re=L;P=v.method,F=z(v,re)}let ne={jsonrpc:l,method:P,params:F};return vr(ne),e.write(ne).catch(re=>{throw i.error("Sending notification failed."),re})},onNotification:(v,L)=>{bn();let P;return gt.func(v)?f=v:L&&(gt.string(v)?(P=v,d.set(v,{type:void 0,handler:L})):(P=v.method,d.set(v.method,{type:v,handler:L}))),{dispose:()=>{P!==void 0?d.delete(P):f=void 0}}},onProgress:(v,L,P)=>{if(m.has(L))throw new Error(`Progress handler for token ${L} already registered`);return m.set(L,P),{dispose:()=>{m.delete(L)}}},sendProgress:(v,L,P)=>Q.sendNotification(Xa.type,{token:L,value:P}),onUnhandledProgress:ve.event,sendRequest:(v,...L)=>{bn(),ss();let P,F,ne;if(gt.string(v)){P=v;let wt=L[0],Le=L[L.length-1],st=0,Ue=fe.ParameterStructures.auto;fe.ParameterStructures.is(wt)&&(st=1,Ue=wt);let at=L.length;wm.CancellationToken.is(Le)&&(at=at-1,ne=Le);let $t=at-st;switch($t){case 0:F=void 0;break;case 1:F=W(Ue,L[st]);break;default:if(Ue===fe.ParameterStructures.byName)throw new Error(`Received ${$t} parameters for 'by Name' request parameter structure.`);F=L.slice(st,at).map(Pu=>Lr(Pu));break}}else{let wt=L;P=v.method,F=z(v,wt);let Le=v.numberOfParams;ne=wm.CancellationToken.is(wt[Le])?wt[Le]:void 0}let re=o++,Oe;ne&&(Oe=ne.onCancellationRequested(()=>{let wt=k.sender.sendCancellation(Q,re);return wt===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${re}`),Promise.resolve()):wt.catch(()=>{i.log(`Sending cancellation messages for id ${re} failed`)})}));let qe={jsonrpc:l,id:re,method:P,params:F};return cr(qe),typeof k.sender.enableCancellation=="function"&&k.sender.enableCancellation(qe),new Promise(async(wt,Le)=>{let st=$t=>{wt($t),k.sender.cleanup(re),Oe==null||Oe.dispose()},Ue=$t=>{Le($t),k.sender.cleanup(re),Oe==null||Oe.dispose()},at={method:P,timerStart:Date.now(),resolve:st,reject:Ue};try{await e.write(qe),I.set(re,at)}catch($t){throw i.error("Sending request failed."),at.reject(new fe.ResponseError(fe.ErrorCodes.MessageWriteError,$t.message?$t.message:"Unknown reason")),$t}})},onRequest:(v,L)=>{bn();let P=null;return Mm.is(v)?(P=void 0,u=v):gt.string(v)?(P=null,L!==void 0&&(P=v,c.set(v,{handler:L,type:void 0}))):L!==void 0&&(P=v.method,c.set(v.method,{type:v,handler:L})),{dispose:()=>{P!==null&&(P!==void 0?c.delete(P):u=void 0)}}},hasPendingResponse:()=>I.size>0,trace:async(v,L,P)=>{let F=!1,ne=Jr.Text;P!==void 0&&(gt.boolean(P)?F=P:(F=P.sendNotification||!1,ne=P.traceFormat||Jr.Text)),T=v,S=ne,T===Pe.Off?M=void 0:M=L,F&&!xe()&&!Ne()&&await Q.sendNotification(Fm.type,{value:Pe.toString(v)})},onError:ue.event,onClose:de.event,onUnhandledNotification:_e.event,onDispose:G.event,end:()=>{e.end()},dispose:()=>{if(Ne())return;te=Tn.Disposed,G.fire(void 0);let v=new fe.ResponseError(fe.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let L of I.values())L.reject(v);I=new Map,y=new Map,E=new Set,O=new b_.LinkedMap,gt.func(e.dispose)&&e.dispose(),gt.func(t.dispose)&&t.dispose()},listen:()=>{bn(),os(),te=Tn.Listening,t.listen(pt)},inspect:()=>{(0,C_.default)().console.log("inspect")}};return Q.onNotification(Xu.type,v=>{if(T===Pe.Off||!M)return;let L=T===Pe.Verbose||T===Pe.Compact;M.log(v.message,L?v.verbose:void 0)}),Q.onNotification(Xa.type,v=>{let L=m.get(v.token);L?L(v.value):ve.fire(v)}),Q}Te.createMessageConnection=Kb});var rc=X(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.ProgressType=w.ProgressToken=w.createMessageConnection=w.NullLogger=w.ConnectionOptions=w.ConnectionStrategy=w.AbstractMessageBuffer=w.WriteableStreamMessageWriter=w.AbstractMessageWriter=w.MessageWriter=w.ReadableStreamMessageReader=w.AbstractMessageReader=w.MessageReader=w.SharedArrayReceiverStrategy=w.SharedArraySenderStrategy=w.CancellationToken=w.CancellationTokenSource=w.Emitter=w.Event=w.Disposable=w.LRUCache=w.Touch=w.LinkedMap=w.ParameterStructures=w.NotificationType9=w.NotificationType8=w.NotificationType7=w.NotificationType6=w.NotificationType5=w.NotificationType4=w.NotificationType3=w.NotificationType2=w.NotificationType1=w.NotificationType0=w.NotificationType=w.ErrorCodes=w.ResponseError=w.RequestType9=w.RequestType8=w.RequestType7=w.RequestType6=w.RequestType5=w.RequestType4=w.RequestType3=w.RequestType2=w.RequestType1=w.RequestType0=w.RequestType=w.Message=w.RAL=void 0;w.MessageStrategy=w.CancellationStrategy=w.CancellationSenderStrategy=w.CancellationReceiverStrategy=w.ConnectionError=w.ConnectionErrors=w.LogTraceNotification=w.SetTraceNotification=w.TraceFormat=w.TraceValues=w.Trace=void 0;var Ye=dm();Object.defineProperty(w,"Message",{enumerable:!0,get:function(){return Ye.Message}});Object.defineProperty(w,"RequestType",{enumerable:!0,get:function(){return Ye.RequestType}});Object.defineProperty(w,"RequestType0",{enumerable:!0,get:function(){return Ye.RequestType0}});Object.defineProperty(w,"RequestType1",{enumerable:!0,get:function(){return Ye.RequestType1}});Object.defineProperty(w,"RequestType2",{enumerable:!0,get:function(){return Ye.RequestType2}});Object.defineProperty(w,"RequestType3",{enumerable:!0,get:function(){return Ye.RequestType3}});Object.defineProperty(w,"RequestType4",{enumerable:!0,get:function(){return Ye.RequestType4}});Object.defineProperty(w,"RequestType5",{enumerable:!0,get:function(){return Ye.RequestType5}});Object.defineProperty(w,"RequestType6",{enumerable:!0,get:function(){return Ye.RequestType6}});Object.defineProperty(w,"RequestType7",{enumerable:!0,get:function(){return Ye.RequestType7}});Object.defineProperty(w,"RequestType8",{enumerable:!0,get:function(){return Ye.RequestType8}});Object.defineProperty(w,"RequestType9",{enumerable:!0,get:function(){return Ye.RequestType9}});Object.defineProperty(w,"ResponseError",{enumerable:!0,get:function(){return Ye.ResponseError}});Object.defineProperty(w,"ErrorCodes",{enumerable:!0,get:function(){return Ye.ErrorCodes}});Object.defineProperty(w,"NotificationType",{enumerable:!0,get:function(){return Ye.NotificationType}});Object.defineProperty(w,"NotificationType0",{enumerable:!0,get:function(){return Ye.NotificationType0}});Object.defineProperty(w,"NotificationType1",{enumerable:!0,get:function(){return Ye.NotificationType1}});Object.defineProperty(w,"NotificationType2",{enumerable:!0,get:function(){return Ye.NotificationType2}});Object.defineProperty(w,"NotificationType3",{enumerable:!0,get:function(){return Ye.NotificationType3}});Object.defineProperty(w,"NotificationType4",{enumerable:!0,get:function(){return Ye.NotificationType4}});Object.defineProperty(w,"NotificationType5",{enumerable:!0,get:function(){return Ye.NotificationType5}});Object.defineProperty(w,"NotificationType6",{enumerable:!0,get:function(){return Ye.NotificationType6}});Object.defineProperty(w,"NotificationType7",{enumerable:!0,get:function(){return Ye.NotificationType7}});Object.defineProperty(w,"NotificationType8",{enumerable:!0,get:function(){return Ye.NotificationType8}});Object.defineProperty(w,"NotificationType9",{enumerable:!0,get:function(){return Ye.NotificationType9}});Object.defineProperty(w,"ParameterStructures",{enumerable:!0,get:function(){return Ye.ParameterStructures}});var Wm=mm();Object.defineProperty(w,"LinkedMap",{enumerable:!0,get:function(){return Wm.LinkedMap}});Object.defineProperty(w,"LRUCache",{enumerable:!0,get:function(){return Wm.LRUCache}});Object.defineProperty(w,"Touch",{enumerable:!0,get:function(){return Wm.Touch}});var zb=__();Object.defineProperty(w,"Disposable",{enumerable:!0,get:function(){return zb.Disposable}});var $_=cs();Object.defineProperty(w,"Event",{enumerable:!0,get:function(){return $_.Event}});Object.defineProperty(w,"Emitter",{enumerable:!0,get:function(){return $_.Emitter}});var P_=qu();Object.defineProperty(w,"CancellationTokenSource",{enumerable:!0,get:function(){return P_.CancellationTokenSource}});Object.defineProperty(w,"CancellationToken",{enumerable:!0,get:function(){return P_.CancellationToken}});var M_=R_();Object.defineProperty(w,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return M_.SharedArraySenderStrategy}});Object.defineProperty(w,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return M_.SharedArrayReceiverStrategy}});var Vm=N_();Object.defineProperty(w,"MessageReader",{enumerable:!0,get:function(){return Vm.MessageReader}});Object.defineProperty(w,"AbstractMessageReader",{enumerable:!0,get:function(){return Vm.AbstractMessageReader}});Object.defineProperty(w,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Vm.ReadableStreamMessageReader}});var Gm=A_();Object.defineProperty(w,"MessageWriter",{enumerable:!0,get:function(){return Gm.MessageWriter}});Object.defineProperty(w,"AbstractMessageWriter",{enumerable:!0,get:function(){return Gm.AbstractMessageWriter}});Object.defineProperty(w,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Gm.WriteableStreamMessageWriter}});var Yb=D_();Object.defineProperty(w,"AbstractMessageBuffer",{enumerable:!0,get:function(){return Yb.AbstractMessageBuffer}});var ir=w_();Object.defineProperty(w,"ConnectionStrategy",{enumerable:!0,get:function(){return ir.ConnectionStrategy}});Object.defineProperty(w,"ConnectionOptions",{enumerable:!0,get:function(){return ir.ConnectionOptions}});Object.defineProperty(w,"NullLogger",{enumerable:!0,get:function(){return ir.NullLogger}});Object.defineProperty(w,"createMessageConnection",{enumerable:!0,get:function(){return ir.createMessageConnection}});Object.defineProperty(w,"ProgressToken",{enumerable:!0,get:function(){return ir.ProgressToken}});Object.defineProperty(w,"ProgressType",{enumerable:!0,get:function(){return ir.ProgressType}});Object.defineProperty(w,"Trace",{enumerable:!0,get:function(){return ir.Trace}});Object.defineProperty(w,"TraceValues",{enumerable:!0,get:function(){return ir.TraceValues}});Object.defineProperty(w,"TraceFormat",{enumerable:!0,get:function(){return ir.TraceFormat}});Object.defineProperty(w,"SetTraceNotification",{enumerable:!0,get:function(){return ir.SetTraceNotification}});Object.defineProperty(w,"LogTraceNotification",{enumerable:!0,get:function(){return ir.LogTraceNotification}});Object.defineProperty(w,"ConnectionErrors",{enumerable:!0,get:function(){return ir.ConnectionErrors}});Object.defineProperty(w,"ConnectionError",{enumerable:!0,get:function(){return ir.ConnectionError}});Object.defineProperty(w,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return ir.CancellationReceiverStrategy}});Object.defineProperty(w,"CancellationSenderStrategy",{enumerable:!0,get:function(){return ir.CancellationSenderStrategy}});Object.defineProperty(w,"CancellationStrategy",{enumerable:!0,get:function(){return ir.CancellationStrategy}});Object.defineProperty(w,"MessageStrategy",{enumerable:!0,get:function(){return ir.MessageStrategy}});var Xb=Ai();w.RAL=Xb.default});var B_=X(Km=>{"use strict";Object.defineProperty(Km,"__esModule",{value:!0});var F_=require("util"),ri=rc(),nc=class t extends ri.AbstractMessageBuffer{constructor(e="utf-8"){super(e)}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return Buffer.from(e,r)}toString(e,r){return e instanceof Buffer?e.toString(r):new F_.TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e instanceof Buffer?e:Buffer.from(e):e instanceof Buffer?e.slice(0,r):Buffer.from(e,0,r)}allocNative(e){return Buffer.allocUnsafe(e)}};nc.emptyBuffer=Buffer.allocUnsafe(0);var jm=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),ri.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),ri.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),ri.Disposable.create(()=>this.stream.off("end",e))}onData(e){return this.stream.on("data",e),ri.Disposable.create(()=>this.stream.off("data",e))}},qm=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),ri.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),ri.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),ri.Disposable.create(()=>this.stream.off("end",e))}write(e,r){return new Promise((n,i)=>{let o=s=>{s==null?n():i(s)};typeof e=="string"?this.stream.write(e,r,o):this.stream.write(e,o)})}end(){this.stream.end()}},U_=Object.freeze({messageBuffer:Object.freeze({create:t=>new nc(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{try{return Promise.resolve(Buffer.from(JSON.stringify(t,void 0,0),e.charset))}catch(r){return Promise.reject(r)}}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{try{return t instanceof Buffer?Promise.resolve(JSON.parse(t.toString(e.charset))):Promise.resolve(JSON.parse(new F_.TextDecoder(e.charset).decode(t)))}catch(r){return Promise.reject(r)}}})}),stream:Object.freeze({asReadableStream:t=>new jm(t),asWritableStream:t=>new qm(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setImmediate(t,...e);return{dispose:()=>clearImmediate(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Hm(){return U_}(function(t){function e(){ri.RAL.install(U_)}t.install=e})(Hm||(Hm={}));Km.default=Hm});var ho=X(Se=>{"use strict";var Jb=Se&&Se.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Qb=Se&&Se.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Jb(e,t,r)};Object.defineProperty(Se,"__esModule",{value:!0});Se.createMessageConnection=Se.createServerSocketTransport=Se.createClientSocketTransport=Se.createServerPipeTransport=Se.createClientPipeTransport=Se.generateRandomPipeName=Se.StreamMessageWriter=Se.StreamMessageReader=Se.SocketMessageWriter=Se.SocketMessageReader=Se.PortMessageWriter=Se.PortMessageReader=Se.IPCMessageWriter=Se.IPCMessageReader=void 0;var hs=B_();hs.default.install();var W_=require("path"),Zb=require("os"),eL=require("crypto"),sc=require("net"),Qr=rc();Qb(rc(),Se);var zm=class extends Qr.AbstractMessageReader{constructor(e){super(),this.process=e;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose())}listen(e){return this.process.on("message",e),Qr.Disposable.create(()=>this.process.off("message",e))}};Se.IPCMessageReader=zm;var Ym=class extends Qr.AbstractMessageWriter{constructor(e){super(),this.process=e,this.errorCount=0;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose)}write(e){try{return typeof this.process.send=="function"&&this.process.send(e,void 0,void 0,r=>{r?(this.errorCount++,this.handleError(r,e)):this.errorCount=0}),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Se.IPCMessageWriter=Ym;var Xm=class extends Qr.AbstractMessageReader{constructor(e){super(),this.onData=new Qr.Emitter,e.on("close",()=>this.fireClose),e.on("error",r=>this.fireError(r)),e.on("message",r=>{this.onData.fire(r)})}listen(e){return this.onData.event(e)}};Se.PortMessageReader=Xm;var Jm=class extends Qr.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.on("close",()=>this.fireClose()),e.on("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Se.PortMessageWriter=Jm;var po=class extends Qr.ReadableStreamMessageReader{constructor(e,r="utf-8"){super((0,hs.default)().stream.asReadableStream(e),r)}};Se.SocketMessageReader=po;var mo=class extends Qr.WriteableStreamMessageWriter{constructor(e,r){super((0,hs.default)().stream.asWritableStream(e),r),this.socket=e}dispose(){super.dispose(),this.socket.destroy()}};Se.SocketMessageWriter=mo;var ic=class extends Qr.ReadableStreamMessageReader{constructor(e,r){super((0,hs.default)().stream.asReadableStream(e),r)}};Se.StreamMessageReader=ic;var oc=class extends Qr.WriteableStreamMessageWriter{constructor(e,r){super((0,hs.default)().stream.asWritableStream(e),r)}};Se.StreamMessageWriter=oc;var V_=process.env.XDG_RUNTIME_DIR,tL=new Map([["linux",107],["darwin",103]]);function rL(){let t=(0,eL.randomBytes)(21).toString("hex");if(process.platform==="win32")return`\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`;let e;V_?e=W_.join(V_,`vscode-ipc-${t}.sock`):e=W_.join(Zb.tmpdir(),`vscode-${t}.sock`);let r=tL.get(process.platform);return r!==void 0&&e.length>r&&(0,hs.default)().console.warn(`WARNING: IPC handle "${e}" is longer than ${r} characters.`),e}Se.generateRandomPipeName=rL;function nL(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,sc.createServer)(a=>{s.close(),r([new po(a,e),new mo(a,e)])});s.on("error",o),s.listen(t,()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Se.createClientPipeTransport=nL;function iL(t,e="utf-8"){let r=(0,sc.createConnection)(t);return[new po(r,e),new mo(r,e)]}Se.createServerPipeTransport=iL;function oL(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,sc.createServer)(a=>{s.close(),r([new po(a,e),new mo(a,e)])});s.on("error",o),s.listen(t,"127.0.0.1",()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Se.createClientSocketTransport=oL;function sL(t,e="utf-8"){let r=(0,sc.createConnection)(t,"127.0.0.1");return[new po(r,e),new mo(r,e)]}Se.createServerSocketTransport=sL;function aL(t){let e=t;return e.read!==void 0&&e.addListener!==void 0}function lL(t){let e=t;return e.write!==void 0&&e.addListener!==void 0}function uL(t,e,r,n){r||(r=Qr.NullLogger);let i=aL(t)?new ic(t):t,o=lL(e)?new oc(e):e;return Qr.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Qr.createMessageConnection)(i,o,r,n)}Se.createMessageConnection=uL});var Qm=X((sj,G_)=>{"use strict";G_.exports=ho()});var lc=X((j_,ac)=>{(function(t){if(typeof ac=="object"&&typeof ac.exports=="object"){var e=t(require,j_);e!==void 0&&(ac.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlineCompletionContext=e.SelectedCompletionInfo=e.InlineCompletionTriggerKind=e.InlineCompletionList=e.InlineCompletionItem=e.StringValue=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(h){function x(N){return typeof N=="string"}h.is=x})(r||(e.DocumentUri=r={}));var n;(function(h){function x(N){return typeof N=="string"}h.is=x})(n||(e.URI=n={}));var i;(function(h){h.MIN_VALUE=-2147483648,h.MAX_VALUE=2147483647;function x(N){return typeof N=="number"&&h.MIN_VALUE<=N&&N<=h.MAX_VALUE}h.is=x})(i||(e.integer=i={}));var o;(function(h){h.MIN_VALUE=0,h.MAX_VALUE=2147483647;function x(N){return typeof N=="number"&&h.MIN_VALUE<=N&&N<=h.MAX_VALUE}h.is=x})(o||(e.uinteger=o={}));var s;(function(h){function x(g,p){return g===Number.MAX_VALUE&&(g=o.MAX_VALUE),p===Number.MAX_VALUE&&(p=o.MAX_VALUE),{line:g,character:p}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&C.uinteger(p.line)&&C.uinteger(p.character)}h.is=N})(s||(e.Position=s={}));var a;(function(h){function x(g,p,A,B){if(C.uinteger(g)&&C.uinteger(p)&&C.uinteger(A)&&C.uinteger(B))return{start:s.create(g,p),end:s.create(A,B)};if(s.is(g)&&s.is(p))return{start:g,end:p};throw new Error("Range#create called with invalid arguments[".concat(g,", ").concat(p,", ").concat(A,", ").concat(B,"]"))}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&s.is(p.start)&&s.is(p.end)}h.is=N})(a||(e.Range=a={}));var l;(function(h){function x(g,p){return{uri:g,range:p}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&a.is(p.range)&&(C.string(p.uri)||C.undefined(p.uri))}h.is=N})(l||(e.Location=l={}));var u;(function(h){function x(g,p,A,B){return{targetUri:g,targetRange:p,targetSelectionRange:A,originSelectionRange:B}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&a.is(p.targetRange)&&C.string(p.targetUri)&&a.is(p.targetSelectionRange)&&(a.is(p.originSelectionRange)||C.undefined(p.originSelectionRange))}h.is=N})(u||(e.LocationLink=u={}));var c;(function(h){function x(g,p,A,B){return{red:g,green:p,blue:A,alpha:B}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&C.numberRange(p.red,0,1)&&C.numberRange(p.green,0,1)&&C.numberRange(p.blue,0,1)&&C.numberRange(p.alpha,0,1)}h.is=N})(c||(e.Color=c={}));var f;(function(h){function x(g,p){return{range:g,color:p}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&a.is(p.range)&&c.is(p.color)}h.is=N})(f||(e.ColorInformation=f={}));var d;(function(h){function x(g,p,A){return{label:g,textEdit:p,additionalTextEdits:A}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&C.string(p.label)&&(C.undefined(p.textEdit)||M.is(p))&&(C.undefined(p.additionalTextEdits)||C.typedArray(p.additionalTextEdits,M.is))}h.is=N})(d||(e.ColorPresentation=d={}));var m;(function(h){h.Comment="comment",h.Imports="imports",h.Region="region"})(m||(e.FoldingRangeKind=m={}));var R;(function(h){function x(g,p,A,B,ge,Ot){var ze={startLine:g,endLine:p};return C.defined(A)&&(ze.startCharacter=A),C.defined(B)&&(ze.endCharacter=B),C.defined(ge)&&(ze.kind=ge),C.defined(Ot)&&(ze.collapsedText=Ot),ze}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&C.uinteger(p.startLine)&&C.uinteger(p.startLine)&&(C.undefined(p.startCharacter)||C.uinteger(p.startCharacter))&&(C.undefined(p.endCharacter)||C.uinteger(p.endCharacter))&&(C.undefined(p.kind)||C.string(p.kind))}h.is=N})(R||(e.FoldingRange=R={}));var O;(function(h){function x(g,p){return{location:g,message:p}}h.create=x;function N(g){var p=g;return C.defined(p)&&l.is(p.location)&&C.string(p.message)}h.is=N})(O||(e.DiagnosticRelatedInformation=O={}));var I;(function(h){h.Error=1,h.Warning=2,h.Information=3,h.Hint=4})(I||(e.DiagnosticSeverity=I={}));var E;(function(h){h.Unnecessary=1,h.Deprecated=2})(E||(e.DiagnosticTag=E={}));var y;(function(h){function x(N){var g=N;return C.objectLiteral(g)&&C.string(g.href)}h.is=x})(y||(e.CodeDescription=y={}));var T;(function(h){function x(g,p,A,B,ge,Ot){var ze={range:g,message:p};return C.defined(A)&&(ze.severity=A),C.defined(B)&&(ze.code=B),C.defined(ge)&&(ze.source=ge),C.defined(Ot)&&(ze.relatedInformation=Ot),ze}h.create=x;function N(g){var p,A=g;return C.defined(A)&&a.is(A.range)&&C.string(A.message)&&(C.number(A.severity)||C.undefined(A.severity))&&(C.integer(A.code)||C.string(A.code)||C.undefined(A.code))&&(C.undefined(A.codeDescription)||C.string((p=A.codeDescription)===null||p===void 0?void 0:p.href))&&(C.string(A.source)||C.undefined(A.source))&&(C.undefined(A.relatedInformation)||C.typedArray(A.relatedInformation,O.is))}h.is=N})(T||(e.Diagnostic=T={}));var S;(function(h){function x(g,p){for(var A=[],B=2;B<arguments.length;B++)A[B-2]=arguments[B];var ge={title:g,command:p};return C.defined(A)&&A.length>0&&(ge.arguments=A),ge}h.create=x;function N(g){var p=g;return C.defined(p)&&C.string(p.title)&&C.string(p.command)}h.is=N})(S||(e.Command=S={}));var M;(function(h){function x(A,B){return{range:A,newText:B}}h.replace=x;function N(A,B){return{range:{start:A,end:A},newText:B}}h.insert=N;function g(A){return{range:A,newText:""}}h.del=g;function p(A){var B=A;return C.objectLiteral(B)&&C.string(B.newText)&&a.is(B.range)}h.is=p})(M||(e.TextEdit=M={}));var te;(function(h){function x(g,p,A){var B={label:g};return p!==void 0&&(B.needsConfirmation=p),A!==void 0&&(B.description=A),B}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&C.string(p.label)&&(C.boolean(p.needsConfirmation)||p.needsConfirmation===void 0)&&(C.string(p.description)||p.description===void 0)}h.is=N})(te||(e.ChangeAnnotation=te={}));var ue;(function(h){function x(N){var g=N;return C.string(g)}h.is=x})(ue||(e.ChangeAnnotationIdentifier=ue={}));var de;(function(h){function x(A,B,ge){return{range:A,newText:B,annotationId:ge}}h.replace=x;function N(A,B,ge){return{range:{start:A,end:A},newText:B,annotationId:ge}}h.insert=N;function g(A,B){return{range:A,newText:"",annotationId:B}}h.del=g;function p(A){var B=A;return M.is(B)&&(te.is(B.annotationId)||ue.is(B.annotationId))}h.is=p})(de||(e.AnnotatedTextEdit=de={}));var _e;(function(h){function x(g,p){return{textDocument:g,edits:p}}h.create=x;function N(g){var p=g;return C.defined(p)&&xe.is(p.textDocument)&&Array.isArray(p.edits)}h.is=N})(_e||(e.TextDocumentEdit=_e={}));var ve;(function(h){function x(g,p,A){var B={kind:"create",uri:g};return p!==void 0&&(p.overwrite!==void 0||p.ignoreIfExists!==void 0)&&(B.options=p),A!==void 0&&(B.annotationId=A),B}h.create=x;function N(g){var p=g;return p&&p.kind==="create"&&C.string(p.uri)&&(p.options===void 0||(p.options.overwrite===void 0||C.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||C.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ue.is(p.annotationId))}h.is=N})(ve||(e.CreateFile=ve={}));var G;(function(h){function x(g,p,A,B){var ge={kind:"rename",oldUri:g,newUri:p};return A!==void 0&&(A.overwrite!==void 0||A.ignoreIfExists!==void 0)&&(ge.options=A),B!==void 0&&(ge.annotationId=B),ge}h.create=x;function N(g){var p=g;return p&&p.kind==="rename"&&C.string(p.oldUri)&&C.string(p.newUri)&&(p.options===void 0||(p.options.overwrite===void 0||C.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||C.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ue.is(p.annotationId))}h.is=N})(G||(e.RenameFile=G={}));var k;(function(h){function x(g,p,A){var B={kind:"delete",uri:g};return p!==void 0&&(p.recursive!==void 0||p.ignoreIfNotExists!==void 0)&&(B.options=p),A!==void 0&&(B.annotationId=A),B}h.create=x;function N(g){var p=g;return p&&p.kind==="delete"&&C.string(p.uri)&&(p.options===void 0||(p.options.recursive===void 0||C.boolean(p.options.recursive))&&(p.options.ignoreIfNotExists===void 0||C.boolean(p.options.ignoreIfNotExists)))&&(p.annotationId===void 0||ue.is(p.annotationId))}h.is=N})(k||(e.DeleteFile=k={}));var j;(function(h){function x(N){var g=N;return g&&(g.changes!==void 0||g.documentChanges!==void 0)&&(g.documentChanges===void 0||g.documentChanges.every(function(p){return C.string(p.kind)?ve.is(p)||G.is(p)||k.is(p):_e.is(p)}))}h.is=x})(j||(e.WorkspaceEdit=j={}));var H=function(){function h(x,N){this.edits=x,this.changeAnnotations=N}return h.prototype.insert=function(x,N,g){var p,A;if(g===void 0?p=M.insert(x,N):ue.is(g)?(A=g,p=de.insert(x,N,g)):(this.assertChangeAnnotations(this.changeAnnotations),A=this.changeAnnotations.manage(g),p=de.insert(x,N,A)),this.edits.push(p),A!==void 0)return A},h.prototype.replace=function(x,N,g){var p,A;if(g===void 0?p=M.replace(x,N):ue.is(g)?(A=g,p=de.replace(x,N,g)):(this.assertChangeAnnotations(this.changeAnnotations),A=this.changeAnnotations.manage(g),p=de.replace(x,N,A)),this.edits.push(p),A!==void 0)return A},h.prototype.delete=function(x,N){var g,p;if(N===void 0?g=M.del(x):ue.is(N)?(p=N,g=de.del(x,N)):(this.assertChangeAnnotations(this.changeAnnotations),p=this.changeAnnotations.manage(N),g=de.del(x,p)),this.edits.push(g),p!==void 0)return p},h.prototype.add=function(x){this.edits.push(x)},h.prototype.all=function(){return this.edits},h.prototype.clear=function(){this.edits.splice(0,this.edits.length)},h.prototype.assertChangeAnnotations=function(x){if(x===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},h}(),le=function(){function h(x){this._annotations=x===void 0?Object.create(null):x,this._counter=0,this._size=0}return h.prototype.all=function(){return this._annotations},Object.defineProperty(h.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),h.prototype.manage=function(x,N){var g;if(ue.is(x)?g=x:(g=this.nextId(),N=x),this._annotations[g]!==void 0)throw new Error("Id ".concat(g," is already in use."));if(N===void 0)throw new Error("No annotation provided for id ".concat(g));return this._annotations[g]=N,this._size++,g},h.prototype.nextId=function(){return this._counter++,this._counter.toString()},h}(),se=function(){function h(x){var N=this;this._textEditChanges=Object.create(null),x!==void 0?(this._workspaceEdit=x,x.documentChanges?(this._changeAnnotations=new le(x.changeAnnotations),x.changeAnnotations=this._changeAnnotations.all(),x.documentChanges.forEach(function(g){if(_e.is(g)){var p=new H(g.edits,N._changeAnnotations);N._textEditChanges[g.textDocument.uri]=p}})):x.changes&&Object.keys(x.changes).forEach(function(g){var p=new H(x.changes[g]);N._textEditChanges[g]=p})):this._workspaceEdit={}}return Object.defineProperty(h.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),h.prototype.getTextEditChange=function(x){if(xe.is(x)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var N={uri:x.uri,version:x.version},g=this._textEditChanges[N.uri];if(!g){var p=[],A={textDocument:N,edits:p};this._workspaceEdit.documentChanges.push(A),g=new H(p,this._changeAnnotations),this._textEditChanges[N.uri]=g}return g}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var g=this._textEditChanges[x];if(!g){var p=[];this._workspaceEdit.changes[x]=p,g=new H(p),this._textEditChanges[x]=g}return g}},h.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new le,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},h.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},h.prototype.createFile=function(x,N,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;te.is(N)||ue.is(N)?p=N:g=N;var A,B;if(p===void 0?A=ve.create(x,g):(B=ue.is(p)?p:this._changeAnnotations.manage(p),A=ve.create(x,g,B)),this._workspaceEdit.documentChanges.push(A),B!==void 0)return B},h.prototype.renameFile=function(x,N,g,p){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var A;te.is(g)||ue.is(g)?A=g:p=g;var B,ge;if(A===void 0?B=G.create(x,N,p):(ge=ue.is(A)?A:this._changeAnnotations.manage(A),B=G.create(x,N,p,ge)),this._workspaceEdit.documentChanges.push(B),ge!==void 0)return ge},h.prototype.deleteFile=function(x,N,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;te.is(N)||ue.is(N)?p=N:g=N;var A,B;if(p===void 0?A=k.create(x,g):(B=ue.is(p)?p:this._changeAnnotations.manage(p),A=k.create(x,g,B)),this._workspaceEdit.documentChanges.push(A),B!==void 0)return B},h}();e.WorkspaceChange=se;var V;(function(h){function x(g){return{uri:g}}h.create=x;function N(g){var p=g;return C.defined(p)&&C.string(p.uri)}h.is=N})(V||(e.TextDocumentIdentifier=V={}));var U;(function(h){function x(g,p){return{uri:g,version:p}}h.create=x;function N(g){var p=g;return C.defined(p)&&C.string(p.uri)&&C.integer(p.version)}h.is=N})(U||(e.VersionedTextDocumentIdentifier=U={}));var xe;(function(h){function x(g,p){return{uri:g,version:p}}h.create=x;function N(g){var p=g;return C.defined(p)&&C.string(p.uri)&&(p.version===null||C.integer(p.version))}h.is=N})(xe||(e.OptionalVersionedTextDocumentIdentifier=xe={}));var Ne;(function(h){function x(g,p,A,B){return{uri:g,languageId:p,version:A,text:B}}h.create=x;function N(g){var p=g;return C.defined(p)&&C.string(p.uri)&&C.string(p.languageId)&&C.integer(p.version)&&C.string(p.text)}h.is=N})(Ne||(e.TextDocumentItem=Ne={}));var Ce;(function(h){h.PlainText="plaintext",h.Markdown="markdown";function x(N){var g=N;return g===h.PlainText||g===h.Markdown}h.is=x})(Ce||(e.MarkupKind=Ce={}));var nr;(function(h){function x(N){var g=N;return C.objectLiteral(N)&&Ce.is(g.kind)&&C.string(g.value)}h.is=x})(nr||(e.MarkupContent=nr={}));var Ni;(function(h){h.Text=1,h.Method=2,h.Function=3,h.Constructor=4,h.Field=5,h.Variable=6,h.Class=7,h.Interface=8,h.Module=9,h.Property=10,h.Unit=11,h.Value=12,h.Enum=13,h.Keyword=14,h.Snippet=15,h.Color=16,h.File=17,h.Reference=18,h.Folder=19,h.EnumMember=20,h.Constant=21,h.Struct=22,h.Event=23,h.Operator=24,h.TypeParameter=25})(Ni||(e.CompletionItemKind=Ni={}));var je;(function(h){h.PlainText=1,h.Snippet=2})(je||(e.InsertTextFormat=je={}));var qt;(function(h){h.Deprecated=1})(qt||(e.CompletionItemTag=qt={}));var Zn;(function(h){function x(g,p,A){return{newText:g,insert:p,replace:A}}h.create=x;function N(g){var p=g;return p&&C.string(p.newText)&&a.is(p.insert)&&a.is(p.replace)}h.is=N})(Zn||(e.InsertReplaceEdit=Zn={}));var pt;(function(h){h.asIs=1,h.adjustIndentation=2})(pt||(e.InsertTextMode=pt={}));var Ht;(function(h){function x(N){var g=N;return g&&(C.string(g.detail)||g.detail===void 0)&&(C.string(g.description)||g.description===void 0)}h.is=x})(Ht||(e.CompletionItemLabelDetails=Ht={}));var Lt;(function(h){function x(N){return{label:N}}h.create=x})(Lt||(e.CompletionItem=Lt={}));var kt;(function(h){function x(N,g){return{items:N||[],isIncomplete:!!g}}h.create=x})(kt||(e.CompletionList=kt={}));var mt;(function(h){function x(g){return g.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}h.fromPlainText=x;function N(g){var p=g;return C.string(p)||C.objectLiteral(p)&&C.string(p.language)&&C.string(p.value)}h.is=N})(mt||(e.MarkedString=mt={}));var ht;(function(h){function x(N){var g=N;return!!g&&C.objectLiteral(g)&&(nr.is(g.contents)||mt.is(g.contents)||C.typedArray(g.contents,mt.is))&&(N.range===void 0||a.is(N.range))}h.is=x})(ht||(e.Hover=ht={}));var cr;(function(h){function x(N,g){return g?{label:N,documentation:g}:{label:N}}h.create=x})(cr||(e.ParameterInformation=cr={}));var vr;(function(h){function x(N,g){for(var p=[],A=2;A<arguments.length;A++)p[A-2]=arguments[A];var B={label:N};return C.defined(g)&&(B.documentation=g),C.defined(p)?B.parameters=p:B.parameters=[],B}h.create=x})(vr||(e.SignatureInformation=vr={}));var Yr;(function(h){h.Text=1,h.Read=2,h.Write=3})(Yr||(e.DocumentHighlightKind=Yr={}));var ei;(function(h){function x(N,g){var p={range:N};return C.number(g)&&(p.kind=g),p}h.create=x})(ei||(e.DocumentHighlight=ei={}));var Oi;(function(h){h.File=1,h.Module=2,h.Namespace=3,h.Package=4,h.Class=5,h.Method=6,h.Property=7,h.Field=8,h.Constructor=9,h.Enum=10,h.Interface=11,h.Function=12,h.Variable=13,h.Constant=14,h.String=15,h.Number=16,h.Boolean=17,h.Array=18,h.Object=19,h.Key=20,h.Null=21,h.EnumMember=22,h.Struct=23,h.Event=24,h.Operator=25,h.TypeParameter=26})(Oi||(e.SymbolKind=Oi={}));var is;(function(h){h.Deprecated=1})(is||(e.SymbolTag=is={}));var Xr;(function(h){function x(N,g,p,A,B){var ge={name:N,kind:g,location:{uri:A,range:p}};return B&&(ge.containerName=B),ge}h.create=x})(Xr||(e.SymbolInformation=Xr={}));var bn;(function(h){function x(N,g,p,A){return A!==void 0?{name:N,kind:g,location:{uri:p,range:A}}:{name:N,kind:g,location:{uri:p}}}h.create=x})(bn||(e.WorkspaceSymbol=bn={}));var os;(function(h){function x(g,p,A,B,ge,Ot){var ze={name:g,detail:p,kind:A,range:B,selectionRange:ge};return Ot!==void 0&&(ze.children=Ot),ze}h.create=x;function N(g){var p=g;return p&&C.string(p.name)&&C.number(p.kind)&&a.is(p.range)&&a.is(p.selectionRange)&&(p.detail===void 0||C.string(p.detail))&&(p.deprecated===void 0||C.boolean(p.deprecated))&&(p.children===void 0||Array.isArray(p.children))&&(p.tags===void 0||Array.isArray(p.tags))}h.is=N})(os||(e.DocumentSymbol=os={}));var ss;(function(h){h.Empty="",h.QuickFix="quickfix",h.Refactor="refactor",h.RefactorExtract="refactor.extract",h.RefactorInline="refactor.inline",h.RefactorRewrite="refactor.rewrite",h.Source="source",h.SourceOrganizeImports="source.organizeImports",h.SourceFixAll="source.fixAll"})(ss||(e.CodeActionKind=ss={}));var Lr;(function(h){h.Invoked=1,h.Automatic=2})(Lr||(e.CodeActionTriggerKind=Lr={}));var D;(function(h){function x(g,p,A){var B={diagnostics:g};return p!=null&&(B.only=p),A!=null&&(B.triggerKind=A),B}h.create=x;function N(g){var p=g;return C.defined(p)&&C.typedArray(p.diagnostics,T.is)&&(p.only===void 0||C.typedArray(p.only,C.string))&&(p.triggerKind===void 0||p.triggerKind===Lr.Invoked||p.triggerKind===Lr.Automatic)}h.is=N})(D||(e.CodeActionContext=D={}));var $;(function(h){function x(g,p,A){var B={title:g},ge=!0;return typeof p=="string"?(ge=!1,B.kind=p):S.is(p)?B.command=p:B.edit=p,ge&&A!==void 0&&(B.kind=A),B}h.create=x;function N(g){var p=g;return p&&C.string(p.title)&&(p.diagnostics===void 0||C.typedArray(p.diagnostics,T.is))&&(p.kind===void 0||C.string(p.kind))&&(p.edit!==void 0||p.command!==void 0)&&(p.command===void 0||S.is(p.command))&&(p.isPreferred===void 0||C.boolean(p.isPreferred))&&(p.edit===void 0||j.is(p.edit))}h.is=N})($||(e.CodeAction=$={}));var W;(function(h){function x(g,p){var A={range:g};return C.defined(p)&&(A.data=p),A}h.create=x;function N(g){var p=g;return C.defined(p)&&a.is(p.range)&&(C.undefined(p.command)||S.is(p.command))}h.is=N})(W||(e.CodeLens=W={}));var z;(function(h){function x(g,p){return{tabSize:g,insertSpaces:p}}h.create=x;function N(g){var p=g;return C.defined(p)&&C.uinteger(p.tabSize)&&C.boolean(p.insertSpaces)}h.is=N})(z||(e.FormattingOptions=z={}));var Q;(function(h){function x(g,p,A){return{range:g,target:p,data:A}}h.create=x;function N(g){var p=g;return C.defined(p)&&a.is(p.range)&&(C.undefined(p.target)||C.string(p.target))}h.is=N})(Q||(e.DocumentLink=Q={}));var v;(function(h){function x(g,p){return{range:g,parent:p}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&a.is(p.range)&&(p.parent===void 0||h.is(p.parent))}h.is=N})(v||(e.SelectionRange=v={}));var L;(function(h){h.namespace="namespace",h.type="type",h.class="class",h.enum="enum",h.interface="interface",h.struct="struct",h.typeParameter="typeParameter",h.parameter="parameter",h.variable="variable",h.property="property",h.enumMember="enumMember",h.event="event",h.function="function",h.method="method",h.macro="macro",h.keyword="keyword",h.modifier="modifier",h.comment="comment",h.string="string",h.number="number",h.regexp="regexp",h.operator="operator",h.decorator="decorator"})(L||(e.SemanticTokenTypes=L={}));var P;(function(h){h.declaration="declaration",h.definition="definition",h.readonly="readonly",h.static="static",h.deprecated="deprecated",h.abstract="abstract",h.async="async",h.modification="modification",h.documentation="documentation",h.defaultLibrary="defaultLibrary"})(P||(e.SemanticTokenModifiers=P={}));var F;(function(h){function x(N){var g=N;return C.objectLiteral(g)&&(g.resultId===void 0||typeof g.resultId=="string")&&Array.isArray(g.data)&&(g.data.length===0||typeof g.data[0]=="number")}h.is=x})(F||(e.SemanticTokens=F={}));var ne;(function(h){function x(g,p){return{range:g,text:p}}h.create=x;function N(g){var p=g;return p!=null&&a.is(p.range)&&C.string(p.text)}h.is=N})(ne||(e.InlineValueText=ne={}));var re;(function(h){function x(g,p,A){return{range:g,variableName:p,caseSensitiveLookup:A}}h.create=x;function N(g){var p=g;return p!=null&&a.is(p.range)&&C.boolean(p.caseSensitiveLookup)&&(C.string(p.variableName)||p.variableName===void 0)}h.is=N})(re||(e.InlineValueVariableLookup=re={}));var Oe;(function(h){function x(g,p){return{range:g,expression:p}}h.create=x;function N(g){var p=g;return p!=null&&a.is(p.range)&&(C.string(p.expression)||p.expression===void 0)}h.is=N})(Oe||(e.InlineValueEvaluatableExpression=Oe={}));var qe;(function(h){function x(g,p){return{frameId:g,stoppedLocation:p}}h.create=x;function N(g){var p=g;return C.defined(p)&&a.is(g.stoppedLocation)}h.is=N})(qe||(e.InlineValueContext=qe={}));var wt;(function(h){h.Type=1,h.Parameter=2;function x(N){return N===1||N===2}h.is=x})(wt||(e.InlayHintKind=wt={}));var Le;(function(h){function x(g){return{value:g}}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&(p.tooltip===void 0||C.string(p.tooltip)||nr.is(p.tooltip))&&(p.location===void 0||l.is(p.location))&&(p.command===void 0||S.is(p.command))}h.is=N})(Le||(e.InlayHintLabelPart=Le={}));var st;(function(h){function x(g,p,A){var B={position:g,label:p};return A!==void 0&&(B.kind=A),B}h.create=x;function N(g){var p=g;return C.objectLiteral(p)&&s.is(p.position)&&(C.string(p.label)||C.typedArray(p.label,Le.is))&&(p.kind===void 0||wt.is(p.kind))&&p.textEdits===void 0||C.typedArray(p.textEdits,M.is)&&(p.tooltip===void 0||C.string(p.tooltip)||nr.is(p.tooltip))&&(p.paddingLeft===void 0||C.boolean(p.paddingLeft))&&(p.paddingRight===void 0||C.boolean(p.paddingRight))}h.is=N})(st||(e.InlayHint=st={}));var Ue;(function(h){function x(N){return{kind:"snippet",value:N}}h.createSnippet=x})(Ue||(e.StringValue=Ue={}));var at;(function(h){function x(N,g,p,A){return{insertText:N,filterText:g,range:p,command:A}}h.create=x})(at||(e.InlineCompletionItem=at={}));var $t;(function(h){function x(N){return{items:N}}h.create=x})($t||(e.InlineCompletionList=$t={}));var Pu;(function(h){h.Invoked=0,h.Automatic=1})(Pu||(e.InlineCompletionTriggerKind=Pu={}));var o_;(function(h){function x(N,g){return{range:N,text:g}}h.create=x})(o_||(e.SelectedCompletionInfo=o_={}));var s_;(function(h){function x(N,g){return{triggerKind:N,selectedCompletionInfo:g}}h.create=x})(s_||(e.InlineCompletionContext=s_={}));var a_;(function(h){function x(N){var g=N;return C.objectLiteral(g)&&n.is(g.uri)&&C.string(g.name)}h.is=x})(a_||(e.WorkspaceFolder=a_={})),e.EOL=[`
`,`\r
`,"\r"];var l_;(function(h){function x(A,B,ge,Ot){return new gb(A,B,ge,Ot)}h.create=x;function N(A){var B=A;return!!(C.defined(B)&&C.string(B.uri)&&(C.undefined(B.languageId)||C.string(B.languageId))&&C.uinteger(B.lineCount)&&C.func(B.getText)&&C.func(B.positionAt)&&C.func(B.offsetAt))}h.is=N;function g(A,B){for(var ge=A.getText(),Ot=p(B,function(as,Mu){var u_=as.range.start.line-Mu.range.start.line;return u_===0?as.range.start.character-Mu.range.start.character:u_}),ze=ge.length,hn=Ot.length-1;hn>=0;hn--){var gn=Ot[hn],ti=A.offsetAt(gn.range.start),Ie=A.offsetAt(gn.range.end);if(Ie<=ze)ge=ge.substring(0,ti)+gn.newText+ge.substring(Ie,ge.length);else throw new Error("Overlapping edit");ze=ti}return ge}h.applyEdits=g;function p(A,B){if(A.length<=1)return A;var ge=A.length/2|0,Ot=A.slice(0,ge),ze=A.slice(ge);p(Ot,B),p(ze,B);for(var hn=0,gn=0,ti=0;hn<Ot.length&&gn<ze.length;){var Ie=B(Ot[hn],ze[gn]);Ie<=0?A[ti++]=Ot[hn++]:A[ti++]=ze[gn++]}for(;hn<Ot.length;)A[ti++]=Ot[hn++];for(;gn<ze.length;)A[ti++]=ze[gn++];return A}})(l_||(e.TextDocument=l_={}));var gb=function(){function h(x,N,g,p){this._uri=x,this._languageId=N,this._version=g,this._content=p,this._lineOffsets=void 0}return Object.defineProperty(h.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),h.prototype.getText=function(x){if(x){var N=this.offsetAt(x.start),g=this.offsetAt(x.end);return this._content.substring(N,g)}return this._content},h.prototype.update=function(x,N){this._content=x.text,this._version=N,this._lineOffsets=void 0},h.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var x=[],N=this._content,g=!0,p=0;p<N.length;p++){g&&(x.push(p),g=!1);var A=N.charAt(p);g=A==="\r"||A===`
`,A==="\r"&&p+1<N.length&&N.charAt(p+1)===`
`&&p++}g&&N.length>0&&x.push(N.length),this._lineOffsets=x}return this._lineOffsets},h.prototype.positionAt=function(x){x=Math.max(Math.min(x,this._content.length),0);var N=this.getLineOffsets(),g=0,p=N.length;if(p===0)return s.create(0,x);for(;g<p;){var A=Math.floor((g+p)/2);N[A]>x?p=A:g=A+1}var B=g-1;return s.create(B,x-N[B])},h.prototype.offsetAt=function(x){var N=this.getLineOffsets();if(x.line>=N.length)return this._content.length;if(x.line<0)return 0;var g=N[x.line],p=x.line+1<N.length?N[x.line+1]:this._content.length;return Math.max(Math.min(g+x.character,p),g)},Object.defineProperty(h.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),h}(),C;(function(h){var x=Object.prototype.toString;function N(Ie){return typeof Ie!="undefined"}h.defined=N;function g(Ie){return typeof Ie=="undefined"}h.undefined=g;function p(Ie){return Ie===!0||Ie===!1}h.boolean=p;function A(Ie){return x.call(Ie)==="[object String]"}h.string=A;function B(Ie){return x.call(Ie)==="[object Number]"}h.number=B;function ge(Ie,as,Mu){return x.call(Ie)==="[object Number]"&&as<=Ie&&Ie<=Mu}h.numberRange=ge;function Ot(Ie){return x.call(Ie)==="[object Number]"&&-2147483648<=Ie&&Ie<=2147483647}h.integer=Ot;function ze(Ie){return x.call(Ie)==="[object Number]"&&0<=Ie&&Ie<=2147483647}h.uinteger=ze;function hn(Ie){return x.call(Ie)==="[object Function]"}h.func=hn;function gn(Ie){return Ie!==null&&typeof Ie=="object"}h.objectLiteral=gn;function ti(Ie,as){return Array.isArray(Ie)&&Ie.every(as)}h.typedArray=ti})(C||(C={}))})});var lt=X(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.ProtocolNotificationType=wr.ProtocolNotificationType0=wr.ProtocolRequestType=wr.ProtocolRequestType0=wr.RegistrationType=wr.MessageDirection=void 0;var gs=ho(),q_;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(q_||(wr.MessageDirection=q_={}));var Zm=class{constructor(e){this.method=e}};wr.RegistrationType=Zm;var eh=class extends gs.RequestType0{constructor(e){super(e)}};wr.ProtocolRequestType0=eh;var th=class extends gs.RequestType{constructor(e){super(e,gs.ParameterStructures.byName)}};wr.ProtocolRequestType=th;var rh=class extends gs.NotificationType0{constructor(e){super(e)}};wr.ProtocolNotificationType0=rh;var nh=class extends gs.NotificationType{constructor(e){super(e,gs.ParameterStructures.byName)}};wr.ProtocolNotificationType=nh});var uc=X(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.objectLiteral=Wt.typedArray=Wt.stringArray=Wt.array=Wt.func=Wt.error=Wt.number=Wt.string=Wt.boolean=void 0;function cL(t){return t===!0||t===!1}Wt.boolean=cL;function H_(t){return typeof t=="string"||t instanceof String}Wt.string=H_;function fL(t){return typeof t=="number"||t instanceof Number}Wt.number=fL;function dL(t){return t instanceof Error}Wt.error=dL;function pL(t){return typeof t=="function"}Wt.func=pL;function K_(t){return Array.isArray(t)}Wt.array=K_;function mL(t){return K_(t)&&t.every(e=>H_(e))}Wt.stringArray=mL;function hL(t,e){return Array.isArray(t)&&t.every(e)}Wt.typedArray=hL;function gL(t){return t!==null&&typeof t=="object"}Wt.objectLiteral=gL});var X_=X(cc=>{"use strict";Object.defineProperty(cc,"__esModule",{value:!0});cc.ImplementationRequest=void 0;var z_=lt(),Y_;(function(t){t.method="textDocument/implementation",t.messageDirection=z_.MessageDirection.clientToServer,t.type=new z_.ProtocolRequestType(t.method)})(Y_||(cc.ImplementationRequest=Y_={}))});var Z_=X(fc=>{"use strict";Object.defineProperty(fc,"__esModule",{value:!0});fc.TypeDefinitionRequest=void 0;var J_=lt(),Q_;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=J_.MessageDirection.clientToServer,t.type=new J_.ProtocolRequestType(t.method)})(Q_||(fc.TypeDefinitionRequest=Q_={}))});var rv=X(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});Ts.DidChangeWorkspaceFoldersNotification=Ts.WorkspaceFoldersRequest=void 0;var dc=lt(),ev;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=dc.MessageDirection.serverToClient,t.type=new dc.ProtocolRequestType0(t.method)})(ev||(Ts.WorkspaceFoldersRequest=ev={}));var tv;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=dc.MessageDirection.clientToServer,t.type=new dc.ProtocolNotificationType(t.method)})(tv||(Ts.DidChangeWorkspaceFoldersNotification=tv={}))});var ov=X(pc=>{"use strict";Object.defineProperty(pc,"__esModule",{value:!0});pc.ConfigurationRequest=void 0;var nv=lt(),iv;(function(t){t.method="workspace/configuration",t.messageDirection=nv.MessageDirection.serverToClient,t.type=new nv.ProtocolRequestType(t.method)})(iv||(pc.ConfigurationRequest=iv={}))});var lv=X(ys=>{"use strict";Object.defineProperty(ys,"__esModule",{value:!0});ys.ColorPresentationRequest=ys.DocumentColorRequest=void 0;var mc=lt(),sv;(function(t){t.method="textDocument/documentColor",t.messageDirection=mc.MessageDirection.clientToServer,t.type=new mc.ProtocolRequestType(t.method)})(sv||(ys.DocumentColorRequest=sv={}));var av;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=mc.MessageDirection.clientToServer,t.type=new mc.ProtocolRequestType(t.method)})(av||(ys.ColorPresentationRequest=av={}))});var fv=X(_s=>{"use strict";Object.defineProperty(_s,"__esModule",{value:!0});_s.FoldingRangeRefreshRequest=_s.FoldingRangeRequest=void 0;var hc=lt(),uv;(function(t){t.method="textDocument/foldingRange",t.messageDirection=hc.MessageDirection.clientToServer,t.type=new hc.ProtocolRequestType(t.method)})(uv||(_s.FoldingRangeRequest=uv={}));var cv;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=hc.MessageDirection.serverToClient,t.type=new hc.ProtocolRequestType0(t.method)})(cv||(_s.FoldingRangeRefreshRequest=cv={}))});var mv=X(gc=>{"use strict";Object.defineProperty(gc,"__esModule",{value:!0});gc.DeclarationRequest=void 0;var dv=lt(),pv;(function(t){t.method="textDocument/declaration",t.messageDirection=dv.MessageDirection.clientToServer,t.type=new dv.ProtocolRequestType(t.method)})(pv||(gc.DeclarationRequest=pv={}))});var Tv=X(Tc=>{"use strict";Object.defineProperty(Tc,"__esModule",{value:!0});Tc.SelectionRangeRequest=void 0;var hv=lt(),gv;(function(t){t.method="textDocument/selectionRange",t.messageDirection=hv.MessageDirection.clientToServer,t.type=new hv.ProtocolRequestType(t.method)})(gv||(Tc.SelectionRangeRequest=gv={}))});var Rv=X(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.WorkDoneProgressCancelNotification=bi.WorkDoneProgressCreateRequest=bi.WorkDoneProgress=void 0;var TL=ho(),yc=lt(),yv;(function(t){t.type=new TL.ProgressType;function e(r){return r===t.type}t.is=e})(yv||(bi.WorkDoneProgress=yv={}));var _v;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=yc.MessageDirection.serverToClient,t.type=new yc.ProtocolRequestType(t.method)})(_v||(bi.WorkDoneProgressCreateRequest=_v={}));var vv;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=yc.MessageDirection.clientToServer,t.type=new yc.ProtocolNotificationType(t.method)})(vv||(bi.WorkDoneProgressCancelNotification=vv={}))});var Ev=X(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.CallHierarchyOutgoingCallsRequest=Li.CallHierarchyIncomingCallsRequest=Li.CallHierarchyPrepareRequest=void 0;var vs=lt(),xv;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=vs.MessageDirection.clientToServer,t.type=new vs.ProtocolRequestType(t.method)})(xv||(Li.CallHierarchyPrepareRequest=xv={}));var Nv;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=vs.MessageDirection.clientToServer,t.type=new vs.ProtocolRequestType(t.method)})(Nv||(Li.CallHierarchyIncomingCallsRequest=Nv={}));var Ov;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=vs.MessageDirection.clientToServer,t.type=new vs.ProtocolRequestType(t.method)})(Ov||(Li.CallHierarchyOutgoingCallsRequest=Ov={}))});var bv=X($r=>{"use strict";Object.defineProperty($r,"__esModule",{value:!0});$r.SemanticTokensRefreshRequest=$r.SemanticTokensRangeRequest=$r.SemanticTokensDeltaRequest=$r.SemanticTokensRequest=$r.SemanticTokensRegistrationType=$r.TokenFormat=void 0;var ni=lt(),Iv;(function(t){t.Relative="relative"})(Iv||($r.TokenFormat=Iv={}));var Za;(function(t){t.method="textDocument/semanticTokens",t.type=new ni.RegistrationType(t.method)})(Za||($r.SemanticTokensRegistrationType=Za={}));var Sv;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=ni.MessageDirection.clientToServer,t.type=new ni.ProtocolRequestType(t.method),t.registrationMethod=Za.method})(Sv||($r.SemanticTokensRequest=Sv={}));var Av;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=ni.MessageDirection.clientToServer,t.type=new ni.ProtocolRequestType(t.method),t.registrationMethod=Za.method})(Av||($r.SemanticTokensDeltaRequest=Av={}));var Dv;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=ni.MessageDirection.clientToServer,t.type=new ni.ProtocolRequestType(t.method),t.registrationMethod=Za.method})(Dv||($r.SemanticTokensRangeRequest=Dv={}));var Cv;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=ni.MessageDirection.serverToClient,t.type=new ni.ProtocolRequestType0(t.method)})(Cv||($r.SemanticTokensRefreshRequest=Cv={}))});var wv=X(_c=>{"use strict";Object.defineProperty(_c,"__esModule",{value:!0});_c.ShowDocumentRequest=void 0;var Lv=lt(),kv;(function(t){t.method="window/showDocument",t.messageDirection=Lv.MessageDirection.serverToClient,t.type=new Lv.ProtocolRequestType(t.method)})(kv||(_c.ShowDocumentRequest=kv={}))});var Mv=X(vc=>{"use strict";Object.defineProperty(vc,"__esModule",{value:!0});vc.LinkedEditingRangeRequest=void 0;var $v=lt(),Pv;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=$v.MessageDirection.clientToServer,t.type=new $v.ProtocolRequestType(t.method)})(Pv||(vc.LinkedEditingRangeRequest=Pv={}))});var qv=X(pr=>{"use strict";Object.defineProperty(pr,"__esModule",{value:!0});pr.WillDeleteFilesRequest=pr.DidDeleteFilesNotification=pr.DidRenameFilesNotification=pr.WillRenameFilesRequest=pr.DidCreateFilesNotification=pr.WillCreateFilesRequest=pr.FileOperationPatternKind=void 0;var rn=lt(),Fv;(function(t){t.file="file",t.folder="folder"})(Fv||(pr.FileOperationPatternKind=Fv={}));var Uv;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolRequestType(t.method)})(Uv||(pr.WillCreateFilesRequest=Uv={}));var Bv;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method)})(Bv||(pr.DidCreateFilesNotification=Bv={}));var Wv;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolRequestType(t.method)})(Wv||(pr.WillRenameFilesRequest=Wv={}));var Vv;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method)})(Vv||(pr.DidRenameFilesNotification=Vv={}));var Gv;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method)})(Gv||(pr.DidDeleteFilesNotification=Gv={}));var jv;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolRequestType(t.method)})(jv||(pr.WillDeleteFilesRequest=jv={}))});var Xv=X(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.MonikerRequest=ki.MonikerKind=ki.UniquenessLevel=void 0;var Hv=lt(),Kv;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Kv||(ki.UniquenessLevel=Kv={}));var zv;(function(t){t.$import="import",t.$export="export",t.local="local"})(zv||(ki.MonikerKind=zv={}));var Yv;(function(t){t.method="textDocument/moniker",t.messageDirection=Hv.MessageDirection.clientToServer,t.type=new Hv.ProtocolRequestType(t.method)})(Yv||(ki.MonikerRequest=Yv={}))});var eR=X(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.TypeHierarchySubtypesRequest=wi.TypeHierarchySupertypesRequest=wi.TypeHierarchyPrepareRequest=void 0;var Rs=lt(),Jv;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Rs.MessageDirection.clientToServer,t.type=new Rs.ProtocolRequestType(t.method)})(Jv||(wi.TypeHierarchyPrepareRequest=Jv={}));var Qv;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Rs.MessageDirection.clientToServer,t.type=new Rs.ProtocolRequestType(t.method)})(Qv||(wi.TypeHierarchySupertypesRequest=Qv={}));var Zv;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Rs.MessageDirection.clientToServer,t.type=new Rs.ProtocolRequestType(t.method)})(Zv||(wi.TypeHierarchySubtypesRequest=Zv={}))});var nR=X(xs=>{"use strict";Object.defineProperty(xs,"__esModule",{value:!0});xs.InlineValueRefreshRequest=xs.InlineValueRequest=void 0;var Rc=lt(),tR;(function(t){t.method="textDocument/inlineValue",t.messageDirection=Rc.MessageDirection.clientToServer,t.type=new Rc.ProtocolRequestType(t.method)})(tR||(xs.InlineValueRequest=tR={}));var rR;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=Rc.MessageDirection.serverToClient,t.type=new Rc.ProtocolRequestType0(t.method)})(rR||(xs.InlineValueRefreshRequest=rR={}))});var aR=X($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.InlayHintRefreshRequest=$i.InlayHintResolveRequest=$i.InlayHintRequest=void 0;var Ns=lt(),iR;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Ns.MessageDirection.clientToServer,t.type=new Ns.ProtocolRequestType(t.method)})(iR||($i.InlayHintRequest=iR={}));var oR;(function(t){t.method="inlayHint/resolve",t.messageDirection=Ns.MessageDirection.clientToServer,t.type=new Ns.ProtocolRequestType(t.method)})(oR||($i.InlayHintResolveRequest=oR={}));var sR;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Ns.MessageDirection.serverToClient,t.type=new Ns.ProtocolRequestType0(t.method)})(sR||($i.InlayHintRefreshRequest=sR={}))});var mR=X(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});nn.DiagnosticRefreshRequest=nn.WorkspaceDiagnosticRequest=nn.DocumentDiagnosticRequest=nn.DocumentDiagnosticReportKind=nn.DiagnosticServerCancellationData=void 0;var pR=ho(),yL=uc(),Os=lt(),lR;(function(t){function e(r){let n=r;return n&&yL.boolean(n.retriggerRequest)}t.is=e})(lR||(nn.DiagnosticServerCancellationData=lR={}));var uR;(function(t){t.Full="full",t.Unchanged="unchanged"})(uR||(nn.DocumentDiagnosticReportKind=uR={}));var cR;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Os.MessageDirection.clientToServer,t.type=new Os.ProtocolRequestType(t.method),t.partialResult=new pR.ProgressType})(cR||(nn.DocumentDiagnosticRequest=cR={}));var fR;(function(t){t.method="workspace/diagnostic",t.messageDirection=Os.MessageDirection.clientToServer,t.type=new Os.ProtocolRequestType(t.method),t.partialResult=new pR.ProgressType})(fR||(nn.WorkspaceDiagnosticRequest=fR={}));var dR;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Os.MessageDirection.serverToClient,t.type=new Os.ProtocolRequestType0(t.method)})(dR||(nn.DiagnosticRefreshRequest=dR={}))});var RR=X(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.DidCloseNotebookDocumentNotification=Et.DidSaveNotebookDocumentNotification=Et.DidChangeNotebookDocumentNotification=Et.NotebookCellArrayChange=Et.DidOpenNotebookDocumentNotification=Et.NotebookDocumentSyncRegistrationType=Et.NotebookDocument=Et.NotebookCell=Et.ExecutionSummary=Et.NotebookCellKind=void 0;var el=lc(),yn=uc(),Ln=lt(),ih;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(ih||(Et.NotebookCellKind=ih={}));var oh;(function(t){function e(i,o){let s={executionOrder:i};return(o===!0||o===!1)&&(s.success=o),s}t.create=e;function r(i){let o=i;return yn.objectLiteral(o)&&el.uinteger.is(o.executionOrder)&&(o.success===void 0||yn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(oh||(Et.ExecutionSummary=oh={}));var xc;(function(t){function e(o,s){return{kind:o,document:s}}t.create=e;function r(o){let s=o;return yn.objectLiteral(s)&&ih.is(s.kind)&&el.DocumentUri.is(s.document)&&(s.metadata===void 0||yn.objectLiteral(s.metadata))}t.is=r;function n(o,s){let a=new Set;return o.document!==s.document&&a.add("document"),o.kind!==s.kind&&a.add("kind"),o.executionSummary!==s.executionSummary&&a.add("executionSummary"),(o.metadata!==void 0||s.metadata!==void 0)&&!i(o.metadata,s.metadata)&&a.add("metadata"),(o.executionSummary!==void 0||s.executionSummary!==void 0)&&!oh.equals(o.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function i(o,s){if(o===s)return!0;if(o==null||s===null||s===void 0||typeof o!=typeof s||typeof o!="object")return!1;let a=Array.isArray(o),l=Array.isArray(s);if(a!==l)return!1;if(a&&l){if(o.length!==s.length)return!1;for(let u=0;u<o.length;u++)if(!i(o[u],s[u]))return!1}if(yn.objectLiteral(o)&&yn.objectLiteral(s)){let u=Object.keys(o),c=Object.keys(s);if(u.length!==c.length||(u.sort(),c.sort(),!i(u,c)))return!1;for(let f=0;f<u.length;f++){let d=u[f];if(!i(o[d],s[d]))return!1}}return!0}})(xc||(Et.NotebookCell=xc={}));var hR;(function(t){function e(n,i,o,s){return{uri:n,notebookType:i,version:o,cells:s}}t.create=e;function r(n){let i=n;return yn.objectLiteral(i)&&yn.string(i.uri)&&el.integer.is(i.version)&&yn.typedArray(i.cells,xc.is)}t.is=r})(hR||(Et.NotebookDocument=hR={}));var Es;(function(t){t.method="notebookDocument/sync",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.RegistrationType(t.method)})(Es||(Et.NotebookDocumentSyncRegistrationType=Es={}));var gR;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method),t.registrationMethod=Es.method})(gR||(Et.DidOpenNotebookDocumentNotification=gR={}));var TR;(function(t){function e(n){let i=n;return yn.objectLiteral(i)&&el.uinteger.is(i.start)&&el.uinteger.is(i.deleteCount)&&(i.cells===void 0||yn.typedArray(i.cells,xc.is))}t.is=e;function r(n,i,o){let s={start:n,deleteCount:i};return o!==void 0&&(s.cells=o),s}t.create=r})(TR||(Et.NotebookCellArrayChange=TR={}));var yR;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method),t.registrationMethod=Es.method})(yR||(Et.DidChangeNotebookDocumentNotification=yR={}));var _R;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method),t.registrationMethod=Es.method})(_R||(Et.DidSaveNotebookDocumentNotification=_R={}));var vR;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method),t.registrationMethod=Es.method})(vR||(Et.DidCloseNotebookDocumentNotification=vR={}))});var OR=X(Nc=>{"use strict";Object.defineProperty(Nc,"__esModule",{value:!0});Nc.InlineCompletionRequest=void 0;var xR=lt(),NR;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=xR.MessageDirection.clientToServer,t.type=new xR.ProtocolRequestType(t.method)})(NR||(Nc.InlineCompletionRequest=NR={}))});var Mx=X(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.WorkspaceSymbolRequest=_.CodeActionResolveRequest=_.CodeActionRequest=_.DocumentSymbolRequest=_.DocumentHighlightRequest=_.ReferencesRequest=_.DefinitionRequest=_.SignatureHelpRequest=_.SignatureHelpTriggerKind=_.HoverRequest=_.CompletionResolveRequest=_.CompletionRequest=_.CompletionTriggerKind=_.PublishDiagnosticsNotification=_.WatchKind=_.RelativePattern=_.FileChangeType=_.DidChangeWatchedFilesNotification=_.WillSaveTextDocumentWaitUntilRequest=_.WillSaveTextDocumentNotification=_.TextDocumentSaveReason=_.DidSaveTextDocumentNotification=_.DidCloseTextDocumentNotification=_.DidChangeTextDocumentNotification=_.TextDocumentContentChangeEvent=_.DidOpenTextDocumentNotification=_.TextDocumentSyncKind=_.TelemetryEventNotification=_.LogMessageNotification=_.ShowMessageRequest=_.ShowMessageNotification=_.MessageType=_.DidChangeConfigurationNotification=_.ExitNotification=_.ShutdownRequest=_.InitializedNotification=_.InitializeErrorCodes=_.InitializeRequest=_.WorkDoneProgressOptions=_.TextDocumentRegistrationOptions=_.StaticRegistrationOptions=_.PositionEncodingKind=_.FailureHandlingKind=_.ResourceOperationKind=_.UnregistrationRequest=_.RegistrationRequest=_.DocumentSelector=_.NotebookCellTextDocumentFilter=_.NotebookDocumentFilter=_.TextDocumentFilter=void 0;_.MonikerRequest=_.MonikerKind=_.UniquenessLevel=_.WillDeleteFilesRequest=_.DidDeleteFilesNotification=_.WillRenameFilesRequest=_.DidRenameFilesNotification=_.WillCreateFilesRequest=_.DidCreateFilesNotification=_.FileOperationPatternKind=_.LinkedEditingRangeRequest=_.ShowDocumentRequest=_.SemanticTokensRegistrationType=_.SemanticTokensRefreshRequest=_.SemanticTokensRangeRequest=_.SemanticTokensDeltaRequest=_.SemanticTokensRequest=_.TokenFormat=_.CallHierarchyPrepareRequest=_.CallHierarchyOutgoingCallsRequest=_.CallHierarchyIncomingCallsRequest=_.WorkDoneProgressCancelNotification=_.WorkDoneProgressCreateRequest=_.WorkDoneProgress=_.SelectionRangeRequest=_.DeclarationRequest=_.FoldingRangeRefreshRequest=_.FoldingRangeRequest=_.ColorPresentationRequest=_.DocumentColorRequest=_.ConfigurationRequest=_.DidChangeWorkspaceFoldersNotification=_.WorkspaceFoldersRequest=_.TypeDefinitionRequest=_.ImplementationRequest=_.ApplyWorkspaceEditRequest=_.ExecuteCommandRequest=_.PrepareRenameRequest=_.RenameRequest=_.PrepareSupportDefaultBehavior=_.DocumentOnTypeFormattingRequest=_.DocumentRangesFormattingRequest=_.DocumentRangeFormattingRequest=_.DocumentFormattingRequest=_.DocumentLinkResolveRequest=_.DocumentLinkRequest=_.CodeLensRefreshRequest=_.CodeLensResolveRequest=_.CodeLensRequest=_.WorkspaceSymbolResolveRequest=void 0;_.InlineCompletionRequest=_.DidCloseNotebookDocumentNotification=_.DidSaveNotebookDocumentNotification=_.DidChangeNotebookDocumentNotification=_.NotebookCellArrayChange=_.DidOpenNotebookDocumentNotification=_.NotebookDocumentSyncRegistrationType=_.NotebookDocument=_.NotebookCell=_.ExecutionSummary=_.NotebookCellKind=_.DiagnosticRefreshRequest=_.WorkspaceDiagnosticRequest=_.DocumentDiagnosticRequest=_.DocumentDiagnosticReportKind=_.DiagnosticServerCancellationData=_.InlayHintRefreshRequest=_.InlayHintResolveRequest=_.InlayHintRequest=_.InlineValueRefreshRequest=_.InlineValueRequest=_.TypeHierarchySupertypesRequest=_.TypeHierarchySubtypesRequest=_.TypeHierarchyPrepareRequest=void 0;var q=lt(),ER=lc(),Xt=uc(),_L=X_();Object.defineProperty(_,"ImplementationRequest",{enumerable:!0,get:function(){return _L.ImplementationRequest}});var vL=Z_();Object.defineProperty(_,"TypeDefinitionRequest",{enumerable:!0,get:function(){return vL.TypeDefinitionRequest}});var kx=rv();Object.defineProperty(_,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return kx.WorkspaceFoldersRequest}});Object.defineProperty(_,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return kx.DidChangeWorkspaceFoldersNotification}});var RL=ov();Object.defineProperty(_,"ConfigurationRequest",{enumerable:!0,get:function(){return RL.ConfigurationRequest}});var wx=lv();Object.defineProperty(_,"DocumentColorRequest",{enumerable:!0,get:function(){return wx.DocumentColorRequest}});Object.defineProperty(_,"ColorPresentationRequest",{enumerable:!0,get:function(){return wx.ColorPresentationRequest}});var $x=fv();Object.defineProperty(_,"FoldingRangeRequest",{enumerable:!0,get:function(){return $x.FoldingRangeRequest}});Object.defineProperty(_,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return $x.FoldingRangeRefreshRequest}});var xL=mv();Object.defineProperty(_,"DeclarationRequest",{enumerable:!0,get:function(){return xL.DeclarationRequest}});var NL=Tv();Object.defineProperty(_,"SelectionRangeRequest",{enumerable:!0,get:function(){return NL.SelectionRangeRequest}});var ch=Rv();Object.defineProperty(_,"WorkDoneProgress",{enumerable:!0,get:function(){return ch.WorkDoneProgress}});Object.defineProperty(_,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return ch.WorkDoneProgressCreateRequest}});Object.defineProperty(_,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return ch.WorkDoneProgressCancelNotification}});var fh=Ev();Object.defineProperty(_,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return fh.CallHierarchyIncomingCallsRequest}});Object.defineProperty(_,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return fh.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(_,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return fh.CallHierarchyPrepareRequest}});var Is=bv();Object.defineProperty(_,"TokenFormat",{enumerable:!0,get:function(){return Is.TokenFormat}});Object.defineProperty(_,"SemanticTokensRequest",{enumerable:!0,get:function(){return Is.SemanticTokensRequest}});Object.defineProperty(_,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Is.SemanticTokensDeltaRequest}});Object.defineProperty(_,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Is.SemanticTokensRangeRequest}});Object.defineProperty(_,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Is.SemanticTokensRefreshRequest}});Object.defineProperty(_,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Is.SemanticTokensRegistrationType}});var OL=wv();Object.defineProperty(_,"ShowDocumentRequest",{enumerable:!0,get:function(){return OL.ShowDocumentRequest}});var EL=Mv();Object.defineProperty(_,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return EL.LinkedEditingRangeRequest}});var go=qv();Object.defineProperty(_,"FileOperationPatternKind",{enumerable:!0,get:function(){return go.FileOperationPatternKind}});Object.defineProperty(_,"DidCreateFilesNotification",{enumerable:!0,get:function(){return go.DidCreateFilesNotification}});Object.defineProperty(_,"WillCreateFilesRequest",{enumerable:!0,get:function(){return go.WillCreateFilesRequest}});Object.defineProperty(_,"DidRenameFilesNotification",{enumerable:!0,get:function(){return go.DidRenameFilesNotification}});Object.defineProperty(_,"WillRenameFilesRequest",{enumerable:!0,get:function(){return go.WillRenameFilesRequest}});Object.defineProperty(_,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return go.DidDeleteFilesNotification}});Object.defineProperty(_,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return go.WillDeleteFilesRequest}});var dh=Xv();Object.defineProperty(_,"UniquenessLevel",{enumerable:!0,get:function(){return dh.UniquenessLevel}});Object.defineProperty(_,"MonikerKind",{enumerable:!0,get:function(){return dh.MonikerKind}});Object.defineProperty(_,"MonikerRequest",{enumerable:!0,get:function(){return dh.MonikerRequest}});var ph=eR();Object.defineProperty(_,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return ph.TypeHierarchyPrepareRequest}});Object.defineProperty(_,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return ph.TypeHierarchySubtypesRequest}});Object.defineProperty(_,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return ph.TypeHierarchySupertypesRequest}});var Px=nR();Object.defineProperty(_,"InlineValueRequest",{enumerable:!0,get:function(){return Px.InlineValueRequest}});Object.defineProperty(_,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return Px.InlineValueRefreshRequest}});var mh=aR();Object.defineProperty(_,"InlayHintRequest",{enumerable:!0,get:function(){return mh.InlayHintRequest}});Object.defineProperty(_,"InlayHintResolveRequest",{enumerable:!0,get:function(){return mh.InlayHintResolveRequest}});Object.defineProperty(_,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return mh.InlayHintRefreshRequest}});var tl=mR();Object.defineProperty(_,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return tl.DiagnosticServerCancellationData}});Object.defineProperty(_,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return tl.DocumentDiagnosticReportKind}});Object.defineProperty(_,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return tl.DocumentDiagnosticRequest}});Object.defineProperty(_,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return tl.WorkspaceDiagnosticRequest}});Object.defineProperty(_,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return tl.DiagnosticRefreshRequest}});var kn=RR();Object.defineProperty(_,"NotebookCellKind",{enumerable:!0,get:function(){return kn.NotebookCellKind}});Object.defineProperty(_,"ExecutionSummary",{enumerable:!0,get:function(){return kn.ExecutionSummary}});Object.defineProperty(_,"NotebookCell",{enumerable:!0,get:function(){return kn.NotebookCell}});Object.defineProperty(_,"NotebookDocument",{enumerable:!0,get:function(){return kn.NotebookDocument}});Object.defineProperty(_,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return kn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(_,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return kn.DidOpenNotebookDocumentNotification}});Object.defineProperty(_,"NotebookCellArrayChange",{enumerable:!0,get:function(){return kn.NotebookCellArrayChange}});Object.defineProperty(_,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return kn.DidChangeNotebookDocumentNotification}});Object.defineProperty(_,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return kn.DidSaveNotebookDocumentNotification}});Object.defineProperty(_,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return kn.DidCloseNotebookDocumentNotification}});var IL=OR();Object.defineProperty(_,"InlineCompletionRequest",{enumerable:!0,get:function(){return IL.InlineCompletionRequest}});var sh;(function(t){function e(r){let n=r;return Xt.string(n)||Xt.string(n.language)||Xt.string(n.scheme)||Xt.string(n.pattern)}t.is=e})(sh||(_.TextDocumentFilter=sh={}));var ah;(function(t){function e(r){let n=r;return Xt.objectLiteral(n)&&(Xt.string(n.notebookType)||Xt.string(n.scheme)||Xt.string(n.pattern))}t.is=e})(ah||(_.NotebookDocumentFilter=ah={}));var lh;(function(t){function e(r){let n=r;return Xt.objectLiteral(n)&&(Xt.string(n.notebook)||ah.is(n.notebook))&&(n.language===void 0||Xt.string(n.language))}t.is=e})(lh||(_.NotebookCellTextDocumentFilter=lh={}));var uh;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Xt.string(n)&&!sh.is(n)&&!lh.is(n))return!1;return!0}t.is=e})(uh||(_.DocumentSelector=uh={}));var IR;(function(t){t.method="client/registerCapability",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(IR||(_.RegistrationRequest=IR={}));var SR;(function(t){t.method="client/unregisterCapability",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(SR||(_.UnregistrationRequest=SR={}));var AR;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(AR||(_.ResourceOperationKind=AR={}));var DR;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(DR||(_.FailureHandlingKind=DR={}));var CR;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(CR||(_.PositionEncodingKind=CR={}));var bR;(function(t){function e(r){let n=r;return n&&Xt.string(n.id)&&n.id.length>0}t.hasId=e})(bR||(_.StaticRegistrationOptions=bR={}));var LR;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||uh.is(n.documentSelector))}t.is=e})(LR||(_.TextDocumentRegistrationOptions=LR={}));var kR;(function(t){function e(n){let i=n;return Xt.objectLiteral(i)&&(i.workDoneProgress===void 0||Xt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Xt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(kR||(_.WorkDoneProgressOptions=kR={}));var wR;(function(t){t.method="initialize",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(wR||(_.InitializeRequest=wR={}));var $R;(function(t){t.unknownProtocolVersion=1})($R||(_.InitializeErrorCodes=$R={}));var PR;(function(t){t.method="initialized",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(PR||(_.InitializedNotification=PR={}));var MR;(function(t){t.method="shutdown",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType0(t.method)})(MR||(_.ShutdownRequest=MR={}));var FR;(function(t){t.method="exit",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType0(t.method)})(FR||(_.ExitNotification=FR={}));var UR;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(UR||(_.DidChangeConfigurationNotification=UR={}));var BR;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(BR||(_.MessageType=BR={}));var WR;(function(t){t.method="window/showMessage",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(WR||(_.ShowMessageNotification=WR={}));var VR;(function(t){t.method="window/showMessageRequest",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(VR||(_.ShowMessageRequest=VR={}));var GR;(function(t){t.method="window/logMessage",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(GR||(_.LogMessageNotification=GR={}));var jR;(function(t){t.method="telemetry/event",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(jR||(_.TelemetryEventNotification=jR={}));var qR;(function(t){t.None=0,t.Full=1,t.Incremental=2})(qR||(_.TextDocumentSyncKind=qR={}));var HR;(function(t){t.method="textDocument/didOpen",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(HR||(_.DidOpenTextDocumentNotification=HR={}));var KR;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(KR||(_.TextDocumentContentChangeEvent=KR={}));var zR;(function(t){t.method="textDocument/didChange",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(zR||(_.DidChangeTextDocumentNotification=zR={}));var YR;(function(t){t.method="textDocument/didClose",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(YR||(_.DidCloseTextDocumentNotification=YR={}));var XR;(function(t){t.method="textDocument/didSave",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(XR||(_.DidSaveTextDocumentNotification=XR={}));var JR;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(JR||(_.TextDocumentSaveReason=JR={}));var QR;(function(t){t.method="textDocument/willSave",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(QR||(_.WillSaveTextDocumentNotification=QR={}));var ZR;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ZR||(_.WillSaveTextDocumentWaitUntilRequest=ZR={}));var ex;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(ex||(_.DidChangeWatchedFilesNotification=ex={}));var tx;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(tx||(_.FileChangeType=tx={}));var rx;(function(t){function e(r){let n=r;return Xt.objectLiteral(n)&&(ER.URI.is(n.baseUri)||ER.WorkspaceFolder.is(n.baseUri))&&Xt.string(n.pattern)}t.is=e})(rx||(_.RelativePattern=rx={}));var nx;(function(t){t.Create=1,t.Change=2,t.Delete=4})(nx||(_.WatchKind=nx={}));var ix;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(ix||(_.PublishDiagnosticsNotification=ix={}));var ox;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(ox||(_.CompletionTriggerKind=ox={}));var sx;(function(t){t.method="textDocument/completion",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(sx||(_.CompletionRequest=sx={}));var ax;(function(t){t.method="completionItem/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ax||(_.CompletionResolveRequest=ax={}));var lx;(function(t){t.method="textDocument/hover",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(lx||(_.HoverRequest=lx={}));var ux;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(ux||(_.SignatureHelpTriggerKind=ux={}));var cx;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(cx||(_.SignatureHelpRequest=cx={}));var fx;(function(t){t.method="textDocument/definition",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(fx||(_.DefinitionRequest=fx={}));var dx;(function(t){t.method="textDocument/references",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(dx||(_.ReferencesRequest=dx={}));var px;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(px||(_.DocumentHighlightRequest=px={}));var mx;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(mx||(_.DocumentSymbolRequest=mx={}));var hx;(function(t){t.method="textDocument/codeAction",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(hx||(_.CodeActionRequest=hx={}));var gx;(function(t){t.method="codeAction/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(gx||(_.CodeActionResolveRequest=gx={}));var Tx;(function(t){t.method="workspace/symbol",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Tx||(_.WorkspaceSymbolRequest=Tx={}));var yx;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(yx||(_.WorkspaceSymbolResolveRequest=yx={}));var _x;(function(t){t.method="textDocument/codeLens",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(_x||(_.CodeLensRequest=_x={}));var vx;(function(t){t.method="codeLens/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(vx||(_.CodeLensResolveRequest=vx={}));var Rx;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType0(t.method)})(Rx||(_.CodeLensRefreshRequest=Rx={}));var xx;(function(t){t.method="textDocument/documentLink",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(xx||(_.DocumentLinkRequest=xx={}));var Nx;(function(t){t.method="documentLink/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Nx||(_.DocumentLinkResolveRequest=Nx={}));var Ox;(function(t){t.method="textDocument/formatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Ox||(_.DocumentFormattingRequest=Ox={}));var Ex;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Ex||(_.DocumentRangeFormattingRequest=Ex={}));var Ix;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Ix||(_.DocumentRangesFormattingRequest=Ix={}));var Sx;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Sx||(_.DocumentOnTypeFormattingRequest=Sx={}));var Ax;(function(t){t.Identifier=1})(Ax||(_.PrepareSupportDefaultBehavior=Ax={}));var Dx;(function(t){t.method="textDocument/rename",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Dx||(_.RenameRequest=Dx={}));var Cx;(function(t){t.method="textDocument/prepareRename",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Cx||(_.PrepareRenameRequest=Cx={}));var bx;(function(t){t.method="workspace/executeCommand",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(bx||(_.ExecuteCommandRequest=bx={}));var Lx;(function(t){t.method="workspace/applyEdit",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType("workspace/applyEdit")})(Lx||(_.ApplyWorkspaceEditRequest=Lx={}))});var Ux=X(Oc=>{"use strict";Object.defineProperty(Oc,"__esModule",{value:!0});Oc.createProtocolConnection=void 0;var Fx=ho();function SL(t,e,r,n){return Fx.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Fx.createMessageConnection)(t,e,r,n)}Oc.createProtocolConnection=SL});var Wx=X(Pr=>{"use strict";var AL=Pr&&Pr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Ec=Pr&&Pr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&AL(e,t,r)};Object.defineProperty(Pr,"__esModule",{value:!0});Pr.LSPErrorCodes=Pr.createProtocolConnection=void 0;Ec(ho(),Pr);Ec(lc(),Pr);Ec(lt(),Pr);Ec(Mx(),Pr);var DL=Ux();Object.defineProperty(Pr,"createProtocolConnection",{enumerable:!0,get:function(){return DL.createProtocolConnection}});var Bx;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(Bx||(Pr.LSPErrorCodes=Bx={}))});var Tt=X(wn=>{"use strict";var CL=wn&&wn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Vx=wn&&wn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&CL(e,t,r)};Object.defineProperty(wn,"__esModule",{value:!0});wn.createProtocolConnection=void 0;var bL=Qm();Vx(Qm(),wn);Vx(Wx(),wn);function LL(t,e,r,n){return(0,bL.createMessageConnection)(t,e,r,n)}wn.createProtocolConnection=LL});var hh=X(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});on.generateUuid=on.parse=on.isUUID=on.v4=on.empty=void 0;var rl=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},nl=class t extends rl{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};nl._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];nl._timeHighBits=["8","9","a","b"];on.empty=new rl("00000000-0000-0000-0000-000000000000");function Gx(){return new nl}on.v4=Gx;var kL=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function jx(t){return kL.test(t)}on.isUUID=jx;function wL(t){if(!jx(t))throw new Error("invalid uuid");return new rl(t)}on.parse=wL;function $L(){return Gx().asHex()}on.generateUuid=$L});var qx=X(Mi=>{"use strict";Object.defineProperty(Mi,"__esModule",{value:!0});Mi.attachPartialResult=Mi.ProgressFeature=Mi.attachWorkDone=void 0;var Pi=Tt(),PL=hh(),To=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(Pi.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(Pi.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(Pi.WorkDoneProgress.type,this._token,{kind:"end"})}};To.Instances=new Map;var Ic=class extends To{constructor(e,r){super(e,r),this._source=new Pi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},il=class{constructor(){}begin(){}report(){}done(){}},Sc=class extends il{constructor(){super(),this._source=new Pi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function ML(t,e){if(e===void 0||e.workDoneToken===void 0)return new il;let r=e.workDoneToken;return delete e.workDoneToken,new To(t,r)}Mi.attachWorkDone=ML;var FL=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var r;super.initialize(e),((r=e==null?void 0:e.window)==null?void 0:r.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(Pi.WorkDoneProgressCancelNotification.type,n=>{let i=To.Instances.get(n.token);(i instanceof Ic||i instanceof Sc)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new il:new To(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,PL.generateUuid)();return this.connection.sendRequest(Pi.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Ic(this.connection,e))}else return Promise.resolve(new Sc)}};Mi.ProgressFeature=FL;var gh;(function(t){t.type=new Pi.ProgressType})(gh||(gh={}));var Th=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(gh.type,this._token,e)}};function UL(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Th(t,r)}Mi.attachPartialResult=UL});var Hx=X(Ac=>{"use strict";Object.defineProperty(Ac,"__esModule",{value:!0});Ac.ConfigurationFeature=void 0;var BL=Tt(),WL=Uu(),VL=t=>class extends t{getConfiguration(e){return e?WL.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(BL.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Ac.ConfigurationFeature=VL});var Kx=X(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.WorkspaceFoldersFeature=void 0;var Dc=Tt(),GL=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Dc.Emitter,this.connection.onNotification(Dc.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){var n,i;super.fillServerCapabilities(e);let r=(i=(n=e.workspace)==null?void 0:n.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Dc.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Dc.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Cc.WorkspaceFoldersFeature=GL});var zx=X(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.CallHierarchyFeature=void 0;var yh=Tt(),jL=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(yh.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=yh.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=yh.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};bc.CallHierarchyFeature=jL});var vh=X(Fi=>{"use strict";Object.defineProperty(Fi,"__esModule",{value:!0});Fi.SemanticTokensBuilder=Fi.SemanticTokensDiff=Fi.SemanticTokensFeature=void 0;var Lc=Tt(),qL=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Lc.SemanticTokensRefreshRequest.type),on:e=>{let r=Lc.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=Lc.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=Lc.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Fi.SemanticTokensFeature=qL;var kc=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let s=i-n+1,a=this.modifiedSequence.slice(n,o+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};Fi.SemanticTokensDiff=kc;var _h=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new kc(this._prevData,this._data).computeDiff()}:this.build()}};Fi.SemanticTokensBuilder=_h});var Yx=X(wc=>{"use strict";Object.defineProperty(wc,"__esModule",{value:!0});wc.ShowDocumentFeature=void 0;var HL=Tt(),KL=t=>class extends t{showDocument(e){return this.connection.sendRequest(HL.ShowDocumentRequest.type,e)}};wc.ShowDocumentFeature=KL});var Xx=X($c=>{"use strict";Object.defineProperty($c,"__esModule",{value:!0});$c.FileOperationsFeature=void 0;var Ss=Tt(),zL=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Ss.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Ss.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Ss.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Ss.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Ss.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Ss.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};$c.FileOperationsFeature=zL});var Jx=X(Pc=>{"use strict";Object.defineProperty(Pc,"__esModule",{value:!0});Pc.LinkedEditingRangeFeature=void 0;var YL=Tt(),XL=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(YL.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Pc.LinkedEditingRangeFeature=XL});var Qx=X(Mc=>{"use strict";Object.defineProperty(Mc,"__esModule",{value:!0});Mc.TypeHierarchyFeature=void 0;var Rh=Tt(),JL=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Rh.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Rh.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Rh.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Mc.TypeHierarchyFeature=JL});var eN=X(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0});Fc.InlineValueFeature=void 0;var Zx=Tt(),QL=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Zx.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Zx.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Fc.InlineValueFeature=QL});var rN=X(Uc=>{"use strict";Object.defineProperty(Uc,"__esModule",{value:!0});Uc.FoldingRangeFeature=void 0;var tN=Tt(),ZL=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(tN.FoldingRangeRefreshRequest.type),on:e=>{let r=tN.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Uc.FoldingRangeFeature=ZL});var nN=X(Bc=>{"use strict";Object.defineProperty(Bc,"__esModule",{value:!0});Bc.InlayHintFeature=void 0;var xh=Tt(),ek=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(xh.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(xh.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(xh.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Bc.InlayHintFeature=ek});var iN=X(Wc=>{"use strict";Object.defineProperty(Wc,"__esModule",{value:!0});Wc.DiagnosticFeature=void 0;var ol=Tt(),tk=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(ol.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(ol.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(ol.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(ol.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(ol.WorkspaceDiagnosticRequest.partialResult,r)))}}};Wc.DiagnosticFeature=tk});var Oh=X(Vc=>{"use strict";Object.defineProperty(Vc,"__esModule",{value:!0});Vc.TextDocuments=void 0;var yo=Tt(),Nh=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new yo.Emitter,this._onDidOpen=new yo.Emitter,this._onDidClose=new yo.Emitter,this._onDidSave=new yo.Emitter,this._onWillSave=new yo.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=yo.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let s=Object.freeze({document:o});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,o,s),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),yo.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Vc.TextDocuments=Nh});var Ih=X(As=>{"use strict";Object.defineProperty(As,"__esModule",{value:!0});As.NotebookDocuments=As.NotebookSyncFeature=void 0;var sn=Tt(),oN=Oh(),rk=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(sn.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(sn.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(sn.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(sn.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};As.NotebookSyncFeature=rk;var Gc=class t{onDidOpenTextDocument(e){return this.openHandler=e,sn.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,sn.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,sn.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Gc.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var Eh=class{constructor(e){e instanceof oN.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new oN.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new sn.Emitter,this._onDidChange=new sn.Emitter,this._onDidSave=new sn.Emitter,this._onDidClose=new sn.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Gc,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let s=o.metadata,a=!1,l=i.change;l.metadata!==void 0&&(a=!0,o.metadata=l.metadata);let u=[],c=[],f=[],d=[];if(l.cells!==void 0){let E=l.cells;if(E.structure!==void 0){let y=E.structure.array;if(o.cells.splice(y.start,y.deleteCount,...y.cells!==void 0?y.cells:[]),E.structure.didOpen!==void 0)for(let T of E.structure.didOpen)r.openTextDocument({textDocument:T}),u.push(T.uri);if(E.structure.didClose)for(let T of E.structure.didClose)r.closeTextDocument({textDocument:T}),c.push(T.uri)}if(E.data!==void 0){let y=new Map(E.data.map(T=>[T.document,T]));for(let T=0;T<=o.cells.length;T++){let S=y.get(o.cells[T].document);if(S!==void 0){let M=o.cells.splice(T,1,S);if(f.push({old:M[0],new:S}),y.delete(S.document),y.size===0)break}}}if(E.textContent!==void 0)for(let y of E.textContent)r.changeTextDocument({textDocument:y.document,contentChanges:y.changes}),d.push(y.document.uri)}this.updateCellMap(o);let m={notebookDocument:o};a&&(m.metadata={old:s,new:o.metadata});let R=[];for(let E of u)R.push(this.getNotebookCell(E));let O=[];for(let E of c)O.push(this.getNotebookCell(E));let I=[];for(let E of d)I.push(this.getNotebookCell(E));(R.length>0||O.length>0||f.length>0||I.length>0)&&(m.cells={added:R,removed:O,changed:{data:f,textContent:I}}),(m.metadata!==void 0||m.cells!==void 0)&&this._onDidChange.fire(m)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let s of i.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of o.cells)this.notebookCellMap.delete(s.document)}})),sn.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};As.NotebookDocuments=Eh});var sN=X(jc=>{"use strict";Object.defineProperty(jc,"__esModule",{value:!0});jc.MonikerFeature=void 0;var nk=Tt(),ik=t=>class extends t{get moniker(){return{on:e=>{let r=nk.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};jc.MonikerFeature=ik});var Lh=X(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.createConnection=ke.combineFeatures=ke.combineNotebooksFeatures=ke.combineLanguagesFeatures=ke.combineWorkspaceFeatures=ke.combineWindowFeatures=ke.combineClientFeatures=ke.combineTracerFeatures=ke.combineTelemetryFeatures=ke.combineConsoleFeatures=ke._NotebooksImpl=ke._LanguagesImpl=ke.BulkUnregistration=ke.BulkRegistration=ke.ErrorMessageTracker=void 0;var Y=Tt(),an=Uu(),Ah=hh(),me=qx(),ok=Hx(),sk=Kx(),ak=zx(),lk=vh(),uk=Yx(),ck=Xx(),fk=Jx(),dk=Qx(),pk=eN(),mk=rN(),hk=nN(),gk=iN(),Tk=Ih(),yk=sN();function Sh(t){if(t!==null)return t}var Dh=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};ke.ErrorMessageTracker=Dh;var qc=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(Y.MessageType.Error,e)}warn(e){this.send(Y.MessageType.Warning,e)}info(e){this.send(Y.MessageType.Info,e)}log(e){this.send(Y.MessageType.Log,e)}debug(e){this.send(Y.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(Y.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,Y.RAL)().console.error("Sending log message failed")})}},Ch=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:Y.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(Sh)}showWarningMessage(e,...r){let n={type:Y.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(Sh)}showInformationMessage(e,...r){let n={type:Y.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(Sh)}},aN=(0,uk.ShowDocumentFeature)((0,me.ProgressFeature)(Ch)),lN;(function(t){function e(){return new Hc}t.create=e})(lN||(ke.BulkRegistration=lN={}));var Hc=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=an.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=Ah.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},uN;(function(t){function e(){return new sl(void 0,[])}t.create=e})(uN||(ke.BulkUnregistration=uN={}));var sl=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(Y.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=an.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(Y.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Kc=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Hc?this.registerMany(e):e instanceof sl?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=an.string(r)?r:r.method,o=Ah.generateUuid(),s={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(Y.RegistrationRequest.type,s).then(a=>(e.add({id:o,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=an.string(e)?e:e.method,i=Ah.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(Y.RegistrationRequest.type,o).then(s=>Y.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(Y.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(Y.RegistrationRequest.type,r).then(()=>new sl(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},bh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(Y.ApplyWorkspaceEditRequest.type,n)}},cN=(0,ck.FileOperationsFeature)((0,sk.WorkspaceFoldersFeature)((0,ok.ConfigurationFeature)(bh))),zc=class{constructor(){this._trace=Y.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==Y.Trace.Off&&this.connection.sendNotification(Y.LogTraceNotification.type,{message:e,verbose:this._trace===Y.Trace.Verbose?r:void 0}).catch(()=>{})}},Yc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(Y.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Xc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,me.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,me.attachPartialResult)(this.connection,r)}};ke._LanguagesImpl=Xc;var fN=(0,mk.FoldingRangeFeature)((0,yk.MonikerFeature)((0,gk.DiagnosticFeature)((0,hk.InlayHintFeature)((0,pk.InlineValueFeature)((0,dk.TypeHierarchyFeature)((0,fk.LinkedEditingRangeFeature)((0,lk.SemanticTokensFeature)((0,ak.CallHierarchyFeature)(Xc))))))))),Jc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,me.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,me.attachPartialResult)(this.connection,r)}};ke._NotebooksImpl=Jc;var dN=(0,Tk.NotebookSyncFeature)(Jc);function pN(t,e){return function(r){return e(t(r))}}ke.combineConsoleFeatures=pN;function mN(t,e){return function(r){return e(t(r))}}ke.combineTelemetryFeatures=mN;function hN(t,e){return function(r){return e(t(r))}}ke.combineTracerFeatures=hN;function gN(t,e){return function(r){return e(t(r))}}ke.combineClientFeatures=gN;function TN(t,e){return function(r){return e(t(r))}}ke.combineWindowFeatures=TN;function yN(t,e){return function(r){return e(t(r))}}ke.combineWorkspaceFeatures=yN;function _N(t,e){return function(r){return e(t(r))}}ke.combineLanguagesFeatures=_N;function vN(t,e){return function(r){return e(t(r))}}ke.combineNotebooksFeatures=vN;function _k(t,e){function r(i,o,s){return i&&o?s(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,pN),tracer:r(t.tracer,e.tracer,hN),telemetry:r(t.telemetry,e.telemetry,mN),client:r(t.client,e.client,gN),window:r(t.window,e.window,TN),workspace:r(t.workspace,e.workspace,yN),languages:r(t.languages,e.languages,_N),notebooks:r(t.notebooks,e.notebooks,vN)}}ke.combineFeatures=_k;function vk(t,e,r){let n=r&&r.console?new(r.console(qc)):new qc,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(zc)):new zc,s=r&&r.telemetry?new(r.telemetry(Yc)):new Yc,a=r&&r.client?new(r.client(Kc)):new Kc,l=r&&r.window?new(r.window(aN)):new aN,u=r&&r.workspace?new(r.workspace(cN)):new cN,c=r&&r.languages?new(r.languages(fN)):new fN,f=r&&r.notebooks?new(r.notebooks(dN)):new dN,d=[n,o,s,a,l,u,c,f];function m(y){return y instanceof Promise?y:an.thenable(y)?new Promise((T,S)=>{y.then(M=>T(M),M=>S(M))}):Promise.resolve(y)}let R,O,I,E={listen:()=>i.listen(),sendRequest:(y,...T)=>i.sendRequest(an.string(y)?y:y.method,...T),onRequest:(y,T)=>i.onRequest(y,T),sendNotification:(y,T)=>{let S=an.string(y)?y:y.method;return i.sendNotification(S,T)},onNotification:(y,T)=>i.onNotification(y,T),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:y=>(O=y,{dispose:()=>{O=void 0}}),onInitialized:y=>i.onNotification(Y.InitializedNotification.type,y),onShutdown:y=>(R=y,{dispose:()=>{R=void 0}}),onExit:y=>(I=y,{dispose:()=>{I=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return o},get client(){return a},get window(){return l},get workspace(){return u},get languages(){return c},get notebooks(){return f},onDidChangeConfiguration:y=>i.onNotification(Y.DidChangeConfigurationNotification.type,y),onDidChangeWatchedFiles:y=>i.onNotification(Y.DidChangeWatchedFilesNotification.type,y),__textDocumentSync:void 0,onDidOpenTextDocument:y=>i.onNotification(Y.DidOpenTextDocumentNotification.type,y),onDidChangeTextDocument:y=>i.onNotification(Y.DidChangeTextDocumentNotification.type,y),onDidCloseTextDocument:y=>i.onNotification(Y.DidCloseTextDocumentNotification.type,y),onWillSaveTextDocument:y=>i.onNotification(Y.WillSaveTextDocumentNotification.type,y),onWillSaveTextDocumentWaitUntil:y=>i.onRequest(Y.WillSaveTextDocumentWaitUntilRequest.type,y),onDidSaveTextDocument:y=>i.onNotification(Y.DidSaveTextDocumentNotification.type,y),sendDiagnostics:y=>i.sendNotification(Y.PublishDiagnosticsNotification.type,y),onHover:y=>i.onRequest(Y.HoverRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),void 0)),onCompletion:y=>i.onRequest(Y.CompletionRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onCompletionResolve:y=>i.onRequest(Y.CompletionResolveRequest.type,y),onSignatureHelp:y=>i.onRequest(Y.SignatureHelpRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),void 0)),onDeclaration:y=>i.onRequest(Y.DeclarationRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onDefinition:y=>i.onRequest(Y.DefinitionRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onTypeDefinition:y=>i.onRequest(Y.TypeDefinitionRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onImplementation:y=>i.onRequest(Y.ImplementationRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onReferences:y=>i.onRequest(Y.ReferencesRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onDocumentHighlight:y=>i.onRequest(Y.DocumentHighlightRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onDocumentSymbol:y=>i.onRequest(Y.DocumentSymbolRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onWorkspaceSymbol:y=>i.onRequest(Y.WorkspaceSymbolRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onWorkspaceSymbolResolve:y=>i.onRequest(Y.WorkspaceSymbolResolveRequest.type,y),onCodeAction:y=>i.onRequest(Y.CodeActionRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onCodeActionResolve:y=>i.onRequest(Y.CodeActionResolveRequest.type,(T,S)=>y(T,S)),onCodeLens:y=>i.onRequest(Y.CodeLensRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onCodeLensResolve:y=>i.onRequest(Y.CodeLensResolveRequest.type,(T,S)=>y(T,S)),onDocumentFormatting:y=>i.onRequest(Y.DocumentFormattingRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),void 0)),onDocumentRangeFormatting:y=>i.onRequest(Y.DocumentRangeFormattingRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),void 0)),onDocumentOnTypeFormatting:y=>i.onRequest(Y.DocumentOnTypeFormattingRequest.type,(T,S)=>y(T,S)),onRenameRequest:y=>i.onRequest(Y.RenameRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),void 0)),onPrepareRename:y=>i.onRequest(Y.PrepareRenameRequest.type,(T,S)=>y(T,S)),onDocumentLinks:y=>i.onRequest(Y.DocumentLinkRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onDocumentLinkResolve:y=>i.onRequest(Y.DocumentLinkResolveRequest.type,(T,S)=>y(T,S)),onDocumentColor:y=>i.onRequest(Y.DocumentColorRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onColorPresentation:y=>i.onRequest(Y.ColorPresentationRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onFoldingRanges:y=>i.onRequest(Y.FoldingRangeRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onSelectionRanges:y=>i.onRequest(Y.SelectionRangeRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),(0,me.attachPartialResult)(i,T))),onExecuteCommand:y=>i.onRequest(Y.ExecuteCommandRequest.type,(T,S)=>y(T,S,(0,me.attachWorkDone)(i,T),void 0)),dispose:()=>i.dispose()};for(let y of d)y.attach(E);return i.onRequest(Y.InitializeRequest.type,y=>{e.initialize(y),an.string(y.trace)&&(o.trace=Y.Trace.fromString(y.trace));for(let T of d)T.initialize(y.capabilities);if(O){let T=O(y,new Y.CancellationTokenSource().token,(0,me.attachWorkDone)(i,y),void 0);return m(T).then(S=>{if(S instanceof Y.ResponseError)return S;let M=S;M||(M={capabilities:{}});let te=M.capabilities;te||(te={},M.capabilities=te),te.textDocumentSync===void 0||te.textDocumentSync===null?te.textDocumentSync=an.number(E.__textDocumentSync)?E.__textDocumentSync:Y.TextDocumentSyncKind.None:!an.number(te.textDocumentSync)&&!an.number(te.textDocumentSync.change)&&(te.textDocumentSync.change=an.number(E.__textDocumentSync)?E.__textDocumentSync:Y.TextDocumentSyncKind.None);for(let ue of d)ue.fillServerCapabilities(te);return M})}else{let T={capabilities:{textDocumentSync:Y.TextDocumentSyncKind.None}};for(let S of d)S.fillServerCapabilities(T.capabilities);return T}}),i.onRequest(Y.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,R)return R(new Y.CancellationTokenSource().token)}),i.onNotification(Y.ExitNotification.type,()=>{try{I&&I()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(Y.SetTraceNotification.type,y=>{o.trace=Y.Trace.fromString(y.value)}),E}ke.createConnection=vk});var RN=X(Mr=>{"use strict";Object.defineProperty(Mr,"__esModule",{value:!0});Mr.resolveModulePath=Mr.FileSystem=Mr.resolveGlobalYarnPath=Mr.resolveGlobalNodePath=Mr.resolve=Mr.uriToFilePath=void 0;var Rk=require("url"),_n=require("path"),kh=require("fs"),Mh=require("child_process");function xk(t){let e=Rk.parse(t);if(e.protocol!=="file:"||!e.path)return;let r=e.path.split("/");for(var n=0,i=r.length;n<i;n++)r[n]=decodeURIComponent(r[n]);if(process.platform==="win32"&&r.length>1){let o=r[0],s=r[1];o.length===0&&s.length>1&&s[1]===":"&&r.shift()}return _n.normalize(r.join("/"))}Mr.uriToFilePath=xk;function wh(){return process.platform==="win32"}function Qc(t,e,r,n){let i="NODE_PATH",o=["var p = process;","p.on('message',function(m){","if(m.c==='e'){","p.exit(0);","}","else if(m.c==='rs'){","try{","var r=require.resolve(m.a);","p.send({c:'r',s:true,r:r});","}","catch(err){","p.send({c:'r',s:false});","}","}","});"].join("");return new Promise((s,a)=>{let l=process.env,u=Object.create(null);Object.keys(l).forEach(c=>u[c]=l[c]),e&&kh.existsSync(e)&&(u[i]?u[i]=e+_n.delimiter+u[i]:u[i]=e,n&&n(`NODE_PATH value is: ${u[i]}`)),u.ELECTRON_RUN_AS_NODE="1";try{let c=(0,Mh.fork)("",[],{cwd:r,env:u,execArgv:["-e",o]});if(c.pid===void 0){a(new Error(`Starting process to resolve node module  ${t} failed`));return}c.on("error",d=>{a(d)}),c.on("message",d=>{d.c==="r"&&(c.send({c:"e"}),d.s?s(d.r):a(new Error(`Failed to resolve module: ${t}`)))});let f={c:"rs",a:t};c.send(f)}catch(c){a(c)}})}Mr.resolve=Qc;function $h(t){let e="npm",r=Object.create(null);Object.keys(process.env).forEach(o=>r[o]=process.env[o]),r.NO_UPDATE_NOTIFIER="true";let n={encoding:"utf8",env:r};wh()&&(e="npm.cmd",n.shell=!0);let i=()=>{};try{process.on("SIGPIPE",i);let o=(0,Mh.spawnSync)(e,["config","get","prefix"],n).stdout;if(!o){t&&t("'npm config get prefix' didn't return a value.");return}let s=o.trim();return t&&t(`'npm config get prefix' value is: ${s}`),s.length>0?wh()?_n.join(s,"node_modules"):_n.join(s,"lib","node_modules"):void 0}catch{return}finally{process.removeListener("SIGPIPE",i)}}Mr.resolveGlobalNodePath=$h;function Nk(t){let e="yarn",r={encoding:"utf8"};wh()&&(e="yarn.cmd",r.shell=!0);let n=()=>{};try{process.on("SIGPIPE",n);let i=(0,Mh.spawnSync)(e,["global","dir","--json"],r),o=i.stdout;if(!o){t&&(t("'yarn global dir' didn't return a value."),i.stderr&&t(i.stderr));return}let s=o.trim().split(/\r?\n/);for(let a of s)try{let l=JSON.parse(a);if(l.type==="log")return _n.join(l.data,"node_modules")}catch{}return}catch{return}finally{process.removeListener("SIGPIPE",n)}}Mr.resolveGlobalYarnPath=Nk;var Ph;(function(t){let e;function r(){return e!==void 0||(process.platform==="win32"?e=!1:e=!kh.existsSync(__filename.toUpperCase())||!kh.existsSync(__filename.toLowerCase())),e}t.isCaseSensitive=r;function n(i,o){return r()?_n.normalize(o).indexOf(_n.normalize(i))===0:_n.normalize(o).toLowerCase().indexOf(_n.normalize(i).toLowerCase())===0}t.isParent=n})(Ph||(Mr.FileSystem=Ph={}));function Ok(t,e,r,n){return r?(_n.isAbsolute(r)||(r=_n.join(t,r)),Qc(e,r,r,n).then(i=>Ph.isParent(r,i)?i:Promise.reject(new Error(`Failed to load ${e} from node path location.`))).then(void 0,i=>Qc(e,$h(n),t,n))):Qc(e,$h(n),t,n)}Mr.resolveModulePath=Ok});var Fh=X((mq,xN)=>{"use strict";xN.exports=Tt()});var NN=X(Zc=>{"use strict";Object.defineProperty(Zc,"__esModule",{value:!0});Zc.InlineCompletionFeature=void 0;var Ek=Tt(),Ik=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(Ek.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Zc.InlineCompletionFeature=Ik});var IN=X(mr=>{"use strict";var Sk=mr&&mr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),EN=mr&&mr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Sk(e,t,r)};Object.defineProperty(mr,"__esModule",{value:!0});mr.ProposedFeatures=mr.NotebookDocuments=mr.TextDocuments=mr.SemanticTokensBuilder=void 0;var Ak=vh();Object.defineProperty(mr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return Ak.SemanticTokensBuilder}});var Dk=NN();EN(Tt(),mr);var Ck=Oh();Object.defineProperty(mr,"TextDocuments",{enumerable:!0,get:function(){return Ck.TextDocuments}});var bk=Ih();Object.defineProperty(mr,"NotebookDocuments",{enumerable:!0,get:function(){return bk.NotebookDocuments}});EN(Lh(),mr);var ON;(function(t){t.all={__brand:"features",languages:Dk.InlineCompletionFeature}})(ON||(mr.ProposedFeatures=ON={}))});var Fr=X(ln=>{"use strict";var Lk=ln&&ln.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),CN=ln&&ln.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Lk(e,t,r)};Object.defineProperty(ln,"__esModule",{value:!0});ln.createConnection=ln.Files=void 0;var SN=require("util"),Uh=Uu(),kk=Lh(),al=RN(),_o=Fh();CN(Fh(),ln);CN(IN(),ln);var AN;(function(t){t.uriToFilePath=al.uriToFilePath,t.resolveGlobalNodePath=al.resolveGlobalNodePath,t.resolveGlobalYarnPath=al.resolveGlobalYarnPath,t.resolve=al.resolve,t.resolveModulePath=al.resolveModulePath})(AN||(ln.Files=AN={}));var DN;function ef(){if(DN!==void 0)try{DN.end()}catch{}}var Ds=!1,bN;function wk(){let t="--clientProcessId";function e(r){try{let n=parseInt(r);isNaN(n)||(bN=setInterval(()=>{try{process.kill(n,0)}catch{ef(),process.exit(Ds?0:1)}},3e3))}catch{}}for(let r=2;r<process.argv.length;r++){let n=process.argv[r];if(n===t&&r+1<process.argv.length){e(process.argv[r+1]);return}else{let i=n.split("=");i[0]===t&&e(i[1])}}}wk();var $k={initialize:t=>{let e=t.processId;Uh.number(e)&&bN===void 0&&setInterval(()=>{try{process.kill(e,0)}catch{process.exit(Ds?0:1)}},3e3)},get shutdownReceived(){return Ds},set shutdownReceived(t){Ds=t},exit:t=>{ef(),process.exit(t)}};function Pk(t,e,r,n){let i,o,s,a;return t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),_o.ConnectionStrategy.is(t)||_o.ConnectionOptions.is(t)?a=t:(o=t,s=e,a=r),Mk(o,s,a,i)}ln.createConnection=Pk;function Mk(t,e,r,n){let i=!1;if(!t&&!e&&process.argv.length>2){let l,u,c=process.argv.slice(2);for(let f=0;f<c.length;f++){let d=c[f];if(d==="--node-ipc"){t=new _o.IPCMessageReader(process),e=new _o.IPCMessageWriter(process);break}else if(d==="--stdio"){i=!0,t=process.stdin,e=process.stdout;break}else if(d==="--socket"){l=parseInt(c[f+1]);break}else if(d==="--pipe"){u=c[f+1];break}else{var o=d.split("=");if(o[0]==="--socket"){l=parseInt(o[1]);break}else if(o[0]==="--pipe"){u=o[1];break}}}if(l){let f=(0,_o.createServerSocketTransport)(l);t=f[0],e=f[1]}else if(u){let f=(0,_o.createServerPipeTransport)(u);t=f[0],e=f[1]}}var s="Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";if(!t)throw new Error("Connection input stream is not set. "+s);if(!e)throw new Error("Connection output stream is not set. "+s);if(Uh.func(t.read)&&Uh.func(t.on)){let l=t;l.on("end",()=>{ef(),process.exit(Ds?0:1)}),l.on("close",()=>{ef(),process.exit(Ds?0:1)})}let a=l=>{let u=(0,_o.createProtocolConnection)(t,e,l,r);return i&&Fk(l),u};return(0,kk.createConnection)(a,$k,n)}function Fk(t){function e(n){return n.map(i=>typeof i=="string"?i:(0,SN.inspect)(i)).join(" ")}let r=new Map;console.assert=function(i,...o){if(!i)if(o.length===0)t.error("Assertion failed");else{let[s,...a]=o;t.error(`Assertion failed: ${s} ${e(a)}`)}},console.count=function(i="default"){var a;let o=String(i),s=(a=r.get(o))!=null?a:0;s+=1,r.set(o,s),t.log(`${o}: ${o}`)},console.countReset=function(i){i===void 0?r.clear():r.delete(String(i))},console.debug=function(...i){t.log(e(i))},console.dir=function(i,o){t.log((0,SN.inspect)(i,o))},console.log=function(...i){t.log(e(i))},console.error=function(...i){t.error(e(i))},console.trace=function(...i){let o=new Error().stack.replace(/(.+\n){2}/,""),s="Trace";i.length!==0&&(s+=`: ${e(i)}`),t.log(`${s}
${o}`)},console.warn=function(...i){t.warn(e(i))}}});var xy=X(Ry=>{"use strict";Object.defineProperty(Ry,"__esModule",{value:!0});var _y;function vy(){if(_y===void 0)throw new Error("No runtime abstraction layer installed");return _y}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");_y=r}t.install=e})(vy||(vy={}));Ry.default=vy});var SD=X(yr=>{"use strict";Object.defineProperty(yr,"__esModule",{value:!0});yr.stringArray=yr.array=yr.func=yr.error=yr.number=yr.string=yr.boolean=void 0;function JW(t){return t===!0||t===!1}yr.boolean=JW;function ED(t){return typeof t=="string"||t instanceof String}yr.string=ED;function QW(t){return typeof t=="number"||t instanceof Number}yr.number=QW;function ZW(t){return t instanceof Error}yr.error=ZW;function eV(t){return typeof t=="function"}yr.func=eV;function ID(t){return Array.isArray(t)}yr.array=ID;function tV(t){return ID(t)&&t.every(e=>ED(e))}yr.stringArray=tV});var Oy=X(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.Emitter=wa.Event=void 0;var rV=xy(),AD;(function(t){let e={dispose(){}};t.None=function(){return e}})(AD||(wa.Event=AD={}));var Ny=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,rV.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Gd=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Ny),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};wa.Emitter=Gd;Gd._noop=function(){}});var DD=X($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.CancellationTokenSource=$a.CancellationToken=void 0;var nV=xy(),iV=SD(),Ey=Oy(),jd;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Ey.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Ey.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||iV.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(jd||($a.CancellationToken=jd={}));var oV=Object.freeze(function(t,e){let r=(0,nV.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),qd=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?oV:(this._emitter||(this._emitter=new Ey.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Iy=class{get token(){return this._token||(this._token=new qd),this._token}cancel(){this._token?this._token.cancel():this._token=jd.Cancelled}dispose(){this._token?this._token instanceof qd&&this._token.dispose():this._token=jd.None}};$a.CancellationTokenSource=Iy});var uC=X((aae,lC)=>{"use strict";lC.exports=Fr()});var WG={};Ei(WG,{shared:()=>wu,st:()=>vp});module.exports=Nb(WG);var c_;(function(t){(function(e){var r=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(t);typeof r.Reflect=="undefined"?r.Reflect=t:n=i(r.Reflect,n),e(n);function i(o,s){return function(a,l){typeof o[a]!="function"&&Object.defineProperty(o,a,{configurable:!0,writable:!0,value:l}),s&&s(a,l)}}})(function(e){var r=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive!="undefined"?Symbol.toPrimitive:"@@toPrimitive",o=n&&typeof Symbol.iterator!="undefined"?Symbol.iterator:"@@iterator",s=typeof Object.create=="function",a={__proto__:[]}instanceof Array,l=!s&&!a,u={create:s?function(){return Lr(Object.create(null))}:a?function(){return Lr({__proto__:null})}:function(){return Lr({})},has:l?function(D,$){return r.call(D,$)}:function(D,$){return $ in D},get:l?function(D,$){return r.call(D,$)?D[$]:void 0}:function(D,$){return D[$]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",d=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:bn(),m=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:os(),R=!f&&typeof WeakMap=="function"?WeakMap:ss(),O=new R;function I(D,$,W,z){if(Ce(W)){if(!kt(D))throw new TypeError;if(!ht($))throw new TypeError;return ve(D,$)}else{if(!kt(D))throw new TypeError;if(!je($))throw new TypeError;if(!je(z)&&!Ce(z)&&!nr(z))throw new TypeError;return nr(z)&&(z=void 0),W=Lt(W),G(D,$,W,z)}}e("decorate",I);function E(D,$){function W(z,Q){if(!je(z))throw new TypeError;if(!Ce(Q)&&!cr(Q))throw new TypeError;V(D,$,z,Q)}return W}e("metadata",E);function y(D,$,W,z){if(!je(W))throw new TypeError;return Ce(z)||(z=Lt(z)),V(D,$,W,z)}e("defineMetadata",y);function T(D,$,W){if(!je($))throw new TypeError;return Ce(W)||(W=Lt(W)),j(D,$,W)}e("hasMetadata",T);function S(D,$,W){if(!je($))throw new TypeError;return Ce(W)||(W=Lt(W)),H(D,$,W)}e("hasOwnMetadata",S);function M(D,$,W){if(!je($))throw new TypeError;return Ce(W)||(W=Lt(W)),le(D,$,W)}e("getMetadata",M);function te(D,$,W){if(!je($))throw new TypeError;return Ce(W)||(W=Lt(W)),se(D,$,W)}e("getOwnMetadata",te);function ue(D,$){if(!je(D))throw new TypeError;return Ce($)||($=Lt($)),U(D,$)}e("getMetadataKeys",ue);function de(D,$){if(!je(D))throw new TypeError;return Ce($)||($=Lt($)),xe(D,$)}e("getOwnMetadataKeys",de);function _e(D,$,W){if(!je($))throw new TypeError;Ce(W)||(W=Lt(W));var z=k($,W,!1);if(Ce(z)||!z.delete(D))return!1;if(z.size>0)return!0;var Q=O.get($);return Q.delete(W),Q.size>0||O.delete($),!0}e("deleteMetadata",_e);function ve(D,$){for(var W=D.length-1;W>=0;--W){var z=D[W],Q=z($);if(!Ce(Q)&&!nr(Q)){if(!ht(Q))throw new TypeError;$=Q}}return $}function G(D,$,W,z){for(var Q=D.length-1;Q>=0;--Q){var v=D[Q],L=v($,W,z);if(!Ce(L)&&!nr(L)){if(!je(L))throw new TypeError;z=L}}return z}function k(D,$,W){var z=O.get(D);if(Ce(z)){if(!W)return;z=new d,O.set(D,z)}var Q=z.get($);if(Ce(Q)){if(!W)return;Q=new d,z.set($,Q)}return Q}function j(D,$,W){var z=H(D,$,W);if(z)return!0;var Q=Xr($);return nr(Q)?!1:j(D,Q,W)}function H(D,$,W){var z=k($,W,!1);return Ce(z)?!1:pt(z.has(D))}function le(D,$,W){var z=H(D,$,W);if(z)return se(D,$,W);var Q=Xr($);if(!nr(Q))return le(D,Q,W)}function se(D,$,W){var z=k($,W,!1);if(!Ce(z))return z.get(D)}function V(D,$,W,z){var Q=k(W,z,!0);Q.set(D,$)}function U(D,$){var W=xe(D,$),z=Xr(D);if(z===null)return W;var Q=U(z,$);if(Q.length<=0)return W;if(W.length<=0)return Q;for(var v=new m,L=[],P=0,F=W;P<F.length;P++){var ne=F[P],re=v.has(ne);re||(v.add(ne),L.push(ne))}for(var Oe=0,qe=Q;Oe<qe.length;Oe++){var ne=qe[Oe],re=v.has(ne);re||(v.add(ne),L.push(ne))}return L}function xe(D,$){var W=[],z=k(D,$,!1);if(Ce(z))return W;for(var Q=z.keys(),v=Yr(Q),L=0;;){var P=Oi(v);if(!P)return W.length=L,W;var F=ei(P);try{W[L]=F}catch(ne){try{is(v)}finally{throw ne}}L++}}function Ne(D){if(D===null)return 1;switch(typeof D){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return D===null?1:6;default:return 6}}function Ce(D){return D===void 0}function nr(D){return D===null}function Ni(D){return typeof D=="symbol"}function je(D){return typeof D=="object"?D!==null:typeof D=="function"}function qt(D,$){switch(Ne(D)){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D}var W=$===3?"string":$===5?"number":"default",z=vr(D,i);if(z!==void 0){var Q=z.call(D,W);if(je(Q))throw new TypeError;return Q}return Zn(D,W==="default"?"number":W)}function Zn(D,$){if($==="string"){var W=D.toString;if(mt(W)){var z=W.call(D);if(!je(z))return z}var Q=D.valueOf;if(mt(Q)){var z=Q.call(D);if(!je(z))return z}}else{var Q=D.valueOf;if(mt(Q)){var z=Q.call(D);if(!je(z))return z}var v=D.toString;if(mt(v)){var z=v.call(D);if(!je(z))return z}}throw new TypeError}function pt(D){return!!D}function Ht(D){return""+D}function Lt(D){var $=qt(D,3);return Ni($)?$:Ht($)}function kt(D){return Array.isArray?Array.isArray(D):D instanceof Object?D instanceof Array:Object.prototype.toString.call(D)==="[object Array]"}function mt(D){return typeof D=="function"}function ht(D){return typeof D=="function"}function cr(D){switch(Ne(D)){case 3:return!0;case 4:return!0;default:return!1}}function vr(D,$){var W=D[$];if(W!=null){if(!mt(W))throw new TypeError;return W}}function Yr(D){var $=vr(D,o);if(!mt($))throw new TypeError;var W=$.call(D);if(!je(W))throw new TypeError;return W}function ei(D){return D.value}function Oi(D){var $=D.next();return $.done?!1:$}function is(D){var $=D.return;$&&$.call(D)}function Xr(D){var $=Object.getPrototypeOf(D);if(typeof D!="function"||D===c||$!==c)return $;var W=D.prototype,z=W&&Object.getPrototypeOf(W);if(z==null||z===Object.prototype)return $;var Q=z.constructor;return typeof Q!="function"||Q===D?$:Q}function bn(){var D={},$=[],W=function(){function L(P,F,ne){this._index=0,this._keys=P,this._values=F,this._selector=ne}return L.prototype["@@iterator"]=function(){return this},L.prototype[o]=function(){return this},L.prototype.next=function(){var P=this._index;if(P>=0&&P<this._keys.length){var F=this._selector(this._keys[P],this._values[P]);return P+1>=this._keys.length?(this._index=-1,this._keys=$,this._values=$):this._index++,{value:F,done:!1}}return{value:void 0,done:!0}},L.prototype.throw=function(P){throw this._index>=0&&(this._index=-1,this._keys=$,this._values=$),P},L.prototype.return=function(P){return this._index>=0&&(this._index=-1,this._keys=$,this._values=$),{value:P,done:!0}},L}();return function(){function L(){this._keys=[],this._values=[],this._cacheKey=D,this._cacheIndex=-2}return Object.defineProperty(L.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),L.prototype.has=function(P){return this._find(P,!1)>=0},L.prototype.get=function(P){var F=this._find(P,!1);return F>=0?this._values[F]:void 0},L.prototype.set=function(P,F){var ne=this._find(P,!0);return this._values[ne]=F,this},L.prototype.delete=function(P){var F=this._find(P,!1);if(F>=0){for(var ne=this._keys.length,re=F+1;re<ne;re++)this._keys[re-1]=this._keys[re],this._values[re-1]=this._values[re];return this._keys.length--,this._values.length--,P===this._cacheKey&&(this._cacheKey=D,this._cacheIndex=-2),!0}return!1},L.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=D,this._cacheIndex=-2},L.prototype.keys=function(){return new W(this._keys,this._values,z)},L.prototype.values=function(){return new W(this._keys,this._values,Q)},L.prototype.entries=function(){return new W(this._keys,this._values,v)},L.prototype["@@iterator"]=function(){return this.entries()},L.prototype[o]=function(){return this.entries()},L.prototype._find=function(P,F){return this._cacheKey!==P&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=P)),this._cacheIndex<0&&F&&(this._cacheIndex=this._keys.length,this._keys.push(P),this._values.push(void 0)),this._cacheIndex},L}();function z(L,P){return L}function Q(L,P){return P}function v(L,P){return[L,P]}}function os(){return function(){function D(){this._map=new d}return Object.defineProperty(D.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),D.prototype.has=function($){return this._map.has($)},D.prototype.add=function($){return this._map.set($,$),this},D.prototype.delete=function($){return this._map.delete($)},D.prototype.clear=function(){this._map.clear()},D.prototype.keys=function(){return this._map.keys()},D.prototype.values=function(){return this._map.values()},D.prototype.entries=function(){return this._map.entries()},D.prototype["@@iterator"]=function(){return this.keys()},D.prototype[o]=function(){return this.keys()},D}()}function ss(){var D=16,$=u.create(),W=z();return function(){function F(){this._key=z()}return F.prototype.has=function(ne){var re=Q(ne,!1);return re!==void 0?u.has(re,this._key):!1},F.prototype.get=function(ne){var re=Q(ne,!1);return re!==void 0?u.get(re,this._key):void 0},F.prototype.set=function(ne,re){var Oe=Q(ne,!0);return Oe[this._key]=re,this},F.prototype.delete=function(ne){var re=Q(ne,!1);return re!==void 0?delete re[this._key]:!1},F.prototype.clear=function(){this._key=z()},F}();function z(){var F;do F="@@WeakMap@@"+P();while(u.has($,F));return $[F]=!0,F}function Q(F,ne){if(!r.call(F,W)){if(!ne)return;Object.defineProperty(F,W,{value:u.create()})}return F[W]}function v(F,ne){for(var re=0;re<ne;++re)F[re]=Math.random()*255|0;return F}function L(F){return typeof Uint8Array=="function"?typeof crypto!="undefined"?crypto.getRandomValues(new Uint8Array(F)):typeof msCrypto!="undefined"?msCrypto.getRandomValues(new Uint8Array(F)):v(new Uint8Array(F),F):v(new Array(F),F)}function P(){var F=L(D);F[6]=F[6]&79|64,F[8]=F[8]&191|128;for(var ne="",re=0;re<D;++re){var Oe=F[re];(re===4||re===6||re===8)&&(ne+="-"),Oe<16&&(ne+="0"),ne+=Oe.toString(16).toLowerCase()}return ne}}function Lr(D){return D.__=void 0,delete D.__,D}})})(c_||(c_={}));var Vs=Kt(Fr(),1);var nt={};Ei(nt,{AbstractElement:()=>Wh,AbstractRule:()=>cl,AbstractType:()=>fl,Action:()=>hg,Alternatives:()=>gg,ArrayLiteral:()=>Vh,ArrayType:()=>Gh,Assignment:()=>Tg,BooleanLiteral:()=>qh,CharacterRange:()=>yg,Condition:()=>tf,Conjunction:()=>Kh,CrossReference:()=>vg,Disjunction:()=>Yh,EndOfFile:()=>Rg,Grammar:()=>Jh,GrammarImport:()=>kN,Group:()=>Ng,InferredType:()=>Qh,Interface:()=>Zh,Keyword:()=>Og,LangiumGrammarAstReflection:()=>Cs,LangiumGrammarTerminals:()=>Uk,NamedArgument:()=>wN,NegatedToken:()=>Eg,Negation:()=>eg,NumberLiteral:()=>rg,Parameter:()=>ng,ParameterReference:()=>ig,ParserRule:()=>sg,ReferenceType:()=>ag,RegexToken:()=>Sg,ReturnType:()=>$N,RuleCall:()=>Dg,SimpleType:()=>cg,StringLiteral:()=>fg,TerminalAlternatives:()=>Cg,TerminalGroup:()=>Lg,TerminalRule:()=>nf,TerminalRuleCall:()=>wg,Type:()=>dg,TypeAttribute:()=>PN,TypeDefinition:()=>Bh,UnionType:()=>pg,UnorderedGroup:()=>$g,UntilToken:()=>Pg,ValueLiteral:()=>rf,Wildcard:()=>Fg,isAbstractElement:()=>Ro,isAbstractRule:()=>Bk,isAbstractType:()=>Wk,isAction:()=>xn,isAlternatives:()=>bs,isArrayLiteral:()=>Hk,isArrayType:()=>jh,isAssignment:()=>hr,isBooleanLiteral:()=>Hh,isCharacterRange:()=>_g,isCondition:()=>Vk,isConjunction:()=>zh,isCrossReference:()=>Nn,isDisjunction:()=>Xh,isEndOfFile:()=>xg,isFeatureName:()=>Gk,isGrammar:()=>Kk,isGrammarImport:()=>zk,isGroup:()=>un,isInferredType:()=>of,isInterface:()=>sf,isKeyword:()=>or,isNamedArgument:()=>Yk,isNegatedToken:()=>Ig,isNegation:()=>tg,isNumberLiteral:()=>Xk,isParameter:()=>Jk,isParameterReference:()=>og,isParserRule:()=>It,isPrimitiveType:()=>LN,isReferenceType:()=>lg,isRegexToken:()=>Ag,isReturnType:()=>ug,isRuleCall:()=>Br,isSimpleType:()=>af,isStringLiteral:()=>Qk,isTerminalAlternatives:()=>bg,isTerminalGroup:()=>kg,isTerminalRule:()=>Ur,isTerminalRuleCall:()=>lf,isType:()=>dl,isTypeAttribute:()=>Zk,isTypeDefinition:()=>jk,isUnionType:()=>mg,isUnorderedGroup:()=>Ls,isUntilToken:()=>Mg,isValueLiteral:()=>qk,isWildcard:()=>Ug,reflection:()=>pe});function Be(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function yt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function ll(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function vn(t){return typeof t=="object"&&t!==null&&Be(t.container)&&yt(t.reference)&&typeof t.message=="string"}var vo=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Be(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),i=[];for(let o of n)this.isSubtype(o,e)&&i.push(o);return this.allSubtypes[e]=i,i}}};function Rr(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Rn(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function ul(t){return Rr(t)&&typeof t.fullText=="string"}var Uk={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},cl="AbstractRule";function Bk(t){return pe.isInstance(t,cl)}var fl="AbstractType";function Wk(t){return pe.isInstance(t,fl)}var tf="Condition";function Vk(t){return pe.isInstance(t,tf)}function Gk(t){return LN(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function LN(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var Bh="TypeDefinition";function jk(t){return pe.isInstance(t,Bh)}var rf="ValueLiteral";function qk(t){return pe.isInstance(t,rf)}var Wh="AbstractElement";function Ro(t){return pe.isInstance(t,Wh)}var Vh="ArrayLiteral";function Hk(t){return pe.isInstance(t,Vh)}var Gh="ArrayType";function jh(t){return pe.isInstance(t,Gh)}var qh="BooleanLiteral";function Hh(t){return pe.isInstance(t,qh)}var Kh="Conjunction";function zh(t){return pe.isInstance(t,Kh)}var Yh="Disjunction";function Xh(t){return pe.isInstance(t,Yh)}var Jh="Grammar";function Kk(t){return pe.isInstance(t,Jh)}var kN="GrammarImport";function zk(t){return pe.isInstance(t,kN)}var Qh="InferredType";function of(t){return pe.isInstance(t,Qh)}var Zh="Interface";function sf(t){return pe.isInstance(t,Zh)}var wN="NamedArgument";function Yk(t){return pe.isInstance(t,wN)}var eg="Negation";function tg(t){return pe.isInstance(t,eg)}var rg="NumberLiteral";function Xk(t){return pe.isInstance(t,rg)}var ng="Parameter";function Jk(t){return pe.isInstance(t,ng)}var ig="ParameterReference";function og(t){return pe.isInstance(t,ig)}var sg="ParserRule";function It(t){return pe.isInstance(t,sg)}var ag="ReferenceType";function lg(t){return pe.isInstance(t,ag)}var $N="ReturnType";function ug(t){return pe.isInstance(t,$N)}var cg="SimpleType";function af(t){return pe.isInstance(t,cg)}var fg="StringLiteral";function Qk(t){return pe.isInstance(t,fg)}var nf="TerminalRule";function Ur(t){return pe.isInstance(t,nf)}var dg="Type";function dl(t){return pe.isInstance(t,dg)}var PN="TypeAttribute";function Zk(t){return pe.isInstance(t,PN)}var pg="UnionType";function mg(t){return pe.isInstance(t,pg)}var hg="Action";function xn(t){return pe.isInstance(t,hg)}var gg="Alternatives";function bs(t){return pe.isInstance(t,gg)}var Tg="Assignment";function hr(t){return pe.isInstance(t,Tg)}var yg="CharacterRange";function _g(t){return pe.isInstance(t,yg)}var vg="CrossReference";function Nn(t){return pe.isInstance(t,vg)}var Rg="EndOfFile";function xg(t){return pe.isInstance(t,Rg)}var Ng="Group";function un(t){return pe.isInstance(t,Ng)}var Og="Keyword";function or(t){return pe.isInstance(t,Og)}var Eg="NegatedToken";function Ig(t){return pe.isInstance(t,Eg)}var Sg="RegexToken";function Ag(t){return pe.isInstance(t,Sg)}var Dg="RuleCall";function Br(t){return pe.isInstance(t,Dg)}var Cg="TerminalAlternatives";function bg(t){return pe.isInstance(t,Cg)}var Lg="TerminalGroup";function kg(t){return pe.isInstance(t,Lg)}var wg="TerminalRuleCall";function lf(t){return pe.isInstance(t,wg)}var $g="UnorderedGroup";function Ls(t){return pe.isInstance(t,$g)}var Pg="UntilToken";function Mg(t){return pe.isInstance(t,Pg)}var Fg="Wildcard";function Ug(t){return pe.isInstance(t,Fg)}var Cs=class extends vo{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case hg:case gg:case Tg:case yg:case vg:case Rg:case Ng:case Og:case Eg:case Sg:case Dg:case Cg:case Lg:case wg:case $g:case Pg:case Fg:return this.isSubtype(Wh,r);case Vh:case rg:case fg:return this.isSubtype(rf,r);case Gh:case ag:case cg:case pg:return this.isSubtype(Bh,r);case qh:return this.isSubtype(tf,r)||this.isSubtype(rf,r);case Kh:case Yh:case eg:case ig:return this.isSubtype(tf,r);case Qh:case Zh:case dg:return this.isSubtype(fl,r);case sg:return this.isSubtype(cl,r)||this.isSubtype(fl,r);case nf:return this.isSubtype(cl,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return fl;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return cl;case"Grammar:usedGrammars":return Jh;case"NamedArgument:parameter":case"ParameterReference:parameter":return ng;case"TerminalRuleCall:rule":return nf;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"Assignment":return{name:"Assignment",properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case"EndOfFile":return{name:"EndOfFile",properties:[{name:"cardinality"},{name:"lookahead"}]};case"Group":return{name:"Group",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case"Keyword":return{name:"Keyword",properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"Wildcard":return{name:"Wildcard",properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}},pe=new Cs;var Nr={};Ei(Nr,{assignMandatoryProperties:()=>hl,copyAstNode:()=>Kg,findLocalReferences:()=>iw,findRootNode:()=>WN,getContainerOfType:()=>Zr,getDocument:()=>_t,hasContainerOfType:()=>nw,linkContentToContainer:()=>df,streamAllContents:()=>Wr,streamAst:()=>Vr,streamContents:()=>Oo,streamReferences:()=>$s});var xr=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return sr})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=ew(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?sr:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return sr})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(uf(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return sr})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(uf(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return sr})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?sr:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};function ew(t){return typeof t=="string"?t:typeof t=="undefined"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function uf(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Ui=new xr(()=>{},()=>sr),sr=Object.freeze({done:!0,value:void 0});function he(...t){if(t.length===1){let e=t[0];if(e instanceof xr)return e;if(uf(e))return new xr(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new xr(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:sr)}return t.length>1?new xr(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];uf(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return sr}):Ui}var cn=class extends xr{constructor(e,r,n){super(()=>({iterators:n!=null&&n.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let s=i.iterators[i.iterators.length-1].next();if(s.done)i.iterators.pop();else return i.iterators.push(r(s.value)[Symbol.iterator]()),s}return sr})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},ks;(function(t){function e(o){return o.reduce((s,a)=>s+a,0)}t.sum=e;function r(o){return o.reduce((s,a)=>s*a,0)}t.product=r;function n(o){return o.reduce((s,a)=>Math.min(s,a))}t.min=n;function i(o){return o.reduce((s,a)=>Math.max(s,a))}t.max=i})(ks||(ks={}));var Bi={};Ei(Bi,{DefaultNameRegexp:()=>ff,RangeComparison:()=>ii,compareRange:()=>FN,findCommentNode:()=>Gg,findDeclarationNodeAtOffset:()=>Jt,findLeafNodeAtOffset:()=>pl,findLeafNodeBeforeOffset:()=>ml,flattenCst:()=>Wg,getInteriorNodes:()=>qg,getNextNode:()=>jg,getPreviousNode:()=>BN,getStartlineNode:()=>tw,inRange:()=>cf,isChildNode:()=>Vg,isCommentNode:()=>Bg,streamCst:()=>xo,toDocumentSegment:()=>No,tokenToRange:()=>ws});function xo(t){return new cn(t,e=>Rr(e)?e.content:[],{includeRoot:!0})}function Wg(t){return xo(t).filter(Rn)}function Vg(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function ws(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function No(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var ii;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(ii||(ii={}));function FN(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return ii.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return ii.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?ii.Inside:r?ii.OverlapBack:ii.OverlapFront}function cf(t,e){return FN(t,e)>ii.After}var ff=/^[\w\p{L}]$/u;function Jt(t,e,r=ff){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return pl(t,e)}}function Gg(t,e){if(t){let r=BN(t,!0);if(r&&Bg(r,e))return r;if(ul(t)){let n=t.content.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.content[i];if(Bg(o,e))return o}}}}function Bg(t,e){return Rn(t)&&e.includes(t.tokenType.name)}function pl(t,e){if(Rn(t))return t;if(Rr(t)){let r=UN(t,e,!1);if(r)return pl(r,e)}}function ml(t,e){if(Rn(t))return t;if(Rr(t)){let r=UN(t,e,!0);if(r)return ml(r,e)}}function UN(t,e,r){let n=0,i=t.content.length-1,o;for(;n<=i;){let s=Math.floor((n+i)/2),a=t.content[s];if(a.offset<=e&&a.end>e)return a;a.end<=e?(o=r?a:void 0,n=s+1):i=s-1}return o}function BN(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function jg(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),i=r.content.length-1;for(;n<i;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function tw(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let i=t.container,o=n!=null?n:i.content.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.content[n]),t.range.start.line!==e)break;r=t}return r}function qg(t,e){let r=rw(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function rw(t,e){let r=MN(t),n=MN(e),i;for(let o=0;o<r.length&&o<n.length;o++){let s=r[o],a=n[o];if(s.parent===a.parent)i={parent:s.parent,a:s.index,b:a.index};else break}return i}function MN(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}function df(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{Be(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):Be(r)&&(r.$container=t,r.$containerProperty=e))}function Zr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function nw(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function _t(t){let r=WN(t).$document;if(!r)throw new Error("AST node has no document.");return r}function WN(t){for(;t.$container;)t=t.$container;return t}function Oo(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e==null?void 0:e.range;return new xr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let i=n.keys[n.keyIndex];if(!i.startsWith("$")){let o=t[i];if(Be(o)){if(n.keyIndex++,Hg(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let s=n.arrayIndex++,a=o[s];if(Be(a)&&Hg(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return sr})}function Wr(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new cn(t,r=>Oo(r,e))}function Vr(t,e){if(t){if(e!=null&&e.range&&!Hg(t,e.range))return new cn(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new cn(t,r=>Oo(r,e),{includeRoot:!0})}function Hg(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?cf(n,e):!1}function $s(t){return new xr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(yt(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(yt(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return sr})}function iw(t,e=_t(t).parseResult.value){let r=[];return Vr(e).forEach(n=>{$s(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),he(r)}function hl(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let i of r.properties)i.defaultValue!==void 0&&n[i.name]===void 0&&(n[i.name]=VN(i.defaultValue))}function VN(t){return Array.isArray(t)?[...t.map(VN)]:t}function Kg(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if(Be(i))r[n]=Kg(i,e);else if(yt(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let s of i)Be(s)?o.push(Kg(s,e)):yt(s)?o.push(e(r,n,s.$refNode,s.$refText)):o.push(s);r[n]=o}else r[n]=i;return df(r),r}var St={};Ei(St,{findAssignment:()=>sT,findNameAssignment:()=>yf,findNodeForKeyword:()=>Fs,findNodeForProperty:()=>Vi,findNodesForKeyword:()=>Tf,findNodesForKeywordInternal:()=>oT,findNodesForProperty:()=>Ms,getActionAtElement:()=>zN,getActionType:()=>XN,getAllReachableRules:()=>vl,getCrossReferenceTerminal:()=>Rl,getEntryRule:()=>_l,getExplicitRuleType:()=>bo,getHiddenRules:()=>qN,getRuleType:()=>lT,getTypeName:()=>si,isArrayCardinality:()=>aT,isArrayOperator:()=>lw,isCommentTerminal:()=>nT,isDataType:()=>uw,isDataTypeRule:()=>xl,isOptionalCardinality:()=>Co,terminalRegex:()=>Gi});var Eo=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Wi(t){throw new Error("Error! The input value was not handled.")}var gf={};Ei(gf,{NEWLINE_REGEXP:()=>Jg,escapeRegExp:()=>Do,getCaseInsensitivePattern:()=>Zg,getTerminalParts:()=>aw,isMultilineComment:()=>Qg,isWhitespace:()=>hf,partialMatches:()=>eT,partialRegExp:()=>jN});function ce(t){return t.charCodeAt(0)}function pf(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function Ps(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function Io(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function gl(){throw Error("Internal Error - Should never get here!")}function zg(t){return t.type==="Character"}var Tl=[];for(let t=ce("0");t<=ce("9");t++)Tl.push(t);var yl=[ce("_")].concat(Tl);for(let t=ce("a");t<=ce("z");t++)yl.push(t);for(let t=ce("A");t<=ce("Z");t++)yl.push(t);var Yg=[ce(" "),ce("\f"),ce(`
`),ce("\r"),ce("	"),ce("\v"),ce("	"),ce("\xA0"),ce("\u1680"),ce("\u2000"),ce("\u2001"),ce("\u2002"),ce("\u2003"),ce("\u2004"),ce("\u2005"),ce("\u2006"),ce("\u2007"),ce("\u2008"),ce("\u2009"),ce("\u200A"),ce("\u2028"),ce("\u2029"),ce("\u202F"),ce("\u205F"),ce("\u3000"),ce("\uFEFF")];var ow=/[0-9a-fA-F]/,mf=/[0-9]/,sw=/[1-9]/,So=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":Ps(n,"global");break;case"i":Ps(n,"ignoreCase");break;case"m":Ps(n,"multiLine");break;case"u":Ps(n,"unicode");break;case"y":Ps(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}Io(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return gl()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:i,atMost:i};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:i,atMost:o}):r={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;Io(r);break}if(!(e===!0&&r===void 0)&&Io(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Io(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):gl()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[ce(`
`),ce("\r"),ce("\u2028"),ce("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Tl;break;case"D":e=Tl,r=!0;break;case"s":e=Yg;break;case"S":e=Yg,r=!0;break;case"w":e=yl;break;case"W":e=yl,r=!0;break}return Io(e)?{type:"Set",value:e,complement:r}:gl()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=ce("\f");break;case"n":e=ce(`
`);break;case"r":e=ce("\r");break;case"t":e=ce("	");break;case"v":e=ce("\v");break}return Io(e)?{type:"Character",value:e}:gl()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:ce("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:ce(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:ce(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),i=n.type==="Character";if(zg(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),s=o.type==="Character";if(zg(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else pf(n.value,e),e.push(ce("-")),pf(o.value,e)}else pf(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:ce("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(sw.test(e)===!1)throw Error("Expecting a positive integer");for(;mf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(mf.test(e)===!1)throw Error("Expecting an integer");for(;mf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:ce(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return mf.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let i=0;i<e;i++){let o=this.popChar();if(ow.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var $n=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var Jg=/\r?\n/gm,GN=new So,Xg=class extends $n{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=Do(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},Ao=new Xg;function aw(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=GN.pattern(t),r=[];for(let n of e.value.value)Ao.reset(t),Ao.visit(n),r.push({start:Ao.startRegexp,end:Ao.endRegex});return r}catch{return[]}}function Qg(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Ao.reset(t),Ao.visit(GN.pattern(t)),Ao.multiline}catch{return!1}}function hf(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function Do(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Zg(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Do(e)).join("")}function eT(t,e){let r=jN(t),n=e.match(r);return!!n&&n[0].length>0}function jN(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",s;function a(u){o+=r.substr(n,u),n+=u}function l(u){o+="(?:"+r.substr(n,u)+"|$)",n+=u}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?r[n+2]==="{"?l(r.indexOf("}",n)-n+1):l(6):l(2);break;case"p":case"P":e.unicode?l(r.indexOf("}",n)-n+1):l(2);break;case"k":l(r.indexOf(">",n)-n+1);break;default:l(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],l(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):l(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":s=n,n+=3,i(),o+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,i(),o+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else a(1),o+=i()+"|$)";break;case")":return++n,o;default:l(1);break}return o}return new RegExp(i(),t.flags)}function _l(t){return t.rules.find(e=>It(e)&&e.entry)}function qN(t){return t.rules.filter(e=>Ur(e)&&e.hidden)}function vl(t,e){let r=new Set,n=_l(t);if(!n)return new Set(t.rules);let i=[n].concat(qN(t));for(let s of i)HN(s,r,e);let o=new Set;for(let s of t.rules)(r.has(s.name)||Ur(s)&&s.hidden)&&o.add(s);return o}function HN(t,e,r){e.add(t.name),Wr(t).forEach(n=>{if(Br(n)||r&&lf(n)){let i=n.rule.ref;i&&!e.has(i.name)&&HN(i,e,r)}})}function Rl(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=yf(t.type.ref);return e==null?void 0:e.terminal}}function nT(t){return t.hidden&&!Gi(t).test(" ")}function Ms(t,e){return!t||!e?[]:iT(t,e,t.astNode,!0)}function Vi(t,e,r){if(!t||!e)return;let n=iT(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function iT(t,e,r,n){if(!n){let i=Zr(t.grammarSource,hr);if(i&&i.feature===e)return[t]}return Rr(t)&&t.astNode===r?t.content.flatMap(i=>iT(i,e,r,!1)):[]}function Tf(t,e){return t?oT(t,e,t==null?void 0:t.astNode):[]}function Fs(t,e,r){if(!t)return;let n=oT(t,e,t==null?void 0:t.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function oT(t,e,r){if(t.astNode!==r)return[];if(or(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=xo(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let s=i.value;s.astNode===r?or(s.grammarSource)&&s.grammarSource.value===e&&o.push(s):n.prune()}while(!i.done);return o}function sT(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=Zr(t.grammarSource,hr);if(n)return n;t=t.container}}function yf(t){let e=t;return of(e)&&(xn(e.$container)?e=e.$container.$container:It(e.$container)?e=e.$container:Wi(e.$container)),KN(t,e,new Map)}function KN(t,e,r){var n;function i(o,s){let a;return Zr(o,hr)||(a=KN(s,s,r)),r.set(t,a),a}if(r.has(t))return r.get(t);r.set(t,void 0);for(let o of Wr(e)){if(hr(o)&&o.feature.toLowerCase()==="name")return r.set(t,o),o;if(Br(o)&&It(o.rule.ref))return i(o,o.rule.ref);if(af(o)&&(!((n=o.typeRef)===null||n===void 0)&&n.ref))return i(o,o.typeRef.ref)}}function zN(t){let e=t.$container;if(un(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(xn(o))return o;{let s=Wr(r[i]).find(xn);if(s)return s}}}if(Ro(e))return zN(e)}function Co(t,e){return t==="?"||t==="*"||un(e)&&!!e.guardCondition}function aT(t){return t==="*"||t==="+"}function lw(t){return t==="+="}function xl(t){return YN(t,new Set)}function YN(t,e){if(e.has(t))return!0;e.add(t);for(let r of Wr(t))if(Br(r)){if(!r.rule.ref||It(r.rule.ref)&&!YN(r.rule.ref,e))return!1}else{if(hr(r))return!1;if(xn(r))return!1}return!!t.definition}function uw(t){return rT(t.type,new Set)}function rT(t,e){if(e.has(t))return!0;if(e.add(t),jh(t))return!1;if(lg(t))return!1;if(mg(t))return t.types.every(r=>rT(r,e));if(af(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return dl(r)?rT(r.type,e):!1}else return!1}else return!1}function bo(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(It(e))return e.name;if(sf(e)||dl(e))return e.name}}}function si(t){var e;if(It(t))return xl(t)?t.name:(e=bo(t))!==null&&e!==void 0?e:t.name;if(sf(t)||dl(t)||ug(t))return t.name;if(xn(t)){let r=XN(t);if(r)return r}else if(of(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function XN(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return si(t.type.ref)}function lT(t){var e,r,n;return Ur(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":xl(t)?t.name:(n=bo(t))!==null&&n!==void 0?n:t.name}function Gi(t){let e={s:!1,i:!1,u:!1},r=Us(t.definition,e),n=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(r,n)}var uT=/[\s\S]/.source;function Us(t,e){if(bg(t))return cw(t);if(kg(t))return fw(t);if(_g(t))return mw(t);if(lf(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return oi(Us(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(Ig(t))return pw(t);if(Mg(t))return dw(t);if(Ag(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),i=t.regex.substring(r+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),oi(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(Ug(t))return oi(uT,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function cw(t){return oi(t.elements.map(e=>Us(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function fw(t){return oi(t.elements.map(e=>Us(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function dw(t){return oi(`${uT}*?${Us(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function pw(t){return oi(`(?!${Us(t.terminal)})${uT}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function mw(t){return t.right?oi(`[${tT(t.left)}-${tT(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):oi(tT(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function tT(t){return Do(t.value)}function oi(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function Nl(t,e){let r={stacks:t,tokens:e};return hw(r),r.stacks.flat().forEach(i=>{i.property=void 0}),QN(r.stacks).map(i=>i[i.length-1])}function cT(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,l=s;for(;l.$container;)if(un(l.$container)){a=l.$container;break}else if(Ro(l.$container))l=l.$container;else break;if(aT(l.cardinality)){let u=Bs({next:{feature:l,type:e.type},cardinalities:r,visited:n,plus:i});for(let c of u)i.add(c.feature);o.push(...u)}if(a){let u=a.elements.indexOf(l);u!==void 0&&u<a.elements.length-1&&o.push(...JN({feature:a,type:e.type},u+1,r,n,i)),o.every(c=>Co(c.feature.cardinality,c.feature)||Co(r.get(c.feature))||i.has(c.feature))&&o.push(...cT({next:{feature:a,type:e.type},cardinalities:r,visited:n,plus:i}))}return o}function Lo(t){return Be(t)&&(t={feature:t}),Bs({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Bs(t){var e,r,n;let{next:i,cardinalities:o,visited:s,plus:a}=t;if(i===void 0)return[];let{feature:l,type:u}=i;if(un(l)){if(s.has(l))return[];s.add(l)}if(un(l))return JN(i,0,o,s,a).map(c=>_f(c,l.cardinality,o));if(bs(l)||Ls(l))return l.elements.flatMap(c=>Bs({next:{feature:c,type:u,property:i.property},cardinalities:o,visited:s,plus:a})).map(c=>_f(c,l.cardinality,o));if(hr(l)){let c={feature:l.terminal,type:u,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Bs({next:c,cardinalities:o,visited:s,plus:a}).map(f=>_f(f,l.cardinality,o))}else{if(xn(l))return cT({next:{feature:l,type:si(l),property:(r=i.property)!==null&&r!==void 0?r:l.feature},cardinalities:o,visited:s,plus:a});if(Br(l)&&It(l.rule.ref)){let c=l.rule.ref,f={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=bo(c))!==null&&n!==void 0?n:c.name,property:i.property};return Bs({next:f,cardinalities:o,visited:s,plus:a}).map(d=>_f(d,l.cardinality,o))}else return[i]}}function _f(t,e,r){return r.set(t.feature,e),t}function JN(t,e,r,n,i){var o;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},s.push(...Bs({next:a,cardinalities:r,visited:n,plus:i})),!!Co((o=a.feature.cardinality)!==null&&o!==void 0?o:r.get(a.feature),a.feature)););return s}function hw(t){for(let e of t.tokens){let r=QN(t.stacks,e);t.stacks=r}}function QN(t,e){let r=[];for(let n of t)r.push(...gw(n,e));return r}function gw(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(Tw)),i=[];for(;t.length>0;){let o=t.pop(),s=cT({next:o,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?fT(a.feature,e):!0);for(let a of s)i.push([...t,a]);if(!s.every(a=>Co(a.feature.cardinality,a.feature)||Co(r.get(a.feature))))break}return i}function Tw(t){if(t.cardinality==="+")return!0;let e=Zr(t,hr);return!!(e&&e.cardinality==="+")}function fT(t,e){if(or(t))return t.value===e.image;if(Br(t))return yw(t.rule.ref,e);if(Nn(t)){let r=Rl(t);if(r)return fT(r,e)}return!1}function yw(t,e){return It(t)?Lo(t.definition).some(n=>fT(n.feature,e)):Ur(t)?Gi(t).test(e.image):!1}function ZN(t){let e=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.triggerCharacters)!==null&&i!==void 0?i:[]}))),r=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var Ws=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],i=this.buildContexts(e,r.position),o=(l,u)=>{let c=this.fillCompletionItem(l,u);c&&n.push(c)},s=l=>or(l.feature)?l.feature.value:l.feature,a=[];for(let l of i)if(await Promise.all(he(l.features).distinct(s).exclude(a).map(u=>this.completionFor(l,u,o))),a.push(...l.features),!this.continueCompletion(n))break;return Vs.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return he(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:Vs.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let l=_l(this.grammar),u=Lo({feature:l.definition,type:bo(l)});return o.length>0?(o.shift(),Nl(u.map(c=>[c]),o)):u}let s=[...o].splice(i.tokenIndex);return Nl([i.elementStack.map(l=>({feature:l}))],s)}*buildContexts(e,r){var n,i;let o=e.parseResult.value.$cstNode;if(!o)return;let s=e.textDocument,a=s.getText(),l=s.offsetAt(r),u={document:e,textDocument:s,offset:l,position:r},c=this.findDataTypeRuleStart(o,l);if(c){let[y,T]=c,S=(n=ml(o,y))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},u),{node:S,tokenOffset:y,tokenEndOffset:T,features:this.findFeaturesAt(s,y)})}let{nextTokenStart:f,nextTokenEnd:d,previousTokenStart:m,previousTokenEnd:R}=this.backtrackToAnyToken(a,l),O=f;l<=f&&m!==void 0&&(O=m);let I=(i=ml(o,O))===null||i===void 0?void 0:i.astNode,E=!0;if(m!==void 0&&R!==void 0&&R===l&&(yield Object.assign(Object.assign({},u),{node:I,tokenOffset:m,tokenEndOffset:R,features:this.findFeaturesAt(s,m)}),E=this.performNextTokenCompletion(e,a.substring(m,R),m,R),E&&(yield Object.assign(Object.assign({},u),{node:I,tokenOffset:R,tokenEndOffset:R,features:this.findFeaturesAt(s,R)}))),I)E&&(yield Object.assign(Object.assign({},u),{node:I,tokenOffset:f,tokenEndOffset:d,features:this.findFeaturesAt(s,f)}));else{let y=_l(this.grammar);if(!y)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},u),{tokenOffset:f,tokenEndOffset:d,features:Lo(y.definition)})}}performNextTokenCompletion(e,r,n,i){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,i;let o=Jt(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=Zr(o==null?void 0:o.grammarSource,It))===null||n===void 0)&&n.dataType);if(s){for(;s;)o=o==null?void 0:o.container,s=!!(!((i=Zr(o==null?void 0:o.grammarSource,It))===null||i===void 0)&&i.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let i;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,r,n){if(or(r.feature))return this.completionForKeyword(e,r.feature,n);if(Nn(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=Zr(r.feature,hr),o=e.node;if(i&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},hl(this.astReflection,o));let s={reference:{$refText:""},container:o,property:i.feature};try{this.getReferenceCandidates(s,e).forEach(a=>n(e,this.createReferenceCompletionItem(a)))}catch(a){console.error(a)}}}getReferenceCandidates(e,r){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:Vs.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,i;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let u=this.nameProvider.getName(r.node);if(!u)return;o=u}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=o;let a=(i=r.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,o,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var _w=Kt(Fr(),1);var eO;(()=>{"use strict";var t={470:i=>{function o(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function s(l,u){for(var c,f="",d=0,m=-1,R=0,O=0;O<=l.length;++O){if(O<l.length)c=l.charCodeAt(O);else{if(c===47)break;c=47}if(c===47){if(!(m===O-1||R===1))if(m!==O-1&&R===2){if(f.length<2||d!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var I=f.lastIndexOf("/");if(I!==f.length-1){I===-1?(f="",d=0):d=(f=f.slice(0,I)).length-1-f.lastIndexOf("/"),m=O,R=0;continue}}else if(f.length===2||f.length===1){f="",d=0,m=O,R=0;continue}}u&&(f.length>0?f+="/..":f="..",d=2)}else f.length>0?f+="/"+l.slice(m+1,O):f=l.slice(m+1,O),d=O-m-1;m=O,R=0}else c===46&&R!==-1?++R:R=-1}return f}var a={resolve:function(){for(var l,u="",c=!1,f=arguments.length-1;f>=-1&&!c;f--){var d;f>=0?d=arguments[f]:(l===void 0&&(l=process.cwd()),d=l),o(d),d.length!==0&&(u=d+"/"+u,c=d.charCodeAt(0)===47)}return u=s(u,!c),c?u.length>0?"/"+u:"/":u.length>0?u:"."},normalize:function(l){if(o(l),l.length===0)return".";var u=l.charCodeAt(0)===47,c=l.charCodeAt(l.length-1)===47;return(l=s(l,!u)).length!==0||u||(l="."),l.length>0&&c&&(l+="/"),u?"/"+l:l},isAbsolute:function(l){return o(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,u=0;u<arguments.length;++u){var c=arguments[u];o(c),c.length>0&&(l===void 0?l=c:l+="/"+c)}return l===void 0?".":a.normalize(l)},relative:function(l,u){if(o(l),o(u),l===u||(l=a.resolve(l))===(u=a.resolve(u)))return"";for(var c=1;c<l.length&&l.charCodeAt(c)===47;++c);for(var f=l.length,d=f-c,m=1;m<u.length&&u.charCodeAt(m)===47;++m);for(var R=u.length-m,O=d<R?d:R,I=-1,E=0;E<=O;++E){if(E===O){if(R>O){if(u.charCodeAt(m+E)===47)return u.slice(m+E+1);if(E===0)return u.slice(m+E)}else d>O&&(l.charCodeAt(c+E)===47?I=E:E===0&&(I=0));break}var y=l.charCodeAt(c+E);if(y!==u.charCodeAt(m+E))break;y===47&&(I=E)}var T="";for(E=c+I+1;E<=f;++E)E!==f&&l.charCodeAt(E)!==47||(T.length===0?T+="..":T+="/..");return T.length>0?T+u.slice(m+I):(m+=I,u.charCodeAt(m)===47&&++m,u.slice(m))},_makeLong:function(l){return l},dirname:function(l){if(o(l),l.length===0)return".";for(var u=l.charCodeAt(0),c=u===47,f=-1,d=!0,m=l.length-1;m>=1;--m)if((u=l.charCodeAt(m))===47){if(!d){f=m;break}}else d=!1;return f===-1?c?"/":".":c&&f===1?"//":l.slice(0,f)},basename:function(l,u){if(u!==void 0&&typeof u!="string")throw new TypeError('"ext" argument must be a string');o(l);var c,f=0,d=-1,m=!0;if(u!==void 0&&u.length>0&&u.length<=l.length){if(u.length===l.length&&u===l)return"";var R=u.length-1,O=-1;for(c=l.length-1;c>=0;--c){var I=l.charCodeAt(c);if(I===47){if(!m){f=c+1;break}}else O===-1&&(m=!1,O=c+1),R>=0&&(I===u.charCodeAt(R)?--R==-1&&(d=c):(R=-1,d=O))}return f===d?d=O:d===-1&&(d=l.length),l.slice(f,d)}for(c=l.length-1;c>=0;--c)if(l.charCodeAt(c)===47){if(!m){f=c+1;break}}else d===-1&&(m=!1,d=c+1);return d===-1?"":l.slice(f,d)},extname:function(l){o(l);for(var u=-1,c=0,f=-1,d=!0,m=0,R=l.length-1;R>=0;--R){var O=l.charCodeAt(R);if(O!==47)f===-1&&(d=!1,f=R+1),O===46?u===-1?u=R:m!==1&&(m=1):u!==-1&&(m=-1);else if(!d){c=R+1;break}}return u===-1||f===-1||m===0||m===1&&u===f-1&&u===c+1?"":l.slice(u,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(u,c){var f=c.dir||c.root,d=c.base||(c.name||"")+(c.ext||"");return f?f===c.root?f+d:f+"/"+d:d}(0,l)},parse:function(l){o(l);var u={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return u;var c,f=l.charCodeAt(0),d=f===47;d?(u.root="/",c=1):c=0;for(var m=-1,R=0,O=-1,I=!0,E=l.length-1,y=0;E>=c;--E)if((f=l.charCodeAt(E))!==47)O===-1&&(I=!1,O=E+1),f===46?m===-1?m=E:y!==1&&(y=1):m!==-1&&(y=-1);else if(!I){R=E+1;break}return m===-1||O===-1||y===0||y===1&&m===O-1&&m===R+1?O!==-1&&(u.base=u.name=R===0&&d?l.slice(1,O):l.slice(R,O)):(R===0&&d?(u.name=l.slice(1,m),u.base=l.slice(1,O)):(u.name=l.slice(R,m),u.base=l.slice(R,O)),u.ext=l.slice(m,O)),R>0?u.dir=l.slice(0,R-1):d&&(u.dir="/"),u},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(i,o)=>{for(var s in o)r.o(o,s)&&!r.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},r.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),r.r=i=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};(()=>{let i;r.r(n),r.d(n,{URI:()=>d,Utils:()=>ve}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function l(G,k){if(!G.scheme&&k)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${G.authority}", path: "${G.path}", query: "${G.query}", fragment: "${G.fragment}"}`);if(G.scheme&&!o.test(G.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(G.path){if(G.authority){if(!s.test(G.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(G.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let u="",c="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class d{constructor(k,j,H,le,se,V=!1){Ii(this,"scheme");Ii(this,"authority");Ii(this,"path");Ii(this,"query");Ii(this,"fragment");typeof k=="object"?(this.scheme=k.scheme||u,this.authority=k.authority||u,this.path=k.path||u,this.query=k.query||u,this.fragment=k.fragment||u):(this.scheme=function(U,xe){return U||xe?U:"file"}(k,V),this.authority=j||u,this.path=function(U,xe){switch(U){case"https":case"http":case"file":xe?xe[0]!==c&&(xe=c+xe):xe=c}return xe}(this.scheme,H||u),this.query=le||u,this.fragment=se||u,l(this,V))}static isUri(k){return k instanceof d||!!k&&typeof k.authority=="string"&&typeof k.fragment=="string"&&typeof k.path=="string"&&typeof k.query=="string"&&typeof k.scheme=="string"&&typeof k.fsPath=="string"&&typeof k.with=="function"&&typeof k.toString=="function"}get fsPath(){return y(this,!1)}with(k){if(!k)return this;let{scheme:j,authority:H,path:le,query:se,fragment:V}=k;return j===void 0?j=this.scheme:j===null&&(j=u),H===void 0?H=this.authority:H===null&&(H=u),le===void 0?le=this.path:le===null&&(le=u),se===void 0?se=this.query:se===null&&(se=u),V===void 0?V=this.fragment:V===null&&(V=u),j===this.scheme&&H===this.authority&&le===this.path&&se===this.query&&V===this.fragment?this:new R(j,H,le,se,V)}static parse(k,j=!1){let H=f.exec(k);return H?new R(H[2]||u,te(H[4]||u),te(H[5]||u),te(H[7]||u),te(H[9]||u),j):new R(u,u,u,u,u)}static file(k){let j=u;if(i&&(k=k.replace(/\\/g,c)),k[0]===c&&k[1]===c){let H=k.indexOf(c,2);H===-1?(j=k.substring(2),k=c):(j=k.substring(2,H),k=k.substring(H)||c)}return new R("file",j,k,u,u)}static from(k){let j=new R(k.scheme,k.authority,k.path,k.query,k.fragment);return l(j,!0),j}toString(k=!1){return T(this,k)}toJSON(){return this}static revive(k){if(k){if(k instanceof d)return k;{let j=new R(k);return j._formatted=k.external,j._fsPath=k._sep===m?k.fsPath:null,j}}return k}}let m=i?1:void 0;class R extends d{constructor(){super(...arguments);Ii(this,"_formatted",null);Ii(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=y(this,!1)),this._fsPath}toString(j=!1){return j?T(this,!0):(this._formatted||(this._formatted=T(this,!1)),this._formatted)}toJSON(){let j={$mid:1};return this._fsPath&&(j.fsPath=this._fsPath,j._sep=m),this._formatted&&(j.external=this._formatted),this.path&&(j.path=this.path),this.scheme&&(j.scheme=this.scheme),this.authority&&(j.authority=this.authority),this.query&&(j.query=this.query),this.fragment&&(j.fragment=this.fragment),j}}let O={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function I(G,k,j){let H,le=-1;for(let se=0;se<G.length;se++){let V=G.charCodeAt(se);if(V>=97&&V<=122||V>=65&&V<=90||V>=48&&V<=57||V===45||V===46||V===95||V===126||k&&V===47||j&&V===91||j&&V===93||j&&V===58)le!==-1&&(H+=encodeURIComponent(G.substring(le,se)),le=-1),H!==void 0&&(H+=G.charAt(se));else{H===void 0&&(H=G.substr(0,se));let U=O[V];U!==void 0?(le!==-1&&(H+=encodeURIComponent(G.substring(le,se)),le=-1),H+=U):le===-1&&(le=se)}}return le!==-1&&(H+=encodeURIComponent(G.substring(le))),H!==void 0?H:G}function E(G){let k;for(let j=0;j<G.length;j++){let H=G.charCodeAt(j);H===35||H===63?(k===void 0&&(k=G.substr(0,j)),k+=O[H]):k!==void 0&&(k+=G[j])}return k!==void 0?k:G}function y(G,k){let j;return j=G.authority&&G.path.length>1&&G.scheme==="file"?`//${G.authority}${G.path}`:G.path.charCodeAt(0)===47&&(G.path.charCodeAt(1)>=65&&G.path.charCodeAt(1)<=90||G.path.charCodeAt(1)>=97&&G.path.charCodeAt(1)<=122)&&G.path.charCodeAt(2)===58?k?G.path.substr(1):G.path[1].toLowerCase()+G.path.substr(2):G.path,i&&(j=j.replace(/\//g,"\\")),j}function T(G,k){let j=k?E:I,H="",{scheme:le,authority:se,path:V,query:U,fragment:xe}=G;if(le&&(H+=le,H+=":"),(se||le==="file")&&(H+=c,H+=c),se){let Ne=se.indexOf("@");if(Ne!==-1){let Ce=se.substr(0,Ne);se=se.substr(Ne+1),Ne=Ce.lastIndexOf(":"),Ne===-1?H+=j(Ce,!1,!1):(H+=j(Ce.substr(0,Ne),!1,!1),H+=":",H+=j(Ce.substr(Ne+1),!1,!0)),H+="@"}se=se.toLowerCase(),Ne=se.lastIndexOf(":"),Ne===-1?H+=j(se,!1,!0):(H+=j(se.substr(0,Ne),!1,!0),H+=se.substr(Ne))}if(V){if(V.length>=3&&V.charCodeAt(0)===47&&V.charCodeAt(2)===58){let Ne=V.charCodeAt(1);Ne>=65&&Ne<=90&&(V=`/${String.fromCharCode(Ne+32)}:${V.substr(3)}`)}else if(V.length>=2&&V.charCodeAt(1)===58){let Ne=V.charCodeAt(0);Ne>=65&&Ne<=90&&(V=`${String.fromCharCode(Ne+32)}:${V.substr(2)}`)}H+=j(V,!0,!1)}return U&&(H+="?",H+=j(U,!1,!1)),xe&&(H+="#",H+=k?xe:I(xe,!1,!1)),H}function S(G){try{return decodeURIComponent(G)}catch{return G.length>3?G.substr(0,3)+S(G.substr(3)):G}}let M=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function te(G){return G.match(M)?G.replace(M,k=>S(k)):G}var ue=r(470);let de=ue.posix||ue,_e="/";var ve;(function(G){G.joinPath=function(k,...j){return k.with({path:de.join(k.path,...j)})},G.resolvePath=function(k,...j){let H=k.path,le=!1;H[0]!==_e&&(H=_e+H,le=!0);let se=de.resolve(H,...j);return le&&se[0]===_e&&!k.authority&&(se=se.substring(1)),k.with({path:se})},G.dirname=function(k){if(k.path.length===0||k.path===_e)return k;let j=de.dirname(k.path);return j.length===1&&j.charCodeAt(0)===46&&(j=""),k.with({path:j})},G.basename=function(k){return de.basename(k.path)},G.extname=function(k){return de.extname(k.path)}})(ve||(ve={}))})(),eO=n})();var{URI:We,Utils:Gs}=eO;var Pt;(function(t){t.basename=Gs.basename,t.dirname=Gs.dirname,t.extname=Gs.extname,t.joinPath=Gs.joinPath,t.resolvePath=Gs.resolvePath;function e(n,i){return(n==null?void 0:n.toString())===(i==null?void 0:i.toString())}t.equals=e;function r(n,i){let o=typeof n=="string"?n:n.path,s=typeof i=="string"?i:i.path,a=o.split("/").filter(d=>d.length>0),l=s.split("/").filter(d=>d.length>0),u=0;for(;u<a.length&&a[u]===l[u];u++);let c="../".repeat(a.length-u),f=l.slice(u).join("/");return c+f}t.relative=r})(Pt||(Pt={}));var tO=Kt(Fr(),1);var vf=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=Jt(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[tO.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.astNode.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r!=null&&r.astNode){let n=_t(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var nC=Kt(Fr(),1);function dT(t){let e=[],r=t.Grammar;for(let n of r.rules)Ur(n)&&nT(n)&&Qg(Gi(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:ff}}var vw=typeof global=="object"&&global&&global.Object===Object&&global,Rf=vw;var Rw=typeof self=="object"&&self&&self.Object===Object&&self,xw=Rf||Rw||Function("return this")(),Vt=xw;var Nw=Vt.Symbol,Qt=Nw;var rO=Object.prototype,Ow=rO.hasOwnProperty,Ew=rO.toString,Ol=Qt?Qt.toStringTag:void 0;function Iw(t){var e=Ow.call(t,Ol),r=t[Ol];try{t[Ol]=void 0;var n=!0}catch{}var i=Ew.call(t);return n&&(e?t[Ol]=r:delete t[Ol]),i}var nO=Iw;var Sw=Object.prototype,Aw=Sw.toString;function Dw(t){return Aw.call(t)}var iO=Dw;var Cw="[object Null]",bw="[object Undefined]",oO=Qt?Qt.toStringTag:void 0;function Lw(t){return t==null?t===void 0?bw:Cw:oO&&oO in Object(t)?nO(t):iO(t)}var Or=Lw;function kw(t){return t!=null&&typeof t=="object"}var Mt=kw;var ww="[object Symbol]";function $w(t){return typeof t=="symbol"||Mt(t)&&Or(t)==ww}var Pn=$w;function Pw(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var Mn=Pw;var Mw=Array.isArray,ie=Mw;var Fw=1/0,sO=Qt?Qt.prototype:void 0,aO=sO?sO.toString:void 0;function lO(t){if(typeof t=="string")return t;if(ie(t))return Mn(t,lO)+"";if(Pn(t))return aO?aO.call(t):"";var e=t+"";return e=="0"&&1/t==-Fw?"-0":e}var uO=lO;var Uw=/\s/;function Bw(t){for(var e=t.length;e--&&Uw.test(t.charAt(e)););return e}var cO=Bw;var Ww=/^\s+/;function Vw(t){return t&&t.slice(0,cO(t)+1).replace(Ww,"")}var fO=Vw;function Gw(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var vt=Gw;var dO=NaN,jw=/^[-+]0x[0-9a-f]+$/i,qw=/^0b[01]+$/i,Hw=/^0o[0-7]+$/i,Kw=parseInt;function zw(t){if(typeof t=="number")return t;if(Pn(t))return dO;if(vt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=vt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=fO(t);var r=qw.test(t);return r||Hw.test(t)?Kw(t.slice(2),r?2:8):jw.test(t)?dO:+t}var pO=zw;var mO=1/0,Yw=17976931348623157e292;function Xw(t){if(!t)return t===0?t:0;if(t=pO(t),t===mO||t===-mO){var e=t<0?-1:1;return e*Yw}return t===t?t:0}var hO=Xw;function Jw(t){var e=hO(t),r=e%1;return e===e?r?e-r:e:0}var Fn=Jw;function Qw(t){return t}var Gr=Qw;var Zw="[object AsyncFunction]",e$="[object Function]",t$="[object GeneratorFunction]",r$="[object Proxy]";function n$(t){if(!vt(t))return!1;var e=Or(t);return e==e$||e==t$||e==Zw||e==r$}var Er=n$;var i$=Vt["__core-js_shared__"],xf=i$;var gO=function(){var t=/[^.]+$/.exec(xf&&xf.keys&&xf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function o$(t){return!!gO&&gO in t}var TO=o$;var s$=Function.prototype,a$=s$.toString;function l$(t){if(t!=null){try{return a$.call(t)}catch{}try{return t+""}catch{}}return""}var ai=l$;var u$=/[\\^$.*+?()[\]{}|]/g,c$=/^\[object .+?Constructor\]$/,f$=Function.prototype,d$=Object.prototype,p$=f$.toString,m$=d$.hasOwnProperty,h$=RegExp("^"+p$.call(m$).replace(u$,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function g$(t){if(!vt(t)||TO(t))return!1;var e=Er(t)?h$:c$;return e.test(ai(t))}var yO=g$;function T$(t,e){return t==null?void 0:t[e]}var _O=T$;function y$(t,e){var r=_O(t,e);return yO(r)?r:void 0}var jr=y$;var _$=jr(Vt,"WeakMap"),Nf=_$;var vO=Object.create,v$=function(){function t(){}return function(e){if(!vt(e))return{};if(vO)return vO(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),RO=v$;function R$(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var xO=R$;function x$(){}var Rt=x$;function N$(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var NO=N$;var O$=800,E$=16,I$=Date.now;function S$(t){var e=0,r=0;return function(){var n=I$(),i=E$-(n-r);if(r=n,i>0){if(++e>=O$)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var OO=S$;function A$(t){return function(){return t}}var EO=A$;var D$=function(){try{var t=jr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),js=D$;var C$=js?function(t,e){return js(t,"toString",{configurable:!0,enumerable:!1,value:EO(e),writable:!0})}:Gr,IO=C$;var b$=OO(IO),SO=b$;function L$(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var Of=L$;function k$(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}var Ef=k$;function w$(t){return t!==t}var AO=w$;function $$(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var DO=$$;function P$(t,e,r){return e===e?DO(t,e,r):Ef(t,AO,r)}var qs=P$;function M$(t,e){var r=t==null?0:t.length;return!!r&&qs(t,e,0)>-1}var If=M$;var F$=9007199254740991,U$=/^(?:0|[1-9]\d*)$/;function B$(t,e){var r=typeof t;return e=e==null?F$:e,!!e&&(r=="number"||r!="symbol"&&U$.test(t))&&t>-1&&t%1==0&&t<e}var ji=B$;function W$(t,e,r){e=="__proto__"&&js?js(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var Hs=W$;function V$(t,e){return t===e||t!==t&&e!==e}var Un=V$;var G$=Object.prototype,j$=G$.hasOwnProperty;function q$(t,e,r){var n=t[e];(!(j$.call(t,e)&&Un(n,r))||r===void 0&&!(e in t))&&Hs(t,e,r)}var qi=q$;function H$(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=n?n(r[a],t[a],a,r,t):void 0;l===void 0&&(l=t[a]),i?Hs(r,a,l):qi(r,a,l)}return r}var Bn=H$;var CO=Math.max;function K$(t,e,r){return e=CO(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=CO(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),xO(t,this,a)}}var bO=K$;function z$(t,e){return SO(bO(t,e,Gr),t+"")}var Ks=z$;var Y$=9007199254740991;function X$(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Y$}var zs=X$;function J$(t){return t!=null&&zs(t.length)&&!Er(t)}var Gt=J$;function Q$(t,e,r){if(!vt(r))return!1;var n=typeof e;return(n=="number"?Gt(r)&&ji(e,r.length):n=="string"&&e in r)?Un(r[e],t):!1}var Hi=Q$;function Z$(t){return Ks(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&Hi(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}var LO=Z$;var eP=Object.prototype;function tP(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||eP;return t===r}var Wn=tP;function rP(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var kO=rP;var nP="[object Arguments]";function iP(t){return Mt(t)&&Or(t)==nP}var pT=iP;var wO=Object.prototype,oP=wO.hasOwnProperty,sP=wO.propertyIsEnumerable,aP=pT(function(){return arguments}())?pT:function(t){return Mt(t)&&oP.call(t,"callee")&&!sP.call(t,"callee")},Ki=aP;function lP(){return!1}var $O=lP;var FO=typeof exports=="object"&&exports&&!exports.nodeType&&exports,PO=FO&&typeof module=="object"&&module&&!module.nodeType&&module,uP=PO&&PO.exports===FO,MO=uP?Vt.Buffer:void 0,cP=MO?MO.isBuffer:void 0,fP=cP||$O,li=fP;var dP="[object Arguments]",pP="[object Array]",mP="[object Boolean]",hP="[object Date]",gP="[object Error]",TP="[object Function]",yP="[object Map]",_P="[object Number]",vP="[object Object]",RP="[object RegExp]",xP="[object Set]",NP="[object String]",OP="[object WeakMap]",EP="[object ArrayBuffer]",IP="[object DataView]",SP="[object Float32Array]",AP="[object Float64Array]",DP="[object Int8Array]",CP="[object Int16Array]",bP="[object Int32Array]",LP="[object Uint8Array]",kP="[object Uint8ClampedArray]",wP="[object Uint16Array]",$P="[object Uint32Array]",it={};it[SP]=it[AP]=it[DP]=it[CP]=it[bP]=it[LP]=it[kP]=it[wP]=it[$P]=!0;it[dP]=it[pP]=it[EP]=it[mP]=it[IP]=it[hP]=it[gP]=it[TP]=it[yP]=it[_P]=it[vP]=it[RP]=it[xP]=it[NP]=it[OP]=!1;function PP(t){return Mt(t)&&zs(t.length)&&!!it[Or(t)]}var UO=PP;function MP(t){return function(e){return t(e)}}var Vn=MP;var BO=typeof exports=="object"&&exports&&!exports.nodeType&&exports,El=BO&&typeof module=="object"&&module&&!module.nodeType&&module,FP=El&&El.exports===BO,mT=FP&&Rf.process,UP=function(){try{var t=El&&El.require&&El.require("util").types;return t||mT&&mT.binding&&mT.binding("util")}catch{}}(),fn=UP;var WO=fn&&fn.isTypedArray,BP=WO?Vn(WO):UO,Ys=BP;var WP=Object.prototype,VP=WP.hasOwnProperty;function GP(t,e){var r=ie(t),n=!r&&Ki(t),i=!r&&!n&&li(t),o=!r&&!n&&!i&&Ys(t),s=r||n||i||o,a=s?kO(t.length,String):[],l=a.length;for(var u in t)(e||VP.call(t,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ji(u,l)))&&a.push(u);return a}var Sf=GP;function jP(t,e){return function(r){return t(e(r))}}var Af=jP;var qP=Af(Object.keys,Object),VO=qP;var HP=Object.prototype,KP=HP.hasOwnProperty;function zP(t){if(!Wn(t))return VO(t);var e=[];for(var r in Object(t))KP.call(t,r)&&r!="constructor"&&e.push(r);return e}var Df=zP;function YP(t){return Gt(t)?Sf(t):Df(t)}var Xe=YP;var XP=Object.prototype,JP=XP.hasOwnProperty,QP=LO(function(t,e){if(Wn(e)||Gt(e)){Bn(e,Xe(e),t);return}for(var r in e)JP.call(e,r)&&qi(t,r,e[r])}),ar=QP;function ZP(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var GO=ZP;var eM=Object.prototype,tM=eM.hasOwnProperty;function rM(t){if(!vt(t))return GO(t);var e=Wn(t),r=[];for(var n in t)n=="constructor"&&(e||!tM.call(t,n))||r.push(n);return r}var jO=rM;function nM(t){return Gt(t)?Sf(t,!0):jO(t)}var zi=nM;var iM=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oM=/^\w*$/;function sM(t,e){if(ie(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Pn(t)?!0:oM.test(t)||!iM.test(t)||e!=null&&t in Object(e)}var Xs=sM;var aM=jr(Object,"create"),ui=aM;function lM(){this.__data__=ui?ui(null):{},this.size=0}var qO=lM;function uM(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var HO=uM;var cM="__lodash_hash_undefined__",fM=Object.prototype,dM=fM.hasOwnProperty;function pM(t){var e=this.__data__;if(ui){var r=e[t];return r===cM?void 0:r}return dM.call(e,t)?e[t]:void 0}var KO=pM;var mM=Object.prototype,hM=mM.hasOwnProperty;function gM(t){var e=this.__data__;return ui?e[t]!==void 0:hM.call(e,t)}var zO=gM;var TM="__lodash_hash_undefined__";function yM(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ui&&e===void 0?TM:e,this}var YO=yM;function Js(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Js.prototype.clear=qO;Js.prototype.delete=HO;Js.prototype.get=KO;Js.prototype.has=zO;Js.prototype.set=YO;var hT=Js;function _M(){this.__data__=[],this.size=0}var XO=_M;function vM(t,e){for(var r=t.length;r--;)if(Un(t[r][0],e))return r;return-1}var Yi=vM;var RM=Array.prototype,xM=RM.splice;function NM(t){var e=this.__data__,r=Yi(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():xM.call(e,r,1),--this.size,!0}var JO=NM;function OM(t){var e=this.__data__,r=Yi(e,t);return r<0?void 0:e[r][1]}var QO=OM;function EM(t){return Yi(this.__data__,t)>-1}var ZO=EM;function IM(t,e){var r=this.__data__,n=Yi(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var eE=IM;function Qs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Qs.prototype.clear=XO;Qs.prototype.delete=JO;Qs.prototype.get=QO;Qs.prototype.has=ZO;Qs.prototype.set=eE;var Xi=Qs;var SM=jr(Vt,"Map"),Ji=SM;function AM(){this.size=0,this.__data__={hash:new hT,map:new(Ji||Xi),string:new hT}}var tE=AM;function DM(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var rE=DM;function CM(t,e){var r=t.__data__;return rE(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Qi=CM;function bM(t){var e=Qi(this,t).delete(t);return this.size-=e?1:0,e}var nE=bM;function LM(t){return Qi(this,t).get(t)}var iE=LM;function kM(t){return Qi(this,t).has(t)}var oE=kM;function wM(t,e){var r=Qi(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var sE=wM;function Zs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Zs.prototype.clear=tE;Zs.prototype.delete=nE;Zs.prototype.get=iE;Zs.prototype.has=oE;Zs.prototype.set=sE;var ko=Zs;var $M="Expected a function";function gT(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError($M);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(gT.Cache||ko),r}gT.Cache=ko;var aE=gT;var PM=500;function MM(t){var e=aE(t,function(n){return r.size===PM&&r.clear(),n}),r=e.cache;return e}var lE=MM;var FM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,UM=/\\(\\)?/g,BM=lE(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(FM,function(r,n,i,o){e.push(i?o.replace(UM,"$1"):n||r)}),e}),uE=BM;function WM(t){return t==null?"":uO(t)}var cE=WM;function VM(t,e){return ie(t)?t:Xs(t,e)?[t]:uE(cE(t))}var Zi=VM;var GM=1/0;function jM(t){if(typeof t=="string"||Pn(t))return t;var e=t+"";return e=="0"&&1/t==-GM?"-0":e}var Gn=jM;function qM(t,e){e=Zi(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Gn(e[r++])];return r&&r==n?t:void 0}var ea=qM;function HM(t,e,r){var n=t==null?void 0:ea(t,e);return n===void 0?r:n}var fE=HM;function KM(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var ta=KM;var dE=Qt?Qt.isConcatSpreadable:void 0;function zM(t){return ie(t)||Ki(t)||!!(dE&&t&&t[dE])}var pE=zM;function mE(t,e,r,n,i){var o=-1,s=t.length;for(r||(r=pE),i||(i=[]);++o<s;){var a=t[o];e>0&&r(a)?e>1?mE(a,e-1,r,n,i):ta(i,a):n||(i[i.length]=a)}return i}var ra=mE;function YM(t){var e=t==null?0:t.length;return e?ra(t,1):[]}var Ft=YM;var XM=Af(Object.getPrototypeOf,Object),Cf=XM;function JM(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}var bf=JM;function QM(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}var hE=QM;function ZM(){this.__data__=new Xi,this.size=0}var gE=ZM;function e0(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var TE=e0;function t0(t){return this.__data__.get(t)}var yE=t0;function r0(t){return this.__data__.has(t)}var _E=r0;var n0=200;function i0(t,e){var r=this.__data__;if(r instanceof Xi){var n=r.__data__;if(!Ji||n.length<n0-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new ko(n)}return r.set(t,e),this.size=r.size,this}var vE=i0;function na(t){var e=this.__data__=new Xi(t);this.size=e.size}na.prototype.clear=gE;na.prototype.delete=TE;na.prototype.get=yE;na.prototype.has=_E;na.prototype.set=vE;var eo=na;function o0(t,e){return t&&Bn(e,Xe(e),t)}var RE=o0;function s0(t,e){return t&&Bn(e,zi(e),t)}var xE=s0;var IE=typeof exports=="object"&&exports&&!exports.nodeType&&exports,NE=IE&&typeof module=="object"&&module&&!module.nodeType&&module,a0=NE&&NE.exports===IE,OE=a0?Vt.Buffer:void 0,EE=OE?OE.allocUnsafe:void 0;function l0(t,e){if(e)return t.slice();var r=t.length,n=EE?EE(r):new t.constructor(r);return t.copy(n),n}var SE=l0;function u0(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}var ia=u0;function c0(){return[]}var Lf=c0;var f0=Object.prototype,d0=f0.propertyIsEnumerable,AE=Object.getOwnPropertySymbols,p0=AE?function(t){return t==null?[]:(t=Object(t),ia(AE(t),function(e){return d0.call(t,e)}))}:Lf,oa=p0;function m0(t,e){return Bn(t,oa(t),e)}var DE=m0;var h0=Object.getOwnPropertySymbols,g0=h0?function(t){for(var e=[];t;)ta(e,oa(t)),t=Cf(t);return e}:Lf,kf=g0;function T0(t,e){return Bn(t,kf(t),e)}var CE=T0;function y0(t,e,r){var n=e(t);return ie(t)?n:ta(n,r(t))}var wf=y0;function _0(t){return wf(t,Xe,oa)}var Il=_0;function v0(t){return wf(t,zi,kf)}var $f=v0;var R0=jr(Vt,"DataView"),Pf=R0;var x0=jr(Vt,"Promise"),Mf=x0;var N0=jr(Vt,"Set"),to=N0;var bE="[object Map]",O0="[object Object]",LE="[object Promise]",kE="[object Set]",wE="[object WeakMap]",$E="[object DataView]",E0=ai(Pf),I0=ai(Ji),S0=ai(Mf),A0=ai(to),D0=ai(Nf),wo=Or;(Pf&&wo(new Pf(new ArrayBuffer(1)))!=$E||Ji&&wo(new Ji)!=bE||Mf&&wo(Mf.resolve())!=LE||to&&wo(new to)!=kE||Nf&&wo(new Nf)!=wE)&&(wo=function(t){var e=Or(t),r=e==O0?t.constructor:void 0,n=r?ai(r):"";if(n)switch(n){case E0:return $E;case I0:return bE;case S0:return LE;case A0:return kE;case D0:return wE}return e});var On=wo;var C0=Object.prototype,b0=C0.hasOwnProperty;function L0(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&b0.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var PE=L0;var k0=Vt.Uint8Array,sa=k0;function w0(t){var e=new t.constructor(t.byteLength);return new sa(e).set(new sa(t)),e}var aa=w0;function $0(t,e){var r=e?aa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var ME=$0;var P0=/\w*$/;function M0(t){var e=new t.constructor(t.source,P0.exec(t));return e.lastIndex=t.lastIndex,e}var FE=M0;var UE=Qt?Qt.prototype:void 0,BE=UE?UE.valueOf:void 0;function F0(t){return BE?Object(BE.call(t)):{}}var WE=F0;function U0(t,e){var r=e?aa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var VE=U0;var B0="[object Boolean]",W0="[object Date]",V0="[object Map]",G0="[object Number]",j0="[object RegExp]",q0="[object Set]",H0="[object String]",K0="[object Symbol]",z0="[object ArrayBuffer]",Y0="[object DataView]",X0="[object Float32Array]",J0="[object Float64Array]",Q0="[object Int8Array]",Z0="[object Int16Array]",eF="[object Int32Array]",tF="[object Uint8Array]",rF="[object Uint8ClampedArray]",nF="[object Uint16Array]",iF="[object Uint32Array]";function oF(t,e,r){var n=t.constructor;switch(e){case z0:return aa(t);case B0:case W0:return new n(+t);case Y0:return ME(t,r);case X0:case J0:case Q0:case Z0:case eF:case tF:case rF:case nF:case iF:return VE(t,r);case V0:return new n;case G0:case H0:return new n(t);case j0:return FE(t);case q0:return new n;case K0:return WE(t)}}var GE=oF;function sF(t){return typeof t.constructor=="function"&&!Wn(t)?RO(Cf(t)):{}}var jE=sF;var aF="[object Map]";function lF(t){return Mt(t)&&On(t)==aF}var qE=lF;var HE=fn&&fn.isMap,uF=HE?Vn(HE):qE,KE=uF;var cF="[object Set]";function fF(t){return Mt(t)&&On(t)==cF}var zE=fF;var YE=fn&&fn.isSet,dF=YE?Vn(YE):zE,XE=dF;var pF=1,mF=2,hF=4,JE="[object Arguments]",gF="[object Array]",TF="[object Boolean]",yF="[object Date]",_F="[object Error]",QE="[object Function]",vF="[object GeneratorFunction]",RF="[object Map]",xF="[object Number]",ZE="[object Object]",NF="[object RegExp]",OF="[object Set]",EF="[object String]",IF="[object Symbol]",SF="[object WeakMap]",AF="[object ArrayBuffer]",DF="[object DataView]",CF="[object Float32Array]",bF="[object Float64Array]",LF="[object Int8Array]",kF="[object Int16Array]",wF="[object Int32Array]",$F="[object Uint8Array]",PF="[object Uint8ClampedArray]",MF="[object Uint16Array]",FF="[object Uint32Array]",Je={};Je[JE]=Je[gF]=Je[AF]=Je[DF]=Je[TF]=Je[yF]=Je[CF]=Je[bF]=Je[LF]=Je[kF]=Je[wF]=Je[RF]=Je[xF]=Je[ZE]=Je[NF]=Je[OF]=Je[EF]=Je[IF]=Je[$F]=Je[PF]=Je[MF]=Je[FF]=!0;Je[_F]=Je[QE]=Je[SF]=!1;function Ff(t,e,r,n,i,o){var s,a=e&pF,l=e&mF,u=e&hF;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!vt(t))return t;var c=ie(t);if(c){if(s=PE(t),!a)return NO(t,s)}else{var f=On(t),d=f==QE||f==vF;if(li(t))return SE(t,a);if(f==ZE||f==JE||d&&!i){if(s=l||d?{}:jE(t),!a)return l?CE(t,xE(s,t)):DE(t,RE(s,t))}else{if(!Je[f])return i?t:{};s=GE(t,f,a)}}o||(o=new eo);var m=o.get(t);if(m)return m;o.set(t,s),XE(t)?t.forEach(function(I){s.add(Ff(I,e,r,I,t,o))}):KE(t)&&t.forEach(function(I,E){s.set(E,Ff(I,e,r,E,t,o))});var R=u?l?$f:Il:l?zi:Xe,O=c?void 0:R(t);return Of(O||t,function(I,E){O&&(E=I,I=t[E]),qi(s,E,Ff(I,e,r,E,t,o))}),s}var eI=Ff;var UF=4;function BF(t){return eI(t,UF)}var Qe=BF;function WF(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}var jn=WF;var VF="__lodash_hash_undefined__";function GF(t){return this.__data__.set(t,VF),this}var tI=GF;function jF(t){return this.__data__.has(t)}var rI=jF;function Uf(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new ko;++e<r;)this.add(t[e])}Uf.prototype.add=Uf.prototype.push=tI;Uf.prototype.has=rI;var la=Uf;function qF(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var Bf=qF;function HF(t,e){return t.has(e)}var ua=HF;var KF=1,zF=2;function YF(t,e,r,n,i,o){var s=r&KF,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(t),c=o.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,m=r&zF?new la:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var R=t[f],O=e[f];if(n)var I=s?n(O,R,f,e,t,o):n(R,O,f,t,e,o);if(I!==void 0){if(I)continue;d=!1;break}if(m){if(!Bf(e,function(E,y){if(!ua(m,y)&&(R===E||i(R,E,r,n,o)))return m.push(y)})){d=!1;break}}else if(!(R===O||i(R,O,r,n,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var Wf=YF;function XF(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}var nI=XF;function JF(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var ca=JF;var QF=1,ZF=2,eU="[object Boolean]",tU="[object Date]",rU="[object Error]",nU="[object Map]",iU="[object Number]",oU="[object RegExp]",sU="[object Set]",aU="[object String]",lU="[object Symbol]",uU="[object ArrayBuffer]",cU="[object DataView]",iI=Qt?Qt.prototype:void 0,TT=iI?iI.valueOf:void 0;function fU(t,e,r,n,i,o,s){switch(r){case cU:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case uU:return!(t.byteLength!=e.byteLength||!o(new sa(t),new sa(e)));case eU:case tU:case iU:return Un(+t,+e);case rU:return t.name==e.name&&t.message==e.message;case oU:case aU:return t==e+"";case nU:var a=nI;case sU:var l=n&QF;if(a||(a=ca),t.size!=e.size&&!l)return!1;var u=s.get(t);if(u)return u==e;n|=ZF,s.set(t,e);var c=Wf(a(t),a(e),n,i,o,s);return s.delete(t),c;case lU:if(TT)return TT.call(t)==TT.call(e)}return!1}var oI=fU;var dU=1,pU=Object.prototype,mU=pU.hasOwnProperty;function hU(t,e,r,n,i,o){var s=r&dU,a=Il(t),l=a.length,u=Il(e),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in e:mU.call(e,d)))return!1}var m=o.get(t),R=o.get(e);if(m&&R)return m==e&&R==t;var O=!0;o.set(t,e),o.set(e,t);for(var I=s;++f<l;){d=a[f];var E=t[d],y=e[d];if(n)var T=s?n(y,E,d,e,t,o):n(E,y,d,t,e,o);if(!(T===void 0?E===y||i(E,y,r,n,o):T)){O=!1;break}I||(I=d=="constructor")}if(O&&!I){var S=t.constructor,M=e.constructor;S!=M&&"constructor"in t&&"constructor"in e&&!(typeof S=="function"&&S instanceof S&&typeof M=="function"&&M instanceof M)&&(O=!1)}return o.delete(t),o.delete(e),O}var sI=hU;var gU=1,aI="[object Arguments]",lI="[object Array]",Vf="[object Object]",TU=Object.prototype,uI=TU.hasOwnProperty;function yU(t,e,r,n,i,o){var s=ie(t),a=ie(e),l=s?lI:On(t),u=a?lI:On(e);l=l==aI?Vf:l,u=u==aI?Vf:u;var c=l==Vf,f=u==Vf,d=l==u;if(d&&li(t)){if(!li(e))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new eo),s||Ys(t)?Wf(t,e,r,n,i,o):oI(t,e,l,r,n,i,o);if(!(r&gU)){var m=c&&uI.call(t,"__wrapped__"),R=f&&uI.call(e,"__wrapped__");if(m||R){var O=m?t.value():t,I=R?e.value():e;return o||(o=new eo),i(O,I,r,n,o)}}return d?(o||(o=new eo),sI(t,e,r,n,i,o)):!1}var cI=yU;function fI(t,e,r,n,i){return t===e?!0:t==null||e==null||!Mt(t)&&!Mt(e)?t!==t&&e!==e:cI(t,e,r,n,fI,i)}var Gf=fI;var _U=1,vU=2;function RU(t,e,r,n){var i=r.length,o=i,s=!n;if(t==null)return!o;for(t=Object(t);i--;){var a=r[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=r[i];var l=a[0],u=t[l],c=a[1];if(s&&a[2]){if(u===void 0&&!(l in t))return!1}else{var f=new eo;if(n)var d=n(u,c,l,t,e,f);if(!(d===void 0?Gf(c,u,_U|vU,n,f):d))return!1}}return!0}var dI=RU;function xU(t){return t===t&&!vt(t)}var jf=xU;function NU(t){for(var e=Xe(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,jf(i)]}return e}var pI=NU;function OU(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var qf=OU;function EU(t){var e=pI(t);return e.length==1&&e[0][2]?qf(e[0][0],e[0][1]):function(r){return r===t||dI(r,t,e)}}var mI=EU;function IU(t,e){return t!=null&&e in Object(t)}var hI=IU;function SU(t,e,r){e=Zi(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var s=Gn(e[n]);if(!(o=t!=null&&r(t,s)))break;t=t[s]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&zs(i)&&ji(s,i)&&(ie(t)||Ki(t)))}var Hf=SU;function AU(t,e){return t!=null&&Hf(t,e,hI)}var gI=AU;var DU=1,CU=2;function bU(t,e){return Xs(t)&&jf(e)?qf(Gn(t),e):function(r){var n=fE(r,t);return n===void 0&&n===e?gI(r,t):Gf(e,n,DU|CU)}}var TI=bU;function LU(t){return function(e){return e==null?void 0:e[t]}}var yI=LU;function kU(t){return function(e){return ea(e,t)}}var _I=kU;function wU(t){return Xs(t)?yI(Gn(t)):_I(t)}var vI=wU;function $U(t){return typeof t=="function"?t:t==null?Gr:typeof t=="object"?ie(t)?TI(t[0],t[1]):mI(t):vI(t)}var At=$U;function PU(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var s=t[i];e(n,s,r(s),t)}return n}var RI=PU;function MU(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var l=s[t?a:++i];if(r(o[l],l,o)===!1)break}return e}}var xI=MU;var FU=xI(),NI=FU;function UU(t,e){return t&&NI(t,e,Xe)}var OI=UU;function BU(t,e){return function(r,n){if(r==null)return r;if(!Gt(r))return t(r,n);for(var i=r.length,o=e?i:-1,s=Object(r);(e?o--:++o<i)&&n(s[o],o,s)!==!1;);return r}}var EI=BU;var WU=EI(OI),qr=WU;function VU(t,e,r,n){return qr(t,function(i,o,s){e(n,i,r(i),s)}),n}var II=VU;function GU(t,e){return function(r,n){var i=ie(r)?RI:II,o=e?e():{};return i(r,t,At(n,2),o)}}var SI=GU;var AI=Object.prototype,jU=AI.hasOwnProperty,qU=Ks(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&Hi(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],s=zi(o),a=-1,l=s.length;++a<l;){var u=s[a],c=t[u];(c===void 0||Un(c,AI[u])&&!jU.call(t,u))&&(t[u]=o[u])}return t}),fa=qU;function HU(t){return Mt(t)&&Gt(t)}var yT=HU;function KU(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}var Kf=KU;var zU=200;function YU(t,e,r,n){var i=-1,o=If,s=!0,a=t.length,l=[],u=e.length;if(!a)return l;r&&(e=Mn(e,Vn(r))),n?(o=Kf,s=!1):e.length>=zU&&(o=ua,s=!1,e=new la(e));e:for(;++i<a;){var c=t[i],f=r==null?c:r(c);if(c=n||c!==0?c:0,s&&f===f){for(var d=u;d--;)if(e[d]===f)continue e;l.push(c)}else o(e,f,n)||l.push(c)}return l}var DI=YU;var XU=Ks(function(t,e){return yT(t)?DI(t,ra(e,1,yT,!0)):[]}),ro=XU;function JU(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var qn=JU;function QU(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Fn(e),bf(t,e<0?0:e,n)):[]}var Ut=QU;function ZU(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Fn(e),e=n-e,bf(t,0,e<0?0:e)):[]}var ci=ZU;function e1(t){return typeof t=="function"?t:Gr}var CI=e1;function t1(t,e){var r=ie(t)?Of:qr;return r(t,CI(e))}var J=t1;function r1(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var bI=r1;function n1(t,e){var r=!0;return qr(t,function(n,i,o){return r=!!e(n,i,o),r}),r}var LI=n1;function i1(t,e,r){var n=ie(t)?bI:LI;return r&&Hi(t,e,r)&&(e=void 0),n(t,At(e,3))}var gr=i1;function o1(t,e){var r=[];return qr(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}var zf=o1;function s1(t,e){var r=ie(t)?ia:zf;return r(t,At(e,3))}var Zt=s1;function a1(t){return function(e,r,n){var i=Object(e);if(!Gt(e)){var o=At(r,3);e=Xe(e),r=function(a){return o(i[a],a,i)}}var s=t(e,r,n);return s>-1?i[o?e[s]:s]:void 0}}var kI=a1;var l1=Math.max;function u1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Fn(r);return i<0&&(i=l1(n+i,0)),Ef(t,At(e,3),i)}var wI=u1;var c1=kI(wI),Hn=c1;function f1(t){return t&&t.length?t[0]:void 0}var er=f1;function d1(t,e){var r=-1,n=Gt(t)?Array(t.length):[];return qr(t,function(i,o,s){n[++r]=e(i,o,s)}),n}var $I=d1;function p1(t,e){var r=ie(t)?Mn:$I;return r(t,At(e,3))}var K=p1;function m1(t,e){return ra(K(t,e),1)}var lr=m1;var h1=Object.prototype,g1=h1.hasOwnProperty,T1=SI(function(t,e,r){g1.call(t,r)?t[r].push(e):Hs(t,r,[e])}),_T=T1;var y1=Object.prototype,_1=y1.hasOwnProperty;function v1(t,e){return t!=null&&_1.call(t,e)}var PI=v1;function R1(t,e){return t!=null&&Hf(t,e,PI)}var Z=R1;var x1="[object String]";function N1(t){return typeof t=="string"||!ie(t)&&Mt(t)&&Or(t)==x1}var zt=N1;function O1(t,e){return Mn(e,function(r){return t[r]})}var MI=O1;function E1(t){return t==null?[]:MI(t,Xe(t))}var Ve=E1;var I1=Math.max;function S1(t,e,r,n){t=Gt(t)?t:Ve(t),r=r&&!n?Fn(r):0;var i=t.length;return r<0&&(r=I1(i+r,0)),zt(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&qs(t,e,r)>-1}var ut=S1;var A1=Math.max;function D1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Fn(r);return i<0&&(i=A1(n+i,0)),qs(t,e,i)}var Yf=D1;var C1="[object Map]",b1="[object Set]",L1=Object.prototype,k1=L1.hasOwnProperty;function w1(t){if(t==null)return!0;if(Gt(t)&&(ie(t)||typeof t=="string"||typeof t.splice=="function"||li(t)||Ys(t)||Ki(t)))return!t.length;var e=On(t);if(e==C1||e==b1)return!t.size;if(Wn(t))return!Df(t).length;for(var r in t)if(k1.call(t,r))return!1;return!0}var ye=w1;var $1="[object RegExp]";function P1(t){return Mt(t)&&Or(t)==$1}var FI=P1;var UI=fn&&fn.isRegExp,M1=UI?Vn(UI):FI,dn=M1;function F1(t){return t===void 0}var Tr=F1;function U1(t,e){return t<e}var BI=U1;function B1(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],s=e(o);if(s!=null&&(a===void 0?s===s&&!Pn(s):r(s,a)))var a=s,l=o}return l}var WI=B1;function W1(t){return t&&t.length?WI(t,Gr,BI):void 0}var VI=W1;var V1="Expected a function";function G1(t){if(typeof t!="function")throw new TypeError(V1);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var GI=G1;function j1(t,e,r,n){if(!vt(t))return t;e=Zi(e,t);for(var i=-1,o=e.length,s=o-1,a=t;a!=null&&++i<o;){var l=Gn(e[i]),u=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=s){var c=a[l];u=n?n(c,l,a):void 0,u===void 0&&(u=vt(c)?c:ji(e[i+1])?[]:{})}qi(a,l,u),a=a[l]}return t}var jI=j1;function q1(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var s=e[n],a=ea(t,s);r(a,s)&&jI(o,Zi(s,t),a)}return o}var qI=q1;function H1(t,e){if(t==null)return{};var r=Mn($f(t),function(n){return[n]});return e=At(e),qI(t,r,function(n,i){return e(n,i[0])})}var Hr=H1;function K1(t,e,r,n,i){return i(t,function(o,s,a){r=n?(n=!1,o):e(r,o,s,a)}),r}var HI=K1;function z1(t,e,r){var n=ie(t)?hE:HI,i=arguments.length<3;return n(t,At(e,4),r,i,qr)}var xt=z1;function Y1(t,e){var r=ie(t)?ia:zf;return r(t,GI(At(e,3)))}var no=Y1;function X1(t,e){var r;return qr(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}var KI=X1;function J1(t,e,r){var n=ie(t)?Bf:KI;return r&&Hi(t,e,r)&&(e=void 0),n(t,At(e,3))}var Sl=J1;var Q1=1/0,Z1=to&&1/ca(new to([,-0]))[1]==Q1?function(t){return new to(t)}:Rt,zI=Z1;var eB=200;function tB(t,e,r){var n=-1,i=If,o=t.length,s=!0,a=[],l=a;if(r)s=!1,i=Kf;else if(o>=eB){var u=e?null:zI(t);if(u)return ca(u);s=!1,i=ua,l=new la}else l=e?[]:a;e:for(;++n<o;){var c=t[n],f=e?e(c):c;if(c=r||c!==0?c:0,s&&f===f){for(var d=l.length;d--;)if(l[d]===f)continue e;e&&l.push(f),a.push(c)}else i(l,f,r)||(l!==a&&l.push(f),a.push(c))}return a}var Xf=tB;function rB(t){return t&&t.length?Xf(t):[]}var da=rB;function nB(t,e){return t&&t.length?Xf(t,At(e,2)):[]}var YI=nB;function pa(t){console&&console.error&&console.error(`Error: ${t}`)}function Al(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Dl(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function Cl(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function iB(t){return oB(t)?t.LABEL:t.name}function oB(t){return zt(t.LABEL)&&t.LABEL!==""}var en=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),J(this.definition,r=>{r.accept(e)})}},Me=class extends en{constructor(e){super([]),this.idx=1,ar(this,Hr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Ir=class extends en{constructor(e){super(e.definition),this.orgText="",ar(this,Hr(e,r=>r!==void 0))}},Ze=class extends en{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,ar(this,Hr(e,r=>r!==void 0))}},Fe=class extends en{constructor(e){super(e.definition),this.idx=1,ar(this,Hr(e,r=>r!==void 0))}},et=class extends en{constructor(e){super(e.definition),this.idx=1,ar(this,Hr(e,r=>r!==void 0))}},tt=class extends en{constructor(e){super(e.definition),this.idx=1,ar(this,Hr(e,r=>r!==void 0))}},Ae=class extends en{constructor(e){super(e.definition),this.idx=1,ar(this,Hr(e,r=>r!==void 0))}},He=class extends en{constructor(e){super(e.definition),this.idx=1,ar(this,Hr(e,r=>r!==void 0))}},Ke=class extends en{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,ar(this,Hr(e,r=>r!==void 0))}},Re=class{constructor(e){this.idx=1,ar(this,Hr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function Jf(t){return K(t,ma)}function ma(t){function e(r){return K(r,ma)}if(t instanceof Me){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return zt(t.label)&&(r.label=t.label),r}else{if(t instanceof Ze)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Fe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof et)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof tt)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:ma(new Re({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof He)return{type:"RepetitionWithSeparator",idx:t.idx,separator:ma(new Re({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Ae)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Ke)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof Re){let r={type:"Terminal",name:t.terminalType.name,label:iB(t.terminalType),idx:t.idx};zt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=dn(n)?n.source:n),r}else{if(t instanceof Ir)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var Sr=class{visit(e){let r=e;switch(r.constructor){case Me:return this.visitNonTerminal(r);case Ze:return this.visitAlternative(r);case Fe:return this.visitOption(r);case et:return this.visitRepetitionMandatory(r);case tt:return this.visitRepetitionMandatoryWithSeparator(r);case He:return this.visitRepetitionWithSeparator(r);case Ae:return this.visitRepetition(r);case Ke:return this.visitAlternation(r);case Re:return this.visitTerminal(r);case Ir:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function vT(t){return t instanceof Ze||t instanceof Fe||t instanceof Ae||t instanceof et||t instanceof tt||t instanceof He||t instanceof Re||t instanceof Ir}function $o(t,e=[]){return t instanceof Fe||t instanceof Ae||t instanceof He?!0:t instanceof Ke?Sl(t.definition,n=>$o(n,e)):t instanceof Me&&ut(e,t)?!1:t instanceof en?(t instanceof Me&&e.push(t),gr(t.definition,n=>$o(n,e))):!1}function RT(t){return t instanceof Ke}function Kr(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof et)return"AT_LEAST_ONE";if(t instanceof tt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ae)return"MANY";if(t instanceof Re)return"CONSUME";throw Error("non exhaustive match")}var fi=class{walk(e,r=[]){J(e.definition,(n,i)=>{let o=Ut(e.definition,i+1);if(n instanceof Me)this.walkProdRef(n,o,r);else if(n instanceof Re)this.walkTerminal(n,o,r);else if(n instanceof Ze)this.walkFlat(n,o,r);else if(n instanceof Fe)this.walkOption(n,o,r);else if(n instanceof et)this.walkAtLeastOne(n,o,r);else if(n instanceof tt)this.walkAtLeastOneSep(n,o,r);else if(n instanceof He)this.walkManySep(n,o,r);else if(n instanceof Ae)this.walkMany(n,o,r);else if(n instanceof Ke)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let i=r.concat(n);this.walk(e,i)}walkOption(e,r,n){let i=r.concat(n);this.walk(e,i)}walkAtLeastOne(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkAtLeastOneSep(e,r,n){let i=XI(e,r,n);this.walk(e,i)}walkMany(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkManySep(e,r,n){let i=XI(e,r,n);this.walk(e,i)}walkOr(e,r,n){let i=r.concat(n);J(e.definition,o=>{let s=new Ze({definition:[o]});this.walk(s,i)})}};function XI(t,e,r){return[new Fe({definition:[new Re({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function Po(t){if(t instanceof Me)return Po(t.referencedRule);if(t instanceof Re)return lB(t);if(vT(t))return sB(t);if(RT(t))return aB(t);throw Error("non exhaustive match")}function sB(t){let e=[],r=t.definition,n=0,i=r.length>n,o,s=!0;for(;i&&s;)o=r[n],s=$o(o),e=e.concat(Po(o)),n=n+1,i=r.length>n;return da(e)}function aB(t){let e=K(t.definition,r=>Po(r));return da(Ft(e))}function lB(t){return[t.terminalType]}var Qf="_~IN~_";var xT=class extends fi{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let i=uB(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),s=new Ze({definition:o}),a=Po(s);this.follows[i]=a}};function JI(t){let e={};return J(t,r=>{let n=new xT(r).startWalking();ar(e,n)}),e}function uB(t,e){return t.name+e+Qf}var Zf={},cB=new So;function ha(t){let e=t.toString();if(Zf.hasOwnProperty(e))return Zf[e];{let r=cB.pattern(e);return Zf[e]=r,r}}function QI(){Zf={}}var eS="Complement Sets are not supported for first char optimization",bl=`Unable to use "first char" lexer optimizations:
`;function tS(t,e=!1){try{let r=ha(t);return NT(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===eS)e&&Al(`${bl}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),pa(`${bl}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function NT(t,e,r){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)NT(t.value[i],e,r);break;case"Alternative":let n=t.value;for(let i=0;i<n.length;i++){let o=n[i];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=o;switch(s.type){case"Character":ed(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(eS);J(s.value,l=>{if(typeof l=="number")ed(l,e,r);else{let u=l;if(r===!0)for(let c=u.from;c<=u.to;c++)ed(c,e,r);else{for(let c=u.from;c<=u.to&&c<ga;c++)ed(c,e,r);if(u.to>=ga){let c=u.from>=ga?u.from:ga,f=u.to,d=Kn(c),m=Kn(f);for(let R=d;R<=m;R++)e[R]=R}}}});break;case"Group":NT(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&OT(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Ve(e)}function ed(t,e,r){let n=Kn(t);e[n]=n,r===!0&&fB(t,e)}function fB(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let i=Kn(n.charCodeAt(0));e[i]=i}else{let i=r.toLowerCase();if(i!==r){let o=Kn(i.charCodeAt(0));e[o]=o}}}function ZI(t,e){return Hn(t.value,r=>{if(typeof r=="number")return ut(e,r);{let n=r;return Hn(e,i=>n.from<=i&&i<=n.to)!==void 0}})}function OT(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ie(t.value)?gr(t.value,OT):OT(t.value):!1}var ET=class extends $n{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){ut(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?ZI(e,this.targetCharCodes)===void 0&&(this.found=!0):ZI(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function td(t,e){if(e instanceof RegExp){let r=ha(e),n=new ET(t);return n.visit(r),n.found}else return Hn(e,r=>ut(t,r.charCodeAt(0)))!==void 0}var Mo="PATTERN",Ta="defaultMode",rd="modes",ST=typeof new RegExp("(?:)").sticky=="boolean";function iS(t,e){e=fa(e,{useSticky:ST,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(y,T)=>T()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{DB()});let n;r("Reject Lexer.NA",()=>{n=no(t,y=>y[Mo]===Dt.NA)});let i=!1,o;r("Transform Patterns",()=>{i=!1,o=K(n,y=>{let T=y[Mo];if(dn(T)){let S=T.source;return S.length===1&&S!=="^"&&S!=="$"&&S!=="."&&!T.ignoreCase?S:S.length===2&&S[0]==="\\"&&!ut(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],S[1])?S[1]:e.useSticky?nS(T):rS(T)}else{if(Er(T))return i=!0,{exec:T};if(typeof T=="object")return i=!0,T;if(typeof T=="string"){if(T.length===1)return T;{let S=T.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),M=new RegExp(S);return e.useSticky?nS(M):rS(M)}}else throw Error("non exhaustive match")}})});let s,a,l,u,c;r("misc mapping",()=>{s=K(n,y=>y.tokenTypeIdx),a=K(n,y=>{let T=y.GROUP;if(T!==Dt.SKIPPED){if(zt(T))return T;if(Tr(T))return!1;throw Error("non exhaustive match")}}),l=K(n,y=>{let T=y.LONGER_ALT;if(T)return ie(T)?K(T,M=>Yf(n,M)):[Yf(n,T)]}),u=K(n,y=>y.PUSH_MODE),c=K(n,y=>Z(y,"POP_MODE"))});let f;r("Line Terminator Handling",()=>{let y=dS(e.lineTerminatorCharacters);f=K(n,T=>!1),e.positionTracking!=="onlyOffset"&&(f=K(n,T=>Z(T,"LINE_BREAKS")?!!T.LINE_BREAKS:fS(T,y)===!1&&td(y,T.PATTERN)))});let d,m,R,O;r("Misc Mapping #2",()=>{d=K(n,uS),m=K(o,SB),R=xt(n,(y,T)=>{let S=T.GROUP;return zt(S)&&S!==Dt.SKIPPED&&(y[S]=[]),y},{}),O=K(o,(y,T)=>({pattern:o[T],longerAlt:l[T],canLineTerminator:f[T],isCustom:d[T],short:m[T],group:a[T],push:u[T],pop:c[T],tokenTypeIdx:s[T],tokenType:n[T]}))});let I=!0,E=[];return e.safeMode||r("First Char Optimization",()=>{E=xt(n,(y,T,S)=>{if(typeof T.PATTERN=="string"){let M=T.PATTERN.charCodeAt(0),te=Kn(M);IT(y,te,O[S])}else if(ie(T.START_CHARS_HINT)){let M;J(T.START_CHARS_HINT,te=>{let ue=typeof te=="string"?te.charCodeAt(0):te,de=Kn(ue);M!==de&&(M=de,IT(y,de,O[S]))})}else if(dn(T.PATTERN))if(T.PATTERN.unicode)I=!1,e.ensureOptimizations&&pa(`${bl}	Unable to analyze < ${T.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let M=tS(T.PATTERN,e.ensureOptimizations);ye(M)&&(I=!1),J(M,te=>{IT(y,te,O[S])})}else e.ensureOptimizations&&pa(`${bl}	TokenType: <${T.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),I=!1;return y},[])}),{emptyGroups:R,patternIdxToConfig:O,charCodeToPatternIdxToConfig:E,hasCustom:i,canBeOptimized:I}}function oS(t,e){let r=[],n=pB(t);r=r.concat(n.errors);let i=mB(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(dB(o)),r=r.concat(xB(o)),r=r.concat(NB(o,e)),r=r.concat(OB(o)),r}function dB(t){let e=[],r=Zt(t,n=>dn(n[Mo]));return e=e.concat(gB(r)),e=e.concat(_B(r)),e=e.concat(vB(r)),e=e.concat(RB(r)),e=e.concat(TB(r)),e}function pB(t){let e=Zt(t,i=>!Z(i,Mo)),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:ct.MISSING_PATTERN,tokenTypes:[i]})),n=ro(t,e);return{errors:r,valid:n}}function mB(t){let e=Zt(t,i=>{let o=i[Mo];return!dn(o)&&!Er(o)&&!Z(o,"exec")&&!zt(o)}),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:ct.INVALID_PATTERN,tokenTypes:[i]})),n=ro(t,e);return{errors:r,valid:n}}var hB=/[^\\][$]/;function gB(t){class e extends $n{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=Zt(t,i=>{let o=i.PATTERN;try{let s=ha(o),a=new e;return a.visit(s),a.found}catch{return hB.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:ct.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function TB(t){let e=Zt(t,n=>n.PATTERN.test(""));return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:ct.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var yB=/[^\\[][\^]|^\^/;function _B(t){class e extends $n{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=Zt(t,i=>{let o=i.PATTERN;try{let s=ha(o),a=new e;return a.visit(s),a.found}catch{return yB.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:ct.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function vB(t){let e=Zt(t,n=>{let i=n[Mo];return i instanceof RegExp&&(i.multiline||i.global)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:ct.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function RB(t){let e=[],r=K(t,o=>xt(t,(s,a)=>(o.PATTERN.source===a.PATTERN.source&&!ut(e,a)&&a.PATTERN!==Dt.NA&&(e.push(a),s.push(a)),s),[]));r=jn(r);let n=Zt(r,o=>o.length>1);return K(n,o=>{let s=K(o,l=>l.name);return{message:`The same RegExp pattern ->${er(o).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:ct.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function xB(t){let e=Zt(t,n=>{if(!Z(n,"GROUP"))return!1;let i=n.GROUP;return i!==Dt.SKIPPED&&i!==Dt.NA&&!zt(i)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:ct.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function NB(t,e){let r=Zt(t,i=>i.PUSH_MODE!==void 0&&!ut(e,i.PUSH_MODE));return K(r,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:ct.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function OB(t){let e=[],r=xt(t,(n,i,o)=>{let s=i.PATTERN;return s===Dt.NA||(zt(s)?n.push({str:s,idx:o,tokenType:i}):dn(s)&&IB(s)&&n.push({str:s.source,idx:o,tokenType:i})),n},[]);return J(t,(n,i)=>{J(r,({str:o,idx:s,tokenType:a})=>{if(i<s&&EB(o,n.PATTERN)){let l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:ct.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function EB(t,e){if(dn(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(Er(e))return e(t,0,[],{});if(Z(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function IB(t){return Hn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function rS(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function nS(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function sS(t,e,r){let n=[];return Z(t,Ta)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Ta+`> property in its definition
`,type:ct.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),Z(t,rd)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+rd+`> property in its definition
`,type:ct.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),Z(t,rd)&&Z(t,Ta)&&!Z(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${Ta}: <${t.defaultMode}>which does not exist
`,type:ct.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),Z(t,rd)&&J(t.modes,(i,o)=>{J(i,(s,a)=>{if(Tr(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${a}>
`,type:ct.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(Z(s,"LONGER_ALT")){let l=ie(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];J(l,u=>{!Tr(u)&&!ut(i,u)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${s.name}> outside of mode <${o}>
`,type:ct.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function aS(t,e,r){let n=[],i=!1,o=jn(Ft(Ve(t.modes))),s=no(o,l=>l[Mo]===Dt.NA),a=dS(r);return e&&J(s,l=>{let u=fS(l,a);if(u!==!1){let f={message:AB(l,u),type:u.issue,tokenType:l};n.push(f)}else Z(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):td(a,l.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:ct.NO_LINE_BREAKS_FLAGS}),n}function lS(t){let e={},r=Xe(t);return J(r,n=>{let i=t[n];if(ie(i))e[n]=[];else throw Error("non exhaustive match")}),e}function uS(t){let e=t.PATTERN;if(dn(e))return!1;if(Er(e))return!0;if(Z(e,"exec"))return!0;if(zt(e))return!1;throw Error("non exhaustive match")}function SB(t){return zt(t)&&t.length===1?t.charCodeAt(0):!1}var cS={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function fS(t,e){if(Z(t,"LINE_BREAKS"))return!1;if(dn(t.PATTERN)){try{td(e,t.PATTERN)}catch(r){return{issue:ct.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(zt(t.PATTERN))return!1;if(uS(t))return{issue:ct.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function AB(t,e){if(e.issue===ct.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===ct.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function dS(t){return K(t,r=>zt(r)?r.charCodeAt(0):r)}function IT(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var ga=256,nd=[];function Kn(t){return t<ga?t:nd[t]}function DB(){if(ye(nd)){nd=new Array(65536);for(let t=0;t<65536;t++)nd[t]=t>255?255+~~(t/255):t}}function di(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function ya(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var pS=1,hS={};function pi(t){let e=CB(t);bB(e),kB(e),LB(e),J(e,r=>{r.isParent=r.categoryMatches.length>0})}function CB(t){let e=Qe(t),r=t,n=!0;for(;n;){r=jn(Ft(K(r,o=>o.CATEGORIES)));let i=ro(r,e);e=e.concat(i),ye(i)?n=!1:r=i}return e}function bB(t){J(t,e=>{AT(e)||(hS[pS]=e,e.tokenTypeIdx=pS++),mS(e)&&!ie(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),mS(e)||(e.CATEGORIES=[]),wB(e)||(e.categoryMatches=[]),$B(e)||(e.categoryMatchesMap={})})}function LB(t){J(t,e=>{e.categoryMatches=[],J(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(hS[n].tokenTypeIdx)})})}function kB(t){J(t,e=>{gS([],e)})}function gS(t,e){J(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),J(e.CATEGORIES,r=>{let n=t.concat(e);ut(n,r)||gS(n,r)})}function AT(t){return Z(t,"tokenTypeIdx")}function mS(t){return Z(t,"CATEGORIES")}function wB(t){return Z(t,"categoryMatches")}function $B(t){return Z(t,"categoryMatchesMap")}function TS(t){return Z(t,"tokenTypeIdx")}var DT={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var ct;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(ct||(ct={}));var Ll={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:DT,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Ll);var Dt=class{constructor(e,r=Ll){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:a,value:l}=Dl(o),u=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(`${s}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=ar({},Ll,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Ll.lineTerminatorsPattern)this.config.lineTerminatorsPattern=cS;else if(this.config.lineTerminatorCharacters===Ll.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ie(e)?i={modes:{defaultMode:Qe(e)},defaultMode:Ta}:(o=!1,i=Qe(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(sS(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(aS(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},J(i.modes,(a,l)=>{i.modes[l]=no(a,u=>Tr(u))});let s=Xe(i.modes);if(J(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(oS(a,s))}),ye(this.lexerDefinitionErrors)){pi(a);let u;this.TRACE_INIT("analyzeTokenTypes",()=>{u=iS(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=u.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=u.charCodeToPatternIdxToConfig,this.emptyGroups=ar({},this.emptyGroups,u.emptyGroups),this.hasCustom=u.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=u.canBeOptimized}})}),this.defaultMode=i.defaultMode,!ye(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=K(this.lexerDefinitionErrors,u=>u.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}J(this.lexerDefinitionWarning,a=>{Al(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(ST?(this.chopInput=Gr,this.match=this.matchWithTest):(this.updateLastIndex=Rt,this.match=this.matchWithExec),o&&(this.handleModes=Rt),this.trackStartLines===!1&&(this.computeNewColumn=Gr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=Rt),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=xt(this.canModeBeOptimized,(l,u,c)=>(u===!1&&l.push(c),l),[]);if(r.ensureOptimizations&&!ye(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{QI()}),this.TRACE_INIT("toFastProperties",()=>{Cl(this)})})}tokenize(e,r=this.defaultMode){if(!ye(this.lexerDefinitionErrors)){let i=K(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,i,o,s,a,l,u,c,f,d,m,R,O,I,E,y,T=e,S=T.length,M=0,te=0,ue=this.hasCustom?0:Math.floor(e.length/10),de=new Array(ue),_e=[],ve=this.trackStartLines?1:void 0,G=this.trackStartLines?1:void 0,k=lS(this.emptyGroups),j=this.trackStartLines,H=this.config.lineTerminatorsPattern,le=0,se=[],V=[],U=[],xe=[];Object.freeze(xe);let Ne;function Ce(){return se}function nr(pt){let Ht=Kn(pt),Lt=V[Ht];return Lt===void 0?xe:Lt}let Ni=pt=>{if(U.length===1&&pt.tokenType.PUSH_MODE===void 0){let Ht=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(pt);_e.push({offset:pt.startOffset,line:pt.startLine,column:pt.startColumn,length:pt.image.length,message:Ht})}else{U.pop();let Ht=qn(U);se=this.patternIdxToConfig[Ht],V=this.charCodeToPatternIdxToConfig[Ht],le=se.length;let Lt=this.canModeBeOptimized[Ht]&&this.config.safeMode===!1;V&&Lt?Ne=nr:Ne=Ce}};function je(pt){U.push(pt),V=this.charCodeToPatternIdxToConfig[pt],se=this.patternIdxToConfig[pt],le=se.length,le=se.length;let Ht=this.canModeBeOptimized[pt]&&this.config.safeMode===!1;V&&Ht?Ne=nr:Ne=Ce}je.call(this,r);let qt,Zn=this.config.recoveryEnabled;for(;M<S;){l=null;let pt=T.charCodeAt(M),Ht=Ne(pt),Lt=Ht.length;for(n=0;n<Lt;n++){qt=Ht[n];let kt=qt.pattern;u=null;let mt=qt.short;if(mt!==!1?pt===mt&&(l=kt):qt.isCustom===!0?(y=kt.exec(T,M,de,k),y!==null?(l=y[0],y.payload!==void 0&&(u=y.payload)):l=null):(this.updateLastIndex(kt,M),l=this.match(kt,e,M)),l!==null){if(a=qt.longerAlt,a!==void 0){let ht=a.length;for(o=0;o<ht;o++){let cr=se[a[o]],vr=cr.pattern;if(c=null,cr.isCustom===!0?(y=vr.exec(T,M,de,k),y!==null?(s=y[0],y.payload!==void 0&&(c=y.payload)):s=null):(this.updateLastIndex(vr,M),s=this.match(vr,e,M)),s&&s.length>l.length){l=s,u=c,qt=cr;break}}}break}}if(l!==null){if(f=l.length,d=qt.group,d!==void 0&&(m=qt.tokenTypeIdx,R=this.createTokenInstance(l,M,m,qt.tokenType,ve,G,f),this.handlePayload(R,u),d===!1?te=this.addToken(de,te,R):k[d].push(R)),e=this.chopInput(e,f),M=M+f,G=this.computeNewColumn(G,f),j===!0&&qt.canLineTerminator===!0){let kt=0,mt,ht;H.lastIndex=0;do mt=H.test(l),mt===!0&&(ht=H.lastIndex-1,kt++);while(mt===!0);kt!==0&&(ve=ve+kt,G=f-ht,this.updateTokenEndLineColumnLocation(R,d,ht,kt,ve,G,f))}this.handleModes(qt,Ni,je,R)}else{let kt=M,mt=ve,ht=G,cr=Zn===!1;for(;cr===!1&&M<S;)for(e=this.chopInput(e,1),M++,i=0;i<le;i++){let vr=se[i],Yr=vr.pattern,ei=vr.short;if(ei!==!1?T.charCodeAt(M)===ei&&(cr=!0):vr.isCustom===!0?cr=Yr.exec(T,M,de,k)!==null:(this.updateLastIndex(Yr,M),cr=Yr.exec(e)!==null),cr===!0)break}if(O=M-kt,G=this.computeNewColumn(G,O),E=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(T,kt,O,mt,ht),_e.push({offset:kt,line:mt,column:ht,length:O,message:E}),Zn===!1)break}}return this.hasCustom||(de.length=te),{tokens:de,groups:k,errors:_e}}handleModes(e,r,n,i){if(e.pop===!0){let o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,i,o,s,a){let l,u;r!==void 0&&(l=n===a-1,u=l?-1:0,i===1&&l===!0||(e.endLine=o+u,e.endColumn=s-1+-u))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}}createStartOnlyToken(e,r,n,i,o,s){return{image:e,startOffset:r,startLine:o,startColumn:s,tokenTypeIdx:n,tokenType:i}}createFullToken(e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:o,endLine:o,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:i}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};Dt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";Dt.NA=/NOT_APPLICABLE/;function mi(t){return CT(t)?t.LABEL:t.name}function CT(t){return zt(t.LABEL)&&t.LABEL!==""}var PB="parent",yS="categories",_S="label",vS="group",RS="push_mode",xS="pop_mode",NS="longer_alt",OS="line_breaks",ES="start_chars_hint";function id(t){return MB(t)}function MB(t){let e=t.pattern,r={};if(r.name=t.name,Tr(e)||(r.PATTERN=e),Z(t,PB))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return Z(t,yS)&&(r.CATEGORIES=t[yS]),pi([r]),Z(t,_S)&&(r.LABEL=t[_S]),Z(t,vS)&&(r.GROUP=t[vS]),Z(t,xS)&&(r.POP_MODE=t[xS]),Z(t,RS)&&(r.PUSH_MODE=t[RS]),Z(t,NS)&&(r.LONGER_ALT=t[NS]),Z(t,OS)&&(r.LINE_BREAKS=t[OS]),Z(t,ES)&&(r.START_CHARS_HINT=t[ES]),r}var tn=id({name:"EOF",pattern:Dt.NA});pi([tn]);function Fo(t,e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function kl(t,e){return di(t,e)}var hi={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${CT(t)?`--> ${mi(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:i}){let o="Expecting: ",a=`
but found: '`+er(e).image+"'";if(n)return o+n+a;{let l=xt(t,(d,m)=>d.concat(m),[]),u=K(l,d=>`[${K(d,m=>mi(m)).join(", ")}]`),f=`one of these possible Token sequences:
${K(u,(d,m)=>`  ${m+1}. ${d}`).join(`
`)}`;return o+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let i="Expecting: ",s=`
but found: '`+er(e).image+"'";if(r)return i+r+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${K(t,u=>`[${K(u,c=>mi(c)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(hi);var IS={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},En={buildDuplicateFoundError(t,e){function r(c){return c instanceof Re?c.terminalType.name:c instanceof Me?c.nonTerminalName:""}let n=t.name,i=er(e),o=i.idx,s=Kr(i),a=r(i),l=o>0,u=`->${s}${l?o:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return u=u.replace(/[ \t]+/g," "),u=u.replace(/\s\s+/g,`
`),u},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=K(t.prefixPath,i=>mi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=K(t.prefixPath,i=>mi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=Kr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=K(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Ir?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function SS(t,e){let r=new bT(t,e);return r.resolveRefs(),r.errors}var bT=class extends Sr{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){J(Ve(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:Yt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var LT=class extends fi{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Qe(this.path.ruleStack).reverse(),this.occurrenceStack=Qe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let i=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){ye(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},od=class extends LT{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let i=r.concat(n),o=new Ze({definition:i});this.possibleTokTypes=Po(o),this.found=!0}}},_a=class extends fi{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},sd=class extends _a{walkMany(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,r,n)}},wl=class extends _a{walkManySep(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,r,n)}},ad=class extends _a{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,r,n)}},$l=class extends _a{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,r,n)}};function ld(t,e,r=[]){r=Qe(r);let n=[],i=0;function o(a){return a.concat(Ut(t,i+1))}function s(a){let l=ld(o(a),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){let a=t[i];if(a instanceof Ze)return s(a.definition);if(a instanceof Me)return s(a.definition);if(a instanceof Fe)n=s(a.definition);else if(a instanceof et){let l=a.definition.concat([new Ae({definition:a.definition})]);return s(l)}else if(a instanceof tt){let l=[new Ze({definition:a.definition}),new Ae({definition:[new Re({terminalType:a.separator})].concat(a.definition)})];return s(l)}else if(a instanceof He){let l=a.definition.concat([new Ae({definition:[new Re({terminalType:a.separator})].concat(a.definition)})]);n=s(l)}else if(a instanceof Ae){let l=a.definition.concat([new Ae({definition:a.definition})]);n=s(l)}else{if(a instanceof Ke)return J(a.definition,l=>{ye(l.definition)===!1&&(n=s(l.definition))}),n;if(a instanceof Re)r.push(a.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:Ut(t,i)}),n}function ud(t,e,r,n){let i="EXIT_NONE_TERMINAL",o=[i],s="EXIT_ALTERNATIVE",a=!1,l=e.length,u=l-n-1,c=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ye(f);){let d=f.pop();if(d===s){a&&qn(f).idx<=u&&f.pop();continue}let m=d.def,R=d.idx,O=d.ruleStack,I=d.occurrenceStack;if(ye(m))continue;let E=m[0];if(E===i){let y={idx:R,def:Ut(m),ruleStack:ci(O),occurrenceStack:ci(I)};f.push(y)}else if(E instanceof Re)if(R<l-1){let y=R+1,T=e[y];if(r(T,E.terminalType)){let S={idx:y,def:Ut(m),ruleStack:O,occurrenceStack:I};f.push(S)}}else if(R===l-1)c.push({nextTokenType:E.terminalType,nextTokenOccurrence:E.idx,ruleStack:O,occurrenceStack:I}),a=!0;else throw Error("non exhaustive match");else if(E instanceof Me){let y=Qe(O);y.push(E.nonTerminalName);let T=Qe(I);T.push(E.idx);let S={idx:R,def:E.definition.concat(o,Ut(m)),ruleStack:y,occurrenceStack:T};f.push(S)}else if(E instanceof Fe){let y={idx:R,def:Ut(m),ruleStack:O,occurrenceStack:I};f.push(y),f.push(s);let T={idx:R,def:E.definition.concat(Ut(m)),ruleStack:O,occurrenceStack:I};f.push(T)}else if(E instanceof et){let y=new Ae({definition:E.definition,idx:E.idx}),T=E.definition.concat([y],Ut(m)),S={idx:R,def:T,ruleStack:O,occurrenceStack:I};f.push(S)}else if(E instanceof tt){let y=new Re({terminalType:E.separator}),T=new Ae({definition:[y].concat(E.definition),idx:E.idx}),S=E.definition.concat([T],Ut(m)),M={idx:R,def:S,ruleStack:O,occurrenceStack:I};f.push(M)}else if(E instanceof He){let y={idx:R,def:Ut(m),ruleStack:O,occurrenceStack:I};f.push(y),f.push(s);let T=new Re({terminalType:E.separator}),S=new Ae({definition:[T].concat(E.definition),idx:E.idx}),M=E.definition.concat([S],Ut(m)),te={idx:R,def:M,ruleStack:O,occurrenceStack:I};f.push(te)}else if(E instanceof Ae){let y={idx:R,def:Ut(m),ruleStack:O,occurrenceStack:I};f.push(y),f.push(s);let T=new Ae({definition:E.definition,idx:E.idx}),S=E.definition.concat([T],Ut(m)),M={idx:R,def:S,ruleStack:O,occurrenceStack:I};f.push(M)}else if(E instanceof Ke)for(let y=E.definition.length-1;y>=0;y--){let T=E.definition[y],S={idx:R,def:T.definition.concat(Ut(m)),ruleStack:O,occurrenceStack:I};f.push(S),f.push(s)}else if(E instanceof Ze)f.push({idx:R,def:E.definition.concat(Ut(m)),ruleStack:O,occurrenceStack:I});else if(E instanceof Ir)f.push(FB(E,R,O,I));else throw Error("non exhaustive match")}return c}function FB(t,e,r,n){let i=Qe(r);i.push(t.name);let o=Qe(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}var ft;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(ft||(ft={}));function Pl(t){if(t instanceof Fe||t==="Option")return ft.OPTION;if(t instanceof Ae||t==="Repetition")return ft.REPETITION;if(t instanceof et||t==="RepetitionMandatory")return ft.REPETITION_MANDATORY;if(t instanceof tt||t==="RepetitionMandatoryWithSeparator")return ft.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof He||t==="RepetitionWithSeparator")return ft.REPETITION_WITH_SEPARATOR;if(t instanceof Ke||t==="Alternation")return ft.ALTERNATION;throw Error("non exhaustive match")}function fd(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:i}=t,o=Pl(n);return o===ft.ALTERNATION?va(e,r,i):Ra(e,r,o,i)}function DS(t,e,r,n,i,o){let s=va(t,e,r),a=$S(s)?ya:di;return o(s,n,a,i)}function CS(t,e,r,n,i,o){let s=Ra(t,e,i,r),a=$S(s)?ya:di;return o(s[0],a,n)}function bS(t,e,r,n){let i=t.length,o=gr(t,s=>gr(s,a=>a.length===1));if(e)return function(s){let a=K(s,l=>l.GATE);for(let l=0;l<i;l++){let u=t[l],c=u.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let d=0;d<c;d++){let m=u[d],R=m.length;for(let O=0;O<R;O++){let I=this.LA(O+1);if(r(I,m[O])===!1)continue e}return l}}};if(o&&!n){let s=K(t,l=>Ft(l)),a=xt(s,(l,u,c)=>(J(u,f=>{Z(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=c),J(f.categoryMatches,d=>{Z(l,d)||(l[d]=c)})}),l),{});return function(){let l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let a=t[s],l=a.length;e:for(let u=0;u<l;u++){let c=a[u],f=c.length;for(let d=0;d<f;d++){let m=this.LA(d+1);if(r(m,c[d])===!1)continue e}return s}}}}function LS(t,e,r){let n=gr(t,o=>o.length===1),i=t.length;if(n&&!r){let o=Ft(t);if(o.length===1&&ye(o[0].categoryMatches)){let a=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=xt(o,(a,l,u)=>(a[l.tokenTypeIdx]=!0,J(l.categoryMatches,c=>{a[c]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<i;o++){let s=t[o],a=s.length;for(let l=0;l<a;l++){let u=this.LA(l+1);if(e(u,s[l])===!1)continue e}return!0}return!1}}var wT=class extends fi{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,i){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(i),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,ft.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,ft.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,ft.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,ft.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,ft.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},cd=class extends Sr{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,ft.OPTION)}visitRepetition(e){this.checkIsTarget(e,ft.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,ft.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,ft.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,ft.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,ft.ALTERNATION)}};function AS(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function kT(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],i=[];for(let o=0;o<e.length;o++){let s=e[o];i.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let l="_"+n.categoryMatches[a];i.push(s+l)}}e=i}return e}function UB(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let i=t[n];for(let o=0;o<e.length;o++){let s=e[o];if(i[s]===!0)return!1}}return!0}function kS(t,e){let r=K(t,s=>ld([s],1)),n=AS(r.length),i=K(r,s=>{let a={};return J(s,l=>{let u=kT(l.partialPath);J(u,c=>{a[c]=!0})}),a}),o=r;for(let s=1;s<=e;s++){let a=o;o=AS(a.length);for(let l=0;l<a.length;l++){let u=a[l];for(let c=0;c<u.length;c++){let f=u[c].partialPath,d=u[c].suffixDef,m=kT(f);if(UB(i,m,l)||ye(d)||f.length===e){let O=n[l];if(dd(O,f)===!1){O.push(f);for(let I=0;I<m.length;I++){let E=m[I];i[l][E]=!0}}}else{let O=ld(d,s+1,f);o[l]=o[l].concat(O),J(O,I=>{let E=kT(I.partialPath);J(E,y=>{i[l][y]=!0})})}}}}return n}function va(t,e,r,n){let i=new cd(t,ft.ALTERNATION,n);return e.accept(i),kS(i.result,r)}function Ra(t,e,r,n){let i=new cd(t,r);e.accept(i);let o=i.result,a=new wT(e,t,r).startWalking(),l=new Ze({definition:o}),u=new Ze({definition:a});return kS([l,u],n)}function dd(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let i=0;i<n.length;i++){let o=e[i],s=n[i];if((o===s||s.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function wS(t,e){return t.length<e.length&&gr(t,(r,n)=>{let i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}function $S(t){return gr(t,e=>gr(e,r=>gr(r,n=>ye(n.categoryMatches))))}function PS(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return K(e,r=>Object.assign({type:Yt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function MS(t,e,r,n){let i=lr(t,l=>BB(l,r)),o=HB(t,e,r),s=lr(t,l=>GB(l,r)),a=lr(t,l=>VB(l,t,n,r));return i.concat(o,s,a)}function BB(t,e){let r=new $T;t.accept(r);let n=r.allProductions,i=_T(n,WB),o=Hr(i,a=>a.length>1);return K(Ve(o),a=>{let l=er(a),u=e.buildDuplicateFoundError(t,a),c=Kr(l),f={message:u,type:Yt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:l.idx},d=FS(l);return d&&(f.parameter=d),f})}function WB(t){return`${Kr(t)}_#_${t.idx}_#_${FS(t)}`}function FS(t){return t instanceof Re?t.terminalType.name:t instanceof Me?t.nonTerminalName:""}var $T=class extends Sr{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function VB(t,e,r,n){let i=[];if(xt(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:s,type:Yt.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function US(t,e,r){let n=[],i;return ut(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:i,type:Yt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function MT(t,e,r,n=[]){let i=[],o=pd(e.definition);if(ye(o))return[];{let s=t.name;ut(o,t)&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:Yt.LEFT_RECURSION,ruleName:s});let l=ro(o,n.concat([t])),u=lr(l,c=>{let f=Qe(n);return f.push(c),MT(t,c,r,f)});return i.concat(u)}}function pd(t){let e=[];if(ye(t))return e;let r=er(t);if(r instanceof Me)e.push(r.referencedRule);else if(r instanceof Ze||r instanceof Fe||r instanceof et||r instanceof tt||r instanceof He||r instanceof Ae)e=e.concat(pd(r.definition));else if(r instanceof Ke)e=Ft(K(r.definition,o=>pd(o.definition)));else if(!(r instanceof Re))throw Error("non exhaustive match");let n=$o(r),i=t.length>1;if(n&&i){let o=Ut(t);return e.concat(pd(o))}else return e}var Ml=class extends Sr{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function BS(t,e){let r=new Ml;t.accept(r);let n=r.alternations;return lr(n,o=>{let s=ci(o.definition);return lr(s,(a,l)=>{let u=ud([a],[],di,1);return ye(u)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:l}),type:Yt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:l+1}]:[]})})}function WS(t,e,r){let n=new Ml;t.accept(n);let i=n.alternations;return i=no(i,s=>s.ignoreAmbiguities===!0),lr(i,s=>{let a=s.idx,l=s.maxLookahead||e,u=va(a,t,l,s),c=jB(u,s,t,r),f=qB(u,s,t,r);return c.concat(f)})}var PT=class extends Sr{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function GB(t,e){let r=new Ml;t.accept(r);let n=r.alternations;return lr(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:Yt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function VS(t,e,r){let n=[];return J(t,i=>{let o=new PT;i.accept(o);let s=o.allProductions;J(s,a=>{let l=Pl(a),u=a.maxLookahead||e,c=a.idx,d=Ra(c,i,l,u)[0];if(ye(Ft(d))){let m=r.buildEmptyRepetitionError({topLevelRule:i,repetition:a});n.push({message:m,type:Yt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}function jB(t,e,r,n){let i=[],o=xt(t,(a,l,u)=>(e.definition[u].ignoreAmbiguities===!0||J(l,c=>{let f=[u];J(t,(d,m)=>{u!==m&&dd(d,c)&&e.definition[m].ignoreAmbiguities!==!0&&f.push(m)}),f.length>1&&!dd(i,c)&&(i.push(c),a.push({alts:f,path:c}))}),a),[]);return K(o,a=>{let l=K(a.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:Yt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function qB(t,e,r,n){let i=xt(t,(s,a,l)=>{let u=K(a,c=>({idx:l,path:c}));return s.concat(u)},[]);return jn(lr(i,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,u=s.path,c=Zt(i,d=>e.definition[d.idx].ignoreAmbiguities!==!0&&d.idx<l&&wS(d.path,u));return K(c,d=>{let m=[d.idx+1,l+1],R=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:m,prefixPath:d.path}),type:Yt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:R,alternatives:m}})}))}function HB(t,e,r){let n=[],i=K(e,o=>o.name);return J(t,o=>{let s=o.name;if(ut(i,s)){let a=r.buildNamespaceConflictError(o);n.push({message:a,type:Yt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function GS(t){let e=fa(t,{errMsgProvider:IS}),r={};return J(t.rules,n=>{r[n.name]=n}),SS(r,e.errMsgProvider)}function jS(t){return t=fa(t,{errMsgProvider:En}),MS(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var qS="MismatchedTokenException",HS="NoViableAltException",KS="EarlyExitException",zS="NotAllInputParsedException",YS=[qS,HS,KS,zS];Object.freeze(YS);function io(t){return ut(YS,t.name)}var xa=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Uo=class extends xa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=qS}},Fl=class extends xa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=HS}},Ul=class extends xa{constructor(e,r){super(e,r),this.name=zS}},Bl=class extends xa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=KS}};var FT={},BT="InRuleRecoveryException",UT=class extends Error{constructor(e){super(e),this.name=BT}},md=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=Z(e,"recoveryEnabled")?e.recoveryEnabled:Ar.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=KB)}getTokenToInsert(e){let r=Fo(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,i){let o=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],l=!1,u=this.LA(1),c=this.LA(1),f=()=>{let d=this.LA(0),m=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:u,previous:d,ruleName:this.getCurrRuleFullName()}),R=new Uo(m,u,this.LA(0));R.resyncedTokens=ci(a),this.SAVE_ERROR(R)};for(;!l;)if(this.tokenMatcher(c,i)){f();return}else if(n.call(this)){f(),e.apply(this,r);return}else this.tokenMatcher(c,o)?l=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new UT("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||ye(r))return!1;let n=this.LA(1);return Hn(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return ut(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let i=Hn(e,o=>kl(r,o));if(i!==void 0)return i;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return FT;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return K(e,(n,i)=>i===0?FT:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){let e=K(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return Ft(e)}getFollowSetFromFollowKey(e){if(e===FT)return[tn];let r=e.ruleName+e.idxInCallingRule+Qf+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,tn)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return ci(r)}attemptInRepetitionRecovery(e,r,n,i,o,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),i=Qe(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return K(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function KB(t,e,r,n,i,o,s){let a=this.getKeyForAutomaticLookahead(n,i),l=this.firstAfterRepMap[a];if(l===void 0){let d=this.getCurrRuleFullName(),m=this.getGAstProductions()[d];l=new o(m,i).startWalking(),this.firstAfterRepMap[a]=l}let u=l.token,c=l.occurrence,f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&u===void 0&&(u=tn,c=1),!(u===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(u,c,s)&&this.tryInRepetitionRecovery(t,e,r,u)}function hd(t,e,r){return r|e|t}var gi=class{constructor(e){var r;this.maxLookahead=(r=e==null?void 0:e.maxLookahead)!==null&&r!==void 0?r:Ar.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(ye(r)){let n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...i,...o]}return r}validateNoLeftRecursion(e){return lr(e,r=>MT(r,r,En))}validateEmptyOrAlternatives(e){return lr(e,r=>BS(r,En))}validateAmbiguousAlternationAlternatives(e,r){return lr(e,n=>WS(n,r,En))}validateSomeNonEmptyLookaheadPath(e,r){return VS(e,r,En)}buildLookaheadForAlternation(e){return DS(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,bS)}buildLookaheadForOptional(e){return CS(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,Pl(e.prodType),LS)}};var Td=class{initLooksAhead(e){this.dynamicTokensEnabled=Z(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Ar.dynamicTokensEnabled,this.maxLookahead=Z(e,"maxLookahead")?e.maxLookahead:Ar.maxLookahead,this.lookaheadStrategy=Z(e,"lookaheadStrategy")?e.lookaheadStrategy:new gi({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){J(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:i,option:o,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=zB(r);J(n,u=>{let c=u.idx===0?"":u.idx;this.TRACE_INIT(`${Kr(u)}${c}`,()=>{let f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:u.idx,rule:r,maxLookahead:u.maxLookahead||this.maxLookahead,hasPredicates:u.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),d=hd(this.fullRuleNameToShort[r.name],256,u.idx);this.setLaFuncCache(d,f)})}),J(i,u=>{this.computeLookaheadFunc(r,u.idx,768,"Repetition",u.maxLookahead,Kr(u))}),J(o,u=>{this.computeLookaheadFunc(r,u.idx,512,"Option",u.maxLookahead,Kr(u))}),J(s,u=>{this.computeLookaheadFunc(r,u.idx,1024,"RepetitionMandatory",u.maxLookahead,Kr(u))}),J(a,u=>{this.computeLookaheadFunc(r,u.idx,1536,"RepetitionMandatoryWithSeparator",u.maxLookahead,Kr(u))}),J(l,u=>{this.computeLookaheadFunc(r,u.idx,1280,"RepetitionWithSeparator",u.maxLookahead,Kr(u))})})})}computeLookaheadFunc(e,r,n,i,o,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=hd(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return hd(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},WT=class extends Sr{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},gd=new WT;function zB(t){gd.reset(),t.accept(gd);let e=gd.dslMethods;return gd.reset(),e}function jT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function qT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function XS(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function JS(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var YB="name";function HT(t,e){Object.defineProperty(t,YB,{enumerable:!1,configurable:!0,writable:!1,value:e})}function XB(t,e){let r=Xe(t),n=r.length;for(let i=0;i<n;i++){let o=r[i],s=t[o],a=s.length;for(let l=0;l<a;l++){let u=s[l];u.tokenTypeIdx===void 0&&this[u.name](u.children,e)}}}function QS(t,e){let r=function(){};HT(r,t+"BaseSemantics");let n={visit:function(i,o){if(ie(i)&&(i=i[0]),!Tr(i))return this[i.name](i.children,o)},validateVisitor:function(){let i=JB(this,e);if(!ye(i)){let o=K(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function ZS(t,e,r){let n=function(){};HT(n,t+"BaseSemanticsWithDefaults");let i=Object.create(r.prototype);return J(e,o=>{i[o]=XB}),n.prototype=i,n.prototype.constructor=n,n}var KT;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(KT||(KT={}));function JB(t,e){return QB(t,e)}function QB(t,e){let r=Zt(e,i=>Er(t[i])===!1),n=K(r,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:KT.MISSING_METHOD,methodName:i}));return jn(n)}var Rd=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=Z(e,"nodeLocationTracking")?e.nodeLocationTracking:Ar.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Rt,this.cstFinallyStateUpdate=Rt,this.cstPostTerminal=Rt,this.cstPostNonTerminal=Rt,this.cstPostRule=Rt;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=qT,this.setNodeLocationFromNode=qT,this.cstPostRule=Rt,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Rt,this.setNodeLocationFromNode=Rt,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=jT,this.setNodeLocationFromNode=jT,this.cstPostRule=Rt,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Rt,this.setNodeLocationFromNode=Rt,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Rt,this.setNodeLocationFromNode=Rt,this.cstPostRule=Rt,this.setInitialNodeLocation=Rt;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];XS(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];JS(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(Tr(this.baseCstVisitorConstructor)){let e=QS(this.className,Xe(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(Tr(this.baseCstVisitorWithDefaultsConstructor)){let e=ZS(this.className,Xe(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var xd=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Na}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Na:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Nd=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Oa){if(ut(this.definedRulesNames,e)){let s={message:En.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:Yt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let i=this.defineRule(e,r,n);return this[e]=i,i}OVERRIDE_RULE(e,r,n=Oa){let i=US(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(io(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Jf(Ve(this.gastProductionsCache))}};var Od=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=ya,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},Z(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ie(e)){if(ye(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ie(e))this.tokensMap=xt(e,(o,s)=>(o[s.name]=s,o),{});else if(Z(e,"modes")&&gr(Ft(Ve(e.modes)),TS)){let o=Ft(Ve(e.modes)),s=da(o);this.tokensMap=xt(s,(a,l)=>(a[l.name]=l,a),{})}else if(vt(e))this.tokensMap=Qe(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=tn;let n=Z(e,"modes")?Ft(Ve(e.modes)):Ve(e),i=gr(n,o=>ye(o.categoryMatches));this.tokenMatcher=i?ya:di,pi(Ve(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=Z(n,"resyncEnabled")?n.resyncEnabled:Oa.resyncEnabled,o=Z(n,"recoveryValueFunc")?n.recoveryValueFunc:Oa.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...c){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c);let f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}}:a=function(...c){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c)}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(io(e)){let s=e;if(o){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return n(e);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let s=e.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=e;if(i.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=r;if(i.call(this)===!0){let s=this.doSingleRepetition(o);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,ft.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],i,1024,e,ad)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,$l],a,1536,e,$l)}else throw this.raiseEarlyExitException(e,ft.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let a=r.GATE;if(a!==void 0){let l=i;i=()=>a.call(this)&&l.call(this)}}else o=r;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],i,768,e,sd,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,wl],a,1280,e,wl)}}repetitionSepSecondInternal(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),i=ie(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Ul(r,e))}}subruleInternal(e,r,n){let i;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw io(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let i;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i}consumeInternalError(e,r,n){let i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Uo(i,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===BT?n:o}}else throw n}saveRecogState(){let e=this.errors,r=Qe(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),tn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var Ed=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=Z(e,"errorMessageProvider")?e.errorMessageProvider:Ar.errorMessageProvider}SAVE_ERROR(e){if(io(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Qe(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Qe(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=Ra(e,o,r,this.maxLookahead)[0],l=[];for(let c=1;c<=this.maxLookahead;c++)l.push(this.LA(c));let u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new Bl(u,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=va(e,i,this.maxLookahead),s=[];for(let u=1;u<=this.maxLookahead;u++)s.push(this.LA(u));let a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new Fl(l,this.LA(1),a))}};var Id=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(Tr(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return ud([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=er(e.ruleStack),i=this.getGAstProductions()[r];return new od(i,e).startWalking()}};var Dd={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Dd);var eA=!0,tA=Math.pow(2,8)-1,nA=id({name:"RECORDING_PHASE_TOKEN",pattern:Dt.NA});pi([nA]);var iA=Fo(nA,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(iA);var eW={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Sd=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,i){return this.consumeInternalRecord(n,e,i)},this[`SUBRULE${r}`]=function(n,i){return this.subruleInternalRecord(n,e,i)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Na}topLevelRuleRecord(e,r){try{let n=new Ir({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return Vl.call(this,Fe,e,r)}atLeastOneInternalRecord(e,r){Vl.call(this,et,r,e)}atLeastOneSepFirstInternalRecord(e,r){Vl.call(this,tt,r,e,eA)}manyInternalRecord(e,r){Vl.call(this,Ae,r,e)}manySepFirstInternalRecord(e,r){Vl.call(this,He,r,e,eA)}orInternalRecord(e,r){return tW.call(this,e,r)}subruleInternalRecord(e,r,n){if(Ad(r),!e||Z(e,"ruleName")===!1){let a=new Error(`<SUBRULE${rA(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let i=qn(this.recordingProdStack),o=e.ruleName,s=new Me({idx:r,nonTerminalName:o,label:n==null?void 0:n.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?eW:Dd}consumeInternalRecord(e,r,n){if(Ad(r),!AT(e)){let s=new Error(`<CONSUME${rA(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=qn(this.recordingProdStack),o=new Re({idx:r,terminalType:e,label:n==null?void 0:n.LABEL});return i.definition.push(o),iA}};function Vl(t,e,r,n=!1){Ad(r);let i=qn(this.recordingProdStack),o=Er(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),Z(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),o.call(this),i.definition.push(s),this.recordingProdStack.pop(),Dd}function tW(t,e){Ad(e);let r=qn(this.recordingProdStack),n=ie(t)===!1,i=n===!1?t:t.DEF,o=new Ke({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});Z(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let s=Sl(i,a=>Er(a.GATE));return o.hasPredicates=s,r.definition.push(o),J(i,a=>{let l=new Ze({definition:[]});o.definition.push(l),Z(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:Z(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),Dd}function rA(t){return t===0?"":`${t}`}function Ad(t){if(t<0||t>tA){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${tA+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var Cd=class{initPerformanceTracer(e){if(Z(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Ar.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:i,value:o}=Dl(r),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,o}else return r()}};function oA(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(i=>{if(i==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]})})}var Na=Fo(tn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Na);var Ar=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:hi,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Oa=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),Yt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Yt||(Yt={}));function bd(t=void 0){return function(){return t}}var Gl=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{Cl(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),J(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=GS({rules:Ve(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(ye(n)&&this.skipValidations===!1){let i=jS({rules:Ve(this.gastProductionsCache),tokenTypes:Ve(this.tokensMap),errMsgProvider:En,grammarName:r}),o=PS({lookaheadStrategy:this.lookaheadStrategy,rules:Ve(this.gastProductionsCache),tokenTypes:Ve(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(i,o)}}),ye(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=JI(Ve(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,o;(o=(i=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(i,{rules:Ve(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Ve(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!ye(this.definitionErrors))throw e=K(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),Z(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=Z(r,"skipValidations")?r.skipValidations:Ar.skipValidations}};Gl.DEFER_DEFINITION_ERRORS_HANDLING=!1;oA(Gl,[md,Td,Rd,xd,Od,Nd,Ed,Id,Sd,Cd]);var jl=class extends Gl{constructor(e,r=Ar){let n=Qe(r);n.outputCst=!1,super(e,n)}};function Bo(t,e,r){return`${t.name}_${e}_${r}`}var oo=1,nW=2,sA=4,aA=5;var Sa=7,iW=8,oW=9,sW=10,aW=11,lA=12,ql=class{constructor(e){this.target=e}isEpsilon(){return!1}},Ea=class extends ql{constructor(e,r){super(e),this.tokenType=r}},Hl=class extends ql{constructor(e){super(e)}isEpsilon(){return!0}},Ia=class extends ql{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function uA(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};lW(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=Wo(e,i,i);o!==void 0&&_W(e,i,o)}return e}function lW(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=tr(t,i,void 0,{type:nW}),s=tr(t,i,void 0,{type:Sa});o.stop=s,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,s)}}function cA(t,e,r){return r instanceof Re?YT(t,e,r.terminalType,r):r instanceof Me?yW(t,e,r):r instanceof Ke?pW(t,e,r):r instanceof Fe?mW(t,e,r):r instanceof Ae?uW(t,e,r):r instanceof He?cW(t,e,r):r instanceof et?fW(t,e,r):r instanceof tt?dW(t,e,r):Wo(t,e,r)}function uW(t,e,r){let n=tr(t,e,r,{type:aA});so(t,n);let i=Aa(t,e,n,r,Wo(t,e,r));return dA(t,e,r,i)}function cW(t,e,r){let n=tr(t,e,r,{type:aA});so(t,n);let i=Aa(t,e,n,r,Wo(t,e,r)),o=YT(t,e,r.separator,r);return dA(t,e,r,i,o)}function fW(t,e,r){let n=tr(t,e,r,{type:sA});so(t,n);let i=Aa(t,e,n,r,Wo(t,e,r));return fA(t,e,r,i)}function dW(t,e,r){let n=tr(t,e,r,{type:sA});so(t,n);let i=Aa(t,e,n,r,Wo(t,e,r)),o=YT(t,e,r.separator,r);return fA(t,e,r,i,o)}function pW(t,e,r){let n=tr(t,e,r,{type:oo});so(t,n);let i=K(r.definition,s=>cA(t,e,s));return Aa(t,e,n,r,...i)}function mW(t,e,r){let n=tr(t,e,r,{type:oo});so(t,n);let i=Aa(t,e,n,r,Wo(t,e,r));return hW(t,e,r,i)}function Wo(t,e,r){let n=Zt(K(r.definition,i=>cA(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:TW(t,n)}function fA(t,e,r,n,i){let o=n.left,s=n.right,a=tr(t,e,r,{type:aW});so(t,a);let l=tr(t,e,r,{type:lA});return o.loopback=a,l.loopback=a,t.decisionMap[Bo(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,jt(s,a),i===void 0?(jt(a,o),jt(a,l)):(jt(a,l),jt(a,i.left),jt(i.right,o)),{left:o,right:l}}function dA(t,e,r,n,i){let o=n.left,s=n.right,a=tr(t,e,r,{type:sW});so(t,a);let l=tr(t,e,r,{type:lA}),u=tr(t,e,r,{type:oW});return a.loopback=u,l.loopback=u,jt(a,o),jt(a,l),jt(s,u),i!==void 0?(jt(u,l),jt(u,i.left),jt(i.right,o)):jt(u,a),t.decisionMap[Bo(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:l}}function hW(t,e,r,n){let i=n.left,o=n.right;return jt(i,o),t.decisionMap[Bo(e,"Option",r.idx)]=i,n}function so(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Aa(t,e,r,n,...i){let o=tr(t,e,n,{type:iW,start:r});r.end=o;for(let a of i)a!==void 0?(jt(r,a.left),jt(a.right,o)):jt(r,o);let s={left:r,right:o};return t.decisionMap[Bo(e,gW(n),n.idx)]=r,s}function gW(t){if(t instanceof Ke)return"Alternation";if(t instanceof Fe)return"Option";if(t instanceof Ae)return"Repetition";if(t instanceof He)return"RepetitionWithSeparator";if(t instanceof et)return"RepetitionMandatory";if(t instanceof tt)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function TW(t,e){let r=e.length;for(let o=0;o<r-1;o++){let s=e[o],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let l=a instanceof Ia,u=a,c=e[o+1].left;s.left.type===oo&&s.right.type===oo&&a!==void 0&&(l&&u.followState===s.right||a.target===s.right)?(l?u.followState=c:a.target=c,vW(t,s.right)):jt(s.right,c)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function YT(t,e,r,n){let i=tr(t,e,n,{type:oo}),o=tr(t,e,n,{type:oo});return XT(i,new Ea(o,r)),{left:i,right:o}}function yW(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=tr(t,e,r,{type:oo}),s=tr(t,e,r,{type:oo}),a=new Ia(i,n,s);return XT(o,a),{left:o,right:s}}function _W(t,e,r){let n=t.ruleToStartState.get(e);jt(n,r.left);let i=t.ruleToStopState.get(e);return jt(r.right,i),{left:n,right:i}}function jt(t,e){let r=new Hl(e);XT(t,r)}function tr(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function XT(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function vW(t,e){t.states.splice(t.states.indexOf(e),1)}var Kl={},Da=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=JT(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return K(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function JT(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function RW(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Ld=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},pA=new Ld,zl=class extends gi{constructor(e){var r;super(),this.logging=(r=e==null?void 0:e.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=uA(e.rules),this.dfas=xW(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=Bo(n,"Alternation",r),c=this.atn.decisionMap[l].decision,f=K(fd({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),d=>K(d,m=>m[0]));if(mA(f,!1)&&!o){let d=xt(f,(m,R,O)=>(J(R,I=>{I&&(m[I.tokenTypeIdx]=O,J(I.categoryMatches,E=>{m[E]=O}))}),m),{});return i?function(m){var R;let O=this.LA(1),I=d[O.tokenTypeIdx];if(m!==void 0&&I!==void 0){let E=(R=m[I])===null||R===void 0?void 0:R.GATE;if(E!==void 0&&E.call(this)===!1)return}return I}:function(){let m=this.LA(1);return d[m.tokenTypeIdx]}}else return i?function(d){let m=new Ld,R=d===void 0?0:d.length;for(let I=0;I<R;I++){let E=d==null?void 0:d[I].GATE;m.set(I,E===void 0||E.call(this))}let O=QT.call(this,s,c,m,a);return typeof O=="number"?O:void 0}:function(){let d=QT.call(this,s,c,pA,a);return typeof d=="number"?d:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=Bo(n,i,r),c=this.atn.decisionMap[l].decision,f=K(fd({maxLookahead:1,occurrence:r,prodType:i,rule:n}),d=>K(d,m=>m[0]));if(mA(f)&&f[0][0]&&!o){let d=f[0],m=Ft(d);if(m.length===1&&ye(m[0].categoryMatches)){let O=m[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===O}}else{let R=xt(m,(O,I)=>(I!==void 0&&(O[I.tokenTypeIdx]=!0,J(I.categoryMatches,E=>{O[E]=!0})),O),{});return function(){let O=this.LA(1);return R[O.tokenTypeIdx]===!0}}}return function(){let d=QT.call(this,s,c,pA,a);return typeof d=="object"?!1:d===0}}};function mA(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let s=[o.tokenTypeIdx].concat(o.categoryMatches);for(let a of s)if(r.has(a)){if(!i.has(a))return!1}else r.add(a),i.add(a)}}return!0}function xW(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=RW(t.decisionStates[n],n);return r}function QT(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let a=kW(i.atnStartState);o=TA(i,gA(a)),i.start=o}return NW.apply(this,[i,o,r,n])}function NW(t,e,r,n){let i=e,o=1,s=[],a=this.LA(o++);for(;;){let l=DW(i,a);if(l===void 0&&(l=OW.apply(this,[t,i,a,o,r,n])),l===Kl)return AW(s,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,s.push(a),a=this.LA(o++)}}function OW(t,e,r,n,i,o){let s=CW(e.configs,r,i);if(s.size===0)return hA(t,e,r,Kl),Kl;let a=gA(s),l=LW(s,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(MW(s)){let u=VI(s.alts);a.isAcceptState=!0,a.prediction=u,a.configs.uniqueAlt=u,EW.apply(this,[t,n,s.alts,o])}return a=hA(t,e,r,a),a}function EW(t,e,r,n){let i=[];for(let u=1;u<=e;u++)i.push(this.LA(u).tokenType);let o=t.atnStartState,s=o.rule,a=o.production,l=IW({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:i});n(l)}function IW(t){let e=K(t.prefixPath,i=>mi(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${SW(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function SW(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof et)return"AT_LEAST_ONE";if(t instanceof tt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ae)return"MANY";if(t instanceof Re)return"CONSUME";throw Error("non exhaustive match")}function AW(t,e,r){let n=lr(e.configs.elements,o=>o.state.transitions),i=YI(n.filter(o=>o instanceof Ea).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function DW(t,e){return t.edges[e.tokenTypeIdx]}function CW(t,e,r){let n=new Da,i=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===Sa){i.push(s);continue}let a=s.state.transitions.length;for(let l=0;l<a;l++){let u=s.state.transitions[l],c=bW(u,e);c!==void 0&&n.add({state:c,alt:s.alt,stack:s.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new Da;for(let s of n.elements)kd(s,o)}if(i.length>0&&!$W(o))for(let s of i)o.add(s);return o}function bW(t,e){if(t instanceof Ea&&kl(e,t.tokenType))return t.target}function LW(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function gA(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function hA(t,e,r,n){return n=TA(t,n),e.edges[r.tokenTypeIdx]=n,n}function TA(t,e){if(e===Kl)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function kW(t){let e=new Da,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};kd(o,e)}return e}function kd(t,e){let r=t.state;if(r.type===Sa){if(t.stack.length>0){let i=[...t.stack],s={state:i.pop(),alt:t.alt,stack:i};kd(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],s=wW(t,o);s!==void 0&&kd(s,e)}}function wW(t,e){if(e instanceof Hl)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Ia){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function $W(t){for(let e of t.elements)if(e.state.type===Sa)return!0;return!1}function PW(t){for(let e of t.elements)if(e.state.type!==Sa)return!1;return!0}function MW(t){if(PW(t))return!0;let e=FW(t.elements);return UW(e)&&!BW(e)}function FW(t){let e=new Map;for(let r of t){let n=JT(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function UW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function BW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var yA;(function(t){function e(r){return typeof r=="string"}t.is=e})(yA||(yA={}));var ZT;(function(t){function e(r){return typeof r=="string"}t.is=e})(ZT||(ZT={}));var _A;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(_A||(_A={}));var wd;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(wd||(wd={}));var we;(function(t){function e(n,i){return n===Number.MAX_VALUE&&(n=wd.MAX_VALUE),i===Number.MAX_VALUE&&(i=wd.MAX_VALUE),{line:n,character:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.uinteger(i.line)&&b.uinteger(i.character)}t.is=r})(we||(we={}));var De;(function(t){function e(n,i,o,s){if(b.uinteger(n)&&b.uinteger(i)&&b.uinteger(o)&&b.uinteger(s))return{start:we.create(n,i),end:we.create(o,s)};if(we.is(n)&&we.is(i))return{start:n,end:i};throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${o}, ${s}]`)}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&we.is(i.start)&&we.is(i.end)}t.is=r})(De||(De={}));var $d;(function(t){function e(n,i){return{uri:n,range:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&De.is(i.range)&&(b.string(i.uri)||b.undefined(i.uri))}t.is=r})($d||($d={}));var vA;(function(t){function e(n,i,o,s){return{targetUri:n,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&De.is(i.targetRange)&&b.string(i.targetUri)&&De.is(i.targetSelectionRange)&&(De.is(i.originSelectionRange)||b.undefined(i.originSelectionRange))}t.is=r})(vA||(vA={}));var ey;(function(t){function e(n,i,o,s){return{red:n,green:i,blue:o,alpha:s}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.numberRange(i.red,0,1)&&b.numberRange(i.green,0,1)&&b.numberRange(i.blue,0,1)&&b.numberRange(i.alpha,0,1)}t.is=r})(ey||(ey={}));var RA;(function(t){function e(n,i){return{range:n,color:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&De.is(i.range)&&ey.is(i.color)}t.is=r})(RA||(RA={}));var xA;(function(t){function e(n,i,o){return{label:n,textEdit:i,additionalTextEdits:o}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.string(i.label)&&(b.undefined(i.textEdit)||ao.is(i))&&(b.undefined(i.additionalTextEdits)||b.typedArray(i.additionalTextEdits,ao.is))}t.is=r})(xA||(xA={}));var NA;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(NA||(NA={}));var OA;(function(t){function e(n,i,o,s,a,l){let u={startLine:n,endLine:i};return b.defined(o)&&(u.startCharacter=o),b.defined(s)&&(u.endCharacter=s),b.defined(a)&&(u.kind=a),b.defined(l)&&(u.collapsedText=l),u}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.uinteger(i.startLine)&&b.uinteger(i.startLine)&&(b.undefined(i.startCharacter)||b.uinteger(i.startCharacter))&&(b.undefined(i.endCharacter)||b.uinteger(i.endCharacter))&&(b.undefined(i.kind)||b.string(i.kind))}t.is=r})(OA||(OA={}));var ty;(function(t){function e(n,i){return{location:n,message:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&$d.is(i.location)&&b.string(i.message)}t.is=r})(ty||(ty={}));var EA;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(EA||(EA={}));var IA;(function(t){t.Unnecessary=1,t.Deprecated=2})(IA||(IA={}));var SA;(function(t){function e(r){let n=r;return b.objectLiteral(n)&&b.string(n.href)}t.is=e})(SA||(SA={}));var Pd;(function(t){function e(n,i,o,s,a,l){let u={range:n,message:i};return b.defined(o)&&(u.severity=o),b.defined(s)&&(u.code=s),b.defined(a)&&(u.source=a),b.defined(l)&&(u.relatedInformation=l),u}t.create=e;function r(n){var i;let o=n;return b.defined(o)&&De.is(o.range)&&b.string(o.message)&&(b.number(o.severity)||b.undefined(o.severity))&&(b.integer(o.code)||b.string(o.code)||b.undefined(o.code))&&(b.undefined(o.codeDescription)||b.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(b.string(o.source)||b.undefined(o.source))&&(b.undefined(o.relatedInformation)||b.typedArray(o.relatedInformation,ty.is))}t.is=r})(Pd||(Pd={}));var Ca;(function(t){function e(n,i,...o){let s={title:n,command:i};return b.defined(o)&&o.length>0&&(s.arguments=o),s}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.title)&&b.string(i.command)}t.is=r})(Ca||(Ca={}));var ao;(function(t){function e(o,s){return{range:o,newText:s}}t.replace=e;function r(o,s){return{range:{start:o,end:o},newText:s}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function i(o){let s=o;return b.objectLiteral(s)&&b.string(s.newText)&&De.is(s.range)}t.is=i})(ao||(ao={}));var ry;(function(t){function e(n,i,o){let s={label:n};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.string(i.label)&&(b.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(b.string(i.description)||i.description===void 0)}t.is=r})(ry||(ry={}));var ba;(function(t){function e(r){let n=r;return b.string(n)}t.is=e})(ba||(ba={}));var AA;(function(t){function e(o,s,a){return{range:o,newText:s,annotationId:a}}t.replace=e;function r(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}t.insert=r;function n(o,s){return{range:o,newText:"",annotationId:s}}t.del=n;function i(o){let s=o;return ao.is(s)&&(ry.is(s.annotationId)||ba.is(s.annotationId))}t.is=i})(AA||(AA={}));var ny;(function(t){function e(n,i){return{textDocument:n,edits:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&ly.is(i.textDocument)&&Array.isArray(i.edits)}t.is=r})(ny||(ny={}));var iy;(function(t){function e(n,i,o){let s={kind:"create",uri:n};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="create"&&b.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||ba.is(i.annotationId))}t.is=r})(iy||(iy={}));var oy;(function(t){function e(n,i,o,s){let a={kind:"rename",oldUri:n,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let i=n;return i&&i.kind==="rename"&&b.string(i.oldUri)&&b.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||ba.is(i.annotationId))}t.is=r})(oy||(oy={}));var sy;(function(t){function e(n,i,o){let s={kind:"delete",uri:n};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="delete"&&b.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||b.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||b.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||ba.is(i.annotationId))}t.is=r})(sy||(sy={}));var ay;(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(i=>b.string(i.kind)?iy.is(i)||oy.is(i)||sy.is(i):ny.is(i)))}t.is=e})(ay||(ay={}));var DA;(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)}t.is=r})(DA||(DA={}));var CA;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)&&b.integer(i.version)}t.is=r})(CA||(CA={}));var ly;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)&&(i.version===null||b.integer(i.version))}t.is=r})(ly||(ly={}));var bA;(function(t){function e(n,i,o,s){return{uri:n,languageId:i,version:o,text:s}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)&&b.string(i.languageId)&&b.integer(i.version)&&b.string(i.text)}t.is=r})(bA||(bA={}));var uy;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(uy||(uy={}));var Yl;(function(t){function e(r){let n=r;return b.objectLiteral(r)&&uy.is(n.kind)&&b.string(n.value)}t.is=e})(Yl||(Yl={}));var LA;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(LA||(LA={}));var kA;(function(t){t.PlainText=1,t.Snippet=2})(kA||(kA={}));var wA;(function(t){t.Deprecated=1})(wA||(wA={}));var $A;(function(t){function e(n,i,o){return{newText:n,insert:i,replace:o}}t.create=e;function r(n){let i=n;return i&&b.string(i.newText)&&De.is(i.insert)&&De.is(i.replace)}t.is=r})($A||($A={}));var PA;(function(t){t.asIs=1,t.adjustIndentation=2})(PA||(PA={}));var MA;(function(t){function e(r){let n=r;return n&&(b.string(n.detail)||n.detail===void 0)&&(b.string(n.description)||n.description===void 0)}t.is=e})(MA||(MA={}));var FA;(function(t){function e(r){return{label:r}}t.create=e})(FA||(FA={}));var UA;(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(UA||(UA={}));var Md;(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let i=n;return b.string(i)||b.objectLiteral(i)&&b.string(i.language)&&b.string(i.value)}t.is=r})(Md||(Md={}));var BA;(function(t){function e(r){let n=r;return!!n&&b.objectLiteral(n)&&(Yl.is(n.contents)||Md.is(n.contents)||b.typedArray(n.contents,Md.is))&&(r.range===void 0||De.is(r.range))}t.is=e})(BA||(BA={}));var WA;(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(WA||(WA={}));var VA;(function(t){function e(r,n,...i){let o={label:r};return b.defined(n)&&(o.documentation=n),b.defined(i)?o.parameters=i:o.parameters=[],o}t.create=e})(VA||(VA={}));var GA;(function(t){t.Text=1,t.Read=2,t.Write=3})(GA||(GA={}));var jA;(function(t){function e(r,n){let i={range:r};return b.number(n)&&(i.kind=n),i}t.create=e})(jA||(jA={}));var qA;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(qA||(qA={}));var HA;(function(t){t.Deprecated=1})(HA||(HA={}));var KA;(function(t){function e(r,n,i,o,s){let a={name:r,kind:n,location:{uri:o,range:i}};return s&&(a.containerName=s),a}t.create=e})(KA||(KA={}));var zA;(function(t){function e(r,n,i,o){return o!==void 0?{name:r,kind:n,location:{uri:i,range:o}}:{name:r,kind:n,location:{uri:i}}}t.create=e})(zA||(zA={}));var YA;(function(t){function e(n,i,o,s,a,l){let u={name:n,detail:i,kind:o,range:s,selectionRange:a};return l!==void 0&&(u.children=l),u}t.create=e;function r(n){let i=n;return i&&b.string(i.name)&&b.number(i.kind)&&De.is(i.range)&&De.is(i.selectionRange)&&(i.detail===void 0||b.string(i.detail))&&(i.deprecated===void 0||b.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=r})(YA||(YA={}));var XA;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(XA||(XA={}));var Fd;(function(t){t.Invoked=1,t.Automatic=2})(Fd||(Fd={}));var JA;(function(t){function e(n,i,o){let s={diagnostics:n};return i!=null&&(s.only=i),o!=null&&(s.triggerKind=o),s}t.create=e;function r(n){let i=n;return b.defined(i)&&b.typedArray(i.diagnostics,Pd.is)&&(i.only===void 0||b.typedArray(i.only,b.string))&&(i.triggerKind===void 0||i.triggerKind===Fd.Invoked||i.triggerKind===Fd.Automatic)}t.is=r})(JA||(JA={}));var QA;(function(t){function e(n,i,o){let s={title:n},a=!0;return typeof i=="string"?(a=!1,s.kind=i):Ca.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return i&&b.string(i.title)&&(i.diagnostics===void 0||b.typedArray(i.diagnostics,Pd.is))&&(i.kind===void 0||b.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||Ca.is(i.command))&&(i.isPreferred===void 0||b.boolean(i.isPreferred))&&(i.edit===void 0||ay.is(i.edit))}t.is=r})(QA||(QA={}));var ZA;(function(t){function e(n,i){let o={range:n};return b.defined(i)&&(o.data=i),o}t.create=e;function r(n){let i=n;return b.defined(i)&&De.is(i.range)&&(b.undefined(i.command)||Ca.is(i.command))}t.is=r})(ZA||(ZA={}));var eD;(function(t){function e(n,i){return{tabSize:n,insertSpaces:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.uinteger(i.tabSize)&&b.boolean(i.insertSpaces)}t.is=r})(eD||(eD={}));var tD;(function(t){function e(n,i,o){return{range:n,target:i,data:o}}t.create=e;function r(n){let i=n;return b.defined(i)&&De.is(i.range)&&(b.undefined(i.target)||b.string(i.target))}t.is=r})(tD||(tD={}));var rD;(function(t){function e(n,i){return{range:n,parent:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&De.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=r})(rD||(rD={}));var nD;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(nD||(nD={}));var iD;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(iD||(iD={}));var oD;(function(t){function e(r){let n=r;return b.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(oD||(oD={}));var sD;(function(t){function e(n,i){return{range:n,text:i}}t.create=e;function r(n){let i=n;return i!=null&&De.is(i.range)&&b.string(i.text)}t.is=r})(sD||(sD={}));var aD;(function(t){function e(n,i,o){return{range:n,variableName:i,caseSensitiveLookup:o}}t.create=e;function r(n){let i=n;return i!=null&&De.is(i.range)&&b.boolean(i.caseSensitiveLookup)&&(b.string(i.variableName)||i.variableName===void 0)}t.is=r})(aD||(aD={}));var lD;(function(t){function e(n,i){return{range:n,expression:i}}t.create=e;function r(n){let i=n;return i!=null&&De.is(i.range)&&(b.string(i.expression)||i.expression===void 0)}t.is=r})(lD||(lD={}));var uD;(function(t){function e(n,i){return{frameId:n,stoppedLocation:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&De.is(n.stoppedLocation)}t.is=r})(uD||(uD={}));var cy;(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(cy||(cy={}));var fy;(function(t){function e(n){return{value:n}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&(i.tooltip===void 0||b.string(i.tooltip)||Yl.is(i.tooltip))&&(i.location===void 0||$d.is(i.location))&&(i.command===void 0||Ca.is(i.command))}t.is=r})(fy||(fy={}));var cD;(function(t){function e(n,i,o){let s={position:n,label:i};return o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&we.is(i.position)&&(b.string(i.label)||b.typedArray(i.label,fy.is))&&(i.kind===void 0||cy.is(i.kind))&&i.textEdits===void 0||b.typedArray(i.textEdits,ao.is)&&(i.tooltip===void 0||b.string(i.tooltip)||Yl.is(i.tooltip))&&(i.paddingLeft===void 0||b.boolean(i.paddingLeft))&&(i.paddingRight===void 0||b.boolean(i.paddingRight))}t.is=r})(cD||(cD={}));var fD;(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(fD||(fD={}));var dD;(function(t){function e(r,n,i,o){return{insertText:r,filterText:n,range:i,command:o}}t.create=e})(dD||(dD={}));var pD;(function(t){function e(r){return{items:r}}t.create=e})(pD||(pD={}));var mD;(function(t){t.Invoked=0,t.Automatic=1})(mD||(mD={}));var hD;(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(hD||(hD={}));var gD;(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(gD||(gD={}));var TD;(function(t){function e(r){let n=r;return b.objectLiteral(n)&&ZT.is(n.uri)&&b.string(n.name)}t.is=e})(TD||(TD={}));var yD;(function(t){function e(o,s,a,l){return new dy(o,s,a,l)}t.create=e;function r(o){let s=o;return!!(b.defined(s)&&b.string(s.uri)&&(b.undefined(s.languageId)||b.string(s.languageId))&&b.uinteger(s.lineCount)&&b.func(s.getText)&&b.func(s.positionAt)&&b.func(s.offsetAt))}t.is=r;function n(o,s){let a=o.getText(),l=i(s,(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),u=a.length;for(let c=l.length-1;c>=0;c--){let f=l[c],d=o.offsetAt(f.range.start),m=o.offsetAt(f.range.end);if(m<=u)a=a.substring(0,d)+f.newText+a.substring(m,a.length);else throw new Error("Overlapping edit");u=d}return a}t.applyEdits=n;function i(o,s){if(o.length<=1)return o;let a=o.length/2|0,l=o.slice(0,a),u=o.slice(a);i(l,s),i(u,s);let c=0,f=0,d=0;for(;c<l.length&&f<u.length;)s(l[c],u[f])<=0?o[d++]=l[c++]:o[d++]=u[f++];for(;c<l.length;)o[d++]=l[c++];for(;f<u.length;)o[d++]=u[f++];return o}})(yD||(yD={}));var dy=class{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let i=0;i<r.length;i++){n&&(e.push(i),n=!1);let o=r.charAt(i);n=o==="\r"||o===`
`,o==="\r"&&i+1<r.length&&r.charAt(i+1)===`
`&&i++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return we.create(0,e);for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return we.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}},b;(function(t){let e=Object.prototype.toString;function r(m){return typeof m!="undefined"}t.defined=r;function n(m){return typeof m=="undefined"}t.undefined=n;function i(m){return m===!0||m===!1}t.boolean=i;function o(m){return e.call(m)==="[object String]"}t.string=o;function s(m){return e.call(m)==="[object Number]"}t.number=s;function a(m,R,O){return e.call(m)==="[object Number]"&&R<=m&&m<=O}t.numberRange=a;function l(m){return e.call(m)==="[object Number]"&&-2147483648<=m&&m<=2147483647}t.integer=l;function u(m){return e.call(m)==="[object Number]"&&0<=m&&m<=2147483647}t.uinteger=u;function c(m){return e.call(m)==="[object Function]"}t.func=c;function f(m){return m!==null&&typeof m=="object"}t.objectLiteral=f;function d(m,R){return Array.isArray(m)&&m.every(R)}t.typedArray=d})(b||(b={}));var Xl=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new La(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Go;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Vo(e.startOffset,e.image.length,ws(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();(n==null?void 0:n.content.length)===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Vo(r.startOffset,r.image.length,ws(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.content.length;o++){let s=e.content[o],{offset:a,end:l}=s;if(Rr(s)&&n>a&&i<l){this.addHiddenToken(s,r);return}else if(i<=a){e.content.splice(o,0,r);return}}e.content.push(r)}},Jl=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Vo=class extends Jl{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}},Go=class extends Jl{constructor(){super(...arguments),this.content=new py(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:we.create(0,0),end:we.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},py=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},La=class extends Go{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e!=null?e:""}};var Ud=Symbol("Datatype");function my(t){return t.$type===Ud}var _D="\u200B",vD=t=>t.endsWith(_D)?t:t+_D,Ql=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new hy(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},Zl=class extends Ql{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Xl,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:xl(e)?Ud:si(e),i=this.wrapper.DEFINE_RULE(vD(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Ud&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(i)){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),l=this.current;if(s){let u=or(n)?i.image:this.converter.convert(i.image,o);this.assign(s.operator,s.feature,u,o,a)}else if(my(l)){let u=i.image;or(n)||(u=this.converter.convert(u,o).toString()),l.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(s,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let s=this.current;if(my(s))s.value+=e.toString();else if(typeof e=="object"&&e){let a=e.$type,l=this.assignWithoutOverride(e,s);a&&(l.$type=a);let u=l;this.stack.pop(),this.stack.push(u)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return df(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),my(r)?this.converter.convert(r.value,r.$cstNode):(hl(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=Zr(e,hr);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?Nn(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let s=this.current,a;switch(o&&typeof n=="string"?a=this.linker.buildReference(s,r,i,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r)){let o=e[n];o===void 0?e[n]=i:Array.isArray(o)&&Array.isArray(i)&&(i.push(...o),e[n]=i)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},Bd=class{buildMismatchTokenMessage(e){return hi.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return hi.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return hi.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return hi.buildEarlyExitMessage(e)}},ka=class extends Bd{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},eu=class extends Ql{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(vD(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},WW={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new ka},hy=class extends jl{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},WW),{lookaheadStrategy:n?new gi({maxLookahead:r.maxLookahead}):new zl}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function Vd(t,e,r){return VW({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function VW(t,e){let r=vl(e,!1),n=he(e.rules).filter(It).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,jo(o,i.definition)))}}function jo(t,e,r=!1){let n;if(or(e))n=YW(t,e);else if(xn(e))n=GW(t,e);else if(hr(e))n=jo(t,e.terminal);else if(Nn(e))n=RD(t,e);else if(Br(e))n=jW(t,e);else if(bs(e))n=HW(t,e);else if(Ls(e))n=KW(t,e);else if(un(e))n=zW(t,e);else if(xg(e)){let i=t.consume++;n=()=>t.parser.consume(i,tn,e)}else throw new Eo(e.$cstNode,`Unexpected element type: ${e.$type}`);return xD(t,r?void 0:Wd(e),n,e.cardinality)}function GW(t,e){let r=si(e);return()=>t.parser.action(r,e)}function jW(t,e){let r=e.rule.ref;if(It(r)){let n=t.subrule++,i=e.arguments.length>0?qW(r,e.arguments):()=>({});return o=>t.parser.subrule(n,ND(t,r),e,i(o))}else if(Ur(r)){let n=t.consume++,i=gy(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)Wi(r);else throw new Eo(e.$cstNode,`Undefined rule type: ${e.$type}`)}function qW(t,e){let r=e.map(n=>Ti(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let s=t.parameters[o],a=r[o];i[s.name]=a(n)}return i}}function Ti(t){if(Xh(t)){let e=Ti(t.left),r=Ti(t.right);return n=>e(n)||r(n)}else if(zh(t)){let e=Ti(t.left),r=Ti(t.right);return n=>e(n)&&r(n)}else if(tg(t)){let e=Ti(t.value);return r=>!e(r)}else if(og(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Hh(t)){let e=!!t.true;return()=>e}Wi(t)}function HW(t,e){if(e.elements.length===1)return jo(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:jo(t,i,!0)},s=Wd(i);s&&(o.GATE=Ti(s)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let s={ALT:()=>o.ALT(i)},a=o.GATE;return a&&(s.GATE=()=>a(i)),s}))}}function KW(t,e){if(e.elements.length===1)return jo(t,e.elements[0]);let r=[];for(let a of e.elements){let l={ALT:jo(t,a,!0)},u=Wd(a);u&&(l.GATE=Ti(u)),r.push(l)}let n=t.or++,i=(a,l)=>{let u=l.getRuleStack().join("-");return`uGroup_${a}_${u}`},o=a=>t.parser.alternatives(n,r.map((l,u)=>{let c={ALT:()=>!0},f=t.parser;c.ALT=()=>{if(l.ALT(a),!f.isRecording()){let m=i(n,f);f.unorderedGroups.get(m)||f.unorderedGroups.set(m,[]);let R=f.unorderedGroups.get(m);typeof(R==null?void 0:R[u])=="undefined"&&(R[u]=!0)}};let d=l.GATE;return d?c.GATE=()=>d(a):c.GATE=()=>{let m=f.unorderedGroups.get(i(n,f));return!(m!=null&&m[u])},c})),s=xD(t,Wd(e),o,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function zW(t,e){let r=e.elements.map(n=>jo(t,n));return n=>r.forEach(i=>i(n))}function Wd(t){if(un(t))return t.guardCondition}function RD(t,e,r=e.terminal){if(r)if(Br(r)&&It(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,ND(t,r.rule.ref),e,i)}else if(Br(r)&&Ur(r.rule.ref)){let n=t.consume++,i=gy(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if(or(r)){let n=t.consume++,i=gy(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=yf(e.type.ref),i=n==null?void 0:n.terminal;if(!i)throw new Error("Could not find name assignment for type: "+si(e.type.ref));return RD(t,e,i)}}function YW(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function xD(t,e,r,n){let i=e&&Ti(e);if(!n)if(i){let o=t.or++;return s=>t.parser.alternatives(o,[{ALT:()=>r(s),GATE:()=>i(s)},{ALT:bd(),GATE:()=>!i(s)}])}else return r;if(n==="*"){let o=t.many++;return s=>t.parser.many(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else if(n==="+"){let o=t.many++;if(i){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(a)}),GATE:()=>i(a)},{ALT:bd(),GATE:()=>!i(a)}])}else return s=>t.parser.atLeastOne(o,{DEF:()=>r(s)})}else if(n==="?"){let o=t.optional++;return s=>t.parser.optional(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else Wi(n)}function ND(t,e){let r=XW(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function XW(t,e){if(It(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!It(n);)(un(n)||bs(n)||Ls(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function gy(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function Ty(t){let e=t.Grammar,r=t.parser.Lexer,n=new eu(t);return Vd(e,n,r.definition),n.finalize(),n}function yy(t){let e=OD(t);return e.finalize(),e}function OD(t){let e=t.Grammar,r=t.parser.Lexer,n=new Zl(t);return Vd(e,n,r.definition)}var tu=class{buildTokens(e,r){let n=he(vl(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&hf(a)?o.unshift(s):o.push(s)}),o}buildTerminalTokens(e){return e.filter(Ur).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Gi(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,i={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(i.GROUP=hf(r)?Dt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,i)=>(r.lastIndex=i,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(It).flatMap(i=>Wr(i).filter(or)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!(n!=null&&n.caseInsensitive)))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(Zg(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i==null?void 0:i.PATTERN;return o!=null&&o.source&&eT("^"+o.source+"$",e.value)&&n.push(i),n},[])}};var ru=class{convert(e,r){let n=r.grammarSource;if(Nn(n)&&(n=Rl(n)),Br(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return zn.convertInt(r);case"STRING":return zn.convertString(r);case"ID":return zn.convertID(r)}switch((i=lT(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return zn.convertNumber(r);case"boolean":return zn.convertBoolean(r);case"bigint":return zn.convertBigint(r);case"date":return zn.convertDate(r);default:return r}}},zn;(function(t){function e(u){let c="";for(let f=1;f<u.length-1;f++){let d=u.charAt(f);if(d==="\\"){let m=u.charAt(++f);c+=r(m)}else c+=d}return c}t.convertString=e;function r(u){switch(u){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return u}}function n(u){return u.charAt(0)==="^"?u.substring(1):u}t.convertID=n;function i(u){return parseInt(u)}t.convertInt=i;function o(u){return BigInt(u)}t.convertBigint=o;function s(u){return new Date(u)}t.convertDate=s;function a(u){return Number(u)}t.convertNumber=a;function l(u){return u.toLowerCase()==="true"}t.convertBoolean=l})(zn||(zn={}));var ee={};be(ee,Kt(DD(),1));function Ay(){return new Promise(t=>{typeof setImmediate=="undefined"?setTimeout(t,0):setImmediate(t)})}var Sy=0,CD=10;function bD(){return Sy=Date.now(),new ee.CancellationTokenSource}function LD(t){CD=t}var Yn=Symbol("OperationCancelled");function Xn(t){return t===Yn}async function Nt(t){if(t===ee.CancellationToken.None)return;let e=Date.now();if(e-Sy>=CD&&(Sy=e,await Ay()),t.isCancellationRequested)throw Yn}var Dr=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var Hd=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=wD(n.range),o=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(s,this._content.length);let a=Math.max(i.start.line,0),l=Math.max(i.end.line,0),u=this._lineOffsets,c=kD(n.text,!1,o);if(l-a===c.length)for(let d=0,m=c.length;d<m;d++)u[d+a+1]=c[d];else c.length<1e4?u.splice(a+1,l-a,...c):this._lineOffsets=u=u.slice(0,a+1).concat(c,u.slice(l+1));let f=n.text.length-(s-o);if(f!==0)for(let d=a+1+c.length,m=u.length;d<m;d++)u[d]=u[d]+f}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=kD(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},lo;(function(t){function e(i,o,s,a){return new Hd(i,o,s,a)}t.create=e;function r(i,o,s){if(i instanceof Hd)return i.update(o,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let s=i.getText(),a=Dy(o.map(sV),(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),l=0,u=[];for(let c of a){let f=i.offsetAt(c.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&u.push(s.substring(l,f)),c.newText.length&&u.push(c.newText),l=i.offsetAt(c.range.end)}return u.push(s.substr(l)),u.join("")}t.applyEdits=n})(lo||(lo={}));function Dy(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);Dy(n,e),Dy(i,e);let o=0,s=0,a=0;for(;o<n.length&&s<i.length;)e(n[o],i[s])<=0?t[a++]=n[o++]:t[a++]=i[s++];for(;o<n.length;)t[a++]=n[o++];for(;s<i.length;)t[a++]=i[s++];return t}function kD(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function wD(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function sV(t){let e=wD(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var oe;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(oe||(oe={}));var nu=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=ee.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r!=null?r:We.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let i=await this.parseAsync(e,r,n);return this.createLangiumDocument(i,e,void 0,r)}else{let i=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(i,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:oe.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:oe.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=o,o}async update(e,r){var n,i;let o=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,s=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=s?s.getText():await this.fileSystemProvider.readFile(e.uri);if(s)Object.defineProperty(e,"textDocument",{value:s});else{let l=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:l})}return o!==a&&(e.parseResult=await this.parseAsync(e.uri,a,r),e.parseResult.value.$document=e),e.state=oe.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i!=null?i:i=lo.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r!=null?r:"")}},iu=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return he(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(i=>(this.addDocument(i),i));{let i=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=oe.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=oe.Changed,this.documentMap.delete(r)),n}};var qo=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=ee.CancellationToken.None){for(let n of Vr(e.parseResult.value))await Nt(r),$s(n).forEach(i=>this.doLink(i,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if(vn(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o!=null?o:this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n!=null?n:this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,s={$refNode:n,$refText:i,get ref(){var a;if(Be(this._ref))return this._ref;if(ll(this._nodeDescription)){let l=o.loadAstNode(this._nodeDescription);this._ref=l!=null?l:o.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let l=o.getLinkedNode({reference:s,container:e,property:r});if(l.error&&_t(e).state<oe.ComputedScopes)return;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return vn(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(vn(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=_t(e.container);n.state<oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};function Kd(t){return typeof t.name=="string"}var ou=class{getName(e){if(Kd(e))return e.name}getNameNode(e){return Vi(e.$cstNode,"name")}};var Ho=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=sT(e),n=e.astNode;if(r&&n){let i=n[r.feature];if(yt(i))return i.ref;if(Array.isArray(i)){for(let o of i)if(yt(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||Vg(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r!=null&&r.$cstNode){let n=this.nameProvider.getNameNode(r);return n!=null?n:r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(i=i.filter(o=>Pt.equals(o.sourceUri,r.documentUri))),n.push(...i),he(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=_t(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:No(r),local:!0}}}};var pn=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return ks.sum(he(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return he(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return he(this.map.keys())}values(){return he(this.map.values()).flat()}entriesGroupedByKey(){return he(this.map.entries())}},Ko=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var zo=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=ee.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=Oo,i=ee.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let s of n(e))await Nt(i),this.exportNode(s,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=ee.CancellationToken.None){let n=e.parseResult.value,i=new pn;for(let o of Wr(n))await Nt(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};var zr=class{constructor(e,r,n){var i;this.elements=e,this.outerScope=r,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},su=class{constructor(e,r,n){var i;this.elements=new Map,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1;for(let o of e){let s=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(s,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=he(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},aV={getElement(){},getAllElements(){return Ui}};var Pa=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},au=class extends Pa{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},Yo=class extends Pa{constructor(e){super(),this.cache=new Map,this.converter=e!=null?e:r=>r}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let i=this.cacheForContext(e);if(i.has(r))return i.get(r);if(n){let o=n();return i.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},zd=class extends Yo{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let i=r.concat(n);for(let o of i)this.clear(o)}))}},Ma=class extends au{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var Xo=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new Ma(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=_t(e.container).precomputedScopes;if(i){let s=e.container;do{let a=i.get(s);a.length>0&&r.push(he(a).filter(l=>this.reflection.isSubtype(l.type,n))),s=s.$container}while(s)}let o=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)o=this.createScope(r[s],o);return o}createScope(e,r,n){return new zr(he(e),r,n)}createScopeForNodes(e,r,n){let i=he(e).map(o=>{let s=this.nameProvider.getName(o);if(s)return this.descriptions.createDescription(o,s)}).nonNullable();return new zr(i,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new su(this.indexManager.allElements(e)))}};function Cy(t){return typeof t.$comment=="string"}function $D(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Jo=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r==null?void 0:r.replacer,i=(s,a)=>this.replacer(s,a,r),o=n?(s,a)=>n(s,a,i):i;try{return this.currentDocument=_t(e),JSON.stringify(e,o,r==null?void 0:r.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:i,textRegions:o,comments:s,uriConverter:a}){var l,u,c,f;if(!this.ignoreProperties.has(e))if(yt(r)){let d=r.ref,m=n?r.$refText:void 0;if(d){let R=_t(d),O="";this.currentDocument&&this.currentDocument!==R&&(a?O=a(R.uri,r):O=R.uri.toString());let I=this.astNodeLocator.getAstNodePath(d);return{$ref:`${O}#${I}`,$refText:m}}else return{$error:(u=(l=r.error)===null||l===void 0?void 0:l.message)!==null&&u!==void 0?u:"Could not resolve reference",$refText:m}}else if(Be(r)){let d;if(o&&(d=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&(d!=null&&d.$textRegion)&&(d.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),i&&!e&&(d!=null||(d=Object.assign({},r)),d.$sourceText=(f=r.$cstNode)===null||f===void 0?void 0:f.text),s){d!=null||(d=Object.assign({},r));let m=this.commentProvider.getComment(r);m&&(d.$comment=m.replace(/\r/g,""))}return d!=null?d:r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),i=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let s=Ms(e.$cstNode,o).map(r);s.length!==0&&(i[o]=s)}),e}}linkNode(e,r,n,i,o,s){for(let[l,u]of Object.entries(e))if(Array.isArray(u))for(let c=0;c<u.length;c++){let f=u[c];$D(f)?u[c]=this.reviveReference(e,l,r,f,n):Be(f)&&this.linkNode(f,r,n,e,l,c)}else $D(u)?e[l]=this.reviveReference(e,l,r,u,n):Be(u)&&this.linkNode(u,r,n,e,l);let a=e;a.$container=i,a.$containerProperty=o,a.$containerIndex=s}reviveReference(e,r,n,i,o){let s=i.$refText,a=i.$error;if(i.$ref){let l=this.getRefNode(n,i.$ref,o.uriConverter);if(Be(l))return s||(s=this.nameProvider.getName(l)),{$refText:s!=null?s:"",ref:l};a=l}if(a){let l={$refText:s!=null?s:""};return l.error={container:e,property:r,message:a,reference:l},l}else return}getRefNode(e,r,n){try{let i=r.indexOf("#");if(i===0){let l=this.astNodeLocator.getAstNode(e,r.substring(1));return l||"Could not resolve path: "+r}if(i<0){let l=n?n(r):We.parse(r),u=this.langiumDocuments.getDocument(l);return u?u.parseResult.value:"Could not find document for URI: "+r}let o=n?n(r.substring(0,i)):We.parse(r.substring(0,i)),s=this.langiumDocuments.getDocument(o);if(!s)return"Could not find document for URI: "+r;if(i===r.length-1)return s.parseResult.value;let a=this.astNodeLocator.getAstNode(s.parseResult.value,r.substring(i+1));return a||"Could not resolve URI: "+r}catch(i){return String(i)}}};var Qo=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=Pt.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function Yd(t){return{code:t}}var Fa;(function(t){t.all=["fast","slow","built-in"]})(Fa||(Fa={}));var lu=class{constructor(e){this.entries=new pn,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[i,o]of Object.entries(e)){let s=o;if(Array.isArray(s))for(let a of s){let l={check:this.wrapValidationException(a,r),category:n};this.addEntry(i,l)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(i,a)}}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(s){if(Xn(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),i("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=he(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(i=>r.includes(i.category))),n.map(i=>i.check)}};var uu=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=ee.CancellationToken.None){let i=e.parseResult,o=[];if(await Nt(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(i,o,r),r.stopAfterLexingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===yi.LexingError})||(this.processParsingErrors(i,o,r),r.stopAfterParsingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===yi.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===yi.LinkingError}))))return o;try{o.push(...await this.validateAst(i.value,r,n))}catch(s){if(Xn(s))throw s;console.error("An error occurred during validation:",s)}return await Nt(n),o}processLexingErrors(e,r,n){for(let i of e.lexerErrors){let o={severity:Xd("error"),range:{start:{line:i.line-1,character:i.column-1},end:{line:i.line-1,character:i.column+i.length-1}},message:i.message,data:Yd(yi.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let i of e.parserErrors){let o;if(isNaN(i.token.startOffset)){if("previousToken"in i){let s=i.previousToken;if(isNaN(s.startOffset)){let a={line:0,character:0};o={start:a,end:a}}else{let a={line:s.endLine-1,character:s.endColumn};o={start:a,end:a}}}}else o=ws(i.token);if(o){let s={severity:Xd("error"),range:o,message:i.message,data:Yd(yi.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let i of e.references){let o=i.error;if(o){let s={node:o.container,property:o.property,index:o.index,data:{code:yi.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,s))}}}async validateAst(e,r,n=ee.CancellationToken.None){let i=[],o=(s,a,l)=>{i.push(this.toDiagnostic(s,a,l))};return await Promise.all(Vr(e).map(async s=>{await Nt(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let l of a)await l(s,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:PD(n),severity:Xd(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function PD(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Vi(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Fs(t.node.$cstNode,t.keyword,t.index)),e!=null||(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function Xd(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var yi;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(yi||(yi={}));var cu=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=_t(e)){r!=null||(r=this.nameProvider.getName(e));let i=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${i} has no name.`);let o,s=()=>{var a;return o!=null?o:o=No((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode)};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:No(e.$cstNode),type:e.$type,documentUri:n.uri,path:i}}},fu=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=ee.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of Vr(i))await Nt(r),$s(o).filter(s=>!vn(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=_t(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:No(n),local:Pt.equals(r.documentUri,i)}}};var du=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let s=o.indexOf(this.indexSeparator);if(s>0){let a=o.substring(0,s),l=parseInt(o.substring(s+1)),u=i[a];return u==null?void 0:u[l]}return i[o]},e)}};var pu=class{constructor(e){this._ready=new Dr,this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.fetchConfiguration){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await e.fetchConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){await this.ready;let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var Zo;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(Zo||(Zo={}));var mu=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new pn,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=oe.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=ee.CancellationToken.None){var i,o;for(let s of e){let a=s.uri.toString();if(s.state===oe.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=oe.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let l=this.buildState.get(a),u=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(u){let f=((o=r.validation.categories)!==null&&o!==void 0?o:Fa.all).filter(d=>!u.includes(d));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:f})},result:l.result}),s.state=oe.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=oe.Changed,await this.emitUpdate(e.map(s=>s.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=ee.CancellationToken.None){this.currentState=oe.Changed;for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString()),this.indexManager.remove(s);for(let s of e){if(!this.langiumDocuments.invalidateDocument(s)){let l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},s);l.state=oe.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(s.toString())}let i=he(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!i.has(s.uri.toString())&&this.shouldRelink(s,i)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,oe.ComputedScopes),s.diagnostics=void 0}),await this.emitUpdate(e,r),await Nt(n);let o=this.langiumDocuments.all.filter(s=>{var a;return s.state<oe.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),Zo.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,oe.Parsed,n,o=>this.langiumDocumentFactory.update(o,n)),await this.runCancelable(e,oe.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,oe.ComputedScopes,n,async o=>{let s=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await s.computeLocalScopes(o,n)}),await this.runCancelable(e,oe.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,oe.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o));await this.runCancelable(i,oe.Validated,n,o=>this.validate(o,n));for(let o of e){let s=this.buildState.get(o.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let i=n.uri.toString(),o=this.buildState.get(i);(!o||o.completed)&&this.buildState.set(i,{completed:!1,options:r,result:o==null?void 0:o.result})}}async runCancelable(e,r,n,i){let o=e.filter(s=>s.state<r);for(let s of o)await Nt(n),await i(s),s.state=r;await this.notifyBuildPhase(o,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Zo.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let i;if(r&&"path"in r?i=r:n=r,n!=null||(n=ee.CancellationToken.None),i){let o=this.langiumDocuments.getDocument(i);if(o&&o.state>e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Yn):new Promise((o,s)=>{let a=this.onBuildPhase(e,()=>{if(a.dispose(),l.dispose(),i){let u=this.langiumDocuments.getDocument(i);o(u==null?void 0:u.uri)}else o(void 0)}),l=n.onCancellationRequested(()=>{a.dispose(),l.dispose(),s(Yn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await Nt(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,i;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,l=await o.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;let u=this.buildState.get(e.uri.toString());if(u){(n=u.result)!==null&&n!==void 0||(u.result={});let c=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:Fa.all;u.result.validationChecks?u.result.validationChecks.push(...c):u.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var hu=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new Yo,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=_t(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(s=>{Pt.equals(s.targetUri,n)&&s.targetPath===r&&i.push(s)})}),he(i)}allElements(e,r){let n=he(this.symbolIndex.keys());return r&&(n=n.filter(i=>!r||r.has(i))),n.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var o;return((o=this.symbolIndex.get(e))!==null&&o!==void 0?o:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=ee.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),o=e.uri.toString();this.symbolIndex.set(o,i),this.symbolByTypeIndex.clear(o)}async updateReferences(e,r=ee.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(i=>!i.local&&r.has(i.targetUri.toString())):!1}};var gu=class{constructor(e){this.initialBuildOptions={},this._ready=new Dr,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=ee.CancellationToken.None){let n=await this.performStartup(e);await Nt(r),await this.documentBuilder.build(n,this.initialBuildOptions,r)}async performStartup(e){let r=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),n=[],i=o=>{n.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,i),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,r,i))),this._ready.resolve(),n}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return We.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,i);else if(s.isFile){let a=await this.langiumDocuments.getOrCreateDocument(s.uri);i(a)}}}))}includeEntry(e,r,n){let i=Pt.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=Pt.extname(r.uri);return n.includes(o)}return!1}};var Tu=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=by(r)?Object.values(r):r;this.chevrotainLexer=new Dt(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(by(e))return e;let r=Ly(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};function MD(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Ly(t){return t&&"modes"in t&&"defaultMode"in t}function by(t){return!MD(t)&&!Ly(t)}function $y(t,e,r){let n,i;typeof t=="string"?(i=e,n=r):(i=t.range.start,n=e),i||(i=we.create(0,0));let o=BD(t),s=My(n),a=uV({lines:o,position:i,options:s});return mV({index:0,tokens:a,position:i})}function Py(t,e){let r=My(e),n=BD(t);if(n.length===0)return!1;let i=n[0],o=n[n.length-1],s=r.start,a=r.end;return!!(s!=null&&s.exec(i))&&!!(a!=null&&a.exec(o))}function BD(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Jg)}var FD=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,lV=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function uV(t){var e,r,n;let i=[],o=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let l=a===0,u=a===t.lines.length-1,c=t.lines[a],f=0;if(l&&t.options.start){let m=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);m&&(f=m.index+m[0].length)}else{let m=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);m&&(f=m.index+m[0].length)}if(u){let m=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);m&&(c=c.substring(0,m.index))}if(c=c.substring(0,pV(c)),wy(c,f)>=c.length){if(i.length>0){let m=we.create(o,s);i.push({type:"break",content:"",range:De.create(m,m)})}}else{FD.lastIndex=f;let m=FD.exec(c);if(m){let R=m[0],O=m[1],I=we.create(o,s+f),E=we.create(o,s+f+R.length);i.push({type:"tag",content:O,range:De.create(I,E)}),f+=R.length,f=wy(c,f)}if(f<c.length){let R=c.substring(f),O=Array.from(R.matchAll(lV));i.push(...cV(O,R,o,s+f))}}o++,s=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function cV(t,e,r,n){let i=[];if(t.length===0){let o=we.create(r,n),s=we.create(r,n+e.length);i.push({type:"text",content:e,range:De.create(o,s)})}else{let o=0;for(let a of t){let l=a.index,u=e.substring(o,l);u.length>0&&i.push({type:"text",content:e.substring(o,l),range:De.create(we.create(r,o+n),we.create(r,l+n))});let c=u.length+1,f=a[1];if(i.push({type:"inline-tag",content:f,range:De.create(we.create(r,o+c+n),we.create(r,o+c+f.length+n))}),c+=f.length,a.length===4){c+=a[2].length;let d=a[3];i.push({type:"text",content:d,range:De.create(we.create(r,o+c+n),we.create(r,o+c+d.length+n))})}else i.push({type:"text",content:"",range:De.create(we.create(r,o+c+n),we.create(r,o+c+n))});o=l+a[0].length}let s=e.substring(o);s.length>0&&i.push({type:"text",content:s,range:De.create(we.create(r,o+n),we.create(r,o+n+s.length))})}return i}var fV=/\S/,dV=/\s*$/;function wy(t,e){let r=t.substring(e).match(fV);return r?e+r.index:t.length}function pV(t){let e=t.match(dV);if(e&&typeof e.index=="number")return e.index}function mV(t){var e,r,n,i;let o=we.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Jd([],De.create(o,o));let s=[];for(;t.index<t.tokens.length;){let u=hV(t,s[s.length-1]);u&&s.push(u)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,l=(i=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&i!==void 0?i:o;return new Jd(s,De.create(a,l))}function hV(t,e){let r=t.tokens[t.index];if(r.type==="tag")return VD(t,!1);if(r.type==="text"||r.type==="inline-tag")return WD(t);gV(r,e),t.index++}function gV(t,e){if(e){let r=new Qd("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function WD(t){let e=t.tokens[t.index],r=e,n=e,i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(TV(t)),n=e,e=t.tokens[t.index];return new _u(i,De.create(r.range.start,n.range.end))}function TV(t){return t.tokens[t.index].type==="inline-tag"?VD(t,!0):GD(t)}function VD(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){let o=GD(t);return new yu(n,new _u([o],o.range),e,De.create(r.range.start,o.range.end))}else{let o=WD(t);return new yu(n,o,e,De.create(r.range.start,o.range.end))}else{let o=r.range;return new yu(n,new _u([],o),e,o)}}function GD(t){let e=t.tokens[t.index++];return new Qd(e.content,e.range)}function My(t){if(!t)return My({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:ky(e,!0),end:ky(r,!1),line:ky(n,!0)}}function ky(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?Do(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var Jd=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=UD(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let i=n.toMarkdown(e);r+=UD(r)+i}return r.trim()}},yu=class{constructor(e,r,n,i){this.name=e,this.content=r,this.inline=n,this.range=i}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e==null?void 0:e.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=yV(this.name,r,e!=null?e:{});if(typeof o=="string")return o}let n="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?n="*":(e==null?void 0:e.tag)==="bold"?n="**":(e==null?void 0:e.tag)==="bold-italic"&&(n="***");let i=`${n}@${this.name}${n}`;return this.content.inlines.length===1?i=`${i} \u2014 ${r}`:this.content.inlines.length>1&&(i=`${i}
${r}`),this.inline?`{${i}}`:i}};function yV(t,e,r){var n,i;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),s=e;if(o>0){let l=wy(e,o);s=e.substring(l),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(i=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&i!==void 0?i:_V(e,s)}}function _V(t,e){try{return We.parse(t,!0),`[${e}](${t})`}catch{return t}}var _u=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],i=this.inlines[r+1];e+=n.toString(),i&&i.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let i=this.inlines[n],o=this.inlines[n+1];r+=i.toMarkdown(e),o&&o.range.start.line>i.range.start.line&&(r+=`
`)}return r}},Qd=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function UD(t){return t.endsWith(`
`)?`
`:`

`}var vu=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Py(r))return $y(r).toMarkdown({renderLink:(i,o)=>this.documentationLinkRenderer(e,i,o),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,r,n){var i;let o=(i=this.findNameInPrecomputedScopes(e,r))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let s=o.nameSegment.range.start.line+1,a=o.nameSegment.range.start.character+1,l=o.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${l.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let i=_t(e).precomputedScopes;if(!i)return;let o=e;do{let a=i.get(o).find(l=>l.name===r);if(a)return a;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(i=>i.name===r)}};var Ru=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Cy(e)?e.$comment:(r=Gg(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var Ct={};be(Ct,Kt(Oy(),1));var xu=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},Zd=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),i=new Dr,o,s=r.onCancellationRequested(()=>{o=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(a=>{let l=this.hydrator.hydrate(a);i.resolve(l)}).catch(a=>{i.reject(a)}).finally(()=>{s.dispose(),clearTimeout(o)}),i.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new Dr;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject(Yn)}),this.queue.push(r),r.promise}},ep=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,i){this.onReadyEmitter=new Ct.Emitter,this.deferred=new Dr,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=i,r(o=>{let s=o;this.deferred.resolve(s),this.unlock()}),n(o=>{this.deferred.reject(o),this.unlock()})}terminate(){this.deferred.reject(Yn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new Dr,this.sendMessage(e),this.deferred.promise}};var Nu=class{constructor(){this.previousTokenSource=new ee.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new ee.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let i=new Dr,o={action:r,deferred:i,cancellationToken:n!=null?n:ee.CancellationToken.None};return e.push(o),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:i})=>{try{let o=await Promise.resolve().then(()=>r(i));n.resolve(o)}catch(o){Xn(o)?n.resolve(void 0):n.reject(o)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var Ou=class{constructor(e){this.grammarElementIdMap=new Ko,this.tokenTypeIdMap=new Ko,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors.map(r=>Object.assign({},r)),parserErrors:e.parserErrors.map(r=>Object.assign({},r)),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}createDehyrationContext(e){let r=new Map,n=new Map;for(let i of Vr(e))r.set(i,{});if(e.$cstNode)for(let i of xo(e.$cstNode))n.set(i,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.dehydrateAstNode(a,r)):yt(a)?s.push(this.dehydrateReference(a,r)):s.push(a)}else Be(o)?n[i]=this.dehydrateAstNode(o,r):yt(o)?n[i]=this.dehydrateReference(o,r):o!==void 0&&(n[i]=o);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return ul(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),Rr(e)?n.content=e.content.map(i=>this.dehydrateCstNode(i,r)):Rn(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=e.value,n=this.createHydrationContext(r);return"$cstNode"in r&&this.hydrateCstNode(r.$cstNode,n),{lexerErrors:e.lexerErrors,parserErrors:e.parserErrors,value:this.hydrateAstNode(r,n)}}createHydrationContext(e){let r=new Map,n=new Map;for(let o of Vr(e))r.set(o,{});let i;if(e.$cstNode)for(let o of xo(e.$cstNode)){let s;"fullText"in o?(s=new La(o.fullText),i=s):"content"in o?s=new Go:"tokenType"in o&&(s=this.hydrateCstLeafNode(o)),s&&(n.set(o,s),s.root=i)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.setParent(this.hydrateAstNode(a,r),n)):yt(a)?s.push(this.hydrateReference(a,n,i,r)):s.push(a)}else Be(o)?n[i]=this.setParent(this.hydrateAstNode(o,r),n):yt(o)?n[i]=this.hydrateReference(o,n,i,r):o!==void 0&&(n[i]=o);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,i){return this.linker.buildReference(r,n,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let i=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=r.astNodes.get(e.astNode),Rr(i))for(let o of e.content){let s=this.hydrateCstNode(o,r,n++);i.content.push(s)}return i}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,i=e.length,o=e.startLine,s=e.startColumn,a=e.endLine,l=e.endColumn,u=e.hidden;return new Vo(n,i,{start:{line:o,character:s},end:{line:a,character:l}},r,u)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Vr(this.grammar))Ro(r)&&this.grammarElementIdMap.set(r,e++)}};function Eu(t){return{documentation:{CommentProvider:e=>new Ru(e),DocumentationProvider:e=>new vu(e)},parser:{AsyncParser:e=>new xu(e),GrammarConfig:e=>dT(e),LangiumParser:e=>yy(e),CompletionParser:e=>Ty(e),ValueConverter:()=>new ru,TokenBuilder:()=>new tu,Lexer:e=>new Tu(e),ParserErrorMessageProvider:()=>new ka},workspace:{AstNodeLocator:()=>new du,AstNodeDescriptionProvider:e=>new cu(e),ReferenceDescriptionProvider:e=>new fu(e)},references:{Linker:e=>new qo(e),NameProvider:()=>new ou,ScopeProvider:e=>new Xo(e),ScopeComputation:e=>new zo(e),References:e=>new Ho(e)},serializer:{Hydrator:e=>new Ou(e),JsonSerializer:e=>new Jo(e)},validation:{DocumentValidator:e=>new uu(e),ValidationRegistry:e=>new lu(e)},shared:()=>t.shared}}function Iu(t){return{ServiceRegistry:()=>new Qo,workspace:{LangiumDocuments:e=>new iu(e),LangiumDocumentFactory:e=>new nu(e),DocumentBuilder:e=>new mu(e),IndexManager:e=>new hu(e),WorkspaceManager:e=>new gu(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new Nu,ConfigurationProvider:e=>new pu(e)}}}var Ua;(function(t){t.merge=(e,r)=>tp(tp({},e),r)})(Ua||(Ua={}));function es(t,e,r,n,i,o,s,a,l){let u=[t,e,r,n,i,o,s,a,l].reduce(tp,{});return HD(u)}var Fy=Symbol("isProxy");function Su(t){if(t&&t[Fy])for(let e of Object.values(t))Su(e);return t}function HD(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>qD(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(qD(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),Fy]});return r[Fy]=!0,r}var jD=Symbol();function qD(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===jD)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=jD;try{t[e]=typeof i=="function"?i(n):HD(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function tp(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=tp(i,n):t[r]=n}}return t}var KD=Kt(Fr(),1);var Ba=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=Jt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let s=Pt.equals(_t(o).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(o,a).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return KD.DocumentHighlight.create(e.segment.range)}};var rp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o!=null?o:i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of Oo(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}};var Au=Kt(Fr(),1);var np=class{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var i,o;r=!!(!((o=(i=n.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||o===void 0)&&o.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=he(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,i={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n==null||n.client.register(Au.DidChangeWatchedFilesNotification.type,i)}}fireDocumentUpdate(e,r){this.workspaceManager.ready.then(()=>{this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}).catch(n=>{console.error("Workspace initialization failed. Could not perform document update.",n)})}didChangeContent(e){this.fireDocumentUpdate([We.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=he(e.changes).filter(i=>i.type!==Au.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>We.parse(i.uri)).toArray(),n=he(e.changes).filter(i=>i.type===Au.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>We.parse(i.uri)).toArray();this.fireDocumentUpdate(r,n)}};var Du=Kt(Fr(),1);var ip=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=Wr(i).iterator(),s;do if(s=o.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||o.prune()}while(!s.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of Wg(i))if(this.commentNames.includes(o.tokenType.name)){let s=this.toFoldingRange(e,o,Du.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,s=i.end;if(!(s.line-o.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),Du.FoldingRange.create(o.line,s.line,o.character,s.character,n)}includeLastFoldingLine(e,r){if(r===Du.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};var op=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,s=r.length;for(let a=0;a<s;a++){let l=r.charCodeAt(a),u=e.charCodeAt(o);if((l===u||this.toUpperCharCode(l)===this.toUpperCharCode(u))&&(n||(n=i===void 0||this.isWordTransition(i,l)),n&&o++,o===e.length))return!0;i=l}return!1}isWordTransition(e,r){return zD<=e&&e<=YD&&vV<=r&&r<=RV||e===XD&&r!==XD}toUpperCharCode(e){return zD<=e&&e<=YD?e-32:e}},zD=97,YD=122,vV=65,RV=90,XD=95;var Uy=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let s=e.textDocument.offsetAt(r.position),a=Jt(o,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l)}}}},sp=class extends Uy{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var mn=Kt(Tt(),1);var Ee=Kt(Fr(),1);var QD={[Ee.SemanticTokenTypes.class]:0,[Ee.SemanticTokenTypes.comment]:1,[Ee.SemanticTokenTypes.enum]:2,[Ee.SemanticTokenTypes.enumMember]:3,[Ee.SemanticTokenTypes.event]:4,[Ee.SemanticTokenTypes.function]:5,[Ee.SemanticTokenTypes.interface]:6,[Ee.SemanticTokenTypes.keyword]:7,[Ee.SemanticTokenTypes.macro]:8,[Ee.SemanticTokenTypes.method]:9,[Ee.SemanticTokenTypes.modifier]:10,[Ee.SemanticTokenTypes.namespace]:11,[Ee.SemanticTokenTypes.number]:12,[Ee.SemanticTokenTypes.operator]:13,[Ee.SemanticTokenTypes.parameter]:14,[Ee.SemanticTokenTypes.property]:15,[Ee.SemanticTokenTypes.regexp]:16,[Ee.SemanticTokenTypes.string]:17,[Ee.SemanticTokenTypes.struct]:18,[Ee.SemanticTokenTypes.type]:19,[Ee.SemanticTokenTypes.typeParameter]:20,[Ee.SemanticTokenTypes.variable]:21,[Ee.SemanticTokenTypes.decorator]:22},xV={[Ee.SemanticTokenModifiers.abstract]:1,[Ee.SemanticTokenModifiers.async]:2,[Ee.SemanticTokenModifiers.declaration]:4,[Ee.SemanticTokenModifiers.defaultLibrary]:8,[Ee.SemanticTokenModifiers.definition]:16,[Ee.SemanticTokenModifiers.deprecated]:32,[Ee.SemanticTokenModifiers.documentation]:64,[Ee.SemanticTokenModifiers.modification]:128,[Ee.SemanticTokenModifiers.readonly]:256,[Ee.SemanticTokenModifiers.static]:512},ZD={legend:{tokenTypes:Object.keys(QD),tokenModifiers:Object.keys(xV)},full:{delta:!0},range:!0};var JD;(function(t){function e(n,i){let o=new Map;Object.entries(QD).forEach(([l,u])=>o.set(u,l));let s=0,a=0;return r(n.data,5).map(l=>{s+=l[0],l[0]!==0&&(a=0),a+=l[1];let u=l[2];return{offset:i.textDocument.offsetAt({line:s,character:a}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:i.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+u}})}})}t.decode=e;function r(n,i){let o=[];for(let s=0;s<n.length;s+=i){let a=n.slice(s,s+i);o.push(a)}return o}})(JD||(JD={}));var ap=class{provideSignatureHelp(e,r,n=ee.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let s=pl(o,e.textDocument.offsetAt(r.position));if(s)return this.getSignatureFromElement(s.astNode,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};function eC(t){let e=[],r=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var lp=class{constructor(e){this.onInitializeEmitter=new mn.Emitter,this.onInitializedEmitter=new mn.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Su(this.services),this.services.ServiceRegistry.all.forEach(e=>Su(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,i,o;let s=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,a=this.services.ServiceRegistry.all,l=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.Formatter}),u=a.map(V=>{var U,xe;return(xe=(U=V.lsp)===null||U===void 0?void 0:U.Formatter)===null||xe===void 0?void 0:xe.formatOnTypeOptions}).find(V=>!!V),c=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.CodeActionProvider}),f=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.SemanticTokenProvider}),d=(i=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,m=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.DocumentLinkProvider}),R=eC(a.map(V=>{var U,xe;return(xe=(U=V.lsp)===null||U===void 0?void 0:U.SignatureHelp)===null||xe===void 0?void 0:xe.signatureHelpOptions})),O=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.TypeProvider}),I=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.ImplementationProvider}),E=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.CompletionProvider}),y=ZN(a.map(V=>{var U,xe;return(xe=(U=V.lsp)===null||U===void 0?void 0:U.CompletionProvider)===null||xe===void 0?void 0:xe.completionOptions})),T=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.ReferencesProvider}),S=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.DocumentSymbolProvider}),M=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.DefinitionProvider}),te=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.DocumentHighlightProvider}),ue=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.FoldingRangeProvider}),de=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.HoverProvider}),_e=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.RenameProvider}),ve=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.CallHierarchyProvider}),G=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.TypeHierarchyProvider}),k=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.CodeLensProvider}),j=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.DeclarationProvider}),H=this.hasService(V=>{var U;return(U=V.lsp)===null||U===void 0?void 0:U.InlayHintProvider}),le=(o=this.services.lsp)===null||o===void 0?void 0:o.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:s},executeCommandProvider:d&&{commands:d},textDocumentSync:mn.TextDocumentSyncKind.Incremental,completionProvider:E?y:void 0,referencesProvider:T,documentSymbolProvider:S,definitionProvider:M,typeDefinitionProvider:O,documentHighlightProvider:te,codeActionProvider:c,documentFormattingProvider:l,documentRangeFormattingProvider:l,documentOnTypeFormattingProvider:u,foldingRangeProvider:ue,hoverProvider:de,renameProvider:_e?{prepareProvider:!0}:void 0,semanticTokensProvider:f?ZD:void 0,signatureHelpProvider:R,implementationProvider:I,callHierarchyProvider:ve?{}:void 0,typeHierarchyProvider:G?{}:void 0,documentLinkProvider:m?{resolveProvider:!1}:void 0,codeLensProvider:k?{resolveProvider:!1}:void 0,declarationProvider:j,inlayHintProvider:H?{resolveProvider:!1}:void 0,workspaceSymbolProvider:le?{resolveProvider:!!le.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:i=>r.client.register(mn.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>r.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(n).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}};function tC(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");NV(e,t),OV(e,t),EV(e,t),IV(e,t),SV(e,t),DV(e,t),CV(e,t),bV(e,t),LV(e,t),wV(e,t),PV(e,t),MV(e,t),AV(e,t),FV(e,t),$V(e,t),UV(e,t),BV(e,t),VV(e,t),jV(e,t),KV(e,t),zV(e,t),qV(e,t),GV(e,t),WV(e,t),kV(e,t),HV(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>{t.lsp.LanguageServer.initialized(n)}),t.workspace.TextDocuments.listen(e),e.listen()}function NV(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(i=>r.didChangeContent(i)),t.onDidChangeWatchedFiles(i=>r.didChangeWatchedFiles(i))}function OV(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function EV(t,e){e.workspace.DocumentBuilder.onBuildPhase(oe.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}function IV(t,e){t.onCompletion(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e,oe.IndexedReferences))}function SV(t,e){t.onReferences(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e,oe.IndexedReferences))}function AV(t,e){t.onCodeAction(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e,oe.Validated))}function DV(t,e){t.onDocumentSymbol(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e,oe.Parsed))}function CV(t,e){t.onDefinition(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e,oe.IndexedReferences))}function bV(t,e){t.onTypeDefinition(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e,oe.IndexedReferences))}function LV(t,e){t.onImplementation(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e,oe.IndexedReferences))}function kV(t,e){t.onDeclaration(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e,oe.IndexedReferences))}function wV(t,e){t.onDocumentHighlight(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e,oe.IndexedReferences))}function $V(t,e){t.onHover(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e,oe.IndexedReferences))}function PV(t,e){t.onFoldingRanges(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e,oe.Parsed))}function MV(t,e){t.onDocumentFormatting(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e,oe.Parsed)),t.onDocumentRangeFormatting(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e,oe.Parsed)),t.onDocumentOnTypeFormatting(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e,oe.Parsed))}function FV(t,e){t.onRenameRequest(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e,oe.IndexedReferences)),t.onPrepareRename(_r((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e,oe.IndexedReferences))}function UV(t,e){t.languages.inlayHint.on(_i((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(n,i,o)},e,oe.IndexedReferences))}function BV(t,e){let r={data:[]};t.languages.semanticTokens.on(_i((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,s):r},e,oe.IndexedReferences)),t.languages.semanticTokens.onDelta(_i((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,s):r},e,oe.IndexedReferences)),t.languages.semanticTokens.onRange(_i((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,s):r},e,oe.IndexedReferences))}function WV(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function VV(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(s){return ts(s)}})}function GV(t,e){t.onDocumentLinks(_i((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(n,i,o)},e,oe.Parsed))}function jV(t,e){t.onSignatureHelp(_i((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e,oe.IndexedReferences))}function qV(t,e){t.onCodeLens(_i((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(n,i,o)},e,oe.IndexedReferences))}function HV(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(s,a)=>{try{return await i.waitUntil(oe.IndexedContent,a),await n.getSymbols(s,a)}catch(l){return ts(l)}});let o=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);o&&t.onWorkspaceSymbolResolve(async(s,a)=>{try{return await i.waitUntil(oe.IndexedContent,a),await o(s,a)}catch(l){return ts(l)}})}}function KV(t,e){t.languages.callHierarchy.onPrepare(_i(async(r,n,i,o)=>{var s;if(!((s=r.lsp)===null||s===void 0)&&s.CallHierarchyProvider){let a=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,i,o);return a!=null?a:null}return null},e,oe.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(up(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.incomingCalls(n,i);return s!=null?s:null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(up(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.outgoingCalls(n,i);return s!=null?s:null}return null},e))}function zV(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(_i(async(r,n,i,o)=>{var s,a;let l=await((a=(s=r.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(n,i,o));return l!=null?l:null},e,oe.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(up(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.supertypes(n,i));return a!=null?a:null},e)),t.languages.typeHierarchy.onSubtypes(up(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.subtypes(n,i));return a!=null?a:null},e)))}function up(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=We.parse(n.item.uri),s=await By(e,i,o,oe.IndexedReferences);if(s)return s;let a=r.getServices(o);if(!a){let l=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(l),new Error(l)}try{return await t(a,n,i)}catch(l){return ts(l)}}}function _i(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=We.parse(o.textDocument.uri),l=await By(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u){let f=`Could not find service instance for uri: '${a}'`;throw console.error(f),new Error(f)}let c=await n.getOrCreateDocument(a);try{return await t(u,c,o,s)}catch(f){return ts(f)}}}function _r(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=We.parse(o.textDocument.uri),l=await By(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let c=n.getDocument(a);if(!c)return null;try{return await t(u,c,o,s)}catch(f){return ts(f)}}}async function By(t,e,r,n){if(n!==void 0){let i=t.workspace.DocumentBuilder;try{await i.waitUntil(n,r,e)}catch(o){return ts(o)}}}function ts(t){if(Xn(t))return new mn.ResponseError(mn.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof mn.ResponseError)return t;throw t}var fp=Kt(Fr(),1),cp=class{getSymbolKind(){return fp.SymbolKind.Field}getCompletionItemKind(){return fp.CompletionItemKind.Reference}};var rC=Kt(Fr(),1);var dp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=Jt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,s).forEach(a=>{i.push(rC.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}};var pp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),s=Jt(i,o,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,l).forEach(c=>{let f=ao.replace(c.segment.range,r.newName),d=c.sourceUri.toString();n[d]?n[d].push(f):n[d]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=Jt(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&Kd(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var mp=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=ee.CancellationToken.None){let n=[],i=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await Nt(r),this.fuzzyMatcher.match(i,o.name)){let s=this.getWorkspaceSymbol(o);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function iC(t){return Ua.merge(Eu(t),YV(t))}function YV(t){return{lsp:{CompletionProvider:e=>new Ws(e),DocumentSymbolProvider:e=>new rp(e),HoverProvider:e=>new sp(e),FoldingRangeProvider:e=>new ip(e),ReferencesProvider:e=>new dp(e),DefinitionProvider:e=>new vf(e),DocumentHighlightProvider:e=>new Ba(e),RenameProvider:e=>new pp(e)},shared:()=>t.shared}}function oC(t){return Ua.merge(Iu(t),XV(t))}function XV(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new lp(e),DocumentUpdateHandler:e=>new np(e),WorkspaceSymbolProvider:e=>new mp(e),NodeKindProvider:()=>new cp,FuzzyMatcher:()=>new op},workspace:{TextDocuments:()=>new nC.TextDocuments(lo)}}}var hp=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Wy(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var s;return(s=o.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var s;return(s=o.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(a,l,u)=>{var c,f;let d=this.nodeModeToKey(a,l),m=i.get(d),R=(c=u.options.priority)!==null&&c!==void 0?c:0,O=(f=m==null?void 0:m.options.priority)!==null&&f!==void 0?f:0;(!m||O<=R)&&i.set(d,u)};this.collector=o,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let s=e.offsetAt(i.range.start),a=e.offsetAt(o.range.end);s<a&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=Wr(n).iterator(),o;do if(o=i.next(),!o.done){let s=o.value;this.insideRange(s.$cstNode.range,r)?this.format(s):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},s=[],l=this.iterateCstTree(e,o).iterator(),u,c;do if(c=l.next(),!c.done){let f=c.value,d=Rn(f),m=this.nodeModeToKey(f,"prepend"),R=r.get(m);if(r.delete(m),R){let E=this.createTextEdit(u,f,R,o);for(let y of E)y&&this.insideRange(y.range,i)&&this.isNecessary(y,e.textDocument)&&s.push(y)}let O=this.nodeModeToKey(f,"append"),I=r.get(O);if(r.delete(O),I){let E=jg(f);if(E){let y=this.createTextEdit(f,E,I,o);for(let T of y)T&&this.insideRange(T.range,i)&&this.isNecessary(T,e.textDocument)&&s.push(T)}}if(!R&&f.hidden){let E=this.createHiddenTextEdits(u,f,void 0,o);for(let y of E)y&&this.insideRange(y.range,i)&&this.isNecessary(y,e.textDocument)&&s.push(y)}d&&(u=f)}while(!c.done);return s}createHiddenTextEdits(e,r,n,i){var o;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],l={start:{character:0,line:s},end:r.range.start},u=i.document.getText(l),c=this.findFittingMove(l,(o=n==null?void 0:n.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(u,i),m=this.getIndentationCharacterCount(i,c)-f;if(m===0)return[];let R="";m>0&&(R=(i.options.insertSpaces?" ":"	").repeat(m));let O=r.text.split(`
`);O[0]=u+O[0];for(let I=0;I<O.length;I++){let E=s+I,y={character:0,line:E};if(m>0)a.push({newText:R,range:{start:y,end:y}});else{let T=O[I],S=0;for(;S<T.length;S++){let M=T.charAt(S);if(M!==" "&&M!=="	")break}a.push({newText:"",range:{start:y,end:{line:E,character:Math.min(S,Math.abs(m))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let s={start:(o=e==null?void 0:e.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,i);if(!a)return[];let l=a.characters,u=a.lines,c=a.tabs,f=i.indentation;i.indentation+=c!=null?c:0;let d=[];return l!==void 0?d.push(this.createSpaceTextEdit(s,l,n.options)):u!==void 0?d.push(this.createLineTextEdit(s,u,i,n.options)):c!==void 0&&d.push(this.createTabTextEdit(s,!!e,i)),Rn(r)&&(i.indentation=f),d}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new cn(i,o=>this.iterateCst(o,r)):Ui}iterateCst(e,r){if(!Rr(e))return Ui;let n=r.indentation;return new xr(()=>({index:0}),i=>i.index<e.content.length?{done:!1,value:e.content[i.index++]}:(r.indentation=n,sr))}},Wy=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new In(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new In(r,this.collector)}property(e,r){let n=Vi(this.astNode.$cstNode,e,r);return new In(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=Ms(this.astNode.$cstNode,n);r.push(...i)}return new In(r,this.collector)}keyword(e,r){let n=Fs(this.astNode.$cstNode,e,r);return new In(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=Tf(this.astNode.$cstNode,n);r.push(...i)}return new In(r,this.collector)}cst(e){return new In([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new In([],this.collector);let o=n[0],s=i[0];if(o.offset>s.offset){let a=o;o=s,s=a}return new In(qg(o,s),this.collector)}},In=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},sC;(function(t){function e(...c){return{options:{},moves:c.flatMap(f=>f.moves).sort(u)}}t.fit=e;function r(c){return i(0,c)}t.noSpace=r;function n(c){return i(1,c)}t.oneSpace=n;function i(c,f){return{options:f!=null?f:{},moves:[{characters:c}]}}t.spaces=i;function o(c){return s(1,c)}t.newLine=o;function s(c,f){return{options:f!=null?f:{},moves:[{lines:c}]}}t.newLines=s;function a(c){return{options:c!=null?c:{},moves:[{tabs:1,lines:1}]}}t.indent=a;function l(c){return{options:c!=null?c:{},moves:[{tabs:0}]}}t.noIndent=l;function u(c,f){var d,m,R,O,I,E;let y=(d=c.lines)!==null&&d!==void 0?d:0,T=(m=f.lines)!==null&&m!==void 0?m:0,S=(R=c.tabs)!==null&&R!==void 0?R:0,M=(O=f.tabs)!==null&&O!==void 0?O:0,te=(I=c.characters)!==null&&I!==void 0?I:0,ue=(E=f.characters)!==null&&E!==void 0?E:0;return y<T?-1:y>T?1:S<M?-1:S>M?1:te<ue?-1:te>ue?1:0}})(sC||(sC={}));var JV=Kt(Fr(),1);var Vy=Kt(require("fs"),1),Gy=class{constructor(){this.encoding="utf-8"}readFile(e){return Vy.promises.readFile(e.fsPath,this.encoding)}async readDirectory(e){return(await Vy.promises.readdir(e.fsPath,{withFileTypes:!0})).map(n=>({dirent:n,isFile:n.isFile(),isDirectory:n.isDirectory(),uri:Pt.joinPath(e,n.name)}))}},aC={fileSystemProvider:()=>new Gy};var qa=Kt(uC(),1);var lae=Symbol("LdLSPServices");var Ge={};Ei(Ge,{AbstractAstReflection:()=>vo,AbstractCstNode:()=>Jl,AbstractLangiumParser:()=>Ql,AbstractParserErrorMessageProvider:()=>Bd,AbstractThreadedAsyncParser:()=>Zd,AstUtils:()=>Nr,BiMap:()=>Ko,Cancellation:()=>ee,CompositeCstNodeImpl:()=>Go,ContextCache:()=>Yo,CstNodeBuilder:()=>Xl,CstUtils:()=>Bi,DONE_RESULT:()=>sr,DatatypeSymbol:()=>Ud,DefaultAstNodeDescriptionProvider:()=>cu,DefaultAstNodeLocator:()=>du,DefaultAsyncParser:()=>xu,DefaultCommentProvider:()=>Ru,DefaultConfigurationProvider:()=>pu,DefaultDocumentBuilder:()=>mu,DefaultDocumentValidator:()=>uu,DefaultHydrator:()=>Ou,DefaultIndexManager:()=>hu,DefaultJsonSerializer:()=>Jo,DefaultLangiumDocumentFactory:()=>nu,DefaultLangiumDocuments:()=>iu,DefaultLexer:()=>Tu,DefaultLinker:()=>qo,DefaultNameProvider:()=>ou,DefaultReferenceDescriptionProvider:()=>fu,DefaultReferences:()=>Ho,DefaultScopeComputation:()=>zo,DefaultScopeProvider:()=>Xo,DefaultServiceRegistry:()=>Qo,DefaultTokenBuilder:()=>tu,DefaultValueConverter:()=>ru,DefaultWorkspaceLock:()=>Nu,DefaultWorkspaceManager:()=>gu,Deferred:()=>Dr,Disposable:()=>Zo,DisposableCache:()=>Pa,DocumentCache:()=>zd,DocumentState:()=>oe,DocumentValidator:()=>yi,EMPTY_SCOPE:()=>aV,EMPTY_STREAM:()=>Ui,EmptyFileSystem:()=>jy,EmptyFileSystemProvider:()=>gp,ErrorWithLocation:()=>Eo,GrammarAST:()=>nt,GrammarUtils:()=>St,JSDocDocumentationProvider:()=>vu,LangiumCompletionParser:()=>eu,LangiumParser:()=>Zl,LangiumParserErrorMessageProvider:()=>ka,LeafCstNodeImpl:()=>Vo,MapScope:()=>su,Module:()=>Ua,MultiMap:()=>pn,OperationCancelled:()=>Yn,ParserWorker:()=>ep,Reduction:()=>ks,RegExpUtils:()=>gf,RootCstNodeImpl:()=>La,SimpleCache:()=>au,StreamImpl:()=>xr,StreamScope:()=>zr,TextDocument:()=>lo,TreeStreamImpl:()=>cn,URI:()=>We,UriUtils:()=>Pt,ValidationCategory:()=>Fa,ValidationRegistry:()=>lu,ValueConverter:()=>zn,WorkspaceCache:()=>Ma,assertUnreachable:()=>Wi,createCompletionParser:()=>Ty,createDefaultCoreModule:()=>Eu,createDefaultSharedCoreModule:()=>Iu,createGrammarConfig:()=>dT,createLangiumParser:()=>yy,delayNextTick:()=>Ay,diagnosticData:()=>Yd,eagerLoad:()=>Su,getDiagnosticRange:()=>PD,inject:()=>es,interruptAndCheck:()=>Nt,isAstNode:()=>Be,isAstNodeDescription:()=>ll,isAstNodeWithComment:()=>Cy,isCompositeCstNode:()=>Rr,isIMultiModeLexerDefinition:()=>Ly,isJSDoc:()=>Py,isLeafCstNode:()=>Rn,isLinkingError:()=>vn,isNamed:()=>Kd,isOperationCancelled:()=>Xn,isReference:()=>yt,isRootCstNode:()=>ul,isTokenTypeArray:()=>MD,isTokenTypeDictionary:()=>by,loadGrammarFromJson:()=>Tp,parseJSDoc:()=>$y,prepareLangiumParser:()=>OD,setInterruptionPeriod:()=>LD,startCancelableOperation:()=>bD,stream:()=>he,toDiagnosticSeverity:()=>Xd});var $e={};Ei($e,{AstUtils:()=>Nr,BiMap:()=>Ko,Cancellation:()=>ee,ContextCache:()=>Yo,CstUtils:()=>Bi,DONE_RESULT:()=>sr,Deferred:()=>Dr,Disposable:()=>Zo,DisposableCache:()=>Pa,DocumentCache:()=>zd,EMPTY_STREAM:()=>Ui,ErrorWithLocation:()=>Eo,GrammarUtils:()=>St,MultiMap:()=>pn,OperationCancelled:()=>Yn,Reduction:()=>ks,RegExpUtils:()=>gf,SimpleCache:()=>au,StreamImpl:()=>xr,TreeStreamImpl:()=>cn,URI:()=>We,UriUtils:()=>Pt,WorkspaceCache:()=>Ma,assertUnreachable:()=>Wi,delayNextTick:()=>Ay,interruptAndCheck:()=>Nt,isOperationCancelled:()=>Xn,loadGrammarFromJson:()=>Tp,setInterruptionPeriod:()=>LD,startCancelableOperation:()=>bD,stream:()=>he});be($e,Ct);var gp=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},jy={fileSystemProvider:()=>new gp};var QV={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},ZV={AstReflection:()=>new Cs};function eG(){let t=es(Iu(jy),ZV),e=es(Eu({shared:t}),QV);return t.ServiceRegistry.register(e),e}function Tp(t){var e;let r=eG(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,We.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}be(Ge,$e);var bt=Kt(Tt(),1);var qy="ComposeElement";var yp="NamedElement";function cC(t){return ot.isInstance(t,yp)}var tG="Statement";var rG="Subscript_list";var Hy="Universe";var fC="Alias";function _p(t){return ot.isInstance(t,fC)}var nG="Arr_string";function Wa(t){return ot.isInstance(t,nG)}var iG="AssignPrefix";function dC(t){return ot.isInstance(t,iG)}var oG="Case_statement";function pC(t){return ot.isInstance(t,oG)}var Ky="Expression";function Sn(t){return ot.isInstance(t,Ky)}var sG="For_statement";function mC(t){return ot.isInstance(t,sG)}var aG="Function_invoke_or_assign";function hC(t){return ot.isInstance(t,aG)}var lG="Function_invoke_or_assign_statement";var gC="FunctionBlock";function vi(t){return ot.isInstance(t,gC)}var uG="Interface";var cG="Invoke_subrule";function TC(t){return ot.isInstance(t,cG)}var fG="Iteration_statement";var dG="Methods";function yC(t){return ot.isInstance(t,dG)}var _C="Native_Type_Name";function bu(t){return ot.isInstance(t,_C)}var pG="RefFunctionOrBlockName";function vC(t){return ot.isInstance(t,pG)}var mG="Repeat_statement";function RC(t){return ot.isInstance(t,mG)}var hG="ReturnParse";function xC(t){return ot.isInstance(t,hG)}var gG="Selection_statement";var TG="StEnum";var NC="StFunction";function Jn(t){return ot.isInstance(t,NC)}var OC="Struct_Var_Decl_Init";function Lu(t){return ot.isInstance(t,OC)}var EC="StructsList";function rs(t){return ot.isInstance(t,EC)}var IC="VarDeclarationInit";function rr(t){return ot.isInstance(t,IC)}var yG="While_statement";function SC(t){return ot.isInstance(t,yG)}var AC="Constant";function ku(t){return ot.isInstance(t,AC)}var DC="EnumeratedValue";function An(t){return ot.isInstance(t,DC)}var CC="FunctionExpression";function zy(t){return ot.isInstance(t,CC)}var bC="MemberCall";function Dn(t){return ot.isInstance(t,bC)}var LC="VariableExpression";function Cr(t){return ot.isInstance(t,LC)}var _G="Array_liters";var Cu=class extends vo{getAllTypes(){return["Action_call_statement","Alias","Arr_string","Array_element","Array_liters","AssignPrefix","Assignment_subrule","Case_element","Case_list","Case_list_element","Case_statement","ComposeElement","Constant","Enum","EnumeratedValue","Expression","For_list","For_statement","FunctionBlock","FunctionExpression","Function_invoke_or_assign","Function_invoke_or_assign_statement","If_statement","InputsList","InputsListSingle","Interface","Invoke_subrule","Iteration_statement","MemberCall","Methods","NamedElement","Native_Type_Name","Param_assignment","PrimaryVariable","Program","RefFunctionOrBlockName","Repeat_statement","ReqParams","ReturnParse","Selection_statement","St","StEnum","StFunction","Statement","Statement_list","Statement_list_single","Struct_Var_Decl_Init","StructsList","Subscript_list","UnionsList","Universe","VarDeclarationInit","VarInput","VarLocal","VarOutput","VariableExpression","While_statement"]}computeIsSubtype(e,r){switch(e){case fC:case gC:case TG:case EC:return this.isSubtype(qy,r);case _G:return this.isSubtype(_C,r);case AC:case DC:case CC:case bC:case LC:return this.isSubtype(Ky,r);case Ky:return this.isSubtype(rG,r);case lG:case fG:case gG:return this.isSubtype(tG,r);case yp:return this.isSubtype(Hy,r);case NC:return this.isSubtype(qy,r)||this.isSubtype(Hy,r);case OC:case IC:return this.isSubtype(yp,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action_call_statement:actionName":case"AssignPrefix:varEnchanceDecl":case"RefFunctionOrBlockName:refFunctionName":return Hy;case"Array_liters:Identifier":case"EnumeratedValue:enumType":case"Native_Type_Name:Identifier":return qy;case"For_statement:controlVariable":case"MemberCall:element":case"VariableExpression:variable":return yp;case"Interface:extender":return uG;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Action_call_statement":return{name:"Action_call_statement",properties:[{name:"actionName"}]};case"Alias":return{name:"Alias",properties:[{name:"initialValue"},{name:"name"},{name:"refName"}]};case"Arr_string":return{name:"Arr_string",properties:[{name:"arrElements",defaultValue:[]}]};case"Array_element":return{name:"Array_element",properties:[{name:"left"},{name:"right"}]};case"Assignment_subrule":return{name:"Assignment_subrule",properties:[{name:"expression"}]};case"AssignPrefix":return{name:"AssignPrefix",properties:[{name:"varEnchanceDecl"}]};case"Case_element":return{name:"Case_element",properties:[{name:"caseList"},{name:"statements"}]};case"Case_list":return{name:"Case_list",properties:[{name:"caseListElement",defaultValue:[]}]};case"Case_list_element":return{name:"Case_list_element",properties:[{name:"enumCase"},{name:"numCaseStart"},{name:"numericCaseEnd"},{name:"simpleEnumCase"}]};case"Case_statement":return{name:"Case_statement",properties:[{name:"caseElements",defaultValue:[]},{name:"caseExpression"},{name:"elseStatements"}]};case"Enum":return{name:"Enum",properties:[{name:"assignValue"},{name:"variable_name"}]};case"Expression":return{name:"Expression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"For_list":return{name:"For_list",properties:[{name:"byExpr"},{name:"forExpr"},{name:"toExpr"}]};case"For_statement":return{name:"For_statement",properties:[{name:"controlVariable"},{name:"forList"},{name:"statementList"}]};case"Function_invoke_or_assign":return{name:"Function_invoke_or_assign",properties:[{name:"assign"},{name:"assignPrefix"},{name:"id"},{name:"params",defaultValue:[]}]};case"Function_invoke_or_assign_statement":return{name:"Function_invoke_or_assign_statement",properties:[{name:"statement"}]};case"FunctionBlock":return{name:"FunctionBlock",properties:[{name:"methods",defaultValue:[]},{name:"name"},{name:"statementList",defaultValue:[]},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"If_statement":return{name:"If_statement",properties:[{name:"elseStatement"},{name:"elsifConditions",defaultValue:[]},{name:"elsifStatements"},{name:"ifCondition"},{name:"ifStatement"}]};case"InputsList":return{name:"InputsList",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"InputsListSingle":return{name:"InputsListSingle",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"Interface":return{name:"Interface",properties:[{name:"extender"},{name:"methods",defaultValue:[]},{name:"name"}]};case"Invoke_subrule":return{name:"Invoke_subrule",properties:[{name:"parameters",defaultValue:[]}]};case"Iteration_statement":return{name:"Iteration_statement",properties:[{name:"statement"}]};case"Methods":return{name:"Methods",properties:[{name:"inputs",defaultValue:[]},{name:"modifier"},{name:"name"},{name:"reqParams",defaultValue:[]},{name:"statementList"},{name:"variable_type"}]};case"Native_Type_Name":return{name:"Native_Type_Name",properties:[{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};case"Param_assignment":return{name:"Param_assignment",properties:[{name:"InputOrOutputSign"},{name:"ParamName"},{name:"ParamValue"}]};case"PrimaryVariable":return{name:"PrimaryVariable",properties:[{name:"name"}]};case"Program":return{name:"Program",properties:[{name:"inputs",defaultValue:[]},{name:"name"},{name:"stStatements"}]};case"RefFunctionOrBlockName":return{name:"RefFunctionOrBlockName",properties:[{name:"Cache_type_name"},{name:"refFunctionName"}]};case"Repeat_statement":return{name:"Repeat_statement",properties:[{name:"statementList"},{name:"untilExpr"}]};case"ReqParams":return{name:"ReqParams",properties:[{name:"param"},{name:"typeName"}]};case"ReturnParse":return{name:"ReturnParse",properties:[{name:"returnSign"},{name:"returnValue"}]};case"Selection_statement":return{name:"Selection_statement",properties:[{name:"case"},{name:"if"}]};case"St":return{name:"St",properties:[{name:"function_block",defaultValue:[]},{name:"itface",defaultValue:[]},{name:"program",defaultValue:[]},{name:"st_function",defaultValue:[]},{name:"types_alias",defaultValue:[]},{name:"types_enum",defaultValue:[]},{name:"types_struct",defaultValue:[]},{name:"types_union",defaultValue:[]}]};case"Statement_list":return{name:"Statement_list",properties:[{name:"statements",defaultValue:[]}]};case"Statement_list_single":return{name:"Statement_list_single",properties:[{name:"statements"}]};case"StEnum":return{name:"StEnum",properties:[{name:"enum",defaultValue:[]},{name:"name"}]};case"StFunction":return{name:"StFunction",properties:[{name:"name"},{name:"statementList",defaultValue:[]},{name:"variable_type"},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"Struct_Var_Decl_Init":return{name:"Struct_Var_Decl_Init",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"StructsList":return{name:"StructsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"UnionsList":return{name:"UnionsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"VarDeclarationInit":return{name:"VarDeclarationInit",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"VarInput":return{name:"VarInput",properties:[{name:"items",defaultValue:[]}]};case"VarLocal":return{name:"VarLocal",properties:[{name:"items",defaultValue:[]}]};case"VarOutput":return{name:"VarOutput",properties:[{name:"items",defaultValue:[]}]};case"While_statement":return{name:"While_statement",properties:[{name:"statementList"},{name:"whileExpr"}]};case"Constant":return{name:"Constant",properties:[{name:"constant"},{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"EnumeratedValue":return{name:"EnumeratedValue",properties:[{name:"enumCacheTypeName"},{name:"enumType"},{name:"enumValue"},{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"FunctionExpression":return{name:"FunctionExpression",properties:[{name:"left"},{name:"operator"},{name:"params"},{name:"prefixValidateElement"},{name:"prior"},{name:"refFunctionName"},{name:"right"},{name:"suffixValidateElement"},{name:"value"}]};case"MemberCall":return{name:"MemberCall",properties:[{name:"arguments",defaultValue:[]},{name:"element"},{name:"explicitOperationCall",defaultValue:!1},{name:"left"},{name:"operator"},{name:"previous"},{name:"prior"},{name:"right"},{name:"value"}]};case"VariableExpression":return{name:"VariableExpression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"},{name:"variable"}]};case"Array_liters":return{name:"Array_liters",properties:[{name:"arrayElemets",defaultValue:[]},{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"dataType"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};default:return{name:e,properties:[]}}}},ot=new Cu;var kC=Kt(require("fs"),1);var Va=new Map,Yy=new Map,Ga=new Map,ur=We.parse("memory://cache.st");function wC(t){if(Yy.get(ur)){let e=Yy.get(ur);if(e){let r=Ri(e);for(let n=0;n<r.length;n++){let s=r[n].elements.find(a=>a.elementName.toLowerCase()===t.toLowerCase());if(s){let a=s.elementType;if(a==="functionBlock"||a==="function"||a==="struct"||a==="alias")return s;if(a==="enum")return s}}}}else{let e=__dirname,r=Xy(`${e}\\data.json`),i=JSON.parse(r);Yy.set(ur,i);let o=Ri(i);for(let s=0;s<o.length;s++){let u=o[s].elements.find(c=>c.elementName.toLowerCase()===t.toLowerCase());if(u){let c=u.elementType;if(c==="functionBlock"||c==="function"||c==="struct"||c==="alias")return u;if(c==="enum")return u}}}}function dt(t){if(Va.get(ur)&&Ga.get(ur)){let e=Va.get(ur),r=Ga.get(ur);if(e){let n=Ri(e);for(let i=0;i<n.length;i++){let a=n[i].elements.find(l=>l.elementName.toLowerCase()===t.toLowerCase());if(a){let l=a.elementType;if(l==="functionBlock"||l==="function"||l==="struct"||l==="alias")return[a,r]}}}}else{let e=__dirname,r=Xy(`${e}\\data.json`),i=vp.serializer.JsonSerializer.deserialize(r),o=wu.workspace.LangiumDocumentFactory.fromModel(i,We.parse("memory://cache.st")),a=JSON.parse(r);Va.set(ur,a),Ga.set(ur,o);let l=Ri(a);for(let u=0;u<l.length;u++){let d=l[u].elements.find(m=>m.elementName.toLowerCase()===t.toLowerCase());if(d){let m=d.elementType;if(m==="functionBlock"||m==="function"||m==="struct"||m==="alias")return[d,o]}}}}function ja(t){if(Va.get(ur)&&Ga.get(ur)){let e=Va.get(ur),r=Ga.get(ur);if(e){let n=Ri(e);for(let i=0;i<n.length;i++){let a=n[i].elements.find(l=>l.elementName.toLowerCase()===t.toLowerCase());if(a&&a.elementType==="enum")return[a,r]}}}else{let e=__dirname,r=Xy(`${e}\\data.json`),i=vp.serializer.JsonSerializer.deserialize(r),o=wu.workspace.LangiumDocumentFactory.fromModel(i,We.parse("memory://cache.st")),a=JSON.parse(r);Va.set(ur,a),Ga.set(ur,o);let l=Ri(a);for(let u=0;u<l.length;u++){let d=l[u].elements.find(m=>m.elementName.toLowerCase()===t.toLowerCase());if(d&&d.elementType==="enum")return[d,o]}}}function Xy(t){try{return kC.default.readFileSync(t,"utf8")}catch(e){return console.error(e),""}}var Rp=t=>/^-?[1-9]\d*$/.test(t)||/^0$/.test(t),vG=t=>/^[a-z]+$/.test(t),RG=t=>{let e=dt(t);if(!e)return!0;let[r]=e;return r?r.elementName===r.elementName.toUpperCase():!0},$C=/^(?:TIME|T)#(\d+y)?(\d+m)?(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i,PC=/^DATE#\d{4}-\d{2}-\d{2}$/i,MC=/^DT#\d{4}-\d{2}-\d{2}-\d{2}:\d{2}:\d{2}(?:\.\d+)?$/i,FC=/^TOD#\d{2}:\d{2}:\d{2}(?:\.\d+)?$/i,xG=["SINT","INT","DINT","LINT","USINT","UINT","UDINT","ULINT","BYTE","WORD","DWORD","LWORD","TIME","DATE","LREAL","REAL","BOOL","STRING"],xp=["RTC","INTEGRAL","DERIVATIVE","PID","RAMP","HYSTERESIS","SR","RS","SEMA","R_TRIG","F_TRIG","CTU","CTU_DINT","CTU_LINT","CTU_UDINT","CTU_ULINT","CTD","CTD_DINT","CTD_LINT","CTD_UDINT","CTD_ULINT","CTUD","CTUD_DINT","CTUD_LINT","CTUD_UDINT","CTUD_ULINT","TP","TON","TOF","MC_POWER","MC_READACTUALPOSITION","MC_MOVEABSOLUTE","MC_MOVERELATIVE","MC_MOVEADDITIVE","MC_MOVESUPERIMPOSED","MC_MOVEVELOCITY","MC_POSITIONPROFILE","MC_VELOCITYPROFILE","MC_READACTUALVELOCITY","MC_ACCELERATIONPROFILE","MC_SETPOSITION","MC_READPARAMETER","MC_READBOOLPARAMETER","MC_WRITEPARAMETER","MC_WRITEBOOLPARAMETER","MC_READACTUALTORQUE","MC_READSTATUS","MC_READAXISERROR","MC_RESET","MC_DIGITALCAMSWITCH","MC_TOUCHPROBE","MC_ABORTTRIGGER","MC_STOP","MC_HALT","MC_HOME","MC_CAMTABLESELECT","MC_CAMIN","MC_CAMOUT","MC_GEARIN","MC_GEAROUT","MC_GEARINPOS","MC_PHASING","SMC_TRACKAXIS","SMC_TRACKSETVALUES","MC_STARTTRACE","SMC_MOVECONTINUOUSABSOLUTE","SMC_MOVECONTINUOUSRELATIVE","SMC_GETTAPPETVALUE"],NG=["BOOL_TO_SINT","BOOL_TO_INT","BOOL_TO_DINT","BOOL_TO_LINT","BOOL_TO_USINT","BOOL_TO_UINT","BOOL_TO_UDINT","BOOL_TO_ULINT","BOOL_TO_REAL","BOOL_TO_LREAL","BOOL_TO_TIME","BOOL_TO_DATE","BOOL_TO_TOD","BOOL_TO_DT","BOOL_TO_STRING","BOOL_TO_BYTE","BOOL_TO_WORD","BOOL_TO_DWORD","BOOL_TO_LWORD","SINT_TO_BOOL","SINT_TO_INT","SINT_TO_DINT","SINT_TO_LINT","SINT_TO_USINT","SINT_TO_UINT","SINT_TO_UDINT","SINT_TO_ULINT","SINT_TO_REAL","SINT_TO_LREAL","SINT_TO_TIME","SINT_TO_DATE","SINT_TO_TOD","SINT_TO_DT","SINT_TO_STRING","SINT_TO_BYTE","SINT_TO_WORD","SINT_TO_DWORD","SINT_TO_LWORD","INT_TO_BOOL","INT_TO_SINT","INT_TO_DINT","INT_TO_LINT","INT_TO_USINT","INT_TO_UINT","INT_TO_UDINT","INT_TO_ULINT","INT_TO_REAL","INT_TO_LREAL","INT_TO_TIME","INT_TO_DATE","INT_TO_TOD","INT_TO_DT","INT_TO_STRING","INT_TO_BYTE","INT_TO_WORD","INT_TO_DWORD","INT_TO_LWORD","DINT_TO_BOOL","DINT_TO_SINT","DINT_TO_INT","DINT_TO_LINT","DINT_TO_USINT","DINT_TO_UINT","DINT_TO_UDINT","DINT_TO_ULINT","DINT_TO_REAL","DINT_TO_LREAL","DINT_TO_TIME","DINT_TO_DATE","DINT_TO_TOD","DINT_TO_DT","DINT_TO_STRING","DINT_TO_BYTE","DINT_TO_WORD","DINT_TO_DWORD","DINT_TO_LWORD","LINT_TO_BOOL","LINT_TO_SINT","LINT_TO_INT","LINT_TO_DINT","LINT_TO_USINT","LINT_TO_UINT","LINT_TO_UDINT","LINT_TO_ULINT","LINT_TO_REAL","LINT_TO_LREAL","LINT_TO_TIME","LINT_TO_DATE","LINT_TO_TOD","LINT_TO_DT","LINT_TO_STRING","LINT_TO_BYTE","LINT_TO_WORD","LINT_TO_DWORD","LINT_TO_LWORD","USINT_TO_BOOL","USINT_TO_SINT","USINT_TO_INT","USINT_TO_DINT","USINT_TO_LINT","USINT_TO_UINT","USINT_TO_UDINT","USINT_TO_ULINT","USINT_TO_REAL","USINT_TO_LREAL","USINT_TO_TIME","USINT_TO_DATE","USINT_TO_TOD","USINT_TO_DT","USINT_TO_STRING","USINT_TO_BYTE","USINT_TO_WORD","USINT_TO_DWORD","USINT_TO_LWORD","UINT_TO_BOOL","UINT_TO_SINT","UINT_TO_INT","UINT_TO_DINT","UINT_TO_LINT","UINT_TO_USINT","UINT_TO_UDINT","UINT_TO_ULINT","UINT_TO_REAL","UINT_TO_LREAL","UINT_TO_TIME","UINT_TO_DATE","UINT_TO_TOD","UINT_TO_DT","UINT_TO_STRING","UINT_TO_BYTE","UINT_TO_WORD","UINT_TO_DWORD","UINT_TO_LWORD","UDINT_TO_BOOL","UDINT_TO_SINT","UDINT_TO_INT","UDINT_TO_DINT","UDINT_TO_LINT","UDINT_TO_USINT","UDINT_TO_UINT","UDINT_TO_ULINT","UDINT_TO_REAL","UDINT_TO_LREAL","UDINT_TO_TIME","UDINT_TO_DATE","UDINT_TO_TOD","UDINT_TO_DT","UDINT_TO_STRING","UDINT_TO_BYTE","UDINT_TO_WORD","UDINT_TO_DWORD","UDINT_TO_LWORD","ULINT_TO_BOOL","ULINT_TO_SINT","ULINT_TO_INT","ULINT_TO_DINT","ULINT_TO_LINT","ULINT_TO_USINT","ULINT_TO_UINT","ULINT_TO_UDINT","ULINT_TO_REAL","ULINT_TO_LREAL","ULINT_TO_TIME","ULINT_TO_DATE","ULINT_TO_TOD","ULINT_TO_DT","ULINT_TO_STRING","ULINT_TO_BYTE","ULINT_TO_WORD","ULINT_TO_DWORD","ULINT_TO_LWORD","REAL_TO_BOOL","REAL_TO_SINT","REAL_TO_INT","REAL_TO_DINT","REAL_TO_LINT","REAL_TO_USINT","REAL_TO_UINT","REAL_TO_UDINT","REAL_TO_ULINT","REAL_TO_LREAL","REAL_TO_TIME","REAL_TO_DATE","REAL_TO_TOD","REAL_TO_DT","REAL_TO_STRING","REAL_TO_BYTE","REAL_TO_WORD","REAL_TO_DWORD","REAL_TO_LWORD","LREAL_TO_BOOL","LREAL_TO_SINT","LREAL_TO_INT","LREAL_TO_DINT","LREAL_TO_LINT","LREAL_TO_USINT","LREAL_TO_UINT","LREAL_TO_UDINT","LREAL_TO_ULINT","LREAL_TO_REAL","LREAL_TO_TIME","LREAL_TO_DATE","LREAL_TO_TOD","LREAL_TO_DT","LREAL_TO_STRING","LREAL_TO_BYTE","LREAL_TO_WORD","LREAL_TO_DWORD","LREAL_TO_LWORD","TIME_TO_SINT","TIME_TO_INT","TIME_TO_DINT","TIME_TO_LINT","TIME_TO_USINT","TIME_TO_UINT","TIME_TO_UDINT","TIME_TO_ULINT","TIME_TO_REAL","TIME_TO_LREAL","TIME_TO_STRING","TIME_TO_BYTE","TIME_TO_WORD","TIME_TO_DWORD","TIME_TO_LWORD","DATE_TO_SINT","DATE_TO_INT","DATE_TO_DINT","DATE_TO_LINT","DATE_TO_USINT","DATE_TO_UINT","DATE_TO_UDINT","DATE_TO_ULINT","DATE_TO_REAL","DATE_TO_LREAL","DATE_TO_STRING","DATE_TO_BYTE","DATE_TO_WORD","DATE_TO_DWORD","DATE_TO_LWORD","TOD_TO_SINT","TOD_TO_INT","TOD_TO_DINT","TOD_TO_LINT","TOD_TO_USINT","TOD_TO_UINT","TOD_TO_UDINT","TOD_TO_ULINT","TOD_TO_REAL","TOD_TO_LREAL","TOD_TO_STRING","TOD_TO_BYTE","TOD_TO_WORD","TOD_TO_DWORD","TOD_TO_LWORD","DT_TO_SINT","DT_TO_INT","DT_TO_DINT","DT_TO_LINT","DT_TO_USINT","DT_TO_UINT","DT_TO_UDINT","DT_TO_ULINT","DT_TO_REAL","DT_TO_LREAL","DT_TO_STRING","DT_TO_BYTE","DT_TO_WORD","DT_TO_DWORD","DT_TO_LWORD","STRING_TO_BOOL","STRING_TO_SINT","STRING_TO_INT","STRING_TO_DINT","STRING_TO_LINT","STRING_TO_USINT","STRING_TO_UINT","STRING_TO_UDINT","STRING_TO_ULINT","STRING_TO_REAL","STRING_TO_LREAL","STRING_TO_TIME","STRING_TO_DATE","STRING_TO_TOD","STRING_TO_DT","STRING_TO_BYTE","STRING_TO_WORD","STRING_TO_DWORD","STRING_TO_LWORD","BYTE_TO_BOOL","BYTE_TO_SINT","BYTE_TO_INT","BYTE_TO_DINT","BYTE_TO_LINT","BYTE_TO_USINT","BYTE_TO_UINT","BYTE_TO_UDINT","BYTE_TO_ULINT","BYTE_TO_REAL","BYTE_TO_LREAL","BYTE_TO_TIME","BYTE_TO_DATE","BYTE_TO_TOD","BYTE_TO_DT","BYTE_TO_STRING","BYTE_TO_WORD","BYTE_TO_DWORD","BYTE_TO_LWORD","WORD_TO_BOOL","WORD_TO_SINT","WORD_TO_INT","WORD_TO_DINT","WORD_TO_LINT","WORD_TO_USINT","WORD_TO_UINT","WORD_TO_UDINT","WORD_TO_ULINT","WORD_TO_REAL","WORD_TO_LREAL","WORD_TO_TIME","WORD_TO_DATE","WORD_TO_TOD","WORD_TO_DT","WORD_TO_STRING","WORD_TO_BYTE","WORD_TO_DWORD","WORD_TO_LWORD","DWORD_TO_BOOL","DWORD_TO_SINT","DWORD_TO_INT","DWORD_TO_DINT","DWORD_TO_LINT","DWORD_TO_USINT","DWORD_TO_UINT","DWORD_TO_UDINT","DWORD_TO_ULINT","DWORD_TO_REAL","DWORD_TO_LREAL","DWORD_TO_TIME","DWORD_TO_DATE","DWORD_TO_TOD","DWORD_TO_DT","DWORD_TO_STRING","DWORD_TO_BYTE","DWORD_TO_WORD","DWORD_TO_LWORD","LWORD_TO_BOOL","LWORD_TO_SINT","LWORD_TO_INT","LWORD_TO_DINT","LWORD_TO_LINT","LWORD_TO_USINT","LWORD_TO_UINT","LWORD_TO_UDINT","LWORD_TO_ULINT","LWORD_TO_REAL","LWORD_TO_LREAL","LWORD_TO_TIME","LWORD_TO_DATE","LWORD_TO_TOD","LWORD_TO_DT","LWORD_TO_STRING","LWORD_TO_BYTE","LWORD_TO_WORD","LWORD_TO_DWORD","TRUNC","BCD_TO_USINT","BCD_TO_UINT","BCD_TO_UDINT","BCD_TO_ULINT","USINT_TO_BCD","UINT_TO_BCD","UDINT_TO_BCD","ULINT_TO_BCD","DATE_AND_TIME_TO_TIME_OF_DAY","DATE_AND_TIME_TO_DATE"],UC=["ABS","SQRT","LN","LOG","EXP","SIN","COS","TAN","ASIN","ACOS","ATAN"],BC=["ADD","MUL","SUB","DIV","MOD","EXPT","MOVE"],OG=["ADD_TIME","ADD_TOD_TIME","ADD_DT_TIME","MULTIME","SUB_TIME","SUB_DATE_DATE","SUB_TOD_TIME","SUB_TOD_TOD","SUB_DT_TIME","SUB_DT_DT","DIVTIME"],WC=["SHL","SHR","ROR","ROL"],VC=["AND","OR","XOR","NOT"],GC=["SEL","MAX","MIN","LIMIT","MUX"],jC=["GT","GE","EQ","LT","LE","NE"],qC=["LEN","LEFT","RIGHT","MID","CONCAT","CONCAT_DATE_TOD","INSERT","DELETE","REPLACE","FIND"],EG=["SMC_READAXISINFO","SMC_GETTIMENS","SMC_PARAMETERNUMBER_COE"],IG=["AXIS_REF","MC_CAM_REF"],Np=["SMC_ERROR","MC_Direction","MC_BUFFER_MODE","SMC_AXIS_STATE","MC_TAPPETMODE","SMC_CAM_TYPE","MC_STARTMODE"],HC=xG.concat(xp).concat(IG),$u=NG.concat(UC).concat(BC).concat(OG).concat(WC).concat(VC).concat(GC).concat(jC).concat(qC).concat(EG),SG=HC.concat($u).concat(Np),Op=xp.concat($u),KC=UC.concat(BC).concat(WC).concat(VC).concat(GC).concat(jC).concat(qC.filter(t=>t!=="CONCAT_DATE_TOD"));function zC(t){let e=new RegExp("^"+t,"i");return $u.filter(r=>e.test(r))}function YC(t){let e=new RegExp("^"+t,"i");return SG.filter(r=>e.test(r))}function XC(t){let e=new RegExp("^"+t,"i");return Np.filter(r=>e.test(r))}function JC(t){let e=new RegExp("^"+t,"i");return Op.filter(r=>e.test(r))}function Zy(t,e){let r;return e==="TIME"?r=$C:e==="DATE"?r=PC:e==="DATE_AND_TIME"?r=MC:e==="TIME_OF_DAY"&&(r=FC),r?r.exec(t)?"":`Invalid ${e} format`:`Invalid ${e} format`}function br(t,e){e&&(t=e.Real_type_name||e.Bit_string_type_name||e.Integer_type_name||e.Unsigned_integer_type_name||e.Bool_type_name||e.String_type_name||e.Date_type_name||e.Time_type_name||e.Date_And_time_type_name||e.Time_Of_Day_type_name||e.Cache_type_name);let r=t==null?void 0:t.toUpperCase();return r==="DT"?"DATE_AND_TIME":r==="TOD"?"TIME_OF_DAY":t}var QC=["SINT","INT","DINT","LINT"],ZC=["USINT","UINT","UDINT","ULINT"],eb=["BYTE","WORD","DWORD","LWORD"],tb=["REAL","LREAL"];function rb(t){if(!t)return;let e=t.toUpperCase();return e==="DT"?"DATE_AND_TIME":e==="TOD"?"TIME_OF_DAY":e}function Jy(t){var n;let e={$type:"Native_Type_Name"},r=(n=rb(t))!=null?n:t.toUpperCase();return tb.includes(r)?e.Real_type_name=r:eb.includes(r)?e.Bit_string_type_name=r:QC.includes(r)?e.Integer_type_name=r:ZC.includes(r)?e.Unsigned_integer_type_name=r:r==="BOOL"?e.Bool_type_name=r:r==="STRING"?e.String_type_name=r:r==="DATE"?e.Date_type_name=r:r==="TIME"?e.Time_type_name=r:r==="DATE_AND_TIME"?e.Date_And_time_type_name=r:r==="TIME_OF_DAY"?e.Time_Of_Day_type_name=r:e.Cache_type_name=t,e}function AG(t,e){if(e===void 0)return;let r;return typeof e=="boolean"?r=e?"TRUE":"FALSE":r=e,{$container:t,$type:"Constant",constant:r}}function Qy(t,e=new Set){var l,u,c;if(!t)return{};let r=(l=rb(t))!=null?l:t.toUpperCase();if(QC.includes(r)||ZC.includes(r)||eb.includes(r)||tb.includes(r)||r==="BOOL"||r==="STRING"||r==="DATE"||r==="TIME"||r==="DATE_AND_TIME"||r==="TIME_OF_DAY")return{typeName:r};let n=dt(t);if(!n)return{typeName:t};let[i]=n;if(!i||i.elementType!=="alias")return{typeName:t};let o=i,s=o.elementName.toUpperCase();if(e.has(s))return{typeName:o.elementName,refNode:o};e.add(s);let a=Qy(o.refName,e);return{typeName:(u=a.typeName)!=null?u:o.elementName,refNode:(c=a.refNode)!=null?c:o}}function Ep(t,e=new Set){var o;if(!t)return{};let r=br(void 0,t);if(r)return t.Cache_type_name?Qy(t.Cache_type_name,e):{typeName:r};let n=t.Identifier;if(!n)return{};let i=n.ref;if(!i)return Qy(n.$refText,e);if(_p(i)){if(e.has(i.name))return{typeName:i.name,refNode:i};e.add(i.name);let s=Ep(i.refName,e);return{typeName:(o=s.typeName)!=null?o:i.name,refNode:s.refNode}}return"name"in i&&typeof i.name=="string"?{typeName:i.name,refNode:i}:{typeName:n.$refText}}function e_(t){return Ep(t).typeName}function uo(t){return/^[-+]?[0-9]*\.[0-9]+([eE][-+]?[0-9]+)?$/.test(t)}function t_(t){return/^\d*\.?\d+$/.test(t)}function DG(t){let e=t.toUpperCase(),r=HC.find(n=>n===e);return r?[r,!0]:[null,!1]}function CG(t){return["SINT","USINT","INT","UINT","DINT","UDINT","LINT","WORD","DWORD","LWORD","BYTE","BOOL","ULINT"].includes(t)}function ns(t,e,r){if(!t||!e||(t=t.toUpperCase(),e=e.toUpperCase(),!CG(e)))return!0;if(t&&t.toLowerCase()==="bool")return r?r!==1&&r!==0:!1;if(e&&e.toLowerCase()==="bool"&&r&&r!==1&&r!==0)return!0;switch(t){case"SINT":return e==="BOOL";case"INT":return e==="SINT"||e==="BYTE";case"UINT":return e==="SINT"||e==="INT"||e==="BYTE";case"DINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="WORD"||e==="BYTE";case"UDINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="WORD"||e==="BYTE";case"LINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="WORD"||e==="DWORD"||e==="BYTE";case"BYTE":return!(e==="BYTE"||e==="USINT"||e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="ULINT");case"ULINT":return e==="SINT"||e==="USINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="WORD"||e==="DWORD"||e==="LWORD"||e==="BYTE";default:return!0}}function co(t){let e="";return Wa(t),t.$type==="Constant"?e=t.constant.toString():e=t.toString(),e.toLowerCase()==="true"||e.toLowerCase()==="false"?["BOOL"]:$C.test(e)?["TIME"]:PC.test(e)?["DATE"]:MC.test(e)?["DATE_AND_TIME"]:FC.test(e)?["TIME_OF_DAY"]:/^-?\d+$/.test(e)?["INT","UINT","DINT","UDINT","LINT","SINT","USINT","BYTE","WORD","DWORD","LWORD"]:uo(e)?["REAL","LREAL"]:typeof e=="string"?["STRING"]:["UNKNOWN"]}function bG(t,e,r){var u;let n,i=br(t,e);t=(u=Ep(e).typeName)!=null?u:i,e.Real_type_name?n="Real_type_name":e.Bit_string_type_name?n="Bit_string_type_name":e.Integer_type_name?n="Integer_type_name":e.Unsigned_integer_type_name?n="Unsigned_integer_type_name":e.Bool_type_name?n="Bool_type_name":e.String_type_name?n="String_type_name":e.Date_And_time_type_name?n="Date_And_time_type_name":e.Date_type_name?n="Date_type_name":e.Time_Of_Day_type_name?n="Time_Of_Day_type_name":e.Time_type_name?n="Time_type_name":e.Cache_type_name?n="Cache_type_name":n="String_type_name";let s=i!=null?i:t,[a,l]=DG(s);if(l)s!==a&&(vG(s)||(n!=="Cache_type_name"||!e.Cache_type_name||RG(e.Cache_type_name))&&r("hint",`did you mean '${a}'?`,{node:e,property:n}));else if(n==="Cache_type_name"){let c=e.Cache_type_name;if(c){let f=dt(c);if(f){let[d,m]=f;d&&d.elementType==="function"&&r("error",`${t}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:e,property:"Identifier"})}}}return t}function Cn(t,e,r){if(!t)return e;if(t.Identifier){let n=t.Identifier,i=Ep(t),o=n.ref;if(i.typeName&&(e=i.typeName),o){let s=i.refNode;(Jn(o)||s&&Jn(s))&&r("error",`${e}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}else{let s=n.$nodeDescription;s&&s.type==="FunctionElement"&&r("error",`${n.$refText}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}}else r&&(e=bG(e,t,r));return e}function Qn(t,e){let r=e_(t);return r?e=r:e=br(e,t),e}function nb(t){let e={$type:"St",function_block:[],itface:[],program:[],st_function:[],types_alias:[],types_enum:[],types_struct:[],types_union:[]};return t.forEach(r=>{r.elements.forEach(i=>{if(i.elementType==="alias"){let s=i,a={$container:e,$type:"Alias",name:s.elementName,refName:Jy(s.refName)},l=AG(a,s.initialValue);l&&(a.initialValue=l),e.types_alias.push(a);return}if(i.elementType==="enum"){let s=i,a={$container:e,$type:"StEnum",enum:[],name:s.elementName};s.enumChild.forEach(l=>{let u={$container:a,$type:"Enum",variable_name:l.enumVarName};l.assignValue!==void 0&&(u.assignValue=l.assignValue.toString()),a.enum.push(u)}),e.types_enum.push(a);return}let o=i.elementType;if(o==="struct"){i=i;let s=i.varDecls,a={$container:e,$type:"StructsList",items:[],name:""};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=Jy(c),d={$container:a,$type:"Struct_Var_Decl_Init",nextVariables:[],typeName:f,variables:u};a.items.push(d)}),e.types_struct.push(a)}else if(o==="functionBlock"){i=i;let s=i.varDecls,a={$container:e,$type:"FunctionBlock",name:"",statementList:[],methods:[],varInputs:[],varLocals:[],varOutputs:[]};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=l.varGlobalType,d=Jy(c);if(f){let m;if(f==="VAR_INPUT"){let R={$container:a,$type:"VarInput",items:[]};m={$container:R,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},R.items.push(m),a.varInputs.push(R)}else if(f==="VAR"){let R={$container:a,$type:"VarLocal",items:[]};m={$container:R,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},R.items.push(m),a.varLocals.push(R)}}}),e.function_block.push(a)}})}),e}function Ri(t){let e=[];return t.forEach(r=>{let n=r.name,i=r.list;if(n==="Additional function blocks"||n==="Standard function blocks"||n==="SMC_Basic function blocks"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:l.name,varDecls:[],rootName:n,comment:l.comment,usage:l.usage};u.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(m)}),c.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(m)}),s.elements.push(f),a===o.length-1&&e.push(s)}}else if(n==="extra_library"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a];if(l.type==="struct"){let u={$type:"SingleElement",elementType:"struct",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};l.elements.forEach(c=>{let f={$type:"VarDeclaration",varName:c.name,varType:c.type};u.varDecls.push(f)}),s.elements.push(u)}else if(l.type==="derived"){let u={$type:"AliasElement",elementType:"alias",elementName:l.name,refName:l.base_type,initialValue:l.value,varDecls:[],rootName:n,comment:l.comment};s.elements.push(u)}else if(l.type==="enum"){let u={$type:"EnumElement",elementType:"enum",elementName:l.name,enumChild:l.values.map(c=>({enumVarName:c})),rootName:n,comment:l.comment};s.elements.push(u)}}s.elements.length>0&&e.push(s)}else{let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionElement",elementType:"function",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};u.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(m)}),c.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(m)}),s.elements.push(f),a===o.length-1&&e.push(s)}}}),e}var Ip=class extends Ws{constructor(r){super(r);this.services=r;this.completionOptions={triggerCharacters:[".","#"]}}async getCompletion(r,n){var a;let i=await super.getCompletion(r,n),o=this.getManualEnumCompletionItems(r,n);if(o.length===0)return i;let s=[...(a=i==null?void 0:i.items)!=null?a:[],...o];return bt.CompletionList.create(this.deduplicateItems(s),!0)}completionFor(r,n,i){let o=n.property;if(!o){let s=Nr.getContainerOfType(n.feature,nt.isAssignment);o=s==null?void 0:s.feature}if(o==="enumValue"){let s=this.getEnumTypeNameBeforeHash(r);if(s){this.hintEnumMembers(s,i,r);return}}else if(o==="simpleEnumCase"){let s=this.getCaseEnumTypeName(r);if(s){this.hintEnumMembers(s,i,r);return}}return super.completionFor(r,n,i)}hintFunctionBlockDecl(r,n,i){r.forEach(o=>{o.items.forEach(a=>{let{expectedType:l,variable:u,typeName:c,nextVariables:f}=this.getDataType(a);this.handleStructOrFunctionBlockVarDecl(l,n,i,u,c),f.forEach(d=>{this.handleStructOrFunctionBlockVarDecl(l,n,i,d,c)})})})}getVarDeclDetail(r){let n=r.varGlobalType;return n==="VAR_INPUT"||n==="VAR_OUTPUT"?`${n==="VAR_INPUT"?"\u8F93\u5165\u53C2\u6570":"\u8F93\u51FA\u53C2\u6570"}, \u7C7B\u578B\u662F${r.varType}`:`${r.varType}`}hintCacheVarDecls(r,n,i,o="1"){r==null||r.forEach(s=>{n(i,{label:s.varName,kind:bt.CompletionItemKind.Field,detail:this.getVarDeclDetail(s),sortText:o})})}createReferenceCompletionItem(r){let n="";if(r&&r.node){if(r.type==="Struct_Var_Decl_Init"){let o=r.node.typeName,s="";n=br(s,o),n||(n=Qn(o,s)),n||o.$type==="Array_liters"&&(n="Array")}if(r.node.$type==="VarDeclaration"){let i=r.node;return{nodeDescription:r,kind:bt.CompletionItemKind.Field,detail:this.getVarDeclDetail(i),sortText:"0"}}else if(r.node.$type==="VarDeclarationInit"){let o=r.node.typeName,s="";if(s=br(s,o),s!==""&&s){let a=dt(s);if(a){let[l,u]=a,c=l==null?void 0:l.elementType;if(c==="functionBlock"||c==="struct"){let f=l==null?void 0:l.varDecls;f==null||f.forEach(d=>({nodeDescription:r,kind:bt.CompletionItemKind.Field,detail:this.getVarDeclDetail(d),sortText:"0"}))}}}}}return{nodeDescription:r,kind:bt.CompletionItemKind.Reference,detail:n,sortText:"0"}}getRangeText(r){let n=r.position,o={start:bt.Position.create(n.line,0),end:r.position};return r.textDocument.getText(o)}getCurrentTokenText(r){let i={start:r.textDocument.positionAt(r.tokenOffset),end:r.position};return r.textDocument.getText(i).trim()}getManualEnumCompletionItems(r,n){var f;let i=r.textDocument,s=i.getText({start:bt.Position.create(0,0),end:n.position}).match(/([_a-zA-Z][\w_]*)#([_a-zA-Z][\w_]*)?$/);if(!s)return[];let a=s[1],l=(f=s[2])!=null?f:"",u=i.offsetAt(n.position),c={document:r,textDocument:i,offset:u,position:n.position,tokenOffset:u-l.length,tokenEndOffset:u,features:[]};return this.buildEnumMemberCompletionItems(a,l,c)}getRootNode(r){let n=r.document.parseResult.value;if(n.$type==="St")return n}getLocalEnumByName(r,n){if(!r)return;let i=this.getRootNode(n);return i==null?void 0:i.types_enum.find(o=>o.name.toLowerCase()===r.toLowerCase())}getWorkspaceEnumByName(r){if(!r)return;let n=this.services.shared.workspace.IndexManager,i=this.services.shared.workspace.LangiumDocuments,o=this.services.workspace.AstNodeLocator;for(let s of n.allElements("StEnum"))if(s.name.toLowerCase()===r.toLowerCase()){let a=i.getDocument(s.documentUri);if(a){let l=o.getAstNode(a.parseResult.value,s.path);if(l)return l}}}getEnumMembers(r,n){var a;if(!r)return[];let i=this.getLocalEnumByName(r,n);if(i)return i.enum.map(l=>l.variable_name);let o=this.getWorkspaceEnumByName(r);if(o)return o.enum.map(l=>l.variable_name);let s=ja(r);if(s){let[l]=s;return(a=l==null?void 0:l.enumChild.map(u=>u.enumVarName))!=null?a:[]}return[]}getEnumeratedValueTypeName(r){var i,o;if(!r)return;if(r.enumCacheTypeName)return r.enumCacheTypeName;let n=(i=r.enumType)==null?void 0:i.ref;if(n){if(n.$type==="StEnum")return n.name;if("elementType"in n&&n.elementType==="enum"&&"elementName"in n){let s=n.elementName;if(typeof s=="string")return s}}return(o=r.enumType)==null?void 0:o.$refText}getEnumTypeNameBeforeHash(r){let i=r.textDocument.getText({start:bt.Position.create(0,0),end:r.textDocument.positionAt(r.tokenOffset)}).match(/([_a-zA-Z][\w_]*)\s*#\s*$/);return i==null?void 0:i[1]}getCaseEnumTypeName(r){let n=r.node;if(!n)return;let i=Nr.getContainerOfType(n,pC);if(i)return this.getEnumTypeNameFromCaseStatement(i)}getEnumTypeNameFromCaseStatement(r){let n=r.caseExpression;if(An(n))return this.getEnumeratedValueTypeName(n);if(Sn(n)){let i=n.prior;if(An(i))return this.getEnumeratedValueTypeName(i);if(Cr(i)){let o=i.variable.ref;if(rr(o))return Qn(o.typeName,"")}}}hintEnumMembers(r,n,i){let o=this.getCurrentTokenText(i);this.getEnumMembers(r,i).filter(a=>a.toLowerCase().startsWith(o.toLowerCase())).forEach(a=>{n(i,{label:a,kind:bt.CompletionItemKind.EnumMember,detail:r,sortText:"0"})})}buildEnumMemberCompletionItems(r,n,i){let o=[];return this.getEnumMembers(r,i).filter(a=>a.toLowerCase().startsWith(n.toLowerCase())).forEach(a=>{let l=this.fillCompletionItem(i,{label:a,kind:bt.CompletionItemKind.EnumMember,detail:r,sortText:"0"});l&&o.push(l)}),o}completionForKeyword(r,n,i){try{let o=r.node;if(dC(o)){let s=o.varEnchanceDecl.ref,a=o.varEnchanceDecl.$refText;if(rr(s)){let l=s.typeName,u="";if(u=br(u,l),u!==""&&u){let c=dt(u);if(c){let[f,d]=c,m=f==null?void 0:f.elementType;(m==="functionBlock"||m==="struct")&&this.hintCacheVarDecls(f==null?void 0:f.varDecls,i,r)}}else{let c=l.Identifier;if(c){let f=c.ref;if(rs(f))f.items.forEach(m=>{let{expectedType:R,variable:O,typeName:I,nextVariables:E}=this.getDataType(m);this.handleStructOrFunctionBlockVarDecl(R,i,r,O,I),E.forEach(y=>{this.handleStructOrFunctionBlockVarDecl(R,i,r,y,I)})});else if(vi(f)){let d=f.varInputs,m=f.varOutputs,R=f.varLocals;this.hintFunctionBlockDecl(d,i,r),this.hintFunctionBlockDecl(m,i,r),this.hintFunctionBlockDecl(R,i,r)}}}}else JC(a).forEach(u=>{let c=dt(u);if(c){let[f,d]=c;i(r,{label:f==null?void 0:f.elementName,kind:bt.CompletionItemKind.Reference,detail:f==null?void 0:f.usage,sortText:"1"})}})}else{let s=this.getRangeText(r);s=s.trim();let a=s.indexOf(":"),l=s.substring(a+1);l=l.trim(),YC(l).forEach(c=>{if(xp.includes(c)||$u.includes(c)){let f=dt(c);if(f){let[d,m]=f;i(r,{label:c,kind:bt.CompletionItemKind.Reference,detail:d==null?void 0:d.elementType,sortText:"1"})}}else if(Np.includes(c)){let f=ja(c);if(f){let[d]=f;i(r,{label:c,kind:bt.CompletionItemKind.Enum,detail:d==null?void 0:d.elementType,sortText:"1"})}}else i(r,{label:c,kind:bt.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})})}}catch{}}handleStructOrFunctionBlockVarDecl(r,n,i,o,s){if(r!==""&&r)n(i,{label:o,kind:bt.CompletionItemKind.Reference,detail:r,sortText:"1"});else{let a=s.Identifier;a&&n(i,{label:o,kind:bt.CompletionItemKind.Reference,detail:a.$refText,sortText:"1"})}}completionForCrossReference(r,n,i){var s,a;let o=r.node;if(Cr(o)){let l=o.variable.$refText;zC(l).forEach(c=>{let f=dt(c);if(f){let[d,m]=f;i(r,{label:d==null?void 0:d.elementName,kind:bt.CompletionItemKind.Reference,detail:d==null?void 0:d.usage,sortText:"1"})}})}else if(An(o)){let l=(a=(s=o.enumType)==null?void 0:s.$refText)!=null?a:"";return XC(l).forEach(c=>{let f=ja(c);if(f){let[d]=f;i(r,{label:d==null?void 0:d.elementName,kind:bt.CompletionItemKind.Enum,detail:d==null?void 0:d.elementType,sortText:"1"})}}),super.completionForCrossReference(r,n,i)}else if(Dn(o)){let l=o.previous;if(Dn(l)){let u=l.element,c=u==null?void 0:u.ref;if(Lu(c)||rr(c)){let f=c.typeName,d="";return d=br(d,f),d?void 0:super.completionForCrossReference(r,n,i)}}else if(Sn(l))return super.completionForCrossReference(r,n,i)}else return super.completionForCrossReference(r,n,i)}findFeaturesAt(r,n){let i=r.getText({start:bt.Position.create(0,0),end:r.positionAt(n)}),o=this.completionParser.parse(i),s=o.tokens;if(o.tokenIndex===0){let u=St.getEntryRule(this.grammar),c=Lo({feature:u.definition,type:St.getExplicitRuleType(u)});return s.length>0?(s.shift(),Nl(c.map(f=>[f]),s)):c}let a=[...s].splice(o.tokenIndex);return this.findLocalNextFeatures([o.elementStack.map(u=>({feature:u}))],a)}findLocalNextFeatures(r,n){let i={stacks:r,tokens:n};return i.stacks.flat().forEach(s=>{s.property=void 0}),this.findNextFeatureStacks(i.stacks).map(s=>s[s.length-1])}findNextFeatureStacks(r,n){let i=[];for(let o of r)i.push(...this.interpretStackToken(o,n));return i}interpretStackToken(r,n){let i=new Map,o=new Set(r.map(a=>a.feature).filter(this.isPlusFeature)),s=[];for(;r.length>0;){let a=r.pop(),l=this.findNextFeaturesInternal({next:a,cardinalities:i,plus:o,visited:new Set}).filter(u=>n?this.featureMatches(u.feature,n):!0);for(let u of l)s.push([...r,u]);if(!l.every(u=>St.isOptionalCardinality(u.feature.cardinality,u.feature)||St.isOptionalCardinality(i.get(u.feature))))break}return s}isPlusFeature(r){if(r.cardinality==="+")return!0;let n=Nr.getContainerOfType(r,nt.isAssignment);return!!(n&&n.cardinality==="+")}findNextFeaturesInternal(r){let{next:n,cardinalities:i,visited:o,plus:s}=r,a=[],l=n.feature;if(o.has(l))return[];o.add(l);let u,c=l;for(;c.$container;)if(nt.isGroup(c.$container)){u=c.$container;break}else if(nt.isAbstractElement(c.$container))c=c.$container;else break;if(St.isArrayCardinality(c.cardinality)){let f=this.findFirstFeaturesInternal({next:{feature:c,type:n.type},cardinalities:i,visited:o,plus:s});for(let d of f)s.add(d.feature);a.push(...f)}if(u){let f=u.elements.indexOf(c);f!==void 0&&f<u.elements.length-1&&a.push(...this.findNextFeaturesInGroup({feature:u,type:n.type},f+1,i,o,s)),a.every(d=>St.isOptionalCardinality(d.feature.cardinality,d.feature)||St.isOptionalCardinality(i.get(d.feature))||s.has(d.feature))&&a.push(...this.findNextFeaturesInternal({next:{feature:u,type:n.type},cardinalities:i,visited:o,plus:s}))}return a}featureMatches(r,n){if(nt.isKeyword(r))return r.value===n.image;if(nt.isRuleCall(r))return this.ruleMatches(r.rule.ref,n);if(nt.isCrossReference(r)){let i=St.getCrossReferenceTerminal(r);if(i)return this.featureMatches(i,n)}return!1}findFirstFeaturesInternal(r){var u,c,f;let{next:n,cardinalities:i,visited:o,plus:s}=r;if(n===void 0)return[];let{feature:a,type:l}=n;if(nt.isGroup(a)){if(o.has(a))return[];o.add(a)}if(nt.isGroup(a))return this.findNextFeaturesInGroup(n,0,i,o,s).map(d=>this.modifyCardinality(d,a.cardinality,i));if(nt.isAlternatives(a)||nt.isUnorderedGroup(a))return a.elements.flatMap(d=>this.findFirstFeaturesInternal({next:{feature:d,type:l,property:n.property},cardinalities:i,visited:o,plus:s})).map(d=>this.modifyCardinality(d,a.cardinality,i));if(nt.isAssignment(a)){let d={feature:a.terminal,type:l,property:(u=n.property)!=null?u:a.feature};return this.findFirstFeaturesInternal({next:d,cardinalities:i,visited:o,plus:s}).map(m=>this.modifyCardinality(m,a.cardinality,i))}else{if(nt.isAction(a))return this.findNextFeaturesInternal({next:{feature:a,type:St.getTypeName(a),property:(c=n.property)!=null?c:a.feature},cardinalities:i,visited:o,plus:s});if(nt.isRuleCall(a)&&nt.isParserRule(a.rule.ref)){let d=a.rule.ref,m={feature:d.definition,type:d.fragment||d.dataType?void 0:(f=St.getExplicitRuleType(d))!=null?f:d.name,property:n.property};return this.findFirstFeaturesInternal({next:m,cardinalities:i,visited:o,plus:s}).map(R=>this.modifyCardinality(R,a.cardinality,i))}else return[n]}}findNextFeaturesInGroup(r,n,i,o,s){var u;let a=[],l;for(;n<r.feature.elements.length&&(l={feature:r.feature.elements[n++],type:r.type},a.push(...this.findFirstFeaturesInternal({next:l,cardinalities:i,visited:o,plus:s})),!!St.isOptionalCardinality((u=l.feature.cardinality)!=null?u:i.get(l.feature),l.feature)););return a}ruleMatches(r,n){return nt.isParserRule(r)?Lo(r.definition).some(o=>this.featureMatches(o.feature,n)):nt.isTerminalRule(r)?St.terminalRegex(r).test(n.image):!1}modifyCardinality(r,n,i){return i.set(r.feature,n),r}getDataType(r){let n=r.variables,i=r.nextVariables,o=r.typeName,s="";return s=br(s,o),{expectedType:s,variable:n,typeName:o,nextVariables:i}}};var Sp=class extends Ba{constructor(r){super(r);this.services=r}getDocumentHighlight(r,n){let i=r.parseResult.value.$cstNode;if(!i)return;let o=Bi.findDeclarationNodeAtOffset(i,r.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!o)return;let s=this.references.findDeclaration(o);if(s){let a=[];if(s.$type==="VarDeclaration"||s.$type==="FunctionElement")return a;{let l=s.$document;if(!l)return a;let u=Pt.equals(l.uri,r.uri),c={documentUri:r.uri,includeDeclaration:u};return this.references.findReferences(s,c).map(d=>this.createDocumentHighlight(d)).toArray()}}}};var Ap=class extends Ho{constructor(r){super(r);this.services=r}findDeclaration(r){if(r){let n=St.findAssignment(r),i=r.astNode;if(n&&i){let o=i[n.feature];if(yt(o)){if(KC.includes(o.$refText.toUpperCase())){let s=dt(o.$refText.toUpperCase());if(s){let[a,l]=s;return a}}return o.ref}else if(Array.isArray(o)){for(let s of o)if(yt(s)&&s.$refNode&&s.$refNode.offset<=r.offset&&s.$refNode.end>=r.end)return s.ref}}if(i){let o=this.nameProvider.getNameNode(i);if(o&&(o===r||Bi.isChildNode(r,o)))return i}}}};var Cp=Kt(Fr(),1);var bp=class extends ap{getSignatureFromElement(e,r){var n;if(TC(e)){let i=e.$container;if(hC(i)){let o=i.assignPrefix,s=o==null?void 0:o.varEnchanceDecl.$refText,a=o==null?void 0:o.varEnchanceDecl.ref;if(a){if(Jn(a)){let u=a.varInputs,c=a.varOutputs,f=Dp(u),d=Dp(c),m=Math.max(f,d),R=a.name,O=a.variable_type,I="";I=br(I,O),I===void 0&&(I=(n=O.Identifier)==null?void 0:n.$refText);let E=[],y="";u.forEach(te=>{let ue=te.items;for(let de=0;de<ue.length;de++){let _e=ue[de],ve=_e.nextVariables,G=xi(_e.variables,m),k="",j=_e.typeName;k=br(k,j),y+=`
VAR_INPUT${" ".repeat(8)}${_e.variables}${" ".repeat(G)}${k}`,ve.length>0&&ve.forEach(H=>{let le=xi(H,m);y+=`
VAR_INPUT${" ".repeat(8)}${H}${" ".repeat(le)}${k}`})}}),c.forEach(te=>{let ue=te.items;for(let de=0;de<ue.length;de++){let _e=ue[de],ve=_e.nextVariables,G=xi(_e.variables,m),k="",j=_e.typeName;k=br(k,j),y+=`
VAR_OUTPUT${" ".repeat(7)}${_e.variables}${" ".repeat(G)}${k}`,ve.length>0&&ve.forEach(H=>{let le=xi(H,m);y+=`
VAR_OUTPUT${" ".repeat(7)}${H}${" ".repeat(le)}${k}`})}});let T={kind:Cp.MarkupKind.Markdown,value:["```typescript",y,"```"].join(`
`)},S={label:`FUNCTION ${R}:${I}
`,documentation:T};return E.push(S),{signatures:E}}else if(rr(a)){let c=a.typeName.Identifier;if(c){let d=c.ref;if(vi(d)){let m=d.varInputs,R=d.varOutputs,O=[],I="",E=Dp(m),y=Dp(R),T=Math.max(E,y);m.forEach(ue=>{let de=ue.items;for(let _e=0;_e<de.length;_e++){let ve=de[_e],G=ve.nextVariables,k=xi(ve.variables,T),j="",H=ve.typeName;j=br(j,H),I+=`
VAR_INPUT${" ".repeat(8)}${ve.variables}${" ".repeat(k)}${j}`,G.length>0&&G.forEach(le=>{let se=xi(le,T);I+=`
VAR_INPUT${" ".repeat(8)}${le}${" ".repeat(se)}${j}`})}}),R.forEach(ue=>{let de=ue.items;for(let _e=0;_e<de.length;_e++){let ve=de[_e],G=ve.nextVariables,k=xi(ve.variables,T),j="",H=ve.typeName;j=br(j,H),I+=`
VAR_OUTPUT${" ".repeat(7)}${ve.variables}${" ".repeat(k)}${j}`,G.length>0&&G.forEach(le=>{let se=xi(le,T);I+=`
VAR_OUTPUT${" ".repeat(7)}${le}${" ".repeat(se)}${j}`})}});let S={kind:Cp.MarkupKind.Markdown,value:["```typescript",I,"```"].join(`
`)},M={label:`FUNCTION_BLOCK ${d.name}
`,documentation:S};return O.push(M),{signatures:O}}}let f=this.getCacheSignatureHelp(this.getVarDeclarationCacheName(a));if(f)return f}}let l=this.getCacheSignatureHelp(s);if(l)return l}}}getVarDeclarationCacheName(e){var n;let r=e.typeName;return r.Cache_type_name?r.Cache_type_name:(n=r.Identifier)==null?void 0:n.$refText}getCacheSignatureHelp(e){if(!e)return;let r=dt(e);if(r){let[n]=r,i=[];if(n){let o=this.getSignatureInfo(n,i,"usage");return o||this.getSignatureInfo(n,i,"comment")}}}get signatureHelpOptions(){return{triggerCharacters:["(",","],retriggerCharacters:[","]}}getSignatureInfo(e,r,n){let i=e[n],o=LG(e.varDecls),s="",a=kG(o);if(o.forEach(l=>{let u=xi(l.variable,a),c=l.varType==="VAR_INPUT"?8:7;s+=`
${l.varType}${" ".repeat(c)}${l.variable}${" ".repeat(u)} ${l.type}`}),i){let l=e.elementType==="functionBlock"?"FUNCTION_BLOCK":"FUNCTION",u=e.elementType==="functionBlock"?"\u529F\u80FD\u5757\u8BF4\u660E: ":"\u51FD\u6570\u8BF4\u660E: ",c={kind:Cp.MarkupKind.Markdown,value:["```typescript",`${u}${e.comment}`,s,"```"].join(`
`)},f={label:`${l} ${e.elementName}
`,documentation:c};return r.push(f),{signatures:r}}}},r_=class{constructor(e,r,n){this.varType=e;this.variable=r;this.type=n}};function LG(t){let e=[];return t.forEach(r=>{let n=r.varGlobalType,i=r.varName,o=r.varType,s=new r_(n,i,o);e.push(s)}),e}function xi(t,e){let r=8,n=t.length;return e+r-n}function Dp(t){let e=0;return t.forEach(r=>{r.items.forEach(n=>{let i=n.nextVariables;e=Math.max(e,n.variables.length),i.length>0&&i.forEach(o=>{e=Math.max(e,o.length)})})}),e}function kG(t){let e=0;return t.forEach(r=>{e=Math.max(e,r.variable.length)}),e}var Lp,ib=()=>Lp!=null?Lp:Lp=Tp(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "St",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "St",
      "entry": true,
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "program",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "types_alias",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "types_union",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@18"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "types_struct",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@15"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "types_enum",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@20"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "function_block",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "st_function",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "itface",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            }
          }
        ],
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Program",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "PROGRAM"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "inputs",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@11"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "stStatements",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@74"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_PROGRAM"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StFunction",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "FUNCTION"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "variable_type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "varInputs",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@12"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "varOutputs",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@13"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "varLocals",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@14"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Assignment",
                "feature": "statementList",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@75"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_FUNCTION"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ReqParams",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "param",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "typeName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "INTERFACE"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "EXTENDS"
              },
              {
                "$type": "Assignment",
                "feature": "extender",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@4"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@7"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "methods",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_INTERFACE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Methods",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "METHOD"
          },
          {
            "$type": "Assignment",
            "feature": "modifier",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "reqParams",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@3"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": ",",
                    "cardinality": "?"
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "variable_type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "inputs",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "statementList",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "END_METHOD"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MethodModifier",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "PRIVATE"
          },
          {
            "$type": "Keyword",
            "value": "PUBLIC"
          },
          {
            "$type": "Keyword",
            "value": "PROTECTED"
          },
          {
            "$type": "Keyword",
            "value": "INTERNAL"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VarEnchanceDecl",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@114"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@8"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "OuterName",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@103"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@112"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@113"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@107"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@135"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@114"
                },
                "arguments": []
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FunctionBlock",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "FUNCTION_BLOCK"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "PUBLIC"
              },
              {
                "$type": "Keyword",
                "value": "INTERNAL"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "FINAL",
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "varInputs",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@12"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "varOutputs",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@13"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "varLocals",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@14"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Assignment",
                "feature": "methods",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                },
                "cardinality": "*"
              },
              {
                "$type": "Assignment",
                "feature": "statementList",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@75"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_FUNCTION_BLOCK"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Inputs_List",
      "inferredType": {
        "$type": "InferredType",
        "name": "InputsList"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "modifiers",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_VAR"
          }
        ],
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Inputs_List_single",
      "inferredType": {
        "$type": "InferredType",
        "name": "InputsListSingle"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "modifiers",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_VAR"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VarInput",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "VAR_INPUT"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_VAR"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VarOutput",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "VAR_OUTPUT"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_VAR"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VarLocal",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "VAR"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_VAR"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Structs_List",
      "inferredType": {
        "$type": "InferredType",
        "name": "StructsList"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "TYPE"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "STRUCT"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@16"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_STRUCT"
          },
          {
            "$type": "Keyword",
            "value": "END_TYPE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Struct_Var_Decl_Init",
      "returnType": {
        "$ref": "#/types@1"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Struct_Var_Decl_Init"
            }
          },
          {
            "$type": "Assignment",
            "feature": "variables",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ","
              },
              {
                "$type": "Assignment",
                "feature": "nextVariables",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "AT"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@134"
                },
                "arguments": []
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "typeName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ":="
              },
              {
                "$type": "Assignment",
                "feature": "initialValue",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Var_Decl_Init",
      "inferredType": {
        "$type": "InferredType",
        "name": "VarDeclarationInit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "variables",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ","
              },
              {
                "$type": "Assignment",
                "feature": "nextVariables",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "AT"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@134"
                },
                "arguments": []
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "typeName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ":="
              },
              {
                "$type": "Assignment",
                "feature": "initialValue",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Unions_List",
      "inferredType": {
        "$type": "InferredType",
        "name": "UnionsList"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "TYPE"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "UNION"
          },
          {
            "$type": "Assignment",
            "feature": "items",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "END_UNION"
          },
          {
            "$type": "Keyword",
            "value": "END_TYPE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Alias",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "TYPE"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "refName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ":="
              },
              {
                "$type": "Assignment",
                "feature": "initialValue",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ";"
          },
          {
            "$type": "Keyword",
            "value": "END_TYPE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StEnum",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "TYPE"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "enum",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@21"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ","
              },
              {
                "$type": "Assignment",
                "feature": "enum",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@21"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "Keyword",
            "value": "END_TYPE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Enum",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "variable_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ":="
              },
              {
                "$type": "Assignment",
                "feature": "assignValue",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@135"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DefinitionKeyword",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "VAR"
          },
          {
            "$type": "Keyword",
            "value": "VAR_INPUT"
          },
          {
            "$type": "Keyword",
            "value": "VAR_OUTPUT"
          },
          {
            "$type": "Keyword",
            "value": "VAR_IN_OUT"
          },
          {
            "$type": "Keyword",
            "value": "VAR_TEMP"
          },
          {
            "$type": "Keyword",
            "value": "VAR_EXTERNAL"
          },
          {
            "$type": "Keyword",
            "value": "VAR_GLOBAL"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Modifier",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "CONSTANT"
          },
          {
            "$type": "Keyword",
            "value": "RETAIN"
          },
          {
            "$type": "Keyword",
            "value": "NON_RETAIN"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ComposeElement",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@9"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@2"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@19"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@20"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Variable_Primary",
      "inferredType": {
        "$type": "InferredType",
        "name": "PrimaryVariable"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@114"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Native_Type_Name",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "Integer_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@102"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Unsigned_integer_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@105"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Bool_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@108"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "String_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@109"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Bit_string_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@106"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Real_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@104"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Time_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@112"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Date_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@113"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Date_And_time_type_name",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@110"
                  },
                  "arguments": []
                },
                {
                  "$type": "Keyword",
                  "value": "DT"
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "Time_Of_Day_type_name",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@111"
                  },
                  "arguments": []
                },
                {
                  "$type": "Keyword",
                  "value": "TOD"
                }
              ]
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@39"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "Identifier",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@24"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@114"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Assignment",
            "feature": "Cache_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@103"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Constant",
      "definition": {
        "$type": "Assignment",
        "feature": "constant",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@31"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@30"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@36"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@38"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@37"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Signed_Integer",
      "dataType": "number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "+"
              },
              {
                "$type": "Keyword",
                "value": "-"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@135"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Numeric constants declarations */"
    },
    {
      "$type": "ParserRule",
      "name": "Unsigned_Integer",
      "dataType": "number",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@135"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nonprefix_integer_literal",
      "dataType": "number",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@117"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@119"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@118"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Prefixed_integer_literal",
      "dataType": "number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@33"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": "#"
              }
            ]
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@28"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@117"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@119"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@118"
                },
                "arguments": []
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Prefixed_bit_string_literal",
      "dataType": "number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@106"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": "#"
              }
            ]
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@29"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@117"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@119"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@118"
                },
                "arguments": []
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Integer_type_name",
      "dataType": "number",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@105"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@102"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Real_literal_or_signed_int",
      "dataType": "number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@104"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": "#"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@28"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@135"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@116"
                },
                "arguments": [],
                "cardinality": "?"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Boolean_literal",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@107"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Boolean literals */"
    },
    {
      "$type": "ParserRule",
      "name": "Character_string",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@120"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@121"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Character string literals  */"
    },
    {
      "$type": "ParserRule",
      "name": "Arr_string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "arrElements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": ",",
                "cardinality": "*"
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "]"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Time_literal",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@48"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@58"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@53"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Time literals */"
    },
    {
      "$type": "ParserRule",
      "name": "Array_liters",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ARRAY"
          },
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "arrayElemets",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@40"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": ",",
                "cardinality": "*"
              }
            ],
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "]"
          },
          {
            "$type": "Keyword",
            "value": "OF"
          },
          {
            "$type": "Assignment",
            "feature": "dataType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Array_element",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "left",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@135"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ".."
          },
          {
            "$type": "Assignment",
            "feature": "right",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@135"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Duration",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@112"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": "T"
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "#"
          },
          {
            "$type": "Keyword",
            "value": "-",
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@42"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Time literals - duration  */"
    },
    {
      "$type": "ParserRule",
      "name": "Interval",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@47"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@46"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@44"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@43"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Milliseconds",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@122"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Seconds",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@124"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@43"
            },
            "arguments": [],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Minutes",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@123"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@44"
            },
            "arguments": [],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Hours",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@126"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": [],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Days",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@125"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@46"
            },
            "arguments": [],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Time_of_day",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@111"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": "TOD"
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "#"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@49"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Time literals - time of the day */"
    },
    {
      "$type": "ParserRule",
      "name": "Daytime",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@50"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@51"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@52"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Day_hour",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@135"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Day_minute",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@135"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Day_second",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@135"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@135"
                },
                "arguments": []
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Date_type",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@113"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": "#"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@54"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Date_literal",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@55"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": "-"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@56"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": "-"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@57"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Year",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@135"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Month",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@135"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Day",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@135"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Date_and_time",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@110"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": "DT"
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "#"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@54"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "-"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@49"
                },
                "arguments": []
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Expression",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@60"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Expressions */"
    },
    {
      "$type": "ParserRule",
      "name": "Or_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@61"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "OR"
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@61"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Xor_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@62"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "XOR"
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@62"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "And_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@63"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "AND"
                    },
                    {
                      "$type": "Keyword",
                      "value": "&"
                    }
                  ]
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@63"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Comparison_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@64"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "<>"
                    },
                    {
                      "$type": "Keyword",
                      "value": "="
                    }
                  ]
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@64"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Equ_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@65"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "<="
                    },
                    {
                      "$type": "Keyword",
                      "value": ">="
                    },
                    {
                      "$type": "Keyword",
                      "value": "<"
                    },
                    {
                      "$type": "Keyword",
                      "value": ">"
                    }
                  ]
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@65"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Add_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@66"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "+"
                    },
                    {
                      "$type": "Keyword",
                      "value": "-"
                    }
                  ]
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@66"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Term",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@67"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "*"
                    },
                    {
                      "$type": "Keyword",
                      "value": "/"
                    },
                    {
                      "$type": "Keyword",
                      "value": "MOD"
                    }
                  ]
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@67"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Power_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@97"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Expression"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "**"
                }
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@97"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Unary_expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "operator",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "-"
                },
                {
                  "$type": "Keyword",
                  "value": "NOT"
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Primary_Expression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@27"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@59"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ]
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@71"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@70"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@73"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@68"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@98"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EnumeratedValue",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "EnumeratedValue"
            }
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "enumType",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@24"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@114"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "enumCacheTypeName",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@103"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "#"
          },
          {
            "$type": "Assignment",
            "feature": "enumValue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FunctionExpression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "FunctionExpression"
            }
          },
          {
            "$type": "Assignment",
            "feature": "prefixValidateElement",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@135"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "refFunctionName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@72"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "params",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@83"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "suffixValidateElement",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@135"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RefFunctionOrBlockName",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "refFunctionName",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/types@0"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@114"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Assignment",
            "feature": "Cache_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@103"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VariableExpression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "VariableExpression"
            }
          },
          {
            "$type": "Assignment",
            "feature": "variable",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/types@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@7"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Statement_list",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "statements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@76"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "statements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@76"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* ST statements */"
    },
    {
      "$type": "ParserRule",
      "name": "Statement_list_single",
      "definition": {
        "$type": "Assignment",
        "feature": "statements",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@76"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Statement",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@85"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@78"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": ";"
              }
            ]
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@91"
            },
            "arguments": []
          }
        ],
        "cardinality": "?"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Action_call_statement",
      "definition": {
        "$type": "Assignment",
        "feature": "actionName",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$ref": "#/types@0"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Function_invoke_or_assign_statement",
      "definition": {
        "$type": "Assignment",
        "feature": "statement",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@79"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@81"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Function_invoke_or_assign",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "assignPrefix",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@80"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "id",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@97"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "assign",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@82"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "params",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@83"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignPrefix",
      "definition": {
        "$type": "Assignment",
        "feature": "varEnchanceDecl",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$ref": "#/types@0"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ReturnParse",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "returnSign",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "RETURN"
            }
          },
          {
            "$type": "Assignment",
            "feature": "returnValue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Assignment_subrule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": ":="
          },
          {
            "$type": "Assignment",
            "feature": "expression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Invoke_subrule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "parameters",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@84"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "parameters",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@84"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Param_assignment",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "ParamName",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "InputOrOutputSign",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": ":="
                    },
                    {
                      "$type": "Keyword",
                      "value": "=>"
                    }
                  ]
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "ParamValue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Selection_statement",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "if",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@86"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "case",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@87"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "If_statement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "IF"
          },
          {
            "$type": "Assignment",
            "feature": "ifCondition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "THEN"
          },
          {
            "$type": "Assignment",
            "feature": "ifStatement",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "ELSIF"
              },
              {
                "$type": "Assignment",
                "feature": "elsifConditions",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@59"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": "THEN"
              },
              {
                "$type": "Assignment",
                "feature": "elsifStatements",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@74"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "ELSE"
              },
              {
                "$type": "Assignment",
                "feature": "elseStatement",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@74"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "END_IF"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Case_statement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "CASE"
          },
          {
            "$type": "Assignment",
            "feature": "caseExpression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "OF"
          },
          {
            "$type": "Assignment",
            "feature": "caseElements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@88"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "caseElements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@88"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "ELSE"
              },
              {
                "$type": "Assignment",
                "feature": "elseStatements",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@74"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "END_CASE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Case_element",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "caseList",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@89"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "statements",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@75"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Case_list",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "caseListElement",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@90"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ","
              },
              {
                "$type": "Assignment",
                "feature": "caseListElement",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@90"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Case_list_element",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "numCaseStart",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ".."
                  },
                  {
                    "$type": "Assignment",
                    "feature": "numericCaseEnd",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@28"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "?"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "enumCase",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@70"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "simpleEnumCase",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@136"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Iteration_statement",
      "definition": {
        "$type": "Assignment",
        "feature": "statement",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@92"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@94"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@95"
              },
              "arguments": []
            },
            {
              "$type": "Keyword",
              "value": "EXIT"
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false,
      "$comment": "/* Iteration statements */"
    },
    {
      "$type": "ParserRule",
      "name": "For_statement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "FOR"
          },
          {
            "$type": "Assignment",
            "feature": "controlVariable",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/types@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@114"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": ":="
          },
          {
            "$type": "Assignment",
            "feature": "forList",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@93"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "DO"
          },
          {
            "$type": "Assignment",
            "feature": "statementList",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "END_FOR"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "For_list",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "forExpr",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "TO"
          },
          {
            "$type": "Assignment",
            "feature": "toExpr",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "BY"
              },
              {
                "$type": "Assignment",
                "feature": "byExpr",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@59"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "While_statement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "WHILE"
          },
          {
            "$type": "Assignment",
            "feature": "whileExpr",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "DO"
          },
          {
            "$type": "Assignment",
            "feature": "statementList",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "END_WHILE"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Repeat_statement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "REPEAT"
          },
          {
            "$type": "Assignment",
            "feature": "statementList",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "UNTIL"
          },
          {
            "$type": "Assignment",
            "feature": "untilExpr",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "END_REPEAT"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Direct_variable",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@134"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@135"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@135"
                },
                "arguments": []
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MemberCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "prior",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@69"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "MemberCall"
                },
                "feature": "previous",
                "operator": "="
              },
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": "."
                      },
                      {
                        "$type": "Assignment",
                        "feature": "element",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/types@1"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@114"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Group",
                        "elements": [
                          {
                            "$type": "Assignment",
                            "feature": "explicitOperationCall",
                            "operator": "?=",
                            "terminal": {
                              "$type": "Keyword",
                              "value": "("
                            }
                          },
                          {
                            "$type": "Group",
                            "elements": [
                              {
                                "$type": "Assignment",
                                "feature": "arguments",
                                "operator": "+=",
                                "terminal": {
                                  "$type": "RuleCall",
                                  "rule": {
                                    "$ref": "#/rules@59"
                                  },
                                  "arguments": []
                                }
                              },
                              {
                                "$type": "Group",
                                "elements": [
                                  {
                                    "$type": "Keyword",
                                    "value": ","
                                  },
                                  {
                                    "$type": "Assignment",
                                    "feature": "arguments",
                                    "operator": "+=",
                                    "terminal": {
                                      "$type": "RuleCall",
                                      "rule": {
                                        "$ref": "#/rules@59"
                                      },
                                      "arguments": []
                                    }
                                  }
                                ],
                                "cardinality": "*"
                              }
                            ],
                            "cardinality": "?"
                          },
                          {
                            "$type": "Keyword",
                            "value": ")"
                          }
                        ],
                        "cardinality": "?"
                      }
                    ]
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "explicitOperationCall",
                        "operator": "?=",
                        "terminal": {
                          "$type": "Keyword",
                          "value": "("
                        }
                      },
                      {
                        "$type": "Group",
                        "elements": [
                          {
                            "$type": "Assignment",
                            "feature": "arguments",
                            "operator": "+=",
                            "terminal": {
                              "$type": "RuleCall",
                              "rule": {
                                "$ref": "#/rules@59"
                              },
                              "arguments": []
                            }
                          },
                          {
                            "$type": "Group",
                            "elements": [
                              {
                                "$type": "Keyword",
                                "value": ","
                              },
                              {
                                "$type": "Assignment",
                                "feature": "arguments",
                                "operator": "+=",
                                "terminal": {
                                  "$type": "RuleCall",
                                  "rule": {
                                    "$ref": "#/rules@59"
                                  },
                                  "arguments": []
                                }
                              }
                            ],
                            "cardinality": "*"
                          }
                        ],
                        "cardinality": "?"
                      },
                      {
                        "$type": "Keyword",
                        "value": ")"
                      }
                    ]
                  }
                ]
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FeatureCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "MemberCall"
            }
          },
          {
            "$type": "Assignment",
            "feature": "element",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/types@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@114"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "explicitOperationCall",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "("
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@59"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "arguments",
                        "operator": "+=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@59"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Variable_name",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@114"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Subscript_list",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@101"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ","
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@101"
                },
                "arguments": []
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "]"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Subscript",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@59"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "Signed_integer_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:SINT|INT|DINT|LINT)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Cache_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:RTC|INTEGRAL|DERIVATIVE|PID|RAMP|HYSTERESIS|F_TRIG|RS|R_TRIG|SR|BOOL_TO_SINT|BOOL_TO_INT|BOOL_TO_DINT|BOOL_TO_LINT|BOOL_TO_USINT|BOOL_TO_UINT|BOOL_TO_UDINT|BOOL_TO_ULINT|BOOL_TO_REAL|BOOL_TO_LREAL|BOOL_TO_TIME|BOOL_TO_DATE|BOOL_TO_TOD|BOOL_TO_DT|BOOL_TO_STRING|BOOL_TO_BYTE|BOOL_TO_WORD|BOOL_TO_DWORD|BOOL_TO_LWORD|SINT_TO_BOOL|SINT_TO_INT|SINT_TO_DINT|SINT_TO_LINT|SINT_TO_USINT|SINT_TO_UINT|SINT_TO_UDINT|SINT_TO_ULINT|SINT_TO_REAL|SINT_TO_LREAL|SINT_TO_TIME|SINT_TO_DATE|SINT_TO_TOD|SINT_TO_DT|SINT_TO_STRING|SINT_TO_BYTE|SINT_TO_WORD|SINT_TO_DWORD|SINT_TO_LWORD|INT_TO_BOOL|INT_TO_SINT|INT_TO_DINT|INT_TO_LINT|INT_TO_USINT|INT_TO_UINT|INT_TO_UDINT|INT_TO_ULINT|INT_TO_REAL|INT_TO_LREAL|INT_TO_TIME|INT_TO_DATE|INT_TO_TOD|INT_TO_DT|INT_TO_STRING|INT_TO_BYTE|INT_TO_WORD|INT_TO_DWORD|INT_TO_LWORD|DINT_TO_BOOL|DINT_TO_SINT|DINT_TO_INT|DINT_TO_LINT|DINT_TO_USINT|DINT_TO_UINT|DINT_TO_UDINT|DINT_TO_ULINT|DINT_TO_REAL|DINT_TO_LREAL|DINT_TO_TIME|DINT_TO_DATE|DINT_TO_TOD|DINT_TO_DT|DINT_TO_STRING|DINT_TO_BYTE|DINT_TO_WORD|DINT_TO_DWORD|DINT_TO_LWORD|LINT_TO_BOOL|LINT_TO_SINT|LINT_TO_INT|LINT_TO_DINT|LINT_TO_USINT|LINT_TO_UINT|LINT_TO_UDINT|LINT_TO_ULINT|LINT_TO_REAL|LINT_TO_LREAL|LINT_TO_TIME|LINT_TO_DATE|LINT_TO_TOD|LINT_TO_DT|LINT_TO_STRING|LINT_TO_BYTE|LINT_TO_WORD|LINT_TO_DWORD|LINT_TO_LWORD|USINT_TO_BOOL|USINT_TO_SINT|USINT_TO_INT|USINT_TO_DINT|USINT_TO_LINT|USINT_TO_UINT|USINT_TO_UDINT|USINT_TO_ULINT|USINT_TO_REAL|USINT_TO_LREAL|USINT_TO_TIME|USINT_TO_DATE|USINT_TO_TOD|USINT_TO_DT|USINT_TO_STRING|USINT_TO_BYTE|USINT_TO_WORD|USINT_TO_DWORD|USINT_TO_LWORD|UINT_TO_BOOL|UINT_TO_SINT|UINT_TO_INT|UINT_TO_DINT|UINT_TO_LINT|UINT_TO_USINT|UINT_TO_UDINT|UINT_TO_ULINT|UINT_TO_REAL|UINT_TO_LREAL|UINT_TO_TIME|UINT_TO_DATE|UINT_TO_TOD|UINT_TO_DT|UINT_TO_STRING|UINT_TO_BYTE|UINT_TO_WORD|UINT_TO_DWORD|UINT_TO_LWORD|UDINT_TO_BOOL|UDINT_TO_SINT|UDINT_TO_INT|UDINT_TO_DINT|UDINT_TO_LINT|UDINT_TO_USINT|UDINT_TO_UINT|UDINT_TO_ULINT|UDINT_TO_REAL|UDINT_TO_LREAL|UDINT_TO_TIME|UDINT_TO_DATE|UDINT_TO_TOD|UDINT_TO_DT|UDINT_TO_STRING|UDINT_TO_BYTE|UDINT_TO_WORD|UDINT_TO_DWORD|UDINT_TO_LWORD|ULINT_TO_BOOL|ULINT_TO_SINT|ULINT_TO_INT|ULINT_TO_DINT|ULINT_TO_LINT|ULINT_TO_USINT|ULINT_TO_UINT|ULINT_TO_UDINT|ULINT_TO_REAL|ULINT_TO_LREAL|ULINT_TO_TIME|ULINT_TO_DATE|ULINT_TO_TOD|ULINT_TO_DT|ULINT_TO_STRING|ULINT_TO_BYTE|ULINT_TO_WORD|ULINT_TO_DWORD|ULINT_TO_LWORD|REAL_TO_BOOL|REAL_TO_SINT|REAL_TO_INT|REAL_TO_DINT|REAL_TO_LINT|REAL_TO_USINT|REAL_TO_UINT|REAL_TO_UDINT|REAL_TO_ULINT|REAL_TO_LREAL|REAL_TO_TIME|REAL_TO_DATE|REAL_TO_TOD|REAL_TO_DT|REAL_TO_STRING|REAL_TO_BYTE|REAL_TO_WORD|REAL_TO_DWORD|REAL_TO_LWORD|LREAL_TO_BOOL|LREAL_TO_SINT|LREAL_TO_INT|LREAL_TO_DINT|LREAL_TO_LINT|LREAL_TO_USINT|LREAL_TO_UINT|LREAL_TO_UDINT|LREAL_TO_ULINT|LREAL_TO_REAL|LREAL_TO_TIME|LREAL_TO_DATE|LREAL_TO_TOD|LREAL_TO_DT|LREAL_TO_STRING|LREAL_TO_BYTE|LREAL_TO_WORD|LREAL_TO_DWORD|LREAL_TO_LWORD|TIME_TO_SINT|TIME_TO_INT|TIME_TO_DINT|TIME_TO_LINT|TIME_TO_USINT|TIME_TO_UINT|TIME_TO_UDINT|TIME_TO_ULINT|TIME_TO_REAL|TIME_TO_LREAL|TIME_TO_STRING|TIME_TO_BYTE|TIME_TO_WORD|TIME_TO_DWORD|TIME_TO_LWORD|DATE_TO_SINT|DATE_TO_INT|DATE_TO_DINT|DATE_TO_LINT|DATE_TO_USINT|DATE_TO_UINT|DATE_TO_UDINT|DATE_TO_ULINT|DATE_TO_REAL|DATE_TO_LREAL|DATE_TO_STRING|DATE_TO_BYTE|DATE_TO_WORD|DATE_TO_DWORD|DATE_TO_LWORD|TOD_TO_SINT|TOD_TO_INT|TOD_TO_DINT|TOD_TO_LINT|TOD_TO_USINT|TOD_TO_UINT|TOD_TO_UDINT|TOD_TO_ULINT|TOD_TO_REAL|TOD_TO_LREAL|TOD_TO_STRING|TOD_TO_BYTE|TOD_TO_WORD|TOD_TO_DWORD|TOD_TO_LWORD|DT_TO_SINT|DT_TO_INT|DT_TO_DINT|DT_TO_LINT|DT_TO_USINT|DT_TO_UINT|DT_TO_UDINT|DT_TO_ULINT|DT_TO_REAL|DT_TO_LREAL|DT_TO_STRING|DT_TO_BYTE|DT_TO_WORD|DT_TO_DWORD|DT_TO_LWORD|STRING_TO_BOOL|STRING_TO_SINT|STRING_TO_INT|STRING_TO_DINT|STRING_TO_LINT|STRING_TO_USINT|STRING_TO_UINT|STRING_TO_UDINT|STRING_TO_ULINT|STRING_TO_REAL|STRING_TO_LREAL|STRING_TO_TIME|STRING_TO_DATE|STRING_TO_TOD|STRING_TO_DT|STRING_TO_BYTE|STRING_TO_WORD|STRING_TO_DWORD|STRING_TO_LWORD|BYTE_TO_BOOL|BYTE_TO_SINT|BYTE_TO_INT|BYTE_TO_DINT|BYTE_TO_LINT|BYTE_TO_USINT|BYTE_TO_UINT|BYTE_TO_UDINT|BYTE_TO_ULINT|BYTE_TO_REAL|BYTE_TO_LREAL|BYTE_TO_TIME|BYTE_TO_DATE|BYTE_TO_TOD|BYTE_TO_DT|BYTE_TO_STRING|BYTE_TO_WORD|BYTE_TO_DWORD|BYTE_TO_LWORD|WORD_TO_BOOL|WORD_TO_SINT|WORD_TO_INT|WORD_TO_DINT|WORD_TO_LINT|WORD_TO_USINT|WORD_TO_UINT|WORD_TO_UDINT|WORD_TO_ULINT|WORD_TO_REAL|WORD_TO_LREAL|WORD_TO_TIME|WORD_TO_DATE|WORD_TO_TOD|WORD_TO_DT|WORD_TO_STRING|WORD_TO_BYTE|WORD_TO_DWORD|WORD_TO_LWORD|DWORD_TO_BOOL|DWORD_TO_SINT|DWORD_TO_INT|DWORD_TO_DINT|DWORD_TO_LINT|DWORD_TO_USINT|DWORD_TO_UINT|DWORD_TO_UDINT|DWORD_TO_ULINT|DWORD_TO_REAL|DWORD_TO_LREAL|DWORD_TO_TIME|DWORD_TO_DATE|DWORD_TO_TOD|DWORD_TO_DT|DWORD_TO_STRING|DWORD_TO_BYTE|DWORD_TO_WORD|DWORD_TO_LWORD|LWORD_TO_BOOL|LWORD_TO_SINT|LWORD_TO_INT|LWORD_TO_DINT|LWORD_TO_LINT|LWORD_TO_USINT|LWORD_TO_UINT|LWORD_TO_UDINT|LWORD_TO_ULINT|LWORD_TO_REAL|LWORD_TO_LREAL|LWORD_TO_TIME|LWORD_TO_DATE|LWORD_TO_TOD|LWORD_TO_DT|LWORD_TO_STRING|LWORD_TO_BYTE|LWORD_TO_WORD|LWORD_TO_DWORD|TRUNC|BCD_TO_USINT|BCD_TO_UINT|BCD_TO_UDINT|BCD_TO_ULINT|USINT_TO_BCD|UINT_TO_BCD|UDINT_TO_BCD|ULINT_TO_BCD|DATE_AND_TIME_TO_TIME_OF_DAY|DATE_AND_TIME_TO_DATE|ABS|SQRT|LOG|ASIN|ACOS|ATAN|SIN|COS|TAN|ADD_TIME|ADD_TOD_TIME|ADD_DT_TIME|MULTIME|SUB_TIME|SUB_DATE_DATE|SUB_TOD_TIME|SUB_TOD_TOD|SUB_DT_TIME|SUB_DT_DT|DIVTIME|SHL|SHR|ROR|ROL|CONCAT_DATE_TOD|CTU_DINT|CTU_LINT|CTU_UDINT|CTU_ULINT|CTD_DINT|CTD_LINT|CTD_UDINT|CTD_ULIN|CTUD_DINT|CTUD_LINT|CTUD_UDINT|CTUD_ULINT|TP|TON|TOF|CTUD|CTU|CTD|SEMA|MC_Power|MC_ReadActualPosition|MC_MoveAbsolute|MC_MoveRelative|MC_MoveAdditive|MC_MoveSuperImposed|MC_MoveVelocity|MC_PositionProfile|MC_VelocityProfile|MC_ReadActualVelocity|MC_AccelerationProfile|MC_SetPosition|MC_ReadParameter|MC_ReadBoolParameter|MC_WriteParameter|MC_WriteBoolParameter|MC_ReadActualTorque|MC_ReadStatus|MC_ReadAxisError|MC_Reset|MC_DigitalCamSwitch|MC_TouchProbe|MC_AbortTrigger|MC_Stop|MC_Halt|MC_Home|MC_CamTableSelect|MC_CamIn|MC_CamOut|MC_GearIn|MC_GearOut|MC_GearInPos|MC_Phasing|SMC_TrackAxis|SMC_TrackSetValues|MC_StartTrace|SMC_MoveContinuousAbsolute|SMC_MoveContinuousRelative|SMC_GetTappetValue|SMC_ReadAxisInfo|SMC_GetTimeNS|SMC_ParameterNumber_CoE|SMC_ERROR|MC_Direction|MC_BUFFER_MODE|SMC_AXIS_STATE|MC_TAPPETMODE|SMC_CAM_TYPE|MC_STARTMODE|AXIS_REF|MC_CAM_REF|SMC_TP|MC_TP_REF|SMC_TV|MC_TV_REF|SMC_TA|MC_TA_REF|AXIS_REF_SM3|MC_CAMSWITCH_TR|MC_CAMSWITCH_REF|MC_TRACK_TR|TRIGGER_REF|MC_CAM_REF1|MC_CAM_ID|SMC_TAPPETDATA|Axis_Ref_Info)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Real_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:LREAL|REAL)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Unsigned_integer_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:USINT|UINT|UDINT|ULINT)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Bit_string_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:BYTE|WORD|DWORD|LWORD)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Bool_Result_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:TRUE|FALSE)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Bool_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:BOOL)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "String_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:STRING)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Date_And_time_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:DATE_AND_TIME)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Time_Of_Day_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:TIME_OF_DAY)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Time_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:TIME)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Date_type_name",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b(?:DATE)\\\\b/i"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Identifier",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "fragment": true,
      "name": "Exponent_prefix",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[Ee]/"
      },
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Exponent",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@115"
            }
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "+"
                }
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "-"
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@135"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Binary_integer",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b2#(0|1)(0|1|(_))*\\\\b/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Hex_integer",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b16#([0-9aAbBcCdDeEfF])([0-9aAbBcCdDeEfF]|(_))*\\\\b/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Octal_integer",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\b8#([0-7])([0-7]|(_))*\\\\b/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Single_byte_character_string",
      "definition": {
        "$type": "RegexToken",
        "regex": "/(')(\\\\\\\\.|[^'])*(')/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Double_byte_character_string",
      "definition": {
        "$type": "RegexToken",
        "regex": "/(\\")(\\\\\\\\.|[^\\"])*(\\")/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "TMilliseconds",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@127"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@129"
            }
          },
          {
            "$type": "RegexToken",
            "regex": "/[mM][sS]/"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "TMinutes",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@127"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@129"
            }
          },
          {
            "$type": "RegexToken",
            "regex": "/[mM]/"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "TSeconds",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@127"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@129"
            }
          },
          {
            "$type": "RegexToken",
            "regex": "/[sS]/"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "TDays",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@127"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@129"
            }
          },
          {
            "$type": "RegexToken",
            "regex": "/[dD]/"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "THours",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@129"
            }
          },
          {
            "$type": "RegexToken",
            "regex": "/[hH]/"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "fragment": true,
      "name": "Underscore",
      "definition": {
        "$type": "RegexToken",
        "regex": "/_/"
      },
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "fragment": true,
      "name": "Letters",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[a-zA-Z]+/"
      },
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "fragment": true,
      "name": "Fixed_point",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@135"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "."
                }
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@135"
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "fragment": true,
      "name": "Location_prefix",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "I"
                }
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "Q"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "M"
            }
          }
        ]
      },
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "fragment": true,
      "name": "Size_prefix",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "X"
                        }
                      },
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "B"
                        }
                      }
                    ]
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "W"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "D"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "L"
            }
          }
        ]
      },
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "ADDRESS",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "%"
            }
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "I"
                    }
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "Q"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "M"
                }
              }
            ]
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "TerminalAlternatives",
                        "elements": [
                          {
                            "$type": "CharacterRange",
                            "left": {
                              "$type": "Keyword",
                              "value": "X"
                            },
                            "cardinality": "?"
                          },
                          {
                            "$type": "CharacterRange",
                            "left": {
                              "$type": "Keyword",
                              "value": "B"
                            }
                          }
                        ]
                      },
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "W"
                        }
                      }
                    ]
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "D"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "L"
                }
              }
            ]
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@133"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "."
                }
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@133"
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Digits",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Direct_variable_prefix",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "%"
            }
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@130"
            }
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@131"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@135"
                }
              },
              {
                "$type": "TerminalGroup",
                "elements": [
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "."
                    }
                  },
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@135"
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "Integer",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@133"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@127"
                },
                "cardinality": "?"
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@133"
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "IdentifierEnumeratedCase",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalGroup",
                "elements": [
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@127"
                    }
                  },
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "TerminalRuleCall",
                        "rule": {
                          "$ref": "#/rules@133"
                        }
                      },
                      {
                        "$type": "TerminalRuleCall",
                        "rule": {
                          "$ref": "#/rules@128"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@128"
                }
              }
            ]
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@127"
                },
                "cardinality": "?"
              },
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@133"
                    }
                  },
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@128"
                    }
                  }
                ]
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "RegexToken",
            "regex": "/(?=(,\\\\s*([_A-Za-z]\\\\w*|([+\\\\-]?[0-9][0-9_]*\\\\s*(\\\\.\\\\.\\\\s*[+\\\\-]?[0-9][0-9_]*)?))\\\\s*)*\\\\:\\\\s+)/"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT_ST",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\(\\\\*[\\\\s\\\\S]*?\\\\*\\\\)/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/"
      },
      "fragment": false
    }
  ],
  "types": [
    {
      "$type": "Type",
      "name": "Universe",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@1"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/rules@2"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "NamedElement",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/rules@16/definition/elements@0/inferredType"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/rules@17/inferredType"
            }
          }
        ]
      }
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "usedGrammars": []
}`);var wG={languageId:"st",fileExtensions:[".st"],caseInsensitive:!1},ob={AstReflection:()=>new Cu},sb={Grammar:()=>ib(),LanguageMetaData:()=>wG,parser:{}};var kp=class{constructor(e){this.services=e}error(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.error(e))}warn(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.warn(e))}info(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.info(e))}log(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.log(e))}};var wp=class extends zo{async computeLocalScopes(e,r){let n=e.parseResult.value,i=new pn;for(let a of n.program)a.inputs.forEach(u=>{u.items.forEach(f=>{let d=this.descriptions.createDescription(f,f.variables,e);i.add(n,d);let m=f.nextVariables;this.addNextVariables(m,f,e,i,n)})});return n.function_block.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),n.st_function.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),i}addNextVariables(e,r,n,i,o){if(e)return e.length>0&&e.forEach(s=>{let a=this.descriptions.createDescription(r,s,n);i.add(o,a)}),i}handleAllVariable(e,r,n,i){e.forEach(o=>{o.items.forEach(a=>{let l=this.descriptions.createDescription(a,a.variables,i);r.add(n,l),this.addNextVariables(a.nextVariables,a,i,r,n)})})}};var $p=class extends hp{format(e){}};var Pp=class extends qo{constructor(r){super(r);this.services=r}getOuterCacheElement(r){return wC(r)}isOuterCacheReference(r){return this.getOuterCacheElement(r)!==void 0}createOuterCacheDescription(r){let n=this.getOuterCacheElement(r),i="FunctionElement";return n&&(n.elementType==="alias"?i="Alias":n.elementType==="enum"?i="StEnum":n.elementType==="struct"?i="StructsList":n.elementType==="functionBlock"&&(i="FunctionBlock")),{type:i,name:r,documentUri:ur,path:"st-cache"}}getCandidate(r){let n=r.reference.$refText,i=this.reflection.getReferenceType(r);return Op.includes(n.toUpperCase())?this.createOuterCacheDescription(n):(i==="ComposeElement"||i==="Universe")&&this.isOuterCacheReference(n)?this.createOuterCacheDescription(n):super.getCandidate(r)}buildReference(r,n,i,o){let s=this,a={$refNode:i,$refText:o,get ref(){var l;if(Be(this._ref))return this._ref;if(ll(this._nodeDescription)){let u=s.loadAstNode(this._nodeDescription),c=s.getOuterCacheElement(o);this._ref=u!=null?u:c,!this._ref&&!Op.includes(o.toUpperCase())&&(this._ref=s.createLinkingError({reference:a,container:r,property:n},this._nodeDescription))}else if(this._ref===void 0){let u=s.getLinkedNode({reference:a,container:r,property:n});if(u.error&&Nr.getDocument(r).state<oe.ComputedScopes)return;this._ref=(l=u.node)!=null?l:u.error,this._nodeDescription=u.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return vn(this._ref)?this._ref:void 0}};return a}doLink(r,n){var o;let i=r.reference;if(i._ref===void 0)try{let s=this.getCandidate(r);if(vn(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){let a=this.loadAstNode(s),l=this.getOuterCacheElement(i.$refText);i._ref=(o=a!=null?a:l)!=null?o:this.createLinkingError(r,s)}}catch(s){i._ref={...r,message:`An error occurred while resolving reference to '${i.$refText}': ${s}`}}n.references.push(i)}getLinkedNode(r){try{let n=this.getCandidate(r);if(vn(n))return{error:n};let i=this.loadAstNode(n);if(i)return{node:i,descr:n};let o=this.getOuterCacheElement(r.reference.$refText);return o?{node:o,descr:n}:{descr:n,error:this.createLinkingError(r,n)}}catch(n){return{error:{...r,message:`An error occurred while resolving reference to '${r.reference.$refText}': ${n}`}}}}createLinkingError(r,n){let i=Nr.getDocument(r.container);i.state<oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${i.uri}).`);let o=this.reflection.getReferenceType(r),s=r.container;return vC(s)?(o="\u529F\u80FD\u5757\u6216\u51FD\u6570",{...r,message:`\u4E0D\u80FD\u5F15\u7528\u7684${o}'${r.reference.$refText}'.`,targetDescription:n}):{...r,message:`Could not resolve reference to ${o} named '${r.reference.$refText}'.`,targetDescription:n}}};function ab(t){return{$type:"struct",literal:t}}function lb(t){return t.$type==="struct"}function ub(t){return{$type:"functionBlock",literal:t}}function cb(t){return t.$type==="functionBlock"}function Mp(t,e){return{$type:"error",message:t,source:e}}function fb(t){return{$type:"cache",literal:t}}function db(t){return t.$type==="cache"}function Fp(t,e){var i;let r,n=e.get(t);if(n)return n;if(e.set(t,Mp("Recursive definition",t)),Dn(t)){let o=(i=t.element)==null?void 0:i.ref;o&&Lu(o)&&(r=pb(o,e))}else if(Sn(t))r=PG(t,e);else if(rr(t)){let o=t.typeName;bu(o)&&(r=n_(o,e))}else Lu(t)?r=pb(t,e):rs(t)?r=ab(t):vi(t)?r=ub(t):_p(t)&&(r=$G(t,e));return r||(r=Mp("Could not infer type for "+t.$type,t)),e.set(t,r),r}function pb(t,e){let r=t.typeName;return n_(r,e)}function $G(t,e){return n_(t.refName,e)}function n_(t,e){if(bu(t)){let r=t.Identifier;if(r){let i=r.ref;if(i)return Fp(i,e)}let n=e_(t);if(n)return fb(n)}}function PG(t,e){let r=t.prior;return MG(r,e)}function MG(t,e){let r=t.variable.ref;return r?Fp(r,e):Mp("Could not infer type for this reference",t)}var Up=class extends Xo{constructor(e){super(e)}getScope(e){if(e.property==="element"){let n=e.container.previous;if(!n)return super.getScope(e);let i=Fp(n,new Map);if(lb(i))return this.scopeStructMembers(i.literal);if(cb(i))return this.scopeFunctionBlockMembers(i.literal);if(db(i)){let o=this.scopeCache(i.literal);if(o)return o}}else if(e.property==="variable")return super.getScope(e);return super.getScope(e)}scopeCache(e){let r=dt(e),n;if(r){let[i,o]=r;if(i){let s=i.varDecls,a=he(s).map(u=>this.descriptions.createDescription(u,u.varName,o)).nonNullable(),l={caseInsensitive:!1};n=this.createScope(a,n,l)}}if(n)return n}getGlobalScope(e,r){return super.getGlobalScope(e,r)}scopeStructMembers(e){let r=this.getStructChain(e).flatMap(a=>a.items),n=he(r).map(a=>this.descriptions.createDescription(a,a.variables)).nonNullable(),i=he(r).map(a=>{let l=a.nextVariables;if(l.length>0)for(let u=0;u<l.length;u++){let c=l[u];return this.descriptions.createDescription(a,c)}}).nonNullable(),o=new zr(n),s=new zr(i);return o}scopeFirstFunctionBlockMembers(e){let r=this.getFunctionBlockDecl(e),n=he(r).map(i=>{let o=this.nameProvider.getName(i);return o?this.descriptions.createDescription(i,o):this.descriptions.createDescription(i,i.variables)}).nonNullable();return new zr(n)}scopeNextFunctionBlockMembers(e){let r=this.singleVarScope(e,"input"),n=this.singleVarScope(e,"output"),i=this.singleVarScope(e,"local");return new zr(r.getAllElements().concat(n.getAllElements()).concat(i.getAllElements()))}singleVarScope(e,r){let n;r==="input"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varInputs):r==="output"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varOutputs):r==="local"&&(n=this.getFunctionBlockChain(e).flatMap(a=>a.varLocals));let o=this.getFunctionBlockDecl(e).filter(a=>a.nextVariables.length>0),s;for(let a=0;a<o.length;a++){let l=o[a],u=l.nextVariables,c=this.handleNextVariables(l,u),f=this.createScopeForNodes(n,c);s?s=s.concat(f.getAllElements()):s=f.getAllElements()}return new zr(s)}scopeFunctionBlockMembers(e){let r=this.scopeFirstFunctionBlockMembers(e),n=this.scopeNextFunctionBlockMembers(e);return new zr(r.getAllElements().concat(n.getAllElements()))}handleNextVariables(e,r){let n=he(r).map(o=>this.descriptions.createDescription(e,o)).nonNullable();return new zr(n)}getStructDecl(e){let r=[],n=[];return e.items}getFunctionBlockDecl(e){let r=[],n=e.varInputs,i=e.varOutputs,o=e.varLocals;return this.addDecl(n,r),this.addDecl(i,r),this.addDecl(o,r),r}addDecl(e,r){e.forEach(n=>{let i=n.items;r.push(...i)})}getStructChain(e){let r=new Set;return r.add(e),e.items.forEach(i=>{let o=i.typeName;if(bu(o)){let s=o.Identifier;if(s){let a=s.ref;a&&this.getStructChain(a)}}}),Array.from(r)}getFunctionBlockChain(e){let r=new Set;return r.add(e),Array.from(r)}};function mb(t){let e=t.validation.DocumentValidator,r=t.validation.ValidationRegistry,n=t.validation.StValidator,i={St:n.checkElement};r.register(i,n)}var Bp=class{checkElement(e,r){let n=e.program,i=e.st_function,o=e.function_block,s=e.types_struct,a=e.types_alias,l=e.types_enum,u=e.types_union;n.forEach(c=>{this.saveProgramVarInfo(c.inputs,r)}),this.checkPrograms(e,r),this.checkFunctions(i,r),this.checkFunctionBlocks(o,r),this.checkDateTypes(s,a,l,u,r)}checkPrograms(e,r){this.judgeWhetherHasDuplicateName("program",e.program,r),this.judgeCapital("program",e.program,r),this.checkProgramVarRef(e,r)}checkFunctions(e,r){this.judgeWhetherHasDuplicateName("function",e,r),this.handleFunctionOrBlockInfo(e,r)}checkFunctionBlocks(e,r){this.judgeWhetherHasDuplicateName("functionBlock",e,r),this.judgeCapital("functionBlock",e,r),this.handleFunctionOrBlockInfo(e,r)}checkDateTypes(e,r,n,i,o){this.handleDataTypeVarInfo(e,r,n,i,o)}judgeCapital(e,r,n){r&&r.forEach(i=>{if(i.name){let o=i.name.substring(0,1);/^[a-zA-Z]/.test(o)&&o.toUpperCase()!==o&&n("warning",`${e} name should start with a capital letter`,{node:i,property:"name"})}})}judgeWhetherHasDuplicateName(e,r,n){let i=[];if(r){let o={};r.forEach(a=>{let l=[];cC(a)?(l.push(a.variables),a.nextVariables&&l.push(...a.nextVariables)):l.push(a.name),l.forEach(u=>{o[u]?(o[u]++,i.push(a)):o[u]=1})});let s=Object.keys(o).filter(a=>o[a]>1);i.forEach(a=>{s.length>0&&n("error",`\u91CD\u590D\u5B9A\u4E49\u7684${e}:${s[0]}`,{node:a,property:"name"})})}}checkProgramVarRef(e,r){e.program.forEach(i=>{let o=i.stStatements;if(o){let s=o.statements;this.handleStatements(s,r)}})}handleStatements(e,r){e.length!==0&&e.forEach(n=>{let i=n.$type;if(i==="Selection_statement"){let o=n,s=o.if,a=o.case;if(s){let l=s.ifStatement,u=s.ifCondition,c=s.elsifConditions;this.checkIfWhitespace(s,r),this.checkWhitespace(s,r);let f=s.elsifStatements,d=s.elseStatement;if(u){let m=u.$type;this.handleCondition(m,u,r)}if(c.forEach(m=>{let R=m.$type;this.handleCondition(R,m,r)}),l){let m=l.statements;this.handleStatements(m,r)}if(f){let m=f.statements;this.handleStatements(m,r)}if(d){let m=d.statements;this.handleStatements(m,r)}}if(a){let l=a.caseExpression,u=a.elseStatements,c=a.caseElements,f="";if(Cr(l)){let d=l.variable;f=this.judgeRefNodeType(d.ref,f)}else if(An(l))f=this.validateEnumeratedValue(l,void 0,r);else if(Sn(l)){let d=l.prior;Cr(d)?f=this.judgeRefNodeType(d.variable.ref,f):An(d)&&(f=this.validateEnumeratedValue(d,void 0,r))}if(u){let d=u.statements;this.handleStatements(d,r)}c.forEach(d=>{let R=d.caseList.caseListElement,O=d.statements;if(O){let I=O.statements,E=[];E.push(I),this.handleStatements(E,r)}R.length>0&&R.forEach(I=>{let E=I.numCaseStart,y=I.numericCaseEnd,T=I.enumCase,S=I.simpleEnumCase;if(E&&y&&typeof E=="string"&&typeof y=="string"&&(E=parseInt(E),y=parseInt(y),E>y&&r("error","\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:I,property:"numCaseStart"})),T&&An(T)&&this.validateEnumeratedValue(T,f,r),S&&f){let M=this.getEnumMembers(f,I);M&&(M.some(ue=>ue.toLowerCase()===S.toLowerCase())||r("error",`'${S}' is not a member of enum '${f}'.`,{node:I,property:"simpleEnumCase"}))}})})}}else if(i==="Iteration_statement"){let s=n.statement;if(s!=="EXIT"){let a=s.statementList;if(a){let l=a.statements;if(this.handleStatements(l,r),mC(s)){let u=s.controlVariable.ref,c="";rr(u)&&(c=this.judgeRefNodeType(u,c));let f=s.forList,m=f.forExpr.prior,R=f.byExpr,O=R==null?void 0:R.prior,I=f.toExpr,E=I==null?void 0:I.prior;this.handleExpressionPrior(m,c,r,m),this.handleExpressionPrior(O,c,r,O),this.handleExpressionPrior(E,c,r,E)}else if(RC(s)){let u=s.untilExpr;this.handleSingleVariableExpression(u,r)}else if(SC(s)){let u=s.whileExpr;this.handleSingleVariableExpression(u,r)}}}}else i==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(n,r)})}handleCondition(e,r,n){if(e==="Expression"){let i=r.left,o=r.right;this.handleConditionExpression(i,o,n)}else if(e!=="Constant"){if(e!=="FunctionExpression")if(e==="VariableExpression"){let o=r.variable}else e==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(r,n)}}handleFunctionInvokeOrAssign(e,r){let i=e.statement;if(!xC(i)){let o=i.id,s=i.assign,a=i.params,l=i.assignPrefix;this.handleVariableHint(o,r,!1,s,a,l)}}handleVariableHint(e,r,n,i,o,s){let a="",l,u;if(e){if(Dn(e)){let c=e;l=c;let f=c.element,d=c.previous;if(f){let m=f.ref,R=f.$refText;m&&(a=this.handleRef(m,R,a,d))}}else if(Sn(e)){let c=e,f=c.prior;if(Cr(f)){let m=f.variable.ref;l=f,a=this.judgeRefNodeType(m,a)}else if(zy(f)){let d=this.handleFunctionExpression(f,r,c,a)}}}if(s){let c=s.varEnchanceDecl,f=c.ref;u=f;let d=c.$refText;f?(a=this.handleRef(f,d,a),this.handleParam(o,a,r,s)):(a=d,this.handleParam(o,a,r))}if(i){let c=i.expression,f=c==null?void 0:c.$type;if(f==="Constant"){let m=c.constant;this.handleDataTypeMatch(m,a,r,l)}else if(f==="EnumeratedValue"){let d=c;this.validateEnumeratedValue(d,a,r)}else if(f==="Expression"){let d=c,m=d==null?void 0:d.prior,R=d.left,O=d.right;if(m&&this.handleExpressionPrior(m,a,r,l),R&&O){let I=R.prior,E=O.prior;this.handleExpressionPrior(I,a,r,l),this.handleExpressionPrior(E,a,r,l)}}else if(f==="MemberCall"){let d=c,m=d.element,R=d.arguments;if(m){let O=m.ref;if(O&&yC(O)){let I=O,E=I.variable_type,y=I.reqParams,T=[];if(this.handleFunctionBlockMethodReqparam(y,r,T),R.length!==y.length)r("error",`\u671F\u671B${y.length}\u4E2A\u53C2\u6570,\u4F46\u662F\u5B9E\u9645${R.length}\u4E2A`,{node:d,property:"arguments"});else for(let M=0;M<R.length;M++){let te=R[M],ue=T[M],de=te.prior;this.handlePrior(de,"","",ue,r)}let S;if(S=Cn(E,S,r),S&&a!==""){let[M,te]=this.getComparableTypes(S,a);M&&te&&M.toLowerCase()!==te.toLowerCase()&&r("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${S}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:d,property:"element"})}}}}}if(o&&o.length>0&&u&&Jn(u)){let c=[];this.validateStFunctionRule(u,l,a,r,c,o[0])}}handleParam(e,r,n,i){let o,s;if(i&&(s=i.varEnchanceDecl,o=s.ref),e&&e.length>0){let a=e[0].parameters;if(r){let l=dt(r);if(l)this.validateLibraryFunction(l,a,n);else if(rr(o)){let u=o.typeName;if(u){let c=u.Identifier;if(c){let f=c.ref;if(vi(f)){let d={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:f.name,varDecls:[],rootName:"",comment:"",usage:""};f.varInputs.forEach(m=>{m.items.forEach(O=>{let E={$type:"VarDeclaration",varName:O.variables,varType:Qn(O.typeName,""),varGlobalType:"VAR_INPUT"};d.varDecls.push(E)})}),f.varOutputs.forEach(m=>{m.items.forEach(O=>{let E={$type:"VarDeclaration",varName:O.variables,varType:Qn(O.typeName,""),varGlobalType:"VAR_OUTPUT"};d.varDecls.push(E)})}),this.validateLibraryFunction(d,a,n,!0)}else rs(f)&&i&&n("error","\u65E0\u6CD5\u8C03\u7528\u7C7B\u578B'TYPE'\u7684\u5BF9\u8C61",{node:i,property:"varEnchanceDecl"})}else i&&n("error",`\u9700\u8981\u7A0B\u5E8F\u540D,\u51FD\u6570\u6216\u529F\u80FD\u5757\u5B9E\u4F8B\u66FF\u4EE3${i==null?void 0:i.varEnchanceDecl.$refText}`,{node:i,property:"varEnchanceDecl"})}}}}}handleRef(e,r,n,i){if(rs(e.$container)){let a=e.$container.items.find(l=>l.variables===r);if(a){let l=a.typeName;n=this.judgeType(n,l)}}else if(rr(e)){let s=e.typeName;n=this.judgeType(n,s)}else if(i){let o=i.prior;if(Cr(o)){let s=o.variable.ref;if(rr(s)){let a=s.typeName;if(a.Cache_type_name){let l=a.Cache_type_name,u=dt(l);if(u){let[c,f]=u;if(c){let d=c.varDecls.find(m=>m.varName===r);n=d==null?void 0:d.varType}}}}}}return n}judgeRefNodeType(e,r){if(rr(e)){let n=e.typeName;r=Qn(n,r)}return r}judgeType(e,r){return e=Qn(r,e),e}getCurrentRoot(e){if(e)return e.$type==="St"?e:Nr.getContainerOfType(e,r=>r.$type==="St")}getLocalEnumByName(e,r){if(!e)return;let n=this.getCurrentRoot(r);return n==null?void 0:n.types_enum.find(i=>i.name.toLowerCase()===e.toLowerCase())}getEnumMembers(e,r){if(!e)return;let n=this.getLocalEnumByName(e,r);if(n)return n.enum.map(o=>o.variable_name);let i=ja(e);if(i){let[o]=i;return o==null?void 0:o.enumChild.map(s=>s.enumVarName)}}getEnumeratedValueTypeName(e){var n,i;if(e.enumCacheTypeName)return e.enumCacheTypeName;let r=(n=e.enumType)==null?void 0:n.ref;if(r){if(r.$type==="StEnum")return r.name;if("elementType"in r&&r.elementType==="enum"&&"elementName"in r){let o=r.elementName;if(typeof o=="string")return o}}return(i=e.enumType)==null?void 0:i.$refText}validateEnumeratedValue(e,r,n){let i=this.getEnumeratedValueTypeName(e),o=this.getEnumMembers(i,e);if(i&&o&&(o.some(a=>a.toLowerCase()===e.enumValue.toLowerCase())||n("error",`'${e.enumValue}' is not a member of enum '${i}'.`,{node:e,property:"enumValue"})),i&&r){let[s,a]=this.getComparableTypes(i,r);s&&a&&s.toLowerCase()!==a.toLowerCase()&&n("error",`Cannot convert enum type '${i}' to type '${r}'.`,{node:e,property:"enumValue"})}return i}handleExpressionPrior(e,r,n,i){if(e){i||(i=e);let o=e==null?void 0:e.$type;if(o==="Constant"){let a=e.constant;this.handleDataTypeMatch(a,r,n,i)}else if(o==="EnumeratedValue"){let s=e;this.validateEnumeratedValue(s,r,n)}else if(o==="FunctionExpression"){let s=this.handleFunctionExpression(e,n,i,r)}else if(o==="VariableExpression"){let s=e,a=s.variable.ref,l="";if(l=this.judgeRefNodeType(a,l),l&&r){let[u,c]=this.getComparableTypes(l,r);u&&c&&u.toLowerCase()!==c.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${l}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:s,property:"variable"})}}}}handleFunctionExpression(e,r,n,i){let o=e,s=o.refFunctionName,a=o.params;if(s.refFunctionName){let l=s.refFunctionName.ref,u=o.params;this.validatePrefixSuffixElement(o,r);let c=[];if(l){if(Jn(l))this.validateStFunctionRule(l,n,i,r,c,u);else if(rr(l)&&(i=this.judgeRefNodeType(l,i),i)){let f=dt(i);if(f&&u){let d=u.parameters;this.validateLibraryFunction(f,d,r)}}}}else if(s.Cache_type_name){this.validatePrefixSuffixElement(o,r);let l=s.Cache_type_name,u=this.getCacheFunctionReturnType(l);if(this.validateReturnTypeCompatibility(u,i,r,o,"refFunctionName"),a){let c=a.parameters,f=dt(l);f&&this.validateLibraryFunction(f,c,r)}}}validateStFunctionRule(e,r,n,i,o,s){let a=e.variable_type,l=e.varInputs,u,c=[];if(l.forEach(f=>{f.items.forEach(m=>{let R=m.nextVariables;R.length>0&&R.forEach(O=>{c.push(O)})}),c.push(...f.items)}),a&&(u=Qn(a,u),r&&u&&n)){let[f,d]=this.getComparableTypes(u,n);f&&d&&f.toLowerCase()!==d.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${u}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${n}'`,{node:r,property:"prior"})}if(this.handleFunctionReqparam(c,i,o),s){let f=s.parameters;if(c.length!==f.length)i("error",`\u671F\u671B${c.length}\u4E2A\u8F93\u5165,\u4F46\u662F\u5B9E\u9645${f.length}\u4E2A`,{node:s,property:"parameters"});else for(let d=0;d<f.length;d++){let m=f[d],R=o[d],O=m.ParamValue;if(O){let I=O.prior;this.handlePrior(I,"","",R,i)}}}}validateLibraryFunction(e,r,n,i){if(i)this.validateFb(e,r,n,i);else{let[o,s]=e;o&&o.elementType==="functionBlock"&&(o=o,this.validateFb(o,r,n))}}validateFb(e,r,n,i){let o=this.judgeCacheNodeInputOutputVarDecl(":=",e),s=this.judgeCacheNodeInputOutputVarDecl("=>",e);r.forEach(a=>{let l=a.ParamName,u=a.ParamValue,c=a.InputOrOutputSign,f=!1,d=i?e==null?void 0:e.elementName:e==null?void 0:e.elementName.toUpperCase();c===":="&&l&&(o.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u5165\u53C2\u6570`,{node:a,property:"ParamName"}))),c==="=>"&&l&&(s.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u51FA\u53C2\u6570`,{node:a,property:"ParamName"}))),f||u&&this.handleCacheTypeMatch(l,u,e,n,a)})}validatePrefixSuffixElement(e,r){let n=e.prefixValidateElement,i=e.suffixValidateElement;n&&r("error",`invalid Identifier near '${n}'`,{node:e,property:"prefixValidateElement"}),i&&r("error",`invalid Identifier near '${i}'`,{node:e,property:"suffixValidateElement"})}normalizeTypeAlias(e,r=new Set){var o;if(!e)return;let n=e.toUpperCase();if(n==="DT")return"DATE_AND_TIME";if(n==="TOD")return"TIME_OF_DAY";let i=dt(e);if(i){let[s]=i;if((s==null?void 0:s.elementType)==="alias"){let a=s,l=a.elementName.toUpperCase();return r.has(l)?l:(r.add(l),(o=this.normalizeTypeAlias(a.refName,r))!=null?o:n)}}return n}getComparableTypes(e,r){return[this.normalizeTypeAlias(e),this.normalizeTypeAlias(r)]}getCacheFunctionReturnType(e){let r=dt(e);if(!r)return;let[n]=r;if(!n||n.elementType!=="function")return;let i=n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"&&s.varName.toUpperCase()==="OUT")||n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"),o=this.normalizeTypeAlias(i==null?void 0:i.varType);if(!(!o||o==="ANY"||o.startsWith("ANY_")))return o}validateReturnTypeCompatibility(e,r,n,i,o){let s=this.normalizeTypeAlias(e),a=this.normalizeTypeAlias(r);s&&a&&s.toLowerCase()!==a.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${s}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:i,property:o})}judgeCacheNodeInputOutputVarDecl(e,r){let n=new Set;if(!e)return n;let i="",o=r==null?void 0:r.varDecls;return e===":="?i="VAR_INPUT":e==="=>"&&(i="VAR_OUTPUT"),o&&(o==null||o.forEach(s=>{s.varGlobalType===i&&n.add(s.varName)})),n}handleCacheTypeMatch(e,r,n,i,o){var l;if(!n)return;let s=n.varDecls.find(u=>u.varName===e),a=s==null?void 0:s.varType;if(ku(r.prior)){let c=r.prior.constant;this.handleDataTypeMatch(c,a,i,r)}else if(Cr(r.prior)){let u=r.prior,c=u.variable.ref,f="";if(f=this.judgeRefNodeType(c,f),f&&a){let[d,m]=this.getComparableTypes(f,a);d&&m&&d.toLowerCase()!==m.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${f}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:u,property:"variable"})}}else if(An(r.prior)){let u=r.prior;this.validateEnumeratedValue(u,a,i)}else if(Dn(r)){let u=r.element,c=(l=r.previous)==null?void 0:l.prior,f="",d="";if(Cr(c)){let R=c.variable.ref;if(rr(R)&&(f=R.variables,d=this.judgeRefNodeType(R,d)),d){let O=dt(d.toUpperCase());if(O&&u){let[I,E]=O;if(I){let y=I.varDecls.find(T=>T.varName===(u==null?void 0:u.$refText));if(y){let T=y.varType;if(T&&a){let[S,M]=this.getComparableTypes(T,a);S&&M&&S.toLowerCase()!==M.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${T}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:o,property:"ParamName"})}}}}}}}else if(zy(r.prior)){let u=r.prior;if(u.refFunctionName.refFunctionName){let c=u.refFunctionName.refFunctionName.ref;if(c){if(Jn(c)){let f=c.variable_type,d;d=Cn(f,d,i),this.validateReturnTypeCompatibility(d,a,i,u,"refFunctionName")}}else{let f=u.refFunctionName.refFunctionName.$refText}}else if(u.refFunctionName.Cache_type_name){let c=u.refFunctionName.Cache_type_name,f=this.getCacheFunctionReturnType(c);this.validateReturnTypeCompatibility(f,a,i,u,"refFunctionName")}}}handleFunctionReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s=i.nextVariables,a;if(o&&(a=Cn(o,a,r),n&&(n.push(a),s.length>0)))for(let l=0;l<s.length;l++)n.push(a)})}handleFunctionBlockMethodReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s;o&&(s=Cn(o,s,r),n&&n.push(s))})}handleDataTypeMatch(e,r,n,i){if(!i)return;r=this.normalizeTypeAlias(r);let o=[];if(Wa(e)){let s=e.arrElements;for(let a=0;a<s.length;a++){let l=s[a];o=co(l.constant),e=this.handleDataTypeMatchHint(o,r,i,n,e)}}else o=co(e),e=this.handleDataTypeMatchHint(o,r,i,n,e);return e}handleDataTypeMatchHint(e,r,n,i,o){if(r=this.normalizeTypeAlias(r),e.length===1){if(r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()){let s=ns(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=Zy(o.toString(),l);Dn(n)?u!==""&&i("error",u,{node:n,property:"element"}):Cr(n)?u!==""&&i("error",u,{node:n,property:"variable"}):Sn(n)&&u!==""&&i("error",u,{node:n,property:"prior"})}a||s&&(Dn(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"element"}):Cr(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"variable"}):Sn(n)&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"prior"}))}}else{o=o;let[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&(Dn(n)?i(a,s,{node:n,property:"element"}):Cr(n)?i(a,s,{node:n,property:"variable"}):Sn(n)&&i(a,s,{node:n,property:"prior"}))}return o}handleSingleVariableExpression(e,r){if(e){let n=e,i=n.left,o=n.right;this.handleConditionExpression(i,o,r)}}handleConditionExpression(e,r,n){if(e&&r){let i=e.$type,o=r.$type;if(i==="Expression"){let s="",a="",u=e.prior,c=u==null?void 0:u.$type;if(Cr(u)){let d=u.variable.ref;rr(d)&&(a=d.variables,s=this.judgeRefNodeType(d,s))}else An(u)&&(s=this.validateEnumeratedValue(u,void 0,n));if(o==="Expression"){let d=r.prior;this.handlePrior(d,"","",s,n)}}}}handlePrior(e,r,n,i,o){if(Cr(e)){let a=e.variable.ref;if(rr(a)&&(r=a.variables,n=this.judgeRefNodeType(a,n)),i&&n){let[l,u]=this.getComparableTypes(n,i);u&&l&&u.toLowerCase()!==l.toLowerCase()&&(u.toLowerCase()==="string"&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}),ns(l,u)&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}))}}else if(An(e))n=this.validateEnumeratedValue(e,i,o);else if(ku(e)){let s=e,a=s.constant,l=[];if(Wa(a)){let u=a.arrElements;for(let c=0;c<u.length;c++){let f=u[c];l=co(f.constant),a=this.handleConditionExpressionHint(l,i,o,s)}}else l=co(a),a=this.handleConditionExpressionHint(l,i,o,s)}return{rightVariableName:r,rightExpectType:n}}handleConditionExpressionHint(e,r,n,i){r=this.normalizeTypeAlias(r);let o=i.constant;if(e.length===1)r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()&&ns(e[0],r)&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"constant"});else{o=o,!Rp(o.toString())&&!uo(o.toString())&&n("error",`${o}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"constant"});let[a,l]=this.convertValue(o,r);a!==""&&a!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(l,a,{node:i,property:"constant"})}return o}convertValue(e,r){let n=["","error"],i={BOOL:{min:0,max:1},SINT:{min:-128,max:127},BYTE:{min:0,max:255},INT:{min:-32768,max:32767},UINT:{min:0,max:65535},DINT:{min:-2147483648,max:2147483647},UDINT:{min:0,max:4294967295},LINT:{min:-Math.pow(2,63),max:Math.pow(2,63)-1},WORD:{min:0,max:65535},DWORD:{min:0,max:4294967295},LWORD:{min:0,max:Math.pow(2,64)-1}},o;if(r=this.normalizeTypeAlias(r),r===void 0)return["\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!","error"];if(r===""||yt(r))return n;if(r.toUpperCase()==="REAL"||r.toUpperCase()==="LREAL"){if(typeof e=="string"&&!t_(e)){let s=parseInt(e,10);o=Object.keys(i).find(a=>s>=i[a].min&&s<=i[a].max&&a!==r),n=o?[`\u5EFA\u8BAE\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"warning"]:["No suitable conversion type found","warning"]}return n}if(i[r]){let{min:s,max:a}=i[r];if(typeof e=="number"){if(!(e>=s&&e<=a)){o=Object.keys(i).find(u=>e>=i[u].min&&e<=i[u].max&&u!==r);let l=ns(o,r,e);o?l&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]):n=["No suitable conversion type found","error"]}return n}else if(uo(e))r&&(r.toLowerCase()!=="REAL"||r.toLowerCase()!=="LREAL")&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'LREAL'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]);else{let u=parseInt(e,10);n=this.convertValue(u,r)}}else if(typeof e=="number"){if(o=Object.keys(i).find(s=>e>=i[s].min&&e<=i[s].max&&s!==r),o){if(r){let s=ns(o,r,e);if(r.toUpperCase()==="STRING"){if((o==null?void 0:o.toLowerCase())!==r.toLowerCase())return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}else if(s)return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}}else n=["No suitable conversion type found","error"];return n}else if(typeof e=="string"){if(t_(e)){let a=uo(e)?parseFloat(e):parseInt(e,10);n=this.convertValue(a,r)}return n}return n}saveProgramVarInfo(e,r){e.forEach(n=>{let i=n.definition,o=n.items,s=n.modifiers,a="";s?a=i.concat(s):a=i,this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",o,r),o.forEach(l=>{this.validateDeclarationVar(l,r)})})}handleFunctionOrBlockInfo(e,r){e.forEach(n=>{let i=n.varLocals,o=n.varInputs,s=n.varOutputs,a=[],l=[],u=[];if(i.forEach(c=>{a.push(...c.items)}),o.forEach(c=>{l.push(...c.items)}),s.forEach(c=>{u.push(...c.items)}),this.handleEachVarTypeVariable(a,r),this.handleEachVarTypeVariable(l,r),this.handleEachVarTypeVariable(u,r),!vi(n)){if(Jn(n)){let c=n.variable_type,f=n.varInputs,d=[];f.forEach(R=>{d.push(R.items)}),this.handleFunctionReqparam(d,r);let m;m=Cn(c,m,r)}}})}handleDataTypeVarInfo(e,r,n,i,o){let s=e,a=i,l=n,u=r;s.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let m=d.typeName,R;m&&(m.$type==="Native_Type_Name"?R=Cn(m,R,o):m.$type==="Array_liters"&&(R=m.dataType))})}}),a.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let m=d.typeName,R;m&&(m.$type==="Native_Type_Name"?R=Cn(m,R,o):m.$type==="Array_liters"&&(R=m.dataType))})}}),l.forEach(c=>{let f=c.enum}),u.forEach(c=>{let f="";f=Cn(c.refName,f,o);let d=c.initialValue;if(d){let m=co(d);this.handleVarDeclHint(m,f,o,c,d)}})}handleEachVarTypeVariable(e,r){e&&this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",e,r),e==null||e.forEach(n=>{this.validateDeclarationVar(n,r);let i=n.typeName,o;i&&(i.$type==="Native_Type_Name"?o=Cn(i,o,r):i.$type==="Array_liters"&&(o=i.dataType))})}validateDeclarationVar(e,r){let n=e.typeName,i;if(n){if(n.$type==="Native_Type_Name")i=Cn(n,i,r);else if(n.$type==="Array_liters"){let a=n,l=a.dataType;i=Qn(l,i),a.arrayElemets.forEach(c=>{let f=c.left,d=c.right,m=parseInt(f,10),R=parseInt(d,10);m&&R&&m>R&&r("error","\u6570\u7EC4\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:e,property:"typeName"})})}}let o=e.initialValue,s=[];if(o){let a=o.constant;if(Wa(a)){let l=a.arrElements;for(let u=0;u<l.length;u++){let c=l[u];s=co(c.constant),this.handleVarDeclHint(s,i,r,e,c.constant)}}else s=co(o),this.handleVarDeclHint(s,i,r,e,o)}}handleVarDeclHint(e,r,n,i,o){if(typeof r=="string"&&(r=this.normalizeTypeAlias(r)),e.length===1){if(r!==void 0&&!yt(r)&&r&&e[0]&&r.toLowerCase()!==e[0].toLowerCase()){let s=ns(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=ku(o)?o.constant.toString():o.toString(),c=Zy(u,l);c!==""&&n("error",c,{node:i,property:"initialValue"})}a||s&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"initialValue"})}}else if(ku(o)){let s=o.constant;this.handleInnerVarDeclHint(s,r,n,i),!Rp(s)&&!uo(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:o,property:"constant"})}else{let s=o;this.handleInnerVarDeclHint(s,r,n,i),!Rp(s)&&!uo(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"initialValue"})}}handleInnerVarDeclHint(e,r,n,i){if(uo(e)){let[o,s]=this.convertValue(e,r);o!==""&&o!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(s,o,{node:i,property:"initialValue"})}else{let o=parseInt(e,10),[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(a,s,{node:i,property:"initialValue"})}}checkTimeType(e){let r=["TIME","DATE","DATE_AND_TIME","TIME_OF_DAY"],n=e.toUpperCase();return r.includes(n)?[!0,n]:[!1,"unmatched time type"]}checkIfWhitespace(e,r){if(e){let n=Nr.getDocument(e).parseResult.value.$cstNode.fullText,i=St.findNodeForKeyword(e.$cstNode,"THEN");if(i){let o=i.offset;n.charAt(o-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"ifCondition",index:0})}}}checkWhitespace(e,r){if(e){let n=Nr.getDocument(e).parseResult.value.$cstNode.fullText,i=St.findNodesForKeyword(e.$cstNode,"THEN");for(let o=0;o<i.length;o++){if(o===0)continue;let a=i[o].offset;n.charAt(a-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"elsifConditions",index:o-1})}}}};var Wp=class extends Jo{constructor(e){super(e)}serialize(e,r){return super.serialize(e,r)}deserialize(e,r={}){let i=JSON.parse(e),o=Ri(i);return nb(o)}};var i_=class extends Qo{register(e){super.register(e)}getServices(e){return super.getServices(e)}},Nde=Symbol("StatemachineSharedServices"),FG={ServiceRegistry:()=>new i_,logger:{ClientLogger:t=>new kp(t)}},Ode=Symbol("StatemachineServices");function UG(t){return{shared:()=>t.shared,parser:{},validation:{StValidator:()=>new Bp},lsp:{Formatter:()=>new $p,CompletionProvider:e=>new Ip(e),SignatureHelp:()=>new bp,DocumentHighlightProvider:e=>new Sp(e)},references:{ScopeProvider:e=>new Up(e),ScopeComputation:e=>new wp(e),Linker:e=>new Pp(e),References:e=>new Ap(e)},serializer:{JsonSerializer:e=>new Wp(e)}}}function hb(t){let e=es(oC(t),ob,FG),r=es(iC({shared:e}),sb,UG({shared:e}));return e.ServiceRegistry.register(r),mb(r),{shared:e,st:r}}var BG=(0,qa.createConnection)(new qa.IPCMessageReader(process),new qa.IPCMessageWriter(process)),{shared:wu,st:vp}=hb({connection:BG,...aC});tC(wu);0&&(module.exports={shared,st});
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
