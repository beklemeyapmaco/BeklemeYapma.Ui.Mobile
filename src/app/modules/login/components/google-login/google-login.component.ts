import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { GlobalAlertHandler } from 'src/app/core/services/global-services/alert-services/alert-handler';
import { BaseComponent } from 'src/shared/base/base.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent extends BaseComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    private alertHandler: GlobalAlertHandler
  ) {
    super();
    this.user = this.afAuth.authState;
  }

  ngOnInit(): void {
    // this.alertHandler.presentAlert(this.user.uid, this.user.uid);
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.gplus.logout;
    };
  }

  async nativeGoogleLogin(): Promise<firebase.User> {
    const gplusUser = await this.gplus.login({
      'webClientId': environment.FIREBASE_AUTH_WEB_CLIENT_ID,
      'offline': true,
      'scopes': 'profile email'
    });

    return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));
  }

  async webGoogleLogin(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
  }

}
