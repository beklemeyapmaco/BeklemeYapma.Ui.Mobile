import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";

@Injectable()
export class GlobalAlertHandler {
  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  async presentAlert(header: string, subHeader: string) {
    let alert = await this.alertCtrl.create({
      header: header,
      subHeader: subHeader,
      buttons: ['Dismiss']
    });
    await alert.present();
  }

  async presentConfirm(header: string, message: string) {
    let alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPrompt(header: string) {
    let alert = await this.alertCtrl.create({
      header: header,
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (true) {
              // logged in!
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 30000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'OK'
    });

    await toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
    });

    await toast.present();
  }
}
