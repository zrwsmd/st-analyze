"use strict";var ZC=Object.create;var Wa=Object.defineProperty;var eb=Object.getOwnPropertyDescriptor;var tb=Object.getOwnPropertyNames;var rb=Object.getPrototypeOf,nb=Object.prototype.hasOwnProperty;var ib=(t,e,r)=>e in t?Wa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var X=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ni=(t,e)=>{for(var r in e)Wa(t,r,{get:e[r],enumerable:!0})},ku=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of tb(e))!nb.call(t,i)&&i!==r&&Wa(t,i,{get:()=>e[i],enumerable:!(n=eb(e,i))||n.enumerable});return t},De=(t,e,r)=>(ku(t,e,"default"),r&&ku(r,e,"default")),Kt=(t,e,r)=>(r=t!=null?ZC(rb(t)):{},ku(e||!t||!t.__esModule?Wa(r,"default",{value:t,enumerable:!0}):r,t)),ob=t=>ku(Wa({},"__esModule",{value:!0}),t);var Oi=(t,e,r)=>(ib(t,typeof e!="symbol"?e+"":e,r),r);var Lu=X(Bt=>{"use strict";Object.defineProperty(Bt,"__esModule",{value:!0});Bt.thenable=Bt.typedArray=Bt.stringArray=Bt.array=Bt.func=Bt.error=Bt.number=Bt.string=Bt.boolean=void 0;function sb(t){return t===!0||t===!1}Bt.boolean=sb;function e_(t){return typeof t=="string"||t instanceof String}Bt.string=e_;function ab(t){return typeof t=="number"||t instanceof Number}Bt.number=ab;function lb(t){return t instanceof Error}Bt.error=lb;function t_(t){return typeof t=="function"}Bt.func=t_;function r_(t){return Array.isArray(t)}Bt.array=r_;function ub(t){return r_(t)&&t.every(e=>e_(e))}Bt.stringArray=ub;function cb(t,e){return Array.isArray(t)&&t.every(e)}Bt.typedArray=cb;function fb(t){return t&&t_(t.then)}Bt.thenable=fb});var ss=X(cr=>{"use strict";Object.defineProperty(cr,"__esModule",{value:!0});cr.stringArray=cr.array=cr.func=cr.error=cr.number=cr.string=cr.boolean=void 0;function db(t){return t===!0||t===!1}cr.boolean=db;function n_(t){return typeof t=="string"||t instanceof String}cr.string=n_;function pb(t){return typeof t=="number"||t instanceof Number}cr.number=pb;function mb(t){return t instanceof Error}cr.error=mb;function hb(t){return typeof t=="function"}cr.func=hb;function i_(t){return Array.isArray(t)}cr.array=i_;function gb(t){return i_(t)&&t.every(e=>n_(e))}cr.stringArray=gb});var nm=X(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.Message=se.NotificationType9=se.NotificationType8=se.NotificationType7=se.NotificationType6=se.NotificationType5=se.NotificationType4=se.NotificationType3=se.NotificationType2=se.NotificationType1=se.NotificationType0=se.NotificationType=se.RequestType9=se.RequestType8=se.RequestType7=se.RequestType6=se.RequestType5=se.RequestType4=se.RequestType3=se.RequestType2=se.RequestType1=se.RequestType=se.RequestType0=se.AbstractMessageSignature=se.ParameterStructures=se.ResponseError=se.ErrorCodes=void 0;var lo=ss(),Lp;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Lp||(se.ErrorCodes=Lp={}));var wp=class t extends Error{constructor(e,r,n){super(r),this.code=lo.number(e)?e:Lp.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};se.ResponseError=wp;var Dr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};se.ParameterStructures=Dr;Dr.auto=new Dr("auto");Dr.byPosition=new Dr("byPosition");Dr.byName=new Dr("byName");var rt=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Dr.auto}};se.AbstractMessageSignature=rt;var $p=class extends rt{constructor(e){super(e,0)}};se.RequestType0=$p;var Pp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType=Pp;var Mp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType1=Mp;var Fp=class extends rt{constructor(e){super(e,2)}};se.RequestType2=Fp;var Up=class extends rt{constructor(e){super(e,3)}};se.RequestType3=Up;var Bp=class extends rt{constructor(e){super(e,4)}};se.RequestType4=Bp;var Wp=class extends rt{constructor(e){super(e,5)}};se.RequestType5=Wp;var Gp=class extends rt{constructor(e){super(e,6)}};se.RequestType6=Gp;var Vp=class extends rt{constructor(e){super(e,7)}};se.RequestType7=Vp;var jp=class extends rt{constructor(e){super(e,8)}};se.RequestType8=jp;var qp=class extends rt{constructor(e){super(e,9)}};se.RequestType9=qp;var Hp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType=Hp;var Kp=class extends rt{constructor(e){super(e,0)}};se.NotificationType0=Kp;var zp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType1=zp;var Yp=class extends rt{constructor(e){super(e,2)}};se.NotificationType2=Yp;var Xp=class extends rt{constructor(e){super(e,3)}};se.NotificationType3=Xp;var Jp=class extends rt{constructor(e){super(e,4)}};se.NotificationType4=Jp;var Qp=class extends rt{constructor(e){super(e,5)}};se.NotificationType5=Qp;var Zp=class extends rt{constructor(e){super(e,6)}};se.NotificationType6=Zp;var em=class extends rt{constructor(e){super(e,7)}};se.NotificationType7=em;var tm=class extends rt{constructor(e){super(e,8)}};se.NotificationType8=tm;var rm=class extends rt{constructor(e){super(e,9)}};se.NotificationType9=rm;var o_;(function(t){function e(i){let o=i;return o&&lo.string(o.method)&&(lo.string(o.id)||lo.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&lo.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(lo.string(o.id)||lo.number(o.id)||o.id===null)}t.isResponse=n})(o_||(se.Message=o_={}))});var om=X(Ii=>{"use strict";var s_;Object.defineProperty(Ii,"__esModule",{value:!0});Ii.LRUCache=Ii.LinkedMap=Ii.Touch=void 0;var fr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(fr||(Ii.Touch=fr={}));var wu=class{constructor(){this[s_]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,r=fr.None){let n=this._map.get(e);if(n)return r!==fr.None&&this.touch(n,r),n.value}set(e,r,n=fr.None){let i=this._map.get(e);if(i)i.value=r,n!==fr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case fr.None:this.addItemLast(i);break;case fr.First:this.addItemFirst(i);break;case fr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(s_=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==fr.First&&r!==fr.Last)){if(r===fr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===fr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Ii.LinkedMap=wu;var im=class extends wu{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=fr.AsNew){return super.get(e,r)}peek(e){return super.get(e,fr.None)}set(e,r){return super.set(e,r,fr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Ii.LRUCache=im});var l_=X($u=>{"use strict";Object.defineProperty($u,"__esModule",{value:!0});$u.Disposable=void 0;var a_;(function(t){function e(r){return{dispose:r}}t.create=e})(a_||($u.Disposable=a_={}))});var Ei=X(lm=>{"use strict";Object.defineProperty(lm,"__esModule",{value:!0});var sm;function am(){if(sm===void 0)throw new Error("No runtime abstraction layer installed");return sm}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");sm=r}t.install=e})(am||(am={}));lm.default=am});var ls=X(as=>{"use strict";Object.defineProperty(as,"__esModule",{value:!0});as.Emitter=as.Event=void 0;var Tb=Ei(),u_;(function(t){let e={dispose(){}};t.None=function(){return e}})(u_||(as.Event=u_={}));var um=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,Tb.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Pu=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new um),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};as.Emitter=Pu;Pu._noop=function(){}});var Uu=X(us=>{"use strict";Object.defineProperty(us,"__esModule",{value:!0});us.CancellationTokenSource=us.CancellationToken=void 0;var yb=Ei(),_b=ss(),cm=ls(),Mu;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:cm.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:cm.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||_b.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Mu||(us.CancellationToken=Mu={}));var vb=Object.freeze(function(t,e){let r=(0,yb.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Fu=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?vb:(this._emitter||(this._emitter=new cm.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},fm=class{get token(){return this._token||(this._token=new Fu),this._token}cancel(){this._token?this._token.cancel():this._token=Mu.Cancelled}dispose(){this._token?this._token instanceof Fu&&this._token.dispose():this._token=Mu.None}};us.CancellationTokenSource=fm});var c_=X(cs=>{"use strict";Object.defineProperty(cs,"__esModule",{value:!0});cs.SharedArrayReceiverStrategy=cs.SharedArraySenderStrategy=void 0;var Rb=Uu(),Ga;(function(t){t.Continue=0,t.Cancelled=1})(Ga||(Ga={}));var dm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=Ga.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,Ga.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};cs.SharedArraySenderStrategy=dm;var pm=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ga.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},mm=class{constructor(e){this.token=new pm(e)}cancel(){}dispose(){}},hm=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new Rb.CancellationTokenSource:new mm(r)}};cs.SharedArrayReceiverStrategy=hm});var Tm=X(Bu=>{"use strict";Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Semaphore=void 0;var xb=Ei(),gm=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,xb.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Bu.Semaphore=gm});var d_=X(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.ReadableStreamMessageReader=Si.AbstractMessageReader=Si.MessageReader=void 0;var _m=Ei(),fs=ss(),ym=ls(),Nb=Tm(),f_;(function(t){function e(r){let n=r;return n&&fs.func(n.listen)&&fs.func(n.dispose)&&fs.func(n.onError)&&fs.func(n.onClose)&&fs.func(n.onPartialMessage)}t.is=e})(f_||(Si.MessageReader=f_={}));var Wu=class{constructor(){this.errorEmitter=new ym.Emitter,this.closeEmitter=new ym.Emitter,this.partialMessageEmitter=new ym.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${fs.string(e.message)?e.message:"unknown"}`)}};Si.AbstractMessageReader=Wu;var vm;(function(t){function e(r){var u;let n,i,o,s=new Map,a,l=new Map;if(r===void 0||typeof r=="string")n=r!=null?r:"utf-8";else{if(n=(u=r.charset)!=null?u:"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,s.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)s.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,l.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)l.set(c.name,c)}return a===void 0&&(a=(0,_m.default)().applicationJson.decoder,l.set(a.name,a)),{charset:n,contentDecoder:o,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:l}}t.fromOptions=e})(vm||(vm={}));var Rm=class extends Wu{constructor(e,r){super(),this.readable=e,this.options=vm.fromOptions(r),this.buffer=(0,_m.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new Nb.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,_m.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Si.ReadableStreamMessageReader=Rm});var T_=X(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.WriteableStreamMessageWriter=Ai.AbstractMessageWriter=Ai.MessageWriter=void 0;var p_=Ei(),Va=ss(),Ob=Tm(),m_=ls(),Ib="Content-Length: ",h_=`\r
`,g_;(function(t){function e(r){let n=r;return n&&Va.func(n.dispose)&&Va.func(n.onClose)&&Va.func(n.onError)&&Va.func(n.write)}t.is=e})(g_||(Ai.MessageWriter=g_={}));var Gu=class{constructor(){this.errorEmitter=new m_.Emitter,this.closeEmitter=new m_.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${Va.string(e.message)?e.message:"unknown"}`)}};Ai.AbstractMessageWriter=Gu;var xm;(function(t){function e(r){var n,i;return r===void 0||typeof r=="string"?{charset:r!=null?r:"utf-8",contentTypeEncoder:(0,p_.default)().applicationJson.encoder}:{charset:(n=r.charset)!=null?n:"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:(i=r.contentTypeEncoder)!=null?i:(0,p_.default)().applicationJson.encoder}}t.fromOptions=e})(xm||(xm={}));var Nm=class extends Gu{constructor(e,r){super(),this.writable=e,this.options=xm.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Ob.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(Ib,n.byteLength.toString(),h_),i.push(h_),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};Ai.WriteableStreamMessageWriter=Nm});var y_=X(Vu=>{"use strict";Object.defineProperty(Vu,"__esModule",{value:!0});Vu.AbstractMessageBuffer=void 0;var Eb=13,Sb=10,Ab=`\r
`,Om=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let u=this._chunks[n];for(i=0;i<u.length;){switch(u[i]){case Eb:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case Sb:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=u.byteLength,n++}if(r!==4)return;let s=this._read(o+i),a=new Map,l=this.toString(s,"ascii").split(Ab);if(l.length<2)return a;for(let u=0;u<l.length-2;u++){let c=l[u],f=c.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let d=c.substr(0,f),h=c.substr(f+1).trim();a.set(e?d.toLowerCase():d,h)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],s=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let s=o.slice(0,e);r.set(s,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Vu.AbstractMessageBuffer=Om});var N_=X(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.createMessageConnection=ge.ConnectionOptions=ge.MessageStrategy=ge.CancellationStrategy=ge.CancellationSenderStrategy=ge.CancellationReceiverStrategy=ge.RequestCancellationReceiverStrategy=ge.IdCancellationReceiverStrategy=ge.ConnectionStrategy=ge.ConnectionError=ge.ConnectionErrors=ge.LogTraceNotification=ge.SetTraceNotification=ge.TraceFormat=ge.TraceValues=ge.Trace=ge.NullLogger=ge.ProgressType=ge.ProgressToken=void 0;var __=Ei(),ht=ss(),fe=nm(),v_=om(),ja=ls(),Im=Uu(),Ka;(function(t){t.type=new fe.NotificationType("$/cancelRequest")})(Ka||(Ka={}));var Em;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Em||(ge.ProgressToken=Em={}));var qa;(function(t){t.type=new fe.NotificationType("$/progress")})(qa||(qa={}));var Sm=class{constructor(){}};ge.ProgressType=Sm;var Am;(function(t){function e(r){return ht.func(r)}t.is=e})(Am||(Am={}));ge.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Pe;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Pe||(ge.Trace=Pe={}));var R_;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(R_||(ge.TraceValues=R_={}));(function(t){function e(n){if(!ht.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Pe||(ge.Trace=Pe={}));var Yr;(function(t){t.Text="text",t.JSON="json"})(Yr||(ge.TraceFormat=Yr={}));(function(t){function e(r){return ht.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Yr||(ge.TraceFormat=Yr={}));var Dm;(function(t){t.type=new fe.NotificationType("$/setTrace")})(Dm||(ge.SetTraceNotification=Dm={}));var ju;(function(t){t.type=new fe.NotificationType("$/logTrace")})(ju||(ge.LogTraceNotification=ju={}));var Ha;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(Ha||(ge.ConnectionErrors=Ha={}));var ds=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ge.ConnectionError=ds;var Cm;(function(t){function e(r){let n=r;return n&&ht.func(n.cancelUndispatched)}t.is=e})(Cm||(ge.ConnectionStrategy=Cm={}));var qu;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&ht.func(n.createCancellationTokenSource)&&(n.dispose===void 0||ht.func(n.dispose))}t.is=e})(qu||(ge.IdCancellationReceiverStrategy=qu={}));var bm;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&ht.func(n.createCancellationTokenSource)&&(n.dispose===void 0||ht.func(n.dispose))}t.is=e})(bm||(ge.RequestCancellationReceiverStrategy=bm={}));var Hu;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Im.CancellationTokenSource}});function e(r){return qu.is(r)||bm.is(r)}t.is=e})(Hu||(ge.CancellationReceiverStrategy=Hu={}));var Ku;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(Ka.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&ht.func(n.sendCancellation)&&ht.func(n.cleanup)}t.is=e})(Ku||(ge.CancellationSenderStrategy=Ku={}));var zu;(function(t){t.Message=Object.freeze({receiver:Hu.Message,sender:Ku.Message});function e(r){let n=r;return n&&Hu.is(n.receiver)&&Ku.is(n.sender)}t.is=e})(zu||(ge.CancellationStrategy=zu={}));var Yu;(function(t){function e(r){let n=r;return n&&ht.func(n.handleMessage)}t.is=e})(Yu||(ge.MessageStrategy=Yu={}));var x_;(function(t){function e(r){let n=r;return n&&(zu.is(n.cancellationStrategy)||Cm.is(n.connectionStrategy)||Yu.is(n.messageStrategy))}t.is=e})(x_||(ge.ConnectionOptions=x_={}));var gn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(gn||(gn={}));function Db(t,e,r,n){let i=r!==void 0?r:ge.NullLogger,o=0,s=0,a=0,l="2.0",u,c=new Map,f,d=new Map,h=new Map,_,x=new v_.LinkedMap,E=new Map,I=new Set,y=new Map,T=Pe.Off,k=Yr.Text,B,Q=gn.New,ae=new ja.Emitter,le=new ja.Emitter,Ce=new ja.Emitter,$e=new ja.Emitter,W=new ja.Emitter,L=n&&n.cancellationStrategy?n.cancellationStrategy:zu.Message;function j(R){if(R===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+R.toString()}function H(R){return R===null?"res-unknown-"+(++a).toString():"res-"+R.toString()}function Te(){return"not-"+(++s).toString()}function ue(R,b){fe.Message.isRequest(b)?R.set(j(b.id),b):fe.Message.isResponse(b)?R.set(H(b.id),b):R.set(Te(),b)}function V(R){}function F(){return Q===gn.Listening}function ve(){return Q===gn.Closed}function Re(){return Q===gn.Disposed}function Ae(){(Q===gn.New||Q===gn.Listening)&&(Q=gn.Closed,le.fire(void 0))}function rr(R){ae.fire([R,void 0,void 0])}function Ri(R){ae.fire(R)}t.onClose(Ae),t.onError(rr),e.onClose(Ae),e.onError(Ri);function Ve(){_||x.size===0||(_=(0,__.default)().timer.setImmediate(()=>{_=void 0,Xn()}))}function qt(R){fe.Message.isRequest(R)?Ht(R):fe.Message.isNotification(R)?kt(R):fe.Message.isResponse(R)?bt(R):pt(R)}function Xn(){if(x.size===0)return;let R=x.shift();try{let b=n==null?void 0:n.messageStrategy;Yu.is(b)?b.handleMessage(R,qt):qt(R)}finally{Ve()}}let dt=R=>{try{if(fe.Message.isNotification(R)&&R.method===Ka.type.method){let b=R.params.id,P=j(b),M=x.get(P);if(fe.Message.isRequest(M)){let re=n==null?void 0:n.connectionStrategy,xe=re&&re.cancelUndispatched?re.cancelUndispatched(M,V):void 0;if(xe&&(xe.error!==void 0||xe.result!==void 0)){x.delete(P),y.delete(b),xe.id=M.id,Kr(xe,R.method,Date.now()),e.write(xe).catch(()=>i.error("Sending response for canceled message failed."));return}}let ne=y.get(b);if(ne!==void 0){ne.cancel(),xi(R);return}else I.add(b)}ue(x,R)}finally{Ve()}};function Ht(R){var Lt;if(Re())return;function b(be,ot,Ue){let st={jsonrpc:l,id:R.id};be instanceof fe.ResponseError?st.error=be.toJson():st.result=be===void 0?null:be,Kr(st,ot,Ue),e.write(st).catch(()=>i.error("Sending response failed."))}function P(be,ot,Ue){let st={jsonrpc:l,id:R.id,error:be.toJson()};Kr(st,ot,Ue),e.write(st).catch(()=>i.error("Sending response failed."))}function M(be,ot,Ue){be===void 0&&(be=null);let st={jsonrpc:l,id:R.id,result:be};Kr(st,ot,Ue),e.write(st).catch(()=>i.error("Sending response failed."))}Jn(R);let ne=c.get(R.method),re,xe;ne&&(re=ne.type,xe=ne.handler);let je=Date.now();if(xe||u){let be=(Lt=R.id)!=null?Lt:String(Date.now()),ot=qu.is(L.receiver)?L.receiver.createCancellationTokenSource(be):L.receiver.createCancellationTokenSource(R);R.id!==null&&I.has(R.id)&&ot.cancel(),R.id!==null&&y.set(be,ot);try{let Ue;if(xe)if(R.params===void 0){if(re!==void 0&&re.numberOfParams!==0){P(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${R.method} defines ${re.numberOfParams} params but received none.`),R.method,je);return}Ue=xe(ot.token)}else if(Array.isArray(R.params)){if(re!==void 0&&re.parameterStructures===fe.ParameterStructures.byName){P(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by name but received parameters by position`),R.method,je);return}Ue=xe(...R.params,ot.token)}else{if(re!==void 0&&re.parameterStructures===fe.ParameterStructures.byPosition){P(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by position but received parameters by name`),R.method,je);return}Ue=xe(R.params,ot.token)}else u&&(Ue=u(R.method,R.params,ot.token));let st=Ue;Ue?st.then?st.then(wt=>{y.delete(be),b(wt,R.method,je)},wt=>{y.delete(be),wt instanceof fe.ResponseError?P(wt,R.method,je):wt&&ht.string(wt.message)?P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${wt.message}`),R.method,je):P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,je)}):(y.delete(be),b(Ue,R.method,je)):(y.delete(be),M(Ue,R.method,je))}catch(Ue){y.delete(be),Ue instanceof fe.ResponseError?b(Ue,R.method,je):Ue&&ht.string(Ue.message)?P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${Ue.message}`),R.method,je):P(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,je)}}else P(new fe.ResponseError(fe.ErrorCodes.MethodNotFound,`Unhandled method ${R.method}`),R.method,je)}function bt(R){if(!Re())if(R.id===null)R.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(R.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let b=R.id,P=E.get(b);if(rs(R,P),P!==void 0){E.delete(b);try{if(R.error){let M=R.error;P.reject(new fe.ResponseError(M.code,M.message,M.data))}else if(R.result!==void 0)P.resolve(R.result);else throw new Error("Should never happen.")}catch(M){M.message?i.error(`Response handler '${P.method}' failed with message: ${M.message}`):i.error(`Response handler '${P.method}' failed unexpectedly.`)}}}}function kt(R){if(Re())return;let b,P;if(R.method===Ka.type.method){let M=R.params.id;I.delete(M),xi(R);return}else{let M=d.get(R.method);M&&(P=M.handler,b=M.type)}if(P||f)try{if(xi(R),P)if(R.params===void 0)b!==void 0&&b.numberOfParams!==0&&b.parameterStructures!==fe.ParameterStructures.byName&&i.error(`Notification ${R.method} defines ${b.numberOfParams} params but received none.`),P();else if(Array.isArray(R.params)){let M=R.params;R.method===qa.type.method&&M.length===2&&Em.is(M[0])?P({token:M[0],value:M[1]}):(b!==void 0&&(b.parameterStructures===fe.ParameterStructures.byName&&i.error(`Notification ${R.method} defines parameters by name but received parameters by position`),b.numberOfParams!==R.params.length&&i.error(`Notification ${R.method} defines ${b.numberOfParams} params but received ${M.length} arguments`)),P(...M))}else b!==void 0&&b.parameterStructures===fe.ParameterStructures.byPosition&&i.error(`Notification ${R.method} defines parameters by position but received parameters by name`),P(R.params);else f&&f(R.method,R.params)}catch(M){M.message?i.error(`Notification handler '${R.method}' failed with message: ${M.message}`):i.error(`Notification handler '${R.method}' failed unexpectedly.`)}else Ce.fire(R)}function pt(R){if(!R){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(R,null,4)}`);let b=R;if(ht.string(b.id)||ht.number(b.id)){let P=b.id,M=E.get(P);M&&M.reject(new Error("The received response has neither a result nor an error property."))}}function mt(R){if(R!=null)switch(T){case Pe.Verbose:return JSON.stringify(R,null,4);case Pe.Compact:return JSON.stringify(R);default:return}}function ur(R){if(!(T===Pe.Off||!B))if(k===Yr.Text){let b;(T===Pe.Verbose||T===Pe.Compact)&&R.params&&(b=`Params: ${mt(R.params)}

`),B.log(`Sending request '${R.method} - (${R.id})'.`,b)}else zr("send-request",R)}function _r(R){if(!(T===Pe.Off||!B))if(k===Yr.Text){let b;(T===Pe.Verbose||T===Pe.Compact)&&(R.params?b=`Params: ${mt(R.params)}

`:b=`No parameters provided.

`),B.log(`Sending notification '${R.method}'.`,b)}else zr("send-notification",R)}function Kr(R,b,P){if(!(T===Pe.Off||!B))if(k===Yr.Text){let M;(T===Pe.Verbose||T===Pe.Compact)&&(R.error&&R.error.data?M=`Error data: ${mt(R.error.data)}

`:R.result?M=`Result: ${mt(R.result)}

`:R.error===void 0&&(M=`No result returned.

`)),B.log(`Sending response '${b} - (${R.id})'. Processing request took ${Date.now()-P}ms`,M)}else zr("send-response",R)}function Jn(R){if(!(T===Pe.Off||!B))if(k===Yr.Text){let b;(T===Pe.Verbose||T===Pe.Compact)&&R.params&&(b=`Params: ${mt(R.params)}

`),B.log(`Received request '${R.method} - (${R.id})'.`,b)}else zr("receive-request",R)}function xi(R){if(!(T===Pe.Off||!B||R.method===ju.type.method))if(k===Yr.Text){let b;(T===Pe.Verbose||T===Pe.Compact)&&(R.params?b=`Params: ${mt(R.params)}

`:b=`No parameters provided.

`),B.log(`Received notification '${R.method}'.`,b)}else zr("receive-notification",R)}function rs(R,b){if(!(T===Pe.Off||!B))if(k===Yr.Text){let P;if((T===Pe.Verbose||T===Pe.Compact)&&(R.error&&R.error.data?P=`Error data: ${mt(R.error.data)}

`:R.result?P=`Result: ${mt(R.result)}

`:R.error===void 0&&(P=`No result returned.

`)),b){let M=R.error?` Request failed: ${R.error.message} (${R.error.code}).`:"";B.log(`Received response '${b.method} - (${R.id})' in ${Date.now()-b.timerStart}ms.${M}`,P)}else B.log(`Received response ${R.id} without active response promise.`,P)}else zr("receive-response",R)}function zr(R,b){if(!B||T===Pe.Off)return;let P={isLSPMessage:!0,type:R,message:b,timestamp:Date.now()};B.log(P)}function Dn(){if(ve())throw new ds(Ha.Closed,"Connection is closed.");if(Re())throw new ds(Ha.Disposed,"Connection is disposed.")}function ns(){if(F())throw new ds(Ha.AlreadyListening,"Connection is already listening")}function is(){if(!F())throw new Error("Call listen() first.")}function Ar(R){return R===void 0?null:R}function A(R){if(R!==null)return R}function $(R){return R!=null&&!Array.isArray(R)&&typeof R=="object"}function G(R,b){switch(R){case fe.ParameterStructures.auto:return $(b)?A(b):[Ar(b)];case fe.ParameterStructures.byName:if(!$(b))throw new Error("Received parameters by name but param is not an object literal.");return A(b);case fe.ParameterStructures.byPosition:return[Ar(b)];default:throw new Error(`Unknown parameter structure ${R.toString()}`)}}function z(R,b){let P,M=R.numberOfParams;switch(M){case 0:P=void 0;break;case 1:P=G(R.parameterStructures,b[0]);break;default:P=[];for(let ne=0;ne<b.length&&ne<M;ne++)P.push(Ar(b[ne]));if(b.length<M)for(let ne=b.length;ne<M;ne++)P.push(null);break}return P}let Z={sendNotification:(R,...b)=>{Dn();let P,M;if(ht.string(R)){P=R;let re=b[0],xe=0,je=fe.ParameterStructures.auto;fe.ParameterStructures.is(re)&&(xe=1,je=re);let Lt=b.length,be=Lt-xe;switch(be){case 0:M=void 0;break;case 1:M=G(je,b[xe]);break;default:if(je===fe.ParameterStructures.byName)throw new Error(`Received ${be} parameters for 'by Name' notification parameter structure.`);M=b.slice(xe,Lt).map(ot=>Ar(ot));break}}else{let re=b;P=R.method,M=z(R,re)}let ne={jsonrpc:l,method:P,params:M};return _r(ne),e.write(ne).catch(re=>{throw i.error("Sending notification failed."),re})},onNotification:(R,b)=>{Dn();let P;return ht.func(R)?f=R:b&&(ht.string(R)?(P=R,d.set(R,{type:void 0,handler:b})):(P=R.method,d.set(R.method,{type:R,handler:b}))),{dispose:()=>{P!==void 0?d.delete(P):f=void 0}}},onProgress:(R,b,P)=>{if(h.has(b))throw new Error(`Progress handler for token ${b} already registered`);return h.set(b,P),{dispose:()=>{h.delete(b)}}},sendProgress:(R,b,P)=>Z.sendNotification(qa.type,{token:b,value:P}),onUnhandledProgress:$e.event,sendRequest:(R,...b)=>{Dn(),is();let P,M,ne;if(ht.string(R)){P=R;let Lt=b[0],be=b[b.length-1],ot=0,Ue=fe.ParameterStructures.auto;fe.ParameterStructures.is(Lt)&&(ot=1,Ue=Lt);let st=b.length;Im.CancellationToken.is(be)&&(st=st-1,ne=be);let wt=st-ot;switch(wt){case 0:M=void 0;break;case 1:M=G(Ue,b[ot]);break;default:if(Ue===fe.ParameterStructures.byName)throw new Error(`Received ${wt} parameters for 'by Name' request parameter structure.`);M=b.slice(ot,st).map(Cu=>Ar(Cu));break}}else{let Lt=b;P=R.method,M=z(R,Lt);let be=R.numberOfParams;ne=Im.CancellationToken.is(Lt[be])?Lt[be]:void 0}let re=o++,xe;ne&&(xe=ne.onCancellationRequested(()=>{let Lt=L.sender.sendCancellation(Z,re);return Lt===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${re}`),Promise.resolve()):Lt.catch(()=>{i.log(`Sending cancellation messages for id ${re} failed`)})}));let je={jsonrpc:l,id:re,method:P,params:M};return ur(je),typeof L.sender.enableCancellation=="function"&&L.sender.enableCancellation(je),new Promise(async(Lt,be)=>{let ot=wt=>{Lt(wt),L.sender.cleanup(re),xe==null||xe.dispose()},Ue=wt=>{be(wt),L.sender.cleanup(re),xe==null||xe.dispose()},st={method:P,timerStart:Date.now(),resolve:ot,reject:Ue};try{await e.write(je),E.set(re,st)}catch(wt){throw i.error("Sending request failed."),st.reject(new fe.ResponseError(fe.ErrorCodes.MessageWriteError,wt.message?wt.message:"Unknown reason")),wt}})},onRequest:(R,b)=>{Dn();let P=null;return Am.is(R)?(P=void 0,u=R):ht.string(R)?(P=null,b!==void 0&&(P=R,c.set(R,{handler:b,type:void 0}))):b!==void 0&&(P=R.method,c.set(R.method,{type:R,handler:b})),{dispose:()=>{P!==null&&(P!==void 0?c.delete(P):u=void 0)}}},hasPendingResponse:()=>E.size>0,trace:async(R,b,P)=>{let M=!1,ne=Yr.Text;P!==void 0&&(ht.boolean(P)?M=P:(M=P.sendNotification||!1,ne=P.traceFormat||Yr.Text)),T=R,k=ne,T===Pe.Off?B=void 0:B=b,M&&!ve()&&!Re()&&await Z.sendNotification(Dm.type,{value:Pe.toString(R)})},onError:ae.event,onClose:le.event,onUnhandledNotification:Ce.event,onDispose:W.event,end:()=>{e.end()},dispose:()=>{if(Re())return;Q=gn.Disposed,W.fire(void 0);let R=new fe.ResponseError(fe.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let b of E.values())b.reject(R);E=new Map,y=new Map,I=new Set,x=new v_.LinkedMap,ht.func(e.dispose)&&e.dispose(),ht.func(t.dispose)&&t.dispose()},listen:()=>{Dn(),ns(),Q=gn.Listening,t.listen(dt)},inspect:()=>{(0,__.default)().console.log("inspect")}};return Z.onNotification(ju.type,R=>{if(T===Pe.Off||!B)return;let b=T===Pe.Verbose||T===Pe.Compact;B.log(R.message,b?R.verbose:void 0)}),Z.onNotification(qa.type,R=>{let b=h.get(R.token);b?b(R.value):$e.fire(R)}),Z}ge.createMessageConnection=Db});var Xu=X(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.ProgressType=w.ProgressToken=w.createMessageConnection=w.NullLogger=w.ConnectionOptions=w.ConnectionStrategy=w.AbstractMessageBuffer=w.WriteableStreamMessageWriter=w.AbstractMessageWriter=w.MessageWriter=w.ReadableStreamMessageReader=w.AbstractMessageReader=w.MessageReader=w.SharedArrayReceiverStrategy=w.SharedArraySenderStrategy=w.CancellationToken=w.CancellationTokenSource=w.Emitter=w.Event=w.Disposable=w.LRUCache=w.Touch=w.LinkedMap=w.ParameterStructures=w.NotificationType9=w.NotificationType8=w.NotificationType7=w.NotificationType6=w.NotificationType5=w.NotificationType4=w.NotificationType3=w.NotificationType2=w.NotificationType1=w.NotificationType0=w.NotificationType=w.ErrorCodes=w.ResponseError=w.RequestType9=w.RequestType8=w.RequestType7=w.RequestType6=w.RequestType5=w.RequestType4=w.RequestType3=w.RequestType2=w.RequestType1=w.RequestType0=w.RequestType=w.Message=w.RAL=void 0;w.MessageStrategy=w.CancellationStrategy=w.CancellationSenderStrategy=w.CancellationReceiverStrategy=w.ConnectionError=w.ConnectionErrors=w.LogTraceNotification=w.SetTraceNotification=w.TraceFormat=w.TraceValues=w.Trace=void 0;var Ye=nm();Object.defineProperty(w,"Message",{enumerable:!0,get:function(){return Ye.Message}});Object.defineProperty(w,"RequestType",{enumerable:!0,get:function(){return Ye.RequestType}});Object.defineProperty(w,"RequestType0",{enumerable:!0,get:function(){return Ye.RequestType0}});Object.defineProperty(w,"RequestType1",{enumerable:!0,get:function(){return Ye.RequestType1}});Object.defineProperty(w,"RequestType2",{enumerable:!0,get:function(){return Ye.RequestType2}});Object.defineProperty(w,"RequestType3",{enumerable:!0,get:function(){return Ye.RequestType3}});Object.defineProperty(w,"RequestType4",{enumerable:!0,get:function(){return Ye.RequestType4}});Object.defineProperty(w,"RequestType5",{enumerable:!0,get:function(){return Ye.RequestType5}});Object.defineProperty(w,"RequestType6",{enumerable:!0,get:function(){return Ye.RequestType6}});Object.defineProperty(w,"RequestType7",{enumerable:!0,get:function(){return Ye.RequestType7}});Object.defineProperty(w,"RequestType8",{enumerable:!0,get:function(){return Ye.RequestType8}});Object.defineProperty(w,"RequestType9",{enumerable:!0,get:function(){return Ye.RequestType9}});Object.defineProperty(w,"ResponseError",{enumerable:!0,get:function(){return Ye.ResponseError}});Object.defineProperty(w,"ErrorCodes",{enumerable:!0,get:function(){return Ye.ErrorCodes}});Object.defineProperty(w,"NotificationType",{enumerable:!0,get:function(){return Ye.NotificationType}});Object.defineProperty(w,"NotificationType0",{enumerable:!0,get:function(){return Ye.NotificationType0}});Object.defineProperty(w,"NotificationType1",{enumerable:!0,get:function(){return Ye.NotificationType1}});Object.defineProperty(w,"NotificationType2",{enumerable:!0,get:function(){return Ye.NotificationType2}});Object.defineProperty(w,"NotificationType3",{enumerable:!0,get:function(){return Ye.NotificationType3}});Object.defineProperty(w,"NotificationType4",{enumerable:!0,get:function(){return Ye.NotificationType4}});Object.defineProperty(w,"NotificationType5",{enumerable:!0,get:function(){return Ye.NotificationType5}});Object.defineProperty(w,"NotificationType6",{enumerable:!0,get:function(){return Ye.NotificationType6}});Object.defineProperty(w,"NotificationType7",{enumerable:!0,get:function(){return Ye.NotificationType7}});Object.defineProperty(w,"NotificationType8",{enumerable:!0,get:function(){return Ye.NotificationType8}});Object.defineProperty(w,"NotificationType9",{enumerable:!0,get:function(){return Ye.NotificationType9}});Object.defineProperty(w,"ParameterStructures",{enumerable:!0,get:function(){return Ye.ParameterStructures}});var km=om();Object.defineProperty(w,"LinkedMap",{enumerable:!0,get:function(){return km.LinkedMap}});Object.defineProperty(w,"LRUCache",{enumerable:!0,get:function(){return km.LRUCache}});Object.defineProperty(w,"Touch",{enumerable:!0,get:function(){return km.Touch}});var Cb=l_();Object.defineProperty(w,"Disposable",{enumerable:!0,get:function(){return Cb.Disposable}});var O_=ls();Object.defineProperty(w,"Event",{enumerable:!0,get:function(){return O_.Event}});Object.defineProperty(w,"Emitter",{enumerable:!0,get:function(){return O_.Emitter}});var I_=Uu();Object.defineProperty(w,"CancellationTokenSource",{enumerable:!0,get:function(){return I_.CancellationTokenSource}});Object.defineProperty(w,"CancellationToken",{enumerable:!0,get:function(){return I_.CancellationToken}});var E_=c_();Object.defineProperty(w,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return E_.SharedArraySenderStrategy}});Object.defineProperty(w,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return E_.SharedArrayReceiverStrategy}});var Lm=d_();Object.defineProperty(w,"MessageReader",{enumerable:!0,get:function(){return Lm.MessageReader}});Object.defineProperty(w,"AbstractMessageReader",{enumerable:!0,get:function(){return Lm.AbstractMessageReader}});Object.defineProperty(w,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Lm.ReadableStreamMessageReader}});var wm=T_();Object.defineProperty(w,"MessageWriter",{enumerable:!0,get:function(){return wm.MessageWriter}});Object.defineProperty(w,"AbstractMessageWriter",{enumerable:!0,get:function(){return wm.AbstractMessageWriter}});Object.defineProperty(w,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return wm.WriteableStreamMessageWriter}});var bb=y_();Object.defineProperty(w,"AbstractMessageBuffer",{enumerable:!0,get:function(){return bb.AbstractMessageBuffer}});var nr=N_();Object.defineProperty(w,"ConnectionStrategy",{enumerable:!0,get:function(){return nr.ConnectionStrategy}});Object.defineProperty(w,"ConnectionOptions",{enumerable:!0,get:function(){return nr.ConnectionOptions}});Object.defineProperty(w,"NullLogger",{enumerable:!0,get:function(){return nr.NullLogger}});Object.defineProperty(w,"createMessageConnection",{enumerable:!0,get:function(){return nr.createMessageConnection}});Object.defineProperty(w,"ProgressToken",{enumerable:!0,get:function(){return nr.ProgressToken}});Object.defineProperty(w,"ProgressType",{enumerable:!0,get:function(){return nr.ProgressType}});Object.defineProperty(w,"Trace",{enumerable:!0,get:function(){return nr.Trace}});Object.defineProperty(w,"TraceValues",{enumerable:!0,get:function(){return nr.TraceValues}});Object.defineProperty(w,"TraceFormat",{enumerable:!0,get:function(){return nr.TraceFormat}});Object.defineProperty(w,"SetTraceNotification",{enumerable:!0,get:function(){return nr.SetTraceNotification}});Object.defineProperty(w,"LogTraceNotification",{enumerable:!0,get:function(){return nr.LogTraceNotification}});Object.defineProperty(w,"ConnectionErrors",{enumerable:!0,get:function(){return nr.ConnectionErrors}});Object.defineProperty(w,"ConnectionError",{enumerable:!0,get:function(){return nr.ConnectionError}});Object.defineProperty(w,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return nr.CancellationReceiverStrategy}});Object.defineProperty(w,"CancellationSenderStrategy",{enumerable:!0,get:function(){return nr.CancellationSenderStrategy}});Object.defineProperty(w,"CancellationStrategy",{enumerable:!0,get:function(){return nr.CancellationStrategy}});Object.defineProperty(w,"MessageStrategy",{enumerable:!0,get:function(){return nr.MessageStrategy}});var kb=Ei();w.RAL=kb.default});var D_=X(Fm=>{"use strict";Object.defineProperty(Fm,"__esModule",{value:!0});var S_=require("util"),Zn=Xu(),Ju=class t extends Zn.AbstractMessageBuffer{constructor(e="utf-8"){super(e)}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return Buffer.from(e,r)}toString(e,r){return e instanceof Buffer?e.toString(r):new S_.TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e instanceof Buffer?e:Buffer.from(e):e instanceof Buffer?e.slice(0,r):Buffer.from(e,0,r)}allocNative(e){return Buffer.allocUnsafe(e)}};Ju.emptyBuffer=Buffer.allocUnsafe(0);var $m=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),Zn.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),Zn.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),Zn.Disposable.create(()=>this.stream.off("end",e))}onData(e){return this.stream.on("data",e),Zn.Disposable.create(()=>this.stream.off("data",e))}},Pm=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),Zn.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),Zn.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),Zn.Disposable.create(()=>this.stream.off("end",e))}write(e,r){return new Promise((n,i)=>{let o=s=>{s==null?n():i(s)};typeof e=="string"?this.stream.write(e,r,o):this.stream.write(e,o)})}end(){this.stream.end()}},A_=Object.freeze({messageBuffer:Object.freeze({create:t=>new Ju(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{try{return Promise.resolve(Buffer.from(JSON.stringify(t,void 0,0),e.charset))}catch(r){return Promise.reject(r)}}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{try{return t instanceof Buffer?Promise.resolve(JSON.parse(t.toString(e.charset))):Promise.resolve(JSON.parse(new S_.TextDecoder(e.charset).decode(t)))}catch(r){return Promise.reject(r)}}})}),stream:Object.freeze({asReadableStream:t=>new $m(t),asWritableStream:t=>new Pm(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setImmediate(t,...e);return{dispose:()=>clearImmediate(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Mm(){return A_}(function(t){function e(){Zn.RAL.install(A_)}t.install=e})(Mm||(Mm={}));Fm.default=Mm});var fo=X(Ie=>{"use strict";var Lb=Ie&&Ie.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),wb=Ie&&Ie.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Lb(e,t,r)};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.createMessageConnection=Ie.createServerSocketTransport=Ie.createClientSocketTransport=Ie.createServerPipeTransport=Ie.createClientPipeTransport=Ie.generateRandomPipeName=Ie.StreamMessageWriter=Ie.StreamMessageReader=Ie.SocketMessageWriter=Ie.SocketMessageReader=Ie.PortMessageWriter=Ie.PortMessageReader=Ie.IPCMessageWriter=Ie.IPCMessageReader=void 0;var ps=D_();ps.default.install();var C_=require("path"),$b=require("os"),Pb=require("crypto"),ec=require("net"),Xr=Xu();wb(Xu(),Ie);var Um=class extends Xr.AbstractMessageReader{constructor(e){super(),this.process=e;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose())}listen(e){return this.process.on("message",e),Xr.Disposable.create(()=>this.process.off("message",e))}};Ie.IPCMessageReader=Um;var Bm=class extends Xr.AbstractMessageWriter{constructor(e){super(),this.process=e,this.errorCount=0;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose)}write(e){try{return typeof this.process.send=="function"&&this.process.send(e,void 0,void 0,r=>{r?(this.errorCount++,this.handleError(r,e)):this.errorCount=0}),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Ie.IPCMessageWriter=Bm;var Wm=class extends Xr.AbstractMessageReader{constructor(e){super(),this.onData=new Xr.Emitter,e.on("close",()=>this.fireClose),e.on("error",r=>this.fireError(r)),e.on("message",r=>{this.onData.fire(r)})}listen(e){return this.onData.event(e)}};Ie.PortMessageReader=Wm;var Gm=class extends Xr.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.on("close",()=>this.fireClose()),e.on("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Ie.PortMessageWriter=Gm;var uo=class extends Xr.ReadableStreamMessageReader{constructor(e,r="utf-8"){super((0,ps.default)().stream.asReadableStream(e),r)}};Ie.SocketMessageReader=uo;var co=class extends Xr.WriteableStreamMessageWriter{constructor(e,r){super((0,ps.default)().stream.asWritableStream(e),r),this.socket=e}dispose(){super.dispose(),this.socket.destroy()}};Ie.SocketMessageWriter=co;var Qu=class extends Xr.ReadableStreamMessageReader{constructor(e,r){super((0,ps.default)().stream.asReadableStream(e),r)}};Ie.StreamMessageReader=Qu;var Zu=class extends Xr.WriteableStreamMessageWriter{constructor(e,r){super((0,ps.default)().stream.asWritableStream(e),r)}};Ie.StreamMessageWriter=Zu;var b_=process.env.XDG_RUNTIME_DIR,Mb=new Map([["linux",107],["darwin",103]]);function Fb(){let t=(0,Pb.randomBytes)(21).toString("hex");if(process.platform==="win32")return`\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`;let e;b_?e=C_.join(b_,`vscode-ipc-${t}.sock`):e=C_.join($b.tmpdir(),`vscode-${t}.sock`);let r=Mb.get(process.platform);return r!==void 0&&e.length>r&&(0,ps.default)().console.warn(`WARNING: IPC handle "${e}" is longer than ${r} characters.`),e}Ie.generateRandomPipeName=Fb;function Ub(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,ec.createServer)(a=>{s.close(),r([new uo(a,e),new co(a,e)])});s.on("error",o),s.listen(t,()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Ie.createClientPipeTransport=Ub;function Bb(t,e="utf-8"){let r=(0,ec.createConnection)(t);return[new uo(r,e),new co(r,e)]}Ie.createServerPipeTransport=Bb;function Wb(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,ec.createServer)(a=>{s.close(),r([new uo(a,e),new co(a,e)])});s.on("error",o),s.listen(t,"127.0.0.1",()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Ie.createClientSocketTransport=Wb;function Gb(t,e="utf-8"){let r=(0,ec.createConnection)(t,"127.0.0.1");return[new uo(r,e),new co(r,e)]}Ie.createServerSocketTransport=Gb;function Vb(t){let e=t;return e.read!==void 0&&e.addListener!==void 0}function jb(t){let e=t;return e.write!==void 0&&e.addListener!==void 0}function qb(t,e,r,n){r||(r=Xr.NullLogger);let i=Vb(t)?new Qu(t):t,o=jb(e)?new Zu(e):e;return Xr.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Xr.createMessageConnection)(i,o,r,n)}Ie.createMessageConnection=qb});var Vm=X(($V,k_)=>{"use strict";k_.exports=fo()});var rc=X((L_,tc)=>{(function(t){if(typeof tc=="object"&&typeof tc.exports=="object"){var e=t(require,L_);e!==void 0&&(tc.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlineCompletionContext=e.SelectedCompletionInfo=e.InlineCompletionTriggerKind=e.InlineCompletionList=e.InlineCompletionItem=e.StringValue=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(m){function N(O){return typeof O=="string"}m.is=N})(r||(e.DocumentUri=r={}));var n;(function(m){function N(O){return typeof O=="string"}m.is=N})(n||(e.URI=n={}));var i;(function(m){m.MIN_VALUE=-2147483648,m.MAX_VALUE=2147483647;function N(O){return typeof O=="number"&&m.MIN_VALUE<=O&&O<=m.MAX_VALUE}m.is=N})(i||(e.integer=i={}));var o;(function(m){m.MIN_VALUE=0,m.MAX_VALUE=2147483647;function N(O){return typeof O=="number"&&m.MIN_VALUE<=O&&O<=m.MAX_VALUE}m.is=N})(o||(e.uinteger=o={}));var s;(function(m){function N(g,p){return g===Number.MAX_VALUE&&(g=o.MAX_VALUE),p===Number.MAX_VALUE&&(p=o.MAX_VALUE),{line:g,character:p}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&D.uinteger(p.line)&&D.uinteger(p.character)}m.is=O})(s||(e.Position=s={}));var a;(function(m){function N(g,p,S,U){if(D.uinteger(g)&&D.uinteger(p)&&D.uinteger(S)&&D.uinteger(U))return{start:s.create(g,p),end:s.create(S,U)};if(s.is(g)&&s.is(p))return{start:g,end:p};throw new Error("Range#create called with invalid arguments[".concat(g,", ").concat(p,", ").concat(S,", ").concat(U,"]"))}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&s.is(p.start)&&s.is(p.end)}m.is=O})(a||(e.Range=a={}));var l;(function(m){function N(g,p){return{uri:g,range:p}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.range)&&(D.string(p.uri)||D.undefined(p.uri))}m.is=O})(l||(e.Location=l={}));var u;(function(m){function N(g,p,S,U){return{targetUri:g,targetRange:p,targetSelectionRange:S,originSelectionRange:U}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.targetRange)&&D.string(p.targetUri)&&a.is(p.targetSelectionRange)&&(a.is(p.originSelectionRange)||D.undefined(p.originSelectionRange))}m.is=O})(u||(e.LocationLink=u={}));var c;(function(m){function N(g,p,S,U){return{red:g,green:p,blue:S,alpha:U}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&D.numberRange(p.red,0,1)&&D.numberRange(p.green,0,1)&&D.numberRange(p.blue,0,1)&&D.numberRange(p.alpha,0,1)}m.is=O})(c||(e.Color=c={}));var f;(function(m){function N(g,p){return{range:g,color:p}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.range)&&c.is(p.color)}m.is=O})(f||(e.ColorInformation=f={}));var d;(function(m){function N(g,p,S){return{label:g,textEdit:p,additionalTextEdits:S}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&D.string(p.label)&&(D.undefined(p.textEdit)||B.is(p))&&(D.undefined(p.additionalTextEdits)||D.typedArray(p.additionalTextEdits,B.is))}m.is=O})(d||(e.ColorPresentation=d={}));var h;(function(m){m.Comment="comment",m.Imports="imports",m.Region="region"})(h||(e.FoldingRangeKind=h={}));var _;(function(m){function N(g,p,S,U,he,Nt){var ze={startLine:g,endLine:p};return D.defined(S)&&(ze.startCharacter=S),D.defined(U)&&(ze.endCharacter=U),D.defined(he)&&(ze.kind=he),D.defined(Nt)&&(ze.collapsedText=Nt),ze}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&D.uinteger(p.startLine)&&D.uinteger(p.startLine)&&(D.undefined(p.startCharacter)||D.uinteger(p.startCharacter))&&(D.undefined(p.endCharacter)||D.uinteger(p.endCharacter))&&(D.undefined(p.kind)||D.string(p.kind))}m.is=O})(_||(e.FoldingRange=_={}));var x;(function(m){function N(g,p){return{location:g,message:p}}m.create=N;function O(g){var p=g;return D.defined(p)&&l.is(p.location)&&D.string(p.message)}m.is=O})(x||(e.DiagnosticRelatedInformation=x={}));var E;(function(m){m.Error=1,m.Warning=2,m.Information=3,m.Hint=4})(E||(e.DiagnosticSeverity=E={}));var I;(function(m){m.Unnecessary=1,m.Deprecated=2})(I||(e.DiagnosticTag=I={}));var y;(function(m){function N(O){var g=O;return D.objectLiteral(g)&&D.string(g.href)}m.is=N})(y||(e.CodeDescription=y={}));var T;(function(m){function N(g,p,S,U,he,Nt){var ze={range:g,message:p};return D.defined(S)&&(ze.severity=S),D.defined(U)&&(ze.code=U),D.defined(he)&&(ze.source=he),D.defined(Nt)&&(ze.relatedInformation=Nt),ze}m.create=N;function O(g){var p,S=g;return D.defined(S)&&a.is(S.range)&&D.string(S.message)&&(D.number(S.severity)||D.undefined(S.severity))&&(D.integer(S.code)||D.string(S.code)||D.undefined(S.code))&&(D.undefined(S.codeDescription)||D.string((p=S.codeDescription)===null||p===void 0?void 0:p.href))&&(D.string(S.source)||D.undefined(S.source))&&(D.undefined(S.relatedInformation)||D.typedArray(S.relatedInformation,x.is))}m.is=O})(T||(e.Diagnostic=T={}));var k;(function(m){function N(g,p){for(var S=[],U=2;U<arguments.length;U++)S[U-2]=arguments[U];var he={title:g,command:p};return D.defined(S)&&S.length>0&&(he.arguments=S),he}m.create=N;function O(g){var p=g;return D.defined(p)&&D.string(p.title)&&D.string(p.command)}m.is=O})(k||(e.Command=k={}));var B;(function(m){function N(S,U){return{range:S,newText:U}}m.replace=N;function O(S,U){return{range:{start:S,end:S},newText:U}}m.insert=O;function g(S){return{range:S,newText:""}}m.del=g;function p(S){var U=S;return D.objectLiteral(U)&&D.string(U.newText)&&a.is(U.range)}m.is=p})(B||(e.TextEdit=B={}));var Q;(function(m){function N(g,p,S){var U={label:g};return p!==void 0&&(U.needsConfirmation=p),S!==void 0&&(U.description=S),U}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&D.string(p.label)&&(D.boolean(p.needsConfirmation)||p.needsConfirmation===void 0)&&(D.string(p.description)||p.description===void 0)}m.is=O})(Q||(e.ChangeAnnotation=Q={}));var ae;(function(m){function N(O){var g=O;return D.string(g)}m.is=N})(ae||(e.ChangeAnnotationIdentifier=ae={}));var le;(function(m){function N(S,U,he){return{range:S,newText:U,annotationId:he}}m.replace=N;function O(S,U,he){return{range:{start:S,end:S},newText:U,annotationId:he}}m.insert=O;function g(S,U){return{range:S,newText:"",annotationId:U}}m.del=g;function p(S){var U=S;return B.is(U)&&(Q.is(U.annotationId)||ae.is(U.annotationId))}m.is=p})(le||(e.AnnotatedTextEdit=le={}));var Ce;(function(m){function N(g,p){return{textDocument:g,edits:p}}m.create=N;function O(g){var p=g;return D.defined(p)&&ve.is(p.textDocument)&&Array.isArray(p.edits)}m.is=O})(Ce||(e.TextDocumentEdit=Ce={}));var $e;(function(m){function N(g,p,S){var U={kind:"create",uri:g};return p!==void 0&&(p.overwrite!==void 0||p.ignoreIfExists!==void 0)&&(U.options=p),S!==void 0&&(U.annotationId=S),U}m.create=N;function O(g){var p=g;return p&&p.kind==="create"&&D.string(p.uri)&&(p.options===void 0||(p.options.overwrite===void 0||D.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||D.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ae.is(p.annotationId))}m.is=O})($e||(e.CreateFile=$e={}));var W;(function(m){function N(g,p,S,U){var he={kind:"rename",oldUri:g,newUri:p};return S!==void 0&&(S.overwrite!==void 0||S.ignoreIfExists!==void 0)&&(he.options=S),U!==void 0&&(he.annotationId=U),he}m.create=N;function O(g){var p=g;return p&&p.kind==="rename"&&D.string(p.oldUri)&&D.string(p.newUri)&&(p.options===void 0||(p.options.overwrite===void 0||D.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||D.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ae.is(p.annotationId))}m.is=O})(W||(e.RenameFile=W={}));var L;(function(m){function N(g,p,S){var U={kind:"delete",uri:g};return p!==void 0&&(p.recursive!==void 0||p.ignoreIfNotExists!==void 0)&&(U.options=p),S!==void 0&&(U.annotationId=S),U}m.create=N;function O(g){var p=g;return p&&p.kind==="delete"&&D.string(p.uri)&&(p.options===void 0||(p.options.recursive===void 0||D.boolean(p.options.recursive))&&(p.options.ignoreIfNotExists===void 0||D.boolean(p.options.ignoreIfNotExists)))&&(p.annotationId===void 0||ae.is(p.annotationId))}m.is=O})(L||(e.DeleteFile=L={}));var j;(function(m){function N(O){var g=O;return g&&(g.changes!==void 0||g.documentChanges!==void 0)&&(g.documentChanges===void 0||g.documentChanges.every(function(p){return D.string(p.kind)?$e.is(p)||W.is(p)||L.is(p):Ce.is(p)}))}m.is=N})(j||(e.WorkspaceEdit=j={}));var H=function(){function m(N,O){this.edits=N,this.changeAnnotations=O}return m.prototype.insert=function(N,O,g){var p,S;if(g===void 0?p=B.insert(N,O):ae.is(g)?(S=g,p=le.insert(N,O,g)):(this.assertChangeAnnotations(this.changeAnnotations),S=this.changeAnnotations.manage(g),p=le.insert(N,O,S)),this.edits.push(p),S!==void 0)return S},m.prototype.replace=function(N,O,g){var p,S;if(g===void 0?p=B.replace(N,O):ae.is(g)?(S=g,p=le.replace(N,O,g)):(this.assertChangeAnnotations(this.changeAnnotations),S=this.changeAnnotations.manage(g),p=le.replace(N,O,S)),this.edits.push(p),S!==void 0)return S},m.prototype.delete=function(N,O){var g,p;if(O===void 0?g=B.del(N):ae.is(O)?(p=O,g=le.del(N,O)):(this.assertChangeAnnotations(this.changeAnnotations),p=this.changeAnnotations.manage(O),g=le.del(N,p)),this.edits.push(g),p!==void 0)return p},m.prototype.add=function(N){this.edits.push(N)},m.prototype.all=function(){return this.edits},m.prototype.clear=function(){this.edits.splice(0,this.edits.length)},m.prototype.assertChangeAnnotations=function(N){if(N===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},m}(),Te=function(){function m(N){this._annotations=N===void 0?Object.create(null):N,this._counter=0,this._size=0}return m.prototype.all=function(){return this._annotations},Object.defineProperty(m.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),m.prototype.manage=function(N,O){var g;if(ae.is(N)?g=N:(g=this.nextId(),O=N),this._annotations[g]!==void 0)throw new Error("Id ".concat(g," is already in use."));if(O===void 0)throw new Error("No annotation provided for id ".concat(g));return this._annotations[g]=O,this._size++,g},m.prototype.nextId=function(){return this._counter++,this._counter.toString()},m}(),ue=function(){function m(N){var O=this;this._textEditChanges=Object.create(null),N!==void 0?(this._workspaceEdit=N,N.documentChanges?(this._changeAnnotations=new Te(N.changeAnnotations),N.changeAnnotations=this._changeAnnotations.all(),N.documentChanges.forEach(function(g){if(Ce.is(g)){var p=new H(g.edits,O._changeAnnotations);O._textEditChanges[g.textDocument.uri]=p}})):N.changes&&Object.keys(N.changes).forEach(function(g){var p=new H(N.changes[g]);O._textEditChanges[g]=p})):this._workspaceEdit={}}return Object.defineProperty(m.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),m.prototype.getTextEditChange=function(N){if(ve.is(N)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var O={uri:N.uri,version:N.version},g=this._textEditChanges[O.uri];if(!g){var p=[],S={textDocument:O,edits:p};this._workspaceEdit.documentChanges.push(S),g=new H(p,this._changeAnnotations),this._textEditChanges[O.uri]=g}return g}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var g=this._textEditChanges[N];if(!g){var p=[];this._workspaceEdit.changes[N]=p,g=new H(p),this._textEditChanges[N]=g}return g}},m.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Te,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},m.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},m.prototype.createFile=function(N,O,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;Q.is(O)||ae.is(O)?p=O:g=O;var S,U;if(p===void 0?S=$e.create(N,g):(U=ae.is(p)?p:this._changeAnnotations.manage(p),S=$e.create(N,g,U)),this._workspaceEdit.documentChanges.push(S),U!==void 0)return U},m.prototype.renameFile=function(N,O,g,p){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var S;Q.is(g)||ae.is(g)?S=g:p=g;var U,he;if(S===void 0?U=W.create(N,O,p):(he=ae.is(S)?S:this._changeAnnotations.manage(S),U=W.create(N,O,p,he)),this._workspaceEdit.documentChanges.push(U),he!==void 0)return he},m.prototype.deleteFile=function(N,O,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;Q.is(O)||ae.is(O)?p=O:g=O;var S,U;if(p===void 0?S=L.create(N,g):(U=ae.is(p)?p:this._changeAnnotations.manage(p),S=L.create(N,g,U)),this._workspaceEdit.documentChanges.push(S),U!==void 0)return U},m}();e.WorkspaceChange=ue;var V;(function(m){function N(g){return{uri:g}}m.create=N;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)}m.is=O})(V||(e.TextDocumentIdentifier=V={}));var F;(function(m){function N(g,p){return{uri:g,version:p}}m.create=N;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)&&D.integer(p.version)}m.is=O})(F||(e.VersionedTextDocumentIdentifier=F={}));var ve;(function(m){function N(g,p){return{uri:g,version:p}}m.create=N;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)&&(p.version===null||D.integer(p.version))}m.is=O})(ve||(e.OptionalVersionedTextDocumentIdentifier=ve={}));var Re;(function(m){function N(g,p,S,U){return{uri:g,languageId:p,version:S,text:U}}m.create=N;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)&&D.string(p.languageId)&&D.integer(p.version)&&D.string(p.text)}m.is=O})(Re||(e.TextDocumentItem=Re={}));var Ae;(function(m){m.PlainText="plaintext",m.Markdown="markdown";function N(O){var g=O;return g===m.PlainText||g===m.Markdown}m.is=N})(Ae||(e.MarkupKind=Ae={}));var rr;(function(m){function N(O){var g=O;return D.objectLiteral(O)&&Ae.is(g.kind)&&D.string(g.value)}m.is=N})(rr||(e.MarkupContent=rr={}));var Ri;(function(m){m.Text=1,m.Method=2,m.Function=3,m.Constructor=4,m.Field=5,m.Variable=6,m.Class=7,m.Interface=8,m.Module=9,m.Property=10,m.Unit=11,m.Value=12,m.Enum=13,m.Keyword=14,m.Snippet=15,m.Color=16,m.File=17,m.Reference=18,m.Folder=19,m.EnumMember=20,m.Constant=21,m.Struct=22,m.Event=23,m.Operator=24,m.TypeParameter=25})(Ri||(e.CompletionItemKind=Ri={}));var Ve;(function(m){m.PlainText=1,m.Snippet=2})(Ve||(e.InsertTextFormat=Ve={}));var qt;(function(m){m.Deprecated=1})(qt||(e.CompletionItemTag=qt={}));var Xn;(function(m){function N(g,p,S){return{newText:g,insert:p,replace:S}}m.create=N;function O(g){var p=g;return p&&D.string(p.newText)&&a.is(p.insert)&&a.is(p.replace)}m.is=O})(Xn||(e.InsertReplaceEdit=Xn={}));var dt;(function(m){m.asIs=1,m.adjustIndentation=2})(dt||(e.InsertTextMode=dt={}));var Ht;(function(m){function N(O){var g=O;return g&&(D.string(g.detail)||g.detail===void 0)&&(D.string(g.description)||g.description===void 0)}m.is=N})(Ht||(e.CompletionItemLabelDetails=Ht={}));var bt;(function(m){function N(O){return{label:O}}m.create=N})(bt||(e.CompletionItem=bt={}));var kt;(function(m){function N(O,g){return{items:O||[],isIncomplete:!!g}}m.create=N})(kt||(e.CompletionList=kt={}));var pt;(function(m){function N(g){return g.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}m.fromPlainText=N;function O(g){var p=g;return D.string(p)||D.objectLiteral(p)&&D.string(p.language)&&D.string(p.value)}m.is=O})(pt||(e.MarkedString=pt={}));var mt;(function(m){function N(O){var g=O;return!!g&&D.objectLiteral(g)&&(rr.is(g.contents)||pt.is(g.contents)||D.typedArray(g.contents,pt.is))&&(O.range===void 0||a.is(O.range))}m.is=N})(mt||(e.Hover=mt={}));var ur;(function(m){function N(O,g){return g?{label:O,documentation:g}:{label:O}}m.create=N})(ur||(e.ParameterInformation=ur={}));var _r;(function(m){function N(O,g){for(var p=[],S=2;S<arguments.length;S++)p[S-2]=arguments[S];var U={label:O};return D.defined(g)&&(U.documentation=g),D.defined(p)?U.parameters=p:U.parameters=[],U}m.create=N})(_r||(e.SignatureInformation=_r={}));var Kr;(function(m){m.Text=1,m.Read=2,m.Write=3})(Kr||(e.DocumentHighlightKind=Kr={}));var Jn;(function(m){function N(O,g){var p={range:O};return D.number(g)&&(p.kind=g),p}m.create=N})(Jn||(e.DocumentHighlight=Jn={}));var xi;(function(m){m.File=1,m.Module=2,m.Namespace=3,m.Package=4,m.Class=5,m.Method=6,m.Property=7,m.Field=8,m.Constructor=9,m.Enum=10,m.Interface=11,m.Function=12,m.Variable=13,m.Constant=14,m.String=15,m.Number=16,m.Boolean=17,m.Array=18,m.Object=19,m.Key=20,m.Null=21,m.EnumMember=22,m.Struct=23,m.Event=24,m.Operator=25,m.TypeParameter=26})(xi||(e.SymbolKind=xi={}));var rs;(function(m){m.Deprecated=1})(rs||(e.SymbolTag=rs={}));var zr;(function(m){function N(O,g,p,S,U){var he={name:O,kind:g,location:{uri:S,range:p}};return U&&(he.containerName=U),he}m.create=N})(zr||(e.SymbolInformation=zr={}));var Dn;(function(m){function N(O,g,p,S){return S!==void 0?{name:O,kind:g,location:{uri:p,range:S}}:{name:O,kind:g,location:{uri:p}}}m.create=N})(Dn||(e.WorkspaceSymbol=Dn={}));var ns;(function(m){function N(g,p,S,U,he,Nt){var ze={name:g,detail:p,kind:S,range:U,selectionRange:he};return Nt!==void 0&&(ze.children=Nt),ze}m.create=N;function O(g){var p=g;return p&&D.string(p.name)&&D.number(p.kind)&&a.is(p.range)&&a.is(p.selectionRange)&&(p.detail===void 0||D.string(p.detail))&&(p.deprecated===void 0||D.boolean(p.deprecated))&&(p.children===void 0||Array.isArray(p.children))&&(p.tags===void 0||Array.isArray(p.tags))}m.is=O})(ns||(e.DocumentSymbol=ns={}));var is;(function(m){m.Empty="",m.QuickFix="quickfix",m.Refactor="refactor",m.RefactorExtract="refactor.extract",m.RefactorInline="refactor.inline",m.RefactorRewrite="refactor.rewrite",m.Source="source",m.SourceOrganizeImports="source.organizeImports",m.SourceFixAll="source.fixAll"})(is||(e.CodeActionKind=is={}));var Ar;(function(m){m.Invoked=1,m.Automatic=2})(Ar||(e.CodeActionTriggerKind=Ar={}));var A;(function(m){function N(g,p,S){var U={diagnostics:g};return p!=null&&(U.only=p),S!=null&&(U.triggerKind=S),U}m.create=N;function O(g){var p=g;return D.defined(p)&&D.typedArray(p.diagnostics,T.is)&&(p.only===void 0||D.typedArray(p.only,D.string))&&(p.triggerKind===void 0||p.triggerKind===Ar.Invoked||p.triggerKind===Ar.Automatic)}m.is=O})(A||(e.CodeActionContext=A={}));var $;(function(m){function N(g,p,S){var U={title:g},he=!0;return typeof p=="string"?(he=!1,U.kind=p):k.is(p)?U.command=p:U.edit=p,he&&S!==void 0&&(U.kind=S),U}m.create=N;function O(g){var p=g;return p&&D.string(p.title)&&(p.diagnostics===void 0||D.typedArray(p.diagnostics,T.is))&&(p.kind===void 0||D.string(p.kind))&&(p.edit!==void 0||p.command!==void 0)&&(p.command===void 0||k.is(p.command))&&(p.isPreferred===void 0||D.boolean(p.isPreferred))&&(p.edit===void 0||j.is(p.edit))}m.is=O})($||(e.CodeAction=$={}));var G;(function(m){function N(g,p){var S={range:g};return D.defined(p)&&(S.data=p),S}m.create=N;function O(g){var p=g;return D.defined(p)&&a.is(p.range)&&(D.undefined(p.command)||k.is(p.command))}m.is=O})(G||(e.CodeLens=G={}));var z;(function(m){function N(g,p){return{tabSize:g,insertSpaces:p}}m.create=N;function O(g){var p=g;return D.defined(p)&&D.uinteger(p.tabSize)&&D.boolean(p.insertSpaces)}m.is=O})(z||(e.FormattingOptions=z={}));var Z;(function(m){function N(g,p,S){return{range:g,target:p,data:S}}m.create=N;function O(g){var p=g;return D.defined(p)&&a.is(p.range)&&(D.undefined(p.target)||D.string(p.target))}m.is=O})(Z||(e.DocumentLink=Z={}));var R;(function(m){function N(g,p){return{range:g,parent:p}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.range)&&(p.parent===void 0||m.is(p.parent))}m.is=O})(R||(e.SelectionRange=R={}));var b;(function(m){m.namespace="namespace",m.type="type",m.class="class",m.enum="enum",m.interface="interface",m.struct="struct",m.typeParameter="typeParameter",m.parameter="parameter",m.variable="variable",m.property="property",m.enumMember="enumMember",m.event="event",m.function="function",m.method="method",m.macro="macro",m.keyword="keyword",m.modifier="modifier",m.comment="comment",m.string="string",m.number="number",m.regexp="regexp",m.operator="operator",m.decorator="decorator"})(b||(e.SemanticTokenTypes=b={}));var P;(function(m){m.declaration="declaration",m.definition="definition",m.readonly="readonly",m.static="static",m.deprecated="deprecated",m.abstract="abstract",m.async="async",m.modification="modification",m.documentation="documentation",m.defaultLibrary="defaultLibrary"})(P||(e.SemanticTokenModifiers=P={}));var M;(function(m){function N(O){var g=O;return D.objectLiteral(g)&&(g.resultId===void 0||typeof g.resultId=="string")&&Array.isArray(g.data)&&(g.data.length===0||typeof g.data[0]=="number")}m.is=N})(M||(e.SemanticTokens=M={}));var ne;(function(m){function N(g,p){return{range:g,text:p}}m.create=N;function O(g){var p=g;return p!=null&&a.is(p.range)&&D.string(p.text)}m.is=O})(ne||(e.InlineValueText=ne={}));var re;(function(m){function N(g,p,S){return{range:g,variableName:p,caseSensitiveLookup:S}}m.create=N;function O(g){var p=g;return p!=null&&a.is(p.range)&&D.boolean(p.caseSensitiveLookup)&&(D.string(p.variableName)||p.variableName===void 0)}m.is=O})(re||(e.InlineValueVariableLookup=re={}));var xe;(function(m){function N(g,p){return{range:g,expression:p}}m.create=N;function O(g){var p=g;return p!=null&&a.is(p.range)&&(D.string(p.expression)||p.expression===void 0)}m.is=O})(xe||(e.InlineValueEvaluatableExpression=xe={}));var je;(function(m){function N(g,p){return{frameId:g,stoppedLocation:p}}m.create=N;function O(g){var p=g;return D.defined(p)&&a.is(g.stoppedLocation)}m.is=O})(je||(e.InlineValueContext=je={}));var Lt;(function(m){m.Type=1,m.Parameter=2;function N(O){return O===1||O===2}m.is=N})(Lt||(e.InlayHintKind=Lt={}));var be;(function(m){function N(g){return{value:g}}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&(p.tooltip===void 0||D.string(p.tooltip)||rr.is(p.tooltip))&&(p.location===void 0||l.is(p.location))&&(p.command===void 0||k.is(p.command))}m.is=O})(be||(e.InlayHintLabelPart=be={}));var ot;(function(m){function N(g,p,S){var U={position:g,label:p};return S!==void 0&&(U.kind=S),U}m.create=N;function O(g){var p=g;return D.objectLiteral(p)&&s.is(p.position)&&(D.string(p.label)||D.typedArray(p.label,be.is))&&(p.kind===void 0||Lt.is(p.kind))&&p.textEdits===void 0||D.typedArray(p.textEdits,B.is)&&(p.tooltip===void 0||D.string(p.tooltip)||rr.is(p.tooltip))&&(p.paddingLeft===void 0||D.boolean(p.paddingLeft))&&(p.paddingRight===void 0||D.boolean(p.paddingRight))}m.is=O})(ot||(e.InlayHint=ot={}));var Ue;(function(m){function N(O){return{kind:"snippet",value:O}}m.createSnippet=N})(Ue||(e.StringValue=Ue={}));var st;(function(m){function N(O,g,p,S){return{insertText:O,filterText:g,range:p,command:S}}m.create=N})(st||(e.InlineCompletionItem=st={}));var wt;(function(m){function N(O){return{items:O}}m.create=N})(wt||(e.InlineCompletionList=wt={}));var Cu;(function(m){m.Invoked=0,m.Automatic=1})(Cu||(e.InlineCompletionTriggerKind=Cu={}));var zy;(function(m){function N(O,g){return{range:O,text:g}}m.create=N})(zy||(e.SelectedCompletionInfo=zy={}));var Yy;(function(m){function N(O,g){return{triggerKind:O,selectedCompletionInfo:g}}m.create=N})(Yy||(e.InlineCompletionContext=Yy={}));var Xy;(function(m){function N(O){var g=O;return D.objectLiteral(g)&&n.is(g.uri)&&D.string(g.name)}m.is=N})(Xy||(e.WorkspaceFolder=Xy={})),e.EOL=[`
`,`\r
`,"\r"];var Jy;(function(m){function N(S,U,he,Nt){return new QC(S,U,he,Nt)}m.create=N;function O(S){var U=S;return!!(D.defined(U)&&D.string(U.uri)&&(D.undefined(U.languageId)||D.string(U.languageId))&&D.uinteger(U.lineCount)&&D.func(U.getText)&&D.func(U.positionAt)&&D.func(U.offsetAt))}m.is=O;function g(S,U){for(var he=S.getText(),Nt=p(U,function(os,bu){var Qy=os.range.start.line-bu.range.start.line;return Qy===0?os.range.start.character-bu.range.start.character:Qy}),ze=he.length,mn=Nt.length-1;mn>=0;mn--){var hn=Nt[mn],Qn=S.offsetAt(hn.range.start),Oe=S.offsetAt(hn.range.end);if(Oe<=ze)he=he.substring(0,Qn)+hn.newText+he.substring(Oe,he.length);else throw new Error("Overlapping edit");ze=Qn}return he}m.applyEdits=g;function p(S,U){if(S.length<=1)return S;var he=S.length/2|0,Nt=S.slice(0,he),ze=S.slice(he);p(Nt,U),p(ze,U);for(var mn=0,hn=0,Qn=0;mn<Nt.length&&hn<ze.length;){var Oe=U(Nt[mn],ze[hn]);Oe<=0?S[Qn++]=Nt[mn++]:S[Qn++]=ze[hn++]}for(;mn<Nt.length;)S[Qn++]=Nt[mn++];for(;hn<ze.length;)S[Qn++]=ze[hn++];return S}})(Jy||(e.TextDocument=Jy={}));var QC=function(){function m(N,O,g,p){this._uri=N,this._languageId=O,this._version=g,this._content=p,this._lineOffsets=void 0}return Object.defineProperty(m.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),m.prototype.getText=function(N){if(N){var O=this.offsetAt(N.start),g=this.offsetAt(N.end);return this._content.substring(O,g)}return this._content},m.prototype.update=function(N,O){this._content=N.text,this._version=O,this._lineOffsets=void 0},m.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var N=[],O=this._content,g=!0,p=0;p<O.length;p++){g&&(N.push(p),g=!1);var S=O.charAt(p);g=S==="\r"||S===`
`,S==="\r"&&p+1<O.length&&O.charAt(p+1)===`
`&&p++}g&&O.length>0&&N.push(O.length),this._lineOffsets=N}return this._lineOffsets},m.prototype.positionAt=function(N){N=Math.max(Math.min(N,this._content.length),0);var O=this.getLineOffsets(),g=0,p=O.length;if(p===0)return s.create(0,N);for(;g<p;){var S=Math.floor((g+p)/2);O[S]>N?p=S:g=S+1}var U=g-1;return s.create(U,N-O[U])},m.prototype.offsetAt=function(N){var O=this.getLineOffsets();if(N.line>=O.length)return this._content.length;if(N.line<0)return 0;var g=O[N.line],p=N.line+1<O.length?O[N.line+1]:this._content.length;return Math.max(Math.min(g+N.character,p),g)},Object.defineProperty(m.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),m}(),D;(function(m){var N=Object.prototype.toString;function O(Oe){return typeof Oe!="undefined"}m.defined=O;function g(Oe){return typeof Oe=="undefined"}m.undefined=g;function p(Oe){return Oe===!0||Oe===!1}m.boolean=p;function S(Oe){return N.call(Oe)==="[object String]"}m.string=S;function U(Oe){return N.call(Oe)==="[object Number]"}m.number=U;function he(Oe,os,bu){return N.call(Oe)==="[object Number]"&&os<=Oe&&Oe<=bu}m.numberRange=he;function Nt(Oe){return N.call(Oe)==="[object Number]"&&-2147483648<=Oe&&Oe<=2147483647}m.integer=Nt;function ze(Oe){return N.call(Oe)==="[object Number]"&&0<=Oe&&Oe<=2147483647}m.uinteger=ze;function mn(Oe){return N.call(Oe)==="[object Function]"}m.func=mn;function hn(Oe){return Oe!==null&&typeof Oe=="object"}m.objectLiteral=hn;function Qn(Oe,os){return Array.isArray(Oe)&&Oe.every(os)}m.typedArray=Qn})(D||(D={}))})});var at=X(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.ProtocolNotificationType=Cr.ProtocolNotificationType0=Cr.ProtocolRequestType=Cr.ProtocolRequestType0=Cr.RegistrationType=Cr.MessageDirection=void 0;var ms=fo(),w_;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(w_||(Cr.MessageDirection=w_={}));var jm=class{constructor(e){this.method=e}};Cr.RegistrationType=jm;var qm=class extends ms.RequestType0{constructor(e){super(e)}};Cr.ProtocolRequestType0=qm;var Hm=class extends ms.RequestType{constructor(e){super(e,ms.ParameterStructures.byName)}};Cr.ProtocolRequestType=Hm;var Km=class extends ms.NotificationType0{constructor(e){super(e)}};Cr.ProtocolNotificationType0=Km;var zm=class extends ms.NotificationType{constructor(e){super(e,ms.ParameterStructures.byName)}};Cr.ProtocolNotificationType=zm});var nc=X(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.objectLiteral=Wt.typedArray=Wt.stringArray=Wt.array=Wt.func=Wt.error=Wt.number=Wt.string=Wt.boolean=void 0;function Hb(t){return t===!0||t===!1}Wt.boolean=Hb;function $_(t){return typeof t=="string"||t instanceof String}Wt.string=$_;function Kb(t){return typeof t=="number"||t instanceof Number}Wt.number=Kb;function zb(t){return t instanceof Error}Wt.error=zb;function Yb(t){return typeof t=="function"}Wt.func=Yb;function P_(t){return Array.isArray(t)}Wt.array=P_;function Xb(t){return P_(t)&&t.every(e=>$_(e))}Wt.stringArray=Xb;function Jb(t,e){return Array.isArray(t)&&t.every(e)}Wt.typedArray=Jb;function Qb(t){return t!==null&&typeof t=="object"}Wt.objectLiteral=Qb});var U_=X(ic=>{"use strict";Object.defineProperty(ic,"__esModule",{value:!0});ic.ImplementationRequest=void 0;var M_=at(),F_;(function(t){t.method="textDocument/implementation",t.messageDirection=M_.MessageDirection.clientToServer,t.type=new M_.ProtocolRequestType(t.method)})(F_||(ic.ImplementationRequest=F_={}))});var G_=X(oc=>{"use strict";Object.defineProperty(oc,"__esModule",{value:!0});oc.TypeDefinitionRequest=void 0;var B_=at(),W_;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=B_.MessageDirection.clientToServer,t.type=new B_.ProtocolRequestType(t.method)})(W_||(oc.TypeDefinitionRequest=W_={}))});var q_=X(hs=>{"use strict";Object.defineProperty(hs,"__esModule",{value:!0});hs.DidChangeWorkspaceFoldersNotification=hs.WorkspaceFoldersRequest=void 0;var sc=at(),V_;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=sc.MessageDirection.serverToClient,t.type=new sc.ProtocolRequestType0(t.method)})(V_||(hs.WorkspaceFoldersRequest=V_={}));var j_;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=sc.MessageDirection.clientToServer,t.type=new sc.ProtocolNotificationType(t.method)})(j_||(hs.DidChangeWorkspaceFoldersNotification=j_={}))});var z_=X(ac=>{"use strict";Object.defineProperty(ac,"__esModule",{value:!0});ac.ConfigurationRequest=void 0;var H_=at(),K_;(function(t){t.method="workspace/configuration",t.messageDirection=H_.MessageDirection.serverToClient,t.type=new H_.ProtocolRequestType(t.method)})(K_||(ac.ConfigurationRequest=K_={}))});var J_=X(gs=>{"use strict";Object.defineProperty(gs,"__esModule",{value:!0});gs.ColorPresentationRequest=gs.DocumentColorRequest=void 0;var lc=at(),Y_;(function(t){t.method="textDocument/documentColor",t.messageDirection=lc.MessageDirection.clientToServer,t.type=new lc.ProtocolRequestType(t.method)})(Y_||(gs.DocumentColorRequest=Y_={}));var X_;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=lc.MessageDirection.clientToServer,t.type=new lc.ProtocolRequestType(t.method)})(X_||(gs.ColorPresentationRequest=X_={}))});var ev=X(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});Ts.FoldingRangeRefreshRequest=Ts.FoldingRangeRequest=void 0;var uc=at(),Q_;(function(t){t.method="textDocument/foldingRange",t.messageDirection=uc.MessageDirection.clientToServer,t.type=new uc.ProtocolRequestType(t.method)})(Q_||(Ts.FoldingRangeRequest=Q_={}));var Z_;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=uc.MessageDirection.serverToClient,t.type=new uc.ProtocolRequestType0(t.method)})(Z_||(Ts.FoldingRangeRefreshRequest=Z_={}))});var nv=X(cc=>{"use strict";Object.defineProperty(cc,"__esModule",{value:!0});cc.DeclarationRequest=void 0;var tv=at(),rv;(function(t){t.method="textDocument/declaration",t.messageDirection=tv.MessageDirection.clientToServer,t.type=new tv.ProtocolRequestType(t.method)})(rv||(cc.DeclarationRequest=rv={}))});var sv=X(fc=>{"use strict";Object.defineProperty(fc,"__esModule",{value:!0});fc.SelectionRangeRequest=void 0;var iv=at(),ov;(function(t){t.method="textDocument/selectionRange",t.messageDirection=iv.MessageDirection.clientToServer,t.type=new iv.ProtocolRequestType(t.method)})(ov||(fc.SelectionRangeRequest=ov={}))});var cv=X(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.WorkDoneProgressCancelNotification=Di.WorkDoneProgressCreateRequest=Di.WorkDoneProgress=void 0;var Zb=fo(),dc=at(),av;(function(t){t.type=new Zb.ProgressType;function e(r){return r===t.type}t.is=e})(av||(Di.WorkDoneProgress=av={}));var lv;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=dc.MessageDirection.serverToClient,t.type=new dc.ProtocolRequestType(t.method)})(lv||(Di.WorkDoneProgressCreateRequest=lv={}));var uv;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=dc.MessageDirection.clientToServer,t.type=new dc.ProtocolNotificationType(t.method)})(uv||(Di.WorkDoneProgressCancelNotification=uv={}))});var mv=X(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.CallHierarchyOutgoingCallsRequest=Ci.CallHierarchyIncomingCallsRequest=Ci.CallHierarchyPrepareRequest=void 0;var ys=at(),fv;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=ys.MessageDirection.clientToServer,t.type=new ys.ProtocolRequestType(t.method)})(fv||(Ci.CallHierarchyPrepareRequest=fv={}));var dv;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=ys.MessageDirection.clientToServer,t.type=new ys.ProtocolRequestType(t.method)})(dv||(Ci.CallHierarchyIncomingCallsRequest=dv={}));var pv;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=ys.MessageDirection.clientToServer,t.type=new ys.ProtocolRequestType(t.method)})(pv||(Ci.CallHierarchyOutgoingCallsRequest=pv={}))});var vv=X(br=>{"use strict";Object.defineProperty(br,"__esModule",{value:!0});br.SemanticTokensRefreshRequest=br.SemanticTokensRangeRequest=br.SemanticTokensDeltaRequest=br.SemanticTokensRequest=br.SemanticTokensRegistrationType=br.TokenFormat=void 0;var ei=at(),hv;(function(t){t.Relative="relative"})(hv||(br.TokenFormat=hv={}));var za;(function(t){t.method="textDocument/semanticTokens",t.type=new ei.RegistrationType(t.method)})(za||(br.SemanticTokensRegistrationType=za={}));var gv;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=ei.MessageDirection.clientToServer,t.type=new ei.ProtocolRequestType(t.method),t.registrationMethod=za.method})(gv||(br.SemanticTokensRequest=gv={}));var Tv;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=ei.MessageDirection.clientToServer,t.type=new ei.ProtocolRequestType(t.method),t.registrationMethod=za.method})(Tv||(br.SemanticTokensDeltaRequest=Tv={}));var yv;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=ei.MessageDirection.clientToServer,t.type=new ei.ProtocolRequestType(t.method),t.registrationMethod=za.method})(yv||(br.SemanticTokensRangeRequest=yv={}));var _v;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=ei.MessageDirection.serverToClient,t.type=new ei.ProtocolRequestType0(t.method)})(_v||(br.SemanticTokensRefreshRequest=_v={}))});var Nv=X(pc=>{"use strict";Object.defineProperty(pc,"__esModule",{value:!0});pc.ShowDocumentRequest=void 0;var Rv=at(),xv;(function(t){t.method="window/showDocument",t.messageDirection=Rv.MessageDirection.serverToClient,t.type=new Rv.ProtocolRequestType(t.method)})(xv||(pc.ShowDocumentRequest=xv={}))});var Ev=X(mc=>{"use strict";Object.defineProperty(mc,"__esModule",{value:!0});mc.LinkedEditingRangeRequest=void 0;var Ov=at(),Iv;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=Ov.MessageDirection.clientToServer,t.type=new Ov.ProtocolRequestType(t.method)})(Iv||(mc.LinkedEditingRangeRequest=Iv={}))});var wv=X(dr=>{"use strict";Object.defineProperty(dr,"__esModule",{value:!0});dr.WillDeleteFilesRequest=dr.DidDeleteFilesNotification=dr.DidRenameFilesNotification=dr.WillRenameFilesRequest=dr.DidCreateFilesNotification=dr.WillCreateFilesRequest=dr.FileOperationPatternKind=void 0;var tn=at(),Sv;(function(t){t.file="file",t.folder="folder"})(Sv||(dr.FileOperationPatternKind=Sv={}));var Av;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=tn.MessageDirection.clientToServer,t.type=new tn.ProtocolRequestType(t.method)})(Av||(dr.WillCreateFilesRequest=Av={}));var Dv;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=tn.MessageDirection.clientToServer,t.type=new tn.ProtocolNotificationType(t.method)})(Dv||(dr.DidCreateFilesNotification=Dv={}));var Cv;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=tn.MessageDirection.clientToServer,t.type=new tn.ProtocolRequestType(t.method)})(Cv||(dr.WillRenameFilesRequest=Cv={}));var bv;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=tn.MessageDirection.clientToServer,t.type=new tn.ProtocolNotificationType(t.method)})(bv||(dr.DidRenameFilesNotification=bv={}));var kv;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=tn.MessageDirection.clientToServer,t.type=new tn.ProtocolNotificationType(t.method)})(kv||(dr.DidDeleteFilesNotification=kv={}));var Lv;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=tn.MessageDirection.clientToServer,t.type=new tn.ProtocolRequestType(t.method)})(Lv||(dr.WillDeleteFilesRequest=Lv={}))});var Uv=X(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.MonikerRequest=bi.MonikerKind=bi.UniquenessLevel=void 0;var $v=at(),Pv;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Pv||(bi.UniquenessLevel=Pv={}));var Mv;(function(t){t.$import="import",t.$export="export",t.local="local"})(Mv||(bi.MonikerKind=Mv={}));var Fv;(function(t){t.method="textDocument/moniker",t.messageDirection=$v.MessageDirection.clientToServer,t.type=new $v.ProtocolRequestType(t.method)})(Fv||(bi.MonikerRequest=Fv={}))});var Vv=X(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.TypeHierarchySubtypesRequest=ki.TypeHierarchySupertypesRequest=ki.TypeHierarchyPrepareRequest=void 0;var _s=at(),Bv;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=_s.MessageDirection.clientToServer,t.type=new _s.ProtocolRequestType(t.method)})(Bv||(ki.TypeHierarchyPrepareRequest=Bv={}));var Wv;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=_s.MessageDirection.clientToServer,t.type=new _s.ProtocolRequestType(t.method)})(Wv||(ki.TypeHierarchySupertypesRequest=Wv={}));var Gv;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=_s.MessageDirection.clientToServer,t.type=new _s.ProtocolRequestType(t.method)})(Gv||(ki.TypeHierarchySubtypesRequest=Gv={}))});var Hv=X(vs=>{"use strict";Object.defineProperty(vs,"__esModule",{value:!0});vs.InlineValueRefreshRequest=vs.InlineValueRequest=void 0;var hc=at(),jv;(function(t){t.method="textDocument/inlineValue",t.messageDirection=hc.MessageDirection.clientToServer,t.type=new hc.ProtocolRequestType(t.method)})(jv||(vs.InlineValueRequest=jv={}));var qv;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=hc.MessageDirection.serverToClient,t.type=new hc.ProtocolRequestType0(t.method)})(qv||(vs.InlineValueRefreshRequest=qv={}))});var Xv=X(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.InlayHintRefreshRequest=Li.InlayHintResolveRequest=Li.InlayHintRequest=void 0;var Rs=at(),Kv;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Rs.MessageDirection.clientToServer,t.type=new Rs.ProtocolRequestType(t.method)})(Kv||(Li.InlayHintRequest=Kv={}));var zv;(function(t){t.method="inlayHint/resolve",t.messageDirection=Rs.MessageDirection.clientToServer,t.type=new Rs.ProtocolRequestType(t.method)})(zv||(Li.InlayHintResolveRequest=zv={}));var Yv;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Rs.MessageDirection.serverToClient,t.type=new Rs.ProtocolRequestType0(t.method)})(Yv||(Li.InlayHintRefreshRequest=Yv={}))});var nR=X(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});rn.DiagnosticRefreshRequest=rn.WorkspaceDiagnosticRequest=rn.DocumentDiagnosticRequest=rn.DocumentDiagnosticReportKind=rn.DiagnosticServerCancellationData=void 0;var rR=fo(),ek=nc(),xs=at(),Jv;(function(t){function e(r){let n=r;return n&&ek.boolean(n.retriggerRequest)}t.is=e})(Jv||(rn.DiagnosticServerCancellationData=Jv={}));var Qv;(function(t){t.Full="full",t.Unchanged="unchanged"})(Qv||(rn.DocumentDiagnosticReportKind=Qv={}));var Zv;(function(t){t.method="textDocument/diagnostic",t.messageDirection=xs.MessageDirection.clientToServer,t.type=new xs.ProtocolRequestType(t.method),t.partialResult=new rR.ProgressType})(Zv||(rn.DocumentDiagnosticRequest=Zv={}));var eR;(function(t){t.method="workspace/diagnostic",t.messageDirection=xs.MessageDirection.clientToServer,t.type=new xs.ProtocolRequestType(t.method),t.partialResult=new rR.ProgressType})(eR||(rn.WorkspaceDiagnosticRequest=eR={}));var tR;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=xs.MessageDirection.serverToClient,t.type=new xs.ProtocolRequestType0(t.method)})(tR||(rn.DiagnosticRefreshRequest=tR={}))});var cR=X(Ot=>{"use strict";Object.defineProperty(Ot,"__esModule",{value:!0});Ot.DidCloseNotebookDocumentNotification=Ot.DidSaveNotebookDocumentNotification=Ot.DidChangeNotebookDocumentNotification=Ot.NotebookCellArrayChange=Ot.DidOpenNotebookDocumentNotification=Ot.NotebookDocumentSyncRegistrationType=Ot.NotebookDocument=Ot.NotebookCell=Ot.ExecutionSummary=Ot.NotebookCellKind=void 0;var Ya=rc(),Tn=nc(),Cn=at(),Ym;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(Ym||(Ot.NotebookCellKind=Ym={}));var Xm;(function(t){function e(i,o){let s={executionOrder:i};return(o===!0||o===!1)&&(s.success=o),s}t.create=e;function r(i){let o=i;return Tn.objectLiteral(o)&&Ya.uinteger.is(o.executionOrder)&&(o.success===void 0||Tn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(Xm||(Ot.ExecutionSummary=Xm={}));var gc;(function(t){function e(o,s){return{kind:o,document:s}}t.create=e;function r(o){let s=o;return Tn.objectLiteral(s)&&Ym.is(s.kind)&&Ya.DocumentUri.is(s.document)&&(s.metadata===void 0||Tn.objectLiteral(s.metadata))}t.is=r;function n(o,s){let a=new Set;return o.document!==s.document&&a.add("document"),o.kind!==s.kind&&a.add("kind"),o.executionSummary!==s.executionSummary&&a.add("executionSummary"),(o.metadata!==void 0||s.metadata!==void 0)&&!i(o.metadata,s.metadata)&&a.add("metadata"),(o.executionSummary!==void 0||s.executionSummary!==void 0)&&!Xm.equals(o.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function i(o,s){if(o===s)return!0;if(o==null||s===null||s===void 0||typeof o!=typeof s||typeof o!="object")return!1;let a=Array.isArray(o),l=Array.isArray(s);if(a!==l)return!1;if(a&&l){if(o.length!==s.length)return!1;for(let u=0;u<o.length;u++)if(!i(o[u],s[u]))return!1}if(Tn.objectLiteral(o)&&Tn.objectLiteral(s)){let u=Object.keys(o),c=Object.keys(s);if(u.length!==c.length||(u.sort(),c.sort(),!i(u,c)))return!1;for(let f=0;f<u.length;f++){let d=u[f];if(!i(o[d],s[d]))return!1}}return!0}})(gc||(Ot.NotebookCell=gc={}));var iR;(function(t){function e(n,i,o,s){return{uri:n,notebookType:i,version:o,cells:s}}t.create=e;function r(n){let i=n;return Tn.objectLiteral(i)&&Tn.string(i.uri)&&Ya.integer.is(i.version)&&Tn.typedArray(i.cells,gc.is)}t.is=r})(iR||(Ot.NotebookDocument=iR={}));var Ns;(function(t){t.method="notebookDocument/sync",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.RegistrationType(t.method)})(Ns||(Ot.NotebookDocumentSyncRegistrationType=Ns={}));var oR;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Ns.method})(oR||(Ot.DidOpenNotebookDocumentNotification=oR={}));var sR;(function(t){function e(n){let i=n;return Tn.objectLiteral(i)&&Ya.uinteger.is(i.start)&&Ya.uinteger.is(i.deleteCount)&&(i.cells===void 0||Tn.typedArray(i.cells,gc.is))}t.is=e;function r(n,i,o){let s={start:n,deleteCount:i};return o!==void 0&&(s.cells=o),s}t.create=r})(sR||(Ot.NotebookCellArrayChange=sR={}));var aR;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Ns.method})(aR||(Ot.DidChangeNotebookDocumentNotification=aR={}));var lR;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Ns.method})(lR||(Ot.DidSaveNotebookDocumentNotification=lR={}));var uR;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Ns.method})(uR||(Ot.DidCloseNotebookDocumentNotification=uR={}))});var pR=X(Tc=>{"use strict";Object.defineProperty(Tc,"__esModule",{value:!0});Tc.InlineCompletionRequest=void 0;var fR=at(),dR;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=fR.MessageDirection.clientToServer,t.type=new fR.ProtocolRequestType(t.method)})(dR||(Tc.InlineCompletionRequest=dR={}))});var Ex=X(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.WorkspaceSymbolRequest=v.CodeActionResolveRequest=v.CodeActionRequest=v.DocumentSymbolRequest=v.DocumentHighlightRequest=v.ReferencesRequest=v.DefinitionRequest=v.SignatureHelpRequest=v.SignatureHelpTriggerKind=v.HoverRequest=v.CompletionResolveRequest=v.CompletionRequest=v.CompletionTriggerKind=v.PublishDiagnosticsNotification=v.WatchKind=v.RelativePattern=v.FileChangeType=v.DidChangeWatchedFilesNotification=v.WillSaveTextDocumentWaitUntilRequest=v.WillSaveTextDocumentNotification=v.TextDocumentSaveReason=v.DidSaveTextDocumentNotification=v.DidCloseTextDocumentNotification=v.DidChangeTextDocumentNotification=v.TextDocumentContentChangeEvent=v.DidOpenTextDocumentNotification=v.TextDocumentSyncKind=v.TelemetryEventNotification=v.LogMessageNotification=v.ShowMessageRequest=v.ShowMessageNotification=v.MessageType=v.DidChangeConfigurationNotification=v.ExitNotification=v.ShutdownRequest=v.InitializedNotification=v.InitializeErrorCodes=v.InitializeRequest=v.WorkDoneProgressOptions=v.TextDocumentRegistrationOptions=v.StaticRegistrationOptions=v.PositionEncodingKind=v.FailureHandlingKind=v.ResourceOperationKind=v.UnregistrationRequest=v.RegistrationRequest=v.DocumentSelector=v.NotebookCellTextDocumentFilter=v.NotebookDocumentFilter=v.TextDocumentFilter=void 0;v.MonikerRequest=v.MonikerKind=v.UniquenessLevel=v.WillDeleteFilesRequest=v.DidDeleteFilesNotification=v.WillRenameFilesRequest=v.DidRenameFilesNotification=v.WillCreateFilesRequest=v.DidCreateFilesNotification=v.FileOperationPatternKind=v.LinkedEditingRangeRequest=v.ShowDocumentRequest=v.SemanticTokensRegistrationType=v.SemanticTokensRefreshRequest=v.SemanticTokensRangeRequest=v.SemanticTokensDeltaRequest=v.SemanticTokensRequest=v.TokenFormat=v.CallHierarchyPrepareRequest=v.CallHierarchyOutgoingCallsRequest=v.CallHierarchyIncomingCallsRequest=v.WorkDoneProgressCancelNotification=v.WorkDoneProgressCreateRequest=v.WorkDoneProgress=v.SelectionRangeRequest=v.DeclarationRequest=v.FoldingRangeRefreshRequest=v.FoldingRangeRequest=v.ColorPresentationRequest=v.DocumentColorRequest=v.ConfigurationRequest=v.DidChangeWorkspaceFoldersNotification=v.WorkspaceFoldersRequest=v.TypeDefinitionRequest=v.ImplementationRequest=v.ApplyWorkspaceEditRequest=v.ExecuteCommandRequest=v.PrepareRenameRequest=v.RenameRequest=v.PrepareSupportDefaultBehavior=v.DocumentOnTypeFormattingRequest=v.DocumentRangesFormattingRequest=v.DocumentRangeFormattingRequest=v.DocumentFormattingRequest=v.DocumentLinkResolveRequest=v.DocumentLinkRequest=v.CodeLensRefreshRequest=v.CodeLensResolveRequest=v.CodeLensRequest=v.WorkspaceSymbolResolveRequest=void 0;v.InlineCompletionRequest=v.DidCloseNotebookDocumentNotification=v.DidSaveNotebookDocumentNotification=v.DidChangeNotebookDocumentNotification=v.NotebookCellArrayChange=v.DidOpenNotebookDocumentNotification=v.NotebookDocumentSyncRegistrationType=v.NotebookDocument=v.NotebookCell=v.ExecutionSummary=v.NotebookCellKind=v.DiagnosticRefreshRequest=v.WorkspaceDiagnosticRequest=v.DocumentDiagnosticRequest=v.DocumentDiagnosticReportKind=v.DiagnosticServerCancellationData=v.InlayHintRefreshRequest=v.InlayHintResolveRequest=v.InlayHintRequest=v.InlineValueRefreshRequest=v.InlineValueRequest=v.TypeHierarchySupertypesRequest=v.TypeHierarchySubtypesRequest=v.TypeHierarchyPrepareRequest=void 0;var q=at(),mR=rc(),Xt=nc(),tk=U_();Object.defineProperty(v,"ImplementationRequest",{enumerable:!0,get:function(){return tk.ImplementationRequest}});var rk=G_();Object.defineProperty(v,"TypeDefinitionRequest",{enumerable:!0,get:function(){return rk.TypeDefinitionRequest}});var xx=q_();Object.defineProperty(v,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return xx.WorkspaceFoldersRequest}});Object.defineProperty(v,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return xx.DidChangeWorkspaceFoldersNotification}});var nk=z_();Object.defineProperty(v,"ConfigurationRequest",{enumerable:!0,get:function(){return nk.ConfigurationRequest}});var Nx=J_();Object.defineProperty(v,"DocumentColorRequest",{enumerable:!0,get:function(){return Nx.DocumentColorRequest}});Object.defineProperty(v,"ColorPresentationRequest",{enumerable:!0,get:function(){return Nx.ColorPresentationRequest}});var Ox=ev();Object.defineProperty(v,"FoldingRangeRequest",{enumerable:!0,get:function(){return Ox.FoldingRangeRequest}});Object.defineProperty(v,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return Ox.FoldingRangeRefreshRequest}});var ik=nv();Object.defineProperty(v,"DeclarationRequest",{enumerable:!0,get:function(){return ik.DeclarationRequest}});var ok=sv();Object.defineProperty(v,"SelectionRangeRequest",{enumerable:!0,get:function(){return ok.SelectionRangeRequest}});var th=cv();Object.defineProperty(v,"WorkDoneProgress",{enumerable:!0,get:function(){return th.WorkDoneProgress}});Object.defineProperty(v,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return th.WorkDoneProgressCreateRequest}});Object.defineProperty(v,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return th.WorkDoneProgressCancelNotification}});var rh=mv();Object.defineProperty(v,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return rh.CallHierarchyIncomingCallsRequest}});Object.defineProperty(v,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return rh.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(v,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return rh.CallHierarchyPrepareRequest}});var Os=vv();Object.defineProperty(v,"TokenFormat",{enumerable:!0,get:function(){return Os.TokenFormat}});Object.defineProperty(v,"SemanticTokensRequest",{enumerable:!0,get:function(){return Os.SemanticTokensRequest}});Object.defineProperty(v,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Os.SemanticTokensDeltaRequest}});Object.defineProperty(v,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Os.SemanticTokensRangeRequest}});Object.defineProperty(v,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Os.SemanticTokensRefreshRequest}});Object.defineProperty(v,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Os.SemanticTokensRegistrationType}});var sk=Nv();Object.defineProperty(v,"ShowDocumentRequest",{enumerable:!0,get:function(){return sk.ShowDocumentRequest}});var ak=Ev();Object.defineProperty(v,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return ak.LinkedEditingRangeRequest}});var po=wv();Object.defineProperty(v,"FileOperationPatternKind",{enumerable:!0,get:function(){return po.FileOperationPatternKind}});Object.defineProperty(v,"DidCreateFilesNotification",{enumerable:!0,get:function(){return po.DidCreateFilesNotification}});Object.defineProperty(v,"WillCreateFilesRequest",{enumerable:!0,get:function(){return po.WillCreateFilesRequest}});Object.defineProperty(v,"DidRenameFilesNotification",{enumerable:!0,get:function(){return po.DidRenameFilesNotification}});Object.defineProperty(v,"WillRenameFilesRequest",{enumerable:!0,get:function(){return po.WillRenameFilesRequest}});Object.defineProperty(v,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return po.DidDeleteFilesNotification}});Object.defineProperty(v,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return po.WillDeleteFilesRequest}});var nh=Uv();Object.defineProperty(v,"UniquenessLevel",{enumerable:!0,get:function(){return nh.UniquenessLevel}});Object.defineProperty(v,"MonikerKind",{enumerable:!0,get:function(){return nh.MonikerKind}});Object.defineProperty(v,"MonikerRequest",{enumerable:!0,get:function(){return nh.MonikerRequest}});var ih=Vv();Object.defineProperty(v,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return ih.TypeHierarchyPrepareRequest}});Object.defineProperty(v,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return ih.TypeHierarchySubtypesRequest}});Object.defineProperty(v,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return ih.TypeHierarchySupertypesRequest}});var Ix=Hv();Object.defineProperty(v,"InlineValueRequest",{enumerable:!0,get:function(){return Ix.InlineValueRequest}});Object.defineProperty(v,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return Ix.InlineValueRefreshRequest}});var oh=Xv();Object.defineProperty(v,"InlayHintRequest",{enumerable:!0,get:function(){return oh.InlayHintRequest}});Object.defineProperty(v,"InlayHintResolveRequest",{enumerable:!0,get:function(){return oh.InlayHintResolveRequest}});Object.defineProperty(v,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return oh.InlayHintRefreshRequest}});var Xa=nR();Object.defineProperty(v,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Xa.DiagnosticServerCancellationData}});Object.defineProperty(v,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Xa.DocumentDiagnosticReportKind}});Object.defineProperty(v,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Xa.DocumentDiagnosticRequest}});Object.defineProperty(v,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Xa.WorkspaceDiagnosticRequest}});Object.defineProperty(v,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Xa.DiagnosticRefreshRequest}});var bn=cR();Object.defineProperty(v,"NotebookCellKind",{enumerable:!0,get:function(){return bn.NotebookCellKind}});Object.defineProperty(v,"ExecutionSummary",{enumerable:!0,get:function(){return bn.ExecutionSummary}});Object.defineProperty(v,"NotebookCell",{enumerable:!0,get:function(){return bn.NotebookCell}});Object.defineProperty(v,"NotebookDocument",{enumerable:!0,get:function(){return bn.NotebookDocument}});Object.defineProperty(v,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return bn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(v,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidOpenNotebookDocumentNotification}});Object.defineProperty(v,"NotebookCellArrayChange",{enumerable:!0,get:function(){return bn.NotebookCellArrayChange}});Object.defineProperty(v,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidChangeNotebookDocumentNotification}});Object.defineProperty(v,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidSaveNotebookDocumentNotification}});Object.defineProperty(v,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidCloseNotebookDocumentNotification}});var lk=pR();Object.defineProperty(v,"InlineCompletionRequest",{enumerable:!0,get:function(){return lk.InlineCompletionRequest}});var Jm;(function(t){function e(r){let n=r;return Xt.string(n)||Xt.string(n.language)||Xt.string(n.scheme)||Xt.string(n.pattern)}t.is=e})(Jm||(v.TextDocumentFilter=Jm={}));var Qm;(function(t){function e(r){let n=r;return Xt.objectLiteral(n)&&(Xt.string(n.notebookType)||Xt.string(n.scheme)||Xt.string(n.pattern))}t.is=e})(Qm||(v.NotebookDocumentFilter=Qm={}));var Zm;(function(t){function e(r){let n=r;return Xt.objectLiteral(n)&&(Xt.string(n.notebook)||Qm.is(n.notebook))&&(n.language===void 0||Xt.string(n.language))}t.is=e})(Zm||(v.NotebookCellTextDocumentFilter=Zm={}));var eh;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Xt.string(n)&&!Jm.is(n)&&!Zm.is(n))return!1;return!0}t.is=e})(eh||(v.DocumentSelector=eh={}));var hR;(function(t){t.method="client/registerCapability",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(hR||(v.RegistrationRequest=hR={}));var gR;(function(t){t.method="client/unregisterCapability",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(gR||(v.UnregistrationRequest=gR={}));var TR;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(TR||(v.ResourceOperationKind=TR={}));var yR;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(yR||(v.FailureHandlingKind=yR={}));var _R;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(_R||(v.PositionEncodingKind=_R={}));var vR;(function(t){function e(r){let n=r;return n&&Xt.string(n.id)&&n.id.length>0}t.hasId=e})(vR||(v.StaticRegistrationOptions=vR={}));var RR;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||eh.is(n.documentSelector))}t.is=e})(RR||(v.TextDocumentRegistrationOptions=RR={}));var xR;(function(t){function e(n){let i=n;return Xt.objectLiteral(i)&&(i.workDoneProgress===void 0||Xt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Xt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(xR||(v.WorkDoneProgressOptions=xR={}));var NR;(function(t){t.method="initialize",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(NR||(v.InitializeRequest=NR={}));var OR;(function(t){t.unknownProtocolVersion=1})(OR||(v.InitializeErrorCodes=OR={}));var IR;(function(t){t.method="initialized",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(IR||(v.InitializedNotification=IR={}));var ER;(function(t){t.method="shutdown",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType0(t.method)})(ER||(v.ShutdownRequest=ER={}));var SR;(function(t){t.method="exit",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType0(t.method)})(SR||(v.ExitNotification=SR={}));var AR;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(AR||(v.DidChangeConfigurationNotification=AR={}));var DR;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(DR||(v.MessageType=DR={}));var CR;(function(t){t.method="window/showMessage",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(CR||(v.ShowMessageNotification=CR={}));var bR;(function(t){t.method="window/showMessageRequest",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(bR||(v.ShowMessageRequest=bR={}));var kR;(function(t){t.method="window/logMessage",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(kR||(v.LogMessageNotification=kR={}));var LR;(function(t){t.method="telemetry/event",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(LR||(v.TelemetryEventNotification=LR={}));var wR;(function(t){t.None=0,t.Full=1,t.Incremental=2})(wR||(v.TextDocumentSyncKind=wR={}));var $R;(function(t){t.method="textDocument/didOpen",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})($R||(v.DidOpenTextDocumentNotification=$R={}));var PR;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(PR||(v.TextDocumentContentChangeEvent=PR={}));var MR;(function(t){t.method="textDocument/didChange",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(MR||(v.DidChangeTextDocumentNotification=MR={}));var FR;(function(t){t.method="textDocument/didClose",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(FR||(v.DidCloseTextDocumentNotification=FR={}));var UR;(function(t){t.method="textDocument/didSave",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(UR||(v.DidSaveTextDocumentNotification=UR={}));var BR;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(BR||(v.TextDocumentSaveReason=BR={}));var WR;(function(t){t.method="textDocument/willSave",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(WR||(v.WillSaveTextDocumentNotification=WR={}));var GR;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(GR||(v.WillSaveTextDocumentWaitUntilRequest=GR={}));var VR;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(VR||(v.DidChangeWatchedFilesNotification=VR={}));var jR;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(jR||(v.FileChangeType=jR={}));var qR;(function(t){function e(r){let n=r;return Xt.objectLiteral(n)&&(mR.URI.is(n.baseUri)||mR.WorkspaceFolder.is(n.baseUri))&&Xt.string(n.pattern)}t.is=e})(qR||(v.RelativePattern=qR={}));var HR;(function(t){t.Create=1,t.Change=2,t.Delete=4})(HR||(v.WatchKind=HR={}));var KR;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(KR||(v.PublishDiagnosticsNotification=KR={}));var zR;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(zR||(v.CompletionTriggerKind=zR={}));var YR;(function(t){t.method="textDocument/completion",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(YR||(v.CompletionRequest=YR={}));var XR;(function(t){t.method="completionItem/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(XR||(v.CompletionResolveRequest=XR={}));var JR;(function(t){t.method="textDocument/hover",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(JR||(v.HoverRequest=JR={}));var QR;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(QR||(v.SignatureHelpTriggerKind=QR={}));var ZR;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ZR||(v.SignatureHelpRequest=ZR={}));var ex;(function(t){t.method="textDocument/definition",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ex||(v.DefinitionRequest=ex={}));var tx;(function(t){t.method="textDocument/references",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(tx||(v.ReferencesRequest=tx={}));var rx;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(rx||(v.DocumentHighlightRequest=rx={}));var nx;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(nx||(v.DocumentSymbolRequest=nx={}));var ix;(function(t){t.method="textDocument/codeAction",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ix||(v.CodeActionRequest=ix={}));var ox;(function(t){t.method="codeAction/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ox||(v.CodeActionResolveRequest=ox={}));var sx;(function(t){t.method="workspace/symbol",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(sx||(v.WorkspaceSymbolRequest=sx={}));var ax;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ax||(v.WorkspaceSymbolResolveRequest=ax={}));var lx;(function(t){t.method="textDocument/codeLens",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(lx||(v.CodeLensRequest=lx={}));var ux;(function(t){t.method="codeLens/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ux||(v.CodeLensResolveRequest=ux={}));var cx;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType0(t.method)})(cx||(v.CodeLensRefreshRequest=cx={}));var fx;(function(t){t.method="textDocument/documentLink",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(fx||(v.DocumentLinkRequest=fx={}));var dx;(function(t){t.method="documentLink/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(dx||(v.DocumentLinkResolveRequest=dx={}));var px;(function(t){t.method="textDocument/formatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(px||(v.DocumentFormattingRequest=px={}));var mx;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(mx||(v.DocumentRangeFormattingRequest=mx={}));var hx;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(hx||(v.DocumentRangesFormattingRequest=hx={}));var gx;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(gx||(v.DocumentOnTypeFormattingRequest=gx={}));var Tx;(function(t){t.Identifier=1})(Tx||(v.PrepareSupportDefaultBehavior=Tx={}));var yx;(function(t){t.method="textDocument/rename",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(yx||(v.RenameRequest=yx={}));var _x;(function(t){t.method="textDocument/prepareRename",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(_x||(v.PrepareRenameRequest=_x={}));var vx;(function(t){t.method="workspace/executeCommand",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(vx||(v.ExecuteCommandRequest=vx={}));var Rx;(function(t){t.method="workspace/applyEdit",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType("workspace/applyEdit")})(Rx||(v.ApplyWorkspaceEditRequest=Rx={}))});var Ax=X(yc=>{"use strict";Object.defineProperty(yc,"__esModule",{value:!0});yc.createProtocolConnection=void 0;var Sx=fo();function uk(t,e,r,n){return Sx.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Sx.createMessageConnection)(t,e,r,n)}yc.createProtocolConnection=uk});var Cx=X(kr=>{"use strict";var ck=kr&&kr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),_c=kr&&kr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&ck(e,t,r)};Object.defineProperty(kr,"__esModule",{value:!0});kr.LSPErrorCodes=kr.createProtocolConnection=void 0;_c(fo(),kr);_c(rc(),kr);_c(at(),kr);_c(Ex(),kr);var fk=Ax();Object.defineProperty(kr,"createProtocolConnection",{enumerable:!0,get:function(){return fk.createProtocolConnection}});var Dx;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(Dx||(kr.LSPErrorCodes=Dx={}))});var gt=X(kn=>{"use strict";var dk=kn&&kn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),bx=kn&&kn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&dk(e,t,r)};Object.defineProperty(kn,"__esModule",{value:!0});kn.createProtocolConnection=void 0;var pk=Vm();bx(Vm(),kn);bx(Cx(),kn);function mk(t,e,r,n){return(0,pk.createMessageConnection)(t,e,r,n)}kn.createProtocolConnection=mk});var sh=X(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});nn.generateUuid=nn.parse=nn.isUUID=nn.v4=nn.empty=void 0;var Ja=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},Qa=class t extends Ja{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};Qa._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Qa._timeHighBits=["8","9","a","b"];nn.empty=new Ja("00000000-0000-0000-0000-000000000000");function kx(){return new Qa}nn.v4=kx;var hk=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Lx(t){return hk.test(t)}nn.isUUID=Lx;function gk(t){if(!Lx(t))throw new Error("invalid uuid");return new Ja(t)}nn.parse=gk;function Tk(){return kx().asHex()}nn.generateUuid=Tk});var wx=X($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.attachPartialResult=$i.ProgressFeature=$i.attachWorkDone=void 0;var wi=gt(),yk=sh(),mo=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,{kind:"end"})}};mo.Instances=new Map;var vc=class extends mo{constructor(e,r){super(e,r),this._source=new wi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},Za=class{constructor(){}begin(){}report(){}done(){}},Rc=class extends Za{constructor(){super(),this._source=new wi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function _k(t,e){if(e===void 0||e.workDoneToken===void 0)return new Za;let r=e.workDoneToken;return delete e.workDoneToken,new mo(t,r)}$i.attachWorkDone=_k;var vk=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var r;super.initialize(e),((r=e==null?void 0:e.window)==null?void 0:r.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(wi.WorkDoneProgressCancelNotification.type,n=>{let i=mo.Instances.get(n.token);(i instanceof vc||i instanceof Rc)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Za:new mo(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,yk.generateUuid)();return this.connection.sendRequest(wi.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new vc(this.connection,e))}else return Promise.resolve(new Rc)}};$i.ProgressFeature=vk;var ah;(function(t){t.type=new wi.ProgressType})(ah||(ah={}));var lh=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(ah.type,this._token,e)}};function Rk(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new lh(t,r)}$i.attachPartialResult=Rk});var $x=X(xc=>{"use strict";Object.defineProperty(xc,"__esModule",{value:!0});xc.ConfigurationFeature=void 0;var xk=gt(),Nk=Lu(),Ok=t=>class extends t{getConfiguration(e){return e?Nk.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(xk.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};xc.ConfigurationFeature=Ok});var Px=X(Oc=>{"use strict";Object.defineProperty(Oc,"__esModule",{value:!0});Oc.WorkspaceFoldersFeature=void 0;var Nc=gt(),Ik=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Nc.Emitter,this.connection.onNotification(Nc.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){var n,i;super.fillServerCapabilities(e);let r=(i=(n=e.workspace)==null?void 0:n.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Nc.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Nc.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Oc.WorkspaceFoldersFeature=Ik});var Mx=X(Ic=>{"use strict";Object.defineProperty(Ic,"__esModule",{value:!0});Ic.CallHierarchyFeature=void 0;var uh=gt(),Ek=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(uh.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=uh.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=uh.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ic.CallHierarchyFeature=Ek});var fh=X(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.SemanticTokensBuilder=Pi.SemanticTokensDiff=Pi.SemanticTokensFeature=void 0;var Ec=gt(),Sk=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Ec.SemanticTokensRefreshRequest.type),on:e=>{let r=Ec.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=Ec.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=Ec.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Pi.SemanticTokensFeature=Sk;var Sc=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let s=i-n+1,a=this.modifiedSequence.slice(n,o+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};Pi.SemanticTokensDiff=Sc;var ch=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Sc(this._prevData,this._data).computeDiff()}:this.build()}};Pi.SemanticTokensBuilder=ch});var Fx=X(Ac=>{"use strict";Object.defineProperty(Ac,"__esModule",{value:!0});Ac.ShowDocumentFeature=void 0;var Ak=gt(),Dk=t=>class extends t{showDocument(e){return this.connection.sendRequest(Ak.ShowDocumentRequest.type,e)}};Ac.ShowDocumentFeature=Dk});var Ux=X(Dc=>{"use strict";Object.defineProperty(Dc,"__esModule",{value:!0});Dc.FileOperationsFeature=void 0;var Is=gt(),Ck=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Is.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Is.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Is.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Is.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Is.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Is.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Dc.FileOperationsFeature=Ck});var Bx=X(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.LinkedEditingRangeFeature=void 0;var bk=gt(),kk=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(bk.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Cc.LinkedEditingRangeFeature=kk});var Wx=X(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.TypeHierarchyFeature=void 0;var dh=gt(),Lk=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(dh.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=dh.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=dh.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};bc.TypeHierarchyFeature=Lk});var Vx=X(kc=>{"use strict";Object.defineProperty(kc,"__esModule",{value:!0});kc.InlineValueFeature=void 0;var Gx=gt(),wk=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Gx.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Gx.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};kc.InlineValueFeature=wk});var qx=X(Lc=>{"use strict";Object.defineProperty(Lc,"__esModule",{value:!0});Lc.FoldingRangeFeature=void 0;var jx=gt(),$k=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(jx.FoldingRangeRefreshRequest.type),on:e=>{let r=jx.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Lc.FoldingRangeFeature=$k});var Hx=X(wc=>{"use strict";Object.defineProperty(wc,"__esModule",{value:!0});wc.InlayHintFeature=void 0;var ph=gt(),Pk=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(ph.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(ph.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(ph.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};wc.InlayHintFeature=Pk});var Kx=X($c=>{"use strict";Object.defineProperty($c,"__esModule",{value:!0});$c.DiagnosticFeature=void 0;var el=gt(),Mk=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(el.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(el.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(el.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(el.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(el.WorkspaceDiagnosticRequest.partialResult,r)))}}};$c.DiagnosticFeature=Mk});var hh=X(Pc=>{"use strict";Object.defineProperty(Pc,"__esModule",{value:!0});Pc.TextDocuments=void 0;var ho=gt(),mh=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new ho.Emitter,this._onDidOpen=new ho.Emitter,this._onDidClose=new ho.Emitter,this._onDidSave=new ho.Emitter,this._onWillSave=new ho.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=ho.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let s=Object.freeze({document:o});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,o,s),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),ho.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Pc.TextDocuments=mh});var Th=X(Es=>{"use strict";Object.defineProperty(Es,"__esModule",{value:!0});Es.NotebookDocuments=Es.NotebookSyncFeature=void 0;var on=gt(),zx=hh(),Fk=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(on.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(on.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(on.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(on.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};Es.NotebookSyncFeature=Fk;var Mc=class t{onDidOpenTextDocument(e){return this.openHandler=e,on.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,on.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,on.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Mc.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var gh=class{constructor(e){e instanceof zx.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new zx.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new on.Emitter,this._onDidChange=new on.Emitter,this._onDidSave=new on.Emitter,this._onDidClose=new on.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Mc,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let s=o.metadata,a=!1,l=i.change;l.metadata!==void 0&&(a=!0,o.metadata=l.metadata);let u=[],c=[],f=[],d=[];if(l.cells!==void 0){let I=l.cells;if(I.structure!==void 0){let y=I.structure.array;if(o.cells.splice(y.start,y.deleteCount,...y.cells!==void 0?y.cells:[]),I.structure.didOpen!==void 0)for(let T of I.structure.didOpen)r.openTextDocument({textDocument:T}),u.push(T.uri);if(I.structure.didClose)for(let T of I.structure.didClose)r.closeTextDocument({textDocument:T}),c.push(T.uri)}if(I.data!==void 0){let y=new Map(I.data.map(T=>[T.document,T]));for(let T=0;T<=o.cells.length;T++){let k=y.get(o.cells[T].document);if(k!==void 0){let B=o.cells.splice(T,1,k);if(f.push({old:B[0],new:k}),y.delete(k.document),y.size===0)break}}}if(I.textContent!==void 0)for(let y of I.textContent)r.changeTextDocument({textDocument:y.document,contentChanges:y.changes}),d.push(y.document.uri)}this.updateCellMap(o);let h={notebookDocument:o};a&&(h.metadata={old:s,new:o.metadata});let _=[];for(let I of u)_.push(this.getNotebookCell(I));let x=[];for(let I of c)x.push(this.getNotebookCell(I));let E=[];for(let I of d)E.push(this.getNotebookCell(I));(_.length>0||x.length>0||f.length>0||E.length>0)&&(h.cells={added:_,removed:x,changed:{data:f,textContent:E}}),(h.metadata!==void 0||h.cells!==void 0)&&this._onDidChange.fire(h)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let s of i.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of o.cells)this.notebookCellMap.delete(s.document)}})),on.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};Es.NotebookDocuments=gh});var Yx=X(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0});Fc.MonikerFeature=void 0;var Uk=gt(),Bk=t=>class extends t{get moniker(){return{on:e=>{let r=Uk.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Fc.MonikerFeature=Bk});var Nh=X(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.createConnection=ke.combineFeatures=ke.combineNotebooksFeatures=ke.combineLanguagesFeatures=ke.combineWorkspaceFeatures=ke.combineWindowFeatures=ke.combineClientFeatures=ke.combineTracerFeatures=ke.combineTelemetryFeatures=ke.combineConsoleFeatures=ke._NotebooksImpl=ke._LanguagesImpl=ke.BulkUnregistration=ke.BulkRegistration=ke.ErrorMessageTracker=void 0;var Y=gt(),sn=Lu(),_h=sh(),pe=wx(),Wk=$x(),Gk=Px(),Vk=Mx(),jk=fh(),qk=Fx(),Hk=Ux(),Kk=Bx(),zk=Wx(),Yk=Vx(),Xk=qx(),Jk=Hx(),Qk=Kx(),Zk=Th(),eL=Yx();function yh(t){if(t!==null)return t}var vh=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};ke.ErrorMessageTracker=vh;var Uc=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(Y.MessageType.Error,e)}warn(e){this.send(Y.MessageType.Warning,e)}info(e){this.send(Y.MessageType.Info,e)}log(e){this.send(Y.MessageType.Log,e)}debug(e){this.send(Y.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(Y.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,Y.RAL)().console.error("Sending log message failed")})}},Rh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:Y.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(yh)}showWarningMessage(e,...r){let n={type:Y.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(yh)}showInformationMessage(e,...r){let n={type:Y.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(yh)}},Xx=(0,qk.ShowDocumentFeature)((0,pe.ProgressFeature)(Rh)),Jx;(function(t){function e(){return new Bc}t.create=e})(Jx||(ke.BulkRegistration=Jx={}));var Bc=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=sn.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=_h.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},Qx;(function(t){function e(){return new tl(void 0,[])}t.create=e})(Qx||(ke.BulkUnregistration=Qx={}));var tl=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(Y.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=sn.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(Y.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Wc=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Bc?this.registerMany(e):e instanceof tl?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=sn.string(r)?r:r.method,o=_h.generateUuid(),s={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(Y.RegistrationRequest.type,s).then(a=>(e.add({id:o,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=sn.string(e)?e:e.method,i=_h.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(Y.RegistrationRequest.type,o).then(s=>Y.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(Y.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(Y.RegistrationRequest.type,r).then(()=>new tl(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},xh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(Y.ApplyWorkspaceEditRequest.type,n)}},Zx=(0,Hk.FileOperationsFeature)((0,Gk.WorkspaceFoldersFeature)((0,Wk.ConfigurationFeature)(xh))),Gc=class{constructor(){this._trace=Y.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==Y.Trace.Off&&this.connection.sendNotification(Y.LogTraceNotification.type,{message:e,verbose:this._trace===Y.Trace.Verbose?r:void 0}).catch(()=>{})}},Vc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(Y.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},jc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,pe.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,pe.attachPartialResult)(this.connection,r)}};ke._LanguagesImpl=jc;var eN=(0,Xk.FoldingRangeFeature)((0,eL.MonikerFeature)((0,Qk.DiagnosticFeature)((0,Jk.InlayHintFeature)((0,Yk.InlineValueFeature)((0,zk.TypeHierarchyFeature)((0,Kk.LinkedEditingRangeFeature)((0,jk.SemanticTokensFeature)((0,Vk.CallHierarchyFeature)(jc))))))))),qc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,pe.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,pe.attachPartialResult)(this.connection,r)}};ke._NotebooksImpl=qc;var tN=(0,Zk.NotebookSyncFeature)(qc);function rN(t,e){return function(r){return e(t(r))}}ke.combineConsoleFeatures=rN;function nN(t,e){return function(r){return e(t(r))}}ke.combineTelemetryFeatures=nN;function iN(t,e){return function(r){return e(t(r))}}ke.combineTracerFeatures=iN;function oN(t,e){return function(r){return e(t(r))}}ke.combineClientFeatures=oN;function sN(t,e){return function(r){return e(t(r))}}ke.combineWindowFeatures=sN;function aN(t,e){return function(r){return e(t(r))}}ke.combineWorkspaceFeatures=aN;function lN(t,e){return function(r){return e(t(r))}}ke.combineLanguagesFeatures=lN;function uN(t,e){return function(r){return e(t(r))}}ke.combineNotebooksFeatures=uN;function tL(t,e){function r(i,o,s){return i&&o?s(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,rN),tracer:r(t.tracer,e.tracer,iN),telemetry:r(t.telemetry,e.telemetry,nN),client:r(t.client,e.client,oN),window:r(t.window,e.window,sN),workspace:r(t.workspace,e.workspace,aN),languages:r(t.languages,e.languages,lN),notebooks:r(t.notebooks,e.notebooks,uN)}}ke.combineFeatures=tL;function rL(t,e,r){let n=r&&r.console?new(r.console(Uc)):new Uc,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(Gc)):new Gc,s=r&&r.telemetry?new(r.telemetry(Vc)):new Vc,a=r&&r.client?new(r.client(Wc)):new Wc,l=r&&r.window?new(r.window(Xx)):new Xx,u=r&&r.workspace?new(r.workspace(Zx)):new Zx,c=r&&r.languages?new(r.languages(eN)):new eN,f=r&&r.notebooks?new(r.notebooks(tN)):new tN,d=[n,o,s,a,l,u,c,f];function h(y){return y instanceof Promise?y:sn.thenable(y)?new Promise((T,k)=>{y.then(B=>T(B),B=>k(B))}):Promise.resolve(y)}let _,x,E,I={listen:()=>i.listen(),sendRequest:(y,...T)=>i.sendRequest(sn.string(y)?y:y.method,...T),onRequest:(y,T)=>i.onRequest(y,T),sendNotification:(y,T)=>{let k=sn.string(y)?y:y.method;return i.sendNotification(k,T)},onNotification:(y,T)=>i.onNotification(y,T),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:y=>(x=y,{dispose:()=>{x=void 0}}),onInitialized:y=>i.onNotification(Y.InitializedNotification.type,y),onShutdown:y=>(_=y,{dispose:()=>{_=void 0}}),onExit:y=>(E=y,{dispose:()=>{E=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return o},get client(){return a},get window(){return l},get workspace(){return u},get languages(){return c},get notebooks(){return f},onDidChangeConfiguration:y=>i.onNotification(Y.DidChangeConfigurationNotification.type,y),onDidChangeWatchedFiles:y=>i.onNotification(Y.DidChangeWatchedFilesNotification.type,y),__textDocumentSync:void 0,onDidOpenTextDocument:y=>i.onNotification(Y.DidOpenTextDocumentNotification.type,y),onDidChangeTextDocument:y=>i.onNotification(Y.DidChangeTextDocumentNotification.type,y),onDidCloseTextDocument:y=>i.onNotification(Y.DidCloseTextDocumentNotification.type,y),onWillSaveTextDocument:y=>i.onNotification(Y.WillSaveTextDocumentNotification.type,y),onWillSaveTextDocumentWaitUntil:y=>i.onRequest(Y.WillSaveTextDocumentWaitUntilRequest.type,y),onDidSaveTextDocument:y=>i.onNotification(Y.DidSaveTextDocumentNotification.type,y),sendDiagnostics:y=>i.sendNotification(Y.PublishDiagnosticsNotification.type,y),onHover:y=>i.onRequest(Y.HoverRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onCompletion:y=>i.onRequest(Y.CompletionRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onCompletionResolve:y=>i.onRequest(Y.CompletionResolveRequest.type,y),onSignatureHelp:y=>i.onRequest(Y.SignatureHelpRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onDeclaration:y=>i.onRequest(Y.DeclarationRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDefinition:y=>i.onRequest(Y.DefinitionRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onTypeDefinition:y=>i.onRequest(Y.TypeDefinitionRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onImplementation:y=>i.onRequest(Y.ImplementationRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onReferences:y=>i.onRequest(Y.ReferencesRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDocumentHighlight:y=>i.onRequest(Y.DocumentHighlightRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDocumentSymbol:y=>i.onRequest(Y.DocumentSymbolRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onWorkspaceSymbol:y=>i.onRequest(Y.WorkspaceSymbolRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onWorkspaceSymbolResolve:y=>i.onRequest(Y.WorkspaceSymbolResolveRequest.type,y),onCodeAction:y=>i.onRequest(Y.CodeActionRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onCodeActionResolve:y=>i.onRequest(Y.CodeActionResolveRequest.type,(T,k)=>y(T,k)),onCodeLens:y=>i.onRequest(Y.CodeLensRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onCodeLensResolve:y=>i.onRequest(Y.CodeLensResolveRequest.type,(T,k)=>y(T,k)),onDocumentFormatting:y=>i.onRequest(Y.DocumentFormattingRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onDocumentRangeFormatting:y=>i.onRequest(Y.DocumentRangeFormattingRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onDocumentOnTypeFormatting:y=>i.onRequest(Y.DocumentOnTypeFormattingRequest.type,(T,k)=>y(T,k)),onRenameRequest:y=>i.onRequest(Y.RenameRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onPrepareRename:y=>i.onRequest(Y.PrepareRenameRequest.type,(T,k)=>y(T,k)),onDocumentLinks:y=>i.onRequest(Y.DocumentLinkRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDocumentLinkResolve:y=>i.onRequest(Y.DocumentLinkResolveRequest.type,(T,k)=>y(T,k)),onDocumentColor:y=>i.onRequest(Y.DocumentColorRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onColorPresentation:y=>i.onRequest(Y.ColorPresentationRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onFoldingRanges:y=>i.onRequest(Y.FoldingRangeRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onSelectionRanges:y=>i.onRequest(Y.SelectionRangeRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onExecuteCommand:y=>i.onRequest(Y.ExecuteCommandRequest.type,(T,k)=>y(T,k,(0,pe.attachWorkDone)(i,T),void 0)),dispose:()=>i.dispose()};for(let y of d)y.attach(I);return i.onRequest(Y.InitializeRequest.type,y=>{e.initialize(y),sn.string(y.trace)&&(o.trace=Y.Trace.fromString(y.trace));for(let T of d)T.initialize(y.capabilities);if(x){let T=x(y,new Y.CancellationTokenSource().token,(0,pe.attachWorkDone)(i,y),void 0);return h(T).then(k=>{if(k instanceof Y.ResponseError)return k;let B=k;B||(B={capabilities:{}});let Q=B.capabilities;Q||(Q={},B.capabilities=Q),Q.textDocumentSync===void 0||Q.textDocumentSync===null?Q.textDocumentSync=sn.number(I.__textDocumentSync)?I.__textDocumentSync:Y.TextDocumentSyncKind.None:!sn.number(Q.textDocumentSync)&&!sn.number(Q.textDocumentSync.change)&&(Q.textDocumentSync.change=sn.number(I.__textDocumentSync)?I.__textDocumentSync:Y.TextDocumentSyncKind.None);for(let ae of d)ae.fillServerCapabilities(Q);return B})}else{let T={capabilities:{textDocumentSync:Y.TextDocumentSyncKind.None}};for(let k of d)k.fillServerCapabilities(T.capabilities);return T}}),i.onRequest(Y.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,_)return _(new Y.CancellationTokenSource().token)}),i.onNotification(Y.ExitNotification.type,()=>{try{E&&E()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(Y.SetTraceNotification.type,y=>{o.trace=Y.Trace.fromString(y.value)}),I}ke.createConnection=rL});var cN=X(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.resolveModulePath=Lr.FileSystem=Lr.resolveGlobalYarnPath=Lr.resolveGlobalNodePath=Lr.resolve=Lr.uriToFilePath=void 0;var nL=require("url"),yn=require("path"),Oh=require("fs"),Ah=require("child_process");function iL(t){let e=nL.parse(t);if(e.protocol!=="file:"||!e.path)return;let r=e.path.split("/");for(var n=0,i=r.length;n<i;n++)r[n]=decodeURIComponent(r[n]);if(process.platform==="win32"&&r.length>1){let o=r[0],s=r[1];o.length===0&&s.length>1&&s[1]===":"&&r.shift()}return yn.normalize(r.join("/"))}Lr.uriToFilePath=iL;function Ih(){return process.platform==="win32"}function Hc(t,e,r,n){let i="NODE_PATH",o=["var p = process;","p.on('message',function(m){","if(m.c==='e'){","p.exit(0);","}","else if(m.c==='rs'){","try{","var r=require.resolve(m.a);","p.send({c:'r',s:true,r:r});","}","catch(err){","p.send({c:'r',s:false});","}","}","});"].join("");return new Promise((s,a)=>{let l=process.env,u=Object.create(null);Object.keys(l).forEach(c=>u[c]=l[c]),e&&Oh.existsSync(e)&&(u[i]?u[i]=e+yn.delimiter+u[i]:u[i]=e,n&&n(`NODE_PATH value is: ${u[i]}`)),u.ELECTRON_RUN_AS_NODE="1";try{let c=(0,Ah.fork)("",[],{cwd:r,env:u,execArgv:["-e",o]});if(c.pid===void 0){a(new Error(`Starting process to resolve node module  ${t} failed`));return}c.on("error",d=>{a(d)}),c.on("message",d=>{d.c==="r"&&(c.send({c:"e"}),d.s?s(d.r):a(new Error(`Failed to resolve module: ${t}`)))});let f={c:"rs",a:t};c.send(f)}catch(c){a(c)}})}Lr.resolve=Hc;function Eh(t){let e="npm",r=Object.create(null);Object.keys(process.env).forEach(o=>r[o]=process.env[o]),r.NO_UPDATE_NOTIFIER="true";let n={encoding:"utf8",env:r};Ih()&&(e="npm.cmd",n.shell=!0);let i=()=>{};try{process.on("SIGPIPE",i);let o=(0,Ah.spawnSync)(e,["config","get","prefix"],n).stdout;if(!o){t&&t("'npm config get prefix' didn't return a value.");return}let s=o.trim();return t&&t(`'npm config get prefix' value is: ${s}`),s.length>0?Ih()?yn.join(s,"node_modules"):yn.join(s,"lib","node_modules"):void 0}catch{return}finally{process.removeListener("SIGPIPE",i)}}Lr.resolveGlobalNodePath=Eh;function oL(t){let e="yarn",r={encoding:"utf8"};Ih()&&(e="yarn.cmd",r.shell=!0);let n=()=>{};try{process.on("SIGPIPE",n);let i=(0,Ah.spawnSync)(e,["global","dir","--json"],r),o=i.stdout;if(!o){t&&(t("'yarn global dir' didn't return a value."),i.stderr&&t(i.stderr));return}let s=o.trim().split(/\r?\n/);for(let a of s)try{let l=JSON.parse(a);if(l.type==="log")return yn.join(l.data,"node_modules")}catch{}return}catch{return}finally{process.removeListener("SIGPIPE",n)}}Lr.resolveGlobalYarnPath=oL;var Sh;(function(t){let e;function r(){return e!==void 0||(process.platform==="win32"?e=!1:e=!Oh.existsSync(__filename.toUpperCase())||!Oh.existsSync(__filename.toLowerCase())),e}t.isCaseSensitive=r;function n(i,o){return r()?yn.normalize(o).indexOf(yn.normalize(i))===0:yn.normalize(o).toLowerCase().indexOf(yn.normalize(i).toLowerCase())===0}t.isParent=n})(Sh||(Lr.FileSystem=Sh={}));function sL(t,e,r,n){return r?(yn.isAbsolute(r)||(r=yn.join(t,r)),Hc(e,r,r,n).then(i=>Sh.isParent(r,i)?i:Promise.reject(new Error(`Failed to load ${e} from node path location.`))).then(void 0,i=>Hc(e,Eh(n),t,n))):Hc(e,Eh(n),t,n)}Lr.resolveModulePath=sL});var Dh=X((Vj,fN)=>{"use strict";fN.exports=gt()});var dN=X(Kc=>{"use strict";Object.defineProperty(Kc,"__esModule",{value:!0});Kc.InlineCompletionFeature=void 0;var aL=gt(),lL=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(aL.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Kc.InlineCompletionFeature=lL});var hN=X(pr=>{"use strict";var uL=pr&&pr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),mN=pr&&pr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&uL(e,t,r)};Object.defineProperty(pr,"__esModule",{value:!0});pr.ProposedFeatures=pr.NotebookDocuments=pr.TextDocuments=pr.SemanticTokensBuilder=void 0;var cL=fh();Object.defineProperty(pr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return cL.SemanticTokensBuilder}});var fL=dN();mN(gt(),pr);var dL=hh();Object.defineProperty(pr,"TextDocuments",{enumerable:!0,get:function(){return dL.TextDocuments}});var pL=Th();Object.defineProperty(pr,"NotebookDocuments",{enumerable:!0,get:function(){return pL.NotebookDocuments}});mN(Nh(),pr);var pN;(function(t){t.all={__brand:"features",languages:fL.InlineCompletionFeature}})(pN||(pr.ProposedFeatures=pN={}))});var wr=X(an=>{"use strict";var mL=an&&an.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),_N=an&&an.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&mL(e,t,r)};Object.defineProperty(an,"__esModule",{value:!0});an.createConnection=an.Files=void 0;var gN=require("util"),Ch=Lu(),hL=Nh(),rl=cN(),go=Dh();_N(Dh(),an);_N(hN(),an);var TN;(function(t){t.uriToFilePath=rl.uriToFilePath,t.resolveGlobalNodePath=rl.resolveGlobalNodePath,t.resolveGlobalYarnPath=rl.resolveGlobalYarnPath,t.resolve=rl.resolve,t.resolveModulePath=rl.resolveModulePath})(TN||(an.Files=TN={}));var yN;function zc(){if(yN!==void 0)try{yN.end()}catch{}}var Ss=!1,vN;function gL(){let t="--clientProcessId";function e(r){try{let n=parseInt(r);isNaN(n)||(vN=setInterval(()=>{try{process.kill(n,0)}catch{zc(),process.exit(Ss?0:1)}},3e3))}catch{}}for(let r=2;r<process.argv.length;r++){let n=process.argv[r];if(n===t&&r+1<process.argv.length){e(process.argv[r+1]);return}else{let i=n.split("=");i[0]===t&&e(i[1])}}}gL();var TL={initialize:t=>{let e=t.processId;Ch.number(e)&&vN===void 0&&setInterval(()=>{try{process.kill(e,0)}catch{process.exit(Ss?0:1)}},3e3)},get shutdownReceived(){return Ss},set shutdownReceived(t){Ss=t},exit:t=>{zc(),process.exit(t)}};function yL(t,e,r,n){let i,o,s,a;return t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),go.ConnectionStrategy.is(t)||go.ConnectionOptions.is(t)?a=t:(o=t,s=e,a=r),_L(o,s,a,i)}an.createConnection=yL;function _L(t,e,r,n){let i=!1;if(!t&&!e&&process.argv.length>2){let l,u,c=process.argv.slice(2);for(let f=0;f<c.length;f++){let d=c[f];if(d==="--node-ipc"){t=new go.IPCMessageReader(process),e=new go.IPCMessageWriter(process);break}else if(d==="--stdio"){i=!0,t=process.stdin,e=process.stdout;break}else if(d==="--socket"){l=parseInt(c[f+1]);break}else if(d==="--pipe"){u=c[f+1];break}else{var o=d.split("=");if(o[0]==="--socket"){l=parseInt(o[1]);break}else if(o[0]==="--pipe"){u=o[1];break}}}if(l){let f=(0,go.createServerSocketTransport)(l);t=f[0],e=f[1]}else if(u){let f=(0,go.createServerPipeTransport)(u);t=f[0],e=f[1]}}var s="Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";if(!t)throw new Error("Connection input stream is not set. "+s);if(!e)throw new Error("Connection output stream is not set. "+s);if(Ch.func(t.read)&&Ch.func(t.on)){let l=t;l.on("end",()=>{zc(),process.exit(Ss?0:1)}),l.on("close",()=>{zc(),process.exit(Ss?0:1)})}let a=l=>{let u=(0,go.createProtocolConnection)(t,e,l,r);return i&&vL(l),u};return(0,hL.createConnection)(a,TL,n)}function vL(t){function e(n){return n.map(i=>typeof i=="string"?i:(0,gN.inspect)(i)).join(" ")}let r=new Map;console.assert=function(i,...o){if(!i)if(o.length===0)t.error("Assertion failed");else{let[s,...a]=o;t.error(`Assertion failed: ${s} ${e(a)}`)}},console.count=function(i="default"){var a;let o=String(i),s=(a=r.get(o))!=null?a:0;s+=1,r.set(o,s),t.log(`${o}: ${o}`)},console.countReset=function(i){i===void 0?r.clear():r.delete(String(i))},console.debug=function(...i){t.log(e(i))},console.dir=function(i,o){t.log((0,gN.inspect)(i,o))},console.log=function(...i){t.log(e(i))},console.error=function(...i){t.error(e(i))},console.trace=function(...i){let o=new Error().stack.replace(/(.+\n){2}/,""),s="Trace";i.length!==0&&(s+=`: ${e(i)}`),t.log(`${s}
${o}`)},console.warn=function(...i){t.warn(e(i))}}});var py=X(dy=>{"use strict";Object.defineProperty(dy,"__esModule",{value:!0});var cy;function fy(){if(cy===void 0)throw new Error("No runtime abstraction layer installed");return cy}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");cy=r}t.install=e})(fy||(fy={}));dy.default=fy});var gD=X(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.stringArray=Tr.array=Tr.func=Tr.error=Tr.number=Tr.string=Tr.boolean=void 0;function LW(t){return t===!0||t===!1}Tr.boolean=LW;function mD(t){return typeof t=="string"||t instanceof String}Tr.string=mD;function wW(t){return typeof t=="number"||t instanceof Number}Tr.number=wW;function $W(t){return t instanceof Error}Tr.error=$W;function PW(t){return typeof t=="function"}Tr.func=PW;function hD(t){return Array.isArray(t)}Tr.array=hD;function MW(t){return hD(t)&&t.every(e=>mD(e))}Tr.stringArray=MW});var hy=X(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.Emitter=ka.Event=void 0;var FW=py(),TD;(function(t){let e={dispose(){}};t.None=function(){return e}})(TD||(ka.Event=TD={}));var my=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,FW.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Md=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new my),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};ka.Emitter=Md;Md._noop=function(){}});var yD=X(La=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.CancellationTokenSource=La.CancellationToken=void 0;var UW=py(),BW=gD(),gy=hy(),Fd;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:gy.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:gy.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||BW.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Fd||(La.CancellationToken=Fd={}));var WW=Object.freeze(function(t,e){let r=(0,UW.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Ud=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?WW:(this._emitter||(this._emitter=new gy.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Ty=class{get token(){return this._token||(this._token=new Ud),this._token}cancel(){this._token?this._token.cancel():this._token=Fd.Cancelled}dispose(){this._token?this._token instanceof Ud&&this._token.dispose():this._token=Fd.None}};La.CancellationTokenSource=Ty});var QD=X((Pse,JD)=>{"use strict";JD.exports=wr()});var gV={};Ni(gV,{shared:()=>mp,st:()=>Vy});module.exports=ob(gV);var Zy;(function(t){(function(e){var r=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(t);typeof r.Reflect=="undefined"?r.Reflect=t:n=i(r.Reflect,n),e(n);function i(o,s){return function(a,l){typeof o[a]!="function"&&Object.defineProperty(o,a,{configurable:!0,writable:!0,value:l}),s&&s(a,l)}}})(function(e){var r=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive!="undefined"?Symbol.toPrimitive:"@@toPrimitive",o=n&&typeof Symbol.iterator!="undefined"?Symbol.iterator:"@@iterator",s=typeof Object.create=="function",a={__proto__:[]}instanceof Array,l=!s&&!a,u={create:s?function(){return Ar(Object.create(null))}:a?function(){return Ar({__proto__:null})}:function(){return Ar({})},has:l?function(A,$){return r.call(A,$)}:function(A,$){return $ in A},get:l?function(A,$){return r.call(A,$)?A[$]:void 0}:function(A,$){return A[$]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",d=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Dn(),h=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ns(),_=!f&&typeof WeakMap=="function"?WeakMap:is(),x=new _;function E(A,$,G,z){if(Ae(G)){if(!kt(A))throw new TypeError;if(!mt($))throw new TypeError;return $e(A,$)}else{if(!kt(A))throw new TypeError;if(!Ve($))throw new TypeError;if(!Ve(z)&&!Ae(z)&&!rr(z))throw new TypeError;return rr(z)&&(z=void 0),G=bt(G),W(A,$,G,z)}}e("decorate",E);function I(A,$){function G(z,Z){if(!Ve(z))throw new TypeError;if(!Ae(Z)&&!ur(Z))throw new TypeError;V(A,$,z,Z)}return G}e("metadata",I);function y(A,$,G,z){if(!Ve(G))throw new TypeError;return Ae(z)||(z=bt(z)),V(A,$,G,z)}e("defineMetadata",y);function T(A,$,G){if(!Ve($))throw new TypeError;return Ae(G)||(G=bt(G)),j(A,$,G)}e("hasMetadata",T);function k(A,$,G){if(!Ve($))throw new TypeError;return Ae(G)||(G=bt(G)),H(A,$,G)}e("hasOwnMetadata",k);function B(A,$,G){if(!Ve($))throw new TypeError;return Ae(G)||(G=bt(G)),Te(A,$,G)}e("getMetadata",B);function Q(A,$,G){if(!Ve($))throw new TypeError;return Ae(G)||(G=bt(G)),ue(A,$,G)}e("getOwnMetadata",Q);function ae(A,$){if(!Ve(A))throw new TypeError;return Ae($)||($=bt($)),F(A,$)}e("getMetadataKeys",ae);function le(A,$){if(!Ve(A))throw new TypeError;return Ae($)||($=bt($)),ve(A,$)}e("getOwnMetadataKeys",le);function Ce(A,$,G){if(!Ve($))throw new TypeError;Ae(G)||(G=bt(G));var z=L($,G,!1);if(Ae(z)||!z.delete(A))return!1;if(z.size>0)return!0;var Z=x.get($);return Z.delete(G),Z.size>0||x.delete($),!0}e("deleteMetadata",Ce);function $e(A,$){for(var G=A.length-1;G>=0;--G){var z=A[G],Z=z($);if(!Ae(Z)&&!rr(Z)){if(!mt(Z))throw new TypeError;$=Z}}return $}function W(A,$,G,z){for(var Z=A.length-1;Z>=0;--Z){var R=A[Z],b=R($,G,z);if(!Ae(b)&&!rr(b)){if(!Ve(b))throw new TypeError;z=b}}return z}function L(A,$,G){var z=x.get(A);if(Ae(z)){if(!G)return;z=new d,x.set(A,z)}var Z=z.get($);if(Ae(Z)){if(!G)return;Z=new d,z.set($,Z)}return Z}function j(A,$,G){var z=H(A,$,G);if(z)return!0;var Z=zr($);return rr(Z)?!1:j(A,Z,G)}function H(A,$,G){var z=L($,G,!1);return Ae(z)?!1:dt(z.has(A))}function Te(A,$,G){var z=H(A,$,G);if(z)return ue(A,$,G);var Z=zr($);if(!rr(Z))return Te(A,Z,G)}function ue(A,$,G){var z=L($,G,!1);if(!Ae(z))return z.get(A)}function V(A,$,G,z){var Z=L(G,z,!0);Z.set(A,$)}function F(A,$){var G=ve(A,$),z=zr(A);if(z===null)return G;var Z=F(z,$);if(Z.length<=0)return G;if(G.length<=0)return Z;for(var R=new h,b=[],P=0,M=G;P<M.length;P++){var ne=M[P],re=R.has(ne);re||(R.add(ne),b.push(ne))}for(var xe=0,je=Z;xe<je.length;xe++){var ne=je[xe],re=R.has(ne);re||(R.add(ne),b.push(ne))}return b}function ve(A,$){var G=[],z=L(A,$,!1);if(Ae(z))return G;for(var Z=z.keys(),R=Kr(Z),b=0;;){var P=xi(R);if(!P)return G.length=b,G;var M=Jn(P);try{G[b]=M}catch(ne){try{rs(R)}finally{throw ne}}b++}}function Re(A){if(A===null)return 1;switch(typeof A){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return A===null?1:6;default:return 6}}function Ae(A){return A===void 0}function rr(A){return A===null}function Ri(A){return typeof A=="symbol"}function Ve(A){return typeof A=="object"?A!==null:typeof A=="function"}function qt(A,$){switch(Re(A)){case 0:return A;case 1:return A;case 2:return A;case 3:return A;case 4:return A;case 5:return A}var G=$===3?"string":$===5?"number":"default",z=_r(A,i);if(z!==void 0){var Z=z.call(A,G);if(Ve(Z))throw new TypeError;return Z}return Xn(A,G==="default"?"number":G)}function Xn(A,$){if($==="string"){var G=A.toString;if(pt(G)){var z=G.call(A);if(!Ve(z))return z}var Z=A.valueOf;if(pt(Z)){var z=Z.call(A);if(!Ve(z))return z}}else{var Z=A.valueOf;if(pt(Z)){var z=Z.call(A);if(!Ve(z))return z}var R=A.toString;if(pt(R)){var z=R.call(A);if(!Ve(z))return z}}throw new TypeError}function dt(A){return!!A}function Ht(A){return""+A}function bt(A){var $=qt(A,3);return Ri($)?$:Ht($)}function kt(A){return Array.isArray?Array.isArray(A):A instanceof Object?A instanceof Array:Object.prototype.toString.call(A)==="[object Array]"}function pt(A){return typeof A=="function"}function mt(A){return typeof A=="function"}function ur(A){switch(Re(A)){case 3:return!0;case 4:return!0;default:return!1}}function _r(A,$){var G=A[$];if(G!=null){if(!pt(G))throw new TypeError;return G}}function Kr(A){var $=_r(A,o);if(!pt($))throw new TypeError;var G=$.call(A);if(!Ve(G))throw new TypeError;return G}function Jn(A){return A.value}function xi(A){var $=A.next();return $.done?!1:$}function rs(A){var $=A.return;$&&$.call(A)}function zr(A){var $=Object.getPrototypeOf(A);if(typeof A!="function"||A===c||$!==c)return $;var G=A.prototype,z=G&&Object.getPrototypeOf(G);if(z==null||z===Object.prototype)return $;var Z=z.constructor;return typeof Z!="function"||Z===A?$:Z}function Dn(){var A={},$=[],G=function(){function b(P,M,ne){this._index=0,this._keys=P,this._values=M,this._selector=ne}return b.prototype["@@iterator"]=function(){return this},b.prototype[o]=function(){return this},b.prototype.next=function(){var P=this._index;if(P>=0&&P<this._keys.length){var M=this._selector(this._keys[P],this._values[P]);return P+1>=this._keys.length?(this._index=-1,this._keys=$,this._values=$):this._index++,{value:M,done:!1}}return{value:void 0,done:!0}},b.prototype.throw=function(P){throw this._index>=0&&(this._index=-1,this._keys=$,this._values=$),P},b.prototype.return=function(P){return this._index>=0&&(this._index=-1,this._keys=$,this._values=$),{value:P,done:!0}},b}();return function(){function b(){this._keys=[],this._values=[],this._cacheKey=A,this._cacheIndex=-2}return Object.defineProperty(b.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),b.prototype.has=function(P){return this._find(P,!1)>=0},b.prototype.get=function(P){var M=this._find(P,!1);return M>=0?this._values[M]:void 0},b.prototype.set=function(P,M){var ne=this._find(P,!0);return this._values[ne]=M,this},b.prototype.delete=function(P){var M=this._find(P,!1);if(M>=0){for(var ne=this._keys.length,re=M+1;re<ne;re++)this._keys[re-1]=this._keys[re],this._values[re-1]=this._values[re];return this._keys.length--,this._values.length--,P===this._cacheKey&&(this._cacheKey=A,this._cacheIndex=-2),!0}return!1},b.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=A,this._cacheIndex=-2},b.prototype.keys=function(){return new G(this._keys,this._values,z)},b.prototype.values=function(){return new G(this._keys,this._values,Z)},b.prototype.entries=function(){return new G(this._keys,this._values,R)},b.prototype["@@iterator"]=function(){return this.entries()},b.prototype[o]=function(){return this.entries()},b.prototype._find=function(P,M){return this._cacheKey!==P&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=P)),this._cacheIndex<0&&M&&(this._cacheIndex=this._keys.length,this._keys.push(P),this._values.push(void 0)),this._cacheIndex},b}();function z(b,P){return b}function Z(b,P){return P}function R(b,P){return[b,P]}}function ns(){return function(){function A(){this._map=new d}return Object.defineProperty(A.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),A.prototype.has=function($){return this._map.has($)},A.prototype.add=function($){return this._map.set($,$),this},A.prototype.delete=function($){return this._map.delete($)},A.prototype.clear=function(){this._map.clear()},A.prototype.keys=function(){return this._map.keys()},A.prototype.values=function(){return this._map.values()},A.prototype.entries=function(){return this._map.entries()},A.prototype["@@iterator"]=function(){return this.keys()},A.prototype[o]=function(){return this.keys()},A}()}function is(){var A=16,$=u.create(),G=z();return function(){function M(){this._key=z()}return M.prototype.has=function(ne){var re=Z(ne,!1);return re!==void 0?u.has(re,this._key):!1},M.prototype.get=function(ne){var re=Z(ne,!1);return re!==void 0?u.get(re,this._key):void 0},M.prototype.set=function(ne,re){var xe=Z(ne,!0);return xe[this._key]=re,this},M.prototype.delete=function(ne){var re=Z(ne,!1);return re!==void 0?delete re[this._key]:!1},M.prototype.clear=function(){this._key=z()},M}();function z(){var M;do M="@@WeakMap@@"+P();while(u.has($,M));return $[M]=!0,M}function Z(M,ne){if(!r.call(M,G)){if(!ne)return;Object.defineProperty(M,G,{value:u.create()})}return M[G]}function R(M,ne){for(var re=0;re<ne;++re)M[re]=Math.random()*255|0;return M}function b(M){return typeof Uint8Array=="function"?typeof crypto!="undefined"?crypto.getRandomValues(new Uint8Array(M)):typeof msCrypto!="undefined"?msCrypto.getRandomValues(new Uint8Array(M)):R(new Uint8Array(M),M):R(new Array(M),M)}function P(){var M=b(A);M[6]=M[6]&79|64,M[8]=M[8]&191|128;for(var ne="",re=0;re<A;++re){var xe=M[re];(re===4||re===6||re===8)&&(ne+="-"),xe<16&&(ne+="0"),ne+=xe.toString(16).toLowerCase()}return ne}}function Ar(A){return A.__=void 0,delete A.__,A}})})(Zy||(Zy={}));var Bs=Kt(wr(),1);var lt={};Ni(lt,{AbstractElement:()=>kh,AbstractRule:()=>ol,AbstractType:()=>sl,Action:()=>sg,Alternatives:()=>ag,ArrayLiteral:()=>Lh,ArrayType:()=>wh,Assignment:()=>lg,BooleanLiteral:()=>Ph,CharacterRange:()=>ug,Condition:()=>Yc,Conjunction:()=>Fh,CrossReference:()=>fg,Disjunction:()=>Bh,EndOfFile:()=>dg,Grammar:()=>Gh,GrammarImport:()=>xN,Group:()=>mg,InferredType:()=>Vh,Interface:()=>jh,Keyword:()=>hg,LangiumGrammarAstReflection:()=>As,LangiumGrammarTerminals:()=>RL,NamedArgument:()=>NN,NegatedToken:()=>gg,Negation:()=>qh,NumberLiteral:()=>Kh,Parameter:()=>zh,ParameterReference:()=>Yh,ParserRule:()=>Jh,ReferenceType:()=>Qh,RegexToken:()=>yg,ReturnType:()=>ON,RuleCall:()=>vg,SimpleType:()=>tg,StringLiteral:()=>rg,TerminalAlternatives:()=>Rg,TerminalGroup:()=>Ng,TerminalRule:()=>Jc,TerminalRuleCall:()=>Ig,Type:()=>ng,TypeAttribute:()=>IN,TypeDefinition:()=>bh,UnionType:()=>ig,UnorderedGroup:()=>Eg,UntilToken:()=>Sg,ValueLiteral:()=>Xc,Wildcard:()=>Dg,isAbstractElement:()=>yo,isAbstractRule:()=>xL,isAbstractType:()=>NL,isAction:()=>Rn,isAlternatives:()=>Ds,isArrayLiteral:()=>AL,isArrayType:()=>$h,isAssignment:()=>mr,isBooleanLiteral:()=>Mh,isCharacterRange:()=>cg,isCondition:()=>OL,isConjunction:()=>Uh,isCrossReference:()=>xn,isDisjunction:()=>Wh,isEndOfFile:()=>pg,isFeatureName:()=>IL,isGrammar:()=>DL,isGrammarImport:()=>CL,isGroup:()=>ln,isInferredType:()=>Qc,isInterface:()=>Zc,isKeyword:()=>ir,isNamedArgument:()=>bL,isNegatedToken:()=>Tg,isNegation:()=>Hh,isNumberLiteral:()=>kL,isParameter:()=>LL,isParameterReference:()=>Xh,isParserRule:()=>It,isPrimitiveType:()=>RN,isReferenceType:()=>Zh,isRegexToken:()=>_g,isReturnType:()=>eg,isRuleCall:()=>Pr,isSimpleType:()=>ef,isStringLiteral:()=>wL,isTerminalAlternatives:()=>xg,isTerminalGroup:()=>Og,isTerminalRule:()=>$r,isTerminalRuleCall:()=>tf,isType:()=>al,isTypeAttribute:()=>$L,isTypeDefinition:()=>EL,isUnionType:()=>og,isUnorderedGroup:()=>Cs,isUntilToken:()=>Ag,isValueLiteral:()=>SL,isWildcard:()=>Cg,reflection:()=>de});function Be(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function Tt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function nl(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function _n(t){return typeof t=="object"&&t!==null&&Be(t.container)&&Tt(t.reference)&&typeof t.message=="string"}var To=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Be(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),i=[];for(let o of n)this.isSubtype(o,e)&&i.push(o);return this.allSubtypes[e]=i,i}}};function vr(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function vn(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function il(t){return vr(t)&&typeof t.fullText=="string"}var RL={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},ol="AbstractRule";function xL(t){return de.isInstance(t,ol)}var sl="AbstractType";function NL(t){return de.isInstance(t,sl)}var Yc="Condition";function OL(t){return de.isInstance(t,Yc)}function IL(t){return RN(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function RN(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var bh="TypeDefinition";function EL(t){return de.isInstance(t,bh)}var Xc="ValueLiteral";function SL(t){return de.isInstance(t,Xc)}var kh="AbstractElement";function yo(t){return de.isInstance(t,kh)}var Lh="ArrayLiteral";function AL(t){return de.isInstance(t,Lh)}var wh="ArrayType";function $h(t){return de.isInstance(t,wh)}var Ph="BooleanLiteral";function Mh(t){return de.isInstance(t,Ph)}var Fh="Conjunction";function Uh(t){return de.isInstance(t,Fh)}var Bh="Disjunction";function Wh(t){return de.isInstance(t,Bh)}var Gh="Grammar";function DL(t){return de.isInstance(t,Gh)}var xN="GrammarImport";function CL(t){return de.isInstance(t,xN)}var Vh="InferredType";function Qc(t){return de.isInstance(t,Vh)}var jh="Interface";function Zc(t){return de.isInstance(t,jh)}var NN="NamedArgument";function bL(t){return de.isInstance(t,NN)}var qh="Negation";function Hh(t){return de.isInstance(t,qh)}var Kh="NumberLiteral";function kL(t){return de.isInstance(t,Kh)}var zh="Parameter";function LL(t){return de.isInstance(t,zh)}var Yh="ParameterReference";function Xh(t){return de.isInstance(t,Yh)}var Jh="ParserRule";function It(t){return de.isInstance(t,Jh)}var Qh="ReferenceType";function Zh(t){return de.isInstance(t,Qh)}var ON="ReturnType";function eg(t){return de.isInstance(t,ON)}var tg="SimpleType";function ef(t){return de.isInstance(t,tg)}var rg="StringLiteral";function wL(t){return de.isInstance(t,rg)}var Jc="TerminalRule";function $r(t){return de.isInstance(t,Jc)}var ng="Type";function al(t){return de.isInstance(t,ng)}var IN="TypeAttribute";function $L(t){return de.isInstance(t,IN)}var ig="UnionType";function og(t){return de.isInstance(t,ig)}var sg="Action";function Rn(t){return de.isInstance(t,sg)}var ag="Alternatives";function Ds(t){return de.isInstance(t,ag)}var lg="Assignment";function mr(t){return de.isInstance(t,lg)}var ug="CharacterRange";function cg(t){return de.isInstance(t,ug)}var fg="CrossReference";function xn(t){return de.isInstance(t,fg)}var dg="EndOfFile";function pg(t){return de.isInstance(t,dg)}var mg="Group";function ln(t){return de.isInstance(t,mg)}var hg="Keyword";function ir(t){return de.isInstance(t,hg)}var gg="NegatedToken";function Tg(t){return de.isInstance(t,gg)}var yg="RegexToken";function _g(t){return de.isInstance(t,yg)}var vg="RuleCall";function Pr(t){return de.isInstance(t,vg)}var Rg="TerminalAlternatives";function xg(t){return de.isInstance(t,Rg)}var Ng="TerminalGroup";function Og(t){return de.isInstance(t,Ng)}var Ig="TerminalRuleCall";function tf(t){return de.isInstance(t,Ig)}var Eg="UnorderedGroup";function Cs(t){return de.isInstance(t,Eg)}var Sg="UntilToken";function Ag(t){return de.isInstance(t,Sg)}var Dg="Wildcard";function Cg(t){return de.isInstance(t,Dg)}var As=class extends To{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case sg:case ag:case lg:case ug:case fg:case dg:case mg:case hg:case gg:case yg:case vg:case Rg:case Ng:case Ig:case Eg:case Sg:case Dg:return this.isSubtype(kh,r);case Lh:case Kh:case rg:return this.isSubtype(Xc,r);case wh:case Qh:case tg:case ig:return this.isSubtype(bh,r);case Ph:return this.isSubtype(Yc,r)||this.isSubtype(Xc,r);case Fh:case Bh:case qh:case Yh:return this.isSubtype(Yc,r);case Vh:case jh:case ng:return this.isSubtype(sl,r);case Jh:return this.isSubtype(ol,r)||this.isSubtype(sl,r);case Jc:return this.isSubtype(ol,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return sl;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return ol;case"Grammar:usedGrammars":return Gh;case"NamedArgument:parameter":case"ParameterReference:parameter":return zh;case"TerminalRuleCall:rule":return Jc;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"Assignment":return{name:"Assignment",properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case"EndOfFile":return{name:"EndOfFile",properties:[{name:"cardinality"},{name:"lookahead"}]};case"Group":return{name:"Group",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case"Keyword":return{name:"Keyword",properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"Wildcard":return{name:"Wildcard",properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}},de=new As;var Ur={};Ni(Ur,{assignMandatoryProperties:()=>cl,copyAstNode:()=>Fg,findLocalReferences:()=>BL,findRootNode:()=>CN,getContainerOfType:()=>Jr,getDocument:()=>yt,hasContainerOfType:()=>UL,linkContentToContainer:()=>sf,streamAllContents:()=>Mr,streamAst:()=>Fr,streamContents:()=>Ro,streamReferences:()=>Ls});var Rr=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return or})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=PL(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?or:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return or})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(rf(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return or})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(rf(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return or})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?or:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};function PL(t){return typeof t=="string"?t:typeof t=="undefined"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function rf(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Mi=new Rr(()=>{},()=>or),or=Object.freeze({done:!0,value:void 0});function me(...t){if(t.length===1){let e=t[0];if(e instanceof Rr)return e;if(rf(e))return new Rr(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Rr(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:or)}return t.length>1?new Rr(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];rf(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return or}):Mi}var un=class extends Rr{constructor(e,r,n){super(()=>({iterators:n!=null&&n.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let s=i.iterators[i.iterators.length-1].next();if(s.done)i.iterators.pop();else return i.iterators.push(r(s.value)[Symbol.iterator]()),s}return or})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},bs;(function(t){function e(o){return o.reduce((s,a)=>s+a,0)}t.sum=e;function r(o){return o.reduce((s,a)=>s*a,0)}t.product=r;function n(o){return o.reduce((s,a)=>Math.min(s,a))}t.min=n;function i(o){return o.reduce((s,a)=>Math.max(s,a))}t.max=i})(bs||(bs={}));var Fi={};Ni(Fi,{DefaultNameRegexp:()=>of,RangeComparison:()=>ti,compareRange:()=>SN,findCommentNode:()=>wg,findDeclarationNodeAtOffset:()=>Jt,findLeafNodeAtOffset:()=>ll,findLeafNodeBeforeOffset:()=>ul,flattenCst:()=>kg,getInteriorNodes:()=>Pg,getNextNode:()=>$g,getPreviousNode:()=>DN,getStartlineNode:()=>ML,inRange:()=>nf,isChildNode:()=>Lg,isCommentNode:()=>bg,streamCst:()=>_o,toDocumentSegment:()=>vo,tokenToRange:()=>ks});function _o(t){return new un(t,e=>vr(e)?e.content:[],{includeRoot:!0})}function kg(t){return _o(t).filter(vn)}function Lg(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function ks(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function vo(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var ti;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(ti||(ti={}));function SN(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return ti.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return ti.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?ti.Inside:r?ti.OverlapBack:ti.OverlapFront}function nf(t,e){return SN(t,e)>ti.After}var of=/^[\w\p{L}]$/u;function Jt(t,e,r=of){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return ll(t,e)}}function wg(t,e){if(t){let r=DN(t,!0);if(r&&bg(r,e))return r;if(il(t)){let n=t.content.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.content[i];if(bg(o,e))return o}}}}function bg(t,e){return vn(t)&&e.includes(t.tokenType.name)}function ll(t,e){if(vn(t))return t;if(vr(t)){let r=AN(t,e,!1);if(r)return ll(r,e)}}function ul(t,e){if(vn(t))return t;if(vr(t)){let r=AN(t,e,!0);if(r)return ul(r,e)}}function AN(t,e,r){let n=0,i=t.content.length-1,o;for(;n<=i;){let s=Math.floor((n+i)/2),a=t.content[s];if(a.offset<=e&&a.end>e)return a;a.end<=e?(o=r?a:void 0,n=s+1):i=s-1}return o}function DN(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function $g(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),i=r.content.length-1;for(;n<i;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function ML(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let i=t.container,o=n!=null?n:i.content.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.content[n]),t.range.start.line!==e)break;r=t}return r}function Pg(t,e){let r=FL(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function FL(t,e){let r=EN(t),n=EN(e),i;for(let o=0;o<r.length&&o<n.length;o++){let s=r[o],a=n[o];if(s.parent===a.parent)i={parent:s.parent,a:s.index,b:a.index};else break}return i}function EN(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}function sf(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{Be(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):Be(r)&&(r.$container=t,r.$containerProperty=e))}function Jr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function UL(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function yt(t){let r=CN(t).$document;if(!r)throw new Error("AST node has no document.");return r}function CN(t){for(;t.$container;)t=t.$container;return t}function Ro(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e==null?void 0:e.range;return new Rr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let i=n.keys[n.keyIndex];if(!i.startsWith("$")){let o=t[i];if(Be(o)){if(n.keyIndex++,Mg(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let s=n.arrayIndex++,a=o[s];if(Be(a)&&Mg(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return or})}function Mr(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new un(t,r=>Ro(r,e))}function Fr(t,e){if(t){if(e!=null&&e.range&&!Mg(t,e.range))return new un(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new un(t,r=>Ro(r,e),{includeRoot:!0})}function Mg(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?nf(n,e):!1}function Ls(t){return new Rr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(Tt(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(Tt(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return or})}function BL(t,e=yt(t).parseResult.value){let r=[];return Fr(e).forEach(n=>{Ls(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),me(r)}function cl(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let i of r.properties)i.defaultValue!==void 0&&n[i.name]===void 0&&(n[i.name]=bN(i.defaultValue))}function bN(t){return Array.isArray(t)?[...t.map(bN)]:t}function Fg(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if(Be(i))r[n]=Fg(i,e);else if(Tt(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let s of i)Be(s)?o.push(Fg(s,e)):Tt(s)?o.push(e(r,n,s.$refNode,s.$refText)):o.push(s);r[n]=o}else r[n]=i;return sf(r),r}var Et={};Ni(Et,{findAssignment:()=>Jg,findNameAssignment:()=>df,findNodeForKeyword:()=>Ps,findNodeForProperty:()=>Bi,findNodesForKeyword:()=>ff,findNodesForKeywordInternal:()=>Xg,findNodesForProperty:()=>$s,getActionAtElement:()=>MN,getActionType:()=>UN,getAllReachableRules:()=>hl,getCrossReferenceTerminal:()=>gl,getEntryRule:()=>ml,getExplicitRuleType:()=>Ao,getHiddenRules:()=>wN,getRuleType:()=>Zg,getTypeName:()=>ni,isArrayCardinality:()=>Qg,isArrayOperator:()=>jL,isCommentTerminal:()=>zg,isDataType:()=>qL,isDataTypeRule:()=>Tl,isOptionalCardinality:()=>So,terminalRegex:()=>Wi});var xo=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Ui(t){throw new Error("Error! The input value was not handled.")}var cf={};Ni(cf,{NEWLINE_REGEXP:()=>Gg,escapeRegExp:()=>Eo,getCaseInsensitivePattern:()=>jg,getTerminalParts:()=>VL,isMultilineComment:()=>Vg,isWhitespace:()=>uf,partialMatches:()=>qg,partialRegExp:()=>LN});function ce(t){return t.charCodeAt(0)}function af(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function ws(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function No(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function fl(){throw Error("Internal Error - Should never get here!")}function Ug(t){return t.type==="Character"}var dl=[];for(let t=ce("0");t<=ce("9");t++)dl.push(t);var pl=[ce("_")].concat(dl);for(let t=ce("a");t<=ce("z");t++)pl.push(t);for(let t=ce("A");t<=ce("Z");t++)pl.push(t);var Bg=[ce(" "),ce("\f"),ce(`
`),ce("\r"),ce("	"),ce("\v"),ce("	"),ce("\xA0"),ce("\u1680"),ce("\u2000"),ce("\u2001"),ce("\u2002"),ce("\u2003"),ce("\u2004"),ce("\u2005"),ce("\u2006"),ce("\u2007"),ce("\u2008"),ce("\u2009"),ce("\u200A"),ce("\u2028"),ce("\u2029"),ce("\u202F"),ce("\u205F"),ce("\u3000"),ce("\uFEFF")];var WL=/[0-9a-fA-F]/,lf=/[0-9]/,GL=/[1-9]/,Oo=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ws(n,"global");break;case"i":ws(n,"ignoreCase");break;case"m":ws(n,"multiLine");break;case"u":ws(n,"unicode");break;case"y":ws(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}No(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return fl()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:i,atMost:i};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:i,atMost:o}):r={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;No(r);break}if(!(e===!0&&r===void 0)&&No(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),No(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):fl()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[ce(`
`),ce("\r"),ce("\u2028"),ce("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=dl;break;case"D":e=dl,r=!0;break;case"s":e=Bg;break;case"S":e=Bg,r=!0;break;case"w":e=pl;break;case"W":e=pl,r=!0;break}return No(e)?{type:"Set",value:e,complement:r}:fl()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=ce("\f");break;case"n":e=ce(`
`);break;case"r":e=ce("\r");break;case"t":e=ce("	");break;case"v":e=ce("\v");break}return No(e)?{type:"Character",value:e}:fl()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:ce("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:ce(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:ce(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),i=n.type==="Character";if(Ug(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),s=o.type==="Character";if(Ug(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else af(n.value,e),e.push(ce("-")),af(o.value,e)}else af(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:ce("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(GL.test(e)===!1)throw Error("Expecting a positive integer");for(;lf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(lf.test(e)===!1)throw Error("Expecting an integer");for(;lf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:ce(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return lf.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let i=0;i<e;i++){let o=this.popChar();if(WL.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Ln=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var Gg=/\r?\n/gm,kN=new Oo,Wg=class extends Ln{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=Eo(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},Io=new Wg;function VL(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=kN.pattern(t),r=[];for(let n of e.value.value)Io.reset(t),Io.visit(n),r.push({start:Io.startRegexp,end:Io.endRegex});return r}catch{return[]}}function Vg(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Io.reset(t),Io.visit(kN.pattern(t)),Io.multiline}catch{return!1}}function uf(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function Eo(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function jg(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Eo(e)).join("")}function qg(t,e){let r=LN(t),n=e.match(r);return!!n&&n[0].length>0}function LN(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",s;function a(u){o+=r.substr(n,u),n+=u}function l(u){o+="(?:"+r.substr(n,u)+"|$)",n+=u}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?r[n+2]==="{"?l(r.indexOf("}",n)-n+1):l(6):l(2);break;case"p":case"P":e.unicode?l(r.indexOf("}",n)-n+1):l(2);break;case"k":l(r.indexOf(">",n)-n+1);break;default:l(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],l(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):l(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":s=n,n+=3,i(),o+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,i(),o+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else a(1),o+=i()+"|$)";break;case")":return++n,o;default:l(1);break}return o}return new RegExp(i(),t.flags)}function ml(t){return t.rules.find(e=>It(e)&&e.entry)}function wN(t){return t.rules.filter(e=>$r(e)&&e.hidden)}function hl(t,e){let r=new Set,n=ml(t);if(!n)return new Set(t.rules);let i=[n].concat(wN(t));for(let s of i)$N(s,r,e);let o=new Set;for(let s of t.rules)(r.has(s.name)||$r(s)&&s.hidden)&&o.add(s);return o}function $N(t,e,r){e.add(t.name),Mr(t).forEach(n=>{if(Pr(n)||r&&tf(n)){let i=n.rule.ref;i&&!e.has(i.name)&&$N(i,e,r)}})}function gl(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=df(t.type.ref);return e==null?void 0:e.terminal}}function zg(t){return t.hidden&&!Wi(t).test(" ")}function $s(t,e){return!t||!e?[]:Yg(t,e,t.astNode,!0)}function Bi(t,e,r){if(!t||!e)return;let n=Yg(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Yg(t,e,r,n){if(!n){let i=Jr(t.grammarSource,mr);if(i&&i.feature===e)return[t]}return vr(t)&&t.astNode===r?t.content.flatMap(i=>Yg(i,e,r,!1)):[]}function ff(t,e){return t?Xg(t,e,t==null?void 0:t.astNode):[]}function Ps(t,e,r){if(!t)return;let n=Xg(t,e,t==null?void 0:t.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Xg(t,e,r){if(t.astNode!==r)return[];if(ir(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=_o(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let s=i.value;s.astNode===r?ir(s.grammarSource)&&s.grammarSource.value===e&&o.push(s):n.prune()}while(!i.done);return o}function Jg(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=Jr(t.grammarSource,mr);if(n)return n;t=t.container}}function df(t){let e=t;return Qc(e)&&(Rn(e.$container)?e=e.$container.$container:It(e.$container)?e=e.$container:Ui(e.$container)),PN(t,e,new Map)}function PN(t,e,r){var n;function i(o,s){let a;return Jr(o,mr)||(a=PN(s,s,r)),r.set(t,a),a}if(r.has(t))return r.get(t);r.set(t,void 0);for(let o of Mr(e)){if(mr(o)&&o.feature.toLowerCase()==="name")return r.set(t,o),o;if(Pr(o)&&It(o.rule.ref))return i(o,o.rule.ref);if(ef(o)&&(!((n=o.typeRef)===null||n===void 0)&&n.ref))return i(o,o.typeRef.ref)}}function MN(t){let e=t.$container;if(ln(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(Rn(o))return o;{let s=Mr(r[i]).find(Rn);if(s)return s}}}if(yo(e))return MN(e)}function So(t,e){return t==="?"||t==="*"||ln(e)&&!!e.guardCondition}function Qg(t){return t==="*"||t==="+"}function jL(t){return t==="+="}function Tl(t){return FN(t,new Set)}function FN(t,e){if(e.has(t))return!0;e.add(t);for(let r of Mr(t))if(Pr(r)){if(!r.rule.ref||It(r.rule.ref)&&!FN(r.rule.ref,e))return!1}else{if(mr(r))return!1;if(Rn(r))return!1}return!!t.definition}function qL(t){return Kg(t.type,new Set)}function Kg(t,e){if(e.has(t))return!0;if(e.add(t),$h(t))return!1;if(Zh(t))return!1;if(og(t))return t.types.every(r=>Kg(r,e));if(ef(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return al(r)?Kg(r.type,e):!1}else return!1}else return!1}function Ao(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(It(e))return e.name;if(Zc(e)||al(e))return e.name}}}function ni(t){var e;if(It(t))return Tl(t)?t.name:(e=Ao(t))!==null&&e!==void 0?e:t.name;if(Zc(t)||al(t)||eg(t))return t.name;if(Rn(t)){let r=UN(t);if(r)return r}else if(Qc(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function UN(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return ni(t.type.ref)}function Zg(t){var e,r,n;return $r(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Tl(t)?t.name:(n=Ao(t))!==null&&n!==void 0?n:t.name}function Wi(t){let e={s:!1,i:!1,u:!1},r=Ms(t.definition,e),n=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(r,n)}var eT=/[\s\S]/.source;function Ms(t,e){if(xg(t))return HL(t);if(Og(t))return KL(t);if(cg(t))return XL(t);if(tf(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return ri(Ms(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(Tg(t))return YL(t);if(Ag(t))return zL(t);if(_g(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),i=t.regex.substring(r+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),ri(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(Cg(t))return ri(eT,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function HL(t){return ri(t.elements.map(e=>Ms(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function KL(t){return ri(t.elements.map(e=>Ms(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function zL(t){return ri(`${eT}*?${Ms(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function YL(t){return ri(`(?!${Ms(t.terminal)})${eT}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function XL(t){return t.right?ri(`[${Hg(t.left)}-${Hg(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):ri(Hg(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Hg(t){return Eo(t.value)}function ri(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function yl(t,e){let r={stacks:t,tokens:e};return JL(r),r.stacks.flat().forEach(i=>{i.property=void 0}),WN(r.stacks).map(i=>i[i.length-1])}function tT(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,l=s;for(;l.$container;)if(ln(l.$container)){a=l.$container;break}else if(yo(l.$container))l=l.$container;else break;if(Qg(l.cardinality)){let u=Fs({next:{feature:l,type:e.type},cardinalities:r,visited:n,plus:i});for(let c of u)i.add(c.feature);o.push(...u)}if(a){let u=a.elements.indexOf(l);u!==void 0&&u<a.elements.length-1&&o.push(...BN({feature:a,type:e.type},u+1,r,n,i)),o.every(c=>So(c.feature.cardinality,c.feature)||So(r.get(c.feature))||i.has(c.feature))&&o.push(...tT({next:{feature:a,type:e.type},cardinalities:r,visited:n,plus:i}))}return o}function Do(t){return Be(t)&&(t={feature:t}),Fs({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Fs(t){var e,r,n;let{next:i,cardinalities:o,visited:s,plus:a}=t;if(i===void 0)return[];let{feature:l,type:u}=i;if(ln(l)){if(s.has(l))return[];s.add(l)}if(ln(l))return BN(i,0,o,s,a).map(c=>pf(c,l.cardinality,o));if(Ds(l)||Cs(l))return l.elements.flatMap(c=>Fs({next:{feature:c,type:u,property:i.property},cardinalities:o,visited:s,plus:a})).map(c=>pf(c,l.cardinality,o));if(mr(l)){let c={feature:l.terminal,type:u,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Fs({next:c,cardinalities:o,visited:s,plus:a}).map(f=>pf(f,l.cardinality,o))}else{if(Rn(l))return tT({next:{feature:l,type:ni(l),property:(r=i.property)!==null&&r!==void 0?r:l.feature},cardinalities:o,visited:s,plus:a});if(Pr(l)&&It(l.rule.ref)){let c=l.rule.ref,f={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=Ao(c))!==null&&n!==void 0?n:c.name,property:i.property};return Fs({next:f,cardinalities:o,visited:s,plus:a}).map(d=>pf(d,l.cardinality,o))}else return[i]}}function pf(t,e,r){return r.set(t.feature,e),t}function BN(t,e,r,n,i){var o;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},s.push(...Fs({next:a,cardinalities:r,visited:n,plus:i})),!!So((o=a.feature.cardinality)!==null&&o!==void 0?o:r.get(a.feature),a.feature)););return s}function JL(t){for(let e of t.tokens){let r=WN(t.stacks,e);t.stacks=r}}function WN(t,e){let r=[];for(let n of t)r.push(...QL(n,e));return r}function QL(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(ZL)),i=[];for(;t.length>0;){let o=t.pop(),s=tT({next:o,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?rT(a.feature,e):!0);for(let a of s)i.push([...t,a]);if(!s.every(a=>So(a.feature.cardinality,a.feature)||So(r.get(a.feature))))break}return i}function ZL(t){if(t.cardinality==="+")return!0;let e=Jr(t,mr);return!!(e&&e.cardinality==="+")}function rT(t,e){if(ir(t))return t.value===e.image;if(Pr(t))return ew(t.rule.ref,e);if(xn(t)){let r=gl(t);if(r)return rT(r,e)}return!1}function ew(t,e){return It(t)?Do(t.definition).some(n=>rT(n.feature,e)):$r(t)?Wi(t).test(e.image):!1}function GN(t){let e=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.triggerCharacters)!==null&&i!==void 0?i:[]}))),r=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var Us=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],i=this.buildContexts(e,r.position),o=(l,u)=>{let c=this.fillCompletionItem(l,u);c&&n.push(c)},s=l=>ir(l.feature)?l.feature.value:l.feature,a=[];for(let l of i)if(await Promise.all(me(l.features).distinct(s).exclude(a).map(u=>this.completionFor(l,u,o))),a.push(...l.features),!this.continueCompletion(n))break;return Bs.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return me(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:Bs.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let l=ml(this.grammar),u=Do({feature:l.definition,type:Ao(l)});return o.length>0?(o.shift(),yl(u.map(c=>[c]),o)):u}let s=[...o].splice(i.tokenIndex);return yl([i.elementStack.map(l=>({feature:l}))],s)}*buildContexts(e,r){var n,i;let o=e.parseResult.value.$cstNode;if(!o)return;let s=e.textDocument,a=s.getText(),l=s.offsetAt(r),u={document:e,textDocument:s,offset:l,position:r},c=this.findDataTypeRuleStart(o,l);if(c){let[y,T]=c,k=(n=ul(o,y))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},u),{node:k,tokenOffset:y,tokenEndOffset:T,features:this.findFeaturesAt(s,y)})}let{nextTokenStart:f,nextTokenEnd:d,previousTokenStart:h,previousTokenEnd:_}=this.backtrackToAnyToken(a,l),x=f;l<=f&&h!==void 0&&(x=h);let E=(i=ul(o,x))===null||i===void 0?void 0:i.astNode,I=!0;if(h!==void 0&&_!==void 0&&_===l&&(yield Object.assign(Object.assign({},u),{node:E,tokenOffset:h,tokenEndOffset:_,features:this.findFeaturesAt(s,h)}),I=this.performNextTokenCompletion(e,a.substring(h,_),h,_),I&&(yield Object.assign(Object.assign({},u),{node:E,tokenOffset:_,tokenEndOffset:_,features:this.findFeaturesAt(s,_)}))),E)I&&(yield Object.assign(Object.assign({},u),{node:E,tokenOffset:f,tokenEndOffset:d,features:this.findFeaturesAt(s,f)}));else{let y=ml(this.grammar);if(!y)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},u),{tokenOffset:f,tokenEndOffset:d,features:Do(y.definition)})}}performNextTokenCompletion(e,r,n,i){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,i;let o=Jt(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=Jr(o==null?void 0:o.grammarSource,It))===null||n===void 0)&&n.dataType);if(s){for(;s;)o=o==null?void 0:o.container,s=!!(!((i=Jr(o==null?void 0:o.grammarSource,It))===null||i===void 0)&&i.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let i;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,r,n){if(ir(r.feature))return this.completionForKeyword(e,r.feature,n);if(xn(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=Jr(r.feature,mr),o=e.node;if(i&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},cl(this.astReflection,o));let s={reference:{$refText:""},container:o,property:i.feature};try{this.getReferenceCandidates(s,e).forEach(a=>n(e,this.createReferenceCompletionItem(a)))}catch(a){console.error(a)}}}getReferenceCandidates(e,r){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:Bs.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,i;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let u=this.nameProvider.getName(r.node);if(!u)return;o=u}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=o;let a=(i=r.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,o,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var tw=Kt(wr(),1);var VN;(()=>{"use strict";var t={470:i=>{function o(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function s(l,u){for(var c,f="",d=0,h=-1,_=0,x=0;x<=l.length;++x){if(x<l.length)c=l.charCodeAt(x);else{if(c===47)break;c=47}if(c===47){if(!(h===x-1||_===1))if(h!==x-1&&_===2){if(f.length<2||d!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var E=f.lastIndexOf("/");if(E!==f.length-1){E===-1?(f="",d=0):d=(f=f.slice(0,E)).length-1-f.lastIndexOf("/"),h=x,_=0;continue}}else if(f.length===2||f.length===1){f="",d=0,h=x,_=0;continue}}u&&(f.length>0?f+="/..":f="..",d=2)}else f.length>0?f+="/"+l.slice(h+1,x):f=l.slice(h+1,x),d=x-h-1;h=x,_=0}else c===46&&_!==-1?++_:_=-1}return f}var a={resolve:function(){for(var l,u="",c=!1,f=arguments.length-1;f>=-1&&!c;f--){var d;f>=0?d=arguments[f]:(l===void 0&&(l=process.cwd()),d=l),o(d),d.length!==0&&(u=d+"/"+u,c=d.charCodeAt(0)===47)}return u=s(u,!c),c?u.length>0?"/"+u:"/":u.length>0?u:"."},normalize:function(l){if(o(l),l.length===0)return".";var u=l.charCodeAt(0)===47,c=l.charCodeAt(l.length-1)===47;return(l=s(l,!u)).length!==0||u||(l="."),l.length>0&&c&&(l+="/"),u?"/"+l:l},isAbsolute:function(l){return o(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,u=0;u<arguments.length;++u){var c=arguments[u];o(c),c.length>0&&(l===void 0?l=c:l+="/"+c)}return l===void 0?".":a.normalize(l)},relative:function(l,u){if(o(l),o(u),l===u||(l=a.resolve(l))===(u=a.resolve(u)))return"";for(var c=1;c<l.length&&l.charCodeAt(c)===47;++c);for(var f=l.length,d=f-c,h=1;h<u.length&&u.charCodeAt(h)===47;++h);for(var _=u.length-h,x=d<_?d:_,E=-1,I=0;I<=x;++I){if(I===x){if(_>x){if(u.charCodeAt(h+I)===47)return u.slice(h+I+1);if(I===0)return u.slice(h+I)}else d>x&&(l.charCodeAt(c+I)===47?E=I:I===0&&(E=0));break}var y=l.charCodeAt(c+I);if(y!==u.charCodeAt(h+I))break;y===47&&(E=I)}var T="";for(I=c+E+1;I<=f;++I)I!==f&&l.charCodeAt(I)!==47||(T.length===0?T+="..":T+="/..");return T.length>0?T+u.slice(h+E):(h+=E,u.charCodeAt(h)===47&&++h,u.slice(h))},_makeLong:function(l){return l},dirname:function(l){if(o(l),l.length===0)return".";for(var u=l.charCodeAt(0),c=u===47,f=-1,d=!0,h=l.length-1;h>=1;--h)if((u=l.charCodeAt(h))===47){if(!d){f=h;break}}else d=!1;return f===-1?c?"/":".":c&&f===1?"//":l.slice(0,f)},basename:function(l,u){if(u!==void 0&&typeof u!="string")throw new TypeError('"ext" argument must be a string');o(l);var c,f=0,d=-1,h=!0;if(u!==void 0&&u.length>0&&u.length<=l.length){if(u.length===l.length&&u===l)return"";var _=u.length-1,x=-1;for(c=l.length-1;c>=0;--c){var E=l.charCodeAt(c);if(E===47){if(!h){f=c+1;break}}else x===-1&&(h=!1,x=c+1),_>=0&&(E===u.charCodeAt(_)?--_==-1&&(d=c):(_=-1,d=x))}return f===d?d=x:d===-1&&(d=l.length),l.slice(f,d)}for(c=l.length-1;c>=0;--c)if(l.charCodeAt(c)===47){if(!h){f=c+1;break}}else d===-1&&(h=!1,d=c+1);return d===-1?"":l.slice(f,d)},extname:function(l){o(l);for(var u=-1,c=0,f=-1,d=!0,h=0,_=l.length-1;_>=0;--_){var x=l.charCodeAt(_);if(x!==47)f===-1&&(d=!1,f=_+1),x===46?u===-1?u=_:h!==1&&(h=1):u!==-1&&(h=-1);else if(!d){c=_+1;break}}return u===-1||f===-1||h===0||h===1&&u===f-1&&u===c+1?"":l.slice(u,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(u,c){var f=c.dir||c.root,d=c.base||(c.name||"")+(c.ext||"");return f?f===c.root?f+d:f+"/"+d:d}(0,l)},parse:function(l){o(l);var u={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return u;var c,f=l.charCodeAt(0),d=f===47;d?(u.root="/",c=1):c=0;for(var h=-1,_=0,x=-1,E=!0,I=l.length-1,y=0;I>=c;--I)if((f=l.charCodeAt(I))!==47)x===-1&&(E=!1,x=I+1),f===46?h===-1?h=I:y!==1&&(y=1):h!==-1&&(y=-1);else if(!E){_=I+1;break}return h===-1||x===-1||y===0||y===1&&h===x-1&&h===_+1?x!==-1&&(u.base=u.name=_===0&&d?l.slice(1,x):l.slice(_,x)):(_===0&&d?(u.name=l.slice(1,h),u.base=l.slice(1,x)):(u.name=l.slice(_,h),u.base=l.slice(_,x)),u.ext=l.slice(h,x)),_>0?u.dir=l.slice(0,_-1):d&&(u.dir="/"),u},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(i,o)=>{for(var s in o)r.o(o,s)&&!r.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},r.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),r.r=i=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};(()=>{let i;r.r(n),r.d(n,{URI:()=>d,Utils:()=>$e}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function l(W,L){if(!W.scheme&&L)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${W.authority}", path: "${W.path}", query: "${W.query}", fragment: "${W.fragment}"}`);if(W.scheme&&!o.test(W.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(W.path){if(W.authority){if(!s.test(W.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(W.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let u="",c="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class d{constructor(L,j,H,Te,ue,V=!1){Oi(this,"scheme");Oi(this,"authority");Oi(this,"path");Oi(this,"query");Oi(this,"fragment");typeof L=="object"?(this.scheme=L.scheme||u,this.authority=L.authority||u,this.path=L.path||u,this.query=L.query||u,this.fragment=L.fragment||u):(this.scheme=function(F,ve){return F||ve?F:"file"}(L,V),this.authority=j||u,this.path=function(F,ve){switch(F){case"https":case"http":case"file":ve?ve[0]!==c&&(ve=c+ve):ve=c}return ve}(this.scheme,H||u),this.query=Te||u,this.fragment=ue||u,l(this,V))}static isUri(L){return L instanceof d||!!L&&typeof L.authority=="string"&&typeof L.fragment=="string"&&typeof L.path=="string"&&typeof L.query=="string"&&typeof L.scheme=="string"&&typeof L.fsPath=="string"&&typeof L.with=="function"&&typeof L.toString=="function"}get fsPath(){return y(this,!1)}with(L){if(!L)return this;let{scheme:j,authority:H,path:Te,query:ue,fragment:V}=L;return j===void 0?j=this.scheme:j===null&&(j=u),H===void 0?H=this.authority:H===null&&(H=u),Te===void 0?Te=this.path:Te===null&&(Te=u),ue===void 0?ue=this.query:ue===null&&(ue=u),V===void 0?V=this.fragment:V===null&&(V=u),j===this.scheme&&H===this.authority&&Te===this.path&&ue===this.query&&V===this.fragment?this:new _(j,H,Te,ue,V)}static parse(L,j=!1){let H=f.exec(L);return H?new _(H[2]||u,Q(H[4]||u),Q(H[5]||u),Q(H[7]||u),Q(H[9]||u),j):new _(u,u,u,u,u)}static file(L){let j=u;if(i&&(L=L.replace(/\\/g,c)),L[0]===c&&L[1]===c){let H=L.indexOf(c,2);H===-1?(j=L.substring(2),L=c):(j=L.substring(2,H),L=L.substring(H)||c)}return new _("file",j,L,u,u)}static from(L){let j=new _(L.scheme,L.authority,L.path,L.query,L.fragment);return l(j,!0),j}toString(L=!1){return T(this,L)}toJSON(){return this}static revive(L){if(L){if(L instanceof d)return L;{let j=new _(L);return j._formatted=L.external,j._fsPath=L._sep===h?L.fsPath:null,j}}return L}}let h=i?1:void 0;class _ extends d{constructor(){super(...arguments);Oi(this,"_formatted",null);Oi(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=y(this,!1)),this._fsPath}toString(j=!1){return j?T(this,!0):(this._formatted||(this._formatted=T(this,!1)),this._formatted)}toJSON(){let j={$mid:1};return this._fsPath&&(j.fsPath=this._fsPath,j._sep=h),this._formatted&&(j.external=this._formatted),this.path&&(j.path=this.path),this.scheme&&(j.scheme=this.scheme),this.authority&&(j.authority=this.authority),this.query&&(j.query=this.query),this.fragment&&(j.fragment=this.fragment),j}}let x={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function E(W,L,j){let H,Te=-1;for(let ue=0;ue<W.length;ue++){let V=W.charCodeAt(ue);if(V>=97&&V<=122||V>=65&&V<=90||V>=48&&V<=57||V===45||V===46||V===95||V===126||L&&V===47||j&&V===91||j&&V===93||j&&V===58)Te!==-1&&(H+=encodeURIComponent(W.substring(Te,ue)),Te=-1),H!==void 0&&(H+=W.charAt(ue));else{H===void 0&&(H=W.substr(0,ue));let F=x[V];F!==void 0?(Te!==-1&&(H+=encodeURIComponent(W.substring(Te,ue)),Te=-1),H+=F):Te===-1&&(Te=ue)}}return Te!==-1&&(H+=encodeURIComponent(W.substring(Te))),H!==void 0?H:W}function I(W){let L;for(let j=0;j<W.length;j++){let H=W.charCodeAt(j);H===35||H===63?(L===void 0&&(L=W.substr(0,j)),L+=x[H]):L!==void 0&&(L+=W[j])}return L!==void 0?L:W}function y(W,L){let j;return j=W.authority&&W.path.length>1&&W.scheme==="file"?`//${W.authority}${W.path}`:W.path.charCodeAt(0)===47&&(W.path.charCodeAt(1)>=65&&W.path.charCodeAt(1)<=90||W.path.charCodeAt(1)>=97&&W.path.charCodeAt(1)<=122)&&W.path.charCodeAt(2)===58?L?W.path.substr(1):W.path[1].toLowerCase()+W.path.substr(2):W.path,i&&(j=j.replace(/\//g,"\\")),j}function T(W,L){let j=L?I:E,H="",{scheme:Te,authority:ue,path:V,query:F,fragment:ve}=W;if(Te&&(H+=Te,H+=":"),(ue||Te==="file")&&(H+=c,H+=c),ue){let Re=ue.indexOf("@");if(Re!==-1){let Ae=ue.substr(0,Re);ue=ue.substr(Re+1),Re=Ae.lastIndexOf(":"),Re===-1?H+=j(Ae,!1,!1):(H+=j(Ae.substr(0,Re),!1,!1),H+=":",H+=j(Ae.substr(Re+1),!1,!0)),H+="@"}ue=ue.toLowerCase(),Re=ue.lastIndexOf(":"),Re===-1?H+=j(ue,!1,!0):(H+=j(ue.substr(0,Re),!1,!0),H+=ue.substr(Re))}if(V){if(V.length>=3&&V.charCodeAt(0)===47&&V.charCodeAt(2)===58){let Re=V.charCodeAt(1);Re>=65&&Re<=90&&(V=`/${String.fromCharCode(Re+32)}:${V.substr(3)}`)}else if(V.length>=2&&V.charCodeAt(1)===58){let Re=V.charCodeAt(0);Re>=65&&Re<=90&&(V=`${String.fromCharCode(Re+32)}:${V.substr(2)}`)}H+=j(V,!0,!1)}return F&&(H+="?",H+=j(F,!1,!1)),ve&&(H+="#",H+=L?ve:E(ve,!1,!1)),H}function k(W){try{return decodeURIComponent(W)}catch{return W.length>3?W.substr(0,3)+k(W.substr(3)):W}}let B=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Q(W){return W.match(B)?W.replace(B,L=>k(L)):W}var ae=r(470);let le=ae.posix||ae,Ce="/";var $e;(function(W){W.joinPath=function(L,...j){return L.with({path:le.join(L.path,...j)})},W.resolvePath=function(L,...j){let H=L.path,Te=!1;H[0]!==Ce&&(H=Ce+H,Te=!0);let ue=le.resolve(H,...j);return Te&&ue[0]===Ce&&!L.authority&&(ue=ue.substring(1)),L.with({path:ue})},W.dirname=function(L){if(L.path.length===0||L.path===Ce)return L;let j=le.dirname(L.path);return j.length===1&&j.charCodeAt(0)===46&&(j=""),L.with({path:j})},W.basename=function(L){return le.basename(L.path)},W.extname=function(L){return le.extname(L.path)}})($e||($e={}))})(),VN=n})();var{URI:qe,Utils:Ws}=VN;var $t;(function(t){t.basename=Ws.basename,t.dirname=Ws.dirname,t.extname=Ws.extname,t.joinPath=Ws.joinPath,t.resolvePath=Ws.resolvePath;function e(n,i){return(n==null?void 0:n.toString())===(i==null?void 0:i.toString())}t.equals=e;function r(n,i){let o=typeof n=="string"?n:n.path,s=typeof i=="string"?i:i.path,a=o.split("/").filter(d=>d.length>0),l=s.split("/").filter(d=>d.length>0),u=0;for(;u<a.length&&a[u]===l[u];u++);let c="../".repeat(a.length-u),f=l.slice(u).join("/");return c+f}t.relative=r})($t||($t={}));var jN=Kt(wr(),1);var mf=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=Jt(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[jN.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.astNode.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r!=null&&r.astNode){let n=yt(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var HD=Kt(wr(),1);function nT(t){let e=[],r=t.Grammar;for(let n of r.rules)$r(n)&&zg(n)&&Vg(Wi(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:of}}var rw=typeof global=="object"&&global&&global.Object===Object&&global,hf=rw;var nw=typeof self=="object"&&self&&self.Object===Object&&self,iw=hf||nw||Function("return this")(),Gt=iw;var ow=Gt.Symbol,Qt=ow;var qN=Object.prototype,sw=qN.hasOwnProperty,aw=qN.toString,_l=Qt?Qt.toStringTag:void 0;function lw(t){var e=sw.call(t,_l),r=t[_l];try{t[_l]=void 0;var n=!0}catch{}var i=aw.call(t);return n&&(e?t[_l]=r:delete t[_l]),i}var HN=lw;var uw=Object.prototype,cw=uw.toString;function fw(t){return cw.call(t)}var KN=fw;var dw="[object Null]",pw="[object Undefined]",zN=Qt?Qt.toStringTag:void 0;function mw(t){return t==null?t===void 0?pw:dw:zN&&zN in Object(t)?HN(t):KN(t)}var xr=mw;function hw(t){return t!=null&&typeof t=="object"}var Pt=hw;var gw="[object Symbol]";function Tw(t){return typeof t=="symbol"||Pt(t)&&xr(t)==gw}var wn=Tw;function yw(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var $n=yw;var _w=Array.isArray,ie=_w;var vw=1/0,YN=Qt?Qt.prototype:void 0,XN=YN?YN.toString:void 0;function JN(t){if(typeof t=="string")return t;if(ie(t))return $n(t,JN)+"";if(wn(t))return XN?XN.call(t):"";var e=t+"";return e=="0"&&1/t==-vw?"-0":e}var QN=JN;var Rw=/\s/;function xw(t){for(var e=t.length;e--&&Rw.test(t.charAt(e)););return e}var ZN=xw;var Nw=/^\s+/;function Ow(t){return t&&t.slice(0,ZN(t)+1).replace(Nw,"")}var eO=Ow;function Iw(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var _t=Iw;var tO=NaN,Ew=/^[-+]0x[0-9a-f]+$/i,Sw=/^0b[01]+$/i,Aw=/^0o[0-7]+$/i,Dw=parseInt;function Cw(t){if(typeof t=="number")return t;if(wn(t))return tO;if(_t(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=_t(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=eO(t);var r=Sw.test(t);return r||Aw.test(t)?Dw(t.slice(2),r?2:8):Ew.test(t)?tO:+t}var rO=Cw;var nO=1/0,bw=17976931348623157e292;function kw(t){if(!t)return t===0?t:0;if(t=rO(t),t===nO||t===-nO){var e=t<0?-1:1;return e*bw}return t===t?t:0}var iO=kw;function Lw(t){var e=iO(t),r=e%1;return e===e?r?e-r:e:0}var Pn=Lw;function ww(t){return t}var Br=ww;var $w="[object AsyncFunction]",Pw="[object Function]",Mw="[object GeneratorFunction]",Fw="[object Proxy]";function Uw(t){if(!_t(t))return!1;var e=xr(t);return e==Pw||e==Mw||e==$w||e==Fw}var Nr=Uw;var Bw=Gt["__core-js_shared__"],gf=Bw;var oO=function(){var t=/[^.]+$/.exec(gf&&gf.keys&&gf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ww(t){return!!oO&&oO in t}var sO=Ww;var Gw=Function.prototype,Vw=Gw.toString;function jw(t){if(t!=null){try{return Vw.call(t)}catch{}try{return t+""}catch{}}return""}var ii=jw;var qw=/[\\^$.*+?()[\]{}|]/g,Hw=/^\[object .+?Constructor\]$/,Kw=Function.prototype,zw=Object.prototype,Yw=Kw.toString,Xw=zw.hasOwnProperty,Jw=RegExp("^"+Yw.call(Xw).replace(qw,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Qw(t){if(!_t(t)||sO(t))return!1;var e=Nr(t)?Jw:Hw;return e.test(ii(t))}var aO=Qw;function Zw(t,e){return t==null?void 0:t[e]}var lO=Zw;function e$(t,e){var r=lO(t,e);return aO(r)?r:void 0}var Wr=e$;var t$=Wr(Gt,"WeakMap"),Tf=t$;var uO=Object.create,r$=function(){function t(){}return function(e){if(!_t(e))return{};if(uO)return uO(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),cO=r$;function n$(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var fO=n$;function i$(){}var vt=i$;function o$(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var dO=o$;var s$=800,a$=16,l$=Date.now;function u$(t){var e=0,r=0;return function(){var n=l$(),i=a$-(n-r);if(r=n,i>0){if(++e>=s$)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var pO=u$;function c$(t){return function(){return t}}var mO=c$;var f$=function(){try{var t=Wr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Gs=f$;var d$=Gs?function(t,e){return Gs(t,"toString",{configurable:!0,enumerable:!1,value:mO(e),writable:!0})}:Br,hO=d$;var p$=pO(hO),gO=p$;function m$(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var yf=m$;function h$(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}var _f=h$;function g$(t){return t!==t}var TO=g$;function T$(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var yO=T$;function y$(t,e,r){return e===e?yO(t,e,r):_f(t,TO,r)}var Vs=y$;function _$(t,e){var r=t==null?0:t.length;return!!r&&Vs(t,e,0)>-1}var vf=_$;var v$=9007199254740991,R$=/^(?:0|[1-9]\d*)$/;function x$(t,e){var r=typeof t;return e=e==null?v$:e,!!e&&(r=="number"||r!="symbol"&&R$.test(t))&&t>-1&&t%1==0&&t<e}var Gi=x$;function N$(t,e,r){e=="__proto__"&&Gs?Gs(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var js=N$;function O$(t,e){return t===e||t!==t&&e!==e}var Mn=O$;var I$=Object.prototype,E$=I$.hasOwnProperty;function S$(t,e,r){var n=t[e];(!(E$.call(t,e)&&Mn(n,r))||r===void 0&&!(e in t))&&js(t,e,r)}var Vi=S$;function A$(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=n?n(r[a],t[a],a,r,t):void 0;l===void 0&&(l=t[a]),i?js(r,a,l):Vi(r,a,l)}return r}var Fn=A$;var _O=Math.max;function D$(t,e,r){return e=_O(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=_O(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),fO(t,this,a)}}var vO=D$;function C$(t,e){return gO(vO(t,e,Br),t+"")}var qs=C$;var b$=9007199254740991;function k$(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=b$}var Hs=k$;function L$(t){return t!=null&&Hs(t.length)&&!Nr(t)}var Vt=L$;function w$(t,e,r){if(!_t(r))return!1;var n=typeof e;return(n=="number"?Vt(r)&&Gi(e,r.length):n=="string"&&e in r)?Mn(r[e],t):!1}var ji=w$;function $$(t){return qs(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&ji(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}var RO=$$;var P$=Object.prototype;function M$(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||P$;return t===r}var Un=M$;function F$(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var xO=F$;var U$="[object Arguments]";function B$(t){return Pt(t)&&xr(t)==U$}var iT=B$;var NO=Object.prototype,W$=NO.hasOwnProperty,G$=NO.propertyIsEnumerable,V$=iT(function(){return arguments}())?iT:function(t){return Pt(t)&&W$.call(t,"callee")&&!G$.call(t,"callee")},qi=V$;function j$(){return!1}var OO=j$;var SO=typeof exports=="object"&&exports&&!exports.nodeType&&exports,IO=SO&&typeof module=="object"&&module&&!module.nodeType&&module,q$=IO&&IO.exports===SO,EO=q$?Gt.Buffer:void 0,H$=EO?EO.isBuffer:void 0,K$=H$||OO,oi=K$;var z$="[object Arguments]",Y$="[object Array]",X$="[object Boolean]",J$="[object Date]",Q$="[object Error]",Z$="[object Function]",eP="[object Map]",tP="[object Number]",rP="[object Object]",nP="[object RegExp]",iP="[object Set]",oP="[object String]",sP="[object WeakMap]",aP="[object ArrayBuffer]",lP="[object DataView]",uP="[object Float32Array]",cP="[object Float64Array]",fP="[object Int8Array]",dP="[object Int16Array]",pP="[object Int32Array]",mP="[object Uint8Array]",hP="[object Uint8ClampedArray]",gP="[object Uint16Array]",TP="[object Uint32Array]",nt={};nt[uP]=nt[cP]=nt[fP]=nt[dP]=nt[pP]=nt[mP]=nt[hP]=nt[gP]=nt[TP]=!0;nt[z$]=nt[Y$]=nt[aP]=nt[X$]=nt[lP]=nt[J$]=nt[Q$]=nt[Z$]=nt[eP]=nt[tP]=nt[rP]=nt[nP]=nt[iP]=nt[oP]=nt[sP]=!1;function yP(t){return Pt(t)&&Hs(t.length)&&!!nt[xr(t)]}var AO=yP;function _P(t){return function(e){return t(e)}}var Bn=_P;var DO=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vl=DO&&typeof module=="object"&&module&&!module.nodeType&&module,vP=vl&&vl.exports===DO,oT=vP&&hf.process,RP=function(){try{var t=vl&&vl.require&&vl.require("util").types;return t||oT&&oT.binding&&oT.binding("util")}catch{}}(),cn=RP;var CO=cn&&cn.isTypedArray,xP=CO?Bn(CO):AO,Ks=xP;var NP=Object.prototype,OP=NP.hasOwnProperty;function IP(t,e){var r=ie(t),n=!r&&qi(t),i=!r&&!n&&oi(t),o=!r&&!n&&!i&&Ks(t),s=r||n||i||o,a=s?xO(t.length,String):[],l=a.length;for(var u in t)(e||OP.call(t,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Gi(u,l)))&&a.push(u);return a}var Rf=IP;function EP(t,e){return function(r){return t(e(r))}}var xf=EP;var SP=xf(Object.keys,Object),bO=SP;var AP=Object.prototype,DP=AP.hasOwnProperty;function CP(t){if(!Un(t))return bO(t);var e=[];for(var r in Object(t))DP.call(t,r)&&r!="constructor"&&e.push(r);return e}var Nf=CP;function bP(t){return Vt(t)?Rf(t):Nf(t)}var Xe=bP;var kP=Object.prototype,LP=kP.hasOwnProperty,wP=RO(function(t,e){if(Un(e)||Vt(e)){Fn(e,Xe(e),t);return}for(var r in e)LP.call(e,r)&&Vi(t,r,e[r])}),sr=wP;function $P(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var kO=$P;var PP=Object.prototype,MP=PP.hasOwnProperty;function FP(t){if(!_t(t))return kO(t);var e=Un(t),r=[];for(var n in t)n=="constructor"&&(e||!MP.call(t,n))||r.push(n);return r}var LO=FP;function UP(t){return Vt(t)?Rf(t,!0):LO(t)}var Hi=UP;var BP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,WP=/^\w*$/;function GP(t,e){if(ie(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||wn(t)?!0:WP.test(t)||!BP.test(t)||e!=null&&t in Object(e)}var zs=GP;var VP=Wr(Object,"create"),si=VP;function jP(){this.__data__=si?si(null):{},this.size=0}var wO=jP;function qP(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var $O=qP;var HP="__lodash_hash_undefined__",KP=Object.prototype,zP=KP.hasOwnProperty;function YP(t){var e=this.__data__;if(si){var r=e[t];return r===HP?void 0:r}return zP.call(e,t)?e[t]:void 0}var PO=YP;var XP=Object.prototype,JP=XP.hasOwnProperty;function QP(t){var e=this.__data__;return si?e[t]!==void 0:JP.call(e,t)}var MO=QP;var ZP="__lodash_hash_undefined__";function e0(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=si&&e===void 0?ZP:e,this}var FO=e0;function Ys(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ys.prototype.clear=wO;Ys.prototype.delete=$O;Ys.prototype.get=PO;Ys.prototype.has=MO;Ys.prototype.set=FO;var sT=Ys;function t0(){this.__data__=[],this.size=0}var UO=t0;function r0(t,e){for(var r=t.length;r--;)if(Mn(t[r][0],e))return r;return-1}var Ki=r0;var n0=Array.prototype,i0=n0.splice;function o0(t){var e=this.__data__,r=Ki(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():i0.call(e,r,1),--this.size,!0}var BO=o0;function s0(t){var e=this.__data__,r=Ki(e,t);return r<0?void 0:e[r][1]}var WO=s0;function a0(t){return Ki(this.__data__,t)>-1}var GO=a0;function l0(t,e){var r=this.__data__,n=Ki(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var VO=l0;function Xs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Xs.prototype.clear=UO;Xs.prototype.delete=BO;Xs.prototype.get=WO;Xs.prototype.has=GO;Xs.prototype.set=VO;var zi=Xs;var u0=Wr(Gt,"Map"),Yi=u0;function c0(){this.size=0,this.__data__={hash:new sT,map:new(Yi||zi),string:new sT}}var jO=c0;function f0(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var qO=f0;function d0(t,e){var r=t.__data__;return qO(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Xi=d0;function p0(t){var e=Xi(this,t).delete(t);return this.size-=e?1:0,e}var HO=p0;function m0(t){return Xi(this,t).get(t)}var KO=m0;function h0(t){return Xi(this,t).has(t)}var zO=h0;function g0(t,e){var r=Xi(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var YO=g0;function Js(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Js.prototype.clear=jO;Js.prototype.delete=HO;Js.prototype.get=KO;Js.prototype.has=zO;Js.prototype.set=YO;var Co=Js;var T0="Expected a function";function aT(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(T0);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(aT.Cache||Co),r}aT.Cache=Co;var XO=aT;var y0=500;function _0(t){var e=XO(t,function(n){return r.size===y0&&r.clear(),n}),r=e.cache;return e}var JO=_0;var v0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,R0=/\\(\\)?/g,x0=JO(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(v0,function(r,n,i,o){e.push(i?o.replace(R0,"$1"):n||r)}),e}),QO=x0;function N0(t){return t==null?"":QN(t)}var ZO=N0;function O0(t,e){return ie(t)?t:zs(t,e)?[t]:QO(ZO(t))}var Ji=O0;var I0=1/0;function E0(t){if(typeof t=="string"||wn(t))return t;var e=t+"";return e=="0"&&1/t==-I0?"-0":e}var Wn=E0;function S0(t,e){e=Ji(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Wn(e[r++])];return r&&r==n?t:void 0}var Qs=S0;function A0(t,e,r){var n=t==null?void 0:Qs(t,e);return n===void 0?r:n}var eI=A0;function D0(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var Zs=D0;var tI=Qt?Qt.isConcatSpreadable:void 0;function C0(t){return ie(t)||qi(t)||!!(tI&&t&&t[tI])}var rI=C0;function nI(t,e,r,n,i){var o=-1,s=t.length;for(r||(r=rI),i||(i=[]);++o<s;){var a=t[o];e>0&&r(a)?e>1?nI(a,e-1,r,n,i):Zs(i,a):n||(i[i.length]=a)}return i}var ea=nI;function b0(t){var e=t==null?0:t.length;return e?ea(t,1):[]}var Mt=b0;var k0=xf(Object.getPrototypeOf,Object),Of=k0;function L0(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}var If=L0;function w0(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}var iI=w0;function $0(){this.__data__=new zi,this.size=0}var oI=$0;function P0(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var sI=P0;function M0(t){return this.__data__.get(t)}var aI=M0;function F0(t){return this.__data__.has(t)}var lI=F0;var U0=200;function B0(t,e){var r=this.__data__;if(r instanceof zi){var n=r.__data__;if(!Yi||n.length<U0-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Co(n)}return r.set(t,e),this.size=r.size,this}var uI=B0;function ta(t){var e=this.__data__=new zi(t);this.size=e.size}ta.prototype.clear=oI;ta.prototype.delete=sI;ta.prototype.get=aI;ta.prototype.has=lI;ta.prototype.set=uI;var Qi=ta;function W0(t,e){return t&&Fn(e,Xe(e),t)}var cI=W0;function G0(t,e){return t&&Fn(e,Hi(e),t)}var fI=G0;var hI=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dI=hI&&typeof module=="object"&&module&&!module.nodeType&&module,V0=dI&&dI.exports===hI,pI=V0?Gt.Buffer:void 0,mI=pI?pI.allocUnsafe:void 0;function j0(t,e){if(e)return t.slice();var r=t.length,n=mI?mI(r):new t.constructor(r);return t.copy(n),n}var gI=j0;function q0(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}var ra=q0;function H0(){return[]}var Ef=H0;var K0=Object.prototype,z0=K0.propertyIsEnumerable,TI=Object.getOwnPropertySymbols,Y0=TI?function(t){return t==null?[]:(t=Object(t),ra(TI(t),function(e){return z0.call(t,e)}))}:Ef,na=Y0;function X0(t,e){return Fn(t,na(t),e)}var yI=X0;var J0=Object.getOwnPropertySymbols,Q0=J0?function(t){for(var e=[];t;)Zs(e,na(t)),t=Of(t);return e}:Ef,Sf=Q0;function Z0(t,e){return Fn(t,Sf(t),e)}var _I=Z0;function eM(t,e,r){var n=e(t);return ie(t)?n:Zs(n,r(t))}var Af=eM;function tM(t){return Af(t,Xe,na)}var Rl=tM;function rM(t){return Af(t,Hi,Sf)}var Df=rM;var nM=Wr(Gt,"DataView"),Cf=nM;var iM=Wr(Gt,"Promise"),bf=iM;var oM=Wr(Gt,"Set"),Zi=oM;var vI="[object Map]",sM="[object Object]",RI="[object Promise]",xI="[object Set]",NI="[object WeakMap]",OI="[object DataView]",aM=ii(Cf),lM=ii(Yi),uM=ii(bf),cM=ii(Zi),fM=ii(Tf),bo=xr;(Cf&&bo(new Cf(new ArrayBuffer(1)))!=OI||Yi&&bo(new Yi)!=vI||bf&&bo(bf.resolve())!=RI||Zi&&bo(new Zi)!=xI||Tf&&bo(new Tf)!=NI)&&(bo=function(t){var e=xr(t),r=e==sM?t.constructor:void 0,n=r?ii(r):"";if(n)switch(n){case aM:return OI;case lM:return vI;case uM:return RI;case cM:return xI;case fM:return NI}return e});var Nn=bo;var dM=Object.prototype,pM=dM.hasOwnProperty;function mM(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&pM.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var II=mM;var hM=Gt.Uint8Array,ia=hM;function gM(t){var e=new t.constructor(t.byteLength);return new ia(e).set(new ia(t)),e}var oa=gM;function TM(t,e){var r=e?oa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var EI=TM;var yM=/\w*$/;function _M(t){var e=new t.constructor(t.source,yM.exec(t));return e.lastIndex=t.lastIndex,e}var SI=_M;var AI=Qt?Qt.prototype:void 0,DI=AI?AI.valueOf:void 0;function vM(t){return DI?Object(DI.call(t)):{}}var CI=vM;function RM(t,e){var r=e?oa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var bI=RM;var xM="[object Boolean]",NM="[object Date]",OM="[object Map]",IM="[object Number]",EM="[object RegExp]",SM="[object Set]",AM="[object String]",DM="[object Symbol]",CM="[object ArrayBuffer]",bM="[object DataView]",kM="[object Float32Array]",LM="[object Float64Array]",wM="[object Int8Array]",$M="[object Int16Array]",PM="[object Int32Array]",MM="[object Uint8Array]",FM="[object Uint8ClampedArray]",UM="[object Uint16Array]",BM="[object Uint32Array]";function WM(t,e,r){var n=t.constructor;switch(e){case CM:return oa(t);case xM:case NM:return new n(+t);case bM:return EI(t,r);case kM:case LM:case wM:case $M:case PM:case MM:case FM:case UM:case BM:return bI(t,r);case OM:return new n;case IM:case AM:return new n(t);case EM:return SI(t);case SM:return new n;case DM:return CI(t)}}var kI=WM;function GM(t){return typeof t.constructor=="function"&&!Un(t)?cO(Of(t)):{}}var LI=GM;var VM="[object Map]";function jM(t){return Pt(t)&&Nn(t)==VM}var wI=jM;var $I=cn&&cn.isMap,qM=$I?Bn($I):wI,PI=qM;var HM="[object Set]";function KM(t){return Pt(t)&&Nn(t)==HM}var MI=KM;var FI=cn&&cn.isSet,zM=FI?Bn(FI):MI,UI=zM;var YM=1,XM=2,JM=4,BI="[object Arguments]",QM="[object Array]",ZM="[object Boolean]",eF="[object Date]",tF="[object Error]",WI="[object Function]",rF="[object GeneratorFunction]",nF="[object Map]",iF="[object Number]",GI="[object Object]",oF="[object RegExp]",sF="[object Set]",aF="[object String]",lF="[object Symbol]",uF="[object WeakMap]",cF="[object ArrayBuffer]",fF="[object DataView]",dF="[object Float32Array]",pF="[object Float64Array]",mF="[object Int8Array]",hF="[object Int16Array]",gF="[object Int32Array]",TF="[object Uint8Array]",yF="[object Uint8ClampedArray]",_F="[object Uint16Array]",vF="[object Uint32Array]",Je={};Je[BI]=Je[QM]=Je[cF]=Je[fF]=Je[ZM]=Je[eF]=Je[dF]=Je[pF]=Je[mF]=Je[hF]=Je[gF]=Je[nF]=Je[iF]=Je[GI]=Je[oF]=Je[sF]=Je[aF]=Je[lF]=Je[TF]=Je[yF]=Je[_F]=Je[vF]=!0;Je[tF]=Je[WI]=Je[uF]=!1;function kf(t,e,r,n,i,o){var s,a=e&YM,l=e&XM,u=e&JM;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!_t(t))return t;var c=ie(t);if(c){if(s=II(t),!a)return dO(t,s)}else{var f=Nn(t),d=f==WI||f==rF;if(oi(t))return gI(t,a);if(f==GI||f==BI||d&&!i){if(s=l||d?{}:LI(t),!a)return l?_I(t,fI(s,t)):yI(t,cI(s,t))}else{if(!Je[f])return i?t:{};s=kI(t,f,a)}}o||(o=new Qi);var h=o.get(t);if(h)return h;o.set(t,s),UI(t)?t.forEach(function(E){s.add(kf(E,e,r,E,t,o))}):PI(t)&&t.forEach(function(E,I){s.set(I,kf(E,e,r,I,t,o))});var _=u?l?Df:Rl:l?Hi:Xe,x=c?void 0:_(t);return yf(x||t,function(E,I){x&&(I=E,E=t[I]),Vi(s,I,kf(E,e,r,I,t,o))}),s}var VI=kf;var RF=4;function xF(t){return VI(t,RF)}var Qe=xF;function NF(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}var Gn=NF;var OF="__lodash_hash_undefined__";function IF(t){return this.__data__.set(t,OF),this}var jI=IF;function EF(t){return this.__data__.has(t)}var qI=EF;function Lf(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Co;++e<r;)this.add(t[e])}Lf.prototype.add=Lf.prototype.push=jI;Lf.prototype.has=qI;var sa=Lf;function SF(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var wf=SF;function AF(t,e){return t.has(e)}var aa=AF;var DF=1,CF=2;function bF(t,e,r,n,i,o){var s=r&DF,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(t),c=o.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,h=r&CF?new sa:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var _=t[f],x=e[f];if(n)var E=s?n(x,_,f,e,t,o):n(_,x,f,t,e,o);if(E!==void 0){if(E)continue;d=!1;break}if(h){if(!wf(e,function(I,y){if(!aa(h,y)&&(_===I||i(_,I,r,n,o)))return h.push(y)})){d=!1;break}}else if(!(_===x||i(_,x,r,n,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var $f=bF;function kF(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}var HI=kF;function LF(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var la=LF;var wF=1,$F=2,PF="[object Boolean]",MF="[object Date]",FF="[object Error]",UF="[object Map]",BF="[object Number]",WF="[object RegExp]",GF="[object Set]",VF="[object String]",jF="[object Symbol]",qF="[object ArrayBuffer]",HF="[object DataView]",KI=Qt?Qt.prototype:void 0,lT=KI?KI.valueOf:void 0;function KF(t,e,r,n,i,o,s){switch(r){case HF:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case qF:return!(t.byteLength!=e.byteLength||!o(new ia(t),new ia(e)));case PF:case MF:case BF:return Mn(+t,+e);case FF:return t.name==e.name&&t.message==e.message;case WF:case VF:return t==e+"";case UF:var a=HI;case GF:var l=n&wF;if(a||(a=la),t.size!=e.size&&!l)return!1;var u=s.get(t);if(u)return u==e;n|=$F,s.set(t,e);var c=$f(a(t),a(e),n,i,o,s);return s.delete(t),c;case jF:if(lT)return lT.call(t)==lT.call(e)}return!1}var zI=KF;var zF=1,YF=Object.prototype,XF=YF.hasOwnProperty;function JF(t,e,r,n,i,o){var s=r&zF,a=Rl(t),l=a.length,u=Rl(e),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in e:XF.call(e,d)))return!1}var h=o.get(t),_=o.get(e);if(h&&_)return h==e&&_==t;var x=!0;o.set(t,e),o.set(e,t);for(var E=s;++f<l;){d=a[f];var I=t[d],y=e[d];if(n)var T=s?n(y,I,d,e,t,o):n(I,y,d,t,e,o);if(!(T===void 0?I===y||i(I,y,r,n,o):T)){x=!1;break}E||(E=d=="constructor")}if(x&&!E){var k=t.constructor,B=e.constructor;k!=B&&"constructor"in t&&"constructor"in e&&!(typeof k=="function"&&k instanceof k&&typeof B=="function"&&B instanceof B)&&(x=!1)}return o.delete(t),o.delete(e),x}var YI=JF;var QF=1,XI="[object Arguments]",JI="[object Array]",Pf="[object Object]",ZF=Object.prototype,QI=ZF.hasOwnProperty;function eU(t,e,r,n,i,o){var s=ie(t),a=ie(e),l=s?JI:Nn(t),u=a?JI:Nn(e);l=l==XI?Pf:l,u=u==XI?Pf:u;var c=l==Pf,f=u==Pf,d=l==u;if(d&&oi(t)){if(!oi(e))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new Qi),s||Ks(t)?$f(t,e,r,n,i,o):zI(t,e,l,r,n,i,o);if(!(r&QF)){var h=c&&QI.call(t,"__wrapped__"),_=f&&QI.call(e,"__wrapped__");if(h||_){var x=h?t.value():t,E=_?e.value():e;return o||(o=new Qi),i(x,E,r,n,o)}}return d?(o||(o=new Qi),YI(t,e,r,n,i,o)):!1}var ZI=eU;function eE(t,e,r,n,i){return t===e?!0:t==null||e==null||!Pt(t)&&!Pt(e)?t!==t&&e!==e:ZI(t,e,r,n,eE,i)}var Mf=eE;var tU=1,rU=2;function nU(t,e,r,n){var i=r.length,o=i,s=!n;if(t==null)return!o;for(t=Object(t);i--;){var a=r[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=r[i];var l=a[0],u=t[l],c=a[1];if(s&&a[2]){if(u===void 0&&!(l in t))return!1}else{var f=new Qi;if(n)var d=n(u,c,l,t,e,f);if(!(d===void 0?Mf(c,u,tU|rU,n,f):d))return!1}}return!0}var tE=nU;function iU(t){return t===t&&!_t(t)}var Ff=iU;function oU(t){for(var e=Xe(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Ff(i)]}return e}var rE=oU;function sU(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Uf=sU;function aU(t){var e=rE(t);return e.length==1&&e[0][2]?Uf(e[0][0],e[0][1]):function(r){return r===t||tE(r,t,e)}}var nE=aU;function lU(t,e){return t!=null&&e in Object(t)}var iE=lU;function uU(t,e,r){e=Ji(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var s=Wn(e[n]);if(!(o=t!=null&&r(t,s)))break;t=t[s]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&Hs(i)&&Gi(s,i)&&(ie(t)||qi(t)))}var Bf=uU;function cU(t,e){return t!=null&&Bf(t,e,iE)}var oE=cU;var fU=1,dU=2;function pU(t,e){return zs(t)&&Ff(e)?Uf(Wn(t),e):function(r){var n=eI(r,t);return n===void 0&&n===e?oE(r,t):Mf(e,n,fU|dU)}}var sE=pU;function mU(t){return function(e){return e==null?void 0:e[t]}}var aE=mU;function hU(t){return function(e){return Qs(e,t)}}var lE=hU;function gU(t){return zs(t)?aE(Wn(t)):lE(t)}var uE=gU;function TU(t){return typeof t=="function"?t:t==null?Br:typeof t=="object"?ie(t)?sE(t[0],t[1]):nE(t):uE(t)}var St=TU;function yU(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var s=t[i];e(n,s,r(s),t)}return n}var cE=yU;function _U(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var l=s[t?a:++i];if(r(o[l],l,o)===!1)break}return e}}var fE=_U;var vU=fE(),dE=vU;function RU(t,e){return t&&dE(t,e,Xe)}var pE=RU;function xU(t,e){return function(r,n){if(r==null)return r;if(!Vt(r))return t(r,n);for(var i=r.length,o=e?i:-1,s=Object(r);(e?o--:++o<i)&&n(s[o],o,s)!==!1;);return r}}var mE=xU;var NU=mE(pE),Gr=NU;function OU(t,e,r,n){return Gr(t,function(i,o,s){e(n,i,r(i),s)}),n}var hE=OU;function IU(t,e){return function(r,n){var i=ie(r)?cE:hE,o=e?e():{};return i(r,t,St(n,2),o)}}var gE=IU;var TE=Object.prototype,EU=TE.hasOwnProperty,SU=qs(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&ji(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],s=Hi(o),a=-1,l=s.length;++a<l;){var u=s[a],c=t[u];(c===void 0||Mn(c,TE[u])&&!EU.call(t,u))&&(t[u]=o[u])}return t}),ua=SU;function AU(t){return Pt(t)&&Vt(t)}var uT=AU;function DU(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}var Wf=DU;var CU=200;function bU(t,e,r,n){var i=-1,o=vf,s=!0,a=t.length,l=[],u=e.length;if(!a)return l;r&&(e=$n(e,Bn(r))),n?(o=Wf,s=!1):e.length>=CU&&(o=aa,s=!1,e=new sa(e));e:for(;++i<a;){var c=t[i],f=r==null?c:r(c);if(c=n||c!==0?c:0,s&&f===f){for(var d=u;d--;)if(e[d]===f)continue e;l.push(c)}else o(e,f,n)||l.push(c)}return l}var yE=bU;var kU=qs(function(t,e){return uT(t)?yE(t,ea(e,1,uT,!0)):[]}),eo=kU;function LU(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Vn=LU;function wU(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Pn(e),If(t,e<0?0:e,n)):[]}var Ft=wU;function $U(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Pn(e),e=n-e,If(t,0,e<0?0:e)):[]}var ai=$U;function PU(t){return typeof t=="function"?t:Br}var _E=PU;function MU(t,e){var r=ie(t)?yf:Gr;return r(t,_E(e))}var J=MU;function FU(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var vE=FU;function UU(t,e){var r=!0;return Gr(t,function(n,i,o){return r=!!e(n,i,o),r}),r}var RE=UU;function BU(t,e,r){var n=ie(t)?vE:RE;return r&&ji(t,e,r)&&(e=void 0),n(t,St(e,3))}var hr=BU;function WU(t,e){var r=[];return Gr(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}var Gf=WU;function GU(t,e){var r=ie(t)?ra:Gf;return r(t,St(e,3))}var Zt=GU;function VU(t){return function(e,r,n){var i=Object(e);if(!Vt(e)){var o=St(r,3);e=Xe(e),r=function(a){return o(i[a],a,i)}}var s=t(e,r,n);return s>-1?i[o?e[s]:s]:void 0}}var xE=VU;var jU=Math.max;function qU(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Pn(r);return i<0&&(i=jU(n+i,0)),_f(t,St(e,3),i)}var NE=qU;var HU=xE(NE),jn=HU;function KU(t){return t&&t.length?t[0]:void 0}var er=KU;function zU(t,e){var r=-1,n=Vt(t)?Array(t.length):[];return Gr(t,function(i,o,s){n[++r]=e(i,o,s)}),n}var OE=zU;function YU(t,e){var r=ie(t)?$n:OE;return r(t,St(e,3))}var K=YU;function XU(t,e){return ea(K(t,e),1)}var ar=XU;var JU=Object.prototype,QU=JU.hasOwnProperty,ZU=gE(function(t,e,r){QU.call(t,r)?t[r].push(e):js(t,r,[e])}),cT=ZU;var e1=Object.prototype,t1=e1.hasOwnProperty;function r1(t,e){return t!=null&&t1.call(t,e)}var IE=r1;function n1(t,e){return t!=null&&Bf(t,e,IE)}var ee=n1;var i1="[object String]";function o1(t){return typeof t=="string"||!ie(t)&&Pt(t)&&xr(t)==i1}var zt=o1;function s1(t,e){return $n(e,function(r){return t[r]})}var EE=s1;function a1(t){return t==null?[]:EE(t,Xe(t))}var We=a1;var l1=Math.max;function u1(t,e,r,n){t=Vt(t)?t:We(t),r=r&&!n?Pn(r):0;var i=t.length;return r<0&&(r=l1(i+r,0)),zt(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&Vs(t,e,r)>-1}var ut=u1;var c1=Math.max;function f1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Pn(r);return i<0&&(i=c1(n+i,0)),Vs(t,e,i)}var Vf=f1;var d1="[object Map]",p1="[object Set]",m1=Object.prototype,h1=m1.hasOwnProperty;function g1(t){if(t==null)return!0;if(Vt(t)&&(ie(t)||typeof t=="string"||typeof t.splice=="function"||oi(t)||Ks(t)||qi(t)))return!t.length;var e=Nn(t);if(e==d1||e==p1)return!t.size;if(Un(t))return!Nf(t).length;for(var r in t)if(h1.call(t,r))return!1;return!0}var ye=g1;var T1="[object RegExp]";function y1(t){return Pt(t)&&xr(t)==T1}var SE=y1;var AE=cn&&cn.isRegExp,_1=AE?Bn(AE):SE,fn=_1;function v1(t){return t===void 0}var gr=v1;function R1(t,e){return t<e}var DE=R1;function x1(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],s=e(o);if(s!=null&&(a===void 0?s===s&&!wn(s):r(s,a)))var a=s,l=o}return l}var CE=x1;function N1(t){return t&&t.length?CE(t,Br,DE):void 0}var bE=N1;var O1="Expected a function";function I1(t){if(typeof t!="function")throw new TypeError(O1);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var kE=I1;function E1(t,e,r,n){if(!_t(t))return t;e=Ji(e,t);for(var i=-1,o=e.length,s=o-1,a=t;a!=null&&++i<o;){var l=Wn(e[i]),u=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=s){var c=a[l];u=n?n(c,l,a):void 0,u===void 0&&(u=_t(c)?c:Gi(e[i+1])?[]:{})}Vi(a,l,u),a=a[l]}return t}var LE=E1;function S1(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var s=e[n],a=Qs(t,s);r(a,s)&&LE(o,Ji(s,t),a)}return o}var wE=S1;function A1(t,e){if(t==null)return{};var r=$n(Df(t),function(n){return[n]});return e=St(e),wE(t,r,function(n,i){return e(n,i[0])})}var Vr=A1;function D1(t,e,r,n,i){return i(t,function(o,s,a){r=n?(n=!1,o):e(r,o,s,a)}),r}var $E=D1;function C1(t,e,r){var n=ie(t)?iI:$E,i=arguments.length<3;return n(t,St(e,4),r,i,Gr)}var Rt=C1;function b1(t,e){var r=ie(t)?ra:Gf;return r(t,kE(St(e,3)))}var to=b1;function k1(t,e){var r;return Gr(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}var PE=k1;function L1(t,e,r){var n=ie(t)?wf:PE;return r&&ji(t,e,r)&&(e=void 0),n(t,St(e,3))}var xl=L1;var w1=1/0,$1=Zi&&1/la(new Zi([,-0]))[1]==w1?function(t){return new Zi(t)}:vt,ME=$1;var P1=200;function M1(t,e,r){var n=-1,i=vf,o=t.length,s=!0,a=[],l=a;if(r)s=!1,i=Wf;else if(o>=P1){var u=e?null:ME(t);if(u)return la(u);s=!1,i=aa,l=new sa}else l=e?[]:a;e:for(;++n<o;){var c=t[n],f=e?e(c):c;if(c=r||c!==0?c:0,s&&f===f){for(var d=l.length;d--;)if(l[d]===f)continue e;e&&l.push(f),a.push(c)}else i(l,f,r)||(l!==a&&l.push(f),a.push(c))}return a}var jf=M1;function F1(t){return t&&t.length?jf(t):[]}var ca=F1;function U1(t,e){return t&&t.length?jf(t,St(e,2)):[]}var FE=U1;function fa(t){console&&console.error&&console.error(`Error: ${t}`)}function Nl(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Ol(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function Il(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function B1(t){return W1(t)?t.LABEL:t.name}function W1(t){return zt(t.LABEL)&&t.LABEL!==""}var Qr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),J(this.definition,r=>{r.accept(e)})}},Me=class extends Qr{constructor(e){super([]),this.idx=1,sr(this,Vr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Or=class extends Qr{constructor(e){super(e.definition),this.orgText="",sr(this,Vr(e,r=>r!==void 0))}},Ze=class extends Qr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,sr(this,Vr(e,r=>r!==void 0))}},Fe=class extends Qr{constructor(e){super(e.definition),this.idx=1,sr(this,Vr(e,r=>r!==void 0))}},et=class extends Qr{constructor(e){super(e.definition),this.idx=1,sr(this,Vr(e,r=>r!==void 0))}},tt=class extends Qr{constructor(e){super(e.definition),this.idx=1,sr(this,Vr(e,r=>r!==void 0))}},Ee=class extends Qr{constructor(e){super(e.definition),this.idx=1,sr(this,Vr(e,r=>r!==void 0))}},He=class extends Qr{constructor(e){super(e.definition),this.idx=1,sr(this,Vr(e,r=>r!==void 0))}},Ke=class extends Qr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,sr(this,Vr(e,r=>r!==void 0))}},_e=class{constructor(e){this.idx=1,sr(this,Vr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function qf(t){return K(t,da)}function da(t){function e(r){return K(r,da)}if(t instanceof Me){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return zt(t.label)&&(r.label=t.label),r}else{if(t instanceof Ze)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Fe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof et)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof tt)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:da(new _e({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof He)return{type:"RepetitionWithSeparator",idx:t.idx,separator:da(new _e({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Ee)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Ke)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof _e){let r={type:"Terminal",name:t.terminalType.name,label:B1(t.terminalType),idx:t.idx};zt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=fn(n)?n.source:n),r}else{if(t instanceof Or)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var Ir=class{visit(e){let r=e;switch(r.constructor){case Me:return this.visitNonTerminal(r);case Ze:return this.visitAlternative(r);case Fe:return this.visitOption(r);case et:return this.visitRepetitionMandatory(r);case tt:return this.visitRepetitionMandatoryWithSeparator(r);case He:return this.visitRepetitionWithSeparator(r);case Ee:return this.visitRepetition(r);case Ke:return this.visitAlternation(r);case _e:return this.visitTerminal(r);case Or:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function fT(t){return t instanceof Ze||t instanceof Fe||t instanceof Ee||t instanceof et||t instanceof tt||t instanceof He||t instanceof _e||t instanceof Or}function ko(t,e=[]){return t instanceof Fe||t instanceof Ee||t instanceof He?!0:t instanceof Ke?xl(t.definition,n=>ko(n,e)):t instanceof Me&&ut(e,t)?!1:t instanceof Qr?(t instanceof Me&&e.push(t),hr(t.definition,n=>ko(n,e))):!1}function dT(t){return t instanceof Ke}function jr(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof et)return"AT_LEAST_ONE";if(t instanceof tt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ee)return"MANY";if(t instanceof _e)return"CONSUME";throw Error("non exhaustive match")}var li=class{walk(e,r=[]){J(e.definition,(n,i)=>{let o=Ft(e.definition,i+1);if(n instanceof Me)this.walkProdRef(n,o,r);else if(n instanceof _e)this.walkTerminal(n,o,r);else if(n instanceof Ze)this.walkFlat(n,o,r);else if(n instanceof Fe)this.walkOption(n,o,r);else if(n instanceof et)this.walkAtLeastOne(n,o,r);else if(n instanceof tt)this.walkAtLeastOneSep(n,o,r);else if(n instanceof He)this.walkManySep(n,o,r);else if(n instanceof Ee)this.walkMany(n,o,r);else if(n instanceof Ke)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let i=r.concat(n);this.walk(e,i)}walkOption(e,r,n){let i=r.concat(n);this.walk(e,i)}walkAtLeastOne(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkAtLeastOneSep(e,r,n){let i=UE(e,r,n);this.walk(e,i)}walkMany(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkManySep(e,r,n){let i=UE(e,r,n);this.walk(e,i)}walkOr(e,r,n){let i=r.concat(n);J(e.definition,o=>{let s=new Ze({definition:[o]});this.walk(s,i)})}};function UE(t,e,r){return[new Fe({definition:[new _e({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function Lo(t){if(t instanceof Me)return Lo(t.referencedRule);if(t instanceof _e)return j1(t);if(fT(t))return G1(t);if(dT(t))return V1(t);throw Error("non exhaustive match")}function G1(t){let e=[],r=t.definition,n=0,i=r.length>n,o,s=!0;for(;i&&s;)o=r[n],s=ko(o),e=e.concat(Lo(o)),n=n+1,i=r.length>n;return ca(e)}function V1(t){let e=K(t.definition,r=>Lo(r));return ca(Mt(e))}function j1(t){return[t.terminalType]}var Hf="_~IN~_";var pT=class extends li{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let i=q1(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),s=new Ze({definition:o}),a=Lo(s);this.follows[i]=a}};function BE(t){let e={};return J(t,r=>{let n=new pT(r).startWalking();sr(e,n)}),e}function q1(t,e){return t.name+e+Hf}var Kf={},H1=new Oo;function pa(t){let e=t.toString();if(Kf.hasOwnProperty(e))return Kf[e];{let r=H1.pattern(e);return Kf[e]=r,r}}function WE(){Kf={}}var VE="Complement Sets are not supported for first char optimization",El=`Unable to use "first char" lexer optimizations:
`;function jE(t,e=!1){try{let r=pa(t);return mT(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===VE)e&&Nl(`${El}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),fa(`${El}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function mT(t,e,r){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)mT(t.value[i],e,r);break;case"Alternative":let n=t.value;for(let i=0;i<n.length;i++){let o=n[i];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=o;switch(s.type){case"Character":zf(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(VE);J(s.value,l=>{if(typeof l=="number")zf(l,e,r);else{let u=l;if(r===!0)for(let c=u.from;c<=u.to;c++)zf(c,e,r);else{for(let c=u.from;c<=u.to&&c<ma;c++)zf(c,e,r);if(u.to>=ma){let c=u.from>=ma?u.from:ma,f=u.to,d=qn(c),h=qn(f);for(let _=d;_<=h;_++)e[_]=_}}}});break;case"Group":mT(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&hT(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return We(e)}function zf(t,e,r){let n=qn(t);e[n]=n,r===!0&&K1(t,e)}function K1(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let i=qn(n.charCodeAt(0));e[i]=i}else{let i=r.toLowerCase();if(i!==r){let o=qn(i.charCodeAt(0));e[o]=o}}}function GE(t,e){return jn(t.value,r=>{if(typeof r=="number")return ut(e,r);{let n=r;return jn(e,i=>n.from<=i&&i<=n.to)!==void 0}})}function hT(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ie(t.value)?hr(t.value,hT):hT(t.value):!1}var gT=class extends Ln{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){ut(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?GE(e,this.targetCharCodes)===void 0&&(this.found=!0):GE(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Yf(t,e){if(e instanceof RegExp){let r=pa(e),n=new gT(t);return n.visit(r),n.found}else return jn(e,r=>ut(t,r.charCodeAt(0)))!==void 0}var wo="PATTERN",ha="defaultMode",Xf="modes",yT=typeof new RegExp("(?:)").sticky=="boolean";function KE(t,e){e=ua(e,{useSticky:yT,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(y,T)=>T()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{fB()});let n;r("Reject Lexer.NA",()=>{n=to(t,y=>y[wo]===At.NA)});let i=!1,o;r("Transform Patterns",()=>{i=!1,o=K(n,y=>{let T=y[wo];if(fn(T)){let k=T.source;return k.length===1&&k!=="^"&&k!=="$"&&k!=="."&&!T.ignoreCase?k:k.length===2&&k[0]==="\\"&&!ut(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],k[1])?k[1]:e.useSticky?HE(T):qE(T)}else{if(Nr(T))return i=!0,{exec:T};if(typeof T=="object")return i=!0,T;if(typeof T=="string"){if(T.length===1)return T;{let k=T.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),B=new RegExp(k);return e.useSticky?HE(B):qE(B)}}else throw Error("non exhaustive match")}})});let s,a,l,u,c;r("misc mapping",()=>{s=K(n,y=>y.tokenTypeIdx),a=K(n,y=>{let T=y.GROUP;if(T!==At.SKIPPED){if(zt(T))return T;if(gr(T))return!1;throw Error("non exhaustive match")}}),l=K(n,y=>{let T=y.LONGER_ALT;if(T)return ie(T)?K(T,B=>Vf(n,B)):[Vf(n,T)]}),u=K(n,y=>y.PUSH_MODE),c=K(n,y=>ee(y,"POP_MODE"))});let f;r("Line Terminator Handling",()=>{let y=tS(e.lineTerminatorCharacters);f=K(n,T=>!1),e.positionTracking!=="onlyOffset"&&(f=K(n,T=>ee(T,"LINE_BREAKS")?!!T.LINE_BREAKS:eS(T,y)===!1&&Yf(y,T.PATTERN)))});let d,h,_,x;r("Misc Mapping #2",()=>{d=K(n,QE),h=K(o,uB),_=Rt(n,(y,T)=>{let k=T.GROUP;return zt(k)&&k!==At.SKIPPED&&(y[k]=[]),y},{}),x=K(o,(y,T)=>({pattern:o[T],longerAlt:l[T],canLineTerminator:f[T],isCustom:d[T],short:h[T],group:a[T],push:u[T],pop:c[T],tokenTypeIdx:s[T],tokenType:n[T]}))});let E=!0,I=[];return e.safeMode||r("First Char Optimization",()=>{I=Rt(n,(y,T,k)=>{if(typeof T.PATTERN=="string"){let B=T.PATTERN.charCodeAt(0),Q=qn(B);TT(y,Q,x[k])}else if(ie(T.START_CHARS_HINT)){let B;J(T.START_CHARS_HINT,Q=>{let ae=typeof Q=="string"?Q.charCodeAt(0):Q,le=qn(ae);B!==le&&(B=le,TT(y,le,x[k]))})}else if(fn(T.PATTERN))if(T.PATTERN.unicode)E=!1,e.ensureOptimizations&&fa(`${El}	Unable to analyze < ${T.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let B=jE(T.PATTERN,e.ensureOptimizations);ye(B)&&(E=!1),J(B,Q=>{TT(y,Q,x[k])})}else e.ensureOptimizations&&fa(`${El}	TokenType: <${T.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),E=!1;return y},[])}),{emptyGroups:_,patternIdxToConfig:x,charCodeToPatternIdxToConfig:I,hasCustom:i,canBeOptimized:E}}function zE(t,e){let r=[],n=Y1(t);r=r.concat(n.errors);let i=X1(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(z1(o)),r=r.concat(iB(o)),r=r.concat(oB(o,e)),r=r.concat(sB(o)),r}function z1(t){let e=[],r=Zt(t,n=>fn(n[wo]));return e=e.concat(Q1(r)),e=e.concat(tB(r)),e=e.concat(rB(r)),e=e.concat(nB(r)),e=e.concat(Z1(r)),e}function Y1(t){let e=Zt(t,i=>!ee(i,wo)),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:ct.MISSING_PATTERN,tokenTypes:[i]})),n=eo(t,e);return{errors:r,valid:n}}function X1(t){let e=Zt(t,i=>{let o=i[wo];return!fn(o)&&!Nr(o)&&!ee(o,"exec")&&!zt(o)}),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:ct.INVALID_PATTERN,tokenTypes:[i]})),n=eo(t,e);return{errors:r,valid:n}}var J1=/[^\\][$]/;function Q1(t){class e extends Ln{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=Zt(t,i=>{let o=i.PATTERN;try{let s=pa(o),a=new e;return a.visit(s),a.found}catch{return J1.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:ct.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function Z1(t){let e=Zt(t,n=>n.PATTERN.test(""));return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:ct.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var eB=/[^\\[][\^]|^\^/;function tB(t){class e extends Ln{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=Zt(t,i=>{let o=i.PATTERN;try{let s=pa(o),a=new e;return a.visit(s),a.found}catch{return eB.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:ct.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function rB(t){let e=Zt(t,n=>{let i=n[wo];return i instanceof RegExp&&(i.multiline||i.global)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:ct.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function nB(t){let e=[],r=K(t,o=>Rt(t,(s,a)=>(o.PATTERN.source===a.PATTERN.source&&!ut(e,a)&&a.PATTERN!==At.NA&&(e.push(a),s.push(a)),s),[]));r=Gn(r);let n=Zt(r,o=>o.length>1);return K(n,o=>{let s=K(o,l=>l.name);return{message:`The same RegExp pattern ->${er(o).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:ct.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function iB(t){let e=Zt(t,n=>{if(!ee(n,"GROUP"))return!1;let i=n.GROUP;return i!==At.SKIPPED&&i!==At.NA&&!zt(i)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:ct.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function oB(t,e){let r=Zt(t,i=>i.PUSH_MODE!==void 0&&!ut(e,i.PUSH_MODE));return K(r,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:ct.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function sB(t){let e=[],r=Rt(t,(n,i,o)=>{let s=i.PATTERN;return s===At.NA||(zt(s)?n.push({str:s,idx:o,tokenType:i}):fn(s)&&lB(s)&&n.push({str:s.source,idx:o,tokenType:i})),n},[]);return J(t,(n,i)=>{J(r,({str:o,idx:s,tokenType:a})=>{if(i<s&&aB(o,n.PATTERN)){let l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:ct.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function aB(t,e){if(fn(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(Nr(e))return e(t,0,[],{});if(ee(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function lB(t){return jn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function qE(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function HE(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function YE(t,e,r){let n=[];return ee(t,ha)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+ha+`> property in its definition
`,type:ct.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),ee(t,Xf)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Xf+`> property in its definition
`,type:ct.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),ee(t,Xf)&&ee(t,ha)&&!ee(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${ha}: <${t.defaultMode}>which does not exist
`,type:ct.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),ee(t,Xf)&&J(t.modes,(i,o)=>{J(i,(s,a)=>{if(gr(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${a}>
`,type:ct.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(ee(s,"LONGER_ALT")){let l=ie(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];J(l,u=>{!gr(u)&&!ut(i,u)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${s.name}> outside of mode <${o}>
`,type:ct.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function XE(t,e,r){let n=[],i=!1,o=Gn(Mt(We(t.modes))),s=to(o,l=>l[wo]===At.NA),a=tS(r);return e&&J(s,l=>{let u=eS(l,a);if(u!==!1){let f={message:cB(l,u),type:u.issue,tokenType:l};n.push(f)}else ee(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):Yf(a,l.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:ct.NO_LINE_BREAKS_FLAGS}),n}function JE(t){let e={},r=Xe(t);return J(r,n=>{let i=t[n];if(ie(i))e[n]=[];else throw Error("non exhaustive match")}),e}function QE(t){let e=t.PATTERN;if(fn(e))return!1;if(Nr(e))return!0;if(ee(e,"exec"))return!0;if(zt(e))return!1;throw Error("non exhaustive match")}function uB(t){return zt(t)&&t.length===1?t.charCodeAt(0):!1}var ZE={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function eS(t,e){if(ee(t,"LINE_BREAKS"))return!1;if(fn(t.PATTERN)){try{Yf(e,t.PATTERN)}catch(r){return{issue:ct.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(zt(t.PATTERN))return!1;if(QE(t))return{issue:ct.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function cB(t,e){if(e.issue===ct.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===ct.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function tS(t){return K(t,r=>zt(r)?r.charCodeAt(0):r)}function TT(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var ma=256,Jf=[];function qn(t){return t<ma?t:Jf[t]}function fB(){if(ye(Jf)){Jf=new Array(65536);for(let t=0;t<65536;t++)Jf[t]=t>255?255+~~(t/255):t}}function ui(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function ga(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var rS=1,iS={};function ci(t){let e=dB(t);pB(e),hB(e),mB(e),J(e,r=>{r.isParent=r.categoryMatches.length>0})}function dB(t){let e=Qe(t),r=t,n=!0;for(;n;){r=Gn(Mt(K(r,o=>o.CATEGORIES)));let i=eo(r,e);e=e.concat(i),ye(i)?n=!1:r=i}return e}function pB(t){J(t,e=>{_T(e)||(iS[rS]=e,e.tokenTypeIdx=rS++),nS(e)&&!ie(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),nS(e)||(e.CATEGORIES=[]),gB(e)||(e.categoryMatches=[]),TB(e)||(e.categoryMatchesMap={})})}function mB(t){J(t,e=>{e.categoryMatches=[],J(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(iS[n].tokenTypeIdx)})})}function hB(t){J(t,e=>{oS([],e)})}function oS(t,e){J(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),J(e.CATEGORIES,r=>{let n=t.concat(e);ut(n,r)||oS(n,r)})}function _T(t){return ee(t,"tokenTypeIdx")}function nS(t){return ee(t,"CATEGORIES")}function gB(t){return ee(t,"categoryMatches")}function TB(t){return ee(t,"categoryMatchesMap")}function sS(t){return ee(t,"tokenTypeIdx")}var vT={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var ct;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(ct||(ct={}));var Sl={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:vT,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Sl);var At=class{constructor(e,r=Sl){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:a,value:l}=Ol(o),u=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(`${s}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=sr({},Sl,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Sl.lineTerminatorsPattern)this.config.lineTerminatorsPattern=ZE;else if(this.config.lineTerminatorCharacters===Sl.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ie(e)?i={modes:{defaultMode:Qe(e)},defaultMode:ha}:(o=!1,i=Qe(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(YE(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(XE(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},J(i.modes,(a,l)=>{i.modes[l]=to(a,u=>gr(u))});let s=Xe(i.modes);if(J(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(zE(a,s))}),ye(this.lexerDefinitionErrors)){ci(a);let u;this.TRACE_INIT("analyzeTokenTypes",()=>{u=KE(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=u.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=u.charCodeToPatternIdxToConfig,this.emptyGroups=sr({},this.emptyGroups,u.emptyGroups),this.hasCustom=u.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=u.canBeOptimized}})}),this.defaultMode=i.defaultMode,!ye(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=K(this.lexerDefinitionErrors,u=>u.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}J(this.lexerDefinitionWarning,a=>{Nl(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(yT?(this.chopInput=Br,this.match=this.matchWithTest):(this.updateLastIndex=vt,this.match=this.matchWithExec),o&&(this.handleModes=vt),this.trackStartLines===!1&&(this.computeNewColumn=Br),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=vt),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=Rt(this.canModeBeOptimized,(l,u,c)=>(u===!1&&l.push(c),l),[]);if(r.ensureOptimizations&&!ye(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{WE()}),this.TRACE_INIT("toFastProperties",()=>{Il(this)})})}tokenize(e,r=this.defaultMode){if(!ye(this.lexerDefinitionErrors)){let i=K(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,i,o,s,a,l,u,c,f,d,h,_,x,E,I,y,T=e,k=T.length,B=0,Q=0,ae=this.hasCustom?0:Math.floor(e.length/10),le=new Array(ae),Ce=[],$e=this.trackStartLines?1:void 0,W=this.trackStartLines?1:void 0,L=JE(this.emptyGroups),j=this.trackStartLines,H=this.config.lineTerminatorsPattern,Te=0,ue=[],V=[],F=[],ve=[];Object.freeze(ve);let Re;function Ae(){return ue}function rr(dt){let Ht=qn(dt),bt=V[Ht];return bt===void 0?ve:bt}let Ri=dt=>{if(F.length===1&&dt.tokenType.PUSH_MODE===void 0){let Ht=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(dt);Ce.push({offset:dt.startOffset,line:dt.startLine,column:dt.startColumn,length:dt.image.length,message:Ht})}else{F.pop();let Ht=Vn(F);ue=this.patternIdxToConfig[Ht],V=this.charCodeToPatternIdxToConfig[Ht],Te=ue.length;let bt=this.canModeBeOptimized[Ht]&&this.config.safeMode===!1;V&&bt?Re=rr:Re=Ae}};function Ve(dt){F.push(dt),V=this.charCodeToPatternIdxToConfig[dt],ue=this.patternIdxToConfig[dt],Te=ue.length,Te=ue.length;let Ht=this.canModeBeOptimized[dt]&&this.config.safeMode===!1;V&&Ht?Re=rr:Re=Ae}Ve.call(this,r);let qt,Xn=this.config.recoveryEnabled;for(;B<k;){l=null;let dt=T.charCodeAt(B),Ht=Re(dt),bt=Ht.length;for(n=0;n<bt;n++){qt=Ht[n];let kt=qt.pattern;u=null;let pt=qt.short;if(pt!==!1?dt===pt&&(l=kt):qt.isCustom===!0?(y=kt.exec(T,B,le,L),y!==null?(l=y[0],y.payload!==void 0&&(u=y.payload)):l=null):(this.updateLastIndex(kt,B),l=this.match(kt,e,B)),l!==null){if(a=qt.longerAlt,a!==void 0){let mt=a.length;for(o=0;o<mt;o++){let ur=ue[a[o]],_r=ur.pattern;if(c=null,ur.isCustom===!0?(y=_r.exec(T,B,le,L),y!==null?(s=y[0],y.payload!==void 0&&(c=y.payload)):s=null):(this.updateLastIndex(_r,B),s=this.match(_r,e,B)),s&&s.length>l.length){l=s,u=c,qt=ur;break}}}break}}if(l!==null){if(f=l.length,d=qt.group,d!==void 0&&(h=qt.tokenTypeIdx,_=this.createTokenInstance(l,B,h,qt.tokenType,$e,W,f),this.handlePayload(_,u),d===!1?Q=this.addToken(le,Q,_):L[d].push(_)),e=this.chopInput(e,f),B=B+f,W=this.computeNewColumn(W,f),j===!0&&qt.canLineTerminator===!0){let kt=0,pt,mt;H.lastIndex=0;do pt=H.test(l),pt===!0&&(mt=H.lastIndex-1,kt++);while(pt===!0);kt!==0&&($e=$e+kt,W=f-mt,this.updateTokenEndLineColumnLocation(_,d,mt,kt,$e,W,f))}this.handleModes(qt,Ri,Ve,_)}else{let kt=B,pt=$e,mt=W,ur=Xn===!1;for(;ur===!1&&B<k;)for(e=this.chopInput(e,1),B++,i=0;i<Te;i++){let _r=ue[i],Kr=_r.pattern,Jn=_r.short;if(Jn!==!1?T.charCodeAt(B)===Jn&&(ur=!0):_r.isCustom===!0?ur=Kr.exec(T,B,le,L)!==null:(this.updateLastIndex(Kr,B),ur=Kr.exec(e)!==null),ur===!0)break}if(x=B-kt,W=this.computeNewColumn(W,x),I=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(T,kt,x,pt,mt),Ce.push({offset:kt,line:pt,column:mt,length:x,message:I}),Xn===!1)break}}return this.hasCustom||(le.length=Q),{tokens:le,groups:L,errors:Ce}}handleModes(e,r,n,i){if(e.pop===!0){let o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,i,o,s,a){let l,u;r!==void 0&&(l=n===a-1,u=l?-1:0,i===1&&l===!0||(e.endLine=o+u,e.endColumn=s-1+-u))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}}createStartOnlyToken(e,r,n,i,o,s){return{image:e,startOffset:r,startLine:o,startColumn:s,tokenTypeIdx:n,tokenType:i}}createFullToken(e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:o,endLine:o,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:i}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};At.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";At.NA=/NOT_APPLICABLE/;function fi(t){return RT(t)?t.LABEL:t.name}function RT(t){return zt(t.LABEL)&&t.LABEL!==""}var yB="parent",aS="categories",lS="label",uS="group",cS="push_mode",fS="pop_mode",dS="longer_alt",pS="line_breaks",mS="start_chars_hint";function Qf(t){return _B(t)}function _B(t){let e=t.pattern,r={};if(r.name=t.name,gr(e)||(r.PATTERN=e),ee(t,yB))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return ee(t,aS)&&(r.CATEGORIES=t[aS]),ci([r]),ee(t,lS)&&(r.LABEL=t[lS]),ee(t,uS)&&(r.GROUP=t[uS]),ee(t,fS)&&(r.POP_MODE=t[fS]),ee(t,cS)&&(r.PUSH_MODE=t[cS]),ee(t,dS)&&(r.LONGER_ALT=t[dS]),ee(t,pS)&&(r.LINE_BREAKS=t[pS]),ee(t,mS)&&(r.START_CHARS_HINT=t[mS]),r}var Zr=Qf({name:"EOF",pattern:At.NA});ci([Zr]);function $o(t,e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Al(t,e){return ui(t,e)}var di={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${RT(t)?`--> ${fi(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:i}){let o="Expecting: ",a=`
but found: '`+er(e).image+"'";if(n)return o+n+a;{let l=Rt(t,(d,h)=>d.concat(h),[]),u=K(l,d=>`[${K(d,h=>fi(h)).join(", ")}]`),f=`one of these possible Token sequences:
${K(u,(d,h)=>`  ${h+1}. ${d}`).join(`
`)}`;return o+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let i="Expecting: ",s=`
but found: '`+er(e).image+"'";if(r)return i+r+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${K(t,u=>`[${K(u,c=>fi(c)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(di);var hS={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},On={buildDuplicateFoundError(t,e){function r(c){return c instanceof _e?c.terminalType.name:c instanceof Me?c.nonTerminalName:""}let n=t.name,i=er(e),o=i.idx,s=jr(i),a=r(i),l=o>0,u=`->${s}${l?o:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return u=u.replace(/[ \t]+/g," "),u=u.replace(/\s\s+/g,`
`),u},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=K(t.prefixPath,i=>fi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=K(t.prefixPath,i=>fi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=jr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=K(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Or?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function gS(t,e){let r=new xT(t,e);return r.resolveRefs(),r.errors}var xT=class extends Ir{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){J(We(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:Yt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var NT=class extends li{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Qe(this.path.ruleStack).reverse(),this.occurrenceStack=Qe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let i=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){ye(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},Zf=class extends NT{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let i=r.concat(n),o=new Ze({definition:i});this.possibleTokTypes=Lo(o),this.found=!0}}},Ta=class extends li{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},ed=class extends Ta{walkMany(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof _e&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,r,n)}},Dl=class extends Ta{walkManySep(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof _e&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,r,n)}},td=class extends Ta{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof _e&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,r,n)}},Cl=class extends Ta{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let i=er(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof _e&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,r,n)}};function rd(t,e,r=[]){r=Qe(r);let n=[],i=0;function o(a){return a.concat(Ft(t,i+1))}function s(a){let l=rd(o(a),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){let a=t[i];if(a instanceof Ze)return s(a.definition);if(a instanceof Me)return s(a.definition);if(a instanceof Fe)n=s(a.definition);else if(a instanceof et){let l=a.definition.concat([new Ee({definition:a.definition})]);return s(l)}else if(a instanceof tt){let l=[new Ze({definition:a.definition}),new Ee({definition:[new _e({terminalType:a.separator})].concat(a.definition)})];return s(l)}else if(a instanceof He){let l=a.definition.concat([new Ee({definition:[new _e({terminalType:a.separator})].concat(a.definition)})]);n=s(l)}else if(a instanceof Ee){let l=a.definition.concat([new Ee({definition:a.definition})]);n=s(l)}else{if(a instanceof Ke)return J(a.definition,l=>{ye(l.definition)===!1&&(n=s(l.definition))}),n;if(a instanceof _e)r.push(a.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:Ft(t,i)}),n}function nd(t,e,r,n){let i="EXIT_NONE_TERMINAL",o=[i],s="EXIT_ALTERNATIVE",a=!1,l=e.length,u=l-n-1,c=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ye(f);){let d=f.pop();if(d===s){a&&Vn(f).idx<=u&&f.pop();continue}let h=d.def,_=d.idx,x=d.ruleStack,E=d.occurrenceStack;if(ye(h))continue;let I=h[0];if(I===i){let y={idx:_,def:Ft(h),ruleStack:ai(x),occurrenceStack:ai(E)};f.push(y)}else if(I instanceof _e)if(_<l-1){let y=_+1,T=e[y];if(r(T,I.terminalType)){let k={idx:y,def:Ft(h),ruleStack:x,occurrenceStack:E};f.push(k)}}else if(_===l-1)c.push({nextTokenType:I.terminalType,nextTokenOccurrence:I.idx,ruleStack:x,occurrenceStack:E}),a=!0;else throw Error("non exhaustive match");else if(I instanceof Me){let y=Qe(x);y.push(I.nonTerminalName);let T=Qe(E);T.push(I.idx);let k={idx:_,def:I.definition.concat(o,Ft(h)),ruleStack:y,occurrenceStack:T};f.push(k)}else if(I instanceof Fe){let y={idx:_,def:Ft(h),ruleStack:x,occurrenceStack:E};f.push(y),f.push(s);let T={idx:_,def:I.definition.concat(Ft(h)),ruleStack:x,occurrenceStack:E};f.push(T)}else if(I instanceof et){let y=new Ee({definition:I.definition,idx:I.idx}),T=I.definition.concat([y],Ft(h)),k={idx:_,def:T,ruleStack:x,occurrenceStack:E};f.push(k)}else if(I instanceof tt){let y=new _e({terminalType:I.separator}),T=new Ee({definition:[y].concat(I.definition),idx:I.idx}),k=I.definition.concat([T],Ft(h)),B={idx:_,def:k,ruleStack:x,occurrenceStack:E};f.push(B)}else if(I instanceof He){let y={idx:_,def:Ft(h),ruleStack:x,occurrenceStack:E};f.push(y),f.push(s);let T=new _e({terminalType:I.separator}),k=new Ee({definition:[T].concat(I.definition),idx:I.idx}),B=I.definition.concat([k],Ft(h)),Q={idx:_,def:B,ruleStack:x,occurrenceStack:E};f.push(Q)}else if(I instanceof Ee){let y={idx:_,def:Ft(h),ruleStack:x,occurrenceStack:E};f.push(y),f.push(s);let T=new Ee({definition:I.definition,idx:I.idx}),k=I.definition.concat([T],Ft(h)),B={idx:_,def:k,ruleStack:x,occurrenceStack:E};f.push(B)}else if(I instanceof Ke)for(let y=I.definition.length-1;y>=0;y--){let T=I.definition[y],k={idx:_,def:T.definition.concat(Ft(h)),ruleStack:x,occurrenceStack:E};f.push(k),f.push(s)}else if(I instanceof Ze)f.push({idx:_,def:I.definition.concat(Ft(h)),ruleStack:x,occurrenceStack:E});else if(I instanceof Or)f.push(vB(I,_,x,E));else throw Error("non exhaustive match")}return c}function vB(t,e,r,n){let i=Qe(r);i.push(t.name);let o=Qe(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}var ft;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(ft||(ft={}));function bl(t){if(t instanceof Fe||t==="Option")return ft.OPTION;if(t instanceof Ee||t==="Repetition")return ft.REPETITION;if(t instanceof et||t==="RepetitionMandatory")return ft.REPETITION_MANDATORY;if(t instanceof tt||t==="RepetitionMandatoryWithSeparator")return ft.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof He||t==="RepetitionWithSeparator")return ft.REPETITION_WITH_SEPARATOR;if(t instanceof Ke||t==="Alternation")return ft.ALTERNATION;throw Error("non exhaustive match")}function od(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:i}=t,o=bl(n);return o===ft.ALTERNATION?ya(e,r,i):_a(e,r,o,i)}function yS(t,e,r,n,i,o){let s=ya(t,e,r),a=OS(s)?ga:ui;return o(s,n,a,i)}function _S(t,e,r,n,i,o){let s=_a(t,e,i,r),a=OS(s)?ga:ui;return o(s[0],a,n)}function vS(t,e,r,n){let i=t.length,o=hr(t,s=>hr(s,a=>a.length===1));if(e)return function(s){let a=K(s,l=>l.GATE);for(let l=0;l<i;l++){let u=t[l],c=u.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let d=0;d<c;d++){let h=u[d],_=h.length;for(let x=0;x<_;x++){let E=this.LA(x+1);if(r(E,h[x])===!1)continue e}return l}}};if(o&&!n){let s=K(t,l=>Mt(l)),a=Rt(s,(l,u,c)=>(J(u,f=>{ee(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=c),J(f.categoryMatches,d=>{ee(l,d)||(l[d]=c)})}),l),{});return function(){let l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let a=t[s],l=a.length;e:for(let u=0;u<l;u++){let c=a[u],f=c.length;for(let d=0;d<f;d++){let h=this.LA(d+1);if(r(h,c[d])===!1)continue e}return s}}}}function RS(t,e,r){let n=hr(t,o=>o.length===1),i=t.length;if(n&&!r){let o=Mt(t);if(o.length===1&&ye(o[0].categoryMatches)){let a=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=Rt(o,(a,l,u)=>(a[l.tokenTypeIdx]=!0,J(l.categoryMatches,c=>{a[c]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<i;o++){let s=t[o],a=s.length;for(let l=0;l<a;l++){let u=this.LA(l+1);if(e(u,s[l])===!1)continue e}return!0}return!1}}var IT=class extends li{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,i){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(i),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,ft.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,ft.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,ft.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,ft.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,ft.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},id=class extends Ir{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,ft.OPTION)}visitRepetition(e){this.checkIsTarget(e,ft.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,ft.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,ft.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,ft.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,ft.ALTERNATION)}};function TS(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function OT(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],i=[];for(let o=0;o<e.length;o++){let s=e[o];i.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let l="_"+n.categoryMatches[a];i.push(s+l)}}e=i}return e}function RB(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let i=t[n];for(let o=0;o<e.length;o++){let s=e[o];if(i[s]===!0)return!1}}return!0}function xS(t,e){let r=K(t,s=>rd([s],1)),n=TS(r.length),i=K(r,s=>{let a={};return J(s,l=>{let u=OT(l.partialPath);J(u,c=>{a[c]=!0})}),a}),o=r;for(let s=1;s<=e;s++){let a=o;o=TS(a.length);for(let l=0;l<a.length;l++){let u=a[l];for(let c=0;c<u.length;c++){let f=u[c].partialPath,d=u[c].suffixDef,h=OT(f);if(RB(i,h,l)||ye(d)||f.length===e){let x=n[l];if(sd(x,f)===!1){x.push(f);for(let E=0;E<h.length;E++){let I=h[E];i[l][I]=!0}}}else{let x=rd(d,s+1,f);o[l]=o[l].concat(x),J(x,E=>{let I=OT(E.partialPath);J(I,y=>{i[l][y]=!0})})}}}}return n}function ya(t,e,r,n){let i=new id(t,ft.ALTERNATION,n);return e.accept(i),xS(i.result,r)}function _a(t,e,r,n){let i=new id(t,r);e.accept(i);let o=i.result,a=new IT(e,t,r).startWalking(),l=new Ze({definition:o}),u=new Ze({definition:a});return xS([l,u],n)}function sd(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let i=0;i<n.length;i++){let o=e[i],s=n[i];if((o===s||s.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function NS(t,e){return t.length<e.length&&hr(t,(r,n)=>{let i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}function OS(t){return hr(t,e=>hr(e,r=>hr(r,n=>ye(n.categoryMatches))))}function IS(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return K(e,r=>Object.assign({type:Yt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function ES(t,e,r,n){let i=ar(t,l=>xB(l,r)),o=AB(t,e,r),s=ar(t,l=>IB(l,r)),a=ar(t,l=>OB(l,t,n,r));return i.concat(o,s,a)}function xB(t,e){let r=new ET;t.accept(r);let n=r.allProductions,i=cT(n,NB),o=Vr(i,a=>a.length>1);return K(We(o),a=>{let l=er(a),u=e.buildDuplicateFoundError(t,a),c=jr(l),f={message:u,type:Yt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:l.idx},d=SS(l);return d&&(f.parameter=d),f})}function NB(t){return`${jr(t)}_#_${t.idx}_#_${SS(t)}`}function SS(t){return t instanceof _e?t.terminalType.name:t instanceof Me?t.nonTerminalName:""}var ET=class extends Ir{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function OB(t,e,r,n){let i=[];if(Rt(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:s,type:Yt.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function AS(t,e,r){let n=[],i;return ut(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:i,type:Yt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function AT(t,e,r,n=[]){let i=[],o=ad(e.definition);if(ye(o))return[];{let s=t.name;ut(o,t)&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:Yt.LEFT_RECURSION,ruleName:s});let l=eo(o,n.concat([t])),u=ar(l,c=>{let f=Qe(n);return f.push(c),AT(t,c,r,f)});return i.concat(u)}}function ad(t){let e=[];if(ye(t))return e;let r=er(t);if(r instanceof Me)e.push(r.referencedRule);else if(r instanceof Ze||r instanceof Fe||r instanceof et||r instanceof tt||r instanceof He||r instanceof Ee)e=e.concat(ad(r.definition));else if(r instanceof Ke)e=Mt(K(r.definition,o=>ad(o.definition)));else if(!(r instanceof _e))throw Error("non exhaustive match");let n=ko(r),i=t.length>1;if(n&&i){let o=Ft(t);return e.concat(ad(o))}else return e}var kl=class extends Ir{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function DS(t,e){let r=new kl;t.accept(r);let n=r.alternations;return ar(n,o=>{let s=ai(o.definition);return ar(s,(a,l)=>{let u=nd([a],[],ui,1);return ye(u)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:l}),type:Yt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:l+1}]:[]})})}function CS(t,e,r){let n=new kl;t.accept(n);let i=n.alternations;return i=to(i,s=>s.ignoreAmbiguities===!0),ar(i,s=>{let a=s.idx,l=s.maxLookahead||e,u=ya(a,t,l,s),c=EB(u,s,t,r),f=SB(u,s,t,r);return c.concat(f)})}var ST=class extends Ir{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function IB(t,e){let r=new kl;t.accept(r);let n=r.alternations;return ar(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:Yt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function bS(t,e,r){let n=[];return J(t,i=>{let o=new ST;i.accept(o);let s=o.allProductions;J(s,a=>{let l=bl(a),u=a.maxLookahead||e,c=a.idx,d=_a(c,i,l,u)[0];if(ye(Mt(d))){let h=r.buildEmptyRepetitionError({topLevelRule:i,repetition:a});n.push({message:h,type:Yt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}function EB(t,e,r,n){let i=[],o=Rt(t,(a,l,u)=>(e.definition[u].ignoreAmbiguities===!0||J(l,c=>{let f=[u];J(t,(d,h)=>{u!==h&&sd(d,c)&&e.definition[h].ignoreAmbiguities!==!0&&f.push(h)}),f.length>1&&!sd(i,c)&&(i.push(c),a.push({alts:f,path:c}))}),a),[]);return K(o,a=>{let l=K(a.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:Yt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function SB(t,e,r,n){let i=Rt(t,(s,a,l)=>{let u=K(a,c=>({idx:l,path:c}));return s.concat(u)},[]);return Gn(ar(i,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,u=s.path,c=Zt(i,d=>e.definition[d.idx].ignoreAmbiguities!==!0&&d.idx<l&&NS(d.path,u));return K(c,d=>{let h=[d.idx+1,l+1],_=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:h,prefixPath:d.path}),type:Yt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:_,alternatives:h}})}))}function AB(t,e,r){let n=[],i=K(e,o=>o.name);return J(t,o=>{let s=o.name;if(ut(i,s)){let a=r.buildNamespaceConflictError(o);n.push({message:a,type:Yt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function kS(t){let e=ua(t,{errMsgProvider:hS}),r={};return J(t.rules,n=>{r[n.name]=n}),gS(r,e.errMsgProvider)}function LS(t){return t=ua(t,{errMsgProvider:On}),ES(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var wS="MismatchedTokenException",$S="NoViableAltException",PS="EarlyExitException",MS="NotAllInputParsedException",FS=[wS,$S,PS,MS];Object.freeze(FS);function ro(t){return ut(FS,t.name)}var va=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Po=class extends va{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=wS}},Ll=class extends va{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=$S}},wl=class extends va{constructor(e,r){super(e,r),this.name=MS}},$l=class extends va{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=PS}};var DT={},bT="InRuleRecoveryException",CT=class extends Error{constructor(e){super(e),this.name=bT}},ld=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=ee(e,"recoveryEnabled")?e.recoveryEnabled:Er.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=DB)}getTokenToInsert(e){let r=$o(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,i){let o=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],l=!1,u=this.LA(1),c=this.LA(1),f=()=>{let d=this.LA(0),h=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:u,previous:d,ruleName:this.getCurrRuleFullName()}),_=new Po(h,u,this.LA(0));_.resyncedTokens=ai(a),this.SAVE_ERROR(_)};for(;!l;)if(this.tokenMatcher(c,i)){f();return}else if(n.call(this)){f(),e.apply(this,r);return}else this.tokenMatcher(c,o)?l=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new CT("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||ye(r))return!1;let n=this.LA(1);return jn(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return ut(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let i=jn(e,o=>Al(r,o));if(i!==void 0)return i;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return DT;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return K(e,(n,i)=>i===0?DT:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){let e=K(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return Mt(e)}getFollowSetFromFollowKey(e){if(e===DT)return[Zr];let r=e.ruleName+e.idxInCallingRule+Hf+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,Zr)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return ai(r)}attemptInRepetitionRecovery(e,r,n,i,o,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),i=Qe(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return K(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function DB(t,e,r,n,i,o,s){let a=this.getKeyForAutomaticLookahead(n,i),l=this.firstAfterRepMap[a];if(l===void 0){let d=this.getCurrRuleFullName(),h=this.getGAstProductions()[d];l=new o(h,i).startWalking(),this.firstAfterRepMap[a]=l}let u=l.token,c=l.occurrence,f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&u===void 0&&(u=Zr,c=1),!(u===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(u,c,s)&&this.tryInRepetitionRecovery(t,e,r,u)}function ud(t,e,r){return r|e|t}var pi=class{constructor(e){var r;this.maxLookahead=(r=e==null?void 0:e.maxLookahead)!==null&&r!==void 0?r:Er.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(ye(r)){let n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...i,...o]}return r}validateNoLeftRecursion(e){return ar(e,r=>AT(r,r,On))}validateEmptyOrAlternatives(e){return ar(e,r=>DS(r,On))}validateAmbiguousAlternationAlternatives(e,r){return ar(e,n=>CS(n,r,On))}validateSomeNonEmptyLookaheadPath(e,r){return bS(e,r,On)}buildLookaheadForAlternation(e){return yS(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,vS)}buildLookaheadForOptional(e){return _S(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,bl(e.prodType),RS)}};var fd=class{initLooksAhead(e){this.dynamicTokensEnabled=ee(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Er.dynamicTokensEnabled,this.maxLookahead=ee(e,"maxLookahead")?e.maxLookahead:Er.maxLookahead,this.lookaheadStrategy=ee(e,"lookaheadStrategy")?e.lookaheadStrategy:new pi({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){J(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:i,option:o,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=CB(r);J(n,u=>{let c=u.idx===0?"":u.idx;this.TRACE_INIT(`${jr(u)}${c}`,()=>{let f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:u.idx,rule:r,maxLookahead:u.maxLookahead||this.maxLookahead,hasPredicates:u.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),d=ud(this.fullRuleNameToShort[r.name],256,u.idx);this.setLaFuncCache(d,f)})}),J(i,u=>{this.computeLookaheadFunc(r,u.idx,768,"Repetition",u.maxLookahead,jr(u))}),J(o,u=>{this.computeLookaheadFunc(r,u.idx,512,"Option",u.maxLookahead,jr(u))}),J(s,u=>{this.computeLookaheadFunc(r,u.idx,1024,"RepetitionMandatory",u.maxLookahead,jr(u))}),J(a,u=>{this.computeLookaheadFunc(r,u.idx,1536,"RepetitionMandatoryWithSeparator",u.maxLookahead,jr(u))}),J(l,u=>{this.computeLookaheadFunc(r,u.idx,1280,"RepetitionWithSeparator",u.maxLookahead,jr(u))})})})}computeLookaheadFunc(e,r,n,i,o,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=ud(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return ud(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},kT=class extends Ir{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},cd=new kT;function CB(t){cd.reset(),t.accept(cd);let e=cd.dslMethods;return cd.reset(),e}function $T(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function PT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function US(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function BS(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var bB="name";function MT(t,e){Object.defineProperty(t,bB,{enumerable:!1,configurable:!0,writable:!1,value:e})}function kB(t,e){let r=Xe(t),n=r.length;for(let i=0;i<n;i++){let o=r[i],s=t[o],a=s.length;for(let l=0;l<a;l++){let u=s[l];u.tokenTypeIdx===void 0&&this[u.name](u.children,e)}}}function WS(t,e){let r=function(){};MT(r,t+"BaseSemantics");let n={visit:function(i,o){if(ie(i)&&(i=i[0]),!gr(i))return this[i.name](i.children,o)},validateVisitor:function(){let i=LB(this,e);if(!ye(i)){let o=K(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function GS(t,e,r){let n=function(){};MT(n,t+"BaseSemanticsWithDefaults");let i=Object.create(r.prototype);return J(e,o=>{i[o]=kB}),n.prototype=i,n.prototype.constructor=n,n}var FT;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(FT||(FT={}));function LB(t,e){return wB(t,e)}function wB(t,e){let r=Zt(e,i=>Nr(t[i])===!1),n=K(r,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:FT.MISSING_METHOD,methodName:i}));return Gn(n)}var hd=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=ee(e,"nodeLocationTracking")?e.nodeLocationTracking:Er.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=vt,this.cstFinallyStateUpdate=vt,this.cstPostTerminal=vt,this.cstPostNonTerminal=vt,this.cstPostRule=vt;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=PT,this.setNodeLocationFromNode=PT,this.cstPostRule=vt,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=vt,this.setNodeLocationFromNode=vt,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=$T,this.setNodeLocationFromNode=$T,this.cstPostRule=vt,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=vt,this.setNodeLocationFromNode=vt,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=vt,this.setNodeLocationFromNode=vt,this.cstPostRule=vt,this.setInitialNodeLocation=vt;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];US(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];BS(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(gr(this.baseCstVisitorConstructor)){let e=WS(this.className,Xe(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(gr(this.baseCstVisitorWithDefaultsConstructor)){let e=GS(this.className,Xe(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var gd=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Ra}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Ra:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Td=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=xa){if(ut(this.definedRulesNames,e)){let s={message:On.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:Yt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let i=this.defineRule(e,r,n);return this[e]=i,i}OVERRIDE_RULE(e,r,n=xa){let i=AS(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(ro(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return qf(We(this.gastProductionsCache))}};var yd=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=ga,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},ee(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ie(e)){if(ye(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ie(e))this.tokensMap=Rt(e,(o,s)=>(o[s.name]=s,o),{});else if(ee(e,"modes")&&hr(Mt(We(e.modes)),sS)){let o=Mt(We(e.modes)),s=ca(o);this.tokensMap=Rt(s,(a,l)=>(a[l.name]=l,a),{})}else if(_t(e))this.tokensMap=Qe(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Zr;let n=ee(e,"modes")?Mt(We(e.modes)):We(e),i=hr(n,o=>ye(o.categoryMatches));this.tokenMatcher=i?ga:ui,ci(We(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=ee(n,"resyncEnabled")?n.resyncEnabled:xa.resyncEnabled,o=ee(n,"recoveryValueFunc")?n.recoveryValueFunc:xa.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...c){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c);let f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}}:a=function(...c){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c)}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(ro(e)){let s=e;if(o){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return n(e);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let s=e.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=e;if(i.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=r;if(i.call(this)===!0){let s=this.doSingleRepetition(o);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,ft.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],i,1024,e,td)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,Cl],a,1536,e,Cl)}else throw this.raiseEarlyExitException(e,ft.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let a=r.GATE;if(a!==void 0){let l=i;i=()=>a.call(this)&&l.call(this)}}else o=r;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],i,768,e,ed,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,Dl],a,1280,e,Dl)}}repetitionSepSecondInternal(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),i=ie(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new wl(r,e))}}subruleInternal(e,r,n){let i;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw ro(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let i;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i}consumeInternalError(e,r,n){let i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Po(i,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===bT?n:o}}else throw n}saveRecogState(){let e=this.errors,r=Qe(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Zr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var _d=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=ee(e,"errorMessageProvider")?e.errorMessageProvider:Er.errorMessageProvider}SAVE_ERROR(e){if(ro(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Qe(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Qe(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=_a(e,o,r,this.maxLookahead)[0],l=[];for(let c=1;c<=this.maxLookahead;c++)l.push(this.LA(c));let u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new $l(u,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=ya(e,i,this.maxLookahead),s=[];for(let u=1;u<=this.maxLookahead;u++)s.push(this.LA(u));let a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new Ll(l,this.LA(1),a))}};var vd=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(gr(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return nd([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=er(e.ruleStack),i=this.getGAstProductions()[r];return new Zf(i,e).startWalking()}};var Nd={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Nd);var VS=!0,jS=Math.pow(2,8)-1,HS=Qf({name:"RECORDING_PHASE_TOKEN",pattern:At.NA});ci([HS]);var KS=$o(HS,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(KS);var PB={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Rd=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,i){return this.consumeInternalRecord(n,e,i)},this[`SUBRULE${r}`]=function(n,i){return this.subruleInternalRecord(n,e,i)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Ra}topLevelRuleRecord(e,r){try{let n=new Or({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return Ml.call(this,Fe,e,r)}atLeastOneInternalRecord(e,r){Ml.call(this,et,r,e)}atLeastOneSepFirstInternalRecord(e,r){Ml.call(this,tt,r,e,VS)}manyInternalRecord(e,r){Ml.call(this,Ee,r,e)}manySepFirstInternalRecord(e,r){Ml.call(this,He,r,e,VS)}orInternalRecord(e,r){return MB.call(this,e,r)}subruleInternalRecord(e,r,n){if(xd(r),!e||ee(e,"ruleName")===!1){let a=new Error(`<SUBRULE${qS(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let i=Vn(this.recordingProdStack),o=e.ruleName,s=new Me({idx:r,nonTerminalName:o,label:n==null?void 0:n.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?PB:Nd}consumeInternalRecord(e,r,n){if(xd(r),!_T(e)){let s=new Error(`<CONSUME${qS(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=Vn(this.recordingProdStack),o=new _e({idx:r,terminalType:e,label:n==null?void 0:n.LABEL});return i.definition.push(o),KS}};function Ml(t,e,r,n=!1){xd(r);let i=Vn(this.recordingProdStack),o=Nr(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),ee(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),o.call(this),i.definition.push(s),this.recordingProdStack.pop(),Nd}function MB(t,e){xd(e);let r=Vn(this.recordingProdStack),n=ie(t)===!1,i=n===!1?t:t.DEF,o=new Ke({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});ee(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let s=xl(i,a=>Nr(a.GATE));return o.hasPredicates=s,r.definition.push(o),J(i,a=>{let l=new Ze({definition:[]});o.definition.push(l),ee(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:ee(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),Nd}function qS(t){return t===0?"":`${t}`}function xd(t){if(t<0||t>jS){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${jS+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var Od=class{initPerformanceTracer(e){if(ee(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Er.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:i,value:o}=Ol(r),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,o}else return r()}};function zS(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(i=>{if(i==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]})})}var Ra=$o(Zr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Ra);var Er=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:di,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),xa=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),Yt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Yt||(Yt={}));function Id(t=void 0){return function(){return t}}var Fl=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{Il(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),J(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=kS({rules:We(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(ye(n)&&this.skipValidations===!1){let i=LS({rules:We(this.gastProductionsCache),tokenTypes:We(this.tokensMap),errMsgProvider:On,grammarName:r}),o=IS({lookaheadStrategy:this.lookaheadStrategy,rules:We(this.gastProductionsCache),tokenTypes:We(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(i,o)}}),ye(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=BE(We(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,o;(o=(i=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(i,{rules:We(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(We(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!ye(this.definitionErrors))throw e=K(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),ee(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=ee(r,"skipValidations")?r.skipValidations:Er.skipValidations}};Fl.DEFER_DEFINITION_ERRORS_HANDLING=!1;zS(Fl,[ld,fd,hd,gd,yd,Td,_d,vd,Rd,Od]);var Ul=class extends Fl{constructor(e,r=Er){let n=Qe(r);n.outputCst=!1,super(e,n)}};function Mo(t,e,r){return`${t.name}_${e}_${r}`}var no=1,UB=2,YS=4,XS=5;var Ia=7,BB=8,WB=9,GB=10,VB=11,JS=12,Bl=class{constructor(e){this.target=e}isEpsilon(){return!1}},Na=class extends Bl{constructor(e,r){super(e),this.tokenType=r}},Wl=class extends Bl{constructor(e){super(e)}isEpsilon(){return!0}},Oa=class extends Bl{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function QS(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};jB(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=Fo(e,i,i);o!==void 0&&tW(e,i,o)}return e}function jB(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=tr(t,i,void 0,{type:UB}),s=tr(t,i,void 0,{type:Ia});o.stop=s,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,s)}}function ZS(t,e,r){return r instanceof _e?BT(t,e,r.terminalType,r):r instanceof Me?eW(t,e,r):r instanceof Ke?YB(t,e,r):r instanceof Fe?XB(t,e,r):r instanceof Ee?qB(t,e,r):r instanceof He?HB(t,e,r):r instanceof et?KB(t,e,r):r instanceof tt?zB(t,e,r):Fo(t,e,r)}function qB(t,e,r){let n=tr(t,e,r,{type:XS});io(t,n);let i=Ea(t,e,n,r,Fo(t,e,r));return tA(t,e,r,i)}function HB(t,e,r){let n=tr(t,e,r,{type:XS});io(t,n);let i=Ea(t,e,n,r,Fo(t,e,r)),o=BT(t,e,r.separator,r);return tA(t,e,r,i,o)}function KB(t,e,r){let n=tr(t,e,r,{type:YS});io(t,n);let i=Ea(t,e,n,r,Fo(t,e,r));return eA(t,e,r,i)}function zB(t,e,r){let n=tr(t,e,r,{type:YS});io(t,n);let i=Ea(t,e,n,r,Fo(t,e,r)),o=BT(t,e,r.separator,r);return eA(t,e,r,i,o)}function YB(t,e,r){let n=tr(t,e,r,{type:no});io(t,n);let i=K(r.definition,s=>ZS(t,e,s));return Ea(t,e,n,r,...i)}function XB(t,e,r){let n=tr(t,e,r,{type:no});io(t,n);let i=Ea(t,e,n,r,Fo(t,e,r));return JB(t,e,r,i)}function Fo(t,e,r){let n=Zt(K(r.definition,i=>ZS(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:ZB(t,n)}function eA(t,e,r,n,i){let o=n.left,s=n.right,a=tr(t,e,r,{type:VB});io(t,a);let l=tr(t,e,r,{type:JS});return o.loopback=a,l.loopback=a,t.decisionMap[Mo(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,jt(s,a),i===void 0?(jt(a,o),jt(a,l)):(jt(a,l),jt(a,i.left),jt(i.right,o)),{left:o,right:l}}function tA(t,e,r,n,i){let o=n.left,s=n.right,a=tr(t,e,r,{type:GB});io(t,a);let l=tr(t,e,r,{type:JS}),u=tr(t,e,r,{type:WB});return a.loopback=u,l.loopback=u,jt(a,o),jt(a,l),jt(s,u),i!==void 0?(jt(u,l),jt(u,i.left),jt(i.right,o)):jt(u,a),t.decisionMap[Mo(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:l}}function JB(t,e,r,n){let i=n.left,o=n.right;return jt(i,o),t.decisionMap[Mo(e,"Option",r.idx)]=i,n}function io(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Ea(t,e,r,n,...i){let o=tr(t,e,n,{type:BB,start:r});r.end=o;for(let a of i)a!==void 0?(jt(r,a.left),jt(a.right,o)):jt(r,o);let s={left:r,right:o};return t.decisionMap[Mo(e,QB(n),n.idx)]=r,s}function QB(t){if(t instanceof Ke)return"Alternation";if(t instanceof Fe)return"Option";if(t instanceof Ee)return"Repetition";if(t instanceof He)return"RepetitionWithSeparator";if(t instanceof et)return"RepetitionMandatory";if(t instanceof tt)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function ZB(t,e){let r=e.length;for(let o=0;o<r-1;o++){let s=e[o],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let l=a instanceof Oa,u=a,c=e[o+1].left;s.left.type===no&&s.right.type===no&&a!==void 0&&(l&&u.followState===s.right||a.target===s.right)?(l?u.followState=c:a.target=c,rW(t,s.right)):jt(s.right,c)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function BT(t,e,r,n){let i=tr(t,e,n,{type:no}),o=tr(t,e,n,{type:no});return WT(i,new Na(o,r)),{left:i,right:o}}function eW(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=tr(t,e,r,{type:no}),s=tr(t,e,r,{type:no}),a=new Oa(i,n,s);return WT(o,a),{left:o,right:s}}function tW(t,e,r){let n=t.ruleToStartState.get(e);jt(n,r.left);let i=t.ruleToStopState.get(e);return jt(r.right,i),{left:n,right:i}}function jt(t,e){let r=new Wl(e);WT(t,r)}function tr(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function WT(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function rW(t,e){t.states.splice(t.states.indexOf(e),1)}var Gl={},Sa=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=GT(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return K(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function GT(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function nW(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Ed=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},rA=new Ed,Vl=class extends pi{constructor(e){var r;super(),this.logging=(r=e==null?void 0:e.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=QS(e.rules),this.dfas=iW(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=Mo(n,"Alternation",r),c=this.atn.decisionMap[l].decision,f=K(od({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),d=>K(d,h=>h[0]));if(nA(f,!1)&&!o){let d=Rt(f,(h,_,x)=>(J(_,E=>{E&&(h[E.tokenTypeIdx]=x,J(E.categoryMatches,I=>{h[I]=x}))}),h),{});return i?function(h){var _;let x=this.LA(1),E=d[x.tokenTypeIdx];if(h!==void 0&&E!==void 0){let I=(_=h[E])===null||_===void 0?void 0:_.GATE;if(I!==void 0&&I.call(this)===!1)return}return E}:function(){let h=this.LA(1);return d[h.tokenTypeIdx]}}else return i?function(d){let h=new Ed,_=d===void 0?0:d.length;for(let E=0;E<_;E++){let I=d==null?void 0:d[E].GATE;h.set(E,I===void 0||I.call(this))}let x=VT.call(this,s,c,h,a);return typeof x=="number"?x:void 0}:function(){let d=VT.call(this,s,c,rA,a);return typeof d=="number"?d:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=Mo(n,i,r),c=this.atn.decisionMap[l].decision,f=K(od({maxLookahead:1,occurrence:r,prodType:i,rule:n}),d=>K(d,h=>h[0]));if(nA(f)&&f[0][0]&&!o){let d=f[0],h=Mt(d);if(h.length===1&&ye(h[0].categoryMatches)){let x=h[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===x}}else{let _=Rt(h,(x,E)=>(E!==void 0&&(x[E.tokenTypeIdx]=!0,J(E.categoryMatches,I=>{x[I]=!0})),x),{});return function(){let x=this.LA(1);return _[x.tokenTypeIdx]===!0}}}return function(){let d=VT.call(this,s,c,rA,a);return typeof d=="object"?!1:d===0}}};function nA(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let s=[o.tokenTypeIdx].concat(o.categoryMatches);for(let a of s)if(r.has(a)){if(!i.has(a))return!1}else r.add(a),i.add(a)}}return!0}function iW(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=nW(t.decisionStates[n],n);return r}function VT(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let a=hW(i.atnStartState);o=sA(i,oA(a)),i.start=o}return oW.apply(this,[i,o,r,n])}function oW(t,e,r,n){let i=e,o=1,s=[],a=this.LA(o++);for(;;){let l=fW(i,a);if(l===void 0&&(l=sW.apply(this,[t,i,a,o,r,n])),l===Gl)return cW(s,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,s.push(a),a=this.LA(o++)}}function sW(t,e,r,n,i,o){let s=dW(e.configs,r,i);if(s.size===0)return iA(t,e,r,Gl),Gl;let a=oA(s),l=mW(s,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(_W(s)){let u=bE(s.alts);a.isAcceptState=!0,a.prediction=u,a.configs.uniqueAlt=u,aW.apply(this,[t,n,s.alts,o])}return a=iA(t,e,r,a),a}function aW(t,e,r,n){let i=[];for(let u=1;u<=e;u++)i.push(this.LA(u).tokenType);let o=t.atnStartState,s=o.rule,a=o.production,l=lW({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:i});n(l)}function lW(t){let e=K(t.prefixPath,i=>fi(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${uW(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function uW(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof et)return"AT_LEAST_ONE";if(t instanceof tt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ee)return"MANY";if(t instanceof _e)return"CONSUME";throw Error("non exhaustive match")}function cW(t,e,r){let n=ar(e.configs.elements,o=>o.state.transitions),i=FE(n.filter(o=>o instanceof Na).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function fW(t,e){return t.edges[e.tokenTypeIdx]}function dW(t,e,r){let n=new Sa,i=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===Ia){i.push(s);continue}let a=s.state.transitions.length;for(let l=0;l<a;l++){let u=s.state.transitions[l],c=pW(u,e);c!==void 0&&n.add({state:c,alt:s.alt,stack:s.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new Sa;for(let s of n.elements)Sd(s,o)}if(i.length>0&&!TW(o))for(let s of i)o.add(s);return o}function pW(t,e){if(t instanceof Na&&Al(e,t.tokenType))return t.target}function mW(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function oA(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function iA(t,e,r,n){return n=sA(t,n),e.edges[r.tokenTypeIdx]=n,n}function sA(t,e){if(e===Gl)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function hW(t){let e=new Sa,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Sd(o,e)}return e}function Sd(t,e){let r=t.state;if(r.type===Ia){if(t.stack.length>0){let i=[...t.stack],s={state:i.pop(),alt:t.alt,stack:i};Sd(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],s=gW(t,o);s!==void 0&&Sd(s,e)}}function gW(t,e){if(e instanceof Wl)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Oa){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function TW(t){for(let e of t.elements)if(e.state.type===Ia)return!0;return!1}function yW(t){for(let e of t.elements)if(e.state.type!==Ia)return!1;return!0}function _W(t){if(yW(t))return!0;let e=vW(t.elements);return RW(e)&&!xW(e)}function vW(t){let e=new Map;for(let r of t){let n=GT(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function RW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function xW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var aA;(function(t){function e(r){return typeof r=="string"}t.is=e})(aA||(aA={}));var jT;(function(t){function e(r){return typeof r=="string"}t.is=e})(jT||(jT={}));var lA;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(lA||(lA={}));var Ad;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Ad||(Ad={}));var Le;(function(t){function e(n,i){return n===Number.MAX_VALUE&&(n=Ad.MAX_VALUE),i===Number.MAX_VALUE&&(i=Ad.MAX_VALUE),{line:n,character:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.uinteger(i.line)&&C.uinteger(i.character)}t.is=r})(Le||(Le={}));var Se;(function(t){function e(n,i,o,s){if(C.uinteger(n)&&C.uinteger(i)&&C.uinteger(o)&&C.uinteger(s))return{start:Le.create(n,i),end:Le.create(o,s)};if(Le.is(n)&&Le.is(i))return{start:n,end:i};throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${o}, ${s}]`)}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Le.is(i.start)&&Le.is(i.end)}t.is=r})(Se||(Se={}));var Dd;(function(t){function e(n,i){return{uri:n,range:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.range)&&(C.string(i.uri)||C.undefined(i.uri))}t.is=r})(Dd||(Dd={}));var uA;(function(t){function e(n,i,o,s){return{targetUri:n,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.targetRange)&&C.string(i.targetUri)&&Se.is(i.targetSelectionRange)&&(Se.is(i.originSelectionRange)||C.undefined(i.originSelectionRange))}t.is=r})(uA||(uA={}));var qT;(function(t){function e(n,i,o,s){return{red:n,green:i,blue:o,alpha:s}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.numberRange(i.red,0,1)&&C.numberRange(i.green,0,1)&&C.numberRange(i.blue,0,1)&&C.numberRange(i.alpha,0,1)}t.is=r})(qT||(qT={}));var cA;(function(t){function e(n,i){return{range:n,color:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.range)&&qT.is(i.color)}t.is=r})(cA||(cA={}));var fA;(function(t){function e(n,i,o){return{label:n,textEdit:i,additionalTextEdits:o}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.string(i.label)&&(C.undefined(i.textEdit)||oo.is(i))&&(C.undefined(i.additionalTextEdits)||C.typedArray(i.additionalTextEdits,oo.is))}t.is=r})(fA||(fA={}));var dA;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(dA||(dA={}));var pA;(function(t){function e(n,i,o,s,a,l){let u={startLine:n,endLine:i};return C.defined(o)&&(u.startCharacter=o),C.defined(s)&&(u.endCharacter=s),C.defined(a)&&(u.kind=a),C.defined(l)&&(u.collapsedText=l),u}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.uinteger(i.startLine)&&C.uinteger(i.startLine)&&(C.undefined(i.startCharacter)||C.uinteger(i.startCharacter))&&(C.undefined(i.endCharacter)||C.uinteger(i.endCharacter))&&(C.undefined(i.kind)||C.string(i.kind))}t.is=r})(pA||(pA={}));var HT;(function(t){function e(n,i){return{location:n,message:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&Dd.is(i.location)&&C.string(i.message)}t.is=r})(HT||(HT={}));var mA;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(mA||(mA={}));var hA;(function(t){t.Unnecessary=1,t.Deprecated=2})(hA||(hA={}));var gA;(function(t){function e(r){let n=r;return C.objectLiteral(n)&&C.string(n.href)}t.is=e})(gA||(gA={}));var Cd;(function(t){function e(n,i,o,s,a,l){let u={range:n,message:i};return C.defined(o)&&(u.severity=o),C.defined(s)&&(u.code=s),C.defined(a)&&(u.source=a),C.defined(l)&&(u.relatedInformation=l),u}t.create=e;function r(n){var i;let o=n;return C.defined(o)&&Se.is(o.range)&&C.string(o.message)&&(C.number(o.severity)||C.undefined(o.severity))&&(C.integer(o.code)||C.string(o.code)||C.undefined(o.code))&&(C.undefined(o.codeDescription)||C.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(C.string(o.source)||C.undefined(o.source))&&(C.undefined(o.relatedInformation)||C.typedArray(o.relatedInformation,HT.is))}t.is=r})(Cd||(Cd={}));var Aa;(function(t){function e(n,i,...o){let s={title:n,command:i};return C.defined(o)&&o.length>0&&(s.arguments=o),s}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.title)&&C.string(i.command)}t.is=r})(Aa||(Aa={}));var oo;(function(t){function e(o,s){return{range:o,newText:s}}t.replace=e;function r(o,s){return{range:{start:o,end:o},newText:s}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function i(o){let s=o;return C.objectLiteral(s)&&C.string(s.newText)&&Se.is(s.range)}t.is=i})(oo||(oo={}));var KT;(function(t){function e(n,i,o){let s={label:n};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.string(i.label)&&(C.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(C.string(i.description)||i.description===void 0)}t.is=r})(KT||(KT={}));var Da;(function(t){function e(r){let n=r;return C.string(n)}t.is=e})(Da||(Da={}));var TA;(function(t){function e(o,s,a){return{range:o,newText:s,annotationId:a}}t.replace=e;function r(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}t.insert=r;function n(o,s){return{range:o,newText:"",annotationId:s}}t.del=n;function i(o){let s=o;return oo.is(s)&&(KT.is(s.annotationId)||Da.is(s.annotationId))}t.is=i})(TA||(TA={}));var zT;(function(t){function e(n,i){return{textDocument:n,edits:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&ZT.is(i.textDocument)&&Array.isArray(i.edits)}t.is=r})(zT||(zT={}));var YT;(function(t){function e(n,i,o){let s={kind:"create",uri:n};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="create"&&C.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Da.is(i.annotationId))}t.is=r})(YT||(YT={}));var XT;(function(t){function e(n,i,o,s){let a={kind:"rename",oldUri:n,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let i=n;return i&&i.kind==="rename"&&C.string(i.oldUri)&&C.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Da.is(i.annotationId))}t.is=r})(XT||(XT={}));var JT;(function(t){function e(n,i,o){let s={kind:"delete",uri:n};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="delete"&&C.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||C.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||C.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Da.is(i.annotationId))}t.is=r})(JT||(JT={}));var QT;(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(i=>C.string(i.kind)?YT.is(i)||XT.is(i)||JT.is(i):zT.is(i)))}t.is=e})(QT||(QT={}));var yA;(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)}t.is=r})(yA||(yA={}));var _A;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)&&C.integer(i.version)}t.is=r})(_A||(_A={}));var ZT;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)&&(i.version===null||C.integer(i.version))}t.is=r})(ZT||(ZT={}));var vA;(function(t){function e(n,i,o,s){return{uri:n,languageId:i,version:o,text:s}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)&&C.string(i.languageId)&&C.integer(i.version)&&C.string(i.text)}t.is=r})(vA||(vA={}));var ey;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(ey||(ey={}));var jl;(function(t){function e(r){let n=r;return C.objectLiteral(r)&&ey.is(n.kind)&&C.string(n.value)}t.is=e})(jl||(jl={}));var RA;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(RA||(RA={}));var xA;(function(t){t.PlainText=1,t.Snippet=2})(xA||(xA={}));var NA;(function(t){t.Deprecated=1})(NA||(NA={}));var OA;(function(t){function e(n,i,o){return{newText:n,insert:i,replace:o}}t.create=e;function r(n){let i=n;return i&&C.string(i.newText)&&Se.is(i.insert)&&Se.is(i.replace)}t.is=r})(OA||(OA={}));var IA;(function(t){t.asIs=1,t.adjustIndentation=2})(IA||(IA={}));var EA;(function(t){function e(r){let n=r;return n&&(C.string(n.detail)||n.detail===void 0)&&(C.string(n.description)||n.description===void 0)}t.is=e})(EA||(EA={}));var SA;(function(t){function e(r){return{label:r}}t.create=e})(SA||(SA={}));var AA;(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(AA||(AA={}));var bd;(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let i=n;return C.string(i)||C.objectLiteral(i)&&C.string(i.language)&&C.string(i.value)}t.is=r})(bd||(bd={}));var DA;(function(t){function e(r){let n=r;return!!n&&C.objectLiteral(n)&&(jl.is(n.contents)||bd.is(n.contents)||C.typedArray(n.contents,bd.is))&&(r.range===void 0||Se.is(r.range))}t.is=e})(DA||(DA={}));var CA;(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(CA||(CA={}));var bA;(function(t){function e(r,n,...i){let o={label:r};return C.defined(n)&&(o.documentation=n),C.defined(i)?o.parameters=i:o.parameters=[],o}t.create=e})(bA||(bA={}));var kA;(function(t){t.Text=1,t.Read=2,t.Write=3})(kA||(kA={}));var LA;(function(t){function e(r,n){let i={range:r};return C.number(n)&&(i.kind=n),i}t.create=e})(LA||(LA={}));var wA;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(wA||(wA={}));var $A;(function(t){t.Deprecated=1})($A||($A={}));var PA;(function(t){function e(r,n,i,o,s){let a={name:r,kind:n,location:{uri:o,range:i}};return s&&(a.containerName=s),a}t.create=e})(PA||(PA={}));var MA;(function(t){function e(r,n,i,o){return o!==void 0?{name:r,kind:n,location:{uri:i,range:o}}:{name:r,kind:n,location:{uri:i}}}t.create=e})(MA||(MA={}));var FA;(function(t){function e(n,i,o,s,a,l){let u={name:n,detail:i,kind:o,range:s,selectionRange:a};return l!==void 0&&(u.children=l),u}t.create=e;function r(n){let i=n;return i&&C.string(i.name)&&C.number(i.kind)&&Se.is(i.range)&&Se.is(i.selectionRange)&&(i.detail===void 0||C.string(i.detail))&&(i.deprecated===void 0||C.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=r})(FA||(FA={}));var UA;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(UA||(UA={}));var kd;(function(t){t.Invoked=1,t.Automatic=2})(kd||(kd={}));var BA;(function(t){function e(n,i,o){let s={diagnostics:n};return i!=null&&(s.only=i),o!=null&&(s.triggerKind=o),s}t.create=e;function r(n){let i=n;return C.defined(i)&&C.typedArray(i.diagnostics,Cd.is)&&(i.only===void 0||C.typedArray(i.only,C.string))&&(i.triggerKind===void 0||i.triggerKind===kd.Invoked||i.triggerKind===kd.Automatic)}t.is=r})(BA||(BA={}));var WA;(function(t){function e(n,i,o){let s={title:n},a=!0;return typeof i=="string"?(a=!1,s.kind=i):Aa.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return i&&C.string(i.title)&&(i.diagnostics===void 0||C.typedArray(i.diagnostics,Cd.is))&&(i.kind===void 0||C.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||Aa.is(i.command))&&(i.isPreferred===void 0||C.boolean(i.isPreferred))&&(i.edit===void 0||QT.is(i.edit))}t.is=r})(WA||(WA={}));var GA;(function(t){function e(n,i){let o={range:n};return C.defined(i)&&(o.data=i),o}t.create=e;function r(n){let i=n;return C.defined(i)&&Se.is(i.range)&&(C.undefined(i.command)||Aa.is(i.command))}t.is=r})(GA||(GA={}));var VA;(function(t){function e(n,i){return{tabSize:n,insertSpaces:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.uinteger(i.tabSize)&&C.boolean(i.insertSpaces)}t.is=r})(VA||(VA={}));var jA;(function(t){function e(n,i,o){return{range:n,target:i,data:o}}t.create=e;function r(n){let i=n;return C.defined(i)&&Se.is(i.range)&&(C.undefined(i.target)||C.string(i.target))}t.is=r})(jA||(jA={}));var qA;(function(t){function e(n,i){return{range:n,parent:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=r})(qA||(qA={}));var HA;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(HA||(HA={}));var KA;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(KA||(KA={}));var zA;(function(t){function e(r){let n=r;return C.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(zA||(zA={}));var YA;(function(t){function e(n,i){return{range:n,text:i}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&C.string(i.text)}t.is=r})(YA||(YA={}));var XA;(function(t){function e(n,i,o){return{range:n,variableName:i,caseSensitiveLookup:o}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&C.boolean(i.caseSensitiveLookup)&&(C.string(i.variableName)||i.variableName===void 0)}t.is=r})(XA||(XA={}));var JA;(function(t){function e(n,i){return{range:n,expression:i}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&(C.string(i.expression)||i.expression===void 0)}t.is=r})(JA||(JA={}));var QA;(function(t){function e(n,i){return{frameId:n,stoppedLocation:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&Se.is(n.stoppedLocation)}t.is=r})(QA||(QA={}));var ty;(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(ty||(ty={}));var ry;(function(t){function e(n){return{value:n}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&(i.tooltip===void 0||C.string(i.tooltip)||jl.is(i.tooltip))&&(i.location===void 0||Dd.is(i.location))&&(i.command===void 0||Aa.is(i.command))}t.is=r})(ry||(ry={}));var ZA;(function(t){function e(n,i,o){let s={position:n,label:i};return o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Le.is(i.position)&&(C.string(i.label)||C.typedArray(i.label,ry.is))&&(i.kind===void 0||ty.is(i.kind))&&i.textEdits===void 0||C.typedArray(i.textEdits,oo.is)&&(i.tooltip===void 0||C.string(i.tooltip)||jl.is(i.tooltip))&&(i.paddingLeft===void 0||C.boolean(i.paddingLeft))&&(i.paddingRight===void 0||C.boolean(i.paddingRight))}t.is=r})(ZA||(ZA={}));var eD;(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(eD||(eD={}));var tD;(function(t){function e(r,n,i,o){return{insertText:r,filterText:n,range:i,command:o}}t.create=e})(tD||(tD={}));var rD;(function(t){function e(r){return{items:r}}t.create=e})(rD||(rD={}));var nD;(function(t){t.Invoked=0,t.Automatic=1})(nD||(nD={}));var iD;(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(iD||(iD={}));var oD;(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(oD||(oD={}));var sD;(function(t){function e(r){let n=r;return C.objectLiteral(n)&&jT.is(n.uri)&&C.string(n.name)}t.is=e})(sD||(sD={}));var aD;(function(t){function e(o,s,a,l){return new ny(o,s,a,l)}t.create=e;function r(o){let s=o;return!!(C.defined(s)&&C.string(s.uri)&&(C.undefined(s.languageId)||C.string(s.languageId))&&C.uinteger(s.lineCount)&&C.func(s.getText)&&C.func(s.positionAt)&&C.func(s.offsetAt))}t.is=r;function n(o,s){let a=o.getText(),l=i(s,(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),u=a.length;for(let c=l.length-1;c>=0;c--){let f=l[c],d=o.offsetAt(f.range.start),h=o.offsetAt(f.range.end);if(h<=u)a=a.substring(0,d)+f.newText+a.substring(h,a.length);else throw new Error("Overlapping edit");u=d}return a}t.applyEdits=n;function i(o,s){if(o.length<=1)return o;let a=o.length/2|0,l=o.slice(0,a),u=o.slice(a);i(l,s),i(u,s);let c=0,f=0,d=0;for(;c<l.length&&f<u.length;)s(l[c],u[f])<=0?o[d++]=l[c++]:o[d++]=u[f++];for(;c<l.length;)o[d++]=l[c++];for(;f<u.length;)o[d++]=u[f++];return o}})(aD||(aD={}));var ny=class{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let i=0;i<r.length;i++){n&&(e.push(i),n=!1);let o=r.charAt(i);n=o==="\r"||o===`
`,o==="\r"&&i+1<r.length&&r.charAt(i+1)===`
`&&i++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return Le.create(0,e);for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return Le.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}},C;(function(t){let e=Object.prototype.toString;function r(h){return typeof h!="undefined"}t.defined=r;function n(h){return typeof h=="undefined"}t.undefined=n;function i(h){return h===!0||h===!1}t.boolean=i;function o(h){return e.call(h)==="[object String]"}t.string=o;function s(h){return e.call(h)==="[object Number]"}t.number=s;function a(h,_,x){return e.call(h)==="[object Number]"&&_<=h&&h<=x}t.numberRange=a;function l(h){return e.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}t.integer=l;function u(h){return e.call(h)==="[object Number]"&&0<=h&&h<=2147483647}t.uinteger=u;function c(h){return e.call(h)==="[object Function]"}t.func=c;function f(h){return h!==null&&typeof h=="object"}t.objectLiteral=f;function d(h,_){return Array.isArray(h)&&h.every(_)}t.typedArray=d})(C||(C={}));var ql=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new Ca(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Bo;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Uo(e.startOffset,e.image.length,ks(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();(n==null?void 0:n.content.length)===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Uo(r.startOffset,r.image.length,ks(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.content.length;o++){let s=e.content[o],{offset:a,end:l}=s;if(vr(s)&&n>a&&i<l){this.addHiddenToken(s,r);return}else if(i<=a){e.content.splice(o,0,r);return}}e.content.push(r)}},Hl=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Uo=class extends Hl{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}},Bo=class extends Hl{constructor(){super(...arguments),this.content=new iy(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:Le.create(0,0),end:Le.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},iy=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},Ca=class extends Bo{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e!=null?e:""}};var Ld=Symbol("Datatype");function oy(t){return t.$type===Ld}var lD="\u200B",uD=t=>t.endsWith(lD)?t:t+lD,Kl=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new sy(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},zl=class extends Kl{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new ql,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:Tl(e)?Ld:ni(e),i=this.wrapper.DEFINE_RULE(uD(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Ld&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(i)){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),l=this.current;if(s){let u=ir(n)?i.image:this.converter.convert(i.image,o);this.assign(s.operator,s.feature,u,o,a)}else if(oy(l)){let u=i.image;ir(n)||(u=this.converter.convert(u,o).toString()),l.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(s,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let s=this.current;if(oy(s))s.value+=e.toString();else if(typeof e=="object"&&e){let a=e.$type,l=this.assignWithoutOverride(e,s);a&&(l.$type=a);let u=l;this.stack.pop(),this.stack.push(u)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return sf(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),oy(r)?this.converter.convert(r.value,r.$cstNode):(cl(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=Jr(e,mr);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?xn(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let s=this.current,a;switch(o&&typeof n=="string"?a=this.linker.buildReference(s,r,i,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r)){let o=e[n];o===void 0?e[n]=i:Array.isArray(o)&&Array.isArray(i)&&(i.push(...o),e[n]=i)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},wd=class{buildMismatchTokenMessage(e){return di.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return di.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return di.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return di.buildEarlyExitMessage(e)}},ba=class extends wd{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},Yl=class extends Kl{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(uD(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},NW={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new ba},sy=class extends Ul{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},NW),{lookaheadStrategy:n?new pi({maxLookahead:r.maxLookahead}):new Vl}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function Pd(t,e,r){return OW({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function OW(t,e){let r=hl(e,!1),n=me(e.rules).filter(It).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Wo(o,i.definition)))}}function Wo(t,e,r=!1){let n;if(ir(e))n=bW(t,e);else if(Rn(e))n=IW(t,e);else if(mr(e))n=Wo(t,e.terminal);else if(xn(e))n=cD(t,e);else if(Pr(e))n=EW(t,e);else if(Ds(e))n=AW(t,e);else if(Cs(e))n=DW(t,e);else if(ln(e))n=CW(t,e);else if(pg(e)){let i=t.consume++;n=()=>t.parser.consume(i,Zr,e)}else throw new xo(e.$cstNode,`Unexpected element type: ${e.$type}`);return fD(t,r?void 0:$d(e),n,e.cardinality)}function IW(t,e){let r=ni(e);return()=>t.parser.action(r,e)}function EW(t,e){let r=e.rule.ref;if(It(r)){let n=t.subrule++,i=e.arguments.length>0?SW(r,e.arguments):()=>({});return o=>t.parser.subrule(n,dD(t,r),e,i(o))}else if($r(r)){let n=t.consume++,i=ay(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)Ui(r);else throw new xo(e.$cstNode,`Undefined rule type: ${e.$type}`)}function SW(t,e){let r=e.map(n=>mi(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let s=t.parameters[o],a=r[o];i[s.name]=a(n)}return i}}function mi(t){if(Wh(t)){let e=mi(t.left),r=mi(t.right);return n=>e(n)||r(n)}else if(Uh(t)){let e=mi(t.left),r=mi(t.right);return n=>e(n)&&r(n)}else if(Hh(t)){let e=mi(t.value);return r=>!e(r)}else if(Xh(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Mh(t)){let e=!!t.true;return()=>e}Ui(t)}function AW(t,e){if(e.elements.length===1)return Wo(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Wo(t,i,!0)},s=$d(i);s&&(o.GATE=mi(s)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let s={ALT:()=>o.ALT(i)},a=o.GATE;return a&&(s.GATE=()=>a(i)),s}))}}function DW(t,e){if(e.elements.length===1)return Wo(t,e.elements[0]);let r=[];for(let a of e.elements){let l={ALT:Wo(t,a,!0)},u=$d(a);u&&(l.GATE=mi(u)),r.push(l)}let n=t.or++,i=(a,l)=>{let u=l.getRuleStack().join("-");return`uGroup_${a}_${u}`},o=a=>t.parser.alternatives(n,r.map((l,u)=>{let c={ALT:()=>!0},f=t.parser;c.ALT=()=>{if(l.ALT(a),!f.isRecording()){let h=i(n,f);f.unorderedGroups.get(h)||f.unorderedGroups.set(h,[]);let _=f.unorderedGroups.get(h);typeof(_==null?void 0:_[u])=="undefined"&&(_[u]=!0)}};let d=l.GATE;return d?c.GATE=()=>d(a):c.GATE=()=>{let h=f.unorderedGroups.get(i(n,f));return!(h!=null&&h[u])},c})),s=fD(t,$d(e),o,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function CW(t,e){let r=e.elements.map(n=>Wo(t,n));return n=>r.forEach(i=>i(n))}function $d(t){if(ln(t))return t.guardCondition}function cD(t,e,r=e.terminal){if(r)if(Pr(r)&&It(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,dD(t,r.rule.ref),e,i)}else if(Pr(r)&&$r(r.rule.ref)){let n=t.consume++,i=ay(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if(ir(r)){let n=t.consume++,i=ay(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=df(e.type.ref),i=n==null?void 0:n.terminal;if(!i)throw new Error("Could not find name assignment for type: "+ni(e.type.ref));return cD(t,e,i)}}function bW(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function fD(t,e,r,n){let i=e&&mi(e);if(!n)if(i){let o=t.or++;return s=>t.parser.alternatives(o,[{ALT:()=>r(s),GATE:()=>i(s)},{ALT:Id(),GATE:()=>!i(s)}])}else return r;if(n==="*"){let o=t.many++;return s=>t.parser.many(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else if(n==="+"){let o=t.many++;if(i){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(a)}),GATE:()=>i(a)},{ALT:Id(),GATE:()=>!i(a)}])}else return s=>t.parser.atLeastOne(o,{DEF:()=>r(s)})}else if(n==="?"){let o=t.optional++;return s=>t.parser.optional(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else Ui(n)}function dD(t,e){let r=kW(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function kW(t,e){if(It(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!It(n);)(ln(n)||Ds(n)||Cs(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function ay(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function ly(t){let e=t.Grammar,r=t.parser.Lexer,n=new Yl(t);return Pd(e,n,r.definition),n.finalize(),n}function uy(t){let e=pD(t);return e.finalize(),e}function pD(t){let e=t.Grammar,r=t.parser.Lexer,n=new zl(t);return Pd(e,n,r.definition)}var Xl=class{buildTokens(e,r){let n=me(hl(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&uf(a)?o.unshift(s):o.push(s)}),o}buildTerminalTokens(e){return e.filter($r).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Wi(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,i={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(i.GROUP=uf(r)?At.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,i)=>(r.lastIndex=i,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(It).flatMap(i=>Mr(i).filter(ir)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!(n!=null&&n.caseInsensitive)))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(jg(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i==null?void 0:i.PATTERN;return o!=null&&o.source&&qg("^"+o.source+"$",e.value)&&n.push(i),n},[])}};var Jl=class{convert(e,r){let n=r.grammarSource;if(xn(n)&&(n=gl(n)),Pr(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return Hn.convertInt(r);case"STRING":return Hn.convertString(r);case"ID":return Hn.convertID(r)}switch((i=Zg(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return Hn.convertNumber(r);case"boolean":return Hn.convertBoolean(r);case"bigint":return Hn.convertBigint(r);case"date":return Hn.convertDate(r);default:return r}}},Hn;(function(t){function e(u){let c="";for(let f=1;f<u.length-1;f++){let d=u.charAt(f);if(d==="\\"){let h=u.charAt(++f);c+=r(h)}else c+=d}return c}t.convertString=e;function r(u){switch(u){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return u}}function n(u){return u.charAt(0)==="^"?u.substring(1):u}t.convertID=n;function i(u){return parseInt(u)}t.convertInt=i;function o(u){return BigInt(u)}t.convertBigint=o;function s(u){return new Date(u)}t.convertDate=s;function a(u){return Number(u)}t.convertNumber=a;function l(u){return u.toLowerCase()==="true"}t.convertBoolean=l})(Hn||(Hn={}));var te={};De(te,Kt(yD(),1));function _y(){return new Promise(t=>{typeof setImmediate=="undefined"?setTimeout(t,0):setImmediate(t)})}var yy=0,_D=10;function vD(){return yy=Date.now(),new te.CancellationTokenSource}function RD(t){_D=t}var Kn=Symbol("OperationCancelled");function zn(t){return t===Kn}async function xt(t){if(t===te.CancellationToken.None)return;let e=Date.now();if(e-yy>=_D&&(yy=e,await _y()),t.isCancellationRequested)throw Kn}var Sr=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var Bd=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=ND(n.range),o=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(s,this._content.length);let a=Math.max(i.start.line,0),l=Math.max(i.end.line,0),u=this._lineOffsets,c=xD(n.text,!1,o);if(l-a===c.length)for(let d=0,h=c.length;d<h;d++)u[d+a+1]=c[d];else c.length<1e4?u.splice(a+1,l-a,...c):this._lineOffsets=u=u.slice(0,a+1).concat(c,u.slice(l+1));let f=n.text.length-(s-o);if(f!==0)for(let d=a+1+c.length,h=u.length;d<h;d++)u[d]=u[d]+f}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=xD(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},so;(function(t){function e(i,o,s,a){return new Bd(i,o,s,a)}t.create=e;function r(i,o,s){if(i instanceof Bd)return i.update(o,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let s=i.getText(),a=vy(o.map(GW),(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),l=0,u=[];for(let c of a){let f=i.offsetAt(c.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&u.push(s.substring(l,f)),c.newText.length&&u.push(c.newText),l=i.offsetAt(c.range.end)}return u.push(s.substr(l)),u.join("")}t.applyEdits=n})(so||(so={}));function vy(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);vy(n,e),vy(i,e);let o=0,s=0,a=0;for(;o<n.length&&s<i.length;)e(n[o],i[s])<=0?t[a++]=n[o++]:t[a++]=i[s++];for(;o<n.length;)t[a++]=n[o++];for(;s<i.length;)t[a++]=i[s++];return t}function xD(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function ND(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function GW(t){let e=ND(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var oe;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(oe||(oe={}));var Ql=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=te.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r!=null?r:qe.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let i=await this.parseAsync(e,r,n);return this.createLangiumDocument(i,e,void 0,r)}else{let i=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(i,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:oe.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:oe.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=o,o}async update(e,r){var n,i;let o=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,s=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=s?s.getText():await this.fileSystemProvider.readFile(e.uri);if(s)Object.defineProperty(e,"textDocument",{value:s});else{let l=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:l})}return o!==a&&(e.parseResult=await this.parseAsync(e.uri,a,r),e.parseResult.value.$document=e),e.state=oe.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i!=null?i:i=so.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r!=null?r:"")}},Zl=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return me(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(i=>(this.addDocument(i),i));{let i=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=oe.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=oe.Changed,this.documentMap.delete(r)),n}};var Go=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=te.CancellationToken.None){for(let n of Fr(e.parseResult.value))await xt(r),Ls(n).forEach(i=>this.doLink(i,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if(_n(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o!=null?o:this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n!=null?n:this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,s={$refNode:n,$refText:i,get ref(){var a;if(Be(this._ref))return this._ref;if(nl(this._nodeDescription)){let l=o.loadAstNode(this._nodeDescription);this._ref=l!=null?l:o.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let l=o.getLinkedNode({reference:s,container:e,property:r});if(l.error&&yt(e).state<oe.ComputedScopes)return;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return _n(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(_n(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=yt(e.container);n.state<oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};function Wd(t){return typeof t.name=="string"}var eu=class{getName(e){if(Wd(e))return e.name}getNameNode(e){return Bi(e.$cstNode,"name")}};var Vo=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=Jg(e),n=e.astNode;if(r&&n){let i=n[r.feature];if(Tt(i))return i.ref;if(Array.isArray(i)){for(let o of i)if(Tt(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||Lg(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r!=null&&r.$cstNode){let n=this.nameProvider.getNameNode(r);return n!=null?n:r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(i=i.filter(o=>$t.equals(o.sourceUri,r.documentUri))),n.push(...i),me(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=yt(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:vo(r),local:!0}}}};var dn=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return bs.sum(me(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return me(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return me(this.map.keys())}values(){return me(this.map.values()).flat()}entriesGroupedByKey(){return me(this.map.entries())}},jo=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var qo=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=te.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=Ro,i=te.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let s of n(e))await xt(i),this.exportNode(s,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=te.CancellationToken.None){let n=e.parseResult.value,i=new dn;for(let o of Mr(n))await xt(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};var qr=class{constructor(e,r,n){var i;this.elements=e,this.outerScope=r,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},tu=class{constructor(e,r,n){var i;this.elements=new Map,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1;for(let o of e){let s=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(s,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=me(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},VW={getElement(){},getAllElements(){return Mi}};var wa=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},ru=class extends wa{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},Ho=class extends wa{constructor(e){super(),this.cache=new Map,this.converter=e!=null?e:r=>r}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let i=this.cacheForContext(e);if(i.has(r))return i.get(r);if(n){let o=n();return i.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},Gd=class extends Ho{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let i=r.concat(n);for(let o of i)this.clear(o)}))}},$a=class extends ru{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var Ko=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new $a(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=yt(e.container).precomputedScopes;if(i){let s=e.container;do{let a=i.get(s);a.length>0&&r.push(me(a).filter(l=>this.reflection.isSubtype(l.type,n))),s=s.$container}while(s)}let o=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)o=this.createScope(r[s],o);return o}createScope(e,r,n){return new qr(me(e),r,n)}createScopeForNodes(e,r,n){let i=me(e).map(o=>{let s=this.nameProvider.getName(o);if(s)return this.descriptions.createDescription(o,s)}).nonNullable();return new qr(i,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new tu(this.indexManager.allElements(e)))}};function Ry(t){return typeof t.$comment=="string"}function OD(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var zo=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r==null?void 0:r.replacer,i=(s,a)=>this.replacer(s,a,r),o=n?(s,a)=>n(s,a,i):i;try{return this.currentDocument=yt(e),JSON.stringify(e,o,r==null?void 0:r.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:i,textRegions:o,comments:s,uriConverter:a}){var l,u,c,f;if(!this.ignoreProperties.has(e))if(Tt(r)){let d=r.ref,h=n?r.$refText:void 0;if(d){let _=yt(d),x="";this.currentDocument&&this.currentDocument!==_&&(a?x=a(_.uri,r):x=_.uri.toString());let E=this.astNodeLocator.getAstNodePath(d);return{$ref:`${x}#${E}`,$refText:h}}else return{$error:(u=(l=r.error)===null||l===void 0?void 0:l.message)!==null&&u!==void 0?u:"Could not resolve reference",$refText:h}}else if(Be(r)){let d;if(o&&(d=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&(d!=null&&d.$textRegion)&&(d.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),i&&!e&&(d!=null||(d=Object.assign({},r)),d.$sourceText=(f=r.$cstNode)===null||f===void 0?void 0:f.text),s){d!=null||(d=Object.assign({},r));let h=this.commentProvider.getComment(r);h&&(d.$comment=h.replace(/\r/g,""))}return d!=null?d:r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),i=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let s=$s(e.$cstNode,o).map(r);s.length!==0&&(i[o]=s)}),e}}linkNode(e,r,n,i,o,s){for(let[l,u]of Object.entries(e))if(Array.isArray(u))for(let c=0;c<u.length;c++){let f=u[c];OD(f)?u[c]=this.reviveReference(e,l,r,f,n):Be(f)&&this.linkNode(f,r,n,e,l,c)}else OD(u)?e[l]=this.reviveReference(e,l,r,u,n):Be(u)&&this.linkNode(u,r,n,e,l);let a=e;a.$container=i,a.$containerProperty=o,a.$containerIndex=s}reviveReference(e,r,n,i,o){let s=i.$refText,a=i.$error;if(i.$ref){let l=this.getRefNode(n,i.$ref,o.uriConverter);if(Be(l))return s||(s=this.nameProvider.getName(l)),{$refText:s!=null?s:"",ref:l};a=l}if(a){let l={$refText:s!=null?s:""};return l.error={container:e,property:r,message:a,reference:l},l}else return}getRefNode(e,r,n){try{let i=r.indexOf("#");if(i===0){let l=this.astNodeLocator.getAstNode(e,r.substring(1));return l||"Could not resolve path: "+r}if(i<0){let l=n?n(r):qe.parse(r),u=this.langiumDocuments.getDocument(l);return u?u.parseResult.value:"Could not find document for URI: "+r}let o=n?n(r.substring(0,i)):qe.parse(r.substring(0,i)),s=this.langiumDocuments.getDocument(o);if(!s)return"Could not find document for URI: "+r;if(i===r.length-1)return s.parseResult.value;let a=this.astNodeLocator.getAstNode(s.parseResult.value,r.substring(i+1));return a||"Could not resolve URI: "+r}catch(i){return String(i)}}};var Yo=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=$t.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function Vd(t){return{code:t}}var Pa;(function(t){t.all=["fast","slow","built-in"]})(Pa||(Pa={}));var nu=class{constructor(e){this.entries=new dn,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[i,o]of Object.entries(e)){let s=o;if(Array.isArray(s))for(let a of s){let l={check:this.wrapValidationException(a,r),category:n};this.addEntry(i,l)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(i,a)}}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(s){if(zn(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),i("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=me(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(i=>r.includes(i.category))),n.map(i=>i.check)}};var iu=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=te.CancellationToken.None){let i=e.parseResult,o=[];if(await xt(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(i,o,r),r.stopAfterLexingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===hi.LexingError})||(this.processParsingErrors(i,o,r),r.stopAfterParsingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===hi.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===hi.LinkingError}))))return o;try{o.push(...await this.validateAst(i.value,r,n))}catch(s){if(zn(s))throw s;console.error("An error occurred during validation:",s)}return await xt(n),o}processLexingErrors(e,r,n){for(let i of e.lexerErrors){let o={severity:jd("error"),range:{start:{line:i.line-1,character:i.column-1},end:{line:i.line-1,character:i.column+i.length-1}},message:i.message,data:Vd(hi.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let i of e.parserErrors){let o;if(isNaN(i.token.startOffset)){if("previousToken"in i){let s=i.previousToken;if(isNaN(s.startOffset)){let a={line:0,character:0};o={start:a,end:a}}else{let a={line:s.endLine-1,character:s.endColumn};o={start:a,end:a}}}}else o=ks(i.token);if(o){let s={severity:jd("error"),range:o,message:i.message,data:Vd(hi.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let i of e.references){let o=i.error;if(o){let s={node:o.container,property:o.property,index:o.index,data:{code:hi.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,s))}}}async validateAst(e,r,n=te.CancellationToken.None){let i=[],o=(s,a,l)=>{i.push(this.toDiagnostic(s,a,l))};return await Promise.all(Fr(e).map(async s=>{await xt(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let l of a)await l(s,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:ID(n),severity:jd(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function ID(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Bi(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Ps(t.node.$cstNode,t.keyword,t.index)),e!=null||(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function jd(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var hi;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(hi||(hi={}));var ou=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=yt(e)){r!=null||(r=this.nameProvider.getName(e));let i=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${i} has no name.`);let o,s=()=>{var a;return o!=null?o:o=vo((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode)};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:vo(e.$cstNode),type:e.$type,documentUri:n.uri,path:i}}},su=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=te.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of Fr(i))await xt(r),Ls(o).filter(s=>!_n(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=yt(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:vo(n),local:$t.equals(r.documentUri,i)}}};var au=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let s=o.indexOf(this.indexSeparator);if(s>0){let a=o.substring(0,s),l=parseInt(o.substring(s+1)),u=i[a];return u==null?void 0:u[l]}return i[o]},e)}};var lu=class{constructor(e){this._ready=new Sr,this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.fetchConfiguration){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await e.fetchConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){await this.ready;let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var Xo;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(Xo||(Xo={}));var uu=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new dn,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=oe.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=te.CancellationToken.None){var i,o;for(let s of e){let a=s.uri.toString();if(s.state===oe.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=oe.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let l=this.buildState.get(a),u=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(u){let f=((o=r.validation.categories)!==null&&o!==void 0?o:Pa.all).filter(d=>!u.includes(d));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:f})},result:l.result}),s.state=oe.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=oe.Changed,await this.emitUpdate(e.map(s=>s.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=te.CancellationToken.None){this.currentState=oe.Changed;for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString()),this.indexManager.remove(s);for(let s of e){if(!this.langiumDocuments.invalidateDocument(s)){let l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},s);l.state=oe.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(s.toString())}let i=me(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!i.has(s.uri.toString())&&this.shouldRelink(s,i)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,oe.ComputedScopes),s.diagnostics=void 0}),await this.emitUpdate(e,r),await xt(n);let o=this.langiumDocuments.all.filter(s=>{var a;return s.state<oe.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),Xo.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,oe.Parsed,n,o=>this.langiumDocumentFactory.update(o,n)),await this.runCancelable(e,oe.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,oe.ComputedScopes,n,async o=>{let s=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await s.computeLocalScopes(o,n)}),await this.runCancelable(e,oe.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,oe.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o));await this.runCancelable(i,oe.Validated,n,o=>this.validate(o,n));for(let o of e){let s=this.buildState.get(o.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let i=n.uri.toString(),o=this.buildState.get(i);(!o||o.completed)&&this.buildState.set(i,{completed:!1,options:r,result:o==null?void 0:o.result})}}async runCancelable(e,r,n,i){let o=e.filter(s=>s.state<r);for(let s of o)await xt(n),await i(s),s.state=r;await this.notifyBuildPhase(o,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Xo.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let i;if(r&&"path"in r?i=r:n=r,n!=null||(n=te.CancellationToken.None),i){let o=this.langiumDocuments.getDocument(i);if(o&&o.state>e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Kn):new Promise((o,s)=>{let a=this.onBuildPhase(e,()=>{if(a.dispose(),l.dispose(),i){let u=this.langiumDocuments.getDocument(i);o(u==null?void 0:u.uri)}else o(void 0)}),l=n.onCancellationRequested(()=>{a.dispose(),l.dispose(),s(Kn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await xt(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,i;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,l=await o.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;let u=this.buildState.get(e.uri.toString());if(u){(n=u.result)!==null&&n!==void 0||(u.result={});let c=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:Pa.all;u.result.validationChecks?u.result.validationChecks.push(...c):u.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var cu=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new Ho,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=yt(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(s=>{$t.equals(s.targetUri,n)&&s.targetPath===r&&i.push(s)})}),me(i)}allElements(e,r){let n=me(this.symbolIndex.keys());return r&&(n=n.filter(i=>!r||r.has(i))),n.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var o;return((o=this.symbolIndex.get(e))!==null&&o!==void 0?o:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=te.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),o=e.uri.toString();this.symbolIndex.set(o,i),this.symbolByTypeIndex.clear(o)}async updateReferences(e,r=te.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(i=>!i.local&&r.has(i.targetUri.toString())):!1}};var fu=class{constructor(e){this.initialBuildOptions={},this._ready=new Sr,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=te.CancellationToken.None){let n=await this.performStartup(e);await xt(r),await this.documentBuilder.build(n,this.initialBuildOptions,r)}async performStartup(e){let r=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),n=[],i=o=>{n.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,i),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,r,i))),this._ready.resolve(),n}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return qe.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,i);else if(s.isFile){let a=await this.langiumDocuments.getOrCreateDocument(s.uri);i(a)}}}))}includeEntry(e,r,n){let i=$t.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=$t.extname(r.uri);return n.includes(o)}return!1}};var du=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=xy(r)?Object.values(r):r;this.chevrotainLexer=new At(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(xy(e))return e;let r=Ny(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};function ED(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Ny(t){return t&&"modes"in t&&"defaultMode"in t}function xy(t){return!ED(t)&&!Ny(t)}function Ey(t,e,r){let n,i;typeof t=="string"?(i=e,n=r):(i=t.range.start,n=e),i||(i=Le.create(0,0));let o=DD(t),s=Ay(n),a=qW({lines:o,position:i,options:s});return XW({index:0,tokens:a,position:i})}function Sy(t,e){let r=Ay(e),n=DD(t);if(n.length===0)return!1;let i=n[0],o=n[n.length-1],s=r.start,a=r.end;return!!(s!=null&&s.exec(i))&&!!(a!=null&&a.exec(o))}function DD(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Gg)}var SD=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,jW=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function qW(t){var e,r,n;let i=[],o=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let l=a===0,u=a===t.lines.length-1,c=t.lines[a],f=0;if(l&&t.options.start){let h=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);h&&(f=h.index+h[0].length)}else{let h=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);h&&(f=h.index+h[0].length)}if(u){let h=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);h&&(c=c.substring(0,h.index))}if(c=c.substring(0,YW(c)),Iy(c,f)>=c.length){if(i.length>0){let h=Le.create(o,s);i.push({type:"break",content:"",range:Se.create(h,h)})}}else{SD.lastIndex=f;let h=SD.exec(c);if(h){let _=h[0],x=h[1],E=Le.create(o,s+f),I=Le.create(o,s+f+_.length);i.push({type:"tag",content:x,range:Se.create(E,I)}),f+=_.length,f=Iy(c,f)}if(f<c.length){let _=c.substring(f),x=Array.from(_.matchAll(jW));i.push(...HW(x,_,o,s+f))}}o++,s=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function HW(t,e,r,n){let i=[];if(t.length===0){let o=Le.create(r,n),s=Le.create(r,n+e.length);i.push({type:"text",content:e,range:Se.create(o,s)})}else{let o=0;for(let a of t){let l=a.index,u=e.substring(o,l);u.length>0&&i.push({type:"text",content:e.substring(o,l),range:Se.create(Le.create(r,o+n),Le.create(r,l+n))});let c=u.length+1,f=a[1];if(i.push({type:"inline-tag",content:f,range:Se.create(Le.create(r,o+c+n),Le.create(r,o+c+f.length+n))}),c+=f.length,a.length===4){c+=a[2].length;let d=a[3];i.push({type:"text",content:d,range:Se.create(Le.create(r,o+c+n),Le.create(r,o+c+d.length+n))})}else i.push({type:"text",content:"",range:Se.create(Le.create(r,o+c+n),Le.create(r,o+c+n))});o=l+a[0].length}let s=e.substring(o);s.length>0&&i.push({type:"text",content:s,range:Se.create(Le.create(r,o+n),Le.create(r,o+n+s.length))})}return i}var KW=/\S/,zW=/\s*$/;function Iy(t,e){let r=t.substring(e).match(KW);return r?e+r.index:t.length}function YW(t){let e=t.match(zW);if(e&&typeof e.index=="number")return e.index}function XW(t){var e,r,n,i;let o=Le.create(t.position.line,t.position.character);if(t.tokens.length===0)return new qd([],Se.create(o,o));let s=[];for(;t.index<t.tokens.length;){let u=JW(t,s[s.length-1]);u&&s.push(u)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,l=(i=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&i!==void 0?i:o;return new qd(s,Se.create(a,l))}function JW(t,e){let r=t.tokens[t.index];if(r.type==="tag")return bD(t,!1);if(r.type==="text"||r.type==="inline-tag")return CD(t);QW(r,e),t.index++}function QW(t,e){if(e){let r=new Hd("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function CD(t){let e=t.tokens[t.index],r=e,n=e,i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(ZW(t)),n=e,e=t.tokens[t.index];return new mu(i,Se.create(r.range.start,n.range.end))}function ZW(t){return t.tokens[t.index].type==="inline-tag"?bD(t,!0):kD(t)}function bD(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){let o=kD(t);return new pu(n,new mu([o],o.range),e,Se.create(r.range.start,o.range.end))}else{let o=CD(t);return new pu(n,o,e,Se.create(r.range.start,o.range.end))}else{let o=r.range;return new pu(n,new mu([],o),e,o)}}function kD(t){let e=t.tokens[t.index++];return new Hd(e.content,e.range)}function Ay(t){if(!t)return Ay({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Oy(e,!0),end:Oy(r,!1),line:Oy(n,!0)}}function Oy(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?Eo(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var qd=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=AD(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let i=n.toMarkdown(e);r+=AD(r)+i}return r.trim()}},pu=class{constructor(e,r,n,i){this.name=e,this.content=r,this.inline=n,this.range=i}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e==null?void 0:e.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=eG(this.name,r,e!=null?e:{});if(typeof o=="string")return o}let n="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?n="*":(e==null?void 0:e.tag)==="bold"?n="**":(e==null?void 0:e.tag)==="bold-italic"&&(n="***");let i=`${n}@${this.name}${n}`;return this.content.inlines.length===1?i=`${i} \u2014 ${r}`:this.content.inlines.length>1&&(i=`${i}
${r}`),this.inline?`{${i}}`:i}};function eG(t,e,r){var n,i;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),s=e;if(o>0){let l=Iy(e,o);s=e.substring(l),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(i=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&i!==void 0?i:tG(e,s)}}function tG(t,e){try{return qe.parse(t,!0),`[${e}](${t})`}catch{return t}}var mu=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],i=this.inlines[r+1];e+=n.toString(),i&&i.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let i=this.inlines[n],o=this.inlines[n+1];r+=i.toMarkdown(e),o&&o.range.start.line>i.range.start.line&&(r+=`
`)}return r}},Hd=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function AD(t){return t.endsWith(`
`)?`
`:`

`}var hu=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Sy(r))return Ey(r).toMarkdown({renderLink:(i,o)=>this.documentationLinkRenderer(e,i,o),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,r,n){var i;let o=(i=this.findNameInPrecomputedScopes(e,r))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let s=o.nameSegment.range.start.line+1,a=o.nameSegment.range.start.character+1,l=o.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${l.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let i=yt(e).precomputedScopes;if(!i)return;let o=e;do{let a=i.get(o).find(l=>l.name===r);if(a)return a;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(i=>i.name===r)}};var gu=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Ry(e)?e.$comment:(r=wg(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var Dt={};De(Dt,Kt(hy(),1));var Tu=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},Kd=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),i=new Sr,o,s=r.onCancellationRequested(()=>{o=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(a=>{let l=this.hydrator.hydrate(a);i.resolve(l)}).catch(a=>{i.reject(a)}).finally(()=>{s.dispose(),clearTimeout(o)}),i.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new Sr;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject(Kn)}),this.queue.push(r),r.promise}},zd=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,i){this.onReadyEmitter=new Dt.Emitter,this.deferred=new Sr,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=i,r(o=>{let s=o;this.deferred.resolve(s),this.unlock()}),n(o=>{this.deferred.reject(o),this.unlock()})}terminate(){this.deferred.reject(Kn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new Sr,this.sendMessage(e),this.deferred.promise}};var yu=class{constructor(){this.previousTokenSource=new te.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new te.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let i=new Sr,o={action:r,deferred:i,cancellationToken:n!=null?n:te.CancellationToken.None};return e.push(o),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:i})=>{try{let o=await Promise.resolve().then(()=>r(i));n.resolve(o)}catch(o){zn(o)?n.resolve(void 0):n.reject(o)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var _u=class{constructor(e){this.grammarElementIdMap=new jo,this.tokenTypeIdMap=new jo,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors.map(r=>Object.assign({},r)),parserErrors:e.parserErrors.map(r=>Object.assign({},r)),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}createDehyrationContext(e){let r=new Map,n=new Map;for(let i of Fr(e))r.set(i,{});if(e.$cstNode)for(let i of _o(e.$cstNode))n.set(i,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.dehydrateAstNode(a,r)):Tt(a)?s.push(this.dehydrateReference(a,r)):s.push(a)}else Be(o)?n[i]=this.dehydrateAstNode(o,r):Tt(o)?n[i]=this.dehydrateReference(o,r):o!==void 0&&(n[i]=o);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return il(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),vr(e)?n.content=e.content.map(i=>this.dehydrateCstNode(i,r)):vn(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=e.value,n=this.createHydrationContext(r);return"$cstNode"in r&&this.hydrateCstNode(r.$cstNode,n),{lexerErrors:e.lexerErrors,parserErrors:e.parserErrors,value:this.hydrateAstNode(r,n)}}createHydrationContext(e){let r=new Map,n=new Map;for(let o of Fr(e))r.set(o,{});let i;if(e.$cstNode)for(let o of _o(e.$cstNode)){let s;"fullText"in o?(s=new Ca(o.fullText),i=s):"content"in o?s=new Bo:"tokenType"in o&&(s=this.hydrateCstLeafNode(o)),s&&(n.set(o,s),s.root=i)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.setParent(this.hydrateAstNode(a,r),n)):Tt(a)?s.push(this.hydrateReference(a,n,i,r)):s.push(a)}else Be(o)?n[i]=this.setParent(this.hydrateAstNode(o,r),n):Tt(o)?n[i]=this.hydrateReference(o,n,i,r):o!==void 0&&(n[i]=o);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,i){return this.linker.buildReference(r,n,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let i=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=r.astNodes.get(e.astNode),vr(i))for(let o of e.content){let s=this.hydrateCstNode(o,r,n++);i.content.push(s)}return i}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,i=e.length,o=e.startLine,s=e.startColumn,a=e.endLine,l=e.endColumn,u=e.hidden;return new Uo(n,i,{start:{line:o,character:s},end:{line:a,character:l}},r,u)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Fr(this.grammar))yo(r)&&this.grammarElementIdMap.set(r,e++)}};function vu(t){return{documentation:{CommentProvider:e=>new gu(e),DocumentationProvider:e=>new hu(e)},parser:{AsyncParser:e=>new Tu(e),GrammarConfig:e=>nT(e),LangiumParser:e=>uy(e),CompletionParser:e=>ly(e),ValueConverter:()=>new Jl,TokenBuilder:()=>new Xl,Lexer:e=>new du(e),ParserErrorMessageProvider:()=>new ba},workspace:{AstNodeLocator:()=>new au,AstNodeDescriptionProvider:e=>new ou(e),ReferenceDescriptionProvider:e=>new su(e)},references:{Linker:e=>new Go(e),NameProvider:()=>new eu,ScopeProvider:e=>new Ko(e),ScopeComputation:e=>new qo(e),References:e=>new Vo(e)},serializer:{Hydrator:e=>new _u(e),JsonSerializer:e=>new zo(e)},validation:{DocumentValidator:e=>new iu(e),ValidationRegistry:e=>new nu(e)},shared:()=>t.shared}}function Ru(t){return{ServiceRegistry:()=>new Yo,workspace:{LangiumDocuments:e=>new Zl(e),LangiumDocumentFactory:e=>new Ql(e),DocumentBuilder:e=>new uu(e),IndexManager:e=>new cu(e),WorkspaceManager:e=>new fu(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new yu,ConfigurationProvider:e=>new lu(e)}}}var Ma;(function(t){t.merge=(e,r)=>Yd(Yd({},e),r)})(Ma||(Ma={}));function Jo(t,e,r,n,i,o,s,a,l){let u=[t,e,r,n,i,o,s,a,l].reduce(Yd,{});return $D(u)}var Dy=Symbol("isProxy");function xu(t){if(t&&t[Dy])for(let e of Object.values(t))xu(e);return t}function $D(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>wD(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(wD(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),Dy]});return r[Dy]=!0,r}var LD=Symbol();function wD(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===LD)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=LD;try{t[e]=typeof i=="function"?i(n):$D(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function Yd(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=Yd(i,n):t[r]=n}}return t}var PD=Kt(wr(),1);var Fa=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=Jt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let s=$t.equals(yt(o).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(o,a).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return PD.DocumentHighlight.create(e.segment.range)}};var Xd=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o!=null?o:i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of Ro(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}};var Nu=Kt(wr(),1);var Jd=class{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var i,o;r=!!(!((o=(i=n.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||o===void 0)&&o.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=me(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,i={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n==null||n.client.register(Nu.DidChangeWatchedFilesNotification.type,i)}}fireDocumentUpdate(e,r){this.workspaceManager.ready.then(()=>{this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}).catch(n=>{console.error("Workspace initialization failed. Could not perform document update.",n)})}didChangeContent(e){this.fireDocumentUpdate([qe.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=me(e.changes).filter(i=>i.type!==Nu.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>qe.parse(i.uri)).toArray(),n=me(e.changes).filter(i=>i.type===Nu.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>qe.parse(i.uri)).toArray();this.fireDocumentUpdate(r,n)}};var Ou=Kt(wr(),1);var Qd=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=Mr(i).iterator(),s;do if(s=o.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||o.prune()}while(!s.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of kg(i))if(this.commentNames.includes(o.tokenType.name)){let s=this.toFoldingRange(e,o,Ou.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,s=i.end;if(!(s.line-o.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),Ou.FoldingRange.create(o.line,s.line,o.character,s.character,n)}includeLastFoldingLine(e,r){if(r===Ou.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};var Zd=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,s=r.length;for(let a=0;a<s;a++){let l=r.charCodeAt(a),u=e.charCodeAt(o);if((l===u||this.toUpperCharCode(l)===this.toUpperCharCode(u))&&(n||(n=i===void 0||this.isWordTransition(i,l)),n&&o++,o===e.length))return!0;i=l}return!1}isWordTransition(e,r){return MD<=e&&e<=FD&&rG<=r&&r<=nG||e===UD&&r!==UD}toUpperCharCode(e){return MD<=e&&e<=FD?e-32:e}},MD=97,FD=122,rG=65,nG=90,UD=95;var Cy=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let s=e.textDocument.offsetAt(r.position),a=Jt(o,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l)}}}},ep=class extends Cy{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var pn=Kt(gt(),1);var Ne=Kt(wr(),1);var WD={[Ne.SemanticTokenTypes.class]:0,[Ne.SemanticTokenTypes.comment]:1,[Ne.SemanticTokenTypes.enum]:2,[Ne.SemanticTokenTypes.enumMember]:3,[Ne.SemanticTokenTypes.event]:4,[Ne.SemanticTokenTypes.function]:5,[Ne.SemanticTokenTypes.interface]:6,[Ne.SemanticTokenTypes.keyword]:7,[Ne.SemanticTokenTypes.macro]:8,[Ne.SemanticTokenTypes.method]:9,[Ne.SemanticTokenTypes.modifier]:10,[Ne.SemanticTokenTypes.namespace]:11,[Ne.SemanticTokenTypes.number]:12,[Ne.SemanticTokenTypes.operator]:13,[Ne.SemanticTokenTypes.parameter]:14,[Ne.SemanticTokenTypes.property]:15,[Ne.SemanticTokenTypes.regexp]:16,[Ne.SemanticTokenTypes.string]:17,[Ne.SemanticTokenTypes.struct]:18,[Ne.SemanticTokenTypes.type]:19,[Ne.SemanticTokenTypes.typeParameter]:20,[Ne.SemanticTokenTypes.variable]:21,[Ne.SemanticTokenTypes.decorator]:22},iG={[Ne.SemanticTokenModifiers.abstract]:1,[Ne.SemanticTokenModifiers.async]:2,[Ne.SemanticTokenModifiers.declaration]:4,[Ne.SemanticTokenModifiers.defaultLibrary]:8,[Ne.SemanticTokenModifiers.definition]:16,[Ne.SemanticTokenModifiers.deprecated]:32,[Ne.SemanticTokenModifiers.documentation]:64,[Ne.SemanticTokenModifiers.modification]:128,[Ne.SemanticTokenModifiers.readonly]:256,[Ne.SemanticTokenModifiers.static]:512},GD={legend:{tokenTypes:Object.keys(WD),tokenModifiers:Object.keys(iG)},full:{delta:!0},range:!0};var BD;(function(t){function e(n,i){let o=new Map;Object.entries(WD).forEach(([l,u])=>o.set(u,l));let s=0,a=0;return r(n.data,5).map(l=>{s+=l[0],l[0]!==0&&(a=0),a+=l[1];let u=l[2];return{offset:i.textDocument.offsetAt({line:s,character:a}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:i.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+u}})}})}t.decode=e;function r(n,i){let o=[];for(let s=0;s<n.length;s+=i){let a=n.slice(s,s+i);o.push(a)}return o}})(BD||(BD={}));var tp=class{provideSignatureHelp(e,r,n=te.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let s=ll(o,e.textDocument.offsetAt(r.position));if(s)return this.getSignatureFromElement(s.astNode,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};function VD(t){let e=[],r=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var rp=class{constructor(e){this.onInitializeEmitter=new pn.Emitter,this.onInitializedEmitter=new pn.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){xu(this.services),this.services.ServiceRegistry.all.forEach(e=>xu(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,i,o;let s=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,a=this.services.ServiceRegistry.all,l=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.Formatter}),u=a.map(V=>{var F,ve;return(ve=(F=V.lsp)===null||F===void 0?void 0:F.Formatter)===null||ve===void 0?void 0:ve.formatOnTypeOptions}).find(V=>!!V),c=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.CodeActionProvider}),f=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.SemanticTokenProvider}),d=(i=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,h=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.DocumentLinkProvider}),_=VD(a.map(V=>{var F,ve;return(ve=(F=V.lsp)===null||F===void 0?void 0:F.SignatureHelp)===null||ve===void 0?void 0:ve.signatureHelpOptions})),x=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.TypeProvider}),E=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.ImplementationProvider}),I=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.CompletionProvider}),y=GN(a.map(V=>{var F,ve;return(ve=(F=V.lsp)===null||F===void 0?void 0:F.CompletionProvider)===null||ve===void 0?void 0:ve.completionOptions})),T=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.ReferencesProvider}),k=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.DocumentSymbolProvider}),B=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.DefinitionProvider}),Q=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.DocumentHighlightProvider}),ae=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.FoldingRangeProvider}),le=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.HoverProvider}),Ce=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.RenameProvider}),$e=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.CallHierarchyProvider}),W=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.TypeHierarchyProvider}),L=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.CodeLensProvider}),j=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.DeclarationProvider}),H=this.hasService(V=>{var F;return(F=V.lsp)===null||F===void 0?void 0:F.InlayHintProvider}),Te=(o=this.services.lsp)===null||o===void 0?void 0:o.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:s},executeCommandProvider:d&&{commands:d},textDocumentSync:pn.TextDocumentSyncKind.Incremental,completionProvider:I?y:void 0,referencesProvider:T,documentSymbolProvider:k,definitionProvider:B,typeDefinitionProvider:x,documentHighlightProvider:Q,codeActionProvider:c,documentFormattingProvider:l,documentRangeFormattingProvider:l,documentOnTypeFormattingProvider:u,foldingRangeProvider:ae,hoverProvider:le,renameProvider:Ce?{prepareProvider:!0}:void 0,semanticTokensProvider:f?GD:void 0,signatureHelpProvider:_,implementationProvider:E,callHierarchyProvider:$e?{}:void 0,typeHierarchyProvider:W?{}:void 0,documentLinkProvider:h?{resolveProvider:!1}:void 0,codeLensProvider:L?{resolveProvider:!1}:void 0,declarationProvider:j,inlayHintProvider:H?{resolveProvider:!1}:void 0,workspaceSymbolProvider:Te?{resolveProvider:!!Te.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:i=>r.client.register(pn.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>r.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(n).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}};function jD(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");oG(e,t),sG(e,t),aG(e,t),lG(e,t),uG(e,t),fG(e,t),dG(e,t),pG(e,t),mG(e,t),gG(e,t),yG(e,t),_G(e,t),cG(e,t),vG(e,t),TG(e,t),RG(e,t),xG(e,t),OG(e,t),EG(e,t),DG(e,t),CG(e,t),SG(e,t),IG(e,t),NG(e,t),hG(e,t),AG(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>{t.lsp.LanguageServer.initialized(n)}),t.workspace.TextDocuments.listen(e),e.listen()}function oG(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(i=>r.didChangeContent(i)),t.onDidChangeWatchedFiles(i=>r.didChangeWatchedFiles(i))}function sG(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function aG(t,e){e.workspace.DocumentBuilder.onBuildPhase(oe.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}function lG(t,e){t.onCompletion(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e,oe.IndexedReferences))}function uG(t,e){t.onReferences(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e,oe.IndexedReferences))}function cG(t,e){t.onCodeAction(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e,oe.Validated))}function fG(t,e){t.onDocumentSymbol(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e,oe.Parsed))}function dG(t,e){t.onDefinition(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e,oe.IndexedReferences))}function pG(t,e){t.onTypeDefinition(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e,oe.IndexedReferences))}function mG(t,e){t.onImplementation(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e,oe.IndexedReferences))}function hG(t,e){t.onDeclaration(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e,oe.IndexedReferences))}function gG(t,e){t.onDocumentHighlight(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e,oe.IndexedReferences))}function TG(t,e){t.onHover(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e,oe.IndexedReferences))}function yG(t,e){t.onFoldingRanges(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e,oe.Parsed))}function _G(t,e){t.onDocumentFormatting(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e,oe.Parsed)),t.onDocumentRangeFormatting(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e,oe.Parsed)),t.onDocumentOnTypeFormatting(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e,oe.Parsed))}function vG(t,e){t.onRenameRequest(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e,oe.IndexedReferences)),t.onPrepareRename(yr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e,oe.IndexedReferences))}function RG(t,e){t.languages.inlayHint.on(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(n,i,o)},e,oe.IndexedReferences))}function xG(t,e){let r={data:[]};t.languages.semanticTokens.on(gi((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,s):r},e,oe.IndexedReferences)),t.languages.semanticTokens.onDelta(gi((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,s):r},e,oe.IndexedReferences)),t.languages.semanticTokens.onRange(gi((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,s):r},e,oe.IndexedReferences))}function NG(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function OG(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(s){return Qo(s)}})}function IG(t,e){t.onDocumentLinks(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(n,i,o)},e,oe.Parsed))}function EG(t,e){t.onSignatureHelp(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e,oe.IndexedReferences))}function SG(t,e){t.onCodeLens(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(n,i,o)},e,oe.IndexedReferences))}function AG(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(s,a)=>{try{return await i.waitUntil(oe.IndexedContent,a),await n.getSymbols(s,a)}catch(l){return Qo(l)}});let o=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);o&&t.onWorkspaceSymbolResolve(async(s,a)=>{try{return await i.waitUntil(oe.IndexedContent,a),await o(s,a)}catch(l){return Qo(l)}})}}function DG(t,e){t.languages.callHierarchy.onPrepare(gi(async(r,n,i,o)=>{var s;if(!((s=r.lsp)===null||s===void 0)&&s.CallHierarchyProvider){let a=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,i,o);return a!=null?a:null}return null},e,oe.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(np(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.incomingCalls(n,i);return s!=null?s:null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(np(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.outgoingCalls(n,i);return s!=null?s:null}return null},e))}function CG(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(gi(async(r,n,i,o)=>{var s,a;let l=await((a=(s=r.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(n,i,o));return l!=null?l:null},e,oe.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(np(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.supertypes(n,i));return a!=null?a:null},e)),t.languages.typeHierarchy.onSubtypes(np(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.subtypes(n,i));return a!=null?a:null},e)))}function np(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=qe.parse(n.item.uri),s=await by(e,i,o,oe.IndexedReferences);if(s)return s;let a=r.getServices(o);if(!a){let l=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(l),new Error(l)}try{return await t(a,n,i)}catch(l){return Qo(l)}}}function gi(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=qe.parse(o.textDocument.uri),l=await by(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u){let f=`Could not find service instance for uri: '${a}'`;throw console.error(f),new Error(f)}let c=await n.getOrCreateDocument(a);try{return await t(u,c,o,s)}catch(f){return Qo(f)}}}function yr(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=qe.parse(o.textDocument.uri),l=await by(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let c=n.getDocument(a);if(!c)return null;try{return await t(u,c,o,s)}catch(f){return Qo(f)}}}async function by(t,e,r,n){if(n!==void 0){let i=t.workspace.DocumentBuilder;try{await i.waitUntil(n,r,e)}catch(o){return Qo(o)}}}function Qo(t){if(zn(t))return new pn.ResponseError(pn.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof pn.ResponseError)return t;throw t}var op=Kt(wr(),1),ip=class{getSymbolKind(){return op.SymbolKind.Field}getCompletionItemKind(){return op.CompletionItemKind.Reference}};var qD=Kt(wr(),1);var sp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=Jt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,s).forEach(a=>{i.push(qD.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}};var ap=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),s=Jt(i,o,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,l).forEach(c=>{let f=oo.replace(c.segment.range,r.newName),d=c.sourceUri.toString();n[d]?n[d].push(f):n[d]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=Jt(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&Wd(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var lp=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=te.CancellationToken.None){let n=[],i=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await xt(r),this.fuzzyMatcher.match(i,o.name)){let s=this.getWorkspaceSymbol(o);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function KD(t){return Ma.merge(vu(t),bG(t))}function bG(t){return{lsp:{CompletionProvider:e=>new Us(e),DocumentSymbolProvider:e=>new Xd(e),HoverProvider:e=>new ep(e),FoldingRangeProvider:e=>new Qd(e),ReferencesProvider:e=>new sp(e),DefinitionProvider:e=>new mf(e),DocumentHighlightProvider:e=>new Fa(e),RenameProvider:e=>new ap(e)},shared:()=>t.shared}}function zD(t){return Ma.merge(Ru(t),kG(t))}function kG(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new rp(e),DocumentUpdateHandler:e=>new Jd(e),WorkspaceSymbolProvider:e=>new lp(e),NodeKindProvider:()=>new ip,FuzzyMatcher:()=>new Zd},workspace:{TextDocuments:()=>new HD.TextDocuments(so)}}}var up=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new ky(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var s;return(s=o.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var s;return(s=o.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(a,l,u)=>{var c,f;let d=this.nodeModeToKey(a,l),h=i.get(d),_=(c=u.options.priority)!==null&&c!==void 0?c:0,x=(f=h==null?void 0:h.options.priority)!==null&&f!==void 0?f:0;(!h||x<=_)&&i.set(d,u)};this.collector=o,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let s=e.offsetAt(i.range.start),a=e.offsetAt(o.range.end);s<a&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=Mr(n).iterator(),o;do if(o=i.next(),!o.done){let s=o.value;this.insideRange(s.$cstNode.range,r)?this.format(s):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},s=[],l=this.iterateCstTree(e,o).iterator(),u,c;do if(c=l.next(),!c.done){let f=c.value,d=vn(f),h=this.nodeModeToKey(f,"prepend"),_=r.get(h);if(r.delete(h),_){let I=this.createTextEdit(u,f,_,o);for(let y of I)y&&this.insideRange(y.range,i)&&this.isNecessary(y,e.textDocument)&&s.push(y)}let x=this.nodeModeToKey(f,"append"),E=r.get(x);if(r.delete(x),E){let I=$g(f);if(I){let y=this.createTextEdit(f,I,E,o);for(let T of y)T&&this.insideRange(T.range,i)&&this.isNecessary(T,e.textDocument)&&s.push(T)}}if(!_&&f.hidden){let I=this.createHiddenTextEdits(u,f,void 0,o);for(let y of I)y&&this.insideRange(y.range,i)&&this.isNecessary(y,e.textDocument)&&s.push(y)}d&&(u=f)}while(!c.done);return s}createHiddenTextEdits(e,r,n,i){var o;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],l={start:{character:0,line:s},end:r.range.start},u=i.document.getText(l),c=this.findFittingMove(l,(o=n==null?void 0:n.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(u,i),h=this.getIndentationCharacterCount(i,c)-f;if(h===0)return[];let _="";h>0&&(_=(i.options.insertSpaces?" ":"	").repeat(h));let x=r.text.split(`
`);x[0]=u+x[0];for(let E=0;E<x.length;E++){let I=s+E,y={character:0,line:I};if(h>0)a.push({newText:_,range:{start:y,end:y}});else{let T=x[E],k=0;for(;k<T.length;k++){let B=T.charAt(k);if(B!==" "&&B!=="	")break}a.push({newText:"",range:{start:y,end:{line:I,character:Math.min(k,Math.abs(h))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let s={start:(o=e==null?void 0:e.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,i);if(!a)return[];let l=a.characters,u=a.lines,c=a.tabs,f=i.indentation;i.indentation+=c!=null?c:0;let d=[];return l!==void 0?d.push(this.createSpaceTextEdit(s,l,n.options)):u!==void 0?d.push(this.createLineTextEdit(s,u,i,n.options)):c!==void 0&&d.push(this.createTabTextEdit(s,!!e,i)),vn(r)&&(i.indentation=f),d}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new un(i,o=>this.iterateCst(o,r)):Mi}iterateCst(e,r){if(!vr(e))return Mi;let n=r.indentation;return new Rr(()=>({index:0}),i=>i.index<e.content.length?{done:!1,value:e.content[i.index++]}:(r.indentation=n,or))}},ky=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new In(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new In(r,this.collector)}property(e,r){let n=Bi(this.astNode.$cstNode,e,r);return new In(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=$s(this.astNode.$cstNode,n);r.push(...i)}return new In(r,this.collector)}keyword(e,r){let n=Ps(this.astNode.$cstNode,e,r);return new In(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=ff(this.astNode.$cstNode,n);r.push(...i)}return new In(r,this.collector)}cst(e){return new In([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new In([],this.collector);let o=n[0],s=i[0];if(o.offset>s.offset){let a=o;o=s,s=a}return new In(Pg(o,s),this.collector)}},In=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},YD;(function(t){function e(...c){return{options:{},moves:c.flatMap(f=>f.moves).sort(u)}}t.fit=e;function r(c){return i(0,c)}t.noSpace=r;function n(c){return i(1,c)}t.oneSpace=n;function i(c,f){return{options:f!=null?f:{},moves:[{characters:c}]}}t.spaces=i;function o(c){return s(1,c)}t.newLine=o;function s(c,f){return{options:f!=null?f:{},moves:[{lines:c}]}}t.newLines=s;function a(c){return{options:c!=null?c:{},moves:[{tabs:1,lines:1}]}}t.indent=a;function l(c){return{options:c!=null?c:{},moves:[{tabs:0}]}}t.noIndent=l;function u(c,f){var d,h,_,x,E,I;let y=(d=c.lines)!==null&&d!==void 0?d:0,T=(h=f.lines)!==null&&h!==void 0?h:0,k=(_=c.tabs)!==null&&_!==void 0?_:0,B=(x=f.tabs)!==null&&x!==void 0?x:0,Q=(E=c.characters)!==null&&E!==void 0?E:0,ae=(I=f.characters)!==null&&I!==void 0?I:0;return y<T?-1:y>T?1:k<B?-1:k>B?1:Q<ae?-1:Q>ae?1:0}})(YD||(YD={}));var LG=Kt(wr(),1);var Ly=Kt(require("fs"),1),wy=class{constructor(){this.encoding="utf-8"}readFile(e){return Ly.promises.readFile(e.fsPath,this.encoding)}async readDirectory(e){return(await Ly.promises.readdir(e.fsPath,{withFileTypes:!0})).map(n=>({dirent:n,isFile:n.isFile(),isDirectory:n.isDirectory(),uri:$t.joinPath(e,n.name)}))}},XD={fileSystemProvider:()=>new wy};var Ba=Kt(QD(),1);var Mse=Symbol("LdLSPServices");var Ge={};Ni(Ge,{AbstractAstReflection:()=>To,AbstractCstNode:()=>Hl,AbstractLangiumParser:()=>Kl,AbstractParserErrorMessageProvider:()=>wd,AbstractThreadedAsyncParser:()=>Kd,AstUtils:()=>Ur,BiMap:()=>jo,Cancellation:()=>te,CompositeCstNodeImpl:()=>Bo,ContextCache:()=>Ho,CstNodeBuilder:()=>ql,CstUtils:()=>Fi,DONE_RESULT:()=>or,DatatypeSymbol:()=>Ld,DefaultAstNodeDescriptionProvider:()=>ou,DefaultAstNodeLocator:()=>au,DefaultAsyncParser:()=>Tu,DefaultCommentProvider:()=>gu,DefaultConfigurationProvider:()=>lu,DefaultDocumentBuilder:()=>uu,DefaultDocumentValidator:()=>iu,DefaultHydrator:()=>_u,DefaultIndexManager:()=>cu,DefaultJsonSerializer:()=>zo,DefaultLangiumDocumentFactory:()=>Ql,DefaultLangiumDocuments:()=>Zl,DefaultLexer:()=>du,DefaultLinker:()=>Go,DefaultNameProvider:()=>eu,DefaultReferenceDescriptionProvider:()=>su,DefaultReferences:()=>Vo,DefaultScopeComputation:()=>qo,DefaultScopeProvider:()=>Ko,DefaultServiceRegistry:()=>Yo,DefaultTokenBuilder:()=>Xl,DefaultValueConverter:()=>Jl,DefaultWorkspaceLock:()=>yu,DefaultWorkspaceManager:()=>fu,Deferred:()=>Sr,Disposable:()=>Xo,DisposableCache:()=>wa,DocumentCache:()=>Gd,DocumentState:()=>oe,DocumentValidator:()=>hi,EMPTY_SCOPE:()=>VW,EMPTY_STREAM:()=>Mi,EmptyFileSystem:()=>$y,EmptyFileSystemProvider:()=>cp,ErrorWithLocation:()=>xo,GrammarAST:()=>lt,GrammarUtils:()=>Et,JSDocDocumentationProvider:()=>hu,LangiumCompletionParser:()=>Yl,LangiumParser:()=>zl,LangiumParserErrorMessageProvider:()=>ba,LeafCstNodeImpl:()=>Uo,MapScope:()=>tu,Module:()=>Ma,MultiMap:()=>dn,OperationCancelled:()=>Kn,ParserWorker:()=>zd,Reduction:()=>bs,RegExpUtils:()=>cf,RootCstNodeImpl:()=>Ca,SimpleCache:()=>ru,StreamImpl:()=>Rr,StreamScope:()=>qr,TextDocument:()=>so,TreeStreamImpl:()=>un,URI:()=>qe,UriUtils:()=>$t,ValidationCategory:()=>Pa,ValidationRegistry:()=>nu,ValueConverter:()=>Hn,WorkspaceCache:()=>$a,assertUnreachable:()=>Ui,createCompletionParser:()=>ly,createDefaultCoreModule:()=>vu,createDefaultSharedCoreModule:()=>Ru,createGrammarConfig:()=>nT,createLangiumParser:()=>uy,delayNextTick:()=>_y,diagnosticData:()=>Vd,eagerLoad:()=>xu,getDiagnosticRange:()=>ID,inject:()=>Jo,interruptAndCheck:()=>xt,isAstNode:()=>Be,isAstNodeDescription:()=>nl,isAstNodeWithComment:()=>Ry,isCompositeCstNode:()=>vr,isIMultiModeLexerDefinition:()=>Ny,isJSDoc:()=>Sy,isLeafCstNode:()=>vn,isLinkingError:()=>_n,isNamed:()=>Wd,isOperationCancelled:()=>zn,isReference:()=>Tt,isRootCstNode:()=>il,isTokenTypeArray:()=>ED,isTokenTypeDictionary:()=>xy,loadGrammarFromJson:()=>fp,parseJSDoc:()=>Ey,prepareLangiumParser:()=>pD,setInterruptionPeriod:()=>RD,startCancelableOperation:()=>vD,stream:()=>me,toDiagnosticSeverity:()=>jd});var we={};Ni(we,{AstUtils:()=>Ur,BiMap:()=>jo,Cancellation:()=>te,ContextCache:()=>Ho,CstUtils:()=>Fi,DONE_RESULT:()=>or,Deferred:()=>Sr,Disposable:()=>Xo,DisposableCache:()=>wa,DocumentCache:()=>Gd,EMPTY_STREAM:()=>Mi,ErrorWithLocation:()=>xo,GrammarUtils:()=>Et,MultiMap:()=>dn,OperationCancelled:()=>Kn,Reduction:()=>bs,RegExpUtils:()=>cf,SimpleCache:()=>ru,StreamImpl:()=>Rr,TreeStreamImpl:()=>un,URI:()=>qe,UriUtils:()=>$t,WorkspaceCache:()=>$a,assertUnreachable:()=>Ui,delayNextTick:()=>_y,interruptAndCheck:()=>xt,isOperationCancelled:()=>zn,loadGrammarFromJson:()=>fp,setInterruptionPeriod:()=>RD,startCancelableOperation:()=>vD,stream:()=>me});De(we,Dt);var cp=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},$y={fileSystemProvider:()=>new cp};var wG={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},$G={AstReflection:()=>new As};function PG(){let t=Jo(Ru($y),$G),e=Jo(vu({shared:t}),wG);return t.ServiceRegistry.register(e),e}function fp(t){var e;let r=PG(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,qe.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}De(Ge,we);var Hr=Kt(gt(),1);var Py="ComposeElement";var dp="NamedElement";function ZD(t){return Ct.isInstance(t,dp)}var MG="Statement";var FG="Subscript_list";var My="Universe";var UG="Arr_string";function Ua(t){return Ct.isInstance(t,UG)}var BG="AssignPrefix";function eC(t){return Ct.isInstance(t,BG)}var Fy="Expression";function Ti(t){return Ct.isInstance(t,Fy)}var WG="For_statement";function tC(t){return Ct.isInstance(t,WG)}var GG="Function_invoke_or_assign";function rC(t){return Ct.isInstance(t,GG)}var VG="Function_invoke_or_assign_statement";var nC="FunctionBlock";function En(t){return Ct.isInstance(t,nC)}var jG="Interface";var qG="Invoke_subrule";function iC(t){return Ct.isInstance(t,qG)}var HG="Iteration_statement";var KG="Methods";function oC(t){return Ct.isInstance(t,KG)}var sC="Native_Type_Name";function Eu(t){return Ct.isInstance(t,sC)}var zG="RefFunctionOrBlockName";function aC(t){return Ct.isInstance(t,zG)}var YG="Repeat_statement";function lC(t){return Ct.isInstance(t,YG)}var XG="ReturnParse";function uC(t){return Ct.isInstance(t,XG)}var JG="Selection_statement";var cC="StFunction";function yi(t){return Ct.isInstance(t,cC)}var fC="Struct_Var_Decl_Init";function Su(t){return Ct.isInstance(t,fC)}var dC="StructsList";function _i(t){return Ct.isInstance(t,dC)}var pC="VarDeclarationInit";function lr(t){return Ct.isInstance(t,pC)}var QG="While_statement";function mC(t){return Ct.isInstance(t,QG)}var hC="Constant";function pp(t){return Ct.isInstance(t,hC)}var gC="FunctionExpression";function Uy(t){return Ct.isInstance(t,gC)}var TC="MemberCall";function Sn(t){return Ct.isInstance(t,TC)}var yC="VariableExpression";function en(t){return Ct.isInstance(t,yC)}var ZG="Array_liters";var Iu=class extends To{getAllTypes(){return["Action_call_statement","Alias","Arr_string","Array_element","Array_liters","AssignPrefix","Assignment_subrule","Case_element","Case_list","Case_list_element","Case_statement","ComposeElement","Constant","Enum","Expression","For_list","For_statement","FunctionBlock","FunctionExpression","Function_invoke_or_assign","Function_invoke_or_assign_statement","If_statement","InputsList","InputsListSingle","Interface","Invoke_subrule","Iteration_statement","MemberCall","Methods","NamedElement","Native_Type_Name","Param_assignment","PrimaryVariable","Program","RefFunctionOrBlockName","Repeat_statement","ReqParams","ReturnParse","Selection_statement","St","StEnum","StFunction","Statement","Statement_list","Statement_list_single","Struct_Var_Decl_Init","StructsList","Subscript_list","UnionsList","Universe","VarDeclarationInit","VarInput","VarLocal","VarOutput","VariableExpression","While_statement"]}computeIsSubtype(e,r){switch(e){case ZG:return this.isSubtype(sC,r);case hC:case gC:case TC:case yC:return this.isSubtype(Fy,r);case Fy:return this.isSubtype(FG,r);case VG:case HG:case JG:return this.isSubtype(MG,r);case nC:case dC:return this.isSubtype(Py,r);case dp:return this.isSubtype(My,r);case cC:return this.isSubtype(Py,r)||this.isSubtype(My,r);case fC:case pC:return this.isSubtype(dp,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action_call_statement:actionName":case"AssignPrefix:varEnchanceDecl":case"RefFunctionOrBlockName:refFunctionName":return My;case"Array_liters:Identifier":case"Native_Type_Name:Identifier":return Py;case"For_statement:controlVariable":case"MemberCall:element":case"VariableExpression:variable":return dp;case"Interface:extender":return jG;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Action_call_statement":return{name:"Action_call_statement",properties:[{name:"actionName"}]};case"Alias":return{name:"Alias",properties:[{name:"aliasName"},{name:"refName"}]};case"Arr_string":return{name:"Arr_string",properties:[{name:"arrElements",defaultValue:[]}]};case"Array_element":return{name:"Array_element",properties:[{name:"left"},{name:"right"}]};case"Assignment_subrule":return{name:"Assignment_subrule",properties:[{name:"expression"}]};case"AssignPrefix":return{name:"AssignPrefix",properties:[{name:"varEnchanceDecl"}]};case"Case_element":return{name:"Case_element",properties:[{name:"caseList"},{name:"statements"}]};case"Case_list":return{name:"Case_list",properties:[{name:"caseListElement",defaultValue:[]}]};case"Case_list_element":return{name:"Case_list_element",properties:[{name:"enumCase"},{name:"numCaseStart"},{name:"numericCaseEnd"}]};case"Case_statement":return{name:"Case_statement",properties:[{name:"caseElements",defaultValue:[]},{name:"caseExpression"},{name:"elseStatements"}]};case"Enum":return{name:"Enum",properties:[{name:"assignValue"},{name:"variable_name"}]};case"Expression":return{name:"Expression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"For_list":return{name:"For_list",properties:[{name:"byExpr"},{name:"forExpr"},{name:"toExpr"}]};case"For_statement":return{name:"For_statement",properties:[{name:"controlVariable"},{name:"forList"},{name:"statementList"}]};case"Function_invoke_or_assign":return{name:"Function_invoke_or_assign",properties:[{name:"assign"},{name:"assignPrefix"},{name:"id"},{name:"params",defaultValue:[]}]};case"Function_invoke_or_assign_statement":return{name:"Function_invoke_or_assign_statement",properties:[{name:"statement"}]};case"FunctionBlock":return{name:"FunctionBlock",properties:[{name:"methods",defaultValue:[]},{name:"name"},{name:"statementList",defaultValue:[]},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"If_statement":return{name:"If_statement",properties:[{name:"elseStatement"},{name:"elsifConditions",defaultValue:[]},{name:"elsifStatements"},{name:"ifCondition"},{name:"ifStatement"}]};case"InputsList":return{name:"InputsList",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"InputsListSingle":return{name:"InputsListSingle",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"Interface":return{name:"Interface",properties:[{name:"extender"},{name:"methods",defaultValue:[]},{name:"name"}]};case"Invoke_subrule":return{name:"Invoke_subrule",properties:[{name:"parameters",defaultValue:[]}]};case"Iteration_statement":return{name:"Iteration_statement",properties:[{name:"statement"}]};case"Methods":return{name:"Methods",properties:[{name:"inputs",defaultValue:[]},{name:"modifier"},{name:"name"},{name:"reqParams",defaultValue:[]},{name:"statementList"},{name:"variable_type"}]};case"Native_Type_Name":return{name:"Native_Type_Name",properties:[{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};case"Param_assignment":return{name:"Param_assignment",properties:[{name:"InputOrOutputSign"},{name:"ParamName"},{name:"ParamValue"}]};case"PrimaryVariable":return{name:"PrimaryVariable",properties:[{name:"name"}]};case"Program":return{name:"Program",properties:[{name:"inputs",defaultValue:[]},{name:"name"},{name:"stStatements"}]};case"RefFunctionOrBlockName":return{name:"RefFunctionOrBlockName",properties:[{name:"Cache_type_name"},{name:"refFunctionName"}]};case"Repeat_statement":return{name:"Repeat_statement",properties:[{name:"statementList"},{name:"untilExpr"}]};case"ReqParams":return{name:"ReqParams",properties:[{name:"param"},{name:"typeName"}]};case"ReturnParse":return{name:"ReturnParse",properties:[{name:"returnSign"},{name:"returnValue"}]};case"Selection_statement":return{name:"Selection_statement",properties:[{name:"case"},{name:"if"}]};case"St":return{name:"St",properties:[{name:"function_block",defaultValue:[]},{name:"itface",defaultValue:[]},{name:"program",defaultValue:[]},{name:"st_function",defaultValue:[]},{name:"types_alias",defaultValue:[]},{name:"types_enum",defaultValue:[]},{name:"types_struct",defaultValue:[]},{name:"types_union",defaultValue:[]}]};case"Statement_list":return{name:"Statement_list",properties:[{name:"statements",defaultValue:[]}]};case"Statement_list_single":return{name:"Statement_list_single",properties:[{name:"statements"}]};case"StEnum":return{name:"StEnum",properties:[{name:"enum",defaultValue:[]},{name:"name"}]};case"StFunction":return{name:"StFunction",properties:[{name:"name"},{name:"statementList",defaultValue:[]},{name:"variable_type"},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"Struct_Var_Decl_Init":return{name:"Struct_Var_Decl_Init",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"StructsList":return{name:"StructsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"UnionsList":return{name:"UnionsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"VarDeclarationInit":return{name:"VarDeclarationInit",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"VarInput":return{name:"VarInput",properties:[{name:"items",defaultValue:[]}]};case"VarLocal":return{name:"VarLocal",properties:[{name:"items",defaultValue:[]}]};case"VarOutput":return{name:"VarOutput",properties:[{name:"items",defaultValue:[]}]};case"While_statement":return{name:"While_statement",properties:[{name:"statementList"},{name:"whileExpr"}]};case"Constant":return{name:"Constant",properties:[{name:"constant"},{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"FunctionExpression":return{name:"FunctionExpression",properties:[{name:"left"},{name:"operator"},{name:"params"},{name:"prefixValidateElement"},{name:"prior"},{name:"refFunctionName"},{name:"right"},{name:"suffixValidateElement"},{name:"value"}]};case"MemberCall":return{name:"MemberCall",properties:[{name:"arguments",defaultValue:[]},{name:"element"},{name:"explicitOperationCall",defaultValue:!1},{name:"left"},{name:"operator"},{name:"previous"},{name:"prior"},{name:"right"},{name:"value"}]};case"VariableExpression":return{name:"VariableExpression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"},{name:"variable"}]};case"Array_liters":return{name:"Array_liters",properties:[{name:"arrayElemets",defaultValue:[]},{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"dataType"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};default:return{name:e,properties:[]}}}},Ct=new Iu;var _C=Kt(require("fs"),1);var By=new Map,Wy=new Map,Gy=new Map,An=qe.parse("memory://cache.st");function vC(t){if(Wy.get(An)){let e=Wy.get(An);if(e){let r=Zo(e);for(let n=0;n<r.length;n++){let s=r[n].elements.find(a=>a.elementName.toLowerCase()===t.toLowerCase());if(s){let a=s.elementType,l;if(a==="functionBlock")return l=s,l;if(a==="function")return l=s,l}}}}else{let e=__dirname,r=RC(`${e}\\data.json`),i=JSON.parse(r);Wy.set(An,i);let o=Zo(i);for(let s=0;s<o.length;s++){let u=o[s].elements.find(c=>c.elementName.toLowerCase()===t.toLowerCase());if(u){let c=u.elementType,f;if(c==="functionBlock")return f=u,f;if(c==="function")return f=u,f}}}}function Ut(t){if(By.get(An)&&Gy.get(An)){let e=By.get(An),r=Gy.get(An);if(e){let n=Zo(e);for(let i=0;i<n.length;i++){let a=n[i].elements.find(l=>l.elementName.toLowerCase()===t.toLowerCase());if(a){let l=a.elementType,u;if(l==="functionBlock")return u=a,[u,r];if(l==="function")return u=a,[u,r]}}}}else{let e=__dirname,r=RC(`${e}\\data.json`),i=Vy.serializer.JsonSerializer.deserialize(r),o=mp.workspace.LangiumDocumentFactory.fromModel(i,qe.parse("memory://cache.st")),a=JSON.parse(r);By.set(An,a),Gy.set(An,o);let l=Zo(a);for(let u=0;u<l.length;u++){let d=l[u].elements.find(h=>h.elementName.toLowerCase()===t.toLowerCase());if(d){let h=d.elementType,_;if(h==="functionBlock")return _=d,[_,o];if(h==="function")return _=d,[_,o]}}}}function RC(t){try{return _C.default.readFileSync(t,"utf8")}catch(e){return console.error(e),""}}var hp=t=>/^-?[1-9]\d*$/.test(t)||/^0$/.test(t),eV=t=>/^[a-z]+$/.test(t),xC=/^T#(\d+y)?(\d+m)?(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i,NC=/DATE#\d{4}-\d{2}-\d{2}/,OC=/DT#\d{4}-\d{2}-\d{2}-\d{2}:\d{2}:\d{2}/,IC=/TOD#\d{2}:\d{2}:\d{2}\.\d{3}/,tV=["SINT","INT","DINT","LINT","USINT","UINT","UDINT","ULINT","BYTE","WORD","DWORD","LWORD","TIME","DATE","LREAL","REAL","BOOL","STRING"],gp=["RTC","INTEGRAL","DERIVATIVE","PID","RAMP","HYSTERESIS","SR","RS","SEMA","R_TRIG","F_TRIG","CTU","CTU_DINT","CTU_LINT","CTU_UDINT","CTU_ULINT","CTD","CTD_DINT","CTD_LINT","CTD_UDINT","CTD_ULINT","CTUD","CTUD_DINT","CTUD_LINT","CTUD_UDINT","CTUD_ULINT","TP","TON","TOF"],rV=["BOOL_TO_SINT","BOOL_TO_INT","BOOL_TO_DINT","BOOL_TO_LINT","BOOL_TO_USINT","BOOL_TO_UINT","BOOL_TO_UDINT","BOOL_TO_ULINT","BOOL_TO_REAL","BOOL_TO_LREAL","BOOL_TO_TIME","BOOL_TO_DATE","BOOL_TO_TOD","BOOL_TO_DT","BOOL_TO_STRING","BOOL_TO_BYTE","BOOL_TO_WORD","BOOL_TO_DWORD","BOOL_TO_LWORD","SINT_TO_BOOL","SINT_TO_INT","SINT_TO_DINT","SINT_TO_LINT","SINT_TO_USINT","SINT_TO_UINT","SINT_TO_UDINT","SINT_TO_ULINT","SINT_TO_REAL","SINT_TO_LREAL","SINT_TO_TIME","SINT_TO_DATE","SINT_TO_TOD","SINT_TO_DT","SINT_TO_STRING","SINT_TO_BYTE","SINT_TO_WORD","SINT_TO_DWORD","SINT_TO_LWORD","INT_TO_BOOL","INT_TO_SINT","INT_TO_DINT","INT_TO_LINT","INT_TO_USINT","INT_TO_UINT","INT_TO_UDINT","INT_TO_ULINT","INT_TO_REAL","INT_TO_LREAL","INT_TO_TIME","INT_TO_DATE","INT_TO_TOD","INT_TO_DT","INT_TO_STRING","INT_TO_BYTE","INT_TO_WORD","INT_TO_DWORD","INT_TO_LWORD","DINT_TO_BOOL","DINT_TO_SINT","DINT_TO_INT","DINT_TO_LINT","DINT_TO_USINT","DINT_TO_UINT","DINT_TO_UDINT","DINT_TO_ULINT","DINT_TO_REAL","DINT_TO_LREAL","DINT_TO_TIME","DINT_TO_DATE","DINT_TO_TOD","DINT_TO_DT","DINT_TO_STRING","DINT_TO_BYTE","DINT_TO_WORD","DINT_TO_DWORD","DINT_TO_LWORD","LINT_TO_BOOL","LINT_TO_SINT","LINT_TO_INT","LINT_TO_DINT","LINT_TO_USINT","LINT_TO_UINT","LINT_TO_UDINT","LINT_TO_ULINT","LINT_TO_REAL","LINT_TO_LREAL","LINT_TO_TIME","LINT_TO_DATE","LINT_TO_TOD","LINT_TO_DT","LINT_TO_STRING","LINT_TO_BYTE","LINT_TO_WORD","LINT_TO_DWORD","LINT_TO_LWORD","USINT_TO_BOOL","USINT_TO_SINT","USINT_TO_INT","USINT_TO_DINT","USINT_TO_LINT","USINT_TO_UINT","USINT_TO_UDINT","USINT_TO_ULINT","USINT_TO_REAL","USINT_TO_LREAL","USINT_TO_TIME","USINT_TO_DATE","USINT_TO_TOD","USINT_TO_DT","USINT_TO_STRING","USINT_TO_BYTE","USINT_TO_WORD","USINT_TO_DWORD","USINT_TO_LWORD","UINT_TO_BOOL","UINT_TO_SINT","UINT_TO_INT","UINT_TO_DINT","UINT_TO_LINT","UINT_TO_USINT","UINT_TO_UDINT","UINT_TO_ULINT","UINT_TO_REAL","UINT_TO_LREAL","UINT_TO_TIME","UINT_TO_DATE","UINT_TO_TOD","UINT_TO_DT","UINT_TO_STRING","UINT_TO_BYTE","UINT_TO_WORD","UINT_TO_DWORD","UINT_TO_LWORD","UDINT_TO_BOOL","UDINT_TO_SINT","UDINT_TO_INT","UDINT_TO_DINT","UDINT_TO_LINT","UDINT_TO_USINT","UDINT_TO_UINT","UDINT_TO_ULINT","UDINT_TO_REAL","UDINT_TO_LREAL","UDINT_TO_TIME","UDINT_TO_DATE","UDINT_TO_TOD","UDINT_TO_DT","UDINT_TO_STRING","UDINT_TO_BYTE","UDINT_TO_WORD","UDINT_TO_DWORD","UDINT_TO_LWORD","ULINT_TO_BOOL","ULINT_TO_SINT","ULINT_TO_INT","ULINT_TO_DINT","ULINT_TO_LINT","ULINT_TO_USINT","ULINT_TO_UINT","ULINT_TO_UDINT","ULINT_TO_REAL","ULINT_TO_LREAL","ULINT_TO_TIME","ULINT_TO_DATE","ULINT_TO_TOD","ULINT_TO_DT","ULINT_TO_STRING","ULINT_TO_BYTE","ULINT_TO_WORD","ULINT_TO_DWORD","ULINT_TO_LWORD","REAL_TO_BOOL","REAL_TO_SINT","REAL_TO_INT","REAL_TO_DINT","REAL_TO_LINT","REAL_TO_USINT","REAL_TO_UINT","REAL_TO_UDINT","REAL_TO_ULINT","REAL_TO_LREAL","REAL_TO_TIME","REAL_TO_DATE","REAL_TO_TOD","REAL_TO_DT","REAL_TO_STRING","REAL_TO_BYTE","REAL_TO_WORD","REAL_TO_DWORD","REAL_TO_LWORD","LREAL_TO_BOOL","LREAL_TO_SINT","LREAL_TO_INT","LREAL_TO_DINT","LREAL_TO_LINT","LREAL_TO_USINT","LREAL_TO_UINT","LREAL_TO_UDINT","LREAL_TO_ULINT","LREAL_TO_REAL","LREAL_TO_TIME","LREAL_TO_DATE","LREAL_TO_TOD","LREAL_TO_DT","LREAL_TO_STRING","LREAL_TO_BYTE","LREAL_TO_WORD","LREAL_TO_DWORD","LREAL_TO_LWORD","TIME_TO_SINT","TIME_TO_INT","TIME_TO_DINT","TIME_TO_LINT","TIME_TO_USINT","TIME_TO_UINT","TIME_TO_UDINT","TIME_TO_ULINT","TIME_TO_REAL","TIME_TO_LREAL","TIME_TO_STRING","TIME_TO_BYTE","TIME_TO_WORD","TIME_TO_DWORD","TIME_TO_LWORD","DATE_TO_SINT","DATE_TO_INT","DATE_TO_DINT","DATE_TO_LINT","DATE_TO_USINT","DATE_TO_UINT","DATE_TO_UDINT","DATE_TO_ULINT","DATE_TO_REAL","DATE_TO_LREAL","DATE_TO_STRING","DATE_TO_BYTE","DATE_TO_WORD","DATE_TO_DWORD","DATE_TO_LWORD","TOD_TO_SINT","TOD_TO_INT","TOD_TO_DINT","TOD_TO_LINT","TOD_TO_USINT","TOD_TO_UINT","TOD_TO_UDINT","TOD_TO_ULINT","TOD_TO_REAL","TOD_TO_LREAL","TOD_TO_STRING","TOD_TO_BYTE","TOD_TO_WORD","TOD_TO_DWORD","TOD_TO_LWORD","DT_TO_SINT","DT_TO_INT","DT_TO_DINT","DT_TO_LINT","DT_TO_USINT","DT_TO_UINT","DT_TO_UDINT","DT_TO_ULINT","DT_TO_REAL","DT_TO_LREAL","DT_TO_STRING","DT_TO_BYTE","DT_TO_WORD","DT_TO_DWORD","DT_TO_LWORD","STRING_TO_BOOL","STRING_TO_SINT","STRING_TO_INT","STRING_TO_DINT","STRING_TO_LINT","STRING_TO_USINT","STRING_TO_UINT","STRING_TO_UDINT","STRING_TO_ULINT","STRING_TO_REAL","STRING_TO_LREAL","STRING_TO_TIME","STRING_TO_DATE","STRING_TO_TOD","STRING_TO_DT","STRING_TO_BYTE","STRING_TO_WORD","STRING_TO_DWORD","STRING_TO_LWORD","BYTE_TO_BOOL","BYTE_TO_SINT","BYTE_TO_INT","BYTE_TO_DINT","BYTE_TO_LINT","BYTE_TO_USINT","BYTE_TO_UINT","BYTE_TO_UDINT","BYTE_TO_ULINT","BYTE_TO_REAL","BYTE_TO_LREAL","BYTE_TO_TIME","BYTE_TO_DATE","BYTE_TO_TOD","BYTE_TO_DT","BYTE_TO_STRING","BYTE_TO_WORD","BYTE_TO_DWORD","BYTE_TO_LWORD","WORD_TO_BOOL","WORD_TO_SINT","WORD_TO_INT","WORD_TO_DINT","WORD_TO_LINT","WORD_TO_USINT","WORD_TO_UINT","WORD_TO_UDINT","WORD_TO_ULINT","WORD_TO_REAL","WORD_TO_LREAL","WORD_TO_TIME","WORD_TO_DATE","WORD_TO_TOD","WORD_TO_DT","WORD_TO_STRING","WORD_TO_BYTE","WORD_TO_DWORD","WORD_TO_LWORD","DWORD_TO_BOOL","DWORD_TO_SINT","DWORD_TO_INT","DWORD_TO_DINT","DWORD_TO_LINT","DWORD_TO_USINT","DWORD_TO_UINT","DWORD_TO_UDINT","DWORD_TO_ULINT","DWORD_TO_REAL","DWORD_TO_LREAL","DWORD_TO_TIME","DWORD_TO_DATE","DWORD_TO_TOD","DWORD_TO_DT","DWORD_TO_STRING","DWORD_TO_BYTE","DWORD_TO_WORD","DWORD_TO_LWORD","LWORD_TO_BOOL","LWORD_TO_SINT","LWORD_TO_INT","LWORD_TO_DINT","LWORD_TO_LINT","LWORD_TO_USINT","LWORD_TO_UINT","LWORD_TO_UDINT","LWORD_TO_ULINT","LWORD_TO_REAL","LWORD_TO_LREAL","LWORD_TO_TIME","LWORD_TO_DATE","LWORD_TO_TOD","LWORD_TO_DT","LWORD_TO_STRING","LWORD_TO_BYTE","LWORD_TO_WORD","LWORD_TO_DWORD","TRUNC","BCD_TO_USINT","BCD_TO_UINT","BCD_TO_UDINT","BCD_TO_ULINT","USINT_TO_BCD","UINT_TO_BCD","UDINT_TO_BCD","ULINT_TO_BCD","DATE_AND_TIME_TO_TIME_OF_DAY","DATE_AND_TIME_TO_DATE"],EC=["ABS","SQRT","LN","LOG","EXP","SIN","COS","TAN","ASIN","ACOS","ATAN"],SC=["ADD","MUL","SUB","DIV","MOD","EXPT","MOVE"],nV=["ADD_TIME","ADD_TOD_TIME","ADD_DT_TIME","MULTIME","SUB_TIME","SUB_DATE_DATE","SUB_TOD_TIME","SUB_TOD_TOD","SUB_DT_TIME","SUB_DT_DT","DIVTIME"],AC=["SHL","SHR","ROR","ROL"],DC=["AND","OR","XOR","NOT"],CC=["SEL","MAX","MIN","LIMIT","MUX"],bC=["GT","GE","EQ","LT","LE","NE"],kC=["LEN","LEFT","RIGHT","MID","CONCAT","CONCAT_DATE_TOD","INSERT","DELETE","REPLACE","FIND"],LC=tV.concat(gp),Au=rV.concat(EC).concat(SC).concat(nV).concat(AC).concat(DC).concat(CC).concat(bC).concat(kC),iV=LC.concat(Au),Tp=gp.concat(Au),wC=EC.concat(SC).concat(AC).concat(DC).concat(CC).concat(bC).concat(kC.filter(t=>t!=="CONCAT_DATE_TOD"));function $C(t){let e=new RegExp("^"+t,"i");return Au.filter(r=>e.test(r))}function PC(t){let e=new RegExp("^"+t,"i");return iV.filter(r=>e.test(r))}function MC(t){let e=new RegExp("^"+t,"i");return Tp.filter(r=>e.test(r))}function jy(t){let e;return t==="TIME"?e=xC:t==="DATE"?e=NC:t==="DATE_AND_TIME"?e=OC:t==="TIME_OF_DAY"&&(e=IC),e.exec(t)?"":`Invalid ${t} format`}function it(t,e){return e&&(t=e.Real_type_name||e.Bit_string_type_name||e.Integer_type_name||e.Unsigned_integer_type_name||e.Bool_type_name||e.String_type_name||e.Date_type_name||e.Time_type_name||e.Date_And_time_type_name||e.Time_Of_Day_type_name||e.Cache_type_name),t}function ao(t){return/^[-+]?[0-9]*\.[0-9]+([eE][-+]?[0-9]+)?$/.test(t)}function qy(t){return/^\d*\.?\d+$/.test(t)}function oV(t){let e=t.toUpperCase(),r=LC.find(n=>n===e);return r?[r,!0]:[null,!1]}function sV(t){return["SINT","USINT","INT","UINT","DINT","UDINT","LINT","WORD","DWORD","LWORD","BYTE","BOOL","ULINT"].includes(t)}function es(t,e,r){if(!t||!e||(t=t.toUpperCase(),e=e.toUpperCase(),!sV(e)))return!0;if(t&&t.toLowerCase()==="bool")return r?r!==1&&r!==0:!1;if(e&&e.toLowerCase()==="bool"&&r&&r!==1&&r!==0)return!0;switch(t){case"SINT":return e==="BOOL";case"INT":return e==="SINT"||e==="BYTE";case"UINT":return e==="SINT"||e==="INT"||e==="BYTE";case"DINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="WORD"||e==="BYTE";case"UDINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="WORD"||e==="BYTE";case"LINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="WORD"||e==="DWORD"||e==="BYTE";case"BYTE":return!(e==="BYTE"||e==="USINT"||e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="ULINT");case"ULINT":return e==="SINT"||e==="USINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="WORD"||e==="DWORD"||e==="LWORD"||e==="BYTE";default:return!0}}function ts(t){let e="";return Ua(t),t.$type==="Constant"?e=t.constant.toString():e=t.toString(),e.toLowerCase()==="true"||e.toLowerCase()==="false"?["BOOL"]:xC.test(e)?["TIME"]:NC.test(e)?["DATE"]:OC.test(e)?["DATE_AND_TIME"]:IC.test(e)?["TIME_OF_DAY"]:/^-?\d+$/.test(e)?["INT","UINT","DINT","UDINT","LINT","SINT","USINT","BYTE","WORD","DWORD","LWORD"]:ao(e)?["REAL","LREAL"]:typeof e=="string"?["STRING"]:["UNKNOWN"]}function aV(t,e,r){let n;t=it(t,e),e.Real_type_name?n="Real_type_name":e.Bit_string_type_name?n="Bit_string_type_name":e.Integer_type_name?n="Integer_type_name":e.Unsigned_integer_type_name?n="Unsigned_integer_type_name":e.Bool_type_name?n="Bool_type_name":e.String_type_name?n="String_type_name":e.Date_And_time_type_name?n="Date_And_time_type_name":e.Date_type_name?n="Date_type_name":e.Time_Of_Day_type_name?n="Time_Of_Day_type_name":e.Time_type_name?n="Time_type_name":e.Cache_type_name?n="Cache_type_name":n="String_type_name";let[i,o]=oV(t);if(o)t!==i&&(eV(t)||r("hint",`did you mean '${i}'?`,{node:e,property:n}));else if(n==="Cache_type_name"){let s=e.Cache_type_name;if(s){let a=Ut(s);if(a){let[l,u]=a;l&&l.elementType==="function"&&r("error",`${t}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:e,property:"Identifier"})}}}return t}function Yn(t,e,r){if(!t)return e;if(t.Identifier){let n=t.Identifier,i=n.ref;if(i)e=i.name,yi(i)&&r("error",`${e}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"});else{let o=n.$nodeDescription;o&&o.type==="FunctionElement"&&r("error",`${n.$refText}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}}else r&&(e=aV(e,t,r));return e}function FC(t,e){var r;return t.Identifier?e=(r=t.Identifier.ref)==null?void 0:r.name:e=it(e,t),e}function UC(t){let e={$type:"St",function_block:[],itface:[],program:[],st_function:[],types_alias:[],types_enum:[],types_struct:[],types_union:[]};return t.forEach(r=>{r.elements.forEach(i=>{let o=i.elementType;if(o==="struct"){i=i;let s=i.varDecls,a={$container:e,$type:"StructsList",items:[],name:""};a.name=i.elementName,s.forEach(l=>{let u=l.varName,f={$type:"Native_Type_Name",Cache_type_name:l.varType},d={$container:a,$type:"Struct_Var_Decl_Init",nextVariables:[],typeName:f,variables:u};a.items.push(d)}),e.types_struct.push(a)}else if(o==="functionBlock"){i=i;let s=i.varDecls,a={$container:e,$type:"FunctionBlock",name:"",statementList:[],methods:[],varInputs:[],varLocals:[],varOutputs:[]};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=l.varGlobalType,d={$type:"Native_Type_Name",Cache_type_name:c};if(f){let h;if(f==="VAR_INPUT"){let _={$container:a,$type:"VarInput",items:[]};h={$container:_,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},_.items.push(h),a.varInputs.push(_)}else if(f==="VAR"){let _={$container:a,$type:"VarLocal",items:[]};h={$container:_,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},_.items.push(h),a.varLocals.push(_)}}}),e.function_block.push(a)}})}),e}function Zo(t){let e=[];return t.forEach(r=>{let n=r.name,i=r.list;if(n==="Additional function blocks"||n==="Standard function blocks"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:l.name,varDecls:[],rootName:n,comment:l.comment,usage:l.usage};u.forEach(d=>{let h={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(h)}),c.forEach(d=>{let h={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(h)}),s.elements.push(f),a===o.length-1&&e.push(s)}}else{let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionElement",elementType:"function",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};u.forEach(d=>{let h={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(h)}),c.forEach(d=>{let h={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(h)}),s.elements.push(f),a===o.length-1&&e.push(s)}}}),e}var yp=class extends Us{constructor(r){super(r);this.services=r;this.completionOptions={triggerCharacters:["."]}}getCompletion(r,n){return super.getCompletion(r,n)}hintFunctionBlockDecl(r,n,i){r.forEach(o=>{o.items.forEach(a=>{let{expectedType:l,variable:u,typeName:c,nextVariables:f}=this.getDataType(a);this.handleStructOrFunctionBlockVarDecl(l,n,i,u,c),f.forEach(d=>{this.handleStructOrFunctionBlockVarDecl(l,n,i,d,c)})})})}createReferenceCompletionItem(r){let n="";if(r&&r.node){if(r.type==="Struct_Var_Decl_Init"){let o=r.node.typeName,s="";n=it(s,o),n||(n=FC(o,s)),n||o.$type==="Array_liters"&&(n="Array")}if(r.node.$type==="VarDeclaration"){let i=r.node,s=i.varGlobalType==="VAR_INPUT"?"\u8F93\u5165\u53C2\u6570":"\u8F93\u51FA\u53C2\u6570";return{nodeDescription:r,kind:Hr.CompletionItemKind.Field,detail:`${s},\u7C7B\u578B\u662F${i.varType}`,sortText:"0"}}else if(r.node.$type==="VarDeclarationInit"){let o=r.node.typeName,s="";if(s=it(s,o),s!==""&&s){let a=Ut(s);if(a){let[l,u]=a;if((l==null?void 0:l.elementType)==="functionBlock"){let f=l==null?void 0:l.varDecls;f==null||f.forEach(d=>{let _=d.varGlobalType==="VAR_INPUT"?"\u8F93\u5165\u53C2\u6570":"\u8F93\u51FA\u53C2\u6570";return{nodeDescription:r,kind:Hr.CompletionItemKind.Field,detail:`${_},\u7C7B\u578B\u662F${d.varType}`,sortText:"0"}})}}}}}return{nodeDescription:r,kind:Hr.CompletionItemKind.Reference,detail:n,sortText:"0"}}getRangeText(r){let n=r.position,o={start:Hr.Position.create(n.line,0),end:r.position};return r.textDocument.getText(o)}completionForKeyword(r,n,i){try{let o=r.node;if(eC(o)){let s=o.varEnchanceDecl.ref,a=o.varEnchanceDecl.$refText;if(lr(s)){let l=s.typeName,u="";if(u=it(u,l),u!==""&&u){let c=Ut(u);if(c){let[f,d]=c;if((f==null?void 0:f.elementType)==="functionBlock"){let _=f==null?void 0:f.varDecls;_==null||_.forEach(x=>{let I=x.varGlobalType==="VAR_INPUT"?"\u8F93\u5165\u53C2\u6570":"\u8F93\u51FA\u53C2\u6570";i(r,{label:x.varName,kind:Hr.CompletionItemKind.Field,detail:`${I},\u7C7B\u578B\u662F${x.varType}`,sortText:"1"})})}}}else{let c=l.Identifier;if(c){let f=c.ref;if(_i(f))f.items.forEach(h=>{let{expectedType:_,variable:x,typeName:E,nextVariables:I}=this.getDataType(h);this.handleStructOrFunctionBlockVarDecl(_,i,r,x,E),I.forEach(y=>{this.handleStructOrFunctionBlockVarDecl(_,i,r,y,E)})});else if(En(f)){let d=f.varInputs,h=f.varOutputs,_=f.varLocals;this.hintFunctionBlockDecl(d,i,r),this.hintFunctionBlockDecl(h,i,r),this.hintFunctionBlockDecl(_,i,r)}}}}else MC(a).forEach(u=>{let c=Ut(u);if(c){let[f,d]=c;i(r,{label:f==null?void 0:f.elementName,kind:Hr.CompletionItemKind.Reference,detail:f==null?void 0:f.usage,sortText:"1"})}})}else{let s=this.getRangeText(r);s=s.trim();let a=s.indexOf(":"),l=s.substring(a+1);l=l.trim(),PC(l).forEach(c=>{if(gp.includes(c)||Au.includes(c)){let f=Ut(c);if(f){let[d,h]=f;i(r,{label:c,kind:Hr.CompletionItemKind.Reference,detail:d==null?void 0:d.elementType,sortText:"1"})}}else i(r,{label:c,kind:Hr.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})})}}catch{}}handleStructOrFunctionBlockVarDecl(r,n,i,o,s){if(r!==""&&r)n(i,{label:o,kind:Hr.CompletionItemKind.Reference,detail:r,sortText:"1"});else{let a=s.Identifier;a&&n(i,{label:o,kind:Hr.CompletionItemKind.Reference,detail:a.$refText,sortText:"1"})}}completionForCrossReference(r,n,i){let o=r.node;if(en(o)){let s=o.variable.$refText;$C(s).forEach(l=>{let u=Ut(l);if(u){let[c,f]=u;i(r,{label:c==null?void 0:c.elementName,kind:Hr.CompletionItemKind.Reference,detail:c==null?void 0:c.usage,sortText:"1"})}})}else if(Sn(o)){let s=o.previous;if(Sn(s)){let a=s.element,l=a==null?void 0:a.ref;if(Su(l)||lr(l)){let u=l.typeName,c="";return c=it(c,u),c?void 0:super.completionForCrossReference(r,n,i)}}else if(Ti(s))return super.completionForCrossReference(r,n,i)}else return super.completionForCrossReference(r,n,i)}findFeaturesAt(r,n){let i=r.getText({start:Hr.Position.create(0,0),end:r.positionAt(n)}),o=this.completionParser.parse(i),s=o.tokens;if(o.tokenIndex===0){let u=Et.getEntryRule(this.grammar),c=Do({feature:u.definition,type:Et.getExplicitRuleType(u)});return s.length>0?(s.shift(),yl(c.map(f=>[f]),s)):c}let a=[...s].splice(o.tokenIndex);return this.findLocalNextFeatures([o.elementStack.map(u=>({feature:u}))],a)}findLocalNextFeatures(r,n){let i={stacks:r,tokens:n};return i.stacks.flat().forEach(s=>{s.property=void 0}),this.findNextFeatureStacks(i.stacks).map(s=>s[s.length-1])}findNextFeatureStacks(r,n){let i=[];for(let o of r)i.push(...this.interpretStackToken(o,n));return i}interpretStackToken(r,n){let i=new Map,o=new Set(r.map(a=>a.feature).filter(this.isPlusFeature)),s=[];for(;r.length>0;){let a=r.pop(),l=this.findNextFeaturesInternal({next:a,cardinalities:i,plus:o,visited:new Set}).filter(u=>n?this.featureMatches(u.feature,n):!0);for(let u of l)s.push([...r,u]);if(!l.every(u=>Et.isOptionalCardinality(u.feature.cardinality,u.feature)||Et.isOptionalCardinality(i.get(u.feature))))break}return s}isPlusFeature(r){if(r.cardinality==="+")return!0;let n=Ur.getContainerOfType(r,lt.isAssignment);return!!(n&&n.cardinality==="+")}findNextFeaturesInternal(r){let{next:n,cardinalities:i,visited:o,plus:s}=r,a=[],l=n.feature;if(o.has(l))return[];o.add(l);let u,c=l;for(;c.$container;)if(lt.isGroup(c.$container)){u=c.$container;break}else if(lt.isAbstractElement(c.$container))c=c.$container;else break;if(Et.isArrayCardinality(c.cardinality)){let f=this.findFirstFeaturesInternal({next:{feature:c,type:n.type},cardinalities:i,visited:o,plus:s});for(let d of f)s.add(d.feature);a.push(...f)}if(u){let f=u.elements.indexOf(c);f!==void 0&&f<u.elements.length-1&&a.push(...this.findNextFeaturesInGroup({feature:u,type:n.type},f+1,i,o,s)),a.every(d=>Et.isOptionalCardinality(d.feature.cardinality,d.feature)||Et.isOptionalCardinality(i.get(d.feature))||s.has(d.feature))&&a.push(...this.findNextFeaturesInternal({next:{feature:u,type:n.type},cardinalities:i,visited:o,plus:s}))}return a}featureMatches(r,n){if(lt.isKeyword(r))return r.value===n.image;if(lt.isRuleCall(r))return this.ruleMatches(r.rule.ref,n);if(lt.isCrossReference(r)){let i=Et.getCrossReferenceTerminal(r);if(i)return this.featureMatches(i,n)}return!1}findFirstFeaturesInternal(r){var u,c,f;let{next:n,cardinalities:i,visited:o,plus:s}=r;if(n===void 0)return[];let{feature:a,type:l}=n;if(lt.isGroup(a)){if(o.has(a))return[];o.add(a)}if(lt.isGroup(a))return this.findNextFeaturesInGroup(n,0,i,o,s).map(d=>this.modifyCardinality(d,a.cardinality,i));if(lt.isAlternatives(a)||lt.isUnorderedGroup(a))return a.elements.flatMap(d=>this.findFirstFeaturesInternal({next:{feature:d,type:l,property:n.property},cardinalities:i,visited:o,plus:s})).map(d=>this.modifyCardinality(d,a.cardinality,i));if(lt.isAssignment(a)){let d={feature:a.terminal,type:l,property:(u=n.property)!=null?u:a.feature};return this.findFirstFeaturesInternal({next:d,cardinalities:i,visited:o,plus:s}).map(h=>this.modifyCardinality(h,a.cardinality,i))}else{if(lt.isAction(a))return this.findNextFeaturesInternal({next:{feature:a,type:Et.getTypeName(a),property:(c=n.property)!=null?c:a.feature},cardinalities:i,visited:o,plus:s});if(lt.isRuleCall(a)&&lt.isParserRule(a.rule.ref)){let d=a.rule.ref,h={feature:d.definition,type:d.fragment||d.dataType?void 0:(f=Et.getExplicitRuleType(d))!=null?f:d.name,property:n.property};return this.findFirstFeaturesInternal({next:h,cardinalities:i,visited:o,plus:s}).map(_=>this.modifyCardinality(_,a.cardinality,i))}else return[n]}}findNextFeaturesInGroup(r,n,i,o,s){var u;let a=[],l;for(;n<r.feature.elements.length&&(l={feature:r.feature.elements[n++],type:r.type},a.push(...this.findFirstFeaturesInternal({next:l,cardinalities:i,visited:o,plus:s})),!!Et.isOptionalCardinality((u=l.feature.cardinality)!=null?u:i.get(l.feature),l.feature)););return a}ruleMatches(r,n){return lt.isParserRule(r)?Do(r.definition).some(o=>this.featureMatches(o.feature,n)):lt.isTerminalRule(r)?Et.terminalRegex(r).test(n.image):!1}modifyCardinality(r,n,i){return i.set(r.feature,n),r}getDataType(r){let n=r.variables,i=r.nextVariables,o=r.typeName,s="";return s=it(s,o),{expectedType:s,variable:n,typeName:o,nextVariables:i}}};var _p=class extends Fa{constructor(r){super(r);this.services=r}getDocumentHighlight(r,n){let i=r.parseResult.value.$cstNode;if(!i)return;let o=Fi.findDeclarationNodeAtOffset(i,r.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!o)return;let s=this.references.findDeclaration(o);if(s){let a=[];if(s.$type==="VarDeclaration"||s.$type==="FunctionElement")return a;{let l=$t.equals(Ur.getDocument(s).uri,r.uri),u={documentUri:r.uri,includeDeclaration:l};return this.references.findReferences(s,u).map(f=>this.createDocumentHighlight(f)).toArray()}}}};var vp=class extends Vo{constructor(r){super(r);this.services=r}findDeclaration(r){if(r){let n=Et.findAssignment(r),i=r.astNode;if(n&&i){let o=i[n.feature];if(Tt(o)){if(wC.includes(o.$refText.toUpperCase())){let s=Ut(o.$refText.toUpperCase());if(s){let[a,l]=s;return a}}return o.ref}else if(Array.isArray(o)){for(let s of o)if(Tt(s)&&s.$refNode&&s.$refNode.offset<=r.offset&&s.$refNode.end>=r.end)return s.ref}}if(i){let o=this.nameProvider.getNameNode(i);if(o&&(o===r||Fi.isChildNode(r,o)))return i}}}};var xp=Kt(wr(),1);var Np=class extends tp{getSignatureFromElement(e,r){var n;if(iC(e)){let i=e.$container;if(rC(i)){let o=i.assignPrefix,s=o==null?void 0:o.varEnchanceDecl.$refText,a=o==null?void 0:o.varEnchanceDecl.ref;if(a){if(yi(a)){let l=a.varInputs,u=a.varOutputs,c=Rp(l),f=Rp(u),d=Math.max(c,f),h=a.name,_=a.variable_type,x="";x=it(x,_),x===void 0&&(x=(n=_.Identifier)==null?void 0:n.$refText);let E=[],I="";l.forEach(B=>{let Q=B.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,$e=vi(le.variables,d),W="",L=le.typeName;W=it(W,L),I+=`
VAR_INPUT${" ".repeat(8)}${le.variables}${" ".repeat($e)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,d);I+=`
VAR_INPUT${" ".repeat(8)}${j}${" ".repeat(H)}${W}`})}}),u.forEach(B=>{let Q=B.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,$e=vi(le.variables,d),W="",L=le.typeName;W=it(W,L),I+=`
VAR_OUTPUT${" ".repeat(7)}${le.variables}${" ".repeat($e)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,d);I+=`
VAR_OUTPUT${" ".repeat(7)}${j}${" ".repeat(H)}${W}`})}});let y={kind:xp.MarkupKind.Markdown,value:["```typescript",I,"```"].join(`
`)},T={label:`FUNCTION ${h}:${x}
`,documentation:y};return E.push(T),{signatures:E}}else if(lr(a)){let u=a.typeName.Identifier;if(u){let c=u.ref;if(En(c)){let f=c.varInputs,d=c.varOutputs,h=[],_="",x=Rp(f),E=Rp(d),I=Math.max(x,E);f.forEach(B=>{let Q=B.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,$e=vi(le.variables,I),W="",L=le.typeName;W=it(W,L),_+=`
VAR_INPUT${" ".repeat(8)}${le.variables}${" ".repeat($e)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,I);_+=`
VAR_INPUT${" ".repeat(8)}${j}${" ".repeat(H)}${W}`})}}),d.forEach(B=>{let Q=B.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,$e=vi(le.variables,I),W="",L=le.typeName;W=it(W,L),_+=`
VAR_OUTPUT${" ".repeat(7)}${le.variables}${" ".repeat($e)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,I);_+=`
VAR_OUTPUT${" ".repeat(7)}${j}${" ".repeat(H)}${W}`})}});let y={kind:xp.MarkupKind.Markdown,value:["```typescript",_,"```"].join(`
`)},T={label:`FUNCTION_BLOCK ${c.name}
`,documentation:y};return h.push(T),{signatures:h}}}}}else if(s){let l=Ut(s);if(l){let[u,c]=l,f=[];if(u){let d=this.getSignatureInfo(u,f,"usage");return d||this.getSignatureInfo(u,f,"comment")}}}}}}get signatureHelpOptions(){return{triggerCharacters:["(",","],retriggerCharacters:[","]}}getSignatureInfo(e,r,n){let i=e[n],o=lV(e.varDecls),s="",a=uV(o);if(o.forEach(l=>{let u=vi(l.variable,a),c=l.varType==="VAR_INPUT"?8:7;s+=`
${l.varType}${" ".repeat(c)}${l.variable}${" ".repeat(u)} ${l.type}`}),i){let l=e.elementType==="functionBlock"?"FUNCTION_BLOCK":"FUNCTION",u=e.elementType==="functionBlock"?"\u529F\u80FD\u5757\u8BF4\u660E: ":"\u51FD\u6570\u8BF4\u660E: ",c={kind:xp.MarkupKind.Markdown,value:["```typescript",`${u}${e.comment}`,s,"```"].join(`
`)},f={label:`${l} ${e.elementName}
`,documentation:c};return r.push(f),{signatures:r}}}},Hy=class{constructor(e,r,n){this.varType=e;this.variable=r;this.type=n}};function lV(t){let e=[];return t.forEach(r=>{let n=r.varGlobalType,i=r.varName,o=r.varType,s=new Hy(n,i,o);e.push(s)}),e}function vi(t,e){let r=8,n=t.length;return e+r-n}function Rp(t){let e=0;return t.forEach(r=>{r.items.forEach(n=>{let i=n.nextVariables;e=Math.max(e,n.variables.length),i.length>0&&i.forEach(o=>{e=Math.max(e,o.length)})})}),e}function uV(t){let e=0;return t.forEach(r=>{e=Math.max(e,r.variable.length)}),e}var Op,BC=()=>Op!=null?Op:Op=fp(`{
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
                    "$ref": "#/rules@73"
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
                "$ref": "#/rules@113"
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
                "$ref": "#/rules@113"
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
                "$ref": "#/rules@73"
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
              "$ref": "#/rules@113"
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
                  "$ref": "#/rules@102"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@111"
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
                  "$ref": "#/rules@106"
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
                  "$ref": "#/rules@134"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@113"
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
                "$ref": "#/rules@113"
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
                "$ref": "#/rules@113"
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
                  "$ref": "#/rules@133"
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
                  "$ref": "#/rules@133"
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
            "feature": "aliasName",
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
            "$type": "Assignment",
            "feature": "refName",
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
                    "$ref": "#/rules@134"
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
            "$ref": "#/rules@113"
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
                "$ref": "#/rules@101"
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
                "$ref": "#/rules@104"
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
                "$ref": "#/rules@107"
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
                "$ref": "#/rules@108"
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
                "$ref": "#/rules@105"
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
                "$ref": "#/rules@103"
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
                "$ref": "#/rules@111"
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
                "$ref": "#/rules@112"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "Date_And_time_type_name",
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
            "feature": "Time_Of_Day_type_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@110"
              },
              "arguments": []
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
                  "$ref": "#/rules@113"
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
                "$ref": "#/rules@102"
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
              "$ref": "#/rules@134"
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
          "$ref": "#/rules@134"
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
              "$ref": "#/rules@116"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@118"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@117"
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
                  "$ref": "#/rules@116"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@118"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@117"
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
                  "$ref": "#/rules@105"
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
                  "$ref": "#/rules@116"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@118"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@117"
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
              "$ref": "#/rules@104"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@101"
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
                  "$ref": "#/rules@103"
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
                  "$ref": "#/rules@134"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@115"
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
          "$ref": "#/rules@106"
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
              "$ref": "#/rules@119"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@120"
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
                "$ref": "#/rules@134"
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
                "$ref": "#/rules@134"
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
                  "$ref": "#/rules@111"
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
          "$ref": "#/rules@121"
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
              "$ref": "#/rules@123"
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
              "$ref": "#/rules@122"
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
              "$ref": "#/rules@125"
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
              "$ref": "#/rules@124"
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
                  "$ref": "#/rules@110"
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
          "$ref": "#/rules@134"
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
          "$ref": "#/rules@134"
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
              "$ref": "#/rules@134"
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
                  "$ref": "#/rules@134"
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
              "$ref": "#/rules@112"
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
          "$ref": "#/rules@134"
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
          "$ref": "#/rules@134"
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
          "$ref": "#/rules@134"
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
                  "$ref": "#/rules@109"
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
              "$ref": "#/rules@96"
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
                    "$ref": "#/rules@96"
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
              "$ref": "#/rules@70"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@72"
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
              "$ref": "#/rules@97"
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
                "$ref": "#/rules@134"
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
                "$ref": "#/rules@71"
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
                "$ref": "#/rules@82"
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
                "$ref": "#/rules@134"
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
                  "$ref": "#/rules@113"
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
                "$ref": "#/rules@102"
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
                "$ref": "#/rules@75"
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
                "$ref": "#/rules@75"
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
            "$ref": "#/rules@75"
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
              "$ref": "#/rules@84"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@77"
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
              "$ref": "#/rules@90"
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
                "$ref": "#/rules@78"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@80"
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
                    "$ref": "#/rules@79"
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
                    "$ref": "#/rules@96"
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
                    "$ref": "#/rules@81"
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
                    "$ref": "#/rules@82"
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
                    "$ref": "#/rules@83"
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
                        "$ref": "#/rules@83"
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
                "$ref": "#/rules@85"
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
                "$ref": "#/rules@86"
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
                "$ref": "#/rules@73"
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
                    "$ref": "#/rules@73"
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
                    "$ref": "#/rules@73"
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
                "$ref": "#/rules@87"
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
                "$ref": "#/rules@87"
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
                    "$ref": "#/rules@73"
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
                "$ref": "#/rules@88"
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
                "$ref": "#/rules@74"
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
                "$ref": "#/rules@89"
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
                    "$ref": "#/rules@89"
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
                "$ref": "#/rules@91"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@93"
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
                  "$ref": "#/rules@113"
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
                "$ref": "#/rules@92"
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
                "$ref": "#/rules@73"
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
                "$ref": "#/rules@73"
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
                "$ref": "#/rules@73"
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
              "$ref": "#/rules@133"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@134"
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
                  "$ref": "#/rules@134"
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
                              "$ref": "#/rules@113"
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
                  "$ref": "#/rules@113"
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
          "$ref": "#/rules@113"
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
              "$ref": "#/rules@100"
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
                  "$ref": "#/rules@100"
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
        "regex": "/\\\\b(?:RTC|INTEGRAL|DERIVATIVE|PID|RAMP|HYSTERESIS|F_TRIG|RS|R_TRIG|SR|BOOL_TO_SINT|BOOL_TO_INT|BOOL_TO_DINT|BOOL_TO_LINT|BOOL_TO_USINT|BOOL_TO_UINT|BOOL_TO_UDINT|BOOL_TO_ULINT|BOOL_TO_REAL|BOOL_TO_LREAL|BOOL_TO_TIME|BOOL_TO_DATE|BOOL_TO_TOD|BOOL_TO_DT|BOOL_TO_STRING|BOOL_TO_BYTE|BOOL_TO_WORD|BOOL_TO_DWORD|BOOL_TO_LWORD|SINT_TO_BOOL|SINT_TO_INT|SINT_TO_DINT|SINT_TO_LINT|SINT_TO_USINT|SINT_TO_UINT|SINT_TO_UDINT|SINT_TO_ULINT|SINT_TO_REAL|SINT_TO_LREAL|SINT_TO_TIME|SINT_TO_DATE|SINT_TO_TOD|SINT_TO_DT|SINT_TO_STRING|SINT_TO_BYTE|SINT_TO_WORD|SINT_TO_DWORD|SINT_TO_LWORD|INT_TO_BOOL|INT_TO_SINT|INT_TO_DINT|INT_TO_LINT|INT_TO_USINT|INT_TO_UINT|INT_TO_UDINT|INT_TO_ULINT|INT_TO_REAL|INT_TO_LREAL|INT_TO_TIME|INT_TO_DATE|INT_TO_TOD|INT_TO_DT|INT_TO_STRING|INT_TO_BYTE|INT_TO_WORD|INT_TO_DWORD|INT_TO_LWORD|DINT_TO_BOOL|DINT_TO_SINT|DINT_TO_INT|DINT_TO_LINT|DINT_TO_USINT|DINT_TO_UINT|DINT_TO_UDINT|DINT_TO_ULINT|DINT_TO_REAL|DINT_TO_LREAL|DINT_TO_TIME|DINT_TO_DATE|DINT_TO_TOD|DINT_TO_DT|DINT_TO_STRING|DINT_TO_BYTE|DINT_TO_WORD|DINT_TO_DWORD|DINT_TO_LWORD|LINT_TO_BOOL|LINT_TO_SINT|LINT_TO_INT|LINT_TO_DINT|LINT_TO_USINT|LINT_TO_UINT|LINT_TO_UDINT|LINT_TO_ULINT|LINT_TO_REAL|LINT_TO_LREAL|LINT_TO_TIME|LINT_TO_DATE|LINT_TO_TOD|LINT_TO_DT|LINT_TO_STRING|LINT_TO_BYTE|LINT_TO_WORD|LINT_TO_DWORD|LINT_TO_LWORD|USINT_TO_BOOL|USINT_TO_SINT|USINT_TO_INT|USINT_TO_DINT|USINT_TO_LINT|USINT_TO_UINT|USINT_TO_UDINT|USINT_TO_ULINT|USINT_TO_REAL|USINT_TO_LREAL|USINT_TO_TIME|USINT_TO_DATE|USINT_TO_TOD|USINT_TO_DT|USINT_TO_STRING|USINT_TO_BYTE|USINT_TO_WORD|USINT_TO_DWORD|USINT_TO_LWORD|UINT_TO_BOOL|UINT_TO_SINT|UINT_TO_INT|UINT_TO_DINT|UINT_TO_LINT|UINT_TO_USINT|UINT_TO_UDINT|UINT_TO_ULINT|UINT_TO_REAL|UINT_TO_LREAL|UINT_TO_TIME|UINT_TO_DATE|UINT_TO_TOD|UINT_TO_DT|UINT_TO_STRING|UINT_TO_BYTE|UINT_TO_WORD|UINT_TO_DWORD|UINT_TO_LWORD|UDINT_TO_BOOL|UDINT_TO_SINT|UDINT_TO_INT|UDINT_TO_DINT|UDINT_TO_LINT|UDINT_TO_USINT|UDINT_TO_UINT|UDINT_TO_ULINT|UDINT_TO_REAL|UDINT_TO_LREAL|UDINT_TO_TIME|UDINT_TO_DATE|UDINT_TO_TOD|UDINT_TO_DT|UDINT_TO_STRING|UDINT_TO_BYTE|UDINT_TO_WORD|UDINT_TO_DWORD|UDINT_TO_LWORD|ULINT_TO_BOOL|ULINT_TO_SINT|ULINT_TO_INT|ULINT_TO_DINT|ULINT_TO_LINT|ULINT_TO_USINT|ULINT_TO_UINT|ULINT_TO_UDINT|ULINT_TO_REAL|ULINT_TO_LREAL|ULINT_TO_TIME|ULINT_TO_DATE|ULINT_TO_TOD|ULINT_TO_DT|ULINT_TO_STRING|ULINT_TO_BYTE|ULINT_TO_WORD|ULINT_TO_DWORD|ULINT_TO_LWORD|REAL_TO_BOOL|REAL_TO_SINT|REAL_TO_INT|REAL_TO_DINT|REAL_TO_LINT|REAL_TO_USINT|REAL_TO_UINT|REAL_TO_UDINT|REAL_TO_ULINT|REAL_TO_LREAL|REAL_TO_TIME|REAL_TO_DATE|REAL_TO_TOD|REAL_TO_DT|REAL_TO_STRING|REAL_TO_BYTE|REAL_TO_WORD|REAL_TO_DWORD|REAL_TO_LWORD|LREAL_TO_BOOL|LREAL_TO_SINT|LREAL_TO_INT|LREAL_TO_DINT|LREAL_TO_LINT|LREAL_TO_USINT|LREAL_TO_UINT|LREAL_TO_UDINT|LREAL_TO_ULINT|LREAL_TO_REAL|LREAL_TO_TIME|LREAL_TO_DATE|LREAL_TO_TOD|LREAL_TO_DT|LREAL_TO_STRING|LREAL_TO_BYTE|LREAL_TO_WORD|LREAL_TO_DWORD|LREAL_TO_LWORD|TIME_TO_SINT|TIME_TO_INT|TIME_TO_DINT|TIME_TO_LINT|TIME_TO_USINT|TIME_TO_UINT|TIME_TO_UDINT|TIME_TO_ULINT|TIME_TO_REAL|TIME_TO_LREAL|TIME_TO_STRING|TIME_TO_BYTE|TIME_TO_WORD|TIME_TO_DWORD|TIME_TO_LWORD|DATE_TO_SINT|DATE_TO_INT|DATE_TO_DINT|DATE_TO_LINT|DATE_TO_USINT|DATE_TO_UINT|DATE_TO_UDINT|DATE_TO_ULINT|DATE_TO_REAL|DATE_TO_LREAL|DATE_TO_STRING|DATE_TO_BYTE|DATE_TO_WORD|DATE_TO_DWORD|DATE_TO_LWORD|TOD_TO_SINT|TOD_TO_INT|TOD_TO_DINT|TOD_TO_LINT|TOD_TO_USINT|TOD_TO_UINT|TOD_TO_UDINT|TOD_TO_ULINT|TOD_TO_REAL|TOD_TO_LREAL|TOD_TO_STRING|TOD_TO_BYTE|TOD_TO_WORD|TOD_TO_DWORD|TOD_TO_LWORD|DT_TO_SINT|DT_TO_INT|DT_TO_DINT|DT_TO_LINT|DT_TO_USINT|DT_TO_UINT|DT_TO_UDINT|DT_TO_ULINT|DT_TO_REAL|DT_TO_LREAL|DT_TO_STRING|DT_TO_BYTE|DT_TO_WORD|DT_TO_DWORD|DT_TO_LWORD|STRING_TO_BOOL|STRING_TO_SINT|STRING_TO_INT|STRING_TO_DINT|STRING_TO_LINT|STRING_TO_USINT|STRING_TO_UINT|STRING_TO_UDINT|STRING_TO_ULINT|STRING_TO_REAL|STRING_TO_LREAL|STRING_TO_TIME|STRING_TO_DATE|STRING_TO_TOD|STRING_TO_DT|STRING_TO_BYTE|STRING_TO_WORD|STRING_TO_DWORD|STRING_TO_LWORD|BYTE_TO_BOOL|BYTE_TO_SINT|BYTE_TO_INT|BYTE_TO_DINT|BYTE_TO_LINT|BYTE_TO_USINT|BYTE_TO_UINT|BYTE_TO_UDINT|BYTE_TO_ULINT|BYTE_TO_REAL|BYTE_TO_LREAL|BYTE_TO_TIME|BYTE_TO_DATE|BYTE_TO_TOD|BYTE_TO_DT|BYTE_TO_STRING|BYTE_TO_WORD|BYTE_TO_DWORD|BYTE_TO_LWORD|WORD_TO_BOOL|WORD_TO_SINT|WORD_TO_INT|WORD_TO_DINT|WORD_TO_LINT|WORD_TO_USINT|WORD_TO_UINT|WORD_TO_UDINT|WORD_TO_ULINT|WORD_TO_REAL|WORD_TO_LREAL|WORD_TO_TIME|WORD_TO_DATE|WORD_TO_TOD|WORD_TO_DT|WORD_TO_STRING|WORD_TO_BYTE|WORD_TO_DWORD|WORD_TO_LWORD|DWORD_TO_BOOL|DWORD_TO_SINT|DWORD_TO_INT|DWORD_TO_DINT|DWORD_TO_LINT|DWORD_TO_USINT|DWORD_TO_UINT|DWORD_TO_UDINT|DWORD_TO_ULINT|DWORD_TO_REAL|DWORD_TO_LREAL|DWORD_TO_TIME|DWORD_TO_DATE|DWORD_TO_TOD|DWORD_TO_DT|DWORD_TO_STRING|DWORD_TO_BYTE|DWORD_TO_WORD|DWORD_TO_LWORD|LWORD_TO_BOOL|LWORD_TO_SINT|LWORD_TO_INT|LWORD_TO_DINT|LWORD_TO_LINT|LWORD_TO_USINT|LWORD_TO_UINT|LWORD_TO_UDINT|LWORD_TO_ULINT|LWORD_TO_REAL|LWORD_TO_LREAL|LWORD_TO_TIME|LWORD_TO_DATE|LWORD_TO_TOD|LWORD_TO_DT|LWORD_TO_STRING|LWORD_TO_BYTE|LWORD_TO_WORD|LWORD_TO_DWORD|TRUNC|BCD_TO_USINT|BCD_TO_UINT|BCD_TO_UDINT|BCD_TO_ULINT|USINT_TO_BCD|UINT_TO_BCD|UDINT_TO_BCD|ULINT_TO_BCD|DATE_AND_TIME_TO_TIME_OF_DAY|DATE_AND_TIME_TO_DATE|ABS|SQRT|LOG|ASIN|ACOS|ATAN|SIN|COS|TAN|ADD_TIME|ADD_TOD_TIME|ADD_DT_TIME|MULTIME|SUB_TIME|SUB_DATE_DATE|SUB_TOD_TIME|SUB_TOD_TOD|SUB_DT_TIME|SUB_DT_DT|DIVTIME|SHL|SHR|ROR|ROL|CONCAT_DATE_TOD|CTU_DINT|CTU_LINT|CTU_UDINT|CTU_ULINT|CTD_DINT|CTD_LINT|CTD_UDINT|CTD_ULIN|CTUD_DINT|CTUD_LINT|CTUD_UDINT|CTUD_ULINT|TP|TON|TOF|CTUD|CTU|CTD|SEMA)\\\\b/i"
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
              "$ref": "#/rules@114"
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
              "$ref": "#/rules@134"
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
              "$ref": "#/rules@126"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@128"
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
              "$ref": "#/rules@126"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@128"
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
              "$ref": "#/rules@126"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@128"
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
              "$ref": "#/rules@126"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@128"
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
              "$ref": "#/rules@128"
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
              "$ref": "#/rules@134"
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
                  "$ref": "#/rules@134"
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
              "$ref": "#/rules@132"
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
                  "$ref": "#/rules@132"
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
              "$ref": "#/rules@129"
            }
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@130"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@134"
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
                      "$ref": "#/rules@134"
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
              "$ref": "#/rules@132"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@126"
                },
                "cardinality": "?"
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@132"
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
                      "$ref": "#/rules@126"
                    }
                  },
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "TerminalRuleCall",
                        "rule": {
                          "$ref": "#/rules@132"
                        }
                      },
                      {
                        "$type": "TerminalRuleCall",
                        "rule": {
                          "$ref": "#/rules@127"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@127"
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
                  "$ref": "#/rules@126"
                },
                "cardinality": "?"
              },
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@132"
                    }
                  },
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@127"
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
}`);var cV={languageId:"st",fileExtensions:[".st"],caseInsensitive:!1},WC={AstReflection:()=>new Iu},GC={Grammar:()=>BC(),LanguageMetaData:()=>cV,parser:{}};var Ip=class{constructor(e){this.services=e}error(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.error(e))}warn(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.warn(e))}info(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.info(e))}log(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.log(e))}};var Ep=class extends qo{async computeLocalScopes(e,r){let n=e.parseResult.value,i=new dn;for(let a of n.program)a.inputs.forEach(u=>{u.items.forEach(f=>{let d=this.descriptions.createDescription(f,f.variables,e);i.add(n,d);let h=f.nextVariables;this.addNextVariables(h,f,e,i,n)})});return n.function_block.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),n.st_function.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),i}addNextVariables(e,r,n,i,o){if(e)return e.length>0&&e.forEach(s=>{let a=this.descriptions.createDescription(r,s,n);i.add(o,a)}),i}handleAllVariable(e,r,n,i){e.forEach(o=>{o.items.forEach(a=>{let l=this.descriptions.createDescription(a,a.variables,i);r.add(n,l),this.addNextVariables(a.nextVariables,a,i,r,n)})})}};var Sp=class extends up{format(e){}};var Ap=class extends Go{constructor(r){super(r);this.services=r}getCandidate(r){return Tp.includes(r.reference.$refText.toUpperCase())?{type:"FunctionElement",name:r.reference.$refText,documentUri:An,path:"st-cache"}:super.getCandidate(r)}buildReference(r,n,i,o){let s=this,a={$refNode:i,$refText:o,get ref(){var l;if(Be(this._ref))return this._ref;if(nl(this._nodeDescription)){let u=s.loadAstNode(this._nodeDescription);Tp.includes(o.toUpperCase())||(this._ref=u!=null?u:s.createLinkingError({reference:a,container:r,property:n},this._nodeDescription))}else if(this._ref===void 0){let u=s.getLinkedNode({reference:a,container:r,property:n});if(u.error&&Ur.getDocument(r).state<oe.ComputedScopes)return;this._ref=(l=u.node)!=null?l:u.error,this._nodeDescription=u.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return _n(this._ref)?this._ref:void 0}};return a}doLink(r,n){let i=r.reference;if(i._ref===void 0)try{let o=this.getCandidate(r);if(_n(o))i._ref=o;else if(i._nodeDescription=o,this.langiumDocuments().hasDocument(o.documentUri)){let s=this.loadAstNode(o);i._ref=s!=null?s:this.createLinkingError(r,o)}}catch(o){i._ref={...r,message:`An error occurred while resolving reference to '${i.$refText}': ${o}`}}n.references.push(i)}getLinkedNode(r){try{let n=this.getCandidate(r);if(_n(n))return{error:n};let i=this.loadAstNode(n);if(i)return{node:i,descr:n};{let o=vC(r.reference.$refText.toUpperCase());return o?{node:o,descr:n}:{descr:n,error:this.createLinkingError(r,n)}}}catch(n){return{error:{...r,message:`An error occurred while resolving reference to '${r.reference.$refText}': ${n}`}}}}createLinkingError(r,n){let i=Ur.getDocument(r.container);i.state<oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${i.uri}).`);let o=this.reflection.getReferenceType(r),s=r.container;return aC(s)?(o="\u529F\u80FD\u5757\u6216\u51FD\u6570",{...r,message:`\u4E0D\u80FD\u5F15\u7528\u7684${o}'${r.reference.$refText}'.`,targetDescription:n}):{...r,message:`Could not resolve reference to ${o} named '${r.reference.$refText}'.`,targetDescription:n}}};function VC(t){return{$type:"struct",literal:t}}function jC(t){return t.$type==="struct"}function qC(t){return{$type:"functionBlock",literal:t}}function HC(t){return t.$type==="functionBlock"}function Dp(t,e){return{$type:"error",message:t,source:e}}function KC(t){return{$type:"cache",literal:t}}function zC(t){return t.$type==="cache"}function Du(t,e){var i;let r,n=e.get(t);if(n)return n;if(e.set(t,Dp("Recursive definition",t)),Sn(t)){let o=(i=t.element)==null?void 0:i.ref;o&&Su(o)&&(r=YC(o,e))}else if(Ti(t))r=fV(t,e);else if(lr(t)){let o=t.typeName;if(Eu(o)){let s=o.Identifier;if(s){let a=s.ref;a&&(r=Du(a,e))}else o.Cache_type_name&&(r=KC(o.Cache_type_name))}}else Su(t)?r=YC(t,e):_i(t)?r=VC(t):En(t)&&(r=qC(t));return r||(r=Dp("Could not infer type for "+t.$type,t)),e.set(t,r),r}function YC(t,e){let r=t.typeName;if(Eu(r)){let n=r.Identifier;if(n){let i=n.ref;if(i)return Du(i,e)}}}function fV(t,e){let r=t.prior;return dV(r,e)}function dV(t,e){let r=t.variable.ref;return r?Du(r,e):Dp("Could not infer type for this reference",t)}var Cp=class extends Ko{constructor(e){super(e)}getScope(e){if(e.property==="element"){let n=e.container.previous;if(!n)return super.getScope(e);let i=Du(n,new Map);if(jC(i))return this.scopeStructMembers(i.literal);if(HC(i))return this.scopeFunctionBlockMembers(i.literal);if(zC(i)){let o=this.scopeCache(i.literal);if(o)return o}}else if(e.property==="variable")return super.getScope(e);return super.getScope(e)}scopeCache(e){let r=Ut(e),n;if(r){let[i,o]=r;if(i){let s=i.varDecls,a=me(s).map(u=>this.descriptions.createDescription(u,u.varName,o)).nonNullable(),l={caseInsensitive:!1};n=this.createScope(a,n,l)}}if(n)return n}getGlobalScope(e,r){return super.getGlobalScope(e,r)}scopeStructMembers(e){let r=this.getStructChain(e).flatMap(a=>a.items),n=me(r).map(a=>this.descriptions.createDescription(a,a.variables)).nonNullable(),i=me(r).map(a=>{let l=a.nextVariables;if(l.length>0)for(let u=0;u<l.length;u++){let c=l[u];return this.descriptions.createDescription(a,c)}}).nonNullable(),o=new qr(n),s=new qr(i);return o}scopeFirstFunctionBlockMembers(e){let r=this.getFunctionBlockDecl(e),n=me(r).map(i=>{let o=this.nameProvider.getName(i);return o?this.descriptions.createDescription(i,o):this.descriptions.createDescription(i,i.variables)}).nonNullable();return new qr(n)}scopeNextFunctionBlockMembers(e){let r=this.singleVarScope(e,"input"),n=this.singleVarScope(e,"output"),i=this.singleVarScope(e,"local");return new qr(r.getAllElements().concat(n.getAllElements()).concat(i.getAllElements()))}singleVarScope(e,r){let n;r==="input"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varInputs):r==="output"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varOutputs):r==="local"&&(n=this.getFunctionBlockChain(e).flatMap(a=>a.varLocals));let o=this.getFunctionBlockDecl(e).filter(a=>a.nextVariables.length>0),s;for(let a=0;a<o.length;a++){let l=o[a],u=l.nextVariables,c=this.handleNextVariables(l,u),f=this.createScopeForNodes(n,c);s?s=s.concat(f.getAllElements()):s=f.getAllElements()}return new qr(s)}scopeFunctionBlockMembers(e){let r=this.scopeFirstFunctionBlockMembers(e),n=this.scopeNextFunctionBlockMembers(e);return new qr(r.getAllElements().concat(n.getAllElements()))}handleNextVariables(e,r){let n=me(r).map(o=>this.descriptions.createDescription(e,o)).nonNullable();return new qr(n)}getStructDecl(e){let r=[],n=[];return e.items}getFunctionBlockDecl(e){let r=[],n=e.varInputs,i=e.varOutputs,o=e.varLocals;return this.addDecl(n,r),this.addDecl(i,r),this.addDecl(o,r),r}addDecl(e,r){e.forEach(n=>{let i=n.items;r.push(...i)})}getStructChain(e){let r=new Set;return r.add(e),e.items.forEach(i=>{let o=i.typeName;if(Eu(o)){let s=o.Identifier;if(s){let a=s.ref;a&&this.getStructChain(a)}}}),Array.from(r)}getFunctionBlockChain(e){let r=new Set;return r.add(e),Array.from(r)}};function XC(t){let e=t.validation.DocumentValidator,r=t.validation.ValidationRegistry,n=t.validation.StValidator,i={St:n.checkElement};r.register(i,n)}var bp=class{checkElement(e,r){let n=e.program,i=e.st_function,o=e.function_block,s=e.types_struct,a=e.types_alias,l=e.types_enum,u=e.types_union;n.forEach(c=>{this.saveProgramVarInfo(c.inputs,r)}),this.checkPrograms(e,r),this.checkFunctions(i,r),this.checkFunctionBlocks(o,r),this.checkDateTypes(s,a,l,u,r)}checkPrograms(e,r){this.judgeWhetherHasDuplicateName("program",e.program,r),this.judgeCapital("program",e.program,r),this.checkProgramVarRef(e,r)}checkFunctions(e,r){this.judgeWhetherHasDuplicateName("function",e,r),this.handleFunctionOrBlockInfo(e,r)}checkFunctionBlocks(e,r){this.judgeWhetherHasDuplicateName("functionBlock",e,r),this.judgeCapital("functionBlock",e,r),this.handleFunctionOrBlockInfo(e,r)}checkDateTypes(e,r,n,i,o){this.handleDataTypeVarInfo(e,r,n,i,o)}judgeCapital(e,r,n){r&&r.forEach(i=>{if(i.name){let o=i.name.substring(0,1);/^[a-zA-Z]/.test(o)&&o.toUpperCase()!==o&&n("warning",`${e} name should start with a capital letter`,{node:i,property:"name"})}})}judgeWhetherHasDuplicateName(e,r,n){let i=[];if(r){let o={};r.forEach(a=>{let l=[];ZD(a)?(l.push(a.variables),a.nextVariables&&l.push(...a.nextVariables)):l.push(a.name),l.forEach(u=>{o[u]?(o[u]++,i.push(a)):o[u]=1})});let s=Object.keys(o).filter(a=>o[a]>1);i.forEach(a=>{s.length>0&&n("error",`\u91CD\u590D\u5B9A\u4E49\u7684${e}:${s[0]}`,{node:a,property:"name"})})}}checkProgramVarRef(e,r){e.program.forEach(i=>{let o=i.stStatements;if(o){let s=o.statements;this.handleStatements(s,r)}})}handleStatements(e,r){e.length!==0&&e.forEach(n=>{let i=n.$type;if(i==="Selection_statement"){let o=n,s=o.if,a=o.case;if(s){let l=s.ifStatement,u=s.ifCondition,c=s.elsifConditions;this.checkIfWhitespace(s,r),this.checkWhitespace(s,r);let f=s.elsifStatements,d=s.elseStatement;if(u){let h=u.$type;this.handleCondition(h,u,r)}if(c.forEach(h=>{let _=h.$type;this.handleCondition(_,h,r)}),l){let h=l.statements;this.handleStatements(h,r)}if(f){let h=f.statements;this.handleStatements(h,r)}if(d){let h=d.statements;this.handleStatements(h,r)}}if(a){let l=a.caseExpression,u=a.elseStatements,c=a.caseElements;if(en(l)){let f=l.variable}if(u){let f=u.statements;this.handleStatements(f,r)}c.forEach(f=>{let h=f.caseList.caseListElement,_=f.statements;if(_){let x=_.statements,E=[];E.push(x),this.handleStatements(E,r)}h.length>0&&h.forEach(x=>{let E=x.numCaseStart,I=x.numericCaseEnd;E&&I&&typeof E=="string"&&typeof I=="string"&&(E=parseInt(E),I=parseInt(I),E>I&&r("error","\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:x,property:"numCaseStart"}))})})}}else if(i==="Iteration_statement"){let s=n.statement;if(s!=="EXIT"){let a=s.statementList;if(a){let l=a.statements;if(this.handleStatements(l,r),tC(s)){let u=s.controlVariable.ref,c="";if(lr(u)){let y=u.typeName;c=it(c,y)}let f=s.forList,h=f.forExpr.prior,_=f.byExpr,x=_==null?void 0:_.prior,E=f.toExpr,I=E==null?void 0:E.prior;this.handleExpressionPrior(h,c,r,h),this.handleExpressionPrior(x,c,r,x),this.handleExpressionPrior(I,c,r,I)}else if(lC(s)){let u=s.untilExpr;this.handleSingleVariableExpression(u,r)}else if(mC(s)){let u=s.whileExpr;this.handleSingleVariableExpression(u,r)}}}}else i==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(n,r)})}handleCondition(e,r,n){if(e==="Expression"){let i=r.left,o=r.right;this.handleConditionExpression(i,o,n)}else if(e!=="Constant"){if(e!=="FunctionExpression")if(e==="VariableExpression"){let o=r.variable}else e==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(r,n)}}handleFunctionInvokeOrAssign(e,r){let i=e.statement;if(!uC(i)){let o=i.id,s=i.assign,a=i.params,l=i.assignPrefix;this.handleVariableHint(o,r,!1,s,a,l)}}handleVariableHint(e,r,n,i,o,s){let a="",l,u;if(e){if(Sn(e)){let c=e;l=c;let f=c.element,d=c.previous;if(f){let h=f.ref,_=f.$refText;h&&(a=this.handleRef(h,_,a,d))}}else if(Ti(e)){let c=e,f=c.prior;if(en(f)){let h=f.variable.ref;l=f,a=this.judgeRefNodeType(h,a)}else if(Uy(f)){let d=this.handleFunctionExpression(f,r,c,a)}}}if(s){let c=s.varEnchanceDecl,f=c.ref;u=f;let d=c.$refText;f?(a=this.handleRef(f,d,a),this.handleParam(o,a,r,s)):(a=d,this.handleParam(o,a,r))}if(i){let c=i.expression,f=c==null?void 0:c.$type;if(f==="Constant"){let h=c.constant;this.handleDataTypeMatch(h,a,r,l)}else if(f==="Expression"){let d=c,h=d==null?void 0:d.prior,_=d.left,x=d.right;if(h&&this.handleExpressionPrior(h,a,r,l),_&&x){let E=_.prior,I=x.prior;this.handleExpressionPrior(E,a,r,l),this.handleExpressionPrior(I,a,r,l)}}else if(f==="MemberCall"){let d=c,h=d.element,_=d.arguments;if(h){let x=h.ref;if(x&&oC(x)){let E=x,I=E.variable_type,y=E.reqParams,T=[];if(this.handleFunctionBlockMethodReqparam(y,r,T),_.length!==y.length)r("error",`\u671F\u671B${y.length}\u4E2A\u53C2\u6570,\u4F46\u662F\u5B9E\u9645${_.length}\u4E2A`,{node:d,property:"arguments"});else for(let B=0;B<_.length;B++){let Q=_[B],ae=T[B],le=Q.prior;this.handlePrior(le,"","",ae,r)}let k;k=Yn(I,k,r),k&&a!==""&&k.toLowerCase()!==(a==null?void 0:a.toLowerCase())&&r("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${k}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:d,property:"element"})}}}}if(o&&o.length>0&&u&&yi(u)){let c=[];this.validateStFunctionRule(u,l,a,r,c,o[0])}}handleParam(e,r,n,i){let o,s;if(i&&(s=i.varEnchanceDecl,o=s.ref),e&&e.length>0){let a=e[0].parameters;if(r){let l=Ut(r);if(l)this.validateLibraryFunction(l,a,n);else if(lr(o)){let u=o.typeName;if(u){let c=u.Identifier;if(c){let f=c.ref;if(En(f)){let d={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:f.name,varDecls:[],rootName:"",comment:"",usage:""};f.varInputs.forEach(h=>{h.items.forEach(x=>{let E="",I={$type:"VarDeclaration",varName:x.variables,varType:it(r,x.typeName),varGlobalType:"VAR_INPUT"};d.varDecls.push(I)})}),f.varOutputs.forEach(h=>{h.items.forEach(x=>{let E="",I={$type:"VarDeclaration",varName:x.variables,varType:it(r,x.typeName),varGlobalType:"VAR_OUTPUT"};d.varDecls.push(I)})}),this.validateLibraryFunction(d,a,n,!0)}else _i(f)&&i&&n("error","\u65E0\u6CD5\u8C03\u7528\u7C7B\u578B'TYPE'\u7684\u5BF9\u8C61",{node:i,property:"varEnchanceDecl"})}else i&&n("error",`\u9700\u8981\u7A0B\u5E8F\u540D,\u51FD\u6570\u6216\u529F\u80FD\u5757\u5B9E\u4F8B\u66FF\u4EE3${i==null?void 0:i.varEnchanceDecl.$refText}`,{node:i,property:"varEnchanceDecl"})}}}}}handleRef(e,r,n,i){if(_i(e.$container)){let a=e.$container.items.find(l=>l.variables===r);if(a){let l=a.typeName;n=this.judgeType(n,l)}}else if(lr(e)){let s=e.typeName;n=this.judgeType(n,s)}else if(i){let o=i.prior;if(en(o)){let s=o.variable.ref;if(lr(s)){let a=s.typeName;if(a.Cache_type_name){let l=a.Cache_type_name,u=Ut(l);if(u){let[c,f]=u;if(c&&c.elementType==="functionBlock"){c=c;let h=c.varDecls.find(_=>_.varName===r);n=h==null?void 0:h.varType}}}}}}return n}judgeRefNodeType(e,r){var n;if(lr(e)){let i=e.typeName;if(r=it(r,i),!r&&i&&i.Identifier){let o=(n=i.Identifier)==null?void 0:n.ref;(_i(o)||En(o))&&(r=o.name)}}return r}judgeType(e,r){if(e=it(e,r),e===void 0&&r){let n=r.Identifier;if(n){let i=n==null?void 0:n.ref;(_i(i)||En(i))&&(e=i.name)}}return e}handleExpressionPrior(e,r,n,i){if(e){i||(i=e);let o=e==null?void 0:e.$type;if(o==="Constant"){let a=e.constant;this.handleDataTypeMatch(a,r,n,i)}else if(o==="FunctionExpression"){let s=this.handleFunctionExpression(e,n,i,r)}else if(o==="VariableExpression"){let s=e,a=s.variable.ref,l="";l=this.judgeRefNodeType(a,l),l&&r&&l.toLowerCase()!==r.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${l}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:s,property:"variable"})}}}handleFunctionExpression(e,r,n,i){let o=e,s=o.refFunctionName,a=o.params;if(s.refFunctionName){let l=s.refFunctionName.ref,u=o.params;this.validatePrefixSuffixElement(o,r);let c=[];if(l){if(yi(l))this.validateStFunctionRule(l,n,i,r,c,u);else if(lr(l)&&(i=this.judgeRefNodeType(l,i),i)){let f=Ut(i);if(f&&u){let d=u.parameters;this.validateLibraryFunction(f,d,r)}}}}else if(s.Cache_type_name){this.validatePrefixSuffixElement(o,r);let l=s.Cache_type_name,u=this.getCacheFunctionReturnType(l);if(this.validateReturnTypeCompatibility(u,i,r,o,"refFunctionName"),a){let c=a.parameters,f=Ut(l);f&&this.validateLibraryFunction(f,c,r)}}}validateStFunctionRule(e,r,n,i,o,s){let a=e.variable_type,l=e.varInputs,u,c=[];if(l.forEach(f=>{f.items.forEach(h=>{let _=h.nextVariables;_.length>0&&_.forEach(x=>{c.push(x)})}),c.push(...f.items)}),a&&(a.Identifier?u=a.Identifier:u=it(u,a),r&&u&&n&&u.toLowerCase()!==(n==null?void 0:n.toLowerCase())&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${u}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${n}'`,{node:r,property:"prior"})),this.handleFunctionReqparam(c,i,o),s){let f=s.parameters;if(c.length!==f.length)i("error",`\u671F\u671B${c.length}\u4E2A\u8F93\u5165,\u4F46\u662F\u5B9E\u9645${f.length}\u4E2A`,{node:s,property:"parameters"});else for(let d=0;d<f.length;d++){let h=f[d],_=o[d],x=h.ParamValue;if(x){let E=x.prior;this.handlePrior(E,"","",_,i)}}}}validateLibraryFunction(e,r,n,i){if(i)this.validateFb(e,r,n,i);else{let[o,s]=e;o&&o.elementType==="functionBlock"&&(o=o,this.validateFb(o,r,n))}}validateFb(e,r,n,i){let o=this.judgeCacheNodeInputOutputVarDecl(":=",e),s=this.judgeCacheNodeInputOutputVarDecl("=>",e);r.forEach(a=>{let l=a.ParamName,u=a.ParamValue,c=a.InputOrOutputSign,f=!1,d=i?e==null?void 0:e.elementName:e==null?void 0:e.elementName.toUpperCase();c===":="&&l&&(o.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u5165\u53C2\u6570`,{node:a,property:"ParamName"}))),c==="=>"&&l&&(s.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u51FA\u53C2\u6570`,{node:a,property:"ParamName"}))),f||u&&this.handleCacheTypeMatch(l,u,e,n,a)})}validatePrefixSuffixElement(e,r){let n=e.prefixValidateElement,i=e.suffixValidateElement;n&&r("error",`invalid Identifier near '${n}'`,{node:e,property:"prefixValidateElement"}),i&&r("error",`invalid Identifier near '${i}'`,{node:e,property:"suffixValidateElement"})}normalizeTypeAlias(e){if(!e)return;let r=e.toUpperCase();return r==="DT"?"DATE_AND_TIME":r==="TOD"?"TIME_OF_DAY":r}getCacheFunctionReturnType(e){let r=Ut(e);if(!r)return;let[n]=r;if(!n||n.elementType!=="function")return;let i=n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"&&s.varName.toUpperCase()==="OUT")||n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"),o=this.normalizeTypeAlias(i==null?void 0:i.varType);if(!(!o||o==="ANY"||o.startsWith("ANY_")))return o}validateReturnTypeCompatibility(e,r,n,i,o){let s=this.normalizeTypeAlias(e),a=this.normalizeTypeAlias(r);s&&a&&s.toLowerCase()!==a.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${s}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:i,property:o})}judgeCacheNodeInputOutputVarDecl(e,r){let n=new Set;if(!e)return n;let i="",o=r==null?void 0:r.varDecls;return e===":="?i="VAR_INPUT":e==="=>"&&(i="VAR_OUTPUT"),o&&(o==null||o.forEach(s=>{s.varGlobalType===i&&n.add(s.varName)})),n}handleCacheTypeMatch(e,r,n,i,o){var l;if(!n)return;let s=n.varDecls.find(u=>u.varName===e),a=s==null?void 0:s.varType;if(pp(r.prior)){let c=r.prior.constant;this.handleDataTypeMatch(c,a,i,r)}else if(en(r.prior)){let u=r.prior,c=u.variable.ref,f="";f=this.judgeRefNodeType(c,f),f&&a&&f.toLowerCase()!==a.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${f}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:u,property:"variable"})}else if(Sn(r)){let u=r.element,c=(l=r.previous)==null?void 0:l.prior,f="",d="";if(en(c)){let _=c.variable.ref;if(lr(_)){let x=_.typeName;f=_.variables,d=it(d,x)}if(d){let x=Ut(d.toUpperCase());if(x&&u){let[E,I]=x;if(E){let y=E.varDecls.find(T=>T.varName===(u==null?void 0:u.$refText));if(y){let T=y.varType;T&&a&&T.toLowerCase()!==a.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${T}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:o,property:"ParamName"})}}}}}}else if(Uy(r.prior)){let u=r.prior;if(u.refFunctionName.refFunctionName){let c=u.refFunctionName.refFunctionName.ref;if(c){if(yi(c)){let f=c.variable_type,d;d=Yn(f,d,i),this.validateReturnTypeCompatibility(d,a,i,u,"refFunctionName")}}else{let f=u.refFunctionName.refFunctionName.$refText}}else if(u.refFunctionName.Cache_type_name){let c=u.refFunctionName.Cache_type_name,f=this.getCacheFunctionReturnType(c);this.validateReturnTypeCompatibility(f,a,i,u,"refFunctionName")}}}handleFunctionReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s=i.nextVariables,a;if(o&&(a=Yn(o,a,r),n&&(n.push(a),s.length>0)))for(let l=0;l<s.length;l++)n.push(a)})}handleFunctionBlockMethodReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s;o&&(s=Yn(o,s,r),n&&n.push(s))})}handleDataTypeMatch(e,r,n,i){if(!i)return;let o=[];if(Ua(e)){let s=e.arrElements;for(let a=0;a<s.length;a++){let l=s[a];o=ts(l.constant),e=this.handleDataTypeMatchHint(o,r,i,n,e)}}else o=ts(e),e=this.handleDataTypeMatchHint(o,r,i,n,e);return e}handleDataTypeMatchHint(e,r,n,i,o){if(e.length===1){if(r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()){let s=es(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=jy(l);Sn(n)?u!==""&&i("error",u,{node:n,property:"element"}):en(n)?u!==""&&i("error",u,{node:n,property:"variable"}):Ti(n)&&u!==""&&i("error",u,{node:n,property:"prior"})}a||s&&(Sn(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"element"}):en(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"variable"}):Ti(n)&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"prior"}))}}else{o=o;let[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&(Sn(n)?i(a,s,{node:n,property:"element"}):en(n)?i(a,s,{node:n,property:"variable"}):Ti(n)&&i(a,s,{node:n,property:"prior"}))}return o}handleSingleVariableExpression(e,r){if(e){let n=e,i=n.left,o=n.right;this.handleConditionExpression(i,o,r)}}handleConditionExpression(e,r,n){if(e&&r){let i=e.$type,o=r.$type;if(i==="Expression"){let s="",a="",u=e.prior,c=u==null?void 0:u.$type;if(en(u)){let d=u.variable.ref;if(lr(d)){let h=d.typeName;a=d.variables,s=it(s,h)}}if(o==="Expression"){let d=r.prior;this.handlePrior(d,"","",s,n)}}}}handlePrior(e,r,n,i,o){if(en(e)){let a=e.variable.ref;if(lr(a)){let l=a.typeName;r=a.variables,n=it(n,l)}i&&n&&(i==null?void 0:i.toLowerCase())!==(n==null?void 0:n.toLowerCase())&&(i.toLowerCase()==="string"&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}),es(n,i)&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}))}else if(pp(e)){let s=e,a=s.constant,l=[];if(Ua(a)){let u=a.arrElements;for(let c=0;c<u.length;c++){let f=u[c];l=ts(f.constant),a=this.handleConditionExpressionHint(l,i,o,s)}}else l=ts(a),a=this.handleConditionExpressionHint(l,i,o,s)}return{rightVariableName:r,rightExpectType:n}}handleConditionExpressionHint(e,r,n,i){let o=i.constant;if(e.length===1)r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()&&es(e[0],r)&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"constant"});else{o=o,!hp(o.toString())&&!ao(o.toString())&&n("error",`${o}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"constant"});let[a,l]=this.convertValue(o,r);a!==""&&a!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(l,a,{node:i,property:"constant"})}return o}convertValue(e,r){let n=["","error"],i={BOOL:{min:0,max:1},SINT:{min:-128,max:127},BYTE:{min:0,max:255},INT:{min:-32768,max:32767},UINT:{min:0,max:65535},DINT:{min:-2147483648,max:2147483647},UDINT:{min:0,max:4294967295},LINT:{min:-Math.pow(2,63),max:Math.pow(2,63)-1},WORD:{min:0,max:65535},DWORD:{min:0,max:4294967295},LWORD:{min:0,max:Math.pow(2,64)-1}},o;if(r===void 0)return["\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!","error"];if(r===""||Tt(r))return n;if(r.toUpperCase()==="REAL"||r.toUpperCase()==="LREAL"){if(typeof e=="string"&&!qy(e)){let s=parseInt(e,10);o=Object.keys(i).find(a=>s>=i[a].min&&s<=i[a].max&&a!==r),n=o?[`\u5EFA\u8BAE\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"warning"]:["No suitable conversion type found","warning"]}return n}if(i[r]){let{min:s,max:a}=i[r];if(typeof e=="number"){if(!(e>=s&&e<=a)){o=Object.keys(i).find(u=>e>=i[u].min&&e<=i[u].max&&u!==r);let l=es(o,r,e);o?l&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]):n=["No suitable conversion type found","error"]}return n}else if(ao(e))r&&(r.toLowerCase()!=="REAL"||r.toLowerCase()!=="LREAL")&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'LREAL'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]);else{let u=parseInt(e,10);n=this.convertValue(u,r)}}else if(typeof e=="number"){if(o=Object.keys(i).find(s=>e>=i[s].min&&e<=i[s].max&&s!==r),o){if(r){let s=es(o,r,e);if(r.toUpperCase()==="STRING"){if((o==null?void 0:o.toLowerCase())!==r.toLowerCase())return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}else if(s)return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}}else n=["No suitable conversion type found","error"];return n}else if(typeof e=="string"){if(qy(e)){let a=ao(e)?parseFloat(e):parseInt(e,10);n=this.convertValue(a,r)}return n}return n}saveProgramVarInfo(e,r){e.forEach(n=>{let i=n.definition,o=n.items,s=n.modifiers,a="";s?a=i.concat(s):a=i,this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",o,r),o.forEach(l=>{this.validateDeclarationVar(l,r)})})}handleFunctionOrBlockInfo(e,r){e.forEach(n=>{let i=n.varLocals,o=n.varInputs,s=n.varOutputs,a=[],l=[],u=[];if(i.forEach(c=>{a.push(...c.items)}),o.forEach(c=>{l.push(...c.items)}),s.forEach(c=>{u.push(...c.items)}),this.handleEachVarTypeVariable(a,r),this.handleEachVarTypeVariable(l,r),this.handleEachVarTypeVariable(u,r),!En(n)){if(yi(n)){let c=n.variable_type,f=n.varInputs,d=[];f.forEach(_=>{d.push(_.items)}),this.handleFunctionReqparam(d,r);let h;h=Yn(c,h,r)}}})}handleDataTypeVarInfo(e,r,n,i,o){let s=e,a=i,l=n,u=r;s.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let h=d.typeName,_;h&&(h.$type==="Native_Type_Name"?_=Yn(h,_,o):h.$type==="Array_liters"&&(_=h.dataType))})}}),a.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let h=d.typeName,_;h&&(h.$type==="Native_Type_Name"?_=Yn(h,_,o):h.$type==="Array_liters"&&(_=h.dataType))})}}),l.forEach(c=>{let f=c.enum}),u.forEach(c=>{let f=c.aliasName})}handleEachVarTypeVariable(e,r){e&&this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",e,r),e==null||e.forEach(n=>{this.validateDeclarationVar(n,r);let i=n.typeName,o;i&&(i.$type==="Native_Type_Name"?o=Yn(i,o,r):i.$type==="Array_liters"&&(o=i.dataType))})}validateDeclarationVar(e,r){let n=e.typeName,i;if(n){if(n.$type==="Native_Type_Name")i=Yn(n,i,r);else if(n.$type==="Array_liters"){let a=n,l=a.dataType;i=it(i,l),a.arrayElemets.forEach(c=>{let f=c.left,d=c.right,h=parseInt(f,10),_=parseInt(d,10);h&&_&&h>_&&r("error","\u6570\u7EC4\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:e,property:"typeName"})})}}let o=e.initialValue,s=[];if(o){let a=o.constant;if(Ua(a)){let l=a.arrElements;for(let u=0;u<l.length;u++){let c=l[u];s=ts(c.constant),this.handleVarDeclHint(s,i,r,e,c.constant)}}else s=ts(o),this.handleVarDeclHint(s,i,r,e,o)}}handleVarDeclHint(e,r,n,i,o){if(e.length===1){if(r!==void 0&&!Tt(r)&&r&&e[0]&&r.toLowerCase()!==e[0].toLowerCase()){let s=es(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=jy(l);u!==""&&n("error",u,{node:i,property:"initialValue"})}a||s&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"initialValue"})}}else if(pp(o)){let s=o.constant;this.handleInnerVarDeclHint(s,r,n,i),!hp(s)&&!ao(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:o,property:"constant"})}else{let s=o;this.handleInnerVarDeclHint(s,r,n,i),!hp(s)&&!ao(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"initialValue"})}}handleInnerVarDeclHint(e,r,n,i){if(ao(e)){let[o,s]=this.convertValue(e,r);o!==""&&o!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(s,o,{node:i,property:"initialValue"})}else{let o=parseInt(e,10),[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(a,s,{node:i,property:"initialValue"})}}checkTimeType(e){let r=["TIME","DATE","DATE_AND_TIME","TIME_OF_DAY"],n=e.toUpperCase();return r.includes(n)?[!0,n]:[!1,"unmatched time type"]}checkIfWhitespace(e,r){if(e){let n=Ur.getDocument(e).parseResult.value.$cstNode.fullText,i=Et.findNodeForKeyword(e.$cstNode,"THEN");if(i){let o=i.offset;n.charAt(o-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"ifCondition",index:0})}}}checkWhitespace(e,r){if(e){let n=Ur.getDocument(e).parseResult.value.$cstNode.fullText,i=Et.findNodesForKeyword(e.$cstNode,"THEN");for(let o=0;o<i.length;o++){if(o===0)continue;let a=i[o].offset;n.charAt(a-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"elsifConditions",index:o-1})}}}};var kp=class extends zo{constructor(e){super(e)}serialize(e,r){return super.serialize(e,r)}deserialize(e,r={}){let i=JSON.parse(e),o=Zo(i);return UC(o)}};var Ky=class extends Yo{register(e){super.register(e)}getServices(e){return super.getServices(e)}},Ffe=Symbol("StatemachineSharedServices"),pV={ServiceRegistry:()=>new Ky,logger:{ClientLogger:t=>new Ip(t)}},Ufe=Symbol("StatemachineServices");function mV(t){return{shared:()=>t.shared,parser:{},validation:{StValidator:()=>new bp},lsp:{Formatter:()=>new Sp,CompletionProvider:e=>new yp(e),SignatureHelp:()=>new Np,DocumentHighlightProvider:e=>new _p(e)},references:{ScopeProvider:e=>new Cp(e),ScopeComputation:e=>new Ep(e),Linker:e=>new Ap(e),References:e=>new vp(e)},serializer:{JsonSerializer:e=>new kp(e)}}}function JC(t){let e=Jo(zD(t),WC,pV),r=Jo(KD({shared:e}),GC,mV({shared:e}));return e.ServiceRegistry.register(r),XC(r),{shared:e,st:r}}var hV=(0,Ba.createConnection)(new Ba.IPCMessageReader(process),new Ba.IPCMessageWriter(process)),{shared:mp,st:Vy}=JC({connection:hV,...XD});jD(mp);0&&(module.exports={shared,st});
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
