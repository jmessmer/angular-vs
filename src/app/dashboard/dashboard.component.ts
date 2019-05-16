import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboards: Array<Dashboard>;

  constructor() { 
    this.dashboards = [
      {
        name: 'Basic Scrolling',
        description: 'Carouser square-rigged scallywag list chase hornswaggle smartly pressgang reef sails Plate Fleet. Nipperkin Davy Jones\' Locker gunwalls hornswaggle gally run a shot across the bow rigging overhaul Sea Legs black jack.',
        routerLink: '/basic'
      },
      {
        name: 'Basic Pagination Scrolling',
        description: 'Pillage mizzenmast barque man-of-war come about Sink me quarter prow walk the plank Davy Jones\' Locker. Overhaul jolly boat chase guns starboard run a rig me Gold Road barque loot brigantine. Case shot parrel Buccaneer aft league Sail ho loot belaying pin gangplank scallywag.',
        routerLink: '/basic-pagination'
      },
      {
        name: 'Basic Infinite Scrolling',
        description: 'Salmagundi flogging Plate Fleet Sea Legs pressgang wherry scourge of the seven seas long clothes red ensign starboard. No prey, no pay snow Nelsons folly lee lateen sail boom ho sloop scuppers knave. Yawl measured fer yer chains hearties Admiral of the Black cog pink parley lad chantey sutler.',
        routerLink: '/basic-infinite'
      },
      {
        name: 'Basic Virtual Scrolling',
        description: 'Gabion tender rigging galleon fore lugger bilge water overhaul case shot list. Hang the jib sutler Jolly Roger Jack Tar maroon trysail chantey jack lee snow. Rum bilge water measured fer yer chains jolly boat lee take a caulk wherry jack trysail six pounders',
        routerLink: '/basicvs'
      },
      {
        name: 'Advanced Virtual Scrolling',
        description: 'Jack Tar aft interloper bilge reef parrel scuttle cutlass ballast quarterdeck chase guns walk the plank hornswaggle jury mast crow’s nest. Lugger wench pillage ye case shot chantey topgallant maroon Sail ho brigantine rutters lateen sail yawl Nelsons folly bilge',
        routerLink: '/advancedscroll'
      },
      {
        name: 'agGrid Virtual Scrolling',
        description: 'Knave quarterdeck run a shot across the bow broadside loaded to the gunwalls main sheet crimp fluke deadlights list. Bilge rat square-rigged fore sloop sutler rope\'s end bowsprit piracy nipperkin to go on account. Brigantine measured fer yer chains doubloon bucko Corsair me grog blossom avast Plate Fleet matey.',
        routerLink: '/aggrid'
      },
      {
        name: 'Avatar Virtual Scrolling',
        description: 'Letter of Marque draught hearties long clothes fire ship Jolly Roger aft landlubber or just lubber grog Sea Legs. Provost parrel bilge scuttle yard hulk quarterdeck gabion Cat o\'nine tails haul wind. Careen bilged on her anchor pinnace fore chase jury mast tender weigh anchor boom bilge.',
        routerLink: '/basic-avatar'
      }
    ];
  }

  ngOnInit() {
  }

}
