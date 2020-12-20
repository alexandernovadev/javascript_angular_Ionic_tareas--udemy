import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{

  constructor(public actionSheetController: ActionSheetController,
              public alertController: AlertController,
              private menu: MenuController) {}

  //Alert 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  //Alert

  //AlertConfirm
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  //AlertConfirm

  // Esto es un action shhet
  async presentActionSheet() 
  {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  // Esto es un action shhet


  /* _________ */
  sonido(instrumento){
    let sonido = new Audio()

    sonido.src = instrumento.audio
    sonido.load()
    sonido.play()
  }
  
  instrumentos =
  [
    {
      nombre: "flauta",
      imagen: "assets/imagenes/flauta.png",
      audio: "assets/sonidos/flauta.mp3"
    },
    {
      nombre: "platillos",
      imagen: "assets/imagenes/platillos.png",
      audio: "assets/sonidos/platillos.mp3"
    },
    {
      nombre: "bombo1",
      imagen: "assets/imagenes/bombo1.png",
      audio: "assets/sonidos/bombo1.mp3"
    },
    {
      nombre: "bombo2",
      imagen: "assets/imagenes/bombo2.png",
      audio: "assets/sonidos/bombo2.mp3"
    }
  ]

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
