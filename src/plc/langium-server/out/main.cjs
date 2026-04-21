"use strict";var Rb=Object.create;var Za=Object.defineProperty;var xb=Object.getOwnPropertyDescriptor;var Nb=Object.getOwnPropertyNames;var Eb=Object.getPrototypeOf,Ob=Object.prototype.hasOwnProperty;var Ib=(t,e,r)=>e in t?Za(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Z=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ii=(t,e)=>{for(var r in e)Za(t,r,{get:e[r],enumerable:!0})},qu=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Nb(e))!Ob.call(t,i)&&i!==r&&Za(t,i,{get:()=>e[i],enumerable:!(n=xb(e,i))||n.enumerable});return t},De=(t,e,r)=>(qu(t,e,"default"),r&&qu(r,e,"default")),Ft=(t,e,r)=>(r=t!=null?Rb(Eb(t)):{},qu(e||!t||!t.__esModule?Za(r,"default",{value:t,enumerable:!0}):r,t)),Sb=t=>qu(Za({},"__esModule",{value:!0}),t);var Si=(t,e,r)=>(Ib(t,typeof e!="symbol"?e+"":e,r),r);var Hu=Z(Gt=>{"use strict";Object.defineProperty(Gt,"__esModule",{value:!0});Gt.thenable=Gt.typedArray=Gt.stringArray=Gt.array=Gt.func=Gt.error=Gt.number=Gt.string=Gt.boolean=void 0;function Ab(t){return t===!0||t===!1}Gt.boolean=Ab;function h_(t){return typeof t=="string"||t instanceof String}Gt.string=h_;function Db(t){return typeof t=="number"||t instanceof Number}Gt.number=Db;function Cb(t){return t instanceof Error}Gt.error=Cb;function g_(t){return typeof t=="function"}Gt.func=g_;function T_(t){return Array.isArray(t)}Gt.array=T_;function bb(t){return T_(t)&&t.every(e=>h_(e))}Gt.stringArray=bb;function Lb(t,e){return Array.isArray(t)&&t.every(e)}Gt.typedArray=Lb;function kb(t){return t&&g_(t.then)}Gt.thenable=kb});var ms=Z(hr=>{"use strict";Object.defineProperty(hr,"__esModule",{value:!0});hr.stringArray=hr.array=hr.func=hr.error=hr.number=hr.string=hr.boolean=void 0;function wb(t){return t===!0||t===!1}hr.boolean=wb;function y_(t){return typeof t=="string"||t instanceof String}hr.string=y_;function $b(t){return typeof t=="number"||t instanceof Number}hr.number=$b;function Pb(t){return t instanceof Error}hr.error=Pb;function Mb(t){return typeof t=="function"}hr.func=Mb;function __(t){return Array.isArray(t)}hr.array=__;function Fb(t){return __(t)&&t.every(e=>y_(e))}hr.stringArray=Fb});var ym=Z(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.Message=ue.NotificationType9=ue.NotificationType8=ue.NotificationType7=ue.NotificationType6=ue.NotificationType5=ue.NotificationType4=ue.NotificationType3=ue.NotificationType2=ue.NotificationType1=ue.NotificationType0=ue.NotificationType=ue.RequestType9=ue.RequestType8=ue.RequestType7=ue.RequestType6=ue.RequestType5=ue.RequestType4=ue.RequestType3=ue.RequestType2=ue.RequestType1=ue.RequestType=ue.RequestType0=ue.AbstractMessageSignature=ue.ParameterStructures=ue.ResponseError=ue.ErrorCodes=void 0;var go=ms(),zp;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(zp||(ue.ErrorCodes=zp={}));var Yp=class t extends Error{constructor(e,r,n){super(r),this.code=go.number(e)?e:zp.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};ue.ResponseError=Yp;var $r=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};ue.ParameterStructures=$r;$r.auto=new $r("auto");$r.byPosition=new $r("byPosition");$r.byName=new $r("byName");var it=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return $r.auto}};ue.AbstractMessageSignature=it;var Xp=class extends it{constructor(e){super(e,0)}};ue.RequestType0=Xp;var Jp=class extends it{constructor(e,r=$r.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.RequestType=Jp;var Zp=class extends it{constructor(e,r=$r.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.RequestType1=Zp;var Qp=class extends it{constructor(e){super(e,2)}};ue.RequestType2=Qp;var em=class extends it{constructor(e){super(e,3)}};ue.RequestType3=em;var tm=class extends it{constructor(e){super(e,4)}};ue.RequestType4=tm;var rm=class extends it{constructor(e){super(e,5)}};ue.RequestType5=rm;var nm=class extends it{constructor(e){super(e,6)}};ue.RequestType6=nm;var im=class extends it{constructor(e){super(e,7)}};ue.RequestType7=im;var om=class extends it{constructor(e){super(e,8)}};ue.RequestType8=om;var sm=class extends it{constructor(e){super(e,9)}};ue.RequestType9=sm;var am=class extends it{constructor(e,r=$r.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.NotificationType=am;var lm=class extends it{constructor(e){super(e,0)}};ue.NotificationType0=lm;var um=class extends it{constructor(e,r=$r.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.NotificationType1=um;var cm=class extends it{constructor(e){super(e,2)}};ue.NotificationType2=cm;var fm=class extends it{constructor(e){super(e,3)}};ue.NotificationType3=fm;var dm=class extends it{constructor(e){super(e,4)}};ue.NotificationType4=dm;var pm=class extends it{constructor(e){super(e,5)}};ue.NotificationType5=pm;var mm=class extends it{constructor(e){super(e,6)}};ue.NotificationType6=mm;var hm=class extends it{constructor(e){super(e,7)}};ue.NotificationType7=hm;var gm=class extends it{constructor(e){super(e,8)}};ue.NotificationType8=gm;var Tm=class extends it{constructor(e){super(e,9)}};ue.NotificationType9=Tm;var v_;(function(t){function e(i){let o=i;return o&&go.string(o.method)&&(go.string(o.id)||go.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&go.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(go.string(o.id)||go.number(o.id)||o.id===null)}t.isResponse=n})(v_||(ue.Message=v_={}))});var vm=Z(Ai=>{"use strict";var R_;Object.defineProperty(Ai,"__esModule",{value:!0});Ai.LRUCache=Ai.LinkedMap=Ai.Touch=void 0;var gr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(gr||(Ai.Touch=gr={}));var Ku=class{constructor(){this[R_]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,r=gr.None){let n=this._map.get(e);if(n)return r!==gr.None&&this.touch(n,r),n.value}set(e,r,n=gr.None){let i=this._map.get(e);if(i)i.value=r,n!==gr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case gr.None:this.addItemLast(i);break;case gr.First:this.addItemFirst(i);break;case gr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(R_=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==gr.First&&r!==gr.Last)){if(r===gr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===gr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Ai.LinkedMap=Ku;var _m=class extends Ku{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=gr.AsNew){return super.get(e,r)}peek(e){return super.get(e,gr.None)}set(e,r){return super.set(e,r,gr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Ai.LRUCache=_m});var N_=Z(zu=>{"use strict";Object.defineProperty(zu,"__esModule",{value:!0});zu.Disposable=void 0;var x_;(function(t){function e(r){return{dispose:r}}t.create=e})(x_||(zu.Disposable=x_={}))});var Di=Z(Nm=>{"use strict";Object.defineProperty(Nm,"__esModule",{value:!0});var Rm;function xm(){if(Rm===void 0)throw new Error("No runtime abstraction layer installed");return Rm}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Rm=r}t.install=e})(xm||(xm={}));Nm.default=xm});var gs=Z(hs=>{"use strict";Object.defineProperty(hs,"__esModule",{value:!0});hs.Emitter=hs.Event=void 0;var Ub=Di(),E_;(function(t){let e={dispose(){}};t.None=function(){return e}})(E_||(hs.Event=E_={}));var Em=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,Ub.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Yu=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Em),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};hs.Emitter=Yu;Yu._noop=function(){}});var Zu=Z(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});Ts.CancellationTokenSource=Ts.CancellationToken=void 0;var Bb=Di(),Wb=ms(),Om=gs(),Xu;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Om.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Om.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||Wb.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Xu||(Ts.CancellationToken=Xu={}));var Vb=Object.freeze(function(t,e){let r=(0,Bb.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Ju=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?Vb:(this._emitter||(this._emitter=new Om.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Im=class{get token(){return this._token||(this._token=new Ju),this._token}cancel(){this._token?this._token.cancel():this._token=Xu.Cancelled}dispose(){this._token?this._token instanceof Ju&&this._token.dispose():this._token=Xu.None}};Ts.CancellationTokenSource=Im});var O_=Z(ys=>{"use strict";Object.defineProperty(ys,"__esModule",{value:!0});ys.SharedArrayReceiverStrategy=ys.SharedArraySenderStrategy=void 0;var Gb=Zu(),Qa;(function(t){t.Continue=0,t.Cancelled=1})(Qa||(Qa={}));var Sm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=Qa.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,Qa.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};ys.SharedArraySenderStrategy=Sm;var Am=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Qa.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Dm=class{constructor(e){this.token=new Am(e)}cancel(){}dispose(){}},Cm=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new Gb.CancellationTokenSource:new Dm(r)}};ys.SharedArrayReceiverStrategy=Cm});var Lm=Z(Qu=>{"use strict";Object.defineProperty(Qu,"__esModule",{value:!0});Qu.Semaphore=void 0;var jb=Di(),bm=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,jb.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Qu.Semaphore=bm});var S_=Z(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.ReadableStreamMessageReader=Ci.AbstractMessageReader=Ci.MessageReader=void 0;var wm=Di(),_s=ms(),km=gs(),qb=Lm(),I_;(function(t){function e(r){let n=r;return n&&_s.func(n.listen)&&_s.func(n.dispose)&&_s.func(n.onError)&&_s.func(n.onClose)&&_s.func(n.onPartialMessage)}t.is=e})(I_||(Ci.MessageReader=I_={}));var ec=class{constructor(){this.errorEmitter=new km.Emitter,this.closeEmitter=new km.Emitter,this.partialMessageEmitter=new km.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${_s.string(e.message)?e.message:"unknown"}`)}};Ci.AbstractMessageReader=ec;var $m;(function(t){function e(r){var u;let n,i,o,s=new Map,a,l=new Map;if(r===void 0||typeof r=="string")n=r!=null?r:"utf-8";else{if(n=(u=r.charset)!=null?u:"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,s.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)s.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,l.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)l.set(c.name,c)}return a===void 0&&(a=(0,wm.default)().applicationJson.decoder,l.set(a.name,a)),{charset:n,contentDecoder:o,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:l}}t.fromOptions=e})($m||($m={}));var Pm=class extends ec{constructor(e,r){super(),this.readable=e,this.options=$m.fromOptions(r),this.buffer=(0,wm.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new qb.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,wm.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Ci.ReadableStreamMessageReader=Pm});var L_=Z(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.WriteableStreamMessageWriter=bi.AbstractMessageWriter=bi.MessageWriter=void 0;var A_=Di(),el=ms(),Hb=Lm(),D_=gs(),Kb="Content-Length: ",C_=`\r
`,b_;(function(t){function e(r){let n=r;return n&&el.func(n.dispose)&&el.func(n.onClose)&&el.func(n.onError)&&el.func(n.write)}t.is=e})(b_||(bi.MessageWriter=b_={}));var tc=class{constructor(){this.errorEmitter=new D_.Emitter,this.closeEmitter=new D_.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${el.string(e.message)?e.message:"unknown"}`)}};bi.AbstractMessageWriter=tc;var Mm;(function(t){function e(r){var n,i;return r===void 0||typeof r=="string"?{charset:r!=null?r:"utf-8",contentTypeEncoder:(0,A_.default)().applicationJson.encoder}:{charset:(n=r.charset)!=null?n:"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:(i=r.contentTypeEncoder)!=null?i:(0,A_.default)().applicationJson.encoder}}t.fromOptions=e})(Mm||(Mm={}));var Fm=class extends tc{constructor(e,r){super(),this.writable=e,this.options=Mm.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Hb.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(Kb,n.byteLength.toString(),C_),i.push(C_),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};bi.WriteableStreamMessageWriter=Fm});var k_=Z(rc=>{"use strict";Object.defineProperty(rc,"__esModule",{value:!0});rc.AbstractMessageBuffer=void 0;var zb=13,Yb=10,Xb=`\r
`,Um=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let u=this._chunks[n];for(i=0;i<u.length;){switch(u[i]){case zb:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case Yb:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=u.byteLength,n++}if(r!==4)return;let s=this._read(o+i),a=new Map,l=this.toString(s,"ascii").split(Xb);if(l.length<2)return a;for(let u=0;u<l.length-2;u++){let c=l[u],f=c.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let d=c.substr(0,f),m=c.substr(f+1).trim();a.set(e?d.toLowerCase():d,m)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],s=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let s=o.slice(0,e);r.set(s,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};rc.AbstractMessageBuffer=Um});var F_=Z(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.createMessageConnection=ye.ConnectionOptions=ye.MessageStrategy=ye.CancellationStrategy=ye.CancellationSenderStrategy=ye.CancellationReceiverStrategy=ye.RequestCancellationReceiverStrategy=ye.IdCancellationReceiverStrategy=ye.ConnectionStrategy=ye.ConnectionError=ye.ConnectionErrors=ye.LogTraceNotification=ye.SetTraceNotification=ye.TraceFormat=ye.TraceValues=ye.Trace=ye.NullLogger=ye.ProgressType=ye.ProgressToken=void 0;var w_=Di(),yt=ms(),de=ym(),$_=vm(),tl=gs(),Bm=Zu(),il;(function(t){t.type=new de.NotificationType("$/cancelRequest")})(il||(il={}));var Wm;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Wm||(ye.ProgressToken=Wm={}));var rl;(function(t){t.type=new de.NotificationType("$/progress")})(rl||(rl={}));var Vm=class{constructor(){}};ye.ProgressType=Vm;var Gm;(function(t){function e(r){return yt.func(r)}t.is=e})(Gm||(Gm={}));ye.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var $e;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})($e||(ye.Trace=$e={}));var P_;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(P_||(ye.TraceValues=P_={}));(function(t){function e(n){if(!yt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})($e||(ye.Trace=$e={}));var Qr;(function(t){t.Text="text",t.JSON="json"})(Qr||(ye.TraceFormat=Qr={}));(function(t){function e(r){return yt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Qr||(ye.TraceFormat=Qr={}));var jm;(function(t){t.type=new de.NotificationType("$/setTrace")})(jm||(ye.SetTraceNotification=jm={}));var nc;(function(t){t.type=new de.NotificationType("$/logTrace")})(nc||(ye.LogTraceNotification=nc={}));var nl;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(nl||(ye.ConnectionErrors=nl={}));var vs=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ye.ConnectionError=vs;var qm;(function(t){function e(r){let n=r;return n&&yt.func(n.cancelUndispatched)}t.is=e})(qm||(ye.ConnectionStrategy=qm={}));var ic;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&yt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||yt.func(n.dispose))}t.is=e})(ic||(ye.IdCancellationReceiverStrategy=ic={}));var Hm;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&yt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||yt.func(n.dispose))}t.is=e})(Hm||(ye.RequestCancellationReceiverStrategy=Hm={}));var oc;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Bm.CancellationTokenSource}});function e(r){return ic.is(r)||Hm.is(r)}t.is=e})(oc||(ye.CancellationReceiverStrategy=oc={}));var sc;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(il.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&yt.func(n.sendCancellation)&&yt.func(n.cleanup)}t.is=e})(sc||(ye.CancellationSenderStrategy=sc={}));var ac;(function(t){t.Message=Object.freeze({receiver:oc.Message,sender:sc.Message});function e(r){let n=r;return n&&oc.is(n.receiver)&&sc.is(n.sender)}t.is=e})(ac||(ye.CancellationStrategy=ac={}));var lc;(function(t){function e(r){let n=r;return n&&yt.func(n.handleMessage)}t.is=e})(lc||(ye.MessageStrategy=lc={}));var M_;(function(t){function e(r){let n=r;return n&&(ac.is(n.cancellationStrategy)||qm.is(n.connectionStrategy)||lc.is(n.messageStrategy))}t.is=e})(M_||(ye.ConnectionOptions=M_={}));var _n;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(_n||(_n={}));function Jb(t,e,r,n){let i=r!==void 0?r:ye.NullLogger,o=0,s=0,a=0,l="2.0",u,c=new Map,f,d=new Map,m=new Map,v,N=new $_.LinkedMap,S=new Map,O=new Set,y=new Map,g=$e.Off,I=Qr.Text,M,J=_n.New,ce=new tl.Emitter,_e=new tl.Emitter,Ge=new tl.Emitter,Ce=new tl.Emitter,j=new tl.Emitter,k=n&&n.cancellationStrategy?n.cancellationStrategy:ac.Message;function B(R){if(R===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+R.toString()}function G(R){return R===null?"res-unknown-"+(++a).toString():"res-"+R.toString()}function ie(){return"not-"+(++s).toString()}function z(R,L){de.Message.isRequest(L)?R.set(B(L.id),L):de.Message.isResponse(L)?R.set(G(L.id),L):R.set(ie(),L)}function $(R){}function w(){return J===_n.Listening}function le(){return J===_n.Closed}function me(){return J===_n.Disposed}function Ae(){(J===_n.New||J===_n.Listening)&&(J=_n.Closed,_e.fire(void 0))}function sr(R){ce.fire([R,void 0,void 0])}function Ei(R){ce.fire(R)}t.onClose(Ae),t.onError(sr),e.onClose(Ae),e.onError(Ei);function je(){v||N.size===0||(v=(0,w_.default)().timer.setImmediate(()=>{v=void 0,ti()}))}function Yt(R){de.Message.isRequest(R)?Xt(R):de.Message.isNotification(R)?$t(R):de.Message.isResponse(R)?wt(R):gt(R)}function ti(){if(N.size===0)return;let R=N.shift();try{let L=n==null?void 0:n.messageStrategy;lc.is(L)?L.handleMessage(R,Yt):Yt(R)}finally{je()}}let ht=R=>{try{if(de.Message.isNotification(R)&&R.method===il.type.method){let L=R.params.id,U=B(L),W=N.get(U);if(de.Message.isRequest(W)){let ne=n==null?void 0:n.connectionStrategy,xe=ne&&ne.cancelUndispatched?ne.cancelUndispatched(W,$):void 0;if(xe&&(xe.error!==void 0||xe.result!==void 0)){N.delete(U),y.delete(L),xe.id=W.id,Jr(xe,R.method,Date.now()),e.write(xe).catch(()=>i.error("Sending response for canceled message failed."));return}}let oe=y.get(L);if(oe!==void 0){oe.cancel(),Oi(R);return}else O.add(L)}z(N,R)}finally{je()}};function Xt(R){var Pt;if(me())return;function L(be,lt,Ue){let ut={jsonrpc:l,id:R.id};be instanceof de.ResponseError?ut.error=be.toJson():ut.result=be===void 0?null:be,Jr(ut,lt,Ue),e.write(ut).catch(()=>i.error("Sending response failed."))}function U(be,lt,Ue){let ut={jsonrpc:l,id:R.id,error:be.toJson()};Jr(ut,lt,Ue),e.write(ut).catch(()=>i.error("Sending response failed."))}function W(be,lt,Ue){be===void 0&&(be=null);let ut={jsonrpc:l,id:R.id,result:be};Jr(ut,lt,Ue),e.write(ut).catch(()=>i.error("Sending response failed."))}ri(R);let oe=c.get(R.method),ne,xe;oe&&(ne=oe.type,xe=oe.handler);let qe=Date.now();if(xe||u){let be=(Pt=R.id)!=null?Pt:String(Date.now()),lt=ic.is(k.receiver)?k.receiver.createCancellationTokenSource(be):k.receiver.createCancellationTokenSource(R);R.id!==null&&O.has(R.id)&&lt.cancel(),R.id!==null&&y.set(be,lt);try{let Ue;if(xe)if(R.params===void 0){if(ne!==void 0&&ne.numberOfParams!==0){U(new de.ResponseError(de.ErrorCodes.InvalidParams,`Request ${R.method} defines ${ne.numberOfParams} params but received none.`),R.method,qe);return}Ue=xe(lt.token)}else if(Array.isArray(R.params)){if(ne!==void 0&&ne.parameterStructures===de.ParameterStructures.byName){U(new de.ResponseError(de.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by name but received parameters by position`),R.method,qe);return}Ue=xe(...R.params,lt.token)}else{if(ne!==void 0&&ne.parameterStructures===de.ParameterStructures.byPosition){U(new de.ResponseError(de.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by position but received parameters by name`),R.method,qe);return}Ue=xe(R.params,lt.token)}else u&&(Ue=u(R.method,R.params,lt.token));let ut=Ue;Ue?ut.then?ut.then(Mt=>{y.delete(be),L(Mt,R.method,qe)},Mt=>{y.delete(be),Mt instanceof de.ResponseError?U(Mt,R.method,qe):Mt&&yt.string(Mt.message)?U(new de.ResponseError(de.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${Mt.message}`),R.method,qe):U(new de.ResponseError(de.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,qe)}):(y.delete(be),L(Ue,R.method,qe)):(y.delete(be),W(Ue,R.method,qe))}catch(Ue){y.delete(be),Ue instanceof de.ResponseError?L(Ue,R.method,qe):Ue&&yt.string(Ue.message)?U(new de.ResponseError(de.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${Ue.message}`),R.method,qe):U(new de.ResponseError(de.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,qe)}}else U(new de.ResponseError(de.ErrorCodes.MethodNotFound,`Unhandled method ${R.method}`),R.method,qe)}function wt(R){if(!me())if(R.id===null)R.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(R.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let L=R.id,U=S.get(L);if(cs(R,U),U!==void 0){S.delete(L);try{if(R.error){let W=R.error;U.reject(new de.ResponseError(W.code,W.message,W.data))}else if(R.result!==void 0)U.resolve(R.result);else throw new Error("Should never happen.")}catch(W){W.message?i.error(`Response handler '${U.method}' failed with message: ${W.message}`):i.error(`Response handler '${U.method}' failed unexpectedly.`)}}}}function $t(R){if(me())return;let L,U;if(R.method===il.type.method){let W=R.params.id;O.delete(W),Oi(R);return}else{let W=d.get(R.method);W&&(U=W.handler,L=W.type)}if(U||f)try{if(Oi(R),U)if(R.params===void 0)L!==void 0&&L.numberOfParams!==0&&L.parameterStructures!==de.ParameterStructures.byName&&i.error(`Notification ${R.method} defines ${L.numberOfParams} params but received none.`),U();else if(Array.isArray(R.params)){let W=R.params;R.method===rl.type.method&&W.length===2&&Wm.is(W[0])?U({token:W[0],value:W[1]}):(L!==void 0&&(L.parameterStructures===de.ParameterStructures.byName&&i.error(`Notification ${R.method} defines parameters by name but received parameters by position`),L.numberOfParams!==R.params.length&&i.error(`Notification ${R.method} defines ${L.numberOfParams} params but received ${W.length} arguments`)),U(...W))}else L!==void 0&&L.parameterStructures===de.ParameterStructures.byPosition&&i.error(`Notification ${R.method} defines parameters by position but received parameters by name`),U(R.params);else f&&f(R.method,R.params)}catch(W){W.message?i.error(`Notification handler '${R.method}' failed with message: ${W.message}`):i.error(`Notification handler '${R.method}' failed unexpectedly.`)}else Ge.fire(R)}function gt(R){if(!R){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(R,null,4)}`);let L=R;if(yt.string(L.id)||yt.number(L.id)){let U=L.id,W=S.get(U);W&&W.reject(new Error("The received response has neither a result nor an error property."))}}function Tt(R){if(R!=null)switch(g){case $e.Verbose:return JSON.stringify(R,null,4);case $e.Compact:return JSON.stringify(R);default:return}}function mr(R){if(!(g===$e.Off||!M))if(I===Qr.Text){let L;(g===$e.Verbose||g===$e.Compact)&&R.params&&(L=`Params: ${Tt(R.params)}

`),M.log(`Sending request '${R.method} - (${R.id})'.`,L)}else Zr("send-request",R)}function Or(R){if(!(g===$e.Off||!M))if(I===Qr.Text){let L;(g===$e.Verbose||g===$e.Compact)&&(R.params?L=`Params: ${Tt(R.params)}

`:L=`No parameters provided.

`),M.log(`Sending notification '${R.method}'.`,L)}else Zr("send-notification",R)}function Jr(R,L,U){if(!(g===$e.Off||!M))if(I===Qr.Text){let W;(g===$e.Verbose||g===$e.Compact)&&(R.error&&R.error.data?W=`Error data: ${Tt(R.error.data)}

`:R.result?W=`Result: ${Tt(R.result)}

`:R.error===void 0&&(W=`No result returned.

`)),M.log(`Sending response '${L} - (${R.id})'. Processing request took ${Date.now()-U}ms`,W)}else Zr("send-response",R)}function ri(R){if(!(g===$e.Off||!M))if(I===Qr.Text){let L;(g===$e.Verbose||g===$e.Compact)&&R.params&&(L=`Params: ${Tt(R.params)}

`),M.log(`Received request '${R.method} - (${R.id})'.`,L)}else Zr("receive-request",R)}function Oi(R){if(!(g===$e.Off||!M||R.method===nc.type.method))if(I===Qr.Text){let L;(g===$e.Verbose||g===$e.Compact)&&(R.params?L=`Params: ${Tt(R.params)}

`:L=`No parameters provided.

`),M.log(`Received notification '${R.method}'.`,L)}else Zr("receive-notification",R)}function cs(R,L){if(!(g===$e.Off||!M))if(I===Qr.Text){let U;if((g===$e.Verbose||g===$e.Compact)&&(R.error&&R.error.data?U=`Error data: ${Tt(R.error.data)}

`:R.result?U=`Result: ${Tt(R.result)}

`:R.error===void 0&&(U=`No result returned.

`)),L){let W=R.error?` Request failed: ${R.error.message} (${R.error.code}).`:"";M.log(`Received response '${L.method} - (${R.id})' in ${Date.now()-L.timerStart}ms.${W}`,U)}else M.log(`Received response ${R.id} without active response promise.`,U)}else Zr("receive-response",R)}function Zr(R,L){if(!M||g===$e.Off)return;let U={isLSPMessage:!0,type:R,message:L,timestamp:Date.now()};M.log(U)}function wn(){if(le())throw new vs(nl.Closed,"Connection is closed.");if(me())throw new vs(nl.Disposed,"Connection is disposed.")}function fs(){if(w())throw new vs(nl.AlreadyListening,"Connection is already listening")}function ds(){if(!w())throw new Error("Call listen() first.")}function wr(R){return R===void 0?null:R}function D(R){if(R!==null)return R}function F(R){return R!=null&&!Array.isArray(R)&&typeof R=="object"}function q(R,L){switch(R){case de.ParameterStructures.auto:return F(L)?D(L):[wr(L)];case de.ParameterStructures.byName:if(!F(L))throw new Error("Received parameters by name but param is not an object literal.");return D(L);case de.ParameterStructures.byPosition:return[wr(L)];default:throw new Error(`Unknown parameter structure ${R.toString()}`)}}function Y(R,L){let U,W=R.numberOfParams;switch(W){case 0:U=void 0;break;case 1:U=q(R.parameterStructures,L[0]);break;default:U=[];for(let oe=0;oe<L.length&&oe<W;oe++)U.push(wr(L[oe]));if(L.length<W)for(let oe=L.length;oe<W;oe++)U.push(null);break}return U}let ee={sendNotification:(R,...L)=>{wn();let U,W;if(yt.string(R)){U=R;let ne=L[0],xe=0,qe=de.ParameterStructures.auto;de.ParameterStructures.is(ne)&&(xe=1,qe=ne);let Pt=L.length,be=Pt-xe;switch(be){case 0:W=void 0;break;case 1:W=q(qe,L[xe]);break;default:if(qe===de.ParameterStructures.byName)throw new Error(`Received ${be} parameters for 'by Name' notification parameter structure.`);W=L.slice(xe,Pt).map(lt=>wr(lt));break}}else{let ne=L;U=R.method,W=Y(R,ne)}let oe={jsonrpc:l,method:U,params:W};return Or(oe),e.write(oe).catch(ne=>{throw i.error("Sending notification failed."),ne})},onNotification:(R,L)=>{wn();let U;return yt.func(R)?f=R:L&&(yt.string(R)?(U=R,d.set(R,{type:void 0,handler:L})):(U=R.method,d.set(R.method,{type:R,handler:L}))),{dispose:()=>{U!==void 0?d.delete(U):f=void 0}}},onProgress:(R,L,U)=>{if(m.has(L))throw new Error(`Progress handler for token ${L} already registered`);return m.set(L,U),{dispose:()=>{m.delete(L)}}},sendProgress:(R,L,U)=>ee.sendNotification(rl.type,{token:L,value:U}),onUnhandledProgress:Ce.event,sendRequest:(R,...L)=>{wn(),ds();let U,W,oe;if(yt.string(R)){U=R;let Pt=L[0],be=L[L.length-1],lt=0,Ue=de.ParameterStructures.auto;de.ParameterStructures.is(Pt)&&(lt=1,Ue=Pt);let ut=L.length;Bm.CancellationToken.is(be)&&(ut=ut-1,oe=be);let Mt=ut-lt;switch(Mt){case 0:W=void 0;break;case 1:W=q(Ue,L[lt]);break;default:if(Ue===de.ParameterStructures.byName)throw new Error(`Received ${Mt} parameters for 'by Name' request parameter structure.`);W=L.slice(lt,ut).map(Gu=>wr(Gu));break}}else{let Pt=L;U=R.method,W=Y(R,Pt);let be=R.numberOfParams;oe=Bm.CancellationToken.is(Pt[be])?Pt[be]:void 0}let ne=o++,xe;oe&&(xe=oe.onCancellationRequested(()=>{let Pt=k.sender.sendCancellation(ee,ne);return Pt===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${ne}`),Promise.resolve()):Pt.catch(()=>{i.log(`Sending cancellation messages for id ${ne} failed`)})}));let qe={jsonrpc:l,id:ne,method:U,params:W};return mr(qe),typeof k.sender.enableCancellation=="function"&&k.sender.enableCancellation(qe),new Promise(async(Pt,be)=>{let lt=Mt=>{Pt(Mt),k.sender.cleanup(ne),xe==null||xe.dispose()},Ue=Mt=>{be(Mt),k.sender.cleanup(ne),xe==null||xe.dispose()},ut={method:U,timerStart:Date.now(),resolve:lt,reject:Ue};try{await e.write(qe),S.set(ne,ut)}catch(Mt){throw i.error("Sending request failed."),ut.reject(new de.ResponseError(de.ErrorCodes.MessageWriteError,Mt.message?Mt.message:"Unknown reason")),Mt}})},onRequest:(R,L)=>{wn();let U=null;return Gm.is(R)?(U=void 0,u=R):yt.string(R)?(U=null,L!==void 0&&(U=R,c.set(R,{handler:L,type:void 0}))):L!==void 0&&(U=R.method,c.set(R.method,{type:R,handler:L})),{dispose:()=>{U!==null&&(U!==void 0?c.delete(U):u=void 0)}}},hasPendingResponse:()=>S.size>0,trace:async(R,L,U)=>{let W=!1,oe=Qr.Text;U!==void 0&&(yt.boolean(U)?W=U:(W=U.sendNotification||!1,oe=U.traceFormat||Qr.Text)),g=R,I=oe,g===$e.Off?M=void 0:M=L,W&&!le()&&!me()&&await ee.sendNotification(jm.type,{value:$e.toString(R)})},onError:ce.event,onClose:_e.event,onUnhandledNotification:Ge.event,onDispose:j.event,end:()=>{e.end()},dispose:()=>{if(me())return;J=_n.Disposed,j.fire(void 0);let R=new de.ResponseError(de.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let L of S.values())L.reject(R);S=new Map,y=new Map,O=new Set,N=new $_.LinkedMap,yt.func(e.dispose)&&e.dispose(),yt.func(t.dispose)&&t.dispose()},listen:()=>{wn(),fs(),J=_n.Listening,t.listen(ht)},inspect:()=>{(0,w_.default)().console.log("inspect")}};return ee.onNotification(nc.type,R=>{if(g===$e.Off||!M)return;let L=g===$e.Verbose||g===$e.Compact;M.log(R.message,L?R.verbose:void 0)}),ee.onNotification(rl.type,R=>{let L=m.get(R.token);L?L(R.value):Ce.fire(R)}),ee}ye.createMessageConnection=Jb});var uc=Z(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.ProgressType=P.ProgressToken=P.createMessageConnection=P.NullLogger=P.ConnectionOptions=P.ConnectionStrategy=P.AbstractMessageBuffer=P.WriteableStreamMessageWriter=P.AbstractMessageWriter=P.MessageWriter=P.ReadableStreamMessageReader=P.AbstractMessageReader=P.MessageReader=P.SharedArrayReceiverStrategy=P.SharedArraySenderStrategy=P.CancellationToken=P.CancellationTokenSource=P.Emitter=P.Event=P.Disposable=P.LRUCache=P.Touch=P.LinkedMap=P.ParameterStructures=P.NotificationType9=P.NotificationType8=P.NotificationType7=P.NotificationType6=P.NotificationType5=P.NotificationType4=P.NotificationType3=P.NotificationType2=P.NotificationType1=P.NotificationType0=P.NotificationType=P.ErrorCodes=P.ResponseError=P.RequestType9=P.RequestType8=P.RequestType7=P.RequestType6=P.RequestType5=P.RequestType4=P.RequestType3=P.RequestType2=P.RequestType1=P.RequestType0=P.RequestType=P.Message=P.RAL=void 0;P.MessageStrategy=P.CancellationStrategy=P.CancellationSenderStrategy=P.CancellationReceiverStrategy=P.ConnectionError=P.ConnectionErrors=P.LogTraceNotification=P.SetTraceNotification=P.TraceFormat=P.TraceValues=P.Trace=void 0;var Xe=ym();Object.defineProperty(P,"Message",{enumerable:!0,get:function(){return Xe.Message}});Object.defineProperty(P,"RequestType",{enumerable:!0,get:function(){return Xe.RequestType}});Object.defineProperty(P,"RequestType0",{enumerable:!0,get:function(){return Xe.RequestType0}});Object.defineProperty(P,"RequestType1",{enumerable:!0,get:function(){return Xe.RequestType1}});Object.defineProperty(P,"RequestType2",{enumerable:!0,get:function(){return Xe.RequestType2}});Object.defineProperty(P,"RequestType3",{enumerable:!0,get:function(){return Xe.RequestType3}});Object.defineProperty(P,"RequestType4",{enumerable:!0,get:function(){return Xe.RequestType4}});Object.defineProperty(P,"RequestType5",{enumerable:!0,get:function(){return Xe.RequestType5}});Object.defineProperty(P,"RequestType6",{enumerable:!0,get:function(){return Xe.RequestType6}});Object.defineProperty(P,"RequestType7",{enumerable:!0,get:function(){return Xe.RequestType7}});Object.defineProperty(P,"RequestType8",{enumerable:!0,get:function(){return Xe.RequestType8}});Object.defineProperty(P,"RequestType9",{enumerable:!0,get:function(){return Xe.RequestType9}});Object.defineProperty(P,"ResponseError",{enumerable:!0,get:function(){return Xe.ResponseError}});Object.defineProperty(P,"ErrorCodes",{enumerable:!0,get:function(){return Xe.ErrorCodes}});Object.defineProperty(P,"NotificationType",{enumerable:!0,get:function(){return Xe.NotificationType}});Object.defineProperty(P,"NotificationType0",{enumerable:!0,get:function(){return Xe.NotificationType0}});Object.defineProperty(P,"NotificationType1",{enumerable:!0,get:function(){return Xe.NotificationType1}});Object.defineProperty(P,"NotificationType2",{enumerable:!0,get:function(){return Xe.NotificationType2}});Object.defineProperty(P,"NotificationType3",{enumerable:!0,get:function(){return Xe.NotificationType3}});Object.defineProperty(P,"NotificationType4",{enumerable:!0,get:function(){return Xe.NotificationType4}});Object.defineProperty(P,"NotificationType5",{enumerable:!0,get:function(){return Xe.NotificationType5}});Object.defineProperty(P,"NotificationType6",{enumerable:!0,get:function(){return Xe.NotificationType6}});Object.defineProperty(P,"NotificationType7",{enumerable:!0,get:function(){return Xe.NotificationType7}});Object.defineProperty(P,"NotificationType8",{enumerable:!0,get:function(){return Xe.NotificationType8}});Object.defineProperty(P,"NotificationType9",{enumerable:!0,get:function(){return Xe.NotificationType9}});Object.defineProperty(P,"ParameterStructures",{enumerable:!0,get:function(){return Xe.ParameterStructures}});var Km=vm();Object.defineProperty(P,"LinkedMap",{enumerable:!0,get:function(){return Km.LinkedMap}});Object.defineProperty(P,"LRUCache",{enumerable:!0,get:function(){return Km.LRUCache}});Object.defineProperty(P,"Touch",{enumerable:!0,get:function(){return Km.Touch}});var Zb=N_();Object.defineProperty(P,"Disposable",{enumerable:!0,get:function(){return Zb.Disposable}});var U_=gs();Object.defineProperty(P,"Event",{enumerable:!0,get:function(){return U_.Event}});Object.defineProperty(P,"Emitter",{enumerable:!0,get:function(){return U_.Emitter}});var B_=Zu();Object.defineProperty(P,"CancellationTokenSource",{enumerable:!0,get:function(){return B_.CancellationTokenSource}});Object.defineProperty(P,"CancellationToken",{enumerable:!0,get:function(){return B_.CancellationToken}});var W_=O_();Object.defineProperty(P,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return W_.SharedArraySenderStrategy}});Object.defineProperty(P,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return W_.SharedArrayReceiverStrategy}});var zm=S_();Object.defineProperty(P,"MessageReader",{enumerable:!0,get:function(){return zm.MessageReader}});Object.defineProperty(P,"AbstractMessageReader",{enumerable:!0,get:function(){return zm.AbstractMessageReader}});Object.defineProperty(P,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return zm.ReadableStreamMessageReader}});var Ym=L_();Object.defineProperty(P,"MessageWriter",{enumerable:!0,get:function(){return Ym.MessageWriter}});Object.defineProperty(P,"AbstractMessageWriter",{enumerable:!0,get:function(){return Ym.AbstractMessageWriter}});Object.defineProperty(P,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Ym.WriteableStreamMessageWriter}});var Qb=k_();Object.defineProperty(P,"AbstractMessageBuffer",{enumerable:!0,get:function(){return Qb.AbstractMessageBuffer}});var ar=F_();Object.defineProperty(P,"ConnectionStrategy",{enumerable:!0,get:function(){return ar.ConnectionStrategy}});Object.defineProperty(P,"ConnectionOptions",{enumerable:!0,get:function(){return ar.ConnectionOptions}});Object.defineProperty(P,"NullLogger",{enumerable:!0,get:function(){return ar.NullLogger}});Object.defineProperty(P,"createMessageConnection",{enumerable:!0,get:function(){return ar.createMessageConnection}});Object.defineProperty(P,"ProgressToken",{enumerable:!0,get:function(){return ar.ProgressToken}});Object.defineProperty(P,"ProgressType",{enumerable:!0,get:function(){return ar.ProgressType}});Object.defineProperty(P,"Trace",{enumerable:!0,get:function(){return ar.Trace}});Object.defineProperty(P,"TraceValues",{enumerable:!0,get:function(){return ar.TraceValues}});Object.defineProperty(P,"TraceFormat",{enumerable:!0,get:function(){return ar.TraceFormat}});Object.defineProperty(P,"SetTraceNotification",{enumerable:!0,get:function(){return ar.SetTraceNotification}});Object.defineProperty(P,"LogTraceNotification",{enumerable:!0,get:function(){return ar.LogTraceNotification}});Object.defineProperty(P,"ConnectionErrors",{enumerable:!0,get:function(){return ar.ConnectionErrors}});Object.defineProperty(P,"ConnectionError",{enumerable:!0,get:function(){return ar.ConnectionError}});Object.defineProperty(P,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return ar.CancellationReceiverStrategy}});Object.defineProperty(P,"CancellationSenderStrategy",{enumerable:!0,get:function(){return ar.CancellationSenderStrategy}});Object.defineProperty(P,"CancellationStrategy",{enumerable:!0,get:function(){return ar.CancellationStrategy}});Object.defineProperty(P,"MessageStrategy",{enumerable:!0,get:function(){return ar.MessageStrategy}});var eL=Di();P.RAL=eL.default});var j_=Z(Qm=>{"use strict";Object.defineProperty(Qm,"__esModule",{value:!0});var V_=require("util"),ii=uc(),cc=class t extends ii.AbstractMessageBuffer{constructor(e="utf-8"){super(e)}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return Buffer.from(e,r)}toString(e,r){return e instanceof Buffer?e.toString(r):new V_.TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e instanceof Buffer?e:Buffer.from(e):e instanceof Buffer?e.slice(0,r):Buffer.from(e,0,r)}allocNative(e){return Buffer.allocUnsafe(e)}};cc.emptyBuffer=Buffer.allocUnsafe(0);var Xm=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),ii.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),ii.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),ii.Disposable.create(()=>this.stream.off("end",e))}onData(e){return this.stream.on("data",e),ii.Disposable.create(()=>this.stream.off("data",e))}},Jm=class{constructor(e){this.stream=e}onClose(e){return this.stream.on("close",e),ii.Disposable.create(()=>this.stream.off("close",e))}onError(e){return this.stream.on("error",e),ii.Disposable.create(()=>this.stream.off("error",e))}onEnd(e){return this.stream.on("end",e),ii.Disposable.create(()=>this.stream.off("end",e))}write(e,r){return new Promise((n,i)=>{let o=s=>{s==null?n():i(s)};typeof e=="string"?this.stream.write(e,r,o):this.stream.write(e,o)})}end(){this.stream.end()}},G_=Object.freeze({messageBuffer:Object.freeze({create:t=>new cc(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{try{return Promise.resolve(Buffer.from(JSON.stringify(t,void 0,0),e.charset))}catch(r){return Promise.reject(r)}}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{try{return t instanceof Buffer?Promise.resolve(JSON.parse(t.toString(e.charset))):Promise.resolve(JSON.parse(new V_.TextDecoder(e.charset).decode(t)))}catch(r){return Promise.reject(r)}}})}),stream:Object.freeze({asReadableStream:t=>new Xm(t),asWritableStream:t=>new Jm(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setImmediate(t,...e);return{dispose:()=>clearImmediate(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Zm(){return G_}(function(t){function e(){ii.RAL.install(G_)}t.install=e})(Zm||(Zm={}));Qm.default=Zm});var _o=Z(Oe=>{"use strict";var tL=Oe&&Oe.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),rL=Oe&&Oe.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&tL(e,t,r)};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.createMessageConnection=Oe.createServerSocketTransport=Oe.createClientSocketTransport=Oe.createServerPipeTransport=Oe.createClientPipeTransport=Oe.generateRandomPipeName=Oe.StreamMessageWriter=Oe.StreamMessageReader=Oe.SocketMessageWriter=Oe.SocketMessageReader=Oe.PortMessageWriter=Oe.PortMessageReader=Oe.IPCMessageWriter=Oe.IPCMessageReader=void 0;var Rs=j_();Rs.default.install();var q_=require("path"),nL=require("os"),iL=require("crypto"),pc=require("net"),en=uc();rL(uc(),Oe);var eh=class extends en.AbstractMessageReader{constructor(e){super(),this.process=e;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose())}listen(e){return this.process.on("message",e),en.Disposable.create(()=>this.process.off("message",e))}};Oe.IPCMessageReader=eh;var th=class extends en.AbstractMessageWriter{constructor(e){super(),this.process=e,this.errorCount=0;let r=this.process;r.on("error",n=>this.fireError(n)),r.on("close",()=>this.fireClose)}write(e){try{return typeof this.process.send=="function"&&this.process.send(e,void 0,void 0,r=>{r?(this.errorCount++,this.handleError(r,e)):this.errorCount=0}),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Oe.IPCMessageWriter=th;var rh=class extends en.AbstractMessageReader{constructor(e){super(),this.onData=new en.Emitter,e.on("close",()=>this.fireClose),e.on("error",r=>this.fireError(r)),e.on("message",r=>{this.onData.fire(r)})}listen(e){return this.onData.event(e)}};Oe.PortMessageReader=rh;var nh=class extends en.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.on("close",()=>this.fireClose()),e.on("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Oe.PortMessageWriter=nh;var To=class extends en.ReadableStreamMessageReader{constructor(e,r="utf-8"){super((0,Rs.default)().stream.asReadableStream(e),r)}};Oe.SocketMessageReader=To;var yo=class extends en.WriteableStreamMessageWriter{constructor(e,r){super((0,Rs.default)().stream.asWritableStream(e),r),this.socket=e}dispose(){super.dispose(),this.socket.destroy()}};Oe.SocketMessageWriter=yo;var fc=class extends en.ReadableStreamMessageReader{constructor(e,r){super((0,Rs.default)().stream.asReadableStream(e),r)}};Oe.StreamMessageReader=fc;var dc=class extends en.WriteableStreamMessageWriter{constructor(e,r){super((0,Rs.default)().stream.asWritableStream(e),r)}};Oe.StreamMessageWriter=dc;var H_=process.env.XDG_RUNTIME_DIR,oL=new Map([["linux",107],["darwin",103]]);function sL(){let t=(0,iL.randomBytes)(21).toString("hex");if(process.platform==="win32")return`\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`;let e;H_?e=q_.join(H_,`vscode-ipc-${t}.sock`):e=q_.join(nL.tmpdir(),`vscode-${t}.sock`);let r=oL.get(process.platform);return r!==void 0&&e.length>r&&(0,Rs.default)().console.warn(`WARNING: IPC handle "${e}" is longer than ${r} characters.`),e}Oe.generateRandomPipeName=sL;function aL(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,pc.createServer)(a=>{s.close(),r([new To(a,e),new yo(a,e)])});s.on("error",o),s.listen(t,()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Oe.createClientPipeTransport=aL;function lL(t,e="utf-8"){let r=(0,pc.createConnection)(t);return[new To(r,e),new yo(r,e)]}Oe.createServerPipeTransport=lL;function uL(t,e="utf-8"){let r,n=new Promise((i,o)=>{r=i});return new Promise((i,o)=>{let s=(0,pc.createServer)(a=>{s.close(),r([new To(a,e),new yo(a,e)])});s.on("error",o),s.listen(t,"127.0.0.1",()=>{s.removeListener("error",o),i({onConnected:()=>n})})})}Oe.createClientSocketTransport=uL;function cL(t,e="utf-8"){let r=(0,pc.createConnection)(t,"127.0.0.1");return[new To(r,e),new yo(r,e)]}Oe.createServerSocketTransport=cL;function fL(t){let e=t;return e.read!==void 0&&e.addListener!==void 0}function dL(t){let e=t;return e.write!==void 0&&e.addListener!==void 0}function pL(t,e,r,n){r||(r=en.NullLogger);let i=fL(t)?new fc(t):t,o=dL(e)?new dc(e):e;return en.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,en.createMessageConnection)(i,o,r,n)}Oe.createMessageConnection=pL});var ih=Z((fj,K_)=>{"use strict";K_.exports=_o()});var hc=Z((z_,mc)=>{(function(t){if(typeof mc=="object"&&typeof mc.exports=="object"){var e=t(require,z_);e!==void 0&&(mc.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlineCompletionContext=e.SelectedCompletionInfo=e.InlineCompletionTriggerKind=e.InlineCompletionList=e.InlineCompletionItem=e.StringValue=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(h){function x(E){return typeof E=="string"}h.is=x})(r||(e.DocumentUri=r={}));var n;(function(h){function x(E){return typeof E=="string"}h.is=x})(n||(e.URI=n={}));var i;(function(h){h.MIN_VALUE=-2147483648,h.MAX_VALUE=2147483647;function x(E){return typeof E=="number"&&h.MIN_VALUE<=E&&E<=h.MAX_VALUE}h.is=x})(i||(e.integer=i={}));var o;(function(h){h.MIN_VALUE=0,h.MAX_VALUE=2147483647;function x(E){return typeof E=="number"&&h.MIN_VALUE<=E&&E<=h.MAX_VALUE}h.is=x})(o||(e.uinteger=o={}));var s;(function(h){function x(T,p){return T===Number.MAX_VALUE&&(T=o.MAX_VALUE),p===Number.MAX_VALUE&&(p=o.MAX_VALUE),{line:T,character:p}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&C.uinteger(p.line)&&C.uinteger(p.character)}h.is=E})(s||(e.Position=s={}));var a;(function(h){function x(T,p,A,V){if(C.uinteger(T)&&C.uinteger(p)&&C.uinteger(A)&&C.uinteger(V))return{start:s.create(T,p),end:s.create(A,V)};if(s.is(T)&&s.is(p))return{start:T,end:p};throw new Error("Range#create called with invalid arguments[".concat(T,", ").concat(p,", ").concat(A,", ").concat(V,"]"))}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&s.is(p.start)&&s.is(p.end)}h.is=E})(a||(e.Range=a={}));var l;(function(h){function x(T,p){return{uri:T,range:p}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&a.is(p.range)&&(C.string(p.uri)||C.undefined(p.uri))}h.is=E})(l||(e.Location=l={}));var u;(function(h){function x(T,p,A,V){return{targetUri:T,targetRange:p,targetSelectionRange:A,originSelectionRange:V}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&a.is(p.targetRange)&&C.string(p.targetUri)&&a.is(p.targetSelectionRange)&&(a.is(p.originSelectionRange)||C.undefined(p.originSelectionRange))}h.is=E})(u||(e.LocationLink=u={}));var c;(function(h){function x(T,p,A,V){return{red:T,green:p,blue:A,alpha:V}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&C.numberRange(p.red,0,1)&&C.numberRange(p.green,0,1)&&C.numberRange(p.blue,0,1)&&C.numberRange(p.alpha,0,1)}h.is=E})(c||(e.Color=c={}));var f;(function(h){function x(T,p){return{range:T,color:p}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&a.is(p.range)&&c.is(p.color)}h.is=E})(f||(e.ColorInformation=f={}));var d;(function(h){function x(T,p,A){return{label:T,textEdit:p,additionalTextEdits:A}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&C.string(p.label)&&(C.undefined(p.textEdit)||M.is(p))&&(C.undefined(p.additionalTextEdits)||C.typedArray(p.additionalTextEdits,M.is))}h.is=E})(d||(e.ColorPresentation=d={}));var m;(function(h){h.Comment="comment",h.Imports="imports",h.Region="region"})(m||(e.FoldingRangeKind=m={}));var v;(function(h){function x(T,p,A,V,Te,St){var Ye={startLine:T,endLine:p};return C.defined(A)&&(Ye.startCharacter=A),C.defined(V)&&(Ye.endCharacter=V),C.defined(Te)&&(Ye.kind=Te),C.defined(St)&&(Ye.collapsedText=St),Ye}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&C.uinteger(p.startLine)&&C.uinteger(p.startLine)&&(C.undefined(p.startCharacter)||C.uinteger(p.startCharacter))&&(C.undefined(p.endCharacter)||C.uinteger(p.endCharacter))&&(C.undefined(p.kind)||C.string(p.kind))}h.is=E})(v||(e.FoldingRange=v={}));var N;(function(h){function x(T,p){return{location:T,message:p}}h.create=x;function E(T){var p=T;return C.defined(p)&&l.is(p.location)&&C.string(p.message)}h.is=E})(N||(e.DiagnosticRelatedInformation=N={}));var S;(function(h){h.Error=1,h.Warning=2,h.Information=3,h.Hint=4})(S||(e.DiagnosticSeverity=S={}));var O;(function(h){h.Unnecessary=1,h.Deprecated=2})(O||(e.DiagnosticTag=O={}));var y;(function(h){function x(E){var T=E;return C.objectLiteral(T)&&C.string(T.href)}h.is=x})(y||(e.CodeDescription=y={}));var g;(function(h){function x(T,p,A,V,Te,St){var Ye={range:T,message:p};return C.defined(A)&&(Ye.severity=A),C.defined(V)&&(Ye.code=V),C.defined(Te)&&(Ye.source=Te),C.defined(St)&&(Ye.relatedInformation=St),Ye}h.create=x;function E(T){var p,A=T;return C.defined(A)&&a.is(A.range)&&C.string(A.message)&&(C.number(A.severity)||C.undefined(A.severity))&&(C.integer(A.code)||C.string(A.code)||C.undefined(A.code))&&(C.undefined(A.codeDescription)||C.string((p=A.codeDescription)===null||p===void 0?void 0:p.href))&&(C.string(A.source)||C.undefined(A.source))&&(C.undefined(A.relatedInformation)||C.typedArray(A.relatedInformation,N.is))}h.is=E})(g||(e.Diagnostic=g={}));var I;(function(h){function x(T,p){for(var A=[],V=2;V<arguments.length;V++)A[V-2]=arguments[V];var Te={title:T,command:p};return C.defined(A)&&A.length>0&&(Te.arguments=A),Te}h.create=x;function E(T){var p=T;return C.defined(p)&&C.string(p.title)&&C.string(p.command)}h.is=E})(I||(e.Command=I={}));var M;(function(h){function x(A,V){return{range:A,newText:V}}h.replace=x;function E(A,V){return{range:{start:A,end:A},newText:V}}h.insert=E;function T(A){return{range:A,newText:""}}h.del=T;function p(A){var V=A;return C.objectLiteral(V)&&C.string(V.newText)&&a.is(V.range)}h.is=p})(M||(e.TextEdit=M={}));var J;(function(h){function x(T,p,A){var V={label:T};return p!==void 0&&(V.needsConfirmation=p),A!==void 0&&(V.description=A),V}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&C.string(p.label)&&(C.boolean(p.needsConfirmation)||p.needsConfirmation===void 0)&&(C.string(p.description)||p.description===void 0)}h.is=E})(J||(e.ChangeAnnotation=J={}));var ce;(function(h){function x(E){var T=E;return C.string(T)}h.is=x})(ce||(e.ChangeAnnotationIdentifier=ce={}));var _e;(function(h){function x(A,V,Te){return{range:A,newText:V,annotationId:Te}}h.replace=x;function E(A,V,Te){return{range:{start:A,end:A},newText:V,annotationId:Te}}h.insert=E;function T(A,V){return{range:A,newText:"",annotationId:V}}h.del=T;function p(A){var V=A;return M.is(V)&&(J.is(V.annotationId)||ce.is(V.annotationId))}h.is=p})(_e||(e.AnnotatedTextEdit=_e={}));var Ge;(function(h){function x(T,p){return{textDocument:T,edits:p}}h.create=x;function E(T){var p=T;return C.defined(p)&&le.is(p.textDocument)&&Array.isArray(p.edits)}h.is=E})(Ge||(e.TextDocumentEdit=Ge={}));var Ce;(function(h){function x(T,p,A){var V={kind:"create",uri:T};return p!==void 0&&(p.overwrite!==void 0||p.ignoreIfExists!==void 0)&&(V.options=p),A!==void 0&&(V.annotationId=A),V}h.create=x;function E(T){var p=T;return p&&p.kind==="create"&&C.string(p.uri)&&(p.options===void 0||(p.options.overwrite===void 0||C.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||C.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ce.is(p.annotationId))}h.is=E})(Ce||(e.CreateFile=Ce={}));var j;(function(h){function x(T,p,A,V){var Te={kind:"rename",oldUri:T,newUri:p};return A!==void 0&&(A.overwrite!==void 0||A.ignoreIfExists!==void 0)&&(Te.options=A),V!==void 0&&(Te.annotationId=V),Te}h.create=x;function E(T){var p=T;return p&&p.kind==="rename"&&C.string(p.oldUri)&&C.string(p.newUri)&&(p.options===void 0||(p.options.overwrite===void 0||C.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||C.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ce.is(p.annotationId))}h.is=E})(j||(e.RenameFile=j={}));var k;(function(h){function x(T,p,A){var V={kind:"delete",uri:T};return p!==void 0&&(p.recursive!==void 0||p.ignoreIfNotExists!==void 0)&&(V.options=p),A!==void 0&&(V.annotationId=A),V}h.create=x;function E(T){var p=T;return p&&p.kind==="delete"&&C.string(p.uri)&&(p.options===void 0||(p.options.recursive===void 0||C.boolean(p.options.recursive))&&(p.options.ignoreIfNotExists===void 0||C.boolean(p.options.ignoreIfNotExists)))&&(p.annotationId===void 0||ce.is(p.annotationId))}h.is=E})(k||(e.DeleteFile=k={}));var B;(function(h){function x(E){var T=E;return T&&(T.changes!==void 0||T.documentChanges!==void 0)&&(T.documentChanges===void 0||T.documentChanges.every(function(p){return C.string(p.kind)?Ce.is(p)||j.is(p)||k.is(p):Ge.is(p)}))}h.is=x})(B||(e.WorkspaceEdit=B={}));var G=function(){function h(x,E){this.edits=x,this.changeAnnotations=E}return h.prototype.insert=function(x,E,T){var p,A;if(T===void 0?p=M.insert(x,E):ce.is(T)?(A=T,p=_e.insert(x,E,T)):(this.assertChangeAnnotations(this.changeAnnotations),A=this.changeAnnotations.manage(T),p=_e.insert(x,E,A)),this.edits.push(p),A!==void 0)return A},h.prototype.replace=function(x,E,T){var p,A;if(T===void 0?p=M.replace(x,E):ce.is(T)?(A=T,p=_e.replace(x,E,T)):(this.assertChangeAnnotations(this.changeAnnotations),A=this.changeAnnotations.manage(T),p=_e.replace(x,E,A)),this.edits.push(p),A!==void 0)return A},h.prototype.delete=function(x,E){var T,p;if(E===void 0?T=M.del(x):ce.is(E)?(p=E,T=_e.del(x,E)):(this.assertChangeAnnotations(this.changeAnnotations),p=this.changeAnnotations.manage(E),T=_e.del(x,p)),this.edits.push(T),p!==void 0)return p},h.prototype.add=function(x){this.edits.push(x)},h.prototype.all=function(){return this.edits},h.prototype.clear=function(){this.edits.splice(0,this.edits.length)},h.prototype.assertChangeAnnotations=function(x){if(x===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},h}(),ie=function(){function h(x){this._annotations=x===void 0?Object.create(null):x,this._counter=0,this._size=0}return h.prototype.all=function(){return this._annotations},Object.defineProperty(h.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),h.prototype.manage=function(x,E){var T;if(ce.is(x)?T=x:(T=this.nextId(),E=x),this._annotations[T]!==void 0)throw new Error("Id ".concat(T," is already in use."));if(E===void 0)throw new Error("No annotation provided for id ".concat(T));return this._annotations[T]=E,this._size++,T},h.prototype.nextId=function(){return this._counter++,this._counter.toString()},h}(),z=function(){function h(x){var E=this;this._textEditChanges=Object.create(null),x!==void 0?(this._workspaceEdit=x,x.documentChanges?(this._changeAnnotations=new ie(x.changeAnnotations),x.changeAnnotations=this._changeAnnotations.all(),x.documentChanges.forEach(function(T){if(Ge.is(T)){var p=new G(T.edits,E._changeAnnotations);E._textEditChanges[T.textDocument.uri]=p}})):x.changes&&Object.keys(x.changes).forEach(function(T){var p=new G(x.changes[T]);E._textEditChanges[T]=p})):this._workspaceEdit={}}return Object.defineProperty(h.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),h.prototype.getTextEditChange=function(x){if(le.is(x)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var E={uri:x.uri,version:x.version},T=this._textEditChanges[E.uri];if(!T){var p=[],A={textDocument:E,edits:p};this._workspaceEdit.documentChanges.push(A),T=new G(p,this._changeAnnotations),this._textEditChanges[E.uri]=T}return T}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var T=this._textEditChanges[x];if(!T){var p=[];this._workspaceEdit.changes[x]=p,T=new G(p),this._textEditChanges[x]=T}return T}},h.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ie,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},h.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},h.prototype.createFile=function(x,E,T){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;J.is(E)||ce.is(E)?p=E:T=E;var A,V;if(p===void 0?A=Ce.create(x,T):(V=ce.is(p)?p:this._changeAnnotations.manage(p),A=Ce.create(x,T,V)),this._workspaceEdit.documentChanges.push(A),V!==void 0)return V},h.prototype.renameFile=function(x,E,T,p){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var A;J.is(T)||ce.is(T)?A=T:p=T;var V,Te;if(A===void 0?V=j.create(x,E,p):(Te=ce.is(A)?A:this._changeAnnotations.manage(A),V=j.create(x,E,p,Te)),this._workspaceEdit.documentChanges.push(V),Te!==void 0)return Te},h.prototype.deleteFile=function(x,E,T){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;J.is(E)||ce.is(E)?p=E:T=E;var A,V;if(p===void 0?A=k.create(x,T):(V=ce.is(p)?p:this._changeAnnotations.manage(p),A=k.create(x,T,V)),this._workspaceEdit.documentChanges.push(A),V!==void 0)return V},h}();e.WorkspaceChange=z;var $;(function(h){function x(T){return{uri:T}}h.create=x;function E(T){var p=T;return C.defined(p)&&C.string(p.uri)}h.is=E})($||(e.TextDocumentIdentifier=$={}));var w;(function(h){function x(T,p){return{uri:T,version:p}}h.create=x;function E(T){var p=T;return C.defined(p)&&C.string(p.uri)&&C.integer(p.version)}h.is=E})(w||(e.VersionedTextDocumentIdentifier=w={}));var le;(function(h){function x(T,p){return{uri:T,version:p}}h.create=x;function E(T){var p=T;return C.defined(p)&&C.string(p.uri)&&(p.version===null||C.integer(p.version))}h.is=E})(le||(e.OptionalVersionedTextDocumentIdentifier=le={}));var me;(function(h){function x(T,p,A,V){return{uri:T,languageId:p,version:A,text:V}}h.create=x;function E(T){var p=T;return C.defined(p)&&C.string(p.uri)&&C.string(p.languageId)&&C.integer(p.version)&&C.string(p.text)}h.is=E})(me||(e.TextDocumentItem=me={}));var Ae;(function(h){h.PlainText="plaintext",h.Markdown="markdown";function x(E){var T=E;return T===h.PlainText||T===h.Markdown}h.is=x})(Ae||(e.MarkupKind=Ae={}));var sr;(function(h){function x(E){var T=E;return C.objectLiteral(E)&&Ae.is(T.kind)&&C.string(T.value)}h.is=x})(sr||(e.MarkupContent=sr={}));var Ei;(function(h){h.Text=1,h.Method=2,h.Function=3,h.Constructor=4,h.Field=5,h.Variable=6,h.Class=7,h.Interface=8,h.Module=9,h.Property=10,h.Unit=11,h.Value=12,h.Enum=13,h.Keyword=14,h.Snippet=15,h.Color=16,h.File=17,h.Reference=18,h.Folder=19,h.EnumMember=20,h.Constant=21,h.Struct=22,h.Event=23,h.Operator=24,h.TypeParameter=25})(Ei||(e.CompletionItemKind=Ei={}));var je;(function(h){h.PlainText=1,h.Snippet=2})(je||(e.InsertTextFormat=je={}));var Yt;(function(h){h.Deprecated=1})(Yt||(e.CompletionItemTag=Yt={}));var ti;(function(h){function x(T,p,A){return{newText:T,insert:p,replace:A}}h.create=x;function E(T){var p=T;return p&&C.string(p.newText)&&a.is(p.insert)&&a.is(p.replace)}h.is=E})(ti||(e.InsertReplaceEdit=ti={}));var ht;(function(h){h.asIs=1,h.adjustIndentation=2})(ht||(e.InsertTextMode=ht={}));var Xt;(function(h){function x(E){var T=E;return T&&(C.string(T.detail)||T.detail===void 0)&&(C.string(T.description)||T.description===void 0)}h.is=x})(Xt||(e.CompletionItemLabelDetails=Xt={}));var wt;(function(h){function x(E){return{label:E}}h.create=x})(wt||(e.CompletionItem=wt={}));var $t;(function(h){function x(E,T){return{items:E||[],isIncomplete:!!T}}h.create=x})($t||(e.CompletionList=$t={}));var gt;(function(h){function x(T){return T.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}h.fromPlainText=x;function E(T){var p=T;return C.string(p)||C.objectLiteral(p)&&C.string(p.language)&&C.string(p.value)}h.is=E})(gt||(e.MarkedString=gt={}));var Tt;(function(h){function x(E){var T=E;return!!T&&C.objectLiteral(T)&&(sr.is(T.contents)||gt.is(T.contents)||C.typedArray(T.contents,gt.is))&&(E.range===void 0||a.is(E.range))}h.is=x})(Tt||(e.Hover=Tt={}));var mr;(function(h){function x(E,T){return T?{label:E,documentation:T}:{label:E}}h.create=x})(mr||(e.ParameterInformation=mr={}));var Or;(function(h){function x(E,T){for(var p=[],A=2;A<arguments.length;A++)p[A-2]=arguments[A];var V={label:E};return C.defined(T)&&(V.documentation=T),C.defined(p)?V.parameters=p:V.parameters=[],V}h.create=x})(Or||(e.SignatureInformation=Or={}));var Jr;(function(h){h.Text=1,h.Read=2,h.Write=3})(Jr||(e.DocumentHighlightKind=Jr={}));var ri;(function(h){function x(E,T){var p={range:E};return C.number(T)&&(p.kind=T),p}h.create=x})(ri||(e.DocumentHighlight=ri={}));var Oi;(function(h){h.File=1,h.Module=2,h.Namespace=3,h.Package=4,h.Class=5,h.Method=6,h.Property=7,h.Field=8,h.Constructor=9,h.Enum=10,h.Interface=11,h.Function=12,h.Variable=13,h.Constant=14,h.String=15,h.Number=16,h.Boolean=17,h.Array=18,h.Object=19,h.Key=20,h.Null=21,h.EnumMember=22,h.Struct=23,h.Event=24,h.Operator=25,h.TypeParameter=26})(Oi||(e.SymbolKind=Oi={}));var cs;(function(h){h.Deprecated=1})(cs||(e.SymbolTag=cs={}));var Zr;(function(h){function x(E,T,p,A,V){var Te={name:E,kind:T,location:{uri:A,range:p}};return V&&(Te.containerName=V),Te}h.create=x})(Zr||(e.SymbolInformation=Zr={}));var wn;(function(h){function x(E,T,p,A){return A!==void 0?{name:E,kind:T,location:{uri:p,range:A}}:{name:E,kind:T,location:{uri:p}}}h.create=x})(wn||(e.WorkspaceSymbol=wn={}));var fs;(function(h){function x(T,p,A,V,Te,St){var Ye={name:T,detail:p,kind:A,range:V,selectionRange:Te};return St!==void 0&&(Ye.children=St),Ye}h.create=x;function E(T){var p=T;return p&&C.string(p.name)&&C.number(p.kind)&&a.is(p.range)&&a.is(p.selectionRange)&&(p.detail===void 0||C.string(p.detail))&&(p.deprecated===void 0||C.boolean(p.deprecated))&&(p.children===void 0||Array.isArray(p.children))&&(p.tags===void 0||Array.isArray(p.tags))}h.is=E})(fs||(e.DocumentSymbol=fs={}));var ds;(function(h){h.Empty="",h.QuickFix="quickfix",h.Refactor="refactor",h.RefactorExtract="refactor.extract",h.RefactorInline="refactor.inline",h.RefactorRewrite="refactor.rewrite",h.Source="source",h.SourceOrganizeImports="source.organizeImports",h.SourceFixAll="source.fixAll"})(ds||(e.CodeActionKind=ds={}));var wr;(function(h){h.Invoked=1,h.Automatic=2})(wr||(e.CodeActionTriggerKind=wr={}));var D;(function(h){function x(T,p,A){var V={diagnostics:T};return p!=null&&(V.only=p),A!=null&&(V.triggerKind=A),V}h.create=x;function E(T){var p=T;return C.defined(p)&&C.typedArray(p.diagnostics,g.is)&&(p.only===void 0||C.typedArray(p.only,C.string))&&(p.triggerKind===void 0||p.triggerKind===wr.Invoked||p.triggerKind===wr.Automatic)}h.is=E})(D||(e.CodeActionContext=D={}));var F;(function(h){function x(T,p,A){var V={title:T},Te=!0;return typeof p=="string"?(Te=!1,V.kind=p):I.is(p)?V.command=p:V.edit=p,Te&&A!==void 0&&(V.kind=A),V}h.create=x;function E(T){var p=T;return p&&C.string(p.title)&&(p.diagnostics===void 0||C.typedArray(p.diagnostics,g.is))&&(p.kind===void 0||C.string(p.kind))&&(p.edit!==void 0||p.command!==void 0)&&(p.command===void 0||I.is(p.command))&&(p.isPreferred===void 0||C.boolean(p.isPreferred))&&(p.edit===void 0||B.is(p.edit))}h.is=E})(F||(e.CodeAction=F={}));var q;(function(h){function x(T,p){var A={range:T};return C.defined(p)&&(A.data=p),A}h.create=x;function E(T){var p=T;return C.defined(p)&&a.is(p.range)&&(C.undefined(p.command)||I.is(p.command))}h.is=E})(q||(e.CodeLens=q={}));var Y;(function(h){function x(T,p){return{tabSize:T,insertSpaces:p}}h.create=x;function E(T){var p=T;return C.defined(p)&&C.uinteger(p.tabSize)&&C.boolean(p.insertSpaces)}h.is=E})(Y||(e.FormattingOptions=Y={}));var ee;(function(h){function x(T,p,A){return{range:T,target:p,data:A}}h.create=x;function E(T){var p=T;return C.defined(p)&&a.is(p.range)&&(C.undefined(p.target)||C.string(p.target))}h.is=E})(ee||(e.DocumentLink=ee={}));var R;(function(h){function x(T,p){return{range:T,parent:p}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&a.is(p.range)&&(p.parent===void 0||h.is(p.parent))}h.is=E})(R||(e.SelectionRange=R={}));var L;(function(h){h.namespace="namespace",h.type="type",h.class="class",h.enum="enum",h.interface="interface",h.struct="struct",h.typeParameter="typeParameter",h.parameter="parameter",h.variable="variable",h.property="property",h.enumMember="enumMember",h.event="event",h.function="function",h.method="method",h.macro="macro",h.keyword="keyword",h.modifier="modifier",h.comment="comment",h.string="string",h.number="number",h.regexp="regexp",h.operator="operator",h.decorator="decorator"})(L||(e.SemanticTokenTypes=L={}));var U;(function(h){h.declaration="declaration",h.definition="definition",h.readonly="readonly",h.static="static",h.deprecated="deprecated",h.abstract="abstract",h.async="async",h.modification="modification",h.documentation="documentation",h.defaultLibrary="defaultLibrary"})(U||(e.SemanticTokenModifiers=U={}));var W;(function(h){function x(E){var T=E;return C.objectLiteral(T)&&(T.resultId===void 0||typeof T.resultId=="string")&&Array.isArray(T.data)&&(T.data.length===0||typeof T.data[0]=="number")}h.is=x})(W||(e.SemanticTokens=W={}));var oe;(function(h){function x(T,p){return{range:T,text:p}}h.create=x;function E(T){var p=T;return p!=null&&a.is(p.range)&&C.string(p.text)}h.is=E})(oe||(e.InlineValueText=oe={}));var ne;(function(h){function x(T,p,A){return{range:T,variableName:p,caseSensitiveLookup:A}}h.create=x;function E(T){var p=T;return p!=null&&a.is(p.range)&&C.boolean(p.caseSensitiveLookup)&&(C.string(p.variableName)||p.variableName===void 0)}h.is=E})(ne||(e.InlineValueVariableLookup=ne={}));var xe;(function(h){function x(T,p){return{range:T,expression:p}}h.create=x;function E(T){var p=T;return p!=null&&a.is(p.range)&&(C.string(p.expression)||p.expression===void 0)}h.is=E})(xe||(e.InlineValueEvaluatableExpression=xe={}));var qe;(function(h){function x(T,p){return{frameId:T,stoppedLocation:p}}h.create=x;function E(T){var p=T;return C.defined(p)&&a.is(T.stoppedLocation)}h.is=E})(qe||(e.InlineValueContext=qe={}));var Pt;(function(h){h.Type=1,h.Parameter=2;function x(E){return E===1||E===2}h.is=x})(Pt||(e.InlayHintKind=Pt={}));var be;(function(h){function x(T){return{value:T}}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&(p.tooltip===void 0||C.string(p.tooltip)||sr.is(p.tooltip))&&(p.location===void 0||l.is(p.location))&&(p.command===void 0||I.is(p.command))}h.is=E})(be||(e.InlayHintLabelPart=be={}));var lt;(function(h){function x(T,p,A){var V={position:T,label:p};return A!==void 0&&(V.kind=A),V}h.create=x;function E(T){var p=T;return C.objectLiteral(p)&&s.is(p.position)&&(C.string(p.label)||C.typedArray(p.label,be.is))&&(p.kind===void 0||Pt.is(p.kind))&&p.textEdits===void 0||C.typedArray(p.textEdits,M.is)&&(p.tooltip===void 0||C.string(p.tooltip)||sr.is(p.tooltip))&&(p.paddingLeft===void 0||C.boolean(p.paddingLeft))&&(p.paddingRight===void 0||C.boolean(p.paddingRight))}h.is=E})(lt||(e.InlayHint=lt={}));var Ue;(function(h){function x(E){return{kind:"snippet",value:E}}h.createSnippet=x})(Ue||(e.StringValue=Ue={}));var ut;(function(h){function x(E,T,p,A){return{insertText:E,filterText:T,range:p,command:A}}h.create=x})(ut||(e.InlineCompletionItem=ut={}));var Mt;(function(h){function x(E){return{items:E}}h.create=x})(Mt||(e.InlineCompletionList=Mt={}));var Gu;(function(h){h.Invoked=0,h.Automatic=1})(Gu||(e.InlineCompletionTriggerKind=Gu={}));var u_;(function(h){function x(E,T){return{range:E,text:T}}h.create=x})(u_||(e.SelectedCompletionInfo=u_={}));var c_;(function(h){function x(E,T){return{triggerKind:E,selectedCompletionInfo:T}}h.create=x})(c_||(e.InlineCompletionContext=c_={}));var f_;(function(h){function x(E){var T=E;return C.objectLiteral(T)&&n.is(T.uri)&&C.string(T.name)}h.is=x})(f_||(e.WorkspaceFolder=f_={})),e.EOL=[`
`,`\r
`,"\r"];var d_;(function(h){function x(A,V,Te,St){return new vb(A,V,Te,St)}h.create=x;function E(A){var V=A;return!!(C.defined(V)&&C.string(V.uri)&&(C.undefined(V.languageId)||C.string(V.languageId))&&C.uinteger(V.lineCount)&&C.func(V.getText)&&C.func(V.positionAt)&&C.func(V.offsetAt))}h.is=E;function T(A,V){for(var Te=A.getText(),St=p(V,function(ps,ju){var p_=ps.range.start.line-ju.range.start.line;return p_===0?ps.range.start.character-ju.range.start.character:p_}),Ye=Te.length,Tn=St.length-1;Tn>=0;Tn--){var yn=St[Tn],ni=A.offsetAt(yn.range.start),Ee=A.offsetAt(yn.range.end);if(Ee<=Ye)Te=Te.substring(0,ni)+yn.newText+Te.substring(Ee,Te.length);else throw new Error("Overlapping edit");Ye=ni}return Te}h.applyEdits=T;function p(A,V){if(A.length<=1)return A;var Te=A.length/2|0,St=A.slice(0,Te),Ye=A.slice(Te);p(St,V),p(Ye,V);for(var Tn=0,yn=0,ni=0;Tn<St.length&&yn<Ye.length;){var Ee=V(St[Tn],Ye[yn]);Ee<=0?A[ni++]=St[Tn++]:A[ni++]=Ye[yn++]}for(;Tn<St.length;)A[ni++]=St[Tn++];for(;yn<Ye.length;)A[ni++]=Ye[yn++];return A}})(d_||(e.TextDocument=d_={}));var vb=function(){function h(x,E,T,p){this._uri=x,this._languageId=E,this._version=T,this._content=p,this._lineOffsets=void 0}return Object.defineProperty(h.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),h.prototype.getText=function(x){if(x){var E=this.offsetAt(x.start),T=this.offsetAt(x.end);return this._content.substring(E,T)}return this._content},h.prototype.update=function(x,E){this._content=x.text,this._version=E,this._lineOffsets=void 0},h.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var x=[],E=this._content,T=!0,p=0;p<E.length;p++){T&&(x.push(p),T=!1);var A=E.charAt(p);T=A==="\r"||A===`
`,A==="\r"&&p+1<E.length&&E.charAt(p+1)===`
`&&p++}T&&E.length>0&&x.push(E.length),this._lineOffsets=x}return this._lineOffsets},h.prototype.positionAt=function(x){x=Math.max(Math.min(x,this._content.length),0);var E=this.getLineOffsets(),T=0,p=E.length;if(p===0)return s.create(0,x);for(;T<p;){var A=Math.floor((T+p)/2);E[A]>x?p=A:T=A+1}var V=T-1;return s.create(V,x-E[V])},h.prototype.offsetAt=function(x){var E=this.getLineOffsets();if(x.line>=E.length)return this._content.length;if(x.line<0)return 0;var T=E[x.line],p=x.line+1<E.length?E[x.line+1]:this._content.length;return Math.max(Math.min(T+x.character,p),T)},Object.defineProperty(h.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),h}(),C;(function(h){var x=Object.prototype.toString;function E(Ee){return typeof Ee!="undefined"}h.defined=E;function T(Ee){return typeof Ee=="undefined"}h.undefined=T;function p(Ee){return Ee===!0||Ee===!1}h.boolean=p;function A(Ee){return x.call(Ee)==="[object String]"}h.string=A;function V(Ee){return x.call(Ee)==="[object Number]"}h.number=V;function Te(Ee,ps,ju){return x.call(Ee)==="[object Number]"&&ps<=Ee&&Ee<=ju}h.numberRange=Te;function St(Ee){return x.call(Ee)==="[object Number]"&&-2147483648<=Ee&&Ee<=2147483647}h.integer=St;function Ye(Ee){return x.call(Ee)==="[object Number]"&&0<=Ee&&Ee<=2147483647}h.uinteger=Ye;function Tn(Ee){return x.call(Ee)==="[object Function]"}h.func=Tn;function yn(Ee){return Ee!==null&&typeof Ee=="object"}h.objectLiteral=yn;function ni(Ee,ps){return Array.isArray(Ee)&&Ee.every(ps)}h.typedArray=ni})(C||(C={}))})});var ct=Z(Pr=>{"use strict";Object.defineProperty(Pr,"__esModule",{value:!0});Pr.ProtocolNotificationType=Pr.ProtocolNotificationType0=Pr.ProtocolRequestType=Pr.ProtocolRequestType0=Pr.RegistrationType=Pr.MessageDirection=void 0;var xs=_o(),Y_;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Y_||(Pr.MessageDirection=Y_={}));var oh=class{constructor(e){this.method=e}};Pr.RegistrationType=oh;var sh=class extends xs.RequestType0{constructor(e){super(e)}};Pr.ProtocolRequestType0=sh;var ah=class extends xs.RequestType{constructor(e){super(e,xs.ParameterStructures.byName)}};Pr.ProtocolRequestType=ah;var lh=class extends xs.NotificationType0{constructor(e){super(e)}};Pr.ProtocolNotificationType0=lh;var uh=class extends xs.NotificationType{constructor(e){super(e,xs.ParameterStructures.byName)}};Pr.ProtocolNotificationType=uh});var gc=Z(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.objectLiteral=jt.typedArray=jt.stringArray=jt.array=jt.func=jt.error=jt.number=jt.string=jt.boolean=void 0;function mL(t){return t===!0||t===!1}jt.boolean=mL;function X_(t){return typeof t=="string"||t instanceof String}jt.string=X_;function hL(t){return typeof t=="number"||t instanceof Number}jt.number=hL;function gL(t){return t instanceof Error}jt.error=gL;function TL(t){return typeof t=="function"}jt.func=TL;function J_(t){return Array.isArray(t)}jt.array=J_;function yL(t){return J_(t)&&t.every(e=>X_(e))}jt.stringArray=yL;function _L(t,e){return Array.isArray(t)&&t.every(e)}jt.typedArray=_L;function vL(t){return t!==null&&typeof t=="object"}jt.objectLiteral=vL});var ev=Z(Tc=>{"use strict";Object.defineProperty(Tc,"__esModule",{value:!0});Tc.ImplementationRequest=void 0;var Z_=ct(),Q_;(function(t){t.method="textDocument/implementation",t.messageDirection=Z_.MessageDirection.clientToServer,t.type=new Z_.ProtocolRequestType(t.method)})(Q_||(Tc.ImplementationRequest=Q_={}))});var nv=Z(yc=>{"use strict";Object.defineProperty(yc,"__esModule",{value:!0});yc.TypeDefinitionRequest=void 0;var tv=ct(),rv;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=tv.MessageDirection.clientToServer,t.type=new tv.ProtocolRequestType(t.method)})(rv||(yc.TypeDefinitionRequest=rv={}))});var sv=Z(Ns=>{"use strict";Object.defineProperty(Ns,"__esModule",{value:!0});Ns.DidChangeWorkspaceFoldersNotification=Ns.WorkspaceFoldersRequest=void 0;var _c=ct(),iv;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=_c.MessageDirection.serverToClient,t.type=new _c.ProtocolRequestType0(t.method)})(iv||(Ns.WorkspaceFoldersRequest=iv={}));var ov;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=_c.MessageDirection.clientToServer,t.type=new _c.ProtocolNotificationType(t.method)})(ov||(Ns.DidChangeWorkspaceFoldersNotification=ov={}))});var uv=Z(vc=>{"use strict";Object.defineProperty(vc,"__esModule",{value:!0});vc.ConfigurationRequest=void 0;var av=ct(),lv;(function(t){t.method="workspace/configuration",t.messageDirection=av.MessageDirection.serverToClient,t.type=new av.ProtocolRequestType(t.method)})(lv||(vc.ConfigurationRequest=lv={}))});var dv=Z(Es=>{"use strict";Object.defineProperty(Es,"__esModule",{value:!0});Es.ColorPresentationRequest=Es.DocumentColorRequest=void 0;var Rc=ct(),cv;(function(t){t.method="textDocument/documentColor",t.messageDirection=Rc.MessageDirection.clientToServer,t.type=new Rc.ProtocolRequestType(t.method)})(cv||(Es.DocumentColorRequest=cv={}));var fv;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Rc.MessageDirection.clientToServer,t.type=new Rc.ProtocolRequestType(t.method)})(fv||(Es.ColorPresentationRequest=fv={}))});var hv=Z(Os=>{"use strict";Object.defineProperty(Os,"__esModule",{value:!0});Os.FoldingRangeRefreshRequest=Os.FoldingRangeRequest=void 0;var xc=ct(),pv;(function(t){t.method="textDocument/foldingRange",t.messageDirection=xc.MessageDirection.clientToServer,t.type=new xc.ProtocolRequestType(t.method)})(pv||(Os.FoldingRangeRequest=pv={}));var mv;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=xc.MessageDirection.serverToClient,t.type=new xc.ProtocolRequestType0(t.method)})(mv||(Os.FoldingRangeRefreshRequest=mv={}))});var yv=Z(Nc=>{"use strict";Object.defineProperty(Nc,"__esModule",{value:!0});Nc.DeclarationRequest=void 0;var gv=ct(),Tv;(function(t){t.method="textDocument/declaration",t.messageDirection=gv.MessageDirection.clientToServer,t.type=new gv.ProtocolRequestType(t.method)})(Tv||(Nc.DeclarationRequest=Tv={}))});var Rv=Z(Ec=>{"use strict";Object.defineProperty(Ec,"__esModule",{value:!0});Ec.SelectionRangeRequest=void 0;var _v=ct(),vv;(function(t){t.method="textDocument/selectionRange",t.messageDirection=_v.MessageDirection.clientToServer,t.type=new _v.ProtocolRequestType(t.method)})(vv||(Ec.SelectionRangeRequest=vv={}))});var Ov=Z(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.WorkDoneProgressCancelNotification=Li.WorkDoneProgressCreateRequest=Li.WorkDoneProgress=void 0;var RL=_o(),Oc=ct(),xv;(function(t){t.type=new RL.ProgressType;function e(r){return r===t.type}t.is=e})(xv||(Li.WorkDoneProgress=xv={}));var Nv;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=Oc.MessageDirection.serverToClient,t.type=new Oc.ProtocolRequestType(t.method)})(Nv||(Li.WorkDoneProgressCreateRequest=Nv={}));var Ev;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=Oc.MessageDirection.clientToServer,t.type=new Oc.ProtocolNotificationType(t.method)})(Ev||(Li.WorkDoneProgressCancelNotification=Ev={}))});var Dv=Z(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.CallHierarchyOutgoingCallsRequest=ki.CallHierarchyIncomingCallsRequest=ki.CallHierarchyPrepareRequest=void 0;var Is=ct(),Iv;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Is.MessageDirection.clientToServer,t.type=new Is.ProtocolRequestType(t.method)})(Iv||(ki.CallHierarchyPrepareRequest=Iv={}));var Sv;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Is.MessageDirection.clientToServer,t.type=new Is.ProtocolRequestType(t.method)})(Sv||(ki.CallHierarchyIncomingCallsRequest=Sv={}));var Av;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Is.MessageDirection.clientToServer,t.type=new Is.ProtocolRequestType(t.method)})(Av||(ki.CallHierarchyOutgoingCallsRequest=Av={}))});var $v=Z(Mr=>{"use strict";Object.defineProperty(Mr,"__esModule",{value:!0});Mr.SemanticTokensRefreshRequest=Mr.SemanticTokensRangeRequest=Mr.SemanticTokensDeltaRequest=Mr.SemanticTokensRequest=Mr.SemanticTokensRegistrationType=Mr.TokenFormat=void 0;var oi=ct(),Cv;(function(t){t.Relative="relative"})(Cv||(Mr.TokenFormat=Cv={}));var ol;(function(t){t.method="textDocument/semanticTokens",t.type=new oi.RegistrationType(t.method)})(ol||(Mr.SemanticTokensRegistrationType=ol={}));var bv;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=oi.MessageDirection.clientToServer,t.type=new oi.ProtocolRequestType(t.method),t.registrationMethod=ol.method})(bv||(Mr.SemanticTokensRequest=bv={}));var Lv;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=oi.MessageDirection.clientToServer,t.type=new oi.ProtocolRequestType(t.method),t.registrationMethod=ol.method})(Lv||(Mr.SemanticTokensDeltaRequest=Lv={}));var kv;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=oi.MessageDirection.clientToServer,t.type=new oi.ProtocolRequestType(t.method),t.registrationMethod=ol.method})(kv||(Mr.SemanticTokensRangeRequest=kv={}));var wv;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=oi.MessageDirection.serverToClient,t.type=new oi.ProtocolRequestType0(t.method)})(wv||(Mr.SemanticTokensRefreshRequest=wv={}))});var Fv=Z(Ic=>{"use strict";Object.defineProperty(Ic,"__esModule",{value:!0});Ic.ShowDocumentRequest=void 0;var Pv=ct(),Mv;(function(t){t.method="window/showDocument",t.messageDirection=Pv.MessageDirection.serverToClient,t.type=new Pv.ProtocolRequestType(t.method)})(Mv||(Ic.ShowDocumentRequest=Mv={}))});var Wv=Z(Sc=>{"use strict";Object.defineProperty(Sc,"__esModule",{value:!0});Sc.LinkedEditingRangeRequest=void 0;var Uv=ct(),Bv;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=Uv.MessageDirection.clientToServer,t.type=new Uv.ProtocolRequestType(t.method)})(Bv||(Sc.LinkedEditingRangeRequest=Bv={}))});var Yv=Z(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.WillDeleteFilesRequest=Tr.DidDeleteFilesNotification=Tr.DidRenameFilesNotification=Tr.WillRenameFilesRequest=Tr.DidCreateFilesNotification=Tr.WillCreateFilesRequest=Tr.FileOperationPatternKind=void 0;var on=ct(),Vv;(function(t){t.file="file",t.folder="folder"})(Vv||(Tr.FileOperationPatternKind=Vv={}));var Gv;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolRequestType(t.method)})(Gv||(Tr.WillCreateFilesRequest=Gv={}));var jv;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method)})(jv||(Tr.DidCreateFilesNotification=jv={}));var qv;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolRequestType(t.method)})(qv||(Tr.WillRenameFilesRequest=qv={}));var Hv;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method)})(Hv||(Tr.DidRenameFilesNotification=Hv={}));var Kv;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method)})(Kv||(Tr.DidDeleteFilesNotification=Kv={}));var zv;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolRequestType(t.method)})(zv||(Tr.WillDeleteFilesRequest=zv={}))});var eR=Z(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.MonikerRequest=wi.MonikerKind=wi.UniquenessLevel=void 0;var Xv=ct(),Jv;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Jv||(wi.UniquenessLevel=Jv={}));var Zv;(function(t){t.$import="import",t.$export="export",t.local="local"})(Zv||(wi.MonikerKind=Zv={}));var Qv;(function(t){t.method="textDocument/moniker",t.messageDirection=Xv.MessageDirection.clientToServer,t.type=new Xv.ProtocolRequestType(t.method)})(Qv||(wi.MonikerRequest=Qv={}))});var iR=Z($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.TypeHierarchySubtypesRequest=$i.TypeHierarchySupertypesRequest=$i.TypeHierarchyPrepareRequest=void 0;var Ss=ct(),tR;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Ss.MessageDirection.clientToServer,t.type=new Ss.ProtocolRequestType(t.method)})(tR||($i.TypeHierarchyPrepareRequest=tR={}));var rR;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Ss.MessageDirection.clientToServer,t.type=new Ss.ProtocolRequestType(t.method)})(rR||($i.TypeHierarchySupertypesRequest=rR={}));var nR;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Ss.MessageDirection.clientToServer,t.type=new Ss.ProtocolRequestType(t.method)})(nR||($i.TypeHierarchySubtypesRequest=nR={}))});var aR=Z(As=>{"use strict";Object.defineProperty(As,"__esModule",{value:!0});As.InlineValueRefreshRequest=As.InlineValueRequest=void 0;var Ac=ct(),oR;(function(t){t.method="textDocument/inlineValue",t.messageDirection=Ac.MessageDirection.clientToServer,t.type=new Ac.ProtocolRequestType(t.method)})(oR||(As.InlineValueRequest=oR={}));var sR;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=Ac.MessageDirection.serverToClient,t.type=new Ac.ProtocolRequestType0(t.method)})(sR||(As.InlineValueRefreshRequest=sR={}))});var fR=Z(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.InlayHintRefreshRequest=Pi.InlayHintResolveRequest=Pi.InlayHintRequest=void 0;var Ds=ct(),lR;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Ds.MessageDirection.clientToServer,t.type=new Ds.ProtocolRequestType(t.method)})(lR||(Pi.InlayHintRequest=lR={}));var uR;(function(t){t.method="inlayHint/resolve",t.messageDirection=Ds.MessageDirection.clientToServer,t.type=new Ds.ProtocolRequestType(t.method)})(uR||(Pi.InlayHintResolveRequest=uR={}));var cR;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Ds.MessageDirection.serverToClient,t.type=new Ds.ProtocolRequestType0(t.method)})(cR||(Pi.InlayHintRefreshRequest=cR={}))});var yR=Z(sn=>{"use strict";Object.defineProperty(sn,"__esModule",{value:!0});sn.DiagnosticRefreshRequest=sn.WorkspaceDiagnosticRequest=sn.DocumentDiagnosticRequest=sn.DocumentDiagnosticReportKind=sn.DiagnosticServerCancellationData=void 0;var TR=_o(),xL=gc(),Cs=ct(),dR;(function(t){function e(r){let n=r;return n&&xL.boolean(n.retriggerRequest)}t.is=e})(dR||(sn.DiagnosticServerCancellationData=dR={}));var pR;(function(t){t.Full="full",t.Unchanged="unchanged"})(pR||(sn.DocumentDiagnosticReportKind=pR={}));var mR;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Cs.MessageDirection.clientToServer,t.type=new Cs.ProtocolRequestType(t.method),t.partialResult=new TR.ProgressType})(mR||(sn.DocumentDiagnosticRequest=mR={}));var hR;(function(t){t.method="workspace/diagnostic",t.messageDirection=Cs.MessageDirection.clientToServer,t.type=new Cs.ProtocolRequestType(t.method),t.partialResult=new TR.ProgressType})(hR||(sn.WorkspaceDiagnosticRequest=hR={}));var gR;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Cs.MessageDirection.serverToClient,t.type=new Cs.ProtocolRequestType0(t.method)})(gR||(sn.DiagnosticRefreshRequest=gR={}))});var OR=Z(At=>{"use strict";Object.defineProperty(At,"__esModule",{value:!0});At.DidCloseNotebookDocumentNotification=At.DidSaveNotebookDocumentNotification=At.DidChangeNotebookDocumentNotification=At.NotebookCellArrayChange=At.DidOpenNotebookDocumentNotification=At.NotebookDocumentSyncRegistrationType=At.NotebookDocument=At.NotebookCell=At.ExecutionSummary=At.NotebookCellKind=void 0;var sl=hc(),vn=gc(),$n=ct(),ch;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(ch||(At.NotebookCellKind=ch={}));var fh;(function(t){function e(i,o){let s={executionOrder:i};return(o===!0||o===!1)&&(s.success=o),s}t.create=e;function r(i){let o=i;return vn.objectLiteral(o)&&sl.uinteger.is(o.executionOrder)&&(o.success===void 0||vn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(fh||(At.ExecutionSummary=fh={}));var Dc;(function(t){function e(o,s){return{kind:o,document:s}}t.create=e;function r(o){let s=o;return vn.objectLiteral(s)&&ch.is(s.kind)&&sl.DocumentUri.is(s.document)&&(s.metadata===void 0||vn.objectLiteral(s.metadata))}t.is=r;function n(o,s){let a=new Set;return o.document!==s.document&&a.add("document"),o.kind!==s.kind&&a.add("kind"),o.executionSummary!==s.executionSummary&&a.add("executionSummary"),(o.metadata!==void 0||s.metadata!==void 0)&&!i(o.metadata,s.metadata)&&a.add("metadata"),(o.executionSummary!==void 0||s.executionSummary!==void 0)&&!fh.equals(o.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function i(o,s){if(o===s)return!0;if(o==null||s===null||s===void 0||typeof o!=typeof s||typeof o!="object")return!1;let a=Array.isArray(o),l=Array.isArray(s);if(a!==l)return!1;if(a&&l){if(o.length!==s.length)return!1;for(let u=0;u<o.length;u++)if(!i(o[u],s[u]))return!1}if(vn.objectLiteral(o)&&vn.objectLiteral(s)){let u=Object.keys(o),c=Object.keys(s);if(u.length!==c.length||(u.sort(),c.sort(),!i(u,c)))return!1;for(let f=0;f<u.length;f++){let d=u[f];if(!i(o[d],s[d]))return!1}}return!0}})(Dc||(At.NotebookCell=Dc={}));var _R;(function(t){function e(n,i,o,s){return{uri:n,notebookType:i,version:o,cells:s}}t.create=e;function r(n){let i=n;return vn.objectLiteral(i)&&vn.string(i.uri)&&sl.integer.is(i.version)&&vn.typedArray(i.cells,Dc.is)}t.is=r})(_R||(At.NotebookDocument=_R={}));var bs;(function(t){t.method="notebookDocument/sync",t.messageDirection=$n.MessageDirection.clientToServer,t.type=new $n.RegistrationType(t.method)})(bs||(At.NotebookDocumentSyncRegistrationType=bs={}));var vR;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=$n.MessageDirection.clientToServer,t.type=new $n.ProtocolNotificationType(t.method),t.registrationMethod=bs.method})(vR||(At.DidOpenNotebookDocumentNotification=vR={}));var RR;(function(t){function e(n){let i=n;return vn.objectLiteral(i)&&sl.uinteger.is(i.start)&&sl.uinteger.is(i.deleteCount)&&(i.cells===void 0||vn.typedArray(i.cells,Dc.is))}t.is=e;function r(n,i,o){let s={start:n,deleteCount:i};return o!==void 0&&(s.cells=o),s}t.create=r})(RR||(At.NotebookCellArrayChange=RR={}));var xR;(function(t){t.method="notebookDocument/didChange",t.messageDirection=$n.MessageDirection.clientToServer,t.type=new $n.ProtocolNotificationType(t.method),t.registrationMethod=bs.method})(xR||(At.DidChangeNotebookDocumentNotification=xR={}));var NR;(function(t){t.method="notebookDocument/didSave",t.messageDirection=$n.MessageDirection.clientToServer,t.type=new $n.ProtocolNotificationType(t.method),t.registrationMethod=bs.method})(NR||(At.DidSaveNotebookDocumentNotification=NR={}));var ER;(function(t){t.method="notebookDocument/didClose",t.messageDirection=$n.MessageDirection.clientToServer,t.type=new $n.ProtocolNotificationType(t.method),t.registrationMethod=bs.method})(ER||(At.DidCloseNotebookDocumentNotification=ER={}))});var AR=Z(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.InlineCompletionRequest=void 0;var IR=ct(),SR;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=IR.MessageDirection.clientToServer,t.type=new IR.ProtocolRequestType(t.method)})(SR||(Cc.InlineCompletionRequest=SR={}))});var Wx=Z(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.WorkspaceSymbolRequest=_.CodeActionResolveRequest=_.CodeActionRequest=_.DocumentSymbolRequest=_.DocumentHighlightRequest=_.ReferencesRequest=_.DefinitionRequest=_.SignatureHelpRequest=_.SignatureHelpTriggerKind=_.HoverRequest=_.CompletionResolveRequest=_.CompletionRequest=_.CompletionTriggerKind=_.PublishDiagnosticsNotification=_.WatchKind=_.RelativePattern=_.FileChangeType=_.DidChangeWatchedFilesNotification=_.WillSaveTextDocumentWaitUntilRequest=_.WillSaveTextDocumentNotification=_.TextDocumentSaveReason=_.DidSaveTextDocumentNotification=_.DidCloseTextDocumentNotification=_.DidChangeTextDocumentNotification=_.TextDocumentContentChangeEvent=_.DidOpenTextDocumentNotification=_.TextDocumentSyncKind=_.TelemetryEventNotification=_.LogMessageNotification=_.ShowMessageRequest=_.ShowMessageNotification=_.MessageType=_.DidChangeConfigurationNotification=_.ExitNotification=_.ShutdownRequest=_.InitializedNotification=_.InitializeErrorCodes=_.InitializeRequest=_.WorkDoneProgressOptions=_.TextDocumentRegistrationOptions=_.StaticRegistrationOptions=_.PositionEncodingKind=_.FailureHandlingKind=_.ResourceOperationKind=_.UnregistrationRequest=_.RegistrationRequest=_.DocumentSelector=_.NotebookCellTextDocumentFilter=_.NotebookDocumentFilter=_.TextDocumentFilter=void 0;_.MonikerRequest=_.MonikerKind=_.UniquenessLevel=_.WillDeleteFilesRequest=_.DidDeleteFilesNotification=_.WillRenameFilesRequest=_.DidRenameFilesNotification=_.WillCreateFilesRequest=_.DidCreateFilesNotification=_.FileOperationPatternKind=_.LinkedEditingRangeRequest=_.ShowDocumentRequest=_.SemanticTokensRegistrationType=_.SemanticTokensRefreshRequest=_.SemanticTokensRangeRequest=_.SemanticTokensDeltaRequest=_.SemanticTokensRequest=_.TokenFormat=_.CallHierarchyPrepareRequest=_.CallHierarchyOutgoingCallsRequest=_.CallHierarchyIncomingCallsRequest=_.WorkDoneProgressCancelNotification=_.WorkDoneProgressCreateRequest=_.WorkDoneProgress=_.SelectionRangeRequest=_.DeclarationRequest=_.FoldingRangeRefreshRequest=_.FoldingRangeRequest=_.ColorPresentationRequest=_.DocumentColorRequest=_.ConfigurationRequest=_.DidChangeWorkspaceFoldersNotification=_.WorkspaceFoldersRequest=_.TypeDefinitionRequest=_.ImplementationRequest=_.ApplyWorkspaceEditRequest=_.ExecuteCommandRequest=_.PrepareRenameRequest=_.RenameRequest=_.PrepareSupportDefaultBehavior=_.DocumentOnTypeFormattingRequest=_.DocumentRangesFormattingRequest=_.DocumentRangeFormattingRequest=_.DocumentFormattingRequest=_.DocumentLinkResolveRequest=_.DocumentLinkRequest=_.CodeLensRefreshRequest=_.CodeLensResolveRequest=_.CodeLensRequest=_.WorkspaceSymbolResolveRequest=void 0;_.InlineCompletionRequest=_.DidCloseNotebookDocumentNotification=_.DidSaveNotebookDocumentNotification=_.DidChangeNotebookDocumentNotification=_.NotebookCellArrayChange=_.DidOpenNotebookDocumentNotification=_.NotebookDocumentSyncRegistrationType=_.NotebookDocument=_.NotebookCell=_.ExecutionSummary=_.NotebookCellKind=_.DiagnosticRefreshRequest=_.WorkspaceDiagnosticRequest=_.DocumentDiagnosticRequest=_.DocumentDiagnosticReportKind=_.DiagnosticServerCancellationData=_.InlayHintRefreshRequest=_.InlayHintResolveRequest=_.InlayHintRequest=_.InlineValueRefreshRequest=_.InlineValueRequest=_.TypeHierarchySupertypesRequest=_.TypeHierarchySubtypesRequest=_.TypeHierarchyPrepareRequest=void 0;var H=ct(),DR=hc(),Qt=gc(),NL=ev();Object.defineProperty(_,"ImplementationRequest",{enumerable:!0,get:function(){return NL.ImplementationRequest}});var EL=nv();Object.defineProperty(_,"TypeDefinitionRequest",{enumerable:!0,get:function(){return EL.TypeDefinitionRequest}});var Mx=sv();Object.defineProperty(_,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return Mx.WorkspaceFoldersRequest}});Object.defineProperty(_,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return Mx.DidChangeWorkspaceFoldersNotification}});var OL=uv();Object.defineProperty(_,"ConfigurationRequest",{enumerable:!0,get:function(){return OL.ConfigurationRequest}});var Fx=dv();Object.defineProperty(_,"DocumentColorRequest",{enumerable:!0,get:function(){return Fx.DocumentColorRequest}});Object.defineProperty(_,"ColorPresentationRequest",{enumerable:!0,get:function(){return Fx.ColorPresentationRequest}});var Ux=hv();Object.defineProperty(_,"FoldingRangeRequest",{enumerable:!0,get:function(){return Ux.FoldingRangeRequest}});Object.defineProperty(_,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return Ux.FoldingRangeRefreshRequest}});var IL=yv();Object.defineProperty(_,"DeclarationRequest",{enumerable:!0,get:function(){return IL.DeclarationRequest}});var SL=Rv();Object.defineProperty(_,"SelectionRangeRequest",{enumerable:!0,get:function(){return SL.SelectionRangeRequest}});var gh=Ov();Object.defineProperty(_,"WorkDoneProgress",{enumerable:!0,get:function(){return gh.WorkDoneProgress}});Object.defineProperty(_,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return gh.WorkDoneProgressCreateRequest}});Object.defineProperty(_,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return gh.WorkDoneProgressCancelNotification}});var Th=Dv();Object.defineProperty(_,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return Th.CallHierarchyIncomingCallsRequest}});Object.defineProperty(_,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return Th.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(_,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return Th.CallHierarchyPrepareRequest}});var Ls=$v();Object.defineProperty(_,"TokenFormat",{enumerable:!0,get:function(){return Ls.TokenFormat}});Object.defineProperty(_,"SemanticTokensRequest",{enumerable:!0,get:function(){return Ls.SemanticTokensRequest}});Object.defineProperty(_,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Ls.SemanticTokensDeltaRequest}});Object.defineProperty(_,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Ls.SemanticTokensRangeRequest}});Object.defineProperty(_,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Ls.SemanticTokensRefreshRequest}});Object.defineProperty(_,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Ls.SemanticTokensRegistrationType}});var AL=Fv();Object.defineProperty(_,"ShowDocumentRequest",{enumerable:!0,get:function(){return AL.ShowDocumentRequest}});var DL=Wv();Object.defineProperty(_,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return DL.LinkedEditingRangeRequest}});var vo=Yv();Object.defineProperty(_,"FileOperationPatternKind",{enumerable:!0,get:function(){return vo.FileOperationPatternKind}});Object.defineProperty(_,"DidCreateFilesNotification",{enumerable:!0,get:function(){return vo.DidCreateFilesNotification}});Object.defineProperty(_,"WillCreateFilesRequest",{enumerable:!0,get:function(){return vo.WillCreateFilesRequest}});Object.defineProperty(_,"DidRenameFilesNotification",{enumerable:!0,get:function(){return vo.DidRenameFilesNotification}});Object.defineProperty(_,"WillRenameFilesRequest",{enumerable:!0,get:function(){return vo.WillRenameFilesRequest}});Object.defineProperty(_,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return vo.DidDeleteFilesNotification}});Object.defineProperty(_,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return vo.WillDeleteFilesRequest}});var yh=eR();Object.defineProperty(_,"UniquenessLevel",{enumerable:!0,get:function(){return yh.UniquenessLevel}});Object.defineProperty(_,"MonikerKind",{enumerable:!0,get:function(){return yh.MonikerKind}});Object.defineProperty(_,"MonikerRequest",{enumerable:!0,get:function(){return yh.MonikerRequest}});var _h=iR();Object.defineProperty(_,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return _h.TypeHierarchyPrepareRequest}});Object.defineProperty(_,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return _h.TypeHierarchySubtypesRequest}});Object.defineProperty(_,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return _h.TypeHierarchySupertypesRequest}});var Bx=aR();Object.defineProperty(_,"InlineValueRequest",{enumerable:!0,get:function(){return Bx.InlineValueRequest}});Object.defineProperty(_,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return Bx.InlineValueRefreshRequest}});var vh=fR();Object.defineProperty(_,"InlayHintRequest",{enumerable:!0,get:function(){return vh.InlayHintRequest}});Object.defineProperty(_,"InlayHintResolveRequest",{enumerable:!0,get:function(){return vh.InlayHintResolveRequest}});Object.defineProperty(_,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return vh.InlayHintRefreshRequest}});var al=yR();Object.defineProperty(_,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return al.DiagnosticServerCancellationData}});Object.defineProperty(_,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return al.DocumentDiagnosticReportKind}});Object.defineProperty(_,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return al.DocumentDiagnosticRequest}});Object.defineProperty(_,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return al.WorkspaceDiagnosticRequest}});Object.defineProperty(_,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return al.DiagnosticRefreshRequest}});var Pn=OR();Object.defineProperty(_,"NotebookCellKind",{enumerable:!0,get:function(){return Pn.NotebookCellKind}});Object.defineProperty(_,"ExecutionSummary",{enumerable:!0,get:function(){return Pn.ExecutionSummary}});Object.defineProperty(_,"NotebookCell",{enumerable:!0,get:function(){return Pn.NotebookCell}});Object.defineProperty(_,"NotebookDocument",{enumerable:!0,get:function(){return Pn.NotebookDocument}});Object.defineProperty(_,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return Pn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(_,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidOpenNotebookDocumentNotification}});Object.defineProperty(_,"NotebookCellArrayChange",{enumerable:!0,get:function(){return Pn.NotebookCellArrayChange}});Object.defineProperty(_,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidChangeNotebookDocumentNotification}});Object.defineProperty(_,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidSaveNotebookDocumentNotification}});Object.defineProperty(_,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidCloseNotebookDocumentNotification}});var CL=AR();Object.defineProperty(_,"InlineCompletionRequest",{enumerable:!0,get:function(){return CL.InlineCompletionRequest}});var dh;(function(t){function e(r){let n=r;return Qt.string(n)||Qt.string(n.language)||Qt.string(n.scheme)||Qt.string(n.pattern)}t.is=e})(dh||(_.TextDocumentFilter=dh={}));var ph;(function(t){function e(r){let n=r;return Qt.objectLiteral(n)&&(Qt.string(n.notebookType)||Qt.string(n.scheme)||Qt.string(n.pattern))}t.is=e})(ph||(_.NotebookDocumentFilter=ph={}));var mh;(function(t){function e(r){let n=r;return Qt.objectLiteral(n)&&(Qt.string(n.notebook)||ph.is(n.notebook))&&(n.language===void 0||Qt.string(n.language))}t.is=e})(mh||(_.NotebookCellTextDocumentFilter=mh={}));var hh;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Qt.string(n)&&!dh.is(n)&&!mh.is(n))return!1;return!0}t.is=e})(hh||(_.DocumentSelector=hh={}));var CR;(function(t){t.method="client/registerCapability",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolRequestType(t.method)})(CR||(_.RegistrationRequest=CR={}));var bR;(function(t){t.method="client/unregisterCapability",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolRequestType(t.method)})(bR||(_.UnregistrationRequest=bR={}));var LR;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(LR||(_.ResourceOperationKind=LR={}));var kR;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(kR||(_.FailureHandlingKind=kR={}));var wR;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(wR||(_.PositionEncodingKind=wR={}));var $R;(function(t){function e(r){let n=r;return n&&Qt.string(n.id)&&n.id.length>0}t.hasId=e})($R||(_.StaticRegistrationOptions=$R={}));var PR;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||hh.is(n.documentSelector))}t.is=e})(PR||(_.TextDocumentRegistrationOptions=PR={}));var MR;(function(t){function e(n){let i=n;return Qt.objectLiteral(i)&&(i.workDoneProgress===void 0||Qt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Qt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(MR||(_.WorkDoneProgressOptions=MR={}));var FR;(function(t){t.method="initialize",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(FR||(_.InitializeRequest=FR={}));var UR;(function(t){t.unknownProtocolVersion=1})(UR||(_.InitializeErrorCodes=UR={}));var BR;(function(t){t.method="initialized",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(BR||(_.InitializedNotification=BR={}));var WR;(function(t){t.method="shutdown",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType0(t.method)})(WR||(_.ShutdownRequest=WR={}));var VR;(function(t){t.method="exit",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType0(t.method)})(VR||(_.ExitNotification=VR={}));var GR;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(GR||(_.DidChangeConfigurationNotification=GR={}));var jR;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(jR||(_.MessageType=jR={}));var qR;(function(t){t.method="window/showMessage",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolNotificationType(t.method)})(qR||(_.ShowMessageNotification=qR={}));var HR;(function(t){t.method="window/showMessageRequest",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolRequestType(t.method)})(HR||(_.ShowMessageRequest=HR={}));var KR;(function(t){t.method="window/logMessage",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolNotificationType(t.method)})(KR||(_.LogMessageNotification=KR={}));var zR;(function(t){t.method="telemetry/event",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolNotificationType(t.method)})(zR||(_.TelemetryEventNotification=zR={}));var YR;(function(t){t.None=0,t.Full=1,t.Incremental=2})(YR||(_.TextDocumentSyncKind=YR={}));var XR;(function(t){t.method="textDocument/didOpen",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(XR||(_.DidOpenTextDocumentNotification=XR={}));var JR;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(JR||(_.TextDocumentContentChangeEvent=JR={}));var ZR;(function(t){t.method="textDocument/didChange",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(ZR||(_.DidChangeTextDocumentNotification=ZR={}));var QR;(function(t){t.method="textDocument/didClose",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(QR||(_.DidCloseTextDocumentNotification=QR={}));var ex;(function(t){t.method="textDocument/didSave",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(ex||(_.DidSaveTextDocumentNotification=ex={}));var tx;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(tx||(_.TextDocumentSaveReason=tx={}));var rx;(function(t){t.method="textDocument/willSave",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(rx||(_.WillSaveTextDocumentNotification=rx={}));var nx;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(nx||(_.WillSaveTextDocumentWaitUntilRequest=nx={}));var ix;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolNotificationType(t.method)})(ix||(_.DidChangeWatchedFilesNotification=ix={}));var ox;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(ox||(_.FileChangeType=ox={}));var sx;(function(t){function e(r){let n=r;return Qt.objectLiteral(n)&&(DR.URI.is(n.baseUri)||DR.WorkspaceFolder.is(n.baseUri))&&Qt.string(n.pattern)}t.is=e})(sx||(_.RelativePattern=sx={}));var ax;(function(t){t.Create=1,t.Change=2,t.Delete=4})(ax||(_.WatchKind=ax={}));var lx;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolNotificationType(t.method)})(lx||(_.PublishDiagnosticsNotification=lx={}));var ux;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(ux||(_.CompletionTriggerKind=ux={}));var cx;(function(t){t.method="textDocument/completion",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(cx||(_.CompletionRequest=cx={}));var fx;(function(t){t.method="completionItem/resolve",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(fx||(_.CompletionResolveRequest=fx={}));var dx;(function(t){t.method="textDocument/hover",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(dx||(_.HoverRequest=dx={}));var px;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(px||(_.SignatureHelpTriggerKind=px={}));var mx;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(mx||(_.SignatureHelpRequest=mx={}));var hx;(function(t){t.method="textDocument/definition",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(hx||(_.DefinitionRequest=hx={}));var gx;(function(t){t.method="textDocument/references",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(gx||(_.ReferencesRequest=gx={}));var Tx;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Tx||(_.DocumentHighlightRequest=Tx={}));var yx;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(yx||(_.DocumentSymbolRequest=yx={}));var _x;(function(t){t.method="textDocument/codeAction",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(_x||(_.CodeActionRequest=_x={}));var vx;(function(t){t.method="codeAction/resolve",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(vx||(_.CodeActionResolveRequest=vx={}));var Rx;(function(t){t.method="workspace/symbol",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Rx||(_.WorkspaceSymbolRequest=Rx={}));var xx;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(xx||(_.WorkspaceSymbolResolveRequest=xx={}));var Nx;(function(t){t.method="textDocument/codeLens",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Nx||(_.CodeLensRequest=Nx={}));var Ex;(function(t){t.method="codeLens/resolve",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Ex||(_.CodeLensResolveRequest=Ex={}));var Ox;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolRequestType0(t.method)})(Ox||(_.CodeLensRefreshRequest=Ox={}));var Ix;(function(t){t.method="textDocument/documentLink",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Ix||(_.DocumentLinkRequest=Ix={}));var Sx;(function(t){t.method="documentLink/resolve",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Sx||(_.DocumentLinkResolveRequest=Sx={}));var Ax;(function(t){t.method="textDocument/formatting",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Ax||(_.DocumentFormattingRequest=Ax={}));var Dx;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Dx||(_.DocumentRangeFormattingRequest=Dx={}));var Cx;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(Cx||(_.DocumentRangesFormattingRequest=Cx={}));var bx;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(bx||(_.DocumentOnTypeFormattingRequest=bx={}));var Lx;(function(t){t.Identifier=1})(Lx||(_.PrepareSupportDefaultBehavior=Lx={}));var kx;(function(t){t.method="textDocument/rename",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(kx||(_.RenameRequest=kx={}));var wx;(function(t){t.method="textDocument/prepareRename",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})(wx||(_.PrepareRenameRequest=wx={}));var $x;(function(t){t.method="workspace/executeCommand",t.messageDirection=H.MessageDirection.clientToServer,t.type=new H.ProtocolRequestType(t.method)})($x||(_.ExecuteCommandRequest=$x={}));var Px;(function(t){t.method="workspace/applyEdit",t.messageDirection=H.MessageDirection.serverToClient,t.type=new H.ProtocolRequestType("workspace/applyEdit")})(Px||(_.ApplyWorkspaceEditRequest=Px={}))});var Gx=Z(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.createProtocolConnection=void 0;var Vx=_o();function bL(t,e,r,n){return Vx.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Vx.createMessageConnection)(t,e,r,n)}bc.createProtocolConnection=bL});var qx=Z(Fr=>{"use strict";var LL=Fr&&Fr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Lc=Fr&&Fr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&LL(e,t,r)};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.LSPErrorCodes=Fr.createProtocolConnection=void 0;Lc(_o(),Fr);Lc(hc(),Fr);Lc(ct(),Fr);Lc(Wx(),Fr);var kL=Gx();Object.defineProperty(Fr,"createProtocolConnection",{enumerable:!0,get:function(){return kL.createProtocolConnection}});var jx;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(jx||(Fr.LSPErrorCodes=jx={}))});var _t=Z(Mn=>{"use strict";var wL=Mn&&Mn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Hx=Mn&&Mn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&wL(e,t,r)};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.createProtocolConnection=void 0;var $L=ih();Hx(ih(),Mn);Hx(qx(),Mn);function PL(t,e,r,n){return(0,$L.createMessageConnection)(t,e,r,n)}Mn.createProtocolConnection=PL});var Rh=Z(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});an.generateUuid=an.parse=an.isUUID=an.v4=an.empty=void 0;var ll=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},ul=class t extends ll{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};ul._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ul._timeHighBits=["8","9","a","b"];an.empty=new ll("00000000-0000-0000-0000-000000000000");function Kx(){return new ul}an.v4=Kx;var ML=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function zx(t){return ML.test(t)}an.isUUID=zx;function FL(t){if(!zx(t))throw new Error("invalid uuid");return new ll(t)}an.parse=FL;function UL(){return Kx().asHex()}an.generateUuid=UL});var Yx=Z(Fi=>{"use strict";Object.defineProperty(Fi,"__esModule",{value:!0});Fi.attachPartialResult=Fi.ProgressFeature=Fi.attachWorkDone=void 0;var Mi=_t(),BL=Rh(),Ro=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(Mi.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(Mi.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(Mi.WorkDoneProgress.type,this._token,{kind:"end"})}};Ro.Instances=new Map;var kc=class extends Ro{constructor(e,r){super(e,r),this._source=new Mi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},cl=class{constructor(){}begin(){}report(){}done(){}},wc=class extends cl{constructor(){super(),this._source=new Mi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function WL(t,e){if(e===void 0||e.workDoneToken===void 0)return new cl;let r=e.workDoneToken;return delete e.workDoneToken,new Ro(t,r)}Fi.attachWorkDone=WL;var VL=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var r;super.initialize(e),((r=e==null?void 0:e.window)==null?void 0:r.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(Mi.WorkDoneProgressCancelNotification.type,n=>{let i=Ro.Instances.get(n.token);(i instanceof kc||i instanceof wc)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new cl:new Ro(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,BL.generateUuid)();return this.connection.sendRequest(Mi.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new kc(this.connection,e))}else return Promise.resolve(new wc)}};Fi.ProgressFeature=VL;var xh;(function(t){t.type=new Mi.ProgressType})(xh||(xh={}));var Nh=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(xh.type,this._token,e)}};function GL(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Nh(t,r)}Fi.attachPartialResult=GL});var Xx=Z($c=>{"use strict";Object.defineProperty($c,"__esModule",{value:!0});$c.ConfigurationFeature=void 0;var jL=_t(),qL=Hu(),HL=t=>class extends t{getConfiguration(e){return e?qL.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(jL.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};$c.ConfigurationFeature=HL});var Jx=Z(Mc=>{"use strict";Object.defineProperty(Mc,"__esModule",{value:!0});Mc.WorkspaceFoldersFeature=void 0;var Pc=_t(),KL=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Pc.Emitter,this.connection.onNotification(Pc.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){var n,i;super.fillServerCapabilities(e);let r=(i=(n=e.workspace)==null?void 0:n.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Pc.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Pc.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Mc.WorkspaceFoldersFeature=KL});var Zx=Z(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0});Fc.CallHierarchyFeature=void 0;var Eh=_t(),zL=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Eh.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Eh.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Eh.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Fc.CallHierarchyFeature=zL});var Ih=Z(Ui=>{"use strict";Object.defineProperty(Ui,"__esModule",{value:!0});Ui.SemanticTokensBuilder=Ui.SemanticTokensDiff=Ui.SemanticTokensFeature=void 0;var Uc=_t(),YL=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Uc.SemanticTokensRefreshRequest.type),on:e=>{let r=Uc.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=Uc.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=Uc.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ui.SemanticTokensFeature=YL;var Bc=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let s=i-n+1,a=this.modifiedSequence.slice(n,o+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};Ui.SemanticTokensDiff=Bc;var Oh=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Bc(this._prevData,this._data).computeDiff()}:this.build()}};Ui.SemanticTokensBuilder=Oh});var Qx=Z(Wc=>{"use strict";Object.defineProperty(Wc,"__esModule",{value:!0});Wc.ShowDocumentFeature=void 0;var XL=_t(),JL=t=>class extends t{showDocument(e){return this.connection.sendRequest(XL.ShowDocumentRequest.type,e)}};Wc.ShowDocumentFeature=JL});var eN=Z(Vc=>{"use strict";Object.defineProperty(Vc,"__esModule",{value:!0});Vc.FileOperationsFeature=void 0;var ks=_t(),ZL=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(ks.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(ks.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(ks.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(ks.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(ks.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(ks.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Vc.FileOperationsFeature=ZL});var tN=Z(Gc=>{"use strict";Object.defineProperty(Gc,"__esModule",{value:!0});Gc.LinkedEditingRangeFeature=void 0;var QL=_t(),ek=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(QL.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Gc.LinkedEditingRangeFeature=ek});var rN=Z(jc=>{"use strict";Object.defineProperty(jc,"__esModule",{value:!0});jc.TypeHierarchyFeature=void 0;var Sh=_t(),tk=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Sh.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Sh.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Sh.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};jc.TypeHierarchyFeature=tk});var iN=Z(qc=>{"use strict";Object.defineProperty(qc,"__esModule",{value:!0});qc.InlineValueFeature=void 0;var nN=_t(),rk=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(nN.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(nN.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};qc.InlineValueFeature=rk});var sN=Z(Hc=>{"use strict";Object.defineProperty(Hc,"__esModule",{value:!0});Hc.FoldingRangeFeature=void 0;var oN=_t(),nk=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(oN.FoldingRangeRefreshRequest.type),on:e=>{let r=oN.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Hc.FoldingRangeFeature=nk});var aN=Z(Kc=>{"use strict";Object.defineProperty(Kc,"__esModule",{value:!0});Kc.InlayHintFeature=void 0;var Ah=_t(),ik=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Ah.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Ah.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Ah.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Kc.InlayHintFeature=ik});var lN=Z(zc=>{"use strict";Object.defineProperty(zc,"__esModule",{value:!0});zc.DiagnosticFeature=void 0;var fl=_t(),ok=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(fl.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(fl.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(fl.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(fl.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(fl.WorkspaceDiagnosticRequest.partialResult,r)))}}};zc.DiagnosticFeature=ok});var Ch=Z(Yc=>{"use strict";Object.defineProperty(Yc,"__esModule",{value:!0});Yc.TextDocuments=void 0;var xo=_t(),Dh=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new xo.Emitter,this._onDidOpen=new xo.Emitter,this._onDidClose=new xo.Emitter,this._onDidSave=new xo.Emitter,this._onWillSave=new xo.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=xo.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let s=Object.freeze({document:o});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,o,s),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),xo.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Yc.TextDocuments=Dh});var Lh=Z(ws=>{"use strict";Object.defineProperty(ws,"__esModule",{value:!0});ws.NotebookDocuments=ws.NotebookSyncFeature=void 0;var ln=_t(),uN=Ch(),sk=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(ln.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(ln.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(ln.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(ln.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};ws.NotebookSyncFeature=sk;var Xc=class t{onDidOpenTextDocument(e){return this.openHandler=e,ln.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,ln.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,ln.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Xc.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var bh=class{constructor(e){e instanceof uN.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new uN.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new ln.Emitter,this._onDidChange=new ln.Emitter,this._onDidSave=new ln.Emitter,this._onDidClose=new ln.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Xc,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let s=o.metadata,a=!1,l=i.change;l.metadata!==void 0&&(a=!0,o.metadata=l.metadata);let u=[],c=[],f=[],d=[];if(l.cells!==void 0){let O=l.cells;if(O.structure!==void 0){let y=O.structure.array;if(o.cells.splice(y.start,y.deleteCount,...y.cells!==void 0?y.cells:[]),O.structure.didOpen!==void 0)for(let g of O.structure.didOpen)r.openTextDocument({textDocument:g}),u.push(g.uri);if(O.structure.didClose)for(let g of O.structure.didClose)r.closeTextDocument({textDocument:g}),c.push(g.uri)}if(O.data!==void 0){let y=new Map(O.data.map(g=>[g.document,g]));for(let g=0;g<=o.cells.length;g++){let I=y.get(o.cells[g].document);if(I!==void 0){let M=o.cells.splice(g,1,I);if(f.push({old:M[0],new:I}),y.delete(I.document),y.size===0)break}}}if(O.textContent!==void 0)for(let y of O.textContent)r.changeTextDocument({textDocument:y.document,contentChanges:y.changes}),d.push(y.document.uri)}this.updateCellMap(o);let m={notebookDocument:o};a&&(m.metadata={old:s,new:o.metadata});let v=[];for(let O of u)v.push(this.getNotebookCell(O));let N=[];for(let O of c)N.push(this.getNotebookCell(O));let S=[];for(let O of d)S.push(this.getNotebookCell(O));(v.length>0||N.length>0||f.length>0||S.length>0)&&(m.cells={added:v,removed:N,changed:{data:f,textContent:S}}),(m.metadata!==void 0||m.cells!==void 0)&&this._onDidChange.fire(m)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let s of i.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of o.cells)this.notebookCellMap.delete(s.document)}})),ln.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};ws.NotebookDocuments=bh});var cN=Z(Jc=>{"use strict";Object.defineProperty(Jc,"__esModule",{value:!0});Jc.MonikerFeature=void 0;var ak=_t(),lk=t=>class extends t{get moniker(){return{on:e=>{let r=ak.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Jc.MonikerFeature=lk});var Fh=Z(Le=>{"use strict";Object.defineProperty(Le,"__esModule",{value:!0});Le.createConnection=Le.combineFeatures=Le.combineNotebooksFeatures=Le.combineLanguagesFeatures=Le.combineWorkspaceFeatures=Le.combineWindowFeatures=Le.combineClientFeatures=Le.combineTracerFeatures=Le.combineTelemetryFeatures=Le.combineConsoleFeatures=Le._NotebooksImpl=Le._LanguagesImpl=Le.BulkUnregistration=Le.BulkRegistration=Le.ErrorMessageTracker=void 0;var X=_t(),un=Hu(),wh=Rh(),ge=Yx(),uk=Xx(),ck=Jx(),fk=Zx(),dk=Ih(),pk=Qx(),mk=eN(),hk=tN(),gk=rN(),Tk=iN(),yk=sN(),_k=aN(),vk=lN(),Rk=Lh(),xk=cN();function kh(t){if(t!==null)return t}var $h=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};Le.ErrorMessageTracker=$h;var Zc=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(X.MessageType.Error,e)}warn(e){this.send(X.MessageType.Warning,e)}info(e){this.send(X.MessageType.Info,e)}log(e){this.send(X.MessageType.Log,e)}debug(e){this.send(X.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(X.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,X.RAL)().console.error("Sending log message failed")})}},Ph=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:X.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(kh)}showWarningMessage(e,...r){let n={type:X.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(kh)}showInformationMessage(e,...r){let n={type:X.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(kh)}},fN=(0,pk.ShowDocumentFeature)((0,ge.ProgressFeature)(Ph)),dN;(function(t){function e(){return new Qc}t.create=e})(dN||(Le.BulkRegistration=dN={}));var Qc=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=un.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=wh.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},pN;(function(t){function e(){return new dl(void 0,[])}t.create=e})(pN||(Le.BulkUnregistration=pN={}));var dl=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(X.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=un.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(X.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},ef=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Qc?this.registerMany(e):e instanceof dl?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=un.string(r)?r:r.method,o=wh.generateUuid(),s={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(X.RegistrationRequest.type,s).then(a=>(e.add({id:o,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=un.string(e)?e:e.method,i=wh.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(X.RegistrationRequest.type,o).then(s=>X.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(X.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(X.RegistrationRequest.type,r).then(()=>new dl(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Mh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(X.ApplyWorkspaceEditRequest.type,n)}},mN=(0,mk.FileOperationsFeature)((0,ck.WorkspaceFoldersFeature)((0,uk.ConfigurationFeature)(Mh))),tf=class{constructor(){this._trace=X.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==X.Trace.Off&&this.connection.sendNotification(X.LogTraceNotification.type,{message:e,verbose:this._trace===X.Trace.Verbose?r:void 0}).catch(()=>{})}},rf=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(X.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},nf=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,ge.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,ge.attachPartialResult)(this.connection,r)}};Le._LanguagesImpl=nf;var hN=(0,yk.FoldingRangeFeature)((0,xk.MonikerFeature)((0,vk.DiagnosticFeature)((0,_k.InlayHintFeature)((0,Tk.InlineValueFeature)((0,gk.TypeHierarchyFeature)((0,hk.LinkedEditingRangeFeature)((0,dk.SemanticTokensFeature)((0,fk.CallHierarchyFeature)(nf))))))))),of=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,ge.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,ge.attachPartialResult)(this.connection,r)}};Le._NotebooksImpl=of;var gN=(0,Rk.NotebookSyncFeature)(of);function TN(t,e){return function(r){return e(t(r))}}Le.combineConsoleFeatures=TN;function yN(t,e){return function(r){return e(t(r))}}Le.combineTelemetryFeatures=yN;function _N(t,e){return function(r){return e(t(r))}}Le.combineTracerFeatures=_N;function vN(t,e){return function(r){return e(t(r))}}Le.combineClientFeatures=vN;function RN(t,e){return function(r){return e(t(r))}}Le.combineWindowFeatures=RN;function xN(t,e){return function(r){return e(t(r))}}Le.combineWorkspaceFeatures=xN;function NN(t,e){return function(r){return e(t(r))}}Le.combineLanguagesFeatures=NN;function EN(t,e){return function(r){return e(t(r))}}Le.combineNotebooksFeatures=EN;function Nk(t,e){function r(i,o,s){return i&&o?s(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,TN),tracer:r(t.tracer,e.tracer,_N),telemetry:r(t.telemetry,e.telemetry,yN),client:r(t.client,e.client,vN),window:r(t.window,e.window,RN),workspace:r(t.workspace,e.workspace,xN),languages:r(t.languages,e.languages,NN),notebooks:r(t.notebooks,e.notebooks,EN)}}Le.combineFeatures=Nk;function Ek(t,e,r){let n=r&&r.console?new(r.console(Zc)):new Zc,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(tf)):new tf,s=r&&r.telemetry?new(r.telemetry(rf)):new rf,a=r&&r.client?new(r.client(ef)):new ef,l=r&&r.window?new(r.window(fN)):new fN,u=r&&r.workspace?new(r.workspace(mN)):new mN,c=r&&r.languages?new(r.languages(hN)):new hN,f=r&&r.notebooks?new(r.notebooks(gN)):new gN,d=[n,o,s,a,l,u,c,f];function m(y){return y instanceof Promise?y:un.thenable(y)?new Promise((g,I)=>{y.then(M=>g(M),M=>I(M))}):Promise.resolve(y)}let v,N,S,O={listen:()=>i.listen(),sendRequest:(y,...g)=>i.sendRequest(un.string(y)?y:y.method,...g),onRequest:(y,g)=>i.onRequest(y,g),sendNotification:(y,g)=>{let I=un.string(y)?y:y.method;return i.sendNotification(I,g)},onNotification:(y,g)=>i.onNotification(y,g),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:y=>(N=y,{dispose:()=>{N=void 0}}),onInitialized:y=>i.onNotification(X.InitializedNotification.type,y),onShutdown:y=>(v=y,{dispose:()=>{v=void 0}}),onExit:y=>(S=y,{dispose:()=>{S=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return o},get client(){return a},get window(){return l},get workspace(){return u},get languages(){return c},get notebooks(){return f},onDidChangeConfiguration:y=>i.onNotification(X.DidChangeConfigurationNotification.type,y),onDidChangeWatchedFiles:y=>i.onNotification(X.DidChangeWatchedFilesNotification.type,y),__textDocumentSync:void 0,onDidOpenTextDocument:y=>i.onNotification(X.DidOpenTextDocumentNotification.type,y),onDidChangeTextDocument:y=>i.onNotification(X.DidChangeTextDocumentNotification.type,y),onDidCloseTextDocument:y=>i.onNotification(X.DidCloseTextDocumentNotification.type,y),onWillSaveTextDocument:y=>i.onNotification(X.WillSaveTextDocumentNotification.type,y),onWillSaveTextDocumentWaitUntil:y=>i.onRequest(X.WillSaveTextDocumentWaitUntilRequest.type,y),onDidSaveTextDocument:y=>i.onNotification(X.DidSaveTextDocumentNotification.type,y),sendDiagnostics:y=>i.sendNotification(X.PublishDiagnosticsNotification.type,y),onHover:y=>i.onRequest(X.HoverRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),void 0)),onCompletion:y=>i.onRequest(X.CompletionRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onCompletionResolve:y=>i.onRequest(X.CompletionResolveRequest.type,y),onSignatureHelp:y=>i.onRequest(X.SignatureHelpRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),void 0)),onDeclaration:y=>i.onRequest(X.DeclarationRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onDefinition:y=>i.onRequest(X.DefinitionRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onTypeDefinition:y=>i.onRequest(X.TypeDefinitionRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onImplementation:y=>i.onRequest(X.ImplementationRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onReferences:y=>i.onRequest(X.ReferencesRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onDocumentHighlight:y=>i.onRequest(X.DocumentHighlightRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onDocumentSymbol:y=>i.onRequest(X.DocumentSymbolRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onWorkspaceSymbol:y=>i.onRequest(X.WorkspaceSymbolRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onWorkspaceSymbolResolve:y=>i.onRequest(X.WorkspaceSymbolResolveRequest.type,y),onCodeAction:y=>i.onRequest(X.CodeActionRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onCodeActionResolve:y=>i.onRequest(X.CodeActionResolveRequest.type,(g,I)=>y(g,I)),onCodeLens:y=>i.onRequest(X.CodeLensRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onCodeLensResolve:y=>i.onRequest(X.CodeLensResolveRequest.type,(g,I)=>y(g,I)),onDocumentFormatting:y=>i.onRequest(X.DocumentFormattingRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),void 0)),onDocumentRangeFormatting:y=>i.onRequest(X.DocumentRangeFormattingRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),void 0)),onDocumentOnTypeFormatting:y=>i.onRequest(X.DocumentOnTypeFormattingRequest.type,(g,I)=>y(g,I)),onRenameRequest:y=>i.onRequest(X.RenameRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),void 0)),onPrepareRename:y=>i.onRequest(X.PrepareRenameRequest.type,(g,I)=>y(g,I)),onDocumentLinks:y=>i.onRequest(X.DocumentLinkRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onDocumentLinkResolve:y=>i.onRequest(X.DocumentLinkResolveRequest.type,(g,I)=>y(g,I)),onDocumentColor:y=>i.onRequest(X.DocumentColorRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onColorPresentation:y=>i.onRequest(X.ColorPresentationRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onFoldingRanges:y=>i.onRequest(X.FoldingRangeRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onSelectionRanges:y=>i.onRequest(X.SelectionRangeRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),(0,ge.attachPartialResult)(i,g))),onExecuteCommand:y=>i.onRequest(X.ExecuteCommandRequest.type,(g,I)=>y(g,I,(0,ge.attachWorkDone)(i,g),void 0)),dispose:()=>i.dispose()};for(let y of d)y.attach(O);return i.onRequest(X.InitializeRequest.type,y=>{e.initialize(y),un.string(y.trace)&&(o.trace=X.Trace.fromString(y.trace));for(let g of d)g.initialize(y.capabilities);if(N){let g=N(y,new X.CancellationTokenSource().token,(0,ge.attachWorkDone)(i,y),void 0);return m(g).then(I=>{if(I instanceof X.ResponseError)return I;let M=I;M||(M={capabilities:{}});let J=M.capabilities;J||(J={},M.capabilities=J),J.textDocumentSync===void 0||J.textDocumentSync===null?J.textDocumentSync=un.number(O.__textDocumentSync)?O.__textDocumentSync:X.TextDocumentSyncKind.None:!un.number(J.textDocumentSync)&&!un.number(J.textDocumentSync.change)&&(J.textDocumentSync.change=un.number(O.__textDocumentSync)?O.__textDocumentSync:X.TextDocumentSyncKind.None);for(let ce of d)ce.fillServerCapabilities(J);return M})}else{let g={capabilities:{textDocumentSync:X.TextDocumentSyncKind.None}};for(let I of d)I.fillServerCapabilities(g.capabilities);return g}}),i.onRequest(X.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,v)return v(new X.CancellationTokenSource().token)}),i.onNotification(X.ExitNotification.type,()=>{try{S&&S()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(X.SetTraceNotification.type,y=>{o.trace=X.Trace.fromString(y.value)}),O}Le.createConnection=Ek});var ON=Z(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});Ur.resolveModulePath=Ur.FileSystem=Ur.resolveGlobalYarnPath=Ur.resolveGlobalNodePath=Ur.resolve=Ur.uriToFilePath=void 0;var Ok=require("url"),Rn=require("path"),Uh=require("fs"),Gh=require("child_process");function Ik(t){let e=Ok.parse(t);if(e.protocol!=="file:"||!e.path)return;let r=e.path.split("/");for(var n=0,i=r.length;n<i;n++)r[n]=decodeURIComponent(r[n]);if(process.platform==="win32"&&r.length>1){let o=r[0],s=r[1];o.length===0&&s.length>1&&s[1]===":"&&r.shift()}return Rn.normalize(r.join("/"))}Ur.uriToFilePath=Ik;function Bh(){return process.platform==="win32"}function sf(t,e,r,n){let i="NODE_PATH",o=["var p = process;","p.on('message',function(m){","if(m.c==='e'){","p.exit(0);","}","else if(m.c==='rs'){","try{","var r=require.resolve(m.a);","p.send({c:'r',s:true,r:r});","}","catch(err){","p.send({c:'r',s:false});","}","}","});"].join("");return new Promise((s,a)=>{let l=process.env,u=Object.create(null);Object.keys(l).forEach(c=>u[c]=l[c]),e&&Uh.existsSync(e)&&(u[i]?u[i]=e+Rn.delimiter+u[i]:u[i]=e,n&&n(`NODE_PATH value is: ${u[i]}`)),u.ELECTRON_RUN_AS_NODE="1";try{let c=(0,Gh.fork)("",[],{cwd:r,env:u,execArgv:["-e",o]});if(c.pid===void 0){a(new Error(`Starting process to resolve node module  ${t} failed`));return}c.on("error",d=>{a(d)}),c.on("message",d=>{d.c==="r"&&(c.send({c:"e"}),d.s?s(d.r):a(new Error(`Failed to resolve module: ${t}`)))});let f={c:"rs",a:t};c.send(f)}catch(c){a(c)}})}Ur.resolve=sf;function Wh(t){let e="npm",r=Object.create(null);Object.keys(process.env).forEach(o=>r[o]=process.env[o]),r.NO_UPDATE_NOTIFIER="true";let n={encoding:"utf8",env:r};Bh()&&(e="npm.cmd",n.shell=!0);let i=()=>{};try{process.on("SIGPIPE",i);let o=(0,Gh.spawnSync)(e,["config","get","prefix"],n).stdout;if(!o){t&&t("'npm config get prefix' didn't return a value.");return}let s=o.trim();return t&&t(`'npm config get prefix' value is: ${s}`),s.length>0?Bh()?Rn.join(s,"node_modules"):Rn.join(s,"lib","node_modules"):void 0}catch{return}finally{process.removeListener("SIGPIPE",i)}}Ur.resolveGlobalNodePath=Wh;function Sk(t){let e="yarn",r={encoding:"utf8"};Bh()&&(e="yarn.cmd",r.shell=!0);let n=()=>{};try{process.on("SIGPIPE",n);let i=(0,Gh.spawnSync)(e,["global","dir","--json"],r),o=i.stdout;if(!o){t&&(t("'yarn global dir' didn't return a value."),i.stderr&&t(i.stderr));return}let s=o.trim().split(/\r?\n/);for(let a of s)try{let l=JSON.parse(a);if(l.type==="log")return Rn.join(l.data,"node_modules")}catch{}return}catch{return}finally{process.removeListener("SIGPIPE",n)}}Ur.resolveGlobalYarnPath=Sk;var Vh;(function(t){let e;function r(){return e!==void 0||(process.platform==="win32"?e=!1:e=!Uh.existsSync(__filename.toUpperCase())||!Uh.existsSync(__filename.toLowerCase())),e}t.isCaseSensitive=r;function n(i,o){return r()?Rn.normalize(o).indexOf(Rn.normalize(i))===0:Rn.normalize(o).toLowerCase().indexOf(Rn.normalize(i).toLowerCase())===0}t.isParent=n})(Vh||(Ur.FileSystem=Vh={}));function Ak(t,e,r,n){return r?(Rn.isAbsolute(r)||(r=Rn.join(t,r)),sf(e,r,r,n).then(i=>Vh.isParent(r,i)?i:Promise.reject(new Error(`Failed to load ${e} from node path location.`))).then(void 0,i=>sf(e,Wh(n),t,n))):sf(e,Wh(n),t,n)}Ur.resolveModulePath=Ak});var jh=Z((_q,IN)=>{"use strict";IN.exports=_t()});var SN=Z(af=>{"use strict";Object.defineProperty(af,"__esModule",{value:!0});af.InlineCompletionFeature=void 0;var Dk=_t(),Ck=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(Dk.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};af.InlineCompletionFeature=Ck});var CN=Z(yr=>{"use strict";var bk=yr&&yr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),DN=yr&&yr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&bk(e,t,r)};Object.defineProperty(yr,"__esModule",{value:!0});yr.ProposedFeatures=yr.NotebookDocuments=yr.TextDocuments=yr.SemanticTokensBuilder=void 0;var Lk=Ih();Object.defineProperty(yr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return Lk.SemanticTokensBuilder}});var kk=SN();DN(_t(),yr);var wk=Ch();Object.defineProperty(yr,"TextDocuments",{enumerable:!0,get:function(){return wk.TextDocuments}});var $k=Lh();Object.defineProperty(yr,"NotebookDocuments",{enumerable:!0,get:function(){return $k.NotebookDocuments}});DN(Fh(),yr);var AN;(function(t){t.all={__brand:"features",languages:kk.InlineCompletionFeature}})(AN||(yr.ProposedFeatures=AN={}))});var Br=Z(cn=>{"use strict";var Pk=cn&&cn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),wN=cn&&cn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Pk(e,t,r)};Object.defineProperty(cn,"__esModule",{value:!0});cn.createConnection=cn.Files=void 0;var bN=require("util"),qh=Hu(),Mk=Fh(),pl=ON(),No=jh();wN(jh(),cn);wN(CN(),cn);var LN;(function(t){t.uriToFilePath=pl.uriToFilePath,t.resolveGlobalNodePath=pl.resolveGlobalNodePath,t.resolveGlobalYarnPath=pl.resolveGlobalYarnPath,t.resolve=pl.resolve,t.resolveModulePath=pl.resolveModulePath})(LN||(cn.Files=LN={}));var kN;function lf(){if(kN!==void 0)try{kN.end()}catch{}}var $s=!1,$N;function Fk(){let t="--clientProcessId";function e(r){try{let n=parseInt(r);isNaN(n)||($N=setInterval(()=>{try{process.kill(n,0)}catch{lf(),process.exit($s?0:1)}},3e3))}catch{}}for(let r=2;r<process.argv.length;r++){let n=process.argv[r];if(n===t&&r+1<process.argv.length){e(process.argv[r+1]);return}else{let i=n.split("=");i[0]===t&&e(i[1])}}}Fk();var Uk={initialize:t=>{let e=t.processId;qh.number(e)&&$N===void 0&&setInterval(()=>{try{process.kill(e,0)}catch{process.exit($s?0:1)}},3e3)},get shutdownReceived(){return $s},set shutdownReceived(t){$s=t},exit:t=>{lf(),process.exit(t)}};function Bk(t,e,r,n){let i,o,s,a;return t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),No.ConnectionStrategy.is(t)||No.ConnectionOptions.is(t)?a=t:(o=t,s=e,a=r),Wk(o,s,a,i)}cn.createConnection=Bk;function Wk(t,e,r,n){let i=!1;if(!t&&!e&&process.argv.length>2){let l,u,c=process.argv.slice(2);for(let f=0;f<c.length;f++){let d=c[f];if(d==="--node-ipc"){t=new No.IPCMessageReader(process),e=new No.IPCMessageWriter(process);break}else if(d==="--stdio"){i=!0,t=process.stdin,e=process.stdout;break}else if(d==="--socket"){l=parseInt(c[f+1]);break}else if(d==="--pipe"){u=c[f+1];break}else{var o=d.split("=");if(o[0]==="--socket"){l=parseInt(o[1]);break}else if(o[0]==="--pipe"){u=o[1];break}}}if(l){let f=(0,No.createServerSocketTransport)(l);t=f[0],e=f[1]}else if(u){let f=(0,No.createServerPipeTransport)(u);t=f[0],e=f[1]}}var s="Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";if(!t)throw new Error("Connection input stream is not set. "+s);if(!e)throw new Error("Connection output stream is not set. "+s);if(qh.func(t.read)&&qh.func(t.on)){let l=t;l.on("end",()=>{lf(),process.exit($s?0:1)}),l.on("close",()=>{lf(),process.exit($s?0:1)})}let a=l=>{let u=(0,No.createProtocolConnection)(t,e,l,r);return i&&Vk(l),u};return(0,Mk.createConnection)(a,Uk,n)}function Vk(t){function e(n){return n.map(i=>typeof i=="string"?i:(0,bN.inspect)(i)).join(" ")}let r=new Map;console.assert=function(i,...o){if(!i)if(o.length===0)t.error("Assertion failed");else{let[s,...a]=o;t.error(`Assertion failed: ${s} ${e(a)}`)}},console.count=function(i="default"){var a;let o=String(i),s=(a=r.get(o))!=null?a:0;s+=1,r.set(o,s),t.log(`${o}: ${o}`)},console.countReset=function(i){i===void 0?r.clear():r.delete(String(i))},console.debug=function(...i){t.log(e(i))},console.dir=function(i,o){t.log((0,bN.inspect)(i,o))},console.log=function(...i){t.log(e(i))},console.error=function(...i){t.error(e(i))},console.trace=function(...i){let o=new Error().stack.replace(/(.+\n){2}/,""),s="Trace";i.length!==0&&(s+=`: ${e(i)}`),t.log(`${s}
${o}`)},console.warn=function(...i){t.warn(e(i))}}});var Ay=Z(Sy=>{"use strict";Object.defineProperty(Sy,"__esModule",{value:!0});var Oy;function Iy(){if(Oy===void 0)throw new Error("No runtime abstraction layer installed");return Oy}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Oy=r}t.install=e})(Iy||(Iy={}));Sy.default=Iy});var bD=Z(Nr=>{"use strict";Object.defineProperty(Nr,"__esModule",{value:!0});Nr.stringArray=Nr.array=Nr.func=Nr.error=Nr.number=Nr.string=Nr.boolean=void 0;function tV(t){return t===!0||t===!1}Nr.boolean=tV;function DD(t){return typeof t=="string"||t instanceof String}Nr.string=DD;function rV(t){return typeof t=="number"||t instanceof Number}Nr.number=rV;function nV(t){return t instanceof Error}Nr.error=nV;function iV(t){return typeof t=="function"}Nr.func=iV;function CD(t){return Array.isArray(t)}Nr.array=CD;function oV(t){return CD(t)&&t.every(e=>DD(e))}Nr.stringArray=oV});var Cy=Z(Ba=>{"use strict";Object.defineProperty(Ba,"__esModule",{value:!0});Ba.Emitter=Ba.Event=void 0;var sV=Ay(),LD;(function(t){let e={dispose(){}};t.None=function(){return e}})(LD||(Ba.Event=LD={}));var Dy=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,sV.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Xd=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Dy),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};Ba.Emitter=Xd;Xd._noop=function(){}});var kD=Z(Wa=>{"use strict";Object.defineProperty(Wa,"__esModule",{value:!0});Wa.CancellationTokenSource=Wa.CancellationToken=void 0;var aV=Ay(),lV=bD(),by=Cy(),Jd;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:by.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:by.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||lV.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Jd||(Wa.CancellationToken=Jd={}));var uV=Object.freeze(function(t,e){let r=(0,aV.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Zd=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?uV:(this._emitter||(this._emitter=new by.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Ly=class{get token(){return this._token||(this._token=new Zd),this._token}cancel(){this._token?this._token.cancel():this._token=Jd.Cancelled}dispose(){this._token?this._token instanceof Zd&&this._token.dispose():this._token=Jd.None}};Wa.CancellationTokenSource=Ly});var pC=Z((dae,dC)=>{"use strict";dC.exports=Br()});var HG={};Ii(HG,{shared:()=>Bu,st:()=>Dp});module.exports=Sb(HG);var m_;(function(t){(function(e){var r=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(t);typeof r.Reflect=="undefined"?r.Reflect=t:n=i(r.Reflect,n),e(n);function i(o,s){return function(a,l){typeof o[a]!="function"&&Object.defineProperty(o,a,{configurable:!0,writable:!0,value:l}),s&&s(a,l)}}})(function(e){var r=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive!="undefined"?Symbol.toPrimitive:"@@toPrimitive",o=n&&typeof Symbol.iterator!="undefined"?Symbol.iterator:"@@iterator",s=typeof Object.create=="function",a={__proto__:[]}instanceof Array,l=!s&&!a,u={create:s?function(){return wr(Object.create(null))}:a?function(){return wr({__proto__:null})}:function(){return wr({})},has:l?function(D,F){return r.call(D,F)}:function(D,F){return F in D},get:l?function(D,F){return r.call(D,F)?D[F]:void 0}:function(D,F){return D[F]}},c=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",d=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:wn(),m=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:fs(),v=!f&&typeof WeakMap=="function"?WeakMap:ds(),N=new v;function S(D,F,q,Y){if(Ae(q)){if(!$t(D))throw new TypeError;if(!Tt(F))throw new TypeError;return Ce(D,F)}else{if(!$t(D))throw new TypeError;if(!je(F))throw new TypeError;if(!je(Y)&&!Ae(Y)&&!sr(Y))throw new TypeError;return sr(Y)&&(Y=void 0),q=wt(q),j(D,F,q,Y)}}e("decorate",S);function O(D,F){function q(Y,ee){if(!je(Y))throw new TypeError;if(!Ae(ee)&&!mr(ee))throw new TypeError;$(D,F,Y,ee)}return q}e("metadata",O);function y(D,F,q,Y){if(!je(q))throw new TypeError;return Ae(Y)||(Y=wt(Y)),$(D,F,q,Y)}e("defineMetadata",y);function g(D,F,q){if(!je(F))throw new TypeError;return Ae(q)||(q=wt(q)),B(D,F,q)}e("hasMetadata",g);function I(D,F,q){if(!je(F))throw new TypeError;return Ae(q)||(q=wt(q)),G(D,F,q)}e("hasOwnMetadata",I);function M(D,F,q){if(!je(F))throw new TypeError;return Ae(q)||(q=wt(q)),ie(D,F,q)}e("getMetadata",M);function J(D,F,q){if(!je(F))throw new TypeError;return Ae(q)||(q=wt(q)),z(D,F,q)}e("getOwnMetadata",J);function ce(D,F){if(!je(D))throw new TypeError;return Ae(F)||(F=wt(F)),w(D,F)}e("getMetadataKeys",ce);function _e(D,F){if(!je(D))throw new TypeError;return Ae(F)||(F=wt(F)),le(D,F)}e("getOwnMetadataKeys",_e);function Ge(D,F,q){if(!je(F))throw new TypeError;Ae(q)||(q=wt(q));var Y=k(F,q,!1);if(Ae(Y)||!Y.delete(D))return!1;if(Y.size>0)return!0;var ee=N.get(F);return ee.delete(q),ee.size>0||N.delete(F),!0}e("deleteMetadata",Ge);function Ce(D,F){for(var q=D.length-1;q>=0;--q){var Y=D[q],ee=Y(F);if(!Ae(ee)&&!sr(ee)){if(!Tt(ee))throw new TypeError;F=ee}}return F}function j(D,F,q,Y){for(var ee=D.length-1;ee>=0;--ee){var R=D[ee],L=R(F,q,Y);if(!Ae(L)&&!sr(L)){if(!je(L))throw new TypeError;Y=L}}return Y}function k(D,F,q){var Y=N.get(D);if(Ae(Y)){if(!q)return;Y=new d,N.set(D,Y)}var ee=Y.get(F);if(Ae(ee)){if(!q)return;ee=new d,Y.set(F,ee)}return ee}function B(D,F,q){var Y=G(D,F,q);if(Y)return!0;var ee=Zr(F);return sr(ee)?!1:B(D,ee,q)}function G(D,F,q){var Y=k(F,q,!1);return Ae(Y)?!1:ht(Y.has(D))}function ie(D,F,q){var Y=G(D,F,q);if(Y)return z(D,F,q);var ee=Zr(F);if(!sr(ee))return ie(D,ee,q)}function z(D,F,q){var Y=k(F,q,!1);if(!Ae(Y))return Y.get(D)}function $(D,F,q,Y){var ee=k(q,Y,!0);ee.set(D,F)}function w(D,F){var q=le(D,F),Y=Zr(D);if(Y===null)return q;var ee=w(Y,F);if(ee.length<=0)return q;if(q.length<=0)return ee;for(var R=new m,L=[],U=0,W=q;U<W.length;U++){var oe=W[U],ne=R.has(oe);ne||(R.add(oe),L.push(oe))}for(var xe=0,qe=ee;xe<qe.length;xe++){var oe=qe[xe],ne=R.has(oe);ne||(R.add(oe),L.push(oe))}return L}function le(D,F){var q=[],Y=k(D,F,!1);if(Ae(Y))return q;for(var ee=Y.keys(),R=Jr(ee),L=0;;){var U=Oi(R);if(!U)return q.length=L,q;var W=ri(U);try{q[L]=W}catch(oe){try{cs(R)}finally{throw oe}}L++}}function me(D){if(D===null)return 1;switch(typeof D){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return D===null?1:6;default:return 6}}function Ae(D){return D===void 0}function sr(D){return D===null}function Ei(D){return typeof D=="symbol"}function je(D){return typeof D=="object"?D!==null:typeof D=="function"}function Yt(D,F){switch(me(D)){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D}var q=F===3?"string":F===5?"number":"default",Y=Or(D,i);if(Y!==void 0){var ee=Y.call(D,q);if(je(ee))throw new TypeError;return ee}return ti(D,q==="default"?"number":q)}function ti(D,F){if(F==="string"){var q=D.toString;if(gt(q)){var Y=q.call(D);if(!je(Y))return Y}var ee=D.valueOf;if(gt(ee)){var Y=ee.call(D);if(!je(Y))return Y}}else{var ee=D.valueOf;if(gt(ee)){var Y=ee.call(D);if(!je(Y))return Y}var R=D.toString;if(gt(R)){var Y=R.call(D);if(!je(Y))return Y}}throw new TypeError}function ht(D){return!!D}function Xt(D){return""+D}function wt(D){var F=Yt(D,3);return Ei(F)?F:Xt(F)}function $t(D){return Array.isArray?Array.isArray(D):D instanceof Object?D instanceof Array:Object.prototype.toString.call(D)==="[object Array]"}function gt(D){return typeof D=="function"}function Tt(D){return typeof D=="function"}function mr(D){switch(me(D)){case 3:return!0;case 4:return!0;default:return!1}}function Or(D,F){var q=D[F];if(q!=null){if(!gt(q))throw new TypeError;return q}}function Jr(D){var F=Or(D,o);if(!gt(F))throw new TypeError;var q=F.call(D);if(!je(q))throw new TypeError;return q}function ri(D){return D.value}function Oi(D){var F=D.next();return F.done?!1:F}function cs(D){var F=D.return;F&&F.call(D)}function Zr(D){var F=Object.getPrototypeOf(D);if(typeof D!="function"||D===c||F!==c)return F;var q=D.prototype,Y=q&&Object.getPrototypeOf(q);if(Y==null||Y===Object.prototype)return F;var ee=Y.constructor;return typeof ee!="function"||ee===D?F:ee}function wn(){var D={},F=[],q=function(){function L(U,W,oe){this._index=0,this._keys=U,this._values=W,this._selector=oe}return L.prototype["@@iterator"]=function(){return this},L.prototype[o]=function(){return this},L.prototype.next=function(){var U=this._index;if(U>=0&&U<this._keys.length){var W=this._selector(this._keys[U],this._values[U]);return U+1>=this._keys.length?(this._index=-1,this._keys=F,this._values=F):this._index++,{value:W,done:!1}}return{value:void 0,done:!0}},L.prototype.throw=function(U){throw this._index>=0&&(this._index=-1,this._keys=F,this._values=F),U},L.prototype.return=function(U){return this._index>=0&&(this._index=-1,this._keys=F,this._values=F),{value:U,done:!0}},L}();return function(){function L(){this._keys=[],this._values=[],this._cacheKey=D,this._cacheIndex=-2}return Object.defineProperty(L.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),L.prototype.has=function(U){return this._find(U,!1)>=0},L.prototype.get=function(U){var W=this._find(U,!1);return W>=0?this._values[W]:void 0},L.prototype.set=function(U,W){var oe=this._find(U,!0);return this._values[oe]=W,this},L.prototype.delete=function(U){var W=this._find(U,!1);if(W>=0){for(var oe=this._keys.length,ne=W+1;ne<oe;ne++)this._keys[ne-1]=this._keys[ne],this._values[ne-1]=this._values[ne];return this._keys.length--,this._values.length--,U===this._cacheKey&&(this._cacheKey=D,this._cacheIndex=-2),!0}return!1},L.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=D,this._cacheIndex=-2},L.prototype.keys=function(){return new q(this._keys,this._values,Y)},L.prototype.values=function(){return new q(this._keys,this._values,ee)},L.prototype.entries=function(){return new q(this._keys,this._values,R)},L.prototype["@@iterator"]=function(){return this.entries()},L.prototype[o]=function(){return this.entries()},L.prototype._find=function(U,W){return this._cacheKey!==U&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=U)),this._cacheIndex<0&&W&&(this._cacheIndex=this._keys.length,this._keys.push(U),this._values.push(void 0)),this._cacheIndex},L}();function Y(L,U){return L}function ee(L,U){return U}function R(L,U){return[L,U]}}function fs(){return function(){function D(){this._map=new d}return Object.defineProperty(D.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),D.prototype.has=function(F){return this._map.has(F)},D.prototype.add=function(F){return this._map.set(F,F),this},D.prototype.delete=function(F){return this._map.delete(F)},D.prototype.clear=function(){this._map.clear()},D.prototype.keys=function(){return this._map.keys()},D.prototype.values=function(){return this._map.values()},D.prototype.entries=function(){return this._map.entries()},D.prototype["@@iterator"]=function(){return this.keys()},D.prototype[o]=function(){return this.keys()},D}()}function ds(){var D=16,F=u.create(),q=Y();return function(){function W(){this._key=Y()}return W.prototype.has=function(oe){var ne=ee(oe,!1);return ne!==void 0?u.has(ne,this._key):!1},W.prototype.get=function(oe){var ne=ee(oe,!1);return ne!==void 0?u.get(ne,this._key):void 0},W.prototype.set=function(oe,ne){var xe=ee(oe,!0);return xe[this._key]=ne,this},W.prototype.delete=function(oe){var ne=ee(oe,!1);return ne!==void 0?delete ne[this._key]:!1},W.prototype.clear=function(){this._key=Y()},W}();function Y(){var W;do W="@@WeakMap@@"+U();while(u.has(F,W));return F[W]=!0,W}function ee(W,oe){if(!r.call(W,q)){if(!oe)return;Object.defineProperty(W,q,{value:u.create()})}return W[q]}function R(W,oe){for(var ne=0;ne<oe;++ne)W[ne]=Math.random()*255|0;return W}function L(W){return typeof Uint8Array=="function"?typeof crypto!="undefined"?crypto.getRandomValues(new Uint8Array(W)):typeof msCrypto!="undefined"?msCrypto.getRandomValues(new Uint8Array(W)):R(new Uint8Array(W),W):R(new Array(W),W)}function U(){var W=L(D);W[6]=W[6]&79|64,W[8]=W[8]&191|128;for(var oe="",ne=0;ne<D;++ne){var xe=W[ne];(ne===4||ne===6||ne===8)&&(oe+="-"),xe<16&&(oe+="0"),oe+=xe.toString(16).toLowerCase()}return oe}}function wr(D){return D.__=void 0,delete D.__,D}})})(m_||(m_={}));var zs=Ft(Br(),1);var ot={};Ii(ot,{AbstractElement:()=>Kh,AbstractRule:()=>gl,AbstractType:()=>Tl,Action:()=>Rg,Alternatives:()=>xg,ArrayLiteral:()=>zh,ArrayType:()=>Yh,Assignment:()=>Ng,BooleanLiteral:()=>Jh,CharacterRange:()=>Eg,Condition:()=>uf,Conjunction:()=>Qh,CrossReference:()=>Ig,Disjunction:()=>tg,EndOfFile:()=>Sg,Grammar:()=>ng,GrammarImport:()=>MN,Group:()=>Dg,InferredType:()=>ig,Interface:()=>og,Keyword:()=>Cg,LangiumGrammarAstReflection:()=>Ps,LangiumGrammarTerminals:()=>Gk,NamedArgument:()=>FN,NegatedToken:()=>bg,Negation:()=>sg,NumberLiteral:()=>lg,Parameter:()=>ug,ParameterReference:()=>cg,ParserRule:()=>dg,ReferenceType:()=>pg,RegexToken:()=>kg,ReturnType:()=>UN,RuleCall:()=>$g,SimpleType:()=>gg,StringLiteral:()=>Tg,TerminalAlternatives:()=>Pg,TerminalGroup:()=>Fg,TerminalRule:()=>ff,TerminalRuleCall:()=>Bg,Type:()=>yg,TypeAttribute:()=>BN,TypeDefinition:()=>Hh,UnionType:()=>_g,UnorderedGroup:()=>Wg,UntilToken:()=>Vg,ValueLiteral:()=>cf,Wildcard:()=>jg,isAbstractElement:()=>Oo,isAbstractRule:()=>jk,isAbstractType:()=>qk,isAction:()=>En,isAlternatives:()=>Ms,isArrayLiteral:()=>Xk,isArrayType:()=>Xh,isAssignment:()=>_r,isBooleanLiteral:()=>Zh,isCharacterRange:()=>Og,isCondition:()=>Hk,isConjunction:()=>eg,isCrossReference:()=>On,isDisjunction:()=>rg,isEndOfFile:()=>Ag,isFeatureName:()=>Kk,isGrammar:()=>Jk,isGrammarImport:()=>Zk,isGroup:()=>fn,isInferredType:()=>df,isInterface:()=>pf,isKeyword:()=>lr,isNamedArgument:()=>Qk,isNegatedToken:()=>Lg,isNegation:()=>ag,isNumberLiteral:()=>ew,isParameter:()=>tw,isParameterReference:()=>fg,isParserRule:()=>Dt,isPrimitiveType:()=>PN,isReferenceType:()=>mg,isRegexToken:()=>wg,isReturnType:()=>hg,isRuleCall:()=>Vr,isSimpleType:()=>mf,isStringLiteral:()=>rw,isTerminalAlternatives:()=>Mg,isTerminalGroup:()=>Ug,isTerminalRule:()=>Wr,isTerminalRuleCall:()=>hf,isType:()=>yl,isTypeAttribute:()=>nw,isTypeDefinition:()=>zk,isUnionType:()=>vg,isUnorderedGroup:()=>Fs,isUntilToken:()=>Gg,isValueLiteral:()=>Yk,isWildcard:()=>qg,reflection:()=>pe});function Be(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function vt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function ml(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function xn(t){return typeof t=="object"&&t!==null&&Be(t.container)&&vt(t.reference)&&typeof t.message=="string"}var Eo=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Be(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),i=[];for(let o of n)this.isSubtype(o,e)&&i.push(o);return this.allSubtypes[e]=i,i}}};function Ir(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Nn(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function hl(t){return Ir(t)&&typeof t.fullText=="string"}var Gk={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},gl="AbstractRule";function jk(t){return pe.isInstance(t,gl)}var Tl="AbstractType";function qk(t){return pe.isInstance(t,Tl)}var uf="Condition";function Hk(t){return pe.isInstance(t,uf)}function Kk(t){return PN(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function PN(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var Hh="TypeDefinition";function zk(t){return pe.isInstance(t,Hh)}var cf="ValueLiteral";function Yk(t){return pe.isInstance(t,cf)}var Kh="AbstractElement";function Oo(t){return pe.isInstance(t,Kh)}var zh="ArrayLiteral";function Xk(t){return pe.isInstance(t,zh)}var Yh="ArrayType";function Xh(t){return pe.isInstance(t,Yh)}var Jh="BooleanLiteral";function Zh(t){return pe.isInstance(t,Jh)}var Qh="Conjunction";function eg(t){return pe.isInstance(t,Qh)}var tg="Disjunction";function rg(t){return pe.isInstance(t,tg)}var ng="Grammar";function Jk(t){return pe.isInstance(t,ng)}var MN="GrammarImport";function Zk(t){return pe.isInstance(t,MN)}var ig="InferredType";function df(t){return pe.isInstance(t,ig)}var og="Interface";function pf(t){return pe.isInstance(t,og)}var FN="NamedArgument";function Qk(t){return pe.isInstance(t,FN)}var sg="Negation";function ag(t){return pe.isInstance(t,sg)}var lg="NumberLiteral";function ew(t){return pe.isInstance(t,lg)}var ug="Parameter";function tw(t){return pe.isInstance(t,ug)}var cg="ParameterReference";function fg(t){return pe.isInstance(t,cg)}var dg="ParserRule";function Dt(t){return pe.isInstance(t,dg)}var pg="ReferenceType";function mg(t){return pe.isInstance(t,pg)}var UN="ReturnType";function hg(t){return pe.isInstance(t,UN)}var gg="SimpleType";function mf(t){return pe.isInstance(t,gg)}var Tg="StringLiteral";function rw(t){return pe.isInstance(t,Tg)}var ff="TerminalRule";function Wr(t){return pe.isInstance(t,ff)}var yg="Type";function yl(t){return pe.isInstance(t,yg)}var BN="TypeAttribute";function nw(t){return pe.isInstance(t,BN)}var _g="UnionType";function vg(t){return pe.isInstance(t,_g)}var Rg="Action";function En(t){return pe.isInstance(t,Rg)}var xg="Alternatives";function Ms(t){return pe.isInstance(t,xg)}var Ng="Assignment";function _r(t){return pe.isInstance(t,Ng)}var Eg="CharacterRange";function Og(t){return pe.isInstance(t,Eg)}var Ig="CrossReference";function On(t){return pe.isInstance(t,Ig)}var Sg="EndOfFile";function Ag(t){return pe.isInstance(t,Sg)}var Dg="Group";function fn(t){return pe.isInstance(t,Dg)}var Cg="Keyword";function lr(t){return pe.isInstance(t,Cg)}var bg="NegatedToken";function Lg(t){return pe.isInstance(t,bg)}var kg="RegexToken";function wg(t){return pe.isInstance(t,kg)}var $g="RuleCall";function Vr(t){return pe.isInstance(t,$g)}var Pg="TerminalAlternatives";function Mg(t){return pe.isInstance(t,Pg)}var Fg="TerminalGroup";function Ug(t){return pe.isInstance(t,Fg)}var Bg="TerminalRuleCall";function hf(t){return pe.isInstance(t,Bg)}var Wg="UnorderedGroup";function Fs(t){return pe.isInstance(t,Wg)}var Vg="UntilToken";function Gg(t){return pe.isInstance(t,Vg)}var jg="Wildcard";function qg(t){return pe.isInstance(t,jg)}var Ps=class extends Eo{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case Rg:case xg:case Ng:case Eg:case Ig:case Sg:case Dg:case Cg:case bg:case kg:case $g:case Pg:case Fg:case Bg:case Wg:case Vg:case jg:return this.isSubtype(Kh,r);case zh:case lg:case Tg:return this.isSubtype(cf,r);case Yh:case pg:case gg:case _g:return this.isSubtype(Hh,r);case Jh:return this.isSubtype(uf,r)||this.isSubtype(cf,r);case Qh:case tg:case sg:case cg:return this.isSubtype(uf,r);case ig:case og:case yg:return this.isSubtype(Tl,r);case dg:return this.isSubtype(gl,r)||this.isSubtype(Tl,r);case ff:return this.isSubtype(gl,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return Tl;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return gl;case"Grammar:usedGrammars":return ng;case"NamedArgument:parameter":case"ParameterReference:parameter":return ug;case"TerminalRuleCall:rule":return ff;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"Assignment":return{name:"Assignment",properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case"EndOfFile":return{name:"EndOfFile",properties:[{name:"cardinality"},{name:"lookahead"}]};case"Group":return{name:"Group",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case"Keyword":return{name:"Keyword",properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case"Wildcard":return{name:"Wildcard",properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}},pe=new Ps;var vr={};Ii(vr,{assignMandatoryProperties:()=>Rl,copyAstNode:()=>Qg,findLocalReferences:()=>lw,findRootNode:()=>qN,getContainerOfType:()=>tn,getDocument:()=>Rt,hasContainerOfType:()=>aw,linkContentToContainer:()=>_f,streamAllContents:()=>Gr,streamAst:()=>jr,streamContents:()=>Ao,streamReferences:()=>Ws});var Sr=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return ur})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=iw(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?ur:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return ur})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(gf(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return ur})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(gf(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return ur})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?ur:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};function iw(t){return typeof t=="string"?t:typeof t=="undefined"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function gf(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Bi=new Sr(()=>{},()=>ur),ur=Object.freeze({done:!0,value:void 0});function he(...t){if(t.length===1){let e=t[0];if(e instanceof Sr)return e;if(gf(e))return new Sr(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Sr(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:ur)}return t.length>1?new Sr(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];gf(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return ur}):Bi}var dn=class extends Sr{constructor(e,r,n){super(()=>({iterators:n!=null&&n.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let s=i.iterators[i.iterators.length-1].next();if(s.done)i.iterators.pop();else return i.iterators.push(r(s.value)[Symbol.iterator]()),s}return ur})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},Us;(function(t){function e(o){return o.reduce((s,a)=>s+a,0)}t.sum=e;function r(o){return o.reduce((s,a)=>s*a,0)}t.product=r;function n(o){return o.reduce((s,a)=>Math.min(s,a))}t.min=n;function i(o){return o.reduce((s,a)=>Math.max(s,a))}t.max=i})(Us||(Us={}));var Wi={};Ii(Wi,{DefaultNameRegexp:()=>yf,RangeComparison:()=>si,compareRange:()=>VN,findCommentNode:()=>Yg,findDeclarationNodeAtOffset:()=>er,findLeafNodeAtOffset:()=>_l,findLeafNodeBeforeOffset:()=>vl,flattenCst:()=>Kg,getInteriorNodes:()=>Jg,getNextNode:()=>Xg,getPreviousNode:()=>jN,getStartlineNode:()=>ow,inRange:()=>Tf,isChildNode:()=>zg,isCommentNode:()=>Hg,streamCst:()=>Io,toDocumentSegment:()=>So,tokenToRange:()=>Bs});function Io(t){return new dn(t,e=>Ir(e)?e.content:[],{includeRoot:!0})}function Kg(t){return Io(t).filter(Nn)}function zg(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function Bs(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function So(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var si;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(si||(si={}));function VN(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return si.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return si.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?si.Inside:r?si.OverlapBack:si.OverlapFront}function Tf(t,e){return VN(t,e)>si.After}var yf=/^[\w\p{L}]$/u;function er(t,e,r=yf){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return _l(t,e)}}function Yg(t,e){if(t){let r=jN(t,!0);if(r&&Hg(r,e))return r;if(hl(t)){let n=t.content.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.content[i];if(Hg(o,e))return o}}}}function Hg(t,e){return Nn(t)&&e.includes(t.tokenType.name)}function _l(t,e){if(Nn(t))return t;if(Ir(t)){let r=GN(t,e,!1);if(r)return _l(r,e)}}function vl(t,e){if(Nn(t))return t;if(Ir(t)){let r=GN(t,e,!0);if(r)return vl(r,e)}}function GN(t,e,r){let n=0,i=t.content.length-1,o;for(;n<=i;){let s=Math.floor((n+i)/2),a=t.content[s];if(a.offset<=e&&a.end>e)return a;a.end<=e?(o=r?a:void 0,n=s+1):i=s-1}return o}function jN(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function Xg(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),i=r.content.length-1;for(;n<i;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function ow(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let i=t.container,o=n!=null?n:i.content.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.content[n]),t.range.start.line!==e)break;r=t}return r}function Jg(t,e){let r=sw(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function sw(t,e){let r=WN(t),n=WN(e),i;for(let o=0;o<r.length&&o<n.length;o++){let s=r[o],a=n[o];if(s.parent===a.parent)i={parent:s.parent,a:s.index,b:a.index};else break}return i}function WN(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}function _f(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{Be(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):Be(r)&&(r.$container=t,r.$containerProperty=e))}function tn(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function aw(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function Rt(t){let r=qN(t).$document;if(!r)throw new Error("AST node has no document.");return r}function qN(t){for(;t.$container;)t=t.$container;return t}function Ao(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e==null?void 0:e.range;return new Sr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let i=n.keys[n.keyIndex];if(!i.startsWith("$")){let o=t[i];if(Be(o)){if(n.keyIndex++,Zg(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let s=n.arrayIndex++,a=o[s];if(Be(a)&&Zg(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return ur})}function Gr(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new dn(t,r=>Ao(r,e))}function jr(t,e){if(t){if(e!=null&&e.range&&!Zg(t,e.range))return new dn(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new dn(t,r=>Ao(r,e),{includeRoot:!0})}function Zg(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?Tf(n,e):!1}function Ws(t){return new Sr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(vt(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(vt(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return ur})}function lw(t,e=Rt(t).parseResult.value){let r=[];return jr(e).forEach(n=>{Ws(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),he(r)}function Rl(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let i of r.properties)i.defaultValue!==void 0&&n[i.name]===void 0&&(n[i.name]=HN(i.defaultValue))}function HN(t){return Array.isArray(t)?[...t.map(HN)]:t}function Qg(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if(Be(i))r[n]=Qg(i,e);else if(vt(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let s of i)Be(s)?o.push(Qg(s,e)):vt(s)?o.push(e(r,n,s.$refNode,s.$refText)):o.push(s);r[n]=o}else r[n]=i;return _f(r),r}var Ct={};Ii(Ct,{findAssignment:()=>dT,findNameAssignment:()=>Of,findNodeForKeyword:()=>js,findNodeForProperty:()=>Gi,findNodesForKeyword:()=>Ef,findNodesForKeywordInternal:()=>fT,findNodesForProperty:()=>Gs,getActionAtElement:()=>ZN,getActionType:()=>eE,getAllReachableRules:()=>Il,getCrossReferenceTerminal:()=>Sl,getEntryRule:()=>Ol,getExplicitRuleType:()=>$o,getHiddenRules:()=>YN,getRuleType:()=>mT,getTypeName:()=>li,isArrayCardinality:()=>pT,isArrayOperator:()=>dw,isCommentTerminal:()=>uT,isDataType:()=>pw,isDataTypeRule:()=>Al,isOptionalCardinality:()=>wo,terminalRegex:()=>ji});var Do=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Vi(t){throw new Error("Error! The input value was not handled.")}var Nf={};Ii(Nf,{NEWLINE_REGEXP:()=>nT,escapeRegExp:()=>ko,getCaseInsensitivePattern:()=>oT,getTerminalParts:()=>fw,isMultilineComment:()=>iT,isWhitespace:()=>xf,partialMatches:()=>sT,partialRegExp:()=>zN});function fe(t){return t.charCodeAt(0)}function vf(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function Vs(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function Co(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function xl(){throw Error("Internal Error - Should never get here!")}function eT(t){return t.type==="Character"}var Nl=[];for(let t=fe("0");t<=fe("9");t++)Nl.push(t);var El=[fe("_")].concat(Nl);for(let t=fe("a");t<=fe("z");t++)El.push(t);for(let t=fe("A");t<=fe("Z");t++)El.push(t);var tT=[fe(" "),fe("\f"),fe(`
`),fe("\r"),fe("	"),fe("\v"),fe("	"),fe("\xA0"),fe("\u1680"),fe("\u2000"),fe("\u2001"),fe("\u2002"),fe("\u2003"),fe("\u2004"),fe("\u2005"),fe("\u2006"),fe("\u2007"),fe("\u2008"),fe("\u2009"),fe("\u200A"),fe("\u2028"),fe("\u2029"),fe("\u202F"),fe("\u205F"),fe("\u3000"),fe("\uFEFF")];var uw=/[0-9a-fA-F]/,Rf=/[0-9]/,cw=/[1-9]/,bo=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":Vs(n,"global");break;case"i":Vs(n,"ignoreCase");break;case"m":Vs(n,"multiLine");break;case"u":Vs(n,"unicode");break;case"y":Vs(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}Co(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return xl()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:i,atMost:i};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:i,atMost:o}):r={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;Co(r);break}if(!(e===!0&&r===void 0)&&Co(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Co(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):xl()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[fe(`
`),fe("\r"),fe("\u2028"),fe("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Nl;break;case"D":e=Nl,r=!0;break;case"s":e=tT;break;case"S":e=tT,r=!0;break;case"w":e=El;break;case"W":e=El,r=!0;break}return Co(e)?{type:"Set",value:e,complement:r}:xl()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=fe("\f");break;case"n":e=fe(`
`);break;case"r":e=fe("\r");break;case"t":e=fe("	");break;case"v":e=fe("\v");break}return Co(e)?{type:"Character",value:e}:xl()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:fe("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:fe(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:fe(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),i=n.type==="Character";if(eT(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),s=o.type==="Character";if(eT(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else vf(n.value,e),e.push(fe("-")),vf(o.value,e)}else vf(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:fe("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(cw.test(e)===!1)throw Error("Expecting a positive integer");for(;Rf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(Rf.test(e)===!1)throw Error("Expecting an integer");for(;Rf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:fe(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return Rf.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let i=0;i<e;i++){let o=this.popChar();if(uw.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Fn=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var nT=/\r?\n/gm,KN=new bo,rT=class extends Fn{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=ko(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},Lo=new rT;function fw(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=KN.pattern(t),r=[];for(let n of e.value.value)Lo.reset(t),Lo.visit(n),r.push({start:Lo.startRegexp,end:Lo.endRegex});return r}catch{return[]}}function iT(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Lo.reset(t),Lo.visit(KN.pattern(t)),Lo.multiline}catch{return!1}}function xf(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function ko(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oT(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:ko(e)).join("")}function sT(t,e){let r=zN(t),n=e.match(r);return!!n&&n[0].length>0}function zN(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",s;function a(u){o+=r.substr(n,u),n+=u}function l(u){o+="(?:"+r.substr(n,u)+"|$)",n+=u}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?r[n+2]==="{"?l(r.indexOf("}",n)-n+1):l(6):l(2);break;case"p":case"P":e.unicode?l(r.indexOf("}",n)-n+1):l(2);break;case"k":l(r.indexOf(">",n)-n+1);break;default:l(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],l(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):l(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":s=n,n+=3,i(),o+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,i(),o+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else a(1),o+=i()+"|$)";break;case")":return++n,o;default:l(1);break}return o}return new RegExp(i(),t.flags)}function Ol(t){return t.rules.find(e=>Dt(e)&&e.entry)}function YN(t){return t.rules.filter(e=>Wr(e)&&e.hidden)}function Il(t,e){let r=new Set,n=Ol(t);if(!n)return new Set(t.rules);let i=[n].concat(YN(t));for(let s of i)XN(s,r,e);let o=new Set;for(let s of t.rules)(r.has(s.name)||Wr(s)&&s.hidden)&&o.add(s);return o}function XN(t,e,r){e.add(t.name),Gr(t).forEach(n=>{if(Vr(n)||r&&hf(n)){let i=n.rule.ref;i&&!e.has(i.name)&&XN(i,e,r)}})}function Sl(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=Of(t.type.ref);return e==null?void 0:e.terminal}}function uT(t){return t.hidden&&!ji(t).test(" ")}function Gs(t,e){return!t||!e?[]:cT(t,e,t.astNode,!0)}function Gi(t,e,r){if(!t||!e)return;let n=cT(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function cT(t,e,r,n){if(!n){let i=tn(t.grammarSource,_r);if(i&&i.feature===e)return[t]}return Ir(t)&&t.astNode===r?t.content.flatMap(i=>cT(i,e,r,!1)):[]}function Ef(t,e){return t?fT(t,e,t==null?void 0:t.astNode):[]}function js(t,e,r){if(!t)return;let n=fT(t,e,t==null?void 0:t.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function fT(t,e,r){if(t.astNode!==r)return[];if(lr(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=Io(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let s=i.value;s.astNode===r?lr(s.grammarSource)&&s.grammarSource.value===e&&o.push(s):n.prune()}while(!i.done);return o}function dT(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=tn(t.grammarSource,_r);if(n)return n;t=t.container}}function Of(t){let e=t;return df(e)&&(En(e.$container)?e=e.$container.$container:Dt(e.$container)?e=e.$container:Vi(e.$container)),JN(t,e,new Map)}function JN(t,e,r){var n;function i(o,s){let a;return tn(o,_r)||(a=JN(s,s,r)),r.set(t,a),a}if(r.has(t))return r.get(t);r.set(t,void 0);for(let o of Gr(e)){if(_r(o)&&o.feature.toLowerCase()==="name")return r.set(t,o),o;if(Vr(o)&&Dt(o.rule.ref))return i(o,o.rule.ref);if(mf(o)&&(!((n=o.typeRef)===null||n===void 0)&&n.ref))return i(o,o.typeRef.ref)}}function ZN(t){let e=t.$container;if(fn(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(En(o))return o;{let s=Gr(r[i]).find(En);if(s)return s}}}if(Oo(e))return ZN(e)}function wo(t,e){return t==="?"||t==="*"||fn(e)&&!!e.guardCondition}function pT(t){return t==="*"||t==="+"}function dw(t){return t==="+="}function Al(t){return QN(t,new Set)}function QN(t,e){if(e.has(t))return!0;e.add(t);for(let r of Gr(t))if(Vr(r)){if(!r.rule.ref||Dt(r.rule.ref)&&!QN(r.rule.ref,e))return!1}else{if(_r(r))return!1;if(En(r))return!1}return!!t.definition}function pw(t){return lT(t.type,new Set)}function lT(t,e){if(e.has(t))return!0;if(e.add(t),Xh(t))return!1;if(mg(t))return!1;if(vg(t))return t.types.every(r=>lT(r,e));if(mf(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return yl(r)?lT(r.type,e):!1}else return!1}else return!1}function $o(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(Dt(e))return e.name;if(pf(e)||yl(e))return e.name}}}function li(t){var e;if(Dt(t))return Al(t)?t.name:(e=$o(t))!==null&&e!==void 0?e:t.name;if(pf(t)||yl(t)||hg(t))return t.name;if(En(t)){let r=eE(t);if(r)return r}else if(df(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function eE(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return li(t.type.ref)}function mT(t){var e,r,n;return Wr(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Al(t)?t.name:(n=$o(t))!==null&&n!==void 0?n:t.name}function ji(t){let e={s:!1,i:!1,u:!1},r=qs(t.definition,e),n=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(r,n)}var hT=/[\s\S]/.source;function qs(t,e){if(Mg(t))return mw(t);if(Ug(t))return hw(t);if(Og(t))return yw(t);if(hf(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return ai(qs(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(Lg(t))return Tw(t);if(Gg(t))return gw(t);if(wg(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),i=t.regex.substring(r+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),ai(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(qg(t))return ai(hT,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function mw(t){return ai(t.elements.map(e=>qs(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function hw(t){return ai(t.elements.map(e=>qs(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function gw(t){return ai(`${hT}*?${qs(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function Tw(t){return ai(`(?!${qs(t.terminal)})${hT}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function yw(t){return t.right?ai(`[${aT(t.left)}-${aT(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):ai(aT(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function aT(t){return ko(t.value)}function ai(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function Dl(t,e){let r={stacks:t,tokens:e};return _w(r),r.stacks.flat().forEach(i=>{i.property=void 0}),rE(r.stacks).map(i=>i[i.length-1])}function gT(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,l=s;for(;l.$container;)if(fn(l.$container)){a=l.$container;break}else if(Oo(l.$container))l=l.$container;else break;if(pT(l.cardinality)){let u=Hs({next:{feature:l,type:e.type},cardinalities:r,visited:n,plus:i});for(let c of u)i.add(c.feature);o.push(...u)}if(a){let u=a.elements.indexOf(l);u!==void 0&&u<a.elements.length-1&&o.push(...tE({feature:a,type:e.type},u+1,r,n,i)),o.every(c=>wo(c.feature.cardinality,c.feature)||wo(r.get(c.feature))||i.has(c.feature))&&o.push(...gT({next:{feature:a,type:e.type},cardinalities:r,visited:n,plus:i}))}return o}function Po(t){return Be(t)&&(t={feature:t}),Hs({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Hs(t){var e,r,n;let{next:i,cardinalities:o,visited:s,plus:a}=t;if(i===void 0)return[];let{feature:l,type:u}=i;if(fn(l)){if(s.has(l))return[];s.add(l)}if(fn(l))return tE(i,0,o,s,a).map(c=>If(c,l.cardinality,o));if(Ms(l)||Fs(l))return l.elements.flatMap(c=>Hs({next:{feature:c,type:u,property:i.property},cardinalities:o,visited:s,plus:a})).map(c=>If(c,l.cardinality,o));if(_r(l)){let c={feature:l.terminal,type:u,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Hs({next:c,cardinalities:o,visited:s,plus:a}).map(f=>If(f,l.cardinality,o))}else{if(En(l))return gT({next:{feature:l,type:li(l),property:(r=i.property)!==null&&r!==void 0?r:l.feature},cardinalities:o,visited:s,plus:a});if(Vr(l)&&Dt(l.rule.ref)){let c=l.rule.ref,f={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=$o(c))!==null&&n!==void 0?n:c.name,property:i.property};return Hs({next:f,cardinalities:o,visited:s,plus:a}).map(d=>If(d,l.cardinality,o))}else return[i]}}function If(t,e,r){return r.set(t.feature,e),t}function tE(t,e,r,n,i){var o;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},s.push(...Hs({next:a,cardinalities:r,visited:n,plus:i})),!!wo((o=a.feature.cardinality)!==null&&o!==void 0?o:r.get(a.feature),a.feature)););return s}function _w(t){for(let e of t.tokens){let r=rE(t.stacks,e);t.stacks=r}}function rE(t,e){let r=[];for(let n of t)r.push(...vw(n,e));return r}function vw(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(Rw)),i=[];for(;t.length>0;){let o=t.pop(),s=gT({next:o,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?TT(a.feature,e):!0);for(let a of s)i.push([...t,a]);if(!s.every(a=>wo(a.feature.cardinality,a.feature)||wo(r.get(a.feature))))break}return i}function Rw(t){if(t.cardinality==="+")return!0;let e=tn(t,_r);return!!(e&&e.cardinality==="+")}function TT(t,e){if(lr(t))return t.value===e.image;if(Vr(t))return xw(t.rule.ref,e);if(On(t)){let r=Sl(t);if(r)return TT(r,e)}return!1}function xw(t,e){return Dt(t)?Po(t.definition).some(n=>TT(n.feature,e)):Wr(t)?ji(t).test(e.image):!1}function nE(t){let e=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.triggerCharacters)!==null&&i!==void 0?i:[]}))),r=Array.from(new Set(t.flatMap(n=>{var i;return(i=n==null?void 0:n.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var Ks=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],i=this.buildContexts(e,r.position),o=(l,u)=>{let c=this.fillCompletionItem(l,u);c&&n.push(c)},s=l=>lr(l.feature)?l.feature.value:l.feature,a=[];for(let l of i)if(await Promise.all(he(l.features).distinct(s).exclude(a).map(u=>this.completionFor(l,u,o))),a.push(...l.features),!this.continueCompletion(n))break;return zs.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return he(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:zs.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let l=Ol(this.grammar),u=Po({feature:l.definition,type:$o(l)});return o.length>0?(o.shift(),Dl(u.map(c=>[c]),o)):u}let s=[...o].splice(i.tokenIndex);return Dl([i.elementStack.map(l=>({feature:l}))],s)}*buildContexts(e,r){var n,i;let o=e.parseResult.value.$cstNode;if(!o)return;let s=e.textDocument,a=s.getText(),l=s.offsetAt(r),u={document:e,textDocument:s,offset:l,position:r},c=this.findDataTypeRuleStart(o,l);if(c){let[y,g]=c,I=(n=vl(o,y))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},u),{node:I,tokenOffset:y,tokenEndOffset:g,features:this.findFeaturesAt(s,y)})}let{nextTokenStart:f,nextTokenEnd:d,previousTokenStart:m,previousTokenEnd:v}=this.backtrackToAnyToken(a,l),N=f;l<=f&&m!==void 0&&(N=m);let S=(i=vl(o,N))===null||i===void 0?void 0:i.astNode,O=!0;if(m!==void 0&&v!==void 0&&v===l&&(yield Object.assign(Object.assign({},u),{node:S,tokenOffset:m,tokenEndOffset:v,features:this.findFeaturesAt(s,m)}),O=this.performNextTokenCompletion(e,a.substring(m,v),m,v),O&&(yield Object.assign(Object.assign({},u),{node:S,tokenOffset:v,tokenEndOffset:v,features:this.findFeaturesAt(s,v)}))),S)O&&(yield Object.assign(Object.assign({},u),{node:S,tokenOffset:f,tokenEndOffset:d,features:this.findFeaturesAt(s,f)}));else{let y=Ol(this.grammar);if(!y)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},u),{tokenOffset:f,tokenEndOffset:d,features:Po(y.definition)})}}performNextTokenCompletion(e,r,n,i){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,i;let o=er(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=tn(o==null?void 0:o.grammarSource,Dt))===null||n===void 0)&&n.dataType);if(s){for(;s;)o=o==null?void 0:o.container,s=!!(!((i=tn(o==null?void 0:o.grammarSource,Dt))===null||i===void 0)&&i.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let i;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,r,n){if(lr(r.feature))return this.completionForKeyword(e,r.feature,n);if(On(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=tn(r.feature,_r),o=e.node;if(i&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},Rl(this.astReflection,o));let s={reference:{$refText:""},container:o,property:i.feature};try{this.getReferenceCandidates(s,e).forEach(a=>n(e,this.createReferenceCompletionItem(a)))}catch(a){console.error(a)}}}getReferenceCandidates(e,r){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:zs.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,i;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let u=this.nameProvider.getName(r.node);if(!u)return;o=u}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=o;let a=(i=r.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,o,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var Nw=Ft(Br(),1);var iE;(()=>{"use strict";var t={470:i=>{function o(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function s(l,u){for(var c,f="",d=0,m=-1,v=0,N=0;N<=l.length;++N){if(N<l.length)c=l.charCodeAt(N);else{if(c===47)break;c=47}if(c===47){if(!(m===N-1||v===1))if(m!==N-1&&v===2){if(f.length<2||d!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var S=f.lastIndexOf("/");if(S!==f.length-1){S===-1?(f="",d=0):d=(f=f.slice(0,S)).length-1-f.lastIndexOf("/"),m=N,v=0;continue}}else if(f.length===2||f.length===1){f="",d=0,m=N,v=0;continue}}u&&(f.length>0?f+="/..":f="..",d=2)}else f.length>0?f+="/"+l.slice(m+1,N):f=l.slice(m+1,N),d=N-m-1;m=N,v=0}else c===46&&v!==-1?++v:v=-1}return f}var a={resolve:function(){for(var l,u="",c=!1,f=arguments.length-1;f>=-1&&!c;f--){var d;f>=0?d=arguments[f]:(l===void 0&&(l=process.cwd()),d=l),o(d),d.length!==0&&(u=d+"/"+u,c=d.charCodeAt(0)===47)}return u=s(u,!c),c?u.length>0?"/"+u:"/":u.length>0?u:"."},normalize:function(l){if(o(l),l.length===0)return".";var u=l.charCodeAt(0)===47,c=l.charCodeAt(l.length-1)===47;return(l=s(l,!u)).length!==0||u||(l="."),l.length>0&&c&&(l+="/"),u?"/"+l:l},isAbsolute:function(l){return o(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,u=0;u<arguments.length;++u){var c=arguments[u];o(c),c.length>0&&(l===void 0?l=c:l+="/"+c)}return l===void 0?".":a.normalize(l)},relative:function(l,u){if(o(l),o(u),l===u||(l=a.resolve(l))===(u=a.resolve(u)))return"";for(var c=1;c<l.length&&l.charCodeAt(c)===47;++c);for(var f=l.length,d=f-c,m=1;m<u.length&&u.charCodeAt(m)===47;++m);for(var v=u.length-m,N=d<v?d:v,S=-1,O=0;O<=N;++O){if(O===N){if(v>N){if(u.charCodeAt(m+O)===47)return u.slice(m+O+1);if(O===0)return u.slice(m+O)}else d>N&&(l.charCodeAt(c+O)===47?S=O:O===0&&(S=0));break}var y=l.charCodeAt(c+O);if(y!==u.charCodeAt(m+O))break;y===47&&(S=O)}var g="";for(O=c+S+1;O<=f;++O)O!==f&&l.charCodeAt(O)!==47||(g.length===0?g+="..":g+="/..");return g.length>0?g+u.slice(m+S):(m+=S,u.charCodeAt(m)===47&&++m,u.slice(m))},_makeLong:function(l){return l},dirname:function(l){if(o(l),l.length===0)return".";for(var u=l.charCodeAt(0),c=u===47,f=-1,d=!0,m=l.length-1;m>=1;--m)if((u=l.charCodeAt(m))===47){if(!d){f=m;break}}else d=!1;return f===-1?c?"/":".":c&&f===1?"//":l.slice(0,f)},basename:function(l,u){if(u!==void 0&&typeof u!="string")throw new TypeError('"ext" argument must be a string');o(l);var c,f=0,d=-1,m=!0;if(u!==void 0&&u.length>0&&u.length<=l.length){if(u.length===l.length&&u===l)return"";var v=u.length-1,N=-1;for(c=l.length-1;c>=0;--c){var S=l.charCodeAt(c);if(S===47){if(!m){f=c+1;break}}else N===-1&&(m=!1,N=c+1),v>=0&&(S===u.charCodeAt(v)?--v==-1&&(d=c):(v=-1,d=N))}return f===d?d=N:d===-1&&(d=l.length),l.slice(f,d)}for(c=l.length-1;c>=0;--c)if(l.charCodeAt(c)===47){if(!m){f=c+1;break}}else d===-1&&(m=!1,d=c+1);return d===-1?"":l.slice(f,d)},extname:function(l){o(l);for(var u=-1,c=0,f=-1,d=!0,m=0,v=l.length-1;v>=0;--v){var N=l.charCodeAt(v);if(N!==47)f===-1&&(d=!1,f=v+1),N===46?u===-1?u=v:m!==1&&(m=1):u!==-1&&(m=-1);else if(!d){c=v+1;break}}return u===-1||f===-1||m===0||m===1&&u===f-1&&u===c+1?"":l.slice(u,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(u,c){var f=c.dir||c.root,d=c.base||(c.name||"")+(c.ext||"");return f?f===c.root?f+d:f+"/"+d:d}(0,l)},parse:function(l){o(l);var u={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return u;var c,f=l.charCodeAt(0),d=f===47;d?(u.root="/",c=1):c=0;for(var m=-1,v=0,N=-1,S=!0,O=l.length-1,y=0;O>=c;--O)if((f=l.charCodeAt(O))!==47)N===-1&&(S=!1,N=O+1),f===46?m===-1?m=O:y!==1&&(y=1):m!==-1&&(y=-1);else if(!S){v=O+1;break}return m===-1||N===-1||y===0||y===1&&m===N-1&&m===v+1?N!==-1&&(u.base=u.name=v===0&&d?l.slice(1,N):l.slice(v,N)):(v===0&&d?(u.name=l.slice(1,m),u.base=l.slice(1,N)):(u.name=l.slice(v,m),u.base=l.slice(v,N)),u.ext=l.slice(m,N)),v>0?u.dir=l.slice(0,v-1):d&&(u.dir="/"),u},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(i,o)=>{for(var s in o)r.o(o,s)&&!r.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},r.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),r.r=i=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};(()=>{let i;r.r(n),r.d(n,{URI:()=>d,Utils:()=>Ce}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function l(j,k){if(!j.scheme&&k)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${j.authority}", path: "${j.path}", query: "${j.query}", fragment: "${j.fragment}"}`);if(j.scheme&&!o.test(j.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(j.path){if(j.authority){if(!s.test(j.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(j.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let u="",c="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class d{constructor(k,B,G,ie,z,$=!1){Si(this,"scheme");Si(this,"authority");Si(this,"path");Si(this,"query");Si(this,"fragment");typeof k=="object"?(this.scheme=k.scheme||u,this.authority=k.authority||u,this.path=k.path||u,this.query=k.query||u,this.fragment=k.fragment||u):(this.scheme=function(w,le){return w||le?w:"file"}(k,$),this.authority=B||u,this.path=function(w,le){switch(w){case"https":case"http":case"file":le?le[0]!==c&&(le=c+le):le=c}return le}(this.scheme,G||u),this.query=ie||u,this.fragment=z||u,l(this,$))}static isUri(k){return k instanceof d||!!k&&typeof k.authority=="string"&&typeof k.fragment=="string"&&typeof k.path=="string"&&typeof k.query=="string"&&typeof k.scheme=="string"&&typeof k.fsPath=="string"&&typeof k.with=="function"&&typeof k.toString=="function"}get fsPath(){return y(this,!1)}with(k){if(!k)return this;let{scheme:B,authority:G,path:ie,query:z,fragment:$}=k;return B===void 0?B=this.scheme:B===null&&(B=u),G===void 0?G=this.authority:G===null&&(G=u),ie===void 0?ie=this.path:ie===null&&(ie=u),z===void 0?z=this.query:z===null&&(z=u),$===void 0?$=this.fragment:$===null&&($=u),B===this.scheme&&G===this.authority&&ie===this.path&&z===this.query&&$===this.fragment?this:new v(B,G,ie,z,$)}static parse(k,B=!1){let G=f.exec(k);return G?new v(G[2]||u,J(G[4]||u),J(G[5]||u),J(G[7]||u),J(G[9]||u),B):new v(u,u,u,u,u)}static file(k){let B=u;if(i&&(k=k.replace(/\\/g,c)),k[0]===c&&k[1]===c){let G=k.indexOf(c,2);G===-1?(B=k.substring(2),k=c):(B=k.substring(2,G),k=k.substring(G)||c)}return new v("file",B,k,u,u)}static from(k){let B=new v(k.scheme,k.authority,k.path,k.query,k.fragment);return l(B,!0),B}toString(k=!1){return g(this,k)}toJSON(){return this}static revive(k){if(k){if(k instanceof d)return k;{let B=new v(k);return B._formatted=k.external,B._fsPath=k._sep===m?k.fsPath:null,B}}return k}}let m=i?1:void 0;class v extends d{constructor(){super(...arguments);Si(this,"_formatted",null);Si(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=y(this,!1)),this._fsPath}toString(B=!1){return B?g(this,!0):(this._formatted||(this._formatted=g(this,!1)),this._formatted)}toJSON(){let B={$mid:1};return this._fsPath&&(B.fsPath=this._fsPath,B._sep=m),this._formatted&&(B.external=this._formatted),this.path&&(B.path=this.path),this.scheme&&(B.scheme=this.scheme),this.authority&&(B.authority=this.authority),this.query&&(B.query=this.query),this.fragment&&(B.fragment=this.fragment),B}}let N={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function S(j,k,B){let G,ie=-1;for(let z=0;z<j.length;z++){let $=j.charCodeAt(z);if($>=97&&$<=122||$>=65&&$<=90||$>=48&&$<=57||$===45||$===46||$===95||$===126||k&&$===47||B&&$===91||B&&$===93||B&&$===58)ie!==-1&&(G+=encodeURIComponent(j.substring(ie,z)),ie=-1),G!==void 0&&(G+=j.charAt(z));else{G===void 0&&(G=j.substr(0,z));let w=N[$];w!==void 0?(ie!==-1&&(G+=encodeURIComponent(j.substring(ie,z)),ie=-1),G+=w):ie===-1&&(ie=z)}}return ie!==-1&&(G+=encodeURIComponent(j.substring(ie))),G!==void 0?G:j}function O(j){let k;for(let B=0;B<j.length;B++){let G=j.charCodeAt(B);G===35||G===63?(k===void 0&&(k=j.substr(0,B)),k+=N[G]):k!==void 0&&(k+=j[B])}return k!==void 0?k:j}function y(j,k){let B;return B=j.authority&&j.path.length>1&&j.scheme==="file"?`//${j.authority}${j.path}`:j.path.charCodeAt(0)===47&&(j.path.charCodeAt(1)>=65&&j.path.charCodeAt(1)<=90||j.path.charCodeAt(1)>=97&&j.path.charCodeAt(1)<=122)&&j.path.charCodeAt(2)===58?k?j.path.substr(1):j.path[1].toLowerCase()+j.path.substr(2):j.path,i&&(B=B.replace(/\//g,"\\")),B}function g(j,k){let B=k?O:S,G="",{scheme:ie,authority:z,path:$,query:w,fragment:le}=j;if(ie&&(G+=ie,G+=":"),(z||ie==="file")&&(G+=c,G+=c),z){let me=z.indexOf("@");if(me!==-1){let Ae=z.substr(0,me);z=z.substr(me+1),me=Ae.lastIndexOf(":"),me===-1?G+=B(Ae,!1,!1):(G+=B(Ae.substr(0,me),!1,!1),G+=":",G+=B(Ae.substr(me+1),!1,!0)),G+="@"}z=z.toLowerCase(),me=z.lastIndexOf(":"),me===-1?G+=B(z,!1,!0):(G+=B(z.substr(0,me),!1,!0),G+=z.substr(me))}if($){if($.length>=3&&$.charCodeAt(0)===47&&$.charCodeAt(2)===58){let me=$.charCodeAt(1);me>=65&&me<=90&&($=`/${String.fromCharCode(me+32)}:${$.substr(3)}`)}else if($.length>=2&&$.charCodeAt(1)===58){let me=$.charCodeAt(0);me>=65&&me<=90&&($=`${String.fromCharCode(me+32)}:${$.substr(2)}`)}G+=B($,!0,!1)}return w&&(G+="?",G+=B(w,!1,!1)),le&&(G+="#",G+=k?le:S(le,!1,!1)),G}function I(j){try{return decodeURIComponent(j)}catch{return j.length>3?j.substr(0,3)+I(j.substr(3)):j}}let M=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function J(j){return j.match(M)?j.replace(M,k=>I(k)):j}var ce=r(470);let _e=ce.posix||ce,Ge="/";var Ce;(function(j){j.joinPath=function(k,...B){return k.with({path:_e.join(k.path,...B)})},j.resolvePath=function(k,...B){let G=k.path,ie=!1;G[0]!==Ge&&(G=Ge+G,ie=!0);let z=_e.resolve(G,...B);return ie&&z[0]===Ge&&!k.authority&&(z=z.substring(1)),k.with({path:z})},j.dirname=function(k){if(k.path.length===0||k.path===Ge)return k;let B=_e.dirname(k.path);return B.length===1&&B.charCodeAt(0)===46&&(B=""),k.with({path:B})},j.basename=function(k){return _e.basename(k.path)},j.extname=function(k){return _e.extname(k.path)}})(Ce||(Ce={}))})(),iE=n})();var{URI:Pe,Utils:Ys}=iE;var Ut;(function(t){t.basename=Ys.basename,t.dirname=Ys.dirname,t.extname=Ys.extname,t.joinPath=Ys.joinPath,t.resolvePath=Ys.resolvePath;function e(n,i){return(n==null?void 0:n.toString())===(i==null?void 0:i.toString())}t.equals=e;function r(n,i){let o=typeof n=="string"?n:n.path,s=typeof i=="string"?i:i.path,a=o.split("/").filter(d=>d.length>0),l=s.split("/").filter(d=>d.length>0),u=0;for(;u<a.length&&a[u]===l[u];u++);let c="../".repeat(a.length-u),f=l.slice(u).join("/");return c+f}t.relative=r})(Ut||(Ut={}));var oE=Ft(Br(),1);var Sf=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=er(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[oE.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.astNode.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r!=null&&r.astNode){let n=Rt(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var aC=Ft(Br(),1);function yT(t){let e=[],r=t.Grammar;for(let n of r.rules)Wr(n)&&uT(n)&&iT(ji(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:yf}}var Ew=typeof global=="object"&&global&&global.Object===Object&&global,Af=Ew;var Ow=typeof self=="object"&&self&&self.Object===Object&&self,Iw=Af||Ow||Function("return this")(),qt=Iw;var Sw=qt.Symbol,tr=Sw;var sE=Object.prototype,Aw=sE.hasOwnProperty,Dw=sE.toString,Cl=tr?tr.toStringTag:void 0;function Cw(t){var e=Aw.call(t,Cl),r=t[Cl];try{t[Cl]=void 0;var n=!0}catch{}var i=Dw.call(t);return n&&(e?t[Cl]=r:delete t[Cl]),i}var aE=Cw;var bw=Object.prototype,Lw=bw.toString;function kw(t){return Lw.call(t)}var lE=kw;var ww="[object Null]",$w="[object Undefined]",uE=tr?tr.toStringTag:void 0;function Pw(t){return t==null?t===void 0?$w:ww:uE&&uE in Object(t)?aE(t):lE(t)}var Ar=Pw;function Mw(t){return t!=null&&typeof t=="object"}var Bt=Mw;var Fw="[object Symbol]";function Uw(t){return typeof t=="symbol"||Bt(t)&&Ar(t)==Fw}var Un=Uw;function Bw(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var Bn=Bw;var Ww=Array.isArray,se=Ww;var Vw=1/0,cE=tr?tr.prototype:void 0,fE=cE?cE.toString:void 0;function dE(t){if(typeof t=="string")return t;if(se(t))return Bn(t,dE)+"";if(Un(t))return fE?fE.call(t):"";var e=t+"";return e=="0"&&1/t==-Vw?"-0":e}var pE=dE;var Gw=/\s/;function jw(t){for(var e=t.length;e--&&Gw.test(t.charAt(e)););return e}var mE=jw;var qw=/^\s+/;function Hw(t){return t&&t.slice(0,mE(t)+1).replace(qw,"")}var hE=Hw;function Kw(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var xt=Kw;var gE=NaN,zw=/^[-+]0x[0-9a-f]+$/i,Yw=/^0b[01]+$/i,Xw=/^0o[0-7]+$/i,Jw=parseInt;function Zw(t){if(typeof t=="number")return t;if(Un(t))return gE;if(xt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=hE(t);var r=Yw.test(t);return r||Xw.test(t)?Jw(t.slice(2),r?2:8):zw.test(t)?gE:+t}var TE=Zw;var yE=1/0,Qw=17976931348623157e292;function e$(t){if(!t)return t===0?t:0;if(t=TE(t),t===yE||t===-yE){var e=t<0?-1:1;return e*Qw}return t===t?t:0}var _E=e$;function t$(t){var e=_E(t),r=e%1;return e===e?r?e-r:e:0}var Wn=t$;function r$(t){return t}var qr=r$;var n$="[object AsyncFunction]",i$="[object Function]",o$="[object GeneratorFunction]",s$="[object Proxy]";function a$(t){if(!xt(t))return!1;var e=Ar(t);return e==i$||e==o$||e==n$||e==s$}var Dr=a$;var l$=qt["__core-js_shared__"],Df=l$;var vE=function(){var t=/[^.]+$/.exec(Df&&Df.keys&&Df.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function u$(t){return!!vE&&vE in t}var RE=u$;var c$=Function.prototype,f$=c$.toString;function d$(t){if(t!=null){try{return f$.call(t)}catch{}try{return t+""}catch{}}return""}var ui=d$;var p$=/[\\^$.*+?()[\]{}|]/g,m$=/^\[object .+?Constructor\]$/,h$=Function.prototype,g$=Object.prototype,T$=h$.toString,y$=g$.hasOwnProperty,_$=RegExp("^"+T$.call(y$).replace(p$,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v$(t){if(!xt(t)||RE(t))return!1;var e=Dr(t)?_$:m$;return e.test(ui(t))}var xE=v$;function R$(t,e){return t==null?void 0:t[e]}var NE=R$;function x$(t,e){var r=NE(t,e);return xE(r)?r:void 0}var Hr=x$;var N$=Hr(qt,"WeakMap"),Cf=N$;var EE=Object.create,E$=function(){function t(){}return function(e){if(!xt(e))return{};if(EE)return EE(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),OE=E$;function O$(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var IE=O$;function I$(){}var Nt=I$;function S$(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var SE=S$;var A$=800,D$=16,C$=Date.now;function b$(t){var e=0,r=0;return function(){var n=C$(),i=D$-(n-r);if(r=n,i>0){if(++e>=A$)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var AE=b$;function L$(t){return function(){return t}}var DE=L$;var k$=function(){try{var t=Hr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Xs=k$;var w$=Xs?function(t,e){return Xs(t,"toString",{configurable:!0,enumerable:!1,value:DE(e),writable:!0})}:qr,CE=w$;var $$=AE(CE),bE=$$;function P$(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var bf=P$;function M$(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}var Lf=M$;function F$(t){return t!==t}var LE=F$;function U$(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var kE=U$;function B$(t,e,r){return e===e?kE(t,e,r):Lf(t,LE,r)}var Js=B$;function W$(t,e){var r=t==null?0:t.length;return!!r&&Js(t,e,0)>-1}var kf=W$;var V$=9007199254740991,G$=/^(?:0|[1-9]\d*)$/;function j$(t,e){var r=typeof t;return e=e==null?V$:e,!!e&&(r=="number"||r!="symbol"&&G$.test(t))&&t>-1&&t%1==0&&t<e}var qi=j$;function q$(t,e,r){e=="__proto__"&&Xs?Xs(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var Zs=q$;function H$(t,e){return t===e||t!==t&&e!==e}var Vn=H$;var K$=Object.prototype,z$=K$.hasOwnProperty;function Y$(t,e,r){var n=t[e];(!(z$.call(t,e)&&Vn(n,r))||r===void 0&&!(e in t))&&Zs(t,e,r)}var Hi=Y$;function X$(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=n?n(r[a],t[a],a,r,t):void 0;l===void 0&&(l=t[a]),i?Zs(r,a,l):Hi(r,a,l)}return r}var Gn=X$;var wE=Math.max;function J$(t,e,r){return e=wE(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=wE(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),IE(t,this,a)}}var $E=J$;function Z$(t,e){return bE($E(t,e,qr),t+"")}var Qs=Z$;var Q$=9007199254740991;function eP(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Q$}var ea=eP;function tP(t){return t!=null&&ea(t.length)&&!Dr(t)}var Ht=tP;function rP(t,e,r){if(!xt(r))return!1;var n=typeof e;return(n=="number"?Ht(r)&&qi(e,r.length):n=="string"&&e in r)?Vn(r[e],t):!1}var Ki=rP;function nP(t){return Qs(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&Ki(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}var PE=nP;var iP=Object.prototype;function oP(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||iP;return t===r}var jn=oP;function sP(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var ME=sP;var aP="[object Arguments]";function lP(t){return Bt(t)&&Ar(t)==aP}var _T=lP;var FE=Object.prototype,uP=FE.hasOwnProperty,cP=FE.propertyIsEnumerable,fP=_T(function(){return arguments}())?_T:function(t){return Bt(t)&&uP.call(t,"callee")&&!cP.call(t,"callee")},zi=fP;function dP(){return!1}var UE=dP;var VE=typeof exports=="object"&&exports&&!exports.nodeType&&exports,BE=VE&&typeof module=="object"&&module&&!module.nodeType&&module,pP=BE&&BE.exports===VE,WE=pP?qt.Buffer:void 0,mP=WE?WE.isBuffer:void 0,hP=mP||UE,ci=hP;var gP="[object Arguments]",TP="[object Array]",yP="[object Boolean]",_P="[object Date]",vP="[object Error]",RP="[object Function]",xP="[object Map]",NP="[object Number]",EP="[object Object]",OP="[object RegExp]",IP="[object Set]",SP="[object String]",AP="[object WeakMap]",DP="[object ArrayBuffer]",CP="[object DataView]",bP="[object Float32Array]",LP="[object Float64Array]",kP="[object Int8Array]",wP="[object Int16Array]",$P="[object Int32Array]",PP="[object Uint8Array]",MP="[object Uint8ClampedArray]",FP="[object Uint16Array]",UP="[object Uint32Array]",st={};st[bP]=st[LP]=st[kP]=st[wP]=st[$P]=st[PP]=st[MP]=st[FP]=st[UP]=!0;st[gP]=st[TP]=st[DP]=st[yP]=st[CP]=st[_P]=st[vP]=st[RP]=st[xP]=st[NP]=st[EP]=st[OP]=st[IP]=st[SP]=st[AP]=!1;function BP(t){return Bt(t)&&ea(t.length)&&!!st[Ar(t)]}var GE=BP;function WP(t){return function(e){return t(e)}}var qn=WP;var jE=typeof exports=="object"&&exports&&!exports.nodeType&&exports,bl=jE&&typeof module=="object"&&module&&!module.nodeType&&module,VP=bl&&bl.exports===jE,vT=VP&&Af.process,GP=function(){try{var t=bl&&bl.require&&bl.require("util").types;return t||vT&&vT.binding&&vT.binding("util")}catch{}}(),pn=GP;var qE=pn&&pn.isTypedArray,jP=qE?qn(qE):GE,ta=jP;var qP=Object.prototype,HP=qP.hasOwnProperty;function KP(t,e){var r=se(t),n=!r&&zi(t),i=!r&&!n&&ci(t),o=!r&&!n&&!i&&ta(t),s=r||n||i||o,a=s?ME(t.length,String):[],l=a.length;for(var u in t)(e||HP.call(t,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||qi(u,l)))&&a.push(u);return a}var wf=KP;function zP(t,e){return function(r){return t(e(r))}}var $f=zP;var YP=$f(Object.keys,Object),HE=YP;var XP=Object.prototype,JP=XP.hasOwnProperty;function ZP(t){if(!jn(t))return HE(t);var e=[];for(var r in Object(t))JP.call(t,r)&&r!="constructor"&&e.push(r);return e}var Pf=ZP;function QP(t){return Ht(t)?wf(t):Pf(t)}var Je=QP;var eM=Object.prototype,tM=eM.hasOwnProperty,rM=PE(function(t,e){if(jn(e)||Ht(e)){Gn(e,Je(e),t);return}for(var r in e)tM.call(e,r)&&Hi(t,r,e[r])}),cr=rM;function nM(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var KE=nM;var iM=Object.prototype,oM=iM.hasOwnProperty;function sM(t){if(!xt(t))return KE(t);var e=jn(t),r=[];for(var n in t)n=="constructor"&&(e||!oM.call(t,n))||r.push(n);return r}var zE=sM;function aM(t){return Ht(t)?wf(t,!0):zE(t)}var Yi=aM;var lM=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,uM=/^\w*$/;function cM(t,e){if(se(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Un(t)?!0:uM.test(t)||!lM.test(t)||e!=null&&t in Object(e)}var ra=cM;var fM=Hr(Object,"create"),fi=fM;function dM(){this.__data__=fi?fi(null):{},this.size=0}var YE=dM;function pM(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var XE=pM;var mM="__lodash_hash_undefined__",hM=Object.prototype,gM=hM.hasOwnProperty;function TM(t){var e=this.__data__;if(fi){var r=e[t];return r===mM?void 0:r}return gM.call(e,t)?e[t]:void 0}var JE=TM;var yM=Object.prototype,_M=yM.hasOwnProperty;function vM(t){var e=this.__data__;return fi?e[t]!==void 0:_M.call(e,t)}var ZE=vM;var RM="__lodash_hash_undefined__";function xM(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=fi&&e===void 0?RM:e,this}var QE=xM;function na(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}na.prototype.clear=YE;na.prototype.delete=XE;na.prototype.get=JE;na.prototype.has=ZE;na.prototype.set=QE;var RT=na;function NM(){this.__data__=[],this.size=0}var eO=NM;function EM(t,e){for(var r=t.length;r--;)if(Vn(t[r][0],e))return r;return-1}var Xi=EM;var OM=Array.prototype,IM=OM.splice;function SM(t){var e=this.__data__,r=Xi(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():IM.call(e,r,1),--this.size,!0}var tO=SM;function AM(t){var e=this.__data__,r=Xi(e,t);return r<0?void 0:e[r][1]}var rO=AM;function DM(t){return Xi(this.__data__,t)>-1}var nO=DM;function CM(t,e){var r=this.__data__,n=Xi(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var iO=CM;function ia(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ia.prototype.clear=eO;ia.prototype.delete=tO;ia.prototype.get=rO;ia.prototype.has=nO;ia.prototype.set=iO;var Ji=ia;var bM=Hr(qt,"Map"),Zi=bM;function LM(){this.size=0,this.__data__={hash:new RT,map:new(Zi||Ji),string:new RT}}var oO=LM;function kM(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var sO=kM;function wM(t,e){var r=t.__data__;return sO(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Qi=wM;function $M(t){var e=Qi(this,t).delete(t);return this.size-=e?1:0,e}var aO=$M;function PM(t){return Qi(this,t).get(t)}var lO=PM;function MM(t){return Qi(this,t).has(t)}var uO=MM;function FM(t,e){var r=Qi(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var cO=FM;function oa(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}oa.prototype.clear=oO;oa.prototype.delete=aO;oa.prototype.get=lO;oa.prototype.has=uO;oa.prototype.set=cO;var Mo=oa;var UM="Expected a function";function xT(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(UM);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(xT.Cache||Mo),r}xT.Cache=Mo;var fO=xT;var BM=500;function WM(t){var e=fO(t,function(n){return r.size===BM&&r.clear(),n}),r=e.cache;return e}var dO=WM;var VM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,GM=/\\(\\)?/g,jM=dO(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(VM,function(r,n,i,o){e.push(i?o.replace(GM,"$1"):n||r)}),e}),pO=jM;function qM(t){return t==null?"":pE(t)}var mO=qM;function HM(t,e){return se(t)?t:ra(t,e)?[t]:pO(mO(t))}var eo=HM;var KM=1/0;function zM(t){if(typeof t=="string"||Un(t))return t;var e=t+"";return e=="0"&&1/t==-KM?"-0":e}var Hn=zM;function YM(t,e){e=eo(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Hn(e[r++])];return r&&r==n?t:void 0}var sa=YM;function XM(t,e,r){var n=t==null?void 0:sa(t,e);return n===void 0?r:n}var hO=XM;function JM(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var aa=JM;var gO=tr?tr.isConcatSpreadable:void 0;function ZM(t){return se(t)||zi(t)||!!(gO&&t&&t[gO])}var TO=ZM;function yO(t,e,r,n,i){var o=-1,s=t.length;for(r||(r=TO),i||(i=[]);++o<s;){var a=t[o];e>0&&r(a)?e>1?yO(a,e-1,r,n,i):aa(i,a):n||(i[i.length]=a)}return i}var la=yO;function QM(t){var e=t==null?0:t.length;return e?la(t,1):[]}var Wt=QM;var e0=$f(Object.getPrototypeOf,Object),Mf=e0;function t0(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}var Ff=t0;function r0(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}var _O=r0;function n0(){this.__data__=new Ji,this.size=0}var vO=n0;function i0(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var RO=i0;function o0(t){return this.__data__.get(t)}var xO=o0;function s0(t){return this.__data__.has(t)}var NO=s0;var a0=200;function l0(t,e){var r=this.__data__;if(r instanceof Ji){var n=r.__data__;if(!Zi||n.length<a0-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Mo(n)}return r.set(t,e),this.size=r.size,this}var EO=l0;function ua(t){var e=this.__data__=new Ji(t);this.size=e.size}ua.prototype.clear=vO;ua.prototype.delete=RO;ua.prototype.get=xO;ua.prototype.has=NO;ua.prototype.set=EO;var to=ua;function u0(t,e){return t&&Gn(e,Je(e),t)}var OO=u0;function c0(t,e){return t&&Gn(e,Yi(e),t)}var IO=c0;var CO=typeof exports=="object"&&exports&&!exports.nodeType&&exports,SO=CO&&typeof module=="object"&&module&&!module.nodeType&&module,f0=SO&&SO.exports===CO,AO=f0?qt.Buffer:void 0,DO=AO?AO.allocUnsafe:void 0;function d0(t,e){if(e)return t.slice();var r=t.length,n=DO?DO(r):new t.constructor(r);return t.copy(n),n}var bO=d0;function p0(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}var ca=p0;function m0(){return[]}var Uf=m0;var h0=Object.prototype,g0=h0.propertyIsEnumerable,LO=Object.getOwnPropertySymbols,T0=LO?function(t){return t==null?[]:(t=Object(t),ca(LO(t),function(e){return g0.call(t,e)}))}:Uf,fa=T0;function y0(t,e){return Gn(t,fa(t),e)}var kO=y0;var _0=Object.getOwnPropertySymbols,v0=_0?function(t){for(var e=[];t;)aa(e,fa(t)),t=Mf(t);return e}:Uf,Bf=v0;function R0(t,e){return Gn(t,Bf(t),e)}var wO=R0;function x0(t,e,r){var n=e(t);return se(t)?n:aa(n,r(t))}var Wf=x0;function N0(t){return Wf(t,Je,fa)}var Ll=N0;function E0(t){return Wf(t,Yi,Bf)}var Vf=E0;var O0=Hr(qt,"DataView"),Gf=O0;var I0=Hr(qt,"Promise"),jf=I0;var S0=Hr(qt,"Set"),ro=S0;var $O="[object Map]",A0="[object Object]",PO="[object Promise]",MO="[object Set]",FO="[object WeakMap]",UO="[object DataView]",D0=ui(Gf),C0=ui(Zi),b0=ui(jf),L0=ui(ro),k0=ui(Cf),Fo=Ar;(Gf&&Fo(new Gf(new ArrayBuffer(1)))!=UO||Zi&&Fo(new Zi)!=$O||jf&&Fo(jf.resolve())!=PO||ro&&Fo(new ro)!=MO||Cf&&Fo(new Cf)!=FO)&&(Fo=function(t){var e=Ar(t),r=e==A0?t.constructor:void 0,n=r?ui(r):"";if(n)switch(n){case D0:return UO;case C0:return $O;case b0:return PO;case L0:return MO;case k0:return FO}return e});var In=Fo;var w0=Object.prototype,$0=w0.hasOwnProperty;function P0(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&$0.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var BO=P0;var M0=qt.Uint8Array,da=M0;function F0(t){var e=new t.constructor(t.byteLength);return new da(e).set(new da(t)),e}var pa=F0;function U0(t,e){var r=e?pa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var WO=U0;var B0=/\w*$/;function W0(t){var e=new t.constructor(t.source,B0.exec(t));return e.lastIndex=t.lastIndex,e}var VO=W0;var GO=tr?tr.prototype:void 0,jO=GO?GO.valueOf:void 0;function V0(t){return jO?Object(jO.call(t)):{}}var qO=V0;function G0(t,e){var r=e?pa(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var HO=G0;var j0="[object Boolean]",q0="[object Date]",H0="[object Map]",K0="[object Number]",z0="[object RegExp]",Y0="[object Set]",X0="[object String]",J0="[object Symbol]",Z0="[object ArrayBuffer]",Q0="[object DataView]",eF="[object Float32Array]",tF="[object Float64Array]",rF="[object Int8Array]",nF="[object Int16Array]",iF="[object Int32Array]",oF="[object Uint8Array]",sF="[object Uint8ClampedArray]",aF="[object Uint16Array]",lF="[object Uint32Array]";function uF(t,e,r){var n=t.constructor;switch(e){case Z0:return pa(t);case j0:case q0:return new n(+t);case Q0:return WO(t,r);case eF:case tF:case rF:case nF:case iF:case oF:case sF:case aF:case lF:return HO(t,r);case H0:return new n;case K0:case X0:return new n(t);case z0:return VO(t);case Y0:return new n;case J0:return qO(t)}}var KO=uF;function cF(t){return typeof t.constructor=="function"&&!jn(t)?OE(Mf(t)):{}}var zO=cF;var fF="[object Map]";function dF(t){return Bt(t)&&In(t)==fF}var YO=dF;var XO=pn&&pn.isMap,pF=XO?qn(XO):YO,JO=pF;var mF="[object Set]";function hF(t){return Bt(t)&&In(t)==mF}var ZO=hF;var QO=pn&&pn.isSet,gF=QO?qn(QO):ZO,eI=gF;var TF=1,yF=2,_F=4,tI="[object Arguments]",vF="[object Array]",RF="[object Boolean]",xF="[object Date]",NF="[object Error]",rI="[object Function]",EF="[object GeneratorFunction]",OF="[object Map]",IF="[object Number]",nI="[object Object]",SF="[object RegExp]",AF="[object Set]",DF="[object String]",CF="[object Symbol]",bF="[object WeakMap]",LF="[object ArrayBuffer]",kF="[object DataView]",wF="[object Float32Array]",$F="[object Float64Array]",PF="[object Int8Array]",MF="[object Int16Array]",FF="[object Int32Array]",UF="[object Uint8Array]",BF="[object Uint8ClampedArray]",WF="[object Uint16Array]",VF="[object Uint32Array]",Ze={};Ze[tI]=Ze[vF]=Ze[LF]=Ze[kF]=Ze[RF]=Ze[xF]=Ze[wF]=Ze[$F]=Ze[PF]=Ze[MF]=Ze[FF]=Ze[OF]=Ze[IF]=Ze[nI]=Ze[SF]=Ze[AF]=Ze[DF]=Ze[CF]=Ze[UF]=Ze[BF]=Ze[WF]=Ze[VF]=!0;Ze[NF]=Ze[rI]=Ze[bF]=!1;function qf(t,e,r,n,i,o){var s,a=e&TF,l=e&yF,u=e&_F;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!xt(t))return t;var c=se(t);if(c){if(s=BO(t),!a)return SE(t,s)}else{var f=In(t),d=f==rI||f==EF;if(ci(t))return bO(t,a);if(f==nI||f==tI||d&&!i){if(s=l||d?{}:zO(t),!a)return l?wO(t,IO(s,t)):kO(t,OO(s,t))}else{if(!Ze[f])return i?t:{};s=KO(t,f,a)}}o||(o=new to);var m=o.get(t);if(m)return m;o.set(t,s),eI(t)?t.forEach(function(S){s.add(qf(S,e,r,S,t,o))}):JO(t)&&t.forEach(function(S,O){s.set(O,qf(S,e,r,O,t,o))});var v=u?l?Vf:Ll:l?Yi:Je,N=c?void 0:v(t);return bf(N||t,function(S,O){N&&(O=S,S=t[O]),Hi(s,O,qf(S,e,r,O,t,o))}),s}var iI=qf;var GF=4;function jF(t){return iI(t,GF)}var Qe=jF;function qF(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}var Kn=qF;var HF="__lodash_hash_undefined__";function KF(t){return this.__data__.set(t,HF),this}var oI=KF;function zF(t){return this.__data__.has(t)}var sI=zF;function Hf(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Mo;++e<r;)this.add(t[e])}Hf.prototype.add=Hf.prototype.push=oI;Hf.prototype.has=sI;var ma=Hf;function YF(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var Kf=YF;function XF(t,e){return t.has(e)}var ha=XF;var JF=1,ZF=2;function QF(t,e,r,n,i,o){var s=r&JF,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var u=o.get(t),c=o.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,m=r&ZF?new ma:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var v=t[f],N=e[f];if(n)var S=s?n(N,v,f,e,t,o):n(v,N,f,t,e,o);if(S!==void 0){if(S)continue;d=!1;break}if(m){if(!Kf(e,function(O,y){if(!ha(m,y)&&(v===O||i(v,O,r,n,o)))return m.push(y)})){d=!1;break}}else if(!(v===N||i(v,N,r,n,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var zf=QF;function eU(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}var aI=eU;function tU(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var ga=tU;var rU=1,nU=2,iU="[object Boolean]",oU="[object Date]",sU="[object Error]",aU="[object Map]",lU="[object Number]",uU="[object RegExp]",cU="[object Set]",fU="[object String]",dU="[object Symbol]",pU="[object ArrayBuffer]",mU="[object DataView]",lI=tr?tr.prototype:void 0,NT=lI?lI.valueOf:void 0;function hU(t,e,r,n,i,o,s){switch(r){case mU:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case pU:return!(t.byteLength!=e.byteLength||!o(new da(t),new da(e)));case iU:case oU:case lU:return Vn(+t,+e);case sU:return t.name==e.name&&t.message==e.message;case uU:case fU:return t==e+"";case aU:var a=aI;case cU:var l=n&rU;if(a||(a=ga),t.size!=e.size&&!l)return!1;var u=s.get(t);if(u)return u==e;n|=nU,s.set(t,e);var c=zf(a(t),a(e),n,i,o,s);return s.delete(t),c;case dU:if(NT)return NT.call(t)==NT.call(e)}return!1}var uI=hU;var gU=1,TU=Object.prototype,yU=TU.hasOwnProperty;function _U(t,e,r,n,i,o){var s=r&gU,a=Ll(t),l=a.length,u=Ll(e),c=u.length;if(l!=c&&!s)return!1;for(var f=l;f--;){var d=a[f];if(!(s?d in e:yU.call(e,d)))return!1}var m=o.get(t),v=o.get(e);if(m&&v)return m==e&&v==t;var N=!0;o.set(t,e),o.set(e,t);for(var S=s;++f<l;){d=a[f];var O=t[d],y=e[d];if(n)var g=s?n(y,O,d,e,t,o):n(O,y,d,t,e,o);if(!(g===void 0?O===y||i(O,y,r,n,o):g)){N=!1;break}S||(S=d=="constructor")}if(N&&!S){var I=t.constructor,M=e.constructor;I!=M&&"constructor"in t&&"constructor"in e&&!(typeof I=="function"&&I instanceof I&&typeof M=="function"&&M instanceof M)&&(N=!1)}return o.delete(t),o.delete(e),N}var cI=_U;var vU=1,fI="[object Arguments]",dI="[object Array]",Yf="[object Object]",RU=Object.prototype,pI=RU.hasOwnProperty;function xU(t,e,r,n,i,o){var s=se(t),a=se(e),l=s?dI:In(t),u=a?dI:In(e);l=l==fI?Yf:l,u=u==fI?Yf:u;var c=l==Yf,f=u==Yf,d=l==u;if(d&&ci(t)){if(!ci(e))return!1;s=!0,c=!1}if(d&&!c)return o||(o=new to),s||ta(t)?zf(t,e,r,n,i,o):uI(t,e,l,r,n,i,o);if(!(r&vU)){var m=c&&pI.call(t,"__wrapped__"),v=f&&pI.call(e,"__wrapped__");if(m||v){var N=m?t.value():t,S=v?e.value():e;return o||(o=new to),i(N,S,r,n,o)}}return d?(o||(o=new to),cI(t,e,r,n,i,o)):!1}var mI=xU;function hI(t,e,r,n,i){return t===e?!0:t==null||e==null||!Bt(t)&&!Bt(e)?t!==t&&e!==e:mI(t,e,r,n,hI,i)}var Xf=hI;var NU=1,EU=2;function OU(t,e,r,n){var i=r.length,o=i,s=!n;if(t==null)return!o;for(t=Object(t);i--;){var a=r[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=r[i];var l=a[0],u=t[l],c=a[1];if(s&&a[2]){if(u===void 0&&!(l in t))return!1}else{var f=new to;if(n)var d=n(u,c,l,t,e,f);if(!(d===void 0?Xf(c,u,NU|EU,n,f):d))return!1}}return!0}var gI=OU;function IU(t){return t===t&&!xt(t)}var Jf=IU;function SU(t){for(var e=Je(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Jf(i)]}return e}var TI=SU;function AU(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Zf=AU;function DU(t){var e=TI(t);return e.length==1&&e[0][2]?Zf(e[0][0],e[0][1]):function(r){return r===t||gI(r,t,e)}}var yI=DU;function CU(t,e){return t!=null&&e in Object(t)}var _I=CU;function bU(t,e,r){e=eo(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var s=Hn(e[n]);if(!(o=t!=null&&r(t,s)))break;t=t[s]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&ea(i)&&qi(s,i)&&(se(t)||zi(t)))}var Qf=bU;function LU(t,e){return t!=null&&Qf(t,e,_I)}var vI=LU;var kU=1,wU=2;function $U(t,e){return ra(t)&&Jf(e)?Zf(Hn(t),e):function(r){var n=hO(r,t);return n===void 0&&n===e?vI(r,t):Xf(e,n,kU|wU)}}var RI=$U;function PU(t){return function(e){return e==null?void 0:e[t]}}var xI=PU;function MU(t){return function(e){return sa(e,t)}}var NI=MU;function FU(t){return ra(t)?xI(Hn(t)):NI(t)}var EI=FU;function UU(t){return typeof t=="function"?t:t==null?qr:typeof t=="object"?se(t)?RI(t[0],t[1]):yI(t):EI(t)}var bt=UU;function BU(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var s=t[i];e(n,s,r(s),t)}return n}var OI=BU;function WU(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var l=s[t?a:++i];if(r(o[l],l,o)===!1)break}return e}}var II=WU;var VU=II(),SI=VU;function GU(t,e){return t&&SI(t,e,Je)}var AI=GU;function jU(t,e){return function(r,n){if(r==null)return r;if(!Ht(r))return t(r,n);for(var i=r.length,o=e?i:-1,s=Object(r);(e?o--:++o<i)&&n(s[o],o,s)!==!1;);return r}}var DI=jU;var qU=DI(AI),Kr=qU;function HU(t,e,r,n){return Kr(t,function(i,o,s){e(n,i,r(i),s)}),n}var CI=HU;function KU(t,e){return function(r,n){var i=se(r)?OI:CI,o=e?e():{};return i(r,t,bt(n,2),o)}}var bI=KU;var LI=Object.prototype,zU=LI.hasOwnProperty,YU=Qs(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&Ki(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],s=Yi(o),a=-1,l=s.length;++a<l;){var u=s[a],c=t[u];(c===void 0||Vn(c,LI[u])&&!zU.call(t,u))&&(t[u]=o[u])}return t}),Ta=YU;function XU(t){return Bt(t)&&Ht(t)}var ET=XU;function JU(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}var ed=JU;var ZU=200;function QU(t,e,r,n){var i=-1,o=kf,s=!0,a=t.length,l=[],u=e.length;if(!a)return l;r&&(e=Bn(e,qn(r))),n?(o=ed,s=!1):e.length>=ZU&&(o=ha,s=!1,e=new ma(e));e:for(;++i<a;){var c=t[i],f=r==null?c:r(c);if(c=n||c!==0?c:0,s&&f===f){for(var d=u;d--;)if(e[d]===f)continue e;l.push(c)}else o(e,f,n)||l.push(c)}return l}var kI=QU;var e1=Qs(function(t,e){return ET(t)?kI(t,la(e,1,ET,!0)):[]}),no=e1;function t1(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var zn=t1;function r1(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Wn(e),Ff(t,e<0?0:e,n)):[]}var Vt=r1;function n1(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Wn(e),e=n-e,Ff(t,0,e<0?0:e)):[]}var di=n1;function i1(t){return typeof t=="function"?t:qr}var wI=i1;function o1(t,e){var r=se(t)?bf:Kr;return r(t,wI(e))}var Q=o1;function s1(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var $I=s1;function a1(t,e){var r=!0;return Kr(t,function(n,i,o){return r=!!e(n,i,o),r}),r}var PI=a1;function l1(t,e,r){var n=se(t)?$I:PI;return r&&Ki(t,e,r)&&(e=void 0),n(t,bt(e,3))}var Rr=l1;function u1(t,e){var r=[];return Kr(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}var td=u1;function c1(t,e){var r=se(t)?ca:td;return r(t,bt(e,3))}var rr=c1;function f1(t){return function(e,r,n){var i=Object(e);if(!Ht(e)){var o=bt(r,3);e=Je(e),r=function(a){return o(i[a],a,i)}}var s=t(e,r,n);return s>-1?i[o?e[s]:s]:void 0}}var MI=f1;var d1=Math.max;function p1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Wn(r);return i<0&&(i=d1(n+i,0)),Lf(t,bt(e,3),i)}var FI=p1;var m1=MI(FI),Yn=m1;function h1(t){return t&&t.length?t[0]:void 0}var nr=h1;function g1(t,e){var r=-1,n=Ht(t)?Array(t.length):[];return Kr(t,function(i,o,s){n[++r]=e(i,o,s)}),n}var UI=g1;function T1(t,e){var r=se(t)?Bn:UI;return r(t,bt(e,3))}var K=T1;function y1(t,e){return la(K(t,e),1)}var fr=y1;var _1=Object.prototype,v1=_1.hasOwnProperty,R1=bI(function(t,e,r){v1.call(t,r)?t[r].push(e):Zs(t,r,[e])}),OT=R1;var x1=Object.prototype,N1=x1.hasOwnProperty;function E1(t,e){return t!=null&&N1.call(t,e)}var BI=E1;function O1(t,e){return t!=null&&Qf(t,e,BI)}var te=O1;var I1="[object String]";function S1(t){return typeof t=="string"||!se(t)&&Bt(t)&&Ar(t)==I1}var Jt=S1;function A1(t,e){return Bn(e,function(r){return t[r]})}var WI=A1;function D1(t){return t==null?[]:WI(t,Je(t))}var We=D1;var C1=Math.max;function b1(t,e,r,n){t=Ht(t)?t:We(t),r=r&&!n?Wn(r):0;var i=t.length;return r<0&&(r=C1(i+r,0)),Jt(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&Js(t,e,r)>-1}var ft=b1;var L1=Math.max;function k1(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Wn(r);return i<0&&(i=L1(n+i,0)),Js(t,e,i)}var rd=k1;var w1="[object Map]",$1="[object Set]",P1=Object.prototype,M1=P1.hasOwnProperty;function F1(t){if(t==null)return!0;if(Ht(t)&&(se(t)||typeof t=="string"||typeof t.splice=="function"||ci(t)||ta(t)||zi(t)))return!t.length;var e=In(t);if(e==w1||e==$1)return!t.size;if(jn(t))return!Pf(t).length;for(var r in t)if(M1.call(t,r))return!1;return!0}var ve=F1;var U1="[object RegExp]";function B1(t){return Bt(t)&&Ar(t)==U1}var VI=B1;var GI=pn&&pn.isRegExp,W1=GI?qn(GI):VI,mn=W1;function V1(t){return t===void 0}var xr=V1;function G1(t,e){return t<e}var jI=G1;function j1(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],s=e(o);if(s!=null&&(a===void 0?s===s&&!Un(s):r(s,a)))var a=s,l=o}return l}var qI=j1;function q1(t){return t&&t.length?qI(t,qr,jI):void 0}var HI=q1;var H1="Expected a function";function K1(t){if(typeof t!="function")throw new TypeError(H1);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var KI=K1;function z1(t,e,r,n){if(!xt(t))return t;e=eo(e,t);for(var i=-1,o=e.length,s=o-1,a=t;a!=null&&++i<o;){var l=Hn(e[i]),u=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=s){var c=a[l];u=n?n(c,l,a):void 0,u===void 0&&(u=xt(c)?c:qi(e[i+1])?[]:{})}Hi(a,l,u),a=a[l]}return t}var zI=z1;function Y1(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var s=e[n],a=sa(t,s);r(a,s)&&zI(o,eo(s,t),a)}return o}var YI=Y1;function X1(t,e){if(t==null)return{};var r=Bn(Vf(t),function(n){return[n]});return e=bt(e),YI(t,r,function(n,i){return e(n,i[0])})}var zr=X1;function J1(t,e,r,n,i){return i(t,function(o,s,a){r=n?(n=!1,o):e(r,o,s,a)}),r}var XI=J1;function Z1(t,e,r){var n=se(t)?_O:XI,i=arguments.length<3;return n(t,bt(e,4),r,i,Kr)}var Et=Z1;function Q1(t,e){var r=se(t)?ca:td;return r(t,KI(bt(e,3)))}var io=Q1;function eB(t,e){var r;return Kr(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}var JI=eB;function tB(t,e,r){var n=se(t)?Kf:JI;return r&&Ki(t,e,r)&&(e=void 0),n(t,bt(e,3))}var kl=tB;var rB=1/0,nB=ro&&1/ga(new ro([,-0]))[1]==rB?function(t){return new ro(t)}:Nt,ZI=nB;var iB=200;function oB(t,e,r){var n=-1,i=kf,o=t.length,s=!0,a=[],l=a;if(r)s=!1,i=ed;else if(o>=iB){var u=e?null:ZI(t);if(u)return ga(u);s=!1,i=ha,l=new ma}else l=e?[]:a;e:for(;++n<o;){var c=t[n],f=e?e(c):c;if(c=r||c!==0?c:0,s&&f===f){for(var d=l.length;d--;)if(l[d]===f)continue e;e&&l.push(f),a.push(c)}else i(l,f,r)||(l!==a&&l.push(f),a.push(c))}return a}var nd=oB;function sB(t){return t&&t.length?nd(t):[]}var ya=sB;function aB(t,e){return t&&t.length?nd(t,bt(e,2)):[]}var QI=aB;function _a(t){console&&console.error&&console.error(`Error: ${t}`)}function wl(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function $l(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function Pl(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function lB(t){return uB(t)?t.LABEL:t.name}function uB(t){return Jt(t.LABEL)&&t.LABEL!==""}var rn=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),Q(this.definition,r=>{r.accept(e)})}},Me=class extends rn{constructor(e){super([]),this.idx=1,cr(this,zr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Cr=class extends rn{constructor(e){super(e.definition),this.orgText="",cr(this,zr(e,r=>r!==void 0))}},et=class extends rn{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,cr(this,zr(e,r=>r!==void 0))}},Fe=class extends rn{constructor(e){super(e.definition),this.idx=1,cr(this,zr(e,r=>r!==void 0))}},tt=class extends rn{constructor(e){super(e.definition),this.idx=1,cr(this,zr(e,r=>r!==void 0))}},rt=class extends rn{constructor(e){super(e.definition),this.idx=1,cr(this,zr(e,r=>r!==void 0))}},Ie=class extends rn{constructor(e){super(e.definition),this.idx=1,cr(this,zr(e,r=>r!==void 0))}},He=class extends rn{constructor(e){super(e.definition),this.idx=1,cr(this,zr(e,r=>r!==void 0))}},Ke=class extends rn{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,cr(this,zr(e,r=>r!==void 0))}},Re=class{constructor(e){this.idx=1,cr(this,zr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function id(t){return K(t,va)}function va(t){function e(r){return K(r,va)}if(t instanceof Me){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return Jt(t.label)&&(r.label=t.label),r}else{if(t instanceof et)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Fe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof tt)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof rt)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:va(new Re({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof He)return{type:"RepetitionWithSeparator",idx:t.idx,separator:va(new Re({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Ie)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Ke)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof Re){let r={type:"Terminal",name:t.terminalType.name,label:lB(t.terminalType),idx:t.idx};Jt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=mn(n)?n.source:n),r}else{if(t instanceof Cr)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var br=class{visit(e){let r=e;switch(r.constructor){case Me:return this.visitNonTerminal(r);case et:return this.visitAlternative(r);case Fe:return this.visitOption(r);case tt:return this.visitRepetitionMandatory(r);case rt:return this.visitRepetitionMandatoryWithSeparator(r);case He:return this.visitRepetitionWithSeparator(r);case Ie:return this.visitRepetition(r);case Ke:return this.visitAlternation(r);case Re:return this.visitTerminal(r);case Cr:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function IT(t){return t instanceof et||t instanceof Fe||t instanceof Ie||t instanceof tt||t instanceof rt||t instanceof He||t instanceof Re||t instanceof Cr}function Uo(t,e=[]){return t instanceof Fe||t instanceof Ie||t instanceof He?!0:t instanceof Ke?kl(t.definition,n=>Uo(n,e)):t instanceof Me&&ft(e,t)?!1:t instanceof rn?(t instanceof Me&&e.push(t),Rr(t.definition,n=>Uo(n,e))):!1}function ST(t){return t instanceof Ke}function Yr(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof tt)return"AT_LEAST_ONE";if(t instanceof rt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ie)return"MANY";if(t instanceof Re)return"CONSUME";throw Error("non exhaustive match")}var pi=class{walk(e,r=[]){Q(e.definition,(n,i)=>{let o=Vt(e.definition,i+1);if(n instanceof Me)this.walkProdRef(n,o,r);else if(n instanceof Re)this.walkTerminal(n,o,r);else if(n instanceof et)this.walkFlat(n,o,r);else if(n instanceof Fe)this.walkOption(n,o,r);else if(n instanceof tt)this.walkAtLeastOne(n,o,r);else if(n instanceof rt)this.walkAtLeastOneSep(n,o,r);else if(n instanceof He)this.walkManySep(n,o,r);else if(n instanceof Ie)this.walkMany(n,o,r);else if(n instanceof Ke)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let i=r.concat(n);this.walk(e,i)}walkOption(e,r,n){let i=r.concat(n);this.walk(e,i)}walkAtLeastOne(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkAtLeastOneSep(e,r,n){let i=eS(e,r,n);this.walk(e,i)}walkMany(e,r,n){let i=[new Fe({definition:e.definition})].concat(r,n);this.walk(e,i)}walkManySep(e,r,n){let i=eS(e,r,n);this.walk(e,i)}walkOr(e,r,n){let i=r.concat(n);Q(e.definition,o=>{let s=new et({definition:[o]});this.walk(s,i)})}};function eS(t,e,r){return[new Fe({definition:[new Re({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function Bo(t){if(t instanceof Me)return Bo(t.referencedRule);if(t instanceof Re)return dB(t);if(IT(t))return cB(t);if(ST(t))return fB(t);throw Error("non exhaustive match")}function cB(t){let e=[],r=t.definition,n=0,i=r.length>n,o,s=!0;for(;i&&s;)o=r[n],s=Uo(o),e=e.concat(Bo(o)),n=n+1,i=r.length>n;return ya(e)}function fB(t){let e=K(t.definition,r=>Bo(r));return ya(Wt(e))}function dB(t){return[t.terminalType]}var od="_~IN~_";var AT=class extends pi{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let i=pB(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),s=new et({definition:o}),a=Bo(s);this.follows[i]=a}};function tS(t){let e={};return Q(t,r=>{let n=new AT(r).startWalking();cr(e,n)}),e}function pB(t,e){return t.name+e+od}var sd={},mB=new bo;function Ra(t){let e=t.toString();if(sd.hasOwnProperty(e))return sd[e];{let r=mB.pattern(e);return sd[e]=r,r}}function rS(){sd={}}var iS="Complement Sets are not supported for first char optimization",Ml=`Unable to use "first char" lexer optimizations:
`;function oS(t,e=!1){try{let r=Ra(t);return DT(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===iS)e&&wl(`${Ml}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),_a(`${Ml}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function DT(t,e,r){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)DT(t.value[i],e,r);break;case"Alternative":let n=t.value;for(let i=0;i<n.length;i++){let o=n[i];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=o;switch(s.type){case"Character":ad(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(iS);Q(s.value,l=>{if(typeof l=="number")ad(l,e,r);else{let u=l;if(r===!0)for(let c=u.from;c<=u.to;c++)ad(c,e,r);else{for(let c=u.from;c<=u.to&&c<xa;c++)ad(c,e,r);if(u.to>=xa){let c=u.from>=xa?u.from:xa,f=u.to,d=Xn(c),m=Xn(f);for(let v=d;v<=m;v++)e[v]=v}}}});break;case"Group":DT(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&CT(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return We(e)}function ad(t,e,r){let n=Xn(t);e[n]=n,r===!0&&hB(t,e)}function hB(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let i=Xn(n.charCodeAt(0));e[i]=i}else{let i=r.toLowerCase();if(i!==r){let o=Xn(i.charCodeAt(0));e[o]=o}}}function nS(t,e){return Yn(t.value,r=>{if(typeof r=="number")return ft(e,r);{let n=r;return Yn(e,i=>n.from<=i&&i<=n.to)!==void 0}})}function CT(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?se(t.value)?Rr(t.value,CT):CT(t.value):!1}var bT=class extends Fn{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){ft(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?nS(e,this.targetCharCodes)===void 0&&(this.found=!0):nS(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function ld(t,e){if(e instanceof RegExp){let r=Ra(e),n=new bT(t);return n.visit(r),n.found}else return Yn(e,r=>ft(t,r.charCodeAt(0)))!==void 0}var Wo="PATTERN",Na="defaultMode",ud="modes",kT=typeof new RegExp("(?:)").sticky=="boolean";function lS(t,e){e=Ta(e,{useSticky:kT,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(y,g)=>g()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{kB()});let n;r("Reject Lexer.NA",()=>{n=io(t,y=>y[Wo]===Lt.NA)});let i=!1,o;r("Transform Patterns",()=>{i=!1,o=K(n,y=>{let g=y[Wo];if(mn(g)){let I=g.source;return I.length===1&&I!=="^"&&I!=="$"&&I!=="."&&!g.ignoreCase?I:I.length===2&&I[0]==="\\"&&!ft(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],I[1])?I[1]:e.useSticky?aS(g):sS(g)}else{if(Dr(g))return i=!0,{exec:g};if(typeof g=="object")return i=!0,g;if(typeof g=="string"){if(g.length===1)return g;{let I=g.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),M=new RegExp(I);return e.useSticky?aS(M):sS(M)}}else throw Error("non exhaustive match")}})});let s,a,l,u,c;r("misc mapping",()=>{s=K(n,y=>y.tokenTypeIdx),a=K(n,y=>{let g=y.GROUP;if(g!==Lt.SKIPPED){if(Jt(g))return g;if(xr(g))return!1;throw Error("non exhaustive match")}}),l=K(n,y=>{let g=y.LONGER_ALT;if(g)return se(g)?K(g,M=>rd(n,M)):[rd(n,g)]}),u=K(n,y=>y.PUSH_MODE),c=K(n,y=>te(y,"POP_MODE"))});let f;r("Line Terminator Handling",()=>{let y=gS(e.lineTerminatorCharacters);f=K(n,g=>!1),e.positionTracking!=="onlyOffset"&&(f=K(n,g=>te(g,"LINE_BREAKS")?!!g.LINE_BREAKS:hS(g,y)===!1&&ld(y,g.PATTERN)))});let d,m,v,N;r("Misc Mapping #2",()=>{d=K(n,pS),m=K(o,bB),v=Et(n,(y,g)=>{let I=g.GROUP;return Jt(I)&&I!==Lt.SKIPPED&&(y[I]=[]),y},{}),N=K(o,(y,g)=>({pattern:o[g],longerAlt:l[g],canLineTerminator:f[g],isCustom:d[g],short:m[g],group:a[g],push:u[g],pop:c[g],tokenTypeIdx:s[g],tokenType:n[g]}))});let S=!0,O=[];return e.safeMode||r("First Char Optimization",()=>{O=Et(n,(y,g,I)=>{if(typeof g.PATTERN=="string"){let M=g.PATTERN.charCodeAt(0),J=Xn(M);LT(y,J,N[I])}else if(se(g.START_CHARS_HINT)){let M;Q(g.START_CHARS_HINT,J=>{let ce=typeof J=="string"?J.charCodeAt(0):J,_e=Xn(ce);M!==_e&&(M=_e,LT(y,_e,N[I]))})}else if(mn(g.PATTERN))if(g.PATTERN.unicode)S=!1,e.ensureOptimizations&&_a(`${Ml}	Unable to analyze < ${g.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let M=oS(g.PATTERN,e.ensureOptimizations);ve(M)&&(S=!1),Q(M,J=>{LT(y,J,N[I])})}else e.ensureOptimizations&&_a(`${Ml}	TokenType: <${g.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),S=!1;return y},[])}),{emptyGroups:v,patternIdxToConfig:N,charCodeToPatternIdxToConfig:O,hasCustom:i,canBeOptimized:S}}function uS(t,e){let r=[],n=TB(t);r=r.concat(n.errors);let i=yB(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(gB(o)),r=r.concat(IB(o)),r=r.concat(SB(o,e)),r=r.concat(AB(o)),r}function gB(t){let e=[],r=rr(t,n=>mn(n[Wo]));return e=e.concat(vB(r)),e=e.concat(NB(r)),e=e.concat(EB(r)),e=e.concat(OB(r)),e=e.concat(RB(r)),e}function TB(t){let e=rr(t,i=>!te(i,Wo)),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:dt.MISSING_PATTERN,tokenTypes:[i]})),n=no(t,e);return{errors:r,valid:n}}function yB(t){let e=rr(t,i=>{let o=i[Wo];return!mn(o)&&!Dr(o)&&!te(o,"exec")&&!Jt(o)}),r=K(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:dt.INVALID_PATTERN,tokenTypes:[i]})),n=no(t,e);return{errors:r,valid:n}}var _B=/[^\\][$]/;function vB(t){class e extends Fn{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=rr(t,i=>{let o=i.PATTERN;try{let s=Ra(o),a=new e;return a.visit(s),a.found}catch{return _B.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:dt.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function RB(t){let e=rr(t,n=>n.PATTERN.test(""));return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:dt.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var xB=/[^\\[][\^]|^\^/;function NB(t){class e extends Fn{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=rr(t,i=>{let o=i.PATTERN;try{let s=Ra(o),a=new e;return a.visit(s),a.found}catch{return xB.test(o.source)}});return K(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:dt.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function EB(t){let e=rr(t,n=>{let i=n[Wo];return i instanceof RegExp&&(i.multiline||i.global)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:dt.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function OB(t){let e=[],r=K(t,o=>Et(t,(s,a)=>(o.PATTERN.source===a.PATTERN.source&&!ft(e,a)&&a.PATTERN!==Lt.NA&&(e.push(a),s.push(a)),s),[]));r=Kn(r);let n=rr(r,o=>o.length>1);return K(n,o=>{let s=K(o,l=>l.name);return{message:`The same RegExp pattern ->${nr(o).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:dt.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function IB(t){let e=rr(t,n=>{if(!te(n,"GROUP"))return!1;let i=n.GROUP;return i!==Lt.SKIPPED&&i!==Lt.NA&&!Jt(i)});return K(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:dt.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function SB(t,e){let r=rr(t,i=>i.PUSH_MODE!==void 0&&!ft(e,i.PUSH_MODE));return K(r,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:dt.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function AB(t){let e=[],r=Et(t,(n,i,o)=>{let s=i.PATTERN;return s===Lt.NA||(Jt(s)?n.push({str:s,idx:o,tokenType:i}):mn(s)&&CB(s)&&n.push({str:s.source,idx:o,tokenType:i})),n},[]);return Q(t,(n,i)=>{Q(r,({str:o,idx:s,tokenType:a})=>{if(i<s&&DB(o,n.PATTERN)){let l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:dt.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function DB(t,e){if(mn(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(Dr(e))return e(t,0,[],{});if(te(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function CB(t){return Yn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function sS(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function aS(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function cS(t,e,r){let n=[];return te(t,Na)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Na+`> property in its definition
`,type:dt.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),te(t,ud)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+ud+`> property in its definition
`,type:dt.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),te(t,ud)&&te(t,Na)&&!te(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${Na}: <${t.defaultMode}>which does not exist
`,type:dt.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),te(t,ud)&&Q(t.modes,(i,o)=>{Q(i,(s,a)=>{if(xr(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${a}>
`,type:dt.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(te(s,"LONGER_ALT")){let l=se(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];Q(l,u=>{!xr(u)&&!ft(i,u)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${s.name}> outside of mode <${o}>
`,type:dt.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function fS(t,e,r){let n=[],i=!1,o=Kn(Wt(We(t.modes))),s=io(o,l=>l[Wo]===Lt.NA),a=gS(r);return e&&Q(s,l=>{let u=hS(l,a);if(u!==!1){let f={message:LB(l,u),type:u.issue,tokenType:l};n.push(f)}else te(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):ld(a,l.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:dt.NO_LINE_BREAKS_FLAGS}),n}function dS(t){let e={},r=Je(t);return Q(r,n=>{let i=t[n];if(se(i))e[n]=[];else throw Error("non exhaustive match")}),e}function pS(t){let e=t.PATTERN;if(mn(e))return!1;if(Dr(e))return!0;if(te(e,"exec"))return!0;if(Jt(e))return!1;throw Error("non exhaustive match")}function bB(t){return Jt(t)&&t.length===1?t.charCodeAt(0):!1}var mS={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function hS(t,e){if(te(t,"LINE_BREAKS"))return!1;if(mn(t.PATTERN)){try{ld(e,t.PATTERN)}catch(r){return{issue:dt.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(Jt(t.PATTERN))return!1;if(pS(t))return{issue:dt.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function LB(t,e){if(e.issue===dt.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===dt.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function gS(t){return K(t,r=>Jt(r)?r.charCodeAt(0):r)}function LT(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var xa=256,cd=[];function Xn(t){return t<xa?t:cd[t]}function kB(){if(ve(cd)){cd=new Array(65536);for(let t=0;t<65536;t++)cd[t]=t>255?255+~~(t/255):t}}function mi(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function Ea(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var TS=1,_S={};function hi(t){let e=wB(t);$B(e),MB(e),PB(e),Q(e,r=>{r.isParent=r.categoryMatches.length>0})}function wB(t){let e=Qe(t),r=t,n=!0;for(;n;){r=Kn(Wt(K(r,o=>o.CATEGORIES)));let i=no(r,e);e=e.concat(i),ve(i)?n=!1:r=i}return e}function $B(t){Q(t,e=>{wT(e)||(_S[TS]=e,e.tokenTypeIdx=TS++),yS(e)&&!se(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),yS(e)||(e.CATEGORIES=[]),FB(e)||(e.categoryMatches=[]),UB(e)||(e.categoryMatchesMap={})})}function PB(t){Q(t,e=>{e.categoryMatches=[],Q(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(_S[n].tokenTypeIdx)})})}function MB(t){Q(t,e=>{vS([],e)})}function vS(t,e){Q(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),Q(e.CATEGORIES,r=>{let n=t.concat(e);ft(n,r)||vS(n,r)})}function wT(t){return te(t,"tokenTypeIdx")}function yS(t){return te(t,"CATEGORIES")}function FB(t){return te(t,"categoryMatches")}function UB(t){return te(t,"categoryMatchesMap")}function RS(t){return te(t,"tokenTypeIdx")}var $T={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var dt;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(dt||(dt={}));var Fl={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:$T,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Fl);var Lt=class{constructor(e,r=Fl){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:a,value:l}=$l(o),u=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(`${s}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=cr({},Fl,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Fl.lineTerminatorsPattern)this.config.lineTerminatorsPattern=mS;else if(this.config.lineTerminatorCharacters===Fl.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),se(e)?i={modes:{defaultMode:Qe(e)},defaultMode:Na}:(o=!1,i=Qe(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(cS(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(fS(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},Q(i.modes,(a,l)=>{i.modes[l]=io(a,u=>xr(u))});let s=Je(i.modes);if(Q(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(uS(a,s))}),ve(this.lexerDefinitionErrors)){hi(a);let u;this.TRACE_INIT("analyzeTokenTypes",()=>{u=lS(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=u.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=u.charCodeToPatternIdxToConfig,this.emptyGroups=cr({},this.emptyGroups,u.emptyGroups),this.hasCustom=u.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=u.canBeOptimized}})}),this.defaultMode=i.defaultMode,!ve(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=K(this.lexerDefinitionErrors,u=>u.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}Q(this.lexerDefinitionWarning,a=>{wl(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(kT?(this.chopInput=qr,this.match=this.matchWithTest):(this.updateLastIndex=Nt,this.match=this.matchWithExec),o&&(this.handleModes=Nt),this.trackStartLines===!1&&(this.computeNewColumn=qr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=Nt),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=Et(this.canModeBeOptimized,(l,u,c)=>(u===!1&&l.push(c),l),[]);if(r.ensureOptimizations&&!ve(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{rS()}),this.TRACE_INIT("toFastProperties",()=>{Pl(this)})})}tokenize(e,r=this.defaultMode){if(!ve(this.lexerDefinitionErrors)){let i=K(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,i,o,s,a,l,u,c,f,d,m,v,N,S,O,y,g=e,I=g.length,M=0,J=0,ce=this.hasCustom?0:Math.floor(e.length/10),_e=new Array(ce),Ge=[],Ce=this.trackStartLines?1:void 0,j=this.trackStartLines?1:void 0,k=dS(this.emptyGroups),B=this.trackStartLines,G=this.config.lineTerminatorsPattern,ie=0,z=[],$=[],w=[],le=[];Object.freeze(le);let me;function Ae(){return z}function sr(ht){let Xt=Xn(ht),wt=$[Xt];return wt===void 0?le:wt}let Ei=ht=>{if(w.length===1&&ht.tokenType.PUSH_MODE===void 0){let Xt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ht);Ge.push({offset:ht.startOffset,line:ht.startLine,column:ht.startColumn,length:ht.image.length,message:Xt})}else{w.pop();let Xt=zn(w);z=this.patternIdxToConfig[Xt],$=this.charCodeToPatternIdxToConfig[Xt],ie=z.length;let wt=this.canModeBeOptimized[Xt]&&this.config.safeMode===!1;$&&wt?me=sr:me=Ae}};function je(ht){w.push(ht),$=this.charCodeToPatternIdxToConfig[ht],z=this.patternIdxToConfig[ht],ie=z.length,ie=z.length;let Xt=this.canModeBeOptimized[ht]&&this.config.safeMode===!1;$&&Xt?me=sr:me=Ae}je.call(this,r);let Yt,ti=this.config.recoveryEnabled;for(;M<I;){l=null;let ht=g.charCodeAt(M),Xt=me(ht),wt=Xt.length;for(n=0;n<wt;n++){Yt=Xt[n];let $t=Yt.pattern;u=null;let gt=Yt.short;if(gt!==!1?ht===gt&&(l=$t):Yt.isCustom===!0?(y=$t.exec(g,M,_e,k),y!==null?(l=y[0],y.payload!==void 0&&(u=y.payload)):l=null):(this.updateLastIndex($t,M),l=this.match($t,e,M)),l!==null){if(a=Yt.longerAlt,a!==void 0){let Tt=a.length;for(o=0;o<Tt;o++){let mr=z[a[o]],Or=mr.pattern;if(c=null,mr.isCustom===!0?(y=Or.exec(g,M,_e,k),y!==null?(s=y[0],y.payload!==void 0&&(c=y.payload)):s=null):(this.updateLastIndex(Or,M),s=this.match(Or,e,M)),s&&s.length>l.length){l=s,u=c,Yt=mr;break}}}break}}if(l!==null){if(f=l.length,d=Yt.group,d!==void 0&&(m=Yt.tokenTypeIdx,v=this.createTokenInstance(l,M,m,Yt.tokenType,Ce,j,f),this.handlePayload(v,u),d===!1?J=this.addToken(_e,J,v):k[d].push(v)),e=this.chopInput(e,f),M=M+f,j=this.computeNewColumn(j,f),B===!0&&Yt.canLineTerminator===!0){let $t=0,gt,Tt;G.lastIndex=0;do gt=G.test(l),gt===!0&&(Tt=G.lastIndex-1,$t++);while(gt===!0);$t!==0&&(Ce=Ce+$t,j=f-Tt,this.updateTokenEndLineColumnLocation(v,d,Tt,$t,Ce,j,f))}this.handleModes(Yt,Ei,je,v)}else{let $t=M,gt=Ce,Tt=j,mr=ti===!1;for(;mr===!1&&M<I;)for(e=this.chopInput(e,1),M++,i=0;i<ie;i++){let Or=z[i],Jr=Or.pattern,ri=Or.short;if(ri!==!1?g.charCodeAt(M)===ri&&(mr=!0):Or.isCustom===!0?mr=Jr.exec(g,M,_e,k)!==null:(this.updateLastIndex(Jr,M),mr=Jr.exec(e)!==null),mr===!0)break}if(N=M-$t,j=this.computeNewColumn(j,N),O=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(g,$t,N,gt,Tt),Ge.push({offset:$t,line:gt,column:Tt,length:N,message:O}),ti===!1)break}}return this.hasCustom||(_e.length=J),{tokens:_e,groups:k,errors:Ge}}handleModes(e,r,n,i){if(e.pop===!0){let o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,i,o,s,a){let l,u;r!==void 0&&(l=n===a-1,u=l?-1:0,i===1&&l===!0||(e.endLine=o+u,e.endColumn=s-1+-u))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}}createStartOnlyToken(e,r,n,i,o,s){return{image:e,startOffset:r,startLine:o,startColumn:s,tokenTypeIdx:n,tokenType:i}}createFullToken(e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:o,endLine:o,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:i}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};Lt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";Lt.NA=/NOT_APPLICABLE/;function gi(t){return PT(t)?t.LABEL:t.name}function PT(t){return Jt(t.LABEL)&&t.LABEL!==""}var BB="parent",xS="categories",NS="label",ES="group",OS="push_mode",IS="pop_mode",SS="longer_alt",AS="line_breaks",DS="start_chars_hint";function fd(t){return WB(t)}function WB(t){let e=t.pattern,r={};if(r.name=t.name,xr(e)||(r.PATTERN=e),te(t,BB))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return te(t,xS)&&(r.CATEGORIES=t[xS]),hi([r]),te(t,NS)&&(r.LABEL=t[NS]),te(t,ES)&&(r.GROUP=t[ES]),te(t,IS)&&(r.POP_MODE=t[IS]),te(t,OS)&&(r.PUSH_MODE=t[OS]),te(t,SS)&&(r.LONGER_ALT=t[SS]),te(t,AS)&&(r.LINE_BREAKS=t[AS]),te(t,DS)&&(r.START_CHARS_HINT=t[DS]),r}var nn=fd({name:"EOF",pattern:Lt.NA});hi([nn]);function Vo(t,e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Ul(t,e){return mi(t,e)}var Ti={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${PT(t)?`--> ${gi(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:i}){let o="Expecting: ",a=`
but found: '`+nr(e).image+"'";if(n)return o+n+a;{let l=Et(t,(d,m)=>d.concat(m),[]),u=K(l,d=>`[${K(d,m=>gi(m)).join(", ")}]`),f=`one of these possible Token sequences:
${K(u,(d,m)=>`  ${m+1}. ${d}`).join(`
`)}`;return o+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let i="Expecting: ",s=`
but found: '`+nr(e).image+"'";if(r)return i+r+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${K(t,u=>`[${K(u,c=>gi(c)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(Ti);var CS={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Sn={buildDuplicateFoundError(t,e){function r(c){return c instanceof Re?c.terminalType.name:c instanceof Me?c.nonTerminalName:""}let n=t.name,i=nr(e),o=i.idx,s=Yr(i),a=r(i),l=o>0,u=`->${s}${l?o:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return u=u.replace(/[ \t]+/g," "),u=u.replace(/\s\s+/g,`
`),u},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=K(t.prefixPath,i=>gi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=K(t.prefixPath,i=>gi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=Yr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=K(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Cr?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function bS(t,e){let r=new MT(t,e);return r.resolveRefs(),r.errors}var MT=class extends br{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){Q(We(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:Zt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var FT=class extends pi{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Qe(this.path.ruleStack).reverse(),this.occurrenceStack=Qe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let i=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){ve(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},dd=class extends FT{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let i=r.concat(n),o=new et({definition:i});this.possibleTokTypes=Bo(o),this.found=!0}}},Oa=class extends pi{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},pd=class extends Oa{walkMany(e,r,n){if(e.idx===this.occurrence){let i=nr(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,r,n)}},Bl=class extends Oa{walkManySep(e,r,n){if(e.idx===this.occurrence){let i=nr(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,r,n)}},md=class extends Oa{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let i=nr(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,r,n)}},Wl=class extends Oa{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let i=nr(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof Re&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,r,n)}};function hd(t,e,r=[]){r=Qe(r);let n=[],i=0;function o(a){return a.concat(Vt(t,i+1))}function s(a){let l=hd(o(a),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){let a=t[i];if(a instanceof et)return s(a.definition);if(a instanceof Me)return s(a.definition);if(a instanceof Fe)n=s(a.definition);else if(a instanceof tt){let l=a.definition.concat([new Ie({definition:a.definition})]);return s(l)}else if(a instanceof rt){let l=[new et({definition:a.definition}),new Ie({definition:[new Re({terminalType:a.separator})].concat(a.definition)})];return s(l)}else if(a instanceof He){let l=a.definition.concat([new Ie({definition:[new Re({terminalType:a.separator})].concat(a.definition)})]);n=s(l)}else if(a instanceof Ie){let l=a.definition.concat([new Ie({definition:a.definition})]);n=s(l)}else{if(a instanceof Ke)return Q(a.definition,l=>{ve(l.definition)===!1&&(n=s(l.definition))}),n;if(a instanceof Re)r.push(a.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:Vt(t,i)}),n}function gd(t,e,r,n){let i="EXIT_NONE_TERMINAL",o=[i],s="EXIT_ALTERNATIVE",a=!1,l=e.length,u=l-n-1,c=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ve(f);){let d=f.pop();if(d===s){a&&zn(f).idx<=u&&f.pop();continue}let m=d.def,v=d.idx,N=d.ruleStack,S=d.occurrenceStack;if(ve(m))continue;let O=m[0];if(O===i){let y={idx:v,def:Vt(m),ruleStack:di(N),occurrenceStack:di(S)};f.push(y)}else if(O instanceof Re)if(v<l-1){let y=v+1,g=e[y];if(r(g,O.terminalType)){let I={idx:y,def:Vt(m),ruleStack:N,occurrenceStack:S};f.push(I)}}else if(v===l-1)c.push({nextTokenType:O.terminalType,nextTokenOccurrence:O.idx,ruleStack:N,occurrenceStack:S}),a=!0;else throw Error("non exhaustive match");else if(O instanceof Me){let y=Qe(N);y.push(O.nonTerminalName);let g=Qe(S);g.push(O.idx);let I={idx:v,def:O.definition.concat(o,Vt(m)),ruleStack:y,occurrenceStack:g};f.push(I)}else if(O instanceof Fe){let y={idx:v,def:Vt(m),ruleStack:N,occurrenceStack:S};f.push(y),f.push(s);let g={idx:v,def:O.definition.concat(Vt(m)),ruleStack:N,occurrenceStack:S};f.push(g)}else if(O instanceof tt){let y=new Ie({definition:O.definition,idx:O.idx}),g=O.definition.concat([y],Vt(m)),I={idx:v,def:g,ruleStack:N,occurrenceStack:S};f.push(I)}else if(O instanceof rt){let y=new Re({terminalType:O.separator}),g=new Ie({definition:[y].concat(O.definition),idx:O.idx}),I=O.definition.concat([g],Vt(m)),M={idx:v,def:I,ruleStack:N,occurrenceStack:S};f.push(M)}else if(O instanceof He){let y={idx:v,def:Vt(m),ruleStack:N,occurrenceStack:S};f.push(y),f.push(s);let g=new Re({terminalType:O.separator}),I=new Ie({definition:[g].concat(O.definition),idx:O.idx}),M=O.definition.concat([I],Vt(m)),J={idx:v,def:M,ruleStack:N,occurrenceStack:S};f.push(J)}else if(O instanceof Ie){let y={idx:v,def:Vt(m),ruleStack:N,occurrenceStack:S};f.push(y),f.push(s);let g=new Ie({definition:O.definition,idx:O.idx}),I=O.definition.concat([g],Vt(m)),M={idx:v,def:I,ruleStack:N,occurrenceStack:S};f.push(M)}else if(O instanceof Ke)for(let y=O.definition.length-1;y>=0;y--){let g=O.definition[y],I={idx:v,def:g.definition.concat(Vt(m)),ruleStack:N,occurrenceStack:S};f.push(I),f.push(s)}else if(O instanceof et)f.push({idx:v,def:O.definition.concat(Vt(m)),ruleStack:N,occurrenceStack:S});else if(O instanceof Cr)f.push(VB(O,v,N,S));else throw Error("non exhaustive match")}return c}function VB(t,e,r,n){let i=Qe(r);i.push(t.name);let o=Qe(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}var pt;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(pt||(pt={}));function Vl(t){if(t instanceof Fe||t==="Option")return pt.OPTION;if(t instanceof Ie||t==="Repetition")return pt.REPETITION;if(t instanceof tt||t==="RepetitionMandatory")return pt.REPETITION_MANDATORY;if(t instanceof rt||t==="RepetitionMandatoryWithSeparator")return pt.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof He||t==="RepetitionWithSeparator")return pt.REPETITION_WITH_SEPARATOR;if(t instanceof Ke||t==="Alternation")return pt.ALTERNATION;throw Error("non exhaustive match")}function yd(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:i}=t,o=Vl(n);return o===pt.ALTERNATION?Ia(e,r,i):Sa(e,r,o,i)}function kS(t,e,r,n,i,o){let s=Ia(t,e,r),a=US(s)?Ea:mi;return o(s,n,a,i)}function wS(t,e,r,n,i,o){let s=Sa(t,e,i,r),a=US(s)?Ea:mi;return o(s[0],a,n)}function $S(t,e,r,n){let i=t.length,o=Rr(t,s=>Rr(s,a=>a.length===1));if(e)return function(s){let a=K(s,l=>l.GATE);for(let l=0;l<i;l++){let u=t[l],c=u.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let d=0;d<c;d++){let m=u[d],v=m.length;for(let N=0;N<v;N++){let S=this.LA(N+1);if(r(S,m[N])===!1)continue e}return l}}};if(o&&!n){let s=K(t,l=>Wt(l)),a=Et(s,(l,u,c)=>(Q(u,f=>{te(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=c),Q(f.categoryMatches,d=>{te(l,d)||(l[d]=c)})}),l),{});return function(){let l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let a=t[s],l=a.length;e:for(let u=0;u<l;u++){let c=a[u],f=c.length;for(let d=0;d<f;d++){let m=this.LA(d+1);if(r(m,c[d])===!1)continue e}return s}}}}function PS(t,e,r){let n=Rr(t,o=>o.length===1),i=t.length;if(n&&!r){let o=Wt(t);if(o.length===1&&ve(o[0].categoryMatches)){let a=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=Et(o,(a,l,u)=>(a[l.tokenTypeIdx]=!0,Q(l.categoryMatches,c=>{a[c]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<i;o++){let s=t[o],a=s.length;for(let l=0;l<a;l++){let u=this.LA(l+1);if(e(u,s[l])===!1)continue e}return!0}return!1}}var BT=class extends pi{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,i){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(i),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,pt.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,pt.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,pt.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,pt.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,pt.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},Td=class extends br{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,pt.OPTION)}visitRepetition(e){this.checkIsTarget(e,pt.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,pt.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,pt.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,pt.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,pt.ALTERNATION)}};function LS(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function UT(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],i=[];for(let o=0;o<e.length;o++){let s=e[o];i.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let l="_"+n.categoryMatches[a];i.push(s+l)}}e=i}return e}function GB(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let i=t[n];for(let o=0;o<e.length;o++){let s=e[o];if(i[s]===!0)return!1}}return!0}function MS(t,e){let r=K(t,s=>hd([s],1)),n=LS(r.length),i=K(r,s=>{let a={};return Q(s,l=>{let u=UT(l.partialPath);Q(u,c=>{a[c]=!0})}),a}),o=r;for(let s=1;s<=e;s++){let a=o;o=LS(a.length);for(let l=0;l<a.length;l++){let u=a[l];for(let c=0;c<u.length;c++){let f=u[c].partialPath,d=u[c].suffixDef,m=UT(f);if(GB(i,m,l)||ve(d)||f.length===e){let N=n[l];if(_d(N,f)===!1){N.push(f);for(let S=0;S<m.length;S++){let O=m[S];i[l][O]=!0}}}else{let N=hd(d,s+1,f);o[l]=o[l].concat(N),Q(N,S=>{let O=UT(S.partialPath);Q(O,y=>{i[l][y]=!0})})}}}}return n}function Ia(t,e,r,n){let i=new Td(t,pt.ALTERNATION,n);return e.accept(i),MS(i.result,r)}function Sa(t,e,r,n){let i=new Td(t,r);e.accept(i);let o=i.result,a=new BT(e,t,r).startWalking(),l=new et({definition:o}),u=new et({definition:a});return MS([l,u],n)}function _d(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let i=0;i<n.length;i++){let o=e[i],s=n[i];if((o===s||s.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function FS(t,e){return t.length<e.length&&Rr(t,(r,n)=>{let i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}function US(t){return Rr(t,e=>Rr(e,r=>Rr(r,n=>ve(n.categoryMatches))))}function BS(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return K(e,r=>Object.assign({type:Zt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function WS(t,e,r,n){let i=fr(t,l=>jB(l,r)),o=XB(t,e,r),s=fr(t,l=>KB(l,r)),a=fr(t,l=>HB(l,t,n,r));return i.concat(o,s,a)}function jB(t,e){let r=new WT;t.accept(r);let n=r.allProductions,i=OT(n,qB),o=zr(i,a=>a.length>1);return K(We(o),a=>{let l=nr(a),u=e.buildDuplicateFoundError(t,a),c=Yr(l),f={message:u,type:Zt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:l.idx},d=VS(l);return d&&(f.parameter=d),f})}function qB(t){return`${Yr(t)}_#_${t.idx}_#_${VS(t)}`}function VS(t){return t instanceof Re?t.terminalType.name:t instanceof Me?t.nonTerminalName:""}var WT=class extends br{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function HB(t,e,r,n){let i=[];if(Et(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:s,type:Zt.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function GS(t,e,r){let n=[],i;return ft(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:i,type:Zt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function GT(t,e,r,n=[]){let i=[],o=vd(e.definition);if(ve(o))return[];{let s=t.name;ft(o,t)&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:Zt.LEFT_RECURSION,ruleName:s});let l=no(o,n.concat([t])),u=fr(l,c=>{let f=Qe(n);return f.push(c),GT(t,c,r,f)});return i.concat(u)}}function vd(t){let e=[];if(ve(t))return e;let r=nr(t);if(r instanceof Me)e.push(r.referencedRule);else if(r instanceof et||r instanceof Fe||r instanceof tt||r instanceof rt||r instanceof He||r instanceof Ie)e=e.concat(vd(r.definition));else if(r instanceof Ke)e=Wt(K(r.definition,o=>vd(o.definition)));else if(!(r instanceof Re))throw Error("non exhaustive match");let n=Uo(r),i=t.length>1;if(n&&i){let o=Vt(t);return e.concat(vd(o))}else return e}var Gl=class extends br{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function jS(t,e){let r=new Gl;t.accept(r);let n=r.alternations;return fr(n,o=>{let s=di(o.definition);return fr(s,(a,l)=>{let u=gd([a],[],mi,1);return ve(u)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:l}),type:Zt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:l+1}]:[]})})}function qS(t,e,r){let n=new Gl;t.accept(n);let i=n.alternations;return i=io(i,s=>s.ignoreAmbiguities===!0),fr(i,s=>{let a=s.idx,l=s.maxLookahead||e,u=Ia(a,t,l,s),c=zB(u,s,t,r),f=YB(u,s,t,r);return c.concat(f)})}var VT=class extends br{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function KB(t,e){let r=new Gl;t.accept(r);let n=r.alternations;return fr(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:Zt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function HS(t,e,r){let n=[];return Q(t,i=>{let o=new VT;i.accept(o);let s=o.allProductions;Q(s,a=>{let l=Vl(a),u=a.maxLookahead||e,c=a.idx,d=Sa(c,i,l,u)[0];if(ve(Wt(d))){let m=r.buildEmptyRepetitionError({topLevelRule:i,repetition:a});n.push({message:m,type:Zt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}function zB(t,e,r,n){let i=[],o=Et(t,(a,l,u)=>(e.definition[u].ignoreAmbiguities===!0||Q(l,c=>{let f=[u];Q(t,(d,m)=>{u!==m&&_d(d,c)&&e.definition[m].ignoreAmbiguities!==!0&&f.push(m)}),f.length>1&&!_d(i,c)&&(i.push(c),a.push({alts:f,path:c}))}),a),[]);return K(o,a=>{let l=K(a.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:Zt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function YB(t,e,r,n){let i=Et(t,(s,a,l)=>{let u=K(a,c=>({idx:l,path:c}));return s.concat(u)},[]);return Kn(fr(i,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,u=s.path,c=rr(i,d=>e.definition[d.idx].ignoreAmbiguities!==!0&&d.idx<l&&FS(d.path,u));return K(c,d=>{let m=[d.idx+1,l+1],v=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:m,prefixPath:d.path}),type:Zt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:v,alternatives:m}})}))}function XB(t,e,r){let n=[],i=K(e,o=>o.name);return Q(t,o=>{let s=o.name;if(ft(i,s)){let a=r.buildNamespaceConflictError(o);n.push({message:a,type:Zt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function KS(t){let e=Ta(t,{errMsgProvider:CS}),r={};return Q(t.rules,n=>{r[n.name]=n}),bS(r,e.errMsgProvider)}function zS(t){return t=Ta(t,{errMsgProvider:Sn}),WS(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var YS="MismatchedTokenException",XS="NoViableAltException",JS="EarlyExitException",ZS="NotAllInputParsedException",QS=[YS,XS,JS,ZS];Object.freeze(QS);function oo(t){return ft(QS,t.name)}var Aa=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Go=class extends Aa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=YS}},jl=class extends Aa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=XS}},ql=class extends Aa{constructor(e,r){super(e,r),this.name=ZS}},Hl=class extends Aa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=JS}};var jT={},HT="InRuleRecoveryException",qT=class extends Error{constructor(e){super(e),this.name=HT}},Rd=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=te(e,"recoveryEnabled")?e.recoveryEnabled:Lr.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=JB)}getTokenToInsert(e){let r=Vo(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,i){let o=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],l=!1,u=this.LA(1),c=this.LA(1),f=()=>{let d=this.LA(0),m=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:u,previous:d,ruleName:this.getCurrRuleFullName()}),v=new Go(m,u,this.LA(0));v.resyncedTokens=di(a),this.SAVE_ERROR(v)};for(;!l;)if(this.tokenMatcher(c,i)){f();return}else if(n.call(this)){f(),e.apply(this,r);return}else this.tokenMatcher(c,o)?l=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new qT("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||ve(r))return!1;let n=this.LA(1);return Yn(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return ft(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let i=Yn(e,o=>Ul(r,o));if(i!==void 0)return i;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return jT;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return K(e,(n,i)=>i===0?jT:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){let e=K(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return Wt(e)}getFollowSetFromFollowKey(e){if(e===jT)return[nn];let r=e.ruleName+e.idxInCallingRule+od+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,nn)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return di(r)}attemptInRepetitionRecovery(e,r,n,i,o,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),i=Qe(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return K(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function JB(t,e,r,n,i,o,s){let a=this.getKeyForAutomaticLookahead(n,i),l=this.firstAfterRepMap[a];if(l===void 0){let d=this.getCurrRuleFullName(),m=this.getGAstProductions()[d];l=new o(m,i).startWalking(),this.firstAfterRepMap[a]=l}let u=l.token,c=l.occurrence,f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&u===void 0&&(u=nn,c=1),!(u===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(u,c,s)&&this.tryInRepetitionRecovery(t,e,r,u)}function xd(t,e,r){return r|e|t}var yi=class{constructor(e){var r;this.maxLookahead=(r=e==null?void 0:e.maxLookahead)!==null&&r!==void 0?r:Lr.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(ve(r)){let n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...i,...o]}return r}validateNoLeftRecursion(e){return fr(e,r=>GT(r,r,Sn))}validateEmptyOrAlternatives(e){return fr(e,r=>jS(r,Sn))}validateAmbiguousAlternationAlternatives(e,r){return fr(e,n=>qS(n,r,Sn))}validateSomeNonEmptyLookaheadPath(e,r){return HS(e,r,Sn)}buildLookaheadForAlternation(e){return kS(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,$S)}buildLookaheadForOptional(e){return wS(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,Vl(e.prodType),PS)}};var Ed=class{initLooksAhead(e){this.dynamicTokensEnabled=te(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Lr.dynamicTokensEnabled,this.maxLookahead=te(e,"maxLookahead")?e.maxLookahead:Lr.maxLookahead,this.lookaheadStrategy=te(e,"lookaheadStrategy")?e.lookaheadStrategy:new yi({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){Q(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:i,option:o,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=ZB(r);Q(n,u=>{let c=u.idx===0?"":u.idx;this.TRACE_INIT(`${Yr(u)}${c}`,()=>{let f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:u.idx,rule:r,maxLookahead:u.maxLookahead||this.maxLookahead,hasPredicates:u.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),d=xd(this.fullRuleNameToShort[r.name],256,u.idx);this.setLaFuncCache(d,f)})}),Q(i,u=>{this.computeLookaheadFunc(r,u.idx,768,"Repetition",u.maxLookahead,Yr(u))}),Q(o,u=>{this.computeLookaheadFunc(r,u.idx,512,"Option",u.maxLookahead,Yr(u))}),Q(s,u=>{this.computeLookaheadFunc(r,u.idx,1024,"RepetitionMandatory",u.maxLookahead,Yr(u))}),Q(a,u=>{this.computeLookaheadFunc(r,u.idx,1536,"RepetitionMandatoryWithSeparator",u.maxLookahead,Yr(u))}),Q(l,u=>{this.computeLookaheadFunc(r,u.idx,1280,"RepetitionWithSeparator",u.maxLookahead,Yr(u))})})})}computeLookaheadFunc(e,r,n,i,o,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=xd(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return xd(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},KT=class extends br{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},Nd=new KT;function ZB(t){Nd.reset(),t.accept(Nd);let e=Nd.dslMethods;return Nd.reset(),e}function XT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function JT(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function eA(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function tA(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var QB="name";function ZT(t,e){Object.defineProperty(t,QB,{enumerable:!1,configurable:!0,writable:!1,value:e})}function eW(t,e){let r=Je(t),n=r.length;for(let i=0;i<n;i++){let o=r[i],s=t[o],a=s.length;for(let l=0;l<a;l++){let u=s[l];u.tokenTypeIdx===void 0&&this[u.name](u.children,e)}}}function rA(t,e){let r=function(){};ZT(r,t+"BaseSemantics");let n={visit:function(i,o){if(se(i)&&(i=i[0]),!xr(i))return this[i.name](i.children,o)},validateVisitor:function(){let i=tW(this,e);if(!ve(i)){let o=K(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function nA(t,e,r){let n=function(){};ZT(n,t+"BaseSemanticsWithDefaults");let i=Object.create(r.prototype);return Q(e,o=>{i[o]=eW}),n.prototype=i,n.prototype.constructor=n,n}var QT;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(QT||(QT={}));function tW(t,e){return rW(t,e)}function rW(t,e){let r=rr(e,i=>Dr(t[i])===!1),n=K(r,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:QT.MISSING_METHOD,methodName:i}));return Kn(n)}var Ad=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=te(e,"nodeLocationTracking")?e.nodeLocationTracking:Lr.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Nt,this.cstFinallyStateUpdate=Nt,this.cstPostTerminal=Nt,this.cstPostNonTerminal=Nt,this.cstPostRule=Nt;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=JT,this.setNodeLocationFromNode=JT,this.cstPostRule=Nt,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Nt,this.setNodeLocationFromNode=Nt,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=XT,this.setNodeLocationFromNode=XT,this.cstPostRule=Nt,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Nt,this.setNodeLocationFromNode=Nt,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Nt,this.setNodeLocationFromNode=Nt,this.cstPostRule=Nt,this.setInitialNodeLocation=Nt;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];eA(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];tA(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(xr(this.baseCstVisitorConstructor)){let e=rA(this.className,Je(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(xr(this.baseCstVisitorWithDefaultsConstructor)){let e=nA(this.className,Je(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var Dd=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Da}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Da:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Cd=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Ca){if(ft(this.definedRulesNames,e)){let s={message:Sn.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:Zt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let i=this.defineRule(e,r,n);return this[e]=i,i}OVERRIDE_RULE(e,r,n=Ca){let i=GS(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(oo(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return id(We(this.gastProductionsCache))}};var bd=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Ea,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},te(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(se(e)){if(ve(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(se(e))this.tokensMap=Et(e,(o,s)=>(o[s.name]=s,o),{});else if(te(e,"modes")&&Rr(Wt(We(e.modes)),RS)){let o=Wt(We(e.modes)),s=ya(o);this.tokensMap=Et(s,(a,l)=>(a[l.name]=l,a),{})}else if(xt(e))this.tokensMap=Qe(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=nn;let n=te(e,"modes")?Wt(We(e.modes)):We(e),i=Rr(n,o=>ve(o.categoryMatches));this.tokenMatcher=i?Ea:mi,hi(We(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=te(n,"resyncEnabled")?n.resyncEnabled:Ca.resyncEnabled,o=te(n,"recoveryValueFunc")?n.recoveryValueFunc:Ca.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...c){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c);let f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}}:a=function(...c){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,c)}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(oo(e)){let s=e;if(o){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return n(e);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let s=e.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=e;if(i.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=r;if(i.call(this)===!0){let s=this.doSingleRepetition(o);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,pt.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],i,1024,e,md)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,Wl],a,1536,e,Wl)}else throw this.raiseEarlyExitException(e,pt.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let a=r.GATE;if(a!==void 0){let l=i;i=()=>a.call(this)&&l.call(this)}}else o=r;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],i,768,e,pd,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,Bl],a,1280,e,Bl)}}repetitionSepSecondInternal(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),i=se(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new ql(r,e))}}subruleInternal(e,r,n){let i;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw oo(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let i;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i}consumeInternalError(e,r,n){let i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Go(i,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===HT?n:o}}else throw n}saveRecogState(){let e=this.errors,r=Qe(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),nn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var Ld=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=te(e,"errorMessageProvider")?e.errorMessageProvider:Lr.errorMessageProvider}SAVE_ERROR(e){if(oo(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Qe(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Qe(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=Sa(e,o,r,this.maxLookahead)[0],l=[];for(let c=1;c<=this.maxLookahead;c++)l.push(this.LA(c));let u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new Hl(u,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=Ia(e,i,this.maxLookahead),s=[];for(let u=1;u<=this.maxLookahead;u++)s.push(this.LA(u));let a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new jl(l,this.LA(1),a))}};var kd=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(xr(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return gd([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=nr(e.ruleStack),i=this.getGAstProductions()[r];return new dd(i,e).startWalking()}};var Pd={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Pd);var iA=!0,oA=Math.pow(2,8)-1,aA=fd({name:"RECORDING_PHASE_TOKEN",pattern:Lt.NA});hi([aA]);var lA=Vo(aA,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(lA);var iW={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},wd=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,i){return this.consumeInternalRecord(n,e,i)},this[`SUBRULE${r}`]=function(n,i){return this.subruleInternalRecord(n,e,i)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Da}topLevelRuleRecord(e,r){try{let n=new Cr({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return zl.call(this,Fe,e,r)}atLeastOneInternalRecord(e,r){zl.call(this,tt,r,e)}atLeastOneSepFirstInternalRecord(e,r){zl.call(this,rt,r,e,iA)}manyInternalRecord(e,r){zl.call(this,Ie,r,e)}manySepFirstInternalRecord(e,r){zl.call(this,He,r,e,iA)}orInternalRecord(e,r){return oW.call(this,e,r)}subruleInternalRecord(e,r,n){if($d(r),!e||te(e,"ruleName")===!1){let a=new Error(`<SUBRULE${sA(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let i=zn(this.recordingProdStack),o=e.ruleName,s=new Me({idx:r,nonTerminalName:o,label:n==null?void 0:n.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?iW:Pd}consumeInternalRecord(e,r,n){if($d(r),!wT(e)){let s=new Error(`<CONSUME${sA(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=zn(this.recordingProdStack),o=new Re({idx:r,terminalType:e,label:n==null?void 0:n.LABEL});return i.definition.push(o),lA}};function zl(t,e,r,n=!1){$d(r);let i=zn(this.recordingProdStack),o=Dr(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),te(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),o.call(this),i.definition.push(s),this.recordingProdStack.pop(),Pd}function oW(t,e){$d(e);let r=zn(this.recordingProdStack),n=se(t)===!1,i=n===!1?t:t.DEF,o=new Ke({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});te(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let s=kl(i,a=>Dr(a.GATE));return o.hasPredicates=s,r.definition.push(o),Q(i,a=>{let l=new et({definition:[]});o.definition.push(l),te(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:te(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),Pd}function sA(t){return t===0?"":`${t}`}function $d(t){if(t<0||t>oA){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${oA+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var Md=class{initPerformanceTracer(e){if(te(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Lr.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:i,value:o}=$l(r),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,o}else return r()}};function uA(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(i=>{if(i==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]})})}var Da=Vo(nn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Da);var Lr=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Ti,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Ca=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),Zt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Zt||(Zt={}));function Fd(t=void 0){return function(){return t}}var Yl=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{Pl(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),Q(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=KS({rules:We(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(ve(n)&&this.skipValidations===!1){let i=zS({rules:We(this.gastProductionsCache),tokenTypes:We(this.tokensMap),errMsgProvider:Sn,grammarName:r}),o=BS({lookaheadStrategy:this.lookaheadStrategy,rules:We(this.gastProductionsCache),tokenTypes:We(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(i,o)}}),ve(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=tS(We(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,o;(o=(i=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(i,{rules:We(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(We(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!ve(this.definitionErrors))throw e=K(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),te(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=te(r,"skipValidations")?r.skipValidations:Lr.skipValidations}};Yl.DEFER_DEFINITION_ERRORS_HANDLING=!1;uA(Yl,[Rd,Ed,Ad,Dd,bd,Cd,Ld,kd,wd,Md]);var Xl=class extends Yl{constructor(e,r=Lr){let n=Qe(r);n.outputCst=!1,super(e,n)}};function jo(t,e,r){return`${t.name}_${e}_${r}`}var so=1,aW=2,cA=4,fA=5;var ka=7,lW=8,uW=9,cW=10,fW=11,dA=12,Jl=class{constructor(e){this.target=e}isEpsilon(){return!1}},ba=class extends Jl{constructor(e,r){super(e),this.tokenType=r}},Zl=class extends Jl{constructor(e){super(e)}isEpsilon(){return!0}},La=class extends Jl{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function pA(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};dW(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=qo(e,i,i);o!==void 0&&NW(e,i,o)}return e}function dW(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=ir(t,i,void 0,{type:aW}),s=ir(t,i,void 0,{type:ka});o.stop=s,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,s)}}function mA(t,e,r){return r instanceof Re?ty(t,e,r.terminalType,r):r instanceof Me?xW(t,e,r):r instanceof Ke?TW(t,e,r):r instanceof Fe?yW(t,e,r):r instanceof Ie?pW(t,e,r):r instanceof He?mW(t,e,r):r instanceof tt?hW(t,e,r):r instanceof rt?gW(t,e,r):qo(t,e,r)}function pW(t,e,r){let n=ir(t,e,r,{type:fA});ao(t,n);let i=wa(t,e,n,r,qo(t,e,r));return gA(t,e,r,i)}function mW(t,e,r){let n=ir(t,e,r,{type:fA});ao(t,n);let i=wa(t,e,n,r,qo(t,e,r)),o=ty(t,e,r.separator,r);return gA(t,e,r,i,o)}function hW(t,e,r){let n=ir(t,e,r,{type:cA});ao(t,n);let i=wa(t,e,n,r,qo(t,e,r));return hA(t,e,r,i)}function gW(t,e,r){let n=ir(t,e,r,{type:cA});ao(t,n);let i=wa(t,e,n,r,qo(t,e,r)),o=ty(t,e,r.separator,r);return hA(t,e,r,i,o)}function TW(t,e,r){let n=ir(t,e,r,{type:so});ao(t,n);let i=K(r.definition,s=>mA(t,e,s));return wa(t,e,n,r,...i)}function yW(t,e,r){let n=ir(t,e,r,{type:so});ao(t,n);let i=wa(t,e,n,r,qo(t,e,r));return _W(t,e,r,i)}function qo(t,e,r){let n=rr(K(r.definition,i=>mA(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:RW(t,n)}function hA(t,e,r,n,i){let o=n.left,s=n.right,a=ir(t,e,r,{type:fW});ao(t,a);let l=ir(t,e,r,{type:dA});return o.loopback=a,l.loopback=a,t.decisionMap[jo(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,Kt(s,a),i===void 0?(Kt(a,o),Kt(a,l)):(Kt(a,l),Kt(a,i.left),Kt(i.right,o)),{left:o,right:l}}function gA(t,e,r,n,i){let o=n.left,s=n.right,a=ir(t,e,r,{type:cW});ao(t,a);let l=ir(t,e,r,{type:dA}),u=ir(t,e,r,{type:uW});return a.loopback=u,l.loopback=u,Kt(a,o),Kt(a,l),Kt(s,u),i!==void 0?(Kt(u,l),Kt(u,i.left),Kt(i.right,o)):Kt(u,a),t.decisionMap[jo(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:l}}function _W(t,e,r,n){let i=n.left,o=n.right;return Kt(i,o),t.decisionMap[jo(e,"Option",r.idx)]=i,n}function ao(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function wa(t,e,r,n,...i){let o=ir(t,e,n,{type:lW,start:r});r.end=o;for(let a of i)a!==void 0?(Kt(r,a.left),Kt(a.right,o)):Kt(r,o);let s={left:r,right:o};return t.decisionMap[jo(e,vW(n),n.idx)]=r,s}function vW(t){if(t instanceof Ke)return"Alternation";if(t instanceof Fe)return"Option";if(t instanceof Ie)return"Repetition";if(t instanceof He)return"RepetitionWithSeparator";if(t instanceof tt)return"RepetitionMandatory";if(t instanceof rt)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function RW(t,e){let r=e.length;for(let o=0;o<r-1;o++){let s=e[o],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let l=a instanceof La,u=a,c=e[o+1].left;s.left.type===so&&s.right.type===so&&a!==void 0&&(l&&u.followState===s.right||a.target===s.right)?(l?u.followState=c:a.target=c,EW(t,s.right)):Kt(s.right,c)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function ty(t,e,r,n){let i=ir(t,e,n,{type:so}),o=ir(t,e,n,{type:so});return ry(i,new ba(o,r)),{left:i,right:o}}function xW(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=ir(t,e,r,{type:so}),s=ir(t,e,r,{type:so}),a=new La(i,n,s);return ry(o,a),{left:o,right:s}}function NW(t,e,r){let n=t.ruleToStartState.get(e);Kt(n,r.left);let i=t.ruleToStopState.get(e);return Kt(r.right,i),{left:n,right:i}}function Kt(t,e){let r=new Zl(e);ry(t,r)}function ir(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function ry(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function EW(t,e){t.states.splice(t.states.indexOf(e),1)}var Ql={},$a=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=ny(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return K(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function ny(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function OW(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Ud=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},TA=new Ud,eu=class extends yi{constructor(e){var r;super(),this.logging=(r=e==null?void 0:e.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=pA(e.rules),this.dfas=IW(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=jo(n,"Alternation",r),c=this.atn.decisionMap[l].decision,f=K(yd({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),d=>K(d,m=>m[0]));if(yA(f,!1)&&!o){let d=Et(f,(m,v,N)=>(Q(v,S=>{S&&(m[S.tokenTypeIdx]=N,Q(S.categoryMatches,O=>{m[O]=N}))}),m),{});return i?function(m){var v;let N=this.LA(1),S=d[N.tokenTypeIdx];if(m!==void 0&&S!==void 0){let O=(v=m[S])===null||v===void 0?void 0:v.GATE;if(O!==void 0&&O.call(this)===!1)return}return S}:function(){let m=this.LA(1);return d[m.tokenTypeIdx]}}else return i?function(d){let m=new Ud,v=d===void 0?0:d.length;for(let S=0;S<v;S++){let O=d==null?void 0:d[S].GATE;m.set(S,O===void 0||O.call(this))}let N=iy.call(this,s,c,m,a);return typeof N=="number"?N:void 0}:function(){let d=iy.call(this,s,c,TA,a);return typeof d=="number"?d:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=jo(n,i,r),c=this.atn.decisionMap[l].decision,f=K(yd({maxLookahead:1,occurrence:r,prodType:i,rule:n}),d=>K(d,m=>m[0]));if(yA(f)&&f[0][0]&&!o){let d=f[0],m=Wt(d);if(m.length===1&&ve(m[0].categoryMatches)){let N=m[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===N}}else{let v=Et(m,(N,S)=>(S!==void 0&&(N[S.tokenTypeIdx]=!0,Q(S.categoryMatches,O=>{N[O]=!0})),N),{});return function(){let N=this.LA(1);return v[N.tokenTypeIdx]===!0}}}return function(){let d=iy.call(this,s,c,TA,a);return typeof d=="object"?!1:d===0}}};function yA(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let s=[o.tokenTypeIdx].concat(o.categoryMatches);for(let a of s)if(r.has(a)){if(!i.has(a))return!1}else r.add(a),i.add(a)}}return!0}function IW(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=OW(t.decisionStates[n],n);return r}function iy(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let a=MW(i.atnStartState);o=RA(i,vA(a)),i.start=o}return SW.apply(this,[i,o,r,n])}function SW(t,e,r,n){let i=e,o=1,s=[],a=this.LA(o++);for(;;){let l=kW(i,a);if(l===void 0&&(l=AW.apply(this,[t,i,a,o,r,n])),l===Ql)return LW(s,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,s.push(a),a=this.LA(o++)}}function AW(t,e,r,n,i,o){let s=wW(e.configs,r,i);if(s.size===0)return _A(t,e,r,Ql),Ql;let a=vA(s),l=PW(s,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(WW(s)){let u=HI(s.alts);a.isAcceptState=!0,a.prediction=u,a.configs.uniqueAlt=u,DW.apply(this,[t,n,s.alts,o])}return a=_A(t,e,r,a),a}function DW(t,e,r,n){let i=[];for(let u=1;u<=e;u++)i.push(this.LA(u).tokenType);let o=t.atnStartState,s=o.rule,a=o.production,l=CW({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:i});n(l)}function CW(t){let e=K(t.prefixPath,i=>gi(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${bW(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function bW(t){if(t instanceof Me)return"SUBRULE";if(t instanceof Fe)return"OPTION";if(t instanceof Ke)return"OR";if(t instanceof tt)return"AT_LEAST_ONE";if(t instanceof rt)return"AT_LEAST_ONE_SEP";if(t instanceof He)return"MANY_SEP";if(t instanceof Ie)return"MANY";if(t instanceof Re)return"CONSUME";throw Error("non exhaustive match")}function LW(t,e,r){let n=fr(e.configs.elements,o=>o.state.transitions),i=QI(n.filter(o=>o instanceof ba).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function kW(t,e){return t.edges[e.tokenTypeIdx]}function wW(t,e,r){let n=new $a,i=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===ka){i.push(s);continue}let a=s.state.transitions.length;for(let l=0;l<a;l++){let u=s.state.transitions[l],c=$W(u,e);c!==void 0&&n.add({state:c,alt:s.alt,stack:s.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new $a;for(let s of n.elements)Bd(s,o)}if(i.length>0&&!UW(o))for(let s of i)o.add(s);return o}function $W(t,e){if(t instanceof ba&&Ul(e,t.tokenType))return t.target}function PW(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function vA(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function _A(t,e,r,n){return n=RA(t,n),e.edges[r.tokenTypeIdx]=n,n}function RA(t,e){if(e===Ql)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function MW(t){let e=new $a,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Bd(o,e)}return e}function Bd(t,e){let r=t.state;if(r.type===ka){if(t.stack.length>0){let i=[...t.stack],s={state:i.pop(),alt:t.alt,stack:i};Bd(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],s=FW(t,o);s!==void 0&&Bd(s,e)}}function FW(t,e){if(e instanceof Zl)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof La){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function UW(t){for(let e of t.elements)if(e.state.type===ka)return!0;return!1}function BW(t){for(let e of t.elements)if(e.state.type!==ka)return!1;return!0}function WW(t){if(BW(t))return!0;let e=VW(t.elements);return GW(e)&&!jW(e)}function VW(t){let e=new Map;for(let r of t){let n=ny(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function GW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function jW(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var xA;(function(t){function e(r){return typeof r=="string"}t.is=e})(xA||(xA={}));var oy;(function(t){function e(r){return typeof r=="string"}t.is=e})(oy||(oy={}));var NA;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(NA||(NA={}));var Wd;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Wd||(Wd={}));var ke;(function(t){function e(n,i){return n===Number.MAX_VALUE&&(n=Wd.MAX_VALUE),i===Number.MAX_VALUE&&(i=Wd.MAX_VALUE),{line:n,character:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.uinteger(i.line)&&b.uinteger(i.character)}t.is=r})(ke||(ke={}));var Se;(function(t){function e(n,i,o,s){if(b.uinteger(n)&&b.uinteger(i)&&b.uinteger(o)&&b.uinteger(s))return{start:ke.create(n,i),end:ke.create(o,s)};if(ke.is(n)&&ke.is(i))return{start:n,end:i};throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${o}, ${s}]`)}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&ke.is(i.start)&&ke.is(i.end)}t.is=r})(Se||(Se={}));var Vd;(function(t){function e(n,i){return{uri:n,range:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&Se.is(i.range)&&(b.string(i.uri)||b.undefined(i.uri))}t.is=r})(Vd||(Vd={}));var EA;(function(t){function e(n,i,o,s){return{targetUri:n,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&Se.is(i.targetRange)&&b.string(i.targetUri)&&Se.is(i.targetSelectionRange)&&(Se.is(i.originSelectionRange)||b.undefined(i.originSelectionRange))}t.is=r})(EA||(EA={}));var sy;(function(t){function e(n,i,o,s){return{red:n,green:i,blue:o,alpha:s}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.numberRange(i.red,0,1)&&b.numberRange(i.green,0,1)&&b.numberRange(i.blue,0,1)&&b.numberRange(i.alpha,0,1)}t.is=r})(sy||(sy={}));var OA;(function(t){function e(n,i){return{range:n,color:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&Se.is(i.range)&&sy.is(i.color)}t.is=r})(OA||(OA={}));var IA;(function(t){function e(n,i,o){return{label:n,textEdit:i,additionalTextEdits:o}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.string(i.label)&&(b.undefined(i.textEdit)||lo.is(i))&&(b.undefined(i.additionalTextEdits)||b.typedArray(i.additionalTextEdits,lo.is))}t.is=r})(IA||(IA={}));var SA;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(SA||(SA={}));var AA;(function(t){function e(n,i,o,s,a,l){let u={startLine:n,endLine:i};return b.defined(o)&&(u.startCharacter=o),b.defined(s)&&(u.endCharacter=s),b.defined(a)&&(u.kind=a),b.defined(l)&&(u.collapsedText=l),u}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.uinteger(i.startLine)&&b.uinteger(i.startLine)&&(b.undefined(i.startCharacter)||b.uinteger(i.startCharacter))&&(b.undefined(i.endCharacter)||b.uinteger(i.endCharacter))&&(b.undefined(i.kind)||b.string(i.kind))}t.is=r})(AA||(AA={}));var ay;(function(t){function e(n,i){return{location:n,message:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&Vd.is(i.location)&&b.string(i.message)}t.is=r})(ay||(ay={}));var DA;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(DA||(DA={}));var CA;(function(t){t.Unnecessary=1,t.Deprecated=2})(CA||(CA={}));var bA;(function(t){function e(r){let n=r;return b.objectLiteral(n)&&b.string(n.href)}t.is=e})(bA||(bA={}));var Gd;(function(t){function e(n,i,o,s,a,l){let u={range:n,message:i};return b.defined(o)&&(u.severity=o),b.defined(s)&&(u.code=s),b.defined(a)&&(u.source=a),b.defined(l)&&(u.relatedInformation=l),u}t.create=e;function r(n){var i;let o=n;return b.defined(o)&&Se.is(o.range)&&b.string(o.message)&&(b.number(o.severity)||b.undefined(o.severity))&&(b.integer(o.code)||b.string(o.code)||b.undefined(o.code))&&(b.undefined(o.codeDescription)||b.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(b.string(o.source)||b.undefined(o.source))&&(b.undefined(o.relatedInformation)||b.typedArray(o.relatedInformation,ay.is))}t.is=r})(Gd||(Gd={}));var Pa;(function(t){function e(n,i,...o){let s={title:n,command:i};return b.defined(o)&&o.length>0&&(s.arguments=o),s}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.title)&&b.string(i.command)}t.is=r})(Pa||(Pa={}));var lo;(function(t){function e(o,s){return{range:o,newText:s}}t.replace=e;function r(o,s){return{range:{start:o,end:o},newText:s}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function i(o){let s=o;return b.objectLiteral(s)&&b.string(s.newText)&&Se.is(s.range)}t.is=i})(lo||(lo={}));var ly;(function(t){function e(n,i,o){let s={label:n};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&b.string(i.label)&&(b.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(b.string(i.description)||i.description===void 0)}t.is=r})(ly||(ly={}));var Ma;(function(t){function e(r){let n=r;return b.string(n)}t.is=e})(Ma||(Ma={}));var LA;(function(t){function e(o,s,a){return{range:o,newText:s,annotationId:a}}t.replace=e;function r(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}t.insert=r;function n(o,s){return{range:o,newText:"",annotationId:s}}t.del=n;function i(o){let s=o;return lo.is(s)&&(ly.is(s.annotationId)||Ma.is(s.annotationId))}t.is=i})(LA||(LA={}));var uy;(function(t){function e(n,i){return{textDocument:n,edits:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&my.is(i.textDocument)&&Array.isArray(i.edits)}t.is=r})(uy||(uy={}));var cy;(function(t){function e(n,i,o){let s={kind:"create",uri:n};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="create"&&b.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ma.is(i.annotationId))}t.is=r})(cy||(cy={}));var fy;(function(t){function e(n,i,o,s){let a={kind:"rename",oldUri:n,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let i=n;return i&&i.kind==="rename"&&b.string(i.oldUri)&&b.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ma.is(i.annotationId))}t.is=r})(fy||(fy={}));var dy;(function(t){function e(n,i,o){let s={kind:"delete",uri:n};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="delete"&&b.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||b.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||b.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Ma.is(i.annotationId))}t.is=r})(dy||(dy={}));var py;(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(i=>b.string(i.kind)?cy.is(i)||fy.is(i)||dy.is(i):uy.is(i)))}t.is=e})(py||(py={}));var kA;(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)}t.is=r})(kA||(kA={}));var wA;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)&&b.integer(i.version)}t.is=r})(wA||(wA={}));var my;(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)&&(i.version===null||b.integer(i.version))}t.is=r})(my||(my={}));var $A;(function(t){function e(n,i,o,s){return{uri:n,languageId:i,version:o,text:s}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.string(i.uri)&&b.string(i.languageId)&&b.integer(i.version)&&b.string(i.text)}t.is=r})($A||($A={}));var hy;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(hy||(hy={}));var tu;(function(t){function e(r){let n=r;return b.objectLiteral(r)&&hy.is(n.kind)&&b.string(n.value)}t.is=e})(tu||(tu={}));var PA;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(PA||(PA={}));var MA;(function(t){t.PlainText=1,t.Snippet=2})(MA||(MA={}));var FA;(function(t){t.Deprecated=1})(FA||(FA={}));var UA;(function(t){function e(n,i,o){return{newText:n,insert:i,replace:o}}t.create=e;function r(n){let i=n;return i&&b.string(i.newText)&&Se.is(i.insert)&&Se.is(i.replace)}t.is=r})(UA||(UA={}));var BA;(function(t){t.asIs=1,t.adjustIndentation=2})(BA||(BA={}));var WA;(function(t){function e(r){let n=r;return n&&(b.string(n.detail)||n.detail===void 0)&&(b.string(n.description)||n.description===void 0)}t.is=e})(WA||(WA={}));var VA;(function(t){function e(r){return{label:r}}t.create=e})(VA||(VA={}));var GA;(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(GA||(GA={}));var jd;(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let i=n;return b.string(i)||b.objectLiteral(i)&&b.string(i.language)&&b.string(i.value)}t.is=r})(jd||(jd={}));var jA;(function(t){function e(r){let n=r;return!!n&&b.objectLiteral(n)&&(tu.is(n.contents)||jd.is(n.contents)||b.typedArray(n.contents,jd.is))&&(r.range===void 0||Se.is(r.range))}t.is=e})(jA||(jA={}));var qA;(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(qA||(qA={}));var HA;(function(t){function e(r,n,...i){let o={label:r};return b.defined(n)&&(o.documentation=n),b.defined(i)?o.parameters=i:o.parameters=[],o}t.create=e})(HA||(HA={}));var KA;(function(t){t.Text=1,t.Read=2,t.Write=3})(KA||(KA={}));var zA;(function(t){function e(r,n){let i={range:r};return b.number(n)&&(i.kind=n),i}t.create=e})(zA||(zA={}));var YA;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(YA||(YA={}));var XA;(function(t){t.Deprecated=1})(XA||(XA={}));var JA;(function(t){function e(r,n,i,o,s){let a={name:r,kind:n,location:{uri:o,range:i}};return s&&(a.containerName=s),a}t.create=e})(JA||(JA={}));var ZA;(function(t){function e(r,n,i,o){return o!==void 0?{name:r,kind:n,location:{uri:i,range:o}}:{name:r,kind:n,location:{uri:i}}}t.create=e})(ZA||(ZA={}));var QA;(function(t){function e(n,i,o,s,a,l){let u={name:n,detail:i,kind:o,range:s,selectionRange:a};return l!==void 0&&(u.children=l),u}t.create=e;function r(n){let i=n;return i&&b.string(i.name)&&b.number(i.kind)&&Se.is(i.range)&&Se.is(i.selectionRange)&&(i.detail===void 0||b.string(i.detail))&&(i.deprecated===void 0||b.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=r})(QA||(QA={}));var eD;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(eD||(eD={}));var qd;(function(t){t.Invoked=1,t.Automatic=2})(qd||(qd={}));var tD;(function(t){function e(n,i,o){let s={diagnostics:n};return i!=null&&(s.only=i),o!=null&&(s.triggerKind=o),s}t.create=e;function r(n){let i=n;return b.defined(i)&&b.typedArray(i.diagnostics,Gd.is)&&(i.only===void 0||b.typedArray(i.only,b.string))&&(i.triggerKind===void 0||i.triggerKind===qd.Invoked||i.triggerKind===qd.Automatic)}t.is=r})(tD||(tD={}));var rD;(function(t){function e(n,i,o){let s={title:n},a=!0;return typeof i=="string"?(a=!1,s.kind=i):Pa.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return i&&b.string(i.title)&&(i.diagnostics===void 0||b.typedArray(i.diagnostics,Gd.is))&&(i.kind===void 0||b.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||Pa.is(i.command))&&(i.isPreferred===void 0||b.boolean(i.isPreferred))&&(i.edit===void 0||py.is(i.edit))}t.is=r})(rD||(rD={}));var nD;(function(t){function e(n,i){let o={range:n};return b.defined(i)&&(o.data=i),o}t.create=e;function r(n){let i=n;return b.defined(i)&&Se.is(i.range)&&(b.undefined(i.command)||Pa.is(i.command))}t.is=r})(nD||(nD={}));var iD;(function(t){function e(n,i){return{tabSize:n,insertSpaces:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&b.uinteger(i.tabSize)&&b.boolean(i.insertSpaces)}t.is=r})(iD||(iD={}));var oD;(function(t){function e(n,i,o){return{range:n,target:i,data:o}}t.create=e;function r(n){let i=n;return b.defined(i)&&Se.is(i.range)&&(b.undefined(i.target)||b.string(i.target))}t.is=r})(oD||(oD={}));var sD;(function(t){function e(n,i){return{range:n,parent:i}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&Se.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=r})(sD||(sD={}));var aD;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(aD||(aD={}));var lD;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(lD||(lD={}));var uD;(function(t){function e(r){let n=r;return b.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(uD||(uD={}));var cD;(function(t){function e(n,i){return{range:n,text:i}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&b.string(i.text)}t.is=r})(cD||(cD={}));var fD;(function(t){function e(n,i,o){return{range:n,variableName:i,caseSensitiveLookup:o}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&b.boolean(i.caseSensitiveLookup)&&(b.string(i.variableName)||i.variableName===void 0)}t.is=r})(fD||(fD={}));var dD;(function(t){function e(n,i){return{range:n,expression:i}}t.create=e;function r(n){let i=n;return i!=null&&Se.is(i.range)&&(b.string(i.expression)||i.expression===void 0)}t.is=r})(dD||(dD={}));var pD;(function(t){function e(n,i){return{frameId:n,stoppedLocation:i}}t.create=e;function r(n){let i=n;return b.defined(i)&&Se.is(n.stoppedLocation)}t.is=r})(pD||(pD={}));var gy;(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(gy||(gy={}));var Ty;(function(t){function e(n){return{value:n}}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&(i.tooltip===void 0||b.string(i.tooltip)||tu.is(i.tooltip))&&(i.location===void 0||Vd.is(i.location))&&(i.command===void 0||Pa.is(i.command))}t.is=r})(Ty||(Ty={}));var mD;(function(t){function e(n,i,o){let s={position:n,label:i};return o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return b.objectLiteral(i)&&ke.is(i.position)&&(b.string(i.label)||b.typedArray(i.label,Ty.is))&&(i.kind===void 0||gy.is(i.kind))&&i.textEdits===void 0||b.typedArray(i.textEdits,lo.is)&&(i.tooltip===void 0||b.string(i.tooltip)||tu.is(i.tooltip))&&(i.paddingLeft===void 0||b.boolean(i.paddingLeft))&&(i.paddingRight===void 0||b.boolean(i.paddingRight))}t.is=r})(mD||(mD={}));var hD;(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(hD||(hD={}));var gD;(function(t){function e(r,n,i,o){return{insertText:r,filterText:n,range:i,command:o}}t.create=e})(gD||(gD={}));var TD;(function(t){function e(r){return{items:r}}t.create=e})(TD||(TD={}));var yD;(function(t){t.Invoked=0,t.Automatic=1})(yD||(yD={}));var _D;(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(_D||(_D={}));var vD;(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(vD||(vD={}));var RD;(function(t){function e(r){let n=r;return b.objectLiteral(n)&&oy.is(n.uri)&&b.string(n.name)}t.is=e})(RD||(RD={}));var xD;(function(t){function e(o,s,a,l){return new yy(o,s,a,l)}t.create=e;function r(o){let s=o;return!!(b.defined(s)&&b.string(s.uri)&&(b.undefined(s.languageId)||b.string(s.languageId))&&b.uinteger(s.lineCount)&&b.func(s.getText)&&b.func(s.positionAt)&&b.func(s.offsetAt))}t.is=r;function n(o,s){let a=o.getText(),l=i(s,(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),u=a.length;for(let c=l.length-1;c>=0;c--){let f=l[c],d=o.offsetAt(f.range.start),m=o.offsetAt(f.range.end);if(m<=u)a=a.substring(0,d)+f.newText+a.substring(m,a.length);else throw new Error("Overlapping edit");u=d}return a}t.applyEdits=n;function i(o,s){if(o.length<=1)return o;let a=o.length/2|0,l=o.slice(0,a),u=o.slice(a);i(l,s),i(u,s);let c=0,f=0,d=0;for(;c<l.length&&f<u.length;)s(l[c],u[f])<=0?o[d++]=l[c++]:o[d++]=u[f++];for(;c<l.length;)o[d++]=l[c++];for(;f<u.length;)o[d++]=u[f++];return o}})(xD||(xD={}));var yy=class{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let i=0;i<r.length;i++){n&&(e.push(i),n=!1);let o=r.charAt(i);n=o==="\r"||o===`
`,o==="\r"&&i+1<r.length&&r.charAt(i+1)===`
`&&i++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return ke.create(0,e);for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return ke.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}},b;(function(t){let e=Object.prototype.toString;function r(m){return typeof m!="undefined"}t.defined=r;function n(m){return typeof m=="undefined"}t.undefined=n;function i(m){return m===!0||m===!1}t.boolean=i;function o(m){return e.call(m)==="[object String]"}t.string=o;function s(m){return e.call(m)==="[object Number]"}t.number=s;function a(m,v,N){return e.call(m)==="[object Number]"&&v<=m&&m<=N}t.numberRange=a;function l(m){return e.call(m)==="[object Number]"&&-2147483648<=m&&m<=2147483647}t.integer=l;function u(m){return e.call(m)==="[object Number]"&&0<=m&&m<=2147483647}t.uinteger=u;function c(m){return e.call(m)==="[object Function]"}t.func=c;function f(m){return m!==null&&typeof m=="object"}t.objectLiteral=f;function d(m,v){return Array.isArray(m)&&m.every(v)}t.typedArray=d})(b||(b={}));var ru=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new Fa(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Ko;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Ho(e.startOffset,e.image.length,Bs(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();(n==null?void 0:n.content.length)===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Ho(r.startOffset,r.image.length,Bs(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.content.length;o++){let s=e.content[o],{offset:a,end:l}=s;if(Ir(s)&&n>a&&i<l){this.addHiddenToken(s,r);return}else if(i<=a){e.content.splice(o,0,r);return}}e.content.push(r)}},nu=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Ho=class extends nu{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}},Ko=class extends nu{constructor(){super(...arguments),this.content=new _y(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:ke.create(0,0),end:ke.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},_y=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},Fa=class extends Ko{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e!=null?e:""}};var Hd=Symbol("Datatype");function vy(t){return t.$type===Hd}var ND="\u200B",ED=t=>t.endsWith(ND)?t:t+ND,iu=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new Ry(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},ou=class extends iu{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new ru,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:Al(e)?Hd:li(e),i=this.wrapper.DEFINE_RULE(ED(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Hd&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(i)){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),l=this.current;if(s){let u=lr(n)?i.image:this.converter.convert(i.image,o);this.assign(s.operator,s.feature,u,o,a)}else if(vy(l)){let u=i.image;lr(n)||(u=this.converter.convert(u,o).toString()),l.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(s,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let s=this.current;if(vy(s))s.value+=e.toString();else if(typeof e=="object"&&e){let a=e.$type,l=this.assignWithoutOverride(e,s);a&&(l.$type=a);let u=l;this.stack.pop(),this.stack.push(u)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return _f(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),vy(r)?this.converter.convert(r.value,r.$cstNode):(Rl(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=tn(e,_r);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?On(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let s=this.current,a;switch(o&&typeof n=="string"?a=this.linker.buildReference(s,r,i,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r)){let o=e[n];o===void 0?e[n]=i:Array.isArray(o)&&Array.isArray(i)&&(i.push(...o),e[n]=i)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},Kd=class{buildMismatchTokenMessage(e){return Ti.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Ti.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Ti.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Ti.buildEarlyExitMessage(e)}},Ua=class extends Kd{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},su=class extends iu{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(ED(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},qW={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new Ua},Ry=class extends Xl{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},qW),{lookaheadStrategy:n?new yi({maxLookahead:r.maxLookahead}):new eu}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function Yd(t,e,r){return HW({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function HW(t,e){let r=Il(e,!1),n=he(e.rules).filter(Dt).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,zo(o,i.definition)))}}function zo(t,e,r=!1){let n;if(lr(e))n=QW(t,e);else if(En(e))n=KW(t,e);else if(_r(e))n=zo(t,e.terminal);else if(On(e))n=OD(t,e);else if(Vr(e))n=zW(t,e);else if(Ms(e))n=XW(t,e);else if(Fs(e))n=JW(t,e);else if(fn(e))n=ZW(t,e);else if(Ag(e)){let i=t.consume++;n=()=>t.parser.consume(i,nn,e)}else throw new Do(e.$cstNode,`Unexpected element type: ${e.$type}`);return ID(t,r?void 0:zd(e),n,e.cardinality)}function KW(t,e){let r=li(e);return()=>t.parser.action(r,e)}function zW(t,e){let r=e.rule.ref;if(Dt(r)){let n=t.subrule++,i=e.arguments.length>0?YW(r,e.arguments):()=>({});return o=>t.parser.subrule(n,SD(t,r),e,i(o))}else if(Wr(r)){let n=t.consume++,i=xy(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)Vi(r);else throw new Do(e.$cstNode,`Undefined rule type: ${e.$type}`)}function YW(t,e){let r=e.map(n=>_i(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let s=t.parameters[o],a=r[o];i[s.name]=a(n)}return i}}function _i(t){if(rg(t)){let e=_i(t.left),r=_i(t.right);return n=>e(n)||r(n)}else if(eg(t)){let e=_i(t.left),r=_i(t.right);return n=>e(n)&&r(n)}else if(ag(t)){let e=_i(t.value);return r=>!e(r)}else if(fg(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Zh(t)){let e=!!t.true;return()=>e}Vi(t)}function XW(t,e){if(e.elements.length===1)return zo(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:zo(t,i,!0)},s=zd(i);s&&(o.GATE=_i(s)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let s={ALT:()=>o.ALT(i)},a=o.GATE;return a&&(s.GATE=()=>a(i)),s}))}}function JW(t,e){if(e.elements.length===1)return zo(t,e.elements[0]);let r=[];for(let a of e.elements){let l={ALT:zo(t,a,!0)},u=zd(a);u&&(l.GATE=_i(u)),r.push(l)}let n=t.or++,i=(a,l)=>{let u=l.getRuleStack().join("-");return`uGroup_${a}_${u}`},o=a=>t.parser.alternatives(n,r.map((l,u)=>{let c={ALT:()=>!0},f=t.parser;c.ALT=()=>{if(l.ALT(a),!f.isRecording()){let m=i(n,f);f.unorderedGroups.get(m)||f.unorderedGroups.set(m,[]);let v=f.unorderedGroups.get(m);typeof(v==null?void 0:v[u])=="undefined"&&(v[u]=!0)}};let d=l.GATE;return d?c.GATE=()=>d(a):c.GATE=()=>{let m=f.unorderedGroups.get(i(n,f));return!(m!=null&&m[u])},c})),s=ID(t,zd(e),o,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function ZW(t,e){let r=e.elements.map(n=>zo(t,n));return n=>r.forEach(i=>i(n))}function zd(t){if(fn(t))return t.guardCondition}function OD(t,e,r=e.terminal){if(r)if(Vr(r)&&Dt(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,SD(t,r.rule.ref),e,i)}else if(Vr(r)&&Wr(r.rule.ref)){let n=t.consume++,i=xy(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if(lr(r)){let n=t.consume++,i=xy(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=Of(e.type.ref),i=n==null?void 0:n.terminal;if(!i)throw new Error("Could not find name assignment for type: "+li(e.type.ref));return OD(t,e,i)}}function QW(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function ID(t,e,r,n){let i=e&&_i(e);if(!n)if(i){let o=t.or++;return s=>t.parser.alternatives(o,[{ALT:()=>r(s),GATE:()=>i(s)},{ALT:Fd(),GATE:()=>!i(s)}])}else return r;if(n==="*"){let o=t.many++;return s=>t.parser.many(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else if(n==="+"){let o=t.many++;if(i){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(a)}),GATE:()=>i(a)},{ALT:Fd(),GATE:()=>!i(a)}])}else return s=>t.parser.atLeastOne(o,{DEF:()=>r(s)})}else if(n==="?"){let o=t.optional++;return s=>t.parser.optional(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else Vi(n)}function SD(t,e){let r=eV(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function eV(t,e){if(Dt(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!Dt(n);)(fn(n)||Ms(n)||Fs(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function xy(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function Ny(t){let e=t.Grammar,r=t.parser.Lexer,n=new su(t);return Yd(e,n,r.definition),n.finalize(),n}function Ey(t){let e=AD(t);return e.finalize(),e}function AD(t){let e=t.Grammar,r=t.parser.Lexer,n=new ou(t);return Yd(e,n,r.definition)}var au=class{buildTokens(e,r){let n=he(Il(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&xf(a)?o.unshift(s):o.push(s)}),o}buildTerminalTokens(e){return e.filter(Wr).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=ji(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,i={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(i.GROUP=xf(r)?Lt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,i)=>(r.lastIndex=i,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(Dt).flatMap(i=>Gr(i).filter(lr)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!(n!=null&&n.caseInsensitive)))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(oT(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i==null?void 0:i.PATTERN;return o!=null&&o.source&&sT("^"+o.source+"$",e.value)&&n.push(i),n},[])}};var lu=class{convert(e,r){let n=r.grammarSource;if(On(n)&&(n=Sl(n)),Vr(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return Jn.convertInt(r);case"STRING":return Jn.convertString(r);case"ID":return Jn.convertID(r)}switch((i=mT(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return Jn.convertNumber(r);case"boolean":return Jn.convertBoolean(r);case"bigint":return Jn.convertBigint(r);case"date":return Jn.convertDate(r);default:return r}}},Jn;(function(t){function e(u){let c="";for(let f=1;f<u.length-1;f++){let d=u.charAt(f);if(d==="\\"){let m=u.charAt(++f);c+=r(m)}else c+=d}return c}t.convertString=e;function r(u){switch(u){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return u}}function n(u){return u.charAt(0)==="^"?u.substring(1):u}t.convertID=n;function i(u){return parseInt(u)}t.convertInt=i;function o(u){return BigInt(u)}t.convertBigint=o;function s(u){return new Date(u)}t.convertDate=s;function a(u){return Number(u)}t.convertNumber=a;function l(u){return u.toLowerCase()==="true"}t.convertBoolean=l})(Jn||(Jn={}));var re={};De(re,Ft(kD(),1));function wy(){return new Promise(t=>{typeof setImmediate=="undefined"?setTimeout(t,0):setImmediate(t)})}var ky=0,wD=10;function $D(){return ky=Date.now(),new re.CancellationTokenSource}function PD(t){wD=t}var Zn=Symbol("OperationCancelled");function Qn(t){return t===Zn}async function Ot(t){if(t===re.CancellationToken.None)return;let e=Date.now();if(e-ky>=wD&&(ky=e,await wy()),t.isCancellationRequested)throw Zn}var kr=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var Qd=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=FD(n.range),o=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(s,this._content.length);let a=Math.max(i.start.line,0),l=Math.max(i.end.line,0),u=this._lineOffsets,c=MD(n.text,!1,o);if(l-a===c.length)for(let d=0,m=c.length;d<m;d++)u[d+a+1]=c[d];else c.length<1e4?u.splice(a+1,l-a,...c):this._lineOffsets=u=u.slice(0,a+1).concat(c,u.slice(l+1));let f=n.text.length-(s-o);if(f!==0)for(let d=a+1+c.length,m=u.length;d<m;d++)u[d]=u[d]+f}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=MD(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},uo;(function(t){function e(i,o,s,a){return new Qd(i,o,s,a)}t.create=e;function r(i,o,s){if(i instanceof Qd)return i.update(o,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let s=i.getText(),a=$y(o.map(cV),(c,f)=>{let d=c.range.start.line-f.range.start.line;return d===0?c.range.start.character-f.range.start.character:d}),l=0,u=[];for(let c of a){let f=i.offsetAt(c.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&u.push(s.substring(l,f)),c.newText.length&&u.push(c.newText),l=i.offsetAt(c.range.end)}return u.push(s.substr(l)),u.join("")}t.applyEdits=n})(uo||(uo={}));function $y(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);$y(n,e),$y(i,e);let o=0,s=0,a=0;for(;o<n.length&&s<i.length;)e(n[o],i[s])<=0?t[a++]=n[o++]:t[a++]=i[s++];for(;o<n.length;)t[a++]=n[o++];for(;s<i.length;)t[a++]=i[s++];return t}function MD(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function FD(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function cV(t){let e=FD(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var ae;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(ae||(ae={}));var uu=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=re.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r!=null?r:Pe.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let i=await this.parseAsync(e,r,n);return this.createLangiumDocument(i,e,void 0,r)}else{let i=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(i,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:ae.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:ae.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=o,o}async update(e,r){var n,i;let o=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,s=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=s?s.getText():await this.fileSystemProvider.readFile(e.uri);if(s)Object.defineProperty(e,"textDocument",{value:s});else{let l=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:l})}return o!==a&&(e.parseResult=await this.parseAsync(e.uri,a,r),e.parseResult.value.$document=e),e.state=ae.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i!=null?i:i=uo.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r!=null?r:"")}},cu=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return he(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(i=>(this.addDocument(i),i));{let i=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=ae.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=ae.Changed,this.documentMap.delete(r)),n}};var Yo=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=re.CancellationToken.None){for(let n of jr(e.parseResult.value))await Ot(r),Ws(n).forEach(i=>this.doLink(i,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if(xn(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o!=null?o:this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n!=null?n:this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,s={$refNode:n,$refText:i,get ref(){var a;if(Be(this._ref))return this._ref;if(ml(this._nodeDescription)){let l=o.loadAstNode(this._nodeDescription);this._ref=l!=null?l:o.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let l=o.getLinkedNode({reference:s,container:e,property:r});if(l.error&&Rt(e).state<ae.ComputedScopes)return;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return xn(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(xn(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=Rt(e.container);n.state<ae.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};function ep(t){return typeof t.name=="string"}var fu=class{getName(e){if(ep(e))return e.name}getNameNode(e){return Gi(e.$cstNode,"name")}};var Xo=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=dT(e),n=e.astNode;if(r&&n){let i=n[r.feature];if(vt(i))return i.ref;if(Array.isArray(i)){for(let o of i)if(vt(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||zg(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r!=null&&r.$cstNode){let n=this.nameProvider.getNameNode(r);return n!=null?n:r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(i=i.filter(o=>Ut.equals(o.sourceUri,r.documentUri))),n.push(...i),he(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=Rt(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:So(r),local:!0}}}};var hn=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return Us.sum(he(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return he(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return he(this.map.keys())}values(){return he(this.map.values()).flat()}entriesGroupedByKey(){return he(this.map.entries())}},Jo=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var Zo=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=re.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=Ao,i=re.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let s of n(e))await Ot(i),this.exportNode(s,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=re.CancellationToken.None){let n=e.parseResult.value,i=new hn;for(let o of Gr(n))await Ot(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};var Xr=class{constructor(e,r,n){var i;this.elements=e,this.outerScope=r,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},du=class{constructor(e,r,n){var i;this.elements=new Map,this.caseInsensitive=(i=n==null?void 0:n.caseInsensitive)!==null&&i!==void 0?i:!1;for(let o of e){let s=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(s,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=he(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},fV={getElement(){},getAllElements(){return Bi}};var Va=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},pu=class extends Va{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},Qo=class extends Va{constructor(e){super(),this.cache=new Map,this.converter=e!=null?e:r=>r}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let i=this.cacheForContext(e);if(i.has(r))return i.get(r);if(n){let o=n();return i.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},tp=class extends Qo{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let i=r.concat(n);for(let o of i)this.clear(o)}))}},Ga=class extends pu{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var es=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new Ga(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=Rt(e.container).precomputedScopes;if(i){let s=e.container;do{let a=i.get(s);a.length>0&&r.push(he(a).filter(l=>this.reflection.isSubtype(l.type,n))),s=s.$container}while(s)}let o=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)o=this.createScope(r[s],o);return o}createScope(e,r,n){return new Xr(he(e),r,n)}createScopeForNodes(e,r,n){let i=he(e).map(o=>{let s=this.nameProvider.getName(o);if(s)return this.descriptions.createDescription(o,s)}).nonNullable();return new Xr(i,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new du(this.indexManager.allElements(e)))}};function Py(t){return typeof t.$comment=="string"}function UD(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var ts=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r==null?void 0:r.replacer,i=(s,a)=>this.replacer(s,a,r),o=n?(s,a)=>n(s,a,i):i;try{return this.currentDocument=Rt(e),JSON.stringify(e,o,r==null?void 0:r.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:i,textRegions:o,comments:s,uriConverter:a}){var l,u,c,f;if(!this.ignoreProperties.has(e))if(vt(r)){let d=r.ref,m=n?r.$refText:void 0;if(d){let v=Rt(d),N="";this.currentDocument&&this.currentDocument!==v&&(a?N=a(v.uri,r):N=v.uri.toString());let S=this.astNodeLocator.getAstNodePath(d);return{$ref:`${N}#${S}`,$refText:m}}else return{$error:(u=(l=r.error)===null||l===void 0?void 0:l.message)!==null&&u!==void 0?u:"Could not resolve reference",$refText:m}}else if(Be(r)){let d;if(o&&(d=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&(d!=null&&d.$textRegion)&&(d.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),i&&!e&&(d!=null||(d=Object.assign({},r)),d.$sourceText=(f=r.$cstNode)===null||f===void 0?void 0:f.text),s){d!=null||(d=Object.assign({},r));let m=this.commentProvider.getComment(r);m&&(d.$comment=m.replace(/\r/g,""))}return d!=null?d:r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),i=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let s=Gs(e.$cstNode,o).map(r);s.length!==0&&(i[o]=s)}),e}}linkNode(e,r,n,i,o,s){for(let[l,u]of Object.entries(e))if(Array.isArray(u))for(let c=0;c<u.length;c++){let f=u[c];UD(f)?u[c]=this.reviveReference(e,l,r,f,n):Be(f)&&this.linkNode(f,r,n,e,l,c)}else UD(u)?e[l]=this.reviveReference(e,l,r,u,n):Be(u)&&this.linkNode(u,r,n,e,l);let a=e;a.$container=i,a.$containerProperty=o,a.$containerIndex=s}reviveReference(e,r,n,i,o){let s=i.$refText,a=i.$error;if(i.$ref){let l=this.getRefNode(n,i.$ref,o.uriConverter);if(Be(l))return s||(s=this.nameProvider.getName(l)),{$refText:s!=null?s:"",ref:l};a=l}if(a){let l={$refText:s!=null?s:""};return l.error={container:e,property:r,message:a,reference:l},l}else return}getRefNode(e,r,n){try{let i=r.indexOf("#");if(i===0){let l=this.astNodeLocator.getAstNode(e,r.substring(1));return l||"Could not resolve path: "+r}if(i<0){let l=n?n(r):Pe.parse(r),u=this.langiumDocuments.getDocument(l);return u?u.parseResult.value:"Could not find document for URI: "+r}let o=n?n(r.substring(0,i)):Pe.parse(r.substring(0,i)),s=this.langiumDocuments.getDocument(o);if(!s)return"Could not find document for URI: "+r;if(i===r.length-1)return s.parseResult.value;let a=this.astNodeLocator.getAstNode(s.parseResult.value,r.substring(i+1));return a||"Could not resolve URI: "+r}catch(i){return String(i)}}};var rs=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=Ut.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function rp(t){return{code:t}}var ja;(function(t){t.all=["fast","slow","built-in"]})(ja||(ja={}));var mu=class{constructor(e){this.entries=new hn,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[i,o]of Object.entries(e)){let s=o;if(Array.isArray(s))for(let a of s){let l={check:this.wrapValidationException(a,r),category:n};this.addEntry(i,l)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(i,a)}}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(s){if(Qn(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),i("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=he(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(i=>r.includes(i.category))),n.map(i=>i.check)}};var hu=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=re.CancellationToken.None){let i=e.parseResult,o=[];if(await Ot(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(i,o,r),r.stopAfterLexingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===vi.LexingError})||(this.processParsingErrors(i,o,r),r.stopAfterParsingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===vi.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===vi.LinkingError}))))return o;try{o.push(...await this.validateAst(i.value,r,n))}catch(s){if(Qn(s))throw s;console.error("An error occurred during validation:",s)}return await Ot(n),o}processLexingErrors(e,r,n){for(let i of e.lexerErrors){let o={severity:np("error"),range:{start:{line:i.line-1,character:i.column-1},end:{line:i.line-1,character:i.column+i.length-1}},message:i.message,data:rp(vi.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let i of e.parserErrors){let o;if(isNaN(i.token.startOffset)){if("previousToken"in i){let s=i.previousToken;if(isNaN(s.startOffset)){let a={line:0,character:0};o={start:a,end:a}}else{let a={line:s.endLine-1,character:s.endColumn};o={start:a,end:a}}}}else o=Bs(i.token);if(o){let s={severity:np("error"),range:o,message:i.message,data:rp(vi.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let i of e.references){let o=i.error;if(o){let s={node:o.container,property:o.property,index:o.index,data:{code:vi.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,s))}}}async validateAst(e,r,n=re.CancellationToken.None){let i=[],o=(s,a,l)=>{i.push(this.toDiagnostic(s,a,l))};return await Promise.all(jr(e).map(async s=>{await Ot(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let l of a)await l(s,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:BD(n),severity:np(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function BD(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Gi(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=js(t.node.$cstNode,t.keyword,t.index)),e!=null||(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function np(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var vi;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(vi||(vi={}));var gu=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=Rt(e)){r!=null||(r=this.nameProvider.getName(e));let i=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${i} has no name.`);let o,s=()=>{var a;return o!=null?o:o=So((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode)};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:So(e.$cstNode),type:e.$type,documentUri:n.uri,path:i}}},Tu=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=re.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of jr(i))await Ot(r),Ws(o).filter(s=>!xn(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=Rt(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:So(n),local:Ut.equals(r.documentUri,i)}}};var yu=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let s=o.indexOf(this.indexSeparator);if(s>0){let a=o.substring(0,s),l=parseInt(o.substring(s+1)),u=i[a];return u==null?void 0:u[l]}return i[o]},e)}};var _u=class{constructor(e){this._ready=new kr,this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.fetchConfiguration){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await e.fetchConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){await this.ready;let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var ns;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(ns||(ns={}));var vu=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new hn,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=ae.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=re.CancellationToken.None){var i,o;for(let s of e){let a=s.uri.toString();if(s.state===ae.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=ae.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let l=this.buildState.get(a),u=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(u){let f=((o=r.validation.categories)!==null&&o!==void 0?o:ja.all).filter(d=>!u.includes(d));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:f})},result:l.result}),s.state=ae.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=ae.Changed,await this.emitUpdate(e.map(s=>s.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=re.CancellationToken.None){this.currentState=ae.Changed;for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString()),this.indexManager.remove(s);for(let s of e){if(!this.langiumDocuments.invalidateDocument(s)){let l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},s);l.state=ae.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(s.toString())}let i=he(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!i.has(s.uri.toString())&&this.shouldRelink(s,i)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,ae.ComputedScopes),s.diagnostics=void 0}),await this.emitUpdate(e,r),await Ot(n);let o=this.langiumDocuments.all.filter(s=>{var a;return s.state<ae.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),ns.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,ae.Parsed,n,o=>this.langiumDocumentFactory.update(o,n)),await this.runCancelable(e,ae.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,ae.ComputedScopes,n,async o=>{let s=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await s.computeLocalScopes(o,n)}),await this.runCancelable(e,ae.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,ae.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o));await this.runCancelable(i,ae.Validated,n,o=>this.validate(o,n));for(let o of e){let s=this.buildState.get(o.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let i=n.uri.toString(),o=this.buildState.get(i);(!o||o.completed)&&this.buildState.set(i,{completed:!1,options:r,result:o==null?void 0:o.result})}}async runCancelable(e,r,n,i){let o=e.filter(s=>s.state<r);for(let s of o)await Ot(n),await i(s),s.state=r;await this.notifyBuildPhase(o,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),ns.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let i;if(r&&"path"in r?i=r:n=r,n!=null||(n=re.CancellationToken.None),i){let o=this.langiumDocuments.getDocument(i);if(o&&o.state>e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Zn):new Promise((o,s)=>{let a=this.onBuildPhase(e,()=>{if(a.dispose(),l.dispose(),i){let u=this.langiumDocuments.getDocument(i);o(u==null?void 0:u.uri)}else o(void 0)}),l=n.onCancellationRequested(()=>{a.dispose(),l.dispose(),s(Zn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await Ot(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,i;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,l=await o.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;let u=this.buildState.get(e.uri.toString());if(u){(n=u.result)!==null&&n!==void 0||(u.result={});let c=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:ja.all;u.result.validationChecks?u.result.validationChecks.push(...c):u.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var Ru=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new Qo,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=Rt(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(s=>{Ut.equals(s.targetUri,n)&&s.targetPath===r&&i.push(s)})}),he(i)}allElements(e,r){let n=he(this.symbolIndex.keys());return r&&(n=n.filter(i=>!r||r.has(i))),n.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var o;return((o=this.symbolIndex.get(e))!==null&&o!==void 0?o:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=re.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),o=e.uri.toString();this.symbolIndex.set(o,i),this.symbolByTypeIndex.clear(o)}async updateReferences(e,r=re.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(i=>!i.local&&r.has(i.targetUri.toString())):!1}};var xu=class{constructor(e){this.initialBuildOptions={},this._ready=new kr,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=re.CancellationToken.None){let n=await this.performStartup(e);await Ot(r),await this.documentBuilder.build(n,this.initialBuildOptions,r)}async performStartup(e){let r=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),n=[],i=o=>{n.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,i),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,r,i))),this._ready.resolve(),n}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return Pe.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,i);else if(s.isFile){let a=await this.langiumDocuments.getOrCreateDocument(s.uri);i(a)}}}))}includeEntry(e,r,n){let i=Ut.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=Ut.extname(r.uri);return n.includes(o)}return!1}};var Nu=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=My(r)?Object.values(r):r;this.chevrotainLexer=new Lt(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(My(e))return e;let r=Fy(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};function WD(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Fy(t){return t&&"modes"in t&&"defaultMode"in t}function My(t){return!WD(t)&&!Fy(t)}function Wy(t,e,r){let n,i;typeof t=="string"?(i=e,n=r):(i=t.range.start,n=e),i||(i=ke.create(0,0));let o=jD(t),s=Gy(n),a=pV({lines:o,position:i,options:s});return yV({index:0,tokens:a,position:i})}function Vy(t,e){let r=Gy(e),n=jD(t);if(n.length===0)return!1;let i=n[0],o=n[n.length-1],s=r.start,a=r.end;return!!(s!=null&&s.exec(i))&&!!(a!=null&&a.exec(o))}function jD(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(nT)}var VD=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,dV=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function pV(t){var e,r,n;let i=[],o=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let l=a===0,u=a===t.lines.length-1,c=t.lines[a],f=0;if(l&&t.options.start){let m=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);m&&(f=m.index+m[0].length)}else{let m=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);m&&(f=m.index+m[0].length)}if(u){let m=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);m&&(c=c.substring(0,m.index))}if(c=c.substring(0,TV(c)),By(c,f)>=c.length){if(i.length>0){let m=ke.create(o,s);i.push({type:"break",content:"",range:Se.create(m,m)})}}else{VD.lastIndex=f;let m=VD.exec(c);if(m){let v=m[0],N=m[1],S=ke.create(o,s+f),O=ke.create(o,s+f+v.length);i.push({type:"tag",content:N,range:Se.create(S,O)}),f+=v.length,f=By(c,f)}if(f<c.length){let v=c.substring(f),N=Array.from(v.matchAll(dV));i.push(...mV(N,v,o,s+f))}}o++,s=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function mV(t,e,r,n){let i=[];if(t.length===0){let o=ke.create(r,n),s=ke.create(r,n+e.length);i.push({type:"text",content:e,range:Se.create(o,s)})}else{let o=0;for(let a of t){let l=a.index,u=e.substring(o,l);u.length>0&&i.push({type:"text",content:e.substring(o,l),range:Se.create(ke.create(r,o+n),ke.create(r,l+n))});let c=u.length+1,f=a[1];if(i.push({type:"inline-tag",content:f,range:Se.create(ke.create(r,o+c+n),ke.create(r,o+c+f.length+n))}),c+=f.length,a.length===4){c+=a[2].length;let d=a[3];i.push({type:"text",content:d,range:Se.create(ke.create(r,o+c+n),ke.create(r,o+c+d.length+n))})}else i.push({type:"text",content:"",range:Se.create(ke.create(r,o+c+n),ke.create(r,o+c+n))});o=l+a[0].length}let s=e.substring(o);s.length>0&&i.push({type:"text",content:s,range:Se.create(ke.create(r,o+n),ke.create(r,o+n+s.length))})}return i}var hV=/\S/,gV=/\s*$/;function By(t,e){let r=t.substring(e).match(hV);return r?e+r.index:t.length}function TV(t){let e=t.match(gV);if(e&&typeof e.index=="number")return e.index}function yV(t){var e,r,n,i;let o=ke.create(t.position.line,t.position.character);if(t.tokens.length===0)return new ip([],Se.create(o,o));let s=[];for(;t.index<t.tokens.length;){let u=_V(t,s[s.length-1]);u&&s.push(u)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,l=(i=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&i!==void 0?i:o;return new ip(s,Se.create(a,l))}function _V(t,e){let r=t.tokens[t.index];if(r.type==="tag")return HD(t,!1);if(r.type==="text"||r.type==="inline-tag")return qD(t);vV(r,e),t.index++}function vV(t,e){if(e){let r=new op("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function qD(t){let e=t.tokens[t.index],r=e,n=e,i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(RV(t)),n=e,e=t.tokens[t.index];return new Ou(i,Se.create(r.range.start,n.range.end))}function RV(t){return t.tokens[t.index].type==="inline-tag"?HD(t,!0):KD(t)}function HD(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){let o=KD(t);return new Eu(n,new Ou([o],o.range),e,Se.create(r.range.start,o.range.end))}else{let o=qD(t);return new Eu(n,o,e,Se.create(r.range.start,o.range.end))}else{let o=r.range;return new Eu(n,new Ou([],o),e,o)}}function KD(t){let e=t.tokens[t.index++];return new op(e.content,e.range)}function Gy(t){if(!t)return Gy({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Uy(e,!0),end:Uy(r,!1),line:Uy(n,!0)}}function Uy(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?ko(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var ip=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=GD(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let i=n.toMarkdown(e);r+=GD(r)+i}return r.trim()}},Eu=class{constructor(e,r,n,i){this.name=e,this.content=r,this.inline=n,this.range=i}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e==null?void 0:e.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=xV(this.name,r,e!=null?e:{});if(typeof o=="string")return o}let n="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?n="*":(e==null?void 0:e.tag)==="bold"?n="**":(e==null?void 0:e.tag)==="bold-italic"&&(n="***");let i=`${n}@${this.name}${n}`;return this.content.inlines.length===1?i=`${i} \u2014 ${r}`:this.content.inlines.length>1&&(i=`${i}
${r}`),this.inline?`{${i}}`:i}};function xV(t,e,r){var n,i;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),s=e;if(o>0){let l=By(e,o);s=e.substring(l),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(i=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&i!==void 0?i:NV(e,s)}}function NV(t,e){try{return Pe.parse(t,!0),`[${e}](${t})`}catch{return t}}var Ou=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],i=this.inlines[r+1];e+=n.toString(),i&&i.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let i=this.inlines[n],o=this.inlines[n+1];r+=i.toMarkdown(e),o&&o.range.start.line>i.range.start.line&&(r+=`
`)}return r}},op=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function GD(t){return t.endsWith(`
`)?`
`:`

`}var Iu=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Vy(r))return Wy(r).toMarkdown({renderLink:(i,o)=>this.documentationLinkRenderer(e,i,o),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,r,n){var i;let o=(i=this.findNameInPrecomputedScopes(e,r))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let s=o.nameSegment.range.start.line+1,a=o.nameSegment.range.start.character+1,l=o.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${l.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let i=Rt(e).precomputedScopes;if(!i)return;let o=e;do{let a=i.get(o).find(l=>l.name===r);if(a)return a;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(i=>i.name===r)}};var Su=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Py(e)?e.$comment:(r=Yg(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var kt={};De(kt,Ft(Cy(),1));var Au=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},sp=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),i=new kr,o,s=r.onCancellationRequested(()=>{o=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(a=>{let l=this.hydrator.hydrate(a);i.resolve(l)}).catch(a=>{i.reject(a)}).finally(()=>{s.dispose(),clearTimeout(o)}),i.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new kr;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject(Zn)}),this.queue.push(r),r.promise}},ap=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,i){this.onReadyEmitter=new kt.Emitter,this.deferred=new kr,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=i,r(o=>{let s=o;this.deferred.resolve(s),this.unlock()}),n(o=>{this.deferred.reject(o),this.unlock()})}terminate(){this.deferred.reject(Zn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new kr,this.sendMessage(e),this.deferred.promise}};var Du=class{constructor(){this.previousTokenSource=new re.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new re.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let i=new kr,o={action:r,deferred:i,cancellationToken:n!=null?n:re.CancellationToken.None};return e.push(o),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:i})=>{try{let o=await Promise.resolve().then(()=>r(i));n.resolve(o)}catch(o){Qn(o)?n.resolve(void 0):n.reject(o)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var Cu=class{constructor(e){this.grammarElementIdMap=new Jo,this.tokenTypeIdMap=new Jo,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors.map(r=>Object.assign({},r)),parserErrors:e.parserErrors.map(r=>Object.assign({},r)),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}createDehyrationContext(e){let r=new Map,n=new Map;for(let i of jr(e))r.set(i,{});if(e.$cstNode)for(let i of Io(e.$cstNode))n.set(i,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.dehydrateAstNode(a,r)):vt(a)?s.push(this.dehydrateReference(a,r)):s.push(a)}else Be(o)?n[i]=this.dehydrateAstNode(o,r):vt(o)?n[i]=this.dehydrateReference(o,r):o!==void 0&&(n[i]=o);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return hl(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),Ir(e)?n.content=e.content.map(i=>this.dehydrateCstNode(i,r)):Nn(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=e.value,n=this.createHydrationContext(r);return"$cstNode"in r&&this.hydrateCstNode(r.$cstNode,n),{lexerErrors:e.lexerErrors,parserErrors:e.parserErrors,value:this.hydrateAstNode(r,n)}}createHydrationContext(e){let r=new Map,n=new Map;for(let o of jr(e))r.set(o,{});let i;if(e.$cstNode)for(let o of Io(e.$cstNode)){let s;"fullText"in o?(s=new Fa(o.fullText),i=s):"content"in o?s=new Ko:"tokenType"in o&&(s=this.hydrateCstLeafNode(o)),s&&(n.set(o,s),s.root=i)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[i,o]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(o)){let s=[];n[i]=s;for(let a of o)Be(a)?s.push(this.setParent(this.hydrateAstNode(a,r),n)):vt(a)?s.push(this.hydrateReference(a,n,i,r)):s.push(a)}else Be(o)?n[i]=this.setParent(this.hydrateAstNode(o,r),n):vt(o)?n[i]=this.hydrateReference(o,n,i,r):o!==void 0&&(n[i]=o);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,i){return this.linker.buildReference(r,n,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let i=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=r.astNodes.get(e.astNode),Ir(i))for(let o of e.content){let s=this.hydrateCstNode(o,r,n++);i.content.push(s)}return i}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,i=e.length,o=e.startLine,s=e.startColumn,a=e.endLine,l=e.endColumn,u=e.hidden;return new Ho(n,i,{start:{line:o,character:s},end:{line:a,character:l}},r,u)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of jr(this.grammar))Oo(r)&&this.grammarElementIdMap.set(r,e++)}};function bu(t){return{documentation:{CommentProvider:e=>new Su(e),DocumentationProvider:e=>new Iu(e)},parser:{AsyncParser:e=>new Au(e),GrammarConfig:e=>yT(e),LangiumParser:e=>Ey(e),CompletionParser:e=>Ny(e),ValueConverter:()=>new lu,TokenBuilder:()=>new au,Lexer:e=>new Nu(e),ParserErrorMessageProvider:()=>new Ua},workspace:{AstNodeLocator:()=>new yu,AstNodeDescriptionProvider:e=>new gu(e),ReferenceDescriptionProvider:e=>new Tu(e)},references:{Linker:e=>new Yo(e),NameProvider:()=>new fu,ScopeProvider:e=>new es(e),ScopeComputation:e=>new Zo(e),References:e=>new Xo(e)},serializer:{Hydrator:e=>new Cu(e),JsonSerializer:e=>new ts(e)},validation:{DocumentValidator:e=>new hu(e),ValidationRegistry:e=>new mu(e)},shared:()=>t.shared}}function Lu(t){return{ServiceRegistry:()=>new rs,workspace:{LangiumDocuments:e=>new cu(e),LangiumDocumentFactory:e=>new uu(e),DocumentBuilder:e=>new vu(e),IndexManager:e=>new Ru(e),WorkspaceManager:e=>new xu(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new Du,ConfigurationProvider:e=>new _u(e)}}}var qa;(function(t){t.merge=(e,r)=>lp(lp({},e),r)})(qa||(qa={}));function is(t,e,r,n,i,o,s,a,l){let u=[t,e,r,n,i,o,s,a,l].reduce(lp,{});return XD(u)}var jy=Symbol("isProxy");function ku(t){if(t&&t[jy])for(let e of Object.values(t))ku(e);return t}function XD(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>YD(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(YD(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),jy]});return r[jy]=!0,r}var zD=Symbol();function YD(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===zD)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=zD;try{t[e]=typeof i=="function"?i(n):XD(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function lp(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=lp(i,n):t[r]=n}}return t}var JD=Ft(Br(),1);var Ha=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=er(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let s=Ut.equals(Rt(o).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(o,a).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return JD.DocumentHighlight.create(e.segment.range)}};var up=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o!=null?o:i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of Ao(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}};var wu=Ft(Br(),1);var cp=class{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var i,o;r=!!(!((o=(i=n.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||o===void 0)&&o.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=he(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,i={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n==null||n.client.register(wu.DidChangeWatchedFilesNotification.type,i)}}fireDocumentUpdate(e,r){this.workspaceManager.ready.then(()=>{this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}).catch(n=>{console.error("Workspace initialization failed. Could not perform document update.",n)})}didChangeContent(e){this.fireDocumentUpdate([Pe.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=he(e.changes).filter(i=>i.type!==wu.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>Pe.parse(i.uri)).toArray(),n=he(e.changes).filter(i=>i.type===wu.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>Pe.parse(i.uri)).toArray();this.fireDocumentUpdate(r,n)}};var $u=Ft(Br(),1);var fp=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=Gr(i).iterator(),s;do if(s=o.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||o.prune()}while(!s.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of Kg(i))if(this.commentNames.includes(o.tokenType.name)){let s=this.toFoldingRange(e,o,$u.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,s=i.end;if(!(s.line-o.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),$u.FoldingRange.create(o.line,s.line,o.character,s.character,n)}includeLastFoldingLine(e,r){if(r===$u.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};var dp=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,s=r.length;for(let a=0;a<s;a++){let l=r.charCodeAt(a),u=e.charCodeAt(o);if((l===u||this.toUpperCharCode(l)===this.toUpperCharCode(u))&&(n||(n=i===void 0||this.isWordTransition(i,l)),n&&o++,o===e.length))return!0;i=l}return!1}isWordTransition(e,r){return ZD<=e&&e<=QD&&EV<=r&&r<=OV||e===eC&&r!==eC}toUpperCharCode(e){return ZD<=e&&e<=QD?e-32:e}},ZD=97,QD=122,EV=65,OV=90,eC=95;var qy=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let s=e.textDocument.offsetAt(r.position),a=er(o,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l)}}}},pp=class extends qy{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var gn=Ft(_t(),1);var Ne=Ft(Br(),1);var rC={[Ne.SemanticTokenTypes.class]:0,[Ne.SemanticTokenTypes.comment]:1,[Ne.SemanticTokenTypes.enum]:2,[Ne.SemanticTokenTypes.enumMember]:3,[Ne.SemanticTokenTypes.event]:4,[Ne.SemanticTokenTypes.function]:5,[Ne.SemanticTokenTypes.interface]:6,[Ne.SemanticTokenTypes.keyword]:7,[Ne.SemanticTokenTypes.macro]:8,[Ne.SemanticTokenTypes.method]:9,[Ne.SemanticTokenTypes.modifier]:10,[Ne.SemanticTokenTypes.namespace]:11,[Ne.SemanticTokenTypes.number]:12,[Ne.SemanticTokenTypes.operator]:13,[Ne.SemanticTokenTypes.parameter]:14,[Ne.SemanticTokenTypes.property]:15,[Ne.SemanticTokenTypes.regexp]:16,[Ne.SemanticTokenTypes.string]:17,[Ne.SemanticTokenTypes.struct]:18,[Ne.SemanticTokenTypes.type]:19,[Ne.SemanticTokenTypes.typeParameter]:20,[Ne.SemanticTokenTypes.variable]:21,[Ne.SemanticTokenTypes.decorator]:22},IV={[Ne.SemanticTokenModifiers.abstract]:1,[Ne.SemanticTokenModifiers.async]:2,[Ne.SemanticTokenModifiers.declaration]:4,[Ne.SemanticTokenModifiers.defaultLibrary]:8,[Ne.SemanticTokenModifiers.definition]:16,[Ne.SemanticTokenModifiers.deprecated]:32,[Ne.SemanticTokenModifiers.documentation]:64,[Ne.SemanticTokenModifiers.modification]:128,[Ne.SemanticTokenModifiers.readonly]:256,[Ne.SemanticTokenModifiers.static]:512},nC={legend:{tokenTypes:Object.keys(rC),tokenModifiers:Object.keys(IV)},full:{delta:!0},range:!0};var tC;(function(t){function e(n,i){let o=new Map;Object.entries(rC).forEach(([l,u])=>o.set(u,l));let s=0,a=0;return r(n.data,5).map(l=>{s+=l[0],l[0]!==0&&(a=0),a+=l[1];let u=l[2];return{offset:i.textDocument.offsetAt({line:s,character:a}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:i.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+u}})}})}t.decode=e;function r(n,i){let o=[];for(let s=0;s<n.length;s+=i){let a=n.slice(s,s+i);o.push(a)}return o}})(tC||(tC={}));var mp=class{provideSignatureHelp(e,r,n=re.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let s=_l(o,e.textDocument.offsetAt(r.position));if(s)return this.getSignatureFromElement(s.astNode,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};function iC(t){let e=[],r=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var hp=class{constructor(e){this.onInitializeEmitter=new gn.Emitter,this.onInitializedEmitter=new gn.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){ku(this.services),this.services.ServiceRegistry.all.forEach(e=>ku(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,i,o;let s=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,a=this.services.ServiceRegistry.all,l=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.Formatter}),u=a.map($=>{var w,le;return(le=(w=$.lsp)===null||w===void 0?void 0:w.Formatter)===null||le===void 0?void 0:le.formatOnTypeOptions}).find($=>!!$),c=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.CodeActionProvider}),f=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.SemanticTokenProvider}),d=(i=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,m=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.DocumentLinkProvider}),v=iC(a.map($=>{var w,le;return(le=(w=$.lsp)===null||w===void 0?void 0:w.SignatureHelp)===null||le===void 0?void 0:le.signatureHelpOptions})),N=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.TypeProvider}),S=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.ImplementationProvider}),O=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.CompletionProvider}),y=nE(a.map($=>{var w,le;return(le=(w=$.lsp)===null||w===void 0?void 0:w.CompletionProvider)===null||le===void 0?void 0:le.completionOptions})),g=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.ReferencesProvider}),I=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.DocumentSymbolProvider}),M=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.DefinitionProvider}),J=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.DocumentHighlightProvider}),ce=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.FoldingRangeProvider}),_e=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.HoverProvider}),Ge=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.RenameProvider}),Ce=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.CallHierarchyProvider}),j=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.TypeHierarchyProvider}),k=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.CodeLensProvider}),B=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.DeclarationProvider}),G=this.hasService($=>{var w;return(w=$.lsp)===null||w===void 0?void 0:w.InlayHintProvider}),ie=(o=this.services.lsp)===null||o===void 0?void 0:o.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:s},executeCommandProvider:d&&{commands:d},textDocumentSync:gn.TextDocumentSyncKind.Incremental,completionProvider:O?y:void 0,referencesProvider:g,documentSymbolProvider:I,definitionProvider:M,typeDefinitionProvider:N,documentHighlightProvider:J,codeActionProvider:c,documentFormattingProvider:l,documentRangeFormattingProvider:l,documentOnTypeFormattingProvider:u,foldingRangeProvider:ce,hoverProvider:_e,renameProvider:Ge?{prepareProvider:!0}:void 0,semanticTokensProvider:f?nC:void 0,signatureHelpProvider:v,implementationProvider:S,callHierarchyProvider:Ce?{}:void 0,typeHierarchyProvider:j?{}:void 0,documentLinkProvider:m?{resolveProvider:!1}:void 0,codeLensProvider:k?{resolveProvider:!1}:void 0,declarationProvider:B,inlayHintProvider:G?{resolveProvider:!1}:void 0,workspaceSymbolProvider:ie?{resolveProvider:!!ie.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:i=>r.client.register(gn.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>r.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(n).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}};function oC(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");SV(e,t),AV(e,t),DV(e,t),CV(e,t),bV(e,t),kV(e,t),wV(e,t),$V(e,t),PV(e,t),FV(e,t),BV(e,t),WV(e,t),LV(e,t),VV(e,t),UV(e,t),GV(e,t),jV(e,t),HV(e,t),zV(e,t),JV(e,t),ZV(e,t),YV(e,t),KV(e,t),qV(e,t),MV(e,t),XV(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>{t.lsp.LanguageServer.initialized(n)}),t.workspace.TextDocuments.listen(e),e.listen()}function SV(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(i=>r.didChangeContent(i)),t.onDidChangeWatchedFiles(i=>r.didChangeWatchedFiles(i))}function AV(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function DV(t,e){e.workspace.DocumentBuilder.onBuildPhase(ae.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}function CV(t,e){t.onCompletion(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e,ae.IndexedReferences))}function bV(t,e){t.onReferences(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e,ae.IndexedReferences))}function LV(t,e){t.onCodeAction(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e,ae.Validated))}function kV(t,e){t.onDocumentSymbol(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e,ae.Parsed))}function wV(t,e){t.onDefinition(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e,ae.IndexedReferences))}function $V(t,e){t.onTypeDefinition(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e,ae.IndexedReferences))}function PV(t,e){t.onImplementation(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e,ae.IndexedReferences))}function MV(t,e){t.onDeclaration(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e,ae.IndexedReferences))}function FV(t,e){t.onDocumentHighlight(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e,ae.IndexedReferences))}function UV(t,e){t.onHover(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e,ae.IndexedReferences))}function BV(t,e){t.onFoldingRanges(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e,ae.Parsed))}function WV(t,e){t.onDocumentFormatting(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e,ae.Parsed)),t.onDocumentRangeFormatting(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e,ae.Parsed)),t.onDocumentOnTypeFormatting(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e,ae.Parsed))}function VV(t,e){t.onRenameRequest(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e,ae.IndexedReferences)),t.onPrepareRename(Er((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e,ae.IndexedReferences))}function GV(t,e){t.languages.inlayHint.on(Ri((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(n,i,o)},e,ae.IndexedReferences))}function jV(t,e){let r={data:[]};t.languages.semanticTokens.on(Ri((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,s):r},e,ae.IndexedReferences)),t.languages.semanticTokens.onDelta(Ri((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,s):r},e,ae.IndexedReferences)),t.languages.semanticTokens.onRange(Ri((n,i,o,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,s):r},e,ae.IndexedReferences))}function qV(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function HV(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(s){return os(s)}})}function KV(t,e){t.onDocumentLinks(Ri((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(n,i,o)},e,ae.Parsed))}function zV(t,e){t.onSignatureHelp(Ri((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e,ae.IndexedReferences))}function YV(t,e){t.onCodeLens(Ri((r,n,i,o)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(n,i,o)},e,ae.IndexedReferences))}function XV(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(s,a)=>{try{return await i.waitUntil(ae.IndexedContent,a),await n.getSymbols(s,a)}catch(l){return os(l)}});let o=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);o&&t.onWorkspaceSymbolResolve(async(s,a)=>{try{return await i.waitUntil(ae.IndexedContent,a),await o(s,a)}catch(l){return os(l)}})}}function JV(t,e){t.languages.callHierarchy.onPrepare(Ri(async(r,n,i,o)=>{var s;if(!((s=r.lsp)===null||s===void 0)&&s.CallHierarchyProvider){let a=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,i,o);return a!=null?a:null}return null},e,ae.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(gp(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.incomingCalls(n,i);return s!=null?s:null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(gp(async(r,n,i)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.outgoingCalls(n,i);return s!=null?s:null}return null},e))}function ZV(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(Ri(async(r,n,i,o)=>{var s,a;let l=await((a=(s=r.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(n,i,o));return l!=null?l:null},e,ae.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(gp(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.supertypes(n,i));return a!=null?a:null},e)),t.languages.typeHierarchy.onSubtypes(gp(async(r,n,i)=>{var o,s;let a=await((s=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||s===void 0?void 0:s.subtypes(n,i));return a!=null?a:null},e)))}function gp(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=Pe.parse(n.item.uri),s=await Hy(e,i,o,ae.IndexedReferences);if(s)return s;let a=r.getServices(o);if(!a){let l=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(l),new Error(l)}try{return await t(a,n,i)}catch(l){return os(l)}}}function Ri(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=Pe.parse(o.textDocument.uri),l=await Hy(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u){let f=`Could not find service instance for uri: '${a}'`;throw console.error(f),new Error(f)}let c=await n.getOrCreateDocument(a);try{return await t(u,c,o,s)}catch(f){return os(f)}}}function Er(t,e,r){let n=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(o,s)=>{let a=Pe.parse(o.textDocument.uri),l=await Hy(e,s,a,r);if(l)return l;let u=i.getServices(a);if(!u)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let c=n.getDocument(a);if(!c)return null;try{return await t(u,c,o,s)}catch(f){return os(f)}}}async function Hy(t,e,r,n){if(n!==void 0){let i=t.workspace.DocumentBuilder;try{await i.waitUntil(n,r,e)}catch(o){return os(o)}}}function os(t){if(Qn(t))return new gn.ResponseError(gn.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof gn.ResponseError)return t;throw t}var yp=Ft(Br(),1),Tp=class{getSymbolKind(){return yp.SymbolKind.Field}getCompletionItemKind(){return yp.CompletionItemKind.Reference}};var sC=Ft(Br(),1);var _p=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=er(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,s).forEach(a=>{i.push(sC.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}};var vp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),s=er(i,o,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,l).forEach(c=>{let f=lo.replace(c.segment.range,r.newName),d=c.sourceUri.toString();n[d]?n[d].push(f):n[d]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=er(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&ep(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var Rp=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=re.CancellationToken.None){let n=[],i=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await Ot(r),this.fuzzyMatcher.match(i,o.name)){let s=this.getWorkspaceSymbol(o);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function lC(t){return qa.merge(bu(t),QV(t))}function QV(t){return{lsp:{CompletionProvider:e=>new Ks(e),DocumentSymbolProvider:e=>new up(e),HoverProvider:e=>new pp(e),FoldingRangeProvider:e=>new fp(e),ReferencesProvider:e=>new _p(e),DefinitionProvider:e=>new Sf(e),DocumentHighlightProvider:e=>new Ha(e),RenameProvider:e=>new vp(e)},shared:()=>t.shared}}function uC(t){return qa.merge(Lu(t),eG(t))}function eG(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new hp(e),DocumentUpdateHandler:e=>new cp(e),WorkspaceSymbolProvider:e=>new Rp(e),NodeKindProvider:()=>new Tp,FuzzyMatcher:()=>new dp},workspace:{TextDocuments:()=>new aC.TextDocuments(uo)}}}var xp=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Ky(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var s;return(s=o.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var s;return(s=o.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(a,l,u)=>{var c,f;let d=this.nodeModeToKey(a,l),m=i.get(d),v=(c=u.options.priority)!==null&&c!==void 0?c:0,N=(f=m==null?void 0:m.options.priority)!==null&&f!==void 0?f:0;(!m||N<=v)&&i.set(d,u)};this.collector=o,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let s=e.offsetAt(i.range.start),a=e.offsetAt(o.range.end);s<a&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=Gr(n).iterator(),o;do if(o=i.next(),!o.done){let s=o.value;this.insideRange(s.$cstNode.range,r)?this.format(s):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},s=[],l=this.iterateCstTree(e,o).iterator(),u,c;do if(c=l.next(),!c.done){let f=c.value,d=Nn(f),m=this.nodeModeToKey(f,"prepend"),v=r.get(m);if(r.delete(m),v){let O=this.createTextEdit(u,f,v,o);for(let y of O)y&&this.insideRange(y.range,i)&&this.isNecessary(y,e.textDocument)&&s.push(y)}let N=this.nodeModeToKey(f,"append"),S=r.get(N);if(r.delete(N),S){let O=Xg(f);if(O){let y=this.createTextEdit(f,O,S,o);for(let g of y)g&&this.insideRange(g.range,i)&&this.isNecessary(g,e.textDocument)&&s.push(g)}}if(!v&&f.hidden){let O=this.createHiddenTextEdits(u,f,void 0,o);for(let y of O)y&&this.insideRange(y.range,i)&&this.isNecessary(y,e.textDocument)&&s.push(y)}d&&(u=f)}while(!c.done);return s}createHiddenTextEdits(e,r,n,i){var o;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],l={start:{character:0,line:s},end:r.range.start},u=i.document.getText(l),c=this.findFittingMove(l,(o=n==null?void 0:n.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(u,i),m=this.getIndentationCharacterCount(i,c)-f;if(m===0)return[];let v="";m>0&&(v=(i.options.insertSpaces?" ":"	").repeat(m));let N=r.text.split(`
`);N[0]=u+N[0];for(let S=0;S<N.length;S++){let O=s+S,y={character:0,line:O};if(m>0)a.push({newText:v,range:{start:y,end:y}});else{let g=N[S],I=0;for(;I<g.length;I++){let M=g.charAt(I);if(M!==" "&&M!=="	")break}a.push({newText:"",range:{start:y,end:{line:O,character:Math.min(I,Math.abs(m))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let s={start:(o=e==null?void 0:e.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,i);if(!a)return[];let l=a.characters,u=a.lines,c=a.tabs,f=i.indentation;i.indentation+=c!=null?c:0;let d=[];return l!==void 0?d.push(this.createSpaceTextEdit(s,l,n.options)):u!==void 0?d.push(this.createLineTextEdit(s,u,i,n.options)):c!==void 0&&d.push(this.createTabTextEdit(s,!!e,i)),Nn(r)&&(i.indentation=f),d}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new dn(i,o=>this.iterateCst(o,r)):Bi}iterateCst(e,r){if(!Ir(e))return Bi;let n=r.indentation;return new Sr(()=>({index:0}),i=>i.index<e.content.length?{done:!1,value:e.content[i.index++]}:(r.indentation=n,ur))}},Ky=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new An(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new An(r,this.collector)}property(e,r){let n=Gi(this.astNode.$cstNode,e,r);return new An(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=Gs(this.astNode.$cstNode,n);r.push(...i)}return new An(r,this.collector)}keyword(e,r){let n=js(this.astNode.$cstNode,e,r);return new An(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=Ef(this.astNode.$cstNode,n);r.push(...i)}return new An(r,this.collector)}cst(e){return new An([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new An([],this.collector);let o=n[0],s=i[0];if(o.offset>s.offset){let a=o;o=s,s=a}return new An(Jg(o,s),this.collector)}},An=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},cC;(function(t){function e(...c){return{options:{},moves:c.flatMap(f=>f.moves).sort(u)}}t.fit=e;function r(c){return i(0,c)}t.noSpace=r;function n(c){return i(1,c)}t.oneSpace=n;function i(c,f){return{options:f!=null?f:{},moves:[{characters:c}]}}t.spaces=i;function o(c){return s(1,c)}t.newLine=o;function s(c,f){return{options:f!=null?f:{},moves:[{lines:c}]}}t.newLines=s;function a(c){return{options:c!=null?c:{},moves:[{tabs:1,lines:1}]}}t.indent=a;function l(c){return{options:c!=null?c:{},moves:[{tabs:0}]}}t.noIndent=l;function u(c,f){var d,m,v,N,S,O;let y=(d=c.lines)!==null&&d!==void 0?d:0,g=(m=f.lines)!==null&&m!==void 0?m:0,I=(v=c.tabs)!==null&&v!==void 0?v:0,M=(N=f.tabs)!==null&&N!==void 0?N:0,J=(S=c.characters)!==null&&S!==void 0?S:0,ce=(O=f.characters)!==null&&O!==void 0?O:0;return y<g?-1:y>g?1:I<M?-1:I>M?1:J<ce?-1:J>ce?1:0}})(cC||(cC={}));var tG=Ft(Br(),1);var zy=Ft(require("fs"),1),Yy=class{constructor(){this.encoding="utf-8"}readFile(e){return zy.promises.readFile(e.fsPath,this.encoding)}async readDirectory(e){return(await zy.promises.readdir(e.fsPath,{withFileTypes:!0})).map(n=>({dirent:n,isFile:n.isFile(),isDirectory:n.isDirectory(),uri:Ut.joinPath(e,n.name)}))}},fC={fileSystemProvider:()=>new Yy};var Ja=Ft(pC(),1);var pae=Symbol("LdLSPServices");var Ve={};Ii(Ve,{AbstractAstReflection:()=>Eo,AbstractCstNode:()=>nu,AbstractLangiumParser:()=>iu,AbstractParserErrorMessageProvider:()=>Kd,AbstractThreadedAsyncParser:()=>sp,AstUtils:()=>vr,BiMap:()=>Jo,Cancellation:()=>re,CompositeCstNodeImpl:()=>Ko,ContextCache:()=>Qo,CstNodeBuilder:()=>ru,CstUtils:()=>Wi,DONE_RESULT:()=>ur,DatatypeSymbol:()=>Hd,DefaultAstNodeDescriptionProvider:()=>gu,DefaultAstNodeLocator:()=>yu,DefaultAsyncParser:()=>Au,DefaultCommentProvider:()=>Su,DefaultConfigurationProvider:()=>_u,DefaultDocumentBuilder:()=>vu,DefaultDocumentValidator:()=>hu,DefaultHydrator:()=>Cu,DefaultIndexManager:()=>Ru,DefaultJsonSerializer:()=>ts,DefaultLangiumDocumentFactory:()=>uu,DefaultLangiumDocuments:()=>cu,DefaultLexer:()=>Nu,DefaultLinker:()=>Yo,DefaultNameProvider:()=>fu,DefaultReferenceDescriptionProvider:()=>Tu,DefaultReferences:()=>Xo,DefaultScopeComputation:()=>Zo,DefaultScopeProvider:()=>es,DefaultServiceRegistry:()=>rs,DefaultTokenBuilder:()=>au,DefaultValueConverter:()=>lu,DefaultWorkspaceLock:()=>Du,DefaultWorkspaceManager:()=>xu,Deferred:()=>kr,Disposable:()=>ns,DisposableCache:()=>Va,DocumentCache:()=>tp,DocumentState:()=>ae,DocumentValidator:()=>vi,EMPTY_SCOPE:()=>fV,EMPTY_STREAM:()=>Bi,EmptyFileSystem:()=>Xy,EmptyFileSystemProvider:()=>Np,ErrorWithLocation:()=>Do,GrammarAST:()=>ot,GrammarUtils:()=>Ct,JSDocDocumentationProvider:()=>Iu,LangiumCompletionParser:()=>su,LangiumParser:()=>ou,LangiumParserErrorMessageProvider:()=>Ua,LeafCstNodeImpl:()=>Ho,MapScope:()=>du,Module:()=>qa,MultiMap:()=>hn,OperationCancelled:()=>Zn,ParserWorker:()=>ap,Reduction:()=>Us,RegExpUtils:()=>Nf,RootCstNodeImpl:()=>Fa,SimpleCache:()=>pu,StreamImpl:()=>Sr,StreamScope:()=>Xr,TextDocument:()=>uo,TreeStreamImpl:()=>dn,URI:()=>Pe,UriUtils:()=>Ut,ValidationCategory:()=>ja,ValidationRegistry:()=>mu,ValueConverter:()=>Jn,WorkspaceCache:()=>Ga,assertUnreachable:()=>Vi,createCompletionParser:()=>Ny,createDefaultCoreModule:()=>bu,createDefaultSharedCoreModule:()=>Lu,createGrammarConfig:()=>yT,createLangiumParser:()=>Ey,delayNextTick:()=>wy,diagnosticData:()=>rp,eagerLoad:()=>ku,getDiagnosticRange:()=>BD,inject:()=>is,interruptAndCheck:()=>Ot,isAstNode:()=>Be,isAstNodeDescription:()=>ml,isAstNodeWithComment:()=>Py,isCompositeCstNode:()=>Ir,isIMultiModeLexerDefinition:()=>Fy,isJSDoc:()=>Vy,isLeafCstNode:()=>Nn,isLinkingError:()=>xn,isNamed:()=>ep,isOperationCancelled:()=>Qn,isReference:()=>vt,isRootCstNode:()=>hl,isTokenTypeArray:()=>WD,isTokenTypeDictionary:()=>My,loadGrammarFromJson:()=>Ep,parseJSDoc:()=>Wy,prepareLangiumParser:()=>AD,setInterruptionPeriod:()=>PD,startCancelableOperation:()=>$D,stream:()=>he,toDiagnosticSeverity:()=>np});var we={};Ii(we,{AstUtils:()=>vr,BiMap:()=>Jo,Cancellation:()=>re,ContextCache:()=>Qo,CstUtils:()=>Wi,DONE_RESULT:()=>ur,Deferred:()=>kr,Disposable:()=>ns,DisposableCache:()=>Va,DocumentCache:()=>tp,EMPTY_STREAM:()=>Bi,ErrorWithLocation:()=>Do,GrammarUtils:()=>Ct,MultiMap:()=>hn,OperationCancelled:()=>Zn,Reduction:()=>Us,RegExpUtils:()=>Nf,SimpleCache:()=>pu,StreamImpl:()=>Sr,TreeStreamImpl:()=>dn,URI:()=>Pe,UriUtils:()=>Ut,WorkspaceCache:()=>Ga,assertUnreachable:()=>Vi,delayNextTick:()=>wy,interruptAndCheck:()=>Ot,isOperationCancelled:()=>Qn,loadGrammarFromJson:()=>Ep,setInterruptionPeriod:()=>PD,startCancelableOperation:()=>$D,stream:()=>he});De(we,kt);var Np=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},Xy={fileSystemProvider:()=>new Np};var rG={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},nG={AstReflection:()=>new Ps};function iG(){let t=is(Lu(Xy),nG),e=is(bu({shared:t}),rG);return t.ServiceRegistry.register(e),e}function Ep(t){var e;let r=iG(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,Pe.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}De(Ve,we);var ls=Ft(require("fs"),1),Ni=Ft(require("path"),1),mt=Ft(_t(),1);var Jy="ComposeElement";var Op="NamedElement";function mC(t){return nt.isInstance(t,Op)}var oG="Statement";var sG="Subscript_list";var Zy="Universe";var hC="Alias";function Ip(t){return nt.isInstance(t,hC)}var aG="Arr_string";function Ka(t){return nt.isInstance(t,aG)}var lG="AssignPrefix";function gC(t){return nt.isInstance(t,lG)}var uG="Case_statement";function TC(t){return nt.isInstance(t,uG)}var Qy="Expression";function Dn(t){return nt.isInstance(t,Qy)}var cG="For_statement";function yC(t){return nt.isInstance(t,cG)}var fG="Function_invoke_or_assign";function Sp(t){return nt.isInstance(t,fG)}var dG="Function_invoke_or_assign_statement";var _C="FunctionBlock";function ei(t){return nt.isInstance(t,_C)}var pG="Interface";var mG="Invoke_subrule";function Ap(t){return nt.isInstance(t,mG)}var hG="Iteration_statement";var gG="Methods";function vC(t){return nt.isInstance(t,gG)}var RC="Native_Type_Name";function Mu(t){return nt.isInstance(t,RC)}var TG="Param_assignment";function xC(t){return nt.isInstance(t,TG)}var yG="RefFunctionOrBlockName";function NC(t){return nt.isInstance(t,yG)}var _G="Repeat_statement";function EC(t){return nt.isInstance(t,_G)}var vG="ReturnParse";function OC(t){return nt.isInstance(t,vG)}var RG="Selection_statement";var xG="StEnum";var IC="StFunction";function Cn(t){return nt.isInstance(t,IC)}var SC="Struct_Var_Decl_Init";function Fu(t){return nt.isInstance(t,SC)}var AC="StructsList";function ss(t){return nt.isInstance(t,AC)}var DC="VarDeclarationInit";function It(t){return nt.isInstance(t,DC)}var NG="While_statement";function CC(t){return nt.isInstance(t,NG)}var bC="Constant";function Uu(t){return nt.isInstance(t,bC)}var LC="EnumeratedValue";function bn(t){return nt.isInstance(t,LC)}var kC="FunctionExpression";function co(t){return nt.isInstance(t,kC)}var wC="MemberCall";function Ln(t){return nt.isInstance(t,wC)}var $C="VariableExpression";function zt(t){return nt.isInstance(t,$C)}var EG="Array_liters";var Pu=class extends Eo{getAllTypes(){return["Action_call_statement","Alias","Arr_string","Array_element","Array_liters","AssignPrefix","Assignment_subrule","Case_element","Case_list","Case_list_element","Case_statement","ComposeElement","Constant","Enum","EnumeratedValue","Expression","For_list","For_statement","FunctionBlock","FunctionExpression","Function_invoke_or_assign","Function_invoke_or_assign_statement","If_statement","InputsList","InputsListSingle","Interface","Invoke_subrule","Iteration_statement","MemberCall","Methods","NamedElement","Native_Type_Name","Param_assignment","PrimaryVariable","Program","RefFunctionOrBlockName","Repeat_statement","ReqParams","ReturnParse","Selection_statement","St","StEnum","StFunction","Statement","Statement_list","Statement_list_single","Struct_Var_Decl_Init","StructsList","Subscript_list","UnionsList","Universe","VarDeclarationInit","VarInput","VarLocal","VarOutput","VariableExpression","While_statement"]}computeIsSubtype(e,r){switch(e){case hC:case _C:case xG:case AC:return this.isSubtype(Jy,r);case EG:return this.isSubtype(RC,r);case bC:case LC:case kC:case wC:case $C:return this.isSubtype(Qy,r);case Qy:return this.isSubtype(sG,r);case dG:case hG:case RG:return this.isSubtype(oG,r);case Op:return this.isSubtype(Zy,r);case IC:return this.isSubtype(Jy,r)||this.isSubtype(Zy,r);case SC:case DC:return this.isSubtype(Op,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action_call_statement:actionName":case"AssignPrefix:varEnchanceDecl":case"RefFunctionOrBlockName:refFunctionName":return Zy;case"Array_liters:Identifier":case"EnumeratedValue:enumType":case"Native_Type_Name:Identifier":return Jy;case"For_statement:controlVariable":case"MemberCall:element":case"VariableExpression:variable":return Op;case"Interface:extender":return pG;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Action_call_statement":return{name:"Action_call_statement",properties:[{name:"actionName"}]};case"Alias":return{name:"Alias",properties:[{name:"initialValue"},{name:"name"},{name:"refName"}]};case"Arr_string":return{name:"Arr_string",properties:[{name:"arrElements",defaultValue:[]}]};case"Array_element":return{name:"Array_element",properties:[{name:"left"},{name:"right"}]};case"Assignment_subrule":return{name:"Assignment_subrule",properties:[{name:"expression"}]};case"AssignPrefix":return{name:"AssignPrefix",properties:[{name:"varEnchanceDecl"}]};case"Case_element":return{name:"Case_element",properties:[{name:"caseList"},{name:"statements"}]};case"Case_list":return{name:"Case_list",properties:[{name:"caseListElement",defaultValue:[]}]};case"Case_list_element":return{name:"Case_list_element",properties:[{name:"enumCase"},{name:"numCaseStart"},{name:"numericCaseEnd"},{name:"simpleEnumCase"}]};case"Case_statement":return{name:"Case_statement",properties:[{name:"caseElements",defaultValue:[]},{name:"caseExpression"},{name:"elseStatements"}]};case"Enum":return{name:"Enum",properties:[{name:"assignValue"},{name:"variable_name"}]};case"Expression":return{name:"Expression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"For_list":return{name:"For_list",properties:[{name:"byExpr"},{name:"forExpr"},{name:"toExpr"}]};case"For_statement":return{name:"For_statement",properties:[{name:"controlVariable"},{name:"forList"},{name:"statementList"}]};case"Function_invoke_or_assign":return{name:"Function_invoke_or_assign",properties:[{name:"assign"},{name:"assignPrefix"},{name:"id"},{name:"params",defaultValue:[]}]};case"Function_invoke_or_assign_statement":return{name:"Function_invoke_or_assign_statement",properties:[{name:"statement"}]};case"FunctionBlock":return{name:"FunctionBlock",properties:[{name:"methods",defaultValue:[]},{name:"name"},{name:"statementList",defaultValue:[]},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"If_statement":return{name:"If_statement",properties:[{name:"elseStatement"},{name:"elsifConditions",defaultValue:[]},{name:"elsifStatements"},{name:"ifCondition"},{name:"ifStatement"}]};case"InputsList":return{name:"InputsList",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"InputsListSingle":return{name:"InputsListSingle",properties:[{name:"definition"},{name:"items",defaultValue:[]},{name:"modifiers"}]};case"Interface":return{name:"Interface",properties:[{name:"extender"},{name:"methods",defaultValue:[]},{name:"name"}]};case"Invoke_subrule":return{name:"Invoke_subrule",properties:[{name:"parameters",defaultValue:[]}]};case"Iteration_statement":return{name:"Iteration_statement",properties:[{name:"statement"}]};case"Methods":return{name:"Methods",properties:[{name:"inputs",defaultValue:[]},{name:"modifier"},{name:"name"},{name:"reqParams",defaultValue:[]},{name:"statementList"},{name:"variable_type"}]};case"Native_Type_Name":return{name:"Native_Type_Name",properties:[{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};case"Param_assignment":return{name:"Param_assignment",properties:[{name:"InputOrOutputSign"},{name:"ParamName"},{name:"ParamValue"}]};case"PrimaryVariable":return{name:"PrimaryVariable",properties:[{name:"name"}]};case"Program":return{name:"Program",properties:[{name:"inputs",defaultValue:[]},{name:"name"},{name:"stStatements"}]};case"RefFunctionOrBlockName":return{name:"RefFunctionOrBlockName",properties:[{name:"Cache_type_name"},{name:"refFunctionName"}]};case"Repeat_statement":return{name:"Repeat_statement",properties:[{name:"statementList"},{name:"untilExpr"}]};case"ReqParams":return{name:"ReqParams",properties:[{name:"param"},{name:"typeName"}]};case"ReturnParse":return{name:"ReturnParse",properties:[{name:"returnSign"},{name:"returnValue"}]};case"Selection_statement":return{name:"Selection_statement",properties:[{name:"case"},{name:"if"}]};case"St":return{name:"St",properties:[{name:"function_block",defaultValue:[]},{name:"itface",defaultValue:[]},{name:"program",defaultValue:[]},{name:"st_function",defaultValue:[]},{name:"types_alias",defaultValue:[]},{name:"types_enum",defaultValue:[]},{name:"types_struct",defaultValue:[]},{name:"types_union",defaultValue:[]}]};case"Statement_list":return{name:"Statement_list",properties:[{name:"statements",defaultValue:[]}]};case"Statement_list_single":return{name:"Statement_list_single",properties:[{name:"statements"}]};case"StEnum":return{name:"StEnum",properties:[{name:"enum",defaultValue:[]},{name:"name"}]};case"StFunction":return{name:"StFunction",properties:[{name:"name"},{name:"statementList",defaultValue:[]},{name:"variable_type"},{name:"varInputs",defaultValue:[]},{name:"varLocals",defaultValue:[]},{name:"varOutputs",defaultValue:[]}]};case"Struct_Var_Decl_Init":return{name:"Struct_Var_Decl_Init",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"StructsList":return{name:"StructsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"UnionsList":return{name:"UnionsList",properties:[{name:"items",defaultValue:[]},{name:"name"}]};case"VarDeclarationInit":return{name:"VarDeclarationInit",properties:[{name:"initialValue"},{name:"nextVariables",defaultValue:[]},{name:"typeName"},{name:"variables"}]};case"VarInput":return{name:"VarInput",properties:[{name:"items",defaultValue:[]}]};case"VarLocal":return{name:"VarLocal",properties:[{name:"items",defaultValue:[]}]};case"VarOutput":return{name:"VarOutput",properties:[{name:"items",defaultValue:[]}]};case"While_statement":return{name:"While_statement",properties:[{name:"statementList"},{name:"whileExpr"}]};case"Constant":return{name:"Constant",properties:[{name:"constant"},{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"EnumeratedValue":return{name:"EnumeratedValue",properties:[{name:"enumCacheTypeName"},{name:"enumType"},{name:"enumValue"},{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"}]};case"FunctionExpression":return{name:"FunctionExpression",properties:[{name:"left"},{name:"operator"},{name:"params"},{name:"prior"},{name:"refFunctionName"},{name:"right"},{name:"value"}]};case"MemberCall":return{name:"MemberCall",properties:[{name:"arguments",defaultValue:[]},{name:"element"},{name:"explicitOperationCall",defaultValue:!1},{name:"left"},{name:"operator"},{name:"previous"},{name:"prior"},{name:"right"},{name:"value"}]};case"VariableExpression":return{name:"VariableExpression",properties:[{name:"left"},{name:"operator"},{name:"prior"},{name:"right"},{name:"value"},{name:"variable"}]};case"Array_liters":return{name:"Array_liters",properties:[{name:"arrayElemets",defaultValue:[]},{name:"Bit_string_type_name"},{name:"Bool_type_name"},{name:"Cache_type_name"},{name:"dataType"},{name:"Date_And_time_type_name"},{name:"Date_type_name"},{name:"Identifier"},{name:"Integer_type_name"},{name:"Real_type_name"},{name:"String_type_name"},{name:"Time_Of_Day_type_name"},{name:"Time_type_name"},{name:"Unsigned_integer_type_name"}]};default:return{name:e,properties:[]}}}},nt=new Pu;var PC=Ft(require("fs"),1);var za=new Map,e_=new Map,Ya=new Map,dr=Pe.parse("memory://cache.st");function MC(t){if(e_.get(dr)){let e=e_.get(dr);if(e){let r=xi(e);for(let n=0;n<r.length;n++){let s=r[n].elements.find(a=>a.elementName.toLowerCase()===t.toLowerCase());if(s){let a=s.elementType;if(a==="functionBlock"||a==="function"||a==="struct"||a==="alias")return s;if(a==="enum")return s}}}}else{let e=__dirname,r=t_(`${e}\\data.json`),i=JSON.parse(r);e_.set(dr,i);let o=xi(i);for(let s=0;s<o.length;s++){let u=o[s].elements.find(c=>c.elementName.toLowerCase()===t.toLowerCase());if(u){let c=u.elementType;if(c==="functionBlock"||c==="function"||c==="struct"||c==="alias")return u;if(c==="enum")return u}}}}function ze(t){if(za.get(dr)&&Ya.get(dr)){let e=za.get(dr),r=Ya.get(dr);if(e){let n=xi(e);for(let i=0;i<n.length;i++){let a=n[i].elements.find(l=>l.elementName.toLowerCase()===t.toLowerCase());if(a){let l=a.elementType;if(l==="functionBlock"||l==="function"||l==="struct"||l==="alias")return[a,r]}}}}else{let e=__dirname,r=t_(`${e}\\data.json`),i=Dp.serializer.JsonSerializer.deserialize(r),o=Bu.workspace.LangiumDocumentFactory.fromModel(i,Pe.parse("memory://cache.st")),a=JSON.parse(r);za.set(dr,a),Ya.set(dr,o);let l=xi(a);for(let u=0;u<l.length;u++){let d=l[u].elements.find(m=>m.elementName.toLowerCase()===t.toLowerCase());if(d){let m=d.elementType;if(m==="functionBlock"||m==="function"||m==="struct"||m==="alias")return[d,o]}}}}function fo(t){if(za.get(dr)&&Ya.get(dr)){let e=za.get(dr),r=Ya.get(dr);if(e){let n=xi(e);for(let i=0;i<n.length;i++){let a=n[i].elements.find(l=>l.elementName.toLowerCase()===t.toLowerCase());if(a&&a.elementType==="enum")return[a,r]}}}else{let e=__dirname,r=t_(`${e}\\data.json`),i=Dp.serializer.JsonSerializer.deserialize(r),o=Bu.workspace.LangiumDocumentFactory.fromModel(i,Pe.parse("memory://cache.st")),a=JSON.parse(r);za.set(dr,a),Ya.set(dr,o);let l=xi(a);for(let u=0;u<l.length;u++){let d=l[u].elements.find(m=>m.elementName.toLowerCase()===t.toLowerCase());if(d&&d.elementType==="enum")return[d,o]}}}function t_(t){try{return PC.default.readFileSync(t,"utf8")}catch(e){return console.error(e),""}}var Cp=t=>/^-?[1-9]\d*$/.test(t)||/^0$/.test(t),OG=t=>/^[a-z]+$/.test(t),IG=t=>{let e=ze(t);if(!e)return!0;let[r]=e;return r?r.elementName===r.elementName.toUpperCase():!0},FC=/^(?:TIME|T)#(\d+y)?(\d+m)?(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i,UC=/^DATE#\d{4}-\d{2}-\d{2}$/i,BC=/^DT#\d{4}-\d{2}-\d{2}-\d{2}:\d{2}:\d{2}(?:\.\d+)?$/i,WC=/^TOD#\d{2}:\d{2}:\d{2}(?:\.\d+)?$/i,SG=["SINT","INT","DINT","LINT","USINT","UINT","UDINT","ULINT","BYTE","WORD","DWORD","LWORD","TIME","DATE","LREAL","REAL","BOOL","STRING"],bp=["RTC","INTEGRAL","DERIVATIVE","PID","RAMP","HYSTERESIS","SR","RS","SEMA","R_TRIG","F_TRIG","CTU","CTU_DINT","CTU_LINT","CTU_UDINT","CTU_ULINT","CTD","CTD_DINT","CTD_LINT","CTD_UDINT","CTD_ULINT","CTUD","CTUD_DINT","CTUD_LINT","CTUD_UDINT","CTUD_ULINT","TP","TON","TOF","MC_POWER","MC_READACTUALPOSITION","MC_MOVEABSOLUTE","MC_MOVERELATIVE","MC_MOVEADDITIVE","MC_MOVESUPERIMPOSED","MC_MOVEVELOCITY","MC_POSITIONPROFILE","MC_VELOCITYPROFILE","MC_READACTUALVELOCITY","MC_ACCELERATIONPROFILE","MC_SETPOSITION","MC_READPARAMETER","MC_READBOOLPARAMETER","MC_WRITEPARAMETER","MC_WRITEBOOLPARAMETER","MC_READACTUALTORQUE","MC_READSTATUS","MC_READAXISERROR","MC_RESET","MC_DIGITALCAMSWITCH","MC_TOUCHPROBE","MC_ABORTTRIGGER","MC_STOP","MC_HALT","MC_HOME","MC_CAMTABLESELECT","MC_CAMIN","MC_CAMOUT","MC_GEARIN","MC_GEAROUT","MC_GEARINPOS","MC_PHASING","SMC_TRACKAXIS","SMC_TRACKSETVALUES","MC_STARTTRACE","SMC_MOVECONTINUOUSABSOLUTE","SMC_MOVECONTINUOUSRELATIVE","SMC_GETTAPPETVALUE"],AG=["BOOL_TO_SINT","BOOL_TO_INT","BOOL_TO_DINT","BOOL_TO_LINT","BOOL_TO_USINT","BOOL_TO_UINT","BOOL_TO_UDINT","BOOL_TO_ULINT","BOOL_TO_REAL","BOOL_TO_LREAL","BOOL_TO_TIME","BOOL_TO_DATE","BOOL_TO_TOD","BOOL_TO_DT","BOOL_TO_STRING","BOOL_TO_BYTE","BOOL_TO_WORD","BOOL_TO_DWORD","BOOL_TO_LWORD","SINT_TO_BOOL","SINT_TO_INT","SINT_TO_DINT","SINT_TO_LINT","SINT_TO_USINT","SINT_TO_UINT","SINT_TO_UDINT","SINT_TO_ULINT","SINT_TO_REAL","SINT_TO_LREAL","SINT_TO_TIME","SINT_TO_DATE","SINT_TO_TOD","SINT_TO_DT","SINT_TO_STRING","SINT_TO_BYTE","SINT_TO_WORD","SINT_TO_DWORD","SINT_TO_LWORD","INT_TO_BOOL","INT_TO_SINT","INT_TO_DINT","INT_TO_LINT","INT_TO_USINT","INT_TO_UINT","INT_TO_UDINT","INT_TO_ULINT","INT_TO_REAL","INT_TO_LREAL","INT_TO_TIME","INT_TO_DATE","INT_TO_TOD","INT_TO_DT","INT_TO_STRING","INT_TO_BYTE","INT_TO_WORD","INT_TO_DWORD","INT_TO_LWORD","DINT_TO_BOOL","DINT_TO_SINT","DINT_TO_INT","DINT_TO_LINT","DINT_TO_USINT","DINT_TO_UINT","DINT_TO_UDINT","DINT_TO_ULINT","DINT_TO_REAL","DINT_TO_LREAL","DINT_TO_TIME","DINT_TO_DATE","DINT_TO_TOD","DINT_TO_DT","DINT_TO_STRING","DINT_TO_BYTE","DINT_TO_WORD","DINT_TO_DWORD","DINT_TO_LWORD","LINT_TO_BOOL","LINT_TO_SINT","LINT_TO_INT","LINT_TO_DINT","LINT_TO_USINT","LINT_TO_UINT","LINT_TO_UDINT","LINT_TO_ULINT","LINT_TO_REAL","LINT_TO_LREAL","LINT_TO_TIME","LINT_TO_DATE","LINT_TO_TOD","LINT_TO_DT","LINT_TO_STRING","LINT_TO_BYTE","LINT_TO_WORD","LINT_TO_DWORD","LINT_TO_LWORD","USINT_TO_BOOL","USINT_TO_SINT","USINT_TO_INT","USINT_TO_DINT","USINT_TO_LINT","USINT_TO_UINT","USINT_TO_UDINT","USINT_TO_ULINT","USINT_TO_REAL","USINT_TO_LREAL","USINT_TO_TIME","USINT_TO_DATE","USINT_TO_TOD","USINT_TO_DT","USINT_TO_STRING","USINT_TO_BYTE","USINT_TO_WORD","USINT_TO_DWORD","USINT_TO_LWORD","UINT_TO_BOOL","UINT_TO_SINT","UINT_TO_INT","UINT_TO_DINT","UINT_TO_LINT","UINT_TO_USINT","UINT_TO_UDINT","UINT_TO_ULINT","UINT_TO_REAL","UINT_TO_LREAL","UINT_TO_TIME","UINT_TO_DATE","UINT_TO_TOD","UINT_TO_DT","UINT_TO_STRING","UINT_TO_BYTE","UINT_TO_WORD","UINT_TO_DWORD","UINT_TO_LWORD","UDINT_TO_BOOL","UDINT_TO_SINT","UDINT_TO_INT","UDINT_TO_DINT","UDINT_TO_LINT","UDINT_TO_USINT","UDINT_TO_UINT","UDINT_TO_ULINT","UDINT_TO_REAL","UDINT_TO_LREAL","UDINT_TO_TIME","UDINT_TO_DATE","UDINT_TO_TOD","UDINT_TO_DT","UDINT_TO_STRING","UDINT_TO_BYTE","UDINT_TO_WORD","UDINT_TO_DWORD","UDINT_TO_LWORD","ULINT_TO_BOOL","ULINT_TO_SINT","ULINT_TO_INT","ULINT_TO_DINT","ULINT_TO_LINT","ULINT_TO_USINT","ULINT_TO_UINT","ULINT_TO_UDINT","ULINT_TO_REAL","ULINT_TO_LREAL","ULINT_TO_TIME","ULINT_TO_DATE","ULINT_TO_TOD","ULINT_TO_DT","ULINT_TO_STRING","ULINT_TO_BYTE","ULINT_TO_WORD","ULINT_TO_DWORD","ULINT_TO_LWORD","REAL_TO_BOOL","REAL_TO_SINT","REAL_TO_INT","REAL_TO_DINT","REAL_TO_LINT","REAL_TO_USINT","REAL_TO_UINT","REAL_TO_UDINT","REAL_TO_ULINT","REAL_TO_LREAL","REAL_TO_TIME","REAL_TO_DATE","REAL_TO_TOD","REAL_TO_DT","REAL_TO_STRING","REAL_TO_BYTE","REAL_TO_WORD","REAL_TO_DWORD","REAL_TO_LWORD","LREAL_TO_BOOL","LREAL_TO_SINT","LREAL_TO_INT","LREAL_TO_DINT","LREAL_TO_LINT","LREAL_TO_USINT","LREAL_TO_UINT","LREAL_TO_UDINT","LREAL_TO_ULINT","LREAL_TO_REAL","LREAL_TO_TIME","LREAL_TO_DATE","LREAL_TO_TOD","LREAL_TO_DT","LREAL_TO_STRING","LREAL_TO_BYTE","LREAL_TO_WORD","LREAL_TO_DWORD","LREAL_TO_LWORD","TIME_TO_SINT","TIME_TO_INT","TIME_TO_DINT","TIME_TO_LINT","TIME_TO_USINT","TIME_TO_UINT","TIME_TO_UDINT","TIME_TO_ULINT","TIME_TO_REAL","TIME_TO_LREAL","TIME_TO_STRING","TIME_TO_BYTE","TIME_TO_WORD","TIME_TO_DWORD","TIME_TO_LWORD","DATE_TO_SINT","DATE_TO_INT","DATE_TO_DINT","DATE_TO_LINT","DATE_TO_USINT","DATE_TO_UINT","DATE_TO_UDINT","DATE_TO_ULINT","DATE_TO_REAL","DATE_TO_LREAL","DATE_TO_STRING","DATE_TO_BYTE","DATE_TO_WORD","DATE_TO_DWORD","DATE_TO_LWORD","TOD_TO_SINT","TOD_TO_INT","TOD_TO_DINT","TOD_TO_LINT","TOD_TO_USINT","TOD_TO_UINT","TOD_TO_UDINT","TOD_TO_ULINT","TOD_TO_REAL","TOD_TO_LREAL","TOD_TO_STRING","TOD_TO_BYTE","TOD_TO_WORD","TOD_TO_DWORD","TOD_TO_LWORD","DT_TO_SINT","DT_TO_INT","DT_TO_DINT","DT_TO_LINT","DT_TO_USINT","DT_TO_UINT","DT_TO_UDINT","DT_TO_ULINT","DT_TO_REAL","DT_TO_LREAL","DT_TO_STRING","DT_TO_BYTE","DT_TO_WORD","DT_TO_DWORD","DT_TO_LWORD","STRING_TO_BOOL","STRING_TO_SINT","STRING_TO_INT","STRING_TO_DINT","STRING_TO_LINT","STRING_TO_USINT","STRING_TO_UINT","STRING_TO_UDINT","STRING_TO_ULINT","STRING_TO_REAL","STRING_TO_LREAL","STRING_TO_TIME","STRING_TO_DATE","STRING_TO_TOD","STRING_TO_DT","STRING_TO_BYTE","STRING_TO_WORD","STRING_TO_DWORD","STRING_TO_LWORD","BYTE_TO_BOOL","BYTE_TO_SINT","BYTE_TO_INT","BYTE_TO_DINT","BYTE_TO_LINT","BYTE_TO_USINT","BYTE_TO_UINT","BYTE_TO_UDINT","BYTE_TO_ULINT","BYTE_TO_REAL","BYTE_TO_LREAL","BYTE_TO_TIME","BYTE_TO_DATE","BYTE_TO_TOD","BYTE_TO_DT","BYTE_TO_STRING","BYTE_TO_WORD","BYTE_TO_DWORD","BYTE_TO_LWORD","WORD_TO_BOOL","WORD_TO_SINT","WORD_TO_INT","WORD_TO_DINT","WORD_TO_LINT","WORD_TO_USINT","WORD_TO_UINT","WORD_TO_UDINT","WORD_TO_ULINT","WORD_TO_REAL","WORD_TO_LREAL","WORD_TO_TIME","WORD_TO_DATE","WORD_TO_TOD","WORD_TO_DT","WORD_TO_STRING","WORD_TO_BYTE","WORD_TO_DWORD","WORD_TO_LWORD","DWORD_TO_BOOL","DWORD_TO_SINT","DWORD_TO_INT","DWORD_TO_DINT","DWORD_TO_LINT","DWORD_TO_USINT","DWORD_TO_UINT","DWORD_TO_UDINT","DWORD_TO_ULINT","DWORD_TO_REAL","DWORD_TO_LREAL","DWORD_TO_TIME","DWORD_TO_DATE","DWORD_TO_TOD","DWORD_TO_DT","DWORD_TO_STRING","DWORD_TO_BYTE","DWORD_TO_WORD","DWORD_TO_LWORD","LWORD_TO_BOOL","LWORD_TO_SINT","LWORD_TO_INT","LWORD_TO_DINT","LWORD_TO_LINT","LWORD_TO_USINT","LWORD_TO_UINT","LWORD_TO_UDINT","LWORD_TO_ULINT","LWORD_TO_REAL","LWORD_TO_LREAL","LWORD_TO_TIME","LWORD_TO_DATE","LWORD_TO_TOD","LWORD_TO_DT","LWORD_TO_STRING","LWORD_TO_BYTE","LWORD_TO_WORD","LWORD_TO_DWORD","TRUNC","BCD_TO_USINT","BCD_TO_UINT","BCD_TO_UDINT","BCD_TO_ULINT","USINT_TO_BCD","UINT_TO_BCD","UDINT_TO_BCD","ULINT_TO_BCD","DATE_AND_TIME_TO_TIME_OF_DAY","DATE_AND_TIME_TO_DATE"],VC=["ABS","SQRT","LN","LOG","EXP","SIN","COS","TAN","ASIN","ACOS","ATAN"],GC=["ADD","MUL","SUB","DIV","MOD","EXPT","MOVE"],DG=["ADD_TIME","ADD_TOD_TIME","ADD_DT_TIME","MULTIME","SUB_TIME","SUB_DATE_DATE","SUB_TOD_TIME","SUB_TOD_TOD","SUB_DT_TIME","SUB_DT_DT","DIVTIME"],jC=["SHL","SHR","ROR","ROL"],qC=["AND","OR","XOR","NOT"],HC=["SEL","MAX","MIN","LIMIT","MUX"],KC=["GT","GE","EQ","LT","LE","NE"],zC=["LEN","LEFT","RIGHT","MID","CONCAT","CONCAT_DATE_TOD","INSERT","DELETE","REPLACE","FIND"],CG=["SMC_READAXISINFO","SMC_GETTIMENS","SMC_PARAMETERNUMBER_COE"],bG=["AXIS_REF","MC_CAM_REF"],Lp=["SMC_ERROR","MC_Direction","MC_BUFFER_MODE","SMC_AXIS_STATE","MC_TAPPETMODE","SMC_CAM_TYPE","MC_STARTMODE"],YC=SG.concat(bp).concat(bG),Wu=AG.concat(VC).concat(GC).concat(DG).concat(jC).concat(qC).concat(HC).concat(KC).concat(zC).concat(CG),LG=YC.concat(Wu).concat(Lp),kp=bp.concat(Wu),XC=VC.concat(GC).concat(jC).concat(qC).concat(HC).concat(KC).concat(zC.filter(t=>t!=="CONCAT_DATE_TOD"));function JC(t){let e=new RegExp("^"+t,"i");return Wu.filter(r=>e.test(r))}function ZC(t){let e=new RegExp("^"+t,"i");return LG.filter(r=>e.test(r))}function QC(t){let e=new RegExp("^"+t,"i");return Lp.filter(r=>e.test(r))}function eb(t){let e=new RegExp("^"+t,"i");return kp.filter(r=>e.test(r))}function i_(t,e){let r;return e==="TIME"?r=FC:e==="DATE"?r=UC:e==="DATE_AND_TIME"?r=BC:e==="TIME_OF_DAY"&&(r=WC),r?r.exec(t)?"":`Invalid ${e} format`:`Invalid ${e} format`}function at(t,e){e&&(t=e.Real_type_name||e.Bit_string_type_name||e.Integer_type_name||e.Unsigned_integer_type_name||e.Bool_type_name||e.String_type_name||e.Date_type_name||e.Time_type_name||e.Date_And_time_type_name||e.Time_Of_Day_type_name||e.Cache_type_name);let r=t==null?void 0:t.toUpperCase();return r==="DT"?"DATE_AND_TIME":r==="TOD"?"TIME_OF_DAY":t}var tb=["SINT","INT","DINT","LINT"],rb=["USINT","UINT","UDINT","ULINT"],nb=["BYTE","WORD","DWORD","LWORD"],ib=["REAL","LREAL"];function ob(t){if(!t)return;let e=t.toUpperCase();return e==="DT"?"DATE_AND_TIME":e==="TOD"?"TIME_OF_DAY":e}function r_(t){var n;let e={$type:"Native_Type_Name"},r=(n=ob(t))!=null?n:t.toUpperCase();return ib.includes(r)?e.Real_type_name=r:nb.includes(r)?e.Bit_string_type_name=r:tb.includes(r)?e.Integer_type_name=r:rb.includes(r)?e.Unsigned_integer_type_name=r:r==="BOOL"?e.Bool_type_name=r:r==="STRING"?e.String_type_name=r:r==="DATE"?e.Date_type_name=r:r==="TIME"?e.Time_type_name=r:r==="DATE_AND_TIME"?e.Date_And_time_type_name=r:r==="TIME_OF_DAY"?e.Time_Of_Day_type_name=r:e.Cache_type_name=t,e}function kG(t,e){if(e===void 0)return;let r;return typeof e=="boolean"?r=e?"TRUE":"FALSE":r=e,{$container:t,$type:"Constant",constant:r}}function n_(t,e=new Set){var l,u,c;if(!t)return{};let r=(l=ob(t))!=null?l:t.toUpperCase();if(tb.includes(r)||rb.includes(r)||nb.includes(r)||ib.includes(r)||r==="BOOL"||r==="STRING"||r==="DATE"||r==="TIME"||r==="DATE_AND_TIME"||r==="TIME_OF_DAY")return{typeName:r};let n=ze(t);if(!n)return{typeName:t};let[i]=n;if(!i||i.elementType!=="alias")return{typeName:t};let o=i,s=o.elementName.toUpperCase();if(e.has(s))return{typeName:o.elementName,refNode:o};e.add(s);let a=n_(o.refName,e);return{typeName:(u=a.typeName)!=null?u:o.elementName,refNode:(c=a.refNode)!=null?c:o}}function wp(t,e=new Set){var o;if(!t)return{};let r=at(void 0,t);if(r)return t.Cache_type_name?n_(t.Cache_type_name,e):{typeName:r};let n=t.Identifier;if(!n)return{};let i=n.ref;if(!i)return n_(n.$refText,e);if(Ip(i)){if(e.has(i.name))return{typeName:i.name,refNode:i};e.add(i.name);let s=wp(i.refName,e);return{typeName:(o=s.typeName)!=null?o:i.name,refNode:s.refNode}}return"name"in i&&typeof i.name=="string"?{typeName:i.name,refNode:i}:{typeName:n.$refText}}function o_(t){return wp(t).typeName}function po(t){return/^[-+]?[0-9]*\.[0-9]+([eE][-+]?[0-9]+)?$/.test(t)}function s_(t){return/^\d*\.?\d+$/.test(t)}function wG(t){let e=t.toUpperCase(),r=YC.find(n=>n===e);return r?[r,!0]:[null,!1]}function $G(t){return["SINT","USINT","INT","UINT","DINT","UDINT","LINT","WORD","DWORD","LWORD","BYTE","BOOL","ULINT"].includes(t)}function as(t,e,r){if(!t||!e||(t=t.toUpperCase(),e=e.toUpperCase(),!$G(e)))return!0;if(t&&t.toLowerCase()==="bool")return r?r!==1&&r!==0:!1;if(e&&e.toLowerCase()==="bool"&&r&&r!==1&&r!==0)return!0;switch(t){case"SINT":return e==="BOOL";case"INT":return e==="SINT"||e==="BYTE";case"UINT":return e==="SINT"||e==="INT"||e==="BYTE";case"DINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="WORD"||e==="BYTE";case"UDINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="WORD"||e==="BYTE";case"LINT":return e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="WORD"||e==="DWORD"||e==="BYTE";case"BYTE":return!(e==="BYTE"||e==="USINT"||e==="SINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="ULINT");case"ULINT":return e==="SINT"||e==="USINT"||e==="INT"||e==="UINT"||e==="DINT"||e==="UDINT"||e==="LINT"||e==="WORD"||e==="DWORD"||e==="LWORD"||e==="BYTE";default:return!0}}function mo(t){let e="";return Ka(t),t.$type==="Constant"?e=t.constant.toString():e=t.toString(),e.toLowerCase()==="true"||e.toLowerCase()==="false"?["BOOL"]:FC.test(e)?["TIME"]:UC.test(e)?["DATE"]:BC.test(e)?["DATE_AND_TIME"]:WC.test(e)?["TIME_OF_DAY"]:/^-?\d+$/.test(e)?["INT","UINT","DINT","UDINT","LINT","SINT","USINT","BYTE","WORD","DWORD","LWORD"]:po(e)?["REAL","LREAL"]:typeof e=="string"?["STRING"]:["UNKNOWN"]}function PG(t,e,r){var u;let n,i=at(t,e);t=(u=wp(e).typeName)!=null?u:i,e.Real_type_name?n="Real_type_name":e.Bit_string_type_name?n="Bit_string_type_name":e.Integer_type_name?n="Integer_type_name":e.Unsigned_integer_type_name?n="Unsigned_integer_type_name":e.Bool_type_name?n="Bool_type_name":e.String_type_name?n="String_type_name":e.Date_And_time_type_name?n="Date_And_time_type_name":e.Date_type_name?n="Date_type_name":e.Time_Of_Day_type_name?n="Time_Of_Day_type_name":e.Time_type_name?n="Time_type_name":e.Cache_type_name?n="Cache_type_name":n="String_type_name";let s=i!=null?i:t,[a,l]=wG(s);if(l)s!==a&&(OG(s)||(n!=="Cache_type_name"||!e.Cache_type_name||IG(e.Cache_type_name))&&r("hint",`did you mean '${a}'?`,{node:e,property:n}));else if(n==="Cache_type_name"){let c=e.Cache_type_name;if(c){let f=ze(c);if(f){let[d,m]=f;d&&d.elementType==="function"&&r("error",`${t}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:e,property:"Identifier"})}}}return t}function kn(t,e,r){if(!t)return e;if(t.Identifier){let n=t.Identifier,i=wp(t),o=n.ref;if(i.typeName&&(e=i.typeName),o){let s=i.refNode;(Cn(o)||s&&Cn(s))&&r("error",`${e}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}else{let s=n.$nodeDescription;s&&s.type==="FunctionElement"&&r("error",`${n.$refText}\u7684\u7C7B\u578B\u4E3AFUNCTION,\u4E0D\u80FD\u5B9E\u4F8B\u5316`,{node:t,property:"Identifier"})}}else r&&(e=PG(e,t,r));return e}function or(t,e){let r=o_(t);return r?e=r:e=at(e,t),e}function sb(t){let e={$type:"St",function_block:[],itface:[],program:[],st_function:[],types_alias:[],types_enum:[],types_struct:[],types_union:[]};return t.forEach(r=>{r.elements.forEach(i=>{if(i.elementType==="alias"){let s=i,a={$container:e,$type:"Alias",name:s.elementName,refName:r_(s.refName)},l=kG(a,s.initialValue);l&&(a.initialValue=l),e.types_alias.push(a);return}if(i.elementType==="enum"){let s=i,a={$container:e,$type:"StEnum",enum:[],name:s.elementName};s.enumChild.forEach(l=>{let u={$container:a,$type:"Enum",variable_name:l.enumVarName};l.assignValue!==void 0&&(u.assignValue=l.assignValue.toString()),a.enum.push(u)}),e.types_enum.push(a);return}let o=i.elementType;if(o==="struct"){i=i;let s=i.varDecls,a={$container:e,$type:"StructsList",items:[],name:""};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=r_(c),d={$container:a,$type:"Struct_Var_Decl_Init",nextVariables:[],typeName:f,variables:u};a.items.push(d)}),e.types_struct.push(a)}else if(o==="functionBlock"){i=i;let s=i.varDecls,a={$container:e,$type:"FunctionBlock",name:"",statementList:[],methods:[],varInputs:[],varLocals:[],varOutputs:[]};a.name=i.elementName,s.forEach(l=>{let u=l.varName,c=l.varType,f=l.varGlobalType,d=r_(c);if(f){let m;if(f==="VAR_INPUT"){let v={$container:a,$type:"VarInput",items:[]};m={$container:v,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},v.items.push(m),a.varInputs.push(v)}else if(f==="VAR"){let v={$container:a,$type:"VarLocal",items:[]};m={$container:v,$type:"VarDeclarationInit",nextVariables:[],typeName:d,variables:u},v.items.push(m),a.varLocals.push(v)}}}),e.function_block.push(a)}})}),e}function xi(t){let e=[];return t.forEach(r=>{let n=r.name,i=r.list;if(n==="Additional function blocks"||n==="Standard function blocks"||n==="SMC_Basic function blocks"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:l.name,varDecls:[],rootName:n,comment:l.comment,usage:l.usage};u.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(m)}),c.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(m)}),s.elements.push(f),a===o.length-1&&e.push(s)}}else if(n==="extra_library"){let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a];if(l.type==="struct"){let u={$type:"SingleElement",elementType:"struct",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};l.elements.forEach(c=>{let f={$type:"VarDeclaration",varName:c.name,varType:c.type};u.varDecls.push(f)}),s.elements.push(u)}else if(l.type==="derived"){let u={$type:"AliasElement",elementType:"alias",elementName:l.name,refName:l.base_type,initialValue:l.value,varDecls:[],rootName:n,comment:l.comment};s.elements.push(u)}else if(l.type==="enum"){let u={$type:"EnumElement",elementType:"enum",elementName:l.name,enumChild:l.values.map(c=>({enumVarName:c})),rootName:n,comment:l.comment};s.elements.push(u)}}s.elements.length>0&&e.push(s)}else{let o=i,s={$type:"ComposeNode",elements:[]};for(let a=0;a<o.length;a++){let l=o[a],u=l.inputs,c=l.outputs,f={$type:"FunctionElement",elementType:"function",elementName:l.name,varDecls:[],rootName:n,comment:l.comment};u.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_INPUT"};f.varDecls.push(m)}),c.forEach(d=>{let m={$type:"VarDeclaration",varName:d[0],varType:d[1],varGlobalType:"VAR_OUTPUT"};f.varDecls.push(m)}),s.elements.push(f),a===o.length-1&&e.push(s)}}}),e}var $p=class extends Ks{constructor(r){super(r);this.services=r;this.completionOptions={triggerCharacters:[".","#"]}}async getCompletion(r,n){var l;let i=await super.getCompletion(r,n),o=this.getManualEnumCompletionItems(r,n),s=await this.getManualMemberCompletionItems(r,n);if(o.length===0&&s.length===0)return i;let a=this.mergeSupplementalItems((l=i==null?void 0:i.items)!=null?l:[],o);return a=this.mergeOverrideItems(a,s),s.length>0&&(a=this.prioritizeItems(a,s)),mt.CompletionList.create(this.deduplicateItems(a),!0)}completionFor(r,n,i){let o=n.property;if(!o){let s=vr.getContainerOfType(n.feature,ot.isAssignment);o=s==null?void 0:s.feature}if(o==="enumValue"){let s=this.getEnumTypeNameBeforeHash(r);if(s){this.hintEnumMembers(s,i,r);return}}else if(o==="simpleEnumCase"){let s=this.getCaseEnumTypeName(r);if(s){this.hintEnumMembers(s,i,r);return}}return super.completionFor(r,n,i)}hintFunctionBlockDecl(r,n,i){r.forEach(o=>{o.items.forEach(a=>{let{expectedType:l,variable:u,typeName:c,nextVariables:f}=this.getDataType(a);this.handleStructOrFunctionBlockVarDecl(l,n,i,u,c),f.forEach(d=>{this.handleStructOrFunctionBlockVarDecl(l,n,i,d,c)})})})}getVarDeclDetail(r){let n=r.varGlobalType;return n==="VAR_INPUT"||n==="VAR_OUTPUT"?`${n==="VAR_INPUT"?"\u8F93\u5165\u53C2\u6570":"\u8F93\u51FA\u53C2\u6570"}, \u7C7B\u578B\u662F${r.varType}`:`${r.varType}`}hintCacheVarDecls(r,n,i,o="1"){r==null||r.forEach(s=>{n(i,{label:s.varName,kind:mt.CompletionItemKind.Field,detail:this.getVarDeclDetail(s),sortText:o})})}createReferenceCompletionItem(r){let n="";if(r&&r.node){if(r.type==="Struct_Var_Decl_Init"){let o=r.node.typeName,s="";n=at(s,o),n||(n=or(o,s)),n||o.$type==="Array_liters"&&(n="Array")}if(r.node.$type==="VarDeclaration"){let i=r.node;return{nodeDescription:r,kind:mt.CompletionItemKind.Field,detail:this.getVarDeclDetail(i),sortText:"0"}}else if(r.node.$type==="VarDeclarationInit"){let o=r.node.typeName,s="";if(s=at(s,o),s!==""&&s){let a=ze(s);if(a){let[l,u]=a,c=l==null?void 0:l.elementType;if(c==="functionBlock"||c==="struct"){let f=l==null?void 0:l.varDecls;f==null||f.forEach(d=>({nodeDescription:r,kind:mt.CompletionItemKind.Field,detail:this.getVarDeclDetail(d),sortText:"0"}))}}}}}return{nodeDescription:r,kind:mt.CompletionItemKind.Reference,detail:n,sortText:"0"}}getRangeText(r){let n=r.position,o={start:mt.Position.create(n.line,0),end:r.position};return r.textDocument.getText(o)}getCurrentTokenText(r){let i={start:r.textDocument.positionAt(r.tokenOffset),end:r.position};return r.textDocument.getText(i).trim()}mergeSupplementalItems(r,n){let i=[...r],o=new Map(r.map((s,a)=>[s.label.toLowerCase(),a]));return n.forEach(s=>{var u;let a=s.label.toLowerCase(),l=o.get(a);if(l!==void 0){let c=i[l];this.shouldPreferSupplemental(c,s)&&(i[l]={...c,detail:(u=s.detail)!=null?u:c.detail});return}o.set(a,i.length),i.push(s)}),i}mergeOverrideItems(r,n){let i=[...r],o=new Map(r.map((s,a)=>[s.label.toLowerCase(),a]));return n.forEach(s=>{let a=s.label.toLowerCase(),l=o.get(a);l!==void 0?i[l]=s:(o.set(a,i.length),i.push(s))}),i}prioritizeItems(r,n){let i=new Set(n.map(a=>a.label.toLowerCase())),o=this.deduplicateItems(n),s=r.filter(a=>!i.has(a.label.toLowerCase()));return[...o,...s]}shouldPreferSupplemental(r,n){var l,u;let i=(l=r.detail)!=null?l:"",o=(u=n.detail)!=null?u:"";if(!o)return!1;if(!i)return!0;let s=i.includes("\u8F93\u5165\u53C2\u6570")||i.includes("\u8F93\u51FA\u53C2\u6570");return(o.includes("\u8F93\u5165\u53C2\u6570")||o.includes("\u8F93\u51FA\u53C2\u6570"))&&!s?!0:o.length>i.length}getManualEnumCompletionItems(r,n){var f;let i=r.textDocument,s=i.getText({start:mt.Position.create(0,0),end:n.position}).match(/([_a-zA-Z][\w_]*)#([_a-zA-Z][\w_]*)?$/);if(!s)return[];let a=s[1],l=(f=s[2])!=null?f:"",u=i.offsetAt(n.position),c={document:r,textDocument:i,offset:u,position:n.position,tokenOffset:u-l.length,tokenEndOffset:u,features:[]};return this.buildEnumMemberCompletionItems(a,l,c)}async getManualMemberCompletionItems(r,n){let s=r.textDocument.getText({start:mt.Position.create(0,0),end:n.position}).match(/([_a-zA-Z][\w_]*(?:\s*\.\s*[_a-zA-Z][\w_]*)*)\s*\.\s*$/);if(!s)return[];let a=s[1].split(".").map(c=>c.trim()).filter(Boolean);if(a.length===0)return[];let l=await this.getMembersForChain(a,r);return l.length===0?[]:[...l].sort((c,f)=>{var d,m;return((d=c.sortText)!=null?d:"").localeCompare((m=f.sortText)!=null?m:"")}).map(c=>{var f;return{label:c.label,kind:mt.CompletionItemKind.Field,detail:c.detail,sortText:(f=c.sortText)!=null?f:"0"}})}getRootNode(r){let n=r.document.parseResult.value;if(n.$type==="St")return n}getLocalEnumByName(r,n){if(!r)return;let i=this.getRootNode(n);return i==null?void 0:i.types_enum.find(o=>o.name.toLowerCase()===r.toLowerCase())}getWorkspaceEnumByName(r){if(!r)return;let n=this.services.shared.workspace.IndexManager,i=this.services.shared.workspace.LangiumDocuments,o=this.services.workspace.AstNodeLocator;for(let s of n.allElements("StEnum"))if(s.name.toLowerCase()===r.toLowerCase()){let a=i.getDocument(s.documentUri);if(a){let l=o.getAstNode(a.parseResult.value,s.path);if(l)return l}}}async getWorkspaceStructByName(r,n){if(!r)return;let i=await this.getSiblingStructByName(r,n);if(i)return i;let o=this.services.shared.workspace.IndexManager,s=this.services.shared.workspace.LangiumDocuments,a=this.services.workspace.AstNodeLocator;for(let l of o.allElements("StructsList"))if(l.name.toLowerCase()===r.toLowerCase()){let u=s.getDocument(l.documentUri);try{if(!u){if(l.documentUri.fsPath&&!ls.default.existsSync(l.documentUri.fsPath))continue;u=await s.getOrCreateDocument(l.documentUri)}if(u){let c=a.getAstNode(u.parseResult.value,l.path);if(c)return c}}catch{continue}}}async getSiblingStructByName(r,n){var a;if(!(n!=null&&n.uri.fsPath))return;let i=Ni.default.dirname(n.uri.fsPath);if(!ls.default.existsSync(i))return;let o=this.services.shared.workspace.LangiumDocuments,s=[];for(let l of ls.default.readdirSync(i)){if(!l.toLowerCase().endsWith(".st"))continue;let u=Pe.file(Ni.default.join(i,l)),f=(await o.getOrCreateDocument(u)).parseResult.value;if(f.$type==="St"){let d=f.types_struct.find(m=>m.name.toLowerCase()===r.toLowerCase());d&&s.push({fileName:l,struct:d})}}return(a=this.selectPreferredSiblingType(r,s))==null?void 0:a.struct}async getWorkspaceFunctionBlockByName(r,n){if(!r)return;let i=await this.getSiblingFunctionBlockByName(r,n);if(i)return i;let o=this.services.shared.workspace.IndexManager,s=this.services.shared.workspace.LangiumDocuments,a=this.services.workspace.AstNodeLocator;for(let l of o.allElements("FunctionBlock"))if(l.name.toLowerCase()===r.toLowerCase()){let u=s.getDocument(l.documentUri);try{if(!u){if(l.documentUri.fsPath&&!ls.default.existsSync(l.documentUri.fsPath))continue;u=await s.getOrCreateDocument(l.documentUri)}if(u){let c=a.getAstNode(u.parseResult.value,l.path);if(c)return c}}catch{continue}}}async getSiblingFunctionBlockByName(r,n){var a;if(!(n!=null&&n.uri.fsPath))return;let i=Ni.default.dirname(n.uri.fsPath);if(!ls.default.existsSync(i))return;let o=this.services.shared.workspace.LangiumDocuments,s=[];for(let l of ls.default.readdirSync(i)){if(!l.toLowerCase().endsWith(".st"))continue;let u=Pe.file(Ni.default.join(i,l)),f=(await o.getOrCreateDocument(u)).parseResult.value;if(f.$type==="St"){let d=f.function_block.find(m=>m.name.toLowerCase()===r.toLowerCase());d&&s.push({fileName:l,functionBlock:d})}}return(a=this.selectPreferredSiblingType(r,s))==null?void 0:a.functionBlock}selectPreferredSiblingType(r,n){if(n.length===0)return;let i=r.toLowerCase();return[...n].sort((o,s)=>{let a=Ni.default.basename(o.fileName,Ni.default.extname(o.fileName)).toLowerCase(),l=Ni.default.basename(s.fileName,Ni.default.extname(s.fileName)).toLowerCase(),u=a===i?0:1,c=l===i?0:1;return u!==c?u-c:o.fileName.localeCompare(s.fileName)})[0]}async getMembersForChain(r,n){let i=this.getVariableTypeByName(r[0],n);if(!i)return[];for(let o=1;o<r.length;o++)if(i=await this.getMemberTypeByName(i,r[o],n),!i)return[];return await this.getMemberEntriesForType(i,n)}getVariableTypeByName(r,n){let i=n.parseResult.value;if(i.$type!=="St")return;let o=i,s=[];o.program.forEach(a=>{a.inputs.forEach(l=>s.push(...l.items))}),o.function_block.forEach(a=>{a.varInputs.forEach(l=>s.push(...l.items)),a.varOutputs.forEach(l=>s.push(...l.items)),a.varLocals.forEach(l=>s.push(...l.items))}),o.st_function.forEach(a=>{a.varInputs.forEach(l=>s.push(...l.items)),a.varOutputs.forEach(l=>s.push(...l.items)),a.varLocals.forEach(l=>s.push(...l.items))});for(let a of s)if(a.variables===r||a.nextVariables.includes(r)){let l="";return at(l,a.typeName)||or(a.typeName,l)}}async getMemberTypeByName(r,n,i){var l;let o=(l=this.getLocalStructByName(r,i))!=null?l:await this.getWorkspaceStructByName(r,i);if(o){for(let u of o.items)if(u.variables===n||u.nextVariables.includes(n)){let c="";return at(c,u.typeName)||or(u.typeName,c)}}let s=await this.getWorkspaceFunctionBlockByName(r,i);if(s){let u=[...s.varInputs,...s.varOutputs,...s.varLocals];for(let c of u)for(let f of c.items)if(f.variables===n||f.nextVariables.includes(n)){let d="";return at(d,f.typeName)||or(f.typeName,d)}}let a=ze(r);if(a){let[u]=a,c=u==null?void 0:u.varDecls.find(f=>f.varName===n);return c==null?void 0:c.varType}}getLocalStructByName(r,n){if(!r)return;let i=n.parseResult.value;if(i.$type==="St")return i.types_struct.find(o=>o.name.toLowerCase()===r.toLowerCase())}async getMemberEntriesForType(r,n){var a,l;let i=(a=this.getLocalStructByName(r,n))!=null?a:await this.getWorkspaceStructByName(r,n);if(i){let u=[],c=0;for(let f of i.items){let d="",v=at(d,f.typeName)||or(f.typeName,d);u.push({label:f.variables,detail:v,sortText:this.buildMemberSortText(1,c++)}),f.nextVariables.forEach(N=>u.push({label:N,detail:v,sortText:this.buildMemberSortText(1,c++)}))}return u}let o=await this.getWorkspaceFunctionBlockByName(r,n);if(o){let u=[],c=[...o.varInputs.map(d=>({kind:"VAR_INPUT",items:d.items})),...o.varOutputs.map(d=>({kind:"VAR_OUTPUT",items:d.items})),...o.varLocals.map(d=>({kind:"VAR",items:d.items}))],f=0;for(let d of c)for(let m of d.items){let v="",S=at(v,m.typeName)||or(m.typeName,v),O=this.getVarDeclDetail({$type:"VarDeclaration",varName:m.variables,varType:S,varGlobalType:d.kind});u.push({label:m.variables,detail:O,sortText:this.buildMemberSortText(this.getMemberGroupRank(d.kind),f++)}),m.nextVariables.forEach(y=>u.push({label:y,detail:O,sortText:this.buildMemberSortText(this.getMemberGroupRank(d.kind),f++)}))}return u}let s=ze(r);if(s){let[u]=s;return((l=u==null?void 0:u.varDecls)!=null?l:[]).map((c,f)=>({label:c.varName,detail:this.getVarDeclDetail(c),sortText:this.buildMemberSortText(this.getMemberGroupRank(c.varGlobalType),f)}))}return[]}getMemberGroupRank(r){return r==="VAR_INPUT"?0:r==="VAR_OUTPUT"?1:2}buildMemberSortText(r,n){return`${String(r).padStart(2,"0")}_${String(n).padStart(4,"0")}`}getEnumMembers(r,n){var a;if(!r)return[];let i=this.getLocalEnumByName(r,n);if(i)return i.enum.map(l=>l.variable_name);let o=this.getWorkspaceEnumByName(r);if(o)return o.enum.map(l=>l.variable_name);let s=fo(r);if(s){let[l]=s;return(a=l==null?void 0:l.enumChild.map(u=>u.enumVarName))!=null?a:[]}return[]}getEnumeratedValueTypeName(r){var i,o;if(!r)return;if(r.enumCacheTypeName)return r.enumCacheTypeName;let n=(i=r.enumType)==null?void 0:i.ref;if(n){if(n.$type==="StEnum")return n.name;if("elementType"in n&&n.elementType==="enum"&&"elementName"in n){let s=n.elementName;if(typeof s=="string")return s}}return(o=r.enumType)==null?void 0:o.$refText}getEnumTypeNameBeforeHash(r){let i=r.textDocument.getText({start:mt.Position.create(0,0),end:r.textDocument.positionAt(r.tokenOffset)}).match(/([_a-zA-Z][\w_]*)\s*#\s*$/);return i==null?void 0:i[1]}getCaseEnumTypeName(r){let n=r.node;if(!n)return;let i=vr.getContainerOfType(n,TC);if(i)return this.getEnumTypeNameFromCaseStatement(i)}getEnumTypeNameFromCaseStatement(r){let n=r.caseExpression;if(bn(n))return this.getEnumeratedValueTypeName(n);if(Dn(n)){let i=n.prior;if(bn(i))return this.getEnumeratedValueTypeName(i);if(zt(i)){let o=i.variable.ref;if(It(o))return or(o.typeName,"")}}}hintEnumMembers(r,n,i){let o=this.getCurrentTokenText(i);this.getEnumMembers(r,i).filter(a=>a.toLowerCase().startsWith(o.toLowerCase())).forEach(a=>{n(i,{label:a,kind:mt.CompletionItemKind.EnumMember,detail:r,sortText:"0"})})}buildEnumMemberCompletionItems(r,n,i){let o=[];return this.getEnumMembers(r,i).filter(a=>a.toLowerCase().startsWith(n.toLowerCase())).forEach(a=>{let l=this.fillCompletionItem(i,{label:a,kind:mt.CompletionItemKind.EnumMember,detail:r,sortText:"0"});l&&o.push(l)}),o}completionForKeyword(r,n,i){try{let o=r.node;if(gC(o)){let s=o.varEnchanceDecl.ref,a=o.varEnchanceDecl.$refText;if(It(s)){let l=s.typeName,u="";if(u=at(u,l),u!==""&&u){let c=ze(u);if(c){let[f,d]=c,m=f==null?void 0:f.elementType;(m==="functionBlock"||m==="struct")&&this.hintCacheVarDecls(f==null?void 0:f.varDecls,i,r)}}else{let c=l.Identifier;if(c){let f=c.ref;if(ss(f))f.items.forEach(m=>{let{expectedType:v,variable:N,typeName:S,nextVariables:O}=this.getDataType(m);this.handleStructOrFunctionBlockVarDecl(v,i,r,N,S),O.forEach(y=>{this.handleStructOrFunctionBlockVarDecl(v,i,r,y,S)})});else if(ei(f)){let d=f.varInputs,m=f.varOutputs,v=f.varLocals;this.hintFunctionBlockDecl(d,i,r),this.hintFunctionBlockDecl(m,i,r),this.hintFunctionBlockDecl(v,i,r)}}}}else eb(a).forEach(u=>{let c=ze(u);if(c){let[f,d]=c;i(r,{label:f==null?void 0:f.elementName,kind:mt.CompletionItemKind.Reference,detail:f==null?void 0:f.usage,sortText:"1"})}})}else{let s=this.getRangeText(r);s=s.trim();let a=s.indexOf(":"),l=s.substring(a+1);l=l.trim(),ZC(l).forEach(c=>{if(bp.includes(c)||Wu.includes(c)){let f=ze(c);if(f){let[d,m]=f;i(r,{label:c,kind:mt.CompletionItemKind.Reference,detail:d==null?void 0:d.elementType,sortText:"1"})}}else if(Lp.includes(c)){let f=fo(c);if(f){let[d]=f;i(r,{label:c,kind:mt.CompletionItemKind.Enum,detail:d==null?void 0:d.elementType,sortText:"1"})}}else i(r,{label:c,kind:mt.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})})}}catch{}}handleStructOrFunctionBlockVarDecl(r,n,i,o,s){if(r!==""&&r)n(i,{label:o,kind:mt.CompletionItemKind.Reference,detail:r,sortText:"1"});else{let a=s.Identifier;a&&n(i,{label:o,kind:mt.CompletionItemKind.Reference,detail:a.$refText,sortText:"1"})}}completionForCrossReference(r,n,i){var s,a;let o=r.node;if(zt(o)){let l=o.variable.$refText;JC(l).forEach(c=>{let f=ze(c);if(f){let[d,m]=f;i(r,{label:d==null?void 0:d.elementName,kind:mt.CompletionItemKind.Reference,detail:d==null?void 0:d.usage,sortText:"1"})}})}else if(bn(o)){let l=(a=(s=o.enumType)==null?void 0:s.$refText)!=null?a:"";return QC(l).forEach(c=>{let f=fo(c);if(f){let[d]=f;i(r,{label:d==null?void 0:d.elementName,kind:mt.CompletionItemKind.Enum,detail:d==null?void 0:d.elementType,sortText:"1"})}}),super.completionForCrossReference(r,n,i)}else if(Ln(o)){let l=o.previous;if(Ln(l)){let u=l.element,c=u==null?void 0:u.ref;if(Fu(c)||It(c)){let f=c.typeName,d="";return d=at(d,f),d?void 0:super.completionForCrossReference(r,n,i)}}else if(Dn(l))return super.completionForCrossReference(r,n,i)}else return super.completionForCrossReference(r,n,i)}findFeaturesAt(r,n){let i=r.getText({start:mt.Position.create(0,0),end:r.positionAt(n)}),o=this.completionParser.parse(i),s=o.tokens;if(o.tokenIndex===0){let u=Ct.getEntryRule(this.grammar),c=Po({feature:u.definition,type:Ct.getExplicitRuleType(u)});return s.length>0?(s.shift(),Dl(c.map(f=>[f]),s)):c}let a=[...s].splice(o.tokenIndex);return this.findLocalNextFeatures([o.elementStack.map(u=>({feature:u}))],a)}findLocalNextFeatures(r,n){let i={stacks:r,tokens:n};return i.stacks.flat().forEach(s=>{s.property=void 0}),this.findNextFeatureStacks(i.stacks).map(s=>s[s.length-1])}findNextFeatureStacks(r,n){let i=[];for(let o of r)i.push(...this.interpretStackToken(o,n));return i}interpretStackToken(r,n){let i=new Map,o=new Set(r.map(a=>a.feature).filter(this.isPlusFeature)),s=[];for(;r.length>0;){let a=r.pop(),l=this.findNextFeaturesInternal({next:a,cardinalities:i,plus:o,visited:new Set}).filter(u=>n?this.featureMatches(u.feature,n):!0);for(let u of l)s.push([...r,u]);if(!l.every(u=>Ct.isOptionalCardinality(u.feature.cardinality,u.feature)||Ct.isOptionalCardinality(i.get(u.feature))))break}return s}isPlusFeature(r){if(r.cardinality==="+")return!0;let n=vr.getContainerOfType(r,ot.isAssignment);return!!(n&&n.cardinality==="+")}findNextFeaturesInternal(r){let{next:n,cardinalities:i,visited:o,plus:s}=r,a=[],l=n.feature;if(o.has(l))return[];o.add(l);let u,c=l;for(;c.$container;)if(ot.isGroup(c.$container)){u=c.$container;break}else if(ot.isAbstractElement(c.$container))c=c.$container;else break;if(Ct.isArrayCardinality(c.cardinality)){let f=this.findFirstFeaturesInternal({next:{feature:c,type:n.type},cardinalities:i,visited:o,plus:s});for(let d of f)s.add(d.feature);a.push(...f)}if(u){let f=u.elements.indexOf(c);f!==void 0&&f<u.elements.length-1&&a.push(...this.findNextFeaturesInGroup({feature:u,type:n.type},f+1,i,o,s)),a.every(d=>Ct.isOptionalCardinality(d.feature.cardinality,d.feature)||Ct.isOptionalCardinality(i.get(d.feature))||s.has(d.feature))&&a.push(...this.findNextFeaturesInternal({next:{feature:u,type:n.type},cardinalities:i,visited:o,plus:s}))}return a}featureMatches(r,n){if(ot.isKeyword(r))return r.value===n.image;if(ot.isRuleCall(r))return this.ruleMatches(r.rule.ref,n);if(ot.isCrossReference(r)){let i=Ct.getCrossReferenceTerminal(r);if(i)return this.featureMatches(i,n)}return!1}findFirstFeaturesInternal(r){var u,c,f;let{next:n,cardinalities:i,visited:o,plus:s}=r;if(n===void 0)return[];let{feature:a,type:l}=n;if(ot.isGroup(a)){if(o.has(a))return[];o.add(a)}if(ot.isGroup(a))return this.findNextFeaturesInGroup(n,0,i,o,s).map(d=>this.modifyCardinality(d,a.cardinality,i));if(ot.isAlternatives(a)||ot.isUnorderedGroup(a))return a.elements.flatMap(d=>this.findFirstFeaturesInternal({next:{feature:d,type:l,property:n.property},cardinalities:i,visited:o,plus:s})).map(d=>this.modifyCardinality(d,a.cardinality,i));if(ot.isAssignment(a)){let d={feature:a.terminal,type:l,property:(u=n.property)!=null?u:a.feature};return this.findFirstFeaturesInternal({next:d,cardinalities:i,visited:o,plus:s}).map(m=>this.modifyCardinality(m,a.cardinality,i))}else{if(ot.isAction(a))return this.findNextFeaturesInternal({next:{feature:a,type:Ct.getTypeName(a),property:(c=n.property)!=null?c:a.feature},cardinalities:i,visited:o,plus:s});if(ot.isRuleCall(a)&&ot.isParserRule(a.rule.ref)){let d=a.rule.ref,m={feature:d.definition,type:d.fragment||d.dataType?void 0:(f=Ct.getExplicitRuleType(d))!=null?f:d.name,property:n.property};return this.findFirstFeaturesInternal({next:m,cardinalities:i,visited:o,plus:s}).map(v=>this.modifyCardinality(v,a.cardinality,i))}else return[n]}}findNextFeaturesInGroup(r,n,i,o,s){var u;let a=[],l;for(;n<r.feature.elements.length&&(l={feature:r.feature.elements[n++],type:r.type},a.push(...this.findFirstFeaturesInternal({next:l,cardinalities:i,visited:o,plus:s})),!!Ct.isOptionalCardinality((u=l.feature.cardinality)!=null?u:i.get(l.feature),l.feature)););return a}ruleMatches(r,n){return ot.isParserRule(r)?Po(r.definition).some(o=>this.featureMatches(o.feature,n)):ot.isTerminalRule(r)?Ct.terminalRegex(r).test(n.image):!1}modifyCardinality(r,n,i){return i.set(r.feature,n),r}getDataType(r){let n=r.variables,i=r.nextVariables,o=r.typeName,s="";return s=at(s,o),{expectedType:s,variable:n,typeName:o,nextVariables:i}}};var Pp=class extends Ha{constructor(r){super(r);this.services=r}getDocumentHighlight(r,n){let i=r.parseResult.value.$cstNode;if(!i)return;let o=Wi.findDeclarationNodeAtOffset(i,r.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!o)return;let s=this.references.findDeclaration(o);if(s){let a=[];if(s.$type==="VarDeclaration"||s.$type==="FunctionElement")return a;{let l=s.$document;if(!l)return a;let u=Ut.equals(l.uri,r.uri),c={documentUri:r.uri,includeDeclaration:u};return this.references.findReferences(s,c).map(d=>this.createDocumentHighlight(d)).toArray()}}}};var Mp=class extends Xo{constructor(r){super(r);this.services=r}findDeclaration(r){if(r){let n=Ct.findAssignment(r),i=r.astNode;if(n&&i){let o=i[n.feature];if(vt(o)){if(XC.includes(o.$refText.toUpperCase())){let s=ze(o.$refText.toUpperCase());if(s){let[a,l]=s;return a}}return o.ref}else if(Array.isArray(o)){for(let s of o)if(vt(s)&&s.$refNode&&s.$refNode.offset<=r.offset&&s.$refNode.end>=r.end)return s.ref}}if(i){let o=this.nameProvider.getNameNode(i);if(o&&(o===r||Wi.isChildNode(r,o)))return i}}}};var Xa=Ft(Br(),1);var Fp=class extends mp{getSignatureFromElement(e,r){var n,i,o,s,a;if(Ap(e)){let l=e.$container;if(Sp(l)){let u=l.assignPrefix,c=u==null?void 0:u.varEnchanceDecl.$refText,f=u==null?void 0:u.varEnchanceDecl.ref;if(f){if(Cn(f)){let m=f.varInputs,v=f.varOutputs,N=ho(m),S=ho(v),O=Math.max(N,S),y=f.name,g=f.variable_type,I="";I=at(I,g),I===void 0&&(I=(n=g.Identifier)==null?void 0:n.$refText);let M=[],J="";m.forEach(Ce=>{let j=Ce.items;for(let k=0;k<j.length;k++){let B=j[k],G=B.nextVariables,ie=pr(B.variables,O),z="",$=B.typeName;z=at(z,$),J+=`
VAR_INPUT${" ".repeat(8)}${B.variables}${" ".repeat(ie)}${z}`,G.length>0&&G.forEach(w=>{let le=pr(w,O);J+=`
VAR_INPUT${" ".repeat(8)}${w}${" ".repeat(le)}${z}`})}}),v.forEach(Ce=>{let j=Ce.items;for(let k=0;k<j.length;k++){let B=j[k],G=B.nextVariables,ie=pr(B.variables,O),z="",$=B.typeName;z=at(z,$),J+=`
VAR_OUTPUT${" ".repeat(7)}${B.variables}${" ".repeat(ie)}${z}`,G.length>0&&G.forEach(w=>{let le=pr(w,O);J+=`
VAR_OUTPUT${" ".repeat(7)}${w}${" ".repeat(le)}${z}`})}});let ce={kind:Xa.MarkupKind.Markdown,value:["```typescript",J,"```"].join(`
`)},_e={label:`FUNCTION ${y}:${I}
`,documentation:ce};return M.push(_e),{signatures:M}}else if(It(f)){let v=f.typeName.Identifier;if(v){let S=v.ref;if(ei(S)){let O=S.varInputs,y=S.varOutputs,g=[],I="",M=ho(O),J=ho(y),ce=Math.max(M,J);O.forEach(j=>{let k=j.items;for(let B=0;B<k.length;B++){let G=k[B],ie=G.nextVariables,z=pr(G.variables,ce),$="",w=G.typeName;$=at($,w),I+=`
VAR_INPUT${" ".repeat(8)}${G.variables}${" ".repeat(z)}${$}`,ie.length>0&&ie.forEach(le=>{let me=pr(le,ce);I+=`
VAR_INPUT${" ".repeat(8)}${le}${" ".repeat(me)}${$}`})}}),y.forEach(j=>{let k=j.items;for(let B=0;B<k.length;B++){let G=k[B],ie=G.nextVariables,z=pr(G.variables,ce),$="",w=G.typeName;$=at($,w),I+=`
VAR_OUTPUT${" ".repeat(7)}${G.variables}${" ".repeat(z)}${$}`,ie.length>0&&ie.forEach(le=>{let me=pr(le,ce);I+=`
VAR_OUTPUT${" ".repeat(7)}${le}${" ".repeat(me)}${$}`})}});let _e={kind:Xa.MarkupKind.Markdown,value:["```typescript",I,"```"].join(`
`)},Ge={label:`FUNCTION_BLOCK ${S.name}
`,documentation:_e};return g.push(Ge),{signatures:g}}}let N=this.getCacheSignatureHelp(this.getVarDeclarationCacheName(f));if(N)return N}}let d=this.getCacheSignatureHelp(c);if(d)return d}else if(co(l)){let u=l.refFunctionName,c=(i=u.refFunctionName)==null?void 0:i.ref,f=(s=(o=u.refFunctionName)==null?void 0:o.$refText)!=null?s:u.Cache_type_name;if(c){if(Cn(c)){let m=c.varInputs,v=c.varOutputs,N=ho(m),S=ho(v),O=Math.max(N,S),y=c.name,g=c.variable_type,I="";I=at(I,g),I===void 0&&(I=(a=g.Identifier)==null?void 0:a.$refText);let M=[],J="";m.forEach(Ce=>{let j=Ce.items;for(let k=0;k<j.length;k++){let B=j[k],G=B.nextVariables,ie=pr(B.variables,O),z="",$=B.typeName;z=at(z,$),J+=`
VAR_INPUT${" ".repeat(8)}${B.variables}${" ".repeat(ie)}${z}`,G.length>0&&G.forEach(w=>{let le=pr(w,O);J+=`
VAR_INPUT${" ".repeat(8)}${w}${" ".repeat(le)}${z}`})}}),v.forEach(Ce=>{let j=Ce.items;for(let k=0;k<j.length;k++){let B=j[k],G=B.nextVariables,ie=pr(B.variables,O),z="",$=B.typeName;z=at(z,$),J+=`
VAR_OUTPUT${" ".repeat(7)}${B.variables}${" ".repeat(ie)}${z}`,G.length>0&&G.forEach(w=>{let le=pr(w,O);J+=`
VAR_OUTPUT${" ".repeat(7)}${w}${" ".repeat(le)}${z}`})}});let ce={kind:Xa.MarkupKind.Markdown,value:["```typescript",J,"```"].join(`
`)},_e={label:`FUNCTION ${y}:${I}
`,documentation:ce};return M.push(_e),{signatures:M}}else if(It(c)){let v=c.typeName.Identifier;if(v){let S=v.ref;if(ei(S)){let O=S.varInputs,y=S.varOutputs,g=[],I="",M=ho(O),J=ho(y),ce=Math.max(M,J);O.forEach(j=>{let k=j.items;for(let B=0;B<k.length;B++){let G=k[B],ie=G.nextVariables,z=pr(G.variables,ce),$="",w=G.typeName;$=at($,w),I+=`
VAR_INPUT${" ".repeat(8)}${G.variables}${" ".repeat(z)}${$}`,ie.length>0&&ie.forEach(le=>{let me=pr(le,ce);I+=`
VAR_INPUT${" ".repeat(8)}${le}${" ".repeat(me)}${$}`})}}),y.forEach(j=>{let k=j.items;for(let B=0;B<k.length;B++){let G=k[B],ie=G.nextVariables,z=pr(G.variables,ce),$="",w=G.typeName;$=at($,w),I+=`
VAR_OUTPUT${" ".repeat(7)}${G.variables}${" ".repeat(z)}${$}`,ie.length>0&&ie.forEach(le=>{let me=pr(le,ce);I+=`
VAR_OUTPUT${" ".repeat(7)}${le}${" ".repeat(me)}${$}`})}});let _e={kind:Xa.MarkupKind.Markdown,value:["```typescript",I,"```"].join(`
`)},Ge={label:`FUNCTION_BLOCK ${S.name}
`,documentation:_e};return g.push(Ge),{signatures:g}}}let N=this.getCacheSignatureHelp(this.getVarDeclarationCacheName(c));if(N)return N}}let d=this.getCacheSignatureHelp(f);if(d)return d}}}getVarDeclarationCacheName(e){var n;let r=e.typeName;return r.Cache_type_name?r.Cache_type_name:(n=r.Identifier)==null?void 0:n.$refText}getCacheSignatureHelp(e){if(!e)return;let r=ze(e);if(r){let[n]=r,i=[];if(n){let o=this.getSignatureInfo(n,i,"usage");return o||this.getSignatureInfo(n,i,"comment")}}}get signatureHelpOptions(){return{triggerCharacters:["(",","],retriggerCharacters:[","]}}getSignatureInfo(e,r,n){let i=e[n],o=MG(e.varDecls),s="",a=FG(o);if(o.forEach(l=>{let u=pr(l.variable,a),c=l.varType==="VAR_INPUT"?8:7;s+=`
${l.varType}${" ".repeat(c)}${l.variable}${" ".repeat(u)} ${l.type}`}),i){let l=e.elementType==="functionBlock"?"FUNCTION_BLOCK":"FUNCTION",u=e.elementType==="functionBlock"?"\u529F\u80FD\u5757\u8BF4\u660E: ":"\u51FD\u6570\u8BF4\u660E: ",c={kind:Xa.MarkupKind.Markdown,value:["```typescript",`${u}${e.comment}`,s,"```"].join(`
`)},f={label:`${l} ${e.elementName}
`,documentation:c};return r.push(f),{signatures:r}}}},a_=class{constructor(e,r,n){this.varType=e;this.variable=r;this.type=n}};function MG(t){let e=[];return t.forEach(r=>{let n=r.varGlobalType,i=r.varName,o=r.varType,s=new a_(n,i,o);e.push(s)}),e}function pr(t,e){let r=8,n=t.length;return e+r-n}function ho(t){let e=0;return t.forEach(r=>{r.items.forEach(n=>{let i=n.nextVariables;e=Math.max(e,n.variables.length),i.length>0&&i.forEach(o=>{e=Math.max(e,o.length)})})}),e}function FG(t){let e=0;return t.forEach(r=>{e=Math.max(e,r.variable.length)}),e}var Up,ab=()=>Up!=null?Up:Up=Ep(`{
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
            "$type": "Assignment",
            "feature": "inputs",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@11"
              },
              "arguments": []
            },
            "cardinality": "*"
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
            },
            "cardinality": "?"
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
                "$ref": "#/rules@115"
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
            },
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
                "$ref": "#/rules@115"
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
              "$ref": "#/rules@115"
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
                  "$ref": "#/rules@104"
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
                  "$ref": "#/rules@114"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@108"
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
                  "$ref": "#/rules@136"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@115"
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
                "$ref": "#/rules@115"
              },
              "arguments": []
            }
          },
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
            },
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
                "$ref": "#/rules@115"
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
                  "$ref": "#/rules@135"
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
                  "$ref": "#/rules@135"
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
                "$ref": "#/rules@115"
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
                    "$ref": "#/rules@136"
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
            "$ref": "#/rules@115"
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
                "$ref": "#/rules@103"
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
                "$ref": "#/rules@106"
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
                "$ref": "#/rules@109"
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
                "$ref": "#/rules@110"
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
                "$ref": "#/rules@107"
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
                "$ref": "#/rules@105"
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
                "$ref": "#/rules@113"
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
                "$ref": "#/rules@114"
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
                    "$ref": "#/rules@111"
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
                    "$ref": "#/rules@112"
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
                  "$ref": "#/rules@115"
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
                "$ref": "#/rules@104"
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
              "$ref": "#/rules@136"
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
          "$ref": "#/rules@136"
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
              "$ref": "#/rules@118"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@119"
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
                  "$ref": "#/rules@118"
                },
                "arguments": []
              },
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
                  "$ref": "#/rules@119"
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
                  "$ref": "#/rules@107"
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
                  "$ref": "#/rules@118"
                },
                "arguments": []
              },
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
                  "$ref": "#/rules@119"
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
              "$ref": "#/rules@106"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@103"
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
                  "$ref": "#/rules@105"
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
                  "$ref": "#/rules@136"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@117"
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
          "$ref": "#/rules@108"
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
              "$ref": "#/rules@121"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@122"
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
                "$ref": "#/rules@136"
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
                  "$ref": "#/rules@113"
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
          "$ref": "#/rules@123"
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
              "$ref": "#/rules@125"
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
              "$ref": "#/rules@124"
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
              "$ref": "#/rules@127"
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
              "$ref": "#/rules@126"
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
                  "$ref": "#/rules@112"
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
          "$ref": "#/rules@136"
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
          "$ref": "#/rules@136"
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
              "$ref": "#/rules@136"
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
                  "$ref": "#/rules@136"
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
              "$ref": "#/rules@114"
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
          "$ref": "#/rules@136"
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
          "$ref": "#/rules@136"
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
          "$ref": "#/rules@136"
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
                  "$ref": "#/rules@111"
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
              "$ref": "#/rules@98"
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
                    "$ref": "#/rules@98"
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
              "$ref": "#/rules@99"
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
                      "$ref": "#/rules@115"
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
                    "$ref": "#/rules@104"
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
                "$ref": "#/rules@115"
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
                "$ref": "#/rules@84"
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
                  "$ref": "#/rules@115"
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
                "$ref": "#/rules@104"
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
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@86"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": ";",
                "cardinality": "?"
              }
            ]
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
            "$type": "Group",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@92"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": ";",
                "cardinality": "?"
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
                "$ref": "#/rules@82"
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
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "assignPrefix",
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
                "feature": "assign",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@83"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "id",
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
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "id",
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
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "assign",
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
                    "feature": "params",
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
                "cardinality": "+"
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
      "name": "StatementReceiver",
      "inferredType": {
        "$type": "InferredType",
        "name": "MemberCall"
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
                "$ref": "#/rules@73"
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
                      "$ref": "#/rules@115"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
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
                    "$ref": "#/rules@85"
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
                        "$ref": "#/rules@85"
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
                "$ref": "#/rules@87"
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
                "$ref": "#/rules@88"
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
                "$ref": "#/rules@89"
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
                "$ref": "#/rules@89"
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
                "$ref": "#/rules@90"
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
                "$ref": "#/rules@91"
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
                    "$ref": "#/rules@91"
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
                "$ref": "#/rules@137"
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
                "$ref": "#/rules@93"
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
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@96"
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
                  "$ref": "#/rules@115"
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
                "$ref": "#/rules@94"
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
              "$ref": "#/rules@135"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@136"
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
                  "$ref": "#/rules@136"
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
                              "$ref": "#/rules@115"
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
                  "$ref": "#/rules@115"
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
          "$ref": "#/rules@115"
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
              "$ref": "#/rules@102"
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
                  "$ref": "#/rules@102"
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
              "$ref": "#/rules@116"
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
              "$ref": "#/rules@136"
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
              "$ref": "#/rules@128"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@130"
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
              "$ref": "#/rules@128"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@130"
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
              "$ref": "#/rules@128"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@130"
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
              "$ref": "#/rules@128"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@130"
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
              "$ref": "#/rules@130"
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
              "$ref": "#/rules@136"
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
                  "$ref": "#/rules@136"
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
              "$ref": "#/rules@131"
            }
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
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@136"
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
                      "$ref": "#/rules@136"
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
              "$ref": "#/rules@134"
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@128"
                },
                "cardinality": "?"
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
                      "$ref": "#/rules@128"
                    }
                  },
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "TerminalRuleCall",
                        "rule": {
                          "$ref": "#/rules@134"
                        }
                      },
                      {
                        "$type": "TerminalRuleCall",
                        "rule": {
                          "$ref": "#/rules@129"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "TerminalRuleCall",
                "rule": {
                  "$ref": "#/rules@129"
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
                  "$ref": "#/rules@128"
                },
                "cardinality": "?"
              },
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@134"
                    }
                  },
                  {
                    "$type": "TerminalRuleCall",
                    "rule": {
                      "$ref": "#/rules@129"
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
}`);var UG={languageId:"st",fileExtensions:[".st"],caseInsensitive:!1},lb={AstReflection:()=>new Pu},ub={Grammar:()=>ab(),LanguageMetaData:()=>UG,parser:{}};var Bp=class{constructor(e){this.services=e}error(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.error(e))}warn(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.warn(e))}info(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.info(e))}log(e){var r;e&&((r=this.services.lsp.Connection)==null||r.console.log(e))}};var Wp=class extends Zo{async computeLocalScopes(e,r){let n=e.parseResult.value,i=new hn;for(let a of n.program)a.inputs.forEach(u=>{u.items.forEach(f=>{let d=this.descriptions.createDescription(f,f.variables,e);i.add(n,d);let m=f.nextVariables;this.addNextVariables(m,f,e,i,n)})});return n.function_block.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),n.st_function.forEach(a=>{let l=a.varInputs,u=a.varOutputs,c=a.varLocals;this.handleAllVariable(l,i,n,e),this.handleAllVariable(u,i,n,e),this.handleAllVariable(c,i,n,e)}),i}addNextVariables(e,r,n,i,o){if(e)return e.length>0&&e.forEach(s=>{let a=this.descriptions.createDescription(r,s,n);i.add(o,a)}),i}handleAllVariable(e,r,n,i){e.forEach(o=>{o.items.forEach(a=>{let l=this.descriptions.createDescription(a,a.variables,i);r.add(n,l),this.addNextVariables(a.nextVariables,a,i,r,n)})})}};var Vp=class extends xp{format(e){}};var Gp=class extends Yo{constructor(r){super(r);this.services=r}getOuterCacheElement(r){return MC(r)}isOuterCacheReference(r){return this.getOuterCacheElement(r)!==void 0}createOuterCacheDescription(r){let n=this.getOuterCacheElement(r),i="FunctionElement";return n&&(n.elementType==="alias"?i="Alias":n.elementType==="enum"?i="StEnum":n.elementType==="struct"?i="StructsList":n.elementType==="functionBlock"&&(i="FunctionBlock")),{type:i,name:r,documentUri:dr,path:"st-cache"}}getCandidate(r){let n=r.reference.$refText,i=this.reflection.getReferenceType(r);return kp.includes(n.toUpperCase())?this.createOuterCacheDescription(n):(i==="ComposeElement"||i==="Universe")&&this.isOuterCacheReference(n)?this.createOuterCacheDescription(n):super.getCandidate(r)}buildReference(r,n,i,o){let s=this,a={$refNode:i,$refText:o,get ref(){var l;if(Be(this._ref))return this._ref;if(ml(this._nodeDescription)){let u=s.loadAstNode(this._nodeDescription),c=s.getOuterCacheElement(o);this._ref=u!=null?u:c,!this._ref&&!kp.includes(o.toUpperCase())&&(this._ref=s.createLinkingError({reference:a,container:r,property:n},this._nodeDescription))}else if(this._ref===void 0){let u=s.getLinkedNode({reference:a,container:r,property:n});if(u.error&&vr.getDocument(r).state<ae.ComputedScopes)return;this._ref=(l=u.node)!=null?l:u.error,this._nodeDescription=u.descr}return Be(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return xn(this._ref)?this._ref:void 0}};return a}doLink(r,n){let i=r.reference;if(i._ref===void 0)try{let o=this.getCandidate(r);if(xn(o))i._ref=o;else if(i._nodeDescription=o,this.langiumDocuments().hasDocument(o.documentUri)){let s=this.loadAstNode(o),a=this.getOuterCacheElement(i.$refText);s||a?i._ref=s!=null?s:a:o.documentUri.toString()!==n.uri.toString()&&(i._ref=this.createLinkingError(r,o))}}catch(o){i._ref={...r,message:`An error occurred while resolving reference to '${i.$refText}': ${o}`}}n.references.push(i)}getLinkedNode(r){try{let n=this.getCandidate(r);if(xn(n))return{error:n};let i=this.loadAstNode(n);if(i)return{node:i,descr:n};let o=this.getOuterCacheElement(r.reference.$refText);return o?{node:o,descr:n}:n.documentUri.toString()===vr.getDocument(r.container).uri.toString()?{descr:n}:{descr:n,error:this.createLinkingError(r,n)}}catch(n){return{error:{...r,message:`An error occurred while resolving reference to '${r.reference.$refText}': ${n}`}}}}createLinkingError(r,n){let i=vr.getDocument(r.container);i.state<ae.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${i.uri}).`);let o=this.reflection.getReferenceType(r),s=r.container;return NC(s)?(o="\u529F\u80FD\u5757\u6216\u51FD\u6570",{...r,message:`\u4E0D\u80FD\u5F15\u7528\u7684${o}'${r.reference.$refText}'.`,targetDescription:n}):{...r,message:`Could not resolve reference to ${o} named '${r.reference.$refText}'.`,targetDescription:n}}};function cb(t){return{$type:"struct",literal:t}}function fb(t){return t.$type==="struct"}function db(t){return{$type:"functionBlock",literal:t}}function pb(t){return t.$type==="functionBlock"}function Vu(t,e){return{$type:"error",message:t,source:e}}function mb(t){return{$type:"cache",literal:t}}function hb(t){return t.$type==="cache"}function us(t,e){var i;let r,n=e.get(t);if(n)return n;if(e.set(t,Vu("Recursive definition",t)),Ln(t)){let o=(i=t.element)==null?void 0:i.ref;o&&(Fu(o)?r=gb(o,e):It(o)&&(r=BG(o,e))),r||(t.previous?r=us(t.previous,e):t.prior&&(r=us(t.prior,e)))}else if(zt(t))r=Tb(t,e);else if(Dn(t))r=VG(t,e);else if(It(t)){let o=t.typeName;Mu(o)&&(r=jp(o,e))}else Fu(t)?r=gb(t,e):ss(t)?r=cb(t):ei(t)?r=db(t):Ip(t)&&(r=WG(t,e));return r||(r=Vu("Could not infer type for "+t.$type,t)),e.set(t,r),r}function gb(t,e){let r=t.typeName;return jp(r,e)}function BG(t,e){return jp(t.typeName,e)}function WG(t,e){return jp(t.refName,e)}function jp(t,e){if(Mu(t)){let r=t.Identifier;if(r){let i=r.ref;if(i)return us(i,e)}let n=o_(t);if(n)return mb(n)}}function VG(t,e){let r=t.prior;return r?zt(r)?Tb(r,e):us(r,e):Vu("Could not infer type for this expression",t)}function Tb(t,e){let r=t.variable.ref;return r?us(r,e):Vu("Could not infer type for this reference",t)}var qp=class extends es{constructor(e){super(e)}getScope(e){var r;if(e.property==="element"){let n=e.container,i=(r=n.previous)!=null?r:n.prior;if(!i)return super.getScope(e);let o=us(i,new Map);if(fb(o))return this.scopeStructMembers(o.literal);if(pb(o))return this.scopeFunctionBlockMembers(o.literal);if(hb(o)){let s=this.scopeCache(o.literal);if(s)return s}}else if(e.property==="variable"){let n=this.scopeEnumMembersForExpectedParam(e);return n||super.getScope(e)}return super.getScope(e)}scopeEnumMembersForExpectedParam(e){var l;let r=e.container;if(!zt(r))return;let n=this.getExpectedEnumTypeForVariable(r);if(!n)return;let i=fo(n);if(!i)return;let[o]=i,s=(l=o==null?void 0:o.enumChild.map(u=>u.enumVarName))!=null?l:[];if(s.length===0)return;let a=he(s).map(u=>this.descriptions.createDescription(r,u)).nonNullable();return this.createScope(a,super.getScope(e))}getExpectedEnumTypeForVariable(e){let r=e.$container,n=r==null?void 0:r.$container,i=n==null?void 0:n.$container,o=i==null?void 0:i.$container;if(!xC(n)||!Ap(i))return;let s=n.ParamName;if(!s)return;let a=this.getInvokedTypeName(o);if(!a)return;let l=ze(a),[u]=l!=null?l:[],c=u==null?void 0:u.varDecls.find(f=>f.varName===s);return c==null?void 0:c.varType}getInvokedTypeName(e){if(Sp(e)&&e.assignPrefix){let r=e.assignPrefix.varEnchanceDecl.ref;return It(r)?or(r.typeName,""):e.assignPrefix.varEnchanceDecl.$refText}if(co(e)&&e.refFunctionName.refFunctionName){let r=e.refFunctionName.refFunctionName.ref;return It(r)?or(r.typeName,""):e.refFunctionName.refFunctionName.$refText}}scopeCache(e){let r=ze(e),n;if(r){let[i,o]=r;if(i){let s=i.varDecls,a=he(s).map(u=>this.descriptions.createDescription(u,u.varName,o)).nonNullable(),l={caseInsensitive:!1};n=this.createScope(a,n,l)}}if(n)return n}getGlobalScope(e,r){return super.getGlobalScope(e,r)}scopeStructMembers(e){let r=this.getStructChain(e).flatMap(a=>a.items),n=he(r).map(a=>this.descriptions.createDescription(a,a.variables)).nonNullable(),i=he(r).map(a=>{let l=a.nextVariables;if(l.length>0)for(let u=0;u<l.length;u++){let c=l[u];return this.descriptions.createDescription(a,c)}}).nonNullable(),o=new Xr(n),s=new Xr(i);return o}scopeFirstFunctionBlockMembers(e){let r=this.getFunctionBlockDecl(e),n=he(r).map(i=>{let o=this.nameProvider.getName(i);return o?this.descriptions.createDescription(i,o):this.descriptions.createDescription(i,i.variables)}).nonNullable();return new Xr(n)}scopeNextFunctionBlockMembers(e){let r=this.singleVarScope(e,"input"),n=this.singleVarScope(e,"output"),i=this.singleVarScope(e,"local");return new Xr(r.getAllElements().concat(n.getAllElements()).concat(i.getAllElements()))}singleVarScope(e,r){let n;r==="input"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varInputs):r==="output"?n=this.getFunctionBlockChain(e).flatMap(a=>a.varOutputs):r==="local"&&(n=this.getFunctionBlockChain(e).flatMap(a=>a.varLocals));let o=this.getFunctionBlockDecl(e).filter(a=>a.nextVariables.length>0),s;for(let a=0;a<o.length;a++){let l=o[a],u=l.nextVariables,c=this.handleNextVariables(l,u),f=this.createScopeForNodes(n,c);s?s=s.concat(f.getAllElements()):s=f.getAllElements()}return new Xr(s)}scopeFunctionBlockMembers(e){let r=this.scopeFirstFunctionBlockMembers(e),n=this.scopeNextFunctionBlockMembers(e);return new Xr(r.getAllElements().concat(n.getAllElements()))}handleNextVariables(e,r){let n=he(r).map(o=>this.descriptions.createDescription(e,o)).nonNullable();return new Xr(n)}getStructDecl(e){let r=[],n=[];return e.items}getFunctionBlockDecl(e){let r=[],n=e.varInputs,i=e.varOutputs,o=e.varLocals;return this.addDecl(n,r),this.addDecl(i,r),this.addDecl(o,r),r}addDecl(e,r){e.forEach(n=>{let i=n.items;r.push(...i)})}getStructChain(e){let r=new Set;return r.add(e),e.items.forEach(i=>{let o=i.typeName;if(Mu(o)){let s=o.Identifier;if(s){let a=s.ref;a&&this.getStructChain(a)}}}),Array.from(r)}getFunctionBlockChain(e){let r=new Set;return r.add(e),Array.from(r)}};function yb(t){let e=t.validation.DocumentValidator,r=t.validation.ValidationRegistry,n=t.validation.StValidator,i={St:n.checkElement};r.register(i,n)}var Hp=class{checkElement(e,r){let n=e.program,i=e.st_function,o=e.function_block,s=e.types_struct,a=e.types_alias,l=e.types_enum,u=e.types_union;n.forEach(c=>{this.saveProgramVarInfo(c.inputs,r)}),this.checkPrograms(e,r),this.checkFunctions(i,r),this.checkFunctionBlocks(o,r),this.checkDateTypes(s,a,l,u,r)}checkPrograms(e,r){this.judgeWhetherHasDuplicateName("program",e.program,r),this.judgeCapital("program",e.program,r),this.checkProgramVarRef(e,r)}checkFunctions(e,r){this.judgeWhetherHasDuplicateName("function",e,r),this.handleFunctionOrBlockInfo(e,r)}checkFunctionBlocks(e,r){this.judgeWhetherHasDuplicateName("functionBlock",e,r),this.judgeCapital("functionBlock",e,r),this.handleFunctionOrBlockInfo(e,r)}checkDateTypes(e,r,n,i,o){this.handleDataTypeVarInfo(e,r,n,i,o)}judgeCapital(e,r,n){r&&r.forEach(i=>{if(i.name){let o=i.name.substring(0,1);/^[a-zA-Z]/.test(o)&&o.toUpperCase()!==o&&n("warning",`${e} name should start with a capital letter`,{node:i,property:"name"})}})}judgeWhetherHasDuplicateName(e,r,n){let i=[];if(r){let o={};r.forEach(a=>{let l=[];mC(a)?(l.push(a.variables),a.nextVariables&&l.push(...a.nextVariables)):l.push(a.name),l.forEach(u=>{o[u]?(o[u]++,i.push(a)):o[u]=1})});let s=Object.keys(o).filter(a=>o[a]>1);i.forEach(a=>{s.length>0&&n("error",`\u91CD\u590D\u5B9A\u4E49\u7684${e}:${s[0]}`,{node:a,property:"name"})})}}checkProgramVarRef(e,r){e.program.forEach(i=>{let o=i.stStatements;if(o){let s=o.statements;this.handleStatements(s,r)}})}handleStatements(e,r){e.length!==0&&e.forEach(n=>{let i=n.$type;if(i==="Selection_statement"){let o=n,s=o.if,a=o.case;if(s){let l=s.ifStatement,u=s.ifCondition,c=s.elsifConditions;this.checkIfWhitespace(s,r),this.checkWhitespace(s,r);let f=s.elsifStatements,d=s.elseStatement;if(u){let m=u.$type;this.handleCondition(m,u,r)}if(c.forEach(m=>{let v=m.$type;this.handleCondition(v,m,r)}),l){let m=l.statements;this.handleStatements(m,r)}if(f){let m=f.statements;this.handleStatements(m,r)}if(d){let m=d.statements;this.handleStatements(m,r)}}if(a){let l=a.caseExpression,u=a.elseStatements,c=a.caseElements,f="";if(zt(l)){let d=l.variable;f=this.judgeRefNodeType(d.ref,f)}else if(bn(l))f=this.validateEnumeratedValue(l,void 0,r);else if(Dn(l)){let d=l.prior;zt(d)?f=this.judgeRefNodeType(d.variable.ref,f):bn(d)&&(f=this.validateEnumeratedValue(d,void 0,r))}if(u){let d=u.statements;this.handleStatements(d,r)}c.forEach(d=>{let v=d.caseList.caseListElement,N=d.statements;N&&this.handleStatements(this.normalizeStatements(N),r),v.length>0&&v.forEach(S=>{let O=S.numCaseStart,y=S.numericCaseEnd,g=S.enumCase,I=S.simpleEnumCase;if(O&&y&&typeof O=="string"&&typeof y=="string"&&(O=parseInt(O),y=parseInt(y),O>y&&r("error","\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:S,property:"numCaseStart"})),g&&bn(g)&&this.validateEnumeratedValue(g,f,r),I&&f){let M=this.getEnumMembers(f,S);M&&(M.some(ce=>ce.toLowerCase()===I.toLowerCase())||r("error",`'${I}' is not a member of enum '${f}'.`,{node:S,property:"simpleEnumCase"}))}})})}}else if(i==="Iteration_statement"){let s=n.statement;if(s!=="EXIT"){let a=s.statementList;if(a){let l=a.statements;if(this.handleStatements(l,r),yC(s)){let u=s.controlVariable.ref,c="";It(u)&&(c=this.judgeRefNodeType(u,c));let f=s.forList,m=f.forExpr.prior,v=f.byExpr,N=v==null?void 0:v.prior,S=f.toExpr,O=S==null?void 0:S.prior;this.handleExpressionPrior(m,c,r,m),this.handleExpressionPrior(N,c,r,N),this.handleExpressionPrior(O,c,r,O)}else if(EC(s)){let u=s.untilExpr;this.handleSingleVariableExpression(u,r)}else if(CC(s)){let u=s.whileExpr;this.handleSingleVariableExpression(u,r)}}}}else i==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(n,r)})}normalizeStatements(e){return!e||e.statements===void 0?[]:Array.isArray(e.statements)?e.statements:[e.statements]}handleCondition(e,r,n){if(e==="Expression"){let i=r.left,o=r.right;this.handleConditionExpression(i,o,n)}else if(e!=="Constant"){if(e!=="FunctionExpression")if(e==="VariableExpression"){let o=r.variable}else e==="Function_invoke_or_assign_statement"&&this.handleFunctionInvokeOrAssign(r,n)}}handleFunctionInvokeOrAssign(e,r){let i=e.statement;if(!OC(i)){let o=i.id,s=i.assign,a=i.params,l=i.assignPrefix;this.handleVariableHint(o,r,!1,s,a,l)}}handleVariableHint(e,r,n,i,o,s){let a="",l,u;if(e){if(co(e))this.handleFunctionExpression(e,r,e,a);else if(Ln(e)){let c=e;l=c;let f=c.element,d=c.previous;if(f){let m=f.ref,v=f.$refText;m&&(a=this.handleRef(m,v,a,d))}}else if(Dn(e)){let c=e,f=c.prior;if(zt(f)){let m=f.variable.ref;l=f,a=this.judgeRefNodeType(m,a)}else if(co(f)){let d=this.handleFunctionExpression(f,r,c,a)}}}if(s){let c=s.varEnchanceDecl,f=c.ref;u=f;let d=c.$refText;f?(a=this.handleRef(f,d,a),this.handleParam(o,a,r,s)):(a=d,this.handleParam(o,a,r))}if(i){let c=i.expression,f=c==null?void 0:c.$type;if(f==="Constant"){let m=c.constant;this.handleDataTypeMatch(m,a,r,l)}else if(f==="EnumeratedValue"){let d=c;this.validateEnumeratedValue(d,a,r)}else if(f==="Expression"){let d=c,m=d==null?void 0:d.prior,v=d.left,N=d.right;if(m&&this.handleExpressionPrior(m,a,r,l),v&&N){let S=v.prior,O=N.prior;this.handleExpressionPrior(S,a,r,l),this.handleExpressionPrior(O,a,r,l)}}else if(f==="MemberCall"){let d=c,m=d.element,v=d.arguments;if(m){let N=m.ref;if(N&&vC(N)){let S=N,O=S.variable_type,y=S.reqParams,g=[];if(this.handleFunctionBlockMethodReqparam(y,r,g),v.length!==y.length)r("error",`\u671F\u671B${y.length}\u4E2A\u53C2\u6570,\u4F46\u662F\u5B9E\u9645${v.length}\u4E2A`,{node:d,property:"arguments"});else for(let M=0;M<v.length;M++){let J=v[M],ce=g[M],_e=J.prior;this.handlePrior(_e,"","",ce,r)}let I;if(I=kn(O,I,r),I&&a!==""){let[M,J]=this.getComparableTypes(I,a);M&&J&&M.toLowerCase()!==J.toLowerCase()&&r("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${I}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:d,property:"element"})}}}}}if(o&&o.length>0&&u&&Cn(u)){let c=[];this.validateStFunctionRule(u,l,a,r,c,o[0])}}handleParam(e,r,n,i){let o,s;if(i&&(s=i.varEnchanceDecl,o=s.ref),e&&e.length>0){let a=e[0].parameters;if(r){let l=ze(r);if(l)this.validateLibraryFunction(l,a,n);else if(It(o)){let u=o.typeName;if(u){let c=u.Identifier;if(c){let f=c.ref;if(ei(f)){let d={$type:"FunctionBlockElement",elementType:"functionBlock",elementName:f.name,varDecls:[],rootName:"",comment:"",usage:""};f.varInputs.forEach(m=>{m.items.forEach(N=>{let O={$type:"VarDeclaration",varName:N.variables,varType:or(N.typeName,""),varGlobalType:"VAR_INPUT"};d.varDecls.push(O)})}),f.varOutputs.forEach(m=>{m.items.forEach(N=>{let O={$type:"VarDeclaration",varName:N.variables,varType:or(N.typeName,""),varGlobalType:"VAR_OUTPUT"};d.varDecls.push(O)})}),this.validateLibraryFunction(d,a,n,!0)}else ss(f)&&i&&n("error","\u65E0\u6CD5\u8C03\u7528\u7C7B\u578B'TYPE'\u7684\u5BF9\u8C61",{node:i,property:"varEnchanceDecl"})}else i&&n("error",`\u9700\u8981\u7A0B\u5E8F\u540D,\u51FD\u6570\u6216\u529F\u80FD\u5757\u5B9E\u4F8B\u66FF\u4EE3${i==null?void 0:i.varEnchanceDecl.$refText}`,{node:i,property:"varEnchanceDecl"})}}}}}handleRef(e,r,n,i){if(ss(e.$container)){let a=e.$container.items.find(l=>l.variables===r);if(a){let l=a.typeName;n=this.judgeType(n,l)}}else if(It(e)){let s=e.typeName;n=this.judgeType(n,s)}else if(i){let o=i.prior;if(zt(o)){let s=o.variable.ref;if(It(s)){let a=s.typeName;if(a.Cache_type_name){let l=a.Cache_type_name,u=ze(l);if(u){let[c,f]=u;if(c){let d=c.varDecls.find(m=>m.varName===r);n=d==null?void 0:d.varType}}}}}}return n}judgeRefNodeType(e,r){if(It(e)){let n=e.typeName;r=or(n,r)}return r}judgeType(e,r){return e=or(r,e),e}getCurrentRoot(e){if(e)return e.$type==="St"?e:vr.getContainerOfType(e,r=>r.$type==="St")}getLocalEnumByName(e,r){if(!e)return;let n=this.getCurrentRoot(r);return n==null?void 0:n.types_enum.find(i=>i.name.toLowerCase()===e.toLowerCase())}getEnumMembers(e,r){if(!e)return;let n=this.getLocalEnumByName(e,r);if(n)return n.enum.map(o=>o.variable_name);let i=fo(e);if(i){let[o]=i;return o==null?void 0:o.enumChild.map(s=>s.enumVarName)}}getEnumeratedValueTypeName(e){var n,i;if(e.enumCacheTypeName)return e.enumCacheTypeName;let r=(n=e.enumType)==null?void 0:n.ref;if(r){if(r.$type==="StEnum")return r.name;if("elementType"in r&&r.elementType==="enum"&&"elementName"in r){let o=r.elementName;if(typeof o=="string")return o}}return(i=e.enumType)==null?void 0:i.$refText}validateEnumeratedValue(e,r,n){let i=this.getEnumeratedValueTypeName(e),o=this.getEnumMembers(i,e);if(i&&o&&(o.some(a=>a.toLowerCase()===e.enumValue.toLowerCase())||n("error",`'${e.enumValue}' is not a member of enum '${i}'.`,{node:e,property:"enumValue"})),i&&r){let[s,a]=this.getComparableTypes(i,r);s&&a&&s.toLowerCase()!==a.toLowerCase()&&n("error",`Cannot convert enum type '${i}' to type '${r}'.`,{node:e,property:"enumValue"})}return i}handleExpressionPrior(e,r,n,i){if(e){i||(i=e);let o=e==null?void 0:e.$type;if(o==="Constant"){let a=e.constant;this.handleDataTypeMatch(a,r,n,i)}else if(o==="EnumeratedValue"){let s=e;this.validateEnumeratedValue(s,r,n)}else if(o==="FunctionExpression"){let s=this.handleFunctionExpression(e,n,i,r)}else if(o==="VariableExpression"){let s=e,a=s.variable.ref,l="";if(l=this.judgeRefNodeType(a,l),l&&r){let[u,c]=this.getComparableTypes(l,r);u&&c&&u.toLowerCase()!==c.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${l}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:s,property:"variable"})}}}}handleFunctionExpression(e,r,n,i){let o=e,s=o.refFunctionName,a=o.params;if(s.refFunctionName){let l=s.refFunctionName.ref,u=o.params,c=[];if(l){if(Cn(l))this.validateStFunctionRule(l,n,i,r,c,u);else if(It(l)&&(i=this.judgeRefNodeType(l,i),i)){let f=ze(i);if(f&&u){let d=u.parameters;this.validateLibraryFunction(f,d,r)}}}}else if(s.Cache_type_name){let l=s.Cache_type_name,u=this.getCacheFunctionReturnType(l);if(this.validateReturnTypeCompatibility(u,i,r,o,"refFunctionName"),a){let c=a.parameters,f=ze(l);f&&this.validateLibraryFunction(f,c,r)}}}validateStFunctionRule(e,r,n,i,o,s){let a=e.variable_type,l=e.varInputs,u,c=[];if(l.forEach(f=>{f.items.forEach(m=>{let v=m.nextVariables;v.length>0&&v.forEach(N=>{c.push(N)})}),c.push(...f.items)}),a&&(u=or(a,u),r&&u&&n)){let[f,d]=this.getComparableTypes(u,n);f&&d&&f.toLowerCase()!==d.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${u}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${n}'`,{node:r,property:"prior"})}if(this.handleFunctionReqparam(c,i,o),s){let f=s.parameters;if(c.length!==f.length)i("error",`\u671F\u671B${c.length}\u4E2A\u8F93\u5165,\u4F46\u662F\u5B9E\u9645${f.length}\u4E2A`,{node:s,property:"parameters"});else for(let d=0;d<f.length;d++){let m=f[d],v=o[d],N=m.ParamValue;if(N){let S=N.prior;this.handlePrior(S,"","",v,i)}}}}validateLibraryFunction(e,r,n,i){if(i)this.validateFb(e,r,n,i);else{let[o,s]=e;o&&o.elementType==="functionBlock"&&(o=o,this.validateFb(o,r,n))}}validateFb(e,r,n,i){let o=this.judgeCacheNodeInputOutputVarDecl(":=",e),s=this.judgeCacheNodeInputOutputVarDecl("=>",e);r.forEach(a=>{let l=a.ParamName,u=a.ParamValue,c=a.InputOrOutputSign,f=!1,d=i?e==null?void 0:e.elementName:e==null?void 0:e.elementName.toUpperCase();c===":="&&l&&(o.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u5165\u53C2\u6570`,{node:a,property:"ParamName"}))),c==="=>"&&l&&(s.has(l)||(f=!0,n("error",`${l}\u4E0D\u662F${d}\u7684\u8F93\u51FA\u53C2\u6570`,{node:a,property:"ParamName"}))),f||u&&this.handleCacheTypeMatch(l,u,e,n,a)})}normalizeTypeAlias(e,r=new Set){var o;if(!e)return;let n=e.toUpperCase();if(n==="DT")return"DATE_AND_TIME";if(n==="TOD")return"TIME_OF_DAY";let i=ze(e);if(i){let[s]=i;if((s==null?void 0:s.elementType)==="alias"){let a=s,l=a.elementName.toUpperCase();return r.has(l)?l:(r.add(l),(o=this.normalizeTypeAlias(a.refName,r))!=null?o:n)}}return n}getComparableTypes(e,r){return[this.normalizeTypeAlias(e),this.normalizeTypeAlias(r)]}getCacheFunctionReturnType(e){let r=ze(e);if(!r)return;let[n]=r;if(!n||n.elementType!=="function")return;let i=n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"&&s.varName.toUpperCase()==="OUT")||n.varDecls.find(s=>s.varGlobalType==="VAR_OUTPUT"),o=this.normalizeTypeAlias(i==null?void 0:i.varType);if(!(!o||o==="ANY"||o.startsWith("ANY_")))return o}validateReturnTypeCompatibility(e,r,n,i,o){let s=this.normalizeTypeAlias(e),a=this.normalizeTypeAlias(r);s&&a&&s.toLowerCase()!==a.toLowerCase()&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${s}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:i,property:o})}judgeCacheNodeInputOutputVarDecl(e,r){let n=new Set;if(!e)return n;let i="",o=r==null?void 0:r.varDecls;return e===":="?i="VAR_INPUT":e==="=>"&&(i="VAR_OUTPUT"),o&&(o==null||o.forEach(s=>{s.varGlobalType===i&&n.add(s.varName)})),n}handleCacheTypeMatch(e,r,n,i,o){var l;if(!n)return;let s=n.varDecls.find(u=>u.varName===e),a=s==null?void 0:s.varType;if(Uu(r.prior)){let c=r.prior.constant;this.handleDataTypeMatch(c,a,i,r)}else if(zt(r.prior)){let u=r.prior,c=u.variable.ref,f="";if(f=this.judgeRefNodeType(c,f),f&&a){let[d,m]=this.getComparableTypes(f,a);d&&m&&d.toLowerCase()!==m.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${f}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:u,property:"variable"})}}else if(bn(r.prior)){let u=r.prior;this.validateEnumeratedValue(u,a,i)}else if(Ln(r)){let u=r.element,c=(l=r.previous)==null?void 0:l.prior,f="",d="";if(zt(c)){let v=c.variable.ref;if(It(v)&&(f=v.variables,d=this.judgeRefNodeType(v,d)),d){let N=ze(d.toUpperCase());if(N&&u){let[S,O]=N;if(S){let y=S.varDecls.find(g=>g.varName===(u==null?void 0:u.$refText));if(y){let g=y.varType;if(g&&a){let[I,M]=this.getComparableTypes(g,a);I&&M&&I.toLowerCase()!==M.toLowerCase()&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${g}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${a}'`,{node:o,property:"ParamName"})}}}}}}}else if(co(r.prior)){let u=r.prior;if(u.refFunctionName.refFunctionName){let c=u.refFunctionName.refFunctionName.ref;if(c){if(Cn(c)){let f=c.variable_type,d;d=kn(f,d,i),this.validateReturnTypeCompatibility(d,a,i,u,"refFunctionName")}}else{let f=u.refFunctionName.refFunctionName.$refText}}else if(u.refFunctionName.Cache_type_name){let c=u.refFunctionName.Cache_type_name,f=this.getCacheFunctionReturnType(c);this.validateReturnTypeCompatibility(f,a,i,u,"refFunctionName")}}}handleFunctionReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s=i.nextVariables,a;if(o&&(a=kn(o,a,r),n&&(n.push(a),s.length>0)))for(let l=0;l<s.length;l++)n.push(a)})}handleFunctionBlockMethodReqparam(e,r,n){e.forEach(i=>{let o=i.typeName,s;o&&(s=kn(o,s,r),n&&n.push(s))})}handleDataTypeMatch(e,r,n,i){if(!i)return;r=this.normalizeTypeAlias(r);let o=[];if(Ka(e)){let s=e.arrElements;for(let a=0;a<s.length;a++){let l=s[a];o=mo(l.constant),e=this.handleDataTypeMatchHint(o,r,i,n,e)}}else o=mo(e),e=this.handleDataTypeMatchHint(o,r,i,n,e);return e}handleDataTypeMatchHint(e,r,n,i,o){if(r=this.normalizeTypeAlias(r),e.length===1){if(r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()){let s=as(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=i_(o.toString(),l);Ln(n)?u!==""&&i("error",u,{node:n,property:"element"}):zt(n)?u!==""&&i("error",u,{node:n,property:"variable"}):Dn(n)&&u!==""&&i("error",u,{node:n,property:"prior"})}a||s&&(Ln(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"element"}):zt(n)?i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"variable"}):Dn(n)&&i("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:n,property:"prior"}))}}else{o=o;let[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&(Ln(n)?i(a,s,{node:n,property:"element"}):zt(n)?i(a,s,{node:n,property:"variable"}):Dn(n)&&i(a,s,{node:n,property:"prior"}))}return o}handleSingleVariableExpression(e,r){if(e){let n=e,i=n.left,o=n.right;this.handleConditionExpression(i,o,r)}}handleConditionExpression(e,r,n){if(e&&r){let i=e.$type,o=r.$type;if(i==="Expression"){let s="",a="",u=e.prior,c=u==null?void 0:u.$type;if(zt(u)){let d=u.variable.ref;It(d)&&(a=d.variables,s=this.judgeRefNodeType(d,s))}else bn(u)&&(s=this.validateEnumeratedValue(u,void 0,n));if(o==="Expression"){let d=r.prior;this.handlePrior(d,"","",s,n)}}}}handlePrior(e,r,n,i,o){if(zt(e)){let a=e.variable.ref;if(It(a)&&(r=a.variables,n=this.judgeRefNodeType(a,n)),i&&n){let[l,u]=this.getComparableTypes(n,i);u&&l&&u.toLowerCase()!==l.toLowerCase()&&(u.toLowerCase()==="string"&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}),as(l,u)&&o("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${n}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${i}'`,{node:e,property:"variable"}))}}else if(bn(e))n=this.validateEnumeratedValue(e,i,o);else if(Uu(e)){let s=e,a=s.constant,l=[];if(Ka(a)){let u=a.arrElements;for(let c=0;c<u.length;c++){let f=u[c];l=mo(f.constant),a=this.handleConditionExpressionHint(l,i,o,s)}}else l=mo(a),a=this.handleConditionExpressionHint(l,i,o,s)}return{rightVariableName:r,rightExpectType:n}}handleConditionExpressionHint(e,r,n,i){r=this.normalizeTypeAlias(r);let o=i.constant;if(e.length===1)r&&e&&(r==null?void 0:r.toLowerCase())!==e[0].toLowerCase()&&as(e[0],r)&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"constant"});else{o=o,!Cp(o.toString())&&!po(o.toString())&&n("error",`${o}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"constant"});let[a,l]=this.convertValue(o,r);a!==""&&a!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(l,a,{node:i,property:"constant"})}return o}convertValue(e,r){let n=["","error"],i={BOOL:{min:0,max:1},SINT:{min:-128,max:127},BYTE:{min:0,max:255},INT:{min:-32768,max:32767},UINT:{min:0,max:65535},DINT:{min:-2147483648,max:2147483647},UDINT:{min:0,max:4294967295},LINT:{min:-Math.pow(2,63),max:Math.pow(2,63)-1},WORD:{min:0,max:65535},DWORD:{min:0,max:4294967295},LWORD:{min:0,max:Math.pow(2,64)-1}},o;if(r=this.normalizeTypeAlias(r),r===void 0)return["\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!","error"];if(r===""||vt(r))return n;if(r.toUpperCase()==="REAL"||r.toUpperCase()==="LREAL"){if(typeof e=="string"&&!s_(e)){let s=parseInt(e,10);o=Object.keys(i).find(a=>s>=i[a].min&&s<=i[a].max&&a!==r),n=o?[`\u5EFA\u8BAE\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"warning"]:["No suitable conversion type found","warning"]}return n}if(i[r]){let{min:s,max:a}=i[r];if(typeof e=="number"){if(!(e>=s&&e<=a)){o=Object.keys(i).find(u=>e>=i[u].min&&e<=i[u].max&&u!==r);let l=as(o,r,e);o?l&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]):n=["No suitable conversion type found","error"]}return n}else if(po(e))r&&(r.toLowerCase()!=="REAL"||r.toLowerCase()!=="LREAL")&&(n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'LREAL'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"]);else{let u=parseInt(e,10);n=this.convertValue(u,r)}}else if(typeof e=="number"){if(o=Object.keys(i).find(s=>e>=i[s].min&&e<=i[s].max&&s!==r),o){if(r){let s=as(o,r,e);if(r.toUpperCase()==="STRING"){if((o==null?void 0:o.toLowerCase())!==r.toLowerCase())return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}else if(s)return n=[`\u4E0D\u80FD\u5C06\u7C7B\u578B'${o}'\u8F6C\u5316\u4E3A'${r}'\u7C7B\u578B`,"error"],n}}else n=["No suitable conversion type found","error"];return n}else if(typeof e=="string"){if(s_(e)){let a=po(e)?parseFloat(e):parseInt(e,10);n=this.convertValue(a,r)}return n}return n}saveProgramVarInfo(e,r){e.forEach(n=>{let i=n.definition,o=n.items,s=n.modifiers,a="";s?a=i.concat(s):a=i,this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",o,r),o.forEach(l=>{this.validateDeclarationVar(l,r)})})}handleFunctionOrBlockInfo(e,r){e.forEach(n=>{let i=n.varLocals,o=n.varInputs,s=n.varOutputs,a=[],l=[],u=[];if(i.forEach(c=>{a.push(...c.items)}),o.forEach(c=>{l.push(...c.items)}),s.forEach(c=>{u.push(...c.items)}),this.handleEachVarTypeVariable(a,r),this.handleEachVarTypeVariable(l,r),this.handleEachVarTypeVariable(u,r),!ei(n)){if(Cn(n)){let c=n.variable_type,f=n.varInputs,d=[];f.forEach(v=>{d.push(v.items)}),this.handleFunctionReqparam(d,r);let m;m=kn(c,m,r)}}})}handleDataTypeVarInfo(e,r,n,i,o){let s=e,a=i,l=n,u=r;s.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let m=d.typeName,v;m&&(m.$type==="Native_Type_Name"?v=kn(m,v,o):m.$type==="Array_liters"&&(v=m.dataType))})}}),a.forEach(c=>{if(c){let f=c.items;this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",f,o),f==null||f.forEach(d=>{this.validateDeclarationVar(d,o);let m=d.typeName,v;m&&(m.$type==="Native_Type_Name"?v=kn(m,v,o):m.$type==="Array_liters"&&(v=m.dataType))})}}),l.forEach(c=>{let f=c.enum}),u.forEach(c=>{let f="";f=kn(c.refName,f,o);let d=c.initialValue;if(d){let m=mo(d);this.handleVarDeclHint(m,f,o,c,d)}})}handleEachVarTypeVariable(e,r){e&&this.judgeWhetherHasDuplicateName("\u5C40\u90E8\u53D8\u91CF",e,r),e==null||e.forEach(n=>{this.validateDeclarationVar(n,r);let i=n.typeName,o;i&&(i.$type==="Native_Type_Name"?o=kn(i,o,r):i.$type==="Array_liters"&&(o=i.dataType))})}validateDeclarationVar(e,r){let n=e.typeName,i;if(n){if(n.$type==="Native_Type_Name")i=kn(n,i,r);else if(n.$type==="Array_liters"){let a=n,l=a.dataType;i=or(l,i),a.arrayElemets.forEach(c=>{let f=c.left,d=c.right,m=parseInt(f,10),v=parseInt(d,10);m&&v&&m>v&&r("error","\u6570\u7EC4\u5DE6\u4FA7\u503C\u4E0D\u80FD\u5927\u4E8E\u53F3\u4FA7\u503C!",{node:e,property:"typeName"})})}}let o=e.initialValue,s=[];if(o){let a=o.constant;if(Ka(a)){let l=a.arrElements;for(let u=0;u<l.length;u++){let c=l[u];s=mo(c.constant),this.handleVarDeclHint(s,i,r,e,c.constant)}}else s=mo(o),this.handleVarDeclHint(s,i,r,e,o)}}handleVarDeclHint(e,r,n,i,o){if(typeof r=="string"&&(r=this.normalizeTypeAlias(r)),e.length===1){if(r!==void 0&&!vt(r)&&r&&e[0]&&r.toLowerCase()!==e[0].toLowerCase()){let s=as(e[0],r),[a,l]=this.checkTimeType(r);if(a&&e[0].toLowerCase()==="string"){let u=Uu(o)?o.constant.toString():o.toString(),c=i_(u,l);c!==""&&n("error",c,{node:i,property:"initialValue"})}a||s&&n("error",`\u4E0D\u80FD\u5C06\u7C7B\u578B'${e[0]}'\u8F6C\u5316\u4E3A\u7C7B\u578B'${r}'`,{node:i,property:"initialValue"})}}else if(Uu(o)){let s=o.constant;this.handleInnerVarDeclHint(s,r,n,i),!Cp(s)&&!po(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:o,property:"constant"})}else{let s=o;this.handleInnerVarDeclHint(s,r,n,i),!Cp(s)&&!po(s)&&n("error",`${s}\u4E0D\u662F\u4E00\u4E2A\u6574\u6570`,{node:i,property:"initialValue"})}}handleInnerVarDeclHint(e,r,n,i){if(po(e)){let[o,s]=this.convertValue(e,r);o!==""&&o!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(s,o,{node:i,property:"initialValue"})}else{let o=parseInt(e,10),[s,a]=this.convertValue(o,r);s!==""&&s!=="\u53D8\u91CF\u7C7B\u578B\u4E3Aundefined!"&&n(a,s,{node:i,property:"initialValue"})}}checkTimeType(e){let r=["TIME","DATE","DATE_AND_TIME","TIME_OF_DAY"],n=e.toUpperCase();return r.includes(n)?[!0,n]:[!1,"unmatched time type"]}checkIfWhitespace(e,r){if(e){let n=vr.getDocument(e).parseResult.value.$cstNode.fullText,i=Ct.findNodeForKeyword(e.$cstNode,"THEN");if(i){let o=i.offset;n.charAt(o-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"ifCondition",index:0})}}}checkWhitespace(e,r){if(e){let n=vr.getDocument(e).parseResult.value.$cstNode.fullText,i=Ct.findNodesForKeyword(e.$cstNode,"THEN");for(let o=0;o<i.length;o++){if(o===0)continue;let a=i[o].offset;n.charAt(a-1)!==" "&&r("warning","THEN\u524D\u9762\u9700\u8981\u6709\u7A7A\u683C",{node:e,property:"elsifConditions",index:o-1})}}}};var Kp=class extends ts{constructor(e){super(e)}serialize(e,r){return super.serialize(e,r)}deserialize(e,r={}){let i=JSON.parse(e),o=xi(i);return sb(o)}};var l_=class extends rs{register(e){super.register(e)}getServices(e){return super.getServices(e)}},Mde=Symbol("StatemachineSharedServices"),GG={ServiceRegistry:()=>new l_,logger:{ClientLogger:t=>new Bp(t)}},Fde=Symbol("StatemachineServices");function jG(t){return{shared:()=>t.shared,parser:{},validation:{StValidator:()=>new Hp},lsp:{Formatter:()=>new Vp,CompletionProvider:e=>new $p(e),SignatureHelp:()=>new Fp,DocumentHighlightProvider:e=>new Pp(e)},references:{ScopeProvider:e=>new qp(e),ScopeComputation:e=>new Wp(e),Linker:e=>new Gp(e),References:e=>new Mp(e)},serializer:{JsonSerializer:e=>new Kp(e)}}}function _b(t){let e=is(uC(t),lb,GG),r=is(lC({shared:e}),ub,jG({shared:e}));return e.ServiceRegistry.register(r),yb(r),{shared:e,st:r}}var qG=(0,Ja.createConnection)(new Ja.IPCMessageReader(process),new Ja.IPCMessageWriter(process)),{shared:Bu,st:Dp}=_b({connection:qG,...fC});oC(Bu);0&&(module.exports={shared,st});
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
