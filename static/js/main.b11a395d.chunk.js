(this.webpackJsonpdymetronome=this.webpackJsonpdymetronome||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(8),c=n.n(o),l=(n(15),n(16),n(3)),s=n(4),r=n(1),u=n(6),h=n(5),m=n(9),d=n(2),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this)).plan=t,i.tickTimeouts=[],i}return Object(s.a)(n,[{key:"start",value:function(t,e){var i=this;Object(m.a)(Object(d.a)(n.prototype),"start",this).call(this);var a=this.audioCtx.currentTime;this.plan.forEach((function(e,n){console.log("scheduling for segment : ".concat(n+1,". With tempo : ").concat(e.tempo," and Ticks : ").concat(e.ticks,"."));for(var o=60/e.tempo,c=function(n){i.clickAtTime(a);var c=a;i.tickTimeouts.push(setTimeout((function(){return t(c,e.tempo)}),1e3*a)),a+=o},l=0;l<e.ticks;l++)c()})),console.log("registering end event."),this.tickTimeouts.push(setTimeout((function(){return e()}),1e3*a+10))}},{key:"stopM",value:function(t){this.stop(t),this.tickTimeouts.forEach((function(t){clearTimeout(t)})),this.tickTimeouts=[]}}]),n}(function(){function t(){Object(l.a)(this,t),this.playing=!1,this.audioCtx=null,this.tick=null,this.tickVolume=null,this.soundHz=1e3}return Object(s.a)(t,[{key:"initAudio",value:function(){this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.tick=this.audioCtx.createOscillator(),this.tickVolume=this.audioCtx.createGain(),this.tick.type="sine",this.tick.frequency.value=this.soundHz,this.tickVolume.gain.value=0,this.tick.connect(this.tickVolume),this.tickVolume.connect(this.audioCtx.destination),this.tick.start(0)}},{key:"click",value:function(t){var e=this.audioCtx.currentTime;this.clickAtTime(e),t&&t(e)}},{key:"clickAtTime",value:function(t){this.tickVolume.gain.cancelScheduledValues(t),this.tickVolume.gain.setValueAtTime(0,t),this.tickVolume.gain.linearRampToValueAtTime(1,t+.001),this.tickVolume.gain.linearRampToValueAtTime(0,t+.001+.01)}},{key:"start",value:function(t){this.playing&&this.stop(),this.playing=!0,this.initAudio()}},{key:"stop",value:function(t){this.tick.stop(),this.playing=!1,this.audioCtx=null,this.tickVolume.gain.value=0}}]),t}()),k=(n(17),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).currentTempo=null,i.plan=i.formatPlan(t.plan),i.handleMetronomeStartClick=i.handleMetronomeStartClick.bind(Object(r.a)(i)),i.handleMetronomeStopClick=i.handleMetronomeStopClick.bind(Object(r.a)(i)),i.handleTick=i.handleTick.bind(Object(r.a)(i)),i.handleStop=i.handleStop.bind(Object(r.a)(i)),i.handlePlanSeqEnd=i.handlePlanSeqEnd.bind(Object(r.a)(i)),i}return Object(s.a)(n,[{key:"formatPlan",value:function(t){return t.map((function(t){return t.ticks=t.tempo*t.duration,t})),t}},{key:"handleMetronomeStartClick",value:function(t){this.metronome=new p(this.plan),this.metronome.start(this.handleTick,this.handlePlanSeqEnd),this.setState({})}},{key:"handleMetronomeStopClick",value:function(t){this.metronome.stopM(this.handleStop),this.metronome=null,this.setState({})}},{key:"handleTick",value:function(t,e){console.log("tick @ ".concat(t)),this.currentTempo=e,this.setState({})}},{key:"handleStop",value:function(t){console.log("Metronome Stopped")}},{key:"handlePlanSeqEnd",value:function(){this.metronome=null,this.setState({})}},{key:"render",value:function(){var t=this.metronome&&!!this.metronome.playing,e=t&&this.currentTempo?this.currentTempo:null;return a.a.createElement("div",{className:"mWrapper"},a.a.createElement("div",{className:"btnWrapper"},t?a.a.createElement("button",{className:"endBtn",onClick:this.handleMetronomeStopClick},a.a.createElement("span",{className:"btnText"},"Stop")):a.a.createElement("button",{className:"startBtn",onClick:this.handleMetronomeStartClick},a.a.createElement("span",{className:"btnText"},"Start"))),a.a.createElement("div",{className:"playingMsg"},e?a.a.createElement("div",null,"Currently playing @ : ".concat(this.currentTempo," Bpm...")):a.a.createElement("div",null,"It'll play as per plan selected")))}}]),n}(a.a.Component));var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,{plan:[{tempo:40,duration:.1},{tempo:60,duration:.1},{tempo:80,duration:.1},{tempo:120,duration:.2},{tempo:210,duration:.2}]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b11a395d.chunk.js.map