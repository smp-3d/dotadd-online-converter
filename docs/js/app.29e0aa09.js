(function(t){function e(e){for(var n,a,s=e[0],d=e[1],l=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var d=r[s];0!==o[d]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dotadd-online-converter/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"02d3":function(t,e,r){},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"2aad":function(t,e,r){"use strict";var n=r("2d94"),o=r.n(n);o.a},"2d94":function(t,e,r){},"4914f":function(t,e,r){"use strict";var n=r("02d3"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{drop:function(e){return e.preventDefault(),t.addFile(e)},dragover:function(e){return e.preventDefault(),t.dragFile(e)}}},[n("div",[t._m(0),n("img",{attrs:{alt:"Vue logo",src:r("cf05"),width:"100px"}}),n("Info",{attrs:{msg:".add Online Converter"}}),n("FileList",{ref:"files"})],1)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{visibility:"hidden",opacity:"0"},attrs:{id:"dropzone"}},[r("div",{attrs:{id:"textnode"}},[t._v("Drop files to .add")])])}],a=r("75fc"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{attrs:{id:"info"}},[r("h1",[t._v(t._s(t.msg))]),t._m(0)]),t._m(1)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n        Drop files here to convert to or from .add\n        "),r("br"),t._v("or other common Ambisonics decoding matrix formats.\n        "),r("a",{attrs:{href:"https://github.com/smp-3d/dotadd/blob/master/dotadd-spec/dotadd-spec.pdf",target:"_blank",rel:"noopener"}},[t._v("specifiction sheet")]),t._v("\n.\n      ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"footer"}},[r("h3",[t._v("Essential Links")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/smp-3d/dotadd-converter",target:"_blank",rel:"noopener"}},[t._v(".add Converter")])]),r("li",[r("a",{attrs:{href:"https://github.com/smp-3d/libdotadd",target:"_blank",rel:"C++ Library"}},[t._v("C++ Library")])]),r("li",[r("a",{attrs:{href:"https://github.com/smp-3d/dotadd.js",target:"_blank",rel:"noopener"}},[t._v("JS Library")])]),r("li",[r("a",{attrs:{href:"https://github.com/smp-3d/dotadd.py",target:"_blank",rel:"noopener"}},[t._v("Python Library")])]),r("li",[r("a",{attrs:{href:"https://github.com/smp-3d",target:"_blank",rel:"noopener"}},[t._v("List of all .add Repos")])])])])}],l={name:"Info",props:{msg:String}},c=l,u=(r("4914f"),r("2877")),p=Object(u["a"])(c,s,d,!1,null,"10b771c2",null),f=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"file-list"},[r("ExportDialog",{ref:"expdialog"}),r("md-list",t._l(t.files,(function(e,n){return r("md-list-item",{key:e.lastModified},[r("FileListItem",{attrs:{file:e,id:n},on:{delete:t.doDelete,export:t.doExport}})],1)})),1)],1)},h=[],v=(r("7f7f"),r("ac6a"),r("8a52")),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"root"}},[r("md-card",{staticStyle:{margin:"10px",padding:"20px",width:"800px"}},[r("div",{staticStyle:{"padding-bottom":"10px"}},[r("span",{staticStyle:{"font-weight":"bold"}},[t._v("\n            "+t._s(this.$attrs.file.f.name)+": \n        ")]),t._v("\n            "+t._s(this.$attrs.file.add.name)+"\n        "),r("span",{staticStyle:{color:"darkgrey"}},[t._v(" \n            "+t._s(this.$attrs.file.add.author)+"\n        ")]),r("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("\n            "+t._s(this.$attrs.file.valid?"":" - invalid")+"\n        ")])]),r("md-divider"),r("div",{attrs:{id:"description"}},[t._v("\n        "+t._s(this.$attrs.file.add.description)+"\n    ")]),r("div",{staticStyle:{"padding-top":"20px","padding-bottom":"30px"}},[t._v("Order: "+t._s(this.$attrs.file.add.decoder.matrices.length&&this.$attrs.file.add.decoder.matrices[0].matrix&&this.$attrs.file.add.decoder.matrices[0].matrix.length?this.$attrs.file.add.maxAmbisonicOrder():"0")+" | Normalisation: "+t._s(this.$attrs.file.add.decoder.matrices.length?this.$attrs.file.add.decoder.matrices[0].getNormalization().toUpperCase():"0")+" | Outputs: "+t._s(this.$attrs.file.add.decoder.output.channels.length)+" | Filterbands: "+t._s(this.$attrs.file.add.decoder.filters.length)+"\n        "),r("div",{staticStyle:{"margin-top":"10px"}},[r("md-button",{staticClass:"md-dense md-raised md-primary",staticStyle:{float:"right"},on:{click:t.doExport}},[t._v("export")]),r("md-button",{staticClass:"md-dense md-raised md-primary",staticStyle:{float:"right"},on:{click:t.deleteMe}},[t._v("delete")])],1)])],1)],1)},b=[],y={methods:{deleteMe:function(){this.$emit("delete",this.$attrs.id)},doExport:function(){this.$emit("export",this.$attrs.id)}}},g=y,x=(r("2aad"),Object(u["a"])(g,_,b,!1,null,"05264a19",null)),w=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("md-dialog",{attrs:{"md-active":t.showDialog,"md-backdrop":!1},on:{"update:mdActive":function(e){t.showDialog=e},"update:md-active":function(e){t.showDialog=e}}},[r("md-dialog-title",[t._v("Export")]),r("md-tabs",{staticStyle:{width:"500px"},attrs:{"md-dynamic-height":""}},[r("md-tab",{attrs:{"md-label":"Options"}},[r("md-field",[r("label",{attrs:{for:"format"}},[t._v("Format")]),r("md-select",{attrs:{name:"format",id:"format"},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}},[r("md-option",{attrs:{value:"add"}},[t._v("ADD")]),r("md-option",{attrs:{value:"iem"}},[t._v("IEM")]),r("md-option",{attrs:{value:"csv"}},[t._v("CSV")]),r("md-option",{attrs:{value:"ambdec"}},[t._v("AmbDec")]),r("md-option",{attrs:{value:"config"}},[t._v("AmbiX")])],1)],1),r("md-switch",{attrs:{value:"false"},model:{value:t.generateOutputChannels,callback:function(e){t.generateOutputChannels=e},expression:"generateOutputChannels"}},[t._v("Generate Output Channels")]),r("div",[r("md-checkbox",{model:{value:t.re_norm,callback:function(e){t.re_norm=e},expression:"re_norm"}},[t._v("Renormalize")]),r("md-radio",{attrs:{value:"n3d",disabled:!t.re_norm},model:{value:t.re_norm_target,callback:function(e){t.re_norm_target=e},expression:"re_norm_target"}},[t._v("N3D")]),r("md-radio",{attrs:{value:"sn3d",disabled:!t.re_norm},model:{value:t.re_norm_target,callback:function(e){t.re_norm_target=e},expression:"re_norm_target"}},[t._v("SN3D")])],1),r("md-checkbox",{model:{value:t.prettify,callback:function(e){t.prettify=e},expression:"prettify"}},[t._v("Prettify JSON based formats")])],1),r("md-tab",{attrs:{"md-label":"ADD DATA"}},[r("md-field",[r("label",[t._v("Name")]),r("md-input",{attrs:{placeholder:"Name (unchanged)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),r("md-field",[r("label",[t._v("Author")]),r("md-input",{attrs:{placeholder:"Author (unchanged)"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}})],1),r("md-field",[r("label",[t._v("Description")]),r("md-input",{attrs:{placeholder:"Description (unchanged)"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),r("md-field",[r("label",{attrs:{for:"norm"}},[t._v("Normalization")]),r("md-select",{attrs:{name:"norm",id:"norm"},model:{value:t.norm,callback:function(e){t.norm=e},expression:"norm"}},[r("md-option",{attrs:{value:"unknown"}},[t._v("unknown")]),r("md-option",{attrs:{value:"sn3d"}},[t._v("SN3D")]),r("md-option",{attrs:{value:"n3d"}},[t._v("N3D")])],1)],1)],1)],1),r("md-dialog-actions",[r("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("Cancel")]),r("md-button",{staticClass:"md-primary",on:{click:t.doExport}},[t._v("Export")])],1)],1)],1)},O=[],C=(r("28a5"),r("ac4d"),r("8a81"),{name:"ExportDialog",data:function(){return{showDialog:!1,format:"add",generateOutputChannels:!1,re_norm:!1,re_norm_target:"sn3d",norm:"",name:"",description:"",author:"",currentAdd:null,prettify:!0}},methods:{doExport:function(){this.showDialog=!1;var t,e=new v["ConverterOptions"];this.author==this.currentAdd.author&&""!==this.author||e.options.push(new v["ConverterOption"]("author",this.author)),this.name==this.currentAdd.name&&""!==this.name||e.options.push(new v["ConverterOption"]("name",this.name)),this.description==this.currentAdd.description&&""!==this.description||e.options.push(new v["ConverterOption"]("description",this.description)),this.prettify&&e.options.push(new v["ConverterOption"]("prettify",!0)),this.re_norm&&e.options.push(new v["ConverterOption"]("reNorm",this.re_norm_target)),this.norm&&e.options.push(new v["ConverterOption"]("norm",this.norm)),e.options.push(new v["ConverterOption"]("format",this.format));try{t=v["Converter"].convert_string([new v["ConvertableTextFile"](this.currentFile.f.name,JSON.stringify(this.currentAdd))],e)}catch(d){if(this.$toasted.show("Error: "+d.message,{theme:"bubble",position:"bottom-right",duration:7e3}),!this.currentAdd.valid()){var r=!0,n=!1,o=void 0;try{for(var i,a=this.currentAdd.inv_reasons[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value;this.$toasted.show(s,{theme:"bubble",position:"bottom-right",duration:7e3})}}catch(l){n=!0,o=l}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}}return}t.output_files.length&&this.download("".concat(this.currentFile.f.name.split(".").slice(0,-1).join("."),".").concat(t.output_files[0].container),t.output_files[0].data)},show:function(t){this.currentFile=t,this.currentAdd=t.add,this.showDialog=!0,this.name=t.add.name,this.description=t.add.description,this.author=t.add.author,this.norm=t.add.decoder.matrices[0].normalization},download:function(t,e){var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),r.setAttribute("download",t),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}}),k=C,D=Object(u["a"])(k,S,O,!1,null,null,null),E=D.exports,$={data:function(){return{files:[],readers:[],filereader:new FileReader,current_file_name:""}},mounted:function(){var t=this;this.filereader.onload=function(e){var r,n,o=v["Converter"].convert_string([new v["ConvertableTextFile"](t.current_file_name,e.target.result)],new v["ConverterOptions"]);o.results.forEach((function(t){t._valid=t.valid()})),o.incomplete_results.forEach((function(t){t._valid=t.valid()})),(r=t.files).push.apply(r,Object(a["a"])(o.results)),(n=t.files).push.apply(n,Object(a["a"])(o.incomplete_results))}},methods:{addFiles:function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach((function(e){var r=new FileReader;r.onload=function(r){var n;try{n=v["Converter"].convert_string([new v["ConvertableTextFile"](e.name,r.target.result)],new v["ConverterOptions"])}catch(i){return console.log(i),void t.$toasted.show("Error: "+i.message,{theme:"bubble",position:"bottom-right",duration:5e3})}var o={};n.results.length?o={add:n.results.shift(),f:e}:n.incomplete_results.length&&(o={add:n.incomplete_results.shift(),f:e}),o.valid=o.add.valid(),t.files.push(o)},r.readAsText(e)}))},doDelete:function(t){this.files.splice(t,1)},doExport:function(t){this.$refs.expdialog.show(this.files[t])}},components:{FileListItem:w,ExportDialog:E}},A=$,z=(r("579a"),Object(u["a"])(A,m,h,!1,null,null,null)),F=z.exports,j={name:"app",components:{Info:f,FileList:F},data:function(){return{files:[]}},computed:{uploadDisabled:function(){return 0===this.files.length}},methods:{dragFile:function(){document.querySelector("#dropzone").style.visibility="",document.querySelector("#dropzone").style.opacity=1,document.querySelector("#textnode").style.fontSize="48px"},addFile:function(t){var e,r=t.dataTransfer.files;r&&(e=this.$refs.files).addFiles.apply(e,Object(a["a"])(r))},upload:function(){}},mounted:function(){window.addEventListener("dragenter",(function(t){t.preventDefault(),document.querySelector("#dropzone").style.visibility="",document.querySelector("#dropzone").style.opacity=1,document.querySelector("#textnode").style.fontSize="48px"})),window.addEventListener("dragleave",(function(t){t.preventDefault(),document.querySelector("#dropzone").style.visibility="hidden",document.querySelector("#dropzone").style.opacity=0,document.querySelector("#textnode").style.fontSize="42px"})),window.addEventListener("dragover",(function(t){t.preventDefault(),document.querySelector("#dropzone").style.visibility="",document.querySelector("#dropzone").style.opacity=1,document.querySelector("#textnode").style.fontSize="48px"})),window.addEventListener("drop",(function(t){t.preventDefault(),document.querySelector("#dropzone").style.visibility="hidden",document.querySelector("#dropzone").style.opacity=0,document.querySelector("#textnode").style.fontSize="42px"}))}},q=j,L=(r("034f"),Object(u["a"])(q,o,i,!1,null,null,null)),N=L.exports,M=r("43f9"),P=r.n(M),T=(r("51de"),r("e094"),r("4914")),I=r("a65d"),J=r.n(I);n["default"].config.productionTip=!1,T["a"].prototype.verbose=!0,n["default"].use(P.a),n["default"].use(J.a),new n["default"]({render:function(t){return t(N)}}).$mount("#app"),n["default"].filter("kb",(function(t){return Math.floor(t/1024)}))},"579a":function(t,e,r){"use strict";var n=r("646b"),o=r.n(n);o.a},"646b":function(t,e,r){},"64a9":function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.6b34a9ed.png"}});
//# sourceMappingURL=app.29e0aa09.js.map