Element.prototype.set_select=function(opts){
switch (opts.style) {
case "red":
color1='background-color: #E36864;width: 200px; margin-top:2px;border-radius: 3px;text-align: center ; padding:5px; color: #F2B8B6;font-family:tahoma;'
color2='background-color: #E67D79;width:200px; margin-top:2px;border-radius: 1px;text-align: center ; padding:5px; color: #F2B8B6;font-family:tahoma;'
break;
case "black":
color1='background-color:black;width: 200px; margin-top:2px;border-radius: 3px;text-align: center ; padding:5px; color:white;font-family:tahoma;'
color2='background-color:black;width:200px; margin-top:2px;border-radius: 1px;text-align: center ; padding:5px; color:white;font-family:tahoma;'
break;

case "green":
color1='background-color:green;width: 200px; margin-top:2px;border-radius: 3px;text-align: center ; padding:5px; color:white;font-family:tahoma;'
color2='background-color:green;width:200px; margin-top:2px;border-radius: 1px;text-align: center ; padding:5px; color:white;font-family:tahoma;'
break;

case "other":
color1=''+opts.style_list+''
color2=''+opts.style_item+''
break;

default:
color1='background-color: #E36864;width: 200px; margin-top:2px;border-radius: 3px;text-align: center ; padding:5px; color: #F2B8B6;'
color2='background-color: #E67D79;width:200px; margin-top:2px;border-radius: 1px;text-align: center ; padding:5px; color: #F2B8B6;'
}
    var ad=this.id;
    this.style.cssText=''+color1+''
    var el= document.getElementsByTagName('div');
    //serach select items
    for(x=0;x<el.length;x++) {
    if(this.id==''+el[x].getAttribute('d_id')+'') {
    el[x].style.cssText+='opacity: 0'
    el[x].style.display='none'
    var i=x;
    var name=el[x].getElementsByTagName('div')[0].innerHTML;
    var ggg=el[x].getElementsByTagName('div')[0].getAttribute('val')
    el[x].style.cssText+='-webkit-transition: 500ms;-moz-transition: 500ms;-o-transition: 500ms;transition: 500ms;'
    }
    }
    var e= document.getElementsByTagName('div')[i];
    for(y=0;y<e.getElementsByTagName('div').length;y++) {
    e.getElementsByTagName('div')[y].style.cssText+=''+color2+''
    }
    //set default select
    switch (this.getAttribute('d_val')) {
    case null:
    this.innerHTML=''+name+''
    this.setAttribute('d_val',''+ggg+'')

    break;
    default:
    this.innerHTML=''+this.getAttribute('d_val')+''
    }

    //onclick show items
    this.onclick=function () {
    if(document.getElementsByTagName('div')[i].style.display=='')  {
    document.getElementsByTagName('div')[i].style.cssText+='opacity: 0'
    setTimeout(function (){
    document.getElementsByTagName('div')[i].style.display='none'
    },500)
    }
     else{
    document.getElementsByTagName('div')[i].style.display=''
    setTimeout(function (){
    document.getElementsByTagName('div')[i].style.cssText+='opacity: 1'
    },500)
    }
     //make function for all item
     for(n=0;n<e.getElementsByTagName('div').length;n++) {
     e.getElementsByTagName('div')[n].setAttribute('onclick',"sel('"+ad+"','"+e.getElementsByTagName('div')[n].innerHTML+"','"+e.getElementsByTagName('div')[n].getAttribute('val')+"');hid('"+i+"');"+opts.onselect+"")
     }
   }
}
function sel(id,text,val) {
 document.getElementById(id).setAttribute('d_val',''+val+'')
 document.getElementById(id).innerHTML=text;
}
function hid(ii){
    document.getElementsByTagName('div')[ii].style.cssText+='opacity: 0'
    setTimeout(function (){
    document.getElementsByTagName('div')[ii].style.display='none'
    },500)
}
function get_sel(id){
var get=document.getElementById(id).getAttribute('d_val');
return get
}
</script>

<style>
#sel1{
 width:25px;
 background-image: url(http://bachehayeghalam.ir/wp-content/themes/bgh/images/over3.png);
 border: solid 1px #ccc;
 background-color: #E6E6E6;
 font-family:a rezvan;
 padding:5px;
 text-align: center;
 color: #ffffff;
 font-size:20px;
 border-radius: 5px;
 height: 25px;

}

div[d_id=sel1] div{
 width: 25px;
 height: 25px;
 margin-top: 3px;
 border: solid 1px #ccc;
 background-color: #E6E6E6;
 border-radius: 5px;

}

</style>
<script>
function ok()  {
 document.getElementById('sel1').set_select({
 style:'other',//red,black,green
 onselect:'' //event

 });
}

setTimeout(ok,10)

