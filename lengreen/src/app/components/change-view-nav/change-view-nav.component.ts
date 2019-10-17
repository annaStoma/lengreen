import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-change-view-nav',
  templateUrl: './change-view-nav.component.html',
  styleUrls: ['./change-view-nav.component.scss']
})
export class ChangeViewNavComponent implements OnInit {

  constructor() {}
//   private: string = 'private';
//   corporative: string = 'corporative';
//  isActive: boolean;
//   constructor(router: Router) { 
//      router.events.subscribe(
//       (event: any) => {
//         if (event instanceof NavigationEnd) {
//           const current = router.url;

//           current.indexOf(this.private);
//           if (current.indexOf(this.private)){
//             console.log("текущий " + current);          console.log("private");
//           this.isActive = true;
//         }
//           else {
//            this.isActive = false;
//            console.log("текущий " + current);
//            console.log("corporative");
//           }
//         }
//       }
//     );
// }

  ngOnInit() {
  }

}
