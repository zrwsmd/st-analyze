"use strict";var cb=Object.create;var Va=Object.defineProperty;var fb=Object.getOwnPropertyDescriptor;var db=Object.getOwnPropertyNames;var pb=Object.getPrototypeOf,mb=Object.prototype.hasOwnProperty;var hb=(t,e,r)=>e in t?Va(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var X=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ni=(t,e)=>{for(var r in e)Va(t,r,{get:e[r],enumerable:!0})},ku=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of db(e))!mb.call(t,i)&&i!==r&&Va(t,i,{get:()=>e[i],enumerable:!(n=fb(e,i))||n.enumerable});return t},De=(t,e,r)=>(ku(t,e,"default"),r&&ku(r,e,"default")),Ht=(t,e,r)=>(r=t!=null?cb(pb(t)):{},ku(e||!t||!t.__esModule?Va(r,"default",{value:t,enumerable:!0}):r,t)),gb=t=>ku(Va({},"__esModule",{value:!0}),t);var Oi=(t,e,r)=>(hb(t,typeof e!="symbol"?e+"":e,r),r);var Lu=X(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});Ut.thenable=Ut.typedArray=Ut.stringArray=Ut.array=Ut.func=Ut.error=Ut.number=Ut.string=Ut.boolean=void 0;function Tb(t){return t===!0||t===!1}Ut.boolean=Tb;function ay(t){return typeof t=="string"||t instanceof String}Ut.string=ay;function _b(t){return typeof t=="number"||t instanceof Number}Ut.number=_b;function yb(t){return t instanceof Error}Ut.error=yb;function ly(t){return typeof t=="function"}Ut.func=ly;function uy(t){return Array.isArray(t)}Ut.array=uy;function vb(t){return uy(t)&&t.every(e=>ay(e))}Ut.stringArray=vb;function Rb(t,e){return Array.isArray(t)&&t.every(e)}Ut.typedArray=Rb;function xb(t){return t&&ly(t.then)}Ut.thenable=xb});var as=X(ur=>{"use strict";Object.defineProperty(ur,"__esModule",{value:!0});ur.stringArray=ur.array=ur.func=ur.error=ur.number=ur.string=ur.boolean=void 0;function Nb(t){return t===!0||t===!1}ur.boolean=Nb;function cy(t){return typeof t=="string"||t instanceof String}ur.string=cy;function Ob(t){return typeof t=="number"||t instanceof Number}ur.number=Ob;function Ib(t){return t instanceof Error}ur.error=Ib;function Eb(t){return typeof t=="function"}ur.func=Eb;function fy(t){return Array.isArray(t)}ur.array=fy;function Sb(t){return fy(t)&&t.every(e=>cy(e))}ur.stringArray=Sb});var sm=X(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.Message=se.NotificationType9=se.NotificationType8=se.NotificationType7=se.NotificationType6=se.NotificationType5=se.NotificationType4=se.NotificationType3=se.NotificationType2=se.NotificationType1=se.NotificationType0=se.NotificationType=se.RequestType9=se.RequestType8=se.RequestType7=se.RequestType6=se.RequestType5=se.RequestType4=se.RequestType3=se.RequestType2=se.RequestType1=se.RequestType=se.RequestType0=se.AbstractMessageSignature=se.ParameterStructures=se.ResponseError=se.ErrorCodes=void 0;var uo=as(),$p;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})($p||(se.ErrorCodes=$p={}));var Mp=class t extends Error{constructor(e,r,n){super(r),this.code=uo.number(e)?e:$p.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};se.ResponseError=Mp;var Dr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};se.ParameterStructures=Dr;Dr.auto=new Dr("auto");Dr.byPosition=new Dr("byPosition");Dr.byName=new Dr("byName");var rt=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Dr.auto}};se.AbstractMessageSignature=rt;var Fp=class extends rt{constructor(e){super(e,0)}};se.RequestType0=Fp;var Up=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType=Up;var Bp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType1=Bp;var Wp=class extends rt{constructor(e){super(e,2)}};se.RequestType2=Wp;var Vp=class extends rt{constructor(e){super(e,3)}};se.RequestType3=Vp;var Gp=class extends rt{constructor(e){super(e,4)}};se.RequestType4=Gp;var jp=class extends rt{constructor(e){super(e,5)}};se.RequestType5=jp;var qp=class extends rt{constructor(e){super(e,6)}};se.RequestType6=qp;var Hp=class extends rt{constructor(e){super(e,7)}};se.RequestType7=Hp;var Kp=class extends rt{constructor(e){super(e,8)}};se.RequestType8=Kp;var zp=class extends rt{constructor(e){super(e,9)}};se.RequestType9=zp;var Yp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType=Yp;var Xp=class extends rt{constructor(e){super(e,0)}};se.NotificationType0=Xp;var Jp=class extends rt{constructor(e,r=Dr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType1=Jp;var Qp=class extends rt{constructor(e){super(e,2)}};se.NotificationType2=Qp;var Zp=class extends rt{constructor(e){super(e,3)}};se.NotificationType3=Zp;var em=class extends rt{constructor(e){super(e,4)}};se.NotificationType4=em;var tm=class extends rt{constructor(e){super(e,5)}};se.NotificationType5=tm;var rm=class extends rt{constructor(e){super(e,6)}};se.NotificationType6=rm;var nm=class extends rt{constructor(e){super(e,7)}};se.NotificationType7=nm;var im=class extends rt{constructor(e){super(e,8)}};se.NotificationType8=im;var om=class extends rt{constructor(e){super(e,9)}};se.NotificationType9=om;var dy;(function(t){function e(i){let o=i;return o&&uo.string(o.method)&&(uo.string(o.id)||uo.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&uo.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(uo.string(o.id)||uo.number(o.id)||o.id===null)}t.isResponse=n})(dy||(se.Message=dy={}))});var lm=X(Ii=>{"use strict";var py;Object.defineProperty(Ii,"__esModule",{value:!0});Ii.LRUCache=Ii.LinkedMap=Ii.Touch=void 0;var cr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(cr||(Ii.Touch=cr={}));var wu=class{constructor(){this[py]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,r=cr.None){let n=this._map.get(e);if(n)return r!==cr.None&&this.touch(n,r),n.value}set(e,r,n=cr.None){let i=this._map.get(e);if(i)i.value=r,n!==cr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case cr.None:this.addItemLast(i);break;case cr.First:this.addItemFirst(i);break;case cr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(py=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==cr.First&&r!==cr.Last)){if(r===cr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===cr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Ii.LinkedMap=wu;var am=class extends wu{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=cr.AsNew){return super.get(e,r)}peek(e){return super.get(e,cr.None)}set(e,r){return super.set(e,r,cr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Ii.LRUCache=am});var hy=X(Pu=>{"use strict";Object.defineProperty(Pu,"__esModule",{value:!0});Pu.Disposable=void 0;var my;(function(t){function e(r){return{dispose:r}}t.create=e})(my||(Pu.Disposable=my={}))});var Ei=X(fm=>{"use strict";Object.defineProperty(fm,"__esModule",{value:!0});var um;function cm(){if(um===void 0)throw new Error("No runtime abstraction layer installed");return um}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");um=r}t.install=e})(cm||(cm={}));fm.default=cm});var us=X(ls=>{"use strict";Object.defineProperty(ls,"__esModule",{value:!0});ls.Emitter=ls.Event=void 0;var Ab=Ei(),gy;(function(t){let e={dispose(){}};t.None=function(){return e}})(gy||(ls.Event=gy={}));var dm=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,Ab.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},$u=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new dm),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};ls.Emitter=$u;$u._noop=function(){}});var Uu=X(cs=>{"use strict";Object.defineProperty(cs,"__esModule",{value:!0});cs.CancellationTokenSource=cs.CancellationToken=void 0;var Db=Ei(),Cb=as(),pm=us(),Mu;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:pm.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:pm.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||Cb.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Mu||(cs.CancellationToken=Mu={}));var bb=Object.freeze(function(t,e){let r=(0,Db.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Fu=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?bb:(this._emitter||(this._emitter=new pm.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},mm=class{get token(){return this._token||(this._token=new Fu),this._token}cancel(){this._token?this._token.cancel():this._token=Mu.Cancelled}dispose(){this._token?this._token instanceof Fu&&this._token.dispose():this._token=Mu.None}};cs.CancellationTokenSource=mm});var Ty=X(fs=>{"use strict";Object.defineProperty(fs,"__esModule",{value:!0});fs.SharedArrayReceiverStrategy=fs.SharedArraySenderStrategy=void 0;var kb=Uu(),Ga;(function(t){t.Continue=0,t.Cancelled=1})(Ga||(Ga={}));var hm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=Ga.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,Ga.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};fs.SharedArraySenderStrategy=hm;var gm=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ga.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Tm=class{constructor(e){this.token=new gm(e)}cancel(){}dispose(){}},_m=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new kb.CancellationTokenSource:new Tm(r)}};fs.SharedArrayReceiverStrategy=_m});var vm=X(Bu=>{"use strict";Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Semaphore=void 0;var Lb=Ei(),ym=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,Lb.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Bu.Semaphore=ym});var yy=X(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.ReadableStreamMessageReader=Si.AbstractMessageReader=Si.MessageReader=void 0;var xm=Ei(),ds=as(),Rm=us(),wb=vm(),_y;(function(t){function e(r){let n=r;return n&&ds.func(n.listen)&&ds.func(n.dispose)&&ds.func(n.onError)&&ds.func(n.onClose)&&ds.func(n.onPartialMessage)}t.is=e})(_y||(Si.MessageReader=_y={}));var Wu=class{constructor(){this.errorEmitter=new Rm.Emitter,this.closeEmitter=new Rm.Emitter,this.partialMessageEmitter=new Rm.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${ds.string(e.message)?e.message:"unknown"}`)}};Si.AbstractMessageReader=Wu;var Nm;(function(t){function e(r){var u;let n,i,o,s=new Map,a,l=new Map;if(r===void 0||typeof r=="string")n=r!=null?r:"utf-8";else{if(n=(u=r.charset)!=null?u:"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,s.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)s.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,l.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)l.set(c.name,c)}return a===void 0&&(a=(0,xm.default)().applicationJson.decoder,l.set(a.name,a)),{charset:n,contentDecoder:o,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:l}}t.fromOptions=e})(Nm||(Nm={}));var Om=class extends Wu{constructor(e,r){super(),this.readable=e,this.options=Nm.fromOptions(r),this.buffer=(0,xm.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new wb.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,xm.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Si.ReadableStreamMessageReader=Om});var Oy=X(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.WriteableStreamMessageWriter=Ai.AbstractMessageWriter=Ai.MessageWriter=void 0;var vy=Ei(),ja=as(),Pb=vm(),Ry=us(),$b="Content-Length: ",xy=`\r
`,Ny;(function(t){function e(r){let n=r;return n&&ja.func(n.dispose)&&ja.func(n.onClose)&&ja.func(n.onError)&&ja.func(n.write)}t.is=e})(Ny||(Ai.MessageWriter=Ny={}));var Vu=class{constructor(){this.errorEmitter=new Ry.Emitter,this.closeEmitter=new Ry.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${ja.string(e.message)?e.message:"unknown"}`)}};Ai.AbstractMessageWriter=Vu;var Im;(function(t){function e(r){var n,i;return r===void 0||typeof r=="string"?{charset:r!=null?r:"utf-8",contentTypeEncoder:(0,vy.default)().applicationJson.encoder}:{charset:(n=r.charset)!=null?n:"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:(i=r.contentTypeEncoder)!=null?i:(0,vy.default)().applicationJson.encoder}}t.fromOptions=e})(Im||(Im={}));var Em=class extends Vu{constructor(e,r){super(),this.writable=e,this.options=Im.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Pb.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push($b,n.byteLength.toString(),xy),i.push(xy),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};Ai.WriteableStreamMessageWriter=Em});var Iy=X(Gu=>{"use strict";Object.defineProperty(Gu,"__esModule",{value:!0});Gu.AbstractMessageBuffer=void 0;var Mb=13,Fb=10,Ub=`\r
`,Sm=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let u=this._chunks[n];for(i=0;i<u.length;){switch(u[i]){case Mb:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case Fb:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=u.byteLength,n++}if(r!==4)return;let s=this._read(o+i),a=new Map,l=this.toString(s,"ascii").split(Ub);if(l.length<2)return a;for(let u=0;u<l.length-2;u++){let c=l[u],f=c.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let d=c.substr(0,f),m=c.substr(f+1).trim();a.set(e?d.toLowerCase():d,m)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],s=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let s=o.slice(0,e);r.set(s,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Gu.AbstractMessageBuffer=Sm});var Cy=X(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.createMessageConnection=ge.ConnectionOptions=ge.MessageStrategy=ge.CancellationStrategy=ge.CancellationSenderStrategy=ge.CancellationReceiverStrategy=ge.RequestCancellationReceiverStrategy=ge.IdCancellationReceiverStrategy=ge.ConnectionStrategy=ge.ConnectionError=ge.ConnectionErrors=ge.LogTraceNotification=ge.SetTraceNotification=ge.TraceFormat=ge.TraceValues=ge.Trace=ge.NullLogger=ge.ProgressType=ge.ProgressToken=void 0;var Ey=Ei(),ht=as(),fe=sm(),Sy=lm(),qa=us(),Am=Uu(),za;(function(t){t.type=new fe.NotificationType("$/cancelRequest")})(za||(za={}));var Dm;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Dm||(ge.ProgressToken=Dm={}));var Ha;(function(t){t.type=new fe.NotificationType("$/progress")})(Ha||(Ha={}));var Cm=class{constructor(){}};ge.ProgressType=Cm;var bm;(function(t){function e(r){return ht.func(r)}t.is=e})(bm||(bm={}));ge.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var $e;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})($e||(ge.Trace=$e={}));var Ay;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(Ay||(ge.TraceValues=Ay={}));(function(t){function e(n){if(!ht.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})($e||(ge.Trace=$e={}));var zr;(function(t){t.Text="text",t.JSON="json"})(zr||(ge.TraceFormat=zr={}));(function(t){function e(r){return ht.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(zr||(ge.TraceFormat=zr={}));var km;(function(t){t.type=new fe.NotificationType("$/setTrace")})(km||(ge.SetTraceNotification=km={}));var ju;(function(t){t.type=new fe.NotificationType("$/logTrace")})(ju||(ge.LogTraceNotification=ju={}));var Ka;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(Ka||(ge.ConnectionErrors=Ka={}));var ps=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ge.ConnectionError=ps;var Lm;(function(t){function e(r){let n=r;return n&&ht.func(n.cancelUndispatched)}t.is=e})(Lm||(ge.ConnectionStrategy=Lm={}));var qu;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&ht.func(n.createCancellationTokenSource)&&(n.dispose===void 0||ht.func(n.dispose))}t.is=e})(qu||(ge.IdCancellationReceiverStrategy=qu={}));var wm;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&ht.func(n.createCancellationTokenSource)&&(n.dispose===void 0||ht.func(n.dispose))}t.is=e})(wm||(ge.RequestCancellationReceiverStrategy=wm={}));var Hu;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Am.CancellationTokenSource}});function e(r){return qu.is(r)||wm.is(r)}t.is=e})(Hu||(ge.CancellationReceiverStrategy=Hu={}));var Ku;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(za.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&ht.func(n.sendCancellation)&&ht.func(n.cleanup)}t.is=e})(Ku||(ge.CancellationSenderStrategy=Ku={}));var zu;(function(t){t.Message=Object.freeze({receiver:Hu.Message,sender:Ku.Message});function e(r){let n=r;return n&&Hu.is(n.receiver)&&Ku.is(n.sender)}t.is=e})(zu||(ge.CancellationStrategy=zu={}));var Yu;(function(t){function e(r){let n=r;return n&&ht.func(n.handleMessage)}t.is=e})(Yu||(ge.MessageStrategy=Yu={}));var Dy;(function(t){function e(r){let n=r;return n&&(zu.is(n.cancellationStrategy)||Lm.is(n.connectionStrategy)||Yu.is(n.messageStrategy))}t.is=e})(Dy||(ge.ConnectionOptions=Dy={}));var gn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(gn||(gn={}));function Bb(t,e,r,n){let i=r!==void 0?r:ge.NullLogger,o=0,s=0,a=0,l="2.0",u,c=new Map,f,d=new Map,m=new Map,v,N=new Sy.LinkedMap,E=new Map,I=new Set,_=new Map,T=$e.Off,k=zr.Text,M,Q=gn.New,ae=new qa.Emitter,le=new qa.Emitter,Ce=new qa.Emitter,Pe=new qa.Emitter,W=new qa.Emitter,L=n&&n.cancellationStrategy?n.cancellationStrategy:zu.Message;function j(R){if(R===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+R.toString()}function H(R){return R===null?"res-unknown-"+(++a).toString():"res-"+R.toString()}function Te(){return"not-"+(++s).toString()}function ue(R,b){fe.Message.isRequest(b)?R.set(j(b.id),b):fe.Message.isResponse(b)?R.set(H(b.id),b):R.set(Te(),b)}function G(R){}function U(){return Q===gn.Listening}function ve(){return Q===gn.Closed}function Re(){return Q===gn.Disposed}function Ae(){(Q===gn.New||Q===gn.Listening)&&(Q=gn.Closed,le.fire(void 0))}function tr(R){ae.fire([R,void 0,void 0])}function Ri(R){ae.fire(R)}t.onClose(Ae),t.onError(tr),e.onClose(Ae),e.onError(Ri);function Ge(){v||N.size===0||(v=(0,Ey.default)().timer.setImmediate(()=>{v=void 0,Xn()}))}function jt(R){fe.Message.isRequest(R)?qt(R):fe.Message.isNotification(R)?kt(R):fe.Message.isResponse(R)?bt(R):pt(R)}function Xn(){if(N.size===0)return;let R=N.shift();try{let b=n==null?void 0:n.messageStrategy;Yu.is(b)?b.handleMessage(R,jt):jt(R)}finally{Ge()}}let dt=R=>{try{if(fe.Message.isNotification(R)&&R.method===za.type.method){let b=R.params.id,$=j(b),F=N.get($);if(fe.Message.isRequest(F)){let re=n==null?void 0:n.connectionStrategy,xe=re&&re.cancelUndispatched?re.cancelUndispatched(F,G):void 0;if(xe&&(xe.error!==void 0||xe.result!==void 0)){N.delete($),_.delete(b),xe.id=F.id,Hr(xe,R.method,Date.now()),e.write(xe).catch(()=>i.error("Sending response for canceled message failed."));return}}let ne=_.get(b);if(ne!==void 0){ne.cancel(),xi(R);return}else I.add(b)}ue(N,R)}finally{Ge()}};function qt(R){var Lt;if(Re())return;function b(be,it,Ue){let ot={jsonrpc:l,id:R.id};be instanceof fe.ResponseError?ot.error=be.toJson():ot.result=be===void 0?null:be,Hr(ot,it,Ue),e.write(ot).catch(()=>i.error("Sending response failed."))}function $(be,it,Ue){let ot={jsonrpc:l,id:R.id,error:be.toJson()};Hr(ot,it,Ue),e.write(ot).catch(()=>i.error("Sending response failed."))}function F(be,it,Ue){be===void 0&&(be=null);let ot={jsonrpc:l,id:R.id,result:be};Hr(ot,it,Ue),e.write(ot).catch(()=>i.error("Sending response failed."))}Jn(R);let ne=c.get(R.method),re,xe;ne&&(re=ne.type,xe=ne.handler);let je=Date.now();if(xe||u){let be=(Lt=R.id)!=null?Lt:String(Date.now()),it=qu.is(L.receiver)?L.receiver.createCancellationTokenSource(be):L.receiver.createCancellationTokenSource(R);R.id!==null&&I.has(R.id)&&it.cancel(),R.id!==null&&_.set(be,it);try{let Ue;if(xe)if(R.params===void 0){if(re!==void 0&&re.numberOfParams!==0){$(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${R.method} defines ${re.numberOfParams} params but received none.`),R.method,je);return}Ue=xe(it.token)}else if(Array.isArray(R.params)){if(re!==void 0&&re.parameterStructures===fe.ParameterStructures.byName){$(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by name but received parameters by position`),R.method,je);return}Ue=xe(...R.params,it.token)}else{if(re!==void 0&&re.parameterStructures===fe.ParameterStructures.byPosition){$(new fe.ResponseError(fe.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by position but received parameters by name`),R.method,je);return}Ue=xe(R.params,it.token)}else u&&(Ue=u(R.method,R.params,it.token));let ot=Ue;Ue?ot.then?ot.then(wt=>{_.delete(be),b(wt,R.method,je)},wt=>{_.delete(be),wt instanceof fe.ResponseError?$(wt,R.method,je):wt&&ht.string(wt.message)?$(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${wt.message}`),R.method,je):$(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,je)}):(_.delete(be),b(Ue,R.method,je)):(_.delete(be),F(Ue,R.method,je))}catch(Ue){_.delete(be),Ue instanceof fe.ResponseError?b(Ue,R.method,je):Ue&&ht.string(Ue.message)?$(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${Ue.message}`),R.method,je):$(new fe.ResponseError(fe.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,je)}}else $(new fe.ResponseError(fe.ErrorCodes.MethodNotFound,`Unhandled method ${R.method}`),R.method,je)}function bt(R){if(!Re())if(R.id===null)R.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(R.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let b=R.id,$=E.get(b);if(ns(R,$),$!==void 0){E.delete(b);try{if(R.error){let F=R.error;$.reject(new fe.ResponseError(F.code,F.message,F.data))}else if(R.result!==void 0)$.resolve(R.result);else throw new Error("Should never happen.")}catch(F){F.message?i.error(`Response handler '${$.method}' failed with message: ${F.message}`):i.error(`Response handler '${$.method}' failed unexpectedly.`)}}}}function kt(R){if(Re())return;let b,$;if(R.method===za.type.method){let F=R.params.id;I.delete(F),xi(R);return}else{let F=d.get(R.method);F&&($=F.handler,b=F.type)}if($||f)try{if(xi(R),$)if(R.params===void 0)b!==void 0&&b.numberOfParams!==0&&b.parameterStructures!==fe.ParameterStructures.byName&&i.error(`Notification ${R.method} defines ${b.numberOfParams} params but received none.`),$();else if(Array.isArray(R.params)){let F=R.params;R.method===Ha.type.method&&F.length===2&&Dm.is(F[0])?$({token:F[0],value:F[1]}):(b!==void 0&&(b.parameterStructures===fe.ParameterStructures.byName&&i.error(`Notification ${R.method} defines parameters by name but received parameters by position`),b.numberOfParams!==R.params.length&&i.error(`Notification ${R.method} defines ${b.numberOfParams} params but received ${F.length} arguments`)),$(...F))}else b!==void 0&&b.parameterStructures===fe.ParameterStructures.byPosition&&i.error(`Notification ${R.method} defines parameters by position but received parameters by name`),$(R.params);else f&&f(R.method,R.params)}catch(F){F.message?i.error(`Notification handler '${R.method}' failed with message: ${F.message}`):i.error(`Notification handler '${R.method}' failed unexpectedly.`)}else Ce.fire(R)}function pt(R){if(!R){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(R,null,4)}`);let b=R;if(ht.string(b.id)||ht.number(b.id)){let $=b.id,F=E.get($);F&&F.reject(new Error("The received response has neither a result nor an error property."))}}function mt(R){if(R!=null)switch(T){case $e.Verbose:return JSON.stringify(R,null,4);case $e.Compact:return JSON.stringify(R);default:return}}function lr(R){if(!(T===$e.Off||!M))if(k===zr.Text){let b;(T===$e.Verbose||T===$e.Compact)&&R.params&&(b=`Params: ${mt(R.params)}

`),M.log(`Sending request '${R.method} - (${R.id})'.`,b)}else Kr("send-request",R)}function _r(R){if(!(T===$e.Off||!M))if(k===zr.Text){let b;(T===$e.Verbose||T===$e.Compact)&&(R.params?b=`Params: ${mt(R.params)}

`:b=`No parameters provided.

`),M.log(`Sending notification '${R.method}'.`,b)}else Kr("send-notification",R)}function Hr(R,b,$){if(!(T===$e.Off||!M))if(k===zr.Text){let F;(T===$e.Verbose||T===$e.Compact)&&(R.error&&R.error.data?F=`Error data: ${mt(R.error.data)}

`:R.result?F=`Result: ${mt(R.result)}

`:R.error===void 0&&(F=`No result returned.

`)),M.log(`Sending response '${b} - (${R.id})'. Processing request took ${Date.now()-$}ms`,F)}else Kr("send-response",R)}function Jn(R){if(!(T===$e.Off||!M))if(k===zr.Text){let b;(T===$e.Verbose||T===$e.Compact)&&R.params&&(b=`Params: ${mt(R.params)}

`),M.log(`Received request '${R.method} - (${R.id})'.`,b)}else Kr("receive-request",R)}function xi(R){if(!(T===$e.Off||!M||R.method===ju.type.method))if(k===zr.Text){let b;(T===$e.Verbose||T===$e.Compact)&&(R.params?b=`Params: ${mt(R.params)}

`:b=`No parameters provided.

`),M.log(`Received notification '${R.method}'.`,b)}else Kr("receive-notification",R)}function ns(R,b){if(!(T===$e.Off||!M))if(k===zr.Text){let $;if((T===$e.Verbose||T===$e.Compact)&&(R.error&&R.error.data?$=`Error data: ${mt(R.error.data)}

`:R.result?$=`Result: ${mt(R.result)}

`:R.error===void 0&&($=`No result returned.

`)),b){let F=R.error?` Request failed: ${R.error.message} (${R.error.code}).`:"";M.log(`Received response '${b.method} - (${R.id})' in ${Date.now()-b.timerStart}ms.${F}`,$)}else M.log(`Received response ${R.id} without active response promise.`,$)}else Kr("receive-response",R)}function Kr(R,b){if(!M||T===$e.Off)return;let $={isLSPMessage:!0,type:R,message:b,timestamp:Date.now()};M.log($)}function Dn(){if(ve())throw new ps(Ka.Closed,"Connection is closed.");if(Re())throw new ps(Ka.Disposed,"Connection is disposed.")}function is(){if(U())throw new ps(Ka.AlreadyListening,"Connection is already listening")}function os(){if(!U())throw new Error("Call listen() first.")}function Ar(R){return R===void 0?null:R}function A(R){if(R!==null)return R}function P(R){return R!=null&&!Array.isArray(R)&&typeof R=="object"}function V(R,b){switch(R){case fe.ParameterStructures.auto:return P(b)?A(b):[Ar(b)];case fe.ParameterStructures.byName:if(!P(b))throw new Error("Received parameters by name but param is not an object literal.");return A(b);case fe.ParameterStructures.byPosition:return[Ar(b)];default:throw new Error(`Unknown parameter structure ${R.toString()}`)}}function z(R,b){let $,F=R.numberOfParams;switch(F){case 0:$=void 0;break;case 1:$=V(R.parameterStructures,b[0]);break;default:$=[];for(let ne=0;ne<b.length&&ne<F;ne++)$.push(Ar(b[ne]));if(b.length<F)for(let ne=b.length;ne<F;ne++)$.push(null);break}return $}let Z={sendNotification:(R,...b)=>{Dn();let $,F;if(ht.string(R)){$=R;let re=b[0],xe=0,je=fe.ParameterStructures.auto;fe.ParameterStructures.is(re)&&(xe=1,je=re);let Lt=b.length,be=Lt-xe;switch(be){case 0:F=void 0;break;case 1:F=V(je,b[xe]);break;default:if(je===fe.ParameterStructures.byName)throw new Error(`Received ${be} parameters for 'by Name' notification parameter structure.`);F=b.slice(xe,Lt).map(it=>Ar(it));break}}else{let re=b;$=R.method,F=z(R,re)}let ne={jsonrpc:l,method:$,params:F};return _r(ne),e.write(ne).catch(re=>{throw i.error("Sending notification failed."),re})},onNotification:(R,b)=>{Dn();let $;return ht.func(R)?f=R:b&&(ht.string(R)?($=R,d.set(R,{type:void 0,handler:b})):($=R.method,d.set(R.method,{type:R,handler:b}))),{dispose:()=>{$!==void 0?d.delete($):f=void 0}}},onProgress:(R,b,$)=>{if(m.has(b))throw new Error(`Progress handler for token ${b} already registered`);return m.set(b,$),{dispose:()=>{m.delete(b)}}},sendProgress:(R,b,$)=>Z.sendNotification(Ha.type,{token:b,value:$}),onUnhandledProgress:Pe.event,sendRequest:(R,...b)=>{Dn(),os();let $,F,ne;if(ht.string(R)){$=R;let Lt=b[0],be=b[b.length-1],it=0,Ue=fe.ParameterStructures.auto;fe.ParameterStructures.is(Lt)&&(it=1,Ue=Lt);let ot=b.length;Am.CancellationToken.is(be)&&(ot=ot-1,ne=be);let wt=ot-it;switch(wt){case 0:F=void 0;break;case 1:F=V(Ue,b[it]);break;default:if(Ue===fe.ParameterStructures.byName)throw new Error(`Received ${wt} parameters for 'by Name' request parameter structure.`);F=b.slice(it,ot).map(Cu=>Ar(Cu));break}}else{let Lt=b;$=R.method,F=z(R,Lt);let be=R.numberOfParams;ne=Am.CancellationToken.is(Lt[be])?Lt[be]:void 0}let re=o++,xe;ne&&(xe=ne.onCancellationRequested(()=>{let Lt=L.sender.sendCancellation(Z,re);return Lt===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${re}`),Promise.resolve()):Lt.catch(()=>{i.log(`Sending cancellation messages for id ${re} failed`)})}));let je={jsonrpc:l,id:re,method:$,params:F};return lr(je),typeof L.sender.enableCancellation=="function"&&L.sender.enableCancellation(je),new Promise(async(Lt,be)=>{let it=wt=>{Lt(wt),L.sender.cleanup(re),xe==null||xe.dispose()},Ue=wt=>{be(wt),L.sender.cleanup(re),xe==null||xe.dispose()},ot={method:$,timerStart:Date.now(),resolve:it,reject:Ue};try{await e.write(je),E.set(re,ot)}catch(wt){throw i.error("Sending request failed."),ot.reject(new fe.ResponseError(fe.ErrorCodes.MessageWriteError,wt.message?wt.message:"Unknown reason")),wt}})},onRequest:(R,b)=>{Dn();let $=null;return bm.is(R)?($=void 0,u=R):ht.string(R)?($=null,b!==void 0&&($=R,c.set(R,{handler:b,type:void 0}))):b!==void 0&&($=R.method,c.set(R.method,{type:R,handler:b})),{dispose:()=>{$!==null&&($!==void 0?c.delete($):u=void 0)}}},hasPendingResponse:()=>E.size>0,trace:async(R,b,$)=>{let F=!1,ne=zr.Text;$!==void 0&&(ht.boolean($)?F=$:(F=$.sendNotification||!1,ne=$.traceFormat||zr.Text)),T=R,k=ne,T===$e.Off?M=void 0:M=b,F&&!ve()&&!Re()&&await Z.sendNotification(km.type,{value:$e.toString(R)})},onError:ae.event,onClose:le.event,onUnhandledNotification:Ce.event,onDispose:W.event,end:()=>{e.end()},dispose:()=>{if(Re())return;Q=gn.Disposed,W.fire(void 0);let R=new fe.ResponseError(fe.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let b of E.values())b.reject(R);E=new Map,_=new Map,I=new Set,N=new Sy.LinkedMap,ht.func(e.dispose)&&e.dispose(),ht.func(t.dispose)&&t.dispose()},listen:()=>{Dn(),is(),Q=gn.Listening,t.listen(dt)},inspect:()=>{(0,Ey.default)().console.log("inspect")}};return Z.onNotification(ju.type,R=>{if(T===$e.Off||!M)return;let b=T===$e.Verbose||T===$e.Compact;M.log(R.message,b?R.verbose:void 0)}),Z.onNotification(Ha.type,R=>{let b=m.get(R.token);b?b(R.value):Pe.fire(R)}),Z}ge.createMessageConnection=Bb});var Xu=X(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.ProgressType=w.ProgressToken=w.createMessageConnection=w.NullLogger=w.ConnectionOptions=w.ConnectionStrategy=w.AbstractMessageBuffer=w.WriteableStreamMessageWriter=w.AbstractMessageWriter=w.MessageWriter=w.ReadableStreamMessageReader=w.AbstractMessageReader=w.MessageReader=w.SharedArrayReceiverStrategy=w.SharedArraySenderStrategy=w.CancellationToken=w.CancellationTokenSource=w.Emitter=w.Event=w.Disposable=w.LRUCache=w.Touch=w.LinkedMap=w.ParameterStructures=w.NotificationType9=w.NotificationType8=w.NotificationType7=w.NotificationType6=w.NotificationType5=w.NotificationType4=w.NotificationType3=w.NotificationType2=w.NotificationType1=w.NotificationType0=w.NotificationType=w.ErrorCodes=w.ResponseError=w.RequestType9=w.RequestType8=w.RequestType7=w.RequestType6=w.RequestType5=w.RequestType4=w.RequestType3=w.RequestType2=w.RequestType1=w.RequestType0=w.RequestType=w.Message=w.RAL=void 0;w.MessageStrategy=w.CancellationStrategy=w.CancellationSenderStrategy=w.CancellationReceiverStrategy=w.ConnectionError=w.ConnectionErrors=w.LogTraceNotification=w.SetTraceNotification=w.TraceFormat=w.TraceValues=w.Trace=void 0;var Ye=sm();Object.defineProperty(w,"Message",{enumerable:!0,get:function(){return Ye.Message}});Object.defineProperty(w,"RequestType",{enumerable:!0,get:function(){return Ye.RequestType}});Object.defineProperty(w,"RequestType0",{enumerable:!0,get:function(){return Ye.RequestType0}});Object.defineProperty(w,"RequestType1",{enumerable:!0,get:function(){return Ye.RequestType1}});Object.defineProperty(w,"RequestType2",{enumerable:!0,get:function(){return Ye.RequestType2}});Object.defineProperty(w,"RequestType3",{enumerable:!0,get:function(){return Ye.RequestType3}});Object.defineProperty(w,"RequestType4",{enumerable:!0,get:function(){return Ye.RequestType4}});Object.defineProperty(w,"RequestType5",{enumerable:!0,get:function(){return Ye.RequestType5}});Object.defineProperty(w,"RequestType6",{enumerable:!0,get:function(){return Ye.RequestType6}});Object.defineProperty(w,"RequestType7",{enumerable:!0,get:function(){return Ye.RequestType7}});Object.defineProperty(w,"RequestType8",{enumerable:!0,get:function(){return Ye.RequestType8}});Object.defineProperty(w,"RequestType9",{enumerable:!0,get:function(){return Ye.RequestType9}});Object.defineProperty(w,"ResponseError",{enumerable:!0,get:function(){return Ye.ResponseError}});Object.defineProperty(w,"ErrorCodes",{enumerable:!0,get:function(){return Ye.ErrorCodes}});Object.defineProperty(w,"NotificationType",{enumerable:!0,get:function(){return Ye.NotificationType}});Object.defineProperty(w,"NotificationType0",{enumerable:!0,get:function(){return Ye.NotificationType0}});Object.defineProperty(w,"NotificationType1",{enumerable:!0,get:function(){return Ye.NotificationType1}});Object.defineProperty(w,"NotificationType2",{enumerable:!0,get:function(){return Ye.NotificationType2}});Object.defineProperty(w,"NotificationType3",{enumerable:!0,get:function(){return Ye.NotificationType3}});Object.defineProperty(w,"NotificationType4",{enumerable:!0,get:function(){return Ye.NotificationType4}});Object.defineProperty(w,"NotificationType5",{enumerable:!0,get:function(){return Ye.NotificationType5}});Object.defineProperty(w,"NotificationType6",{enumerable:!0,get:function(){return Ye.NotificationType6}});Object.defineProperty(w,"NotificationType7",{enumerable:!0,get:function(){return Ye.NotificationType7}});Object.defineProperty(w,"NotificationType8",{enumerable:!0,get:function(){return Ye.NotificationType8}});Object.defineProperty(w,"NotificationType9",{enumerable:!0,get:function(){return Ye.NotificationType9}});Object.defineProperty(w,"ParameterStructures",{enumerable:!0,get:function(){return Ye.ParameterStructures}});var Pm=lm();Object.defineProperty(w,"LinkedMap",{enumerable:!0,get:function(){return Pm.LinkedMap}});Object.defineProperty(w,"LRUCache",{enumerable:!0,get:function(){return Pm.LRUCache}});Object.defineProperty(w,"Touch",{enumerable:!0,get:function(){return Pm.Touch}});var Wb=hy();Object.defineProperty(w,"Disposable",{enumerable:!0,get:function(){return Wb.Disposable}});var by=us();Object.defineProperty(w,"Event",{enumerable:!0,get:function(){return by.Event}});Object.defineProperty(w,"Emitter",{enumerable:!0,get:function(){return by.Emitter}});var ky=Uu();Object.defineProperty(w,"CancellationTokenSource",{enumerable:!0,get:function(){return ky.CancellationTokenSource}});Object.defineProperty(w,"CancellationToken",{enumerable:!0,get:function(){return ky.CancellationToken}});var Ly=Ty();Object.defineProperty(w,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return Ly.SharedArraySenderStrategy}});Object.defineProperty(w,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return Ly.SharedArrayReceiverStrategy}});var $m=yy();Object.defineProperty(w,"MessageReader",{enumerable:!0,get:function(){return $m.MessageReader}});Object.defineProperty(w,"AbstractMessageReader",{enumerable:!0,get:function(){return $m.AbstractMessageReader}});Object.defineProperty(w,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return $m.ReadableStreamMessageReader}});var Mm=Oy();Object.defineProperty(w,"MessageWriter",{enumerable:!0,get:function(){return Mm.MessageWriter}});Object.defineProperty(w,"AbstractMessageWriter",{enumerable:!0,get:function(){return Mm.AbstractMessageWriter}});Object.defineProperty(w,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Mm.WriteableStreamMessageWriter}});var Vb=Iy();Object.defineProperty(w,"AbstractMessageBuffer",{enumerable:!0,get:function(){return Vb.AbstractMessageBuffer}});var rr=Cy();Object.defineProperty(w,"ConnectionStrategy",{enumerable:!0,get:function(){return rr.ConnectionStrategy}});Object.defineProperty(w,"ConnectionOptions",{enumerable:!0,get:function(){return rr.ConnectionOptions}});Object.defineProperty(w,"NullLogger",{enumerable:!0,get:function(){return rr.NullLogger}});Object.defineProperty(w,"createMessageConnection",{enumerable:!0,get:function(){return rr.createMessageConnection}});Object.defineProperty(w,"ProgressToken",{enumerable:!0,get:function(){return rr.ProgressToken}});Object.defineProperty(w,"ProgressType",{enumerable:!0,get:function(){return rr.ProgressType}});Object.defineProperty(w,"Trace",{enumerable:!0,get:function(){return rr.Trace}});Object.defineProperty(w,"TraceValues",{enumerable:!0,get:function(){return rr.TraceValues}});Object.defineProperty(w,"TraceFormat",{enumerable:!0,get:function(){return rr.TraceFormat}});Object.defineProperty(w,"SetTraceNotification",{enumerable:!0,get:function(){return rr.SetTraceNotification}});Object.defineProperty(w,"LogTraceNotification",{enumerable:!0,get:function(){return rr.LogTraceNotification}});Object.defineProperty(w,"ConnectionErrors",{enumerable:!0,get:function(){return rr.ConnectionErrors}});Object.defineProperty(w,"ConnectionError",{enumerable:!0,get:function(){return rr.ConnectionError}});Object.defineProperty(w,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return rr.CancellationReceiverStrategy}});Object.defineProperty(w,"CancellationSenderStrategy",{enumerable:!0,get:function(){return rr.CancellationSenderStrategy}});Object.defineProperty(w,"CancellationStrategy",{enumerable:!0,get:function(){return rr.CancellationStrategy}});Object.defineProperty(w,"MessageStrategy",{enumerable:!0,get:function(){return rr.MessageStrategy}});var Gb=Ei();w.RAL=Gb.default});var $y=X(Wm=>{"use strict";Object.defineProperty(Wm,"__esModule",{value:!0});var wy=require("util"),Zn=Xu(),Ju=class t extends Zn.AbstractMessageBuffer{constructor(e="utf-8"){super(e)}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return Buffer.from(e,r)}toString(e,r){return e instanceof Buffer?e.toString(r):new wy.TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e instanceof Buffer?e:Buffer.from(e):e instanceof Buffer?e.slice(0,r):Buffer.from(e,0,r)}allocNative(e){return Buffer.allocUnsafe(e)}};Ju.emptyBuffer=Buffer.allocUnsafe(0);var Fm=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),Zn.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),Zn.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),Zn.Disposable.create(()=>this.stream.off("end",e))}onData(e){return this.stream.on("data",e),Zn.Disposable.create(()=>this.stream.off("data",e))}},Um=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),Zn.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),Zn.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),Zn.Disposable.create(()=>this.stream.off("end",e))}write(e,r){return new Promise((n,i)=>{let o=s=>{s==null?n():i(s)};typeof e=="string"?this.stream.write(e,r,o):this.stream.write(e,o)})}end(){this.stream.end()}},Py=Object.freeze({messageBuffer:Object.freeze({create:t=>new Ju(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{try{return Promise.resolve(Buffer.from(JSON.stringify(t,void 0,0),e.charset))}catch(r){return Promise.reject(r)}}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{try{return t instanceof Buffer?Promise.resolve(JSON.parse(t.toString(e.charset))):Promise.resolve(JSON.parse(new wy.TextDecoder(e.charset).decode(t)))}catch(r){return Promise.reject(r)}}})}),stream:Object.freeze({asReadableStream:t=>new Fm(t),asWritableStream:t=>new Um(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setImmediate(t,...e);return{dispose:()=>clearImmediate(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Bm(){return Py}(function(t){function e(){Zn.RAL.install(Py)}t.install=e})(Bm||(Bm={}));Wm.default=Bm});var po=X(Ie=>{"use strict";var jb=Ie&&Ie.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),qb=Ie&&Ie.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&jb(e,t,r)};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.createMessageConnection=Ie.createServerSocketTransport=Ie.createClientSocketTransport=Ie.createServerPipeTransport=Ie.createClientPipeTransport=Ie.generateRandomPipeName=Ie.StreamMessageWriter=Ie.StreamMessageReader=Ie.SocketMessageWriter=Ie.SocketMessageReader=Ie.PortMessageWriter=Ie.PortMessageReader=Ie.IPCMessageWriter=Ie.IPCMessageReader=void 0;var ms=$y();ms.default.install();var My=require("path"),Hb=require("os"),Kb=require("crypto"),ec=require("net"),Yr=Xu();qb(Xu(),Ie);var Vm=class extends Yr.AbstractMessageReader{constructor(e){super(),this.process=e;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose())}listen(e){return this.process.on("message",e),Yr.Disposable.create(()=>this.process.off("message",e))}};Ie.IPCMessageReader=Vm;var Gm=class extends Yr.AbstractMessageWriter{constructor(e){super(),this.process=e,this.errorCount=0;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose)}write(e){try{return typeof this.process.send=="function"&&this.process.send(e,void 0,void 0,r=>{r?(this.errorCount++,this.handleError(r,e)):this.errorCount=0}),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Ie.IPCMessageWriter=Gm;var jm=class extends Yr.AbstractMessageReader{constructor(e){super(),this.onData=new Yr.Emitter,e.on("close",()=>this.fireClose),e.on("error",r=>this.fireError(r)),e.on("message",r=>{this.onData.fire(r)})}listen(e){return this.onData.event(e)}};Ie.PortMessageReader=jm;var qm=class extends Yr.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.on("close",()=>this.fireClose()),e.on("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Ie.PortMessageWriter=qm;var co=class extends Yr.ReadableStreamMessageReader{constructor(e,r="utf-8"){super((0,ms.default)().stream.asReadableStream(e),r)}};Ie.SocketMessageReader=co;var fo=class extends Yr.WriteableStreamMessageWriter{constructor(e,r){super((0,ms.default)().stream.asWritableStream(e),r),this.socket=e}dispose(){super.dispose(),this.socket.destroy()}};Ie.SocketMessageWriter=fo;var Qu=class extends Yr.ReadableStreamMessageReader{constructor(e,r){super((0,ms.default)().stream.asReadableStream(e),r)}};Ie.StreamMessageReader=Qu;var Zu=class extends Yr.WriteableStreamMessageWriter{constructor(e,r){super((0,ms.default)().stream.asWritableStream(e),r)}};Ie.StreamMessageWriter=Zu;var Fy=process.env.XDG_RUNTIME_DIR,zb=new Map([["linux",107],["darwin",103]]);function Yb(){let t=(0,Kb.randomBytes)(21).toString("hex");if(process.platform==="win32")return`\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`;let e;Fy?e=My.join(Fy,`vscode-ipc-${t}.sock`):e=My.join(Hb.tmpdir(),`vscode-${t}.sock`);let r=zb.get(process.platform);return r!==void 0&&e.length>r&&(0,ms.default)().console.warn(`WARNING: IPC handle "${e}" is longer than ${r} characters.`),e}Ie.generateRandomPipeName=Yb;function Xb(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,ec.createServer)(a=>{s.close(),r([new co(a,e),new fo(a,e)])});s.on("error",o),s.listen(t,()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Ie.createClientPipeTransport=Xb;function Jb(t,e="utf-8"){let r=(0,ec.createConnection)(t);return[new co(r,e),new fo(r,e)]}Ie.createServerPipeTransport=Jb;function Qb(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,ec.createServer)(a=>{s.close(),r([new co(a,e),new fo(a,e)])});s.on("error",o),s.listen(t,"127.0.0.1",()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Ie.createClientSocketTransport=Qb;function Zb(t,e="utf-8"){let r=(0,ec.createConnection)(t,"127.0.0.1");return[new co(r,e),new fo(r,e)]}Ie.createServerSocketTransport=Zb;function ek(t){let e=t;return e.read!==void 0&&e.addListener!==void 0}function tk(t){let e=t;return e.write!==void 0&&e.addListener!==void 0}function rk(t,e,r,n){r||(r=Yr.NullLogger);let i=ek(t)?new Qu(t):t,o=tk(e)?new Zu(e):e;return Yr.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Yr.createMessageConnection)(i,o,r,n)}Ie.createMessageConnection=rk});var Hm=X((JG,Uy)=>{"use strict";Uy.exports=po()});var rc=X((By,tc)=>{(function(t){if(typeof tc=="object"&&typeof tc.exports=="object"){var e=t(require,By);e!==void 0&&(tc.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlineCompletionContext=e.SelectedCompletionInfo=e.InlineCompletionTriggerKind=e.InlineCompletionList=e.InlineCompletionItem=e.StringValue=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(h){function x(O){return typeof O=="string"}h.is=x})(r||(e.DocumentUri=r={}));var n;(function(h){function x(O){return typeof O=="string"}h.is=x})(n||(e.URI=n={}));var i;(function(h){h.MIN_VALUE=-2147483648,h.MAX_VALUE=2147483647;function x(O){return typeof O=="number"&&h.MIN_VALUE<=O&&O<=h.MAX_VALUE}h.is=x})(i||(e.integer=i={}));var o;(function(h){h.MIN_VALUE=0,h.MAX_VALUE=2147483647;function x(O){return typeof O=="number"&&h.MIN_VALUE<=O&&O<=h.MAX_VALUE}h.is=x})(o||(e.uinteger=o={}));var s;(function(h){function x(g,p){return g===Number.MAX_VALUE&&(g=o.MAX_VALUE),p===Number.MAX_VALUE&&(p=o.MAX_VALUE),{line:g,character:p}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&D.uinteger(p.line)&&D.uinteger(p.character)}h.is=O})(s||(e.Position=s={}));var a;(function(h){function x(g,p,S,B){if(D.uinteger(g)&&D.uinteger(p)&&D.uinteger(S)&&D.uinteger(B))return{start:s.create(g,p),end:s.create(S,B)};if(s.is(g)&&s.is(p))return{start:g,end:p};throw new Error("Range#create called with invalid arguments[".concat(g,", ").concat(p,", ").concat(S,", ").concat(B,"]"))}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&s.is(p.start)&&s.is(p.end)}h.is=O})(a||(e.Range=a={}));var l;(function(h){function x(g,p){return{uri:g,range:p}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.range)&&(D.string(p.uri)||D.undefined(p.uri))}h.is=O})(l||(e.Location=l={}));var u;(function(h){function x(g,p,S,B){return{targetUri:g,targetRange:p,targetSelectionRange:S,originSelectionRange:B}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.targetRange)&&D.string(p.targetUri)&&a.is(p.targetSelectionRange)&&(a.is(p.originSelectionRange)||D.undefined(p.originSelectionRange))}h.is=O})(u||(e.LocationLink=u={}));var c;(function(h){function x(g,p,S,B){return{red:g,green:p,blue:S,alpha:B}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&D.numberRange(p.red,0,1)&&D.numberRange(p.green,0,1)&&D.numberRange(p.blue,0,1)&&D.numberRange(p.alpha,0,1)}h.is=O})(c||(e.Color=c={}));var f;(function(h){function x(g,p){return{range:g,color:p}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.range)&&c.is(p.color)}h.is=O})(f||(e.ColorInformation=f={}));var d;(function(h){function x(g,p,S){return{label:g,textEdit:p,additionalTextEdits:S}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&D.string(p.label)&&(D.undefined(p.textEdit)||M.is(p))&&(D.undefined(p.additionalTextEdits)||D.typedArray(p.additionalTextEdits,M.is))}h.is=O})(d||(e.ColorPresentation=d={}));var m;(function(h){h.Comment="comment",h.Imports="imports",h.Region="region"})(m||(e.FoldingRangeKind=m={}));var v;(function(h){function x(g,p,S,B,he,Ot){var ze={startLine:g,endLine:p};return D.defined(S)&&(ze.startCharacter=S),D.defined(B)&&(ze.endCharacter=B),D.defined(he)&&(ze.kind=he),D.defined(Ot)&&(ze.collapsedText=Ot),ze}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&D.uinteger(p.startLine)&&D.uinteger(p.startLine)&&(D.undefined(p.startCharacter)||D.uinteger(p.startCharacter))&&(D.undefined(p.endCharacter)||D.uinteger(p.endCharacter))&&(D.undefined(p.kind)||D.string(p.kind))}h.is=O})(v||(e.FoldingRange=v={}));var N;(function(h){function x(g,p){return{location:g,message:p}}h.create=x;function O(g){var p=g;return D.defined(p)&&l.is(p.location)&&D.string(p.message)}h.is=O})(N||(e.DiagnosticRelatedInformation=N={}));var E;(function(h){h.Error=1,h.Warning=2,h.Information=3,h.Hint=4})(E||(e.DiagnosticSeverity=E={}));var I;(function(h){h.Unnecessary=1,h.Deprecated=2})(I||(e.DiagnosticTag=I={}));var _;(function(h){function x(O){var g=O;return D.objectLiteral(g)&&D.string(g.href)}h.is=x})(_||(e.CodeDescription=_={}));var T;(function(h){function x(g,p,S,B,he,Ot){var ze={range:g,message:p};return D.defined(S)&&(ze.severity=S),D.defined(B)&&(ze.code=B),D.defined(he)&&(ze.source=he),D.defined(Ot)&&(ze.relatedInformation=Ot),ze}h.create=x;function O(g){var p,S=g;return D.defined(S)&&a.is(S.range)&&D.string(S.message)&&(D.number(S.severity)||D.undefined(S.severity))&&(D.integer(S.code)||D.string(S.code)||D.undefined(S.code))&&(D.undefined(S.codeDescription)||D.string((p=S.codeDescription)===null||p===void 0?void 0:p.href))&&(D.string(S.source)||D.undefined(S.source))&&(D.undefined(S.relatedInformation)||D.typedArray(S.relatedInformation,N.is))}h.is=O})(T||(e.Diagnostic=T={}));var k;(function(h){function x(g,p){for(var S=[],B=2;B<arguments.length;B++)S[B-2]=arguments[B];var he={title:g,command:p};return D.defined(S)&&S.length>0&&(he.arguments=S),he}h.create=x;function O(g){var p=g;return D.defined(p)&&D.string(p.title)&&D.string(p.command)}h.is=O})(k||(e.Command=k={}));var M;(function(h){function x(S,B){return{range:S,newText:B}}h.replace=x;function O(S,B){return{range:{start:S,end:S},newText:B}}h.insert=O;function g(S){return{range:S,newText:""}}h.del=g;function p(S){var B=S;return D.objectLiteral(B)&&D.string(B.newText)&&a.is(B.range)}h.is=p})(M||(e.TextEdit=M={}));var Q;(function(h){function x(g,p,S){var B={label:g};return p!==void 0&&(B.needsConfirmation=p),S!==void 0&&(B.description=S),B}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&D.string(p.label)&&(D.boolean(p.needsConfirmation)||p.needsConfirmation===void 0)&&(D.string(p.description)||p.description===void 0)}h.is=O})(Q||(e.ChangeAnnotation=Q={}));var ae;(function(h){function x(O){var g=O;return D.string(g)}h.is=x})(ae||(e.ChangeAnnotationIdentifier=ae={}));var le;(function(h){function x(S,B,he){return{range:S,newText:B,annotationId:he}}h.replace=x;function O(S,B,he){return{range:{start:S,end:S},newText:B,annotationId:he}}h.insert=O;function g(S,B){return{range:S,newText:"",annotationId:B}}h.del=g;function p(S){var B=S;return M.is(B)&&(Q.is(B.annotationId)||ae.is(B.annotationId))}h.is=p})(le||(e.AnnotatedTextEdit=le={}));var Ce;(function(h){function x(g,p){return{textDocument:g,edits:p}}h.create=x;function O(g){var p=g;return D.defined(p)&&ve.is(p.textDocument)&&Array.isArray(p.edits)}h.is=O})(Ce||(e.TextDocumentEdit=Ce={}));var Pe;(function(h){function x(g,p,S){var B={kind:"create",uri:g};return p!==void 0&&(p.overwrite!==void 0||p.ignoreIfExists!==void 0)&&(B.options=p),S!==void 0&&(B.annotationId=S),B}h.create=x;function O(g){var p=g;return p&&p.kind==="create"&&D.string(p.uri)&&(p.options===void 0||(p.options.overwrite===void 0||D.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||D.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ae.is(p.annotationId))}h.is=O})(Pe||(e.CreateFile=Pe={}));var W;(function(h){function x(g,p,S,B){var he={kind:"rename",oldUri:g,newUri:p};return S!==void 0&&(S.overwrite!==void 0||S.ignoreIfExists!==void 0)&&(he.options=S),B!==void 0&&(he.annotationId=B),he}h.create=x;function O(g){var p=g;return p&&p.kind==="rename"&&D.string(p.oldUri)&&D.string(p.newUri)&&(p.options===void 0||(p.options.overwrite===void 0||D.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||D.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ae.is(p.annotationId))}h.is=O})(W||(e.RenameFile=W={}));var L;(function(h){function x(g,p,S){var B={kind:"delete",uri:g};return p!==void 0&&(p.recursive!==void 0||p.ignoreIfNotExists!==void 0)&&(B.options=p),S!==void 0&&(B.annotationId=S),B}h.create=x;function O(g){var p=g;return p&&p.kind==="delete"&&D.string(p.uri)&&(p.options===void 0||(p.options.recursive===void 0||D.boolean(p.options.recursive))&&(p.options.ignoreIfNotExists===void 0||D.boolean(p.options.ignoreIfNotExists)))&&(p.annotationId===void 0||ae.is(p.annotationId))}h.is=O})(L||(e.DeleteFile=L={}));var j;(function(h){function x(O){var g=O;return g&&(g.changes!==void 0||g.documentChanges!==void 0)&&(g.documentChanges===void 0||g.documentChanges.every(function(p){return D.string(p.kind)?Pe.is(p)||W.is(p)||L.is(p):Ce.is(p)}))}h.is=x})(j||(e.WorkspaceEdit=j={}));var H=function(){function h(x,O){this.edits=x,this.changeAnnotations=O}return h.prototype.insert=function(x,O,g){var p,S;if(g===void 0?p=M.insert(x,O):ae.is(g)?(S=g,p=le.insert(x,O,g)):(this.assertChangeAnnotations(this.changeAnnotations),S=this.changeAnnotations.manage(g),p=le.insert(x,O,S)),this.edits.push(p),S!==void 0)return S},h.prototype.replace=function(x,O,g){var p,S;if(g===void 0?p=M.replace(x,O):ae.is(g)?(S=g,p=le.replace(x,O,g)):(this.assertChangeAnnotations(this.changeAnnotations),S=this.changeAnnotations.manage(g),p=le.replace(x,O,S)),this.edits.push(p),S!==void 0)return S},h.prototype.delete=function(x,O){var g,p;if(O===void 0?g=M.del(x):ae.is(O)?(p=O,g=le.del(x,O)):(this.assertChangeAnnotations(this.changeAnnotations),p=this.changeAnnotations.manage(O),g=le.del(x,p)),this.edits.push(g),p!==void 0)return p},h.prototype.add=function(x){this.edits.push(x)},h.prototype.all=function(){return this.edits},h.prototype.clear=function(){this.edits.splice(0,this.edits.length)},h.prototype.assertChangeAnnotations=function(x){if(x===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},h}(),Te=function(){function h(x){this._annotations=x===void 0?Object.create(null):x,this._counter=0,this._size=0}return h.prototype.all=function(){return this._annotations},Object.defineProperty(h.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),h.prototype.manage=function(x,O){var g;if(ae.is(x)?g=x:(g=this.nextId(),O=x),this._annotations[g]!==void 0)throw new Error("Id ".concat(g," is already in use."));if(O===void 0)throw new Error("No annotation provided for id ".concat(g));return this._annotations[g]=O,this._size++,g},h.prototype.nextId=function(){return this._counter++,this._counter.toString()},h}(),ue=function(){function h(x){var O=this;this._textEditChanges=Object.create(null),x!==void 0?(this._workspaceEdit=x,x.documentChanges?(this._changeAnnotations=new Te(x.changeAnnotations),x.changeAnnotations=this._changeAnnotations.all(),x.documentChanges.forEach(function(g){if(Ce.is(g)){var p=new H(g.edits,O._changeAnnotations);O._textEditChanges[g.textDocument.uri]=p}})):x.changes&&Object.keys(x.changes).forEach(function(g){var p=new H(x.changes[g]);O._textEditChanges[g]=p})):this._workspaceEdit={}}return Object.defineProperty(h.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),h.prototype.getTextEditChange=function(x){if(ve.is(x)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var O={uri:x.uri,version:x.version},g=this._textEditChanges[O.uri];if(!g){var p=[],S={textDocument:O,edits:p};this._workspaceEdit.documentChanges.push(S),g=new H(p,this._changeAnnotations),this._textEditChanges[O.uri]=g}return g}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var g=this._textEditChanges[x];if(!g){var p=[];this._workspaceEdit.changes[x]=p,g=new H(p),this._textEditChanges[x]=g}return g}},h.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Te,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},h.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},h.prototype.createFile=function(x,O,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;Q.is(O)||ae.is(O)?p=O:g=O;var S,B;if(p===void 0?S=Pe.create(x,g):(B=ae.is(p)?p:this._changeAnnotations.manage(p),S=Pe.create(x,g,B)),this._workspaceEdit.documentChanges.push(S),B!==void 0)return B},h.prototype.renameFile=function(x,O,g,p){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var S;Q.is(g)||ae.is(g)?S=g:p=g;var B,he;if(S===void 0?B=W.create(x,O,p):(he=ae.is(S)?S:this._changeAnnotations.manage(S),B=W.create(x,O,p,he)),this._workspaceEdit.documentChanges.push(B),he!==void 0)return he},h.prototype.deleteFile=function(x,O,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;Q.is(O)||ae.is(O)?p=O:g=O;var S,B;if(p===void 0?S=L.create(x,g):(B=ae.is(p)?p:this._changeAnnotations.manage(p),S=L.create(x,g,B)),this._workspaceEdit.documentChanges.push(S),B!==void 0)return B},h}();e.WorkspaceChange=ue;var G;(function(h){function x(g){return{uri:g}}h.create=x;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)}h.is=O})(G||(e.TextDocumentIdentifier=G={}));var U;(function(h){function x(g,p){return{uri:g,version:p}}h.create=x;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)&&D.integer(p.version)}h.is=O})(U||(e.VersionedTextDocumentIdentifier=U={}));var ve;(function(h){function x(g,p){return{uri:g,version:p}}h.create=x;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)&&(p.version===null||D.integer(p.version))}h.is=O})(ve||(e.OptionalVersionedTextDocumentIdentifier=ve={}));var Re;(function(h){function x(g,p,S,B){return{uri:g,languageId:p,version:S,text:B}}h.create=x;function O(g){var p=g;return D.defined(p)&&D.string(p.uri)&&D.string(p.languageId)&&D.integer(p.version)&&D.string(p.text)}h.is=O})(Re||(e.TextDocumentItem=Re={}));var Ae;(function(h){h.PlainText="plaintext",h.Markdown="markdown";function x(O){var g=O;return g===h.PlainText||g===h.Markdown}h.is=x})(Ae||(e.MarkupKind=Ae={}));var tr;(function(h){function x(O){var g=O;return D.objectLiteral(O)&&Ae.is(g.kind)&&D.string(g.value)}h.is=x})(tr||(e.MarkupContent=tr={}));var Ri;(function(h){h.Text=1,h.Method=2,h.Function=3,h.Constructor=4,h.Field=5,h.Variable=6,h.Class=7,h.Interface=8,h.Module=9,h.Property=10,h.Unit=11,h.Value=12,h.Enum=13,h.Keyword=14,h.Snippet=15,h.Color=16,h.File=17,h.Reference=18,h.Folder=19,h.EnumMember=20,h.Constant=21,h.Struct=22,h.Event=23,h.Operator=24,h.TypeParameter=25})(Ri||(e.CompletionItemKind=Ri={}));var Ge;(function(h){h.PlainText=1,h.Snippet=2})(Ge||(e.InsertTextFormat=Ge={}));var jt;(function(h){h.Deprecated=1})(jt||(e.CompletionItemTag=jt={}));var Xn;(function(h){function x(g,p,S){return{newText:g,insert:p,replace:S}}h.create=x;function O(g){var p=g;return p&&D.string(p.newText)&&a.is(p.insert)&&a.is(p.replace)}h.is=O})(Xn||(e.InsertReplaceEdit=Xn={}));var dt;(function(h){h.asIs=1,h.adjustIndentation=2})(dt||(e.InsertTextMode=dt={}));var qt;(function(h){function x(O){var g=O;return g&&(D.string(g.detail)||g.detail===void 0)&&(D.string(g.description)||g.description===void 0)}h.is=x})(qt||(e.CompletionItemLabelDetails=qt={}));var bt;(function(h){function x(O){return{label:O}}h.create=x})(bt||(e.CompletionItem=bt={}));var kt;(function(h){function x(O,g){return{items:O||[],isIncomplete:!!g}}h.create=x})(kt||(e.CompletionList=kt={}));var pt;(function(h){function x(g){return g.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}h.fromPlainText=x;function O(g){var p=g;return D.string(p)||D.objectLiteral(p)&&D.string(p.language)&&D.string(p.value)}h.is=O})(pt||(e.MarkedString=pt={}));var mt;(function(h){function x(O){var g=O;return!!g&&D.objectLiteral(g)&&(tr.is(g.contents)||pt.is(g.contents)||D.typedArray(g.contents,pt.is))&&(O.range===void 0||a.is(O.range))}h.is=x})(mt||(e.Hover=mt={}));var lr;(function(h){function x(O,g){return g?{label:O,documentation:g}:{label:O}}h.create=x})(lr||(e.ParameterInformation=lr={}));var _r;(function(h){function x(O,g){for(var p=[],S=2;S<arguments.length;S++)p[S-2]=arguments[S];var B={label:O};return D.defined(g)&&(B.documentation=g),D.defined(p)?B.parameters=p:B.parameters=[],B}h.create=x})(_r||(e.SignatureInformation=_r={}));var Hr;(function(h){h.Text=1,h.Read=2,h.Write=3})(Hr||(e.DocumentHighlightKind=Hr={}));var Jn;(function(h){function x(O,g){var p={range:O};return D.number(g)&&(p.kind=g),p}h.create=x})(Jn||(e.DocumentHighlight=Jn={}));var xi;(function(h){h.File=1,h.Module=2,h.Namespace=3,h.Package=4,h.Class=5,h.Method=6,h.Property=7,h.Field=8,h.Constructor=9,h.Enum=10,h.Interface=11,h.Function=12,h.Variable=13,h.Constant=14,h.String=15,h.Number=16,h.Boolean=17,h.Array=18,h.Object=19,h.Key=20,h.Null=21,h.EnumMember=22,h.Struct=23,h.Event=24,h.Operator=25,h.TypeParameter=26})(xi||(e.SymbolKind=xi={}));var ns;(function(h){h.Deprecated=1})(ns||(e.SymbolTag=ns={}));var Kr;(function(h){function x(O,g,p,S,B){var he={name:O,kind:g,location:{uri:S,range:p}};return B&&(he.containerName=B),he}h.create=x})(Kr||(e.SymbolInformation=Kr={}));var Dn;(function(h){function x(O,g,p,S){return S!==void 0?{name:O,kind:g,location:{uri:p,range:S}}:{name:O,kind:g,location:{uri:p}}}h.create=x})(Dn||(e.WorkspaceSymbol=Dn={}));var is;(function(h){function x(g,p,S,B,he,Ot){var ze={name:g,detail:p,kind:S,range:B,selectionRange:he};return Ot!==void 0&&(ze.children=Ot),ze}h.create=x;function O(g){var p=g;return p&&D.string(p.name)&&D.number(p.kind)&&a.is(p.range)&&a.is(p.selectionRange)&&(p.detail===void 0||D.string(p.detail))&&(p.deprecated===void 0||D.boolean(p.deprecated))&&(p.children===void 0||Array.isArray(p.children))&&(p.tags===void 0||Array.isArray(p.tags))}h.is=O})(is||(e.DocumentSymbol=is={}));var os;(function(h){h.Empty="",h.QuickFix="quickfix",h.Refactor="refactor",h.RefactorExtract="refactor.extract",h.RefactorInline="refactor.inline",h.RefactorRewrite="refactor.rewrite",h.Source="source",h.SourceOrganizeImports="source.organizeImports",h.SourceFixAll="source.fixAll"})(os||(e.CodeActionKind=os={}));var Ar;(function(h){h.Invoked=1,h.Automatic=2})(Ar||(e.CodeActionTriggerKind=Ar={}));var A;(function(h){function x(g,p,S){var B={diagnostics:g};return p!=null&&(B.only=p),S!=null&&(B.triggerKind=S),B}h.create=x;function O(g){var p=g;return D.defined(p)&&D.typedArray(p.diagnostics,T.is)&&(p.only===void 0||D.typedArray(p.only,D.string))&&(p.triggerKind===void 0||p.triggerKind===Ar.Invoked||p.triggerKind===Ar.Automatic)}h.is=O})(A||(e.CodeActionContext=A={}));var P;(function(h){function x(g,p,S){var B={title:g},he=!0;return typeof p=="string"?(he=!1,B.kind=p):k.is(p)?B.command=p:B.edit=p,he&&S!==void 0&&(B.kind=S),B}h.create=x;function O(g){var p=g;return p&&D.string(p.title)&&(p.diagnostics===void 0||D.typedArray(p.diagnostics,T.is))&&(p.kind===void 0||D.string(p.kind))&&(p.edit!==void 0||p.command!==void 0)&&(p.command===void 0||k.is(p.command))&&(p.isPreferred===void 0||D.boolean(p.isPreferred))&&(p.edit===void 0||j.is(p.edit))}h.is=O})(P||(e.CodeAction=P={}));var V;(function(h){function x(g,p){var S={range:g};return D.defined(p)&&(S.data=p),S}h.create=x;function O(g){var p=g;return D.defined(p)&&a.is(p.range)&&(D.undefined(p.command)||k.is(p.command))}h.is=O})(V||(e.CodeLens=V={}));var z;(function(h){function x(g,p){return{tabSize:g,insertSpaces:p}}h.create=x;function O(g){var p=g;return D.defined(p)&&D.uinteger(p.tabSize)&&D.boolean(p.insertSpaces)}h.is=O})(z||(e.FormattingOptions=z={}));var Z;(function(h){function x(g,p,S){return{range:g,target:p,data:S}}h.create=x;function O(g){var p=g;return D.defined(p)&&a.is(p.range)&&(D.undefined(p.target)||D.string(p.target))}h.is=O})(Z||(e.DocumentLink=Z={}));var R;(function(h){function x(g,p){return{range:g,parent:p}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&a.is(p.range)&&(p.parent===void 0||h.is(p.parent))}h.is=O})(R||(e.SelectionRange=R={}));var b;(function(h){h.namespace="namespace",h.type="type",h.class="class",h.enum="enum",h.interface="interface",h.struct="struct",h.typeParameter="typeParameter",h.parameter="parameter",h.variable="variable",h.property="property",h.enumMember="enumMember",h.event="event",h.function="function",h.method="method",h.macro="macro",h.keyword="keyword",h.modifier="modifier",h.comment="comment",h.string="string",h.number="number",h.regexp="regexp",h.operator="operator",h.decorator="decorator"})(b||(e.SemanticTokenTypes=b={}));var $;(function(h){h.declaration="declaration",h.definition="definition",h.readonly="readonly",h.static="static",h.deprecated="deprecated",h.abstract="abstract",h.async="async",h.modification="modification",h.documentation="documentation",h.defaultLibrary="defaultLibrary"})($||(e.SemanticTokenModifiers=$={}));var F;(function(h){function x(O){var g=O;return D.objectLiteral(g)&&(g.resultId===void 0||typeof g.resultId=="string")&&Array.isArray(g.data)&&(g.data.length===0||typeof g.data[0]=="number")}h.is=x})(F||(e.SemanticTokens=F={}));var ne;(function(h){function x(g,p){return{range:g,text:p}}h.create=x;function O(g){var p=g;return p!=null&&a.is(p.range)&&D.string(p.text)}h.is=O})(ne||(e.InlineValueText=ne={}));var re;(function(h){function x(g,p,S){return{range:g,variableName:p,caseSensitiveLookup:S}}h.create=x;function O(g){var p=g;return p!=null&&a.is(p.range)&&D.boolean(p.caseSensitiveLookup)&&(D.string(p.variableName)||p.variableName===void 0)}h.is=O})(re||(e.InlineValueVariableLookup=re={}));var xe;(function(h){function x(g,p){return{range:g,expression:p}}h.create=x;function O(g){var p=g;return p!=null&&a.is(p.range)&&(D.string(p.expression)||p.expression===void 0)}h.is=O})(xe||(e.InlineValueEvaluatableExpression=xe={}));var je;(function(h){function x(g,p){return{frameId:g,stoppedLocation:p}}h.create=x;function O(g){var p=g;return D.defined(p)&&a.is(g.stoppedLocation)}h.is=O})(je||(e.InlineValueContext=je={}));var Lt;(function(h){h.Type=1,h.Parameter=2;function x(O){return O===1||O===2}h.is=x})(Lt||(e.InlayHintKind=Lt={}));var be;(function(h){function x(g){return{value:g}}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&(p.tooltip===void 0||D.string(p.tooltip)||tr.is(p.tooltip))&&(p.location===void 0||l.is(p.location))&&(p.command===void 0||k.is(p.command))}h.is=O})(be||(e.InlayHintLabelPart=be={}));var it;(function(h){function x(g,p,S){var B={position:g,label:p};return S!==void 0&&(B.kind=S),B}h.create=x;function O(g){var p=g;return D.objectLiteral(p)&&s.is(p.position)&&(D.string(p.label)||D.typedArray(p.label,be.is))&&(p.kind===void 0||Lt.is(p.kind))&&p.textEdits===void 0||D.typedArray(p.textEdits,M.is)&&(p.tooltip===void 0||D.string(p.tooltip)||tr.is(p.tooltip))&&(p.paddingLeft===void 0||D.boolean(p.paddingLeft))&&(p.paddingRight===void 0||D.boolean(p.paddingRight))}h.is=O})(it||(e.InlayHint=it={}));var Ue;(function(h){function x(O){return{kind:"snippet",value:O}}h.createSnippet=x})(Ue||(e.StringValue=Ue={}));var ot;(function(h){function x(O,g,p,S){return{insertText:O,filterText:g,range:p,command:S}}h.create=x})(ot||(e.InlineCompletionItem=ot={}));var wt;(function(h){function x(O){return{items:O}}h.create=x})(wt||(e.InlineCompletionList=wt={}));var Cu;(function(h){h.Invoked=0,h.Automatic=1})(Cu||(e.InlineCompletionTriggerKind=Cu={}));var ty;(function(h){function x(O,g){return{range:O,text:g}}h.create=x})(ty||(e.SelectedCompletionInfo=ty={}));var ry;(function(h){function x(O,g){return{triggerKind:O,selectedCompletionInfo:g}}h.create=x})(ry||(e.InlineCompletionContext=ry={}));var ny;(function(h){function x(O){var g=O;return D.objectLiteral(g)&&n.is(g.uri)&&D.string(g.name)}h.is=x})(ny||(e.WorkspaceFolder=ny={})),e.EOL=[`
`,`\r
`,"\r"];var iy;(function(h){function x(S,B,he,Ot){return new ub(S,B,he,Ot)}h.create=x;function O(S){var B=S;return!!(D.defined(B)&&D.string(B.uri)&&(D.undefined(B.languageId)||D.string(B.languageId))&&D.uinteger(B.lineCount)&&D.func(B.getText)&&D.func(B.positionAt)&&D.func(B.offsetAt))}h.is=O;function g(S,B){for(var he=S.getText(),Ot=p(B,function(ss,bu){var oy=ss.range.start.line-bu.range.start.line;return oy===0?ss.range.start.character-bu.range.start.character:oy}),ze=he.length,mn=Ot.length-1;mn>=0;mn--){var hn=Ot[mn],Qn=S.offsetAt(hn.range.start),Oe=S.offsetAt(hn.range.end);if(Oe<=ze)he=he.substring(0,Qn)+hn.newText+he.substring(Oe,he.length);else throw new Error("Overlapping edit");ze=Qn}return he}h.applyEdits=g;function p(S,B){if(S.length<=1)return S;var he=S.length/2|0,Ot=S.slice(0,he),ze=S.slice(he);p(Ot,B),p(ze,B);for(var mn=0,hn=0,Qn=0;mn<Ot.length&&hn<ze.length;){var Oe=B(Ot[mn],ze[hn]);Oe<=0?S[Qn++]=Ot[mn++]:S[Qn++]=ze[hn++]}for(;mn<Ot.length;)S[Qn++]=Ot[mn++];for(;hn<ze.length;)S[Qn++]=ze[hn++];return S}})(iy||(e.TextDocument=iy={}));var ub=function(){function h(x,O,g,p){this._uri=x,this._languageId=O,this._version=g,this._content=p,this._lineOffsets=void 0}return Object.defineProperty(h.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),h.prototype.getText=function(x){if(x){var O=this.offsetAt(x.start),g=this.offsetAt(x.end);return this._content.substring(O,g)}return this._content},h.prototype.update=function(x,O){this._content=x.text,this._version=O,this._lineOffsets=void 0},h.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var x=[],O=this._content,g=!0,p=0;p<O.length;p++){g&&(x.push(p),g=!1);var S=O.charAt(p);g=S==="\r"||S===`
`,S==="\r"&&p+1<O.length&&O.charAt(p+1)===`
`&&p++}g&&O.length>0&&x.push(O.length),this._lineOffsets=x}return this._lineOffsets},h.prototype.positionAt=function(x){x=Math.max(Math.min(x,this._content.length),0);var O=this.getLineOffsets(),g=0,p=O.length;if(p===0)return s.create(0,x);for(;g<p;){var S=Math.floor((g+p)/2);O[S]>x?p=S:g=S+1}var B=g-1;return s.create(B,x-O[B])},h.prototype.offsetAt=function(x){var O=this.getLineOffsets();if(x.line>=O.length)return this._content.length;if(x.line<0)return 0;var g=O[x.line],p=x.line+1<O.length?O[x.line+1]:this._content.length;return Math.max(Math.min(g+x.character,p),g)},Object.defineProperty(h.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),h}(),D;(function(h){var x=Object.prototype.toString;function O(Oe){return typeof Oe!="undefined"}h.defined=O;function g(Oe){return typeof Oe=="undefined"}h.undefined=g;function p(Oe){return Oe===!0||Oe===!1}h.boolean=p;function S(Oe){return x.call(Oe)==="[object String]"}h.string=S;function B(Oe){return x.call(Oe)==="[object Number]"}h.number=B;function he(Oe,ss,bu){return x.call(Oe)==="[object Number]"&&ss<=Oe&&Oe<=bu}h.numberRange=he;function Ot(Oe){return x.call(Oe)==="[object Number]"&&-2147483648<=Oe&&Oe<=2147483647}h.integer=Ot;function ze(Oe){return x.call(Oe)==="[object Number]"&&0<=Oe&&Oe<=2147483647}h.uinteger=ze;function mn(Oe){return x.call(Oe)==="[object Function]"}h.func=mn;function hn(Oe){return Oe!==null&&typeof Oe=="object"}h.objectLiteral=hn;function Qn(Oe,ss){return Array.isArray(Oe)&&Oe.every(ss)}h.typedArray=Qn})(D||(D={}))})});var st=X(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.ProtocolNotificationType=Cr.ProtocolNotificationType0=Cr.ProtocolRequestType=Cr.ProtocolRequestType0=Cr.RegistrationType=Cr.MessageDirection=void 0;var hs=po(),Wy;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Wy||(Cr.MessageDirection=Wy={}));var Km=class{constructor(e){this.method=e}};Cr.RegistrationType=Km;var zm=class extends hs.RequestType0{constructor(e){super(e)}};Cr.ProtocolRequestType0=zm;var Ym=class extends hs.RequestType{constructor(e){super(e,hs.ParameterStructures.byName)}};Cr.ProtocolRequestType=Ym;var Xm=class extends hs.NotificationType0{constructor(e){super(e)}};Cr.ProtocolNotificationType0=Xm;var Jm=class extends hs.NotificationType{constructor(e){super(e,hs.ParameterStructures.byName)}};Cr.ProtocolNotificationType=Jm});var nc=X(Bt=>{"use strict";Object.defineProperty(Bt,"__esModule",{value:!0});Bt.objectLiteral=Bt.typedArray=Bt.stringArray=Bt.array=Bt.func=Bt.error=Bt.number=Bt.string=Bt.boolean=void 0;function nk(t){return t===!0||t===!1}Bt.boolean=nk;function Vy(t){return typeof t=="string"||t instanceof String}Bt.string=Vy;function ik(t){return typeof t=="number"||t instanceof Number}Bt.number=ik;function ok(t){return t instanceof Error}Bt.error=ok;function sk(t){return typeof t=="function"}Bt.func=sk;function Gy(t){return Array.isArray(t)}Bt.array=Gy;function ak(t){return Gy(t)&&t.every(e=>Vy(e))}Bt.stringArray=ak;function lk(t,e){return Array.isArray(t)&&t.every(e)}Bt.typedArray=lk;function uk(t){return t!==null&&typeof t=="object"}Bt.objectLiteral=uk});var Hy=X(ic=>{"use strict";Object.defineProperty(ic,"__esModule",{value:!0});ic.ImplementationRequest=void 0;var jy=st(),qy;(function(t){t.method="textDocument/implementation",t.messageDirection=jy.MessageDirection.clientToServer,t.type=new jy.ProtocolRequestType(t.method)})(qy||(ic.ImplementationRequest=qy={}))});var Yy=X(oc=>{"use strict";Object.defineProperty(oc,"__esModule",{value:!0});oc.TypeDefinitionRequest=void 0;var Ky=st(),zy;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Ky.MessageDirection.clientToServer,t.type=new Ky.ProtocolRequestType(t.method)})(zy||(oc.TypeDefinitionRequest=zy={}))});var Qy=X(gs=>{"use strict";Object.defineProperty(gs,"__esModule",{value:!0});gs.DidChangeWorkspaceFoldersNotification=gs.WorkspaceFoldersRequest=void 0;var sc=st(),Xy;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=sc.MessageDirection.serverToClient,t.type=new sc.ProtocolRequestType0(t.method)})(Xy||(gs.WorkspaceFoldersRequest=Xy={}));var Jy;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=sc.MessageDirection.clientToServer,t.type=new sc.ProtocolNotificationType(t.method)})(Jy||(gs.DidChangeWorkspaceFoldersNotification=Jy={}))});var tv=X(ac=>{"use strict";Object.defineProperty(ac,"__esModule",{value:!0});ac.ConfigurationRequest=void 0;var Zy=st(),ev;(function(t){t.method="workspace/configuration",t.messageDirection=Zy.MessageDirection.serverToClient,t.type=new Zy.ProtocolRequestType(t.method)})(ev||(ac.ConfigurationRequest=ev={}))});var iv=X(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});Ts.ColorPresentationRequest=Ts.DocumentColorRequest=void 0;var lc=st(),rv;(function(t){t.method="textDocument/documentColor",t.messageDirection=lc.MessageDirection.clientToServer,t.type=new lc.ProtocolRequestType(t.method)})(rv||(Ts.DocumentColorRequest=rv={}));var nv;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=lc.MessageDirection.clientToServer,t.type=new lc.ProtocolRequestType(t.method)})(nv||(Ts.ColorPresentationRequest=nv={}))});var av=X(_s=>{"use strict";Object.defineProperty(_s,"__esModule",{value:!0});_s.FoldingRangeRefreshRequest=_s.FoldingRangeRequest=void 0;var uc=st(),ov;(function(t){t.method="textDocument/foldingRange",t.messageDirection=uc.MessageDirection.clientToServer,t.type=new uc.ProtocolRequestType(t.method)})(ov||(_s.FoldingRangeRequest=ov={}));var sv;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=uc.MessageDirection.serverToClient,t.type=new uc.ProtocolRequestType0(t.method)})(sv||(_s.FoldingRangeRefreshRequest=sv={}))});var cv=X(cc=>{"use strict";Object.defineProperty(cc,"__esModule",{value:!0});cc.DeclarationRequest=void 0;var lv=st(),uv;(function(t){t.method="textDocument/declaration",t.messageDirection=lv.MessageDirection.clientToServer,t.type=new lv.ProtocolRequestType(t.method)})(uv||(cc.DeclarationRequest=uv={}))});var pv=X(fc=>{"use strict";Object.defineProperty(fc,"__esModule",{value:!0});fc.SelectionRangeRequest=void 0;var fv=st(),dv;(function(t){t.method="textDocument/selectionRange",t.messageDirection=fv.MessageDirection.clientToServer,t.type=new fv.ProtocolRequestType(t.method)})(dv||(fc.SelectionRangeRequest=dv={}))});var Tv=X(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.WorkDoneProgressCancelNotification=Di.WorkDoneProgressCreateRequest=Di.WorkDoneProgress=void 0;var ck=po(),dc=st(),mv;(function(t){t.type=new ck.ProgressType;function e(r){return r===t.type}t.is=e})(mv||(Di.WorkDoneProgress=mv={}));var hv;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=dc.MessageDirection.serverToClient,t.type=new dc.ProtocolRequestType(t.method)})(hv||(Di.WorkDoneProgressCreateRequest=hv={}));var gv;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=dc.MessageDirection.clientToServer,t.type=new dc.ProtocolNotificationType(t.method)})(gv||(Di.WorkDoneProgressCancelNotification=gv={}))});var Rv=X(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.CallHierarchyOutgoingCallsRequest=Ci.CallHierarchyIncomingCallsRequest=Ci.CallHierarchyPrepareRequest=void 0;var ys=st(),_v;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=ys.MessageDirection.clientToServer,t.type=new ys.ProtocolRequestType(t.method)})(_v||(Ci.CallHierarchyPrepareRequest=_v={}));var yv;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=ys.MessageDirection.clientToServer,t.type=new ys.ProtocolRequestType(t.method)})(yv||(Ci.CallHierarchyIncomingCallsRequest=yv={}));var vv;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=ys.MessageDirection.clientToServer,t.type=new ys.ProtocolRequestType(t.method)})(vv||(Ci.CallHierarchyOutgoingCallsRequest=vv={}))});var Sv=X(br=>{"use strict";Object.defineProperty(br,"__esModule",{value:!0});br.SemanticTokensRefreshRequest=br.SemanticTokensRangeRequest=br.SemanticTokensDeltaRequest=br.SemanticTokensRequest=br.SemanticTokensRegistrationType=br.TokenFormat=void 0;var ei=st(),xv;(function(t){t.Relative="relative"})(xv||(br.TokenFormat=xv={}));var Ya;(function(t){t.method="textDocument/semanticTokens",t.type=new ei.RegistrationType(t.method)})(Ya||(br.SemanticTokensRegistrationType=Ya={}));var Nv;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=ei.MessageDirection.clientToServer,t.type=new ei.ProtocolRequestType(t.method),t.registrationMethod=Ya.method})(Nv||(br.SemanticTokensRequest=Nv={}));var Ov;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=ei.MessageDirection.clientToServer,t.type=new ei.ProtocolRequestType(t.method),t.registrationMethod=Ya.method})(Ov||(br.SemanticTokensDeltaRequest=Ov={}));var Iv;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=ei.MessageDirection.clientToServer,t.type=new ei.ProtocolRequestType(t.method),t.registrationMethod=Ya.method})(Iv||(br.SemanticTokensRangeRequest=Iv={}));var Ev;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=ei.MessageDirection.serverToClient,t.type=new ei.ProtocolRequestType0(t.method)})(Ev||(br.SemanticTokensRefreshRequest=Ev={}))});var Cv=X(pc=>{"use strict";Object.defineProperty(pc,"__esModule",{value:!0});pc.ShowDocumentRequest=void 0;var Av=st(),Dv;(function(t){t.method="window/showDocument",t.messageDirection=Av.MessageDirection.serverToClient,t.type=new Av.ProtocolRequestType(t.method)})(Dv||(pc.ShowDocumentRequest=Dv={}))});var Lv=X(mc=>{"use strict";Object.defineProperty(mc,"__esModule",{value:!0});mc.LinkedEditingRangeRequest=void 0;var bv=st(),kv;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=bv.MessageDirection.clientToServer,t.type=new bv.ProtocolRequestType(t.method)})(kv||(mc.LinkedEditingRangeRequest=kv={}))});var Wv=X(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.WillDeleteFilesRequest=fr.DidDeleteFilesNotification=fr.DidRenameFilesNotification=fr.WillRenameFilesRequest=fr.DidCreateFilesNotification=fr.WillCreateFilesRequest=fr.FileOperationPatternKind=void 0;var en=st(),wv;(function(t){t.file="file",t.folder="folder"})(wv||(fr.FileOperationPatternKind=wv={}));var Pv;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=en.MessageDirection.clientToServer,t.type=new en.ProtocolRequestType(t.method)})(Pv||(fr.WillCreateFilesRequest=Pv={}));var $v;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=en.MessageDirection.clientToServer,t.type=new en.ProtocolNotificationType(t.method)})($v||(fr.DidCreateFilesNotification=$v={}));var Mv;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=en.MessageDirection.clientToServer,t.type=new en.ProtocolRequestType(t.method)})(Mv||(fr.WillRenameFilesRequest=Mv={}));var Fv;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=en.MessageDirection.clientToServer,t.type=new en.ProtocolNotificationType(t.method)})(Fv||(fr.DidRenameFilesNotification=Fv={}));var Uv;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=en.MessageDirection.clientToServer,t.type=new en.ProtocolNotificationType(t.method)})(Uv||(fr.DidDeleteFilesNotification=Uv={}));var Bv;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=en.MessageDirection.clientToServer,t.type=new en.ProtocolRequestType(t.method)})(Bv||(fr.WillDeleteFilesRequest=Bv={}))});var Hv=X(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.MonikerRequest=bi.MonikerKind=bi.UniquenessLevel=void 0;var Vv=st(),Gv;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Gv||(bi.UniquenessLevel=Gv={}));var jv;(function(t){t.$import="import",t.$export="export",t.local="local"})(jv||(bi.MonikerKind=jv={}));var qv;(function(t){t.method="textDocument/moniker",t.messageDirection=Vv.MessageDirection.clientToServer,t.type=new Vv.ProtocolRequestType(t.method)})(qv||(bi.MonikerRequest=qv={}))});var Xv=X(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.TypeHierarchySubtypesRequest=ki.TypeHierarchySupertypesRequest=ki.TypeHierarchyPrepareRequest=void 0;var vs=st(),Kv;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=vs.MessageDirection.clientToServer,t.type=new vs.ProtocolRequestType(t.method)})(Kv||(ki.TypeHierarchyPrepareRequest=Kv={}));var zv;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=vs.MessageDirection.clientToServer,t.type=new vs.ProtocolRequestType(t.method)})(zv||(ki.TypeHierarchySupertypesRequest=zv={}));var Yv;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=vs.MessageDirection.clientToServer,t.type=new vs.ProtocolRequestType(t.method)})(Yv||(ki.TypeHierarchySubtypesRequest=Yv={}))});var Zv=X(Rs=>{"use strict";Object.defineProperty(Rs,"__esModule",{value:!0});Rs.InlineValueRefreshRequest=Rs.InlineValueRequest=void 0;var hc=st(),Jv;(function(t){t.method="textDocument/inlineValue",t.messageDirection=hc.MessageDirection.clientToServer,t.type=new hc.ProtocolRequestType(t.method)})(Jv||(Rs.InlineValueRequest=Jv={}));var Qv;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=hc.MessageDirection.serverToClient,t.type=new hc.ProtocolRequestType0(t.method)})(Qv||(Rs.InlineValueRefreshRequest=Qv={}))});var nR=X(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.InlayHintRefreshRequest=Li.InlayHintResolveRequest=Li.InlayHintRequest=void 0;var xs=st(),eR;(function(t){t.method="textDocument/inlayHint",t.messageDirection=xs.MessageDirection.clientToServer,t.type=new xs.ProtocolRequestType(t.method)})(eR||(Li.InlayHintRequest=eR={}));var tR;(function(t){t.method="inlayHint/resolve",t.messageDirection=xs.MessageDirection.clientToServer,t.type=new xs.ProtocolRequestType(t.method)})(tR||(Li.InlayHintResolveRequest=tR={}));var rR;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=xs.MessageDirection.serverToClient,t.type=new xs.ProtocolRequestType0(t.method)})(rR||(Li.InlayHintRefreshRequest=rR={}))});var cR=X(tn=>{"use strict";Object.defineProperty(tn,"__esModule",{value:!0});tn.DiagnosticRefreshRequest=tn.WorkspaceDiagnosticRequest=tn.DocumentDiagnosticRequest=tn.DocumentDiagnosticReportKind=tn.DiagnosticServerCancellationData=void 0;var uR=po(),fk=nc(),Ns=st(),iR;(function(t){function e(r){let n=r;return n&&fk.boolean(n.retriggerRequest)}t.is=e})(iR||(tn.DiagnosticServerCancellationData=iR={}));var oR;(function(t){t.Full="full",t.Unchanged="unchanged"})(oR||(tn.DocumentDiagnosticReportKind=oR={}));var sR;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Ns.MessageDirection.clientToServer,t.type=new Ns.ProtocolRequestType(t.method),t.partialResult=new uR.ProgressType})(sR||(tn.DocumentDiagnosticRequest=sR={}));var aR;(function(t){t.method="workspace/diagnostic",t.messageDirection=Ns.MessageDirection.clientToServer,t.type=new Ns.ProtocolRequestType(t.method),t.partialResult=new uR.ProgressType})(aR||(tn.WorkspaceDiagnosticRequest=aR={}));var lR;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Ns.MessageDirection.serverToClient,t.type=new Ns.ProtocolRequestType0(t.method)})(lR||(tn.DiagnosticRefreshRequest=lR={}))});var TR=X(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.DidCloseNotebookDocumentNotification=It.DidSaveNotebookDocumentNotification=It.DidChangeNotebookDocumentNotification=It.NotebookCellArrayChange=It.DidOpenNotebookDocumentNotification=It.NotebookDocumentSyncRegistrationType=It.NotebookDocument=It.NotebookCell=It.ExecutionSummary=It.NotebookCellKind=void 0;var Xa=rc(),Tn=nc(),Cn=st(),Qm;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(Qm||(It.NotebookCellKind=Qm={}));var Zm;(function(t){function e(i,o){let s={executionOrder:i};return(o===!0||o===!1)&&(s.success=o),s}t.create=e;function r(i){let o=i;return Tn.objectLiteral(o)&&Xa.uinteger.is(o.executionOrder)&&(o.success===void 0||Tn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(Zm||(It.ExecutionSummary=Zm={}));var gc;(function(t){function e(o,s){return{kind:o,document:s}}t.create=e;function r(o){let s=o;return Tn.objectLiteral(s)&&Qm.is(s.kind)&&Xa.DocumentUri.is(s.document)&&(s.metadata===void 0||Tn.objectLiteral(s.metadata))}t.is=r;function n(o,s){let a=new Set;return o.document!==s.document&&a.add("document"),o.kind!==s.kind&&a.add("kind"),o.executionSummary!==s.executionSummary&&a.add("executionSummary"),(o.metadata!==void 0||s.metadata!==void 0)&&!i(o.metadata,s.metadata)&&a.add("metadata"),(o.executionSummary!==void 0||s.executionSummary!==void 0)&&!Zm.equals(o.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function i(o,s){if(o===s)return!0;if(o==null||s===null||s===void 0||typeof o!=typeof s||typeof o!="object")return!1;let a=Array.isArray(o),l=Array.isArray(s);if(a!==l)return!1;if(a&&l){if(o.length!==s.length)return!1;for(let u=0;u<o.length;u++)if(!i(o[u],s[u]))return!1}if(Tn.objectLiteral(o)&&Tn.objectLiteral(s)){let u=Object.keys(o),c=Object.keys(s);if(u.length!==c.length||(u.sort(),c.sort(),!i(u,c)))return!1;for(let f=0;f<u.length;f++){let d=u[f];if(!i(o[d],s[d]))return!1}}return!0}})(gc||(It.NotebookCell=gc={}));var fR;(function(t){function e(n,i,o,s){return{uri:n,notebookType:i,version:o,cells:s}}t.create=e;function r(n){let i=n;return Tn.objectLiteral(i)&&Tn.string(i.uri)&&Xa.integer.is(i.version)&&Tn.typedArray(i.cells,gc.is)}t.is=r})(fR||(It.NotebookDocument=fR={}));var Os;(function(t){t.method="notebookDocument/sync",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.RegistrationType(t.method)})(Os||(It.NotebookDocumentSyncRegistrationType=Os={}));var dR;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Os.method})(dR||(It.DidOpenNotebookDocumentNotification=dR={}));var pR;(function(t){function e(n){let i=n;return Tn.objectLiteral(i)&&Xa.uinteger.is(i.start)&&Xa.uinteger.is(i.deleteCount)&&(i.cells===void 0||Tn.typedArray(i.cells,gc.is))}t.is=e;function r(n,i,o){let s={start:n,deleteCount:i};return o!==void 0&&(s.cells=o),s}t.create=r})(pR||(It.NotebookCellArrayChange=pR={}));var mR;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Os.method})(mR||(It.DidChangeNotebookDocumentNotification=mR={}));var hR;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Os.method})(hR||(It.DidSaveNotebookDocumentNotification=hR={}));var gR;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Cn.MessageDirection.clientToServer,t.type=new Cn.ProtocolNotificationType(t.method),t.registrationMethod=Os.method})(gR||(It.DidCloseNotebookDocumentNotification=gR={}))});var vR=X(Tc=>{"use strict";Object.defineProperty(Tc,"__esModule",{value:!0});Tc.InlineCompletionRequest=void 0;var _R=st(),yR;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=_R.MessageDirection.clientToServer,t.type=new _R.ProtocolRequestType(t.method)})(yR||(Tc.InlineCompletionRequest=yR={}))});var Lx=X(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.WorkspaceSymbolRequest=y.CodeActionResolveRequest=y.CodeActionRequest=y.DocumentSymbolRequest=y.DocumentHighlightRequest=y.ReferencesRequest=y.DefinitionRequest=y.SignatureHelpRequest=y.SignatureHelpTriggerKind=y.HoverRequest=y.CompletionResolveRequest=y.CompletionRequest=y.CompletionTriggerKind=y.PublishDiagnosticsNotification=y.WatchKind=y.RelativePattern=y.FileChangeType=y.DidChangeWatchedFilesNotification=y.WillSaveTextDocumentWaitUntilRequest=y.WillSaveTextDocumentNotification=y.TextDocumentSaveReason=y.DidSaveTextDocumentNotification=y.DidCloseTextDocumentNotification=y.DidChangeTextDocumentNotification=y.TextDocumentContentChangeEvent=y.DidOpenTextDocumentNotification=y.TextDocumentSyncKind=y.TelemetryEventNotification=y.LogMessageNotification=y.ShowMessageRequest=y.ShowMessageNotification=y.MessageType=y.DidChangeConfigurationNotification=y.ExitNotification=y.ShutdownRequest=y.InitializedNotification=y.InitializeErrorCodes=y.InitializeRequest=y.WorkDoneProgressOptions=y.TextDocumentRegistrationOptions=y.StaticRegistrationOptions=y.PositionEncodingKind=y.FailureHandlingKind=y.ResourceOperationKind=y.UnregistrationRequest=y.RegistrationRequest=y.DocumentSelector=y.NotebookCellTextDocumentFilter=y.NotebookDocumentFilter=y.TextDocumentFilter=void 0;y.MonikerRequest=y.MonikerKind=y.UniquenessLevel=y.WillDeleteFilesRequest=y.DidDeleteFilesNotification=y.WillRenameFilesRequest=y.DidRenameFilesNotification=y.WillCreateFilesRequest=y.DidCreateFilesNotification=y.FileOperationPatternKind=y.LinkedEditingRangeRequest=y.ShowDocumentRequest=y.SemanticTokensRegistrationType=y.SemanticTokensRefreshRequest=y.SemanticTokensRangeRequest=y.SemanticTokensDeltaRequest=y.SemanticTokensRequest=y.TokenFormat=y.CallHierarchyPrepareRequest=y.CallHierarchyOutgoingCallsRequest=y.CallHierarchyIncomingCallsRequest=y.WorkDoneProgressCancelNotification=y.WorkDoneProgressCreateRequest=y.WorkDoneProgress=y.SelectionRangeRequest=y.DeclarationRequest=y.FoldingRangeRefreshRequest=y.FoldingRangeRequest=y.ColorPresentationRequest=y.DocumentColorRequest=y.ConfigurationRequest=y.DidChangeWorkspaceFoldersNotification=y.WorkspaceFoldersRequest=y.TypeDefinitionRequest=y.ImplementationRequest=y.ApplyWorkspaceEditRequest=y.ExecuteCommandRequest=y.PrepareRenameRequest=y.RenameRequest=y.PrepareSupportDefaultBehavior=y.DocumentOnTypeFormattingRequest=y.DocumentRangesFormattingRequest=y.DocumentRangeFormattingRequest=y.DocumentFormattingRequest=y.DocumentLinkResolveRequest=y.DocumentLinkRequest=y.CodeLensRefreshRequest=y.CodeLensResolveRequest=y.CodeLensRequest=y.WorkspaceSymbolResolveRequest=void 0;y.InlineCompletionRequest=y.DidCloseNotebookDocumentNotification=y.DidSaveNotebookDocumentNotification=y.DidChangeNotebookDocumentNotification=y.NotebookCellArrayChange=y.DidOpenNotebookDocumentNotification=y.NotebookDocumentSyncRegistrationType=y.NotebookDocument=y.NotebookCell=y.ExecutionSummary=y.NotebookCellKind=y.DiagnosticRefreshRequest=y.WorkspaceDiagnosticRequest=y.DocumentDiagnosticRequest=y.DocumentDiagnosticReportKind=y.DiagnosticServerCancellationData=y.InlayHintRefreshRequest=y.InlayHintResolveRequest=y.InlayHintRequest=y.InlineValueRefreshRequest=y.InlineValueRequest=y.TypeHierarchySupertypesRequest=y.TypeHierarchySubtypesRequest=y.TypeHierarchyPrepareRequest=void 0;var q=st(),RR=rc(),Yt=nc(),dk=Hy();Object.defineProperty(y,"ImplementationRequest",{enumerable:!0,get:function(){return dk.ImplementationRequest}});var pk=Yy();Object.defineProperty(y,"TypeDefinitionRequest",{enumerable:!0,get:function(){return pk.TypeDefinitionRequest}});var Dx=Qy();Object.defineProperty(y,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return Dx.WorkspaceFoldersRequest}});Object.defineProperty(y,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return Dx.DidChangeWorkspaceFoldersNotification}});var mk=tv();Object.defineProperty(y,"ConfigurationRequest",{enumerable:!0,get:function(){return mk.ConfigurationRequest}});var Cx=iv();Object.defineProperty(y,"DocumentColorRequest",{enumerable:!0,get:function(){return Cx.DocumentColorRequest}});Object.defineProperty(y,"ColorPresentationRequest",{enumerable:!0,get:function(){return Cx.ColorPresentationRequest}});var bx=av();Object.defineProperty(y,"FoldingRangeRequest",{enumerable:!0,get:function(){return bx.FoldingRangeRequest}});Object.defineProperty(y,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return bx.FoldingRangeRefreshRequest}});var hk=cv();Object.defineProperty(y,"DeclarationRequest",{enumerable:!0,get:function(){return hk.DeclarationRequest}});var gk=pv();Object.defineProperty(y,"SelectionRangeRequest",{enumerable:!0,get:function(){return gk.SelectionRangeRequest}});var ih=Tv();Object.defineProperty(y,"WorkDoneProgress",{enumerable:!0,get:function(){return ih.WorkDoneProgress}});Object.defineProperty(y,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return ih.WorkDoneProgressCreateRequest}});Object.defineProperty(y,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return ih.WorkDoneProgressCancelNotification}});var oh=Rv();Object.defineProperty(y,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return oh.CallHierarchyIncomingCallsRequest}});Object.defineProperty(y,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return oh.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(y,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return oh.CallHierarchyPrepareRequest}});var Is=Sv();Object.defineProperty(y,"TokenFormat",{enumerable:!0,get:function(){return Is.TokenFormat}});Object.defineProperty(y,"SemanticTokensRequest",{enumerable:!0,get:function(){return Is.SemanticTokensRequest}});Object.defineProperty(y,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Is.SemanticTokensDeltaRequest}});Object.defineProperty(y,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Is.SemanticTokensRangeRequest}});Object.defineProperty(y,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Is.SemanticTokensRefreshRequest}});Object.defineProperty(y,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Is.SemanticTokensRegistrationType}});var Tk=Cv();Object.defineProperty(y,"ShowDocumentRequest",{enumerable:!0,get:function(){return Tk.ShowDocumentRequest}});var _k=Lv();Object.defineProperty(y,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return _k.LinkedEditingRangeRequest}});var mo=Wv();Object.defineProperty(y,"FileOperationPatternKind",{enumerable:!0,get:function(){return mo.FileOperationPatternKind}});Object.defineProperty(y,"DidCreateFilesNotification",{enumerable:!0,get:function(){return mo.DidCreateFilesNotification}});Object.defineProperty(y,"WillCreateFilesRequest",{enumerable:!0,get:function(){return mo.WillCreateFilesRequest}});Object.defineProperty(y,"DidRenameFilesNotification",{enumerable:!0,get:function(){return mo.DidRenameFilesNotification}});Object.defineProperty(y,"WillRenameFilesRequest",{enumerable:!0,get:function(){return mo.WillRenameFilesRequest}});Object.defineProperty(y,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return mo.DidDeleteFilesNotification}});Object.defineProperty(y,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return mo.WillDeleteFilesRequest}});var sh=Hv();Object.defineProperty(y,"UniquenessLevel",{enumerable:!0,get:function(){return sh.UniquenessLevel}});Object.defineProperty(y,"MonikerKind",{enumerable:!0,get:function(){return sh.MonikerKind}});Object.defineProperty(y,"MonikerRequest",{enumerable:!0,get:function(){return sh.MonikerRequest}});var ah=Xv();Object.defineProperty(y,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return ah.TypeHierarchyPrepareRequest}});Object.defineProperty(y,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return ah.TypeHierarchySubtypesRequest}});Object.defineProperty(y,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return ah.TypeHierarchySupertypesRequest}});var kx=Zv();Object.defineProperty(y,"InlineValueRequest",{enumerable:!0,get:function(){return kx.InlineValueRequest}});Object.defineProperty(y,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return kx.InlineValueRefreshRequest}});var lh=nR();Object.defineProperty(y,"InlayHintRequest",{enumerable:!0,get:function(){return lh.InlayHintRequest}});Object.defineProperty(y,"InlayHintResolveRequest",{enumerable:!0,get:function(){return lh.InlayHintResolveRequest}});Object.defineProperty(y,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return lh.InlayHintRefreshRequest}});var Ja=cR();Object.defineProperty(y,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Ja.DiagnosticServerCancellationData}});Object.defineProperty(y,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Ja.DocumentDiagnosticReportKind}});Object.defineProperty(y,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Ja.DocumentDiagnosticRequest}});Object.defineProperty(y,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Ja.WorkspaceDiagnosticRequest}});Object.defineProperty(y,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Ja.DiagnosticRefreshRequest}});var bn=TR();Object.defineProperty(y,"NotebookCellKind",{enumerable:!0,get:function(){return bn.NotebookCellKind}});Object.defineProperty(y,"ExecutionSummary",{enumerable:!0,get:function(){return bn.ExecutionSummary}});Object.defineProperty(y,"NotebookCell",{enumerable:!0,get:function(){return bn.NotebookCell}});Object.defineProperty(y,"NotebookDocument",{enumerable:!0,get:function(){return bn.NotebookDocument}});Object.defineProperty(y,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return bn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(y,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidOpenNotebookDocumentNotification}});Object.defineProperty(y,"NotebookCellArrayChange",{enumerable:!0,get:function(){return bn.NotebookCellArrayChange}});Object.defineProperty(y,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidChangeNotebookDocumentNotification}});Object.defineProperty(y,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidSaveNotebookDocumentNotification}});Object.defineProperty(y,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidCloseNotebookDocumentNotification}});var yk=vR();Object.defineProperty(y,"InlineCompletionRequest",{enumerable:!0,get:function(){return yk.InlineCompletionRequest}});var eh;(function(t){function e(r){let n=r;return Yt.string(n)||Yt.string(n.language)||Yt.string(n.scheme)||Yt.string(n.pattern)}t.is=e})(eh||(y.TextDocumentFilter=eh={}));var th;(function(t){function e(r){let n=r;return Yt.objectLiteral(n)&&(Yt.string(n.notebookType)||Yt.string(n.scheme)||Yt.string(n.pattern))}t.is=e})(th||(y.NotebookDocumentFilter=th={}));var rh;(function(t){function e(r){let n=r;return Yt.objectLiteral(n)&&(Yt.string(n.notebook)||th.is(n.notebook))&&(n.language===void 0||Yt.string(n.language))}t.is=e})(rh||(y.NotebookCellTextDocumentFilter=rh={}));var nh;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Yt.string(n)&&!eh.is(n)&&!rh.is(n))return!1;return!0}t.is=e})(nh||(y.DocumentSelector=nh={}));var xR;(function(t){t.method="client/registerCapability",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(xR||(y.RegistrationRequest=xR={}));var NR;(function(t){t.method="client/unregisterCapability",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(NR||(y.UnregistrationRequest=NR={}));var OR;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(OR||(y.ResourceOperationKind=OR={}));var IR;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(IR||(y.FailureHandlingKind=IR={}));var ER;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(ER||(y.PositionEncodingKind=ER={}));var SR;(function(t){function e(r){let n=r;return n&&Yt.string(n.id)&&n.id.length>0}t.hasId=e})(SR||(y.StaticRegistrationOptions=SR={}));var AR;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||nh.is(n.documentSelector))}t.is=e})(AR||(y.TextDocumentRegistrationOptions=AR={}));var DR;(function(t){function e(n){let i=n;return Yt.objectLiteral(i)&&(i.workDoneProgress===void 0||Yt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Yt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(DR||(y.WorkDoneProgressOptions=DR={}));var CR;(function(t){t.method="initialize",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(CR||(y.InitializeRequest=CR={}));var bR;(function(t){t.unknownProtocolVersion=1})(bR||(y.InitializeErrorCodes=bR={}));var kR;(function(t){t.method="initialized",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(kR||(y.InitializedNotification=kR={}));var LR;(function(t){t.method="shutdown",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType0(t.method)})(LR||(y.ShutdownRequest=LR={}));var wR;(function(t){t.method="exit",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType0(t.method)})(wR||(y.ExitNotification=wR={}));var PR;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(PR||(y.DidChangeConfigurationNotification=PR={}));var $R;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})($R||(y.MessageType=$R={}));var MR;(function(t){t.method="window/showMessage",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(MR||(y.ShowMessageNotification=MR={}));var FR;(function(t){t.method="window/showMessageRequest",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType(t.method)})(FR||(y.ShowMessageRequest=FR={}));var UR;(function(t){t.method="window/logMessage",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(UR||(y.LogMessageNotification=UR={}));var BR;(function(t){t.method="telemetry/event",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(BR||(y.TelemetryEventNotification=BR={}));var WR;(function(t){t.None=0,t.Full=1,t.Incremental=2})(WR||(y.TextDocumentSyncKind=WR={}));var VR;(function(t){t.method="textDocument/didOpen",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(VR||(y.DidOpenTextDocumentNotification=VR={}));var GR;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(GR||(y.TextDocumentContentChangeEvent=GR={}));var jR;(function(t){t.method="textDocument/didChange",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(jR||(y.DidChangeTextDocumentNotification=jR={}));var qR;(function(t){t.method="textDocument/didClose",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(qR||(y.DidCloseTextDocumentNotification=qR={}));var HR;(function(t){t.method="textDocument/didSave",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(HR||(y.DidSaveTextDocumentNotification=HR={}));var KR;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(KR||(y.TextDocumentSaveReason=KR={}));var zR;(function(t){t.method="textDocument/willSave",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(zR||(y.WillSaveTextDocumentNotification=zR={}));var YR;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(YR||(y.WillSaveTextDocumentWaitUntilRequest=YR={}));var XR;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolNotificationType(t.method)})(XR||(y.DidChangeWatchedFilesNotification=XR={}));var JR;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(JR||(y.FileChangeType=JR={}));var QR;(function(t){function e(r){let n=r;return Yt.objectLiteral(n)&&(RR.URI.is(n.baseUri)||RR.WorkspaceFolder.is(n.baseUri))&&Yt.string(n.pattern)}t.is=e})(QR||(y.RelativePattern=QR={}));var ZR;(function(t){t.Create=1,t.Change=2,t.Delete=4})(ZR||(y.WatchKind=ZR={}));var ex;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolNotificationType(t.method)})(ex||(y.PublishDiagnosticsNotification=ex={}));var tx;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(tx||(y.CompletionTriggerKind=tx={}));var rx;(function(t){t.method="textDocument/completion",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(rx||(y.CompletionRequest=rx={}));var nx;(function(t){t.method="completionItem/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(nx||(y.CompletionResolveRequest=nx={}));var ix;(function(t){t.method="textDocument/hover",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ix||(y.HoverRequest=ix={}));var ox;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(ox||(y.SignatureHelpTriggerKind=ox={}));var sx;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(sx||(y.SignatureHelpRequest=sx={}));var ax;(function(t){t.method="textDocument/definition",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ax||(y.DefinitionRequest=ax={}));var lx;(function(t){t.method="textDocument/references",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(lx||(y.ReferencesRequest=lx={}));var ux;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(ux||(y.DocumentHighlightRequest=ux={}));var cx;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(cx||(y.DocumentSymbolRequest=cx={}));var fx;(function(t){t.method="textDocument/codeAction",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(fx||(y.CodeActionRequest=fx={}));var dx;(function(t){t.method="codeAction/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(dx||(y.CodeActionResolveRequest=dx={}));var px;(function(t){t.method="workspace/symbol",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(px||(y.WorkspaceSymbolRequest=px={}));var mx;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(mx||(y.WorkspaceSymbolResolveRequest=mx={}));var hx;(function(t){t.method="textDocument/codeLens",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(hx||(y.CodeLensRequest=hx={}));var gx;(function(t){t.method="codeLens/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(gx||(y.CodeLensResolveRequest=gx={}));var Tx;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType0(t.method)})(Tx||(y.CodeLensRefreshRequest=Tx={}));var _x;(function(t){t.method="textDocument/documentLink",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(_x||(y.DocumentLinkRequest=_x={}));var yx;(function(t){t.method="documentLink/resolve",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(yx||(y.DocumentLinkResolveRequest=yx={}));var vx;(function(t){t.method="textDocument/formatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(vx||(y.DocumentFormattingRequest=vx={}));var Rx;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Rx||(y.DocumentRangeFormattingRequest=Rx={}));var xx;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(xx||(y.DocumentRangesFormattingRequest=xx={}));var Nx;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Nx||(y.DocumentOnTypeFormattingRequest=Nx={}));var Ox;(function(t){t.Identifier=1})(Ox||(y.PrepareSupportDefaultBehavior=Ox={}));var Ix;(function(t){t.method="textDocument/rename",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Ix||(y.RenameRequest=Ix={}));var Ex;(function(t){t.method="textDocument/prepareRename",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Ex||(y.PrepareRenameRequest=Ex={}));var Sx;(function(t){t.method="workspace/executeCommand",t.messageDirection=q.MessageDirection.clientToServer,t.type=new q.ProtocolRequestType(t.method)})(Sx||(y.ExecuteCommandRequest=Sx={}));var Ax;(function(t){t.method="workspace/applyEdit",t.messageDirection=q.MessageDirection.serverToClient,t.type=new q.ProtocolRequestType("workspace/applyEdit")})(Ax||(y.ApplyWorkspaceEditRequest=Ax={}))});var Px=X(_c=>{"use strict";Object.defineProperty(_c,"__esModule",{value:!0});_c.createProtocolConnection=void 0;var wx=po();function vk(t,e,r,n){return wx.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,wx.createMessageConnection)(t,e,r,n)}_c.createProtocolConnection=vk});var Mx=X(kr=>{"use strict";var Rk=kr&&kr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),yc=kr&&kr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Rk(e,t,r)};Object.defineProperty(kr,"__esModule",{value:!0});kr.LSPErrorCodes=kr.createProtocolConnection=void 0;yc(po(),kr);yc(rc(),kr);yc(st(),kr);yc(Lx(),kr);var xk=Px();Object.defineProperty(kr,"createProtocolConnection",{enumerable:!0,get:function(){return xk.createProtocolConnection}});var $x;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})($x||(kr.LSPErrorCodes=$x={}))});var gt=X(kn=>{"use strict";var Nk=kn&&kn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Fx=kn&&kn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Nk(e,t,r)};Object.defineProperty(kn,"__esModule",{value:!0});kn.createProtocolConnection=void 0;var Ok=Hm();Fx(Hm(),kn);Fx(Mx(),kn);function Ik(t,e,r,n){return(0,Ok.createMessageConnection)(t,e,r,n)}kn.createProtocolConnection=Ik});var uh=X(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});rn.generateUuid=rn.parse=rn.isUUID=rn.v4=rn.empty=void 0;var Qa=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},Za=class t extends Qa{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};Za._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Za._timeHighBits=["8","9","a","b"];rn.empty=new Qa("00000000-0000-0000-0000-000000000000");function Ux(){return new Za}rn.v4=Ux;var Ek=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Bx(t){return Ek.test(t)}rn.isUUID=Bx;function Sk(t){if(!Bx(t))throw new Error("invalid uuid");return new Qa(t)}rn.parse=Sk;function Ak(){return Ux().asHex()}rn.generateUuid=Ak});var Wx=X(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.attachPartialResult=Pi.ProgressFeature=Pi.attachWorkDone=void 0;var wi=gt(),Dk=uh(),ho=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,{kind:"end"})}};ho.Instances=new Map;var vc=class extends ho{constructor(e,r){super(e,r),this._source=new wi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},el=class{constructor(){}begin(){}report(){}done(){}},Rc=class extends el{constructor(){super(),this._source=new wi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function Ck(t,e){if(e===void 0||e.workDoneToken===void 0)return new el;let r=e.workDoneToken;return delete e.workDoneToken,new ho(t,r)}Pi.attachWorkDone=Ck;var bk=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var r;super.initialize(e),((r=e==null?void 0:e.window)==null?void 0:r.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(wi.WorkDoneProgressCancelNotification.type,n=>{let i=ho.Instances.get(n.token);(i instanceof vc||i instanceof Rc)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new el:new ho(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,Dk.generateUuid)();return this.connection.sendRequest(wi.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new vc(this.connection,e))}else return Promise.resolve(new Rc)}};Pi.ProgressFeature=bk;var ch;(function(t){t.type=new wi.ProgressType})(ch||(ch={}));var fh=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(ch.type,this._token,e)}};function kk(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new fh(t,r)}Pi.attachPartialResult=kk});var Vx=X(xc=>{"use strict";Object.defineProperty(xc,"__esModule",{value:!0});xc.ConfigurationFeature=void 0;var Lk=gt(),wk=Lu(),Pk=t=>class extends t{getConfiguration(e){return e?wk.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(Lk.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};xc.ConfigurationFeature=Pk});var Gx=X(Oc=>{"use strict";Object.defineProperty(Oc,"__esModule",{value:!0});Oc.WorkspaceFoldersFeature=void 0;var Nc=gt(),$k=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Nc.Emitter,this.connection.onNotification(Nc.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){var n,i;super.fillServerCapabilities(e);let r=(i=(n=e.workspace)==null?void 0:n.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Nc.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Nc.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Oc.WorkspaceFoldersFeature=$k});var jx=X(Ic=>{"use strict";Object.defineProperty(Ic,"__esModule",{value:!0});Ic.CallHierarchyFeature=void 0;var dh=gt(),Mk=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(dh.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=dh.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=dh.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ic.CallHierarchyFeature=Mk});var mh=X($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.SemanticTokensBuilder=$i.SemanticTokensDiff=$i.SemanticTokensFeature=void 0;var Ec=gt(),Fk=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Ec.SemanticTokensRefreshRequest.type),on:e=>{let r=Ec.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=Ec.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=Ec.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};$i.SemanticTokensFeature=Fk;var Sc=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let s=i-n+1,a=this.modifiedSequence.slice(n,o+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};$i.SemanticTokensDiff=Sc;var ph=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Sc(this._prevData,this._data).computeDiff()}:this.build()}};$i.SemanticTokensBuilder=ph});var qx=X(Ac=>{"use strict";Object.defineProperty(Ac,"__esModule",{value:!0});Ac.ShowDocumentFeature=void 0;var Uk=gt(),Bk=t=>class extends t{showDocument(e){return this.connection.sendRequest(Uk.ShowDocumentRequest.type,e)}};Ac.ShowDocumentFeature=Bk});var Hx=X(Dc=>{"use strict";Object.defineProperty(Dc,"__esModule",{value:!0});Dc.FileOperationsFeature=void 0;var Es=gt(),Wk=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Es.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Es.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Es.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Es.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Es.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Es.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Dc.FileOperationsFeature=Wk});var Kx=X(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.LinkedEditingRangeFeature=void 0;var Vk=gt(),Gk=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(Vk.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Cc.LinkedEditingRangeFeature=Gk});var zx=X(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.TypeHierarchyFeature=void 0;var hh=gt(),jk=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(hh.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=hh.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=hh.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};bc.TypeHierarchyFeature=jk});var Xx=X(kc=>{"use strict";Object.defineProperty(kc,"__esModule",{value:!0});kc.InlineValueFeature=void 0;var Yx=gt(),qk=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Yx.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Yx.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};kc.InlineValueFeature=qk});var Qx=X(Lc=>{"use strict";Object.defineProperty(Lc,"__esModule",{value:!0});Lc.FoldingRangeFeature=void 0;var Jx=gt(),Hk=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(Jx.FoldingRangeRefreshRequest.type),on:e=>{let r=Jx.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Lc.FoldingRangeFeature=Hk});var Zx=X(wc=>{"use strict";Object.defineProperty(wc,"__esModule",{value:!0});wc.InlayHintFeature=void 0;var gh=gt(),Kk=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(gh.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(gh.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(gh.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};wc.InlayHintFeature=Kk});var eN=X(Pc=>{"use strict";Object.defineProperty(Pc,"__esModule",{value:!0});Pc.DiagnosticFeature=void 0;var tl=gt(),zk=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(tl.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(tl.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(tl.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(tl.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(tl.WorkspaceDiagnosticRequest.partialResult,r)))}}};Pc.DiagnosticFeature=zk});var _h=X($c=>{"use strict";Object.defineProperty($c,"__esModule",{value:!0});$c.TextDocuments=void 0;var go=gt(),Th=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new go.Emitter,this._onDidOpen=new go.Emitter,this._onDidClose=new go.Emitter,this._onDidSave=new go.Emitter,this._onWillSave=new go.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=go.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let s=Object.freeze({document:o});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,o,s),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),go.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};$c.TextDocuments=Th});var vh=X(Ss=>{"use strict";Object.defineProperty(Ss,"__esModule",{value:!0});Ss.NotebookDocuments=Ss.NotebookSyncFeature=void 0;var nn=gt(),tN=_h(),Yk=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(nn.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(nn.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(nn.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(nn.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};Ss.NotebookSyncFeature=Yk;var Mc=class t{onDidOpenTextDocument(e){return this.openHandler=e,nn.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,nn.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,nn.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Mc.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var yh=class{constructor(e){e instanceof tN.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new tN.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new nn.Emitter,this._onDidChange=new nn.Emitter,this._onDidSave=new nn.Emitter,this._onDidClose=new nn.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Mc,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let s=o.metadata,a=!1,l=i.change;l.metadata!==void 0&&(a=!0,o.metadata=l.metadata);let u=[],c=[],f=[],d=[];if(l.cells!==void 0){let I=l.cells;if(I.structure!==void 0){let _=I.structure.array;if(o.cells.splice(_.start,_.deleteCount,..._.cells!==void 0?_.cells:[]),I.structure.didOpen!==void 0)for(let T of I.structure.didOpen)r.openTextDocument({textDocument:T}),u.push(T.uri);if(I.structure.didClose)for(let T of I.structure.didClose)r.closeTextDocument({textDocument:T}),c.push(T.uri)}if(I.data!==void 0){let _=new Map(I.data.map(T=>[T.document,T]));for(let T=0;T<=o.cells.length;T++){let k=_.get(o.cells[T].document);if(k!==void 0){let M=o.cells.splice(T,1,k);if(f.push({old:M[0],new:k}),_.delete(k.document),_.size===0)break}}}if(I.textContent!==void 0)for(let _ of I.textContent)r.changeTextDocument({textDocument:_.document,contentChanges:_.changes}),d.push(_.document.uri)}this.updateCellMap(o);let m={notebookDocument:o};a&&(m.metadata={old:s,new:o.metadata});let v=[];for(let I of u)v.push(this.getNotebookCell(I));let N=[];for(let I of c)N.push(this.getNotebookCell(I));let E=[];for(let I of d)E.push(this.getNotebookCell(I));(v.length>0||N.length>0||f.length>0||E.length>0)&&(m.cells={added:v,removed:N,changed:{data:f,textContent:E}}),(m.metadata!==void 0||m.cells!==void 0)&&this._onDidChange.fire(m)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let s of i.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of o.cells)this.notebookCellMap.delete(s.document)}})),nn.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};Ss.NotebookDocuments=yh});var rN=X(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0});Fc.MonikerFeature=void 0;var Xk=gt(),Jk=t=>class extends t{get moniker(){return{on:e=>{let r=Xk.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Fc.MonikerFeature=Jk});var Eh=X(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.createConnection=ke.combineFeatures=ke.combineNotebooksFeatures=ke.combineLanguagesFeatures=ke.combineWorkspaceFeatures=ke.combineWindowFeatures=ke.combineClientFeatures=ke.combineTracerFeatures=ke.combineTelemetryFeatures=ke.combineConsoleFeatures=ke._NotebooksImpl=ke._LanguagesImpl=ke.BulkUnregistration=ke.BulkRegistration=ke.ErrorMessageTracker=void 0;var Y=gt(),on=Lu(),xh=uh(),pe=Wx(),Qk=Vx(),Zk=Gx(),eL=jx(),tL=mh(),rL=qx(),nL=Hx(),iL=Kx(),oL=zx(),sL=Xx(),aL=Qx(),lL=Zx(),uL=eN(),cL=vh(),fL=rN();function Rh(t){if(t!==null)return t}var Nh=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};ke.ErrorMessageTracker=Nh;var Uc=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(Y.MessageType.Error,e)}warn(e){this.send(Y.MessageType.Warning,e)}info(e){this.send(Y.MessageType.Info,e)}log(e){this.send(Y.MessageType.Log,e)}debug(e){this.send(Y.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(Y.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,Y.RAL)().console.error("Sending log message failed")})}},Oh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:Y.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(Rh)}showWarningMessage(e,...r){let n={type:Y.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(Rh)}showInformationMessage(e,...r){let n={type:Y.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(Y.ShowMessageRequest.type,n).then(Rh)}},nN=(0,rL.ShowDocumentFeature)((0,pe.ProgressFeature)(Oh)),iN;(function(t){function e(){return new Bc}t.create=e})(iN||(ke.BulkRegistration=iN={}));var Bc=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=on.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=xh.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},oN;(function(t){function e(){return new rl(void 0,[])}t.create=e})(oN||(ke.BulkUnregistration=oN={}));var rl=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(Y.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=on.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(Y.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Wc=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Bc?this.registerMany(e):e instanceof rl?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=on.string(r)?r:r.method,o=xh.generateUuid(),s={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(Y.RegistrationRequest.type,s).then(a=>(e.add({id:o,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=on.string(e)?e:e.method,i=xh.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(Y.RegistrationRequest.type,o).then(s=>Y.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(Y.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(Y.RegistrationRequest.type,r).then(()=>new rl(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Ih=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(Y.ApplyWorkspaceEditRequest.type,n)}},sN=(0,nL.FileOperationsFeature)((0,Zk.WorkspaceFoldersFeature)((0,Qk.ConfigurationFeature)(Ih))),Vc=class{constructor(){this._trace=Y.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==Y.Trace.Off&&this.connection.sendNotification(Y.LogTraceNotification.type,{message:e,verbose:this._trace===Y.Trace.Verbose?r:void 0}).catch(()=>{})}},Gc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(Y.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},jc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,pe.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,pe.attachPartialResult)(this.connection,r)}};ke._LanguagesImpl=jc;var aN=(0,aL.FoldingRangeFeature)((0,fL.MonikerFeature)((0,uL.DiagnosticFeature)((0,lL.InlayHintFeature)((0,sL.InlineValueFeature)((0,oL.TypeHierarchyFeature)((0,iL.LinkedEditingRangeFeature)((0,tL.SemanticTokensFeature)((0,eL.CallHierarchyFeature)(jc))))))))),qc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,pe.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,pe.attachPartialResult)(this.connection,r)}};ke._NotebooksImpl=qc;var lN=(0,cL.NotebookSyncFeature)(qc);function uN(t,e){return function(r){return e(t(r))}}ke.combineConsoleFeatures=uN;function cN(t,e){return function(r){return e(t(r))}}ke.combineTelemetryFeatures=cN;function fN(t,e){return function(r){return e(t(r))}}ke.combineTracerFeatures=fN;function dN(t,e){return function(r){return e(t(r))}}ke.combineClientFeatures=dN;function pN(t,e){return function(r){return e(t(r))}}ke.combineWindowFeatures=pN;function mN(t,e){return function(r){return e(t(r))}}ke.combineWorkspaceFeatures=mN;function hN(t,e){return function(r){return e(t(r))}}ke.combineLanguagesFeatures=hN;function gN(t,e){return function(r){return e(t(r))}}ke.combineNotebooksFeatures=gN;function dL(t,e){function r(i,o,s){return i&&o?s(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,uN),tracer:r(t.tracer,e.tracer,fN),telemetry:r(t.telemetry,e.telemetry,cN),client:r(t.client,e.client,dN),window:r(t.window,e.window,pN),workspace:r(t.workspace,e.workspace,mN),languages:r(t.languages,e.languages,hN),notebooks:r(t.notebooks,e.notebooks,gN)}}ke.combineFeatures=dL;function pL(t,e,r){let n=r&&r.console?new(r.console(Uc)):new Uc,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(Vc)):new Vc,s=r&&r.telemetry?new(r.telemetry(Gc)):new Gc,a=r&&r.client?new(r.client(Wc)):new Wc,l=r&&r.window?new(r.window(nN)):new nN,u=r&&r.workspace?new(r.workspace(sN)):new sN,c=r&&r.languages?new(r.languages(aN)):new aN,f=r&&r.notebooks?new(r.notebooks(lN)):new lN,d=[n,o,s,a,l,u,c,f];function m(_){return _ instanceof Promise?_:on.thenable(_)?new Promise((T,k)=>{_.then(M=>T(M),M=>k(M))}):Promise.resolve(_)}let v,N,E,I={listen:()=>i.listen(),sendRequest:(_,...T)=>i.sendRequest(on.string(_)?_:_.method,...T),onRequest:(_,T)=>i.onRequest(_,T),sendNotification:(_,T)=>{let k=on.string(_)?_:_.method;return i.sendNotification(k,T)},onNotification:(_,T)=>i.onNotification(_,T),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:_=>(N=_,{dispose:()=>{N=void 0}}),onInitialized:_=>i.onNotification(Y.InitializedNotification.type,_),onShutdown:_=>(v=_,{dispose:()=>{v=void 0}}),onExit:_=>(E=_,{dispose:()=>{E=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return o},get client(){return a},get window(){return l},get workspace(){return u},get languages(){return c},get notebooks(){return f},onDidChangeConfiguration:_=>i.onNotification(Y.DidChangeConfigurationNotification.type,_),onDidChangeWatchedFiles:_=>i.onNotification(Y.DidChangeWatchedFilesNotification.type,_),__textDocumentSync:void 0,onDidOpenTextDocument:_=>i.onNotification(Y.DidOpenTextDocumentNotification.type,_),onDidChangeTextDocument:_=>i.onNotification(Y.DidChangeTextDocumentNotification.type,_),onDidCloseTextDocument:_=>i.onNotification(Y.DidCloseTextDocumentNotification.type,_),onWillSaveTextDocument:_=>i.onNotification(Y.WillSaveTextDocumentNotification.type,_),onWillSaveTextDocumentWaitUntil:_=>i.onRequest(Y.WillSaveTextDocumentWaitUntilRequest.type,_),onDidSaveTextDocument:_=>i.onNotification(Y.DidSaveTextDocumentNotification.type,_),sendDiagnostics:_=>i.sendNotification(Y.PublishDiagnosticsNotification.type,_),onHover:_=>i.onRequest(Y.HoverRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onCompletion:_=>i.onRequest(Y.CompletionRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onCompletionResolve:_=>i.onRequest(Y.CompletionResolveRequest.type,_),onSignatureHelp:_=>i.onRequest(Y.SignatureHelpRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onDeclaration:_=>i.onRequest(Y.DeclarationRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDefinition:_=>i.onRequest(Y.DefinitionRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onTypeDefinition:_=>i.onRequest(Y.TypeDefinitionRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onImplementation:_=>i.onRequest(Y.ImplementationRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onReferences:_=>i.onRequest(Y.ReferencesRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDocumentHighlight:_=>i.onRequest(Y.DocumentHighlightRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDocumentSymbol:_=>i.onRequest(Y.DocumentSymbolRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onWorkspaceSymbol:_=>i.onRequest(Y.WorkspaceSymbolRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onWorkspaceSymbolResolve:_=>i.onRequest(Y.WorkspaceSymbolResolveRequest.type,_),onCodeAction:_=>i.onRequest(Y.CodeActionRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onCodeActionResolve:_=>i.onRequest(Y.CodeActionResolveRequest.type,(T,k)=>_(T,k)),onCodeLens:_=>i.onRequest(Y.CodeLensRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onCodeLensResolve:_=>i.onRequest(Y.CodeLensResolveRequest.type,(T,k)=>_(T,k)),onDocumentFormatting:_=>i.onRequest(Y.DocumentFormattingRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onDocumentRangeFormatting:_=>i.onRequest(Y.DocumentRangeFormattingRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onDocumentOnTypeFormatting:_=>i.onRequest(Y.DocumentOnTypeFormattingRequest.type,(T,k)=>_(T,k)),onRenameRequest:_=>i.onRequest(Y.RenameRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),void 0)),onPrepareRename:_=>i.onRequest(Y.PrepareRenameRequest.type,(T,k)=>_(T,k)),onDocumentLinks:_=>i.onRequest(Y.DocumentLinkRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onDocumentLinkResolve:_=>i.onRequest(Y.DocumentLinkResolveRequest.type,(T,k)=>_(T,k)),onDocumentColor:_=>i.onRequest(Y.DocumentColorRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onColorPresentation:_=>i.onRequest(Y.ColorPresentationRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onFoldingRanges:_=>i.onRequest(Y.FoldingRangeRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onSelectionRanges:_=>i.onRequest(Y.SelectionRangeRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),(0,pe.attachPartialResult)(i,T))),onExecuteCommand:_=>i.onRequest(Y.ExecuteCommandRequest.type,(T,k)=>_(T,k,(0,pe.attachWorkDone)(i,T),void 0)),dispose:()=>i.dispose()};for(let _ of d)_.attach(I);return i.onRequest(Y.InitializeRequest.type,_=>{e.initialize(_),on.string(_.trace)&&(o.trace=Y.Trace.fromString(_.trace));for(let T of d)T.initialize(_.capabilities);if(N){let T=N(_,new Y.CancellationTokenSource().token,(0,pe.attachWorkDone)(i,_),void 0);return m(T).then(k=>{if(k instanceof Y.ResponseError)return k;let M=k;M||(M={capabilities:{}});let Q=M.capabilities;Q||(Q={},M.capabilities=Q),Q.textDocumentSync===void 0||Q.textDocumentSync===null?Q.textDocumentSync=on.number(I.__textDocumentSync)?I.__textDocumentSync:Y.TextDocumentSyncKind.None:!on.number(Q.textDocumentSync)&&!on.number(Q.textDocumentSync.change)&&(Q.textDocumentSync.change=on.number(I.__textDocumentSync)?I.__textDocumentSync:Y.TextDocumentSyncKind.None);for(let ae of d)ae.fillServerCapabilities(Q);return M})}else{let T={capabilities:{textDocumentSync:Y.TextDocumentSyncKind.None}};for(let k of d)k.fillServerCapabilities(T.capabilities);return T}}),i.onRequest(Y.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,v)return v(new Y.CancellationTokenSource().token)}),i.onNotification(Y.ExitNotification.type,()=>{try{E&&E()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(Y.SetTraceNotification.type,_=>{o.trace=Y.Trace.fromString(_.value)}),I}ke.createConnection=pL});var TN=X(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.resolveModulePath=Lr.FileSystem=Lr.resolveGlobalYarnPath=Lr.resolveGlobalNodePath=Lr.resolve=Lr.uriToFilePath=void 0;var mL=require("url"),_n=require("path"),Sh=require("fs"),bh=require("child_process");function hL(t){let e=mL.parse(t);if(e.protocol!=="file:"||!e.path)return;let r=e.path.split("/");for(var n=0,i=r.length;n<i;n++)r[n]=decodeURIComponent(r[n]);if(process.platform==="win32"&&r.length>1){let o=r[0],s=r[1];o.length===0&&s.length>1&&s[1]===":"&&r.shift()}return _n.normalize(r.join("/"))}Lr.uriToFilePath=hL;function Ah(){return process.platform==="win32"}function Hc(t,e,r,n){let i="NODE_PATH",o=["var p = process;","p.on('message',function(m){","if(m.c==='e'){","p.exit(0);","}","else if(m.c==='rs'){","try{","var r=require.resolve(m.a);","p.send({c:'r',s:true,r:r});","}","catch(err){","p.send({c:'r',s:false});","}","}","});"].join("");return new Promise((s,a)=>{let l=process.env,u=Object.create(null);Object.keys(l).forEach(c=>u[c]=l[c]),e&&Sh.existsSync(e)&&(u[i]?u[i]=e+_n.delimiter+u[i]:u[i]=e,n&&n(`NODE_PATH value is: ${u[i]}`)),u.ELECTRON_RUN_AS_NODE="1";try{let c=(0,bh.fork)("",[],{cwd:r,env:u,execArgv:["-e",o]});if(c.pid===void 0){a(new Error(`Starting process to resolve node module  ${t} failed`));return}c.on("error",d=>{a(d)}),c.on("message",d=>{d.c==="r"&&(c.send({c:"e"}),d.s?s(d.r):a(new Error(`Failed to resolve module: ${t}`)))});let f={c:"rs",a:t};c.send(f)}catch(c){a(c)}})}Lr.resolve=Hc;function Dh(t){let e="npm",r=Object.create(null);Object.keys(process.env).forEach(o=>r[o]=process.env[o]),r.NO_UPDATE_NOTIFIER="true";let n={encoding:"utf8",env:r};Ah()&&(e="npm.cmd",n.shell=!0);let i=()=>{};try{process.on("SIGPIPE",i);let o=(0,bh.spawnSync)(e,["config","get","prefix"],n).stdout;if(!o){t&&t("'npm config get prefix' didn't return a value.");return}let s=o.trim();return t&&t(`'npm config get prefix' value is: ${s}`),s.length>0?Ah()?_n.join(s,"node_modules"):_n.join(s,"lib","node_modules"):void 0}catch{return}finally{process.removeListener("SIGPIPE",i)}}Lr.resolveGlobalNodePath=Dh;function gL(t){let e="yarn",r={encoding:"utf8"};Ah()&&(e="yarn.cmd",r.shell=!0);let n=()=>{};try{process.on("SIGPIPE",n);let i=(0,bh.spawnSync)(e,["global","dir","--json"],r),o=i.stdout;if(!o){t&&(t("'yarn global dir' didn't return a value."),i.stderr&&t(i.stderr));return}let s=o.trim().split(/\r?\n/);for(let a of s)try{let l=JSON.parse(a);if(l.type==="log")return _n.join(l.data,"node_modules")}catch{}return}catch{return}finally{process.removeListener("SIGPIPE",n)}}Lr.resolveGlobalYarnPath=gL;var Ch;(function(t){let e;function r(){return e!==void 0||(process.platform==="win32"?e=!1:e=!Sh.existsSync(__filename.toUpperCase())||!Sh.existsSync(__filename.toLowerCase())),e}t.isCaseSensitive=r;function n(i,o){return r()?_n.normalize(o).indexOf(_n.normalize(i))===0:_n.normalize(o).toLowerCase().indexOf(_n.normalize(i).toLowerCase())===0}t.isParent=n})(Ch||(Lr.FileSystem=Ch={}));function TL(t,e,r,n){return r?(_n.isAbsolute(r)||(r=_n.join(t,r)),Hc(e,r,r,n).then(i=>Ch.isParent(r,i)?i:Promise.reject(new Error(`Failed to load ${e} from node path location.`))).then(void 0,i=>Hc(e,Dh(n),t,n))):Hc(e,Dh(n),t,n)}Lr.resolveModulePath=TL});var kh=X((oq,_N)=>{"use strict";_N.exports=gt()});var yN=X(Kc=>{"use strict";Object.defineProperty(Kc,"__esModule",{value:!0});Kc.InlineCompletionFeature=void 0;var _L=gt(),yL=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(_L.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Kc.InlineCompletionFeature=yL});var xN=X(dr=>{"use strict";var vL=dr&&dr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),RN=dr&&dr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&vL(e,t,r)};Object.defineProperty(dr,"__esModule",{value:!0});dr.ProposedFeatures=dr.NotebookDocuments=dr.TextDocuments=dr.SemanticTokensBuilder=void 0;var RL=mh();Object.defineProperty(dr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return RL.SemanticTokensBuilder}});var xL=yN();RN(gt(),dr);var NL=_h();Object.defineProperty(dr,"TextDocuments",{enumerable:!0,get:function(){return NL.TextDocuments}});var OL=vh();Object.defineProperty(dr,"NotebookDocuments",{enumerable:!0,get:function(){return OL.NotebookDocuments}});RN(Eh(),dr);var vN;(function(t){t.all={__brand:"features",languages:xL.InlineCompletionFeature}})(vN||(dr.ProposedFeatures=vN={}))});var wr=X(sn=>{"use strict";var IL=sn&&sn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),EN=sn&&sn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&IL(e,t,r)};Object.defineProperty(sn,"__esModule",{value:!0});sn.createConnection=sn.Files=void 0;var NN=require("util"),Lh=Lu(),EL=Eh(),nl=TN(),To=kh();EN(kh(),sn);EN(xN(),sn);var ON;(function(t){t.uriToFilePath=nl.uriToFilePath,t.resolveGlobalNodePath=nl.resolveGlobalNodePath,t.resolveGlobalYarnPath=nl.resolveGlobalYarnPath,t.resolve=nl.resolve,t.resolveModulePath=nl.resolveModulePath})(ON||(sn.Files=ON={}));var IN;function zc(){if(IN!==void 0)try{IN.end()}catch{}}var As=!1,SN;function SL(){let t="--clientProcessId";function e(r){try{let n=parseInt(r);isNaN(n)||(SN=setInterval(()=>{try{process.kill(n,0)}catch{zc(),process.exit(As?0:1)}},3e3))}catch{}}for(let r=2;r<process.argv.length;r++){let n=process.argv[r];if(n===t&&r+1<process.argv.length){e(process.argv[r+1]);return}else{let i=n.split("=");i[0]===t&&e(i[1])}}}SL();var AL={initialize:t=>{let e=t.processId;Lh.number(e)&&SN===void 0&&setInterval(()=>{try{process.kill(e,0)}catch{process.exit(As?0:1)}},3e3)},get shutdownReceived(){return As},set shutdownReceived(t){As=t},exit:t=>{zc(),process.exit(t)}};function DL(t,e,r,n){let i,o,s,a;return t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),To.ConnectionStrategy.is(t)||To.ConnectionOptions.is(t)?a=t:(o=t,s=e,a=r),CL(o,s,a,i)}sn.createConnection=DL;function CL(t,e,r,n){let i=!1;if(!t&&!e&&process.argv.length>2){let l,u,c=process.argv.slice(2);for(let f=0;f<c.length;f++){let d=c[f];if(d==="--node-ipc"){t=new To.IPCMessageReader(process),e=new To.IPCMessageWriter(process);break}else if(d==="--stdio"){i=!0,t=process.stdin,e=process.stdout;break}else if(d==="--socket"){l=parseInt(c[f+1]);break}else if(d==="--pipe"){u=c[f+1];break}else{var o=d.split("=");if(o[0]==="--socket"){l=parseInt(o[1]);break}else if(o[0]==="--pipe"){u=o[1];break}}}if(l){let f=(0,To.createServerSocketTransport)(l);t=f[0],e=f[1]}else if(u){let f=(0,To.createServerPipeTransport)(u);t=f[0],e=f[1]}}var s="Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";if(!t)throw new Error("Connection input stream is not set. "+s);if(!e)throw new Error("Connection output stream is not set. "+s);if(Lh.func(t.read)&&Lh.func(t.on)){let l=t;l.on("end",()=>{zc(),process.exit(As?0:1)}),l.on("close",()=>{zc(),process.exit(As?0:1)})}let a=l=>{let u=(0,To.createProtocolConnection)(t,e,l,r);return i&&bL(l),u};return(0,EL.createConnection)(a,AL,n)}function bL(t){function e(n){return n.map(i=>typeof i=="string"?i:(0,NN.inspect)(i)).join(" ")}let r=new Map;console.assert=function(i,...o){if(!i)if(o.length===0)t.error("Assertion failed");else{let[s,...a]=o;t.error(`Assertion failed: ${s} ${e(a)}`)}},console.count=function(i="default"){var a;let o=String(i),s=(a=r.get(o))!=null?a:0;s+=1,r.set(o,s),t.log(`${o}: ${o}`)},console.countReset=function(i){i===void 0?r.clear():r.delete(String(i))},console.debug=function(...i){t.log(e(i))},console.dir=function(i,o){t.log((0,NN.inspect)(i,o))},console.log=function(...i){t.log(e(i))},console.error=function(...i){t.error(e(i))},console.trace=function(...i){let o=new Error().stack.replace(/(.+\n){2}/,""),s="Trace";i.length!==0&&(s+=`: ${e(i)}`),t.log(`${s}
${o}`)},console.warn=function(...i){t.warn(e(i))}}});var g_=X(h_=>{"use strict";Object.defineProperty(h_,"__esModule",{value:!0});var p_;function m_(){if(p_===void 0)throw new Error("No runtime abstraction layer installed");return p_}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");p_=r}t.install=e})(m_||(m_={}));h_.default=m_});var ND=X(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.stringArray=gr.array=gr.func=gr.error=gr.number=gr.string=gr.boolean=void 0;function jW(t){return t===!0||t===!1}gr.boolean=jW;function RD(t){return typeof t=="string"||t instanceof String}gr.string=RD;function qW(t){return typeof t=="number"||t instanceof Number}gr.number=qW;function HW(t){return t instanceof Error}gr.error=HW;function KW(t){return typeof t=="function"}gr.func=KW;function xD(t){return Array.isArray(t)}gr.array=xD;function zW(t){return xD(t)&&t.every(e=>RD(e))}gr.stringArray=zW});var __=X(La=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.Emitter=La.Event=void 0;var YW=g_(),OD;(function(t){let e={dispose(){}};t.None=function(){return e}})(OD||(La.Event=OD={}));var T_=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,YW.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Md=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new T_),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};La.Emitter=Md;Md._noop=function(){}});var ID=X(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.CancellationTokenSource=wa.CancellationToken=void 0;var XW=g_(),JW=ND(),y_=__(),Fd;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:y_.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:y_.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||JW.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Fd||(wa.CancellationToken=Fd={}));var QW=Object.freeze(function(t,e){let r=(0,XW.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Ud=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?QW:(this._emitter||(this._emitter=new y_.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},v_=class{get token(){return this._token||(this._token=new Ud),this._token}cancel(){this._token?this._token.cancel():this._token=Fd.Cancelled}dispose(){this._token?this._token instanceof Ud&&this._token.dispose():this._token=Fd.None}};wa.CancellationTokenSource=v_});var oC=X((Qse,iC)=>{"use strict";iC.exports=wr()});var kG={};Ni(kG,{shared:()=>hp,st:()=>H_});module.exports=gb(kG);var sy;(function(t){(function(e){var r=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(t);typeof r.Reflect=="undefined"?r.Reflect=t:n=i(r.Reflect,n),e(n);function i(o,s){return function(a,l){typeof o[a]!="function"&&Object.defineProperty(o,a,{configurable:!0,writable:!0,value:l}),s&&s(a,l)}}})(function(e){var r=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive!="undefined"?Symbol.toPrimitive:"@@toPrimitive",o=n&&typeof Symbol.iterator!="undefined"?Symbol.iterator:"@@iterator",s=typeof Object.create=="function",a={__proto__:[]}instanceof Array,l=!s&&!a,u={create:s?function(){return Ar(Object.create(null))}:a?function(){return Ar({__proto__:null})}:function(){return Ar({})},has:l?function(A,P){return r.call(A,P)}:function(A,P){return P in A},get:l?function(A,P){return r.call(A,P)?A[P]:void 0}:function(A,P){return A[P]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",d=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Dn(),m=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:is(),v=!f&&typeof WeakMap=="function"?WeakMap:os(),N=new v;function E(A,P,V,z){if(Ae(V)){if(!kt(A))throw new TypeError;if(!mt(P))throw new TypeError;return Pe(A,P)}else{if(!kt(A))throw new TypeError;if(!Ge(P))throw new TypeError;if(!Ge(z)&&!Ae(z)&&!tr(z))throw new TypeError;return tr(z)&&(z=void 0),V=bt(V),W(A,P,V,z)}}e("decorate",E);function I(A,P){function V(z,Z){if(!Ge(z))throw new TypeError;if(!Ae(Z)&&!lr(Z))throw new TypeError;G(A,P,z,Z)}return V}e("metadata",I);function _(A,P,V,z){if(!Ge(V))throw new TypeError;return Ae(z)||(z=bt(z)),G(A,P,V,z)}e("defineMetadata",_);function T(A,P,V){if(!Ge(P))throw new TypeError;return Ae(V)||(V=bt(V)),j(A,P,V)}e("hasMetadata",T);function k(A,P,V){if(!Ge(P))throw new TypeError;return Ae(V)||(V=bt(V)),H(A,P,V)}e("hasOwnMetadata",k);function M(A,P,V){if(!Ge(P))throw new TypeError;return Ae(V)||(V=bt(V)),Te(A,P,V)}e("getMetadata",M);function Q(A,P,V){if(!Ge(P))throw new TypeError;return Ae(V)||(V=bt(V)),ue(A,P,V)}e("getOwnMetadata",Q);function ae(A,P){if(!Ge(A))throw new TypeError;return Ae(P)||(P=bt(P)),U(A,P)}e("getMetadataKeys",ae);function le(A,P){if(!Ge(A))throw new TypeError;return Ae(P)||(P=bt(P)),ve(A,P)}e("getOwnMetadataKeys",le);function Ce(A,P,V){if(!Ge(P))throw new TypeError;Ae(V)||(V=bt(V));var z=L(P,V,!1);if(Ae(z)||!z.delete(A))return!1;if(z.size>0)return!0;var Z=N.get(P);return Z.delete(V),Z.size>0||N.delete(P),!0}e("deleteMetadata",Ce);function Pe(A,P){for(var V=A.length-1;V>=0;--V){var z=A[V],Z=z(P);if(!Ae(Z)&&!tr(Z)){if(!mt(Z))throw new TypeError;P=Z}}return P}function W(A,P,V,z){for(var Z=A.length-1;Z>=0;--Z){var R=A[Z],b=R(P,V,z);if(!Ae(b)&&!tr(b)){if(!Ge(b))throw new TypeError;z=b}}return z}function L(A,P,V){var z=N.get(A);if(Ae(z)){if(!V)return;z=new d,N.set(A,z)}var Z=z.get(P);if(Ae(Z)){if(!V)return;Z=new d,z.set(P,Z)}return Z}function j(A,P,V){var z=H(A,P,V);if(z)return!0;var Z=Kr(P);return tr(Z)?!1:j(A,Z,V)}function H(A,P,V){var z=L(P,V,!1);return Ae(z)?!1:dt(z.has(A))}function Te(A,P,V){var z=H(A,P,V);if(z)return ue(A,P,V);var Z=Kr(P);if(!tr(Z))return Te(A,Z,V)}function ue(A,P,V){var z=L(P,V,!1);if(!Ae(z))return z.get(A)}function G(A,P,V,z){var Z=L(V,z,!0);Z.set(A,P)}function U(A,P){var V=ve(A,P),z=Kr(A);if(z===null)return V;var Z=U(z,P);if(Z.length<=0)return V;if(V.length<=0)return Z;for(var R=new m,b=[],$=0,F=V;$<F.length;$++){var ne=F[$],re=R.has(ne);re||(R.add(ne),b.push(ne))}for(var xe=0,je=Z;xe<je.length;xe++){var ne=je[xe],re=R.has(ne);re||(R.add(ne),b.push(ne))}return b}function ve(A,P){var V=[],z=L(A,P,!1);if(Ae(z))return V;for(var Z=z.keys(),R=Hr(Z),b=0;;){var $=xi(R);if(!$)return V.length=b,V;var F=Jn($);try{V[b]=F}catch(ne){try{ns(R)}finally{throw ne}}b++}}function Re(A){if(A===null)return 1;switch(typeof A){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return A===null?1:6;default:return 6}}function Ae(A){return A===void 0}function tr(A){return A===null}function Ri(A){return typeof A=="symbol"}function Ge(A){return typeof A=="object"?A!==null:typeof A=="function"}function jt(A,P){switch(Re(A)){case 0:return A;case 1:return A;case 2:return A;case 3:return A;case 4:return A;case 5:return A}var V=P===3?"string":P===5?"number":"default",z=_r(A,i);if(z!==void 0){var Z=z.call(A,V);if(Ge(Z))throw new TypeError;return Z}return Xn(A,V==="default"?"number":V)}function Xn(A,P){if(P==="string"){var V=A.toString;if(pt(V)){var z=V.call(A);if(!Ge(z))return z}var Z=A.valueOf;if(pt(Z)){var z=Z.call(A);if(!Ge(z))return z}}else{var Z=A.valueOf;if(pt(Z)){var z=Z.call(A);if(!Ge(z))return z}var R=A.toString;if(pt(R)){var z=R.call(A);if(!Ge(z))return z}}throw new TypeError}function dt(A){return!!A}function qt(A){return""+A}function bt(A){var P=jt(A,3);return Ri(P)?P:qt(P)}function kt(A){return Array.isArray?Array.isArray(A):A instanceof Object?A instanceof Array:Object.prototype.toString.call(A)==="[object Array]"}function pt(A){return typeof A=="function"}function mt(A){return typeof A=="function"}function lr(A){switch(Re(A)){case 3:return!0;case 4:return!0;default:return!1}}function _r(A,P){var V=A[P];if(V!=null){if(!pt(V))throw new TypeError;return V}}function Hr(A){var P=_r(A,o);if(!pt(P))throw new TypeError;var V=P.call(A);if(!Ge(V))throw new TypeError;return V}function Jn(A){return A.value}function xi(A){var P=A.next();return P.done?!1:P}function ns(A){var P=A.return;P&&P.call(A)}function Kr(A){var P=Object.getPrototypeOf(A);if(typeof A!="function"||A===c||P!==c)return P;var V=A.prototype,z=V&&Object.getPrototypeOf(V);if(z==null||z===Object.prototype)return P;var Z=z.constructor;return typeof Z!="function"||Z===A?P:Z}function Dn(){var A={},P=[],V=function(){function b($,F,ne){this._index=0,this._keys=$,this._values=F,this._selector=ne}return b.prototype["@@iterator"]=function(){return this},b.prototype[o]=function(){return this},b.prototype.next=function(){var $=this._index;if($>=0&&$<this._keys.length){var F=this._selector(this._keys[$],this._values[$]);return $+1>=this._keys.length?(this._index=-1,this._keys=P,this._values=P):this._index++,{value:F,done:!1}}return{value:void 0,done:!0}},b.prototype.throw=function($){throw this._index>=0&&(this._index=-1,this._keys=P,this._values=P),$},b.prototype.return=function($){return this._index>=0&&(this._index=-1,this._keys=P,this._values=P),{value:$,done:!0}},b}();return function(){function b(){this._keys=[],this._values=[],this._cacheKey=A,this._cacheIndex=-2}return Object.defineProperty(b.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),b.prototype.has=function($){return this._find($,!1)>=0},b.prototype.get=function($){var F=this._find($,!1);return F>=0?this._values[F]:void 0},b.prototype.set=function($,F){var ne=this._find($,!0);return this._values[ne]=F,this},b.prototype.delete=function($){var F=this._find($,!1);if(F>=0){for(var ne=this._keys.length,re=F+1;re<ne;re++)this._keys[re-1]=this._keys[re],this._values[re-1]=this._values[re];return this._keys.length--,this._values.length--,$===this._cacheKey&&(this._cacheKey=A,this._cacheIndex=-2),!0}return!1},b.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=A,this._cacheIndex=-2},b.prototype.keys=function(){return new V(this._keys,this._values,z)},b.prototype.values=function(){return new V(this._keys,this._values,Z)},b.prototype.entries=function(){return new V(this._keys,this._values,R)},b.prototype["@@iterator"]=function(){return this.entries()},b.prototype[o]=function(){return this.entries()},b.prototype._find=function($,F){return this._cacheKey!==$&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=$)),this._cacheIndex<0&&F&&(this._cacheIndex=this._keys.length,this._keys.push($),this._values.push(void 0)),this._cacheIndex},b}();function z(b,$){return b}function Z(b,$){return $}function R(b,$){return[b,$]}}function is(){return function(){function A(){this._map=new d}return Object.defineProperty(A.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),A.prototype.has=function(P){return this._map.has(P)},A.prototype.add=function(P){return this._map.set(P,P),this},A.prototype.delete=function(P){return this._map.delete(P)},A.prototype.clear=function(){this._map.clear()},A.prototype.keys=function(){return this._map.keys()},A.prototype.values=function(){return this._map.values()},A.prototype.entries=function(){return this._map.entries()},A.prototype["@@iterator"]=function(){return this.keys()},A.prototype[o]=function(){return this.keys()},A}()}function os(){var A=16,P=u.create(),V=z();return function(){function F(){this._key=z()}return F.prototype.has=function(ne){var re=Z(ne,!1);return re!==void 0?u.has(re,this._key):!1},F.prototype.get=function(ne){var re=Z(ne,!1);return re!==void 0?u.get(re,this._key):void 0},F.prototype.set=function(ne,re){var xe=Z(ne,!0);return xe[this._key]=re,this},F.prototype.delete=function(ne){var re=Z(ne,!1);return re!==void 0?delete re[this._key]:!1},F.prototype.clear=function(){this._key=z()},F}();function z(){var F;do F="@@WeakMap@@"+$();while(u.has(P,F));return P[F]=!0,F}function Z(F,ne){if(!r.call(F,V)){if(!ne)return;Object.defineProperty(F,V,{value:u.create()})}return F[V]}function R(F,ne){for(var re=0;re<ne;++re)F[re]=Math.random()*255|0;return F}function b(F){return typeof Uint8Array=="function"?typeof crypto!="undefined"?crypto.getRandomValues(new Uint8Array(F)):typeof msCrypto!="undefined"?msCrypto.getRandomValues(new Uint8Array(F)):R(new Uint8Array(F),F):R(new Array(F),F)}function $(){var F=b(A);F[6]=F[6]&79|64,F[8]=F[8]&191|128;for(var ne="",re=0;re<A;++re){var xe=F[re];(re===4||re===6||re===8)&&(ne+="-"),xe<16&&(ne+="0"),ne+=xe.toString(16).toLowerCase()}return ne}}function Ar(A){return A.__=void 0,delete A.__,A}})})(sy||(sy={}));var Ws=Ht(wr(),1);var at={};Ni(at,{AbstractElement:()=>Ph,AbstractRule:()=>sl,AbstractType:()=>al,Action:()=>ug,Alternatives:()=>cg,ArrayLiteral:()=>$h,ArrayType:()=>Mh,Assignment:()=>fg,BooleanLiteral:()=>Uh,CharacterRange:()=>dg,Condition:()=>Yc,Conjunction:()=>Wh,CrossReference:()=>mg,Disjunction:()=>Gh,EndOfFile:()=>hg,Grammar:()=>qh,GrammarImport:()=>DN,Group:()=>Tg,InferredType:()=>Hh,Interface:()=>Kh,Keyword:()=>_g,LangiumGrammarAstReflection:()=>Ds,LangiumGrammarTerminals:()=>kL,NamedArgument:()=>CN,NegatedToken:()=>yg,Negation:()=>zh,NumberLiteral:()=>Xh,Parameter:()=>Jh,ParameterReference:()=>Qh,ParserRule:()=>eg,ReferenceType:()=>tg,RegexToken:()=>Rg,ReturnType:()=>bN,RuleCall:()=>Ng,SimpleType:()=>ig,StringLiteral:()=>og,TerminalAlternatives:()=>Og,TerminalGroup:()=>Eg,TerminalRule:()=>Jc,TerminalRuleCall:()=>Ag,Type:()=>sg,TypeAttribute:()=>kN,TypeDefinition:()=>wh,UnionType:()=>ag,UnorderedGroup:()=>Dg,UntilToken:()=>Cg,ValueLiteral:()=>Xc,Wildcard:()=>kg,isAbstractElement:()=>yo,isAbstractRule:()=>LL,isAbstractType:()=>wL,isAction:()=>Rn,isAlternatives:()=>Cs,isArrayLiteral:()=>UL,isArrayType:()=>Fh,isAssignment:()=>pr,isBooleanLiteral:()=>Bh,isCharacterRange:()=>pg,isCondition:()=>PL,isConjunction:()=>Vh,isCrossReference:()=>xn,isDisjunction:()=>jh,isEndOfFile:()=>gg,isFeatureName:()=>$L,isGrammar:()=>BL,isGrammarImport:()=>WL,isGroup:()=>an,isInferredType:()=>Qc,isInterface:()=>Zc,isKeyword:()=>nr,isNamedArgument:()=>VL,isNegatedToken:()=>vg,isNegation:()=>Yh,isNumberLiteral:()=>GL,isParameter:()=>jL,isParameterReference:()=>Zh,isParserRule:()=>Et,isPrimitiveType:()=>AN,isReferenceType:()=>rg,isRegexToken:()=>xg,isReturnType:()=>ng,isRuleCall:()=>$r,isSimpleType:()=>ef,isStringLiteral:()=>qL,isTerminalAlternatives:()=>Ig,isTerminalGroup:()=>Sg,isTerminalRule:()=>Pr,isTerminalRuleCall:()=>tf,isType:()=>ll,isTypeAttribute:()=>HL,isTypeDefinition:()=>ML,isUnionType:()=>lg,isUnorderedGroup:()=>bs,isUntilToken:()=>bg,isValueLiteral:()=>FL,isWildcard:()=>Lg,reflection:()=>de});function Be(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function Tt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function il(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function yn(t){return typeof t=="object"&&t!==null&&Be(t.container)&&Tt(t.reference)&&typeof t.message=="string"}var _o=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Be(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),i=[];for(let o of n)this.isSubtype(o,e)&&i.push(o);return this.allSubtypes[e]=i,i}}};function yr(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function vn(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function ol(t){return yr(t)&&typeof t.fullText=="string"}var kL={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},sl="AbstractRule";function LL(t){return de.isInstance(t,sl)}var al="AbstractType";function wL(t){return de.isInstance(t,al)}var Yc="Condition";function PL(t){return de.isInstance(t,Yc)}function $L(t){return AN(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function AN(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var wh="TypeDefinition";function ML(t){return de.isInstance(t,wh)}var Xc="ValueLiteral";function FL(t){return de.isInstance(t,Xc)}var Ph="AbstractElement";function yo(t){return de.isInstance(t,Ph)}var $h="ArrayLiteral";function UL(t){return de.isInstance(t,$h)}var Mh="ArrayType";function Fh(t){return de.isInstance(t,Mh)}var Uh="BooleanLiteral";function Bh(t){return de.isInstance(t,Uh)}var Wh="Conjunction";function Vh(t){return de.isInstance(t,Wh)}var Gh="Disjunction";function jh(t){return de.isInstance(t,Gh)}var qh="Grammar";function BL(t){return de.isInstance(t,qh)}var DN="GrammarImport";function WL(t){return de.isInstance(t,DN)}var Hh="InferredType";function Qc(t){return de.isInstance(t,Hh)}var Kh="Interface";function Zc(t){return de.isInstance(t,Kh)}var CN="NamedArgument";function VL(t){return de.isInstance(t,CN)}var zh="Negation";function Yh(t){return de.isInstance(t,zh)}var Xh="NumberLiteral";function GL(t){return de.isInstance(t,Xh)}var Jh="Parameter";function jL(t){return de.isInstance(t,Jh)}var Qh="ParameterReference";function Zh(t){return de.isInstance(t,Qh)}var eg="ParserRule";function Et(t){return de.isInstance(t,eg)}var tg="ReferenceType";function rg(t){return de.isInstance(t,tg)}var bN="ReturnType";function ng(t){return de.isInstance(t,bN)}var ig="SimpleType";function ef(t){return de.isInstance(t,ig)}var og="StringLiteral";function qL(t){return de.isInstance(t,og)}var Jc="TerminalRule";function Pr(t){return de.isInstance(t,Jc)}var sg="Type";function ll(t){return de.isInstance(t,sg)}var kN="TypeAttribute";function HL(t){return de.isInstance(t,kN)}var ag="UnionType";function lg(t){return de.isInstance(t,ag)}var ug="Action";function Rn(t){return de.isInstance(t,ug)}var cg="Alternatives";function Cs(t){return de.isInstance(t,cg)}var fg="Assignment";function pr(t){return de.isInstance(t,fg)}var dg="CharacterRange";function pg(t){return de.isInstance(t,dg)}var mg="CrossReference";function xn(t){return de.isInstance(t,mg)}var hg="EndOfFile";function gg(t){return de.isInstance(t,hg)}var Tg="Group";function an(t){return de.isInstance(t,Tg)}var _g="Keyword";function nr(t){return de.isInstance(t,_g)}var yg="NegatedToken";function vg(t){return de.isInstance(t,yg)}var Rg="RegexToken";function xg(t){return de.isInstance(t,Rg)}var Ng="RuleCall";function $r(t){return de.isInstance(t,Ng)}var Og="TerminalAlternatives";function Ig(t){return de.isInstance(t,Og)}var Eg="TerminalGroup";function Sg(t){return de.isInstance(t,Eg)}var Ag="TerminalRuleCall";function tf(t){return de.isInstance(t,Ag)}var Dg="UnorderedGroup";function bs(t){return de.isInstance(t,Dg)}var Cg="UntilToken";function bg(t){return de.isInstance(t,Cg)}var kg="Wildcard";function Lg(t){return de.isInstance(t,kg)}var Ds=class extends _o{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case ug:case cg:case fg:case dg:case mg:case hg:case Tg:case _g:case yg:case Rg:case Ng:case Og:case Eg:case Ag:case Dg:case Cg:case kg:return this.isSubtype(Ph,r);case $h:case Xh:case og:return this.isSubtype(Xc,r);case Mh:case tg:case ig:case ag:return this.isSubtype(wh,r);case Uh:return this.isSubtype(Yc,r)||this.isSubtype(Xc,r);case Wh:case Gh:case zh:case Qh:return this.isSubtype(Yc,r);case Hh:case Kh:case sg:return this.isSubtype(al,r);case eg:return this.isSubtype(sl,r)||this.isSubtype(al,r);case Jc:return this.isSubtype(sl,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return al;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return sl;case"Grammar:usedGrammars":return qh;case"NamedArgument:parameter":case"ParameterReference:parameter":return Jh;case"TerminalRuleCall:rule":return Jc;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"Assignment":return{name:"Assignment",properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case"EndOfFile":return{name:"EndOfFile",properties:[{name:"cardinality"},{name:"lookahead"}]};case"Group":return{name:"Group",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case"Keyword":return{name:"Keyword",properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"Wildcard":return{name:"Wildcard",properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}},de=new Ds;var un={};Ni(un,{assignMandatoryProperties:()=>fl,copyAstNode:()=>Wg,findLocalReferences:()=>JL,findRootNode:()=>MN,getContainerOfType:()=>Xr,getDocument:()=>_t,hasContainerOfType:()=>XL,linkContentToContainer:()=>sf,streamAllContents:()=>Mr,streamAst:()=>Fr,streamContents:()=>xo,streamReferences:()=>ws});var vr=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return ir})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=KL(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?ir:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return ir})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(rf(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return ir})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(rf(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return ir})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?ir:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};function KL(t){return typeof t=="string"?t:typeof t=="undefined"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function rf(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Mi=new vr(()=>{},()=>ir),ir=Object.freeze({done:!0,value:void 0});function me(...t){if(t.length===1){let e=t[0];if(e instanceof vr)return e;if(rf(e))return new vr(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new vr(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:ir)}return t.length>1?new vr(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];rf(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return ir}):Mi}var ln=class extends vr{constructor(e,r,n){super(()=>({iterators:n!=null&&n.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let s=i.iterators[i.iterators.length-1].next();if(s.done)i.iterators.pop();else return i.iterators.push(r(s.value)[Symbol.iterator]()),s}return ir})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},ks;(function(t){function e(o){return o.reduce((s,a)=>s+a,0)}t.sum=e;function r(o){return o.reduce((s,a)=>s*a,0)}t.product=r;function n(o){return o.reduce((s,a)=>Math.min(s,a))}t.min=n;function i(o){return o.reduce((s,a)=>Math.max(s,a))}t.max=i})(ks||(ks={}));var Fi={};Ni(Fi,{DefaultNameRegexp:()=>of,RangeComparison:()=>ti,compareRange:()=>wN,findCommentNode:()=>Mg,findDeclarationNodeAtOffset:()=>Xt,findLeafNodeAtOffset:()=>ul,findLeafNodeBeforeOffset:()=>cl,flattenCst:()=>Pg,getInteriorNodes:()=>Ug,getNextNode:()=>Fg,getPreviousNode:()=>$N,getStartlineNode:()=>zL,inRange:()=>nf,isChildNode:()=>$g,isCommentNode:()=>wg,streamCst:()=>vo,toDocumentSegment:()=>Ro,tokenToRange:()=>Ls});function vo(t){return new ln(t,e=>yr(e)?e.content:[],{includeRoot:!0})}function Pg(t){return vo(t).filter(vn)}function $g(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function Ls(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Ro(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var ti;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(ti||(ti={}));function wN(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return ti.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return ti.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?ti.Inside:r?ti.OverlapBack:ti.OverlapFront}function nf(t,e){return wN(t,e)>ti.After}var of=/^[\w\p{L}]$/u;function Xt(t,e,r=of){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return ul(t,e)}}function Mg(t,e){if(t){let r=$N(t,!0);if(r&&wg(r,e))return r;if(ol(t)){let n=t.content.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.content[i];if(wg(o,e))return o}}}}function wg(t,e){return vn(t)&&e.includes(t.tokenType.name)}function ul(t,e){if(vn(t))return t;if(yr(t)){let r=PN(t,e,!1);if(r)return ul(r,e)}}function cl(t,e){if(vn(t))return t;if(yr(t)){let r=PN(t,e,!0);if(r)return cl(r,e)}}function PN(t,e,r){let n=0,i=t.content.length-1,o;for(;n<=i;){let s=Math.floor((n+i)/2),a=t.content[s];if(a.offset<=e&&a.end>e)return a;a.end<=e?(o=r?a:void 0,n=s+1):i=s-1}return o}function $N(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function Fg(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),i=r.content.length-1;for(;n<i;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function zL(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let i=t.container,o=n!=null?n:i.content.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.content[n]),t.range.start.line!==e)break;r=t}return r}function Ug(t,e){let r=YL(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function YL(t,e){let r=LN(t),n=LN(e),i;for(let o=0;o<r.length&&o<n.length;o++){let s=r[o],a=n[o];if(s.parent===a.parent)i={parent:s.parent,a:s.index,b:a.index};else break}return i}function LN(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}function sf(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{Be(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):Be(r)&&(r.$container=t,r.$containerProperty=e))}function Xr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function XL(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function _t(t){let r=MN(t).$document;if(!r)throw new Error("AST node has no document.");return r}function MN(t){for(;t.$container;)t=t.$container;return t}function xo(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e==null?void 0:e.range;return new vr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let i=n.keys[n.keyIndex];if(!i.startsWith("$")){let o=t[i];if(Be(o)){if(n.keyIndex++,Bg(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let s=n.arrayIndex++,a=o[s];if(Be(a)&&Bg(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return ir})}function Mr(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new ln(t,r=>xo(r,e))}function Fr(t,e){if(t){if(e!=null&&e.range&&!Bg(t,e.range))return new ln(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new ln(t,r=>xo(r,e),{includeRoot:!0})}function Bg(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?nf(n,e):!1}function ws(t){return new vr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(Tt(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(Tt(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return ir})}function JL(t,e=_t(t).parseResult.value){let r=[];return Fr(e).forEach(n=>{ws(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),me(r)}function fl(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let i of r.properties)i.defaultValue!==void 0&&n[i.name]===void 0&&(n[i.name]=FN(i.defaultValue))}function FN(t){return Array.isArray(t)?[...t.map(FN)]:t}function Wg(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if(Be(i))r[n]=Wg(i,e);else if(Tt(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let s of i)Be(s)?o.push(Wg(s,e)):Tt(s)?o.push(e(r,n,s.$refNode,s.$refText)):o.push(s);r[n]=o}else r[n]=i;return sf(r),r}var St={};Ni(St,{findAssignment:()=>eT,findNameAssignment:()=>df,findNodeForKeyword:()=>Ms,findNodeForProperty:()=>Bi,findNodesForKeyword:()=>ff,findNodesForKeywordInternal:()=>Zg,findNodesForProperty:()=>$s,getActionAtElement:()=>jN,getActionType:()=>HN,getAllReachableRules:()=>gl,getCrossReferenceTerminal:()=>Tl,getEntryRule:()=>hl,getExplicitRuleType:()=>Do,getHiddenRules:()=>WN,getRuleType:()=>rT,getTypeName:()=>ni,isArrayCardinality:()=>tT,isArrayOperator:()=>tw,isCommentTerminal:()=>Jg,isDataType:()=>rw,isDataTypeRule:()=>_l,isOptionalCardinality:()=>Ao,terminalRegex:()=>Wi});var No=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Ui(t){throw new Error("Error! The input value was not handled.")}var cf={};Ni(cf,{NEWLINE_REGEXP:()=>qg,escapeRegExp:()=>So,getCaseInsensitivePattern:()=>Kg,getTerminalParts:()=>ew,isMultilineComment:()=>Hg,isWhitespace:()=>uf,partialMatches:()=>zg,partialRegExp:()=>BN});function ce(t){return t.charCodeAt(0)}function af(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function Ps(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function Oo(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function dl(){throw Error("Internal Error - Should never get here!")}function Vg(t){return t.type==="Character"}var pl=[];for(let t=ce("0");t<=ce("9");t++)pl.push(t);var ml=[ce("_")].concat(pl);for(let t=ce("a");t<=ce("z");t++)ml.push(t);for(let t=ce("A");t<=ce("Z");t++)ml.push(t);var Gg=[ce(" "),ce("\f"),ce(`
`),ce("\r"),ce("	"),ce("\v"),ce("	"),ce("\xA0"),ce("\u1680"),ce("\u2000"),ce("\u2001"),ce("\u2002"),ce("\u2003"),ce("\u2004"),ce("\u2005"),ce("\u2006"),ce("\u2007"),ce("\u2008"),ce("\u2009"),ce("\u200A"),ce("\u2028"),ce("\u2029"),ce("\u202F"),ce("\u205F"),ce("\u3000"),ce("\uFEFF")];var QL=/[0-9a-fA-F]/,lf=/[0-9]/,ZL=/[1-9]/,Io=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":Ps(n,"global");break;case"i":Ps(n,"ignoreCase");break;case"m":Ps(n,"multiLine");break;case"u":Ps(n,"unicode");break;case"y":Ps(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}Oo(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return dl()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:i,atMost:i};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:i,atMost:o}):r={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;Oo(r);break}if(!(e===!0&&r===void 0)&&Oo(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Oo(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):dl()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[ce(`
`),ce("\r"),ce("\u2028"),ce("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=pl;break;case"D":e=pl,r=!0;break;case"s":e=Gg;break;case"S":e=Gg,r=!0;break;case"w":e=ml;break;case"W":e=ml,r=!0;break}return Oo(e)?{type:"Set",value:e,complement:r}:dl()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=ce("\f");break;case"n":e=ce(`
`);break;case"r":e=ce("\r");break;case"t":e=ce("	");break;case"v":e=ce("\v");break}return Oo(e)?{type:"Character",value:e}:dl()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:ce("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:ce(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:ce(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),i=n.type==="Character";if(Vg(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),s=o.type==="Character";if(Vg(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else af(n.value,e),e.push(ce("-")),af(o.value,e)}else af(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:ce("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(ZL.test(e)===!1)throw Error("Expecting a positive integer");for(;lf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(lf.test(e)===!1)throw Error("Expecting an integer");for(;lf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:ce(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return lf.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let i=0;i<e;i++){let o=this.popChar();if(QL.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Ln=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var qg=/\r?\n/gm,UN=new Io,jg=class extends Ln{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=So(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},Eo=new jg;function ew(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=UN.pattern(t),r=[];for(let n of e.value.value)Eo.reset(t),Eo.visit(n),r.push({start:Eo.startRegexp,end:Eo.endRegex});return r}catch{return[]}}function Hg(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Eo.reset(t),Eo.visit(UN.pattern(t)),Eo.multiline}catch{return!1}}function uf(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function So(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Kg(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:So(e)).join("")}function zg(t,e){let r=BN(t),n=e.match(r);return!!n&&n[0].length>0}function BN(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",s;function a(u){o+=r.substr(n,u),n+=u}function l(u){o+="(?:"+r.substr(n,u)+"|$)",n+=u}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?r[n+2]==="{"?l(r.indexOf("}",n)-n+1):l(6):l(2);break;case"p":case"P":e.unicode?l(r.indexOf("}",n)-n+1):l(2);break;case"k":l(r.indexOf(">",n)-n+1);break;default:l(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],l(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):l(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":s=n,n+=3,i(),o+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,i(),o+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else a(1),o+=i()+"|$)";break;case")":return++n,o;default:l(1);break}return o}return new RegExp(i(),t.flags)}function hl(t){return t.rules.find(e=>Et(e)&&e.entry)}function WN(t){return t.rules.filter(e=>Pr(e)&&e.hidden)}function gl(t,e){let r=new Set,n=hl(t);if(!n)return new Set(t.rules);let i=[n].concat(WN(t));for(let s of i)VN(s,r,e);let o=new Set;for(let s of t.rules)(r.has(s.name)||Pr(s)&&s.hidden)&&o.add(s);return o}function VN(t,e,r){e.add(t.name),Mr(t).forEach(n=>{if($r(n)||r&&tf(n)){let i=n.rule.ref;i&&!e.has(i.name)&&VN(i,e,r)}})}function Tl(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=df(t.type.ref);return e==null?void 0:e.terminal}}function Jg(t){return t.hidden&&!Wi(t).test(" ")}function $s(t,e){return!t||!e?[]:Qg(t,e,t.astNode,!0)}function Bi(t,e,r){if(!t||!e)return;let n=Qg(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Qg(t,e,r,n){if(!n){let i=Xr(t.grammarSource,pr);if(i&&i.feature===e)return[t]}return yr(t)&&t.astNode===r?t.content.flatMap(i=>Qg(i,e,r,!1)):[]}function ff(t,e){return t?Zg(t,e,t==null?void 0:t.astNode):[]}function Ms(t,e,r){if(!t)return;let n=Zg(t,e,t==null?void 0:t.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Zg(t,e,r){if(t.astNode!==r)return[];if(nr(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=vo(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let s=i.value;s.astNode===r?nr(s.grammarSource)&&s.grammarSource.value===e&&o.push(s):n.prune()}while(!i.done);return o}function eT(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=Xr(t.grammarSource,pr);if(n)return n;t=t.container}}function df(t){let e=t;return Qc(e)&&(Rn(e.$container)?e=e.$container.$container:Et(e.$container)?e=e.$container:Ui(e.$container)),GN(t,e,new Map)}function GN(t,e,r){var n;function i(o,s){let a;return Xr(o,pr)||(a=GN(s,s,r)),r.set(t,a),a}if(r.has(t))return r.get(t);r.set(t,void 0);for(let o of Mr(e)){if(pr(o)&&o.feature.toLowerCase()==="name")return r.set(t,o),o;if($r(o)&&Et(o.rule.ref))return i(o,o.rule.ref);if(ef(o)&&(!((n=o.typeRef)===null||n===void 0)&&n.ref))return i(o,o.typeRef.ref)}}function jN(t){let e=t.$container;if(an(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(Rn(o))return o;{let s=Mr(r[i]).find(Rn);if(s)return s}}}if(yo(e))return jN(e)}function Ao(t,e){return t==="?"||t==="*"||an(e)&&!!e.guardCondition}function tT(t){return t==="*"||t==="+"}function tw(t){return t==="+="}function _l(t){return qN(t,new Set)}function qN(t,e){if(e.has(t))return!0;e.add(t);for(let r of Mr(t))if($r(r)){if(!r.rule.ref||Et(r.rule.ref)&&!qN(r.rule.ref,e))return!1}else{if(pr(r))return!1;if(Rn(r))return!1}return!!t.definition}function rw(t){return Xg(t.type,new Set)}function Xg(t,e){if(e.has(t))return!0;if(e.add(t),Fh(t))return!1;if(rg(t))return!1;if(lg(t))return t.types.every(r=>Xg(r,e));if(ef(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return ll(r)?Xg(r.type,e):!1}else return!1}else return!1}function Do(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(Et(e))return e.name;if(Zc(e)||ll(e))return e.name}}}function ni(t){var e;if(Et(t))return _l(t)?t.name:(e=Do(t))!==null&&e!==void 0?e:t.name;if(Zc(t)||ll(t)||ng(t))return t.name;if(Rn(t)){let r=HN(t);if(r)return r}else if(Qc(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function HN(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return ni(t.type.ref)}function rT(t){var e,r,n;return Pr(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":_l(t)?t.name:(n=Do(t))!==null&&n!==void 0?n:t.name}function Wi(t){let e={s:!1,i:!1,u:!1},r=Fs(t.definition,e),n=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(r,n)}var nT=/[\s\S]/.source;function Fs(t,e){if(Ig(t))return nw(t);if(Sg(t))return iw(t);if(pg(t))return aw(t);if(tf(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return ri(Fs(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(vg(t))return sw(t);if(bg(t))return ow(t);if(xg(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),i=t.regex.substring(r+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),ri(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(Lg(t))return ri(nT,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function nw(t){return ri(t.elements.map(e=>Fs(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function iw(t){return ri(t.elements.map(e=>Fs(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function ow(t){return ri(`${nT}*?${Fs(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function sw(t){return ri(`(?!${Fs(t.terminal)})${nT}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function aw(t){return t.right?ri(`[${Yg(t.left)}-${Yg(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):ri(Yg(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Yg(t){return So(t.value)}function ri(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function yl(t,e){let r={stacks:t,tokens:e};return lw(r),r.stacks.flat().forEach(i=>{i.property=void 0}),zN(r.stacks).map(i=>i[i.length-1])}function iT(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,l=s;for(;l.$container;)if(an(l.$container)){a=l.$container;break}else if(yo(l.$container))l=l.$container;else break;if(tT(l.cardinality)){let u=Us({next:{feature:l,type:e.type},cardinalities:r,visited:n,plus:i});for(let c of u)i.add(c.feature);o.push(...u)}if(a){let u=a.elements.indexOf(l);u!==void 0&&u<a.elements.length-1&&o.push(...KN({feature:a,type:e.type},u+1,r,n,i)),o.every(c=>Ao(c.feature.cardinality,c.feature)||Ao(r.get(c.feature))||i.has(c.feature))&&o.push(...iT({next:{feature:a,type:e.type},cardinalities:r,visited:n,plus:i}))}return o}function Co(t){return Be(t)&&(t={feature:t}),Us({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Us(t){var e,r,n;let{next:i,cardinalities:o,visited:s,plus:a}=t;if(i===void 0)return[];let{feature:l,type:u}=i;if(an(l)){if(s.has(l))return[];s.add(l)}if(an(l))return KN(i,0,o,s,a).map(c=>pf(c,l.cardinality,o));if(Cs(l)||bs(l))return l.elements.flatMap(c=>Us({next:{feature:c,type:u,property:i.property},cardinalities:o,visited:s,plus:a})).map(c=>pf(c,l.cardinality,o));if(pr(l)){let c={feature:l.terminal,type:u,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Us({next:c,cardinalities:o,visited:s,plus:a}).map(f=>pf(f,l.cardinality,o))}else{if(Rn(l))return iT({next:{feature:l,type:ni(l),property:(r=i.property)!==null&&r!==void 0?r:l.feature},cardinalities:o,visited:s,plus:a});if($r(l)&&Et(l.rule.ref)){let c=l.rule.ref,f={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=Do(c))!==null&&n!==void 0?n:c.name,property:i.property};return Us({next:f,cardinalities:o,visited:s,plus:a}).map(d=>pf(d,l.cardinality,o))}else return[i]}}function pf(t,e,r){return r.set(t.feature,e),t}function KN(t,e,r,n,i){var o;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},s.push(...Us({next:a,cardinalities:r,visited:n,plus:i})),!!Ao((o=a.feature.cardinality)!==null&&o!==void 0?o:r.get(a.feature),a.feature)););return s}function lw(t){for(let e of t.tokens){let r=zN(t.stacks,e);t.stacks=r}}function zN(t,e){let r=[];for(let n of t)r.push(...uw(n,e));return r}function uw(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(cw)),i=[];for(;t.length>0;){let o=t.pop(),s=iT({next:o,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?oT(a.feature,e):!0);for(let a of s)i.push([...t,a]);if(!s.every(a=>Ao(a.feature.cardinality,a.feature)||Ao(r.get(a.feature))))break}return i}function cw(t){if(t.cardinality==="+")return!0;let e=Xr(t,pr);return!!(e&&e.cardinality==="+")}function oT(t,e){if(nr(t))return t.value===e.image;if($r(t))return fw(t.rule.ref,e);if(xn(t)){let r=Tl(t);if(r)return oT(r,e)}return!1}function fw(t,e){return Et(t)?Co(t.definition).some(n=>oT(n.feature,e)):Pr(t)?Wi(t).test(e.image):!1}function YN(t){let e=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.triggerCharacters)!==null&&i!==void 0?i:[]}))),r=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var Bs=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],i=this.buildContexts(e,r.position),o=(l,u)=>{let c=this.fillCompletionItem(l,u);c&&n.push(c)},s=l=>nr(l.feature)?l.feature.value:l.feature,a=[];for(let l of i)if(await Promise.all(me(l.features).distinct(s).exclude(a).map(u=>this.completionFor(l,u,o))),a.push(...l.features),!this.continueCompletion(n))break;return Ws.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return me(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:Ws.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let l=hl(this.grammar),u=Co({feature:l.definition,type:Do(l)});return o.length>0?(o.shift(),yl(u.map(c=>[c]),o)):u}let s=[...o].splice(i.tokenIndex);return yl([i.elementStack.map(l=>({feature:l}))],s)}*buildContexts(e,r){var n,i;let o=e.parseResult.value.$cstNode;if(!o)return;let s=e.textDocument,a=s.getText(),l=s.offsetAt(r),u={document:e,textDocument:s,offset:l,position:r},c=this.findDataTypeRuleStart(o,l);if(c){let[_,T]=c,k=(n=cl(o,_))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},u),{node:k,tokenOffset:_,tokenEndOffset:T,features:this.findFeaturesAt(s,_)})}let{nextTokenStart:f,nextTokenEnd:d,previousTokenStart:m,previousTokenEnd:v}=this.backtrackToAnyToken(a,l),N=f;l<=f&&m!==void 0&&(N=m);let E=(i=cl(o,N))===null||i===void 0?void 0:i.astNode,I=!0;if(m!==void 0&&v!==void 0&&v===l&&(yield Object.assign(Object.assign({},u),{node:E,tokenOffset:m,tokenEndOffset:v,features:this.findFeaturesAt(s,m)}),I=this.performNextTokenCompletion(e,a.substring(m,v),m,v),I&&(yield Object.assign(Object.assign({},u),{node:E,tokenOffset:v,tokenEndOffset:v,features:this.findFeaturesAt(s,v)}))),E)I&&(yield Object.assign(Object.assign({},u),{node:E,tokenOffset:f,tokenEndOffset:d,features:this.findFeaturesAt(s,f)}));else{let _=hl(this.grammar);if(!_)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},u),{tokenOffset:f,tokenEndOffset:d,features:Co(_.definition)})}}performNextTokenCompletion(e,r,n,i){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,i;let o=Xt(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=Xr(o==null?void 0:o.grammarSource,Et))===null||n===void 0)&&n.dataType);if(s){for(;s;)o=o==null?void 0:o.container,s=!!(!((i=Xr(o==null?void 0:o.grammarSource,Et))===null||i===void 0)&&i.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let i;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,r,n){if(nr(r.feature))return this.completionForKeyword(e,r.feature,n);if(xn(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=Xr(r.feature,pr),o=e.node;if(i&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},fl(this.astReflection,o));let s={reference:{$refText:""},container:o,property:i.feature};try{this.getReferenceCandidates(s,e).forEach(a=>n(e,this.createReferenceCompletionItem(a)))}catch(a){console.error(a)}}}getReferenceCandidates(e,r){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:Ws.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,i;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let u=this.nameProvider.getName(r.node);if(!u)return;o=u}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=o;let a=(i=r.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,o,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var dw=Ht(wr(),1);var XN;(()=>{"use strict";var t={470:i=>{function o(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function s(l,u){for(var c,f="",d=0,m=-1,v=0,N=0;N<=l.length;++N){if(N<l.length)c=l.charCodeAt(N);else{if(c===47)break;c=47}if(c===47){if(!(m===N-1||v===1))if(m!==N-1&&v===2){if(f.length<2||d!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var E=f.lastIndexOf("/");if(E!==f.length-1){E===-1?(f="",d=0):d=(f=f.slice(0,E)).length-1-f.lastIndexOf("/"),m=N,v=0;continue}}else if(f.length===2||f.length===1){f="",d=0,m=N,v=0;continue}}u&&(f.length>0?f+="/..":f="..",d=2)}else f.length>0?f+="/"+l.slice(m+1,N):f=l.slice(m+1,N),d=N-m-1;m=N,v=0}else c===46&&v!==-1?++v:v=-1}return f}var a={resolve:function(){for(var l,u="",c=!1,f=arguments.length-1;f>=-1&&!c;f--){var d;f>=0?d=arguments[f]:(l===void 0&&(l=process.cwd()),d=l),o(d),d.length!==0&&(u=d+"/"+u,c=d.charCodeAt(0)===47)}return u=s(u,!c),c?u.length>0?"/"+u:"/":u.length>0?u:"."},normalize:function(l){if(o(l),l.length===0)return".";var u=l.charCodeAt(0)===47,c=l.charCodeAt(l.length-1)===47;return(l=s(l,!u)).length!==0||u||(l="."),l.length>0&&c&&(l+="/"),u?"/"+l:l},isAbsolute:function(l){return o(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,u=0;u<arguments.length;++u){var c=arguments[u];o(c),c.length>0&&(l===void 0?l=c:l+="/"+c)}return l===void 0?".":a.normalize(l)},relative:function(l,u){if(o(l),o(u),l===u||(l=a.resolve(l))===(u=a.resolve(u)))return"";for(var c=1;c<l.length&&l.charCodeAt(c)===47;++c);for(var f=l.length,d=f-c,m=1;m<u.length&&u.charCodeAt(m)===47;++m);for(var v=u.length-m,N=d<v?d:v,E=-1,I=0;I<=N;++I){if(I===N){if(v>N){if(u.charCodeAt(m+I)===47)return u.slice(m+I+1);if(I===0)return u.slice(m+I)}else d>N&&(l.charCodeAt(c+I)===47?E=I:I===0&&(E=0));break}var _=l.charCodeAt(c+I);if(_!==u.charCodeAt(m+I))break;_===47&&(E=I)}var T="";for(I=c+E+1;I<=f;++I)I!==f&&l.charCodeAt(I)!==47||(T.length===0?T+="..":T+="/..");return T.length>0?T+u.slice(m+E):(m+=E,u.charCodeAt(m)===47&&++m,u.slice(m))},_makeLong:function(l){return l},dirname:function(l){if(o(l),l.length===0)return".";for(var u=l.charCodeAt(0),c=u===47,f=-1,d=!0,m=l.length-1;m>=1;--m)if((u=l.charCodeAt(m))===47){if(!d){f=m;break}}else d=!1;return f===-1?c?"/":".":c&&f===1?"//":l.slice(0,f)},basename:function(l,u){if(u!==void 0&&typeof u!="string")throw new TypeError('"ext" argument must be a string');o(l);var c,f=0,d=-1,m=!0;if(u!==void 0&&u.length>0&&u.length<=l.length){if(u.length===l.length&&u===l)return"";var v=u.length-1,N=-1;for(c=l.length-1;c>=0;--c){var E=l.charCodeAt(c);if(E===47){if(!m){f=c+1;break}}else N===-1&&(m=!1,N=c+1),v>=0&&(E===u.charCodeAt(v)?--v==-1&&(d=c):(v=-1,d=N))}return f===d?d=N:d===-1&&(d=l.length),l.slice(f,d)}for(c=l.length-1;c>=0;--c)if(l.charCodeAt(c)===47){if(!m){f=c+1;break}}else d===-1&&(m=!1,d=c+1);return d===-1?"":l.slice(f,d)},extname:function(l){o(l);for(var u=-1,c=0,f=-1,d=!0,m=0,v=l.length-1;v>=0;--v){var N=l.charCodeAt(v);if(N!==47)f===-1&&(d=!1,f=v+1),N===46?u===-1?u=v:m!==1&&(m=1):u!==-1&&(m=-1);else if(!d){c=v+1;break}}return u===-1||f===-1||m===0||m===1&&u===f-1&&u===c+1?"":l.slice(u,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(u,c){var f=c.dir||c.root,d=c.base||(c.name||"")+(c.ext||"");return f?f===c.root?f+d:f+"/"+d:d}(0,l)},parse:function(l){o(l);var u={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return u;var c,f=l.charCodeAt(0),d=f===47;d?(u.root="/",c=1):c=0;for(var m=-1,v=0,N=-1,E=!0,I=l.length-1,_=0;I>=c;--I)if((f=l.charCodeAt(I))!==47)N===-1&&(E=!1,N=I+1),f===46?m===-1?m=I:_!==1&&(_=1):m!==-1&&(_=-1);else if(!E){v=I+1;break}return m===-1||N===-1||_===0||_===1&&m===N-1&&m===v+1?N!==-1&&(u.base=u.name=v===0&&d?l.slice(1,N):l.slice(v,N)):(v===0&&d?(u.name=l.slice(1,m),u.base=l.slice(1,N)):(u.name=l.slice(v,m),u.base=l.slice(v,N)),u.ext=l.slice(m,N)),v>0?u.dir=l.slice(0,v-1):d&&(u.dir="/"),u},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(i,o)=>{for(var s in o)r.o(o,s)&&!r.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},r.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),r.r=i=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};(()=>{let i;r.r(n),r.d(n,{URI:()=>d,Utils:()=>Pe}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function l(W,L){if(!W.scheme&&L)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${W.authority}", path: "${W.path}", query: "${W.query}", fragment: "${W.fragment}"}`);if(W.scheme&&!o.test(W.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(W.path){if(W.authority){if(!s.test(W.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(W.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let u="",c="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class d{constructor(L,j,H,Te,ue,G=!1){Oi(this,"scheme");Oi(this,"authority");Oi(this,"path");Oi(this,"query");Oi(this,"fragment");typeof L=="object"?(this.scheme=L.scheme||u,this.authority=L.authority||u,this.path=L.path||u,this.query=L.query||u,this.fragment=L.fragment||u):(this.scheme=function(U,ve){return U||ve?U:"file"}(L,G),this.authority=j||u,this.path=function(U,ve){switch(U){case"https":case"http":case"file":ve?ve[0]!==c&&(ve=c+ve):ve=c}return ve}(this.scheme,H||u),this.query=Te||u,this.fragment=ue||u,l(this,G))}static isUri(L){return L instanceof d||!!L&&typeof L.authority=="string"&&typeof L.fragment=="string"&&typeof L.path=="string"&&typeof L.query=="string"&&typeof L.scheme=="string"&&typeof L.fsPath=="string"&&typeof L.with=="function"&&typeof L.toString=="function"}get fsPath(){return _(this,!1)}with(L){if(!L)return this;let{scheme:j,authority:H,path:Te,query:ue,fragment:G}=L;return j===void 0?j=this.scheme:j===null&&(j=u),H===void 0?H=this.authority:H===null&&(H=u),Te===void 0?Te=this.path:Te===null&&(Te=u),ue===void 0?ue=this.query:ue===null&&(ue=u),G===void 0?G=this.fragment:G===null&&(G=u),j===this.scheme&&H===this.authority&&Te===this.path&&ue===this.query&&G===this.fragment?this:new v(j,H,Te,ue,G)}static parse(L,j=!1){let H=f.exec(L);return H?new v(H[2]||u,Q(H[4]||u),Q(H[5]||u),Q(H[7]||u),Q(H[9]||u),j):new v(u,u,u,u,u)}static file(L){let j=u;if(i&&(L=L.replace(/\\/g,c)),L[0]===c&&L[1]===c){let H=L.indexOf(c,2);H===-1?(j=L.substring(2),L=c):(j=L.substring(2,H),L=L.substring(H)||c)}return new v("file",j,L,u,u)}static from(L){let j=new v(L.scheme,L.authority,L.path,L.query,L.fragment);return l(j,!0),j}toString(L=!1){return T(this,L)}toJSON(){return this}static revive(L){if(L){if(L instanceof d)return L;{let j=new v(L);return j._formatted=L.external,j._fsPath=L._sep===m?L.fsPath:null,j}}return L}}let m=i?1:void 0;class v extends d{constructor(){super(...arguments);Oi(this,"_formatted",null);Oi(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=_(this,!1)),this._fsPath}toString(j=!1){return j?T(this,!0):(this._formatted||(this._formatted=T(this,!1)),this._formatted)}toJSON(){let j={$mid:1};return this._fsPath&&(j.fsPath=this._fsPath,j._sep=m),this._formatted&&(j.external=this._formatted),this.path&&(j.path=this.path),this.scheme&&(j.scheme=this.scheme),this.authority&&(j.authority=this.authority),this.query&&(j.query=this.query),this.fragment&&(j.fragment=this.fragment),j}}let N={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function E(W,L,j){let H,Te=-1;for(let ue=0;ue<W.length;ue++){let G=W.charCodeAt(ue);if(G>=97&&G<=122||G>=65&&G<=90||G>=48&&G<=57||G===45||G===46||G===95||G===126||L&&G===47||j&&G===91||j&&G===93||j&&G===58)Te!==-1&&(H+=encodeURIComponent(W.substring(Te,ue)),Te=-1),H!==void 0&&(H+=W.charAt(ue));else{H===void 0&&(H=W.substr(0,ue));let U=N[G];U!==void 0?(Te!==-1&&(H+=encodeURIComponent(W.substring(Te,ue)),Te=-1),H+=U):Te===-1&&(Te=ue)}}return Te!==-1&&(H+=encodeURIComponent(W.substring(Te))),H!==void 0?H:W}function I(W){let L;for(let j=0;j<W.length;j++){let H=W.charCodeAt(j);H===35||H===63?(L===void 0&&(L=W.substr(0,j)),L+=N[H]):L!==void 0&&(L+=W[j])}return L!==void 0?L:W}function _(W,L){let j;return j=W.authority&&W.path.length>1&&W.scheme==="file"?`//${W.authority}${W.path}`:W.path.charCodeAt(0)===47&&(W.path.charCodeAt(1)>=65&&W.path.charCodeAt(1)<=90||W.path.charCodeAt(1)>=97&&W.path.charCodeAt(1)<=122)&&W.path.charCodeAt(2)===58?L?W.path.substr(1):W.path[1].toLowerCase()+W.path.substr(2):W.path,i&&(j=j.replace(/\//g,"\\")),j}function T(W,L){let j=L?I:E,H="",{scheme:Te,authority:ue,path:G,query:U,fragment:ve}=W;if(Te&&(H+=Te,H+=":"),(ue||Te==="file")&&(H+=c,H+=c),ue){let Re=ue.indexOf("@");if(Re!==-1){let Ae=ue.substr(0,Re);ue=ue.substr(Re+1),Re=Ae.lastIndexOf(":"),Re===-1?H+=j(Ae,!1,!1):(H+=j(Ae.substr(0,Re),!1,!1),H+=":",H+=j(Ae.substr(Re+1),!1,!0)),H+="@"}ue=ue.toLowerCase(),Re=ue.lastIndexOf(":"),Re===-1?H+=j(ue,!1,!0):(H+=j(ue.substr(0,Re),!1,!0),H+=ue.substr(Re))}if(G){if(G.length>=3&&G.charCodeAt(0)===47&&G.charCodeAt(2)===58){let Re=G.charCodeAt(1);Re>=65&&Re<=90&&(G=`/${String.fromCharCode(Re+32)}:${G.substr(3)}`)}else if(G.length>=2&&G.charCodeAt(1)===58){let Re=G.charCodeAt(0);Re>=65&&Re<=90&&(G=`${String.fromCharCode(Re+32)}:${G.substr(2)}`)}H+=j(G,!0,!1)}return U&&(H+="?",H+=j(U,!1,!1)),ve&&(H+="#",H+=L?ve:E(ve,!1,!1)),H}function k(W){try{return decodeURIComponent(W)}catch{return W.length>3?W.substr(0,3)+k(W.substr(3)):W}}let M=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Q(W){return W.match(M)?W.replace(M,L=>k(L)):W}var ae=r(470);let le=ae.posix||ae,Ce="/";var Pe;(function(W){W.joinPath=function(L,...j){return L.with({path:le.join(L.path,...j)})},W.resolvePath=function(L,...j){let H=L.path,Te=!1;H[0]!==Ce&&(H=Ce+H,Te=!0);let ue=le.resolve(H,...j);return Te&&ue[0]===Ce&&!L.authority&&(ue=ue.substring(1)),L.with({path:ue})},W.dirname=function(L){if(L.path.length===0||L.path===Ce)return L;let j=le.dirname(L.path);return j.length===1&&j.charCodeAt(0)===46&&(j=""),L.with({path:j})},W.basename=function(L){return le.basename(L.path)},W.extname=function(L){return le.extname(L.path)}})(Pe||(Pe={}))})(),XN=n})();var{URI:qe,Utils:Vs}=XN;var Pt;(function(t){t.basename=Vs.basename,t.dirname=Vs.dirname,t.extname=Vs.extname,t.joinPath=Vs.joinPath,t.resolvePath=Vs.resolvePath;function e(n,i){return(n==null?void 0:n.toString())===(i==null?void 0:i.toString())}t.equals=e;function r(n,i){let o=typeof n=="string"?n:n.path,s=typeof i=="string"?i:i.path,a=o.split("/").filter(d=>d.length>0),l=s.split("/").filter(d=>d.length>0),u=0;for(;u<a.length&&a[u]===l[u];u++);let c="../".repeat(a.length-u),f=l.slice(u).join("/");return c+f}t.relative=r})(Pt||(Pt={}));var JN=Ht(wr(),1);var mf=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=Xt(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[JN.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.astNode.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r!=null&&r.astNode){let n=_t(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var ZD=Ht(wr(),1);function sT(t){let e=[],r=t.Grammar;for(let n of r.rules)Pr(n)&&Jg(n)&&Hg(Wi(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:of}}var pw=typeof global=="object"&&global&&global.Object===Object&&global,hf=pw;var mw=typeof self=="object"&&self&&self.Object===Object&&self,hw=hf||mw||Function("return this")(),Wt=hw;var gw=Wt.Symbol,Jt=gw;var QN=Object.prototype,Tw=QN.hasOwnProperty,_w=QN.toString,vl=Jt?Jt.toStringTag:void 0;function yw(t){var e=Tw.call(t,vl),r=t[vl];try{t[vl]=void 0;var n=!0}catch{}var i=_w.call(t);return n&&(e?t[vl]=r:delete t[vl]),i}var ZN=yw;var vw=Object.prototype,Rw=vw.toString;function xw(t){return Rw.call(t)}var eO=xw;var Nw="[object Null]",Ow="[object Undefined]",tO=Jt?Jt.toStringTag:void 0;function Iw(t){return t==null?t===void 0?Ow:Nw:tO&&tO in Object(t)?ZN(t):eO(t)}var Rr=Iw;function Ew(t){return t!=null&&typeof t=="object"}var $t=Ew;var Sw="[object Symbol]";function Aw(t){return typeof t=="symbol"||$t(t)&&Rr(t)==Sw}var wn=Aw;function Dw(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var Pn=Dw;var Cw=Array.isArray,ie=Cw;var bw=1/0,rO=Jt?Jt.prototype:void 0,nO=rO?rO.toString:void 0;function iO(t){if(typeof t=="string")return t;if(ie(t))return Pn(t,iO)+"";if(wn(t))return nO?nO.call(t):"";var e=t+"";return e=="0"&&1/t==-bw?"-0":e}var oO=iO;var kw=/\s/;function Lw(t){for(var e=t.length;e--&&kw.test(t.charAt(e)););return e}var sO=Lw;var ww=/^\s+/;function Pw(t){return t&&t.slice(0,sO(t)+1).replace(ww,"")}var aO=Pw;function $w(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var yt=$w;var lO=NaN,Mw=/^[-+]0x[0-9a-f]+$/i,Fw=/^0b[01]+$/i,Uw=/^0o[0-7]+$/i,Bw=parseInt;function Ww(t){if(typeof t=="number")return t;if(wn(t))return lO;if(yt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=yt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=aO(t);var r=Fw.test(t);return r||Uw.test(t)?Bw(t.slice(2),r?2:8):Mw.test(t)?lO:+t}var uO=Ww;var cO=1/0,Vw=17976931348623157e292;function Gw(t){if(!t)return t===0?t:0;if(t=uO(t),t===cO||t===-cO){var e=t<0?-1:1;return e*Vw}return t===t?t:0}var fO=Gw;function jw(t){var e=fO(t),r=e%1;return e===e?r?e-r:e:0}var $n=jw;function qw(t){return t}var Ur=qw;var Hw="[object AsyncFunction]",Kw="[object Function]",zw="[object GeneratorFunction]",Yw="[object Proxy]";function Xw(t){if(!yt(t))return!1;var e=Rr(t);return e==Kw||e==zw||e==Hw||e==Yw}var xr=Xw;var Jw=Wt["__core-js_shared__"],gf=Jw;var dO=function(){var t=/[^.]+$/.exec(gf&&gf.keys&&gf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Qw(t){return!!dO&&dO in t}var pO=Qw;var Zw=Function.prototype,eP=Zw.toString;function tP(t){if(t!=null){try{return eP.call(t)}catch{}try{return t+""}catch{}}return""}var ii=tP;var rP=/[\\^$.*+?()[\]{}|]/g,nP=/^\[object .+?Constructor\]$/,iP=Function.prototype,oP=Object.prototype,sP=iP.toString,aP=oP.hasOwnProperty,lP=RegExp("^"+sP.call(aP).replace(rP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function uP(t){if(!yt(t)||pO(t))return!1;var e=xr(t)?lP:nP;return e.test(ii(t))}var mO=uP;function cP(t,e){return t==null?void 0:t[e]}var hO=cP;function fP(t,e){var r=hO(t,e);return mO(r)?r:void 0}var Br=fP;var dP=Br(Wt,"WeakMap"),Tf=dP;var gO=Object.create,pP=function(){function t(){}return function(e){if(!yt(e))return{};if(gO)return gO(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),TO=pP;function mP(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var _O=mP;function hP(){}var vt=hP;function gP(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var yO=gP;var TP=800,_P=16,yP=Date.now;function vP(t){var e=0,r=0;return function(){var n=yP(),i=_P-(n-r);if(r=n,i>0){if(++e>=TP)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var vO=vP;function RP(t){return function(){return t}}var RO=RP;var xP=function(){try{var t=Br(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Gs=xP;var NP=Gs?function(t,e){return Gs(t,"toString",{configurable:!0,enumerable:!1,value:RO(e),writable:!0})}:Ur,xO=NP;var OP=vO(xO),NO=OP;function IP(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var _f=IP;function EP(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}var yf=EP;function SP(t){return t!==t}var OO=SP;function AP(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var IO=AP;function DP(t,e,r){return e===e?IO(t,e,r):yf(t,OO,r)}var js=DP;function CP(t,e){var r=t==null?0:t.length;return!!r&&js(t,e,0)>-1}var vf=CP;var bP=9007199254740991,kP=/^(?:0|[1-9]\d*)$/;function LP(t,e){var r=typeof t;return e=e==null?bP:e,!!e&&(r=="number"||r!="symbol"&&kP.test(t))&&t>-1&&t%1==0&&t<e}var Vi=LP;function wP(t,e,r){e=="__proto__"&&Gs?Gs(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var qs=wP;function PP(t,e){return t===e||t!==t&&e!==e}var Mn=PP;var $P=Object.prototype,MP=$P.hasOwnProperty;function FP(t,e,r){var n=t[e];(!(MP.call(t,e)&&Mn(n,r))||r===void 0&&!(e in t))&&qs(t,e,r)}var Gi=FP;function UP(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=n?n(r[a],t[a],a,r,t):void 0;l===void 0&&(l=t[a]),i?qs(r,a,l):Gi(r,a,l)}return r}var Fn=UP;var EO=Math.max;function BP(t,e,r){return e=EO(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=EO(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),_O(t,this,a)}}var SO=BP;function WP(t,e){return NO(SO(t,e,Ur),t+"")}var Hs=WP;var VP=9007199254740991;function GP(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=VP}var Ks=GP;function jP(t){return t!=null&&Ks(t.length)&&!xr(t)}var Vt=jP;function qP(t,e,r){if(!yt(r))return!1;var n=typeof e;return(n=="number"?Vt(r)&&Vi(e,r.length):n=="string"&&e in r)?Mn(r[e],t):!1}var ji=qP;function HP(t){return Hs(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&ji(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}var AO=HP;var KP=Object.prototype;function zP(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||KP;return t===r}var Un=zP;function YP(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var DO=YP;var XP="[object Arguments]";function JP(t){return $t(t)&&Rr(t)==XP}var aT=JP;var CO=Object.prototype,QP=CO.hasOwnProperty,ZP=CO.propertyIsEnumerable,e$=aT(function(){return arguments}())?aT:function(t){return $t(t)&&QP.call(t,"callee")&&!ZP.call(t,"callee")},qi=e$;function t$(){return!1}var bO=t$;var wO=typeof exports=="object"&&exports&&!exports.nodeType&&exports,kO=wO&&typeof module=="object"&&module&&!module.nodeType&&module,r$=kO&&kO.exports===wO,LO=r$?Wt.Buffer:void 0,n$=LO?LO.isBuffer:void 0,i$=n$||bO,oi=i$;var o$="[object Arguments]",s$="[object Array]",a$="[object Boolean]",l$="[object Date]",u$="[object Error]",c$="[object Function]",f$="[object Map]",d$="[object Number]",p$="[object Object]",m$="[object RegExp]",h$="[object Set]",g$="[object String]",T$="[object WeakMap]",_$="[object ArrayBuffer]",y$="[object DataView]",v$="[object Float32Array]",R$="[object Float64Array]",x$="[object Int8Array]",N$="[object Int16Array]",O$="[object Int32Array]",I$="[object Uint8Array]",E$="[object Uint8ClampedArray]",S$="[object Uint16Array]",A$="[object Uint32Array]",nt={};nt[v$]=nt[R$]=nt[x$]=nt[N$]=nt[O$]=nt[I$]=nt[E$]=nt[S$]=nt[A$]=!0;nt[o$]=nt[s$]=nt[_$]=nt[a$]=nt[y$]=nt[l$]=nt[u$]=nt[c$]=nt[f$]=nt[d$]=nt[p$]=nt[m$]=nt[h$]=nt[g$]=nt[T$]=!1;function D$(t){return $t(t)&&Ks(t.length)&&!!nt[Rr(t)]}var PO=D$;function C$(t){return function(e){return t(e)}}var Bn=C$;var $O=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Rl=$O&&typeof module=="object"&&module&&!module.nodeType&&module,b$=Rl&&Rl.exports===$O,lT=b$&&hf.process,k$=function(){try{var t=Rl&&Rl.require&&Rl.require("util").types;return t||lT&&lT.binding&&lT.binding("util")}catch{}}(),cn=k$;var MO=cn&&cn.isTypedArray,L$=MO?Bn(MO):PO,zs=L$;var w$=Object.prototype,P$=w$.hasOwnProperty;function $$(t,e){var r=ie(t),n=!r&&qi(t),i=!r&&!n&&oi(t),o=!r&&!n&&!i&&zs(t),s=r||n||i||o,a=s?DO(t.length,String):[],l=a.length;for(var u in t)(e||P$.call(t,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Vi(u,l)))&&a.push(u);return a}var Rf=$$;function M$(t,e){return function(r){return t(e(r))}}var xf=M$;var F$=xf(Object.keys,Object),FO=F$;var U$=Object.prototype,B$=U$.hasOwnProperty;function W$(t){if(!Un(t))return FO(t);var e=[];for(var r in Object(t))B$.call(t,r)&&r!="constructor"&&e.push(r);return e}var Nf=W$;function V$(t){return Vt(t)?Rf(t):Nf(t)}var Xe=V$;var G$=Object.prototype,j$=G$.hasOwnProperty,q$=AO(function(t,e){if(Un(e)||Vt(e)){Fn(e,Xe(e),t);return}for(var r in e)j$.call(e,r)&&Gi(t,r,e[r])}),or=q$;function H$(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var UO=H$;var K$=Object.prototype,z$=K$.hasOwnProperty;function Y$(t){if(!yt(t))return UO(t);var e=Un(t),r=[];for(var n in t)n=="constructor"&&(e||!z$.call(t,n))||r.push(n);return r}var BO=Y$;function X$(t){return Vt(t)?Rf(t,!0):BO(t)}var Hi=X$;var J$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q$=/^\w*$/;function Z$(t,e){if(ie(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||wn(t)?!0:Q$.test(t)||!J$.test(t)||e!=null&&t in Object(e)}var Ys=Z$;var eM=Br(Object,"create"),si=eM;function tM(){this.__data__=si?si(null):{},this.size=0}var WO=tM;function rM(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var VO=rM;var nM="__lodash_hash_undefined__",iM=Object.prototype,oM=iM.hasOwnProperty;function sM(t){var e=this.__data__;if(si){var r=e[t];return r===nM?void 0:r}return oM.call(e,t)?e[t]:void 0}var GO=sM;var aM=Object.prototype,lM=aM.hasOwnProperty;function uM(t){var e=this.__data__;return si?e[t]!==void 0:lM.call(e,t)}var jO=uM;var cM="__lodash_hash_undefined__";function fM(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=si&&e===void 0?cM:e,this}var qO=fM;function Xs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Xs.prototype.clear=WO;Xs.prototype.delete=VO;Xs.prototype.get=GO;Xs.prototype.has=jO;Xs.prototype.set=qO;var uT=Xs;function dM(){this.__data__=[],this.size=0}var HO=dM;function pM(t,e){for(var r=t.length;r--;)if(Mn(t[r][0],e))return r;return-1}var Ki=pM;var mM=Array.prototype,hM=mM.splice;function gM(t){var e=this.__data__,r=Ki(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():hM.call(e,r,1),--this.size,!0}var KO=gM;function TM(t){var e=this.__data__,r=Ki(e,t);return r<0?void 0:e[r][1]}var zO=TM;function _M(t){return Ki(this.__data__,t)>-1}var YO=_M;function yM(t,e){var r=this.__data__,n=Ki(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var XO=yM;function Js(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Js.prototype.clear=HO;Js.prototype.delete=KO;Js.prototype.get=zO;Js.prototype.has=YO;Js.prototype.set=XO;var zi=Js;var vM=Br(Wt,"Map"),Yi=vM;function RM(){this.size=0,this.__data__={hash:new uT,map:new(Yi||zi),string:new uT}}var JO=RM;function xM(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var QO=xM;function NM(t,e){var r=t.__data__;return QO(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Xi=NM;function OM(t){var e=Xi(this,t).delete(t);return this.size-=e?1:0,e}var ZO=OM;function IM(t){return Xi(this,t).get(t)}var eI=IM;function EM(t){return Xi(this,t).has(t)}var tI=EM;function SM(t,e){var r=Xi(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var rI=SM;function Qs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Qs.prototype.clear=JO;Qs.prototype.delete=ZO;Qs.prototype.get=eI;Qs.prototype.has=tI;Qs.prototype.set=rI;var bo=Qs;var AM="Expected a function";function cT(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(AM);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(cT.Cache||bo),r}cT.Cache=bo;var nI=cT;var DM=500;function CM(t){var e=nI(t,function(n){return r.size===DM&&r.clear(),n}),r=e.cache;return e}var iI=CM;var bM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kM=/\\(\\)?/g,LM=iI(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(bM,function(r,n,i,o){e.push(i?o.replace(kM,"$1"):n||r)}),e}),oI=LM;function wM(t){return t==null?"":oO(t)}var sI=wM;function PM(t,e){return ie(t)?t:Ys(t,e)?[t]:oI(sI(t))}var Ji=PM;var $M=1/0;function MM(t){if(typeof t=="string"||wn(t))return t;var e=t+"";return e=="0"&&1/t==-$M?"-0":e}var Wn=MM;function FM(t,e){e=Ji(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Wn(e[r++])];return r&&r==n?t:void 0}var Zs=FM;function UM(t,e,r){var n=t==null?void 0:Zs(t,e);return n===void 0?r:n}var aI=UM;function BM(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var ea=BM;var lI=Jt?Jt.isConcatSpreadable:void 0;function WM(t){return ie(t)||qi(t)||!!(lI&&t&&t[lI])}var uI=WM;function cI(t,e,r,n,i){var o=-1,s=t.length;for(r||(r=uI),i||(i=[]);++o<s;){var a=t[o];e>0&&r(a)?e>1?cI(a,e-1,r,n,i):ea(i,a):n||(i[i.length]=a)}return i}var ta=cI;function VM(t){var e=t==null?0:t.length;return e?ta(t,1):[]}var Mt=VM;var GM=xf(Object.getPrototypeOf,Object),Of=GM;function jM(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}var If=jM;function qM(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}var fI=qM;function HM(){this.__data__=new zi,this.size=0}var dI=HM;function KM(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var pI=KM;function zM(t){return this.__data__.get(t)}var mI=zM;function YM(t){return this.__data__.has(t)}var hI=YM;var XM=200;function JM(t,e){var r=this.__data__;if(r instanceof zi){var n=r.__data__;if(!Yi||n.length<XM-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new bo(n)}return r.set(t,e),this.size=r.size,this}var gI=JM;function ra(t){var e=this.__data__=new zi(t);this.size=e.size}ra.prototype.clear=dI;ra.prototype.delete=pI;ra.prototype.get=mI;ra.prototype.has=hI;ra.prototype.set=gI;var Qi=ra;function QM(t,e){return t&&Fn(e,Xe(e),t)}var TI=QM;function ZM(t,e){return t&&Fn(e,Hi(e),t)}var _I=ZM;var xI=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yI=xI&&typeof module=="object"&&module&&!module.nodeType&&module,e0=yI&&yI.exports===xI,vI=e0?Wt.Buffer:void 0,RI=vI?vI.allocUnsafe:void 0;function t0(t,e){if(e)return t.slice();var r=t.length,n=RI?RI(r):new t.constructor(r);return t.copy(n),n}var NI=t0;function r0(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}var na=r0;function n0(){return[]}var Ef=n0;var i0=Object.prototype,o0=i0.propertyIsEnumerable,OI=Object.getOwnPropertySymbols,s0=OI?function(t){return t==null?[]:(t=Object(t),na(OI(t),function(e){return o0.call(t,e)}))}:Ef,ia=s0;function a0(t,e){return Fn(t,ia(t),e)}var II=a0;var l0=Object.getOwnPropertySymbols,u0=l0?function(t){for(var e=[];t;)ea(e,ia(t)),t=Of(t);return e}:Ef,Sf=u0;function c0(t,e){return Fn(t,Sf(t),e)}var EI=c0;function f0(t,e,r){var n=e(t);return ie(t)?n:ea(n,r(t))}var Af=f0;function d0(t){return Af(t,Xe,ia)}var xl=d0;function p0(t){return Af(t,Hi,Sf)}var Df=p0;var m0=Br(Wt,"DataView"),Cf=m0;var h0=Br(Wt,"Promise"),bf=h0;var g0=Br(Wt,"Set"),Zi=g0;var SI="[object Map]",T0="[object Object]",AI="[object Promise]",DI="[object Set]",CI="[object WeakMap]",bI="[object DataView]",_0=ii(Cf),y0=ii(Yi),v0=ii(bf),R0=ii(Zi),x0=ii(Tf),ko=Rr;(Cf&&ko(new Cf(new ArrayBuffer(1)))!=bI||Yi&&ko(new Yi)!=SI||bf&&ko(bf.resolve())!=AI||Zi&&ko(new Zi)!=DI||Tf&&ko(new Tf)!=CI)&&(ko=function(t){var e=Rr(t),r=e==T0?t.constructor:void 0,n=r?ii(r):"";if(n)switch(n){case _0:return bI;case y0:return SI;case v0:return AI;case R0:return DI;case x0:return CI}return e});var Nn=ko;var N0=Object.prototype,O0=N0.hasOwnProperty;function I0(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&O0.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var kI=I0;var E0=Wt.Uint8Array,oa=E0;function S0(t){var e=new t.constructor(t.byteLength);return new oa(e).set(new oa(t)),e}var sa=S0;function A0(t,e){var r=e?sa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var LI=A0;var D0=/\w*$/;function C0(t){var e=new t.constructor(t.source,D0.exec(t));return e.lastIndex=t.lastIndex,e}var wI=C0;var PI=Jt?Jt.prototype:void 0,$I=PI?PI.valueOf:void 0;function b0(t){return $I?Object($I.call(t)):{}}var MI=b0;function k0(t,e){var r=e?sa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var FI=k0;var L0="[object Boolean]",w0="[object Date]",P0="[object Map]",$0="[object Number]",M0="[object RegExp]",F0="[object Set]",U0="[object String]",B0="[object Symbol]",W0="[object ArrayBuffer]",V0="[object DataView]",G0="[object Float32Array]",j0="[object Float64Array]",q0="[object Int8Array]",H0="[object Int16Array]",K0="[object Int32Array]",z0="[object Uint8Array]",Y0="[object Uint8ClampedArray]",X0="[object Uint16Array]",J0="[object Uint32Array]";function Q0(t,e,r){var n=t.constructor;switch(e){case W0:return sa(t);case L0:case w0:return new n(+t);case V0:return LI(t,r);case G0:case j0:case q0:case H0:case K0:case z0:case Y0:case X0:case J0:return FI(t,r);case P0:return new n;case $0:case U0:return new n(t);case M0:return wI(t);case F0:return new n;case B0:return MI(t)}}var UI=Q0;function Z0(t){return typeof t.constructor=="function"&&!Un(t)?TO(Of(t)):{}}var BI=Z0;var eF="[object Map]";function tF(t){return $t(t)&&Nn(t)==eF}var WI=tF;var VI=cn&&cn.isMap,rF=VI?Bn(VI):WI,GI=rF;var nF="[object Set]";function iF(t){return $t(t)&&Nn(t)==nF}var jI=iF;var qI=cn&&cn.isSet,oF=qI?Bn(qI):jI,HI=oF;var sF=1,aF=2,lF=4,KI="[object Arguments]",uF="[object Array]",cF="[object Boolean]",fF="[object Date]",dF="[object Error]",zI="[object Function]",pF="[object GeneratorFunction]",mF="[object Map]",hF="[object Number]",YI="[object Object]",gF="[object RegExp]",TF="[object Set]",_F="[object String]",yF="[object Symbol]",vF="[object WeakMap]",RF="[object ArrayBuffer]",xF="[object DataView]",NF="[object Float32Array]",OF="[object Float64Array]",IF="[object Int8Array]",EF="[object Int16Array]",SF="[object Int32Array]",AF="[object Uint8Array]",DF="[object Uint8ClampedArray]",CF="[object Uint16Array]",bF="[object Uint32Array]",Je={};Je[KI]=Je[uF]=Je[RF]=Je[xF]=Je[cF]=Je[fF]=Je[NF]=Je[OF]=Je[IF]=Je[EF]=Je[SF]=Je[mF]=Je[hF]=Je[YI]=Je[gF]=Je[TF]=Je[_F]=Je[yF]=Je[AF]=Je[DF]=Je[CF]=Je[bF]=!0;Je[dF]=Je[zI]=Je[vF]=!1;function kf(t,e,r,n,i,o){var s,a=e&sF,l=e&aF,u=e&lF;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!yt(t))return t;var c=ie(t);if(c){if(s=kI(t),!a)return yO(t,s)}else{var f=Nn(t),d=f==zI||f==pF;if(oi(t))return NI(t,a);if(f==YI||f==KI||d&&!i){if(s=l||d?{}:BI(t),!a)return l?EI(t,_I(s,t)):II(t,TI(s,t))}else{if(!Je[f])return i?t:{};s=UI(t,f,a)}}o||(o=new Qi);var m=o.get(t);if(m)return m;o.set(t,s),HI(t)?t.forEach(function(E){s.add(kf(E,e,r,E,t,o))}):GI(t)&&t.forEach(function(E,I){s.set(I,kf(E,e,r,I,t,o))});var v=u?l?Df:xl:l?Hi:Xe,N=c?void 0:v(t);return _f(N||t,function(E,I){N&&(I=E,E=t[I]),Gi(s,I,kf(E,e,r,I,t,o))}),s}var XI=kf;var kF=4;function LF(t){return XI(t,kF)}var Qe=LF;function wF(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}var Vn=wF;var PF="__lodash_hash_undefined__";function $F(t){return this.__data__.set(t,PF),this}var JI=$F;function MF(t){return this.__data__.has(t)}var QI=MF;function Lf(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new bo;++e<r;)this.add(t[e])}Lf.prototype.add=Lf.prototype.push=JI;Lf.prototype.has=QI;var aa=Lf;function FF(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var wf=FF;function UF(t,e){return t.has(e)}var la=UF;var BF=1,WF=2;function VF(t,e,r,n,i,o){var s=r&BF,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(t),c=o.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,m=r&WF?new aa:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var v=t[f],N=e[f];if(n)var E=s?n(N,v,f,e,t,o):n(v,N,f,t,e,o);if(E!==void 0){if(E)continue;d=!1;break}if(m){if(!wf(e,function(I,_){if(!la(m,_)&&(v===I||i(v,I,r,n,o)))return m.push(_)})){d=!1;break}}else if(!(v===N||i(v,N,r,n,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var Pf=VF;function GF(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}var ZI=GF;function jF(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var ua=jF;var qF=1,HF=2,KF="[object Boolean]",zF="[object Date]",YF="[object Error]",XF="[object Map]",JF="[object Number]",QF="[object RegExp]",ZF="[object Set]",eU="[object String]",tU="[object Symbol]",rU="[object ArrayBuffer]",nU="[object DataView]",eE=Jt?Jt.prototype:void 0,fT=eE?eE.valueOf:void 0;function iU(t,e,r,n,i,o,s){switch(r){case nU:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case rU:return!(t.byteLength!=e.byteLength||!o(new oa(t),new oa(e)));case KF:case zF:case JF:return Mn(+t,+e);case YF:return t.name==e.name&&t.message==e.message;case QF:case eU:return t==e+"";case XF:var a=ZI;case ZF:var l=n&qF;if(a||(a=ua),t.size!=e.size&&!l)return!1;var u=s.get(t);if(u)return u==e;n|=HF,s.set(t,e);var c=Pf(a(t),a(e),n,i,o,s);return s.delete(t),c;case tU:if(fT)return fT.call(t)==fT.call(e)}return!1}var tE=iU;var oU=1,sU=Object.prototype,aU=sU.hasOwnProperty;function lU(t,e,r,n,i,o){var s=r&oU,a=xl(t),l=a.length,u=xl(e),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in e:aU.call(e,d)))return!1}var m=o.get(t),v=o.get(e);if(m&&v)return m==e&&v==t;var N=!0;o.set(t,e),o.set(e,t);for(var E=s;++f<l;){d=a[f];var I=t[d],_=e[d];if(n)var T=s?n(_,I,d,e,t,o):n(I,_,d,t,e,o);if(!(T===void 0?I===_||i(I,_,r,n,o):T)){N=!1;break}E||(E=d=="constructor")}if(N&&!E){var k=t.constructor,M=e.constructor;k!=M&&"constructor"in t&&"constructor"in e&&!(typeof k=="function"&&k instanceof k&&typeof M=="function"&&M instanceof M)&&(N=!1)}return o.delete(t),o.delete(e),N}var rE=lU;var uU=1,nE="[object Arguments]",iE="[object Array]",$f="[object Object]",cU=Object.prototype,oE=cU.hasOwnProperty;function fU(t,e,r,n,i,o){var s=ie(t),a=ie(e),l=s?iE:Nn(t),u=a?iE:Nn(e);l=l==nE?$f:l,u=u==nE?$f:u;var c=l==$f,f=u==$f,d=l==u;if(d&&oi(t)){if(!oi(e))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new Qi),s||zs(t)?Pf(t,e,r,n,i,o):tE(t,e,l,r,n,i,o);if(!(r&uU)){var m=c&&oE.call(t,"__wrapped__"),v=f&&oE.call(e,"__wrapped__");if(m||v){var N=m?t.value():t,E=v?e.value():e;return o||(o=new Qi),i(N,E,r,n,o)}}return d?(o||(o=new Qi),rE(t,e,r,n,i,o)):!1}var sE=fU;function aE(t,e,r,n,i){return t===e?!0:t==null||e==null||!$t(t)&&!$t(e)?t!==t&&e!==e:sE(t,e,r,n,aE,i)}var Mf=aE;var dU=1,pU=2;function mU(t,e,r,n){var i=r.length,o=i,s=!n;if(t==null)return!o;for(t=Object(t);i--;){var a=r[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=r[i];var l=a[0],u=t[l],c=a[1];if(s&&a[2]){if(u===void 0&&!(l in t))return!1}else{var f=new Qi;if(n)var d=n(u,c,l,t,e,f);if(!(d===void 0?Mf(c,u,dU|pU,n,f):d))return!1}}return!0}var lE=mU;function hU(t){return t===t&&!yt(t)}var Ff=hU;function gU(t){for(var e=Xe(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Ff(i)]}return e}var uE=gU;function TU(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Uf=TU;function _U(t){var e=uE(t);return e.length==1&&e[0][2]?Uf(e[0][0],e[0][1]):function(r){return r===t||lE(r,t,e)}}var cE=_U;function yU(t,e){return t!=null&&e in Object(t)}var fE=yU;function vU(t,e,r){e=Ji(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var s=Wn(e[n]);if(!(o=t!=null&&r(t,s)))break;t=t[s]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&Ks(i)&&Vi(s,i)&&(ie(t)||qi(t)))}var Bf=vU;function RU(t,e){return t!=null&&Bf(t,e,fE)}var dE=RU;var xU=1,NU=2;function OU(t,e){return Ys(t)&&Ff(e)?Uf(Wn(t),e):function(r){var n=aI(r,t);return n===void 0&&n===e?dE(r,t):Mf(e,n,xU|NU)}}var pE=OU;function IU(t){return function(e){return e==null?void 0:e[t]}}var mE=IU;function EU(t){return function(e){return Zs(e,t)}}var hE=EU;function SU(t){return Ys(t)?mE(Wn(t)):hE(t)}var gE=SU;function AU(t){return typeof t=="function"?t:t==null?Ur:typeof t=="object"?ie(t)?pE(t[0],t[1]):cE(t):gE(t)}var At=AU;function DU(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var s=t[i];e(n,s,r(s),t)}return n}var TE=DU;function CU(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var l=s[t?a:++i];if(r(o[l],l,o)===!1)break}return e}}var _E=CU;var bU=_E(),yE=bU;function kU(t,e){return t&&yE(t,e,Xe)}var vE=kU;function LU(t,e){return function(r,n){if(r==null)return r;if(!Vt(r))return t(r,n);for(var i=r.length,o=e?i:-1,s=Object(r);(e?o--:++o<i)&&n(s[o],o,s)!==!1;);return r}}var RE=LU;var wU=RE(vE),Wr=wU;function PU(t,e,r,n){return Wr(t,function(i,o,s){e(n,i,r(i),s)}),n}var xE=PU;function $U(t,e){return function(r,n){var i=ie(r)?TE:xE,o=e?e():{};return i(r,t,At(n,2),o)}}var NE=$U;var OE=Object.prototype,MU=OE.hasOwnProperty,FU=Hs(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&ji(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],s=Hi(o),a=-1,l=s.length;++a<l;){var u=s[a],c=t[u];(c===void 0||Mn(c,OE[u])&&!MU.call(t,u))&&(t[u]=o[u])}return t}),ca=FU;function UU(t){return $t(t)&&Vt(t)}var dT=UU;function BU(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}var Wf=BU;var WU=200;function VU(t,e,r,n){var i=-1,o=vf,s=!0,a=t.length,l=[],u=e.length;if(!a)return l;r&&(e=Pn(e,Bn(r))),n?(o=Wf,s=!1):e.length>=WU&&(o=la,s=!1,e=new aa(e));e:for(;++i<a;){var c=t[i],f=r==null?c:r(c);if(c=n||c!==0?c:0,s&&f===f){for(var d=u;d--;)if(e[d]===f)continue e;l.push(c)}else o(e,f,n)||l.push(c)}return l}var IE=VU;var GU=Hs(function(t,e){return dT(t)?IE(t,ta(e,1,dT,!0)):[]}),eo=GU;function jU(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Gn=jU;function qU(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:$n(e),If(t,e<0?0:e,n)):[]}var Ft=qU;function HU(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:$n(e),e=n-e,If(t,0,e<0?0:e)):[]}var ai=HU;function KU(t){return typeof t=="function"?t:Ur}var EE=KU;function zU(t,e){var r=ie(t)?_f:Wr;return r(t,EE(e))}var J=zU;function YU(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var SE=YU;function XU(t,e){var r=!0;return Wr(t,function(n,i,o){return r=!!e(n,i,o),r}),r}var AE=XU;function JU(t,e,r){var n=ie(t)?SE:AE;return r&&ji(t,e,r)&&(e=void 0),n(t,At(e,3))}var mr=JU;function QU(t,e){var r=[];return Wr(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}var Vf=QU;function ZU(t,e){var r=ie(t)?na:Vf;return r(t,At(e,3))}var Qt=ZU;function e1(t){return function(e,r,n){var i=Object(e);if(!Vt(e)){var o=At(r,3);e=Xe(e),r=function(a){return o(i[a],a,i)}}var s=t(e,r,n);return s>-1?i[o?e[s]:s]:void 0}}var DE=e1;var t1=Math.max;function r1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:$n(r);return i<0&&(i=t1(n+i,0)),yf(t,At(e,3),i)}var CE=r1;var n1=DE(CE),jn=n1;function i1(t){return t&&t.length?t[0]:void 0}var Zt=i1;function o1(t,e){var r=-1,n=Vt(t)?Array(t.length):[];return Wr(t,function(i,o,s){n[++r]=e(i,o,s)}),n}var bE=o1;function s1(t,e){var r=ie(t)?Pn:bE;return r(t,At(e,3))}var K=s1;function a1(t,e){return ta(K(t,e),1)}var sr=a1;var l1=Object.prototype,u1=l1.hasOwnProperty,c1=NE(function(t,e,r){u1.call(t,r)?t[r].push(e):qs(t,r,[e])}),pT=c1;var f1=Object.prototype,d1=f1.hasOwnProperty;function p1(t,e){return t!=null&&d1.call(t,e)}var kE=p1;function m1(t,e){return t!=null&&Bf(t,e,kE)}var ee=m1;var h1="[object String]";function g1(t){return typeof t=="string"||!ie(t)&&$t(t)&&Rr(t)==h1}var Kt=g1;function T1(t,e){return Pn(e,function(r){return t[r]})}var LE=T1;function _1(t){return t==null?[]:LE(t,Xe(t))}var We=_1;var y1=Math.max;function v1(t,e,r,n){t=Vt(t)?t:We(t),r=r&&!n?$n(r):0;var i=t.length;return r<0&&(r=y1(i+r,0)),Kt(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&js(t,e,r)>-1}var lt=v1;var R1=Math.max;function x1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:$n(r);return i<0&&(i=R1(n+i,0)),js(t,e,i)}var Gf=x1;var N1="[object Map]",O1="[object Set]",I1=Object.prototype,E1=I1.hasOwnProperty;function S1(t){if(t==null)return!0;if(Vt(t)&&(ie(t)||typeof t=="string"||typeof t.splice=="function"||oi(t)||zs(t)||qi(t)))return!t.length;var e=Nn(t);if(e==N1||e==O1)return!t.size;if(Un(t))return!Nf(t).length;for(var r in t)if(E1.call(t,r))return!1;return!0}var _e=S1;var A1="[object RegExp]";function D1(t){return $t(t)&&Rr(t)==A1}var wE=D1;var PE=cn&&cn.isRegExp,C1=PE?Bn(PE):wE,fn=C1;function b1(t){return t===void 0}var hr=b1;function k1(t,e){return t<e}var $E=k1;function L1(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],s=e(o);if(s!=null&&(a===void 0?s===s&&!wn(s):r(s,a)))var a=s,l=o}return l}var ME=L1;function w1(t){return t&&t.length?ME(t,Ur,$E):void 0}var FE=w1;var P1="Expected a function";function $1(t){if(typeof t!="function")throw new TypeError(P1);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var UE=$1;function M1(t,e,r,n){if(!yt(t))return t;e=Ji(e,t);for(var i=-1,o=e.length,s=o-1,a=t;a!=null&&++i<o;){var l=Wn(e[i]),u=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=s){var c=a[l];u=n?n(c,l,a):void 0,u===void 0&&(u=yt(c)?c:Vi(e[i+1])?[]:{})}Gi(a,l,u),a=a[l]}return t}var BE=M1;function F1(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var s=e[n],a=Zs(t,s);r(a,s)&&BE(o,Ji(s,t),a)}return o}var WE=F1;function U1(t,e){if(t==null)return{};var r=Pn(Df(t),function(n){return[n]});return e=At(e),WE(t,r,function(n,i){return e(n,i[0])})}var Vr=U1;function B1(t,e,r,n,i){return i(t,function(o,s,a){r=n?(n=!1,o):e(r,o,s,a)}),r}var VE=B1;function W1(t,e,r){var n=ie(t)?fI:VE,i=arguments.length<3;return n(t,At(e,4),r,i,Wr)}var Rt=W1;function V1(t,e){var r=ie(t)?na:Vf;return r(t,UE(At(e,3)))}var to=V1;function G1(t,e){var r;return Wr(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}var GE=G1;function j1(t,e,r){var n=ie(t)?wf:GE;return r&&ji(t,e,r)&&(e=void 0),n(t,At(e,3))}var Nl=j1;var q1=1/0,H1=Zi&&1/ua(new Zi([,-0]))[1]==q1?function(t){return new Zi(t)}:vt,jE=H1;var K1=200;function z1(t,e,r){var n=-1,i=vf,o=t.length,s=!0,a=[],l=a;if(r)s=!1,i=Wf;else if(o>=K1){var u=e?null:jE(t);if(u)return ua(u);s=!1,i=la,l=new aa}else l=e?[]:a;e:for(;++n<o;){var c=t[n],f=e?e(c):c;if(c=r||c!==0?c:0,s&&f===f){for(var d=l.length;d--;)if(l[d]===f)continue e;e&&l.push(f),a.push(c)}else i(l,f,r)||(l!==a&&l.push(f),a.push(c))}return a}var jf=z1;function Y1(t){return t&&t.length?jf(t):[]}var fa=Y1;function X1(t,e){return t&&t.length?jf(t,At(e,2)):[]}var qE=X1;function da(t){console&&console.error&&console.error(`Error: ${t}`)}function Ol(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Il(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function El(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function J1(t){return Q1(t)?t.LABEL:t.name}function Q1(t){return Kt(t.LABEL)&&t.LABEL!==""}var Jr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),J(this.definition,r=>{r.accept(e)})}},Me=class extends Jr{constructor(e){super([]),this.idx=1,or(this,Vr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Nr=class extends Jr{constructor(e){super(e.definition),this.orgText="",or(this,Vr(e,r=>r!==void 0))}},Ze=class extends Jr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,or(this,Vr(e,r=>r!==void 0))}},Fe=class extends Jr{constructor(e){super(e.definition),this.idx=1,or(this,Vr(e,r=>r!==void 0))}},et=class extends Jr{constructor(e){super(e.definition),this.idx=1,or(this,Vr(e,r=>r!==void 0))}},tt=class extends Jr{constructor(e){super(e.definition),this.idx=1,or(this,Vr(e,r=>r!==void 0))}},Ee=class extends Jr{constructor(e){super(e.definition),this.idx=1,or(this,Vr(e,r=>r!==void 0))}},He=class extends Jr{constructor(e){super(e.definition),this.idx=1,or(this,Vr(e,r=>r!==void 0))}},Ke=class extends Jr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,or(this,Vr(e,r=>r!==void 0))}},ye=class{constructor(e){this.idx=1,or(this,Vr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function qf(t){return K(t,pa)}function pa(t){function e(r){return K(r,pa)}if(t instanceof Me){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return Kt(t.label)&&(r.label=t.label),r}else{if(t instanceof Ze)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Fe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof et)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof tt)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:pa(new ye({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof He)return{type:"RepetitionWithSeparator",idx:t.idx,separator:pa(new ye({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Ee)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Ke)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ye){let r={type:"Terminal",name:t.terminalType.name,label:J1(t.terminalType),idx:t.idx};Kt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=fn(n)?n.source:n),r}else{if(t instanceof Nr)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var Or=class{visit(e){let r=e;switch(r.constructor){case Me:return this.visitNonTerminal(r);case Ze:return this.visitAlternative(r);case Fe:return this.visitOption(r);case et:return this.visitRepetitionMandatory(r);case tt:return this.visitRepetitionMandatoryWithSeparator(r);case He:return this.visitRepetitionWithSeparator(r);case Ee:return this.visitRepetition(r);case Ke:return this.visitAlternation(r);case ye:return this.visitTerminal(r);case Nr:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function mT(t){return t instanceof Ze||t instanceof Fe||t instanceof Ee||t instanceof et||t instanceof tt||t instanceof He||t instanceof ye||t instanceof Nr}function Lo(t,e=[]){return t instanceof Fe||t instanceof Ee||t instanceof He?!0:t instanceof Ke?Nl(t.definition,n=>Lo(n,e)):t instanceof Me&&lt(e,t)?!1:t instanceof Jr?(t instanceof Me&&e.push(t),mr(t.definition,n=>Lo(n,e))):!1}function hT(t){return t instanceof Ke}function Gr(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof et)return"AT_LEAST_ONE";if(t instanceof tt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ee)return"MANY";if(t instanceof ye)return"CONSUME";throw Error("non exhaustive match")}var li=class{walk(e,r=[]){J(e.definition,(n,i)=>{let o=Ft(e.definition,i+1);if(n instanceof Me)this.walkProdRef(n,o,r);else if(n instanceof ye)this.walkTerminal(n,o,r);else if(n instanceof Ze)this.walkFlat(n,o,r);else if(n instanceof Fe)this.walkOption(n,o,r);else if(n instanceof et)this.walkAtLeastOne(n,o,r);else if(n instanceof tt)this.walkAtLeastOneSep(n,o,r);else if(n instanceof He)this.walkManySep(n,o,r);else if(n instanceof Ee)this.walkMany(n,o,r);else if(n instanceof Ke)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let i=r.concat(n);this.walk(e,i)}walkOption(e,r,n){let i=r.concat(n);this.walk(e,i)}walkAtLeastOne(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkAtLeastOneSep(e,r,n){let i=HE(e,r,n);this.walk(e,i)}walkMany(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkManySep(e,r,n){let i=HE(e,r,n);this.walk(e,i)}walkOr(e,r,n){let i=r.concat(n);J(e.definition,o=>{let s=new Ze({definition:[o]});this.walk(s,i)})}};function HE(t,e,r){return[new Fe({definition:[new ye({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function wo(t){if(t instanceof Me)return wo(t.referencedRule);if(t instanceof ye)return tB(t);if(mT(t))return Z1(t);if(hT(t))return eB(t);throw Error("non exhaustive match")}function Z1(t){let e=[],r=t.definition,n=0,i=r.length>n,o,s=!0;for(;i&&s;)o=r[n],s=Lo(o),e=e.concat(wo(o)),n=n+1,i=r.length>n;return fa(e)}function eB(t){let e=K(t.definition,r=>wo(r));return fa(Mt(e))}function tB(t){return[t.terminalType]}var Hf="_~IN~_";var gT=class extends li{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let i=rB(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),s=new Ze({definition:o}),a=wo(s);this.follows[i]=a}};function KE(t){let e={};return J(t,r=>{let n=new gT(r).startWalking();or(e,n)}),e}function rB(t,e){return t.name+e+Hf}var Kf={},nB=new Io;function ma(t){let e=t.toString();if(Kf.hasOwnProperty(e))return Kf[e];{let r=nB.pattern(e);return Kf[e]=r,r}}function zE(){Kf={}}var XE="Complement Sets are not supported for first char optimization",Sl=`Unable to use "first char" lexer optimizations:
`;function JE(t,e=!1){try{let r=ma(t);return TT(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===XE)e&&Ol(`${Sl}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),da(`${Sl}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function TT(t,e,r){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)TT(t.value[i],e,r);break;case"Alternative":let n=t.value;for(let i=0;i<n.length;i++){let o=n[i];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=o;switch(s.type){case"Character":zf(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(XE);J(s.value,l=>{if(typeof l=="number")zf(l,e,r);else{let u=l;if(r===!0)for(let c=u.from;c<=u.to;c++)zf(c,e,r);else{for(let c=u.from;c<=u.to&&c<ha;c++)zf(c,e,r);if(u.to>=ha){let c=u.from>=ha?u.from:ha,f=u.to,d=qn(c),m=qn(f);for(let v=d;v<=m;v++)e[v]=v}}}});break;case"Group":TT(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&_T(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return We(e)}function zf(t,e,r){let n=qn(t);e[n]=n,r===!0&&iB(t,e)}function iB(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let i=qn(n.charCodeAt(0));e[i]=i}else{let i=r.toLowerCase();if(i!==r){let o=qn(i.charCodeAt(0));e[o]=o}}}function YE(t,e){return jn(t.value,r=>{if(typeof r=="number")return lt(e,r);{let n=r;return jn(e,i=>n.from<=i&&i<=n.to)!==void 0}})}function _T(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ie(t.value)?mr(t.value,_T):_T(t.value):!1}var yT=class extends Ln{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){lt(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?YE(e,this.targetCharCodes)===void 0&&(this.found=!0):YE(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Yf(t,e){if(e instanceof RegExp){let r=ma(e),n=new yT(t);return n.visit(r),n.found}else return jn(e,r=>lt(t,r.charCodeAt(0)))!==void 0}var Po="PATTERN",ga="defaultMode",Xf="modes",RT=typeof new RegExp("(?:)").sticky=="boolean";function eS(t,e){e=ca(e,{useSticky:RT,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(_,T)=>T()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{xB()});let n;r("Reject Lexer.NA",()=>{n=to(t,_=>_[Po]===Dt.NA)});let i=!1,o;r("Transform Patterns",()=>{i=!1,o=K(n,_=>{let T=_[Po];if(fn(T)){let k=T.source;return k.length===1&&k!=="^"&&k!=="$"&&k!=="."&&!T.ignoreCase?k:k.length===2&&k[0]==="\\"&&!lt(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],k[1])?k[1]:e.useSticky?ZE(T):QE(T)}else{if(xr(T))return i=!0,{exec:T};if(typeof T=="object")return i=!0,T;if(typeof T=="string"){if(T.length===1)return T;{let k=T.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),M=new RegExp(k);return e.useSticky?ZE(M):QE(M)}}else throw Error("non exhaustive match")}})});let s,a,l,u,c;r("misc mapping",()=>{s=K(n,_=>_.tokenTypeIdx),a=K(n,_=>{let T=_.GROUP;if(T!==Dt.SKIPPED){if(Kt(T))return T;if(hr(T))return!1;throw Error("non exhaustive match")}}),l=K(n,_=>{let T=_.LONGER_ALT;if(T)return ie(T)?K(T,M=>Gf(n,M)):[Gf(n,T)]}),u=K(n,_=>_.PUSH_MODE),c=K(n,_=>ee(_,"POP_MODE"))});let f;r("Line Terminator Handling",()=>{let _=lS(e.lineTerminatorCharacters);f=K(n,T=>!1),e.positionTracking!=="onlyOffset"&&(f=K(n,T=>ee(T,"LINE_BREAKS")?!!T.LINE_BREAKS:aS(T,_)===!1&&Yf(_,T.PATTERN)))});let d,m,v,N;r("Misc Mapping #2",()=>{d=K(n,oS),m=K(o,vB),v=Rt(n,(_,T)=>{let k=T.GROUP;return Kt(k)&&k!==Dt.SKIPPED&&(_[k]=[]),_},{}),N=K(o,(_,T)=>({pattern:o[T],longerAlt:l[T],canLineTerminator:f[T],isCustom:d[T],short:m[T],group:a[T],push:u[T],pop:c[T],tokenTypeIdx:s[T],tokenType:n[T]}))});let E=!0,I=[];return e.safeMode||r("First Char Optimization",()=>{I=Rt(n,(_,T,k)=>{if(typeof T.PATTERN=="string"){let M=T.PATTERN.charCodeAt(0),Q=qn(M);vT(_,Q,N[k])}else if(ie(T.START_CHARS_HINT)){let M;J(T.START_CHARS_HINT,Q=>{let ae=typeof Q=="string"?Q.charCodeAt(0):Q,le=qn(ae);M!==le&&(M=le,vT(_,le,N[k]))})}else if(fn(T.PATTERN))if(T.PATTERN.unicode)E=!1,e.ensureOptimizations&&da(`${Sl}	Unable to analyze < ${T.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let M=JE(T.PATTERN,e.ensureOptimizations);_e(M)&&(E=!1),J(M,Q=>{vT(_,Q,N[k])})}else e.ensureOptimizations&&da(`${Sl}	TokenType: <${T.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),E=!1;return _},[])}),{emptyGroups:v,patternIdxToConfig:N,charCodeToPatternIdxToConfig:I,hasCustom:i,canBeOptimized:E}}function tS(t,e){let r=[],n=sB(t);r=r.concat(n.errors);let i=aB(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(oB(o)),r=r.concat(hB(o)),r=r.concat(gB(o,e)),r=r.concat(TB(o)),r}function oB(t){let e=[],r=Qt(t,n=>fn(n[Po]));return e=e.concat(uB(r)),e=e.concat(dB(r)),e=e.concat(pB(r)),e=e.concat(mB(r)),e=e.concat(cB(r)),e}function sB(t){let e=Qt(t,i=>!ee(i,Po)),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:ut.MISSING_PATTERN,tokenTypes:[i]})),n=eo(t,e);return{errors:r,valid:n}}function aB(t){let e=Qt(t,i=>{let o=i[Po];return!fn(o)&&!xr(o)&&!ee(o,"exec")&&!Kt(o)}),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:ut.INVALID_PATTERN,tokenTypes:[i]})),n=eo(t,e);return{errors:r,valid:n}}var lB=/[^\\][$]/;function uB(t){class e extends Ln{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=Qt(t,i=>{let o=i.PATTERN;try{let s=ma(o),a=new e;return a.visit(s),a.found}catch{return lB.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:ut.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function cB(t){let e=Qt(t,n=>n.PATTERN.test(""));return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:ut.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var fB=/[^\\[][\^]|^\^/;function dB(t){class e extends Ln{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=Qt(t,i=>{let o=i.PATTERN;try{let s=ma(o),a=new e;return a.visit(s),a.found}catch{return fB.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:ut.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function pB(t){let e=Qt(t,n=>{let i=n[Po];return i instanceof RegExp&&(i.multiline||i.global)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:ut.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function mB(t){let e=[],r=K(t,o=>Rt(t,(s,a)=>(o.PATTERN.source===a.PATTERN.source&&!lt(e,a)&&a.PATTERN!==Dt.NA&&(e.push(a),s.push(a)),s),[]));r=Vn(r);let n=Qt(r,o=>o.length>1);return K(n,o=>{let s=K(o,l=>l.name);return{message:`The same RegExp pattern ->${Zt(o).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:ut.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function hB(t){let e=Qt(t,n=>{if(!ee(n,"GROUP"))return!1;let i=n.GROUP;return i!==Dt.SKIPPED&&i!==Dt.NA&&!Kt(i)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:ut.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function gB(t,e){let r=Qt(t,i=>i.PUSH_MODE!==void 0&&!lt(e,i.PUSH_MODE));return K(r,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:ut.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function TB(t){let e=[],r=Rt(t,(n,i,o)=>{let s=i.PATTERN;return s===Dt.NA||(Kt(s)?n.push({str:s,idx:o,tokenType:i}):fn(s)&&yB(s)&&n.push({str:s.source,idx:o,tokenType:i})),n},[]);return J(t,(n,i)=>{J(r,({str:o,idx:s,tokenType:a})=>{if(i<s&&_B(o,n.PATTERN)){let l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:ut.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function _B(t,e){if(fn(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(xr(e))return e(t,0,[],{});if(ee(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function yB(t){return jn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function QE(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function ZE(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function rS(t,e,r){let n=[];return ee(t,ga)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+ga+`> property in its definition
`,type:ut.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),ee(t,Xf)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Xf+`> property in its definition
`,type:ut.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),ee(t,Xf)&&ee(t,ga)&&!ee(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${ga}: <${t.defaultMode}>which does not exist
`,type:ut.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),ee(t,Xf)&&J(t.modes,(i,o)=>{J(i,(s,a)=>{if(hr(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${a}>
`,type:ut.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(ee(s,"LONGER_ALT")){let l=ie(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];J(l,u=>{!hr(u)&&!lt(i,u)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${s.name}> outside of mode <${o}>
`,type:ut.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function nS(t,e,r){let n=[],i=!1,o=Vn(Mt(We(t.modes))),s=to(o,l=>l[Po]===Dt.NA),a=lS(r);return e&&J(s,l=>{let u=aS(l,a);if(u!==!1){let f={message:RB(l,u),type:u.issue,tokenType:l};n.push(f)}else ee(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):Yf(a,l.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:ut.NO_LINE_BREAKS_FLAGS}),n}function iS(t){let e={},r=Xe(t);return J(r,n=>{let i=t[n];if(ie(i))e[n]=[];else throw Error("non exhaustive match")}),e}function oS(t){let e=t.PATTERN;if(fn(e))return!1;if(xr(e))return!0;if(ee(e,"exec"))return!0;if(Kt(e))return!1;throw Error("non exhaustive match")}function vB(t){return Kt(t)&&t.length===1?t.charCodeAt(0):!1}var sS={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function aS(t,e){if(ee(t,"LINE_BREAKS"))return!1;if(fn(t.PATTERN)){try{Yf(e,t.PATTERN)}catch(r){return{issue:ut.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(Kt(t.PATTERN))return!1;if(oS(t))return{issue:ut.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function RB(t,e){if(e.issue===ut.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===ut.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function lS(t){return K(t,r=>Kt(r)?r.charCodeAt(0):r)}function vT(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var ha=256,Jf=[];function qn(t){return t<ha?t:Jf[t]}function xB(){if(_e(Jf)){Jf=new Array(65536);for(let t=0;t<65536;t++)Jf[t]=t>255?255+~~(t/255):t}}function ui(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function Ta(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var uS=1,fS={};function ci(t){let e=NB(t);OB(e),EB(e),IB(e),J(e,r=>{r.isParent=r.categoryMatches.length>0})}function NB(t){let e=Qe(t),r=t,n=!0;for(;n;){r=Vn(Mt(K(r,o=>o.CATEGORIES)));let i=eo(r,e);e=e.concat(i),_e(i)?n=!1:r=i}return e}function OB(t){J(t,e=>{xT(e)||(fS[uS]=e,e.tokenTypeIdx=uS++),cS(e)&&!ie(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),cS(e)||(e.CATEGORIES=[]),SB(e)||(e.categoryMatches=[]),AB(e)||(e.categoryMatchesMap={})})}function IB(t){J(t,e=>{e.categoryMatches=[],J(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(fS[n].tokenTypeIdx)})})}function EB(t){J(t,e=>{dS([],e)})}function dS(t,e){J(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),J(e.CATEGORIES,r=>{let n=t.concat(e);lt(n,r)||dS(n,r)})}function xT(t){return ee(t,"tokenTypeIdx")}function cS(t){return ee(t,"CATEGORIES")}function SB(t){return ee(t,"categoryMatches")}function AB(t){return ee(t,"categoryMatchesMap")}function pS(t){return ee(t,"tokenTypeIdx")}var NT={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var ut;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(ut||(ut={}));var Al={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:NT,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Al);var Dt=class{constructor(e,r=Al){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:a,value:l}=Il(o),u=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(`${s}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=or({},Al,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Al.lineTerminatorsPattern)this.config.lineTerminatorsPattern=sS;else if(this.config.lineTerminatorCharacters===Al.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ie(e)?i={modes:{defaultMode:Qe(e)},defaultMode:ga}:(o=!1,i=Qe(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(rS(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(nS(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},J(i.modes,(a,l)=>{i.modes[l]=to(a,u=>hr(u))});let s=Xe(i.modes);if(J(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(tS(a,s))}),_e(this.lexerDefinitionErrors)){ci(a);let u;this.TRACE_INIT("analyzeTokenTypes",()=>{u=eS(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=u.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=u.charCodeToPatternIdxToConfig,this.emptyGroups=or({},this.emptyGroups,u.emptyGroups),this.hasCustom=u.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=u.canBeOptimized}})}),this.defaultMode=i.defaultMode,!_e(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=K(this.lexerDefinitionErrors,u=>u.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}J(this.lexerDefinitionWarning,a=>{Ol(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(RT?(this.chopInput=Ur,this.match=this.matchWithTest):(this.updateLastIndex=vt,this.match=this.matchWithExec),o&&(this.handleModes=vt),this.trackStartLines===!1&&(this.computeNewColumn=Ur),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=vt),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=Rt(this.canModeBeOptimized,(l,u,c)=>(u===!1&&l.push(c),l),[]);if(r.ensureOptimizations&&!_e(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{zE()}),this.TRACE_INIT("toFastProperties",()=>{El(this)})})}tokenize(e,r=this.defaultMode){if(!_e(this.lexerDefinitionErrors)){let i=K(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,i,o,s,a,l,u,c,f,d,m,v,N,E,I,_,T=e,k=T.length,M=0,Q=0,ae=this.hasCustom?0:Math.floor(e.length/10),le=new Array(ae),Ce=[],Pe=this.trackStartLines?1:void 0,W=this.trackStartLines?1:void 0,L=iS(this.emptyGroups),j=this.trackStartLines,H=this.config.lineTerminatorsPattern,Te=0,ue=[],G=[],U=[],ve=[];Object.freeze(ve);let Re;function Ae(){return ue}function tr(dt){let qt=qn(dt),bt=G[qt];return bt===void 0?ve:bt}let Ri=dt=>{if(U.length===1&&dt.tokenType.PUSH_MODE===void 0){let qt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(dt);Ce.push({offset:dt.startOffset,line:dt.startLine,column:dt.startColumn,length:dt.image.length,message:qt})}else{U.pop();let qt=Gn(U);ue=this.patternIdxToConfig[qt],G=this.charCodeToPatternIdxToConfig[qt],Te=ue.length;let bt=this.canModeBeOptimized[qt]&&this.config.safeMode===!1;G&&bt?Re=tr:Re=Ae}};function Ge(dt){U.push(dt),G=this.charCodeToPatternIdxToConfig[dt],ue=this.patternIdxToConfig[dt],Te=ue.length,Te=ue.length;let qt=this.canModeBeOptimized[dt]&&this.config.safeMode===!1;G&&qt?Re=tr:Re=Ae}Ge.call(this,r);let jt,Xn=this.config.recoveryEnabled;for(;M<k;){l=null;let dt=T.charCodeAt(M),qt=Re(dt),bt=qt.length;for(n=0;n<bt;n++){jt=qt[n];let kt=jt.pattern;u=null;let pt=jt.short;if(pt!==!1?dt===pt&&(l=kt):jt.isCustom===!0?(_=kt.exec(T,M,le,L),_!==null?(l=_[0],_.payload!==void 0&&(u=_.payload)):l=null):(this.updateLastIndex(kt,M),l=this.match(kt,e,M)),l!==null){if(a=jt.longerAlt,a!==void 0){let mt=a.length;for(o=0;o<mt;o++){let lr=ue[a[o]],_r=lr.pattern;if(c=null,lr.isCustom===!0?(_=_r.exec(T,M,le,L),_!==null?(s=_[0],_.payload!==void 0&&(c=_.payload)):s=null):(this.updateLastIndex(_r,M),s=this.match(_r,e,M)),s&&s.length>l.length){l=s,u=c,jt=lr;break}}}break}}if(l!==null){if(f=l.length,d=jt.group,d!==void 0&&(m=jt.tokenTypeIdx,v=this.createTokenInstance(l,M,m,jt.tokenType,Pe,W,f),this.handlePayload(v,u),d===!1?Q=this.addToken(le,Q,v):L[d].push(v)),e=this.chopInput(e,f),M=M+f,W=this.computeNewColumn(W,f),j===!0&&jt.canLineTerminator===!0){let kt=0,pt,mt;H.lastIndex=0;do pt=H.test(l),pt===!0&&(mt=H.lastIndex-1,kt++);while(pt===!0);kt!==0&&(Pe=Pe+kt,W=f-mt,this.updateTokenEndLineColumnLocation(v,d,mt,kt,Pe,W,f))}this.handleModes(jt,Ri,Ge,v)}else{let kt=M,pt=Pe,mt=W,lr=Xn===!1;for(;lr===!1&&M<k;)for(e=this.chopInput(e,1),M++,i=0;i<Te;i++){let _r=ue[i],Hr=_r.pattern,Jn=_r.short;if(Jn!==!1?T.charCodeAt(M)===Jn&&(lr=!0):_r.isCustom===!0?lr=Hr.exec(T,M,le,L)!==null:(this.updateLastIndex(Hr,M),lr=Hr.exec(e)!==null),lr===!0)break}if(N=M-kt,W=this.computeNewColumn(W,N),I=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(T,kt,N,pt,mt),Ce.push({offset:kt,line:pt,column:mt,length:N,message:I}),Xn===!1)break}}return this.hasCustom||(le.length=Q),{tokens:le,groups:L,errors:Ce}}handleModes(e,r,n,i){if(e.pop===!0){let o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,i,o,s,a){let l,u;r!==void 0&&(l=n===a-1,u=l?-1:0,i===1&&l===!0||(e.endLine=o+u,e.endColumn=s-1+-u))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}}createStartOnlyToken(e,r,n,i,o,s){return{image:e,startOffset:r,startLine:o,startColumn:s,tokenTypeIdx:n,tokenType:i}}createFullToken(e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:o,endLine:o,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:i}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};Dt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";Dt.NA=/NOT_APPLICABLE/;function fi(t){return OT(t)?t.LABEL:t.name}function OT(t){return Kt(t.LABEL)&&t.LABEL!==""}var DB="parent",mS="categories",hS="label",gS="group",TS="push_mode",_S="pop_mode",yS="longer_alt",vS="line_breaks",RS="start_chars_hint";function Qf(t){return CB(t)}function CB(t){let e=t.pattern,r={};if(r.name=t.name,hr(e)||(r.PATTERN=e),ee(t,DB))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return ee(t,mS)&&(r.CATEGORIES=t[mS]),ci([r]),ee(t,hS)&&(r.LABEL=t[hS]),ee(t,gS)&&(r.GROUP=t[gS]),ee(t,_S)&&(r.POP_MODE=t[_S]),ee(t,TS)&&(r.PUSH_MODE=t[TS]),ee(t,yS)&&(r.LONGER_ALT=t[yS]),ee(t,vS)&&(r.LINE_BREAKS=t[vS]),ee(t,RS)&&(r.START_CHARS_HINT=t[RS]),r}var Qr=Qf({name:"EOF",pattern:Dt.NA});ci([Qr]);function $o(t,e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Dl(t,e){return ui(t,e)}var di={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${OT(t)?`--> ${fi(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:i}){let o="Expecting: ",a=`
but found: '`+Zt(e).image+"'";if(n)return o+n+a;{let l=Rt(t,(d,m)=>d.concat(m),[]),u=K(l,d=>`[${K(d,m=>fi(m)).join(", ")}]`),f=`one of these possible Token sequences:
${K(u,(d,m)=>`  ${m+1}. ${d}`).join(`
`)}`;return o+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let i="Expecting: ",s=`
but found: '`+Zt(e).image+"'";if(r)return i+r+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${K(t,u=>`[${K(u,c=>fi(c)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(di);var xS={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},On={buildDuplicateFoundError(t,e){function r(c){return c instanceof ye?c.terminalType.name:c instanceof Me?c.nonTerminalName:""}let n=t.name,i=Zt(e),o=i.idx,s=Gr(i),a=r(i),l=o>0,u=`->${s}${l?o:""}<- ${a?`with argument: ->${a}<-`:""}
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
For Further details.`,n},buildEmptyRepetitionError(t){let e=Gr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=K(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Nr?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function NS(t,e){let r=new IT(t,e);return r.resolveRefs(),r.errors}var IT=class extends Or{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){J(We(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:zt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var ET=class extends li{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Qe(this.path.ruleStack).reverse(),this.occurrenceStack=Qe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let i=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){_e(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},Zf=class extends ET{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let i=r.concat(n),o=new Ze({definition:i});this.possibleTokTypes=wo(o),this.found=!0}}},_a=class extends li{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},ed=class extends _a{walkMany(e,r,n){if(e.idx===this.occurrence){let i=Zt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ye&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,r,n)}},Cl=class extends _a{walkManySep(e,r,n){if(e.idx===this.occurrence){let i=Zt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ye&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,r,n)}},td=class extends _a{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let i=Zt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ye&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,r,n)}},bl=class extends _a{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let i=Zt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ye&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,r,n)}};function rd(t,e,r=[]){r=Qe(r);let n=[],i=0;function o(a){return a.concat(Ft(t,i+1))}function s(a){let l=rd(o(a),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){let a=t[i];if(a instanceof Ze)return s(a.definition);if(a instanceof Me)return s(a.definition);if(a instanceof Fe)n=s(a.definition);else if(a instanceof et){let l=a.definition.concat([new Ee({definition:a.definition})]);return s(l)}else if(a instanceof tt){let l=[new Ze({definition:a.definition}),new Ee({definition:[new ye({terminalType:a.separator})].concat(a.definition)})];return s(l)}else if(a instanceof He){let l=a.definition.concat([new Ee({definition:[new ye({terminalType:a.separator})].concat(a.definition)})]);n=s(l)}else if(a instanceof Ee){let l=a.definition.concat([new Ee({definition:a.definition})]);n=s(l)}else{if(a instanceof Ke)return J(a.definition,l=>{_e(l.definition)===!1&&(n=s(l.definition))}),n;if(a instanceof ye)r.push(a.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:Ft(t,i)}),n}function nd(t,e,r,n){let i="EXIT_NONE_TERMINAL",o=[i],s="EXIT_ALTERNATIVE",a=!1,l=e.length,u=l-n-1,c=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!_e(f);){let d=f.pop();if(d===s){a&&Gn(f).idx<=u&&f.pop();continue}let m=d.def,v=d.idx,N=d.ruleStack,E=d.occurrenceStack;if(_e(m))continue;let I=m[0];if(I===i){let _={idx:v,def:Ft(m),ruleStack:ai(N),occurrenceStack:ai(E)};f.push(_)}else if(I instanceof ye)if(v<l-1){let _=v+1,T=e[_];if(r(T,I.terminalType)){let k={idx:_,def:Ft(m),ruleStack:N,occurrenceStack:E};f.push(k)}}else if(v===l-1)c.push({nextTokenType:I.terminalType,nextTokenOccurrence:I.idx,ruleStack:N,occurrenceStack:E}),a=!0;else throw Error("non exhaustive match");else if(I instanceof Me){let _=Qe(N);_.push(I.nonTerminalName);let T=Qe(E);T.push(I.idx);let k={idx:v,def:I.definition.concat(o,Ft(m)),ruleStack:_,occurrenceStack:T};f.push(k)}else if(I instanceof Fe){let _={idx:v,def:Ft(m),ruleStack:N,occurrenceStack:E};f.push(_),f.push(s);let T={idx:v,def:I.definition.concat(Ft(m)),ruleStack:N,occurrenceStack:E};f.push(T)}else if(I instanceof et){let _=new Ee({definition:I.definition,idx:I.idx}),T=I.definition.concat([_],Ft(m)),k={idx:v,def:T,ruleStack:N,occurrenceStack:E};f.push(k)}else if(I instanceof tt){let _=new ye({terminalType:I.separator}),T=new Ee({definition:[_].concat(I.definition),idx:I.idx}),k=I.definition.concat([T],Ft(m)),M={idx:v,def:k,ruleStack:N,occurrenceStack:E};f.push(M)}else if(I instanceof He){let _={idx:v,def:Ft(m),ruleStack:N,occurrenceStack:E};f.push(_),f.push(s);let T=new ye({terminalType:I.separator}),k=new Ee({definition:[T].concat(I.definition),idx:I.idx}),M=I.definition.concat([k],Ft(m)),Q={idx:v,def:M,ruleStack:N,occurrenceStack:E};f.push(Q)}else if(I instanceof Ee){let _={idx:v,def:Ft(m),ruleStack:N,occurrenceStack:E};f.push(_),f.push(s);let T=new Ee({definition:I.definition,idx:I.idx}),k=I.definition.concat([T],Ft(m)),M={idx:v,def:k,ruleStack:N,occurrenceStack:E};f.push(M)}else if(I instanceof Ke)for(let _=I.definition.length-1;_>=0;_--){let T=I.definition[_],k={idx:v,def:T.definition.concat(Ft(m)),ruleStack:N,occurrenceStack:E};f.push(k),f.push(s)}else if(I instanceof Ze)f.push({idx:v,def:I.definition.concat(Ft(m)),ruleStack:N,occurrenceStack:E});else if(I instanceof Nr)f.push(bB(I,v,N,E));else throw Error("non exhaustive match")}return c}function bB(t,e,r,n){let i=Qe(r);i.push(t.name);let o=Qe(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}var ct;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(ct||(ct={}));function kl(t){if(t instanceof Fe||t==="Option")return ct.OPTION;if(t instanceof Ee||t==="Repetition")return ct.REPETITION;if(t instanceof et||t==="RepetitionMandatory")return ct.REPETITION_MANDATORY;if(t instanceof tt||t==="RepetitionMandatoryWithSeparator")return ct.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof He||t==="RepetitionWithSeparator")return ct.REPETITION_WITH_SEPARATOR;if(t instanceof Ke||t==="Alternation")return ct.ALTERNATION;throw Error("non exhaustive match")}function od(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:i}=t,o=kl(n);return o===ct.ALTERNATION?ya(e,r,i):va(e,r,o,i)}function IS(t,e,r,n,i,o){let s=ya(t,e,r),a=bS(s)?Ta:ui;return o(s,n,a,i)}function ES(t,e,r,n,i,o){let s=va(t,e,i,r),a=bS(s)?Ta:ui;return o(s[0],a,n)}function SS(t,e,r,n){let i=t.length,o=mr(t,s=>mr(s,a=>a.length===1));if(e)return function(s){let a=K(s,l=>l.GATE);for(let l=0;l<i;l++){let u=t[l],c=u.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let d=0;d<c;d++){let m=u[d],v=m.length;for(let N=0;N<v;N++){let E=this.LA(N+1);if(r(E,m[N])===!1)continue e}return l}}};if(o&&!n){let s=K(t,l=>Mt(l)),a=Rt(s,(l,u,c)=>(J(u,f=>{ee(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=c),J(f.categoryMatches,d=>{ee(l,d)||(l[d]=c)})}),l),{});return function(){let l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let a=t[s],l=a.length;e:for(let u=0;u<l;u++){let c=a[u],f=c.length;for(let d=0;d<f;d++){let m=this.LA(d+1);if(r(m,c[d])===!1)continue e}return s}}}}function AS(t,e,r){let n=mr(t,o=>o.length===1),i=t.length;if(n&&!r){let o=Mt(t);if(o.length===1&&_e(o[0].categoryMatches)){let a=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=Rt(o,(a,l,u)=>(a[l.tokenTypeIdx]=!0,J(l.categoryMatches,c=>{a[c]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<i;o++){let s=t[o],a=s.length;for(let l=0;l<a;l++){let u=this.LA(l+1);if(e(u,s[l])===!1)continue e}return!0}return!1}}var AT=class extends li{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,i){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(i),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,ct.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,ct.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,ct.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,ct.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,ct.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},id=class extends Or{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,ct.OPTION)}visitRepetition(e){this.checkIsTarget(e,ct.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,ct.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,ct.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,ct.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,ct.ALTERNATION)}};function OS(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function ST(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],i=[];for(let o=0;o<e.length;o++){let s=e[o];i.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let l="_"+n.categoryMatches[a];i.push(s+l)}}e=i}return e}function kB(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let i=t[n];for(let o=0;o<e.length;o++){let s=e[o];if(i[s]===!0)return!1}}return!0}function DS(t,e){let r=K(t,s=>rd([s],1)),n=OS(r.length),i=K(r,s=>{let a={};return J(s,l=>{let u=ST(l.partialPath);J(u,c=>{a[c]=!0})}),a}),o=r;for(let s=1;s<=e;s++){let a=o;o=OS(a.length);for(let l=0;l<a.length;l++){let u=a[l];for(let c=0;c<u.length;c++){let f=u[c].partialPath,d=u[c].suffixDef,m=ST(f);if(kB(i,m,l)||_e(d)||f.length===e){let N=n[l];if(sd(N,f)===!1){N.push(f);for(let E=0;E<m.length;E++){let I=m[E];i[l][I]=!0}}}else{let N=rd(d,s+1,f);o[l]=o[l].concat(N),J(N,E=>{let I=ST(E.partialPath);J(I,_=>{i[l][_]=!0})})}}}}return n}function ya(t,e,r,n){let i=new id(t,ct.ALTERNATION,n);return e.accept(i),DS(i.result,r)}function va(t,e,r,n){let i=new id(t,r);e.accept(i);let o=i.result,a=new AT(e,t,r).startWalking(),l=new Ze({definition:o}),u=new Ze({definition:a});return DS([l,u],n)}function sd(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let i=0;i<n.length;i++){let o=e[i],s=n[i];if((o===s||s.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function CS(t,e){return t.length<e.length&&mr(t,(r,n)=>{let i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}function bS(t){return mr(t,e=>mr(e,r=>mr(r,n=>_e(n.categoryMatches))))}function kS(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return K(e,r=>Object.assign({type:zt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function LS(t,e,r,n){let i=sr(t,l=>LB(l,r)),o=UB(t,e,r),s=sr(t,l=>$B(l,r)),a=sr(t,l=>PB(l,t,n,r));return i.concat(o,s,a)}function LB(t,e){let r=new DT;t.accept(r);let n=r.allProductions,i=pT(n,wB),o=Vr(i,a=>a.length>1);return K(We(o),a=>{let l=Zt(a),u=e.buildDuplicateFoundError(t,a),c=Gr(l),f={message:u,type:zt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:l.idx},d=wS(l);return d&&(f.parameter=d),f})}function wB(t){return`${Gr(t)}_#_${t.idx}_#_${wS(t)}`}function wS(t){return t instanceof ye?t.terminalType.name:t instanceof Me?t.nonTerminalName:""}var DT=class extends Or{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function PB(t,e,r,n){let i=[];if(Rt(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:s,type:zt.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function PS(t,e,r){let n=[],i;return lt(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:i,type:zt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function bT(t,e,r,n=[]){let i=[],o=ad(e.definition);if(_e(o))return[];{let s=t.name;lt(o,t)&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:zt.LEFT_RECURSION,ruleName:s});let l=eo(o,n.concat([t])),u=sr(l,c=>{let f=Qe(n);return f.push(c),bT(t,c,r,f)});return i.concat(u)}}function ad(t){let e=[];if(_e(t))return e;let r=Zt(t);if(r instanceof Me)e.push(r.referencedRule);else if(r instanceof Ze||r instanceof Fe||r instanceof et||r instanceof tt||r instanceof He||r instanceof Ee)e=e.concat(ad(r.definition));else if(r instanceof Ke)e=Mt(K(r.definition,o=>ad(o.definition)));else if(!(r instanceof ye))throw Error("non exhaustive match");let n=Lo(r),i=t.length>1;if(n&&i){let o=Ft(t);return e.concat(ad(o))}else return e}var Ll=class extends Or{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function $S(t,e){let r=new Ll;t.accept(r);let n=r.alternations;return sr(n,o=>{let s=ai(o.definition);return sr(s,(a,l)=>{let u=nd([a],[],ui,1);return _e(u)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:l}),type:zt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:l+1}]:[]})})}function MS(t,e,r){let n=new Ll;t.accept(n);let i=n.alternations;return i=to(i,s=>s.ignoreAmbiguities===!0),sr(i,s=>{let a=s.idx,l=s.maxLookahead||e,u=ya(a,t,l,s),c=MB(u,s,t,r),f=FB(u,s,t,r);return c.concat(f)})}var CT=class extends Or{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function $B(t,e){let r=new Ll;t.accept(r);let n=r.alternations;return sr(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:zt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function FS(t,e,r){let n=[];return J(t,i=>{let o=new CT;i.accept(o);let s=o.allProductions;J(s,a=>{let l=kl(a),u=a.maxLookahead||e,c=a.idx,d=va(c,i,l,u)[0];if(_e(Mt(d))){let m=r.buildEmptyRepetitionError({topLevelRule:i,repetition:a});n.push({message:m,type:zt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}function MB(t,e,r,n){let i=[],o=Rt(t,(a,l,u)=>(e.definition[u].ignoreAmbiguities===!0||J(l,c=>{let f=[u];J(t,(d,m)=>{u!==m&&sd(d,c)&&e.definition[m].ignoreAmbiguities!==!0&&f.push(m)}),f.length>1&&!sd(i,c)&&(i.push(c),a.push({alts:f,path:c}))}),a),[]);return K(o,a=>{let l=K(a.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:zt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function FB(t,e,r,n){let i=Rt(t,(s,a,l)=>{let u=K(a,c=>({idx:l,path:c}));return s.concat(u)},[]);return Vn(sr(i,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,u=s.path,c=Qt(i,d=>e.definition[d.idx].ignoreAmbiguities!==!0&&d.idx<l&&CS(d.path,u));return K(c,d=>{let m=[d.idx+1,l+1],v=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:m,prefixPath:d.path}),type:zt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:v,alternatives:m}})}))}function UB(t,e,r){let n=[],i=K(e,o=>o.name);return J(t,o=>{let s=o.name;if(lt(i,s)){let a=r.buildNamespaceConflictError(o);n.push({message:a,type:zt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function US(t){let e=ca(t,{errMsgProvider:xS}),r={};return J(t.rules,n=>{r[n.name]=n}),NS(r,e.errMsgProvider)}function BS(t){return t=ca(t,{errMsgProvider:On}),LS(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var WS="MismatchedTokenException",VS="NoViableAltException",GS="EarlyExitException",jS="NotAllInputParsedException",qS=[WS,VS,GS,jS];Object.freeze(qS);function ro(t){return lt(qS,t.name)}var Ra=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Mo=class extends Ra{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=WS}},wl=class extends Ra{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=VS}},Pl=class extends Ra{constructor(e,r){super(e,r),this.name=jS}},$l=class extends Ra{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=GS}};var kT={},wT="InRuleRecoveryException",LT=class extends Error{constructor(e){super(e),this.name=wT}},ld=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=ee(e,"recoveryEnabled")?e.recoveryEnabled:Ir.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=BB)}getTokenToInsert(e){let r=$o(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,i){let o=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],l=!1,u=this.LA(1),c=this.LA(1),f=()=>{let d=this.LA(0),m=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:u,previous:d,ruleName:this.getCurrRuleFullName()}),v=new Mo(m,u,this.LA(0));v.resyncedTokens=ai(a),this.SAVE_ERROR(v)};for(;!l;)if(this.tokenMatcher(c,i)){f();return}else if(n.call(this)){f(),e.apply(this,r);return}else this.tokenMatcher(c,o)?l=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new LT("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||_e(r))return!1;let n=this.LA(1);return jn(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return lt(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let i=jn(e,o=>Dl(r,o));if(i!==void 0)return i;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return kT;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return K(e,(n,i)=>i===0?kT:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){let e=K(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return Mt(e)}getFollowSetFromFollowKey(e){if(e===kT)return[Qr];let r=e.ruleName+e.idxInCallingRule+Hf+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,Qr)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return ai(r)}attemptInRepetitionRecovery(e,r,n,i,o,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),i=Qe(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return K(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function BB(t,e,r,n,i,o,s){let a=this.getKeyForAutomaticLookahead(n,i),l=this.firstAfterRepMap[a];if(l===void 0){let d=this.getCurrRuleFullName(),m=this.getGAstProductions()[d];l=new o(m,i).startWalking(),this.firstAfterRepMap[a]=l}let u=l.token,c=l.occurrence,f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&u===void 0&&(u=Qr,c=1),!(u===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(u,c,s)&&this.tryInRepetitionRecovery(t,e,r,u)}function ud(t,e,r){return r|e|t}var pi=class{constructor(e){var r;this.maxLookahead=(r=e==null?void 0:e.maxLookahead)!==null&&r!==void 0?r:Ir.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(_e(r)){let n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...i,...o]}return r}validateNoLeftRecursion(e){return sr(e,r=>bT(r,r,On))}validateEmptyOrAlternatives(e){return sr(e,r=>$S(r,On))}validateAmbiguousAlternationAlternatives(e,r){return sr(e,n=>MS(n,r,On))}validateSomeNonEmptyLookaheadPath(e,r){return FS(e,r,On)}buildLookaheadForAlternation(e){return IS(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,SS)}buildLookaheadForOptional(e){return ES(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,kl(e.prodType),AS)}};var fd=class{initLooksAhead(e){this.dynamicTokensEnabled=ee(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Ir.dynamicTokensEnabled,this.maxLookahead=ee(e,"maxLookahead")?e.maxLookahead:Ir.maxLookahead,this.lookaheadStrategy=ee(e,"lookaheadStrategy")?e.lookaheadStrategy:new pi({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){J(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:i,option:o,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=WB(r);J(n,u=>{let c=u.idx===0?"":u.idx;this.TRACE_INIT(`${Gr(u)}${c}`,()=>{let f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:u.idx,rule:r,maxLookahead:u.maxLookahead||this.maxLookahead,hasPredicates:u.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),d=ud(this.fullRuleNameToShort[r.name],256,u.idx);this.setLaFuncCache(d,f)})}),J(i,u=>{this.computeLookaheadFunc(r,u.idx,768,"Repetition",u.maxLookahead,Gr(u))}),J(o,u=>{this.computeLookaheadFunc(r,u.idx,512,"Option",u.maxLookahead,Gr(u))}),J(s,u=>{this.computeLookaheadFunc(r,u.idx,1024,"RepetitionMandatory",u.maxLookahead,Gr(u))}),J(a,u=>{this.computeLookaheadFunc(r,u.idx,1536,"RepetitionMandatoryWithSeparator",u.maxLookahead,Gr(u))}),J(l,u=>{this.computeLookaheadFunc(r,u.idx,1280,"RepetitionWithSeparator",u.maxLookahead,Gr(u))})})})}computeLookaheadFunc(e,r,n,i,o,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=ud(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return ud(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},PT=class extends Or{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},cd=new PT;function WB(t){cd.reset(),t.accept(cd);let e=cd.dslMethods;return cd.reset(),e}function FT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function UT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function HS(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function KS(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var VB="name";function BT(t,e){Object.defineProperty(t,VB,{enumerable:!1,configurable:!0,writable:!1,value:e})}function GB(t,e){let r=Xe(t),n=r.length;for(let i=0;i<n;i++){let o=r[i],s=t[o],a=s.length;for(let l=0;l<a;l++){let u=s[l];u.tokenTypeIdx===void 0&&this[u.name](u.children,e)}}}function zS(t,e){let r=function(){};BT(r,t+"BaseSemantics");let n={visit:function(i,o){if(ie(i)&&(i=i[0]),!hr(i))return this[i.name](i.children,o)},validateVisitor:function(){let i=jB(this,e);if(!_e(i)){let o=K(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function YS(t,e,r){let n=function(){};BT(n,t+"BaseSemanticsWithDefaults");let i=Object.create(r.prototype);return J(e,o=>{i[o]=GB}),n.prototype=i,n.prototype.constructor=n,n}var WT;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(WT||(WT={}));function jB(t,e){return qB(t,e)}function qB(t,e){let r=Qt(e,i=>xr(t[i])===!1),n=K(r,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:WT.MISSING_METHOD,methodName:i}));return Vn(n)}var hd=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=ee(e,"nodeLocationTracking")?e.nodeLocationTracking:Ir.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=vt,this.cstFinallyStateUpdate=vt,this.cstPostTerminal=vt,this.cstPostNonTerminal=vt,this.cstPostRule=vt;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=UT,this.setNodeLocationFromNode=UT,this.cstPostRule=vt,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=vt,this.setNodeLocationFromNode=vt,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=FT,this.setNodeLocationFromNode=FT,this.cstPostRule=vt,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=vt,this.setNodeLocationFromNode=vt,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=vt,this.setNodeLocationFromNode=vt,this.cstPostRule=vt,this.setInitialNodeLocation=vt;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];HS(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];KS(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(hr(this.baseCstVisitorConstructor)){let e=zS(this.className,Xe(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(hr(this.baseCstVisitorWithDefaultsConstructor)){let e=YS(this.className,Xe(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var gd=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):xa}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?xa:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Td=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Na){if(lt(this.definedRulesNames,e)){let s={message:On.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:zt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let i=this.defineRule(e,r,n);return this[e]=i,i}OVERRIDE_RULE(e,r,n=Na){let i=PS(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(ro(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return qf(We(this.gastProductionsCache))}};var _d=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Ta,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},ee(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ie(e)){if(_e(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ie(e))this.tokensMap=Rt(e,(o,s)=>(o[s.name]=s,o),{});else if(ee(e,"modes")&&mr(Mt(We(e.modes)),pS)){let o=Mt(We(e.modes)),s=fa(o);this.tokensMap=Rt(s,(a,l)=>(a[l.name]=l,a),{})}else if(yt(e))this.tokensMap=Qe(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Qr;let n=ee(e,"modes")?Mt(We(e.modes)):We(e),i=mr(n,o=>_e(o.categoryMatches));this.tokenMatcher=i?Ta:ui,ci(We(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=ee(n,"resyncEnabled")?n.resyncEnabled:Na.resyncEnabled,o=ee(n,"recoveryValueFunc")?n.recoveryValueFunc:Na.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...c){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c);let f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}}:a=function(...c){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c)}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(ro(e)){let s=e;if(o){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return n(e);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let s=e.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=e;if(i.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=r;if(i.call(this)===!0){let s=this.doSingleRepetition(o);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,ct.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],i,1024,e,td)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,bl],a,1536,e,bl)}else throw this.raiseEarlyExitException(e,ct.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let a=r.GATE;if(a!==void 0){let l=i;i=()=>a.call(this)&&l.call(this)}}else o=r;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],i,768,e,ed,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,Cl],a,1280,e,Cl)}}repetitionSepSecondInternal(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),i=ie(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Pl(r,e))}}subruleInternal(e,r,n){let i;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw ro(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let i;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i}consumeInternalError(e,r,n){let i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Mo(i,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===wT?n:o}}else throw n}saveRecogState(){let e=this.errors,r=Qe(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Qr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var yd=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=ee(e,"errorMessageProvider")?e.errorMessageProvider:Ir.errorMessageProvider}SAVE_ERROR(e){if(ro(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Qe(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Qe(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=va(e,o,r,this.maxLookahead)[0],l=[];for(let c=1;c<=this.maxLookahead;c++)l.push(this.LA(c));let u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new $l(u,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=ya(e,i,this.maxLookahead),s=[];for(let u=1;u<=this.maxLookahead;u++)s.push(this.LA(u));let a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new wl(l,this.LA(1),a))}};var vd=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(hr(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return nd([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=Zt(e.ruleStack),i=this.getGAstProductions()[r];return new Zf(i,e).startWalking()}};var Nd={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Nd);var XS=!0,JS=Math.pow(2,8)-1,ZS=Qf({name:"RECORDING_PHASE_TOKEN",pattern:Dt.NA});ci([ZS]);var eA=$o(ZS,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(eA);var KB={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Rd=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,i){return this.consumeInternalRecord(n,e,i)},this[`SUBRULE${r}`]=function(n,i){return this.subruleInternalRecord(n,e,i)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return xa}topLevelRuleRecord(e,r){try{let n=new Nr({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return Fl.call(this,Fe,e,r)}atLeastOneInternalRecord(e,r){Fl.call(this,et,r,e)}atLeastOneSepFirstInternalRecord(e,r){Fl.call(this,tt,r,e,XS)}manyInternalRecord(e,r){Fl.call(this,Ee,r,e)}manySepFirstInternalRecord(e,r){Fl.call(this,He,r,e,XS)}orInternalRecord(e,r){return zB.call(this,e,r)}subruleInternalRecord(e,r,n){if(xd(r),!e||ee(e,"ruleName")===!1){let a=new Error(`<SUBRULE${QS(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let i=Gn(this.recordingProdStack),o=e.ruleName,s=new Me({idx:r,nonTerminalName:o,label:n==null?void 0:n.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?KB:Nd}consumeInternalRecord(e,r,n){if(xd(r),!xT(e)){let s=new Error(`<CONSUME${QS(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=Gn(this.recordingProdStack),o=new ye({idx:r,terminalType:e,label:n==null?void 0:n.LABEL});return i.definition.push(o),eA}};function Fl(t,e,r,n=!1){xd(r);let i=Gn(this.recordingProdStack),o=xr(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),ee(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),o.call(this),i.definition.push(s),this.recordingProdStack.pop(),Nd}function zB(t,e){xd(e);let r=Gn(this.recordingProdStack),n=ie(t)===!1,i=n===!1?t:t.DEF,o=new Ke({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});ee(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let s=Nl(i,a=>xr(a.GATE));return o.hasPredicates=s,r.definition.push(o),J(i,a=>{let l=new Ze({definition:[]});o.definition.push(l),ee(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:ee(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),Nd}function QS(t){return t===0?"":`${t}`}function xd(t){if(t<0||t>JS){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${JS+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var Od=class{initPerformanceTracer(e){if(ee(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Ir.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:i,value:o}=Il(r),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,o}else return r()}};function tA(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(i=>{if(i==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]})})}var xa=$o(Qr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(xa);var Ir=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:di,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Na=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),zt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(zt||(zt={}));function Id(t=void 0){return function(){return t}}var Ul=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{El(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),J(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=US({rules:We(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(_e(n)&&this.skipValidations===!1){let i=BS({rules:We(this.gastProductionsCache),tokenTypes:We(this.tokensMap),errMsgProvider:On,grammarName:r}),o=kS({lookaheadStrategy:this.lookaheadStrategy,rules:We(this.gastProductionsCache),tokenTypes:We(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(i,o)}}),_e(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=KE(We(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,o;(o=(i=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(i,{rules:We(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(We(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!_e(this.definitionErrors))throw e=K(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),ee(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=ee(r,"skipValidations")?r.skipValidations:Ir.skipValidations}};Ul.DEFER_DEFINITION_ERRORS_HANDLING=!1;tA(Ul,[ld,fd,hd,gd,_d,Td,yd,vd,Rd,Od]);var Bl=class extends Ul{constructor(e,r=Ir){let n=Qe(r);n.outputCst=!1,super(e,n)}};function Fo(t,e,r){return`${t.name}_${e}_${r}`}var no=1,XB=2,rA=4,nA=5;var Ea=7,JB=8,QB=9,ZB=10,eW=11,iA=12,Wl=class{constructor(e){this.target=e}isEpsilon(){return!1}},Oa=class extends Wl{constructor(e,r){super(e),this.tokenType=r}},Vl=class extends Wl{constructor(e){super(e)}isEpsilon(){return!0}},Ia=class extends Wl{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function oA(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};tW(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=Uo(e,i,i);o!==void 0&&dW(e,i,o)}return e}function tW(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=er(t,i,void 0,{type:XB}),s=er(t,i,void 0,{type:Ea});o.stop=s,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,s)}}function sA(t,e,r){return r instanceof ye?GT(t,e,r.terminalType,r):r instanceof Me?fW(t,e,r):r instanceof Ke?sW(t,e,r):r instanceof Fe?aW(t,e,r):r instanceof Ee?rW(t,e,r):r instanceof He?nW(t,e,r):r instanceof et?iW(t,e,r):r instanceof tt?oW(t,e,r):Uo(t,e,r)}function rW(t,e,r){let n=er(t,e,r,{type:nA});io(t,n);let i=Sa(t,e,n,r,Uo(t,e,r));return lA(t,e,r,i)}function nW(t,e,r){let n=er(t,e,r,{type:nA});io(t,n);let i=Sa(t,e,n,r,Uo(t,e,r)),o=GT(t,e,r.separator,r);return lA(t,e,r,i,o)}function iW(t,e,r){let n=er(t,e,r,{type:rA});io(t,n);let i=Sa(t,e,n,r,Uo(t,e,r));return aA(t,e,r,i)}function oW(t,e,r){let n=er(t,e,r,{type:rA});io(t,n);let i=Sa(t,e,n,r,Uo(t,e,r)),o=GT(t,e,r.separator,r);return aA(t,e,r,i,o)}function sW(t,e,r){let n=er(t,e,r,{type:no});io(t,n);let i=K(r.definition,s=>sA(t,e,s));return Sa(t,e,n,r,...i)}function aW(t,e,r){let n=er(t,e,r,{type:no});io(t,n);let i=Sa(t,e,n,r,Uo(t,e,r));return lW(t,e,r,i)}function Uo(t,e,r){let n=Qt(K(r.definition,i=>sA(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:cW(t,n)}function aA(t,e,r,n,i){let o=n.left,s=n.right,a=er(t,e,r,{type:eW});io(t,a);let l=er(t,e,r,{type:iA});return o.loopback=a,l.loopback=a,t.decisionMap[Fo(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,Gt(s,a),i===void 0?(Gt(a,o),Gt(a,l)):(Gt(a,l),Gt(a,i.left),Gt(i.right,o)),{left:o,right:l}}function lA(t,e,r,n,i){let o=n.left,s=n.right,a=er(t,e,r,{type:ZB});io(t,a);let l=er(t,e,r,{type:iA}),u=er(t,e,r,{type:QB});return a.loopback=u,l.loopback=u,Gt(a,o),Gt(a,l),Gt(s,u),i!==void 0?(Gt(u,l),Gt(u,i.left),Gt(i.right,o)):Gt(u,a),t.decisionMap[Fo(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:l}}function lW(t,e,r,n){let i=n.left,o=n.right;return Gt(i,o),t.decisionMap[Fo(e,"Option",r.idx)]=i,n}function io(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Sa(t,e,r,n,...i){let o=er(t,e,n,{type:JB,start:r});r.end=o;for(let a of i)a!==void 0?(Gt(r,a.left),Gt(a.right,o)):Gt(r,o);let s={left:r,right:o};return t.decisionMap[Fo(e,uW(n),n.idx)]=r,s}function uW(t){if(t instanceof Ke)return"Alternation";if(t instanceof Fe)return"Option";if(t instanceof Ee)return"Repetition";if(t instanceof He)return"RepetitionWithSeparator";if(t instanceof et)return"RepetitionMandatory";if(t instanceof tt)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function cW(t,e){let r=e.length;for(let o=0;o<r-1;o++){let s=e[o],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let l=a instanceof Ia,u=a,c=e[o+1].left;s.left.type===no&&s.right.type===no&&a!==void 0&&(l&&u.followState===s.right||a.target===s.right)?(l?u.followState=c:a.target=c,pW(t,s.right)):Gt(s.right,c)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function GT(t,e,r,n){let i=er(t,e,n,{type:no}),o=er(t,e,n,{type:no});return jT(i,new Oa(o,r)),{left:i,right:o}}function fW(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=er(t,e,r,{type:no}),s=er(t,e,r,{type:no}),a=new Ia(i,n,s);return jT(o,a),{left:o,right:s}}function dW(t,e,r){let n=t.ruleToStartState.get(e);Gt(n,r.left);let i=t.ruleToStopState.get(e);return Gt(r.right,i),{left:n,right:i}}function Gt(t,e){let r=new Vl(e);jT(t,r)}function er(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function jT(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function pW(t,e){t.states.splice(t.states.indexOf(e),1)}var Gl={},Aa=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=qT(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return K(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function qT(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function mW(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Ed=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},uA=new Ed,jl=class extends pi{constructor(e){var r;super(),this.logging=(r=e==null?void 0:e.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=oA(e.rules),this.dfas=hW(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=Fo(n,"Alternation",r),c=this.atn.decisionMap[l].decision,f=K(od({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),d=>K(d,m=>m[0]));if(cA(f,!1)&&!o){let d=Rt(f,(m,v,N)=>(J(v,E=>{E&&(m[E.tokenTypeIdx]=N,J(E.categoryMatches,I=>{m[I]=N}))}),m),{});return i?function(m){var v;let N=this.LA(1),E=d[N.tokenTypeIdx];if(m!==void 0&&E!==void 0){let I=(v=m[E])===null||v===void 0?void 0:v.GATE;if(I!==void 0&&I.call(this)===!1)return}return E}:function(){let m=this.LA(1);return d[m.tokenTypeIdx]}}else return i?function(d){let m=new Ed,v=d===void 0?0:d.length;for(let E=0;E<v;E++){let I=d==null?void 0:d[E].GATE;m.set(E,I===void 0||I.call(this))}let N=HT.call(this,s,c,m,a);return typeof N=="number"?N:void 0}:function(){let d=HT.call(this,s,c,uA,a);return typeof d=="number"?d:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=Fo(n,i,r),c=this.atn.decisionMap[l].decision,f=K(od({maxLookahead:1,occurrence:r,prodType:i,rule:n}),d=>K(d,m=>m[0]));if(cA(f)&&f[0][0]&&!o){let d=f[0],m=Mt(d);if(m.length===1&&_e(m[0].categoryMatches)){let N=m[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===N}}else{let v=Rt(m,(N,E)=>(E!==void 0&&(N[E.tokenTypeIdx]=!0,J(E.categoryMatches,I=>{N[I]=!0})),N),{});return function(){let N=this.LA(1);return v[N.tokenTypeIdx]===!0}}}return function(){let d=HT.call(this,s,c,uA,a);return typeof d=="object"?!1:d===0}}};function cA(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let s=[o.tokenTypeIdx].concat(o.categoryMatches);for(let a of s)if(r.has(a)){if(!i.has(a))return!1}else r.add(a),i.add(a)}}return!0}function hW(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=mW(t.decisionStates[n],n);return r}function HT(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let a=EW(i.atnStartState);o=pA(i,dA(a)),i.start=o}return gW.apply(this,[i,o,r,n])}function gW(t,e,r,n){let i=e,o=1,s=[],a=this.LA(o++);for(;;){let l=xW(i,a);if(l===void 0&&(l=TW.apply(this,[t,i,a,o,r,n])),l===Gl)return RW(s,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,s.push(a),a=this.LA(o++)}}function TW(t,e,r,n,i,o){let s=NW(e.configs,r,i);if(s.size===0)return fA(t,e,r,Gl),Gl;let a=dA(s),l=IW(s,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(CW(s)){let u=FE(s.alts);a.isAcceptState=!0,a.prediction=u,a.configs.uniqueAlt=u,_W.apply(this,[t,n,s.alts,o])}return a=fA(t,e,r,a),a}function _W(t,e,r,n){let i=[];for(let u=1;u<=e;u++)i.push(this.LA(u).tokenType);let o=t.atnStartState,s=o.rule,a=o.production,l=yW({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:i});n(l)}function yW(t){let e=K(t.prefixPath,i=>fi(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${vW(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function vW(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof et)return"AT_LEAST_ONE";if(t instanceof tt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ee)return"MANY";if(t instanceof ye)return"CONSUME";throw Error("non exhaustive match")}function RW(t,e,r){let n=sr(e.configs.elements,o=>o.state.transitions),i=qE(n.filter(o=>o instanceof Oa).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function xW(t,e){return t.edges[e.tokenTypeIdx]}function NW(t,e,r){let n=new Aa,i=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===Ea){i.push(s);continue}let a=s.state.transitions.length;for(let l=0;l<a;l++){let u=s.state.transitions[l],c=OW(u,e);c!==void 0&&n.add({state:c,alt:s.alt,stack:s.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new Aa;for(let s of n.elements)Sd(s,o)}if(i.length>0&&!AW(o))for(let s of i)o.add(s);return o}function OW(t,e){if(t instanceof Oa&&Dl(e,t.tokenType))return t.target}function IW(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function dA(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function fA(t,e,r,n){return n=pA(t,n),e.edges[r.tokenTypeIdx]=n,n}function pA(t,e){if(e===Gl)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function EW(t){let e=new Aa,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Sd(o,e)}return e}function Sd(t,e){let r=t.state;if(r.type===Ea){if(t.stack.length>0){let i=[...t.stack],s={state:i.pop(),alt:t.alt,stack:i};Sd(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],s=SW(t,o);s!==void 0&&Sd(s,e)}}function SW(t,e){if(e instanceof Vl)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Ia){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function AW(t){for(let e of t.elements)if(e.state.type===Ea)return!0;return!1}function DW(t){for(let e of t.elements)if(e.state.type!==Ea)return!1;return!0}function CW(t){if(DW(t))return!0;let e=bW(t.elements);return kW(e)&&!LW(e)}function bW(t){let e=new Map;for(let r of t){let n=qT(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function kW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function LW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var mA;(function(t){function e(r){return typeof r=="string"}t.is=e})(mA||(mA={}));var KT;(function(t){function e(r){return typeof r=="string"}t.is=e})(KT||(KT={}));var hA;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(hA||(hA={}));var Ad;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Ad||(Ad={}));var Le;(function(t){function e(n,i){return n===Number.MAX_VALUE&&(n=Ad.MAX_VALUE),i===Number.MAX_VALUE&&(i=Ad.MAX_VALUE),{line:n,character:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.uinteger(i.line)&&C.uinteger(i.character)}t.is=r})(Le||(Le={}));var Se;(function(t){function e(n,i,o,s){if(C.uinteger(n)&&C.uinteger(i)&&C.uinteger(o)&&C.uinteger(s))return{start:Le.create(n,i),end:Le.create(o,s)};if(Le.is(n)&&Le.is(i))return{start:n,end:i};throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${o}, ${s}]`)}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Le.is(i.start)&&Le.is(i.end)}t.is=r})(Se||(Se={}));var Dd;(function(t){function e(n,i){return{uri:n,range:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.range)&&(C.string(i.uri)||C.undefined(i.uri))}t.is=r})(Dd||(Dd={}));var gA;(function(t){function e(n,i,o,s){return{targetUri:n,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.targetRange)&&C.string(i.targetUri)&&Se.is(i.targetSelectionRange)&&(Se.is(i.originSelectionRange)||C.undefined(i.originSelectionRange))}t.is=r})(gA||(gA={}));var zT;(function(t){function e(n,i,o,s){return{red:n,green:i,blue:o,alpha:s}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.numberRange(i.red,0,1)&&C.numberRange(i.green,0,1)&&C.numberRange(i.blue,0,1)&&C.numberRange(i.alpha,0,1)}t.is=r})(zT||(zT={}));var TA;(function(t){function e(n,i){return{range:n,color:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.range)&&zT.is(i.color)}t.is=r})(TA||(TA={}));var _A;(function(t){function e(n,i,o){return{label:n,textEdit:i,additionalTextEdits:o}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.string(i.label)&&(C.undefined(i.textEdit)||oo.is(i))&&(C.undefined(i.additionalTextEdits)||C.typedArray(i.additionalTextEdits,oo.is))}t.is=r})(_A||(_A={}));var yA;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(yA||(yA={}));var vA;(function(t){function e(n,i,o,s,a,l){let u={startLine:n,endLine:i};return C.defined(o)&&(u.startCharacter=o),C.defined(s)&&(u.endCharacter=s),C.defined(a)&&(u.kind=a),C.defined(l)&&(u.collapsedText=l),u}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.uinteger(i.startLine)&&C.uinteger(i.startLine)&&(C.undefined(i.startCharacter)||C.uinteger(i.startCharacter))&&(C.undefined(i.endCharacter)||C.uinteger(i.endCharacter))&&(C.undefined(i.kind)||C.string(i.kind))}t.is=r})(vA||(vA={}));var YT;(function(t){function e(n,i){return{location:n,message:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&Dd.is(i.location)&&C.string(i.message)}t.is=r})(YT||(YT={}));var RA;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(RA||(RA={}));var xA;(function(t){t.Unnecessary=1,t.Deprecated=2})(xA||(xA={}));var NA;(function(t){function e(r){let n=r;return C.objectLiteral(n)&&C.string(n.href)}t.is=e})(NA||(NA={}));var Cd;(function(t){function e(n,i,o,s,a,l){let u={range:n,message:i};return C.defined(o)&&(u.severity=o),C.defined(s)&&(u.code=s),C.defined(a)&&(u.source=a),C.defined(l)&&(u.relatedInformation=l),u}t.create=e;function r(n){var i;let o=n;return C.defined(o)&&Se.is(o.range)&&C.string(o.message)&&(C.number(o.severity)||C.undefined(o.severity))&&(C.integer(o.code)||C.string(o.code)||C.undefined(o.code))&&(C.undefined(o.codeDescription)||C.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(C.string(o.source)||C.undefined(o.source))&&(C.undefined(o.relatedInformation)||C.typedArray(o.relatedInformation,YT.is))}t.is=r})(Cd||(Cd={}));var Da;(function(t){function e(n,i,...o){let s={title:n,command:i};return C.defined(o)&&o.length>0&&(s.arguments=o),s}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.title)&&C.string(i.command)}t.is=r})(Da||(Da={}));var oo;(function(t){function e(o,s){return{range:o,newText:s}}t.replace=e;function r(o,s){return{range:{start:o,end:o},newText:s}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function i(o){let s=o;return C.objectLiteral(s)&&C.string(s.newText)&&Se.is(s.range)}t.is=i})(oo||(oo={}));var XT;(function(t){function e(n,i,o){let s={label:n};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&C.string(i.label)&&(C.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(C.string(i.description)||i.description===void 0)}t.is=r})(XT||(XT={}));var Ca;(function(t){function e(r){let n=r;return C.string(n)}t.is=e})(Ca||(Ca={}));var OA;(function(t){function e(o,s,a){return{range:o,newText:s,annotationId:a}}t.replace=e;function r(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}t.insert=r;function n(o,s){return{range:o,newText:"",annotationId:s}}t.del=n;function i(o){let s=o;return oo.is(s)&&(XT.is(s.annotationId)||Ca.is(s.annotationId))}t.is=i})(OA||(OA={}));var JT;(function(t){function e(n,i){return{textDocument:n,edits:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&r_.is(i.textDocument)&&Array.isArray(i.edits)}t.is=r})(JT||(JT={}));var QT;(function(t){function e(n,i,o){let s={kind:"create",uri:n};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="create"&&C.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ca.is(i.annotationId))}t.is=r})(QT||(QT={}));var ZT;(function(t){function e(n,i,o,s){let a={kind:"rename",oldUri:n,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let i=n;return i&&i.kind==="rename"&&C.string(i.oldUri)&&C.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||C.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||C.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ca.is(i.annotationId))}t.is=r})(ZT||(ZT={}));var e_;(function(t){function e(n,i,o){let s={kind:"delete",uri:n};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="delete"&&C.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||C.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||C.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Ca.is(i.annotationId))}t.is=r})(e_||(e_={}));var t_;(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(i=>C.string(i.kind)?QT.is(i)||ZT.is(i)||e_.is(i):JT.is(i)))}t.is=e})(t_||(t_={}));var IA;(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)}t.is=r})(IA||(IA={}));var EA;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)&&C.integer(i.version)}t.is=r})(EA||(EA={}));var r_;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)&&(i.version===null||C.integer(i.version))}t.is=r})(r_||(r_={}));var SA;(function(t){function e(n,i,o,s){return{uri:n,languageId:i,version:o,text:s}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.string(i.uri)&&C.string(i.languageId)&&C.integer(i.version)&&C.string(i.text)}t.is=r})(SA||(SA={}));var n_;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(n_||(n_={}));var ql;(function(t){function e(r){let n=r;return C.objectLiteral(r)&&n_.is(n.kind)&&C.string(n.value)}t.is=e})(ql||(ql={}));var AA;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(AA||(AA={}));var DA;(function(t){t.PlainText=1,t.Snippet=2})(DA||(DA={}));var CA;(function(t){t.Deprecated=1})(CA||(CA={}));var bA;(function(t){function e(n,i,o){return{newText:n,insert:i,replace:o}}t.create=e;function r(n){let i=n;return i&&C.string(i.newText)&&Se.is(i.insert)&&Se.is(i.replace)}t.is=r})(bA||(bA={}));var kA;(function(t){t.asIs=1,t.adjustIndentation=2})(kA||(kA={}));var LA;(function(t){function e(r){let n=r;return n&&(C.string(n.detail)||n.detail===void 0)&&(C.string(n.description)||n.description===void 0)}t.is=e})(LA||(LA={}));var wA;(function(t){function e(r){return{label:r}}t.create=e})(wA||(wA={}));var PA;(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(PA||(PA={}));var bd;(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let i=n;return C.string(i)||C.objectLiteral(i)&&C.string(i.language)&&C.string(i.value)}t.is=r})(bd||(bd={}));var $A;(function(t){function e(r){let n=r;return!!n&&C.objectLiteral(n)&&(ql.is(n.contents)||bd.is(n.contents)||C.typedArray(n.contents,bd.is))&&(r.range===void 0||Se.is(r.range))}t.is=e})($A||($A={}));var MA;(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(MA||(MA={}));var FA;(function(t){function e(r,n,...i){let o={label:r};return C.defined(n)&&(o.documentation=n),C.defined(i)?o.parameters=i:o.parameters=[],o}t.create=e})(FA||(FA={}));var UA;(function(t){t.Text=1,t.Read=2,t.Write=3})(UA||(UA={}));var BA;(function(t){function e(r,n){let i={range:r};return C.number(n)&&(i.kind=n),i}t.create=e})(BA||(BA={}));var WA;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(WA||(WA={}));var VA;(function(t){t.Deprecated=1})(VA||(VA={}));var GA;(function(t){function e(r,n,i,o,s){let a={name:r,kind:n,location:{uri:o,range:i}};return s&&(a.containerName=s),a}t.create=e})(GA||(GA={}));var jA;(function(t){function e(r,n,i,o){return o!==void 0?{name:r,kind:n,location:{uri:i,range:o}}:{name:r,kind:n,location:{uri:i}}}t.create=e})(jA||(jA={}));var qA;(function(t){function e(n,i,o,s,a,l){let u={name:n,detail:i,kind:o,range:s,selectionRange:a};return l!==void 0&&(u.children=l),u}t.create=e;function r(n){let i=n;return i&&C.string(i.name)&&C.number(i.kind)&&Se.is(i.range)&&Se.is(i.selectionRange)&&(i.detail===void 0||C.string(i.detail))&&(i.deprecated===void 0||C.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=r})(qA||(qA={}));var HA;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(HA||(HA={}));var kd;(function(t){t.Invoked=1,t.Automatic=2})(kd||(kd={}));var KA;(function(t){function e(n,i,o){let s={diagnostics:n};return i!=null&&(s.only=i),o!=null&&(s.triggerKind=o),s}t.create=e;function r(n){let i=n;return C.defined(i)&&C.typedArray(i.diagnostics,Cd.is)&&(i.only===void 0||C.typedArray(i.only,C.string))&&(i.triggerKind===void 0||i.triggerKind===kd.Invoked||i.triggerKind===kd.Automatic)}t.is=r})(KA||(KA={}));var zA;(function(t){function e(n,i,o){let s={title:n},a=!0;return typeof i=="string"?(a=!1,s.kind=i):Da.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return i&&C.string(i.title)&&(i.diagnostics===void 0||C.typedArray(i.diagnostics,Cd.is))&&(i.kind===void 0||C.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||Da.is(i.command))&&(i.isPreferred===void 0||C.boolean(i.isPreferred))&&(i.edit===void 0||t_.is(i.edit))}t.is=r})(zA||(zA={}));var YA;(function(t){function e(n,i){let o={range:n};return C.defined(i)&&(o.data=i),o}t.create=e;function r(n){let i=n;return C.defined(i)&&Se.is(i.range)&&(C.undefined(i.command)||Da.is(i.command))}t.is=r})(YA||(YA={}));var XA;(function(t){function e(n,i){return{tabSize:n,insertSpaces:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&C.uinteger(i.tabSize)&&C.boolean(i.insertSpaces)}t.is=r})(XA||(XA={}));var JA;(function(t){function e(n,i,o){return{range:n,target:i,data:o}}t.create=e;function r(n){let i=n;return C.defined(i)&&Se.is(i.range)&&(C.undefined(i.target)||C.string(i.target))}t.is=r})(JA||(JA={}));var QA;(function(t){function e(n,i){return{range:n,parent:i}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Se.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=r})(QA||(QA={}));var ZA;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(ZA||(ZA={}));var eD;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(eD||(eD={}));var tD;(function(t){function e(r){let n=r;return C.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(tD||(tD={}));var rD;(function(t){function e(n,i){return{range:n,text:i}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&C.string(i.text)}t.is=r})(rD||(rD={}));var nD;(function(t){function e(n,i,o){return{range:n,variableName:i,caseSensitiveLookup:o}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&C.boolean(i.caseSensitiveLookup)&&(C.string(i.variableName)||i.variableName===void 0)}t.is=r})(nD||(nD={}));var iD;(function(t){function e(n,i){return{range:n,expression:i}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&(C.string(i.expression)||i.expression===void 0)}t.is=r})(iD||(iD={}));var oD;(function(t){function e(n,i){return{frameId:n,stoppedLocation:i}}t.create=e;function r(n){let i=n;return C.defined(i)&&Se.is(n.stoppedLocation)}t.is=r})(oD||(oD={}));var i_;(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(i_||(i_={}));var o_;(function(t){function e(n){return{value:n}}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&(i.tooltip===void 0||C.string(i.tooltip)||ql.is(i.tooltip))&&(i.location===void 0||Dd.is(i.location))&&(i.command===void 0||Da.is(i.command))}t.is=r})(o_||(o_={}));var sD;(function(t){function e(n,i,o){let s={position:n,label:i};return o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return C.objectLiteral(i)&&Le.is(i.position)&&(C.string(i.label)||C.typedArray(i.label,o_.is))&&(i.kind===void 0||i_.is(i.kind))&&i.textEdits===void 0||C.typedArray(i.textEdits,oo.is)&&(i.tooltip===void 0||C.string(i.tooltip)||ql.is(i.tooltip))&&(i.paddingLeft===void 0||C.boolean(i.paddingLeft))&&(i.paddingRight===void 0||C.boolean(i.paddingRight))}t.is=r})(sD||(sD={}));var aD;(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(aD||(aD={}));var lD;(function(t){function e(r,n,i,o){return{insertText:r,filterText:n,range:i,command:o}}t.create=e})(lD||(lD={}));var uD;(function(t){function e(r){return{items:r}}t.create=e})(uD||(uD={}));var cD;(function(t){t.Invoked=0,t.Automatic=1})(cD||(cD={}));var fD;(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(fD||(fD={}));var dD;(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(dD||(dD={}));var pD;(function(t){function e(r){let n=r;return C.objectLiteral(n)&&KT.is(n.uri)&&C.string(n.name)}t.is=e})(pD||(pD={}));var mD;(function(t){function e(o,s,a,l){return new s_(o,s,a,l)}t.create=e;function r(o){let s=o;return!!(C.defined(s)&&C.string(s.uri)&&(C.undefined(s.languageId)||C.string(s.languageId))&&C.uinteger(s.lineCount)&&C.func(s.getText)&&C.func(s.positionAt)&&C.func(s.offsetAt))}t.is=r;function n(o,s){let a=o.getText(),l=i(s,(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),u=a.length;for(let c=l.length-1;c>=0;c--){let f=l[c],d=o.offsetAt(f.range.start),m=o.offsetAt(f.range.end);if(m<=u)a=a.substring(0,d)+f.newText+a.substring(m,a.length);else throw new Error("Overlapping edit");u=d}return a}t.applyEdits=n;function i(o,s){if(o.length<=1)return o;let a=o.length/2|0,l=o.slice(0,a),u=o.slice(a);i(l,s),i(u,s);let c=0,f=0,d=0;for(;c<l.length&&f<u.length;)s(l[c],u[f])<=0?o[d++]=l[c++]:o[d++]=u[f++];for(;c<l.length;)o[d++]=l[c++];for(;f<u.length;)o[d++]=u[f++];return o}})(mD||(mD={}));var s_=class{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let i=0;i<r.length;i++){n&&(e.push(i),n=!1);let o=r.charAt(i);n=o==="\r"||o===`
`,o==="\r"&&i+1<r.length&&r.charAt(i+1)===`
`&&i++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return Le.create(0,e);for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return Le.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}},C;(function(t){let e=Object.prototype.toString;function r(m){return typeof m!="undefined"}t.defined=r;function n(m){return typeof m=="undefined"}t.undefined=n;function i(m){return m===!0||m===!1}t.boolean=i;function o(m){return e.call(m)==="[object String]"}t.string=o;function s(m){return e.call(m)==="[object Number]"}t.number=s;function a(m,v,N){return e.call(m)==="[object Number]"&&v<=m&&m<=N}t.numberRange=a;function l(m){return e.call(m)==="[object Number]"&&-2147483648<=m&&m<=2147483647}t.integer=l;function u(m){return e.call(m)==="[object Number]"&&0<=m&&m<=2147483647}t.uinteger=u;function c(m){return e.call(m)==="[object Function]"}t.func=c;function f(m){return m!==null&&typeof m=="object"}t.objectLiteral=f;function d(m,v){return Array.isArray(m)&&m.every(v)}t.typedArray=d})(C||(C={}));var Hl=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new ba(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Wo;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Bo(e.startOffset,e.image.length,Ls(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();(n==null?void 0:n.content.length)===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Bo(r.startOffset,r.image.length,Ls(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.content.length;o++){let s=e.content[o],{offset:a,end:l}=s;if(yr(s)&&n>a&&i<l){this.addHiddenToken(s,r);return}else if(i<=a){e.content.splice(o,0,r);return}}e.content.push(r)}},Kl=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Bo=class extends Kl{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}},Wo=class extends Kl{constructor(){super(...arguments),this.content=new a_(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:Le.create(0,0),end:Le.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},a_=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},ba=class extends Wo{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e!=null?e:""}};var Ld=Symbol("Datatype");function l_(t){return t.$type===Ld}var hD="\u200B",gD=t=>t.endsWith(hD)?t:t+hD,zl=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new u_(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},Yl=class extends zl{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Hl,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:_l(e)?Ld:ni(e),i=this.wrapper.DEFINE_RULE(gD(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Ld&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(i)){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),l=this.current;if(s){let u=nr(n)?i.image:this.converter.convert(i.image,o);this.assign(s.operator,s.feature,u,o,a)}else if(l_(l)){let u=i.image;nr(n)||(u=this.converter.convert(u,o).toString()),l.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(s,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let s=this.current;if(l_(s))s.value+=e.toString();else if(typeof e=="object"&&e){let a=e.$type,l=this.assignWithoutOverride(e,s);a&&(l.$type=a);let u=l;this.stack.pop(),this.stack.push(u)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return sf(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),l_(r)?this.converter.convert(r.value,r.$cstNode):(fl(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=Xr(e,pr);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?xn(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let s=this.current,a;switch(o&&typeof n=="string"?a=this.linker.buildReference(s,r,i,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r)){let o=e[n];o===void 0?e[n]=i:Array.isArray(o)&&Array.isArray(i)&&(i.push(...o),e[n]=i)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},wd=class{buildMismatchTokenMessage(e){return di.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return di.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return di.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return di.buildEarlyExitMessage(e)}},ka=class extends wd{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},Xl=class extends zl{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(gD(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},wW={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new ka},u_=class extends Bl{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},wW),{lookaheadStrategy:n?new pi({maxLookahead:r.maxLookahead}):new jl}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function $d(t,e,r){return PW({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function PW(t,e){let r=gl(e,!1),n=me(e.rules).filter(Et).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Vo(o,i.definition)))}}function Vo(t,e,r=!1){let n;if(nr(e))n=VW(t,e);else if(Rn(e))n=$W(t,e);else if(pr(e))n=Vo(t,e.terminal);else if(xn(e))n=TD(t,e);else if($r(e))n=MW(t,e);else if(Cs(e))n=UW(t,e);else if(bs(e))n=BW(t,e);else if(an(e))n=WW(t,e);else if(gg(e)){let i=t.consume++;n=()=>t.parser.consume(i,Qr,e)}else throw new No(e.$cstNode,`Unexpected element type: ${e.$type}`);return _D(t,r?void 0:Pd(e),n,e.cardinality)}function $W(t,e){let r=ni(e);return()=>t.parser.action(r,e)}function MW(t,e){let r=e.rule.ref;if(Et(r)){let n=t.subrule++,i=e.arguments.length>0?FW(r,e.arguments):()=>({});return o=>t.parser.subrule(n,yD(t,r),e,i(o))}else if(Pr(r)){let n=t.consume++,i=c_(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)Ui(r);else throw new No(e.$cstNode,`Undefined rule type: ${e.$type}`)}function FW(t,e){let r=e.map(n=>mi(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let s=t.parameters[o],a=r[o];i[s.name]=a(n)}return i}}function mi(t){if(jh(t)){let e=mi(t.left),r=mi(t.right);return n=>e(n)||r(n)}else if(Vh(t)){let e=mi(t.left),r=mi(t.right);return n=>e(n)&&r(n)}else if(Yh(t)){let e=mi(t.value);return r=>!e(r)}else if(Zh(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Bh(t)){let e=!!t.true;return()=>e}Ui(t)}function UW(t,e){if(e.elements.length===1)return Vo(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Vo(t,i,!0)},s=Pd(i);s&&(o.GATE=mi(s)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let s={ALT:()=>o.ALT(i)},a=o.GATE;return a&&(s.GATE=()=>a(i)),s}))}}function BW(t,e){if(e.elements.length===1)return Vo(t,e.elements[0]);let r=[];for(let a of e.elements){let l={ALT:Vo(t,a,!0)},u=Pd(a);u&&(l.GATE=mi(u)),r.push(l)}let n=t.or++,i=(a,l)=>{let u=l.getRuleStack().join("-");return`uGroup_${a}_${u}`},o=a=>t.parser.alternatives(n,r.map((l,u)=>{let c={ALT:()=>!0},f=t.parser;c.ALT=()=>{if(l.ALT(a),!f.isRecording()){let m=i(n,f);f.unorderedGroups.get(m)||f.unorderedGroups.set(m,[]);let v=f.unorderedGroups.get(m);typeof(v==null?void 0:v[u])=="undefined"&&(v[u]=!0)}};let d=l.GATE;return d?c.GATE=()=>d(a):c.GATE=()=>{let m=f.unorderedGroups.get(i(n,f));return!(m!=null&&m[u])},c})),s=_D(t,Pd(e),o,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function WW(t,e){let r=e.elements.map(n=>Vo(t,n));return n=>r.forEach(i=>i(n))}function Pd(t){if(an(t))return t.guardCondition}function TD(t,e,r=e.terminal){if(r)if($r(r)&&Et(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,yD(t,r.rule.ref),e,i)}else if($r(r)&&Pr(r.rule.ref)){let n=t.consume++,i=c_(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if(nr(r)){let n=t.consume++,i=c_(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=df(e.type.ref),i=n==null?void 0:n.terminal;if(!i)throw new Error("Could not find name assignment for type: "+ni(e.type.ref));return TD(t,e,i)}}function VW(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function _D(t,e,r,n){let i=e&&mi(e);if(!n)if(i){let o=t.or++;return s=>t.parser.alternatives(o,[{ALT:()=>r(s),GATE:()=>i(s)},{ALT:Id(),GATE:()=>!i(s)}])}else return r;if(n==="*"){let o=t.many++;return s=>t.parser.many(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else if(n==="+"){let o=t.many++;if(i){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(a)}),GATE:()=>i(a)},{ALT:Id(),GATE:()=>!i(a)}])}else return s=>t.parser.atLeastOne(o,{DEF:()=>r(s)})}else if(n==="?"){let o=t.optional++;return s=>t.parser.optional(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else Ui(n)}function yD(t,e){let r=GW(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function GW(t,e){if(Et(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!Et(n);)(an(n)||Cs(n)||bs(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function c_(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function f_(t){let e=t.Grammar,r=t.parser.Lexer,n=new Xl(t);return $d(e,n,r.definition),n.finalize(),n}function d_(t){let e=vD(t);return e.finalize(),e}function vD(t){let e=t.Grammar,r=t.parser.Lexer,n=new Yl(t);return $d(e,n,r.definition)}var Jl=class{buildTokens(e,r){let n=me(gl(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&uf(a)?o.unshift(s):o.push(s)}),o}buildTerminalTokens(e){return e.filter(Pr).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Wi(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,i={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(i.GROUP=uf(r)?Dt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,i)=>(r.lastIndex=i,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(Et).flatMap(i=>Mr(i).filter(nr)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!(n!=null&&n.caseInsensitive)))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(Kg(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i==null?void 0:i.PATTERN;return o!=null&&o.source&&zg("^"+o.source+"$",e.value)&&n.push(i),n},[])}};var Ql=class{convert(e,r){let n=r.grammarSource;if(xn(n)&&(n=Tl(n)),$r(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return Hn.convertInt(r);case"STRING":return Hn.convertString(r);case"ID":return Hn.convertID(r)}switch((i=rT(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return Hn.convertNumber(r);case"boolean":return Hn.convertBoolean(r);case"bigint":return Hn.convertBigint(r);case"date":return Hn.convertDate(r);default:return r}}},Hn;(function(t){function e(u){let c="";for(let f=1;f<u.length-1;f++){let d=u.charAt(f);if(d==="\\"){let m=u.charAt(++f);c+=r(m)}else c+=d}return c}t.convertString=e;function r(u){switch(u){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return u}}function n(u){return u.charAt(0)==="^"?u.substring(1):u}t.convertID=n;function i(u){return parseInt(u)}t.convertInt=i;function o(u){return BigInt(u)}t.convertBigint=o;function s(u){return new Date(u)}t.convertDate=s;function a(u){return Number(u)}t.convertNumber=a;function l(u){return u.toLowerCase()==="true"}t.convertBoolean=l})(Hn||(Hn={}));var te={};De(te,Ht(ID(),1));function x_(){return new Promise(t=>{typeof setImmediate=="undefined"?setTimeout(t,0):setImmediate(t)})}var R_=0,ED=10;function SD(){return R_=Date.now(),new te.CancellationTokenSource}function AD(t){ED=t}var Kn=Symbol("OperationCancelled");function zn(t){return t===Kn}async function xt(t){if(t===te.CancellationToken.None)return;let e=Date.now();if(e-R_>=ED&&(R_=e,await x_()),t.isCancellationRequested)throw Kn}var Er=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var Bd=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=CD(n.range),o=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(s,this._content.length);let a=Math.max(i.start.line,0),l=Math.max(i.end.line,0),u=this._lineOffsets,c=DD(n.text,!1,o);if(l-a===c.length)for(let d=0,m=c.length;d<m;d++)u[d+a+1]=c[d];else c.length<1e4?u.splice(a+1,l-a,...c):this._lineOffsets=u=u.slice(0,a+1).concat(c,u.slice(l+1));let f=n.text.length-(s-o);if(f!==0)for(let d=a+1+c.length,m=u.length;d<m;d++)u[d]=u[d]+f}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=DD(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},so;(function(t){function e(i,o,s,a){return new Bd(i,o,s,a)}t.create=e;function r(i,o,s){if(i instanceof Bd)return i.update(o,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let s=i.getText(),a=N_(o.map(ZW),(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),l=0,u=[];for(let c of a){let f=i.offsetAt(c.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&u.push(s.substring(l,f)),c.newText.length&&u.push(c.newText),l=i.offsetAt(c.range.end)}return u.push(s.substr(l)),u.join("")}t.applyEdits=n})(so||(so={}));function N_(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);N_(n,e),N_(i,e);let o=0,s=0,a=0;for(;o<n.length&&s<i.length;)e(n[o],i[s])<=0?t[a++]=n[o++]:t[a++]=i[s++];for(;o<n.length;)t[a++]=n[o++];for(;s<i.length;)t[a++]=i[s++];return t}function DD(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function CD(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function ZW(t){let e=CD(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var oe;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(oe||(oe={}));var Zl=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=te.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r!=null?r:qe.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let i=await this.parseAsync(e,r,n);return this.createLangiumDocument(i,e,void 0,r)}else{let i=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(i,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:oe.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:oe.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=o,o}async update(e,r){var n,i;let o=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,s=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=s?s.getText():await this.fileSystemProvider.readFile(e.uri);if(s)Object.defineProperty(e,"textDocument",{value:s});else{let l=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:l})}return o!==a&&(e.parseResult=await this.parseAsync(e.uri,a,r),e.parseResult.value.$document=e),e.state=oe.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i!=null?i:i=so.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r!=null?r:"")}},eu=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return me(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(i=>(this.addDocument(i),i));{let i=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=oe.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=oe.Changed,this.documentMap.delete(r)),n}};var Go=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=te.CancellationToken.None){for(let n of Fr(e.parseResult.value))await xt(r),ws(n).forEach(i=>this.doLink(i,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if(yn(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o!=null?o:this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n!=null?n:this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,s={$refNode:n,$refText:i,get ref(){var a;if(Be(this._ref))return this._ref;if(il(this._nodeDescription)){let l=o.loadAstNode(this._nodeDescription);this._ref=l!=null?l:o.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let l=o.getLinkedNode({reference:s,container:e,property:r});if(l.error&&_t(e).state<oe.ComputedScopes)return;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return yn(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(yn(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=_t(e.container);n.state<oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};function Wd(t){return typeof t.name=="string"}var tu=class{getName(e){if(Wd(e))return e.name}getNameNode(e){return Bi(e.$cstNode,"name")}};var jo=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=eT(e),n=e.astNode;if(r&&n){let i=n[r.feature];if(Tt(i))return i.ref;if(Array.isArray(i)){for(let o of i)if(Tt(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||$g(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r!=null&&r.$cstNode){let n=this.nameProvider.getNameNode(r);return n!=null?n:r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(i=i.filter(o=>Pt.equals(o.sourceUri,r.documentUri))),n.push(...i),me(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=_t(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:Ro(r),local:!0}}}};var dn=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return ks.sum(me(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return me(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return me(this.map.keys())}values(){return me(this.map.values()).flat()}entriesGroupedByKey(){return me(this.map.entries())}},qo=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var Ho=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=te.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=xo,i=te.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let s of n(e))await xt(i),this.exportNode(s,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=te.CancellationToken.None){let n=e.parseResult.value,i=new dn;for(let o of Mr(n))await xt(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};var jr=class{constructor(e,r,n){var i;this.elements=e,this.outerScope=r,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},ru=class{constructor(e,r,n){var i;this.elements=new Map,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1;for(let o of e){let s=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(s,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=me(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},eV={getElement(){},getAllElements(){return Mi}};var Pa=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},nu=class extends Pa{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},Ko=class extends Pa{constructor(e){super(),this.cache=new Map,this.converter=e!=null?e:r=>r}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let i=this.cacheForContext(e);if(i.has(r))return i.get(r);if(n){let o=n();return i.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},Vd=class extends Ko{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let i=r.concat(n);for(let o of i)this.clear(o)}))}},$a=class extends nu{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var zo=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new $a(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=_t(e.container).precomputedScopes;if(i){let s=e.container;do{let a=i.get(s);a.length>0&&r.push(me(a).filter(l=>this.reflection.isSubtype(l.type,n))),s=s.$container}while(s)}let o=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)o=this.createScope(r[s],o);return o}createScope(e,r,n){return new jr(me(e),r,n)}createScopeForNodes(e,r,n){let i=me(e).map(o=>{let s=this.nameProvider.getName(o);if(s)return this.descriptions.createDescription(o,s)}).nonNullable();return new jr(i,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new ru(this.indexManager.allElements(e)))}};function O_(t){return typeof t.$comment=="string"}function bD(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Yo=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r==null?void 0:r.replacer,i=(s,a)=>this.replacer(s,a,r),o=n?(s,a)=>n(s,a,i):i;try{return this.currentDocument=_t(e),JSON.stringify(e,o,r==null?void 0:r.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:i,textRegions:o,comments:s,uriConverter:a}){var l,u,c,f;if(!this.ignoreProperties.has(e))if(Tt(r)){let d=r.ref,m=n?r.$refText:void 0;if(d){let v=_t(d),N="";this.currentDocument&&this.currentDocument!==v&&(a?N=a(v.uri,r):N=v.uri.toString());let E=this.astNodeLocator.getAstNodePath(d);return{$ref:`${N}#${E}`,$refText:m}}else return{$error:(u=(l=r.error)===null||l===void 0?void 0:l.message)!==null&&u!==void 0?u:"Could not resolve reference",$refText:m}}else if(Be(r)){let d;if(o&&(d=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&(d!=null&&d.$textRegion)&&(d.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),i&&!e&&(d!=null||(d=Object.assign({},r)),d.$sourceText=(f=r.$cstNode)===null||f===void 0?void 0:f.text),s){d!=null||(d=Object.assign({},r));let m=this.commentProvider.getComment(r);m&&(d.$comment=m.replace(/\r/g,""))}return d!=null?d:r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),i=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let s=$s(e.$cstNode,o).map(r);s.length!==0&&(i[o]=s)}),e}}linkNode(e,r,n,i,o,s){for(let[l,u]of Object.entries(e))if(Array.isArray(u))for(let c=0;c<u.length;c++){let f=u[c];bD(f)?u[c]=this.reviveReference(e,l,r,f,n):Be(f)&&this.linkNode(f,r,n,e,l,c)}else bD(u)?e[l]=this.reviveReference(e,l,r,u,n):Be(u)&&this.linkNode(u,r,n,e,l);let a=e;a.$container=i,a.$containerProperty=o,a.$containerIndex=s}reviveReference(e,r,n,i,o){let s=i.$refText,a=i.$error;if(i.$ref){let l=this.getRefNode(n,i.$ref,o.uriConverter);if(Be(l))return s||(s=this.nameProvider.getName(l)),{$refText:s!=null?s:"",ref:l};a=l}if(a){let l={$refText:s!=null?s:""};return l.error={container:e,property:r,message:a,reference:l},l}else return}getRefNode(e,r,n){try{let i=r.indexOf("#");if(i===0){let l=this.astNodeLocator.getAstNode(e,r.substring(1));return l||"Could not resolve path: "+r}if(i<0){let l=n?n(r):qe.parse(r),u=this.langiumDocuments.getDocument(l);return u?u.parseResult.value:"Could not find document for URI: "+r}let o=n?n(r.substring(0,i)):qe.parse(r.substring(0,i)),s=this.langiumDocuments.getDocument(o);if(!s)return"Could not find document for URI: "+r;if(i===r.length-1)return s.parseResult.value;let a=this.astNodeLocator.getAstNode(s.parseResult.value,r.substring(i+1));return a||"Could not resolve URI: "+r}catch(i){return String(i)}}};var Xo=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=Pt.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function Gd(t){return{code:t}}var Ma;(function(t){t.all=["fast","slow","built-in"]})(Ma||(Ma={}));var iu=class{constructor(e){this.entries=new dn,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[i,o]of Object.entries(e)){let s=o;if(Array.isArray(s))for(let a of s){let l={check:this.wrapValidationException(a,r),category:n};this.addEntry(i,l)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(i,a)}}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(s){if(zn(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),i("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=me(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(i=>r.includes(i.category))),n.map(i=>i.check)}};var ou=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=te.CancellationToken.None){let i=e.parseResult,o=[];if(await xt(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(i,o,r),r.stopAfterLexingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===hi.LexingError})||(this.processParsingErrors(i,o,r),r.stopAfterParsingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===hi.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===hi.LinkingError}))))return o;try{o.push(...await this.validateAst(i.value,r,n))}catch(s){if(zn(s))throw s;console.error("An error occurred during validation:",s)}return await xt(n),o}processLexingErrors(e,r,n){for(let i of e.lexerErrors){let o={severity:jd("error"),range:{start:{line:i.line-1,character:i.column-1},end:{line:i.line-1,character:i.column+i.length-1}},message:i.message,data:Gd(hi.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let i of e.parserErrors){let o;if(isNaN(i.token.startOffset)){if("previousToken"in i){let s=i.previousToken;if(isNaN(s.startOffset)){let a={line:0,character:0};o={start:a,end:a}}else{let a={line:s.endLine-1,character:s.endColumn};o={start:a,end:a}}}}else o=Ls(i.token);if(o){let s={severity:jd("error"),range:o,message:i.message,data:Gd(hi.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let i of e.references){let o=i.error;if(o){let s={node:o.container,property:o.property,index:o.index,data:{code:hi.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,s))}}}async validateAst(e,r,n=te.CancellationToken.None){let i=[],o=(s,a,l)=>{i.push(this.toDiagnostic(s,a,l))};return await Promise.all(Fr(e).map(async s=>{await xt(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let l of a)await l(s,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:kD(n),severity:jd(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function kD(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Bi(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Ms(t.node.$cstNode,t.keyword,t.index)),e!=null||(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function jd(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var hi;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(hi||(hi={}));var su=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=_t(e)){r!=null||(r=this.nameProvider.getName(e));let i=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${i} has no name.`);let o,s=()=>{var a;return o!=null?o:o=Ro((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode)};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:Ro(e.$cstNode),type:e.$type,documentUri:n.uri,path:i}}},au=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=te.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of Fr(i))await xt(r),ws(o).filter(s=>!yn(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=_t(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:Ro(n),local:Pt.equals(r.documentUri,i)}}};var lu=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let s=o.indexOf(this.indexSeparator);if(s>0){let a=o.substring(0,s),l=parseInt(o.substring(s+1)),u=i[a];return u==null?void 0:u[l]}return i[o]},e)}};var uu=class{constructor(e){this._ready=new Er,this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.fetchConfiguration){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await e.fetchConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){await this.ready;let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var Jo;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(Jo||(Jo={}));var cu=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new dn,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=oe.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=te.CancellationToken.None){var i,o;for(let s of e){let a=s.uri.toString();if(s.state===oe.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=oe.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let l=this.buildState.get(a),u=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(u){let f=((o=r.validation.categories)!==null&&o!==void 0?o:Ma.all).filter(d=>!u.includes(d));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:f})},result:l.result}),s.state=oe.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=oe.Changed,await this.emitUpdate(e.map(s=>s.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=te.CancellationToken.None){this.currentState=oe.Changed;for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString()),this.indexManager.remove(s);for(let s of e){if(!this.langiumDocuments.invalidateDocument(s)){let l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},s);l.state=oe.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(s.toString())}let i=me(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!i.has(s.uri.toString())&&this.shouldRelink(s,i)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,oe.ComputedScopes),s.diagnostics=void 0}),await this.emitUpdate(e,r),await xt(n);let o=this.langiumDocuments.all.filter(s=>{var a;return s.state<oe.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),Jo.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,oe.Parsed,n,o=>this.langiumDocumentFactory.update(o,n)),await this.runCancelable(e,oe.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,oe.ComputedScopes,n,async o=>{let s=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await s.computeLocalScopes(o,n)}),await this.runCancelable(e,oe.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,oe.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o));await this.runCancelable(i,oe.Validated,n,o=>this.validate(o,n));for(let o of e){let s=this.buildState.get(o.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let i=n.uri.toString(),o=this.buildState.get(i);(!o||o.completed)&&this.buildState.set(i,{completed:!1,options:r,result:o==null?void 0:o.result})}}async runCancelable(e,r,n,i){let o=e.filter(s=>s.state<r);for(let s of o)await xt(n),await i(s),s.state=r;await this.notifyBuildPhase(o,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Jo.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let i;if(r&&"path"in r?i=r:n=r,n!=null||(n=te.CancellationToken.None),i){let o=this.langiumDocuments.getDocument(i);if(o&&o.state>e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Kn):new Promise((o,s)=>{let a=this.onBuildPhase(e,()=>{if(a.dispose(),l.dispose(),i){let u=this.langiumDocuments.getDocument(i);o(u==null?void 0:u.uri)}else o(void 0)}),l=n.onCancellationRequested(()=>{a.dispose(),l.dispose(),s(Kn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await xt(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,i;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,l=await o.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;let u=this.buildState.get(e.uri.toString());if(u){(n=u.result)!==null&&n!==void 0||(u.result={});let c=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:Ma.all;u.result.validationChecks?u.result.validationChecks.push(...c):u.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var fu=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new Ko,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=_t(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(s=>{Pt.equals(s.targetUri,n)&&s.targetPath===r&&i.push(s)})}),me(i)}allElements(e,r){let n=me(this.symbolIndex.keys());return r&&(n=n.filter(i=>!r||r.has(i))),n.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var o;return((o=this.symbolIndex.get(e))!==null&&o!==void 0?o:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=te.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),o=e.uri.toString();this.symbolIndex.set(o,i),this.symbolByTypeIndex.clear(o)}async updateReferences(e,r=te.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(i=>!i.local&&r.has(i.targetUri.toString())):!1}};var du=class{constructor(e){this.initialBuildOptions={},this._ready=new Er,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=te.CancellationToken.None){let n=await this.performStartup(e);await xt(r),await this.documentBuilder.build(n,this.initialBuildOptions,r)}async performStartup(e){let r=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),n=[],i=o=>{n.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,i),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,r,i))),this._ready.resolve(),n}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return qe.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,i);else if(s.isFile){let a=await this.langiumDocuments.getOrCreateDocument(s.uri);i(a)}}}))}includeEntry(e,r,n){let i=Pt.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=Pt.extname(r.uri);return n.includes(o)}return!1}};var pu=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=I_(r)?Object.values(r):r;this.chevrotainLexer=new Dt(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(I_(e))return e;let r=E_(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};function LD(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function E_(t){return t&&"modes"in t&&"defaultMode"in t}function I_(t){return!LD(t)&&!E_(t)}function D_(t,e,r){let n,i;typeof t=="string"?(i=e,n=r):(i=t.range.start,n=e),i||(i=Le.create(0,0));let o=$D(t),s=b_(n),a=rV({lines:o,position:i,options:s});return aV({index:0,tokens:a,position:i})}function C_(t,e){let r=b_(e),n=$D(t);if(n.length===0)return!1;let i=n[0],o=n[n.length-1],s=r.start,a=r.end;return!!(s!=null&&s.exec(i))&&!!(a!=null&&a.exec(o))}function $D(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(qg)}var wD=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,tV=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function rV(t){var e,r,n;let i=[],o=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let l=a===0,u=a===t.lines.length-1,c=t.lines[a],f=0;if(l&&t.options.start){let m=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);m&&(f=m.index+m[0].length)}else{let m=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);m&&(f=m.index+m[0].length)}if(u){let m=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);m&&(c=c.substring(0,m.index))}if(c=c.substring(0,sV(c)),A_(c,f)>=c.length){if(i.length>0){let m=Le.create(o,s);i.push({type:"break",content:"",range:Se.create(m,m)})}}else{wD.lastIndex=f;let m=wD.exec(c);if(m){let v=m[0],N=m[1],E=Le.create(o,s+f),I=Le.create(o,s+f+v.length);i.push({type:"tag",content:N,range:Se.create(E,I)}),f+=v.length,f=A_(c,f)}if(f<c.length){let v=c.substring(f),N=Array.from(v.matchAll(tV));i.push(...nV(N,v,o,s+f))}}o++,s=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function nV(t,e,r,n){let i=[];if(t.length===0){let o=Le.create(r,n),s=Le.create(r,n+e.length);i.push({type:"text",content:e,range:Se.create(o,s)})}else{let o=0;for(let a of t){let l=a.index,u=e.substring(o,l);u.length>0&&i.push({type:"text",content:e.substring(o,l),range:Se.create(Le.create(r,o+n),Le.create(r,l+n))});let c=u.length+1,f=a[1];if(i.push({type:"inline-tag",content:f,range:Se.create(Le.create(r,o+c+n),Le.create(r,o+c+f.length+n))}),c+=f.length,a.length===4){c+=a[2].length;let d=a[3];i.push({type:"text",content:d,range:Se.create(Le.create(r,o+c+n),Le.create(r,o+c+d.length+n))})}else i.push({type:"text",content:"",range:Se.create(Le.create(r,o+c+n),Le.create(r,o+c+n))});o=l+a[0].length}let s=e.substring(o);s.length>0&&i.push({type:"text",content:s,range:Se.create(Le.create(r,o+n),Le.create(r,o+n+s.length))})}return i}var iV=/\S/,oV=/\s*$/;function A_(t,e){let r=t.substring(e).match(iV);return r?e+r.index:t.length}function sV(t){let e=t.match(oV);if(e&&typeof e.index=="number")return e.index}function aV(t){var e,r,n,i;let o=Le.create(t.position.line,t.position.character);if(t.tokens.length===0)return new qd([],Se.create(o,o));let s=[];for(;t.index<t.tokens.length;){let u=lV(t,s[s.length-1]);u&&s.push(u)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,l=(i=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&i!==void 0?i:o;return new qd(s,Se.create(a,l))}function lV(t,e){let r=t.tokens[t.index];if(r.type==="tag")return FD(t,!1);if(r.type==="text"||r.type==="inline-tag")return MD(t);uV(r,e),t.index++}function uV(t,e){if(e){let r=new Hd("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function MD(t){let e=t.tokens[t.index],r=e,n=e,i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(cV(t)),n=e,e=t.tokens[t.index];return new hu(i,Se.create(r.range.start,n.range.end))}function cV(t){return t.tokens[t.index].type==="inline-tag"?FD(t,!0):UD(t)}function FD(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){let o=UD(t);return new mu(n,new hu([o],o.range),e,Se.create(r.range.start,o.range.end))}else{let o=MD(t);return new mu(n,o,e,Se.create(r.range.start,o.range.end))}else{let o=r.range;return new mu(n,new hu([],o),e,o)}}function UD(t){let e=t.tokens[t.index++];return new Hd(e.content,e.range)}function b_(t){if(!t)return b_({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:S_(e,!0),end:S_(r,!1),line:S_(n,!0)}}function S_(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?So(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var qd=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=PD(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let i=n.toMarkdown(e);r+=PD(r)+i}return r.trim()}},mu=class{constructor(e,r,n,i){this.name=e,this.content=r,this.inline=n,this.range=i}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e==null?void 0:e.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=fV(this.name,r,e!=null?e:{});if(typeof o=="string")return o}let n="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?n="*":(e==null?void 0:e.tag)==="bold"?n="**":(e==null?void 0:e.tag)==="bold-italic"&&(n="***");let i=`${n}@${this.name}${n}`;return this.content.inlines.length===1?i=`${i} \u2014 ${r}`:this.content.inlines.length>1&&(i=`${i}
${r}`),this.inline?`{${i}}`:i}};function fV(t,e,r){var n,i;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),s=e;if(o>0){let l=A_(e,o);s=e.substring(l),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(i=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&i!==void 0?i:dV(e,s)}}function dV(t,e){try{return qe.parse(t,!0),`[${e}](${t})`}catch{return t}}var hu=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],i=this.inlines[r+1];e+=n.toString(),i&&i.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let i=this.inlines[n],o=this.inlines[n+1];r+=i.toMarkdown(e),o&&o.range.start.line>i.range.start.line&&(r+=`
`)}return r}},Hd=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function PD(t){return t.endsWith(`
`)?`
`:`

`}var gu=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&C_(r))return D_(r).toMarkdown({renderLink:(i,o)=>this.documentationLinkRenderer(e,i,o),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,r,n){var i;let o=(i=this.findNameInPrecomputedScopes(e,r))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let s=o.nameSegment.range.start.line+1,a=o.nameSegment.range.start.character+1,l=o.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${l.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let i=_t(e).precomputedScopes;if(!i)return;let o=e;do{let a=i.get(o).find(l=>l.name===r);if(a)return a;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(i=>i.name===r)}};var Tu=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return O_(e)?e.$comment:(r=Mg(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var Ct={};De(Ct,Ht(__(),1));var _u=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},Kd=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),i=new Er,o,s=r.onCancellationRequested(()=>{o=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(a=>{let l=this.hydrator.hydrate(a);i.resolve(l)}).catch(a=>{i.reject(a)}).finally(()=>{s.dispose(),clearTimeout(o)}),i.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new Er;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject(Kn)}),this.queue.push(r),r.promise}},zd=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,i){this.onReadyEmitter=new Ct.Emitter,this.deferred=new Er,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=i,r(o=>{let s=o;this.deferred.resolve(s),this.unlock()}),n(o=>{this.deferred.reject(o),this.unlock()})}terminate(){this.deferred.reject(Kn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new Er,this.sendMessage(e),this.deferred.promise}};var yu=class{constructor(){this.previousTokenSource=new te.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new te.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let i=new Er,o={action:r,deferred:i,cancellationToken:n!=null?n:te.CancellationToken.None};return e.push(o),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:i})=>{try{let o=await Promise.resolve().then(()=>r(i));n.resolve(o)}catch(o){zn(o)?n.resolve(void 0):n.reject(o)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var vu=class{constructor(e){this.grammarElementIdMap=new qo,this.tokenTypeIdMap=new qo,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors.map(r=>Object.assign({},r)),parserErrors:e.parserErrors.map(r=>Object.assign({},r)),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}createDehyrationContext(e){let r=new Map,n=new Map;for(let i of Fr(e))r.set(i,{});if(e.$cstNode)for(let i of vo(e.$cstNode))n.set(i,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.dehydrateAstNode(a,r)):Tt(a)?s.push(this.dehydrateReference(a,r)):s.push(a)}else Be(o)?n[i]=this.dehydrateAstNode(o,r):Tt(o)?n[i]=this.dehydrateReference(o,r):o!==void 0&&(n[i]=o);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return ol(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),yr(e)?n.content=e.content.map(i=>this.dehydrateCstNode(i,r)):vn(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=e.value,n=this.createHydrationContext(r);return"$cstNode"in r&&this.hydrateCstNode(r.$cstNode,n),{lexerErrors:e.lexerErrors,parserErrors:e.parserErrors,value:this.hydrateAstNode(r,n)}}createHydrationContext(e){let r=new Map,n=new Map;for(let o of Fr(e))r.set(o,{});let i;if(e.$cstNode)for(let o of vo(e.$cstNode)){let s;"fullText"in o?(s=new ba(o.fullText),i=s):"content"in o?s=new Wo:"tokenType"in o&&(s=this.hydrateCstLeafNode(o)),s&&(n.set(o,s),s.root=i)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.setParent(this.hydrateAstNode(a,r),n)):Tt(a)?s.push(this.hydrateReference(a,n,i,r)):s.push(a)}else Be(o)?n[i]=this.setParent(this.hydrateAstNode(o,r),n):Tt(o)?n[i]=this.hydrateReference(o,n,i,r):o!==void 0&&(n[i]=o);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,i){return this.linker.buildReference(r,n,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let i=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=r.astNodes.get(e.astNode),yr(i))for(let o of e.content){let s=this.hydrateCstNode(o,r,n++);i.content.push(s)}return i}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,i=e.length,o=e.startLine,s=e.startColumn,a=e.endLine,l=e.endColumn,u=e.hidden;return new Bo(n,i,{start:{line:o,character:s},end:{line:a,character:l}},r,u)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Fr(this.grammar))yo(r)&&this.grammarElementIdMap.set(r,e++)}};function Ru(t){return{documentation:{CommentProvider:e=>new Tu(e),DocumentationProvider:e=>new gu(e)},parser:{AsyncParser:e=>new _u(e),GrammarConfig:e=>sT(e),LangiumParser:e=>d_(e),CompletionParser:e=>f_(e),ValueConverter:()=>new Ql,TokenBuilder:()=>new Jl,Lexer:e=>new pu(e),ParserErrorMessageProvider:()=>new ka},workspace:{AstNodeLocator:()=>new lu,AstNodeDescriptionProvider:e=>new su(e),ReferenceDescriptionProvider:e=>new au(e)},references:{Linker:e=>new Go(e),NameProvider:()=>new tu,ScopeProvider:e=>new zo(e),ScopeComputation:e=>new Ho(e),References:e=>new jo(e)},serializer:{Hydrator:e=>new vu(e),JsonSerializer:e=>new Yo(e)},validation:{DocumentValidator:e=>new ou(e),ValidationRegistry:e=>new iu(e)},shared:()=>t.shared}}function xu(t){return{ServiceRegistry:()=>new Xo,workspace:{LangiumDocuments:e=>new eu(e),LangiumDocumentFactory:e=>new Zl(e),DocumentBuilder:e=>new cu(e),IndexManager:e=>new fu(e),WorkspaceManager:e=>new du(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new yu,ConfigurationProvider:e=>new uu(e)}}}var Fa;(function(t){t.merge=(e,r)=>Yd(Yd({},e),r)})(Fa||(Fa={}));function Qo(t,e,r,n,i,o,s,a,l){let u=[t,e,r,n,i,o,s,a,l].reduce(Yd,{});return VD(u)}var k_=Symbol("isProxy");function Nu(t){if(t&&t[k_])for(let e of Object.values(t))Nu(e);return t}function VD(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>WD(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(WD(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),k_]});return r[k_]=!0,r}var BD=Symbol();function WD(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===BD)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=BD;try{t[e]=typeof i=="function"?i(n):VD(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function Yd(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=Yd(i,n):t[r]=n}}return t}var GD=Ht(wr(),1);var Ua=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=Xt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let s=Pt.equals(_t(o).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(o,a).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return GD.DocumentHighlight.create(e.segment.range)}};var Xd=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o!=null?o:i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of xo(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}};var Ou=Ht(wr(),1);var Jd=class{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var i,o;r=!!(!((o=(i=n.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||o===void 0)&&o.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=me(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,i={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n==null||n.client.register(Ou.DidChangeWatchedFilesNotification.type,i)}}fireDocumentUpdate(e,r){this.workspaceManager.ready.then(()=>{this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}).catch(n=>{console.error("Workspace initialization failed. Could not perform document update.",n)})}didChangeContent(e){this.fireDocumentUpdate([qe.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=me(e.changes).filter(i=>i.type!==Ou.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>qe.parse(i.uri)).toArray(),n=me(e.changes).filter(i=>i.type===Ou.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>qe.parse(i.uri)).toArray();this.fireDocumentUpdate(r,n)}};var Iu=Ht(wr(),1);var Qd=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=Mr(i).iterator(),s;do if(s=o.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||o.prune()}while(!s.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of Pg(i))if(this.commentNames.includes(o.tokenType.name)){let s=this.toFoldingRange(e,o,Iu.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,s=i.end;if(!(s.line-o.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),Iu.FoldingRange.create(o.line,s.line,o.character,s.character,n)}includeLastFoldingLine(e,r){if(r===Iu.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};var Zd=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,s=r.length;for(let a=0;a<s;a++){let l=r.charCodeAt(a),u=e.charCodeAt(o);if((l===u||this.toUpperCharCode(l)===this.toUpperCharCode(u))&&(n||(n=i===void 0||this.isWordTransition(i,l)),n&&o++,o===e.length))return!0;i=l}return!1}isWordTransition(e,r){return jD<=e&&e<=qD&&pV<=r&&r<=mV||e===HD&&r!==HD}toUpperCharCode(e){return jD<=e&&e<=qD?e-32:e}},jD=97,qD=122,pV=65,mV=90,HD=95;var L_=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let s=e.textDocument.offsetAt(r.position),a=Xt(o,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l)}}}},ep=class extends L_{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var pn=Ht(gt(),1);var Ne=Ht(wr(),1);var zD={[Ne.SemanticTokenTypes.class]:0,[Ne.SemanticTokenTypes.comment]:1,[Ne.SemanticTokenTypes.enum]:2,[Ne.SemanticTokenTypes.enumMember]:3,[Ne.SemanticTokenTypes.event]:4,[Ne.SemanticTokenTypes.function]:5,[Ne.SemanticTokenTypes.interface]:6,[Ne.SemanticTokenTypes.keyword]:7,[Ne.SemanticTokenTypes.macro]:8,[Ne.SemanticTokenTypes.method]:9,[Ne.SemanticTokenTypes.modifier]:10,[Ne.SemanticTokenTypes.namespace]:11,[Ne.SemanticTokenTypes.number]:12,[Ne.SemanticTokenTypes.operator]:13,[Ne.SemanticTokenTypes.parameter]:14,[Ne.SemanticTokenTypes.property]:15,[Ne.SemanticTokenTypes.regexp]:16,[Ne.SemanticTokenTypes.string]:17,[Ne.SemanticTokenTypes.struct]:18,[Ne.SemanticTokenTypes.type]:19,[Ne.SemanticTokenTypes.typeParameter]:20,[Ne.SemanticTokenTypes.variable]:21,[Ne.SemanticTokenTypes.decorator]:22},hV={[Ne.SemanticTokenModifiers.abstract]:1,[Ne.SemanticTokenModifiers.async]:2,[Ne.SemanticTokenModifiers.declaration]:4,[Ne.SemanticTokenModifiers.defaultLibrary]:8,[Ne.SemanticTokenModifiers.definition]:16,[Ne.SemanticTokenModifiers.deprecated]:32,[Ne.SemanticTokenModifiers.documentation]:64,[Ne.SemanticTokenModifiers.modification]:128,[Ne.SemanticTokenModifiers.readonly]:256,[Ne.SemanticTokenModifiers.static]:512},YD={legend:{tokenTypes:Object.keys(zD),tokenModifiers:Object.keys(hV)},full:{delta:!0},range:!0};var KD;(function(t){function e(n,i){let o=new Map;Object.entries(zD).forEach(([l,u])=>o.set(u,l));let s=0,a=0;return r(n.data,5).map(l=>{s+=l[0],l[0]!==0&&(a=0),a+=l[1];let u=l[2];return{offset:i.textDocument.offsetAt({line:s,character:a}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:i.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+u}})}})}t.decode=e;function r(n,i){let o=[];for(let s=0;s<n.length;s+=i){let a=n.slice(s,s+i);o.push(a)}return o}})(KD||(KD={}));var tp=class{provideSignatureHelp(e,r,n=te.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let s=ul(o,e.textDocument.offsetAt(r.position));if(s)return this.getSignatureFromElement(s.astNode,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};function XD(t){let e=[],r=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var rp=class{constructor(e){this.onInitializeEmitter=new pn.Emitter,this.onInitializedEmitter=new pn.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Nu(this.services),this.services.ServiceRegistry.all.forEach(e=>Nu(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,i,o;let s=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,a=this.services.ServiceRegistry.all,l=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.Formatter}),u=a.map(G=>{var U,ve;return(ve=(U=G.lsp)===null||U===void 0?void 0:U.Formatter)===null||ve===void 0?void 0:ve.formatOnTypeOptions}).find(G=>!!G),c=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.CodeActionProvider}),f=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.SemanticTokenProvider}),d=(i=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,m=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.DocumentLinkProvider}),v=XD(a.map(G=>{var U,ve;return(ve=(U=G.lsp)===null||U===void 0?void 0:U.SignatureHelp)===null||ve===void 0?void 0:ve.signatureHelpOptions})),N=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.TypeProvider}),E=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.ImplementationProvider}),I=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.CompletionProvider}),_=YN(a.map(G=>{var U,ve;return(ve=(U=G.lsp)===null||U===void 0?void 0:U.CompletionProvider)===null||ve===void 0?void 0:ve.completionOptions})),T=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.ReferencesProvider}),k=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.DocumentSymbolProvider}),M=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.DefinitionProvider}),Q=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.DocumentHighlightProvider}),ae=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.FoldingRangeProvider}),le=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.HoverProvider}),Ce=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.RenameProvider}),Pe=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.CallHierarchyProvider}),W=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.TypeHierarchyProvider}),L=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.CodeLensProvider}),j=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.DeclarationProvider}),H=this.hasService(G=>{var U;return(U=G.lsp)===null||U===void 0?void 0:U.InlayHintProvider}),Te=(o=this.services.lsp)===null||o===void 0?void 0:o.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:s},executeCommandProvider:d&&{commands:d},textDocumentSync:pn.TextDocumentSyncKind.Incremental,completionProvider:I?_:void 0,referencesProvider:T,documentSymbolProvider:k,definitionProvider:M,typeDefinitionProvider:N,documentHighlightProvider:Q,codeActionProvider:c,documentFormattingProvider:l,documentRangeFormattingProvider:l,documentOnTypeFormattingProvider:u,foldingRangeProvider:ae,hoverProvider:le,renameProvider:Ce?{prepareProvider:!0}:void 0,semanticTokensProvider:f?YD:void 0,signatureHelpProvider:v,implementationProvider:E,callHierarchyProvider:Pe?{}:void 0,typeHierarchyProvider:W?{}:void 0,documentLinkProvider:m?{resolveProvider:!1}:void 0,codeLensProvider:L?{resolveProvider:!1}:void 0,declarationProvider:j,inlayHintProvider:H?{resolveProvider:!1}:void 0,workspaceSymbolProvider:Te?{resolveProvider:!!Te.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:i=>r.client.register(pn.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>r.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(n).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}};function JD(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");gV(e,t),TV(e,t),_V(e,t),yV(e,t),vV(e,t),xV(e,t),NV(e,t),OV(e,t),IV(e,t),SV(e,t),DV(e,t),CV(e,t),RV(e,t),bV(e,t),AV(e,t),kV(e,t),LV(e,t),PV(e,t),MV(e,t),BV(e,t),WV(e,t),FV(e,t),$V(e,t),wV(e,t),EV(e,t),UV(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>{t.lsp.LanguageServer.initialized(n)}),t.workspace.TextDocuments.listen(e),e.listen()}function gV(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(i=>r.didChangeContent(i)),t.onDidChangeWatchedFiles(i=>r.didChangeWatchedFiles(i))}function TV(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function _V(t,e){e.workspace.DocumentBuilder.onBuildPhase(oe.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}function yV(t,e){t.onCompletion(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e,oe.IndexedReferences))}function vV(t,e){t.onReferences(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e,oe.IndexedReferences))}function RV(t,e){t.onCodeAction(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e,oe.Validated))}function xV(t,e){t.onDocumentSymbol(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e,oe.Parsed))}function NV(t,e){t.onDefinition(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e,oe.IndexedReferences))}function OV(t,e){t.onTypeDefinition(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e,oe.IndexedReferences))}function IV(t,e){t.onImplementation(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e,oe.IndexedReferences))}function EV(t,e){t.onDeclaration(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e,oe.IndexedReferences))}function SV(t,e){t.onDocumentHighlight(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e,oe.IndexedReferences))}function AV(t,e){t.onHover(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e,oe.IndexedReferences))}function DV(t,e){t.onFoldingRanges(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e,oe.Parsed))}function CV(t,e){t.onDocumentFormatting(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e,oe.Parsed)),t.onDocumentRangeFormatting(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e,oe.Parsed)),t.onDocumentOnTypeFormatting(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e,oe.Parsed))}function bV(t,e){t.onRenameRequest(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e,oe.IndexedReferences)),t.onPrepareRename(Tr((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e,oe.IndexedReferences))}function kV(t,e){t.languages.inlayHint.on(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(n,i,o)},e,oe.IndexedReferences))}function LV(t,e){let r={data:[]};t.languages.semanticTokens.on(gi((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,s):r},e,oe.IndexedReferences)),t.languages.semanticTokens.onDelta(gi((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,s):r},e,oe.IndexedReferences)),t.languages.semanticTokens.onRange(gi((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,s):r},e,oe.IndexedReferences))}function wV(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function PV(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(s){return Zo(s)}})}function $V(t,e){t.onDocumentLinks(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(n,i,o)},e,oe.Parsed))}function MV(t,e){t.onSignatureHelp(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e,oe.IndexedReferences))}function FV(t,e){t.onCodeLens(gi((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(n,i,o)},e,oe.IndexedReferences))}function UV(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(s,a)=>{try{return await i.waitUntil(oe.IndexedContent,a),await n.getSymbols(s,a)}catch(l){return Zo(l)}});let o=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);o&&t.onWorkspaceSymbolResolve(async(s,a)=>{try{return await i.waitUntil(oe.IndexedContent,a),await o(s,a)}catch(l){return Zo(l)}})}}function BV(t,e){t.languages.callHierarchy.onPrepare(gi(async(r,n,i,o)=>{var s;if(!((s=r.lsp)===null||s===void 0)&&s.CallHierarchyProvider){let a=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,i,o);return a!=null?a:null}return null},e,oe.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(np(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.incomingCalls(n,i);return s!=null?s:null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(np(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.outgoingCalls(n,i);return s!=null?s:null}return null},e))}function WV(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(gi(async(r,n,i,o)=>{var s,a;let l=await((a=(s=r.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(n,i,o));return l!=null?l:null},e,oe.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(np(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.supertypes(n,i));return a!=null?a:null},e)),t.languages.typeHierarchy.onSubtypes(np(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.subtypes(n,i));return a!=null?a:null},e)))}function np(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=qe.parse(n.item.uri),s=await w_(e,i,o,oe.IndexedReferences);if(s)return s;let a=r.getServices(o);if(!a){let l=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(l),new Error(l)}try{return await t(a,n,i)}catch(l){return Zo(l)}}}function gi(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=qe.parse(o.textDocument.uri),l=await w_(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u){let f=`Could not find service instance for uri: '${a}'`;throw console.error(f),new Error(f)}let c=await n.getOrCreateDocument(a);try{return await t(u,c,o,s)}catch(f){return Zo(f)}}}function Tr(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=qe.parse(o.textDocument.uri),l=await w_(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let c=n.getDocument(a);if(!c)return null;try{return await t(u,c,o,s)}catch(f){return Zo(f)}}}async function w_(t,e,r,n){if(n!==void 0){let i=t.workspace.DocumentBuilder;try{await i.waitUntil(n,r,e)}catch(o){return Zo(o)}}}function Zo(t){if(zn(t))return new pn.ResponseError(pn.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof pn.ResponseError)return t;throw t}var op=Ht(wr(),1),ip=class{getSymbolKind(){return op.SymbolKind.Field}getCompletionItemKind(){return op.CompletionItemKind.Reference}};var QD=Ht(wr(),1);var sp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=Xt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,s).forEach(a=>{i.push(QD.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}};var ap=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),s=Xt(i,o,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,l).forEach(c=>{let f=oo.replace(c.segment.range,r.newName),d=c.sourceUri.toString();n[d]?n[d].push(f):n[d]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=Xt(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&Wd(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var lp=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=te.CancellationToken.None){let n=[],i=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await xt(r),this.fuzzyMatcher.match(i,o.name)){let s=this.getWorkspaceSymbol(o);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function eC(t){return Fa.merge(Ru(t),VV(t))}function VV(t){return{lsp:{CompletionProvider:e=>new Bs(e),DocumentSymbolProvider:e=>new Xd(e),HoverProvider:e=>new ep(e),FoldingRangeProvider:e=>new Qd(e),ReferencesProvider:e=>new sp(e),DefinitionProvider:e=>new mf(e),DocumentHighlightProvider:e=>new Ua(e),RenameProvider:e=>new ap(e)},shared:()=>t.shared}}function tC(t){return Fa.merge(xu(t),GV(t))}function GV(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new rp(e),DocumentUpdateHandler:e=>new Jd(e),WorkspaceSymbolProvider:e=>new lp(e),NodeKindProvider:()=>new ip,FuzzyMatcher:()=>new Zd},workspace:{TextDocuments:()=>new ZD.TextDocuments(so)}}}var up=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new P_(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var s;return(s=o.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var s;return(s=o.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(a,l,u)=>{var c,f;let d=this.nodeModeToKey(a,l),m=i.get(d),v=(c=u.options.priority)!==null&&c!==void 0?c:0,N=(f=m==null?void 0:m.options.priority)!==null&&f!==void 0?f:0;(!m||N<=v)&&i.set(d,u)};this.collector=o,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let s=e.offsetAt(i.range.start),a=e.offsetAt(o.range.end);s<a&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=Mr(n).iterator(),o;do if(o=i.next(),!o.done){let s=o.value;this.insideRange(s.$cstNode.range,r)?this.format(s):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},s=[],l=this.iterateCstTree(e,o).iterator(),u,c;do if(c=l.next(),!c.done){let f=c.value,d=vn(f),m=this.nodeModeToKey(f,"prepend"),v=r.get(m);if(r.delete(m),v){let I=this.createTextEdit(u,f,v,o);for(let _ of I)_&&this.insideRange(_.range,i)&&this.isNecessary(_,e.textDocument)&&s.push(_)}let N=this.nodeModeToKey(f,"append"),E=r.get(N);if(r.delete(N),E){let I=Fg(f);if(I){let _=this.createTextEdit(f,I,E,o);for(let T of _)T&&this.insideRange(T.range,i)&&this.isNecessary(T,e.textDocument)&&s.push(T)}}if(!v&&f.hidden){let I=this.createHiddenTextEdits(u,f,void 0,o);for(let _ of I)_&&this.insideRange(_.range,i)&&this.isNecessary(_,e.textDocument)&&s.push(_)}d&&(u=f)}while(!c.done);return s}createHiddenTextEdits(e,r,n,i){var o;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],l={start:{character:0,line:s},end:r.range.start},u=i.document.getText(l),c=this.findFittingMove(l,(o=n==null?void 0:n.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(u,i),m=this.getIndentationCharacterCount(i,c)-f;if(m===0)return[];let v="";m>0&&(v=(i.options.insertSpaces?" ":"	").repeat(m));let N=r.text.split(`
`);N[0]=u+N[0];for(let E=0;E<N.length;E++){let I=s+E,_={character:0,line:I};if(m>0)a.push({newText:v,range:{start:_,end:_}});else{let T=N[E],k=0;for(;k<T.length;k++){let M=T.charAt(k);if(M!==" "&&M!=="	")break}a.push({newText:"",range:{start:_,end:{line:I,character:Math.min(k,Math.abs(m))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let s={start:(o=e==null?void 0:e.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,i);if(!a)return[];let l=a.characters,u=a.lines,c=a.tabs,f=i.indentation;i.indentation+=c!=null?c:0;let d=[];return l!==void 0?d.push(this.createSpaceTextEdit(s,l,n.options)):u!==void 0?d.push(this.createLineTextEdit(s,u,i,n.options)):c!==void 0&&d.push(this.createTabTextEdit(s,!!e,i)),vn(r)&&(i.indentation=f),d}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new ln(i,o=>this.iterateCst(o,r)):Mi}iterateCst(e,r){if(!yr(e))return Mi;let n=r.indentation;return new vr(()=>({index:0}),i=>i.index<e.content.length?{done:!1,value:e.content[i.index++]}:(r.indentation=n,ir))}},P_=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new In(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new In(r,this.collector)}property(e,r){let n=Bi(this.astNode.$cstNode,e,r);return new In(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=$s(this.astNode.$cstNode,n);r.push(...i)}return new In(r,this.collector)}keyword(e,r){let n=Ms(this.astNode.$cstNode,e,r);return new In(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=ff(this.astNode.$cstNode,n);r.push(...i)}return new In(r,this.collector)}cst(e){return new In([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new In([],this.collector);let o=n[0],s=i[0];if(o.offset>s.offset){let a=o;o=s,s=a}return new In(Ug(o,s),this.collector)}},In=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},rC;(function(t){function e(...c){return{options:{},moves:c.flatMap(f=>f.moves).sort(u)}}t.fit=e;function r(c){return i(0,c)}t.noSpace=r;function n(c){return i(1,c)}t.oneSpace=n;function i(c,f){return{options:f!=null?f:{},moves:[{characters:c}]}}t.spaces=i;function o(c){return s(1,c)}t.newLine=o;function s(c,f){return{options:f!=null?f:{},moves:[{lines:c}]}}t.newLines=s;function a(c){return{options:c!=null?c:{},moves:[{tabs:1,lines:1}]}}t.indent=a;function l(c){return{options:c!=null?c:{},moves:[{tabs:0}]}}t.noIndent=l;function u(c,f){var d,m,v,N,E,I;let _=(d=c.lines)!==null&&d!==void 0?d:0,T=(m=f.lines)!==null&&m!==void 0?m:0,k=(v=c.tabs)!==null&&v!==void 0?v:0,M=(N=f.tabs)!==null&&N!==void 0?N:0,Q=(E=c.characters)!==null&&E!==void 0?E:0,ae=(I=f.characters)!==null&&I!==void 0?I:0;return _<T?-1:_>T?1:k<M?-1:k>M?1:Q<ae?-1:Q>ae?1:0}})(rC||(rC={}));var jV=Ht(wr(),1);var $_=Ht(require("fs"),1),M_=class{constructor(){this.encoding="utf-8"}readFile(e){return $_.promises.readFile(e.fsPath,this.encoding)}async readDirectory(e){return(await $_.promises.readdir(e.fsPath,{withFileTypes:!0})).map(n=>({dirent:n,isFile:n.isFile(),isDirectory:n.isDirectory(),uri:Pt.joinPath(e,n.name)}))}},nC={fileSystemProvider:()=>new M_};var Wa=Ht(oC(),1);var Zse=Symbol("LdLSPServices");var Ve={};Ni(Ve,{AbstractAstReflection:()=>_o,AbstractCstNode:()=>Kl,AbstractLangiumParser:()=>zl,AbstractParserErrorMessageProvider:()=>wd,AbstractThreadedAsyncParser:()=>Kd,AstUtils:()=>un,BiMap:()=>qo,Cancellation:()=>te,CompositeCstNodeImpl:()=>Wo,ContextCache:()=>Ko,CstNodeBuilder:()=>Hl,CstUtils:()=>Fi,DONE_RESULT:()=>ir,DatatypeSymbol:()=>Ld,DefaultAstNodeDescriptionProvider:()=>su,DefaultAstNodeLocator:()=>lu,DefaultAsyncParser:()=>_u,DefaultCommentProvider:()=>Tu,DefaultConfigurationProvider:()=>uu,DefaultDocumentBuilder:()=>cu,DefaultDocumentValidator:()=>ou,DefaultHydrator:()=>vu,DefaultIndexManager:()=>fu,DefaultJsonSerializer:()=>Yo,DefaultLangiumDocumentFactory:()=>Zl,DefaultLangiumDocuments:()=>eu,DefaultLexer:()=>pu,DefaultLinker:()=>Go,DefaultNameProvider:()=>tu,DefaultReferenceDescriptionProvider:()=>au,DefaultReferences:()=>jo,DefaultScopeComputation:()=>Ho,DefaultScopeProvider:()=>zo,DefaultServiceRegistry:()=>Xo,DefaultTokenBuilder:()=>Jl,DefaultValueConverter:()=>Ql,DefaultWorkspaceLock:()=>yu,DefaultWorkspaceManager:()=>du,Deferred:()=>Er,Disposable:()=>Jo,DisposableCache:()=>Pa,DocumentCache:()=>Vd,DocumentState:()=>oe,DocumentValidator:()=>hi,EMPTY_SCOPE:()=>eV,EMPTY_STREAM:()=>Mi,EmptyFileSystem:()=>F_,EmptyFileSystemProvider:()=>cp,ErrorWithLocation:()=>No,GrammarAST:()=>at,GrammarUtils:()=>St,JSDocDocumentationProvider:()=>gu,LangiumCompletionParser:()=>Xl,LangiumParser:()=>Yl,LangiumParserErrorMessageProvider:()=>ka,LeafCstNodeImpl:()=>Bo,MapScope:()=>ru,Module:()=>Fa,MultiMap:()=>dn,OperationCancelled:()=>Kn,ParserWorker:()=>zd,Reduction:()=>ks,RegExpUtils:()=>cf,RootCstNodeImpl:()=>ba,SimpleCache:()=>nu,StreamImpl:()=>vr,StreamScope:()=>jr,TextDocument:()=>so,TreeStreamImpl:()=>ln,URI:()=>qe,UriUtils:()=>Pt,ValidationCategory:()=>Ma,ValidationRegistry:()=>iu,ValueConverter:()=>Hn,WorkspaceCache:()=>$a,assertUnreachable:()=>Ui,createCompletionParser:()=>f_,createDefaultCoreModule:()=>Ru,createDefaultSharedCoreModule:()=>xu,createGrammarConfig:()=>sT,createLangiumParser:()=>d_,delayNextTick:()=>x_,diagnosticData:()=>Gd,eagerLoad:()=>Nu,getDiagnosticRange:()=>kD,inject:()=>Qo,interruptAndCheck:()=>xt,isAstNode:()=>Be,isAstNodeDescription:()=>il,isAstNodeWithComment:()=>O_,isCompositeCstNode:()=>yr,isIMultiModeLexerDefinition:()=>E_,isJSDoc:()=>C_,isLeafCstNode:()=>vn,isLinkingError:()=>yn,isNamed:()=>Wd,isOperationCancelled:()=>zn,isReference:()=>Tt,isRootCstNode:()=>ol,isTokenTypeArray:()=>LD,isTokenTypeDictionary:()=>I_,loadGrammarFromJson:()=>fp,parseJSDoc:()=>D_,prepareLangiumParser:()=>vD,setInterruptionPeriod:()=>AD,startCancelableOperation:()=>SD,stream:()=>me,toDiagnosticSeverity:()=>jd});var we={};Ni(we,{AstUtils:()=>un,BiMap:()=>qo,Cancellation:()=>te,ContextCache:()=>Ko,CstUtils:()=>Fi,DONE_RESULT:()=>ir,Deferred:()=>Er,Disposable:()=>Jo,DisposableCache:()=>Pa,DocumentCache:()=>Vd,EMPTY_STREAM:()=>Mi,ErrorWithLocation:()=>No,GrammarUtils:()=>St,MultiMap:()=>dn,OperationCancelled:()=>Kn,Reduction:()=>ks,RegExpUtils:()=>cf,SimpleCache:()=>nu,StreamImpl:()=>vr,TreeStreamImpl:()=>ln,URI:()=>qe,UriUtils:()=>Pt,WorkspaceCache:()=>$a,assertUnreachable:()=>Ui,delayNextTick:()=>x_,interruptAndCheck:()=>xt,isOperationCancelled:()=>zn,loadGrammarFromJson:()=>fp,setInterruptionPeriod:()=>AD,startCancelableOperation:()=>SD,stream:()=>me});De(we,Ct);var cp=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},F_={fileSystemProvider:()=>new cp};var qV={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},HV={AstReflection:()=>new Ds};function KV(){let t=Qo(xu(F_),HV),e=Qo(Ru({shared:t}),qV);return t.ServiceRegistry.register(e),e}function fp(t){var e;let r=KV(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,qe.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}De(Ve,we);var qr=Ht(gt(),1);var U_="ComposeElement";var dp="NamedElement";function sC(t){return Nt.isInstance(t,dp)}var zV="Statement";var YV="Subscript_list";var B_="Universe";var aC="Alias";function pp(t){return Nt.isInstance(t,aC)}var XV="Arr_string";function Ba(t){return Nt.isInstance(t,XV)}var JV="AssignPrefix";function lC(t){return Nt.isInstance(t,JV)}var W_="Expression";function Ti(t){return Nt.isInstance(t,W_)}var QV="For_statement";function uC(t){return Nt.isInstance(t,QV)}var ZV="Function_invoke_or_assign";function cC(t){return Nt.isInstance(t,ZV)}var eG="Function_invoke_or_assign_statement";var fC="FunctionBlock";function _i(t){return Nt.isInstance(t,fC)}var tG="Interface";var rG="Invoke_subrule";function dC(t){return Nt.isInstance(t,rG)}var nG="Iteration_statement";var iG="Methods";function pC(t){return Nt.isInstance(t,iG)}var mC="Native_Type_Name";function Su(t){return Nt.isInstance(t,mC)}var oG="RefFunctionOrBlockName";function hC(t){return Nt.isInstance(t,oG)}var sG="Repeat_statement";function gC(t){return Nt.isInstance(t,sG)}var aG="ReturnParse";function TC(t){return Nt.isInstance(t,aG)}var lG="Selection_statement";var _C="StFunction";function Yn(t){return Nt.isInstance(t,_C)}var yC="Struct_Var_Decl_Init";function Au(t){return Nt.isInstance(t,yC)}var vC="StructsList";function es(t){return Nt.isInstance(t,vC)}var RC="VarDeclarationInit";function ar(t){return Nt.isInstance(t,RC)}var uG="While_statement";function xC(t){return Nt.isInstance(t,uG)}var NC="Constant";function mp(t){return Nt.isInstance(t,NC)}var OC="FunctionExpression";function V_(t){return Nt.isInstance(t,OC)}var IC="MemberCall";function En(t){return Nt.isInstance(t,IC)}var EC="VariableExpression";function Zr(t){return Nt.isInstance(t,EC)}var cG="Array_liters";var Eu=class extends _o{getAllTypes(){return["Action_call_statement","Alias","Arr_string","Array_element","Array_liters","AssignPrefix","Assignment_subrule","Case_element","Case_list","Case_list_element","Case_statement","ComposeElement","Constant","Enum","Expression","For_list","For_statement","FunctionBlock","FunctionExpression","Function_invoke_or_assign","Function_invoke_or_assign_statement","If_statement","InputsList","InputsListSingle","Interface","Invoke_subrule","Iteration_statement","MemberCall","Methods","NamedElement","Native_Type_Name","Param_assignment","PrimaryVariable","Program","RefFunctionOrBlockName","Repeat_statement","ReqParams","ReturnParse","Selection_statement","St","StEnum","StFunction","Statement","Statement_list","Statement_list_single","Struct_Var_Decl_Init","StructsList","Subscript_list","UnionsList","Universe","VarDeclarationInit","VarInput","VarLocal","VarOutput","VariableExpression","While_statement"]}computeIsSubtype(e,r){switch(e){case aC:case fC:case vC:return this.isSubtype(U_,r);case cG:return this.isSubtype(mC,r);case NC:case OC:case IC:case EC:return this.isSubtype(W_,r);case W_:return this.isSubtype(YV,r);case eG:case nG:case lG:return this.isSubtype(zV,r);case dp:return this.isSubtype(B_,r);case _C:return this.isSubtype(U_,r)||this.isSubtype(B_,r);case yC:case RC:return this.isSubtype(dp,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action_call_statement:actionName":case"AssignPrefix:varEnchanceDecl":case"RefFunctionOrBlockName:refFunctionName":return B_;case"Array_liters:Identifier":case"Native_Type_Name:Identifier":return U_;case"For_statement:controlVariable":case"MemberCall:element":case"VariableExpression:variable":return dp;case"Interface:extender":return tG;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Action_call_statement":return{name:"Action_call_statement",properties:[{name:"actionName"}]};case"Alias":return{name:"Alias",properties:[{name:"initialValue"},{name:"name"},{name:"refName"}]};case"Arr_string":return{name:"Arr_string",properties:[{name:"arrElements",defaultValue:[]}]};case"Array_element":return{name:"Array_element",properties:[{name:"left"},{name:"right"}]};case"Assignment_subrule":return{name:"Assignment_subrule",properties:[{name:"expression"}]};case"AssignPrefix":return{name:"AssignPrefix",properties:[{name:"varEnchanceDecl"}]};case"Case_element":return{name:"Case_element",properties:[{name:"caseList"},{name:"statements"}]};case"Case_list":return{name:"Case_list",properties:[{name:"caseListElement",defaultValue:[]}]};case"Case_list_element":return{name:"Case_list_element",properties:[{name:"enumCase"},{name:"numCaseStart"},{name:"numericCaseEnd"}]};case"Case_statement":return{name:"Case_statement",properties:[{name:"caseElements",defaultValue:[]},{name:"caseExpression"},{name:"elseStatements"}]};case"Enum":return{name:"Enum",properties:[{name:"assignValue"},{name:"variable_name"}]};case"Expression":return{name:"Expression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"For_list":return{name:"For_list",properties:[{name:"byExpr"},{name:"forExpr"},{name:"toExpr"}]};case"For_statement":return{name:"For_statement",properties:[{name:"controlVariable"},{name:"forList"},{name:"statementList"}]};case"Function_invoke_or_assign":return{name:"Function_invoke_or_assign",properties:[{name:"assign"},{name:"assignPrefix"},{name:"id"},{name:"params",defaultValue:[]}]};case"Function_invoke_or_assign_statement":return{name:"Function_invoke_or_assign_statement",properties:[{name:"statement"}]};case"FunctionBlock":return{name:"FunctionBlock",properties:[{name:"methods",defaultValue:[]},{name:"name"},{name:"statementList",defaultValue:[]},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"If_statement":return{name:"If_statement",properties:[{name:"elseStatement"},{name:"elsifConditions",defaultValue:[]},{name:"elsifStatements"},{name:"ifCondition"},{name:"ifStatement"}]};case"InputsList":return{name:"InputsList",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"InputsListSingle":return{name:"InputsListSingle",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"Interface":return{name:"Interface",properties:[{name:"extender"},{name:"methods",defaultValue:[]},{name:"name"}]};case"Invoke_subrule":return{name:"Invoke_subrule",properties:[{name:"parameters",defaultValue:[]}]};case"Iteration_statement":return{name:"Iteration_statement",properties:[{name:"statement"}]};case"Methods":return{name:"Methods",properties:[{name:"inputs",defaultValue:[]},{name:"modifier"},{name:"name"},{name:"reqParams",defaultValue:[]},{name:"statementList"},{name:"variable_type"}]};case"Native_Type_Name":return{name:"Native_Type_Name",properties:[{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};case"Param_assignment":return{name:"Param_assignment",properties:[{name:"InputOrOutputSign"},{name:"ParamName"},{name:"ParamValue"}]};case"PrimaryVariable":return{name:"PrimaryVariable",properties:[{name:"name"}]};case"Program":return{name:"Program",properties:[{name:"inputs",defaultValue:[]},{name:"name"},{name:"stStatements"}]};case"RefFunctionOrBlockName":return{name:"RefFunctionOrBlockName",properties:[{name:"Cache_type_name"},{name:"refFunctionName"}]};case"Repeat_statement":return{name:"Repeat_statement",properties:[{name:"statementList"},{name:"untilExpr"}]};case"ReqParams":return{name:"ReqParams",properties:[{name:"param"},{name:"typeName"}]};case"ReturnParse":return{name:"ReturnParse",properties:[{name:"returnSign"},{name:"returnValue"}]};case"Selection_statement":return{name:"Selection_statement",properties:[{name:"case"},{name:"if"}]};case"St":return{name:"St",properties:[{name:"function_block",defaultValue:[]},{name:"itface",defaultValue:[]},{name:"program",defaultValue:[]},{name:"st_function",defaultValue:[]},{name:"types_alias",defaultValue:[]},{name:"types_enum",defaultValue:[]},{name:"types_struct",defaultValue:[]},{name:"types_union",defaultValue:[]}]};case"Statement_list":return{name:"Statement_list",properties:[{name:"statements",defaultValue:[]}]};case"Statement_list_single":return{name:"Statement_list_single",properties:[{name:"statements"}]};case"StEnum":return{name:"StEnum",properties:[{name:"enum",defaultValue:[]},{name:"name"}]};case"StFunction":return{name:"StFunction",properties:[{name:"name"},{name:"statementList",defaultValue:[]},{name:"variable_type"},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"Struct_Var_Decl_Init":return{name:"Struct_Var_Decl_Init",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"StructsList":return{name:"StructsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"UnionsList":return{name:"UnionsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"VarDeclarationInit":return{name:"VarDeclarationInit",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"VarInput":return{name:"VarInput",properties:[{name:"items",defaultValue:[]}]};case"VarLocal":return{name:"VarLocal",properties:[{name:"items",defaultValue:[]}]};case"VarOutput":return{name:"VarOutput",properties:[{name:"items",defaultValue:[]}]};case"While_statement":return{name:"While_statement",properties:[{name:"statementList"},{name:"whileExpr"}]};case"Constant":return{name:"Constant",properties:[{name:"constant"},{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"FunctionExpression":return{name:"FunctionExpression",properties:[{name:"left"},{name:"operator"},{name:"params"},{name:"prefixValidateElement"},{name:"prior"},{name:"refFunctionName"},{name:"right"},{name:"suffixValidateElement"},{name:"value"}]};case"MemberCall":return{name:"MemberCall",properties:[{name:"arguments",defaultValue:[]},{name:"element"},{name:"explicitOperationCall",defaultValue:!1},{name:"left"},{name:"operator"},{name:"previous"},{name:"prior"},{name:"right"},{name:"value"}]};case"VariableExpression":return{name:"VariableExpression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"},{name:"variable"}]};case"Array_liters":return{name:"Array_liters",properties:[{name:"arrayElemets",defaultValue:[]},{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"dataType"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};default:return{name:e,properties:[]}}}},Nt=new Eu;var SC=Ht(require("fs"),1);var G_=new Map,j_=new Map,q_=new Map,Sn=qe.parse("memory://cache.st");function AC(t){if(j_.get(Sn)){let e=j_.get(Sn);if(e){let r=ts(e);for(let n=0;n<r.length;n++){let s=r[n].elements.find(a=>a.elementName.toLowerCase()===t.toLowerCase());if(s){let a=s.elementType,l;if(a==="functionBlock"||a==="function"||a==="struct"||a==="alias")return l=s,l}}}}else{let e=__dirname,r=DC(`${e}\\data.json`),i=JSON.parse(r);j_.set(Sn,i);let o=ts(i);for(let s=0;s<o.length;s++){let u=o[s].elements.find(c=>c.elementName.toLowerCase()===t.toLowerCase());if(u){let c=u.elementType,f;if(c==="functionBlock"||c==="function"||c==="struct"||c==="alias")return f=u,f}}}}function ft(t){if(G_.get(Sn)&&q_.get(Sn)){let e=G_.get(Sn),r=q_.get(Sn);if(e){let n=ts(e);for(let i=0;i<n.length;i++){let a=n[i].elements.find(l=>l.elementName.toLowerCase()===t.toLowerCase());if(a){let l=a.elementType,u;if(l==="functionBlock"||l==="function"||l==="struct"||l==="alias")return u=a,[u,r]}}}}else{let e=__dirname,r=DC(`${e}\\data.json`),i=H_.serializer.JsonSerializer.deserialize(r),o=hp.workspace.LangiumDocumentFactory.fromModel(i,qe.parse("memory://cache.st")),a=JSON.parse(r);G_.set(Sn,a),q_.set(Sn,o);let l=ts(a);for(let u=0;u<l.length;u++){let d=l[u].elements.find(m=>m.elementName.toLowerCase()===t.toLowerCase());if(d){let m=d.elementType,v;if(m==="functionBlock"||m==="function"||m==="struct"||m==="alias")return v=d,[v,o]}}}}function DC(t){try{return SC.default.readFileSync(t,"utf8")}catch(e){return console.error(e),""}}var gp=t=>/^-?[1-9]\d*$/.test(t)||/^0$/.test(t),fG=t=>/^[a-z]+$/.test(t),dG=t=>{let e=ft(t);if(!e)return!0;let[r]=e;return r?r.elementName===r.elementName.toUpperCase():!0},CC=/^T#(\d+y)?(\d+m)?(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i,bC=/DATE#\d{4}-\d{2}-\d{2}/,kC=/DT#\d{4}-\d{2}-\d{2}-\d{2}:\d{2}:\d{2}/,LC=/TOD#\d{2}:\d{2}:\d{2}\.\d{3}/,pG=["SINT","INT","DINT","LINT","USINT","UINT","UDINT","ULINT","BYTE","WORD","DWORD","LWORD","TIME","DATE","LREAL","REAL","BOOL","STRING"],Tp=["RTC","INTEGRAL","DERIVATIVE","PID","RAMP","HYSTERESIS","SR","RS","SEMA","R_TRIG","F_TRIG","CTU","CTU_DINT","CTU_LINT","CTU_UDINT","CTU_ULINT","CTD","CTD_DINT","CTD_LINT","CTD_UDINT","CTD_ULINT","CTUD","CTUD_DINT","CTUD_LINT","CTUD_UDINT","CTUD_ULINT","TP","TON","TOF","MC_POWER","MC_READACTUALPOSITION","MC_MOVEABSOLUTE","MC_MOVERELATIVE","MC_MOVEADDITIVE","MC_MOVESUPERIMPOSED","MC_MOVEVELOCITY","MC_POSITIONPROFILE","MC_VELOCITYPROFILE","MC_READACTUALVELOCITY","MC_ACCELERATIONPROFILE","MC_SETPOSITION","MC_READPARAMETER","MC_READBOOLPARAMETER","MC_WRITEPARAMETER","MC_WRITEBOOLPARAMETER","MC_READACTUALTORQUE","MC_READSTATUS","MC_READAXISERROR","MC_RESET","MC_DIGITALCAMSWITCH","MC_TOUCHPROBE","MC_ABORTTRIGGER","MC_STOP","MC_HALT","MC_HOME","MC_CAMTABLESELECT","MC_CAMIN","MC_CAMOUT","MC_GEARIN","MC_GEAROUT","MC_GEARINPOS","MC_PHASING","SMC_TRACKAXIS","SMC_TRACKSETVALUES","MC_STARTTRACE","SMC_MOVECONTINUOUSABSOLUTE","SMC_MOVECONTINUOUSRELATIVE","SMC_GETTAPPETVALUE"],mG=["BOOL_TO_SINT","BOOL_TO_INT","BOOL_TO_DINT","BOOL_TO_LINT","BOOL_TO_USINT","BOOL_TO_UINT","BOOL_TO_UDINT","BOOL_TO_ULINT","BOOL_TO_REAL","BOOL_TO_LREAL","BOOL_TO_TIME","BOOL_TO_DATE","BOOL_TO_TOD","BOOL_TO_DT","BOOL_TO_STRING","BOOL_TO_BYTE","BOOL_TO_WORD","BOOL_TO_DWORD","BOOL_TO_LWORD","SINT_TO_BOOL","SINT_TO_INT","SINT_TO_DINT","SINT_TO_LINT","SINT_TO_USINT","SINT_TO_UINT","SINT_TO_UDINT","SINT_TO_ULINT","SINT_TO_REAL","SINT_TO_LREAL","SINT_TO_TIME","SINT_TO_DATE","SINT_TO_TOD","SINT_TO_DT","SINT_TO_STRING","SINT_TO_BYTE","SINT_TO_WORD","SINT_TO_DWORD","SINT_TO_LWORD","INT_TO_BOOL","INT_TO_SINT","INT_TO_DINT","INT_TO_LINT","INT_TO_USINT","INT_TO_UINT","INT_TO_UDINT","INT_TO_ULINT","INT_TO_REAL","INT_TO_LREAL","INT_TO_TIME","INT_TO_DATE","INT_TO_TOD","INT_TO_DT","INT_TO_STRING","INT_TO_BYTE","INT_TO_WORD","INT_TO_DWORD","INT_TO_LWORD","DINT_TO_BOOL","DINT_TO_SINT","DINT_TO_INT","DINT_TO_LINT","DINT_TO_USINT","DINT_TO_UINT","DINT_TO_UDINT","DINT_TO_ULINT","DINT_TO_REAL","DINT_TO_LREAL","DINT_TO_TIME","DINT_TO_DATE","DINT_TO_TOD","DINT_TO_DT","DINT_TO_STRING","DINT_TO_BYTE","DINT_TO_WORD","DINT_TO_DWORD","DINT_TO_LWORD","LINT_TO_BOOL","LINT_TO_SINT","LINT_TO_INT","LINT_TO_DINT","LINT_TO_USINT","LINT_TO_UINT","LINT_TO_UDINT","LINT_TO_ULINT","LINT_TO_REAL","LINT_TO_LREAL","LINT_TO_TIME","LINT_TO_DATE","LINT_TO_TOD","LINT_TO_DT","LINT_TO_STRING","LINT_TO_BYTE","LINT_TO_WORD","LINT_TO_DWORD","LINT_TO_LWORD","USINT_TO_BOOL","USINT_TO_SINT","USINT_TO_INT","USINT_TO_DINT","USINT_TO_LINT","USINT_TO_UINT","USINT_TO_UDINT","USINT_TO_ULINT","USINT_TO_REAL","USINT_TO_LREAL","USINT_TO_TIME","USINT_TO_DATE","USINT_TO_TOD","USINT_TO_DT","USINT_TO_STRING","USINT_TO_BYTE","USINT_TO_WORD","USINT_TO_DWORD","USINT_TO_LWORD","UINT_TO_BOOL","UINT_TO_SINT","UINT_TO_INT","UINT_TO_DINT","UINT_TO_LINT","UINT_TO_USINT","UINT_TO_UDINT","UINT_TO_ULINT","UINT_TO_REAL","UINT_TO_LREAL","UINT_TO_TIME","UINT_TO_DATE","UINT_TO_TOD","UINT_TO_DT","UINT_TO_STRING","UINT_TO_BYTE","UINT_TO_WORD","UINT_TO_DWORD","UINT_TO_LWORD","UDINT_TO_BOOL","UDINT_TO_SINT","UDINT_TO_INT","UDINT_TO_DINT","UDINT_TO_LINT","UDINT_TO_USINT","UDINT_TO_UINT","UDINT_TO_ULINT","UDINT_TO_REAL","UDINT_TO_LREAL","UDINT_TO_TIME","UDINT_TO_DATE","UDINT_TO_TOD","UDINT_TO_DT","UDINT_TO_STRING","UDINT_TO_BYTE","UDINT_TO_WORD","UDINT_TO_DWORD","UDINT_TO_LWORD","ULINT_TO_BOOL","ULINT_TO_SINT","ULINT_TO_INT","ULINT_TO_DINT","ULINT_TO_LINT","ULINT_TO_USINT","ULINT_TO_UINT","ULINT_TO_UDINT","ULINT_TO_REAL","ULINT_TO_LREAL","ULINT_TO_TIME","ULINT_TO_DATE","ULINT_TO_TOD","ULINT_TO_DT","ULINT_TO_STRING","ULINT_TO_BYTE","ULINT_TO_WORD","ULINT_TO_DWORD","ULINT_TO_LWORD","REAL_TO_BOOL","REAL_TO_SINT","REAL_TO_INT","REAL_TO_DINT","REAL_TO_LINT","REAL_TO_USINT","REAL_TO_UINT","REAL_TO_UDINT","REAL_TO_ULINT","REAL_TO_LREAL","REAL_TO_TIME","REAL_TO_DATE","REAL_TO_TOD","REAL_TO_DT","REAL_TO_STRING","REAL_TO_BYTE","REAL_TO_WORD","REAL_TO_DWORD","REAL_TO_LWORD","LREAL_TO_BOOL","LREAL_TO_SINT","LREAL_TO_INT","LREAL_TO_DINT","LREAL_TO_LINT","LREAL_TO_USINT","LREAL_TO_UINT","LREAL_TO_UDINT","LREAL_TO_ULINT","LREAL_TO_REAL","LREAL_TO_TIME","LREAL_TO_DATE","LREAL_TO_TOD","LREAL_TO_DT","LREAL_TO_STRING","LREAL_TO_BYTE","LREAL_TO_WORD","LREAL_TO_DWORD","LREAL_TO_LWORD","TIME_TO_SINT","TIME_TO_INT","TIME_TO_DINT","TIME_TO_LINT","TIME_TO_USINT","TIME_TO_UINT","TIME_TO_UDINT","TIME_TO_ULINT","TIME_TO_REAL","TIME_TO_LREAL","TIME_TO_STRING","TIME_TO_BYTE","TIME_TO_WORD","TIME_TO_DWORD","TIME_TO_LWORD","DATE_TO_SINT","DATE_TO_INT","DATE_TO_DINT","DATE_TO_LINT","DATE_TO_USINT","DATE_TO_UINT","DATE_TO_UDINT","DATE_TO_ULINT","DATE_TO_REAL","DATE_TO_LREAL","DATE_TO_STRING","DATE_TO_BYTE","DATE_TO_WORD","DATE_TO_DWORD","DATE_TO_LWORD","TOD_TO_SINT","TOD_TO_INT","TOD_TO_DINT","TOD_TO_LINT","TOD_TO_USINT","TOD_TO_UINT","TOD_TO_UDINT","TOD_TO_ULINT","TOD_TO_REAL","TOD_TO_LREAL","TOD_TO_STRING","TOD_TO_BYTE","TOD_TO_WORD","TOD_TO_DWORD","TOD_TO_LWORD","DT_TO_SINT","DT_TO_INT","DT_TO_DINT","DT_TO_LINT","DT_TO_USINT","DT_TO_UINT","DT_TO_UDINT","DT_TO_ULINT","DT_TO_REAL","DT_TO_LREAL","DT_TO_STRING","DT_TO_BYTE","DT_TO_WORD","DT_TO_DWORD","DT_TO_LWORD","STRING_TO_BOOL","STRING_TO_SINT","STRING_TO_INT","STRING_TO_DINT","STRING_TO_LINT","STRING_TO_USINT","STRING_TO_UINT","STRING_TO_UDINT","STRING_TO_ULINT","STRING_TO_REAL","STRING_TO_LREAL","STRING_TO_TIME","STRING_TO_DATE","STRING_TO_TOD","STRING_TO_DT","STRING_TO_BYTE","STRING_TO_WORD","STRING_TO_DWORD","STRING_TO_LWORD","BYTE_TO_BOOL","BYTE_TO_SINT","BYTE_TO_INT","BYTE_TO_DINT","BYTE_TO_LINT","BYTE_TO_USINT","BYTE_TO_UINT","BYTE_TO_UDINT","BYTE_TO_ULINT","BYTE_TO_REAL","BYTE_TO_LREAL","BYTE_TO_TIME","BYTE_TO_DATE","BYTE_TO_TOD","BYTE_TO_DT","BYTE_TO_STRING","BYTE_TO_WORD","BYTE_TO_DWORD","BYTE_TO_LWORD","WORD_TO_BOOL","WORD_TO_SINT","WORD_TO_INT","WORD_TO_DINT","WORD_TO_LINT","WORD_TO_USINT","WORD_TO_UINT","WORD_TO_UDINT","WORD_TO_ULINT","WORD_TO_REAL","WORD_TO_LREAL","WORD_TO_TIME","WORD_TO_DATE","WORD_TO_TOD","WORD_TO_DT","WORD_TO_STRING","WORD_TO_BYTE","WORD_TO_DWORD","WORD_TO_LWORD","DWORD_TO_BOOL","DWORD_TO_SINT","DWORD_TO_INT","DWORD_TO_DINT","DWORD_TO_LINT","DWORD_TO_USINT","DWORD_TO_UINT","DWORD_TO_UDINT","DWORD_TO_ULINT","DWORD_TO_REAL","DWORD_TO_LREAL","DWORD_TO_TIME","DWORD_TO_DATE","DWORD_TO_TOD","DWORD_TO_DT","DWORD_TO_STRING","DWORD_TO_BYTE","DWORD_TO_WORD","DWORD_TO_LWORD","LWORD_TO_BOOL","LWORD_TO_SINT","LWORD_TO_INT","LWORD_TO_DINT","LWORD_TO_LINT","LWORD_TO_USINT","LWORD_TO_UINT","LWORD_TO_UDINT","LWORD_TO_ULINT","LWORD_TO_REAL","LWORD_TO_LREAL","LWORD_TO_TIME","LWORD_TO_DATE","LWORD_TO_TOD","LWORD_TO_DT","LWORD_TO_STRING","LWORD_TO_BYTE","LWORD_TO_WORD","LWORD_TO_DWORD","TRUNC","BCD_TO_USINT","BCD_TO_UINT","BCD_TO_UDINT","BCD_TO_ULINT","USINT_TO_BCD","UINT_TO_BCD","UDINT_TO_BCD","ULINT_TO_BCD","DATE_AND_TIME_TO_TIME_OF_DAY","DATE_AND_TIME_TO_DATE"],wC=["ABS","SQRT","LN","LOG","EXP","SIN","COS","TAN","ASIN","ACOS","ATAN"],PC=["ADD","MUL","SUB","DIV","MOD","EXPT","MOVE"],hG=["ADD_TIME","ADD_TOD_TIME","ADD_DT_TIME","MULTIME","SUB_TIME","SUB_DATE_DATE","SUB_TOD_TIME","SUB_TOD_TOD","SUB_DT_TIME","SUB_DT_DT","DIVTIME"],$C=["SHL","SHR","ROR","ROL"],MC=["AND","OR","XOR","NOT"],FC=["SEL","MAX","MIN","LIMIT","MUX"],UC=["GT","GE","EQ","LT","LE","NE"],BC=["LEN","LEFT","RIGHT","MID","CONCAT","CONCAT_DATE_TOD","INSERT","DELETE","REPLACE","FIND"],gG=["SMC_READAXISINFO","SMC_GETTIMENS","SMC_PARAMETERNUMBER_COE"],TG=["AXIS_REF","MC_CAM_REF"],WC=pG.concat(Tp).concat(TG),Du=mG.concat(wC).concat(PC).concat(hG).concat($C).concat(MC).concat(FC).concat(UC).concat(BC).concat(gG),_G=WC.concat(Du),_p=Tp.concat(Du),VC=wC.concat(PC).concat($C).concat(MC).concat(FC).concat(UC).concat(BC.filter(t=>t!=="CONCAT_DATE_TOD"));function GC(t){let e=new RegExp("^"+t,"i");return Du.filter(r=>e.test(r))}function jC(t){let e=new RegExp("^"+t,"i");return _G.filter(r=>e.test(r))}function qC(t){let e=new RegExp("^"+t,"i");return _p.filter(r=>e.test(r))}function Y_(t){let e;return t==="TIME"?e=CC:t==="DATE"?e=bC:t==="DATE_AND_TIME"?e=kC:t==="TIME_OF_DAY"&&(e=LC),e.exec(t)?"":`Invalid ${t} format`}function Sr(t,e){return e&&(t=e.Real_type_name||e.Bit_string_type_name||e.Integer_type_name||e.Unsigned_integer_type_name||e.Bool_type_name||e.String_type_name||e.Date_type_name||e.Time_type_name||e.Date_And_time_type_name||e.Time_Of_Day_type_name||e.Cache_type_name),t}var HC=["SINT","INT","DINT","LINT"],KC=["USINT","UINT","UDINT","ULINT"],zC=["BYTE","WORD","DWORD","LWORD"],YC=["REAL","LREAL"];function K_(t){let e={$type:"Native_Type_Name"},r=t.toUpperCase();return YC.includes(r)?e.Real_type_name=r:zC.includes(r)?e.Bit_string_type_name=r:HC.includes(r)?e.Integer_type_name=r:KC.includes(r)?e.Unsigned_integer_type_name=r:r==="BOOL"?e.Bool_type_name=r:r==="STRING"?e.String_type_name=r:r==="DATE"?e.Date_type_name=r:r==="TIME"?e.Time_type_name=r:r==="DATE_AND_TIME"?e.Date_And_time_type_name=r:r==="TIME_OF_DAY"?e.Time_Of_Day_type_name=r:e.Cache_type_name=t,e}function yG(t,e){if(e===void 0)return;let r;return typeof e=="boolean"?r=e?"TRUE":"FALSE":r=e,{$container:t,$type:"Constant",constant:r}}function z_(t,e=new Set){var l,u;if(!t)return{};let r=t.toUpperCase();if(HC.includes(r)||KC.includes(r)||zC.includes(r)||YC.includes(r)||r==="BOOL"||r==="STRING"||r==="DATE"||r==="TIME"||r==="DATE_AND_TIME"||r==="TIME_OF_DAY")return{typeName:r};let n=ft(t);if(!n)return{typeName:t};let[i]=n;if(!i||i.elementType!=="alias")return{typeName:t};let o=i,s=o.elementName.toUpperCase();if(e.has(s))return{typeName:o.elementName,refNode:o};e.add(s);let a=z_(o.refName,e);return{typeName:(l=a.typeName)!=null?l:o.elementName,refNode:(u=a.refNode)!=null?u:o}}function yp(t,e=new Set){var o;if(!t)return{};let r=Sr(void 0,t);if(r)return t.Cache_type_name?z_(t.Cache_type_name,e):{typeName:r};let n=t.Identifier;if(!n)return{};let i=n.ref;if(!i)return z_(n.$refText,e);if(pp(i)){if(e.has(i.name))return{typeName:i.name,refNode:i};e.add(i.name);let s=yp(i.refName,e);return{typeName:(o=s.typeName)!=null?o:i.name,refNode:s.refNode}}return"name"in i&&typeof i.name=="string"?{typeName:i.name,refNode:i}:{typeName:n.$refText}}function X_(t){return yp(t).typeName}function ao(t){return/^[-+]?[0-9]*\.[0-9]+([eE][-+]?[0-9]+)?$/.test(t)}function J_(t){return/^\d*\.?\d+$/.test(t)}function vG(t){let e=t.toUpperCase(),r=WC.find(n=>n===e);return r?[r,!0]:[null,!1]}function RG(t){return["SINT","USINT","INT","UINT","DINT","UDINT","LINT","WORD","DWORD","LWORD","BYTE","BOOL","ULINT"].includes(t)}function rs(t,e,r){if(!t||!e||(t=t.toUpperCase(),e=e.toUpperCase(),!RG(e)))return!0;if(t&&t.toLowerCase()==="bool")return r?r!==1&&r!==0:!1;if(e&&e.toLowerCase()==="bool"&&r&&r!==1&&r!==0)return!0;switch(t){case"SINT":return e==="BOOL";case"INT":return e==="SINT"||e==="BYTE";case"UINT":return e==="SINT"||e==="INT"||e==="BYTE";case"DINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="WORD"||e==="BYTE";case"UDINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="WORD"||e==="BYTE";case"LINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="WORD"||e==="DWORD"||e==="BYTE";case"BYTE":return!(e==="BYTE"||e==="USINT"||e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="ULINT");case"ULINT":return e==="SINT"||e==="USINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="WORD"||e==="DWORD"||e==="LWORD"||e==="BYTE";default:return!0}}function lo(t){let e="";return Ba(t),t.$type==="Constant"?e=t.constant.toString():e=t.toString(),e.toLowerCase()==="true"||e.toLowerCase()==="false"?["BOOL"]:CC.test(e)?["TIME"]:bC.test(e)?["DATE"]:kC.test(e)?["DATE_AND_TIME"]:LC.test(e)?["TIME_OF_DAY"]:/^-?\d+$/.test(e)?["INT","UINT","DINT","UDINT","LINT","SINT","USINT","BYTE","WORD","DWORD","LWORD"]:ao(e)?["REAL","LREAL"]:typeof e=="string"?["STRING"]:["UNKNOWN"]}function xG(t,e,r){var u;let n,i=Sr(t,e);t=(u=yp(e).typeName)!=null?u:i,e.Real_type_name?n="Real_type_name":e.Bit_string_type_name?n="Bit_string_type_name":e.Integer_type_name?n="Integer_type_name":e.Unsigned_integer_type_name?n="Unsigned_integer_type_name":e.Bool_type_name?n="Bool_type_name":e.String_type_name?n="String_type_name":e.Date_And_time_type_name?n="Date_And_time_type_name":e.Date_type_name?n="Date_type_name":e.Time_Of_Day_type_name?n="Time_Of_Day_type_name":e.Time_type_name?n="Time_type_name":e.Cache_type_name?n="Cache_type_name":n="String_type_name";let s=i!=null?i:t,[a,l]=vG(s);if(l)s!==a&&(fG(s)||(n!=="Cache_type_name"||!e.Cache_type_name||dG(e.Cache_type_name))&&r("hint",`did you mean '${a}'?`,{node:e,property:n}));else if(n==="Cache_type_name"){let c=e.Cache_type_name;if(c){let f=ft(c);if(f){let[d,m]=f;d&&d.elementType==="function"&&r("error",`${t}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:e,property:"Identifier"})}}}return t}function An(t,e,r){if(!t)return e;if(t.Identifier){let n=t.Identifier,i=yp(t),o=n.ref;if(i.typeName&&(e=i.typeName),o){let s=i.refNode;(Yn(o)||s&&Yn(s))&&r("error",`${e}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}else{let s=n.$nodeDescription;s&&s.type==="FunctionElement"&&r("error",`${n.$refText}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}}else r&&(e=xG(e,t,r));return e}function yi(t,e){let r=X_(t);return r?e=r:e=Sr(e,t),e}function XC(t){let e={$type:"St",function_block:[],itface:[],program:[],st_function:[],types_alias:[],types_enum:[],types_struct:[],types_union:[]};return t.forEach(r=>{r.elements.forEach(i=>{if(i.elementType==="alias"){let s=i,a={$container:e,$type:"Alias",name:s.elementName,refName:K_(s.refName)},l=yG(a,s.initialValue);l&&(a.initialValue=l),e.types_alias.push(a);return}let o=i.elementType;if(o==="struct"){i=i;let s=i.varDecls,a={$container:e,$type:"StructsList",items:[],name:""};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=K_(c),d={$container:a,$type:"Struct_Var_Decl_Init",nextVariables:[],typeName:f,variables:u};a.items.push(d)}),e.types_struct.push(a)}else if(o==="functionBlock"){i=i;let s=i.varDecls,a={$container:e,$type:"FunctionBlock",name:"",statementList:[],methods:[],varInputs:[],varLocals:[],varOutputs:[]};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=l.varGlobalType,d=K_(c);if(f){let m;if(f==="VAR_INPUT"){let v={$container:a,$type:"VarInput",items:[]};m={$container:v,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},v.items.push(m),a.varInputs.push(v)}else if(f==="VAR"){let v={$container:a,$type:"VarLocal",items:[]};m={$container:v,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},v.items.push(m),a.varLocals.push(v)}}}),e.function_block.push(a)}})}),e}function ts(t){let e=[];return t.forEach(r=>{let n=r.name,i=r.list;if(n==="Additional function blocks"||n==="Standard function blocks"||n==="SMC_Basic function blocks"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:l.name,varDecls:[],rootName:n,comment:l.comment,usage:l.usage};u.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(m)}),c.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(m)}),s.elements.push(f),a===o.length-1&&e.push(s)}}else if(n==="extra_library"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a];if(l.type==="struct"){let u={$type:"SingleElement",elementType:"struct",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};l.elements.forEach(c=>{let f={$type:"VarDeclaration",varName:c.name,varType:c.type};u.varDecls.push(f)}),s.elements.push(u)}else if(l.type==="derived"){let u={$type:"AliasElement",elementType:"alias",elementName:l.name,refName:l.base_type,initialValue:l.value,varDecls:[],rootName:n,comment:l.comment};s.elements.push(u)}}s.elements.length>0&&e.push(s)}else{let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionElement",elementType:"function",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};u.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(m)}),c.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(m)}),s.elements.push(f),a===o.length-1&&e.push(s)}}}),e}var vp=class extends Bs{constructor(r){super(r);this.services=r;this.completionOptions={triggerCharacters:["."]}}getCompletion(r,n){return super.getCompletion(r,n)}hintFunctionBlockDecl(r,n,i){r.forEach(o=>{o.items.forEach(a=>{let{expectedType:l,variable:u,typeName:c,nextVariables:f}=this.getDataType(a);this.handleStructOrFunctionBlockVarDecl(l,n,i,u,c),f.forEach(d=>{this.handleStructOrFunctionBlockVarDecl(l,n,i,d,c)})})})}getVarDeclDetail(r){let n=r.varGlobalType;return n==="VAR_INPUT"||n==="VAR_OUTPUT"?`${n==="VAR_INPUT"?"\u8F93\u5165\u53C2\u6570":"\u8F93\u51FA\u53C2\u6570"}, \u7C7B\u578B\u662F${r.varType}`:`${r.varType}`}hintCacheVarDecls(r,n,i,o="1"){r==null||r.forEach(s=>{n(i,{label:s.varName,kind:qr.CompletionItemKind.Field,detail:this.getVarDeclDetail(s),sortText:o})})}createReferenceCompletionItem(r){let n="";if(r&&r.node){if(r.type==="Struct_Var_Decl_Init"){let o=r.node.typeName,s="";n=Sr(s,o),n||(n=yi(o,s)),n||o.$type==="Array_liters"&&(n="Array")}if(r.node.$type==="VarDeclaration"){let i=r.node;return{nodeDescription:r,kind:qr.CompletionItemKind.Field,detail:this.getVarDeclDetail(i),sortText:"0"}}else if(r.node.$type==="VarDeclarationInit"){let o=r.node.typeName,s="";if(s=Sr(s,o),s!==""&&s){let a=ft(s);if(a){let[l,u]=a,c=l==null?void 0:l.elementType;if(c==="functionBlock"||c==="struct"){let f=l==null?void 0:l.varDecls;f==null||f.forEach(d=>({nodeDescription:r,kind:qr.CompletionItemKind.Field,detail:this.getVarDeclDetail(d),sortText:"0"}))}}}}}return{nodeDescription:r,kind:qr.CompletionItemKind.Reference,detail:n,sortText:"0"}}getRangeText(r){let n=r.position,o={start:qr.Position.create(n.line,0),end:r.position};return r.textDocument.getText(o)}completionForKeyword(r,n,i){try{let o=r.node;if(lC(o)){let s=o.varEnchanceDecl.ref,a=o.varEnchanceDecl.$refText;if(ar(s)){let l=s.typeName,u="";if(u=Sr(u,l),u!==""&&u){let c=ft(u);if(c){let[f,d]=c,m=f==null?void 0:f.elementType;(m==="functionBlock"||m==="struct")&&this.hintCacheVarDecls(f==null?void 0:f.varDecls,i,r)}}else{let c=l.Identifier;if(c){let f=c.ref;if(es(f))f.items.forEach(m=>{let{expectedType:v,variable:N,typeName:E,nextVariables:I}=this.getDataType(m);this.handleStructOrFunctionBlockVarDecl(v,i,r,N,E),I.forEach(_=>{this.handleStructOrFunctionBlockVarDecl(v,i,r,_,E)})});else if(_i(f)){let d=f.varInputs,m=f.varOutputs,v=f.varLocals;this.hintFunctionBlockDecl(d,i,r),this.hintFunctionBlockDecl(m,i,r),this.hintFunctionBlockDecl(v,i,r)}}}}else qC(a).forEach(u=>{let c=ft(u);if(c){let[f,d]=c;i(r,{label:f==null?void 0:f.elementName,kind:qr.CompletionItemKind.Reference,detail:f==null?void 0:f.usage,sortText:"1"})}})}else{let s=this.getRangeText(r);s=s.trim();let a=s.indexOf(":"),l=s.substring(a+1);l=l.trim(),jC(l).forEach(c=>{if(Tp.includes(c)||Du.includes(c)){let f=ft(c);if(f){let[d,m]=f;i(r,{label:c,kind:qr.CompletionItemKind.Reference,detail:d==null?void 0:d.elementType,sortText:"1"})}}else i(r,{label:c,kind:qr.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})})}}catch{}}handleStructOrFunctionBlockVarDecl(r,n,i,o,s){if(r!==""&&r)n(i,{label:o,kind:qr.CompletionItemKind.Reference,detail:r,sortText:"1"});else{let a=s.Identifier;a&&n(i,{label:o,kind:qr.CompletionItemKind.Reference,detail:a.$refText,sortText:"1"})}}completionForCrossReference(r,n,i){let o=r.node;if(Zr(o)){let s=o.variable.$refText;GC(s).forEach(l=>{let u=ft(l);if(u){let[c,f]=u;i(r,{label:c==null?void 0:c.elementName,kind:qr.CompletionItemKind.Reference,detail:c==null?void 0:c.usage,sortText:"1"})}})}else if(En(o)){let s=o.previous;if(En(s)){let a=s.element,l=a==null?void 0:a.ref;if(Au(l)||ar(l)){let u=l.typeName,c="";return c=Sr(c,u),c?void 0:super.completionForCrossReference(r,n,i)}}else if(Ti(s))return super.completionForCrossReference(r,n,i)}else return super.completionForCrossReference(r,n,i)}findFeaturesAt(r,n){let i=r.getText({start:qr.Position.create(0,0),end:r.positionAt(n)}),o=this.completionParser.parse(i),s=o.tokens;if(o.tokenIndex===0){let u=St.getEntryRule(this.grammar),c=Co({feature:u.definition,type:St.getExplicitRuleType(u)});return s.length>0?(s.shift(),yl(c.map(f=>[f]),s)):c}let a=[...s].splice(o.tokenIndex);return this.findLocalNextFeatures([o.elementStack.map(u=>({feature:u}))],a)}findLocalNextFeatures(r,n){let i={stacks:r,tokens:n};return i.stacks.flat().forEach(s=>{s.property=void 0}),this.findNextFeatureStacks(i.stacks).map(s=>s[s.length-1])}findNextFeatureStacks(r,n){let i=[];for(let o of r)i.push(...this.interpretStackToken(o,n));return i}interpretStackToken(r,n){let i=new Map,o=new Set(r.map(a=>a.feature).filter(this.isPlusFeature)),s=[];for(;r.length>0;){let a=r.pop(),l=this.findNextFeaturesInternal({next:a,cardinalities:i,plus:o,visited:new Set}).filter(u=>n?this.featureMatches(u.feature,n):!0);for(let u of l)s.push([...r,u]);if(!l.every(u=>St.isOptionalCardinality(u.feature.cardinality,u.feature)||St.isOptionalCardinality(i.get(u.feature))))break}return s}isPlusFeature(r){if(r.cardinality==="+")return!0;let n=un.getContainerOfType(r,at.isAssignment);return!!(n&&n.cardinality==="+")}findNextFeaturesInternal(r){let{next:n,cardinalities:i,visited:o,plus:s}=r,a=[],l=n.feature;if(o.has(l))return[];o.add(l);let u,c=l;for(;c.$container;)if(at.isGroup(c.$container)){u=c.$container;break}else if(at.isAbstractElement(c.$container))c=c.$container;else break;if(St.isArrayCardinality(c.cardinality)){let f=this.findFirstFeaturesInternal({next:{feature:c,type:n.type},cardinalities:i,visited:o,plus:s});for(let d of f)s.add(d.feature);a.push(...f)}if(u){let f=u.elements.indexOf(c);f!==void 0&&f<u.elements.length-1&&a.push(...this.findNextFeaturesInGroup({feature:u,type:n.type},f+1,i,o,s)),a.every(d=>St.isOptionalCardinality(d.feature.cardinality,d.feature)||St.isOptionalCardinality(i.get(d.feature))||s.has(d.feature))&&a.push(...this.findNextFeaturesInternal({next:{feature:u,type:n.type},cardinalities:i,visited:o,plus:s}))}return a}featureMatches(r,n){if(at.isKeyword(r))return r.value===n.image;if(at.isRuleCall(r))return this.ruleMatches(r.rule.ref,n);if(at.isCrossReference(r)){let i=St.getCrossReferenceTerminal(r);if(i)return this.featureMatches(i,n)}return!1}findFirstFeaturesInternal(r){var u,c,f;let{next:n,cardinalities:i,visited:o,plus:s}=r;if(n===void 0)return[];let{feature:a,type:l}=n;if(at.isGroup(a)){if(o.has(a))return[];o.add(a)}if(at.isGroup(a))return this.findNextFeaturesInGroup(n,0,i,o,s).map(d=>this.modifyCardinality(d,a.cardinality,i));if(at.isAlternatives(a)||at.isUnorderedGroup(a))return a.elements.flatMap(d=>this.findFirstFeaturesInternal({next:{feature:d,type:l,property:n.property},cardinalities:i,visited:o,plus:s})).map(d=>this.modifyCardinality(d,a.cardinality,i));if(at.isAssignment(a)){let d={feature:a.terminal,type:l,property:(u=n.property)!=null?u:a.feature};return this.findFirstFeaturesInternal({next:d,cardinalities:i,visited:o,plus:s}).map(m=>this.modifyCardinality(m,a.cardinality,i))}else{if(at.isAction(a))return this.findNextFeaturesInternal({next:{feature:a,type:St.getTypeName(a),property:(c=n.property)!=null?c:a.feature},cardinalities:i,visited:o,plus:s});if(at.isRuleCall(a)&&at.isParserRule(a.rule.ref)){let d=a.rule.ref,m={feature:d.definition,type:d.fragment||d.dataType?void 0:(f=St.getExplicitRuleType(d))!=null?f:d.name,property:n.property};return this.findFirstFeaturesInternal({next:m,cardinalities:i,visited:o,plus:s}).map(v=>this.modifyCardinality(v,a.cardinality,i))}else return[n]}}findNextFeaturesInGroup(r,n,i,o,s){var u;let a=[],l;for(;n<r.feature.elements.length&&(l={feature:r.feature.elements[n++],type:r.type},a.push(...this.findFirstFeaturesInternal({next:l,cardinalities:i,visited:o,plus:s})),!!St.isOptionalCardinality((u=l.feature.cardinality)!=null?u:i.get(l.feature),l.feature)););return a}ruleMatches(r,n){return at.isParserRule(r)?Co(r.definition).some(o=>this.featureMatches(o.feature,n)):at.isTerminalRule(r)?St.terminalRegex(r).test(n.image):!1}modifyCardinality(r,n,i){return i.set(r.feature,n),r}getDataType(r){let n=r.variables,i=r.nextVariables,o=r.typeName,s="";return s=Sr(s,o),{expectedType:s,variable:n,typeName:o,nextVariables:i}}};var Rp=class extends Ua{constructor(r){super(r);this.services=r}getDocumentHighlight(r,n){let i=r.parseResult.value.$cstNode;if(!i)return;let o=Fi.findDeclarationNodeAtOffset(i,r.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!o)return;let s=this.references.findDeclaration(o);if(s){let a=[];if(s.$type==="VarDeclaration"||s.$type==="FunctionElement")return a;{let l=s.$document;if(!l)return a;let u=Pt.equals(l.uri,r.uri),c={documentUri:r.uri,includeDeclaration:u};return this.references.findReferences(s,c).map(d=>this.createDocumentHighlight(d)).toArray()}}}};var xp=class extends jo{constructor(r){super(r);this.services=r}findDeclaration(r){if(r){let n=St.findAssignment(r),i=r.astNode;if(n&&i){let o=i[n.feature];if(Tt(o)){if(VC.includes(o.$refText.toUpperCase())){let s=ft(o.$refText.toUpperCase());if(s){let[a,l]=s;return a}}return o.ref}else if(Array.isArray(o)){for(let s of o)if(Tt(s)&&s.$refNode&&s.$refNode.offset<=r.offset&&s.$refNode.end>=r.end)return s.ref}}if(i){let o=this.nameProvider.getNameNode(i);if(o&&(o===r||Fi.isChildNode(r,o)))return i}}}};var Op=Ht(wr(),1);var Ip=class extends tp{getSignatureFromElement(e,r){var n;if(dC(e)){let i=e.$container;if(cC(i)){let o=i.assignPrefix,s=o==null?void 0:o.varEnchanceDecl.$refText,a=o==null?void 0:o.varEnchanceDecl.ref;if(a){if(Yn(a)){let l=a.varInputs,u=a.varOutputs,c=Np(l),f=Np(u),d=Math.max(c,f),m=a.name,v=a.variable_type,N="";N=Sr(N,v),N===void 0&&(N=(n=v.Identifier)==null?void 0:n.$refText);let E=[],I="";l.forEach(M=>{let Q=M.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,Pe=vi(le.variables,d),W="",L=le.typeName;W=Sr(W,L),I+=`
VAR_INPUT${" ".repeat(8)}${le.variables}${" ".repeat(Pe)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,d);I+=`
VAR_INPUT${" ".repeat(8)}${j}${" ".repeat(H)}${W}`})}}),u.forEach(M=>{let Q=M.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,Pe=vi(le.variables,d),W="",L=le.typeName;W=Sr(W,L),I+=`
VAR_OUTPUT${" ".repeat(7)}${le.variables}${" ".repeat(Pe)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,d);I+=`
VAR_OUTPUT${" ".repeat(7)}${j}${" ".repeat(H)}${W}`})}});let _={kind:Op.MarkupKind.Markdown,value:["```typescript",I,"```"].join(`
`)},T={label:`FUNCTION ${m}:${N}
`,documentation:_};return E.push(T),{signatures:E}}else if(ar(a)){let u=a.typeName.Identifier;if(u){let c=u.ref;if(_i(c)){let f=c.varInputs,d=c.varOutputs,m=[],v="",N=Np(f),E=Np(d),I=Math.max(N,E);f.forEach(M=>{let Q=M.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,Pe=vi(le.variables,I),W="",L=le.typeName;W=Sr(W,L),v+=`
VAR_INPUT${" ".repeat(8)}${le.variables}${" ".repeat(Pe)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,I);v+=`
VAR_INPUT${" ".repeat(8)}${j}${" ".repeat(H)}${W}`})}}),d.forEach(M=>{let Q=M.items;for(let ae=0;ae<Q.length;ae++){let le=Q[ae],Ce=le.nextVariables,Pe=vi(le.variables,I),W="",L=le.typeName;W=Sr(W,L),v+=`
VAR_OUTPUT${" ".repeat(7)}${le.variables}${" ".repeat(Pe)}${W}`,Ce.length>0&&Ce.forEach(j=>{let H=vi(j,I);v+=`
VAR_OUTPUT${" ".repeat(7)}${j}${" ".repeat(H)}${W}`})}});let _={kind:Op.MarkupKind.Markdown,value:["```typescript",v,"```"].join(`
`)},T={label:`FUNCTION_BLOCK ${c.name}
`,documentation:_};return m.push(T),{signatures:m}}}}}else if(s){let l=ft(s);if(l){let[u,c]=l,f=[];if(u){let d=this.getSignatureInfo(u,f,"usage");return d||this.getSignatureInfo(u,f,"comment")}}}}}}get signatureHelpOptions(){return{triggerCharacters:["(",","],retriggerCharacters:[","]}}getSignatureInfo(e,r,n){let i=e[n],o=NG(e.varDecls),s="",a=OG(o);if(o.forEach(l=>{let u=vi(l.variable,a),c=l.varType==="VAR_INPUT"?8:7;s+=`
${l.varType}${" ".repeat(c)}${l.variable}${" ".repeat(u)} ${l.type}`}),i){let l=e.elementType==="functionBlock"?"FUNCTION_BLOCK":"FUNCTION",u=e.elementType==="functionBlock"?"\u529F\u80FD\u5757\u8BF4\u660E: ":"\u51FD\u6570\u8BF4\u660E: ",c={kind:Op.MarkupKind.Markdown,value:["```typescript",`${u}${e.comment}`,s,"```"].join(`
`)},f={label:`${l} ${e.elementName}
`,documentation:c};return r.push(f),{signatures:r}}}},Q_=class{constructor(e,r,n){this.varType=e;this.variable=r;this.type=n}};function NG(t){let e=[];return t.forEach(r=>{let n=r.varGlobalType,i=r.varName,o=r.varType,s=new Q_(n,i,o);e.push(s)}),e}function vi(t,e){let r=8,n=t.length;return e+r-n}function Np(t){let e=0;return t.forEach(r=>{r.items.forEach(n=>{let i=n.nextVariables;e=Math.max(e,n.variables.length),i.length>0&&i.forEach(o=>{e=Math.max(e,o.length)})})}),e}function OG(t){let e=0;return t.forEach(r=>{e=Math.max(e,r.variable.length)}),e}var Ep,JC=()=>Ep!=null?Ep:Ep=fp(`{
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
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@19"
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
}`);var IG={languageId:"st",fileExtensions:[".st"],caseInsensitive:!1},QC={AstReflection:()=>new Eu},ZC={Grammar:()=>JC(),LanguageMetaData:()=>IG,parser:{}};var Sp=class{constructor(e){this.services=e}error(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.error(e))}warn(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.warn(e))}info(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.info(e))}log(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.log(e))}};var Ap=class extends Ho{async computeLocalScopes(e,r){let n=e.parseResult.value,i=new dn;for(let a of n.program)a.inputs.forEach(u=>{u.items.forEach(f=>{let d=this.descriptions.createDescription(f,f.variables,e);i.add(n,d);let m=f.nextVariables;this.addNextVariables(m,f,e,i,n)})});return n.function_block.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),n.st_function.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),i}addNextVariables(e,r,n,i,o){if(e)return e.length>0&&e.forEach(s=>{let a=this.descriptions.createDescription(r,s,n);i.add(o,a)}),i}handleAllVariable(e,r,n,i){e.forEach(o=>{o.items.forEach(a=>{let l=this.descriptions.createDescription(a,a.variables,i);r.add(n,l),this.addNextVariables(a.nextVariables,a,i,r,n)})})}};var Dp=class extends up{format(e){}};var Cp=class extends Go{constructor(r){super(r);this.services=r}getOuterCacheElement(r){return AC(r)}isOuterCacheReference(r){return this.getOuterCacheElement(r)!==void 0}createOuterCacheDescription(r){let n=this.getOuterCacheElement(r),i="FunctionElement";return n&&(n.elementType==="alias"?i="Alias":n.elementType==="struct"?i="StructsList":n.elementType==="functionBlock"&&(i="FunctionBlock")),{type:i,name:r,documentUri:Sn,path:"st-cache"}}getCandidate(r){let n=r.reference.$refText,i=this.reflection.getReferenceType(r);return _p.includes(n.toUpperCase())?this.createOuterCacheDescription(n):(i==="ComposeElement"||i==="Universe")&&this.isOuterCacheReference(n)?this.createOuterCacheDescription(n):super.getCandidate(r)}buildReference(r,n,i,o){let s=this,a={$refNode:i,$refText:o,get ref(){var l;if(Be(this._ref))return this._ref;if(il(this._nodeDescription)){let u=s.loadAstNode(this._nodeDescription),c=s.getOuterCacheElement(o);this._ref=u!=null?u:c,!this._ref&&!_p.includes(o.toUpperCase())&&(this._ref=s.createLinkingError({reference:a,container:r,property:n},this._nodeDescription))}else if(this._ref===void 0){let u=s.getLinkedNode({reference:a,container:r,property:n});if(u.error&&un.getDocument(r).state<oe.ComputedScopes)return;this._ref=(l=u.node)!=null?l:u.error,this._nodeDescription=u.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return yn(this._ref)?this._ref:void 0}};return a}doLink(r,n){var o;let i=r.reference;if(i._ref===void 0)try{let s=this.getCandidate(r);if(yn(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){let a=this.loadAstNode(s),l=this.getOuterCacheElement(i.$refText);i._ref=(o=a!=null?a:l)!=null?o:this.createLinkingError(r,s)}}catch(s){i._ref={...r,message:`An error occurred while resolving reference to '${i.$refText}': ${s}`}}n.references.push(i)}getLinkedNode(r){try{let n=this.getCandidate(r);if(yn(n))return{error:n};let i=this.loadAstNode(n);if(i)return{node:i,descr:n};let o=this.getOuterCacheElement(r.reference.$refText);return o?{node:o,descr:n}:{descr:n,error:this.createLinkingError(r,n)}}catch(n){return{error:{...r,message:`An error occurred while resolving reference to '${r.reference.$refText}': ${n}`}}}}createLinkingError(r,n){let i=un.getDocument(r.container);i.state<oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${i.uri}).`);let o=this.reflection.getReferenceType(r),s=r.container;return hC(s)?(o="\u529F\u80FD\u5757\u6216\u51FD\u6570",{...r,message:`\u4E0D\u80FD\u5F15\u7528\u7684${o}'${r.reference.$refText}'.`,targetDescription:n}):{...r,message:`Could not resolve reference to ${o} named '${r.reference.$refText}'.`,targetDescription:n}}};function eb(t){return{$type:"struct",literal:t}}function tb(t){return t.$type==="struct"}function rb(t){return{$type:"functionBlock",literal:t}}function nb(t){return t.$type==="functionBlock"}function bp(t,e){return{$type:"error",message:t,source:e}}function ib(t){return{$type:"cache",literal:t}}function ob(t){return t.$type==="cache"}function kp(t,e){var i;let r,n=e.get(t);if(n)return n;if(e.set(t,bp("Recursive definition",t)),En(t)){let o=(i=t.element)==null?void 0:i.ref;o&&Au(o)&&(r=sb(o,e))}else if(Ti(t))r=SG(t,e);else if(ar(t)){let o=t.typeName;Su(o)&&(r=Z_(o,e))}else Au(t)?r=sb(t,e):es(t)?r=eb(t):_i(t)?r=rb(t):pp(t)&&(r=EG(t,e));return r||(r=bp("Could not infer type for "+t.$type,t)),e.set(t,r),r}function sb(t,e){let r=t.typeName;return Z_(r,e)}function EG(t,e){return Z_(t.refName,e)}function Z_(t,e){if(Su(t)){let r=t.Identifier;if(r){let i=r.ref;if(i)return kp(i,e)}let n=X_(t);if(n)return ib(n)}}function SG(t,e){let r=t.prior;return AG(r,e)}function AG(t,e){let r=t.variable.ref;return r?kp(r,e):bp("Could not infer type for this reference",t)}var Lp=class extends zo{constructor(e){super(e)}getScope(e){if(e.property==="element"){let n=e.container.previous;if(!n)return super.getScope(e);let i=kp(n,new Map);if(tb(i))return this.scopeStructMembers(i.literal);if(nb(i))return this.scopeFunctionBlockMembers(i.literal);if(ob(i)){let o=this.scopeCache(i.literal);if(o)return o}}else if(e.property==="variable")return super.getScope(e);return super.getScope(e)}scopeCache(e){let r=ft(e),n;if(r){let[i,o]=r;if(i){let s=i.varDecls,a=me(s).map(u=>this.descriptions.createDescription(u,u.varName,o)).nonNullable(),l={caseInsensitive:!1};n=this.createScope(a,n,l)}}if(n)return n}getGlobalScope(e,r){return super.getGlobalScope(e,r)}scopeStructMembers(e){let r=this.getStructChain(e).flatMap(a=>a.items),n=me(r).map(a=>this.descriptions.createDescription(a,a.variables)).nonNullable(),i=me(r).map(a=>{let l=a.nextVariables;if(l.length>0)for(let u=0;u<l.length;u++){let c=l[u];return this.descriptions.createDescription(a,c)}}).nonNullable(),o=new jr(n),s=new jr(i);return o}scopeFirstFunctionBlockMembers(e){let r=this.getFunctionBlockDecl(e),n=me(r).map(i=>{let o=this.nameProvider.getName(i);return o?this.descriptions.createDescription(i,o):this.descriptions.createDescription(i,i.variables)}).nonNullable();return new jr(n)}scopeNextFunctionBlockMembers(e){let r=this.singleVarScope(e,"input"),n=this.singleVarScope(e,"output"),i=this.singleVarScope(e,"local");return new jr(r.getAllElements().concat(n.getAllElements()).concat(i.getAllElements()))}singleVarScope(e,r){let n;r==="input"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varInputs):r==="output"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varOutputs):r==="local"&&(n=this.getFunctionBlockChain(e).flatMap(a=>a.varLocals));let o=this.getFunctionBlockDecl(e).filter(a=>a.nextVariables.length>0),s;for(let a=0;a<o.length;a++){let l=o[a],u=l.nextVariables,c=this.handleNextVariables(l,u),f=this.createScopeForNodes(n,c);s?s=s.concat(f.getAllElements()):s=f.getAllElements()}return new jr(s)}scopeFunctionBlockMembers(e){let r=this.scopeFirstFunctionBlockMembers(e),n=this.scopeNextFunctionBlockMembers(e);return new jr(r.getAllElements().concat(n.getAllElements()))}handleNextVariables(e,r){let n=me(r).map(o=>this.descriptions.createDescription(e,o)).nonNullable();return new jr(n)}getStructDecl(e){let r=[],n=[];return e.items}getFunctionBlockDecl(e){let r=[],n=e.varInputs,i=e.varOutputs,o=e.varLocals;return this.addDecl(n,r),this.addDecl(i,r),this.addDecl(o,r),r}addDecl(e,r){e.forEach(n=>{let i=n.items;r.push(...i)})}getStructChain(e){let r=new Set;return r.add(e),e.items.forEach(i=>{let o=i.typeName;if(Su(o)){let s=o.Identifier;if(s){let a=s.ref;a&&this.getStructChain(a)}}}),Array.from(r)}getFunctionBlockChain(e){let r=new Set;return r.add(e),Array.from(r)}};function ab(t){let e=t.validation.DocumentValidator,r=t.validation.ValidationRegistry,n=t.validation.StValidator,i={St:n.checkElement};r.register(i,n)}var wp=class{checkElement(e,r){let n=e.program,i=e.st_function,o=e.function_block,s=e.types_struct,a=e.types_alias,l=e.types_enum,u=e.types_union;n.forEach(c=>{this.saveProgramVarInfo(c.inputs,r)}),this.checkPrograms(e,r),this.checkFunctions(i,r),this.checkFunctionBlocks(o,r),this.checkDateTypes(s,a,l,u,r)}checkPrograms(e,r){this.judgeWhetherHasDuplicateName("program",e.program,r),this.judgeCapital("program",e.program,r),this.checkProgramVarRef(e,r)}checkFunctions(e,r){this.judgeWhetherHasDuplicateName("function",e,r),this.handleFunctionOrBlockInfo(e,r)}checkFunctionBlocks(e,r){this.judgeWhetherHasDuplicateName("functionBlock",e,r),this.judgeCapital("functionBlock",e,r),this.handleFunctionOrBlockInfo(e,r)}checkDateTypes(e,r,n,i,o){this.handleDataTypeVarInfo(e,r,n,i,o)}judgeCapital(e,r,n){r&&r.forEach(i=>{if(i.name){let o=i.name.substring(0,1);/^[a-zA-Z]/.test(o)&&o.toUpperCase()!==o&&n("warning",`${e} name should start with a capital letter`,{node:i,property:"name"})}})}judgeWhetherHasDuplicateName(e,r,n){let i=[];if(r){let o={};r.forEach(a=>{let l=[];sC(a)?(l.push(a.variables),a.nextVariables&&l.push(...a.nextVariables)):l.push(a.name),l.forEach(u=>{o[u]?(o[u]++,i.push(a)):o[u]=1})});let s=Object.keys(o).filter(a=>o[a]>1);i.forEach(a=>{s.length>0&&n("error",`\u91CD\u590D\u5B9A\u4E49\u7684${e}:${s[0]}`,{node:a,property:"name"})})}}checkProgramVarRef(e,r){e.program.forEach(i=>{let o=i.stStatements;if(o){let s=o.statements;this.handleStatements(s,r)}})}handleStatements(e,r){e.length!==0&&e.forEach(n=>{let i=n.$type;if(i==="Selection_statement"){let o=n,s=o.if,a=o.case;if(s){let l=s.ifStatement,u=s.ifCondition,c=s.elsifConditions;this.checkIfWhitespace(s,r),this.checkWhitespace(s,r);let f=s.elsifStatements,d=s.elseStatement;if(u){let m=u.$type;this.handleCondition(m,u,r)}if(c.forEach(m=>{let v=m.$type;this.handleCondition(v,m,r)}),l){let m=l.statements;this.handleStatements(m,r)}if(f){let m=f.statements;this.handleStatements(m,r)}if(d){let m=d.statements;this.handleStatements(m,r)}}if(a){let l=a.caseExpression,u=a.elseStatements,c=a.caseElements;if(Zr(l)){let f=l.variable}if(u){let f=u.statements;this.handleStatements(f,r)}c.forEach(f=>{let m=f.caseList.caseListElement,v=f.statements;if(v){let N=v.statements,E=[];E.push(N),this.handleStatements(E,r)}m.length>0&&m.forEach(N=>{let E=N.numCaseStart,I=N.numericCaseEnd;E&&I&&typeof E=="string"&&typeof I=="string"&&(E=parseInt(E),I=parseInt(I),E>I&&r("error","\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:N,property:"numCaseStart"}))})})}}else if(i==="Iteration_statement"){let s=n.statement;if(s!=="EXIT"){let a=s.statementList;if(a){let l=a.statements;if(this.handleStatements(l,r),uC(s)){let u=s.controlVariable.ref,c="";ar(u)&&(c=this.judgeRefNodeType(u,c));let f=s.forList,m=f.forExpr.prior,v=f.byExpr,N=v==null?void 0:v.prior,E=f.toExpr,I=E==null?void 0:E.prior;this.handleExpressionPrior(m,c,r,m),this.handleExpressionPrior(N,c,r,N),this.handleExpressionPrior(I,c,r,I)}else if(gC(s)){let u=s.untilExpr;this.handleSingleVariableExpression(u,r)}else if(xC(s)){let u=s.whileExpr;this.handleSingleVariableExpression(u,r)}}}}else i==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(n,r)})}handleCondition(e,r,n){if(e==="Expression"){let i=r.left,o=r.right;this.handleConditionExpression(i,o,n)}else if(e!=="Constant"){if(e!=="FunctionExpression")if(e==="VariableExpression"){let o=r.variable}else e==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(r,n)}}handleFunctionInvokeOrAssign(e,r){let i=e.statement;if(!TC(i)){let o=i.id,s=i.assign,a=i.params,l=i.assignPrefix;this.handleVariableHint(o,r,!1,s,a,l)}}handleVariableHint(e,r,n,i,o,s){let a="",l,u;if(e){if(En(e)){let c=e;l=c;let f=c.element,d=c.previous;if(f){let m=f.ref,v=f.$refText;m&&(a=this.handleRef(m,v,a,d))}}else if(Ti(e)){let c=e,f=c.prior;if(Zr(f)){let m=f.variable.ref;l=f,a=this.judgeRefNodeType(m,a)}else if(V_(f)){let d=this.handleFunctionExpression(f,r,c,a)}}}if(s){let c=s.varEnchanceDecl,f=c.ref;u=f;let d=c.$refText;f?(a=this.handleRef(f,d,a),this.handleParam(o,a,r,s)):(a=d,this.handleParam(o,a,r))}if(i){let c=i.expression,f=c==null?void 0:c.$type;if(f==="Constant"){let m=c.constant;this.handleDataTypeMatch(m,a,r,l)}else if(f==="Expression"){let d=c,m=d==null?void 0:d.prior,v=d.left,N=d.right;if(m&&this.handleExpressionPrior(m,a,r,l),v&&N){let E=v.prior,I=N.prior;this.handleExpressionPrior(E,a,r,l),this.handleExpressionPrior(I,a,r,l)}}else if(f==="MemberCall"){let d=c,m=d.element,v=d.arguments;if(m){let N=m.ref;if(N&&pC(N)){let E=N,I=E.variable_type,_=E.reqParams,T=[];if(this.handleFunctionBlockMethodReqparam(_,r,T),v.length!==_.length)r("error",`\u671F\u671B${_.length}\u4E2A\u53C2\u6570,\u4F46\u662F\u5B9E\u9645${v.length}\u4E2A`,{node:d,property:"arguments"});else for(let M=0;M<v.length;M++){let Q=v[M],ae=T[M],le=Q.prior;this.handlePrior(le,"","",ae,r)}let k;if(k=An(I,k,r),k&&a!==""){let[M,Q]=this.getComparableTypes(k,a);M&&Q&&M.toLowerCase()!==Q.toLowerCase()&&r("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${k}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:d,property:"element"})}}}}}if(o&&o.length>0&&u&&Yn(u)){let c=[];this.validateStFunctionRule(u,l,a,r,c,o[0])}}handleParam(e,r,n,i){let o,s;if(i&&(s=i.varEnchanceDecl,o=s.ref),e&&e.length>0){let a=e[0].parameters;if(r){let l=ft(r);if(l)this.validateLibraryFunction(l,a,n);else if(ar(o)){let u=o.typeName;if(u){let c=u.Identifier;if(c){let f=c.ref;if(_i(f)){let d={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:f.name,varDecls:[],rootName:"",comment:"",usage:""};f.varInputs.forEach(m=>{m.items.forEach(N=>{let I={$type:"VarDeclaration",varName:N.variables,varType:yi(N.typeName,""),varGlobalType:"VAR_INPUT"};d.varDecls.push(I)})}),f.varOutputs.forEach(m=>{m.items.forEach(N=>{let I={$type:"VarDeclaration",varName:N.variables,varType:yi(N.typeName,""),varGlobalType:"VAR_OUTPUT"};d.varDecls.push(I)})}),this.validateLibraryFunction(d,a,n,!0)}else es(f)&&i&&n("error","\u65E0\u6CD5\u8C03\u7528\u7C7B\u578B'TYPE'\u7684\u5BF9\u8C61",{node:i,property:"varEnchanceDecl"})}else i&&n("error",`\u9700\u8981\u7A0B\u5E8F\u540D,\u51FD\u6570\u6216\u529F\u80FD\u5757\u5B9E\u4F8B\u66FF\u4EE3${i==null?void 0:i.varEnchanceDecl.$refText}`,{node:i,property:"varEnchanceDecl"})}}}}}handleRef(e,r,n,i){if(es(e.$container)){let a=e.$container.items.find(l=>l.variables===r);if(a){let l=a.typeName;n=this.judgeType(n,l)}}else if(ar(e)){let s=e.typeName;n=this.judgeType(n,s)}else if(i){let o=i.prior;if(Zr(o)){let s=o.variable.ref;if(ar(s)){let a=s.typeName;if(a.Cache_type_name){let l=a.Cache_type_name,u=ft(l);if(u){let[c,f]=u;if(c){let d=c.varDecls.find(m=>m.varName===r);n=d==null?void 0:d.varType}}}}}}return n}judgeRefNodeType(e,r){if(ar(e)){let n=e.typeName;r=yi(n,r)}return r}judgeType(e,r){return e=yi(r,e),e}handleExpressionPrior(e,r,n,i){if(e){i||(i=e);let o=e==null?void 0:e.$type;if(o==="Constant"){let a=e.constant;this.handleDataTypeMatch(a,r,n,i)}else if(o==="FunctionExpression"){let s=this.handleFunctionExpression(e,n,i,r)}else if(o==="VariableExpression"){let s=e,a=s.variable.ref,l="";if(l=this.judgeRefNodeType(a,l),l&&r){let[u,c]=this.getComparableTypes(l,r);u&&c&&u.toLowerCase()!==c.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${l}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:s,property:"variable"})}}}}handleFunctionExpression(e,r,n,i){let o=e,s=o.refFunctionName,a=o.params;if(s.refFunctionName){let l=s.refFunctionName.ref,u=o.params;this.validatePrefixSuffixElement(o,r);let c=[];if(l){if(Yn(l))this.validateStFunctionRule(l,n,i,r,c,u);else if(ar(l)&&(i=this.judgeRefNodeType(l,i),i)){let f=ft(i);if(f&&u){let d=u.parameters;this.validateLibraryFunction(f,d,r)}}}}else if(s.Cache_type_name){this.validatePrefixSuffixElement(o,r);let l=s.Cache_type_name,u=this.getCacheFunctionReturnType(l);if(this.validateReturnTypeCompatibility(u,i,r,o,"refFunctionName"),a){let c=a.parameters,f=ft(l);f&&this.validateLibraryFunction(f,c,r)}}}validateStFunctionRule(e,r,n,i,o,s){let a=e.variable_type,l=e.varInputs,u,c=[];if(l.forEach(f=>{f.items.forEach(m=>{let v=m.nextVariables;v.length>0&&v.forEach(N=>{c.push(N)})}),c.push(...f.items)}),a&&(u=yi(a,u),r&&u&&n)){let[f,d]=this.getComparableTypes(u,n);f&&d&&f.toLowerCase()!==d.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${u}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${n}'`,{node:r,property:"prior"})}if(this.handleFunctionReqparam(c,i,o),s){let f=s.parameters;if(c.length!==f.length)i("error",`\u671F\u671B${c.length}\u4E2A\u8F93\u5165,\u4F46\u662F\u5B9E\u9645${f.length}\u4E2A`,{node:s,property:"parameters"});else for(let d=0;d<f.length;d++){let m=f[d],v=o[d],N=m.ParamValue;if(N){let E=N.prior;this.handlePrior(E,"","",v,i)}}}}validateLibraryFunction(e,r,n,i){if(i)this.validateFb(e,r,n,i);else{let[o,s]=e;o&&o.elementType==="functionBlock"&&(o=o,this.validateFb(o,r,n))}}validateFb(e,r,n,i){let o=this.judgeCacheNodeInputOutputVarDecl(":=",e),s=this.judgeCacheNodeInputOutputVarDecl("=>",e);r.forEach(a=>{let l=a.ParamName,u=a.ParamValue,c=a.InputOrOutputSign,f=!1,d=i?e==null?void 0:e.elementName:e==null?void 0:e.elementName.toUpperCase();c===":="&&l&&(o.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u5165\u53C2\u6570`,{node:a,property:"ParamName"}))),c==="=>"&&l&&(s.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u51FA\u53C2\u6570`,{node:a,property:"ParamName"}))),f||u&&this.handleCacheTypeMatch(l,u,e,n,a)})}validatePrefixSuffixElement(e,r){let n=e.prefixValidateElement,i=e.suffixValidateElement;n&&r("error",`invalid Identifier near '${n}'`,{node:e,property:"prefixValidateElement"}),i&&r("error",`invalid Identifier near '${i}'`,{node:e,property:"suffixValidateElement"})}normalizeTypeAlias(e,r=new Set){var o;if(!e)return;let n=e.toUpperCase();if(n==="DT")return"DATE_AND_TIME";if(n==="TOD")return"TIME_OF_DAY";let i=ft(e);if(i){let[s]=i;if((s==null?void 0:s.elementType)==="alias"){let a=s,l=a.elementName.toUpperCase();return r.has(l)?l:(r.add(l),(o=this.normalizeTypeAlias(a.refName,r))!=null?o:n)}}return n}getComparableTypes(e,r){return[this.normalizeTypeAlias(e),this.normalizeTypeAlias(r)]}getCacheFunctionReturnType(e){let r=ft(e);if(!r)return;let[n]=r;if(!n||n.elementType!=="function")return;let i=n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"&&s.varName.toUpperCase()==="OUT")||n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"),o=this.normalizeTypeAlias(i==null?void 0:i.varType);if(!(!o||o==="ANY"||o.startsWith("ANY_")))return o}validateReturnTypeCompatibility(e,r,n,i,o){let s=this.normalizeTypeAlias(e),a=this.normalizeTypeAlias(r);s&&a&&s.toLowerCase()!==a.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${s}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:i,property:o})}judgeCacheNodeInputOutputVarDecl(e,r){let n=new Set;if(!e)return n;let i="",o=r==null?void 0:r.varDecls;return e===":="?i="VAR_INPUT":e==="=>"&&(i="VAR_OUTPUT"),o&&(o==null||o.forEach(s=>{s.varGlobalType===i&&n.add(s.varName)})),n}handleCacheTypeMatch(e,r,n,i,o){var l;if(!n)return;let s=n.varDecls.find(u=>u.varName===e),a=s==null?void 0:s.varType;if(mp(r.prior)){let c=r.prior.constant;this.handleDataTypeMatch(c,a,i,r)}else if(Zr(r.prior)){let u=r.prior,c=u.variable.ref,f="";if(f=this.judgeRefNodeType(c,f),f&&a){let[d,m]=this.getComparableTypes(f,a);d&&m&&d.toLowerCase()!==m.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${f}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:u,property:"variable"})}}else if(En(r)){let u=r.element,c=(l=r.previous)==null?void 0:l.prior,f="",d="";if(Zr(c)){let v=c.variable.ref;if(ar(v)&&(f=v.variables,d=this.judgeRefNodeType(v,d)),d){let N=ft(d.toUpperCase());if(N&&u){let[E,I]=N;if(E){let _=E.varDecls.find(T=>T.varName===(u==null?void 0:u.$refText));if(_){let T=_.varType;if(T&&a){let[k,M]=this.getComparableTypes(T,a);k&&M&&k.toLowerCase()!==M.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${T}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:o,property:"ParamName"})}}}}}}}else if(V_(r.prior)){let u=r.prior;if(u.refFunctionName.refFunctionName){let c=u.refFunctionName.refFunctionName.ref;if(c){if(Yn(c)){let f=c.variable_type,d;d=An(f,d,i),this.validateReturnTypeCompatibility(d,a,i,u,"refFunctionName")}}else{let f=u.refFunctionName.refFunctionName.$refText}}else if(u.refFunctionName.Cache_type_name){let c=u.refFunctionName.Cache_type_name,f=this.getCacheFunctionReturnType(c);this.validateReturnTypeCompatibility(f,a,i,u,"refFunctionName")}}}handleFunctionReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s=i.nextVariables,a;if(o&&(a=An(o,a,r),n&&(n.push(a),s.length>0)))for(let l=0;l<s.length;l++)n.push(a)})}handleFunctionBlockMethodReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s;o&&(s=An(o,s,r),n&&n.push(s))})}handleDataTypeMatch(e,r,n,i){if(!i)return;r=this.normalizeTypeAlias(r);let o=[];if(Ba(e)){let s=e.arrElements;for(let a=0;a<s.length;a++){let l=s[a];o=lo(l.constant),e=this.handleDataTypeMatchHint(o,r,i,n,e)}}else o=lo(e),e=this.handleDataTypeMatchHint(o,r,i,n,e);return e}handleDataTypeMatchHint(e,r,n,i,o){if(r=this.normalizeTypeAlias(r),e.length===1){if(r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()){let s=rs(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=Y_(l);En(n)?u!==""&&i("error",u,{node:n,property:"element"}):Zr(n)?u!==""&&i("error",u,{node:n,property:"variable"}):Ti(n)&&u!==""&&i("error",u,{node:n,property:"prior"})}a||s&&(En(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"element"}):Zr(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"variable"}):Ti(n)&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"prior"}))}}else{o=o;let[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&(En(n)?i(a,s,{node:n,property:"element"}):Zr(n)?i(a,s,{node:n,property:"variable"}):Ti(n)&&i(a,s,{node:n,property:"prior"}))}return o}handleSingleVariableExpression(e,r){if(e){let n=e,i=n.left,o=n.right;this.handleConditionExpression(i,o,r)}}handleConditionExpression(e,r,n){if(e&&r){let i=e.$type,o=r.$type;if(i==="Expression"){let s="",a="",u=e.prior,c=u==null?void 0:u.$type;if(Zr(u)){let d=u.variable.ref;ar(d)&&(a=d.variables,s=this.judgeRefNodeType(d,s))}if(o==="Expression"){let d=r.prior;this.handlePrior(d,"","",s,n)}}}}handlePrior(e,r,n,i,o){if(Zr(e)){let a=e.variable.ref;if(ar(a)&&(r=a.variables,n=this.judgeRefNodeType(a,n)),i&&n){let[l,u]=this.getComparableTypes(n,i);u&&l&&u.toLowerCase()!==l.toLowerCase()&&(u.toLowerCase()==="string"&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}),rs(l,u)&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}))}}else if(mp(e)){let s=e,a=s.constant,l=[];if(Ba(a)){let u=a.arrElements;for(let c=0;c<u.length;c++){let f=u[c];l=lo(f.constant),a=this.handleConditionExpressionHint(l,i,o,s)}}else l=lo(a),a=this.handleConditionExpressionHint(l,i,o,s)}return{rightVariableName:r,rightExpectType:n}}handleConditionExpressionHint(e,r,n,i){r=this.normalizeTypeAlias(r);let o=i.constant;if(e.length===1)r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()&&rs(e[0],r)&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"constant"});else{o=o,!gp(o.toString())&&!ao(o.toString())&&n("error",`${o}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"constant"});let[a,l]=this.convertValue(o,r);a!==""&&a!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(l,a,{node:i,property:"constant"})}return o}convertValue(e,r){let n=["","error"],i={BOOL:{min:0,max:1},SINT:{min:-128,max:127},BYTE:{min:0,max:255},INT:{min:-32768,max:32767},UINT:{min:0,max:65535},DINT:{min:-2147483648,max:2147483647},UDINT:{min:0,max:4294967295},LINT:{min:-Math.pow(2,63),max:Math.pow(2,63)-1},WORD:{min:0,max:65535},DWORD:{min:0,max:4294967295},LWORD:{min:0,max:Math.pow(2,64)-1}},o;if(r=this.normalizeTypeAlias(r),r===void 0)return["\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!","error"];if(r===""||Tt(r))return n;if(r.toUpperCase()==="REAL"||r.toUpperCase()==="LREAL"){if(typeof e=="string"&&!J_(e)){let s=parseInt(e,10);o=Object.keys(i).find(a=>s>=i[a].min&&s<=i[a].max&&a!==r),n=o?[`\u5EFA\u8BAE\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"warning"]:["No suitable conversion type found","warning"]}return n}if(i[r]){let{min:s,max:a}=i[r];if(typeof e=="number"){if(!(e>=s&&e<=a)){o=Object.keys(i).find(u=>e>=i[u].min&&e<=i[u].max&&u!==r);let l=rs(o,r,e);o?l&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]):n=["No suitable conversion type found","error"]}return n}else if(ao(e))r&&(r.toLowerCase()!=="REAL"||r.toLowerCase()!=="LREAL")&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'LREAL'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]);else{let u=parseInt(e,10);n=this.convertValue(u,r)}}else if(typeof e=="number"){if(o=Object.keys(i).find(s=>e>=i[s].min&&e<=i[s].max&&s!==r),o){if(r){let s=rs(o,r,e);if(r.toUpperCase()==="STRING"){if((o==null?void 0:o.toLowerCase())!==r.toLowerCase())return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}else if(s)return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}}else n=["No suitable conversion type found","error"];return n}else if(typeof e=="string"){if(J_(e)){let a=ao(e)?parseFloat(e):parseInt(e,10);n=this.convertValue(a,r)}return n}return n}saveProgramVarInfo(e,r){e.forEach(n=>{let i=n.definition,o=n.items,s=n.modifiers,a="";s?a=i.concat(s):a=i,this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",o,r),o.forEach(l=>{this.validateDeclarationVar(l,r)})})}handleFunctionOrBlockInfo(e,r){e.forEach(n=>{let i=n.varLocals,o=n.varInputs,s=n.varOutputs,a=[],l=[],u=[];if(i.forEach(c=>{a.push(...c.items)}),o.forEach(c=>{l.push(...c.items)}),s.forEach(c=>{u.push(...c.items)}),this.handleEachVarTypeVariable(a,r),this.handleEachVarTypeVariable(l,r),this.handleEachVarTypeVariable(u,r),!_i(n)){if(Yn(n)){let c=n.variable_type,f=n.varInputs,d=[];f.forEach(v=>{d.push(v.items)}),this.handleFunctionReqparam(d,r);let m;m=An(c,m,r)}}})}handleDataTypeVarInfo(e,r,n,i,o){let s=e,a=i,l=n,u=r;s.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let m=d.typeName,v;m&&(m.$type==="Native_Type_Name"?v=An(m,v,o):m.$type==="Array_liters"&&(v=m.dataType))})}}),a.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let m=d.typeName,v;m&&(m.$type==="Native_Type_Name"?v=An(m,v,o):m.$type==="Array_liters"&&(v=m.dataType))})}}),l.forEach(c=>{let f=c.enum}),u.forEach(c=>{let f="";f=An(c.refName,f,o);let d=c.initialValue;if(d){let m=lo(d);this.handleVarDeclHint(m,f,o,c,d)}})}handleEachVarTypeVariable(e,r){e&&this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",e,r),e==null||e.forEach(n=>{this.validateDeclarationVar(n,r);let i=n.typeName,o;i&&(i.$type==="Native_Type_Name"?o=An(i,o,r):i.$type==="Array_liters"&&(o=i.dataType))})}validateDeclarationVar(e,r){let n=e.typeName,i;if(n){if(n.$type==="Native_Type_Name")i=An(n,i,r);else if(n.$type==="Array_liters"){let a=n,l=a.dataType;i=yi(l,i),a.arrayElemets.forEach(c=>{let f=c.left,d=c.right,m=parseInt(f,10),v=parseInt(d,10);m&&v&&m>v&&r("error","\u6570\u7EC4\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:e,property:"typeName"})})}}let o=e.initialValue,s=[];if(o){let a=o.constant;if(Ba(a)){let l=a.arrElements;for(let u=0;u<l.length;u++){let c=l[u];s=lo(c.constant),this.handleVarDeclHint(s,i,r,e,c.constant)}}else s=lo(o),this.handleVarDeclHint(s,i,r,e,o)}}handleVarDeclHint(e,r,n,i,o){if(typeof r=="string"&&(r=this.normalizeTypeAlias(r)),e.length===1){if(r!==void 0&&!Tt(r)&&r&&e[0]&&r.toLowerCase()!==e[0].toLowerCase()){let s=rs(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=Y_(l);u!==""&&n("error",u,{node:i,property:"initialValue"})}a||s&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"initialValue"})}}else if(mp(o)){let s=o.constant;this.handleInnerVarDeclHint(s,r,n,i),!gp(s)&&!ao(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:o,property:"constant"})}else{let s=o;this.handleInnerVarDeclHint(s,r,n,i),!gp(s)&&!ao(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"initialValue"})}}handleInnerVarDeclHint(e,r,n,i){if(ao(e)){let[o,s]=this.convertValue(e,r);o!==""&&o!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(s,o,{node:i,property:"initialValue"})}else{let o=parseInt(e,10),[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(a,s,{node:i,property:"initialValue"})}}checkTimeType(e){let r=["TIME","DATE","DATE_AND_TIME","TIME_OF_DAY"],n=e.toUpperCase();return r.includes(n)?[!0,n]:[!1,"unmatched time type"]}checkIfWhitespace(e,r){if(e){let n=un.getDocument(e).parseResult.value.$cstNode.fullText,i=St.findNodeForKeyword(e.$cstNode,"THEN");if(i){let o=i.offset;n.charAt(o-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"ifCondition",index:0})}}}checkWhitespace(e,r){if(e){let n=un.getDocument(e).parseResult.value.$cstNode.fullText,i=St.findNodesForKeyword(e.$cstNode,"THEN");for(let o=0;o<i.length;o++){if(o===0)continue;let a=i[o].offset;n.charAt(a-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"elsifConditions",index:o-1})}}}};var Pp=class extends Yo{constructor(e){super(e)}serialize(e,r){return super.serialize(e,r)}deserialize(e,r={}){let i=JSON.parse(e),o=ts(i);return XC(o)}};var ey=class extends Xo{register(e){super.register(e)}getServices(e){return super.getServices(e)}},ode=Symbol("StatemachineSharedServices"),DG={ServiceRegistry:()=>new ey,logger:{ClientLogger:t=>new Sp(t)}},sde=Symbol("StatemachineServices");function CG(t){return{shared:()=>t.shared,parser:{},validation:{StValidator:()=>new wp},lsp:{Formatter:()=>new Dp,CompletionProvider:e=>new vp(e),SignatureHelp:()=>new Ip,DocumentHighlightProvider:e=>new Rp(e)},references:{ScopeProvider:e=>new Lp(e),ScopeComputation:e=>new Ap(e),Linker:e=>new Cp(e),References:e=>new xp(e)},serializer:{JsonSerializer:e=>new Pp(e)}}}function lb(t){let e=Qo(tC(t),QC,DG),r=Qo(eC({shared:e}),ZC,CG({shared:e}));return e.ServiceRegistry.register(r),ab(r),{shared:e,st:r}}var bG=(0,Wa.createConnection)(new Wa.IPCMessageReader(process),new Wa.IPCMessageWriter(process)),{shared:hp,st:H_}=lb({connection:bG,...nC});JD(hp);0&&(module.exports={shared,st});
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
