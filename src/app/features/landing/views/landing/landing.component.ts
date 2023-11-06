import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  features: IElement[] = [];
  achievements: IElement[] = [];

  ngOnInit(): void {
    this.features = [
      {
        image: '/assets/svg/landing/icon-6.svg',
        title: 'Robust Workflow',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      },
      {
        image: '/assets/svg/landing/icon-1.svg',
        title: 'Flexibility',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      },
      {
        image: '/assets/svg/landing/icon-2.svg',
        title: 'User friendly',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      },
      {
        image: '/assets/svg/landing/icon-3.svg',
        title: 'Multiple layouts',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      },
      {
        image: '/assets/svg/landing/icon-4.svg',
        title: 'Better components',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      },
      {
        image: '/assets/svg/landing/icon-5.svg',
        title: 'Well organised',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
      },
    ];

    this.achievements = [
      {
        image: '/assets/svg/landing/icon-6.svg',
        title: '10,000+',
        description: 'Downloads per day',
      },
      {
        image: '/assets/svg/landing/icon-3.svg',
        title: '2 Million',
        description: 'Users',
      },
      {
        image: '/assets/svg/landing/icon-4.svg',
        title: '500+',
        description: 'Clients',
      },
      {
        image: '/assets/svg/landing/icon-6.svg',
        title: '140',
        description: 'Countries',
      },
    ];
  }
}

interface IElement {
  image: string;
  title: string;
  description: string;
}
