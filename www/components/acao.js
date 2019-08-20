

$(document).on("click","#Primeiro",function(){

    navigator.notification.alert("Mensagem 1");
});

$(document).on("click","#Segundo",function(){

function retorno(){

}
    navigator.notification.alert("Mensagem 2",retorno,"Aviso","Certo");
});

$(document).on("click","#Terceiro",function(){

  function onConfirm(buttonIndex){

    if(buttonIndex == 1){
      navigator.notification.alert("FireBolt!");
    }
    if(buttonIndex == 2){
      navigator.notification.alert("Water Canon!!");
    }
    if(buttonIndex == 3){
      navigator.notification.alert("Gran Smash!!");
    }
   
    
  }

    navigator.notification.confirm("Escolha seu elemento",onConfirm,"Escolha",['Fogo','Água','Terra']);
});


$(document).on("click","#Quarto",function(){

    navigator.notification.beep(2);
});

$(document).on("click","#CodigoBarra",function(){
cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("Leitura de Código\n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

});