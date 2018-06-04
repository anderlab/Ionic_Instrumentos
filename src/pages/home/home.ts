import { Component } from '@angular/core';
import { NavController , NavParams, AlertController} from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	instrumentos:any[]; //Array de instrumentos
	nombre:string;
	descripcion:string;
  imagen:string;

//constructor de home     
  constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController) {
  	
// crea  unos intrumentos por defecto
  	this.instrumentos=[{
        nombre:"Guitarra",
        descripcion:"La guitarra, también conocida como guitarra clásica o guitarra española, es un instrumento musical de cuerda pulsada, compuesto de una caja de resonancia, un mástil sobre el que va adosado el diapasón o trastero —generalmente con un agujero acústico en el centro de la tapa (boca)—, y seis cuerdas. Sobre el diapasón van incrustados los trastes, que permiten las diferentes notas. Algunos instrumentos de su familia son el cuatro, el ukelele, el requinto, el charango y distintos tipos de guitarrón, como el guitarrón mexicano, de uso frecuente por los mariachis.",
        imagen:"https://www.musicopolix.com/57245/enrique-palacios-guitarra-clasica-ep200n-nat.jpg"

    },
    {
        nombre:"Bajo",
        descripcion:"El bajo eléctrico, llamado sencillamente bajo, es un instrumento musical melódico de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo, su antecesor",
        imagen:"https://http2.mlstatic.com/bajo-electrico-4-cuerdas-cort-gsaxe-gene-simmons-kiss-hacha-D_NQ_NP_13628-MLA3428258163_112012-F.jpg"
    }, 
    {
        nombre:"Bateria",
        descripcion:"La batería es un conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales. El término «batería» también se refiere al músico que toca estos instrumentos, al igual que el término «baterista», ambos equivalentes.1​2​ Este instrumento nació de la necesidad de producir diferentes percusiones en un solo sistema agrupado y cómodo para tocar simultáneamente por una sola persona.",
        imagen:"https://images-na.ssl-images-amazon.com/images/I/61lr2Bkd7tL._SY355_.jpg"
    }, 
    {
        nombre:"Violin",
        descripcion:"El violín (del italiano violo, diminutivo de violador o viella) es un instrumento de origen italiano de cuerda frotada o percusión frotada según que tiene cuatro cuerdas. Es el más pequeño y agudo de la familia de los instrumentos de cuerda clásicos, que incluye la viola, el violonchelo y el contrabajo, los cuales, salvo el contrabajo, son derivados todos de las violas medievales, en especial de la fídula.",
        imagen:"https://musica-barroca.com/wp-content/uploads/2018/01/violin-historia.jpg"   
   }

    ];

	;
  }

  enviarA(instrumento){ // Enviamos el instrumento a InfoPage mediante el identificador item
  	this.navCtrl.push(InfoPage,{item: instrumento});
  }

  insertar_instrumento(data){	//Coge el data recibido del alert y lo añade a instrumentos
    this.instrumentos.push(data);
    this.nombre='';
    this.descripcion='';
    this.imagen="";

  }

  	//  Creamos un metodo que sacara un alert para que insertemos los datos
    doPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Añadir Instrumento',			//titulo del alert
      message: 'Introduce un instrumento',	// Mensaje
      inputs: [								// Los inputs que realizaremos
        {
          name: 'nombre',						// Le damos un name
          placeholder: 'Nombre del instrumento'
        },
        {
          name: 'descripcion',
          placeholder: 'descripcion breve'
        },
         {
          name: 'imagen',
          placeholder: 'url de la imagen'
        },
      ],
      buttons: [						//Los botones
        {
          text: 'Cancelar',				//El boton cancelar no hara nada, por lo que se cierra el alert y listo
          handler: () => {
          }
        },
        {
          text: 'Insertar',
          handler: data => {

          	//El boton insertar mandara el data (la informacion de los names (nombre , descripcion y url de imagen))
          	this.insertar_instrumento(data); //Y llamara al metodo insertar_instrumento
        
          }
        }
      ]
    });

    alert.present();
}






}
