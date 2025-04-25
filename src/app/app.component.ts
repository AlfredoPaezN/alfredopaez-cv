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
      onLoadComplete: function () { },
    });
  }
  jobs = {
    first: {
      companyName: 'GudarDevs',
      roleTitle: 'Junior Mobile Developer',
      roleDescription: 'Developed a mobile app to automate router upgrades via SSH, enhancing network automation.',
      roleAchievements: [
        'Built robust iOS/Android apps.',
        'Integrated SSH for seamless router upgrades.',
        'Managed databases to ensure data integrity.',
        'Implemented CI/CD pipelines for streamlined deployment.',
      ],
      jobDuration: 'May 2021 - Feb 2022',
      roleSkills: ['Dart', 'Flutter', 'SQL', 'BASH Scripting', 'SSH'],
    },
    second: {
      companyName: 'Green DNA',
      roleTitle: 'Mid Mobile Developer',
      roleDescription: 'Co-developed a Flutter app automating agriculture tasks with IoT alerts and real-time crop data.',
      roleAchievements: [
        'Integrated APIs to enhance app functionality.',
        'Developed real-time crop data rendering for farmers.',
        'Solved IoT integration and data rendering issues.',
        'Contributed to quality assurance and app testing.',
      ],
      jobDuration: 'Feb 2022 - Jan 2023',
      roleSkills: ['Dart', 'Flutter', 'Firebase'],
    },
    third: {
      companyName: 'GudarDevs',
      roleTitle: 'Advanced Flutter Mobile Developer',
      roleDescription: 'Contributed to a mobile app displaying real-time fleet locations with role-based access and custom features.',
      roleAchievements: [
        'Developed real-time fleet location features.',
        'Implemented role-based access for secure data management.',
        'Integrated push notifications for user engagement.',
        'Created custom widgets/animations for improved UX.',
        'Led specific project aspects, ensuring timely delivery.',
      ],
      jobDuration: 'Jan 2023 - Oct 2024',
      roleSkills: ['Dart', 'Flutter', 'Android', 'iOS'],
    },
    fourth: {
      companyName: 'Globant',
      roleTitle: 'Semi-senior Flutter Developer',
      roleDescription: 'Currently contributing to the development of a high-performance cross-platform mobile app using Flutter.',
      roleAchievements: [
        'Contributing to app development with a focus on performance and scalability.',
        'Working on new features and improving user experience.',
      ],
      jobDuration: 'Oct 2024 - Present',
      roleSkills: ['Dart', 'Flutter', 'Android', 'iOS'],
    },
  };
  title = 'Alfredo Paez N';
  skills = {
    first: {
      techName: 'Dart',
      widthBar: 90,
    },
    second: {
      techName: 'Flutter',
      widthBar: 90,
    },
    third: {
      techName: 'Firebase',
      widthBar: 80,
    },
    fourth: {
      techName: 'SQL',
      widthBar: 50,
    },
    fifth: {
      techName: 'TypeScript/JavaScript',
      widthBar: 50,
    },
    sixth: {
      techName: 'HTML/CSS/SASS/LESS',
      widthBar: 50,
    },
    seventh: {
      techName: 'React',
      widthBar: 50,
    },
    eight: {
      techName: 'Python/Django',
      widthBar: 50,
    },
    nine: {
      techName: 'Android',
      widthBar: 60,
    },
    tenth: {
      techName: 'Node',
      widthBar: 70,
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
    second: {
      awardTitle: 'Caribe Game JAM 2023',
      awardDescription:
        'I participated in the Caribe Game JAM 2023 and developed a game using flutter flame, the game was recognized for its creativity and innovation.',
    },
    third: {
      awardTitle: 'Flutter Community',
      awardDescription:
        'Co-founder of the FlutterBaq, a community of developers who share knowledge and resources to help each other grow and succeed in the field of mobile app development.',
    },


  };
  languaje = {
    first: {
      languaje: 'Spanish',
      level: ' (Native)',
    },
    second: {
      languaje: 'English',
      level: ' (Professional)',
    },
  };
  jobList: Array<any> = Object.entries(this.jobs).reverse();
}
