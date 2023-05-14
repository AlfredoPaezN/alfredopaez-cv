import { Component } from '@angular/core';

declare var progressively: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit() {
    progressively.init({
      onLoadComplete: function () {},
    });
  }
  jobs = {
    first: {
      companyName: 'GudarDevs',
      roleTitle: 'Junior Mobile Developer',
      roleDescription: 'Eyenet Upgrader Project',
      roleAchievements: [
        'I developed a mobile application that connected to a router via SSH to check its version. If the routers version was outdated, the app downloaded the latest version and automatically performed the upgrade process. This experience allowed me to develop skills in integrating network technologies, creating highly functional mobile applications, and implementing custom solutions to improve efficiency and process automation. I also learned how to work with network protocols and how to integrate them into mobile applications.',
      ],
      jobDuration: 'May 2021 - Feb 2022',
      roleSkills: [
        'Python',
        'Django',
        'Angular',
        'SQL',
        'BASH Scripting',
        'SSH',
        'Dart',
        'Flutter',
      ],
    },
    second: {
      companyName: 'Green DNA',
      roleTitle: 'Mid Mobile Developer',
      roleDescription:
        'Green DNA Mobile App for managing crops processes in general',
      roleAchievements: [
        'As part of a team, I developed a custom Flutter application aimed at automating agricultural processes. The app rendered all data generated to a web back office, allowing farmers to monitor crop information in real-time. Additionally, the app could connect to IoT devices to receive alerts and notify farmers of any issues. This experience allowed me to collaborate effectively with a team of developers, designers, and other stakeholders, while also developing skills in creating highly functional mobile applications, integrating APIs and IoT devices, and implementing customized automation solutions to improve efficiency and productivity',
      ],
      jobDuration: 'Feb 2022 - Jan 2023',
      roleSkills: ['Dart', 'Flutter', 'Firebase'],
    },
    third: {
      companyName: 'GudarDevs',
      roleTitle: 'Semi-senior Mobile Developer',
      roleDescription: 'Eyeride FMS Project',
      roleAchievements: [
        'As part of a team, I contributed to the development of a mobile application that utilized maps to display real-time locations of fleets of vehicles. The app included role-based access control, implemented GetX as a state manager, and featured push notifications, custom widgets, real-time driver tracking, and a variety of animations. This experience allowed me to develop skills in collaborating with others to create highly functional mobile applications with complex features, integrating APIs, and implementing custom solutions to improve efficiency.',
      ],
      jobDuration: 'Jan 2023 - Currently',
      roleSkills: ['Dart', 'Flutter', 'Android', 'iOS'],
    },
  };
  title = 'Alfredo Paez N';
  skills = {
    first: {
      techName: 'Dart',
      widthBar: 80,
    },
    second: {
      techName: 'Flutter',
      widthBar: 90,
    },
    third: {
      techName: 'Python',
      widthBar: 50,
    },
    fourth: {
      techName: 'SQL',
      widthBar: 50,
    },
    fifth: {
      techName: 'Android',
      widthBar: 50,
    },
    sixth: {
      techName: 'HTML/CSS/SASS/LESS',
      widthBar: 50,
    },
    seventh: {
      techName: 'Angular',
      widthBar: 50,
    },
    eight: {
      techName: 'Python/Django',
      widthBar: 50,
    },
    nine: {
      techName: 'Firebase',
      widthBar: 80,
    },
  };
  education = {
    first: {
      career: 'Software Development',
      university: 'Corporación Universitaria Empresarial de Salamanca · CUES',
      year: '2021 - present',
    },
  };
  awards = {
    first: {
      awardTitle: 'Hacktoberfest 2022',
      awardDescription:
        "I participated in Hacktoberfest 2022 and made significant contributions to open source projects, which resulted in me being recognized and rewarded for my efforts.'",
    },
  };
  languaje = {
    first: {
      languaje: 'Spanish',
      level: '(Native)',
    },
    second: {
      languaje: 'English',
      level: '(Professional)',
    },
  };
  jobList: Array<any> = Object.entries(this.jobs).reverse();
}
