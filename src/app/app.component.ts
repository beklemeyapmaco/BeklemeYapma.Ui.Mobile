import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {
      title: "Home",
      url: "/tabs/(home:home)",
      icon: "home"
    },
    {
      title: "About",
      url: "/tabs/(about:about)",
      icon: "information-circle"
    },
    {
      title: "Contacts",
      url: "/tabs/(contact:contact)",
      icon: "contacts"
    }
  ];
  loggedIn = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    translate: TranslateService
  ) {
    this.initializeApp(translate);
  }

  initializeApp(translate) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      translate.setDefaultLang('tr');
    });
  }

  navigate(url: string) {
    return this.router.navigateByUrl(url);
  }
}
