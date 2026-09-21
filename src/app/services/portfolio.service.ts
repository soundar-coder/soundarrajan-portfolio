import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { Certificate } from '../models/certificate.model';
import { Achievement } from '../models/achievement.model';
import { SocialLink } from '../models/social-link.model';
import { JourneyStep } from '../models/journey-step.model';

/**
 * Single source of truth for portfolio content.
 * Update names, links and numbers here — the components never hardcode data.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly name = 'SOUNDARRAJAN M';
  readonly role = 'FULL STACK  DEVELOPER ';
  readonly tagline =
    'I build backend applications and APIs using Java, Spring Boot and MySQL.';
  readonly email = 'soundarcoder@gmail.com';
  readonly phone = '6369594650';
  readonly resumeUrl = 'assets/resume/SOUNDARRAJAN-M_Resume.pdf';

  readonly socialLinks: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com/soundar-coder' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/soundar03/' },
    { platform: 'LeetCode', url: '[ADD LEETCODE URL]' },
    { platform: 'HackerRank', url: '[ADD HACKERRANK URL]' },
  ];

  readonly heroStack: string[] = ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Angular'];

  readonly skills: Skill[] = [
    { name: 'Java', category: 'backend', icon: 'devicon-java-plain' },
    { name: 'Spring Boot', category: 'backend', icon: 'devicon-spring-plain' },
    { name: 'Spring Security', category: 'backend', icon: 'devicon-spring-plain' },
    { name: 'REST API', category: 'backend', icon: 'devicon-nodejs-plain' },
    { name: 'JDBC', category: 'backend', icon: 'devicon-java-plain' },
    { name: 'Hibernate / JPA', category: 'backend', icon: 'devicon-hibernate-plain' },
    { name: 'MySQL', category: 'backend', icon: 'devicon-mysql-plain' },

    { name: 'Angular', category: 'frontend', icon: 'devicon-angularjs-plain' },
    { name: 'TypeScript', category: 'frontend', icon: 'devicon-typescript-plain' },
    { name: 'JavaScript', category: 'frontend', icon: 'devicon-javascript-plain' },
    { name: 'HTML5', category: 'frontend', icon: 'devicon-html5-plain' },
    { name: 'CSS3', category: 'frontend', icon: 'devicon-css3-plain' },

    { name: 'Git', category: 'tools', icon: 'devicon-git-plain' },
    { name: 'GitHub', category: 'tools', icon: 'devicon-github-original' },
    { name: 'Postman', category: 'tools', icon: 'devicon-postman-plain' },
    { name: 'IntelliJ IDEA', category: 'tools', icon: 'devicon-intellij-plain' },
    { name: 'Visual Studio Code', category: 'tools', icon: 'devicon-vscode-plain' },
  ];

  readonly projects: Project[] = [
    {
      id: 'multi-vendor-ecommerce',
      title: 'Multi-Vendor E-Commerce System',
      summary: 'A backend for a multi-vendor e-commerce platform built with Spring Boot and MySQL.',
      description:
        'Built a backend for a Multi-Vendor E-Commerce System using Spring Boot and MySQL, ' +
        'structured around REST endpoints so multiple vendors can be served through one API layer.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      features: [
        'REST API layer built with Spring Boot',
        'MySQL-backed data storage',
        'Designed to support multiple vendors on shared infrastructure',
      ],
      githubUrl: 'https://github.com/soundar-coder/multi-vendor-ecommerce',
      category: 'backend',
    },
    {
      id: 'bus-reservation-system',
      title: 'Bus Reservation System',
      summary: 'A console-based reservation system with thread-safe, concurrent ticket booking.',
      description:
        'Console-based Bus Reservation System built with core Java, JDBC and multithreading, ' +
        'including thread-safe ticket booking so concurrent reservations do not conflict.',
      technologies: ['Java', 'OOP', 'JDBC', 'Multithreading'],
      features: [
        'Object-oriented design for buses, routes and bookings',
        'JDBC layer for persistence',
        'Thread-safe booking to handle concurrent requests',
      ],
      githubUrl: 'https://github.com/soundar-coder/bus-reservation-system',
      category: 'systems',
    },
    {
      id: 'office-network-design',
      title: 'Small Office Network Design & Implementation',
      summary: 'A small office network designed and configured end-to-end in Cisco Packet Tracer.',
      description:
        'Designed and configured a small office network using Cisco Packet Tracer, covering IP ' +
        'addressing, VLAN segmentation, DHCP and routing between subnets.',
      technologies: ['Cisco Packet Tracer', 'IP Addressing', 'VLAN', 'DHCP', 'Routing'],
      features: [
        'IP addressing plan for the office network',
        'VLAN segmentation for traffic separation',
        'DHCP configuration and inter-VLAN routing',
      ],
      githubUrl: 'https://github.com/soundar-coder/office-network-design',
      category: 'networking',
    },
  ];

  readonly journey: JourneyStep[] = [
    { title: 'Education', description: 'MCA — built a foundation in computer science and programming.' },
    { title: 'Programming', description: 'Started with core Java and object-oriented programming fundamentals.' },
    { title: 'Backend Development', description: 'Moved into Spring Boot, REST APIs and MySQL for real backend systems.' },
    { title: 'Projects', description: 'Applied that knowledge to backend, systems and networking projects.' },
    { title: 'Problem Solving', description: 'Sharpened logic and data structures through LeetCode and HackerRank.' },
    { title: 'Full-Stack Knowledge', description: 'Picked up Angular and TypeScript to build and ship complete applications.' },
  ];

  readonly certificates: Certificate[] = [
    {
      title: 'Programming in Java — Top 2% in India',
      organization: 'NPTEL',
      fileUrl: '[ADD CERTIFICATE]',
    },
    {
      title: 'Java Training',
      organization: 'Spoken Tutorial Project, IIT Bombay',
      fileUrl: '[ADD CERTIFICATE]',
    },
    {
      title: 'Java / Problem Solving',
      organization: 'HackerRank',
      fileUrl: '[ADD CERTIFICATE]',
    },
  ];

  readonly achievements: Achievement[] = [
    { label: 'LeetCode problems solved', value: '160+', linkUrl: '[ADD LEETCODE URL]' },
    { label: 'HackerRank problems solved', value: '30+', linkUrl: '[ADD HACKERRANK URL]' },
  ];
}
