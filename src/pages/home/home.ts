import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imgs: Array<{ url: string }>;
  constructor(public navCtrl: NavController) {
    this.imgs = [{ url: "http://1.bp.blogspot.com/-TBMbCD4ZGQc/V_-BlKIKcgI/AAAAAAASDJ4/z82IOuNtoS4/s182-c/the-scholars-reincarnation.png"}];
//   { url: "http://1.bp.blogspot.com/-TBMbCD4ZGQc/V_-BlKIKcgI/AAAAAAASDJ4/z82IOuNtoS4/s182-c/the-scholars-reincarnation.png"},
// { url: "http://1.bp.blogspot.com/-TBMbCD4ZGQc/V_-BlKIKcgI/AAAAAAASDJ4/z82IOuNtoS4/s182-c/the-scholars-reincarnation.png"},
// { url: "http://1.bp.blogspot.com/-TBMbCD4ZGQc/V_-BlKIKcgI/AAAAAAASDJ4/z82IOuNtoS4/s182-c/the-scholars-reincarnation.png"},
// { url: "http://1.bp.blogspot.com/-TBMbCD4ZGQc/V_-BlKIKcgI/AAAAAAASDJ4/z82IOuNtoS4/s182-c/the-scholars-reincarnation.png"},
// { url: "http://1.bp.blogspot.com/-MXOlMJJ160c/V-kFBEs4w3I/AAAAAAAR6fw/7SAiBJrE3N4/s182-c/Soi.jpg"},
// { url: "http://1.bp.blogspot.com/-MXOlMJJ160c/V-kFBEs4w3I/AAAAAAAR6fw/7SAiBJrE3N4/s182-c/Soi.jpg"},
// { url: "http://1.bp.blogspot.com/-MXOlMJJ160c/V-kFBEs4w3I/AAAAAAAR6fw/7SAiBJrE3N4/s182-c/Soi.jpg"}];
   

  }
}
