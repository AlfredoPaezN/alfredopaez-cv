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
      roleDescription: 'EyeNet Upgrader: A mobile app automates router upgrades via SSH, showcasing expertise in network integration and streamlined automation.',
      roleAchievements: [
        'Application Development: Develop robust and user-friendly mobile applications for iOS and Android platforms.',
        'SSH Integration: Utilize SSH to automate router upgrades, streamlining the process and improving efficiency.',
        'database Management: Manage and maintain databases to ensure data integrity and security.',
        'Continuous Integration/Continuous Deployment (CI/CD): Implement CI/CD pipelines to automate the deployment process and improve efficiency.',
      ],
      jobDuration: 'May 2021 - Feb 2022',
      roleSkills: [
        'Dart',
        'Flutter',
        'SQL',
        'BASH Scripting',
        'SSH',
      ],
    },
    second: {
      companyName: 'Green DNA',
      roleTitle: 'Mid Mobile Developer',
      roleDescription:
        'Green DNA: Co-developed a Flutter app automating agriculture tasks, providing real-time crop data and IoT alerts.',
      roleAchievements: [
        "API Integration: Integrate APIs to enhance the app's capabilities and facilitate seamless data exchange.",
        'Real-time Data Rendering: Implement features to render real-time crop data to a user-friendly web interface for farmers.',
        'Problem-solving: Address challenges related to IoT integration, data rendering, and other aspects of app development through effective problem-solving.',
        'Quality Assurance: Contribute to testing processes to ensure the app meets high-quality standards and performs reliably.'
      ],
      jobDuration: 'Feb 2022 - Jan 2023',
      roleSkills: ['Dart', 'Flutter', 'Firebase'],
    },
    third: {
      companyName: 'GudarDevs',
      roleTitle: 'Semi-senior Mobile Developer',
      roleDescription: 'Team contributor to a mobile app displaying real-time fleet locations. Implemented role-based access, GetX state management, push notifications, and custom features. Developed collaboration skills, integrating APIs, and optimizing efficiency.',
      roleAchievements: [
        'Real-time Fleet Location Display: Implement features to display real-time locations of fleets on maps within the app.',
        'Role-based Access: Implement role-based access to ensure secure and efficient data access for different user groups.',
        'Push Notifications: Implement push notifications to keep users informed and engaged with the app.',
        "Custom Widgets and Animations: Create and integrate custom widgets and animations to enhance the app's visual appeal and user experience.",
        'Project Leadership: Take leadership in specific aspects of the project, ensuring timely delivery of assigned tasks and meeting project milestones.'
      ],
      jobDuration: 'Jan 2023 - Currently',
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
