function reloj(){
    let tiempo =new Date();
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    if(minutos<=9){minutos="0"+minutos;}
    if(hora<=9){hora="0"+hora;}
     document.formuReloj.barraReloj.value=hora+":"+minutos+":"+segundos;


    setTimeout(reloj,1000);
}

reloj();

window.addEventListener('load', function(){

    var img1=[]
    var img2=[]
    var img3=[]
    var img4=[]
    var img5=[]
    var img6=[]
    var img7=[]
    var img8=[]
    var img9=[]

    img1[0]="imagenes/dc.png";
    img1[1]="imagenes/01.jpg";

    img2[0]="imagenes/mr.jpg";
    img2[1]="imagenes/02.jpg";

    img3[0]="imagenes/re.jpg";
    img3[1]="imagenes/03.jpg";

    img4[0]="imagenes/rco.jpg";
    img4[1]="imagenes/04.jpg";

    img5[0]="imagenes/garc.jpg";
    img5[1]="imagenes/05.jpg";

    img6[0]="imagenes/adies.jpg";
    img6[1]="imagenes/asse.jpg";

    img7[0]="imagenes/me.jpg";
    img7[1]="imagenes/b1.png";

    img8[0]="imagenes/arqui.jpg";
    img8[1]="imagenes/buscadores.jpg";

    img9[0]="imagenes/vet.jpg";
    img9[1]="imagenes/audiocuentos1.jpg";

    var indice=0;

    function CambiarImagenes(){
        document.i1.src=img1[indice];
        document.i2.src=img2[indice];
        document.i3.src=img3[indice];
        document.i4.src=img4[indice];
        document.i5.src=img5[indice];
        document.i6.src=img6[indice];
        document.i7.src=img7[indice];
        document.i8.src=img8[indice];
        document.i9.src=img9[indice];

        if(indice<1){
            indice++;
        }else{
            indice=0;
        }
    }

    this.setInterval(CambiarImagenes, 2000)
})
