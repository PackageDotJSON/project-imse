"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[113],{7113:(N,g,l)=>{l.r(g),l.d(g,{AdminLayoutModule:()=>D});var Z=l(9560),c=l(9808),s=l(2382),u=l(8508),h=l(5226),p=l.n(h),t=l(1223),v=l(5905),m=l(520);function b(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"h4",11),t._uU(2,"Customer Information"),t.qZA(),t.TgZ(3,"button",12),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.TgZ(4,"span",13),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",14)(7,"div",4)(8,"form",15,16),t.NdJ("ngSubmit",function(){const a=t.CHM(e).$implicit,d=t.MAs(9);return t.oxw().onCustomerSubmit(d),a.close("Save click")}),t.TgZ(10,"div",1)(11,"div",17)(12,"div",18)(13,"label"),t._uU(14,"Customer Id"),t.qZA(),t._UZ(15,"input",19),t.qZA()()(),t.TgZ(16,"div",1)(17,"div",17)(18,"div",18)(19,"label"),t._uU(20,"Full Name"),t.qZA(),t._UZ(21,"input",20),t.qZA()()(),t.TgZ(22,"div",1)(23,"div",17)(24,"div",18)(25,"label"),t._uU(26,"Email"),t.qZA(),t._UZ(27,"input",21),t.qZA()()(),t.TgZ(28,"div",1)(29,"div",17)(30,"div",18)(31,"label"),t._uU(32,"City"),t.qZA(),t._UZ(33,"input",22),t.qZA()()(),t.TgZ(34,"div",1)(35,"div",17)(36,"div",18)(37,"label"),t._uU(38,"Address"),t.qZA(),t._UZ(39,"input",23),t.qZA()()(),t.TgZ(40,"div",1)(41,"div",17)(42,"div",18)(43,"label"),t._uU(44,"Phone No."),t.qZA(),t._UZ(45,"input",24),t.qZA()()(),t.TgZ(46,"div",1)(47,"div",17)(48,"div",18)(49,"label"),t._uU(50,"password"),t.qZA(),t._UZ(51,"input",25),t.qZA()()(),t.TgZ(52,"div",1)(53,"div",26)(54,"button",27),t._uU(55,"Submit"),t.qZA()()()()()(),t.TgZ(56,"div",28)(57,"button",29),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Save click")}),t._uU(58,"Close"),t.qZA()(),t._uU(59,"\n\\")}if(2&o){const e=t.oxw();t.xp6(54),t.Q6J("disabled",e.fileUploading)}}function f(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"h4",11),t._uU(2,"Seller Information"),t.qZA(),t.TgZ(3,"button",12),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.TgZ(4,"span",13),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",14)(7,"div",4)(8,"form",15,16),t.NdJ("ngSubmit",function(){const a=t.CHM(e).$implicit,d=t.MAs(9);return t.oxw().onSellerSubmit(d),a.close("Save click")}),t.TgZ(10,"div",1)(11,"div",17)(12,"div",18)(13,"label"),t._uU(14,"Seller Id"),t.qZA(),t._UZ(15,"input",30),t.qZA()()(),t.TgZ(16,"div",1)(17,"div",17)(18,"div",18)(19,"label"),t._uU(20,"Seller Name"),t.qZA(),t._UZ(21,"input",31),t.qZA()()(),t.TgZ(22,"div",1)(23,"div",17)(24,"div",18)(25,"label"),t._uU(26,"Email"),t.qZA(),t._UZ(27,"input",32),t.qZA()()(),t.TgZ(28,"div",1)(29,"div",17)(30,"div",18)(31,"label"),t._uU(32,"City"),t.qZA(),t._UZ(33,"input",33),t.qZA()()(),t.TgZ(34,"div",1)(35,"div",17)(36,"div",18)(37,"label"),t._uU(38,"Address"),t.qZA(),t._UZ(39,"input",34),t.qZA()()(),t.TgZ(40,"div",1)(41,"div",17)(42,"div",18)(43,"label"),t._uU(44,"Phone No."),t.qZA(),t._UZ(45,"input",35),t.qZA()()(),t.TgZ(46,"div",1)(47,"div",17)(48,"div",18)(49,"label"),t._uU(50,"password"),t.qZA(),t._UZ(51,"input",36),t.qZA()()(),t.TgZ(52,"div",1)(53,"div",26)(54,"button",27),t._uU(55,"Submit"),t.qZA()()()()()(),t.TgZ(56,"div",28)(57,"button",29),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Save click")}),t._uU(58,"Close"),t.qZA()(),t._uU(59,"\n\\")}if(2&o){const e=t.oxw();t.xp6(54),t.Q6J("disabled",e.fileUploading)}}let T=(()=>{class o{constructor(e,i,r){this.modalService=e,this.packageService=i,this.http=r,this.fileUpload=null,this.file_uploaded=!1,this.fileAdded=!1,this.fileUploading=!1}ngOnInit(){}triggerModal(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(i=>{this.closeModal=`Closed with: ${i}`},i=>{this.closeModal=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(e){return e===u.If.ESC?"by pressing ESC":e===u.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}onCustomerSubmit(e){this.packageService.addToTask(e.value),this.http.put("http://localhost:3000/update-customer",e.value).subscribe(i=>{console.log(i),i&&p().fire({title:"Success!",text:"Customer has been updated",icon:"success",confirmButtonText:"ok"})})}onSellerSubmit(e){this.packageService.addToTask(e.value),this.http.put("http://localhost:3000/update-seller",e.value).subscribe(i=>{console.log(i),i&&p().fire({title:"Success!",text:"Seller has been updated",icon:"success",confirmButtonText:"ok"})})}wipedata(){this.http.get("http://localhost:3000/flush").subscribe(e=>{console.log(e),e&&p().fire({title:"Success!",text:"Data has been wiped",icon:"success",confirmButtonText:"ok"})})}dummydata(){this.http.post("http://localhost:3000/dummy-data",{}).subscribe(e=>{console.log(e),e&&p().fire({title:"Success!",text:"Dummy Data has been added",icon:"success",confirmButtonText:"ok"})})}datamigration(){this.http.get("http://localhost:3000/migrate-data").subscribe(e=>{console.log(e),e&&p().fire({title:"Success!",text:"Data has been migrated",icon:"success",confirmButtonText:"ok"})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.FF),t.Y36(v.M),t.Y36(m.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dashboard-cmp"]],decls:38,vars:0,consts:[[1,"display-4"],[1,"row"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"card","card-stats"],[1,"card-body"],[1,"btn","btn-info",3,"click"],["modalData",""],[1,"card-footer"],[1,"stats"],["modallData",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title",2,"z-index","1400"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["novalidate","",3,"ngSubmit"],["f","ngForm"],[1,"col-md-12","px-1"],[1,"form-group"],["type","text","placeholder","","name","customerid","ngModel","",1,"form-control"],["type","text","placeholder","","name","customername","ngModel","",1,"form-control"],["type","text","placeholder","","name","customeremail","ngModel","",1,"form-control"],["type","text","placeholder","","name","customercity","ngModel","",1,"form-control"],["type","text","placeholder","","name","customeraddress","ngModel","",1,"form-control"],["type","text","placeholder","","name","customerphone","ngModel","",1,"form-control"],["type","text","placeholder","","name","customerpassword","ngModel","",1,"form-control"],[1,"update","ml-auto","mr-auto"],["type","submit",1,"btn","btn-primary","btn-round",3,"disabled"],[1,"modal-footer"],["type","button",1,"btn","btn-danger",3,"click"],["type","text","placeholder","","name","sellerid","ngModel","",1,"form-control"],["type","text","placeholder","","name","sellername","ngModel","",1,"form-control"],["type","text","placeholder","","name","selleremail","ngModel","",1,"form-control"],["type","text","placeholder","","name","sellercity","ngModel","",1,"form-control"],["type","text","placeholder","","name","selleraddress","ngModel","",1,"form-control"],["type","text","placeholder","","name","sellerphone","ngModel","",1,"form-control"],["type","text","placeholder","","name","sellerpassword","ngModel","",1,"form-control"]],template:function(e,i){if(1&e){const r=t.EpF();t.TgZ(0,"h1",0),t._uU(1,"Welcome"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"button",5),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(9);return i.triggerModal(d)}),t._uU(7,"Edit Customer"),t.qZA(),t.YNc(8,b,60,1,"ng-template",null,6,t.W1O),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"hr")(12,"div",8),t.qZA()()(),t.TgZ(13,"div",2)(14,"div",3)(15,"div",4)(16,"button",5),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(19);return i.triggerModal(d)}),t._uU(17,"Edit Seller"),t.qZA(),t.YNc(18,f,60,1,"ng-template",null,9,t.W1O),t.qZA(),t.TgZ(20,"div",7),t._UZ(21,"hr")(22,"div",8),t.qZA()()(),t.TgZ(23,"div",2)(24,"div",3)(25,"div",4)(26,"button",5),t.NdJ("click",function(){return i.wipedata()}),t._uU(27,"Wipe Data"),t.qZA()()()(),t.TgZ(28,"div",2)(29,"div",3)(30,"div",4)(31,"button",5),t.NdJ("click",function(){return i.dummydata()}),t._uU(32,"Dummy Data "),t.qZA()()()(),t.TgZ(33,"div",2)(34,"div",3)(35,"div",4)(36,"button",5),t.NdJ("click",function(){return i.datamigration()}),t._uU(37,"Data Migration"),t.qZA()()()()()}},directives:[s._Y,s.JL,s.F,s.Fj,s.JJ,s.On],styles:[".he[_ngcontent-%COMP%]{z-index:1060!important}"]}),o})();var A=l(7312),_=l(4140);function U(o,n){1&o&&(t.TgZ(0,"div",12),t._UZ(1,"span",13),t.qZA())}function C(o,n){if(1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()()()),2&o){const e=n.$implicit;t.xp6(3),t.hij(" ",e.PRODUCT_ID," "),t.xp6(2),t.hij(" ",e.PRODUCT_NAME," "),t.xp6(2),t.hij(" ",e.SELLER_ID," "),t.xp6(2),t.hij(" ",e.SELLER_NAME," "),t.xp6(2),t.hij(" ",e.frequency," ")}}function x(o,n){1&o&&(t.TgZ(0,"div",12),t._UZ(1,"span",13),t.qZA())}function q(o,n){if(1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()()),2&o){const e=n.$implicit;t.xp6(3),t.hij(" ",e.CUSTOMER_ID," "),t.xp6(2),t.hij(" ",e.CUSTOMER_NAME," "),t.xp6(2),t.hij(" ",e.CUSTOMER_EMAIL," "),t.xp6(2),t.hij(" ",e.total_orders," ")}}const S=[{path:"dashboard",component:T},{path:"table",component:A.a},{path:"report-one",component:(()=>{class o{constructor(e,i){this.http=e,this.sessionstorage=i,this.tableUploading=!0}ngOnInit(){this.getItemData()}getItemData(){this.sessionstorage.getValue("sellerId"),this.http.get("http://localhost:3000/sold-product").subscribe(i=>{i&&(this.tableUploading=!1),this.items=i})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.eN),t.Y36(_.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report-one"]],decls:25,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card","card-plain"],[1,"card-header"],[1,"card-title"],[1,"card-category"],["class","spinner-border text-primary","role","status",4,"ngIf"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"text-primary"],[4,"ngFor","ngForOf"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5," Patient List"),t.qZA(),t.TgZ(6,"p",5),t._uU(7," List of all the Patients"),t.qZA()(),t._UZ(8,"br"),t.YNc(9,U,2,0,"div",6),t.TgZ(10,"div",7)(11,"div",8)(12,"table",9)(13,"thead",10)(14,"th"),t._uU(15," Product Id "),t.qZA(),t.TgZ(16,"th"),t._uU(17," Product Name "),t.qZA(),t.TgZ(18,"th"),t._uU(19," Seller Id "),t.qZA(),t.TgZ(20,"th"),t._uU(21," Seller Name "),t.qZA(),t.TgZ(22,"th"),t._uU(23," No. of Solds "),t.qZA()(),t.YNc(24,C,12,5,"tbody",11),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("ngIf",i.tableUploading),t.xp6(15),t.Q6J("ngForOf",i.items))},directives:[c.O5,c.sg],styles:[""]}),o})()},{path:"report-two",component:(()=>{class o{constructor(e,i){this.http=e,this.sessionstorage=i,this.tableUploading=!0}ngOnInit(){this.getItemData()}getItemData(){this.sessionstorage.getValue("sellerId"),this.http.get("http://localhost:3000/loyal-customer").subscribe(i=>{i&&(this.tableUploading=!1),this.items=i})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.eN),t.Y36(_.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report-two"]],decls:23,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card","card-plain"],[1,"card-header"],[1,"card-title"],[1,"card-category"],["class","spinner-border text-primary","role","status",4,"ngIf"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"text-primary"],[4,"ngFor","ngForOf"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5," Patient List"),t.qZA(),t.TgZ(6,"p",5),t._uU(7," List of all the Patients"),t.qZA()(),t._UZ(8,"br"),t.YNc(9,x,2,0,"div",6),t.TgZ(10,"div",7)(11,"div",8)(12,"table",9)(13,"thead",10)(14,"th"),t._uU(15," Customer ID "),t.qZA(),t.TgZ(16,"th"),t._uU(17," CUSTOMER NAME "),t.qZA(),t.TgZ(18,"th"),t._uU(19," CUSTOMER EMAIL "),t.qZA(),t.TgZ(20,"th"),t._uU(21," TOTAL NUMBER OF ORDERS "),t.qZA()(),t.YNc(22,q,10,4,"tbody",11),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("ngIf",i.tableUploading),t.xp6(13),t.Q6J("ngForOf",i.items))},directives:[c.O5,c.sg],styles:[""]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,Z.Bz.forChild(S),s.u5,u.IJ]]}),o})()}}]);