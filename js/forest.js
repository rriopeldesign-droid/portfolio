var jl=0,So=1,tc=2;var Is=1,ec=2,Qi=3,ui=0,Ke=1,mn=2,bi=0,ji=1,Dn=2,bo=3,wo=4,nc=5;var wi=100,ic=101,sc=102,rc=103,ac=104,oc=200,lc=201,cc=202,hc=203,To=204,Ao=205,uc=206,dc=207,fc=208,pc=209,mc=210,gc=211,_c=212,xc=213,vc=214,_r=0,xr=1,vr=2,Xi=3,yr=4,Mr=5,Sr=6,br=7,Eo=0,yc=1,Mc=2,Nn=0,Co=1,Ro=2,Po=3,Io=4,Lo=5,Do=6,No=7;var Uo=300,Ti=301,ts=302,$r=303,Kr=304,wr=1e3,Pn=1001,Tr=1002,Ie=1003,Sc=1004;var Ls=1005;var Oe=1006,Qr=1007;var wn=1008;var ln=1009,Fo=1010,Oo=1011,es=1012,jr=1013,Tn=1014,gn=1015,An=1016,ta=1017,ea=1018,Ai=1020,Bo=35902,zo=35899,ko=1021,Go=1022,cn=1023,qn=1026,Jn=1027,na=1028,ia=1029,di=1030,sa=1031;var ra=1033,Ds=33776,Ns=33777,Us=33778,Fs=33779,aa=35840,oa=35841,la=35842,ca=35843,ha=36196,ua=37492,da=37496,fa=37488,pa=37489,Os=37490,ma=37491,ga=37808,_a=37809,xa=37810,va=37811,ya=37812,Ma=37813,Sa=37814,ba=37815,wa=37816,Ta=37817,Aa=37818,Ea=37819,Ca=37820,Ra=37821,Pa=36492,Ia=36494,La=36495,Da=36283,Na=36284,Bs=36285,Ua=36286;var ms=2300,Ar=2301,mr=2302,mo=2303,go=2400,_o=2401,xo=2402;var bc=3200;var Vo=0,wc=1,$n="",sn="srgb",yi="srgb-linear",gs="linear",ae="srgb";var gr=7680;var Tc=519,Ac=512,Ec=513,Cc=514,Ho=515,Rc=516,Pc=517,Wo=518,Xo=519,Ic=35044;var qo="300 es",dn=2e3,_s=2001;function su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){let i=xs("canvas");return i.style.display="block",i}var Cl={},qi=null;function Yo(...i){let t="THREE."+i.shift();qi?qi("log",t,...i):console.log(t,...i)}function Dc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=Dc(i);let t="THREE."+i.shift();if(qi)qi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=Dc(i);let t="THREE."+i.shift();if(qi)qi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ps(...i){let t=i.join(" ");t in Cl||(Cl[t]=!0,Ft(...i))}function Nc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uc={[_r]:_r,[vr]:Sr,[yr]:yr,[Xi]:Mr,[xr]:xr,[Sr]:vr,[br]:br,[Mr]:Xi},In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ya=Math.PI/180,Er=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function au(i,t){return(i%t+t)%t}function Za(i,t,e){return(1-e)*i+e*t}function Fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ou(i,t){if(t.constructor===Float32Array)return i;let e=Zo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function lu(i,t){if(t.constructor===Float32Array)return i;let e=Zo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var jo=class jo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jo.prototype.isVector2=!0;var ee=jo,fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==m){let p=c*u+l*f+h*m+d*x;p<0&&(u=-u,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let M=Math.acos(p),E=Math.sin(M);g=Math.sin(g*M)/E,o=Math.sin(o*M)/E,c=c*g+u*o,l=l*g+f*o,h=h*g+m*o,d=d*g+x*o}else{c=c*g+u*o,l=l*g+f*o,h=h*g+m*o,d=d*g+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-o*f,t[e+2]=l*m+h*f+o*u-c*d,t[e+3]=h*m-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tl=class tl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tl.prototype.isVector3=!0;var z=tl,Ja=new z,Rl=new fn,el=class el{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],M=s[1],E=s[4],S=s[7],C=s[2],A=s[5],_=s[8];return r[0]=a*x+o*M+c*C,r[3]=a*p+o*E+c*A,r[6]=a*g+o*S+c*_,r[1]=l*x+h*M+d*C,r[4]=l*p+h*E+d*A,r[7]=l*g+h*S+d*_,r[2]=u*x+f*M+m*C,r[5]=u*p+f*E+m*A,r[8]=u*g+f*S+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($a.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($a.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};el.prototype.isMatrix3=!0;var kt=el,$a=new kt,Pl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){let i={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yi]:{primaries:t,whitePoint:n,transfer:gs,toXYZ:Pl,fromXYZ:Il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Pl,fromXYZ:Il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var qt=cu();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pi,Cr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=xs("canvas")),Pi.width=t.width,Pi.height=t.height;let s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,Yi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ka(s[a].image)):r.push(Ka(s[a]))}else r=Ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var uu=0,Qa=new z,Qe=class i extends In{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Oe,a=wn,o=cn,c=ln,l=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=zs(),this.name="",this.source=new Yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Uo;Qe.DEFAULT_ANISOTROPY=1;var nl=class nl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,S=(f+1)/2,C=(g+1)/2,A=(h+u)/4,_=(d+x)/4,b=(m+p)/4;return E>S&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=_/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nl.prototype.isVector4=!0;var me=nl,Rr=class extends In{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vs=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Jr=class Jr{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,m,x,p)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-x*l,e[9]=-o*c,e[2]=x-u*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(du,t,fu)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),jn.crossVectors(n,en),jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),jn.crossVectors(n,en)),jn.normalize(),qs.crossVectors(en,jn),s[0]=jn.x,s[4]=qs.x,s[8]=en.x,s[1]=jn.y,s[5]=qs.y,s[9]=en.y,s[2]=jn.z,s[6]=qs.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],M=n[3],E=n[7],S=n[11],C=n[15],A=s[0],_=s[4],b=s[8],F=s[12],P=s[1],U=s[5],k=s[9],L=s[13],T=s[2],O=s[6],H=s[10],B=s[14],nt=s[3],X=s[7],Q=s[11],tt=s[15];return r[0]=a*A+o*P+c*T+l*nt,r[4]=a*_+o*U+c*O+l*X,r[8]=a*b+o*k+c*H+l*Q,r[12]=a*F+o*L+c*B+l*tt,r[1]=h*A+d*P+u*T+f*nt,r[5]=h*_+d*U+u*O+f*X,r[9]=h*b+d*k+u*H+f*Q,r[13]=h*F+d*L+u*B+f*tt,r[2]=m*A+x*P+p*T+g*nt,r[6]=m*_+x*U+p*O+g*X,r[10]=m*b+x*k+p*H+g*Q,r[14]=m*F+x*L+p*B+g*tt,r[3]=M*A+E*P+S*T+C*nt,r[7]=M*_+E*U+S*O+C*X,r[11]=M*b+E*k+S*H+C*Q,r[15]=M*F+E*L+S*B+C*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],M=c*f-l*u,E=o*f-l*d,S=o*u-c*d,C=a*f-l*h,A=a*u-c*h,_=a*d-o*h;return e*(x*M-p*E+g*S)-n*(m*M-p*C+g*A)+s*(m*E-x*C+g*_)-r*(m*S-x*A+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=e*o-n*a,E=e*c-s*a,S=e*l-r*a,C=n*c-s*o,A=n*l-r*o,_=s*l-r*c,b=h*x-d*m,F=h*p-u*m,P=h*g-f*m,U=d*p-u*x,k=d*g-f*x,L=u*g-f*p,T=M*L-E*k+S*U+C*P-A*F+_*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/T;return t[0]=(o*L-c*k+l*U)*O,t[1]=(s*k-n*L-r*U)*O,t[2]=(x*_-p*A+g*C)*O,t[3]=(u*A-d*_-f*C)*O,t[4]=(c*P-a*L-l*F)*O,t[5]=(e*L-s*P+r*F)*O,t[6]=(p*S-m*_-g*E)*O,t[7]=(h*_-u*S+f*E)*O,t[8]=(a*k-o*P+l*b)*O,t[9]=(n*P-e*k-r*b)*O,t[10]=(m*A-x*S+g*M)*O,t[11]=(d*S-h*A-f*M)*O,t[12]=(o*F-a*U-c*b)*O,t[13]=(e*U-n*F+s*b)*O,t[14]=(x*E-m*C-p*M)*O,t[15]=(h*C-d*E+u*M)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,m=r*d,x=a*h,p=a*d,g=o*d,M=c*l,E=c*h,S=c*d,C=n.x,A=n.y,_=n.z;return s[0]=(1-(x+g))*C,s[1]=(f+S)*C,s[2]=(m-E)*C,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(u+g))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(m+E)*_,s[9]=(p-M)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),c=Ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let l=1/a,h=1/o,d=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=dn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===dn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_s)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===dn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===_s)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Jr.prototype.isMatrix4=!0;var le=Jr,Ii=new z,vn=new le,du=new z(0,0,0),fu=new z(1,1,1),jn=new z,qs=new z,en=new z,Ll=new le,Dl=new fn,ri=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pu=0,Nl=new z,Li=new fn,kn=new le,Ys=new z,ls=new z,mu=new z,gu=new fn,Ul=new z(1,0,0),Fl=new z(0,1,0),Ol=new z(0,0,1),Bl={type:"added"},_u={type:"removed"},Di={type:"childadded",child:null},ja={type:"childremoved",child:null},an=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new ri,n=new fn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ls,Ys,this.up):kn.lookAt(Ys,ls,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(kn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Di.child=t,this.dispatchEvent(Di),Di.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_u),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new z(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},Zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function to(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=au(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=to(a,r,t+1/3),this.g=to(a,r,t),this.b=to(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return qt.workingToColorSpace(Ve.copy(this),t),Math.round($t(Ve.r*255,0,255))*65536+Math.round($t(Ve.g*255,0,255))*256+Math.round($t(Ve.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=sn){qt.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Zs);let n=Za(ti.h,Zs.h,e),s=Za(ti.s,Zs.s,e),r=Za(ti.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Qt;Qt.NAMES=Oc;var Ms=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new z,Gn=new z,eo=new z,Vn=new z,Ni=new z,Ui=new z,zl=new z,no=new z,io=new z,so=new z,ro=new me,ao=new me,oo=new me,si=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Gn.subVectors(n,e),eo.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Gn),c=yn.dot(eo),l=Gn.dot(Gn),h=Gn.dot(eo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(t,e),ao.fromBufferAttribute(t,n),oo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Gn.subVectors(t,e),yn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ni.subVectors(s,n),Ui.subVectors(r,n),no.subVectors(t,n);let c=Ni.dot(no),l=Ui.dot(no);if(c<=0&&l<=0)return e.copy(n);io.subVectors(t,s);let h=Ni.dot(io),d=Ui.dot(io);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Ni,a);so.subVectors(t,r);let f=Ni.dot(so),m=Ui.dot(so);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Ui,o);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return zl.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(zl,o);let g=1/(p+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ln=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),$s.subVectors(this.max,cs),Fi.subVectors(t.a,cs),Oi.subVectors(t.b,cs),Bi.subVectors(t.c,cs),ei.subVectors(Oi,Fi),ni.subVectors(Bi,Oi),mi.subVectors(Fi,Bi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!lo(e,Fi,Oi,Bi,$s)||(e=[1,0,0,0,1,0,0,0,1],!lo(e,Fi,Oi,Bi,$s))?!1:(Ks.crossVectors(ei,ni),e=[Ks.x,Ks.y,Ks.z],lo(e,Fi,Oi,Bi,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,Js=new Ln,Fi=new z,Oi=new z,Bi=new z,ei=new z,ni=new z,mi=new z,cs=new z,$s=new z,Ks=new z,gi=new z;function lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var we=new z,Qs=new ee,vu=0,bn=class extends In{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=gn,this.version=0,this._normalizationScale=t!==void 0?Zo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ou(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):lu(t,this.array)}};var Ss=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Fe=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},yu=new Ln,hs=new z,co=new z,Yn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);let e=hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(co)),this.expandByPoint(hs.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mu=0,un=new le,ho=new an,zi=new z,nn=new Ln,us=new Ln,Pe=new z,pn=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?bs:Ss)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(nn.min,us.min),nn.expandByPoint(Pe),Pe.addVectors(nn.max,us.max),nn.expandByPoint(Pe)):(nn.expandByPoint(us.min),nn.expandByPoint(us.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(t,l),Pe.add(zi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new z,c[F]=new z;let h=new z,d=new z,u=new z,f=new ee,m=new ee,x=new ee,p=new z,g=new z;function M(F,P,U){l[F]=l[P]=l[U]=1,h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,P),x.fromBufferAttribute(r,U),d.sub(h),u.sub(h),m.sub(f),x.sub(f);let k=1/(m.x*x.y-x.x*m.y);isFinite(k)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(k),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(k),o[F].add(p),o[P].add(p),o[U].add(p),c[F].add(g),c[P].add(g),c[U].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,P=E.length;F<P;++F){let U=E[F],k=U.start,L=U.count;for(let T=k,O=k+L;T<O;T+=3)M(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let S=new z,C=new z,A=new z,_=new z;function b(F){A.fromBufferAttribute(s,F),_.copy(A);let P=o[F];S.copy(P),S.sub(A.multiplyScalar(A.dot(P))).normalize(),C.crossVectors(_,P);let k=C.dot(c[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,k)}for(let F=0,P=n.count;F<P;++F)l[F]&&b(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,d=new z;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new bn(u,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uo=new z,Su=new z,bu=new kt,Sn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=uo.subVectors(n,e).cross(Su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(uo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bu.getNormalMatrix(t),s=this.coplanarPoint(uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wu=0,ai=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ji,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Wn=new z,fo=new z,js=new z,tr=new z,ws=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fo.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),tr.copy(this.origin).sub(fo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=tr.dot(this.direction),c=-tr.dot(js),l=tr.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fo).addScaledVector(js,u),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,M=n.y-a.y,E=n.z-a.z,S=Math.abs(c),C=Math.abs(l),A=Math.abs(h),_,b,F,P,U,k,L,T,O,H,B,nt;if(S>=C&&S>=A?(F=c,k=d,O=m,nt=g,c>=0?(_=l,b=h,P=u,U=f,L=x,T=p,H=M,B=E):(_=h,b=l,P=f,U=u,L=p,T=x,H=E,B=M)):C>=A?(F=l,k=u,O=x,nt=M,l>=0?(_=h,b=c,P=f,U=d,L=p,T=m,H=E,B=g):(_=c,b=h,P=d,U=f,L=m,T=p,H=g,B=E)):(F=h,k=f,O=p,nt=E,h>=0?(_=c,b=l,P=d,U=u,L=m,T=x,H=g,B=M):(_=l,b=c,P=u,U=d,L=x,T=m,H=M,B=g)),F===0)return null;let X=_/F,Q=b/F,tt=1/F,ht=P-X*k,wt=U-Q*k,Y=L-X*O,xt=T-Q*O,bt=H-X*nt,Lt=B-Q*nt,yt=bt*xt-Lt*Y,Gt=ht*Lt-wt*bt,ge=Y*wt-xt*ht;if(s){if(yt<0||Gt<0||ge<0)return null}else if((yt<0||Gt<0||ge<0)&&(yt>0||Gt>0||ge>0))return null;let Nt=yt+Gt+ge;if(Nt===0)return null;let ne=tt*(yt*k+Gt*O+ge*nt);return(Nt>0?ne<0:ne>0)?null:this.at(ne/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ir=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kl=new le,_i=new ws,er=new Yn,Gl=new z,nr=new z,ir=new z,sr=new z,po=new z,rr=new z,Vl=new z,ar=new z,Te=class extends an{constructor(t=new pn,e=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(po.fromBufferAttribute(d,t),a?rr.addScaledVector(po,h):rr.addScaledVector(po.sub(e),h))}e.add(rr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(er.containsPoint(_i.origin)===!1&&(_i.intersectSphere(er,Gl)===null||_i.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),_i.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,C=E;S<C;S+=3){let A=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=or(this,g,t,n,l,h,d,A,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let M=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);s=or(this,a,t,n,l,h,d,M,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,C=E;S<C;S+=3){let A=S,_=S+1,b=S+2;s=or(this,g,t,n,l,h,d,A,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let M=p,E=p+1,S=p+2;s=or(this,a,t,n,l,h,d,M,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Tu(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ui,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);let h=Tu(i,t,e,n,nr,ir,sr,Vl);if(h){let d=new z;si.getBarycoord(Vl,nr,ir,sr,d),s&&(h.uv=si.getInterpolatedAttribute(s,o,c,l,d,new ee)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,c,l,d,new ee)),a&&(h.normal=si.getInterpolatedAttribute(a,o,c,l,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new z,materialIndex:0};si.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=d}return h}var Mi=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ie,h=Ie,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class extends bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ki=new le,Hl=new le,lr=[],Wl=new Ln,Au=new le,ds=new Te,fs=new Yn,Ts=class extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Au)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),Wl.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(Wl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),fs.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),Hl.multiplyMatrices(n,ki),ds.matrixWorld=Hl,ds.raycast(t,lr);for(let a=0,o=lr.length;a<o;a++){let c=lr[a];c.instanceId=r,c.object=this,e.push(c)}lr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(s*this.count),s,this.count,na,gn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new Yn,Eu=new ee(.5,.5),cr=new z,Si=class{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],M=r[12],E=r[13],S=r[14],C=r[15];if(s[0].setComponents(l-a,f-h,g-m,C-M).normalize(),s[1].setComponents(l+a,f+h,g+m,C+M).normalize(),s[2].setComponents(l+o,f+d,g+x,C+E).normalize(),s[3].setComponents(l-o,f-d,g-x,C-E).normalize(),n)s[4].setComponents(c,u,p,S).normalize(),s[5].setComponents(l-c,f-u,g-p,C-S).normalize();else if(s[4].setComponents(l-c,f-u,g-p,C-S).normalize(),e===dn)s[5].setComponents(l+c,f+u,g+p,C+S).normalize();else if(e===_s)s[5].setComponents(c,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=Eu.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new le,Lr=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Dr=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ql=new le,vo=new ws,hr=new Yn,ur=new z,Ji=class extends an{constructor(t=new pn,e=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;ql.copy(s).invert(),vo.copy(t.ray).applyMatrix4(ql);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=u,x=f;m<x;m++){let p=l.getX(m);ur.fromBufferAttribute(d,p),Yl(ur,p,c,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,x=f;m<x;m++)ur.fromBufferAttribute(d,m),Yl(ur,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yl(i,t,e,n,s,r,a){let o=vo.distanceSqToPoint(i);if(o<e){let c=new z;vo.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var As=class extends Qe{constructor(t=[],e=Ti,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Zn=class extends Qe{constructor(t,e,n=Tn,s,r,a,o=Ie,c=Ie,l,h=qn,d=1){if(h!==qn&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Es=class extends Zn{constructor(t,e=Tn,n=Ti,s,r,a=Ie,o=Ie,c,l=qn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$i=class i extends pn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function m(x,p,g,M,E,S,C,A,_,b,F){let P=S/_,U=C/b,k=S/2,L=C/2,T=A/2,O=_+1,H=b+1,B=0,nt=0,X=new z;for(let Q=0;Q<H;Q++){let tt=Q*U-L;for(let ht=0;ht<O;ht++){let wt=ht*P-k;X[x]=wt*M,X[p]=tt*E,X[g]=T,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[g]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(ht/_),d.push(1-Q/b),B+=1}}for(let Q=0;Q<b;Q++)for(let tt=0;tt<_;tt++){let ht=u+tt+O*Q,wt=u+tt+O*(Q+1),Y=u+(tt+1)+O*(Q+1),xt=u+(tt+1)+O*Q;c.push(ht,wt,xt),c.push(wt,Y,xt),nt+=6}o.addGroup(f,nt,F),f+=nt,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var je=class i extends pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let M=g*u-a;for(let E=0;E<l;E++){let S=E*d-r;m.push(S,-M,0),x.push(0,0,1),p.push(E/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<o;M++){let E=M+l*g,S=M+l*(g+1),C=M+1+l*(g+1),A=M+1+l*g;f.push(E,S,A),f.push(S,C,A)}this.setIndex(f),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Zl(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Zl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function Zl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Bc={clone:Ei,merge:He},Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nr=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ur=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fr=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Or=class extends li{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:r=t,o=2*e-n;break;case xo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _o:a=t,c=2*n-e;break;case xo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,M=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*x+.5*m,S=f*p-f*x;for(let C=0;C!==o;++C)r[C]=g*a[h+C]+M*a[l+C]+E*a[c+C]+S*a[d+C];return r}},Br=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},zr=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kr=class extends li{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),x=1-m;for(let p=0;p!==o;++p)r[p]=a[l+p]*x+a[c+p]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[l+m],p=a[c+m],g=f*u+m*2,M=d[g],E=d[g+1],S=t*u+m*2,C=h[S],A=h[S+1],_=Lu(n,e,M,C,s);r[m]=zc(_,x,E,A,p)}return r}};function zc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Iu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=zc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Iu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gi(e,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gi(t.times,Array),values:Gi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dr(t.settings)&&(n.settings={inTangents:Gi(t.settings.inTangents,Array),outTangents:Gi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Br(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new kr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ms:e=this.InterpolantFactoryMethodDiscrete;break;case Ar:e=this.InterpolantFactoryMethodLinear;break;case mr:e=this.InterpolantFactoryMethodSmooth;break;case mo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return mr;case this.InterpolantFactoryMethodBezier:return mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;dr(this.settings)&&(Jl(this.settings.inTangents,t),Jl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dr(this.settings)&&($l(this.settings.inTangents,t),$l(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ru(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function $l(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Ar;var ci=class extends on{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=ms;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Gr.prototype.ValueTypeName="color";var Vr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Vr.prototype.ValueTypeName="number";var Hr=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Rs=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Hr(this.times,this.values,this.getValueSize(),t)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends on{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=ms;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Wr.prototype.ValueTypeName="vector";var Xr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kc=new Xr,qr=class{constructor(t){this.manager=t!==void 0?t:kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=new z,pr=new fn,Rn=new z,Ps=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fr,pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fr,pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new z,Kl=new ee,Ql=new ee,$e=class extends Ps{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Ql),e.subVectors(Ql,Kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yr=class extends Ps{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Vi=-90,Hi=1,Ki=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Vi,Hi,t,e);s.layers=this.layers,this.add(s);let r=new $e(Vi,Hi,t,e);r.layers=this.layers,this.add(r);let a=new $e(Vi,Hi,t,e);a.layers=this.layers,this.add(a);let o=new $e(Vi,Hi,t,e);o.layers=this.layers,this.add(o);let c=new $e(Vi,Hi,t,e);c.layers=this.layers,this.add(c);let l=new $e(Vi,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Zr=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var $o="\\[\\]\\.:\\/",Du=new RegExp("["+$o+"]","g"),Ko="[^"+$o+"]",Nu="[^"+$o.replace("\\.","")+"]",Uu=/((?:WC+[\/:])*)/.source.replace("WC",Ko),Fu=/(WCOD+)?/.source.replace("WCOD",Nu),Ou=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),Bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),zu=new RegExp("^"+Uu+Fu+Ou+Bu+"$"),ku=["material","materials","bones","map"],yo=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Du,"")}static parseTrackName(t){let e=zu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ku.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=yo;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O0=new Float32Array(1);var il=class il{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};il.prototype.isMatrix2=!0;var Mo=il;function Qo(i,t,e,n){let s=Gu(n);switch(e){case ko:return i*t;case na:return i*t/s.components*s.byteLength;case ia:return i*t/s.components*s.byteLength;case di:return i*t*2/s.components*s.byteLength;case sa:return i*t*2/s.components*s.byteLength;case Go:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case ra:return i*t*4/s.components*s.byteLength;case Ds:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Us:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(t,8)/4;case aa:case la:return Math.max(i,8)*Math.max(t,8)/2;case ha:case ua:case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case da:case Os:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pa:case Ia:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Da:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bs:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gu(i){switch(i){case ln:case Fo:return{byteLength:1,components:1};case es:case Oo:case An:return{byteLength:2,components:1};case ta:case ea:return{byteLength:2,components:4};case Tn:case jr:case gn:return{byteLength:4,components:1};case Bo:case zo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function lh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:Ju,aomap_fragment:$u,aomap_pars_fragment:Ku,batching_pars_vertex:Qu,batching_vertex:ju,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:xd,colorspace_fragment:vd,colorspace_pars_fragment:yd,envmap_fragment:Md,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Ud,envmap_vertex:Td,fog_vertex:Ad,fog_pars_vertex:Ed,fog_fragment:Cd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Id,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Nd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:zd,lights_physical_fragment:kd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Vd,lights_fragment_maps:Hd,lights_fragment_end:Wd,lightprobes_pars_fragment:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:Jd,map_fragment:$d,map_pars_fragment:Kd,map_particle_fragment:Qd,map_particle_pars_fragment:jd,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:xf,packing:vf,premultiplied_alpha_fragment:yf,project_vertex:Mf,dithering_fragment:Sf,dithering_pars_fragment:bf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Ef,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:Pf,skinning_pars_vertex:If,skinning_vertex:Lf,skinnormal_vertex:Df,specularmap_fragment:Nf,specularmap_pars_fragment:Uf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Gf,uv_vertex:Vf,worldpos_vertex:Hf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Zf,cube_frag:Jf,depth_vert:$f,depth_frag:Kf,distance_vert:Qf,distance_frag:jf,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:xp,points_frag:vp,shadow_vert:yp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:bp},Mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Fn={basic:{uniforms:He([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:He([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:He([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:He([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:He([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:He([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:He([Mt.points,Mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:He([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:He([Mt.common,Mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:He([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:He([Mt.sprite,Mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:He([Mt.common,Mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:He([Mt.lights,Mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Fn.physical={uniforms:He([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Fa={r:0,b:0,g:0},wp=new le,ch=new kt;ch.set(-1,0,0,0,1,0,0,0,1);function Tp(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let S=M.backgroundBlurriness>0;E=t.get(E,S)}return E}function m(M){let E=!1,S=f(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,E){let S=f(E);S&&S.isCubeTexture?(l===void 0&&(l=new Te(new $i(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Ei(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ch),l.material.toneMapped=qt.getTransfer(S.colorSpace)!==ae,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Te(new je(2,2),new Se({name:"BackgroundMaterial",uniforms:Ei(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=qt.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,E){M.getRGB(Fa,Jo(i)),e.buffers.color.setClear(Fa.r,Fa.g,Fa.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Ap(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,k,L,T,O){let H=!1,B=d(U,T,L,k);r!==B&&(r=B,l(r.object)),H=f(U,T,L,O),H&&m(U,T,L,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(U,k,L,T),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,k,L,T){let O=T.wireframe===!0,H=n[k.id];H===void 0&&(H={},n[k.id]=H);let B=U.isInstancedMesh===!0?U.id:0,nt=H[B];nt===void 0&&(nt={},H[B]=nt);let X=nt[L.id];X===void 0&&(X={},nt[L.id]=X);let Q=X[O];return Q===void 0&&(Q=u(c()),X[O]=Q),Q}function u(U){let k=[],L=[],T=[];for(let O=0;O<e;O++)k[O]=0,L[O]=0,T[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:T,object:U,attributes:{},index:null}}function f(U,k,L,T){let O=r.attributes,H=k.attributes,B=0,nt=L.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=O[X],ht=H[X];if(ht===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(ht=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(ht=U.instanceColor)),tt===void 0||tt.attribute!==ht||ht&&tt.data!==ht.data)return!0;B++}return r.attributesNum!==B||r.index!==T}function m(U,k,L,T){let O={},H=k.attributes,B=0,nt=L.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=H[X];tt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let ht={};ht.attribute=tt,tt&&tt.data&&(ht.data=tt.data),O[X]=ht,B++}r.attributes=O,r.attributesNum=B,r.index=T}function x(){let U=r.newAttributes;for(let k=0,L=U.length;k<L;k++)U[k]=0}function p(U){g(U,0)}function g(U,k){let L=r.newAttributes,T=r.enabledAttributes,O=r.attributeDivisors;L[U]=1,T[U]===0&&(i.enableVertexAttribArray(U),T[U]=1),O[U]!==k&&(i.vertexAttribDivisor(U,k),O[U]=k)}function M(){let U=r.newAttributes,k=r.enabledAttributes;for(let L=0,T=k.length;L<T;L++)k[L]!==U[L]&&(i.disableVertexAttribArray(L),k[L]=0)}function E(U,k,L,T,O,H,B){B===!0?i.vertexAttribIPointer(U,k,L,O,H):i.vertexAttribPointer(U,k,L,T,O,H)}function S(U,k,L,T){x();let O=T.attributes,H=L.getAttributes(),B=k.defaultAttributeValues;for(let nt in H){let X=H[nt];if(X.location>=0){let Q=O[nt];if(Q===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let tt=Q.normalized,ht=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;let Y=wt.buffer,xt=wt.type,bt=wt.bytesPerElement,Lt=xt===i.INT||xt===i.UNSIGNED_INT||Q.gpuType===jr;if(Q.isInterleavedBufferAttribute){let yt=Q.data,Gt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,ge=Q.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Nt=0;Nt<X.locationSize;Nt++)g(X.location+Nt,yt.meshPerAttribute);U.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)p(X.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Nt=0;Nt<X.locationSize;Nt++)E(X.location+Nt,ht/X.locationSize,xt,tt,Gt*bt,(ge+ht/X.locationSize*Nt)*bt,Lt)}else{if(Q.isInstancedBufferAttribute){for(let yt=0;yt<X.locationSize;yt++)g(X.location+yt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let yt=0;yt<X.locationSize;yt++)p(X.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let yt=0;yt<X.locationSize;yt++)E(X.location+yt,ht/X.locationSize,xt,tt,ht*bt,ht/X.locationSize*yt*bt,Lt)}}else if(B!==void 0){let tt=B[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}M()}function C(){F();for(let U in n){let k=n[U];for(let L in k){let T=k[L];for(let O in T){let H=T[O];for(let B in H)h(H[B].object),delete H[B];delete T[O]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let k=n[U.id];for(let L in k){let T=k[L];for(let O in T){let H=T[O];for(let B in H)h(H[B].object),delete H[B];delete T[O]}}delete n[U.id]}function _(U){for(let k in n){let L=n[k];for(let T in L){let O=L[T];if(O[U.id]===void 0)continue;let H=O[U.id];for(let B in H)h(H[B].object),delete H[B];delete O[U.id]}}}function b(U){for(let k in n){let L=n[k],T=U.isInstancedMesh===!0?U.id:0,O=L[T];if(O!==void 0){for(let H in O){let B=O[H];for(let nt in B)h(B[nt].object),delete B[nt];delete O[H]}delete L[T],Object.keys(L).length===0&&delete n[k]}}}function F(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function Ep(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==cn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ln&&_!==gn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ft("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:C,samples:A}}function Rp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Sn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,E=M*4,S=g.clippingState||null;c.value=S,S=h(m,u,E,f);for(let C=0;C!==E;++C)S[C]=e[C];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,S=f;E!==x;++E,S+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Vs=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new As(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:bi});r.uniforms.tEquirect.value=e;let a=new Te(s,r),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=Oe),new Ki(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Gc=256,Pp=3,Ip=20,hh=256,uh=16,Lp=3,Dp=new z,Np=new Qt,Ba=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new Te(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Dp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(Np));let p=new Ki(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gc,Fc(t))}_fromTexture(t,e){t.mapping===Ti||t.mapping===ts?this._setSize(t.image.length===0?Gc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vc(t,!1,!1),n=Math.log2(t)-Pp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ti||t.mapping===ts?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Up(),this._integrationMaterial=Fp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/uh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Lp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(hh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Op());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vc(i,t,e){return new Vs(i,{minFilter:wn,generateMipmaps:t,type:An,colorSpace:yi,depthBuffer:e})}function Hs(i,t,e){return new Se({name:i,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Ke,blending:bi,depthTest:!1,depthWrite:!1})}function Up(){return Hs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fp(){return Hs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Op(){return Hs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ip}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hc(){return Hs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wc(){return Hs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===$r||f===Kr)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new Vs(m.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===$r||f===Kr,x=f===Ti||f===ts;if(m||x){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ba(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return m&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Ba(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===$r?u.mapping=Ti:f===Kr&&(u.mapping=ts),u}function c(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function l(u){let f=u.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function zp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("WebGLRenderer: "+n+" extension not supported."),s}}}function kp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)t.update(x[p],i.ARRAY_BUFFER)}function d(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let M=x!==null?x.array.length:p.array.length/3-1,E=p.count>=65535?bs:Ss,S=new E(Math.ceil(M/3)*6,1),C=S.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,F=0;b<M;b+=3){let P=_[b+0],U=_[b+1],k=_[b+2];C[F++]=P,C[F++]=U,C[F++]=U,C[F++]=k,C[F++]=k,C[F++]=P}}else{g=p.version;for(let _=0,b=0;_<M;_+=3){let F=_+0,P=_+1,U=_+2;C[b++]=F,C[b++]=P,C[b++]=P,C[b++]=U,C[b++]=U,C[b++]=F}}S.version=g;let A=r.get(m);A&&t.remove(A),r.set(m,S)}function u(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Gp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hp(i,t,e){let n=new WeakMap,s=new me;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*C*4*d),_=new vs(A,S,C,d);_.type=gn,_.needsUpdate=!0;let b=E*4;for(let P=0;P<d;P++){let U=p[P],k=g[P],L=M[P],T=S*C*4*P;for(let O=0;O<U.count;O++){let H=O*b;f===!0&&(s.fromBufferAttribute(U,O),A[T+H+0]=s.x,A[T+H+1]=s.y,A[T+H+2]=s.z,A[T+H+3]=0),m===!0&&(s.fromBufferAttribute(k,O),A[T+H+4]=s.x,A[T+H+5]=s.y,A[T+H+6]=s.z,A[T+H+7]=0),x===!0&&(s.fromBufferAttribute(L,O),A[T+H+8]=s.x,A[T+H+9]=s.y,A[T+H+10]=s.z,A[T+H+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new ee(S,C)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Wp(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Xp={[Co]:"LINEAR_TONE_MAPPING",[Ro]:"REINHARD_TONE_MAPPING",[Po]:"CINEON_TONE_MAPPING",[Io]:"ACES_FILMIC_TONE_MAPPING",[Do]:"AGX_TONE_MAPPING",[No]:"NEUTRAL_TONE_MAPPING",[Lo]:"CUSTOM_TONE_MAPPING"};function qp(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new pn;h.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Fe([0,2,0,0,2,0],2));let d=new Nr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Te(h,d),f=new Yr(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,M=null,E=[],S=!1;this.setSize=function(C,A){a.setSize(C,A),o!==null&&o.setSize(C,A),c!==null&&c.setSize(C,A);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(C,A)}},this.setEffects=function(C){E=C,S=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new rn(A,_,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new rn(A,_,{type:An,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(F=>F.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Zn(A,_),r===!0&&(l.format=Jn,l.type=Ai)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let F=0;F<E.length;F++){let P=E[F];P.setSize&&P.setSize(A,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(C,A){if(p||C.toneMapping===Nn&&E.length===0)return!1;if(M=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=Nn,!0},this.hasRenderPass=function(){return S},this.end=function(C,A){C.toneMapping=g,p=!0;let _=a,b=o;for(let F=0;F<E.length;F++){let P=E[F];P.enabled!==!1&&(P.render(C,b,_,A),P.needsSwap!==!1&&(_=b,b=b===o?c:o))}if(m!==C.outputColorSpace||x!==C.toneMapping){m=C.outputColorSpace,x=C.toneMapping,d.defines={},qt.getTransfer(m)===ae&&(d.defines.SRGB_TRANSFER="");let F=Xp[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(M),C.render(u,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var dh=new Qe,fh=new Zn(1,1),ph=new Es(1),mh=new vs,gh=new Pr,_h=new As,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ka(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ee(e,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Ce(e,n)}}function Qp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ee(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Ce(e,n)}}function jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ee(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Ce(e,n)}}function tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Ga(i){return i.version===0&&(i.compareFunction=Xo,i.needsUpdate=!0),i}function lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ga(fh):r=dh,e.setTexture2D(t||r,s)}function cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gh,s)}function hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ga(ph):r=_h,e.setTextureCube(t||r,s)}function um(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mh,s)}function dm(i){switch(i){case 5126:return Yp;case 35664:return Zp;case 35665:return Jp;case 35666:return $p;case 35674:return Kp;case 35675:return Qp;case 35676:return jp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(i,t){i.uniform1fv(this.addr,t)}function pm(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function mm(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function gm(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function _m(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xm(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vm(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ym(i,t){i.uniform1iv(this.addr,t)}function Mm(i,t){i.uniform2iv(this.addr,t)}function Sm(i,t){i.uniform3iv(this.addr,t)}function bm(i,t){i.uniform4iv(this.addr,t)}function wm(i,t){i.uniform1uiv(this.addr,t)}function Tm(i,t){i.uniform2uiv(this.addr,t)}function Am(i,t){i.uniform3uiv(this.addr,t)}function Em(i,t){i.uniform4uiv(this.addr,t)}function Cm(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ga(fh):a=dh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rm(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gh,r[a])}function Pm(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ga(ph):a=_h;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Im(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mh,r[a])}function Lm(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return bm;case 5125:return wm;case 36294:return Tm;case 36295:return Am;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}var al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dm(e.type)}},ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}},ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function Dm(i,t,e){let n=i.name,s=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),a=sl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$c(e,l===void 0?new al(o,i,t):new ol(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ll(o),$c(e,d)),e=d}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Dm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nm=37297,Um=0;function Fm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qc=new kt;function Om(i){qt._getMatrix(Qc,qt.workingColorSpace,i);let t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fm(i.getShaderSource(t),o)}else return r}function Bm(i,t){let e=Om(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var zm={[Co]:"Linear",[Ro]:"Reinhard",[Po]:"Cineon",[Io]:"ACESFilmic",[Do]:"AgX",[No]:"Neutral",[Lo]:"Custom"};function km(i,t){let e=zm[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oa=new z;function Gm(){qt.getLuminanceCoefficients(Oa);let i=Oa.x.toFixed(4),t=Oa.y.toFixed(4),e=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Hm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gs(i){return i!==""}function th(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(Xm,qm)}function qm(i,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return cl(e)}var Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(Ym,Zm)}function Zm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Jm={[Is]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function $m(i){return Jm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Km={[ts]:"ENVMAP_MODE_REFRACTION"};function Qm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Km[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jm={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[yc]:"ENVMAP_BLENDING_MIX",[Mc]:"ENVMAP_BLENDING_ADD"};function t0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jm[i.combine]||"ENVMAP_BLENDING_NONE"}function e0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=$m(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Qm(e),d=t0(e),u=Vm(e),f=Hm(r),m=s.createProgram(),x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Gs).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(x=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),Gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),a=cl(a),a=th(a,e),a=eh(a,e),o=cl(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=g+x+a,E=g+p+o,S=Kc(s,s.VERTEX_SHADER,M),C=Kc(s,s.FRAGMENT_SHADER,E);s.attachShader(m,S),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",k=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(C)||"",T=U.trim(),O=k.trim(),H=L.trim(),B=!0,nt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,C);else{let X=jc(s,S,"vertex"),Q=jc(s,C,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+T+`
`+X+`
`+Q)}else T!==""?Ft("WebGLProgram: Program Info Log:",T):(O===""||H==="")&&(nt=!1);nt&&(P.diagnostics={runnable:B,programLog:T,vertexShader:{log:O,prefix:x},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(C),_=new ns(s,m),b=Wm(s,m)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,Nm)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Um++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=C,this}var n0=0,hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ul(t),e.set(t,n)),n}},ul=class{constructor(t){this.id=n0++,this.code=t,this.usedTimes=0}};function i0(i){return i===di||i===Os||i===Bs}function s0(i,t,e,n,s,r){let a=new ys,o=new hl,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,F,P,U,k){let L=P.fog,T=U.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||O,H),nt=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Q=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,tt=Q!==void 0?Q.length:0,ht=0;T.morphAttributes.position!==void 0&&(ht=1),T.morphAttributes.normal!==void 0&&(ht=2),T.morphAttributes.color!==void 0&&(ht=3);let wt,Y,xt,bt;if(nt){let mt=Fn[nt];wt=mt.vertexShader,Y=mt.fragmentShader}else{wt=_.vertexShader,Y=_.fragmentShader;let mt=o.getVertexShaderStage(_),ie=o.getFragmentShaderStage(_);o.update(_,mt,ie),xt=mt.id,bt=ie.id}let Lt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Gt=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,Nt=!!_.map,ne=!!_.matcap,jt=!!B,Ot=jt&&B.isPMREMTexture===!0,_e=!!_.aoMap,Me=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,tn=!!_.displacementMap,ue=!!_.emissiveMap,De=!!_.metalnessMap,qe=!!_.roughnessMap,Ye=_.anisotropy>0,N=_.clearcoat>0,Ze=_.diffuseRoughness>0,oe=_.dispersion>0,de=_.retroreflectivity>0,gt=_.iridescence>0,ve=_.sheen>0,Dt=_.transmission>0,Ut=Ye&&!!_.anisotropyMap,w=N&&!!_.clearcoatMap,v=N&&!!_.clearcoatNormalMap,G=N&&!!_.clearcoatRoughnessMap,rt=Ze&&!!_.diffuseRoughnessMap,j=gt&&!!_.iridescenceMap,ut=gt&&!!_.iridescenceThicknessMap,ft=ve&&!!_.sheenColorMap,J=ve&&!!_.sheenRoughnessMap,$=!!_.specularMap,dt=!!_.specularColorMap,R=!!_.specularIntensityMap,K=Dt&&!!_.transmissionMap,Z=Dt&&!!_.thicknessMap,pt=!!_.gradientMap,ct=!!_.alphaMap,lt=_.alphaTest>0,Ct=!!_.alphaHash,Vt=!!_.extensions,ot=Nn;_.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(ot=i.toneMapping);let Pt=Ot?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,zt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:wt,fragmentShader:Y,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:bt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:ne,envMap:jt,envMapMode:jt&&B.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?Pt.length-1:null,envMapSize:Ot?Pt[0].width:null,aoMap:_e,lightMap:Me,bumpMap:Ae,normalMap:ce,displacementMap:tn,emissiveMap:ue,normalMapObjectSpace:ce&&_.normalMapType===wc,normalMapTangentSpace:ce&&_.normalMapType===Vo,packedNormalMap:ce&&_.normalMapType===Vo&&i0(_.normalMap.format),metalnessMap:De,roughnessMap:qe,anisotropy:Ye,anisotropyMap:Ut,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:Ze,diffuseRoughnessMap:rt,dispersion:oe,retroreflection:de,iridescence:gt,iridescenceMap:j,iridescenceThicknessMap:ut,sheen:ve,sheenColorMap:ft,sheenRoughnessMap:J,specularMap:$,specularColorMap:dt,specularIntensityMap:R,transmission:Dt,transmissionMap:K,thicknessMap:Z,gradientMap:pt,opaque:_.transparent===!1&&_.blending===ji&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:lt,alphaHash:Ct,combine:_.combine,mapUv:Nt&&f(_.map.channel),aoMapUv:_e&&f(_.aoMap.channel),lightMapUv:Me&&f(_.lightMap.channel),bumpMapUv:Ae&&f(_.bumpMap.channel),normalMapUv:ce&&f(_.normalMap.channel),displacementMapUv:tn&&f(_.displacementMap.channel),emissiveMapUv:ue&&f(_.emissiveMap.channel),metalnessMapUv:De&&f(_.metalnessMap.channel),roughnessMapUv:qe&&f(_.roughnessMap.channel),anisotropyMapUv:Ut&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:ct&&f(_.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(ce||Ye),vertexNormals:!!T.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!T.attributes.uv&&(Nt||ct),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||T.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ht,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&_.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(b,_),g(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=u[_.type],F;if(b){let P=Fn[b];F=Bc.clone(P.uniforms)}else F=_.uniforms;return F}function E(_,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new e0(i,b,_,s),l.push(F),h.set(b,F)),F}function S(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:M,acquireProgram:E,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:A}}function r0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,p,g){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=p,M.group=g),t++,M}function c(u,f,m,x,p,g,M){M.reversedDepth===!0&&(p=-p);let E=o(u,f,m,x,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function l(u,f,m,x,p,g){let M=o(u,f,m,x,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||a0),n.length>1&&n.sort(f||sh),s.length>1&&s.sort(f||sh)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function o0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function l0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Qt};break;case"SpotLight":e={position:new z,direction:new z,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function c0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h0=0;function u0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d0(i){let t=new l0,e=c0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let s=new z,r=new le,a=new le;function o(l){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,M=0,E=0,S=0,C=0,A=0,_=0,b=0,F=0,P=0;l.sort(u0);for(let k=0,L=l.length;k<L;k++){let T=l[k],O=T.color,H=T.intensity,B=T.distance,nt=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===di?nt=T.shadow.map.texture:nt=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(T.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(T.sh.coefficients[X],H);P++}else if(T.isSunLight){let X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Q=T.shadow,tt=e.get(T);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=nt;let ht=Q.getViewportCount();for(let wt=0;wt<ht;wt++)n.sunShadowMatrix[x+wt]=Q.getMatrix(wt),n.sunShadowCascade[x+wt]=Q._cascadeData[wt];x+=ht,m++}n.sun[f]=X,f++}else if(T.isDirectionalLight){let X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Q=T.shadow,tt=e.get(T);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=T.shadow.matrix,C++}n.directional[p]=X,p++}else if(T.isSpotLight){let X=t.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(O).multiplyScalar(H),X.distance=B,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,n.spot[M]=X;let Q=T.shadow;if(T.map&&(n.spotLightMap[b]=T.map,b++,Q.updateMatrices(T),T.castShadow&&F++),n.spotLightMatrix[M]=Q.matrix,T.castShadow){let tt=e.get(T);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=nt,_++}M++}else if(T.isRectAreaLight){let X=t.get(T);X.color.copy(O).multiplyScalar(H),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),n.rectArea[E]=X,E++}else if(T.isPointLight){let X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),X.distance=T.distance,X.decay=T.decay,T.castShadow){let Q=T.shadow,tt=e.get(T);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=T.shadow.matrix,A++}n.point[g]=X,g++}else if(T.isHemisphereLight){let X=t.get(T);X.skyColor.copy(T.color).multiplyScalar(H),X.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[S]=X,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==g||U.spotLength!==M||U.rectAreaLength!==E||U.hemiLength!==S||U.numSunShadows!==m||U.numDirectionalShadows!==C||U.numPointShadows!==A||U.numSpotShadows!==_||U.numSpotMaps!==b||U.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=P,U.sunLength=f,U.directionalLength=p,U.pointLength=g,U.spotLength=M,U.rectAreaLength=E,U.hemiLength=S,U.numSunShadows=m,U.numDirectionalShadows=C,U.numPointShadows=A,U.numSpotShadows=_,U.numSpotMaps=b,U.numLightProbes=P,n.version=h0++)}function c(l,h){let d=0,u=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let S=l[M];if(S.isSunLight){let C=n.sun[d];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),d++}else if(S.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(S.isSpotLight){let C=n.spot[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let C=n.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function ah(i){let t=new d0(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function c(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function f0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],_0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],oh=new le,ks=new z,rl=new z;function x0(i,t,e){let n=new Si,s=new ee,r=new ee,a=new me,o=new Ur,c=new Fr,l={},h=e.maxTextureSize,d={[ui]:Ke,[Ke]:ui,[mn]:mn},u=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new pn;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Te(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let g=this.type;this.render=function(A,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===ec&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let F=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(bi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let L=g!==this.type;L&&_.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(O=>O.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,O=A.length;T<O;T++){let H=A[T],B=H.shadow;if(B===void 0){Ft("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let nt=B.getFrameExtents();s.multiply(nt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,B.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Qi){if(H.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new rn(s.x,s.y,{format:di,type:An,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Zn(s.x,s.y,gn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=qn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ie,B.map.depthTexture.magFilter=Ie}else H.isPointLight?(B.map=new Vs(s.x),B.map.depthTexture=new Es(s.x,Tn)):(B.map=new rn(s.x,s.y),B.map.depthTexture=new Zn(s.x,s.y,Tn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=qn,this.type===Is?(B.map.depthTexture.compareFunction=X?Wo:Ho,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ie,B.map.depthTexture.magFilter=Ie);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let Q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,b);let tt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let ht=0;ht<Q;ht++){let wt=B.getCamera(ht);if(H.isPointLight){let Y=B.camera,xt=B.matrix,bt=H.distance||Y.far;bt!==Y.far&&(Y.far=bt,Y.updateProjectionMatrix()),ks.setFromMatrixPosition(H.matrixWorld),Y.position.copy(ks),rl.copy(Y.position),rl.add(g0[ht]),Y.up.copy(_0[ht]),Y.lookAt(rl),Y.updateMatrixWorld(),xt.makeTranslation(-ks.x,-ks.y,-ks.z),oh.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(oh,Y.coordinateSystem,Y.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(B.map),i.clear());let Y=B.getViewport(ht);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),k.viewport(a)}n=B.getFrustum(ht),S(_,b,wt,H,tt,this.type)}B.isPointLightShadow!==!0&&this.type===Qi&&M(B,b),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(F,P,U)};function M(A,_){let b=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new rn(s.x,s.y,{format:di,type:An}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function E(A,_,b,F){let P=null,U=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)P=U;else if(P=b.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let k=P.uuid,L=_.uuid,T=l[k];T===void 0&&(T={},l[k]=T);let O=T[L];O===void 0&&(O=P.clone(),T[L]=O,_.addEventListener("dispose",C)),P=O}if(P.visible=_.visible,P.wireframe=_.wireframe,F===Qi?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=b}return P}function S(A,_,b,F,P,U){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Qi)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let T=t.update(A),O=A.material;if(Array.isArray(O)){let H=T.groups;for(let B=0,nt=H.length;B<nt;B++){let X=H[B],Q=O[X.materialIndex];if(Q&&Q.visible){let tt=E(A,Q,F,U);A.onBeforeShadow(i,A,_,b,T,tt,X),i.renderBufferDirect(b,null,T,tt,A,X),A.onAfterShadow(i,A,_,b,T,tt,X)}}}else if(O.visible){let H=E(A,O,F,U);A.onBeforeShadow(i,A,_,b,T,H,null),i.renderBufferDirect(b,null,T,H,A,null),A.onAfterShadow(i,A,_,b,T,H,null)}}let L=A.children;for(let T=0,O=L.length;T<O;T++)S(L[T],_,b,F,P,U)}function C(A){A.target.removeEventListener("dispose",C);for(let b in l){let F=l[b],P=A.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function v0(i,t){function e(){let R=!1,K=new me,Z=null,pt=new me(0,0,0,0);return{setMask:function(ct){Z!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),Z=ct)},setLocked:function(ct){R=ct},setClear:function(ct,lt,Ct,Vt,ot){ot===!0&&(ct*=Vt,lt*=Vt,Ct*=Vt),K.set(ct,lt,Ct,Vt),pt.equals(K)===!1&&(i.clearColor(ct,lt,Ct,Vt),pt.copy(K))},reset:function(){R=!1,Z=null,pt.set(-1,0,0,0)}}}function n(){let R=!1,K=!1,Z=null,pt=null,ct=null;return{setReversed:function(lt){if(K!==lt){let Ct=t.get("EXT_clip_control");lt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),K=lt;let Vt=ct;ct=null,this.setClear(Vt)}},getReversed:function(){return K},setTest:function(lt){lt?yt(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!R&&(i.depthMask(lt),Z=lt)},setFunc:function(lt){if(K&&(lt=Uc[lt]),pt!==lt){switch(lt){case _r:i.depthFunc(i.NEVER);break;case xr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case Sr:i.depthFunc(i.GREATER);break;case br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=lt}},setLocked:function(lt){R=lt},setClear:function(lt){ct!==lt&&(ct=lt,K&&(lt=1-lt),i.clearDepth(lt))},reset:function(){R=!1,Z=null,pt=null,ct=null,K=!1}}}function s(){let R=!1,K=null,Z=null,pt=null,ct=null,lt=null,Ct=null,Vt=null,ot=null;return{setTest:function(Pt){R||(Pt?yt(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(Pt){K!==Pt&&!R&&(i.stencilMask(Pt),K=Pt)},setFunc:function(Pt,zt,mt){(Z!==Pt||pt!==zt||ct!==mt)&&(i.stencilFunc(Pt,zt,mt),Z=Pt,pt=zt,ct=mt)},setOp:function(Pt,zt,mt){(lt!==Pt||Ct!==zt||Vt!==mt)&&(i.stencilOp(Pt,zt,mt),lt=Pt,Ct=zt,Vt=mt)},setLocked:function(Pt){R=Pt},setClear:function(Pt){ot!==Pt&&(i.clearStencil(Pt),ot=Pt)},reset:function(){R=!1,K=null,Z=null,pt=null,ct=null,lt=null,Ct=null,Vt=null,ot=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,E=null,S=null,C=null,A=null,_=null,b=new Qt(0,0,0),F=0,P=!1,U=null,k=null,L=null,T=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=nt>=2);let Q=null,tt={},ht=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Y=new me().fromArray(ht),xt=new me().fromArray(wt);function bt(R,K,Z,pt){let ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Z;Ct++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(K+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return lt}let Lt={};Lt[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),a.setFunc(Xi),Ae(!1),ce(So),yt(i.CULL_FACE),_e(bi);function yt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Gt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function ge(R,K){return u[R]!==K?(i.bindFramebuffer(R,K),u[R]=K,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Nt(R,K){let Z=m,pt=!1;if(R){Z=f.get(K),Z===void 0&&(Z=[],f.set(K,Z));let ct=R.textures;if(Z.length!==ct.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ct=ct.length;lt<Ct;lt++)Z[lt]=i.COLOR_ATTACHMENT0+lt;Z.length=ct.length,pt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,pt=!0);pt&&i.drawBuffers(Z)}function ne(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let jt={[wi]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};jt[rc]=i.MIN,jt[ac]=i.MAX;let Ot={[oc]:i.ZERO,[lc]:i.ONE,[cc]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[mc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[dc]:i.ONE_MINUS_DST_ALPHA,[gc]:i.CONSTANT_COLOR,[_c]:i.ONE_MINUS_CONSTANT_COLOR,[xc]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(R,K,Z,pt,ct,lt,Ct,Vt,ot,Pt){if(R===bi){p===!0&&(Gt(i.BLEND),p=!1);return}if(p===!1&&(yt(i.BLEND),p=!0),R!==nc){if(R!==g||Pt!==P){if((M!==wi||C!==wi)&&(i.blendEquation(i.FUNC_ADD),M=wi,C=wi),Pt)switch(R){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dn:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",R);break}else switch(R){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",R);break}E=null,S=null,A=null,_=null,b.set(0,0,0),F=0,g=R,P=Pt}return}ct=ct||K,lt=lt||Z,Ct=Ct||pt,(K!==M||ct!==C)&&(i.blendEquationSeparate(jt[K],jt[ct]),M=K,C=ct),(Z!==E||pt!==S||lt!==A||Ct!==_)&&(i.blendFuncSeparate(Ot[Z],Ot[pt],Ot[lt],Ot[Ct]),E=Z,S=pt,A=lt,_=Ct),(Vt.equals(b)===!1||ot!==F)&&(i.blendColor(Vt.r,Vt.g,Vt.b,ot),b.copy(Vt),F=ot),g=R,P=!1}function Me(R,K){R.side===mn?Gt(i.CULL_FACE):yt(i.CULL_FACE);let Z=R.side===Ke;K&&(Z=!Z),Ae(Z),R.blending===ji&&R.transparent===!1?_e(bi):_e(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let pt=R.stencilWrite;o.setTest(pt),pt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ue(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function ce(R){R!==jl?(yt(i.CULL_FACE),R!==k&&(R===So?i.cullFace(i.BACK):R===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),k=R}function tn(R){R!==L&&(B&&i.lineWidth(R),L=R)}function ue(R,K,Z){R?(yt(i.POLYGON_OFFSET_FILL),(T!==K||O!==Z)&&(T=K,O=Z,a.getReversed()&&(K=-K,Z=-Z),i.polygonOffset(K,Z))):Gt(i.POLYGON_OFFSET_FILL)}function De(R){R?yt(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function qe(R){R===void 0&&(R=i.TEXTURE0+H-1),Q!==R&&(i.activeTexture(R),Q=R)}function Ye(R,K,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+H-1:Z=Q);let pt=tt[Z];pt===void 0&&(pt={type:void 0,texture:void 0},tt[Z]=pt),(pt.type!==R||pt.texture!==K)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(R,K||Lt[R]),pt.type=R,pt.texture=K)}function N(){let R=tt[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(R){Bt("WebGLState:",R)}}function oe(){try{i.compressedTexImage3D(...arguments)}catch(R){Bt("WebGLState:",R)}}function de(){try{i.texSubImage2D(...arguments)}catch(R){Bt("WebGLState:",R)}}function gt(){try{i.texSubImage3D(...arguments)}catch(R){Bt("WebGLState:",R)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Bt("WebGLState:",R)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Bt("WebGLState:",R)}}function Ut(){try{i.texStorage2D(...arguments)}catch(R){Bt("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Bt("WebGLState:",R)}}function v(){try{i.texImage2D(...arguments)}catch(R){Bt("WebGLState:",R)}}function G(){try{i.texImage3D(...arguments)}catch(R){Bt("WebGLState:",R)}}function rt(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function j(R,K){d[R]!==K&&(i.pixelStorei(R,K),d[R]=K)}function ut(R){Y.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function ft(R){xt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),xt.copy(R))}function J(R,K){let Z=l.get(K);Z===void 0&&(Z=new WeakMap,l.set(K,Z));let pt=Z.get(R);pt===void 0&&(pt=i.getUniformBlockIndex(K,R.name),i.uniformBlockBinding(K,pt,pt),Z.set(R,pt))}function $(R,K,Z){let ct=l.get(K).get(R);c[ct]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ct,Z),c[ct]=Z)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,tt={},u={},c={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,E=null,S=null,C=null,A=null,_=null,b=new Qt(0,0,0),F=0,P=!1,U=null,k=null,L=null,T=null,O=null,Y.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:Gt,bindFramebuffer:ge,drawBuffers:Nt,useProgram:ne,setBlending:_e,setMaterial:Me,setFlipSided:Ae,setCullFace:ce,setLineWidth:tn,setPolygonOffset:ue,setScissorTest:De,activeTexture:qe,bindTexture:Ye,unbindTexture:N,compressedTexImage2D:Ze,compressedTexImage3D:oe,texImage2D:v,texImage3D:G,pixelStorei:j,getParameter:rt,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:Ut,texStorage3D:w,texSubImage2D:de,texSubImage3D:gt,compressedTexSubImage2D:ve,compressedTexSubImage3D:Dt,scissor:ut,viewport:ft,reset:dt}}function y0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,x=new FinalizationRegistry(w=>m.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):xs("canvas")}function M(w,v,G){let rt=1,j=Ut(w);if((j.width>G||j.height>G)&&(rt=G/Math.max(j.width,j.height)),rt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ut=Math.floor(rt*j.width),ft=Math.floor(rt*j.height);u===void 0&&(u=g(ut,ft));let J=v?g(ut,ft):u;return J.width=ut,J.height=ft,J.getContext("2d").drawImage(w,0,0,ut,ft),Ft("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ut+"x"+ft+")."),J}else return"data"in w&&Ft("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(w,v,G,rt,j,ut=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;rt&&(ft=t.get("EXT_texture_norm16"),ft||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8),G===i.UNSIGNED_SHORT&&ft&&(J=ft.R16_EXT),G===i.SHORT&&ft&&(J=ft.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),v===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8),G===i.UNSIGNED_SHORT&&ft&&(J=ft.RG16_EXT),G===i.SHORT&&ft&&(J=ft.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&ft&&(J=ft.RGB16_EXT),G===i.SHORT&&ft&&(J=ft.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let $=ut?gs:qt.getTransfer(j);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=$===ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ft&&(J=ft.RGBA16_EXT),G===i.SHORT&&ft&&(J=ft.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(w,v){let G;return w?v===null||v===Tn||v===Ai?G=i.DEPTH24_STENCIL8:v===gn?G=i.DEPTH32F_STENCIL8:v===es&&(G=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Tn||v===Ai?G=i.DEPTH_COMPONENT24:v===gn?G=i.DEPTH_COMPONENT32F:v===es&&(G=i.DEPTH_COMPONENT16),G}function b(w,v){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ie&&w.minFilter!==Oe?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function F(w){let v=new WeakRef(w);n.get(w).__ref=v,m.add(v),x.register(w,v,v)}function P(w){let v=n.get(w).__ref;v!==void 0&&(m.delete(v),x.unregister(v))}function U(w){L(w.target)}function k(w){T(w.target)}function L(w){w.removeEventListener("dispose",U),P(w),H(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function T(w){w.removeEventListener("dispose",k),P(w),nt(w)}function O(){for(let w of m){let v=w.deref();v!==void 0&&(v.isRenderTarget===!0?T(v):L(v))}m.clear(),d.clear()}function H(w){let v=n.get(w);if(v.__webglInit===void 0)return;let G=w.source,rt=f.get(G);if(rt){let j=rt[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&B(w),Object.keys(rt).length===0&&f.delete(G)}n.remove(w)}function B(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let G=w.source,rt=f.get(G);delete rt[v.__cacheKey],a.memory.textures--}function nt(w){let v=n.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=w.depthTexture;if(G&&G.renderTarget===w&&L(G),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ut=0;ut<v.__webglFramebuffer[j].length;ut++)i.deleteFramebuffer(v.__webglFramebuffer[j][ut]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let rt=w.textures;for(let j=0,ut=rt.length;j<ut;j++){let ft=n.get(rt[j]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(rt[j])}n.remove(w)}let X=0;function Q(){X=0}function tt(){return X}function ht(w){X=w}function wt(){let w=X;return w>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function Y(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function xt(w,v){let G=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){let rt=w.image;if(rt===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,w,v);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function bt(w,v){let G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Me(G,w,v);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function Lt(w,v){let G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Me(G,w,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function yt(w,v){let G=n.get(w);if(w.version>0&&G.__version!==w.version){Ae(G,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let Gt={[wr]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},ge={[Ie]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},Nt={[Ac]:i.NEVER,[Xo]:i.ALWAYS,[Ec]:i.LESS,[Ho]:i.LEQUAL,[Cc]:i.EQUAL,[Wo]:i.GEQUAL,[Rc]:i.GREATER,[Pc]:i.NOTEQUAL};function ne(w,v){if(v.type===gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Oe||v.magFilter===Qr||v.magFilter===Ls||v.magFilter===wn||v.minFilter===Oe||v.minFilter===Qr||v.minFilter===Ls||v.minFilter===wn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Gt[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Gt[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Gt[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ge[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ie||v.minFilter!==Ls&&v.minFilter!==wn||v.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(w,v){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",U),F(v));let rt=v.source,j=f.get(rt);j===void 0&&(j={},f.set(rt,j));let ut=Y(v);if(ut!==w.__cacheKey){j[ut]===void 0&&(j[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),j[ut].usedTimes++;let ft=j[w.__cacheKey];ft!==void 0&&(j[w.__cacheKey].usedTimes--,ft.usedTimes===0&&B(v)),w.__cacheKey=ut,w.__webglTexture=j[ut].texture}return G}function Ot(w,v,G){return Math.floor(Math.floor(w/G)/v)}function _e(w,v,G,rt){let ut=w.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,rt,v.data);else{ut.sort((R,K)=>R.start-K.start);let ft=0;for(let R=1;R<ut.length;R++){let K=ut[ft],Z=ut[R],pt=K.start+K.count,ct=Ot(Z.start,v.width,4),lt=Ot(K.start,v.width,4);Z.start<=pt+1&&ct===lt&&Ot(Z.start+Z.count-1,v.width,4)===ct?K.count=Math.max(K.count,Z.start+Z.count-K.start):(++ft,ut[ft]=Z)}ut.length=ft+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let R=0,K=ut.length;R<K;R++){let Z=ut[R],pt=Math.floor(Z.start/4),ct=Math.ceil(Z.count/4),lt=pt%v.width,Ct=Math.floor(pt/v.width),Vt=ct,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(i.TEXTURE_2D,0,lt,Ct,Vt,ot,G,rt,v.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function Me(w,v,G){let rt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(rt=i.TEXTURE_3D);let j=jt(w,v),ut=v.source;e.bindTexture(rt,w.__webglTexture,i.TEXTURE0+G);let ft=n.get(ut);if(ut.version!==ft.__version||j===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ot=qt.getPrimaries(qt.workingColorSpace),Pt=v.colorSpace===$n?null:qt.getPrimaries(v.colorSpace),zt=v.colorSpace===$n||ot===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let $=M(v.image,!1,s.maxTextureSize);$=Dt(v,$);let dt=r.convert(v.format,v.colorSpace),R=r.convert(v.type),K=A(v.internalFormat,dt,R,v.normalized,v.colorSpace,v.isVideoTexture);ne(rt,v);let Z,pt=v.mipmaps,ct=v.isVideoTexture!==!0,lt=ft.__version===void 0||j===!0,Ct=ut.dataReady,Vt=b(v,$);if(v.isDepthTexture)K=_(v.format===Jn,v.type),lt&&(ct?e.texStorage2D(i.TEXTURE_2D,1,K,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,dt,R,null));else if(v.isDataTexture)if(pt.length>0){ct&&lt&&e.texStorage2D(i.TEXTURE_2D,Vt,K,pt[0].width,pt[0].height);for(let ot=0,Pt=pt.length;ot<Pt;ot++)Z=pt[ot],ct?Ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Z.width,Z.height,dt,R,Z.data):e.texImage2D(i.TEXTURE_2D,ot,K,Z.width,Z.height,0,dt,R,Z.data);v.generateMipmaps=!1}else ct?(lt&&e.texStorage2D(i.TEXTURE_2D,Vt,K,$.width,$.height),Ct&&_e(v,$,dt,R)):e.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,dt,R,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ct&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,K,pt[0].width,pt[0].height,$.depth);for(let ot=0,Pt=pt.length;ot<Pt;ot++)if(Z=pt[ot],v.format!==cn)if(dt!==null)if(ct){if(Ct)if(v.layerUpdates.size>0){let zt=Qo(Z.width,Z.height,v.format,v.type);for(let mt of v.layerUpdates){let ie=Z.data.subarray(mt*zt/Z.data.BYTES_PER_ELEMENT,(mt+1)*zt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,mt,Z.width,Z.height,1,dt,ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Z.width,Z.height,$.depth,dt,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,K,Z.width,Z.height,$.depth,0,Z.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Z.width,Z.height,$.depth,dt,R,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,K,Z.width,Z.height,$.depth,0,dt,R,Z.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ct&&lt&&e.texStorage2D(i.TEXTURE_2D,Vt,K,pt[0].width,pt[0].height);for(let ot=0,Pt=pt.length;ot<Pt;ot++)Z=pt[ot],v.format!==cn?dt!==null?ct?Ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Z.width,Z.height,dt,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,K,Z.width,Z.height,0,Z.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Z.width,Z.height,dt,R,Z.data):e.texImage2D(i.TEXTURE_2D,ot,K,Z.width,Z.height,0,dt,R,Z.data)}else if(v.isDataArrayTexture)if(ct){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,K,$.width,$.height,$.depth),Ct)if(v.layerUpdates.size>0){let ot=Qo($.width,$.height,v.format,v.type);for(let Pt of v.layerUpdates){let zt=$.data.subarray(Pt*ot/$.data.BYTES_PER_ELEMENT,(Pt+1)*ot/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,$.width,$.height,1,dt,R,zt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,R,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,K,$.width,$.height,$.depth,0,dt,R,$.data);else if(v.isData3DTexture)ct?(lt&&e.texStorage3D(i.TEXTURE_3D,Vt,K,$.width,$.height,$.depth),Ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,R,$.data)):e.texImage3D(i.TEXTURE_3D,0,K,$.width,$.height,$.depth,0,dt,R,$.data);else if(v.isFramebufferTexture){if(lt)if(ct)e.texStorage2D(i.TEXTURE_2D,Vt,K,$.width,$.height);else{let ot=$.width,Pt=$.height;for(let zt=0;zt<Vt;zt++)e.texImage2D(i.TEXTURE_2D,zt,K,ot,Pt,0,dt,R,null),ot>>=1,Pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),$.parentNode!==ot){ot.appendChild($),d.add(v),ot.onpaint=Pt=>{let zt=Pt.changedElements;for(let mt of d)zt.includes(mt.image)&&(mt.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let zt=i.RGBA,mt=i.RGBA,ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,mt,ie,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ct&&lt){let ot=Ut(pt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,K,ot.width,ot.height)}for(let ot=0,Pt=pt.length;ot<Pt;ot++)Z=pt[ot],ct?Ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,dt,R,Z):e.texImage2D(i.TEXTURE_2D,ot,K,dt,R,Z);v.generateMipmaps=!1}else if(ct){if(lt){let ot=Ut($);e.texStorage2D(i.TEXTURE_2D,Vt,K,ot.width,ot.height)}Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,R,$)}else e.texImage2D(i.TEXTURE_2D,0,K,dt,R,$);E(v)&&v.mipmapsAutoUpdate===!0&&S(rt),ft.__version=ut.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ae(w,v,G){if(v.image.length!==6)return;let rt=jt(w,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);let ut=n.get(j);if(j.version!==ut.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);let ft=qt.getPrimaries(qt.workingColorSpace),J=v.colorSpace===$n?null:qt.getPrimaries(v.colorSpace),$=v.colorSpace===$n||ft===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,K=[];for(let mt=0;mt<6;mt++)!dt&&!R?K[mt]=M(v.image[mt],!0,s.maxCubemapSize):K[mt]=R?v.image[mt].image:v.image[mt],K[mt]=Dt(v,K[mt]);let Z=K[0],pt=r.convert(v.format,v.colorSpace),ct=r.convert(v.type),lt=A(v.internalFormat,pt,ct,v.normalized,v.colorSpace),Ct=v.isVideoTexture!==!0,Vt=ut.__version===void 0||rt===!0,ot=j.dataReady,Pt=b(v,Z);ne(i.TEXTURE_CUBE_MAP,v);let zt;if(v.isDepthTexture){if(lt=_(v.format===Jn,v.type),Vt)if(Ct)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,Z.width,Z.height);else for(let mt=0;mt<6;mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,Z.width,Z.height,0,pt,ct,null)}else if(dt){Ct&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,lt,Z.width,Z.height);for(let mt=0;mt<6;mt++){zt=K[mt].mipmaps;for(let ie=0;ie<zt.length;ie++){let D=zt[ie];v.format!==cn?pt!==null?Ct?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie,0,0,D.width,D.height,pt,D.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie,lt,D.width,D.height,0,D.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie,0,0,D.width,D.height,pt,ct,D.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie,lt,D.width,D.height,0,pt,ct,D.data)}}}else{if(zt=v.mipmaps,Ct&&Vt){zt.length>0&&Pt++;let mt=Ut(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,lt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(R){Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,K[mt].width,K[mt].height,pt,ct,K[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,K[mt].width,K[mt].height,0,pt,ct,K[mt].data);for(let ie=0;ie<zt.length;ie++){let it=zt[ie].image[mt].image;Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie+1,0,0,it.width,it.height,pt,ct,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie+1,lt,it.width,it.height,0,pt,ct,it.data)}}else{Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,pt,ct,K[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,pt,ct,K[mt]);for(let ie=0;ie<zt.length;ie++){let D=zt[ie];Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie+1,0,0,pt,ct,D.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ie+1,lt,pt,ct,D.image[mt])}}}E(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ut.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ce(w,v,G,rt,j,ut){let ft=r.convert(G.format,G.colorSpace),J=r.convert(G.type),$=A(G.internalFormat,ft,J,G.normalized,G.colorSpace),dt=n.get(v),R=n.get(G);if(R.__renderTarget=v,!dt.__hasExternalTextures){let K=Math.max(1,v.width>>ut),Z=Math.max(1,v.height>>ut);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ut,$,K,Z,v.depth,0,ft,J,null):e.texImage2D(j,ut,$,K,Z,0,ft,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,j,R.__webglTexture,0,de(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,j,R.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tn(w,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let rt=v.depthTexture,j=rt&&rt.isDepthTexture?rt.type:null,ut=_(v.stencilBuffer,j),ft=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(v),ut,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{let rt=v.textures;for(let j=0;j<rt.length;j++){let ut=rt[j],ft=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),$=A(ut.internalFormat,ft,J,ut.normalized,ut.colorSpace);gt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(v),$,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(v),$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(w,v,G){let rt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(v.depthTexture);j.__renderTarget=v;let ut=rt?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||ut.width!==v.width||ut.height!==v.height)&&(ut.width=v.width,ut.height=v.height,v.depthTexture.needsUpdate=!0),rt?yt(v.depthTexture,0):xt(v.depthTexture,0);let ft=j.__webglTexture,J=de(v),$=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,dt=v.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===qn)gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,$,ft,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,dt,$,ft,0);else if(v.depthTexture.format===Jn)gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,$,ft,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,dt,$,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(w){let v=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let rt=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),rt){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,rt.removeEventListener("dispose",j)};rt.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=rt}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let rt=0;rt<6;rt++)ue(v.__webglFramebuffer[rt],w,rt);else w.texture.mipmaps.length>0?ue(v.__webglFramebuffer[0],w,0):ue(v.__webglFramebuffer,w,0);else if(G){v.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[rt]),v.__webglDepthbuffer[rt]===void 0)v.__webglDepthbuffer[rt]=i.createRenderbuffer(),tn(v.__webglDepthbuffer[rt],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ut)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),tn(v.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(w,v,G){let rt=n.get(w);v!==void 0&&ce(rt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&De(w)}function Ye(w){let v=w.texture,G=n.get(w),rt=n.get(v);w.addEventListener("dispose",k),F(w);let j=w.textures,ut=w.isWebGLCubeRenderTarget===!0,ft=j.length>1;if(ft||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=v.version,a.memory.textures++),ut){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let $=0;$<v.mipmaps.length;$++)G.__webglFramebuffer[J][$]=i.createFramebuffer()}else G.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)G.__webglFramebuffer[J]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ft)for(let J=0,$=j.length;J<$;J++){let dt=n.get(j[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&gt(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let $=j[J];G.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[J]);let dt=r.convert($.format,$.colorSpace),R=r.convert($.type),K=A($.internalFormat,dt,R,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),Z=de(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,G.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),tn(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ne(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ce(G.__webglFramebuffer[J][$],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else ce(G.__webglFramebuffer[J],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let J=0,$=j.length;J<$;J++){let dt=j[J],R=n.get(dt),K=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,R.__webglTexture),ne(K,dt),ce(G.__webglFramebuffer,w,dt,i.COLOR_ATTACHMENT0+J,K,0),E(dt)&&S(K)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,rt.__webglTexture),ne(J,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ce(G.__webglFramebuffer[$],w,v,i.COLOR_ATTACHMENT0,J,$);else ce(G.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,J,0);E(v)?S(J):v.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&De(w)}function N(w){let v=w.textures;for(let G=0,rt=v.length;G<rt;G++){let j=v[G];if(E(j)&&j.mipmapsAutoUpdate===!0){let ut=C(w),ft=n.get(j).__webglTexture;e.bindTexture(ut,ft),S(ut),e.unbindTexture()}}}let Ze=[];function oe(w){if(w.samples>0){if(gt(w)===!1){let v=w.textures,G=w.width,rt=w.height,j=i.COLOR_BUFFER_BIT,ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),J=v.length>1;if(J)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[dt]);let R=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,j,i.NEAREST),c===!0&&(Ze.length=0,Ze.push(i.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Ze.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[dt]);let R=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function de(w){return Math.min(s.maxSamples,w.samples)}function gt(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ve(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Dt(w,v){let G=w.colorSpace,rt=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==yi&&G!==$n&&(qt.getTransfer(G)===ae?(rt!==cn||j!==ln)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",G)),v}function Ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=wt,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=ht,this.setTexture2D=xt,this.setTexture2DArray=bt,this.setTexture3D=Lt,this.setTextureCube=yt,this.rebindTextures=qe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=gt,this.dispose=O}function M0(i,t){function e(n,s=$n){let r,a=qt.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fo)return i.BYTE;if(n===Oo)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===jr)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Go)return i.RGB;if(n===cn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===na)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===di)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===ra)return i.RGBA_INTEGER;if(n===Ds||n===Ns||n===Us||n===Fs)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===oa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===Os||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ha||n===ua)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fa)return r.COMPRESSED_R11_EAC;if(n===pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Os)return r.COMPRESSED_RG11_EAC;if(n===ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa||n===ba||n===wa||n===Ta||n===Aa||n===Ea||n===Ca||n===Ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Ia||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Da||n===Na||n===Bs||n===Ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:S0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fl=class extends In{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new dl,g={},M=e.getContextAttributes(),E=null,S=null,C=[],A=[],_=new ee,b=null,F=null,P=new $e;P.viewport=new me;let U=new $e;U.viewport=new me;let k=[P,U],L=new Zr,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let xt=C[Y];return xt===void 0&&(xt=new Zi,C[Y]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(Y){let xt=C[Y];return xt===void 0&&(xt=new Zi,C[Y]=xt),xt.getGripSpace()},this.getHand=function(Y){let xt=C[Y];return xt===void 0&&(xt=new Zi,C[Y]=xt),xt.getHandSpace()};function H(Y){let xt=A.indexOf(Y.inputSource);if(xt===-1)return;let bt=C[xt];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,l||a),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<C.length;Y++){let xt=A[Y];xt!==null&&(A[Y]=null,C[Y].disconnect(xt))}T=null,O=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),F!==null){let Y=F.camera;Y.fov=F.fov,Y.zoom=F.zoom,Y.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",B),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Lt=null,yt=null;M.depth&&(yt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=M.stencil?Jn:qn,Lt=M.stencil?Ai:Tn);let Gt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new rn(u.textureWidth,u.textureHeight,{format:cn,type:ln,depthTexture:new Zn(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new rn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Y){for(let xt=0;xt<Y.removed.length;xt++){let bt=Y.removed[xt],Lt=A.indexOf(bt);Lt>=0&&(A[Lt]=null,C[Lt].disconnect(bt))}for(let xt=0;xt<Y.added.length;xt++){let bt=Y.added[xt],Lt=A.indexOf(bt);if(Lt===-1){for(let Gt=0;Gt<C.length;Gt++)if(Gt>=A.length){A.push(bt),Lt=Gt;break}else if(A[Gt]===null){A[Gt]=bt,Lt=Gt;break}if(Lt===-1)break}let yt=C[Lt];yt&&yt.connect(bt)}}function X(Y,xt){xt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(xt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let xt=Y.near,bt=Y.far;p.texture!==null&&(p.depthNear>0&&(xt=p.depthNear),p.depthFar>0&&(bt=p.depthFar)),L.near=U.near=P.near=xt,L.far=U.far=P.far=bt,(T!==L.near||O!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),T=L.near,O=L.far),L.layers.mask=Y.layers.mask|6,P.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;let Lt=Y.parent,yt=L.cameras;X(L,Lt);for(let Gt=0;Gt<yt.length;Gt++)X(yt[Gt],Lt);L.projectionMatrix.copy(P.projectionMatrix),L.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&Y.isPerspectiveCamera&&(F={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,L,Lt)};function Q(Y,xt,bt){bt===null?Y.matrix.copy(xt.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(xt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(xt.projectionMatrix),Y.projectionMatrixInverse.copy(xt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Er*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(Y){return g[Y]};let tt=null;function ht(Y,xt){if(h=xt.getViewerPose(l||a),m=xt,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Lt=!1;bt.length!==L.cameras.length&&(L.cameras.length=0,Lt=!0);for(let Nt=0;Nt<bt.length;Nt++){let ne=bt[Nt],jt=null;if(f!==null)jt=f.getViewport(ne);else{let _e=d.getViewSubImage(u,ne);jt=_e.viewport,Nt===0&&(t.setRenderTargetTextures(S,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(S))}let Ot=k[Nt];Ot===void 0&&(Ot=new $e,Ot.layers.enable(Nt),Ot.viewport=new me,k[Nt]=Ot),Ot.matrix.fromArray(ne.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ne.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(jt.x,jt.y,jt.width,jt.height),Nt===0&&(L.matrix.copy(Ot.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Lt===!0&&L.cameras.push(Ot)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Nt=d.getDepthInformation(bt[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,s.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Nt=0;Nt<bt.length;Nt++){let ne=bt[Nt].camera;if(ne){let jt=g[ne];jt||(jt=new Cs,g[ne]=jt);let Ot=d.getCameraImage(ne);jt.sourceTexture=Ot}}}}for(let bt=0;bt<C.length;bt++){let Lt=A[bt],yt=C[bt];Lt!==null&&yt!==void 0&&yt.update(Lt,xt,l||a)}tt&&tt(Y,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),m=null}let wt=new lh;wt.setAnimationLoop(ht),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},w0=new le,xh=new kt;xh.set(-1,0,0,0,1,0,0,0,1);function T0(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Jo(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,E,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,M,E):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ke&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ke&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),E=M.envMap,S=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(xh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,M,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A0(i,t,e,n){let s={},r={};function a(M,E){let S=E.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,E){let S=s[M.id];S===void 0&&(m(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",p));let C=E.program;n.updateUBOMapping(M,C);let A=t.render.frame;r[M.id]!==A&&(l(M),r[M.id]=A)}function c(M){let E=i.createBuffer(),S=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(M){let E=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,_=S.length;A<_;A++){let b=S[A];if(Array.isArray(b))for(let F=0,P=b.length;F<P;F++)h(b[F],A,F,C);else h(b,A,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,S,C){if(u(M,E,S,C)===!0){let A=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let F=0;F<_.length;F++){let P=_[F],U=x(P,!0);d(P,M.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function d(M,E,S){typeof M=="number"||typeof M=="boolean"?E[S]=M:M.isMatrix3?(E[S]=M.elements[0],E[S+1]=M.elements[1],E[S+2]=M.elements[2],E[S+3]=0,E[S+4]=M.elements[3],E[S+5]=M.elements[4],E[S+6]=M.elements[5],E[S+7]=0,E[S+8]=M.elements[6],E[S+9]=M.elements[7],E[S+10]=M.elements[8],E[S+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-S),S):M.toArray(E,S)}function u(M,E,S,C){let A=M.value,_=E+"_"+S;if(Array.isArray(A)){C[_]===void 0&&(C[_]=[]);let b=C[_],F=!1;for(let P=0;P<A.length;P++)f(A[P],b,P)===!0&&(F=!0);return F}return f(A,C,_)}function f(M,E,S){if(E[S]===void 0)return typeof M=="number"||typeof M=="boolean"?E[S]=M:ArrayBuffer.isView(M)?E[S]=M.slice():E[S]=M.clone(),!0;{let C=E[S];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return E[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(M){let E=M.uniforms,S=0,C=16;for(let _=0,b=E.length;_<b;_++){let F=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,U=F.length;P<U;P++){let k=F[P],L=Array.isArray(k.value)?k.value:[k.value],T=Array.isArray(E[_])||Array.isArray(k.value),O=S;for(let B=0,nt=L.length;B<nt;B++){let X=L[B],Q=x(X,T),tt=S%C,ht=tt%Q.boundary,wt=tt+ht;S+=ht,wt!==0&&C-wt<Q.storage&&(S+=C-wt),B===0&&(O=S),S+=Q.storage}let H=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new H((S-O)/Float32Array.BYTES_PER_ELEMENT),k.__offset=O}}let A=S%C;return A>0&&(S+=C-A),M.__size=S,M.__cache={},this}function x(M,E){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let E=M.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:g}}var E0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function C0(){return Un===null&&(Un=new Mi(E0,16,16,di,An),Un.name="DFG_LUT",Un.minFilter=Oe,Un.magFilter=Oe,Un.wrapS=Pn,Un.wrapT=Pn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var za=class{constructor(t={}){let{canvas:e=Lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,p=new Set([ra,sa,ia]),g=new Set([ln,Tn,es,Ai,ta,ea]),M=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,A=null,_=[],b=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,k=null,L=null,T=null,O=null;this._outputColorSpace=sn;let H=0,B=0,nt=null,X=-1,Q=null,tt=new me,ht=new me,wt=null,Y=new Qt(0),xt=0,bt=e.width,Lt=e.height,yt=1,Gt=null,ge=null,Nt=new me(0,0,bt,Lt),ne=new me(0,0,bt,Lt),jt=!1,Ot=new Si,_e=new Lr,Me=!1,Ae=!1,ce=new le,tn=new z,ue=new me,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Ye(){return nt===null?yt:1}let N=n;function Ze(y,I){return e.getContext(y,I)}let oe,de,gt,ve,Dt,Ut,w,v,G,rt,j,ut,ft,J,$,dt,R,K,Z,pt,ct,lt,Ct;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){let I="webgl2";if(N=Ze(I,y),N===null)throw Ze(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(y){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Bt("WebGLRenderer: "+y.message),y}function Vt(){oe=new zp(N),oe.init(),ct=new M0(N,oe),de=new Cp(N,oe,t,ct),gt=new v0(N,oe),de.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),L=N.createFramebuffer(),T=N.createFramebuffer(),O=N.createFramebuffer(),ve=new Vp(N),Dt=new r0,Ut=new y0(N,oe,gt,Dt,de,ct,ve),w=new Bp(P),v=new Hu(N),lt=new Ap(N,v),G=new kp(N,v,ve,lt),rt=new Wp(N,G,v,lt,ve),K=new Hp(N,de,Ut),$=new Rp(Dt),j=new s0(P,w,oe,de,lt,$),ut=new T0(P,Dt),ft=new o0,J=new f0(oe),R=new Tp(P,w,gt,rt,m,c),dt=new x0(P,rt,de),Ct=new A0(N,ve,de,gt),Z=new Ep(N,oe,ve),pt=new Gp(N,oe,ve),ve.programs=j.programs,P.capabilities=de,P.extensions=oe,P.properties=Dt,P.renderLists=ft,P.shadowMap=dt,P.state=gt,P.info=ve}x!==ln&&(F=new qp(x,e.width,e.height,o,s,r));let ot=new fl(P,N);this.xr=ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(y){y!==void 0&&(yt=y,this.setSize(bt,Lt,!1))},this.getSize=function(y){return y.set(bt,Lt)},this.setSize=function(y,I,q=!0){if(ot.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=y,Lt=I,e.width=Math.floor(y*yt),e.height=Math.floor(I*yt),q===!0&&(e.style.width=y+"px",e.style.height=I+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(bt*yt,Lt*yt).floor()},this.setDrawingBufferSize=function(y,I,q){bt=y,Lt=I,yt=q,e.width=Math.floor(y*q),e.height=Math.floor(I*q),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(x===ln){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(Nt)},this.setViewport=function(y,I,q,V){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,I,q,V),gt.viewport(tt.copy(Nt).multiplyScalar(Ye()).round())},this.getScissor=function(y){return y.copy(ne)},this.setScissor=function(y,I,q,V){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,I,q,V),gt.scissor(ht.copy(ne).multiplyScalar(Ye()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){gt.setScissorTest(jt=y)},this.setOpaqueSort=function(y){Gt=y},this.setTransparentSort=function(y){ge=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,q=!0){let V=0;if(y){let W=!1;if(nt!==null){let vt=nt.texture.format;W=p.has(vt)}if(W){let vt=nt.texture.type,Tt=g.has(vt),_t=R.getClearColor(),St=R.getClearAlpha(),Rt=_t.r,Ht=_t.g,Yt=_t.b;Tt?(M[0]=Rt,M[1]=Ht,M[2]=Yt,M[3]=St,N.clearBufferuiv(N.COLOR,0,M)):(E[0]=Rt,E[1]=Ht,E[2]=Yt,E[3]=St,N.clearBufferiv(N.COLOR,0,E))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),R.dispose(),ft.dispose(),J.dispose(),Ut.dispose(),Dt.dispose(),w.dispose(),rt.dispose(),G.dispose(),lt.dispose(),Ct.dispose(),j.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Wt),ot.removeEventListener("sessionend",Jt),Ne.stop()};function Pt(y){y.preventDefault(),Yo("WebGLRenderer: Context Lost."),U=!0}function zt(){Yo("WebGLRenderer: Context Restored."),U=!1;let y=ve.autoReset,I=dt.enabled,q=dt.autoUpdate,V=dt.needsUpdate,W=dt.type;Vt(),ve.autoReset=y,dt.enabled=I,dt.autoUpdate=q,dt.needsUpdate=V,dt.type=W}function mt(y){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ie(y){let I=y.target;I.removeEventListener("dispose",ie),D(I)}function D(y){it(y),Dt.remove(y)}function it(y){let I=Dt.get(y).programs;I!==void 0&&(I.forEach(function(q){j.releaseProgram(q)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,q,V,W,vt){I===null&&(I=De);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,_t=eu(y,I,q,V,W);gt.setMaterial(V,Tt);let St=q.index,Rt=1;if(V.wireframe===!0){if(St=G.getWireframeAttribute(q),St===void 0)return;Rt=2}let Ht=q.drawRange,Yt=q.attributes.position,At=Ht.start*Rt,Zt=(Ht.start+Ht.count)*Rt;vt!==null&&(At=Math.max(At,vt.start*Rt),Zt=Math.min(Zt,(vt.start+vt.count)*Rt)),St!==null?(At=Math.max(At,0),Zt=Math.min(Zt,St.count)):Yt!=null&&(At=Math.max(At,0),Zt=Math.min(Zt,Yt.count));let be=Zt-At;if(be<0||be===1/0)return;lt.setup(W,V,_t,q,St);let fe,he=Z;if(St!==null&&(fe=v.get(St),he=pt,he.setIndex(fe)),W.isMesh)V.wireframe===!0?(gt.setLineWidth(V.wireframeLinewidth*Ye()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(W.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),gt.setLineWidth(ze*Ye()),W.isLineSegments?he.setMode(N.LINES):W.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else W.isPoints?he.setMode(N.POINTS):W.isSprite&&he.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))he.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ze=W._multiDrawStarts,Et=W._multiDrawCounts,Je=W._multiDrawCount,se=St?v.get(St).bytesPerElement:1,fi=Dt.get(V).currentProgram.getUniforms();for(let ke=0;ke<Je;ke++)fi.setValue(N,"_gl_DrawID",ke),he.render(ze[ke]/se,Et[ke])}else if(W.isInstancedMesh)he.renderInstances(At,be,W.count);else if(q.isInstancedBufferGeometry){let ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,ze);he.renderInstances(At,be,Et)}else he.render(At,be)};function st(y,I,q,V){k!==null&&y.isNodeMaterial&&k.setObject(V,y),Me===!0&&$.setState(y,q,!1),y.transparent===!0&&y.side===mn&&y.forceSinglePass===!1?(y.side=Ke,y.needsUpdate=!0,_n(y,I,V),y.side=ui,y.needsUpdate=!0,_n(y,I,V),y.side=mn):_n(y,I,V)}this.compile=function(y,I,q=null){q===null&&(q=y),k!==null&&k.renderStart(y,I,q),A=J.get(q),A.init(I),b.push(A),q.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),y!==q&&y.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),Ae=this.localClippingEnabled,Me=$.init(this.clippingPlanes,Ae),Me===!0&&$.setGlobalState(this.clippingPlanes,I),k!==null&&dt.render(A.state.shadowsArray,q,I);let V=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let vt=W.material;if(vt)if(Array.isArray(vt))for(let Tt=0;Tt<vt.length;Tt++){let _t=vt[Tt];st(_t,q,I,W),V.add(_t)}else st(vt,q,I,W),V.add(vt)}),A=b.pop(),k!==null&&k.renderEnd(),V},this.compileAsync=function(y,I,q=null){let V=this.compile(y,I,q);return new Promise(W=>{function vt(){if(V.forEach(function(Tt){let St=Dt.get(Tt).currentProgram;(St===void 0||St.isReady())&&V.delete(Tt)}),V.size===0){W(y);return}setTimeout(vt,10)}oe.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let at=null;function It(y){at&&at(y)}function Wt(){Ne.stop()}function Jt(){Ne.start()}let Ne=new lh;Ne.setAnimationLoop(It),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(y){at=y,ot.setAnimationLoop(y),y===null?Ne.stop():Ne.start()},ot.addEventListener("sessionstart",Wt),ot.addEventListener("sessionend",Jt),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(y,I);let q=ot.enabled===!0&&ot.isPresenting===!0,V=F!==null&&(nt===null||q)&&F.begin(P,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(I),I=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,nt),A=J.get(y,b.length),A.init(I),A.state.textureUnits=Ut.getTextureUnits(),b.push(A),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?_e.setFromArrayCamera(I):Ot.setFromProjectionMatrix(ce,dn,I.reversedDepth),Ae=this.localClippingEnabled,Me=$.init(this.clippingPlanes,Ae),C=ft.get(y,_.length),C.init(),_.push(C),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let Tt=P.xr.getDepthSensingMesh();Tt!==null&&On(Tt,I,-1/0,P.sortObjects)}On(y,I,0,P.sortObjects),C.finish(),k!==null&&k.updateLights(A.state.lightsArray),P.sortObjects===!0&&C.sort(Gt,ge),qe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,qe&&R.addToRenderList(C,y),this.info.autoReset===!0&&this.info.reset(),Me===!0&&$.beginShadows();let W=A.state.shadowsArray;if(dt.render(W,y,I),Me===!0&&$.endShadows(),(V&&F.hasRenderPass())===!1){let Tt=C.opaque,_t=C.transmissive;if(A.setupLights(),I.isArrayCamera){let St=I.cameras;if(_t.length>0)for(let Rt=0,Ht=St.length;Rt<Ht;Rt++){let Yt=St[Rt];et(Tt,_t,y,Yt)}qe&&R.render(y);for(let Rt=0,Ht=St.length;Rt<Ht;Rt++){let Yt=St[Rt];os(C,y,Yt,Yt.viewport)}}else _t.length>0&&et(Tt,_t,y,I),qe&&R.render(y),os(C,y,I)}nt!==null&&B===0&&(Ut.updateMultisampleRenderTarget(nt),Ut.updateRenderTargetMipmap(nt)),V&&F.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),lt.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(A=b[b.length-1],Ut.setTextureUnits(A.state.textureUnits),Me===!0&&$.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,k!==null&&k.renderEnd()};function On(y,I,q,V){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){let Tt=I.isArrayCamera?_e:Ot;if(!y.frustumCulled||y.intersectsFrustum(Tt)){V&&ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);let _t=rt.update(y),St=y.material;St.visible&&C.push(y,_t,St,q,ue.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let Tt=I.isArrayCamera?_e:Ot;if(!y.frustumCulled||y.intersectsFrustum(Tt)){let _t=rt.update(y),St=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ue.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ue.copy(_t.boundingSphere.center)),ue.applyMatrix4(y.matrixWorld).applyMatrix4(ce)),Array.isArray(St)){let Rt=_t.groups;for(let Ht=0,Yt=Rt.length;Ht<Yt;Ht++){let At=Rt[Ht],Zt=St[At.materialIndex];Zt&&Zt.visible&&C.push(y,_t,Zt,q,ue.z,At,I)}}else St.visible&&C.push(y,_t,St,q,ue.z,null,I)}}}let vt=y.children;for(let Tt=0,_t=vt.length;Tt<_t;Tt++)On(vt[Tt],I,q,V)}function os(y,I,q,V){let{opaque:W,transmissive:vt,transparent:Tt}=y;A.setupLightsView(q),Me===!0&&$.setGlobalState(P.clippingPlanes,q),V&&gt.viewport(tt.copy(V)),W.length>0&&Kt(W,I,q),vt.length>0&&Kt(vt,I,q),Tt.length>0&&Kt(Tt,I,q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function et(y,I,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){let At=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new rn(1,1,{generateMipmaps:!0,type:At?An:ln,minFilter:wn,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let vt=A.state.transmissionRenderTarget[V.id],Tt=V.viewport||tt;vt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);let _t=P.getRenderTarget(),St=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(vt),P.getClearColor(Y),xt=P.getClearAlpha(),xt<1&&P.setClearColor(16777215,.5),P.clear(),qe&&R.render(q);let Ht=P.toneMapping;P.toneMapping=Nn;let Yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),Me===!0&&$.setGlobalState(P.clippingPlanes,V),Kt(y,q,V),Ut.updateMultisampleRenderTarget(vt),Ut.updateRenderTargetMipmap(vt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Zt=0,be=I.length;Zt<be;Zt++){let fe=I[Zt],{object:he,geometry:ze,material:Et,group:Je}=fe;if(Et.side===mn&&he.layers.test(V.layers)){let se=Et.side;Et.side=Ke,Et.needsUpdate=!0,ye(he,q,V,ze,Et,Je),Et.side=se,Et.needsUpdate=!0,At=!0}}At===!0&&(Ut.updateMultisampleRenderTarget(vt),Ut.updateRenderTargetMipmap(vt))}P.setRenderTarget(_t,St,Rt),P.setClearColor(Y,xt),Yt!==void 0&&(V.viewport=Yt),P.toneMapping=Ht}function Kt(y,I,q){let V=I.isScene===!0?I.overrideMaterial:null;for(let W=0,vt=y.length;W<vt;W++){let Tt=y[W],{object:_t,geometry:St,group:Rt}=Tt,Ht=Tt.material;Ht.allowOverride===!0&&V!==null&&(Ht=V),_t.layers.test(q.layers)&&ye(_t,I,q,St,Ht,Rt)}}function ye(y,I,q,V,W,vt){k!==null&&W.isNodeMaterial&&k.setObject(y,W),y.onBeforeRender(P,I,q,V,W,vt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(P,I,q,V,y,vt),W.transparent===!0&&W.side===mn&&W.forceSinglePass===!1?(W.side=Ke,W.needsUpdate=!0,P.renderBufferDirect(q,I,V,W,y,vt),W.side=ui,W.needsUpdate=!0,P.renderBufferDirect(q,I,V,W,y,vt),W.side=mn):P.renderBufferDirect(q,I,V,W,y,vt),y.onAfterRender(P,I,q,V,W,vt)}function Bn(y){let I=0;for(let q of y)q.texture!==null&&I++;return I}function _n(y,I,q){I.isScene!==!0&&(I=De);let V=Dt.get(y),W=A.state.lights,vt=A.state.shadowsArray,Tt=W.state.version,_t=j.getParameters(y,W.state,vt,I,q,A.state.lightProbeGridArray),St=j.getProgramCacheKey(_t),Rt=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;let Ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=w.get(y.envMap||V.environment,Ht),V.envMapRotation=V.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",ie),Rt=new Map,V.programs=Rt,V.programVariants=new Map);let Yt=Rt.get(St);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===Tt)return Tl(y,_t),Yt}else _t.uniforms=j.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,q,_t),y.onBeforeCompile(_t,P),Yt=j.acquireProgram(_t,St),Rt.set(St,Yt),V.uniforms=_t.uniforms;let At=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=$.uniform),Tl(y,_t),V.needsLights=iu(y),V.lightsStateVersion=Tt,V.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=Bn(A.state.lightProbeGridArray),V.currentProgram=Yt,V.uniformsList=null,Yt}function tu(y,I,q,V,W){let vt=Dt.get(y),Tt=vt.currentProgram.id+","+V+","+W,_t=vt.programVariants.get(Tt);return _t===void 0?(_t=_n(y,I,q),vt.programVariants.set(Tt,_t)):(vt.currentProgram=_t,vt.uniformsList=null,vt.outputColorSpace=V,vt.toneMapping=W),_t}function wl(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=ns.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Tl(y,I){let q=Dt.get(y);q.outputColorSpace=I.outputColorSpace,q.batching=I.batching,q.batchingColor=I.batchingColor,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.instancingMorph=I.instancingMorph,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function eu(y,I,q,V,W){I.isScene!==!0&&(I=De),Ut.resetTextureUnits();let vt=I.fog,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,_t=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:qt.workingColorSpace,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Rt=w.get(V.envMap||Tt,St),Ht=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Yt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!q.morphAttributes.position,Zt=!!q.morphAttributes.normal,be=!!q.morphAttributes.color,fe=Nn;V.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(fe=P.toneMapping);let he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ze=he!==void 0?he.length:0,Et=Dt.get(V),Je=A.state.lights;if(Me===!0&&(Ae===!0||y!==Q)){let xe=y===Q&&V.id===X;$.setState(V,y,xe)}let se=!1,fi=!1;V.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Je.state.version||W.isBatchedMesh&&Et.batching===!1||!W.isBatchedMesh&&Et.batching===!0||W.isBatchedMesh&&Et.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Et.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Et.instancing===!1||!W.isInstancedMesh&&Et.instancing===!0||W.isSkinnedMesh&&Et.skinning===!1||!W.isSkinnedMesh&&Et.skinning===!0||W.isInstancedMesh&&Et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Et.instancingMorph===!1&&W.morphTexture!==null||Et.envMap!==Rt||V.fog===!0&&Et.fog!==vt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==$.numPlanes||Et.numIntersection!==$.numIntersection)||Et.vertexAlphas!==Ht||Et.vertexTangents!==Yt||Et.morphTargets!==At||Et.morphNormals!==Zt||Et.morphColors!==be||Et.morphTargetsCount!==ze||Et.numLightProbeGrids!==Bn(A.state.lightProbeGridArray)?se=!0:(Et.outputColorSpace!==_t||Et.toneMapping!==fe)&&(fi=!0):(se=!0,Et.__version=V.version);let ke=Et.currentProgram;(se===!0||fi===!0)&&(ke=fi===!0?tu(V,I,W,_t,fe):_n(V,I,W),k&&V.isNodeMaterial&&k.onUpdateProgram(V,ke,Et));let Xs=!1,Qn=!1,pi=!1,te=ke.getUniforms(),Ue=Et.uniforms;if(gt.useProgram(ke.program)&&(Xs=!0,Qn=!0,pi=!0),V.id!==X&&(X=V.id,Qn=!0),Xs||Q!==y){gt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),te.setValue(N,"projectionMatrix",y.projectionMatrix),te.setValue(N,"viewMatrix",y.matrixWorldInverse);let Re=te.map.cameraPosition;Re!==void 0&&Re.setValue(N,tn.setFromMatrixPosition(y.matrixWorld)),de.logarithmicDepthBuffer&&te.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&te.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Qn=!0,pi=!0)}if(Et.needsLights&&(Je.state.sunShadowMap.length>0&&te.setValue(N,"sunShadowMap",Je.state.sunShadowMap,Ut),Je.state.directionalShadowMap.length>0&&te.setValue(N,"directionalShadowMap",Je.state.directionalShadowMap,Ut),Je.state.spotShadowMap.length>0&&te.setValue(N,"spotShadowMap",Je.state.spotShadowMap,Ut),Je.state.pointShadowMap.length>0&&te.setValue(N,"pointShadowMap",Je.state.pointShadowMap,Ut)),W.isSkinnedMesh){te.setOptional(N,W,"bindMatrix"),te.setOptional(N,W,"bindMatrixInverse");let xe=W.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),te.setValue(N,"boneTexture",xe.boneTexture,Ut))}W.isBatchedMesh&&(te.setOptional(N,W,"batchingTexture"),te.setValue(N,"batchingTexture",W._matricesTexture,Ut),te.setOptional(N,W,"batchingIdTexture"),te.setValue(N,"batchingIdTexture",W._indirectTexture,Ut),te.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&te.setValue(N,"batchingColorTexture",W._colorsTexture,Ut));let xn=q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&K.update(W,q,ke),(Qn||Et.receiveShadow!==W.receiveShadow)&&(Et.receiveShadow=W.receiveShadow,te.setValue(N,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(Ue.envMapIntensity.value=I.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=C0()),Qn){if(te.setValue(N,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&nu(Ue,pi),vt&&V.fog===!0&&ut.refreshFogUniforms(Ue,vt),ut.refreshMaterialUniforms(Ue,V,yt,Lt,A.state.transmissionRenderTarget[y.id]),Et.needsLights&&Et.numLightProbeGrids>0){let xe=S,Re=0;for(let zn of A.state.lightProbeGridArray)zn.texture!==null&&(xe.textures[Re]=zn.texture,xe.min[Re]=zn.boundingBox.min,xe.max[Re]=zn.boundingBox.max,xe.resolution[Re]=zn.resolution,Re++);for(let zn in xe)xe[zn].length=Re;Ue.probesSH.value=xe.textures,Ue.probesMin.value=xe.min,Ue.probesMax.value=xe.max,Ue.probesResolution.value=xe.resolution}ns.upload(N,wl(Et),Ue,Ut)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ns.upload(N,wl(Et),Ue,Ut),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&te.setValue(N,"center",W.center),te.setValue(N,"modelViewMatrix",W.modelViewMatrix),te.setValue(N,"normalMatrix",W.normalMatrix),te.setValue(N,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let xe=V.uniformsGroups;for(let Re=0,zn=xe.length;Re<zn;Re++){let El=xe[Re];Ct.update(El,ke),Ct.bind(El,ke)}}return ke}function nu(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function iu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,I,q){let V=Dt.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Dt.get(y.texture).__webglTexture=I,Dt.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let q=Dt.get(y);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,q=0){nt=y,H=I,B=q;let V=null,W=!1,vt=!1;if(y){let _t=Dt.get(y);if(_t.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(N.FRAMEBUFFER,_t.__webglFramebuffer),tt.copy(y.viewport),ht.copy(y.scissor),wt=y.scissorTest,gt.viewport(tt),gt.scissor(ht),gt.setScissorTest(wt),X=-1;return}else if(_t.__webglFramebuffer===void 0)Ut.setupRenderTarget(y);else if(_t.__hasExternalTextures)Ut.rebindTextures(y,Dt.get(y.texture).__webglTexture,Dt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ht=y.depthTexture;if(_t.__boundDepthTexture!==Ht){if(Ht!==null&&Dt.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(y)}}let St=y.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(vt=!0);let Rt=Dt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?V=Rt[I][q]:V=Rt[I],W=!0):y.samples>0&&Ut.useMultisampledRTT(y)===!1?V=Dt.get(y).__webglMultisampledFramebuffer:Array.isArray(Rt)?V=Rt[q]:V=Rt,tt.copy(y.viewport),ht.copy(y.scissor),wt=y.scissorTest}else tt.copy(Nt).multiplyScalar(yt).floor(),ht.copy(ne).multiplyScalar(yt).floor(),wt=jt;if(q!==0&&(V=L),gt.bindFramebuffer(N.FRAMEBUFFER,V)&&gt.drawBuffers(y,V),gt.viewport(tt),gt.scissor(ht),gt.setScissorTest(wt),W){let _t=Dt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,q)}else if(vt){let _t=I;for(let St=0;St<y.textures.length;St++){let Rt=Dt.get(y.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Rt.__webglTexture,q,_t)}}else if(y!==null&&q!==0){let _t=Dt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,q)}X=-1};function Al(y){let I=Dt.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=de.textureFormatReadable(y.format),I.__typeReadable=de.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,q,V,W,vt,Tt,_t=0){if(!(y&&y.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Dt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Tt!==void 0&&(St=St[Tt],Array.isArray(St)&&(St=St[0])),St){gt.bindFramebuffer(N.FRAMEBUFFER,St);try{let Rt=y.textures[_t],Ht=Rt.format,Yt=Rt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t);let At=Al(Rt);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-V&&q>=0&&q<=y.height-W&&N.readPixels(I,q,V,W,ct.convert(Ht),ct.convert(Yt),vt)}finally{let Rt=nt!==null?Dt.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(y,I,q,V,W,vt,Tt,_t=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Dt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Tt!==void 0&&(St=St[Tt],Array.isArray(St)&&(St=St[0])),St)if(I>=0&&I<=y.width-V&&q>=0&&q<=y.height-W){gt.bindFramebuffer(N.FRAMEBUFFER,St);let Rt=y.textures[_t],Ht=Rt.format,Yt=Rt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t);let At=Al(Rt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Zt),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(I,q,V,W,ct.convert(Ht),ct.convert(Yt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let be=nt!==null?Dt.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,be);let fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nc(N,fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Zt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Zt),N.deleteSync(fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,q=0){let V=Math.pow(2,-q),W=Math.floor(y.image.width*V),vt=Math.floor(y.image.height*V),Tt=I!==null?I.x:0,_t=I!==null?I.y:0;Ut.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Tt,_t,W,vt),gt.unbindTexture()},this.copyTextureToTexture=function(y,I,q=null,V=null,W=0,vt=0){let Tt,_t,St,Rt,Ht,Yt,At,Zt,be,fe=y.isCompressedTexture?y.mipmaps[vt]:y.image;if(q!==null)Tt=q.max.x-q.min.x,_t=q.max.y-q.min.y,St=q.isBox3?q.max.z-q.min.z:1,Rt=q.min.x,Ht=q.min.y,Yt=q.isBox3?q.min.z:0;else{let te=Math.pow(2,-W);Tt=Math.floor(fe.width*te),_t=Math.floor(fe.height*te),y.isDataArrayTexture?St=fe.depth:y.isData3DTexture?St=Math.floor(fe.depth*te):St=1,Rt=0,Ht=0,Yt=0}V!==null?(At=V.x,Zt=V.y,be=V.z):(At=0,Zt=0,be=0);let he=ct.convert(I.format),ze=ct.convert(I.type),Et;I.isData3DTexture?(Ut.setTexture3D(I,0),Et=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ut.setTexture2DArray(I,0),Et=N.TEXTURE_2D_ARRAY):(Ut.setTexture2D(I,0),Et=N.TEXTURE_2D),gt.activeTexture(N.TEXTURE0),gt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),gt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),gt.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Je=gt.getParameter(N.UNPACK_ROW_LENGTH),se=gt.getParameter(N.UNPACK_IMAGE_HEIGHT),fi=gt.getParameter(N.UNPACK_SKIP_PIXELS),ke=gt.getParameter(N.UNPACK_SKIP_ROWS),Xs=gt.getParameter(N.UNPACK_SKIP_IMAGES);gt.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),gt.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,Yt);let Qn=y.isDataArrayTexture||y.isData3DTexture,pi=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let te=Dt.get(y),Ue=Dt.get(I),xn=Dt.get(te.__renderTarget),xe=Dt.get(Ue.__renderTarget);gt.bindFramebuffer(N.READ_FRAMEBUFFER,xn.__webglFramebuffer),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<St;Re++)Qn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.get(y).__webglTexture,W,Yt+Re),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.get(I).__webglTexture,vt,be+Re)),N.blitFramebuffer(Rt,Ht,Rt+Tt,Ht+_t,At,Zt,At+Tt,Zt+_t,N.DEPTH_BUFFER_BIT,N.NEAREST);gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||Dt.has(y)){let te=Dt.get(y),Ue=Dt.get(I);gt.bindFramebuffer(N.READ_FRAMEBUFFER,T),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let xn=0;xn<St;xn++)Qn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,te.__webglTexture,W,Yt+xn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,te.__webglTexture,W),pi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,vt,be+xn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ue.__webglTexture,vt),W!==0?N.blitFramebuffer(Rt,Ht,Rt+Tt,Ht+_t,At,Zt,At+Tt,Zt+_t,N.COLOR_BUFFER_BIT,N.NEAREST):pi?N.copyTexSubImage3D(Et,vt,At,Zt,be+xn,Rt,Ht,Tt,_t):N.copyTexSubImage2D(Et,vt,At,Zt,Rt,Ht,Tt,_t);gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pi?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Et,vt,At,Zt,be,Tt,_t,St,he,ze,fe.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,vt,At,Zt,be,Tt,_t,St,he,fe.data):N.texSubImage3D(Et,vt,At,Zt,be,Tt,_t,St,he,ze,fe):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,At,Zt,Tt,_t,he,ze,fe.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,At,Zt,fe.width,fe.height,he,fe.data):N.texSubImage2D(N.TEXTURE_2D,vt,At,Zt,Tt,_t,he,ze,fe);gt.pixelStorei(N.UNPACK_ROW_LENGTH,Je),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,fi),gt.pixelStorei(N.UNPACK_SKIP_ROWS,ke),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,Xs),vt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Et),gt.unbindTexture()},this.initRenderTarget=function(y){Dt.get(y).__webglFramebuffer===void 0&&Ut.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ut.setTextureCube(y,0):y.isData3DTexture?Ut.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ut.setTexture2DArray(y,0):Ut.setTexture2D(y,0),gt.unbindTexture()},this.resetState=function(){H=0,B=0,nt=null,gt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};function pl(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function R0(i){let t=Array.from({length:256},()=>i()*2-1);return e=>{let n=Math.floor(e),s=e-n,r=s*s*(3-2*s),a=t[n&255],o=t[n+1&255];return a+(o-a)*r}}var ss=Math.PI*2,hn=-Math.PI/2,Le=class{constructor(t,e,n){this.w=t,this.h=e,this.r=pl(n),this.n=R0(this.r);let s=()=>{let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d",{willReadFrequently:!0});return a.fillStyle=a.strokeStyle="#fff",a.lineCap="round",a.lineJoin="round",a};this.m=s(),this.g=s(),this.d=s(),this.wm=s(),this.anchors={}}rand(t,e){return t+(e-t)*this.r()}anchor(t,e,n){this.anchors[t]=[e/this.w,1-n/this.h]}pack(){let{w:t,h:e}=this,n=this.m.getImageData(0,0,t,e).data,s=this.g.getImageData(0,0,t,e).data,r=this.d.getImageData(0,0,t,e).data,a=this.wm.getImageData(0,0,t,e).data,o=new Uint8Array(t*e*4);for(let c=0;c<e;c++){let l=c*t*4,h=(e-1-c)*t*4;for(let d=0;d<t*4;d+=4){let u=d>>2,f=Math.min(u,t-1-u,c,e-1-c)/(Math.min(t,e)*.03),m=f<1?n[l+d+3]*Math.max(0,f):n[l+d+3];o[h+d]=Math.min(a[l+d+3],m),o[h+d+1]=Math.min(s[l+d+3],m),o[h+d+2]=r[l+d+3],o[h+d+3]=m}}return{data:o,w:t,h:e,aspect:t/e,anchors:this.anchors}}};function Cn(i,t,e,n=0,s=null){let r=t.length;if(r<2)return;let a=[],o=[];for(let l=0;l<r;l++){let h=t[Math.max(0,l-1)],d=t[Math.min(r-1,l+1)],u=d[0]-h[0],f=d[1]-h[1],m=Math.hypot(u,f)||1;u/=m,f/=m;let x=-f,p=u,g=l/(r-1),M=e(g)*.5,E=s?s(l*.37+11.3)*n:0,S=s?s(l*.41+57.1)*n:0;a.push([t[l][0]+x*(M+E),t[l][1]+p*(M+E)]),o.push([t[l][0]-x*(M+S),t[l][1]-p*(M+S)])}i.beginPath(),i.moveTo(a[0][0],a[0][1]);for(let l=1;l<r;l++)i.lineTo(a[l][0],a[l][1]);for(let l=r-1;l>=0;l--)i.lineTo(o[l][0],o[l][1]);i.closePath(),i.fill();let c=e(1)*.5;c>.6&&(i.beginPath(),i.arc(t[r-1][0],t[r-1][1],c,0,ss),i.fill())}function ml(i,t,e,n,s,r,{turn:a=.3,bias:o=0,toward:c=hn,kink:l=0}={}){let h=[[t,e]],d=n,u=s/r;for(let f=1;f<=r;f++){d+=(i.r()-.5)*a+(c-d)*o,l&&i.r()<l&&(d+=(i.r()-.5)*1.1);let m=i.w*.1;t<m?d+=(hn+.75-d)*.4:t>i.w-m&&(d+=(hn-.75-d)*.4),e<i.h*.05&&(d+=((Math.cos(d)>=0?-.15:-Math.PI+.15)-d)*.4),t+=Math.cos(d)*u,e+=Math.sin(d)*u,h.push([t,e])}return{pts:h,a:d}}function We(i,t,e,n,s,r,{rough:a=.25,verts:o=22,rot:c=0}={}){i.beginPath();let l=t.r()*100;for(let h=0;h<=o;h++){let d=h/o*ss,u=1+t.n(l+h*.7)*a,f=Math.cos(d)*s*u,m=Math.sin(d)*r*u,x=f*Math.cos(c)-m*Math.sin(c),p=f*Math.sin(c)+m*Math.cos(c);h?i.lineTo(e+x,n+p):i.moveTo(e+x,n+p)}i.closePath(),i.fill()}function P0(i,t){let{m:e,d:n,n:s,w:r}=i;t.sort((a,o)=>a[1]-o[1]);for(let[a,o,c]of t){let l=c*1.18+6;a=Math.min(r-l,Math.max(l,a)),o=Math.max(l,o);let h=new Path2D,d=Math.round(i.rand(5,9)),u=i.rand(0,ss),f=i.r()*100;for(let m=0;m<=64;m++){let x=m/64*ss,p=.84+.16*Math.pow(Math.abs(Math.sin(x*d*.5+u)),.5)+s(f+x*2.2)*.07+Math.sin(x*41+u)*.012,g=a+Math.cos(x)*c*p*1.08,M=o+Math.sin(x)*c*p*.92;m?h.lineTo(g,M):h.moveTo(g,M)}h.closePath(),e.fill(h),n.globalCompositeOperation="destination-out",n.fill(h),n.globalCompositeOperation="source-over",n.save(),n.clip(h),n.globalAlpha=.62,n.beginPath(),n.ellipse(a-c*.12,o+c*.72,c*1.1,c*.78,0,0,ss),n.fill(),n.globalAlpha=.35;for(let m=0;m<7;m++)En(n,a+i.rand(-c,c)*.8,o+i.rand(-c*.2,c*.9),i.rand(1.5,c*.08+2));n.restore(),n.globalAlpha=1}}function En(i,t,e,n){i.beginPath(),i.arc(t,e,n,0,ss),i.fill()}function Be(i,t){i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n)),i.closePath(),i.fill()}function rs(i,t,e,n,s,r,a,o,c,l){let{pts:d,a:u}=ml(i,e,n,s,r,7,{turn:c.turn??.35,bias:c.bias??.04,toward:c.toward??hn,kink:c.kink??.15});if(Cn(t,d,m=>a*(1-m*.6),a*.08,i.n),c.curl&&o===0){let m=u,x=d[7][0],p=d[7][1],g=[[x,p]];for(let M=0;M<6;M++)m+=c.curl,x+=Math.cos(m)*r*.06,p+=Math.sin(m)*r*.06,g.push([x,p]);Cn(t,g,M=>a*.4*(1-M),0)}if(o<=0){l.push([d[7][0],d[7][1],u,a]);return}let f=2+(i.r()<(c.extra??.4)?1:0);for(let m=0;m<f;m++){let x=d[Math.floor(7*(.45+i.r()*.55))],p=c.spread??1.2;rs(i,t,x[0],x[1],u+(i.r()-.5)*p*2*(m===0?.6:1),r*(.55+i.r()*.25),a*(.55+i.r()*.12),o-1,c,l)}}function Ci(i,{W:t=1024,H:e=1536,glow:n=.5,crown:s=1,hollowEyes:r=!1,roots:a=1}={}){let o=new Le(t,e,i),{m:c,g:l,d:h,n:d}=o,u=e*.5,f=e*.985,m=e*o.rand(.44,.52),x=70,p=t*o.rand(.46,.54),g=o.rand(-.08,.08),M=[];for(let T=0;T<=x;T++){let O=T/x;M.push([p+d(O*2.6+3)*u*.06+g*O*u+Math.sin(O*7+i)*u*.01,f-O*(f-m)])}let E=u*o.rand(.12,.16),S=u*.04,C=T=>E*(1-T)+S*T+Math.exp(-T*10)*u*.13;Cn(c,M,C,u*.012,d);let A=Math.round(o.rand(4,6)*a);for(let T=0;T<A;T++){let O=T%2?1:-1,H=p+O*E*o.rand(.05,.35),B=f-e*o.rand(.035,.075),nt=Math.min(u*o.rand(.1,.2),O>0?t-H-30:H-30),X=f+e*.014,Q=[];for(let ht=0;ht<=20;ht++){let wt=ht/20;Q.push([H+O*nt*Math.pow(wt,.85)+d(wt*3+T*9)*u*.008,B+(X-B)*(1-Math.pow(1-wt,1.6))-Math.sin(wt*Math.PI)*e*.006])}let tt=u*o.rand(.05,.08);if(Cn(c,Q,ht=>tt*(1-.7*Math.pow(ht,.9)),u*.004,d),n>0){l.globalAlpha=.5*n,l.lineWidth=Math.max(1.2,tt*.1),l.beginPath(),Q.slice(1,15).forEach(([ht,wt],Y)=>Y?l.lineTo(ht,wt-tt*.12):l.moveTo(ht,wt-tt*.12)),l.stroke(),l.globalAlpha=1;for(let ht=2;ht<16;ht++)if(o.r()<.3*n){let[wt,Y]=Q[ht];En(l,wt+o.rand(-3,3),Y-tt*.3*(1-ht/20),o.rand(1.2,3))}}}let _=[],b=Math.round(o.rand(4,7));for(let T=0;T<b;T++){let O=o.rand(.45,.98),H=M[Math.floor(O*x)],B=o.r()<.5?-1:1;rs(o,c,H[0],H[1],hn+B*o.rand(.5,1.15),e*o.rand(.11,.17),C(O)*.42,3,{spread:.7,bias:.05,kink:.25},_)}let F=M[x];for(let T=0;T<3;T++)rs(o,c,F[0],F[1],hn+(T-1)*.5,e*.14,S*.9,3,{spread:.6},_);if(s>0){let T=[];for(let[O,H]of _){let B=Math.round(o.rand(1,2.4)*s);for(let nt=0;nt<B;nt++){let X=u*o.rand(.05,.085)*s;T.push([O+o.rand(-X,X)*.6,H+o.rand(-X*.5,X*.3),X])}}for(let O=0;O<_.length;O+=2){let[H,B]=_[O];T.push([F[0]+(H-F[0])*.62,F[1]+(B-F[1])*.62,u*o.rand(.07,.1)*s])}P0(o,T)}h.globalAlpha=.7;for(let T=0;T<26;T++){let O=o.rand(0,.85),H=o.rand(.05,.25);h.lineWidth=o.rand(1,3.5);let B=o.rand(-.38,.38);h.beginPath();for(let nt=0;nt<=12;nt++){let X=O+H*nt/12,Q=Math.min(x,Math.floor(X*x)),[tt,ht]=M[Q],wt=tt+B*C(X)+d(nt*.8+T*3)*3;nt?h.lineTo(wt,ht):h.moveTo(wt,ht)}h.stroke()}h.globalAlpha=1;let P=o.rand(.18,.4),U=M[Math.floor(P*x)],k=C(P)*o.rand(.18,.28);if(We(h,o,U[0]+o.rand(-.15,.15)*C(P),U[1],k*.6,k,{rough:.2}),r&&(En(l,U[0]-k*.18,U[1]-k*.1,Math.max(1.5,k*.07)),En(l,U[0]+k*.18,U[1]-k*.1,Math.max(1.5,k*.07))),n>0){let T=Math.round(o.rand(2,5)*n+1);for(let O=0;O<T;O++){let H=o.rand(.04,.45),[B,nt]=M[Math.floor(H*x)],X=o.r()<.5?-1:1,Q=B+X*C(H)*.5;for(let tt=0;tt<3;tt++){let ht=u*o.rand(.012,.03),wt=nt+tt*ht*.9;for(let Y of[c,l])Y.beginPath(),Y.ellipse(Q+X*ht*.3,wt,ht,ht*.32,0,X>0?-Math.PI/2:Math.PI/2,X>0?Math.PI/2:Math.PI*1.5,X<0),Y.fill()}}}o.anchor("base",p,f),o.anchor("top",F[0],F[1]);let L=M[Math.floor(.2*x)];return o.anchor("t20",L[0],L[1]),o.anchors.w20=[C(.2)/t,0],o.pack()}function Va(i,{W:t=640,H:e=1536,spire:n=!0}={}){let s=new Le(t,e,i),{m:r,d:a,n:o}=s,c=e*.99,l=t*.5+s.rand(-.03,.03)*t,h=s.rand(-.03,.03)*t,d=n?e*.02:-e*.05,u=[];for(let g=0;g<=50;g++){let M=g/50;u.push([l+h*M+o(M*3)*4,c-M*(c-d)])}let f=t*s.rand(.055,.075);Cn(r,u,g=>f*(1-g*.85)+Math.exp(-g*14)*t*.06,2,o);let m=e*s.rand(.55,.7),x=d+e*.03,p=1;for(;x<m;){let g=(x-d)/(m-d),M=t*(.04+.34*Math.pow(g,1.15))*s.rand(.82,1.12),E=l+h*(1-(c-x)/(c-d));for(let S of[p,-p]){if(s.r()<.12&&g>.3)continue;let C=M*s.rand(.28,.5),A=[[E,x-M*.05]],_=36;for(let b=1;b<=_;b++){let F=b/_;A.push([E+S*M*F,x-M*.03*Math.sin(F*Math.PI)+C*F])}for(let b=_;b>=0;b--){let F=b/_,P=[E+S*M*F,x+C*F],U=e*.015*(1-F*.45)*(.55+.9*s.r())*(.75+.25*Math.sin(F*9+i));A.push([P[0]+S*s.rand(-2,2),P[1]+U]),A.push([P[0]-S*M*.008,P[1]+U*.45])}Be(r,A);for(let b=0;b<4;b++)En(a,E+S*M*s.rand(.2,.9),x+C*.4+s.rand(-4,8),s.rand(1.5,4))}p=-p,x+=e*s.rand(.016,.028)*(.7+g*.6)}a.globalAlpha=.6;for(let g=0;g<10;g++){a.lineWidth=s.rand(1,2.5);let M=s.rand(-.35,.35)*f,E=s.rand(m,c);a.beginPath(),a.moveTo(l+M,E),a.lineTo(l+M+s.rand(-3,3),Math.min(c,E+s.rand(40,160))),a.stroke()}return a.globalAlpha=1,s.pack()}function gl(i,{W:t=768,H:e=1280}={}){let n=new Le(t,e,i),{m:s,d:r,n:a}=n,o=e*.985,c=t*n.rand(.45,.55),l=ml(n,c,o,hn,e*n.rand(.45,.6),30,{turn:.12,bias:.06,kink:.08}).pts,h=t*n.rand(.07,.1);Cn(s,l,m=>h*(1-m*.7)+Math.exp(-m*9)*t*.07,3,a);for(let m=0;m<4;m++){let x=m%2?1:-1,p=c+x*h*.3,g=Math.min(t*n.rand(.08,.15),x>0?t-p-30:p-30),M=[],E=o+e*.014;for(let S=0;S<=16;S++){let C=S/16;M.push([p+x*g*Math.pow(C,.85),o-e*.035+(E-o+e*.035)*(1-Math.pow(1-C,1.6))])}Cn(s,M,S=>h*.55*(1-.7*S),2,a)}let d=[],u=Math.round(n.rand(3,5));for(let m=0;m<u;m++){let x=l[Math.floor(n.rand(.4,1)*(l.length-1))];rs(n,s,x[0],x[1],hn+(n.r()<.5?-1:1)*n.rand(.4,1.3),e*n.rand(.12,.22),h*.4,4,{spread:.9,kink:.35,turn:.5,curl:n.rand(-.35,.35),extra:.3},d)}s.lineWidth=1.4;for(let[m,x]of d){if(n.r()<.5)continue;let p=n.rand(30,120);s.beginPath(),s.moveTo(m,x),s.quadraticCurveTo(m+n.rand(-8,8),x+p*.5,m+n.rand(-6,6),x+p),s.stroke()}let f=l[Math.floor(l.length*.3)];return We(r,n,f[0],f[1],h*.2,h*.35,{rough:.25}),n.pack()}function _l(i,{W:t=512,H:e=384,glow:n=0}={}){let s=new Le(t,e,i),{m:r,g:a}=s,o=Math.round(s.rand(7,12));for(let c=0;c<o;c++){let l=t*.5+s.rand(-.06,.06)*t,h=(c/(o-1)-.5)*2.4+s.rand(-.15,.15),d=e*s.rand(.55,.95),u=[],f=hn+h*.55,m=l,x=e;for(let p=0;p<=26;p++)u.push([m,x]),f+=h*.025+.012*Math.sign(h||1),m+=Math.cos(f)*d/26,x+=Math.sin(f)*d/26;r.lineWidth=2.2,r.beginPath(),u.forEach(([p,g],M)=>M?r.lineTo(p,g):r.moveTo(p,g)),r.stroke();for(let p=3;p<u.length-1;p++){let[g,M]=u[p],[E,S]=u[p+1],C=Math.atan2(S-M,E-g),A=(1-p/u.length)*e*.09+3;for(let _ of[-1,1]){let b=C+_*1.25;Be(r,[[g,M],[g+Math.cos(b)*A+Math.cos(C)*4,M+Math.sin(b)*A+Math.sin(C)*4],[E,S]])}}if(n&&s.r()<.6){let[p,g]=u[u.length-1];En(a,p,g,3),En(r,p,g,3)}}return s.pack()}function xl(i,{W:t=1024,H:e=256,spores:n=.03}={}){let s=new Le(t,e,i),{m:r,g:a,n:o}=s,c=Math.round(t*.28);for(let l=0;l<c;l++){let h=s.rand(t*.05,t*.95),d=(o(h*.012)+1)*.5,u=Math.pow(Math.sin(Math.PI*h/t),.7),f=e*(.18+.78*d*s.rand(.5,1))*u,m=s.rand(2.5,7),x=(s.r()-.5)*f*.55+o(h*.02+40)*f*.25;Be(r,[[h-m,e],[h-m*.3+x*.45,e-f*.55],[h+x,e-f],[h+m*.3+x*.5,e-f*.5],[h+m,e]]),s.r()<n&&(En(a,h+x,e-f,2.4),En(r,h+x,e-f,2.4))}return s.pack()}function vl(i,{W:t=768,H:e=384,moss:n=.5}={}){let s=new Le(t,e,i),{m:r,g:a,d:o}=s,c=Math.round(s.rand(2,4));for(let l=0;l<c;l++){let h=t*s.rand(.2,.8),d=t*s.rand(.14,.3),u=e*s.rand(.35,.8),f=[],m=9;for(let x=0;x<m;x++){let p=Math.PI+x/(m-1)*Math.PI;f.push([h+Math.cos(p)*d*s.rand(.8,1.1),e-Math.max(0,-Math.sin(p))*u*s.rand(.8,1.05)])}if(f.push([h+d,e],[h-d,e]),Be(r,f),o.lineWidth=2,o.beginPath(),o.moveTo(h+s.rand(-d,d)*.5,e-u*.8),o.lineTo(h+s.rand(-d,d)*.4,e-u*.3),o.stroke(),n){a.globalAlpha=n;for(let x=1;x<m-1;x++){let[p,g]=f[x];s.r()<.6&&We(a,s,p,g+4,s.rand(6,16),s.rand(3,6),{rough:.5})}a.globalAlpha=1}}return s.pack()}function vh(i,{W:t=640,H:e=1024}={}){let n=new Le(t,e,i),{m:s,d:r}=n,a=t*.5,o=t*.05;Be(s,[[a-o,e],[a-o*.8,e*.2],[a-o*.2,e*.17],[a+o*.9,e*.21],[a+o,e]]);let c=[{y:.26,dir:-1,len:.42,a:-.08},{y:.34,dir:1,len:.38,a:.1},{y:.43,dir:-1,len:.34,a:.14},{y:.51,dir:1,len:.4,a:-.12}];for(let l of c){let h=e*.055,d=t*l.len,u=e*l.y,f=a,m=Math.cos(l.a),x=Math.sin(l.a),p=(g,M)=>[f+(g*m-M*x)*l.dir,u+(g*x+M*m)];Be(s,[p(-o*1.4,-h/2),p(d-h*.6,-h/2),p(d,0),p(d-h*.6,h/2),p(-o*1.4,h/2)]),r.globalAlpha=.6,r.lineWidth=1.5;for(let g=0;g<3;g++){let M=(g-1)*h*.25,E=p(0,M),S=p(d*.8,M+n.rand(-2,2));r.beginPath(),r.moveTo(...E),r.lineTo(...S),r.stroke()}r.globalAlpha=1}s.lineWidth=5;for(let l=0;l<4;l++){let h=e*.6+l*9;s.beginPath(),s.moveTo(a-o*1.2,h),s.lineTo(a+o*1.2,h+6),s.stroke()}s.lineWidth=2.5;for(let l=0;l<5;l++){let h=a+n.rand(-o,o);s.beginPath(),s.moveTo(h,e*.63),s.quadraticCurveTo(h+n.rand(-12,12),e*.68,h+n.rand(-6,6),e*n.rand(.7,.76)),s.stroke()}return n.pack()}function yh(i,{W:t=1024,H:e=896}={}){let n=new Le(t,e,i),{m:s,d:r,wm:a}=n,o=e*.98;for(let f=0;f<5;f++)We(s,n,t*(.22+f*.14),o-6,t*.035,e*.03,{rough:.3});Be(s,[[t*.2,o-e*.03],[t*.205,e*.5],[t*.79,e*.49],[t*.8,o-e*.03]]),Be(s,[[t*.64,e*.4],[t*.645,e*.2],[t*.715,e*.205],[t*.71,e*.4]]);let c=[[t*.1,e*.55],[t*.5,e*.15],[t*.92,e*.54]];for(let f=20;f>=0;f--){let m=t*.1+t*.82*f/20;c.push([m,e*.55+(f%2?n.rand(10,26):n.rand(0,6))])}Be(s,c),r.globalAlpha=.65,r.lineWidth=2;for(let f=e*.6;f<o-20;f+=22)r.beginPath(),r.moveTo(t*.2,f+n.rand(-2,2)),r.lineTo(t*.8,f+n.rand(-2,2)),r.stroke();r.globalAlpha=1,Be(r,[[t*.57,o-e*.03],[t*.57,e*.66],[t*.68,e*.66],[t*.68,o-e*.03]]),a.lineWidth=3,a.beginPath(),a.moveTo(t*.678,e*.67),a.lineTo(t*.678,o-e*.04),a.stroke();let l=t*.29,h=t*.45,d=e*.63,u=e*.79;return a.fillRect(l,d,h-l,u-d),a.globalCompositeOperation="destination-out",a.fillRect((l+h)/2-4,d,8,u-d),a.fillRect(l,(d+u)/2-4,h-l,8),a.globalCompositeOperation="source-over",n.anchor("window",(l+h)/2,(d+u)/2),s.lineWidth=3,s.beginPath(),s.moveTo(t*.74,e*.58),s.lineTo(t*.74,e*.62),s.stroke(),We(s,n,t*.74,e*.645,t*.016,e*.026,{rough:.05}),We(a,n,t*.74,e*.645,t*.013,e*.022,{rough:.05}),n.anchor("lantern",t*.74,e*.645),n.anchor("chimney",t*.68,e*.2),n.pack()}function Mh(i,{W:t=1280,H:e=896}={}){let n=new Le(t,e,i),{m:s,g:r,d:a}=n,o=[[0,e],[0,e*.62]],c=0,l=e*.62;for(;c<t*.78;)c+=n.rand(30,80),l+=n.rand(-40,18),l=Math.max(e*.36,l),o.push([c,l]);o.push([t*.86,e*.4],[t*.88,e*.48],[t*.84,e*.62],[t*.92,e*.8],[t,e*.9],[t,e]),Be(s,o),a.lineWidth=2.5,a.globalAlpha=.7;for(let f=0;f<10;f++){let m=n.rand(.05,.8)*t;a.beginPath(),a.moveTo(m,e*n.rand(.55,.7)),a.lineTo(m+n.rand(-40,40),e*n.rand(.8,1)),a.stroke()}a.globalAlpha=1,r.globalAlpha=.5;for(let f=2;f<o.length-4;f++)n.r()<.5&&We(r,n,o[f][0],o[f][1]+5,n.rand(8,22),n.rand(3,7),{rough:.5});r.globalAlpha=1;let h=t*.62,d=o.reduce((f,m)=>Math.abs(m[0]-h)<Math.abs(f[0]-h)?m:f)[1]+6,u=[];for(let f=0;f<=30;f++){let m=f/30;u.push([h-m*m*t*.12,d-m*e*.34])}Cn(s,u,f=>t*.026*(1-f*.7),2,n.n);for(let f=0;f<6;f++){let[m,x]=u[Math.floor(n.rand(.35,1)*30)],p=t*n.rand(.06,.16),g=[[m,x]];for(let M=1;M<=10;M++)g.push([m-p*(M/10),x-Math.sin(M/10*Math.PI)*12+n.rand(-3,3)]);for(let M=10;M>=0;M--)g.push([m-p*(M/10)+n.rand(-4,4),x+n.rand(8,22)]);Be(s,g)}return n.pack()}function Sh(i,{W:t=512,H:e=768}={}){let n=new Le(t,e,i),{m:s,g:r}=n,a=e*.97,o=ml(n,t*.5,a,hn,e*.55,20,{turn:.15,bias:.08}).pts;Cn(s,o,l=>12*(1-l*.7),1,n.n);let c=[];for(let l=0;l<5;l++){let h=o[Math.floor(n.rand(.4,1)*20)];rs(n,s,h[0],h[1],hn+(n.r()-.5)*2,e*n.rand(.08,.16),4,1,{spread:.7},c)}for(let[l,h]of c)for(let d=0;d<5;d++){let u=l+n.rand(-26,26),f=h+n.rand(-22,14),m=n.rand(0,Math.PI);for(let x of[s,r])We(x,n,u,f,9,4.5,{rough:.05,rot:m})}for(let l=0;l<9;l++){let h=t*.5+(l-4)*t*.09+n.rand(-8,8),d=n.rand(10,26);s.lineWidth=3,s.beginPath(),s.moveTo(h,a+4),s.lineTo(h,a-d),s.stroke();for(let u of[s,r])u.beginPath(),u.ellipse(h,a-d,n.rand(6,11),5,0,Math.PI,0),u.fill()}return n.pack()}function bh(i,{W:t=448,H:e=1536}={}){let n=new Le(t,e,i),{m:s,g:r}=n,a=t*.5,o=e*.17,c=e*.2,l=[];for(let d=0;d<=16;d++){let u=d/16;l.push([a-t*.33+u*t*.66,e*(.94+(d%2?n.rand(.01,.05):0))])}Be(s,[[a-t*.14,c],[a+t*.14,c],[a+t*.22,e*.5],...l.reverse(),[a-t*.22,e*.5]]),We(s,n,a,o,t*.07,e*.026,{rough:.1});for(let d of[-1,1]){let u=[];for(let x=0;x<=20;x++){let p=x/20;u.push([a+d*(t*.15+Math.sin(p*2.6)*t*.07),c+p*e*.55])}Cn(s,u,x=>16*(1-x*.5),1.5,n.n);let[f,m]=u[20];s.lineWidth=3.2;for(let x=0;x<4;x++)s.beginPath(),s.moveTo(f,m),s.quadraticCurveTo(f+d*(x-1.5)*6,m+40,f+d*(x-1.5)*9+d*4,m+n.rand(70,95)),s.stroke()}let h=[];for(let d of[-1,1])rs(n,s,a+d*t*.03,o-e*.015,hn+d*.55,e*.08,7,3,{spread:.7,kink:.4,turn:.45,toward:hn+d*.4,bias:.06},h);for(let d of[-1,1])for(let u of[s,r])En(u,a+d*t*.025,o+2,3.2);return n.anchor("eyes",a,o+2),n.pack()}function wh(i,{W:t=640,H:e=384}={}){let n=new Le(t,e,i),{m:s}=n;return[.22,.4,.58,.76].forEach((a,o)=>{let c=t*n.rand(.62,.8)*(o===3?.85:1),l=[];for(let f=0;f<=30;f++){let m=f/30,x=Math.pow(m,3)*e*.18;l.push([t-m*c,e*a+x+Math.sin(m*9+o)*2])}let h=f=>1+.35*Math.exp(-Math.pow((f-.33)*14,2))+.3*Math.exp(-Math.pow((f-.66)*14,2));Cn(s,l,f=>e*.075*(1-f*.55)*h(f),.8,n.n);let[d,u]=l[30];Be(s,[[d+6,u-6],[d-20,u+10],[d+2,u+6]])}),n.pack()}function Th(i,{W:t=320,H:e=896}={}){let n=new Le(t,e,i),{m:s,d:r,wm:a}=n,o=t*.3;Be(s,[[o-9,e],[o-7,e*.08],[o+7,e*.08],[o+9,e]]),s.lineWidth=9,s.beginPath(),s.moveTo(o,e*.1),s.quadraticCurveTo(o+t*.25,e*.05,o+t*.42,e*.1),s.stroke();let c=o+t*.42;s.lineWidth=2,s.beginPath(),s.moveTo(c,e*.1),s.lineTo(c,e*.16),s.stroke(),s.fillRect(c-t*.09,e*.155,t*.18,e*.012),s.fillRect(c-t*.09,e*.3,t*.18,e*.012),We(s,n,c,e*.23,t*.15,e*.075,{rough:.02,verts:30}),We(a,n,c,e*.23,t*.14,e*.07,{rough:.02,verts:30}),r.globalAlpha=.45,r.lineWidth=2;for(let l=-2;l<=2;l++)r.beginPath(),r.ellipse(c,e*.23+l*e*.022,t*.14*Math.cos(l*.35),3,0,0,Math.PI),r.stroke();return r.globalAlpha=1,n.anchor("lantern",c,e*.23),n.pack()}function Ah(i,{W:t=512,H:e=1024}={}){let n=new Le(t,e,i),{m:s,d:r,g:a,wm:o}=n,c=t*.5,l=t*.045;Be(s,[[c-l*1.15,e],[c-l,e*.075],[c,e*.045],[c+l,e*.075],[c+l*1.15,e]]),r.globalAlpha=.5,r.lineWidth=2;for(let x=0;x<3;x++){let p=c+(x-1)*l*.5;r.beginPath(),r.moveTo(p,e*.1),r.lineTo(p+n.rand(-3,3),e*.95),r.stroke()}r.globalAlpha=1;let h=t*.14,d=e*.1;s.lineWidth=12,s.beginPath(),s.moveTo(c,e*.11),s.quadraticCurveTo((c+h)/2,e*.085,h,d),s.stroke(),s.lineWidth=2.5,s.beginPath(),s.moveTo(h,d),s.lineTo(h,e*.15),s.stroke();let u=e*.19,f=t*.075,m=e*.04;s.fillRect(h-f*.8,u-m-4,f*1.6,7),s.fillRect(h-f*.8,u+m-3,f*1.6,7),We(s,n,h,u,f,m,{rough:.02,verts:30}),We(o,n,h,u,f*.92,m*.92,{rough:.02,verts:30}),r.globalAlpha=.4,r.lineWidth=2;for(let x=-2;x<=2;x++)r.beginPath(),r.ellipse(h,u+x*m*.3,f*.92*Math.cos(x*.38),3,0,0,Math.PI),r.stroke();r.globalAlpha=1,n.anchor("lantern",h,u);for(let x=0;x<5;x++)We(s,n,c+n.rand(-l*2.2,l*2.2),e-n.rand(4,14),t*n.rand(.025,.05),e*.012,{rough:.4});for(let x=0;x<4;x++){let p=c+n.rand(-l*2.4,l*2.4),g=e-n.rand(10,30);for(let M of[s,a])We(M,n,p,g,t*.012,e*.005,{rough:.1})}return n.pack()}function Eh(i,{W:t=1024,H:e=208,name:n="",value:s="",dir:r=1}={}){let a=new Le(t,e,i),{m:o,g:c,d:l,wm:h}=a,d=a.rand(-.025,.025),u=e/2,f=e*.74,m=26,x=t-120,p=t-22,g=Math.cos(d),M=Math.sin(d),E=([L,T])=>{let O=L-t/2,H=T-u,B=t/2+O*g-H*M,nt=u+O*M+H*g;return[r>0?B:t-B,nt]},S=[];for(let L=0;L<=12;L++)S.push([m+(x-m)*L/12,u-f/2+a.rand(-1.5,1.5)]);S.push([p,u]);for(let L=12;L>=0;L--)S.push([m+(x-m)*L/12,u+f/2+a.rand(-1.5,1.5)]);S.push([m-6,u+a.rand(-8,8)]);let C=S.map(E);Be(o,C),l.globalAlpha=.55,l.lineWidth=1.6;for(let L=0;L<4;L++){let T=u+(L-1.5)*f*.22;l.beginPath(),l.moveTo(...E([m+10,T])),l.lineTo(...E([x-30,T+a.rand(-3,3)])),l.stroke()}l.globalAlpha=1,c.lineWidth=9,c.beginPath(),C.forEach((L,T)=>T?c.lineTo(...L):c.moveTo(...L)),c.closePath(),c.stroke();let A=x-34,_=e*.34;h.font=`800 ${_}px Syne, sans-serif`;let b=s?h.measureText(s).width:0,F=e*.34,P=()=>{h.font=`600 ${F}px "Inter Tight", system-ui, sans-serif`,"letterSpacing"in h&&(h.letterSpacing=`${(F*.06).toFixed(1)}px`)};P();let U=A-b-36-(m+44);for(;h.measureText(n).width>U&&F>18;)F-=2,P();h.save(),h.translate(t/2,u),h.rotate(r>0?d:-d),h.translate(-t/2,-u);let k=r>0?m+44:t-A;return h.textBaseline="middle",h.textAlign="left",h.fillText(n,k,u+F*.04),s&&("letterSpacing"in h&&(h.letterSpacing="0px"),h.font=`800 ${_}px Syne, sans-serif`,h.textAlign="right",h.fillText(s,r>0?A:t-m-48,u+_*.03)),h.restore(),a.pack()}function Ch(i,{W:t=640,H:e=256}={}){let n=new Le(t,e,i),{m:s,wm:r}=n;for(let o=0;o<11;o++){let c=o/10;We(s,n,t*(.12+c*.76),e*.9-Math.sin(c*Math.PI)*e*.1,t*n.rand(.035,.055),e*n.rand(.07,.11),{rough:.25})}let a=[[-.5,.36],[.45,.64],[-.15,.5],[.2,.42]];for(let[o,c]of a){let l=t*c,h=e*.72,d=t*.2,u=[[l-Math.cos(o)*d,h+Math.sin(-o)*d*.3+18],[l+Math.cos(o)*d,h-Math.sin(-o)*d*.3-30]];s.lineWidth=20,s.beginPath(),s.moveTo(...u[0]),s.lineTo(...u[1]),s.stroke()}for(let o=0;o<40;o++)En(r,t*n.rand(.33,.67),e*n.rand(.6,.85),n.rand(1.5,4));return n.pack()}var Ri=`
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }
  float pathX(float z) { return 2.2 * sin(z * 0.045) + 1.2 * sin(z * 0.11 + 1.3); }
`,Ws=`
  uniform vec4 uLights[8];
  uniform vec3 uWarm;
  uniform vec3 uGlow;
  uniform vec3 uFog;
  uniform vec3 uFogLow;
  uniform float uFogDensity;
  uniform float uTime;
  uniform float uNight;     // 0 = late afternoon, 1 = deep night
  uniform vec3 uLightDir;   // where edge light comes from (low sun by day, moon by night)
`,yl=`
  vec3 applyFog(vec3 col, float depth, float y, float keep) {
    float fd = depth * uFogDensity;
    float fog = 1.0 - exp(-fd * fd);
    float low = (1.0 - smoothstep(0.0, 3.5, y)) * smoothstep(3.0, 28.0, depth);
    fog = clamp(fog + low * mix(0.1, 0.3, uNight), 0.0, 1.0);
    return mix(col, mix(uFog, uFogLow, low), fog * (1.0 - keep));
  }
  float warmAt(vec3 p, float falloff) {
    float acc = 0.0;
    for (int i = 0; i < 8; i++) {
      vec3 d = uLights[i].xyz - p;
      acc += uLights[i].w / (1.0 + dot(d, d) * falloff);
    }
    return acc;
  }
`,Rh=`
  attribute vec4 aP1; // shade, seed, sway, emissive (warm)
  attribute vec4 aP2; // opacity, flip, glow, rim
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec4 vP1;
  varying vec4 vP2;
  void main() {
    vUv = uv; vP1 = aP1; vP2 = aP2;
    vec3 pos = position;
    float s = aP1.z * uv.y * uv.y;
    pos.x += s * (sin(uTime * 0.55 + aP1.y * 17.0) * 0.012 + sin(uTime * 1.31 + aP1.y * 7.0) * 0.004);
    vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Ph=`
  uniform sampler2D map;
  uniform float uRimPx;
  uniform vec3 uBase;
  uniform vec3 uMoon;
  ${Ws}
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec4 vP1;
  varying vec4 vP2;
  ${Ri}
  ${yl}
  void main() {
    vec4 t = texture2D(map, vUv);
    float a = t.a * vP2.x;
    if (a < 0.03) discard;
    vec2 texel = 1.0 / vec2(textureSize(map, 0));
    float flip = vP2.y;

    // Moonlight: an edge is lit where the silhouette ends toward the moon (upper right)
    vec2 mo = vec2(uLightDir.x * flip, uLightDir.y) * uRimPx * texel;
    float day = 1.0 - uNight;
    float rim = t.a * (1.0 - texture2D(map, vUv + mo).a);
    float rimWide = t.a * (1.0 - texture2D(map, vUv + mo * 3.0).a);

    // Painterly body: dark, mottled, never flat
    float n = fbm(vWorld.xy * vec2(1.3, 0.7) + vP1.y * 13.0);
    float grain = vnoise(vWorld.xy * 11.0 + vP1.y * 5.0);
    vec3 col = uBase * vP1.x * (0.7 + 0.6 * n);
    col *= 1.0 - t.b * 0.6;
    col += uMoon * mix(0.09, 0.035, uNight) * smoothstep(2.0, 22.0, vWorld.y);

    // Cel-banded moon rim, cold teal-white
    // Moonlight falls on the canopy; trunks below stay in shadow
    float high = 0.25 + 0.75 * smoothstep(1.5, 14.0, vWorld.y);
    float band = step(0.5, rim) * 0.42 + step(0.5, rimWide) * 0.05;
    col += uMoon * band * high * vP2.w * (0.45 + 0.7 * grain);
    // By day, whole faces that turn toward the low sun catch warm light (gives each leaf mass volume)
    float broad = t.a * (1.0 - texture2D(map, vUv + mo * 7.0).a);
    float broad2 = t.a * (1.0 - texture2D(map, vUv + mo * 16.0).a);
    col += uMoon * (broad * 0.16 + broad2 * 0.08) * day * vP2.w * (0.6 + 0.6 * grain) * (1.0 - t.b * 0.7);

    // Highlight: a grove tree whose sign is hovered lights its whole outline in jungle green
    float hl = max(0.0, vP2.z - 2.4);
    col += uGlow * hl * (step(0.5, rim) * 0.32 + step(0.5, rimWide) * 0.16 + 0.025);

    // Lantern light, with a warm rim on the side that faces the flame
    vec2 wdir = vec2(0.0);
    float wsum = 0.0;
    for (int i = 0; i < 8; i++) {
      vec3 d = uLights[i].xyz - vWorld;
      float k = uLights[i].w / (1.0 + dot(d, d) * 0.22);
      wsum += k;
      wdir += normalize(d.xy + vec2(1e-4)) * k;
    }
    if (wsum > 0.02) {
      vec2 wd = normalize(wdir + vec2(1e-4));
      float aw = texture2D(map, vUv + vec2(wd.x * flip, wd.y) * uRimPx * 1.4 * texel).a;
      float wrim = t.a * (1.0 - aw);
      col += uWarm * (min(wsum, 2.5) * 0.05 + step(0.5, wrim) * min(wsum, 1.6) * 0.55 * (0.35 + 0.65 * vP2.w));
    }

    // Emissive warm (lantern paper, windows, embers)
    float emit = clamp(t.r * vP1.w, 0.0, 1.0);
    vec3 paper = uWarm * (1.05 + 0.25 * grain);
    col = mix(col, paper, emit);

    // Bioluminescence (jungle)
    float pulse = 0.72 + 0.28 * sin(uTime * 1.6 + vWorld.x * 1.3 + vWorld.y * 0.9);
    // Spirit light is faint by day and wakes as night falls
    float gl = t.g * vP2.z * pulse * (0.28 + 0.72 * smoothstep(0.15, 0.6, uNight));
    col += uGlow * gl * 1.15;

    col = applyFog(col, vDepth, vWorld.y, clamp(max(gl * 0.8, emit * 0.85), 0.0, 1.0));
    gl_FragColor = vec4(col, a);
  }
`,Ih=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.9999, 1.0); }
`,Lh=`
  uniform vec3 uCamRight;
  uniform vec3 uCamUp;
  uniform vec3 uCamFwd;
  uniform vec2 uTanHalf;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uHalo;
  uniform vec3 uRidge0;
  uniform vec3 uRidge1;
  uniform vec3 uRidge2;
  uniform float uSunH;
  uniform float uSunA;
  uniform float uMoonA;
  uniform vec3 uSun;
  uniform vec3 uMoon;
  ${Ws}
  varying vec2 vUv;
  ${Ri}
  // Sharp-crested mountains: ridged noise
  float ridged(float x, float seed) {
    float v = 0.0, a = 0.55;
    for (int i = 0; i < 5; i++) {
      float n = 1.0 - abs(vnoise(vec2(x, seed + float(i) * 3.7)) * 2.0 - 1.0);
      v += a * n * n;
      x = x * 2.13 + 1.7;
      a *= 0.48;
    }
    return v;
  }
  // A fringe of distant conifers along a ridge line
  float treeline(float x, float density, float hgt, float seed) {
    float tx = x * density + seed;
    float cell = floor(tx), f = fract(tx);
    float r = hash(vec2(cell, seed));
    float c = 0.5 + (r - 0.5) * 0.4;
    float w = 0.3 + 0.25 * hash(vec2(cell, seed + 1.0));
    float tri = max(0.0, 1.0 - abs(f - c) / w);
    return pow(tri, 1.3) * hgt * (0.45 + 0.55 * r) * step(0.2, r);
  }
  void main() {
    // Everything here is drawn by true view direction (azimuth, elevation), so the sky,
    // the sun, the moon and the mountains stay fixed in the far distance as you turn and walk.
    vec3 d = normalize(uCamFwd + (vUv.x * 2.0 - 1.0) * uTanHalf.x * uCamRight + (vUv.y * 2.0 - 1.0) * uTanHalf.y * uCamUp);
    float az = atan(d.x, -d.z);
    float el = asin(clamp(d.y, -1.0, 1.0));
    vec2 p = vec2(az, el);
    float horizon = -0.008;
    float h = el - horizon;
    vec3 col = mix(uHorizon, uTop, smoothstep(-0.02, 0.6, h));

    // Stars, sparse and faint, only at night
    vec2 g = p * 70.0;
    float s = hash(floor(g));
    float tw = 0.6 + 0.4 * sin(uTime * (1.0 + s * 3.0) + s * 40.0);
    float star = step(0.992, s) * smoothstep(0.22, 0.0, length(fract(g) - 0.5)) * tw;
    col += vec3(0.78, 0.9, 0.86) * star * smoothstep(0.08, 0.45, h) * 0.7 * smoothstep(0.5, 0.9, uNight);

    // The sun: low on the right, sinking behind the mountains as you walk
    vec2 sc = vec2(0.42, horizon + uSunH);
    float sd = length(p - sc);
    col += uHalo * (exp(-sd * 2.4) * 0.42 + exp(-sd * 8.0) * 0.45) * uSunA;
    col = mix(col, vec3(1.0, 0.95, 0.84), smoothstep(0.05, 0.047, sd) * uSunA);

    // The moon, low and large, a little peach in its halo
    vec2 mc = vec2(0.15, 0.26);
    float md = length(p - mc);
    float R = 0.072;
    col += uHalo * (exp(-md * 5.0) * 0.22 + exp(-md * 16.0) * 0.32) * uMoonA;
    float mot = fbm((p - mc) * 26.0 + 3.0);
    vec3 moon = mix(vec3(0.95, 0.92, 0.85), vec3(0.8, 0.79, 0.74), smoothstep(0.35, 0.75, mot));
    col = mix(col, moon, smoothstep(R, R - 0.0025, md) * uMoonA);

    // Slow cloud, edges lit where they pass the sun or moon
    vec2 cp = vec2(az * 1.2 + uTime * 0.006, el * 3.6);
    float c = fbm(cp * 2.2 + vec2(0.0, 2.0));
    c = smoothstep(0.52, 0.78, c) * smoothstep(0.05, 0.22, h) * (1.0 - smoothstep(0.4, 0.62, h));
    vec3 cloudBase = mix(mix(uHorizon, uTop, 0.35) * 1.08, uTop * 1.6 + 0.01, uNight);
    vec3 cloud = mix(cloudBase, uHalo * mix(0.95, 0.55, uNight), max(exp(-md * 4.0) * uMoonA, exp(-sd * 3.0) * uSunA));
    col = mix(col, cloud, c * 0.8);

    // Far mountains: sharp crests, faces turned to the light catch it, gullies, haze at the foot
    float x = az;
    float k0 = 1.5, a0 = 0.21, e = 0.004;
    float r0 = horizon + 0.004 + ridged(x * k0, 1.0) * a0;
    float slope = (ridged((x + e) * k0, 1.0) - ridged((x - e) * k0, 1.0)) * a0 / (2.0 * e);
    float lit = smoothstep(0.05, 0.7, -slope * sign(uLightDir.x));
    float gully = smoothstep(0.55, 0.85, vnoise(vec2(x * 110.0, el * 7.0))) * smoothstep(horizon, r0, el);
    vec3 c0 = uRidge0 * (0.92 + lit * 0.24 - gully * 0.1) + uMoon * lit * mix(0.07, 0.03, uNight);
    c0 = mix(c0, uHorizon, (1.0 - smoothstep(horizon, r0, el)) * mix(0.45, 0.2, uNight));
    col = mix(col, c0, smoothstep(0.0012, -0.0012, el - r0));

    // Mid hills with a fringe of trees
    float r1 = horizon + 0.004 + fbm(vec2(x * 2.2 + 7.0, 7.0)) * 0.085 + treeline(x, 140.0, 0.012, 3.0);
    vec3 c1 = mix(uRidge1, uHorizon, (1.0 - smoothstep(horizon - 0.01, r1, el)) * mix(0.3, 0.12, uNight));
    col = mix(col, c1, smoothstep(0.0012, -0.0012, el - r1));

    // The nearest ridge of forest
    float r2 = horizon - 0.012 + fbm(vec2(x * 3.0 + 13.0, 13.0)) * 0.06
      + max(treeline(x, 220.0, 0.02, 9.0), treeline(x, 97.0, 0.026, 21.0) * 0.85);
    col = mix(col, uRidge2, smoothstep(0.0012, -0.0012, el - r2));

    // Mist pooling along the horizon
    float mist = exp(-abs(el - horizon + 0.02) * 22.0) * (0.55 + 0.45 * fbm(vec2(az * 3.0 + uTime * 0.01, 1.0)));
    col = mix(col, uFogLow, mist * 0.55);
    gl_FragColor = vec4(col, 1.0);
  }
`,Dh=`
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Nh=`
  uniform vec3 uGround;
  uniform vec3 uPath;
  uniform vec3 uMoon;
  ${Ws}
  varying vec3 vWorld;
  varying float vDepth;
  ${Ri}
  ${yl}
  void main() {
    vec2 q = vWorld.xz;
    float dx = abs(vWorld.x - pathX(vWorld.z));
    float edge = fbm(q * 0.7) * 0.9 + vnoise(q * 3.0) * 0.25;
    float path = 1.0 - smoothstep(0.75, 1.35, dx + edge * 0.55 - 0.25);
    vec3 col = uGround * (0.65 + 0.7 * fbm(q * 0.3));
    vec3 pc = uPath * (0.7 + 0.5 * fbm(q * 2.2)) * (0.85 + 0.3 * vnoise(q * 9.0));
    col = mix(col, pc, path);
    // Bioluminescent moss in patches beside the path
    float moss = smoothstep(0.72, 0.8, fbm(q * 1.4 + 3.0)) * (1.0 - path) * smoothstep(7.0, 1.6, dx);
    float speck = step(0.93, vnoise(q * 14.0)) * moss;
    col += uGlow * (moss * 0.12 + speck * 0.5) * (0.75 + 0.25 * sin(uTime * 1.2 + q.x * 2.0)) * (0.2 + 0.8 * smoothstep(0.15, 0.6, uNight));
    // Dappled late sun through the canopy
    float dapple = smoothstep(0.56, 0.72, fbm(q * 0.42 + vec2(uTime * 0.008, 3.0))) * smoothstep(0.5, 0.75, vnoise(q * 1.7));
    col += uMoon * dapple * (1.0 - uNight) * (0.1 + path * 0.06);
    // Lantern light pooling on the ground
    float w = warmAt(vWorld + vec3(0.0, 0.6, 0.0), 0.3);
    col += uWarm * w * (0.07 + path * 0.1);
    col = applyFog(col, vDepth, 0.0, speck * 0.7);
    gl_FragColor = vec4(col, 1.0);
  }
`,Ml=`
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Uh=`
  uniform float uOpacity;
  uniform float uSeed;
  ${Ws}
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  ${Ri}
  ${yl}
  void main() {
    vec2 q = vec2(vWorld.x * 0.09 + uTime * 0.018 * (0.6 + uSeed), vUv.y * 1.4 + uSeed * 7.0);
    float n = fbm(q * vec2(1.0, 1.7) + fbm(q * 1.6 - uTime * 0.012) * 0.8);
    float shape = smoothstep(0.38, 0.78, n);
    shape *= smoothstep(0.0, 0.22, vUv.y) * (1.0 - smoothstep(0.3, 1.0, vUv.y));
    shape *= smoothstep(0.0, 0.18, vUv.x) * (1.0 - smoothstep(0.82, 1.0, vUv.x));
    float near = smoothstep(1.2, 8.0, vDepth);
    float far = 1.0 - smoothstep(55.0, 80.0, vDepth);
    float w = warmAt(vWorld, 0.22);
    vec3 col = mix(uFogLow * 1.35, uWarm * 0.8, clamp(w * 0.35, 0.0, 0.55));
    gl_FragColor = vec4(col, shape * uOpacity * near * far * mix(0.35, 1.0, uNight));
  }
`,Fh=`
  attribute vec4 aSeed;
  uniform float uTime;
  uniform float uCamZ;
  uniform float uScale;
  uniform float uNight;
  varying float vA;
  ${Ri}
  void main() {
    vec3 b = position;
    float z = uCamZ + 3.0 - mod(uCamZ + 3.0 - b.z, 46.0);
    float t = uTime * (0.25 + aSeed.x * 0.35);
    vec3 p = vec3(
      pathX(z) + b.x + sin(t + aSeed.y * 6.283) * 0.7,
      b.y + sin(t * 1.3 + aSeed.z * 6.283) * 0.4,
      z + cos(t * 0.7 + aSeed.w * 6.283) * 0.6);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    float depth = -mv.z;
    float blink = pow(0.5 + 0.5 * sin(uTime * (0.6 + aSeed.y * 1.4) + aSeed.x * 40.0), 4.0);
    float dust = 0.3 + 0.25 * sin(uTime * 1.7 + aSeed.y * 30.0);
    vA = mix(dust, blink, smoothstep(0.2, 0.55, uNight)) * smoothstep(0.6, 3.0, depth) * (1.0 - smoothstep(28.0, 42.0, depth));
    gl_PointSize = clamp((0.09 + aSeed.z * 0.07) * mix(0.55, 1.0, uNight) * uScale / max(depth, 0.5), 1.2, 48.0);
    gl_Position = projectionMatrix * mv;
  }
`,Oh=`
  uniform vec3 uGlow;
  uniform float uNight;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.14, 0.0, d);
    float halo = smoothstep(0.5, 0.0, d) * 0.45;
    vec3 fly = uGlow * halo + vec3(0.72, 1.0, 0.86) * core;
    vec3 mote = vec3(1.0, 0.88, 0.7) * (halo * 0.6 + core * 0.8); // sunlit dust and pollen by day
    gl_FragColor = vec4(mix(mote, fly, smoothstep(0.2, 0.55, uNight)), vA);
  }
`,Bh=`
  uniform float uSeed;
  uniform float uShaft;
  uniform vec3 uSun;
  ${Ws}
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  ${Ri}
  void main() {
    if (uShaft < 0.01) discard;
    // Beams fall from the upper right toward the lower left, from the low sun
    float s = vUv.x + (1.0 - vUv.y) * 0.42;
    float b = fbm(vec2(s * 5.0 + uSeed * 13.0, uTime * 0.035 + uSeed * 5.0));
    float beams = smoothstep(0.5, 0.78, b);
    float fade = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y))
      * smoothstep(0.0, 0.2, vUv.x) * (1.0 - smoothstep(0.8, 1.0, vUv.x));
    float near = smoothstep(2.0, 9.0, vDepth) * (1.0 - smoothstep(40.0, 70.0, vDepth));
    float shimmer = 0.85 + 0.15 * sin(uTime * 0.7 + uSeed * 20.0);
    gl_FragColor = vec4(uSun * beams * fade * near * shimmer * uShaft * 0.26, 1.0);
  }
`,zh=`
  attribute vec4 aSeed;
  uniform float uTime;
  uniform float uReveal;
  uniform float uScale;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * modelMatrix * vec4(position, 1.0);
    float depth = -mv.z;
    float on = smoothstep(aSeed.x, aSeed.x + 0.06, uReveal);
    // Each pair blinks now and then, together
    float bl = step(0.985, fract(sin(floor(uTime * 0.7 + aSeed.y * 13.0) * 91.3 + aSeed.z * 17.0) * 43758.5));
    vA = on * (1.0 - bl) * (0.55 + 0.45 * aSeed.w);
    gl_PointSize = clamp(0.32 * uScale / max(depth, 1.0), 1.2, 6.0);
    gl_Position = projectionMatrix * mv;
  }
`,kh=`
  uniform vec3 uGlow;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    gl_FragColor = vec4(mix(uGlow, vec3(0.75, 1.0, 0.85), 0.35), smoothstep(0.5, 0.15, d) * vA);
  }
`,Ha=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Gh=`
  uniform float uOpen;
  uniform float uAlpha;
  uniform vec3 uGlow;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    p.x *= 3.0;
    float acc = 0.0;
    for (int i = 0; i < 2; i++) {
      vec2 q = p - vec2(i == 0 ? -1.15 : 1.15, 0.0);
      float w = 0.78;
      float hh = max(uOpen, 0.0) * 0.5 * (1.0 - pow(clamp(abs(q.x) / w, 0.0, 1.0), 1.8));
      float inside = smoothstep(0.04, -0.03, abs(q.y) - hh) * step(abs(q.x), w);
      float slit = smoothstep(0.1, 0.03, abs(q.x));
      float halo = exp(-dot(q, q) * 1.6) * 0.3 * uOpen;
      acc += inside * (1.0 - 0.9 * slit) + halo;
    }
    gl_FragColor = vec4(uGlow * 1.25 * acc, 1.0) * uAlpha;
  }
`,Vh=Ha,Hh=`
  uniform float uTime;
  uniform vec3 uWarm;
  uniform vec3 uEmber;
  varying vec2 vUv;
  ${Ri}
  void main() {
    vec2 p = vUv;
    // Three tongues of flame, each licking up at its own pace
    float f = 0.0;
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float cx = 0.5 + (fi - 1.0) * 0.13;
      float hgt = 0.82 - abs(fi - 1.0) * 0.26 + 0.1 * sin(uTime * (2.1 + fi * 0.9) + fi * 4.0);
      float y = p.y / hgt;
      float n = fbm(vec2(p.x * 4.0 + fi * 7.0, p.y * 3.2 - uTime * (2.0 + fi * 0.4)));
      float w = (1.0 - y) * 0.17 * (0.65 + 0.7 * n);
      float dx = p.x - cx + (n - 0.5) * 0.26 * y;
      f = max(f, smoothstep(w, w * 0.25, abs(dx)) * step(y, 1.0) * (1.0 - y * 0.85));
    }
    float outer = smoothstep(0.05, 0.3, f);
    float core = smoothstep(0.4, 0.8, f);
    vec3 col = mix(uEmber * 1.15, uWarm * 1.15, core) + vec3(0.1, 0.07, 0.02) * smoothstep(0.75, 0.95, f);
    gl_FragColor = vec4(col, outer * 0.95);
  }
`,Wh=Ha,Xh=`
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float g = exp(-d * d * 5.0) * 0.55 + exp(-d * 14.0) * 0.6;
    gl_FragColor = vec4(uColor, g * uIntensity * smoothstep(1.0, 0.75, d));
  }
`;var qa=i=>2.2*Math.sin(i*.045)+1.2*Math.sin(i*.11+1.3),Xe=i=>new z((i>>16&255)/255,(i>>8&255)/255,(i&255)/255),re={warm:Xe(16691602),ember:Xe(12080431),glow:Xe(111468),moon:Xe(9420210),base:Xe(265738),fog:Xe(796196),fogLow:Xe(1193266),top:Xe(67081),horizon:Xe(1720123),halo:Xe(9397590),ridge0:Xe(1324338),ridge1:Xe(1126702),ridge2:Xe(796196),ground:Xe(199175),path:Xe(1120791)},Kn=[{id:"arrival",cam:9,look:0,night:0},{id:"trails",cam:-15,look:1.8,night:.16},{id:"grove",cam:-41,look:2.2,lookPortrait:3.6,night:.36},{id:"sapling",cam:-69,look:1.3,night:.56},{id:"workshop",cam:-92,look:-2.4,night:.74},{id:"lookout",cam:-117,look:3.4,night:.9},{id:"campfire",cam:-141,look:.4,night:1}],Yh=i=>{if(i>=Kn[0].cam)return 0;for(let t=0;t<Kn.length-1;t++){let e=Kn[t],n=Kn[t+1];if(i>=n.cam)return e.night+(n.night-e.night)*((e.cam-i)/(e.cam-n.cam))}return 1},Wa=[{n:0,top:4942968,horizon:15314310,halo:16763796,fog:5663071,fogLow:6713688,base:1256220,moon:16764300,ground:1779993,path:5785651,ridge0:13214858,ridge1:10918536,ridge2:9080704,density:.018,lx:.95,ly:.32},{n:.36,top:3360094,horizon:14387820,halo:15638658,fog:4543066,fogLow:6052183,base:1057051,moon:16166544,ground:1384473,path:3552045,ridge0:5134694,ridge1:4345434,ridge2:3556173,density:.026,lx:.95,ly:.4},{n:.62,top:1252917,horizon:3623775,halo:9007999,fog:1781556,fogLow:2636862,base:529935,moon:10272959,ground:462860,path:1646878,ridge0:2176313,ridge1:1781554,ridge2:1452331,density:.03,lx:.8,ly:.62},{n:1,top:67081,horizon:1720123,halo:9397590,fog:796196,fogLow:1193266,base:265738,moon:9420210,ground:199175,path:1120791,ridge0:1324338,ridge1:1126702,ridge2:796196,density:.031,lx:.72,ly:.7}].map(i=>Object.fromEntries(Object.entries(i).map(([t,e])=>[t,typeof e=="number"&&e>2?Xe(e):e]))),$h=[{id:"onboarding",name:"Host Onboarding",value:"$3.4M",impact:3.4,url:"/case-studies/host-onboarding.html",dx:6.2,z:-60},{id:"dashboard",name:"Host Dashboard",value:"$1.5M",impact:1.5,url:"/case-studies/host-dashboard.html",dx:9.4,z:-54.5},{id:"lifecycle",name:"Lifecycle Email",value:"$1.2M",impact:1.2,url:"/case-studies/lifecycle-campaigns.html",dx:13,z:-63},{id:"payinfull",name:"Pay-in-Full",value:"+$1M",impact:1,url:"/case-studies/pay-in-full.html",dx:7.4,z:-69},{id:"claims",name:"Inspection & Claims",value:"$500K",impact:.5,url:null,dx:16,z:-58}],Zh=[...$h.filter(i=>i.url).map(i=>({id:i.id,name:i.name,value:i.value,url:i.url,tree:i.id})),{id:"all",name:{de:"Alle Projekte",fr:"Tous les projets"}[document.documentElement.lang]||"All the work",value:"",url:"/work.html",tree:null}],as={dx:2.6,z:-47.5},Xa=typeof MessageChannel<"u"?new MessageChannel:null,Sl=[];Xa&&(Xa.port1.onmessage=()=>Sl.shift()?.());var Jh=performance.now(),D0=()=>performance.now()-Jh<30?Promise.resolve():new Promise(i=>{Sl.push(()=>{Jh=performance.now(),i()}),Xa?Xa.port2.postMessage(0):setTimeout(()=>Sl.shift()?.(),0)});function N0(i){let t=new Mi(i.data,i.w,i.h,cn);return t.flipY=!1,t.generateMipmaps=!0,t.minFilter=wn,t.magFilter=Oe,t.anisotropy=4,t.needsUpdate=!0,t}async function Kh({quality:i=1,onProgress:t=()=>{}}={}){let e=new Ms,n=pl(2026),s=(D,it)=>D+(it-D)*n(),r=D=>Math.round(D*i),a={uTime:{value:0},uLights:{value:Array.from({length:8},()=>new me)},uWarm:{value:re.warm},uGlow:{value:re.glow},uFog:{value:re.fog},uFogLow:{value:re.fogLow},uFogDensity:{value:.031},uNight:{value:0},uLightDir:{value:new z(.72,.7,0)}},o={gnarledA:()=>Ci(11,{W:r(1024),H:r(1536),glow:.55}),gnarledB:()=>Ci(29,{W:r(1024),H:r(1536),glow:.3}),gnarledEyes:()=>Ci(29,{W:r(1024),H:r(1536),glow:.3,hollowEyes:!0}),gnarledC:()=>Ci(47,{W:r(1024),H:r(1536),glow:.8,crown:.8}),groveA:()=>Ci(83,{W:r(1024),H:r(1536),glow:1,roots:1.4,crown:.9}),groveB:()=>Ci(97,{W:r(1024),H:r(1536),glow:1,roots:1.3,crown:1}),cedarA:()=>Va(5,{W:r(640),H:r(1536)}),cedarB:()=>Va(17,{W:r(640),H:r(1536)}),cedarC:()=>Va(23,{W:r(512),H:r(1280)}),deadA:()=>gl(31,{W:r(768),H:r(1280)}),deadB:()=>gl(61,{W:r(640),H:r(1152)}),fernA:()=>_l(3,{W:r(512),H:r(384)}),fernB:()=>_l(9,{W:r(512),H:r(384),glow:1}),grassA:()=>xl(7,{W:r(1024),H:r(256)}),grassB:()=>xl(13,{W:r(1024),H:r(256),spores:.06}),rocksA:()=>vl(21,{W:r(768),H:r(384)}),rocksB:()=>vl(37,{W:r(768),H:r(384),moss:.8}),signpost:()=>vh(41,{W:r(640),H:r(1024)}),cabin:()=>yh(43,{W:r(1024),H:r(896)}),lookout:()=>Mh(53,{W:r(1280),H:r(896)}),sapling:()=>Sh(59,{W:r(512),H:r(768)}),figure:()=>bh(67,{W:r(448),H:r(1536)}),hand:()=>wh(71,{W:r(640),H:r(384)}),post:()=>Th(73,{W:r(320),H:r(896)}),waypost:()=>Ah(79,{W:r(512),H:r(1024)}),campfire:()=>Ch(89,{W:r(640),H:r(256)})};await Promise.race([Promise.all([document.fonts?.load('600 64px "Inter Tight"'),document.fonts?.load("800 64px Syne")]),new Promise(D=>setTimeout(D,2500))]).catch(()=>{}),Zh.forEach((D,it)=>{o["board"+it]=()=>Eh(101+it*7,{W:r(1152),H:r(208),name:D.name.toUpperCase(),value:D.value,dir:1})});let c={},l=Object.keys(o),h=performance.now();for(let D=0;D<l.length;D++)c[l[D]]=o[l[D]](),t((D+1)/l.length),await D0();console.info(`[forest] painted ${l.length} textures in ${Math.round(performance.now()-h)}ms`);let d=new je(1,1,1,6).translate(0,.5,0),u={},f=(D,it=5)=>{if(u[D])return u[D];let st=c[D];return u[D]={key:D,pk:st,tex:N0(st),rimPx:it,items:[]},u[D]},m=(D,it,st,at,It,Wt={})=>{let Jt=f(D,Wt.rimPx),Ne={x:it,y:st,z:at,h:It,w:It*Jt.pk.aspect,shade:Wt.shade??s(.78,1.22),seed:Wt.seed??n(),sway:Wt.sway??1,emit:Wt.emit??0,opacity:Wt.opacity??1,flip:Wt.flip??(n()<.5?-1:1),glow:Wt.glow??1,rim:Wt.rim??1,g:Jt,index:Jt.items.length};return Jt.items.push(Ne),Ne},x=(D,it)=>{let[st,at]=D.g.pk.anchors[it];return new z(D.x+(st-.5)*D.w*D.flip,D.y+at*D.h,D.z+.02)},p=(D,it)=>qa(it)+D,g=[{x:p(0,4),z:4,r:12},{x:p(3.3,-24),z:-24,r:3.4},{x:p(8,-60),z:-60,r:9.5},{x:p(2.6,-79),z:-79,r:4.5},{x:p(-7.5,-104),z:-104,r:7.5},{x:p(6.5,-127),z:-127,r:6},{x:p(16,-160),z:-160,r:19},{x:p(.5,-150),z:-150,r:6.5}],M=(D,it,st=0)=>g.every(at=>Math.hypot(D-at.x,it-at.z)>at.r+st),E=D=>{let it=n()*D.reduce((st,at)=>st+at[1],0);for(let[st,at]of D)if((it-=at)<=0)return st;return D[0][0]},S={gnarledA:[15,24],gnarledB:[14,22],gnarledC:[13,20],cedarA:[22,34],cedarB:[20,30],cedarC:[16,26],deadA:[9,15],deadB:[8,13]},C=D=>D.startsWith("gnarled")?5:D.startsWith("dead")?4:6,A=D=>D==="gnarledC"?1.2:1,_=-72,b=(D,it)=>D==="gnarledB"&&it<_?"gnarledEyes":D;for(let D=24;D>-200;D-=s(3.4,5.6))for(let it of[-1,1]){let st=D>-45?.25:1,at=E([["gnarledA",3],["gnarledB",2],["gnarledC",2],["cedarC",1],["deadA",1.4*st],["deadB",1.2*st]]),It=s(C(at),C(at)+4.5),Wt=D+s(-1.2,1.2),Jt=p(it*It,Wt);M(Jt,Wt,1)&&m(b(at,Wt),Jt,0,Wt,s(...S[at]),{glow:A(at)})}for(let D=24;D>-215;D-=s(2.6,4.4))for(let it of[-1,1]){let st=E([["cedarA",3],["cedarB",3],["cedarC",2],["gnarledA",1.5],["gnarledB",1],["deadA",.6]]),at=D+s(-1,1),It=p(it*s(9.5,22),at);M(It,at,2)&&m(b(st,at),It,0,at,s(...S[st])*.68,{rim:.8})}for(let D=14;D>-235;D-=s(2,3.4))for(let it of[-1,1]){let st=E([["cedarA",3],["cedarB",3],["cedarC",2],["gnarledA",1]]),at=D+s(-1,1),It=p(it*s(22,46),at);M(It,at,3)&&m(st,It,0,at,s(...S[st])*.55,{rim:.6,sway:.5})}for(let D=0;D<26;D++){let it=s(-162,-182),st=E([["cedarA",2],["gnarledA",2],["gnarledB",1],["cedarB",2]]);m(st,p(s(-14,14),it),0,it,s(...S[st]))}for(let D=22;D>-172;D-=s(1.1,2.4))for(let it of[-1,1]){if(n()<.25)continue;let st=s(2.3,6.5),at=D+s(-.5,.5),It=p(it*st,at);M(It,at,.5)&&(st<4.5&&Kn.some(Wt=>at<Wt.cam&&at>Wt.cam-7)||m(n()<.3?"fernB":"fernA",It,0,at,s(.8,1.3)+st*.14,{glow:1,rim:.9}))}for(let D=22;D>-172;D-=s(2.2,3.6))for(let it of[-1,1]){let st=s(.8,1.5),at=D+s(-.4,.4),It=st*4;m(n()<.3?"grassB":"grassA",p(it*(s(1.25,1.9)+It/2),at),0,at,st,{glow:1.2,rim:.45})}for(let D=18;D>-165;D-=s(5,11)){let it=n()<.5?-1:1,st=D,at=p(it*s(2.6,10),st);M(at,st,-1)&&m(n()<.5?"rocksA":"rocksB",at,0,st,s(.9,2.4),{glow:1})}let F=[],P=(D,it,st={})=>{let at={pos:D,base:it,lit:st.lit??0,target:st.lit??0,seed:n()*100,ignite:st.ignite??null,flick:st.flick??1,item:st.item,halo:null};return F.push(at),at},U=new je(1,1),k=(D,it,st,at)=>{let It=new Te(U,new Se({uniforms:{uColor:{value:st},uIntensity:{value:0}},vertexShader:Wh,fragmentShader:Xh,transparent:!0,depthWrite:!1,blending:Dn}));It.position.copy(D),It.scale.set(it,it,1),It.renderOrder=5,e.add(It);let Wt={mesh:It,light:at,size:it};return at&&(at.halo=Wt),Wt},L=1;for(let D=-1;D>-150;D-=7.6){if(Math.abs(D-as.z)<3.5||Math.abs(D+79)<3.5||D<-140){L=-L;continue}let it=2.3*L,st=m("post",p(it,D),0,D,2.9,{flip:-L,sway:.15,glow:0,shade:1,rim:.4}),at=x(st,"lantern"),It=P(at,1,{ignite:D,item:st});k(at,2.6,re.warm,It),L=-L}m("signpost",p(3.3,-24),0,-24,3.6,{flip:1,sway:0,shade:1.1});let T={};$h.forEach((D,it)=>{let st=7+D.impact*5.2,at=p(D.dx,D.z),It=m(it%2?"groveB":"groveA",at,0,D.z,st,{glow:2.2,shade:.9,flip:it%2?-1:1}),Wt=P(new z(at,0,D.z),0,{lit:.55});k(new z(at,.5,D.z+.4),3.5+D.impact*1.2,re.glow,Wt),T[D.id]={tree:It,root:Wt}});let O=p(as.dx,as.z),H=m("waypost",O,0,as.z,4.1,{flip:1,sway:0,shade:1.05,glow:1,rim:.8}),B=x(H,"lantern"),nt=P(B.clone().add(new z(0,0,.35)),1.35,{ignite:as.z+4,item:H});k(B,2.4,re.warm,nt);let X=.44,Q=.09,tt=3.12-X,ht=Zh.map((D,it)=>{let st="board"+it,at=X*c[st].aspect,It=m(st,O+at*.41,tt-it*(X+Q),as.z+.04+it*.002,X,{flip:1,sway:0,shade:1.15,emit:0,glow:0,rim:.7});return{...D,item:It,w:at,lit:0,hover:0,start:null,rect:null,link:D.tree?T[D.tree]:null}}),wt=null,Y=m("sapling",p(2.7,-79),0,-79,3.3,{glow:1.6,shade:.9,flip:1});k(new z(Y.x,.9,Y.z+.1),4.5,re.glow,P(new z(Y.x,1,Y.z),0,{lit:1}));let xt=m("cabin",p(-7.6,-104),0,-104,7,{flip:1,sway:0,shade:1,emit:1}),bt=x(xt,"window");k(bt,4.5,re.warm,P(bt.clone().add(new z(0,0,1.2)),1.7,{ignite:-101,item:xt}));let Lt=x(xt,"lantern");k(Lt,1.6,re.warm,P(Lt.clone().add(new z(0,0,.5)),.7,{ignite:-101}));let yt=-94.5,Gt=p(-5.2,yt),ge=m("gnarledEyes",Gt,0,yt,15,{flip:1,glow:.8}),Nt=x(ge,"t20"),ne=Nt.x+ge.g.pk.anchors.w20[0]*ge.w*.5,jt=m("hand",ne+.85,Nt.y-.62,yt-.06,1.25,{flip:-1,sway:0,shade:.8,rim:1.2}),Ot={item:jt,baseX:jt.x,t:0,gone:!1};m("lookout",p(8.5,-126),0,-126,3.1,{flip:-1,sway:0,glow:1});let _e=p(.6,-150);m("campfire",_e,0,-150,.85,{flip:1,sway:0,shade:1,emit:1}),m("rocksA",_e-2.6,0,-149.2,.9,{flip:1}),m("rocksB",_e+2.8,0,-150.6,1,{flip:-1});let Me=P(new z(_e,.9,-149.6),2.6,{ignite:-120,flick:2.2});k(new z(_e,.8,-149.9),6.5,re.warm,Me);let Ae=new Te(new je(1,1).translate(0,.5,0),new Se({uniforms:{uTime:a.uTime,uWarm:{value:re.warm},uEmber:{value:re.ember}},vertexShader:Vh,fragmentShader:Hh,transparent:!0,depthWrite:!1,blending:Dn}));Ae.position.set(_e,.18,-149.95),Ae.scale.set(1.3,1.7,1),Ae.renderOrder=6,e.add(Ae);let ce=-116,tn=m("figure",p(10.5,ce),0,ce,7.2,{flip:1,sway:.2,shade:.7,opacity:0,glow:1.6,rim:.7}),ue={item:tn,op:0,gone:!1},De=new le,qe=new fn,Ye=new z,N=new z;for(let D of Object.values(u)){let it=D.items.length,st=new Se({uniforms:{...a,map:{value:D.tex},uRimPx:{value:D.rimPx},uBase:{value:re.base},uMoon:{value:re.moon}},vertexShader:Rh,fragmentShader:Ph,side:mn,alphaToCoverage:!0}),at=new Ts(d,st,it),It=new Float32Array(it*4),Wt=new Float32Array(it*4);D.items.forEach((Jt,Ne)=>{De.compose(Ye.set(Jt.x,Jt.y,Jt.z),qe,N.set(Jt.w*Jt.flip,Jt.h,1)),at.setMatrixAt(Ne,De),It.set([Jt.shade,Jt.seed,Jt.sway,Jt.emit],Ne*4),Wt.set([Jt.opacity,Jt.flip,Jt.glow,Jt.rim],Ne*4)}),at.geometry=d.clone(),D.a1=new oi(It,4),D.a2=new oi(Wt,4),at.geometry.setAttribute("aP1",D.a1),at.geometry.setAttribute("aP2",D.a2),at.frustumCulled=!1,D.mesh=at,e.add(at)}let Ze=(D,it,st)=>{D.g.a1.array[D.index*4+it]=st,D.g.a1.needsUpdate=!0},oe=(D,it,st)=>{D.g.a2.array[D.index*4+it]=st,D.g.a2.needsUpdate=!0},de=D=>{De.compose(Ye.set(D.x,D.y,D.z),qe,N.set(D.w*D.flip,D.h,1)),D.g.mesh.setMatrixAt(D.index,De),D.g.mesh.instanceMatrix.needsUpdate=!0},gt=new Te(new je(1,1),new Se({uniforms:{...a,uCamRight:{value:new z(1,0,0)},uCamUp:{value:new z(0,1,0)},uCamFwd:{value:new z(0,0,-1)},uTanHalf:{value:new z(1,1,0)},uMoon:{value:re.moon},uSunH:{value:.12},uSunA:{value:1},uMoonA:{value:0},uSun:{value:re.moon},uTop:{value:re.top},uHorizon:{value:re.horizon},uHalo:{value:re.halo},uRidge0:{value:re.ridge0},uRidge1:{value:re.ridge1},uRidge2:{value:re.ridge2}},vertexShader:Ih,fragmentShader:Lh,depthTest:!1,depthWrite:!1}));gt.frustumCulled=!1,gt.renderOrder=-10,e.add(gt);let ve=new Te(new je(260,300).rotateX(-Math.PI/2),new Se({uniforms:{...a,uGround:{value:re.ground},uPath:{value:re.path},uMoon:{value:re.moon}},vertexShader:Dh,fragmentShader:Nh}));ve.position.set(0,0,-90),e.add(ve);let Dt=new je(1,1).translate(0,.5,0),Ut=new Se({uniforms:{...a,uSun:{value:re.moon},uShaft:{value:1}},vertexShader:Ml,fragmentShader:Bh,transparent:!0,depthWrite:!1,blending:Dn});for(let D=14;D>-62;D-=s(5,8)){let it=new Te(Dt,Ut.clone());it.material.uniforms={...Ut.uniforms,uSeed:{value:n()}},it.position.set(p(s(-7,7),D),-.5,D),it.scale.set(s(9,15),s(13,18),1),it.renderOrder=3,e.add(it)}let w=new je(1,1).translate(0,.5,0);for(let D=16;D>-200;D-=s(7,12)){let it=n()<.25,st=new Te(w,new Se({uniforms:{...a,uOpacity:{value:it?s(.12,.2):s(.3,.55)},uSeed:{value:n()}},vertexShader:Ml,fragmentShader:Uh,transparent:!0,depthWrite:!1}));st.position.set(p(s(-5,5),D),it?-.5:-.2,D),st.scale.set(s(28,46),it?s(9,14):s(2.4,4.5),1),st.renderOrder=2,e.add(st)}let v=i<1?150:240,G=new Float32Array(v*3),rt=new Float32Array(v*4);for(let D=0;D<v;D++)G.set([s(-11,11),s(.3,4.8),s(0,46)],D*3),rt.set([n(),n(),n(),n()],D*4);let j=new pn;j.setAttribute("position",new Fe(G,3)),j.setAttribute("aSeed",new Fe(rt,4));let ut=new Se({uniforms:{uTime:a.uTime,uCamZ:{value:0},uScale:{value:800},uGlow:{value:re.glow},uNight:a.uNight},vertexShader:Fh,fragmentShader:Oh,transparent:!0,depthWrite:!1,blending:Dn}),ft=new Ji(j,ut);ft.frustumCulled=!1,ft.renderOrder=8,e.add(ft);let J=170,$=new Float32Array(J*2*3),dt=new Float32Array(J*2*4);for(let D=0;D<J;D++){let it=s(-182,-222),st=p(s(-2,44),it),at=s(1.2,11),It=[n()*.95,n(),n(),n()];$.set([st-.11,at,it,st+.11,at,it],D*6),dt.set([...It,...It],D*8)}let R=new pn;R.setAttribute("position",new Fe($,3)),R.setAttribute("aSeed",new Fe(dt,4));let K=new Se({uniforms:{uTime:a.uTime,uReveal:{value:0},uScale:{value:800},uGlow:{value:re.glow}},vertexShader:zh,fragmentShader:kh,transparent:!0,depthWrite:!1,blending:Dn}),Z=new Ji(R,K);Z.frustumCulled=!1,Z.renderOrder=7,e.add(Z);let pt=new je(1,1),ct=[];for(let D of[-86,-98,-112,-122,-134,-146]){let it=n()<.5?-1:1,st=new Se({uniforms:{uOpen:{value:0},uAlpha:{value:0},uGlow:{value:re.glow}},vertexShader:Ha,fragmentShader:Gh,transparent:!0,depthWrite:!1,blending:Dn}),at=new Te(pt,st),It=s(.42,.62);at.position.set(p(it*s(5,11),D),s(.45,2.3),D),at.scale.set(It,It/3,1),at.renderOrder=9,e.add(at),ct.push({mesh:at,open:0,alpha:0,next:s(1,5),blink:0,gone:!1,shy:0})}let lt=new z,Ct=a.uLights.value,Vt=[],ot=0,Pt=D=>{let it=0;for(;it<Wa.length-2&&D>Wa[it+1].n;)it++;let st=Wa[it],at=Wa[it+1],It=Math.min(1,Math.max(0,(D-st.n)/(at.n-st.n)));for(let Wt of["top","horizon","halo","fog","fogLow","base","moon","ground","path","ridge0","ridge1","ridge2"])re[Wt].lerpVectors(st[Wt],at[Wt],It);a.uFogDensity.value=st.density+(at.density-st.density)*It,a.uLightDir.value.set(st.lx+(at.lx-st.lx)*It,st.ly+(at.ly-st.ly)*It,0)},zt=(D,it,st)=>{let at=Math.min(1,Math.max(0,(st-D)/(it-D)));return at*at*(3-2*at)},mt=0;function ie(D,it,st,at){a.uTime.value=D;let It=st.position.z;mt=Yh(It),a.uNight.value=mt,Pt(mt);let Wt=gt.material.uniforms;Wt.uSunH.value=.13-.2*zt(0,.42,mt),Wt.uSunA.value=1-zt(.36,.5,mt),Wt.uMoonA.value=zt(.48,.75,mt),Ut.uniforms.uShaft.value=1-zt(.12,.34,mt),ut.uniforms.uCamZ.value=It;for(let et of F)if(et.ignite!==null&&et.target===0&&It-et.ignite<24&&mt>.26&&(et.target=1,et.delay=It-et.ignite>0?s(0,.5):0),et.target>et.lit){if((et.delay-=it)>0)continue;et.lit=Math.min(1,et.lit+it*(.9+n()*2)*(n()<.3?.2:1))}for(let et of F){let Kt=.86+.08*Math.sin(D*7.3+et.seed)+.06*Math.sin(D*13.1+et.seed*2)*et.flick;if(et.now=et.base*et.lit*Kt*(et.boost??1),et.item&&Ze(et.item,3,et.lit*Kt*(et.boost??1)),et.halo){let ye=Math.max(.5,-(et.halo.mesh.position.z-It)),Bn=Math.exp(-Math.pow(ye*.028,2));et.halo.mesh.material.uniforms.uIntensity.value=et.lit*Kt*Bn*(et.boost??1)*(et.base>0,1)}}Vt.length=0;for(let et of F)et.now>.01&&Vt.push(et);Vt.sort((et,Kt)=>et.pos.distanceToSquared(st.position)-Kt.pos.distanceToSquared(st.position));for(let et=0;et<8;et++){let Kt=Vt[et];Kt?Ct[et].set(Kt.pos.x,Kt.pos.y,Kt.pos.z,Kt.now):Ct[et].set(0,-100,0,0)}st.updateMatrixWorld();let Jt=st.matrixWorld.elements,Ne=Math.tan(st.fov*Math.PI/360);Wt.uCamRight.value.set(Jt[0],Jt[1],Jt[2]),Wt.uCamUp.value.set(Jt[4],Jt[5],Jt[6]),Wt.uCamFwd.value.set(-Jt[8],-Jt[9],-Jt[10]),Wt.uTanHalf.value.set(Ne*st.aspect,Ne,0);for(let et of ct){let Kt=It-et.mesh.position.z;if(et.gone)et.alpha=Math.max(0,et.alpha-it*3);else{Kt<7.5&&Kt>-2&&(et.gone=!0);let _n=Kt>7.5&&Kt<46&&It<_?1:0;et.alpha+=(_n-et.alpha)*Math.min(1,it*.8),at&&et.screen&&Math.hypot(at.x-et.screen.x,at.y-et.screen.y)<70&&(et.shy=2.5),et.shy=Math.max(0,et.shy-it),et.next-=it,et.next<0&&(et.blink=.18,et.next=s(2.5,7)),et.blink=Math.max(0,et.blink-it)}let ye=et.gone||et.shy>0||et.blink>0?0:1;et.open+=(ye-et.open)*Math.min(1,it*(ye?5:16)),et.mesh.material.uniforms.uOpen.value=et.open,et.mesh.material.uniforms.uAlpha.value=et.alpha*Math.exp(-Math.pow(Math.max(0,Kt)*.022,2)),lt.copy(et.mesh.position).project(st),et.screen={x:(lt.x*.5+.5)*innerWidth,y:(-lt.y*.5+.5)*innerHeight}}{let et=It-ce;!ue.gone&&et<25&&(ue.gone=!0);let Kt=!ue.gone&&et<46&&It<_+2?1:0;ue.op+=(Kt-ue.op)*Math.min(1,it*(ue.gone?7:.6)),oe(tn,0,ue.op)}{let et=It-yt;if(!Ot.gone&&et<8&&(Ot.gone=!0),Ot.gone&&Ot.t<1){Ot.t=Math.min(1,Ot.t+it*1.4);let Kt=Ot.t*Ot.t*(3-2*Ot.t);jt.x=Ot.baseX-Kt*1.2,de(jt),oe(jt,0,1-Kt)}}It<-104&&(ot=Math.min(1,ot+it/7)),K.uniforms.uReveal.value=ot;let On=null,os=(et,Kt,ye)=>(lt.set(et,Kt,ye).project(st),[(lt.x*.5+.5)*innerWidth,(-lt.y*.5+.5)*innerHeight,lt.z]);ht.forEach((et,Kt)=>{let ye=et.item,Bn=os(ye.x-ye.w/2,ye.y+ye.h*.88,ye.z),_n=os(ye.x+ye.w/2,ye.y+ye.h*.12,ye.z);et.rect=Bn[2]<1&&_n[2]<1?{x0:Bn[0],y0:Bn[1],x1:_n[0],y1:_n[1]}:null,et.start===null&&nt.lit>.6&&(et.start=D+.35+Kt*.28),et.start!==null&&D>et.start&&(et.lit=Math.min(1,et.lit+it*1.6)),at&&et.lit>.5&&et.rect&&at.x>et.rect.x0&&at.x<et.rect.x1&&at.y>et.rect.y0&&at.y<et.rect.y1&&(On=et)}),!On&&wt&&(On=ht.find(et=>et.id===wt&&et.lit>.2)||null);for(let et of ht){let Kt=et===On?1:0;et.hover+=(Kt-et.hover)*Math.min(1,it*(Kt?10:5));let ye=.95+.05*Math.sin(D*9+et.w);Ze(et.item,3,(.12+.58*et.lit+.32*et.hover)*ye),oe(et.item,2,et.hover*1.5),et.link&&(oe(et.link.tree,2,2.2+et.hover*3.2),et.link.root.boost=1+et.hover*1.8)}return{hovered:On}}return{scene:e,update:ie,pick(D,it){return ht.find(st=>st.lit>.5&&st.rect&&D>st.rect.x0&&D<st.rect.x1&&it>st.rect.y0&&it<st.rect.y1)||null},focus(D){wt=D},setSize(D,it,st){let at=D*it/(2*Math.tan(st*Math.PI/360));ut.uniforms.uScale.value=at,K.uniforms.uScale.value=at},igniteNear(D){if(!(Yh(D)<=.26))for(let it of F)it.ignite!==null&&D-it.ignite<24&&(it.target=1,it.delay=Math.max(0,D-it.ignite)*.09+.5)}}}qt.enabled=!1;var bl=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},U0=10,F0=6,Qh=5,jh=(i,t,e)=>i+(t-i)*e;async function Cv(){let i=document.documentElement,t=document.getElementById("forest-canvas"),e=document.getElementById("forestLoading"),n=matchMedia("(max-width: 720px)").matches,s=matchMedia("(pointer: coarse)").matches,r=new za({canvas:t,antialias:!0,powerPreference:"high-performance"});r.outputColorSpace=yi,r.setClearColor(67081,1);let a=Math.min(devicePixelRatio||1,n?1.5:1.75);r.setPixelRatio(a);let o=new $e(55,1,.1,160),c=await Kh({quality:n||s?.7:1,onProgress:L=>{e&&e.style.setProperty("--p",L.toFixed(2))}}),l=[...document.querySelectorAll(".stop[data-stop]")],h=Object.fromEntries(Kn.map(L=>[L.id,L])),d=[],u=()=>{d=l.map(L=>{let T=L.offsetTop,O=L.offsetHeight,H=h[L.dataset.stop],B=H&&innerWidth/innerHeight<.8&&H.lookPortrait!=null?{...H,look:H.lookPortrait}:H;return{el:L,h:O,s:T+O/2-innerHeight/2,stop:B}}).filter(L=>L.stop)},f=()=>{let L=innerWidth,T=innerHeight;r.setSize(L,T,!1),o.aspect=L/T,o.fov=L/T<.8?68:55,o.updateProjectionMatrix(),c.setSize(T,r.getPixelRatio(),o.fov),u()};addEventListener("resize",f),f(),document.fonts?.ready.then(u),addEventListener("load",u);let m={z:Kn[0].cam,look:0},x=L=>{if(d.length){if(L<=d[0].s)m.z=d[0].stop.cam,m.look=d[0].stop.look;else if(L>=d[d.length-1].s){let T=d[d.length-1];m.z=T.stop.cam,m.look=T.stop.look}else for(let T=0;T<d.length-1;T++){let O=d[T],H=d[T+1];if(L>=O.s&&L<=H.s){let B=bl(.18,.82,(L-O.s)/(H.s-O.s));m.z=jh(O.stop.cam,H.stop.cam,B),m.look=jh(O.stop.look,H.stop.look,B);break}}d.forEach((T,O)=>{let H=L-T.s;T.d=H,T.so=1-bl(T.h*.14,T.h*.32,Math.abs(H)),O===0&&H<0&&(T.so=1),O===d.length-1&&H>0&&(T.so=1)})}},p=()=>{for(let L of d){let T=1-bl(1.5,7,Math.abs(S.z-L.stop.cam)),O=Math.min(L.so??0,T);Math.abs((L.o??-1)-O)>.003&&(L.o=O,L.el.style.setProperty("--o",O.toFixed(3)),L.el.style.setProperty("--dy",L.d<0?"22px":"-22px"),L.el.classList.toggle("is-near",O>.5))}},g={x:-999,y:-999,nx:0,ny:0},M={x:0,y:0};addEventListener("pointermove",L=>{g.x=L.clientX,g.y=L.clientY,g.nx=L.clientX/innerWidth*2-1,g.ny=L.clientY/innerHeight*2-1},{passive:!0});let E=null;document.addEventListener("click",L=>{if(L.target.closest("a, button, .stop-card, .forest-nav, .forest-hud"))return;let T=c.pick(L.clientX,L.clientY);T?.url&&(location.href=T.url)}),document.querySelectorAll("[data-board]").forEach(L=>{let T=()=>c.focus(L.dataset.board),O=()=>c.focus(null);L.addEventListener("pointerenter",T),L.addEventListener("pointerleave",O),L.addEventListener("focus",T),L.addEventListener("blur",O)});let S={z:Kn[0].cam,v:0,look:0,dist:0},C=new z,A=new z,_=performance.now(),b=_,F=0,P=0,U=!0;x(scrollY),S.z=m.z,S.look=m.look,c.igniteNear(S.z);function k(L){if(!U)return;let T=Math.min(.05,(L-_)/1e3);_=L;let O=(L-b)/1e3;x(scrollY);{let Q=m.z-S.z,tt=Math.abs(Q),ht=U0+Math.max(0,tt-32)*.5,Y=Math.sign(Q)*Math.min(ht,Math.sqrt(2*Qh*tt),tt*6)-S.v,xt=(Math.sign(Y)===Math.sign(S.v)||S.v===0?F0:Qh*1.6)*T;S.v+=Math.max(-xt,Math.min(xt,Y)),tt<.005&&Math.abs(S.v)<.05&&(S.v=0,S.z=m.z);let bt=S.v*T;S.z+=bt,S.dist+=Math.abs(bt)}S.look+=(m.look-S.look)*Math.min(1,T*1.6),p(),M.x+=(g.nx-M.x)*Math.min(1,T*2),M.y+=(g.ny-M.y)*Math.min(1,T*2);let H=Math.sin(S.dist*1.9)*.035,B=Math.sin(O*.35)*.04;C.set(qa(S.z)+S.look*.18,1.62+H+B,S.z),o.position.copy(C);let nt=S.z-9;A.set(qa(nt)+S.look+M.x*(s?0:1.6)+Math.sin(O*.21)*.25,1.75-M.y*(s?0:.7)+B*.5,nt),o.lookAt(A);let X=c.update(O,T,o,s?null:g);X.hovered!==E&&(E=X.hovered,document.body.classList.toggle("sign-hover",!!E?.url)),r.render(c.scene,o),F++,T>.026&&P++,F%90===0&&(P>40&&a>.85&&(a=Math.max(.85,a-.25),r.setPixelRatio(a),f()),P=0),F===2&&i.classList.add("forest-ready"),requestAnimationFrame(k)}requestAnimationFrame(k),/[?&]debug\b/.test(location.search)&&(window.__forest={world:c,renderer:r,camera:o}),document.getElementById("skipWalk")?.addEventListener("click",()=>{U=!1;try{localStorage.setItem("forest-skip","1")}catch{}i.classList.remove("forest-on","forest-ready"),i.classList.add("forest-off","forest-skipped"),r.dispose()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&U&&(_=performance.now())})}export{Cv as start};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
