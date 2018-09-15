import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared_service/data.service'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
  group
} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('barPRotate', [
      state('normalP',style({
        transform: 'rotate(0deg)'
      })),
      state('crossP', style({
        transform: 'rotate(45deg)'
      })),
      transition('normalP <=> crossP', animate('300ms cubic-bezier(0.44, 0.41, 0.45, 2)')),
    ]),
    trigger('barNRotate', [
      state('normalN',style({
        transform: 'rotate(0deg)'
      })),
      state('crossN', style({
        transform: 'rotate(-45deg)'
      })),
      transition('normalN <=> crossN', animate('300ms cubic-bezier(0.44, 0.41, 0.45, 2)')),
    ]),
    trigger('barHide', [
      state('visible',style({
        opacity:1
      })),
      state('hidden', style({
        opacity:0
      })),
      transition('visible <=> hidden', animate('300ms ease-out')),
    ]),
    trigger('showMenu', [
      state('show',style({
        right: '0%'
      })),
      state('hide', style({
        right: '-150%'
      })),
      transition('show <=> hide', animate('300ms ease-in-out')),
    ]),
    trigger('listAnimation', [
      transition('* => *', [ 
        query('.Link', [
          animate('1s', style({ opacity: 0, transform: 'translateX(100px)' }))
        ]),
        query('.Link', [
          stagger(100, [
            animate('1s ease-in', style({ opacity: 1 , transform: 'translateX(0)'}))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  stateP = 'normalP'
  stateN = 'normalN'
  barState = 'visible'
  showBox = 'hide'

  animList : any

  constructor(private data : DataService  ) { }

  paras = {
    name: "helloow from client"
  }

  ngOnInit() {
  }

  printInCon(){
    this.data.getData().subscribe(data => {
      console.log(data);
    });
  }

  showMenu(){
    this.stateP = this.stateP === 'crossP' ? 'normalP':'crossP';
    this.stateN = this.stateN === 'crossN' ? 'normalN':'crossN';
    this.barState = this.barState === 'hidden' ? 'visible':'hidden';
    this.showBox = this.showBox === 'show' ? 'hide':'show';
    this.animList = 'list';
  }
  hideMenu(){
    this.stateP = 'normalP';
    this.stateN =  'normalN';
    this.barState = 'visible';
    this.showBox = 'hide';
  }



}
