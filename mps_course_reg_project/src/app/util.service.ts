import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  user: any;

  public saveDataLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getDataLocal(key: string) {
    return localStorage.getItem(key);
  }

  getUserInfo() {
    this.user = {
      name: "Claire Xu",
      netid: "xx343",
      course: "MPS Information Science",
      department: "CIS",
      admit: "Fall 2023",
      graduation: "Spring 2024",
      classLevel: "Graduate",
      university: "Cornell University",
      program: "MPS Information Science",
      advisorInfo: {
        name: "Gilly Leshed",
        email: "gl87@cornell.edu"
      },
      holds: "none",
      coursesTaken: ["INFO 3200", "INFO 2500"],
      courseHistory: [
        {
          term:"Fall 2023",
          courses: [
            {
              subjectCode: "INFO",
              courseCode: "3200",
              title: "Information, Ethics, Law, and Policy",
              credits: 3
            },
            {
              subjectCode: "INFO",
              courseCode: "2500",
              title: "Information, Ethics, Law, and Policy",
              credits: 4
            }
          ]
        },
        {
          term:"Spring 2023",
          courses: [
            {
              credits: 3,
              subjectCode: "INFO",
              courseCode: "1200",
              title: "Information, Ethics, Law, and Policy",
            },
            {
              subjectCode: "INFO",
              courseCode: "1800",
              title: "Information, Ethics, Law, and Policy",
              credits: 3
            }
          ]
        }
      ],
      registrationStartDateTime: "2023-08-27 07:30:00",
      registrationEndDateTime: "2023-12-22 07:30:00",
      currentTerm: "Fall 2023",
      registeredClasses: [
        {
          subjectCode: "INFO",
          courseCode: "1035",
          title: "Information, Ethics, Law, and Policy",
          credits: 3,
          prerequisites: ["INFO 3200", "INFO 2001"],
          workload: {
            hours: 10,
            lecture: 2,
            assignment: 4,
            project: 4
          },
          color: "#933f70",
          offered: ["Fall, Spring, Summer, Winter"],
          description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary challenges ranging from privacy in big data and social computing to the nature of innovation, property, and collaboration in a networked world. We will cover key areas of technology law and policy such as telecommunications and network policy; concentration and antitrust; free speech and the first amendment; intellectual property; and privacy, security and freedom of information. We will also address new ethical questions and controversies that law and policy has yet to sort out. Through this course you'll learn about the key frameworks, processes, and institutions that govern the contemporary world of technology, along with key theories and methods from the academic fields that shape and inform them (law, philosophy, economics, political science, communication, sociology, etc.). You'll also learn core writing and analytic skills central to success in the worlds of social science, law, policy, and many other settings. But above all you'll learn to engage critically and strategically with the worlds of information and technology around you, deciding what kind of information consumer, user, and citizen YOU want to be.",
          lectureDetail: {
            prefix: "LEC",
            lectureId: "003",
            dayTimes: [
              {
                day: "Mon",
                startTime: "13:25",
                endTime: "14:15",
                location: "Statler Hall 185-Aud",
                selected: true
              },
              {
                day: "Wed",
                startTime: "13:25",
                endTime: "14:25",
                location: "Statler Hall 185-Aud",
                selected: true
              }
            ],
            lecturers: ["Susser, D", "Diana, N"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 11
          },
          discussionItems: [{
            prefix: "DIS",
            discussionId: "201",
            dayTimes: [
              {
                day: "Tue",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: true
              },
              {
                day: "Thu",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: false
              }
            ],
            lecturers: ["Susser, D", "Vidan, G"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 50,
          },],
          discussionDetail: {
            prefix: "DIS",
            discussionId: "201",
            dayTimes: [
              {
                day: "Tue",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: true
              },
              {
                day: "Thu",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: false
              }
            ],
            lecturers: ["Susser, D", "Vidan, G"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 50,
          },
          wishlisted: true,
          added: false
        },
      ],
      waitlistedClasses: [
        {
          subjectCode: "INFO",
          courseCode: "1250",
          title: "Information, Ethics, Law, and Policy",
          credits: 3,
          position: 11,
          totalWaitlisted: 50,
          prerequisites: ["INFO 3200", "INFO 2001"],
          workload: {
            hours: 10,
            lecture: 2,
            assignment: 4,
            project: 4
          },
          offered: ["Fall, Spring, Summer, Winter"],
          description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary challenges ranging from privacy in big data and social computing to the nature of innovation, property, and collaboration in a networked world. We will cover key areas of technology law and policy such as telecommunications and network policy; concentration and antitrust; free speech and the first amendment; intellectual property; and privacy, security and freedom of information. We will also address new ethical questions and controversies that law and policy has yet to sort out. Through this course you'll learn about the key frameworks, processes, and institutions that govern the contemporary world of technology, along with key theories and methods from the academic fields that shape and inform them (law, philosophy, economics, political science, communication, sociology, etc.). You'll also learn core writing and analytic skills central to success in the worlds of social science, law, policy, and many other settings. But above all you'll learn to engage critically and strategically with the worlds of information and technology around you, deciding what kind of information consumer, user, and citizen YOU want to be.",
          lectureDetail: {
            prefix: "LEC",
            lectureId: "003",
            dayTimes: [
              {
                day: "Mon",
                startTime: "13:25",
                endTime: "14:15",
                location: "Statler Hall 185-Aud",
                selected: true
              },
              {
                day: "Wed",
                startTime: "13:25",
                endTime: "14:25",
                location: "Statler Hall 185-Aud",
                selected: true
              }
            ],
            lecturers: ["Susser, D", "Diana, N"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 11
          },
          discussionItems: [
            {
              prefix: "DIS",
              discussionId: "201",
              dayTimes: [
                {
                  day: "Tue",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: true
                },
                {
                  day: "Thu",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: false
                }
              ],
              lecturers: ["Susser, D", "Vidan, G"],
              classFormat: "In-person",
              capacity: 50,
              vacancy: 50,
            },
          ],
          discussionDetail: {
            prefix: "DIS",
            discussionId: "201",
            dayTimes: [
              {
                day: "Tue",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: true
              },
              {
                day: "Thu",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: false
              }
            ],
            lecturers: ["Susser, D", "Vidan, G"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 50,
          },
          wishlisted: true,
          added: false
        },
      ],
      wishlist: [
        {
          subjectCode: "INFO",
          courseCode: "1050",
          title: "Information, Ethics, Law, and Policy",
          credits: 3,
          restrictions: ["CIS"],
          prerequisites: ["INFO 3200 and INFO 1100", "INFO 2001"],
          workload: {
            hours: 10,
            lecture: 2,
            assignment: 4,
            project: 4
          },
          color: null,
          offered: ["Fall, Spring, Summer, Winter"],
          description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary challenges ranging from privacy in big data and social computing to the nature of innovation, property, and collaboration in a networked world. We will cover key areas of technology law and policy such as telecommunications and network policy; concentration and antitrust; free speech and the first amendment; intellectual property; and privacy, security and freedom of information. We will also address new ethical questions and controversies that law and policy has yet to sort out. Through this course you'll learn about the key frameworks, processes, and institutions that govern the contemporary world of technology, along with key theories and methods from the academic fields that shape and inform them (law, philosophy, economics, political science, communication, sociology, etc.). You'll also learn core writing and analytic skills central to success in the worlds of social science, law, policy, and many other settings. But above all you'll learn to engage critically and strategically with the worlds of information and technology around you, deciding what kind of information consumer, user, and citizen YOU want to be.",
          lectureDetail: {
            prefix: "LEC",
            lectureId: "003",
            dayTimes: [
              {
                day: "Mon",
                startTime: "13:25",
                endTime: "14:15",
                location: "Statler Hall 185-Aud",
                selected: true
              },
              {
                day: "Wed",
                startTime: "13:25",
                endTime: "14:25",
                location: "Statler Hall 185-Aud",
                selected: true
              }
            ],
            lecturers: ["Susser, D", "Diana, N"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 11
          },
          discussionItems: [
            {
              prefix: "DIS",
              discussionId: "201",
              selected: true,
              dayTimes: [
                {
                  day: "Tue",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: true
                },
                {
                  day: "Thu",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: false
                }
              ],
              lecturers: ["Susser, D", "Vidan, G"],
              classFormat: "In-person",
              capacity: 50,
              vacancy: 50,
            },
            {
              prefix: "DIS",
              discussionId: "202",
              selected: false,
              dayTimes: [
                {
                  day: "Wed",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: true
                },
                {
                  day: "Fri",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: false
                }
              ],
              lecturers: ["Susser, D", "Vidan, G"],
              classFormat: "In-person",
              capacity: 50,
              vacancy: 50,
            },
          ],
          discussionDetail: {
            prefix: "DIS",
            discussionId: "201",
            dayTimes: [
              {
                day: "Tue",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: true
              },
              {
                day: "Thu",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: false
              }
            ],
            lecturers: ["Susser, D", "Vidan, G"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 50,
          },
          wishlisted: true,
          added: false
        },
        {
          subjectCode: "AEM",
          courseCode: "1050",
          title: "Information, Ethics, Law, and Policy",
          credits: 3,
          restrictions: ["CIS"],
          prerequisites: ["INFO 3200 and INFO 1100", "INFO 2001"],
          workload: {
            hours: 10,
            lecture: 2,
            assignment: 4,
            project: 4
          },
          color: null,
          offered: ["Fall, Spring, Summer, Winter"],
          description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary challenges ranging from privacy in big data and social computing to the nature of innovation, property, and collaboration in a networked world. We will cover key areas of technology law and policy such as telecommunications and network policy; concentration and antitrust; free speech and the first amendment; intellectual property; and privacy, security and freedom of information. We will also address new ethical questions and controversies that law and policy has yet to sort out. Through this course you'll learn about the key frameworks, processes, and institutions that govern the contemporary world of technology, along with key theories and methods from the academic fields that shape and inform them (law, philosophy, economics, political science, communication, sociology, etc.). You'll also learn core writing and analytic skills central to success in the worlds of social science, law, policy, and many other settings. But above all you'll learn to engage critically and strategically with the worlds of information and technology around you, deciding what kind of information consumer, user, and citizen YOU want to be.",
          lectureDetail: {
            prefix: "LEC",
            lectureId: "003",
            dayTimes: [
              {
                day: "Mon",
                startTime: "13:25",
                endTime: "14:15",
                location: "Statler Hall 185-Aud",
                selected: true
              },
              {
                day: "Wed",
                startTime: "13:25",
                endTime: "14:25",
                location: "Statler Hall 185-Aud",
                selected: true
              }
            ],
            lecturers: ["Susser, D", "Diana, N"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 11
          },
          discussionItems: [
            {
              prefix: "DIS",
              discussionId: "201",
              selected: true,
              dayTimes: [
                {
                  day: "Tue",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: true
                },
                {
                  day: "Thu",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: false
                }
              ],
              lecturers: ["Susser, D", "Vidan, G"],
              classFormat: "In-person",
              capacity: 50,
              vacancy: 50,
            },
            {
              prefix: "DIS",
              discussionId: "202",
              selected: false,
              dayTimes: [
                {
                  day: "Wed",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: true
                },
                {
                  day: "Fri",
                  startTime: "10:10",
                  endTime: "11:00",
                  location: "Hollister Hall 401",
                  selected: false
                }
              ],
              lecturers: ["Susser, D", "Vidan, G"],
              classFormat: "In-person",
              capacity: 50,
              vacancy: 50,
            },
          ],
          discussionDetail: {
            prefix: "DIS",
            discussionId: "201",
            dayTimes: [
              {
                day: "Tue",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: true
              },
              {
                day: "Thu",
                startTime: "10:10",
                endTime: "11:00",
                location: "Hollister Hall 401",
                selected: false
              }
            ],
            lecturers: ["Susser, D", "Vidan, G"],
            classFormat: "In-person",
            capacity: 50,
            vacancy: 50,
          },
          wishlisted: true,
          added: false
        },
      ],
      schedules: [
        {
          name: "Schedule A",
          id: "a",
          data: [
            {
              subjectCode: "INFO",
              courseCode: "1050",
              title: "Information, Ethics, Law, and Policy",
              credits: 3,
              restrictions: ["CIS"],
              prerequisites: ["INFO 3200 and INFO 1100", "INFO 2001"],
              workload: {
                hours: 10,
                lecture: 2,
                assignment: 4,
                project: 4
              },
              color: null,
              offered: ["Fall, Spring, Summer, Winter"],
              description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary challenges ranging from privacy in big data and social computing to the nature of innovation, property, and collaboration in a networked world. We will cover key areas of technology law and policy such as telecommunications and network policy; concentration and antitrust; free speech and the first amendment; intellectual property; and privacy, security and freedom of information. We will also address new ethical questions and controversies that law and policy has yet to sort out. Through this course you'll learn about the key frameworks, processes, and institutions that govern the contemporary world of technology, along with key theories and methods from the academic fields that shape and inform them (law, philosophy, economics, political science, communication, sociology, etc.). You'll also learn core writing and analytic skills central to success in the worlds of social science, law, policy, and many other settings. But above all you'll learn to engage critically and strategically with the worlds of information and technology around you, deciding what kind of information consumer, user, and citizen YOU want to be.",
              lectureDetail: {
                prefix: "LEC",
                lectureId: "003",
                dayTimes: [
                  {
                    day: "Mon",
                    startTime: "13:25",
                    endTime: "14:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  },
                  {
                    day: "Wed",
                    startTime: "13:25",
                    endTime: "14:25",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  }
                ],
                lecturers: ["Susser, D", "Diana, N"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 11
              },
              discussionItems: [
                {
                  prefix: "DIS",
                  discussionId: "201",
                  selected: true,
                  dayTimes: [
                    {
                      day: "Tue",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: true
                    },
                    {
                      day: "Thu",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: false
                    }
                  ],
                  lecturers: ["Susser, D", "Vidan, G"],
                  classFormat: "In-person",
                  capacity: 50,
                  vacancy: 50,
                },
                {
                  prefix: "DIS",
                  discussionId: "202",
                  selected: false,
                  dayTimes: [
                    {
                      day: "Wed",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: true
                    },
                    {
                      day: "Fri",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: false
                    }
                  ],
                  lecturers: ["Susser, D", "Vidan, G"],
                  classFormat: "In-person",
                  capacity: 50,
                  vacancy: 50,
                },
              ],
              discussionDetail: {
                prefix: "DIS",
                discussionId: "201",
                dayTimes: [
                  {
                    day: "Tue",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: true
                  },
                  {
                    day: "Thu",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: false
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 50,
              },
              wishlisted: true,
              added: false
            },
            // {
            //   subjectCode: "INFO",
            //   courseCode: "1200",
            //   title: "Information, Ethics, Law, and Policy",
            //   credits: 3,
            //   restrictions: ["CIS", "MENG"],
            //   prerequisites: ["INFO 3200 and INFO 2500", "INFO 2001"],
            //   workload: {
            //     hours: 10,
            //     lecture: 2,
            //     assignment: 4,
            //     project: 4
            //   },
            //   color: null,
            //   offered: ["Fall, Spring"],
            //   description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary.",
            //   lectureDetail: {
            //     prefix: "LEC",
            //     lectureId: "001",
            //     dayTimes: [
            //       {
            //         day: "Mon",
            //         startTime: "10:25",
            //         endTime: "11:15",
            //         location: "Statler Hall 185-Aud",
            //         selected: true
            //       },
            //       {
            //         day: "Wed",
            //         startTime: "10:25",
            //         endTime: "11:15",
            //         location: "Statler Hall 185-Aud",
            //         selected: true
            //       }
            //     ],
            //     lecturers: ["Susser, D", "Vidan, G"],
            //     classFormat: "In-person",
            //     capacity: 20,
            //     vacancy: 8
            //   },
            //   discussionItems: [
            //     {
            //       prefix: "DIS",
            //       discussionId: "201",
            //       dayTimes: [
            //         {
            //           day: "Wed",
            //           startTime: "10:10",
            //           endTime: "11:00",
            //           location: "Hollister Hall 401",
            //           selected: true
            //         },
            //         {
            //           day: "Fri",
            //           startTime: "10:10",
            //           endTime: "11:00",
            //           location: "Hollister Hall 401",
            //           selected: false
            //         }
            //       ],
            //       lecturers: ["Melody, B", "Vidan, G"],
            //       classFormat: "In-person",
            //       capacity: 50,
            //       vacancy: 50
            //     },
            //   ],
            //   discussionDetail: {
            //     prefix: "DIS",
            //     discussionId: "201",
            //     dayTimes: [
            //       {
            //         day: "Wed",
            //         startTime: "10:10",
            //         endTime: "11:00",
            //         location: "Hollister Hall 401",
            //         selected: true
            //       },
            //       {
            //         day: "Fri",
            //         startTime: "10:10",
            //         endTime: "11:00",
            //         location: "Hollister Hall 401",
            //         selected: false
            //       }
            //     ],
            //     lecturers: ["Melody, B", "Vidan, G"],
            //     classFormat: "In-person",
            //     capacity: 50,
            //     vacancy: 50
            //   },
            //   wishlisted: false,
            //   added: false
            // },
            // {
            //   subjectCode: "INFO",
            //   courseCode: "1200",
            //   title: "Information, Ethics, Law, and Policy",
            //   credits: 3,
            //   restrictions: ["MENG"],
            //   prerequisites: ["INFO 3200", "INFO 2001"],
            //   workload: {
            //     hours: 10,
            //     lecture: 2,
            //     assignment: 4,
            //     project: 4
            //   },
            //   color: null,
            //   offered: ["Fall"],
            //   description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary.",
            //   lectureDetail: {
            //     prefix: "LEC",
            //     lectureId: "001",
            //     dayTimes: [
            //       {
            //         day: "Mon",
            //         startTime: "13:25",
            //         endTime: "14:15",
            //         location: "Statler Hall 185-Aud",
            //         selected: true
            //       },
            //       {
            //         day: "Wed",
            //         startTime: "13:25",
            //         endTime: "14:15",
            //         location: "Statler Hall 185-Aud",
            //         selected: true
            //       }
            //     ],
            //     lecturers: ["Susser, D", "Vidan, G"],
            //     classFormat: "In-person",
            //     capacity: 50,
            //     vacancy: 11
            //   },
            //   discussionItems: [
            //     {
            //       prefix: "DIS",
            //       discussionId: "201",
            //       dayTimes: [
            //         {
            //           day: "Tue",
            //           startTime: "10:10",
            //           endTime: "11:00",
            //           location: "Hollister Hall 401",
            //           selected: true
            //         },
            //         {
            //           day: "Thu",
            //           startTime: "10:10",
            //           endTime: "11:00",
            //           location: "Hollister Hall 401",
            //           selected: false
            //         }
            //       ],
            //       lecturers: ["Susser, D", "Vidan, G"],
            //       classFormat: "In-person",
            //       capacity: 50,
            //       vacancy: 50
            //     },
            //   ],
            //   discussionDetail: {
            //     prefix: "DIS",
            //     discussionId: "201",
            //     dayTimes: [
            //       {
            //         day: "Tue",
            //         startTime: "10:10",
            //         endTime: "11:00",
            //         location: "Hollister Hall 401",
            //         selected: true
            //       },
            //       {
            //         day: "Thu",
            //         startTime: "10:10",
            //         endTime: "11:00",
            //         location: "Hollister Hall 401",
            //         selected: false
            //       }
            //     ],
            //     lecturers: ["Susser, D", "Vidan, G"],
            //     classFormat: "In-person",
            //     capacity: 50,
            //     vacancy: 50
            //   },
            //   wishlisted: false,
            //   added: false
            // },
            // {
            //   subjectCode: "INFO",
            //   courseCode: "1250",
            //   title: "Computer Graphics",
            //   credits: 3,
            //   restrictions: ["CIS"],
            //   prerequisites: ["INFO 3200", "INFO 2001"],
            //   workload: {
            //     hours: 10,
            //     lecture: 2,
            //     assignment: 4,
            //     project: 4
            //   },
            //   color: null,
            //   offered: ["Fall, Spring"],
            //   description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary.",
            //   lectureDetail: {
            //     prefix: "LEC",
            //     lectureId: "001",
            //     dayTimes: [
            //       {
            //         day: "Mon",
            //         startTime: "13:25",
            //         endTime: "14:15",
            //         location: "Statler Hall 185-Aud",
            //         selected: true
            //       },
            //       {
            //         day: "Wed",
            //         startTime: "13:25",
            //         endTime: "14:15",
            //         location: "Statler Hall 185-Aud",
            //         selected: true
            //       }
            //     ],
            //     lecturers: ["Susser, D", "Vidan, G"],
            //     classFormat: "In-person",
            //     capacity: 50,
            //     vacancy: 14
            //   },
            //   discussionItems: [
            //     {
            //       prefix: "DIS",
            //       discussionId: "201",
            //       dayTimes: [
            //         {
            //           day: "Tue",
            //           startTime: "15:10",
            //           endTime: "16:00",
            //           location: "Hollister Hall 401",
            //           selected: true
            //         },
            //         {
            //           day: "Thu",
            //           startTime: "15:10",
            //           endTime: "16:00",
            //           location: "Hollister Hall 401",
            //           selected: false
            //         }
            //       ],
            //       lecturers: ["Susser, D", "Vidan, G"],
            //       classFormat: "In-person",
            //       capacity: 50,
            //       vacancy: 50
            //     },
            //   ],
            //   discussionDetail: {
            //     prefix: "DIS",
            //     discussionId: "201",
            //     dayTimes: [
            //       {
            //         day: "Tue",
            //         startTime: "15:10",
            //         endTime: "16:00",
            //         location: "Hollister Hall 401",
            //         selected: true
            //       },
            //       {
            //         day: "Thu",
            //         startTime: "15:10",
            //         endTime: "16:00",
            //         location: "Hollister Hall 401",
            //         selected: false
            //       }
            //     ],
            //     lecturers: ["Susser, D", "Vidan, G"],
            //     classFormat: "In-person",
            //     capacity: 50,
            //     vacancy: 50
            //   },
            //   wishlisted: false,
            //   added: false
            // }
          ],
        },
        {
          name: "Schedule B",
          id: "b",
          data: [
            {
              subjectCode: "INFO",
              courseCode: "1050",
              title: "Information, Ethics, Law, and Policy",
              credits: 3,
              restrictions: ["CIS"],
              prerequisites: ["INFO 3200", "INFO 2001"],
              workload: {
                hours: 10,
                lecture: 2,
                assignment: 4,
                project: 4
              },
              color: null,
              offered: ["Fall, Spring, Summer, Winter"],
              description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary challenges ranging from privacy in big data and social computing to the nature of innovation, property, and collaboration in a networked world. We will cover key areas of technology law and policy such as telecommunications and network policy; concentration and antitrust; free speech and the first amendment; intellectual property; and privacy, security and freedom of information. We will also address new ethical questions and controversies that law and policy has yet to sort out. Through this course you'll learn about the key frameworks, processes, and institutions that govern the contemporary world of technology, along with key theories and methods from the academic fields that shape and inform them (law, philosophy, economics, political science, communication, sociology, etc.). You'll also learn core writing and analytic skills central to success in the worlds of social science, law, policy, and many other settings. But above all you'll learn to engage critically and strategically with the worlds of information and technology around you, deciding what kind of information consumer, user, and citizen YOU want to be.",
              lectureDetail: {
                prefix: "LEC",
                lectureId: "003",
                dayTimes: [
                  {
                    day: "Mon",
                    startTime: "13:25",
                    endTime: "14:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  },
                  {
                    day: "Wed",
                    startTime: "13:25",
                    endTime: "14:25",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  }
                ],
                lecturers: ["Susser, D", "Diana, N"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 11
              },
              discussionItems: [
                {
                  prefix: "DIS",
                  discussionId: "201",
                  dayTimes: [
                    {
                      day: "Tue",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: true
                    },
                    {
                      day: "Thu",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: false
                    }
                  ],
                  lecturers: ["Susser, D", "Vidan, G"],
                  classFormat: "In-person",
                  capacity: 50,
                  vacancy: 50,
                },
              ],
              discussionDetail: {
                prefix: "DIS",
                discussionId: "201",
                dayTimes: [
                  {
                    day: "Tue",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: true
                  },
                  {
                    day: "Thu",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: false
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 50,
              },
              wishlisted: true,
              added: false
            },
            {
              subjectCode: "INFO",
              courseCode: "1200",
              title: "Information, Ethics, Law, and Policy",
              credits: 3,
              restrictions: ["CIS"],
              prerequisites: ["INFO 3200", "INFO 2001"],
              workload: {
                hours: 10,
                lecture: 2,
                assignment: 4,
                project: 4
              },
              color: null,
              offered: ["Fall, Spring"],
              description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary.",
              lectureDetail: {
                prefix: "LEC",
                lectureId: "001",
                dayTimes: [
                  {
                    day: "Mon",
                    startTime: "10:25",
                    endTime: "11:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  },
                  {
                    day: "Wed",
                    startTime: "10:25",
                    endTime: "11:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 20,
                vacancy: 8
              },
              discussionItems: [
                {
                  prefix: "DIS",
                  discussionId: "201",
                  dayTimes: [
                    {
                      day: "Wed",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: true
                    },
                    {
                      day: "Fri",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: false
                    }
                  ],
                  lecturers: ["Melody, B", "Vidan, G"],
                  classFormat: "In-person",
                  capacity: 50,
                  vacancy: 50
                },
              ],
              discussionDetail: {
                prefix: "DIS",
                discussionId: "201",
                dayTimes: [
                  {
                    day: "Wed",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: true
                  },
                  {
                    day: "Fri",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: false
                  }
                ],
                lecturers: ["Melody, B", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 50
              },
              wishlisted: false,
              added: false
            },
          ],
        },
        {
          name: "Schedule C",
          id: "c",
          data: [
            {
              subjectCode: "INFO",
              courseCode: "1200",
              title: "Information, Ethics, Law, and Policy",
              credits: 3,
              restrictions: ["CIS"],
              prerequisites: ["INFO 3200", "INFO 2001"],
              workload: {
                hours: 10,
                lecture: 2,
                assignment: 4,
                project: 4
              },
              color: null,
              offered: ["Fall"],
              description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary.",
              lectureDetail: {
                prefix: "LEC",
                lectureId: "001",
                dayTimes: [
                  {
                    day: "Mon",
                    startTime: "13:25",
                    endTime: "14:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  },
                  {
                    day: "Wed",
                    startTime: "13:25",
                    endTime: "14:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 11
              },
              discussionItems: [
                {
                  prefix: "DIS",
                  discussionId: "201",
                  dayTimes: [
                    {
                      day: "Tue",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: true
                    },
                    {
                      day: "Thu",
                      startTime: "10:10",
                      endTime: "11:00",
                      location: "Hollister Hall 401",
                      selected: false
                    }
                  ],
                  lecturers: ["Susser, D", "Vidan, G"],
                  classFormat: "In-person",
                  capacity: 50,
                  vacancy: 50
                },
              ],
              discussionDetail: {
                prefix: "DIS",
                discussionId: "201",
                dayTimes: [
                  {
                    day: "Tue",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: true
                  },
                  {
                    day: "Thu",
                    startTime: "10:10",
                    endTime: "11:00",
                    location: "Hollister Hall 401",
                    selected: false
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 50
              },
              wishlisted: false,
              added: false
            },
            {
              subjectCode: "INFO",
              courseCode: "1250",
              title: "Computer Graphics",
              credits: 3,
              restrictions: ["CIS"],
              prerequisites: ["INFO 3200", "INFO 2001"],
              workload: {
                hours: 10,
                lecture: 2,
                assignment: 4,
                project: 4
              },
              color: null,
              offered: ["Fall, Spring"],
              description: "This course investigates the ethical, legal, and policy foundations of contemporary information technology. Through lectures, readings, discussions, and short assignments, we will address contemporary.",
              lectureDetail: {
                prefix: "LEC",
                lectureId: "001",
                dayTimes: [
                  {
                    day: "Mon",
                    startTime: "13:25",
                    endTime: "14:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  },
                  {
                    day: "Wed",
                    startTime: "13:25",
                    endTime: "14:15",
                    location: "Statler Hall 185-Aud",
                    selected: true
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 14
              },
              discussionItems: [
                {
                  prefix: "DIS",
                  discussionId: "201",
                  dayTimes: [
                    {
                      day: "Tue",
                      startTime: "15:10",
                      endTime: "16:00",
                      location: "Hollister Hall 401",
                      selected: true
                    },
                    {
                      day: "Thu",
                      startTime: "15:10",
                      endTime: "16:00",
                      location: "Hollister Hall 401",
                      selected: false
                    }
                  ],
                  lecturers: ["Susser, D", "Vidan, G"],
                  classFormat: "In-person",
                  capacity: 50,
                  vacancy: 50
                },
              ],
              discussionDetail: {
                prefix: "DIS",
                discussionId: "201",
                dayTimes: [
                  {
                    day: "Tue",
                    startTime: "15:10",
                    endTime: "16:00",
                    location: "Hollister Hall 401",
                    selected: true
                  },
                  {
                    day: "Thu",
                    startTime: "15:10",
                    endTime: "16:00",
                    location: "Hollister Hall 401",
                    selected: false
                  }
                ],
                lecturers: ["Susser, D", "Vidan, G"],
                classFormat: "In-person",
                capacity: 50,
                vacancy: 50
              },
              wishlisted: false,
              added: false
            }
          ]
        }
      ],
    }
    return this.user;
  }

  formatTime(item: any) {
    let newItem = moment(item, "HH:mm").format('h:mma');
    return newItem
  }
}

export type ScheduleDayTime = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun",
  start: String,
  end: String,
  location: String
}

export type Schedule = {
  id: any,
  courseId: any,
  type: any,
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun",
  start: String,
  end: String,
  location: String
}
