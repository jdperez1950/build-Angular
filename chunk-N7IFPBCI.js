import{a as ve,c as Oe,d as qe,f as Ke,g as Qe}from"./chunk-WCJXNGSX.js";import{A as it,a as z,b as $,c as je,d as Be,e as ze,f as $e,g as Ue,h as We,i as Ze,j as He,k as Je,p as Ye,q as Xe,s as E,u as K,v as O,x as Q,y as et,z as tt}from"./chunk-A6B3UT3P.js";import{A as he,Ca as Me,Db as De,Gb as Ne,Ha as Fe,Hb as we,Ib as Ae,Ja as Ie,Jb as Le,Kb as Ve,La as q,Lb as ke,Ma as ye,Mb as U,Nb as W,Pa as Pe,R as Ce,Sa as j,Ta as B,Va as Re,Wa as Te,Ya as Ge,Z as V,ba as R,ha as T,ia as D,j as ge,ja as k,l as L,la as _e,na as m,qa as xe,ra as Se,wa as Ee,za as be}from"./chunk-R3U5SGL5.js";import{Cb as f,Db as Z,Fb as H,Fc as se,Gb as J,Hb as o,Ib as t,Jb as h,Ka as oe,Nb as ae,Qb as b,Sb as g,Vb as M,Za as N,ad as w,ba as ie,bb as a,bc as Y,bd as ce,cb as _,cc as r,dc as S,ec as v,ga as ne,gc as re,gd as ue,ha as G,hc as le,ic as me,j as ee,jd as A,kc as P,la as F,ld as fe,pc as pe,qc as de,tb as c,ua as I,v as te,va as y,xb as u}from"./chunk-UO2YQECM.js";var ot=(()=>{let l=class l{constructor(p){this.data=p,this.dialogRef=G(z)}onNoClick(){this.dialogRef.close(!1)}};l.\u0275fac=function(d){return new(d||l)(_($))},l.\u0275cmp=F({type:l,selectors:[["app-terms-and-conditions-modal"]],standalone:!0,features:[P],decls:18,vars:3,consts:[[1,"text"],["mat-dialog-title",""],["target","_blank",3,"href"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(d,i){d&1&&(o(0,"div",0)(1,"h2",1),r(2,"Aceptaci\xF3n de tratamiento de datos personales y T\xE9rminos y condiciones de la convocatoria"),t(),o(3,"mat-dialog-content")(4,"p"),r(5," En el marco de la Ley 1581 de 2012, Colombia protege los datos personales, estableciendo principios como la transparencia y el derecho de las personas a controlar la informaci\xF3n y su uso. Esta Ley regula c\xF3mo se manejan y protegen los datos por parte de entidades p\xFAblicas y privadas, asegurando la privacidad de los ciudadanos. "),t(),o(6,"p"),r(7," Aceptando los t\xE9rminos y condiciones confirma que ley\xF3 y esta de acuerdo con lo descrito en el "),o(8,"a",2),r(9,"documento de Te\u0301rminos de la convocatoria"),t(),r(10," para el registro al Banco provedores "),t(),o(11,"p"),r(12," Para continuar con el proceso, \xBFaceptas nuestra pol\xEDtica de tratamiento de datos personales? "),t()(),o(13,"mat-dialog-actions")(14,"button",3),r(15,"No"),t(),o(16,"button",4),r(17,"Si"),t()()()),d&2&&(a(8),u("href",i.data.terms,N),a(6),u("mat-dialog-close",!1),a(2),u("mat-dialog-close",!0))},dependencies:[ze,$e,Ue,Be,T,R],styles:[".text[_ngcontent-%COMP%]{margin:30px}"]});let e=l;return e})();var at=(()=>{let l=class l{constructor(p){this._platform_id=p,this.isBrowser=!0,this._urlRecaptcha="https://www.google.com/recaptcha/api/siteverify",fe(p)&&(this.isBrowser=!0)}getToken(p){let d="false";if(this.isBrowser){let i=new XMLHttpRequest;i.open("POST",this._urlRecaptcha,!1),i.send(),d=JSON.parse(i.responseText)[p]}return d}executeRecaptchaVisible(p){console.log(p)}};l.\u0275fac=function(d){return new(d||l)(ne(oe))},l.\u0275prov=ie({token:l,factory:l.\u0275fac,providedIn:"root"});let e=l;return e})();function Et(e,l){e&1&&r(0,"Informaci\xF3n B\xE1sica")}function bt(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",""+n.value),a(),S(n.label)}}function Mt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[0],"idTipoPersona")," ")}}function Ft(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"razonSocial")," ")}}function It(e,l){if(e&1&&(o(0,"mat-form-field",17)(1,"mat-label"),r(2," Raz\xF3n Social "),t(),h(3,"input",41),c(4,Ft,2,1,"mat-error"),t()),e&2){let n=g();a(4),f(n.ifInvalidField(n.formGroups[0],"razonSocial")?4:-1)}}function yt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"primerNombre")," ")}}function Pt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"segundoNombre")," ")}}function Rt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"primerApellido")," ")}}function Tt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"segundoApellido")," ")}}function Gt(e,l){if(e&1&&(o(0,"mat-form-field",17)(1,"mat-label"),r(2," Primer Nombre "),t(),h(3,"input",42),c(4,yt,2,1,"mat-error"),t(),o(5,"mat-form-field",17)(6,"mat-label"),r(7," Segundo Nombre "),t(),h(8,"input",43),c(9,Pt,2,1,"mat-error"),t(),o(10,"mat-form-field",17)(11,"mat-label"),r(12," Primer Apellido"),t(),h(13,"input",44),c(14,Rt,2,1,"mat-error"),t(),o(15,"mat-form-field",17)(16,"mat-label"),r(17," Segundo Apellido"),t(),h(18,"input",45),c(19,Tt,2,1,"mat-error"),t()),e&2){let n,p,d,i,s=g();a(3),M("placeholder",((n=s.formGroups[0].get("idTipoPersona"))==null?null:n.value)==="2"?"Primer Nombre Representante Legal":"Primer Nombre"),a(),f(s.ifInvalidField(s.formGroups[0],"primerNombre")?4:-1),a(4),M("placeholder",((p=s.formGroups[0].get("idTipoPersona"))==null?null:p.value)==="2"?"Segundo Nombre Representante Legal":"Segundo Nombre"),a(),f(s.ifInvalidField(s.formGroups[0],"segundoNombre")?9:-1),a(4),M("placeholder",((d=s.formGroups[0].get("idTipoPersona"))==null?null:d.value)==="2"?"Primer Apellido Representante Legal":"Primer Apellido"),a(),f(s.ifInvalidField(s.formGroups[0],"primerApellido")?14:-1),a(4),M("placeholder",((i=s.formGroups[0].get("idTipoPersona"))==null?null:i.value)==="2"?"Segundo Apellido Representante Legal":"Segundo Apellido"),a(),f(s.ifInvalidField(s.formGroups[0],"segundoApellido")?19:-1)}}function Dt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[0],"nit")," ")}}function Ot(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[0],"confirmDocument")," ")}}function Nt(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",""+n),a(),S(n)}}function wt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"digitoVerificacionNit")," ")}}function At(e,l){if(e&1&&(o(0,"mat-form-field",17)(1,"mat-label"),r(2,"D\xEDgito de Verificaci\xF3n"),t(),o(3,"mat-select",46),H(4,Nt,2,2,"mat-option",19,Z),t(),c(6,wt,2,1,"mat-error"),t()),e&2){let n=g();a(4),J(n.optionsDV),a(2),f(n.ifInvalidField(n.formGroups[0],"digitoVerificacionNit")?6:-1)}}function Lt(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",n.id),a(),S(n.nombre)}}function Vt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[0],"idDepartamento")," ")}}function kt(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",n.id),a(),S(n.nombre)}}function qt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[0],"idMunicipio")," ")}}function jt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[0],"direccion")," ")}}function Bt(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",n.value),a(),S(n.label)}}function zt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[0],"tipoSupervisionContable")," ")}}function $t(e,l){if(e&1&&(o(0,"mat-form-field",17)(1,"mat-label"),r(2,"Certificador financiero de la empresa:"),t(),o(3,"mat-select",47),c(4,Bt,2,2,"mat-option",23),t(),c(5,zt,2,1,"mat-error"),t()),e&2){let n=g();a(4),u("ngForOf",n.revisorFiscalOptions),a(),f(n.ifInvalidField(n.formGroups[0],"tipoSupervisionContable")?5:-1)}}function Ut(e,l){e&1&&r(0,"Informaci\xF3n Adicional")}function Wt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"celular")," ")}}function Zt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"correoElectronico")," ")}}function Ht(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"confirmarCorreoElectronico")," ")}}function Jt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[1],"nombreRepresentanteLegal")," ")}}function Yt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[1],"cedulaRepresentanteLegal")," ")}}function Kt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g(2);a(),v(" ",n.getErrorMessageField(n.formGroups[1],"fechaConstitucion")," ")}}function Qt(e,l){if(e&1&&(o(0,"mat-form-field",17)(1,"mat-label"),r(2,"Nombre Representante Legal"),t(),h(3,"input",48),c(4,Jt,2,1,"mat-error"),t(),o(5,"mat-form-field",17)(6,"mat-label"),r(7,"C\xE9dula Representante Legal"),t(),h(8,"input",49),c(9,Yt,2,1,"mat-error"),t(),o(10,"mat-form-field",17)(11,"mat-label"),r(12,"Fecha de Constituci\xF3n"),t(),h(13,"input",50)(14,"mat-datepicker-toggle",32)(15,"mat-datepicker",null,1),c(17,Kt,2,1,"mat-error"),t()),e&2){let n=Y(16),p=g();a(4),f(p.ifInvalidField(p.formGroups[1],"nombreRepresentanteLegal")?4:-1),a(5),f(p.ifInvalidField(p.formGroups[1],"cedulaRepresentanteLegal")?9:-1),a(4),u("matDatepicker",n),a(),u("for",n),a(3),f(p.ifInvalidField(p.formGroups[1],"fechaConstitucion")?17:-1)}}function Xt(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"fechaExpedicionDI")," ")}}function ei(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",n.value),a(),S(n.label)}}function ti(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"tieneFacturacionElectronica")," ")}}function ii(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",n.id),a(),S(n.nombre)}}function ni(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"tiposProveedor")," ")}}function oi(e,l){if(e&1&&(o(0,"mat-option",19),r(1),t()),e&2){let n=l.$implicit;u("value",n.value),a(),S(n.label)}}function ai(e,l){if(e&1&&(o(0,"mat-error"),r(1),t()),e&2){let n=g();a(),v(" ",n.getErrorMessageField(n.formGroups[1],"expuestoPublicamente")," ")}}function ri(e,l){e&1&&(o(0,"mat-error"),r(1," Captcha es requerido "),t())}var rt=(()=>{let l=class l{constructor(p,d,i,s,C,x,mt,pt,dt,st,ct,ut){this.fb=p,this.proveedorService=d,this.api=i,this.router=s,this._formValidationErrorsService=C,this.messagesService=x,this.cdr=mt,this.spinner=pt,this.recaptcha=dt,this.dialogRef=st,this.data=ct,this.route=ut,this.isLinear=!0,this.tipoPersona="1",this.documentStr="C\xE9dula de Ciudadan\xEDa",this.formGroups=[],this.stepperOrientation=new ee,this.departamentos=[],this.tipoInsumos=[],this.municipios=[],this.captchaResolved=!1,this.tipoPersonaOptions=[{label:"Natural",value:1},{label:"Jur\xEDdica",value:2}],this.revisorFiscalOptions=[{label:"Contador",value:1},{label:"Revisor Fiscal",value:2}],this.optionsDV=["1","2","3","4","5","6","7","8","9","0"],this.keyV2=D.recaptchaKeyV2,this.yesNoOptions=[{label:"Si",value:!0},{label:"No",value:!1}],this.dialog=G(je),this.closedCampaign=!0,this.versionTyC="1.0",this.termsUrl="./terminos_de_la_convocatoria.pdf",this.startDate=new Date(new Date().setFullYear(new Date().getFullYear())),this.breakpointObserver=G(he),this.formSchemaPersonaNatural=[[{field:"idTipoPersona",validators:[m.required]},{field:"nit",validators:[m.required,m.minLength(4),m.maxLength(10),E()]},{field:"idDepartamento",validators:[m.required]},{field:"idMunicipio",validators:[m.required]},{field:"direccion",validators:[m.required,m.minLength(6),m.maxLength(250)]},{field:"primerNombre",validators:[m.required,m.minLength(3),m.maxLength(20),m.pattern("^[a-zA-Z\xF1\xD1]+$")]},{field:"segundoNombre",validators:[m.minLength(3),m.maxLength(20),m.pattern("^[a-zA-Z\xF1\xD1]+$")]},{field:"primerApellido",validators:[m.required,m.minLength(3),m.maxLength(20),m.pattern("^[a-zA-Z\xF1\xD1]+$")]},{field:"segundoApellido",validators:[m.minLength(3),m.maxLength(20),m.pattern("^[a-zA-Z\xF1\xD1]+$")]},{field:"confirmDocument",validators:[m.required,E()]}],[{field:"celular",validators:[m.required,E(),m.minLength(5),m.maxLength(13)]},{field:"correoElectronico",validators:[m.required,O()]},{field:"confirmarCorreoElectronico",validators:[m.required,O()]},{field:"fechaExpedicionDI",validators:[m.required]},{field:"tieneFacturacionElectronica",validators:[m.required]},{field:"tiposProveedor",validators:[m.required]},{field:"expuestoPublicamente",validators:[m.required]}]],this.formSchemaPersonaJuridica=[[{field:"idTipoPersona",validators:[m.required]},{field:"nit",validators:[m.required,m.minLength(4),m.maxLength(10),E()]},{field:"digitoVerificacionNit",validators:[m.required,m.minLength(1),m.maxLength(1),E()]},{field:"razonSocial",validators:[m.required,m.minLength(3),m.maxLength(50)]},{field:"idDepartamento",validators:[m.required]},{field:"idMunicipio",validators:[m.required]},{field:"direccion",validators:[m.required,m.minLength(6),m.maxLength(250)]},{field:"tipoSupervisionContable",validators:[m.required]},{field:"confirmDocument",validators:[m.required,E()]}],[{field:"celular",validators:[m.required,E(),m.minLength(5),m.maxLength(13)]},{field:"correoElectronico",validators:[m.required,O()]},{field:"confirmarCorreoElectronico",validators:[m.required,O()]},{field:"nombreRepresentanteLegal",validators:[m.required,m.minLength(3),m.maxLength(80),m.pattern("^[a-zA-Z\xF1\xD1\xE1\xE9\xED\xF3\xFA\xC1\xC9\xCD\xD3\xDA\\s]+$")]},{field:"fechaConstitucion",validators:[m.required,this.validateDate(6)]},{field:"tieneFacturacionElectronica",validators:[m.required]},{field:"tiposProveedor",validators:[m.required]},{field:"cedulaRepresentanteLegal",validators:[m.required,m.minLength(4),m.maxLength(10),E()]},{field:"expuestoPublicamente",validators:[m.required]}]],this.stepperOrientation=this.breakpointObserver.observe("(min-width: 800px)").pipe(te(({matches:ft})=>ft?"horizontal":"vertical"))}ngOnInit(){this.getDataCampaing(),this.initFormGroups()}ngAfterViewInit(){}initFormGroups(){let p=this.fb.group({idTipoPersona:[""],nit:[""],digitoVerificacionNit:[""],razonSocial:[""],idDepartamento:[""],idMunicipio:[""],direccion:[""],tipoSupervisionContable:[""],primerNombre:[""],segundoNombre:[""],primerApellido:[""],segundoApellido:[""],confirmDocument:[""]},{validators:K("nit","confirmDocument")}),d=this.fb.group({celular:[""],correoElectronico:[""],confirmarCorreoElectronico:[""],nombreRepresentanteLegal:[""],fechaConstitucion:[""],fechaExpedicionDI:[""],tieneFacturacionElectronica:[""],tiposProveedor:[""],cedulaRepresentanteLegal:[""],expuestoPublicamente:[""],tyc:[!0]},{validators:Q("correoElectronico","confirmarCorreoElectronico")});this.formGroups.push(p),this.formGroups.push(d),this.onTipoPersonaChange("1")}ifInvalidField(p,d){return this._formValidationErrorsService.isInvalidField(p,d)}getErrorMessageField(p,d){return this._formValidationErrorsService.errorMessageField(p,d)}validateDate(p){return d=>{let i=null;if(d.value!=""){let s=new Date,C=new Date(d.value);i=(s.getFullYear()-C.getFullYear())*12+(s.getMonth()-C.getMonth())<p?{fechaConstitucion:!0}:null}return i}}captchaValidator(p){return d=>p?null:{captchaRequired:!0}}onDepartamentoChange(p){let d=this.departamentos.find(i=>i.id==p);this.formGroups[0].get("idMunicipio")?.setValue(""),this.municipios=this.dataCampaing?.municipios.filter(i=>i.departamento.id==d?.id)??[]}onTipoPersonaChange(p){this.tipoPersona=p,this.documentStr=p==="1"?"C\xE9dula de Ciudadan\xEDa":"NIT",this.formGroups.forEach(d=>{Object.keys(d.controls).forEach(i=>{d.get(i)?.clearValidators()})});for(let d=0;d<this.formGroups.length;d++)this.formGroups[d].clearValidators(),this.tipoPersona=="1"?this.formSchemaPersonaNatural[d].forEach(i=>{this.formGroups[d].get(i.field)?.addValidators(i.validators)}):this.formSchemaPersonaJuridica[d].forEach(i=>{this.formGroups[d].get(i.field)?.addValidators(i.validators)}),d<2&&this.formGroups[d].addValidators([K("nit","confirmDocument"),Q("correoElectronico","confirmarCorreoElectronico")]),this.formGroups.forEach(i=>{i.updateValueAndValidity(),Object.keys(i.controls).forEach(s=>{i.get(s)?.updateValueAndValidity()})})}onSubmit(){this.formGroups.every(p=>p.valid)?this.dialog.open(ot,{data:{terms:this.dataCampaing?.urlTerminos}}).afterClosed().subscribe(d=>{if(d){this.spinner.showSpinner();let i={};this.formGroups.forEach(s=>{Object.keys(s.controls).forEach(C=>{let x=s.get(C);x&&x.value!==null&&x.value!=="undefined"&&(i[C]=x.value)})}),i.versionTyC=this.versionTyC,this.tipoPersona=="1"&&(i.razonSocial=`${i.primerNombre}${i.segundoNombre?" "+i.segundoNombre:""} ${i.primerApellido}${i.segundoApellido?" "+i.segundoApellido:""}`),i.convocatoria=this.dataCampaing?.id,this.proveedorService.crearProveedor(i).subscribe({next:s=>{this.spinner.hideSpinner(),this.messagesService.showTopCenterMessageWithButton("Se ha registrado satisfactoriamente. Verifique el correo enviado a su bandeja de correo, no olvide buscar en la bandeja de Spam en caso de no encontrarlo.","Ok"),this.router.navigateByUrl("/auth")},error:s=>{this.spinner.hideSpinner(),this.messagesService.showErrorMessage(s.error.message)}})}else this.messagesService.showTopCenterMessageWithButton("Debe aceptar los te\u0301rminos y condiciones para poder registrase.","Ok")}):this.formGroups.forEach(p=>p.markAllAsTouched)}onCancel(){this.dialogRef.close()}resetForm(){this.formGroups.forEach(p=>p.reset())}getDataCampaing(){let p=this.route.snapshot.paramMap.get("campaignId");this.api.getData(D.convocatorias+"/"+p).subscribe({next:d=>{console.log(d),this.dataCampaing=d,this.versionTyC=this.dataCampaing.versionTerminos??"";let i=new Map;this.dataCampaing.municipios.forEach(s=>{i.set(s.departamento.id,s.departamento)}),this.departamentos=Array.from(i.values()),this.tipoInsumos=this.dataCampaing.tiposProveedor},error:d=>{console.error("Error al cargar la Convocatoria:",d)}})}onResolved(p){this.recaptcha.executeRecaptchaVisible(p),this.captchaResolved=!!p,this.formGroups[1].get("captchaControl")?.updateValueAndValidity()}};l.\u0275fac=function(d){return new(d||l)(_(Fe),_(et),_(k),_(L),_(tt),_(De),_(se),_(it),_(at),_(z,8),_($,8),_(ge))},l.\u0275cmp=F({type:l,selectors:[["app-register-supplier"]],standalone:!0,features:[P],decls:156,vars:49,consts:[["picker1",""],["picker",""],[1,"banner-container-register"],["textPosition","left-center",3,"imageSrc","height","mobileHeight"],[2,"text-align","left"],[1,"register-container"],[1,"text-container"],["href","./manual_de_registro_banco_de_proveedores.pdf","target","_blank",1,"terms-button"],[1,"name-campaign","text-center"],["target","_blank",1,"terms-button",3,"href"],[1,"text-center"],[1,"form-container"],[1,"step-label",3,"linear","orientation"],[3,"stepControl"],[3,"ngSubmit","formGroup"],["matStepLabel",""],[1,"form-row"],["appearance","fill",1,"half-width"],["formControlName","idTipoPersona",3,"selectionChange"],[3,"value"],["matInput","","formControlName","nit",3,"placeholder"],["matInput","","formControlName","confirmDocument","placeholder","Confirmar documento"],["formControlName","idDepartamento",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","idMunicipio"],["matInput","","formControlName","direccion","placeholder","Direcci\xF3n comercial"],[1,"button-row"],["mat-button","","matStepperNext","","type","button"],["matInput","","formControlName","celular","placeholder","Celular"],["matInput","","formControlName","correoElectronico","placeholder","Correo Electr\xF3nico"],["matInput","","formControlName","confirmarCorreoElectronico","placeholder","Correo Electr\xF3nico"],["matInput","","formControlName","fechaExpedicionDI","placeholder","Fecha de Expedici\xF3n documento Identidad",3,"matDatepicker","max"],["matSuffix","",3,"for"],["formControlName","tieneFacturacionElectronica"],["formControlName","tiposProveedor","multiple",""],["formControlName","expuestoPublicamente"],[1,"recaptcha"],[3,"resolved","siteKey"],[4,"ngIf"],["mat-button","","matStepperPrevious","","type","button"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["matInput","","formControlName","razonSocial","placeholder","Raz\xF3n Social"],["matInput","","formControlName","primerNombre",3,"placeholder"],["matInput","","formControlName","segundoNombre",3,"placeholder"],["matInput","","formControlName","primerApellido",3,"placeholder"],["matInput","","formControlName","segundoApellido",3,"placeholder"],["formControlName","digitoVerificacionNit"],["formControlName","tipoSupervisionContable"],["matInput","","formControlName","nombreRepresentanteLegal","placeholder","Nombre Representante Legal"],["matInput","","formControlName","cedulaRepresentanteLegal","placeholder","C\xE9dula Representante Legal"],["matInput","","formControlName","fechaConstitucion","placeholder","Fecha de Constituci\xF3n",3,"matDatepicker"]],template:function(d,i){if(d&1){let s=ae();o(0,"div",2)(1,"app-cover-img",3),h(2,"h1",4),t()(),o(3,"div",5)(4,"div",6)(5,"h2"),r(6,"\xA1Bienvenido al Banco de Proveedores para el desarrollo de proyectos productivos PNIS!"),t(),o(7,"span"),r(8,"Si tu negocio se enfoca en proveer productos de ferreter\xEDa, maquinaria, equipos, insumos agropecuarios, material vegetal o semillas, semovientes, esta es una excelente oportunidad para ti."),t(),o(9,"p"),r(10,"Consulta nuestro manual de registro en siguiente enlace "),o(11,"a",7),r(12," Ver Manual de Registro Banco de Proveedores"),t()(),h(13,"br")(14,"br"),o(15,"h2",8),r(16),t(),o(17,"h3"),r(18,"\xBFQuieres ser parte de esta Convocatoria?"),t(),o(19,"h4"),r(20,"Reg\xEDstrate en las siguientes fechas:"),t(),o(21,"h4"),r(22,"Fecha inicio: "),o(23,"strong"),r(24),t()(),o(25,"h4"),r(26,"Fecha Finalizaci\xF3n: "),o(27,"strong"),r(28),t()(),o(29,"h4"),r(30,"Correo Soporte: "),o(31,"strong"),r(32),t()(),o(33,"h4"),r(34,"Detalles:"),t(),o(35,"span"),r(36),t(),h(37,"br")(38,"br"),o(39,"span"),r(40,"Conoce todos los detalles de la convocatoria, "),o(41,"a",9),r(42,"Ver te\u0301rminos y condiciones."),t()(),h(43,"br")(44,"br"),o(45,"span"),r(46," Una vez finalizado el proceso, recibir\xE1s un correo electr\xF3nico con tu usuario y la confirmaci\xF3n de tu inscripci\xF3n. Con esta informaci\xF3n puedes ingresar a la plataforma e iniciar la carga de tus documentos. "),t(),h(47,"br")(48,"br"),o(49,"h4",10),r(50,"\xA1Esperamos contar con tu participaci\xF3n para fortalecer los proyectos productivos en nuestra comunidad!"),t()()(),o(51,"div",5)(52,"div",11)(53,"h2"),r(54,"Formulario Registro Proveedor"),t(),o(55,"mat-horizontal-stepper",12),pe(56,"async"),o(57,"mat-step",13)(58,"form",14),b("ngSubmit",function(){return I(s),y(i.onSubmit())}),c(59,Et,1,0,"ng-template",15),o(60,"div",16)(61,"mat-form-field",17)(62,"mat-label"),r(63,"Tipo de Persona"),t(),o(64,"mat-select",18),b("selectionChange",function(x){return I(s),y(i.onTipoPersonaChange(x.value))}),H(65,bt,2,2,"mat-option",19,Z),t(),c(67,Mt,2,1,"mat-error"),t(),c(68,It,5,1,"mat-form-field",17)(69,Gt,20,8),o(70,"mat-form-field",17)(71,"mat-label"),r(72),t(),h(73,"input",20),c(74,Dt,2,1,"mat-error"),t(),o(75,"mat-form-field",17)(76,"mat-label"),r(77),t(),h(78,"input",21),c(79,Ot,2,1,"mat-error"),t(),c(80,At,7,1,"mat-form-field",17),o(81,"mat-form-field",17)(82,"mat-label"),r(83,"Departamento"),t(),o(84,"mat-select",22),b("selectionChange",function(x){return I(s),y(i.onDepartamentoChange(x.value))}),c(85,Lt,2,2,"mat-option",23),t(),c(86,Vt,2,1,"mat-error"),t(),o(87,"mat-form-field",17)(88,"mat-label"),r(89,"Municipio"),t(),o(90,"mat-select",24),c(91,kt,2,2,"mat-option",23),t(),c(92,qt,2,1,"mat-error"),t(),o(93,"mat-form-field",17)(94,"mat-label"),r(95,"Direcci\xF3n Comercial"),t(),h(96,"input",25),c(97,jt,2,1,"mat-error"),t(),c(98,$t,6,2,"mat-form-field",17),t(),o(99,"div",26)(100,"button",27),r(101,"Siguiente"),t()()()(),o(102,"mat-step",13)(103,"form",14),b("ngSubmit",function(){return I(s),y(i.onSubmit())}),c(104,Ut,1,0,"ng-template",15),o(105,"div",16)(106,"mat-form-field",17)(107,"mat-label"),r(108,"Celular"),t(),h(109,"input",28),c(110,Wt,2,1,"mat-error"),t(),o(111,"mat-form-field",17)(112,"mat-label"),r(113,"Correo Electr\xF3nico"),t(),h(114,"input",29),c(115,Zt,2,1,"mat-error"),t(),o(116,"mat-form-field",17)(117,"mat-label"),r(118,"Confirmar Correo Electr\xF3nico"),t(),h(119,"input",30),c(120,Ht,2,1,"mat-error"),t(),c(121,Qt,18,5),o(122,"mat-form-field",17)(123,"mat-label"),r(124,"Fecha de Expedici\xF3n documento Identidad"),t(),h(125,"input",31)(126,"mat-datepicker-toggle",32)(127,"mat-datepicker",null,0),c(129,Xt,2,1,"mat-error"),t(),o(130,"mat-form-field",17)(131,"mat-label"),r(132,"\xBFCuenta con Facturaci\xF3n Electr\xF3nica?"),t(),o(133,"mat-select",33),c(134,ei,2,2,"mat-option",23),t(),c(135,ti,2,1,"mat-error"),t(),o(136,"mat-form-field",17)(137,"mat-label"),r(138,"Tipo de Proveedor"),t(),o(139,"mat-select",34),c(140,ii,2,2,"mat-option",23),t(),c(141,ni,2,1,"mat-error"),t(),o(142,"mat-form-field",17)(143,"mat-label"),r(144,"\xBFPersona expuesto p\xFAblicamente?"),t(),o(145,"mat-select",35),c(146,oi,2,2,"mat-option",23),t(),c(147,ai,2,1,"mat-error"),t(),o(148,"div",36)(149,"re-captcha",37),b("resolved",function(x){return I(s),y(i.onResolved(x))}),t(),c(150,ri,2,0,"mat-error",38),t()(),o(151,"div",26)(152,"button",39),r(153,"Anterior"),t(),o(154,"button",40),r(155,"Enviar"),t()()()()()()()}if(d&2){let s,C=Y(128);a(),M("imageSrc",i.dataCampaing==null?null:i.dataCampaing.urlBanner),u("height",310)("mobileHeight",150),a(15),v("Convocatoria: ",i.dataCampaing==null||i.dataCampaing.nombre==null?null:i.dataCampaing.nombre.toUpperCase()," "),a(8),S(i.dataCampaing==null?null:i.dataCampaing.fechaInicio),a(4),S(i.dataCampaing==null?null:i.dataCampaing.fechaFin),a(4),S(i.dataCampaing==null?null:i.dataCampaing.correoConvocatoria),a(4),S(i.dataCampaing==null?null:i.dataCampaing.descripcion),a(5),u("href",i.dataCampaing==null?null:i.dataCampaing.urlTerminos,N),a(14),u("linear",i.isLinear)("orientation",de(56,47,i.stepperOrientation)||"horizontal"),a(2),u("stepControl",i.formGroups[0]),a(),u("formGroup",i.formGroups[0]),a(7),J(i.tipoPersonaOptions),a(2),f(i.ifInvalidField(i.formGroups[0],"idTipoPersona")?67:-1),a(),f(i.tipoPersona==="2"?68:-1),a(),f(i.tipoPersona==="1"?69:-1),a(3),v(" ",i.documentStr," "),a(),M("placeholder",i.documentStr),a(),f(i.ifInvalidField(i.formGroups[0],"nit")?74:-1),a(3),v(" Confirmar ",i.documentStr," "),a(2),f(i.ifInvalidField(i.formGroups[0],"confirmDocument")?79:-1),a(),f(i.tipoPersona==="2"?80:-1),a(5),u("ngForOf",i.departamentos),a(),f(i.ifInvalidField(i.formGroups[0],"idDepartamento")?86:-1),a(5),u("ngForOf",i.municipios),a(),f(i.ifInvalidField(i.formGroups[0],"idMunicipio")?92:-1),a(5),f(i.ifInvalidField(i.formGroups[0],"direccion")?97:-1),a(),f(i.tipoPersona==="2"?98:-1),a(4),u("stepControl",i.formGroups[1]),a(),u("formGroup",i.formGroups[1]),a(7),f(i.ifInvalidField(i.formGroups[1],"celular")?110:-1),a(5),f(i.ifInvalidField(i.formGroups[1],"correoElectronico")?115:-1),a(5),f(i.ifInvalidField(i.formGroups[1],"confirmarCorreoElectronico")?120:-1),a(),f(i.tipoPersona==="2"?121:-1),a(4),u("matDatepicker",C)("max",i.startDate),a(),u("for",C),a(3),f(i.ifInvalidField(i.formGroups[1],"fechaExpedicionDI")?129:-1),a(5),u("ngForOf",i.yesNoOptions),a(),f(i.ifInvalidField(i.formGroups[1],"tieneFacturacionElectronica")?135:-1),a(5),u("ngForOf",i.tipoInsumos),a(),f(i.ifInvalidField(i.formGroups[1],"tiposProveedor")?141:-1),a(5),u("ngForOf",i.yesNoOptions),a(),f(i.ifInvalidField(i.formGroups[1],"expuestoPublicamente")?147:-1),a(2),u("siteKey",i.keyV2),a(),u("ngIf",(s=i.formGroups[1].get("captchaControl"))==null?null:s.hasError("captchaRequired")),a(4),u("disabled",i.spinner.loading)}},dependencies:[Ie,Ee,_e,xe,Se,be,Me,Te,Re,j,q,ye,Pe,B,ke,we,Ne,Ae,Le,Ve,T,R,A,w,ce,ue,ve,Ye,Ze,He,Je,Ce,W,U,V,We,Ge,Qe,Ke,Xe],styles:[".banner-container-register[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.text-container[_ngcontent-%COMP%]{width:100%;max-width:1024px;padding:20px;background:#fff}.form-container[_ngcontent-%COMP%]{width:100%;max-width:800px;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 8px #0000001a}.text-center[_ngcontent-%COMP%]{text-align:center}.form-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.form-field[_ngcontent-%COMP%]{margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%}.date-field[_ngcontent-%COMP%]{display:flex;align-items:center}.date-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1}.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{color:red}.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{border-color:red}.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:red}.mat-mdc-form-field[_ngcontent-%COMP%]{display:flex!important}.margin-top-10[_ngcontent-%COMP%]{margin-bottom:10px!important}.banner-container-register[_ngcontent-%COMP%]{text-align:center}.register-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:20px}.name-campaign[_ngcontent-%COMP%]{text-decoration:underline;font-weight:700}.half-width[_ngcontent-%COMP%]{width:48%;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.button-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}@media (max-width: 800px){.form-row[_ngcontent-%COMP%]{flex-direction:column}.half-width[_ngcontent-%COMP%]{width:100%}.terms-button[_ngcontent-%COMP%]{display:block}}mat-label[_ngcontent-%COMP%]{white-space:normal}form[_ngcontent-%COMP%]{margin-top:15px}"],changeDetection:0});let e=l;return e})();function li(e,l){if(e&1&&(o(0,"mat-option",8),r(1),t()),e&2){let n=l.$implicit;u("value",n.id),a(),v(" ",n.nombre," ")}}var lt=(()=>{let l=class l{constructor(p,d){this.router=p,this.api=d,this.selectedCampaign=null,this.campaigns=[{descripcion:"campaign-1",nombre:"Convocatoria 1",status:"Activa",municipiosIds:[1,2,3],fechaInicio:"2022-01-01",fechaFin:"2022-01-01"}],this.loadCampaigns()}loadCampaigns(){this.api.getData(D.convocatorias).subscribe({next:p=>{this.campaigns=p.filter(d=>d.nombre!="Putumayo")},error:p=>{console.log(p)}})}onSubmit(){this.selectedCampaign&&this.router.navigate(["/auth/registrar-proveedor",this.selectedCampaign])}};l.\u0275fac=function(d){return new(d||l)(_(L),_(k))},l.\u0275cmp=F({type:l,selectors:[["app-select-campaign"]],standalone:!0,features:[P],decls:20,vars:3,consts:[[1,"container-select-campaign"],[1,"text-center"],[1,"content-container"],["appearance","fill",1,"full-width"],[3,"valueChange","value"],[3,"value",4,"ngFor","ngForOf"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click","disabled"],[3,"value"]],template:function(d,i){d&1&&(o(0,"div",0)(1,"h2",1),r(2,"Estimado proveedor"),t(),o(3,"div",2)(4,"p"),r(5,"\xA1Gracias por tu inter\xE9s! A continuaci\xF3n, selecciona la convocatoria a la cual deseas aplicar Recuerda:"),t(),o(6,"ul")(7,"li"),r(8,"Solo puedes aplicar a una convocatoria."),t(),o(9,"li"),r(10,"Tu empresa debe tener sede local en la zona donde se llevar\xE1 a cabo la convocatoria que elijas."),t()(),o(11,"div",2)(12,"mat-form-field",3)(13,"mat-label"),r(14,"Seleccionar Convocatoria"),t(),o(15,"mat-select",4),me("valueChange",function(C){return le(i.selectedCampaign,C)||(i.selectedCampaign=C),C}),c(16,li,2,2,"mat-option",5),t()(),o(17,"div",6)(18,"button",7),b("click",function(){return i.onSubmit()}),r(19,"Aceptar"),t()()()()()),d&2&&(a(15),re("value",i.selectedCampaign),a(),u("ngForOf",i.campaigns),a(2),u("disabled",!i.selectedCampaign))},dependencies:[A,w,B,j,q,W,U,V,T,R],styles:[".full-width[_ngcontent-%COMP%]{width:100%}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-select-campaign[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.content-container[_ngcontent-%COMP%]{max-width:650px}@media (max-width: 768px){.container-select-campaign[_ngcontent-%COMP%]{padding:15px}}"]});let e=l;return e})();var gn=[{path:"",component:Oe,pathMatch:"full"},{path:"seleccionar-convocatoria",component:lt},{path:"registrar-beneficiario",component:qe},{path:"registrar-proveedor/:campaignId",component:rt}];export{gn as AUHT_ROUTES};
