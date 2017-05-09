var map;
var click = 0;
var zoom = 14;
var latitude = -20.503808;
var longitude = -54.616225;
navigator.geolocation.getCurrentPosition(pegalatlong);
var tipomapa = google.maps.MapTypeId.ROADMAP;

google.maps.event.addDomListener(window, 'load', initialize);

function initialize(click)
{
    console.log(location);
   
    var mapOptions = {  
      center: new google.maps.LatLng(latitude, longitude), //centraliza mapa
      zoom:zoom,
      mapTypeId:tipomapa,
      disableDefaultUI:true
      };
     map=new google.maps.Map(document.getElementById("googleMap")
      ,mapOptions);      
 //    zoom = map.getZoom();
   
   if (click === 1){
      click = 0;
       zoom = map.getZoom();
       zoom = zoom + 1;
       map.setZoom(zoom);
   }
   if (click === -1){
       click = 0;
       zoom = map.getZoom();
       zoom = zoom - 1;
       map.setZoom(zoom);
   }
   if (click === -2) //centralizar
   {
      
        //click = 0;
       //navigator.geolocation.getCurrentPosition(pegalatlong);
        
       mylatlong = new google.maps.LatLng(latitude, longitude); 
        
       map.setCenter(mylatlong);
        
       zoom = 15;
       map.setZoom(zoom);
   }
  /*  if (click === -3) //tipo de mapa NÃO PRECISA
   {    
       //click = 0;
       //converte para maiúscula as palavras chave...necessário!
	var tipoMapaM = tipomapa.toUpperCase();
	tipomapa = tipoMapaM;        
        //google.maps.MapTypeId.ROADMAP;
        if (tipomapa === 'ESTRADA DE MAPAS')
            map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        if (tipomapa === 'SATÉLITE')
            map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        if (tipomapa === 'TERRENO')
            map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
        if (tipomapa === 'HÍBRIDO')
           map.setMapTypeId(google.maps.MapTypeId.HYBRID);	
   }*/
   
   
    //
  //zoom = map.getZoom();  
  //var controle = map.getCenter();
  //latitude = controle.Latitude;
  //longitude = controle.Longitude;
    
}


//popup para confirmar saída da página
//window.onbeforeunload = ConfirmExit;
//function ConfirmExit()
//{
  //  return "";
//}


function aumentazoom()
{
    click = 1;
    initialize(click);
}

function diminuizoom()
{
    click = -1;
    initialize(click);
}

function centralizar()
{  
    click = -2;
    initialize(click);
}

function alterartipo()
{
    //click = -3;
    var op = document.getElementById('op');    
    var optexto = op.options[op.selectedIndex].innerHTML;
     
    if (optexto === 'MAPA DE ESTRADAS')
        tipomapa = google.maps.MapTypeId.ROADMAP;
    if (optexto === 'SATÉLITE')
        tipomapa = google.maps.MapTypeId.SATELLITE;
    if (optexto === 'TERRENO')
        tipomapa = google.maps.MapTypeId.TERRAIN;
    if (optexto === 'HÍBRIDO')
        tipomapa = google.maps.MapTypeId.HYBRID;
     initialize(click);
}   

/* function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        };
  */      
function pegalatlong(pos)
{    
    latitude = pos.coords.latitude; 
    longitude = pos.coords.longitude;    
    alert(latitude, longitude);
};


function calcularota()
{
  alert('calcularota');  
}