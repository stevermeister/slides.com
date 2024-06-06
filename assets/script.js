const presentations = [
    {
        name: "Angularday - Service Workers: Understand and Use",
        link: "./2022-09-13-slides-service-workers-understand-and-use.html",
        date: "Sep 13, 2022",
        thumbnail: "./assets/2022-09-13-slides-service-workers-understand-and-use.png",
    },
    {
        name: "MagicJS - Deep Understanding of Change Detection",
        link: "./2022-08-30-slides-angular-performance-tuning-9ee14b.html",
        date: "Aug 30, 2022",
        thumbnail: "./assets/2022-08-30-slides-angular-performance-tuning-9ee14b.png",
    },
    {
        name: "DevDays Europe - Scully like an alternative to SSR",
        link: "./2022-04-24-slides-devdays2022-scully-like-an-alternative-to-ssr.html",
        date: "Apr 24, 2022",
        thumbnail: "./assets/2022-04-24-slides-devdays2022-scully-like-an-alternative-to-ssr.png",
    },
    {
        name: "Angular Kharkiv - SSR and Cookies",
        link: "./2021-12-01-slides-angular-kharkiv-11-ssr-cookie.html",
        date: "Dec 01, 2021",
        thumbnail: "./assets/2021-12-01-slides-angular-kharkiv-11-ssr-cookie.png",
    },
    {
        name: "Angular Kharkiv Meetup #11",
        link: "./2021-11-29-slides-angular-kharkiv-11.html",
        date: "Nov 29, 2021",
        thumbnail: "./assets/2021-11-29-slides-angular-kharkiv-11.png",
    },
    {
        name: "iJS Conference - Scully like an alternative to Angular Universal",
        link: "./2021-10-06-slides-ijs-scully-like-an-alternative-to-ssr-09c58c.html",
        date: "Oct 06, 2021",
        thumbnail: "./assets/2021-10-06-slides-ijs-scully-like-an-alternative-to-ssr-09c58c.png",
    },
    {
        name: "ngRome - Angular Performance Tuning",
        link: "./2021-08-05-slides-angular-performance-tuning-ngrome.html",
        date: "Aug 05, 2021",
        thumbnail: "./assets/2021-08-05-slides-angular-performance-tuning-ngrome.png",
    },
    {
        name: "Angular Global Summit - Scully like an alternative to SSR",
        link: "./2021-06-02-slides-angular-global-summit-scully-like-an-alternative-to-ssr.html",
        date: "Jun 02, 2021",
        thumbnail: "./assets/2021-06-02-slides-angular-global-summit-scully-like-an-alternative-to-ssr.png",
    },
    {
        name: "Angular Kenya - Deep Understanding of Dependency Injection",
        link: "./2021-05-08-slides-angular-performance-tuning-kenya.html",
        date: "May 08, 2021",
        thumbnail: "./assets/2021-05-08-slides-angular-performance-tuning-kenya.png",
    },
    {
        name: "Angular Kharkiv Meetup #10",
        link: "./2021-04-29-slides-angular-kharkiv-10.html",
        date: "Apr 29, 2021",
        thumbnail: "./assets/2021-04-29-slides-angular-kharkiv-10.png",
    },
    {
        name: "Angular Pro",
        link: "./2021-02-11-slides-angular-pro-2021.html",
        date: "Feb 10, 2021",
        thumbnail: "./assets/2021-02-11-slides-angular-pro-2021.png",
    },
    {
        name: "Angular Kenya - Scully like an alternative to SSR",
        link: "./2021-01-17-slides-angular-kenya-scully-like-an-alternative-to-ssr.html",
        date: "Jan 17, 2021",
        thumbnail: "./assets/2021-01-17-slides-angular-kenya-scully-like-an-alternative-to-ssr.png",
    },
    {
        name: "Angular Kharkiv Meetup #9",
        link: "./2020-12-16-slides-angular-kharkiv-9.html",
        date: "Dec 16, 2020",
        thumbnail: "./assets/2020-12-16-slides-angular-kharkiv-9.png",
    },
    {
        name: "Scully like an alternative to SSR",
        link: "./2020-11-28-slides-scully-like-an-alternative-to-ssr.html",
        date: "Nov 28, 2020",
        thumbnail: "./assets/2020-11-28-slides-scully-like-an-alternative-to-ssr.png",
    },
    {
        name: "Angular Kharkiv Meetup #8",
        link: "./2020-08-11-slides-angular-kharkiv-8.html",
        date: "Aug 11, 2020",
        thumbnail: "./assets/2020-08-11-slides-angular-kharkiv-8.png",
    },
    {
        name: "Angular Crash Course",
        link: "./2020-07-07-slides-angular-crash-course.html",
        date: "Jul 07, 2020",
        thumbnail: "./assets/2020-07-07-slides-angular-crash-course.png",
    },
    {
        name: "Angular Pro",
        link: "./2020-03-11-slides-angular-pro-4f650f.html",
        date: "Mar 11, 2020",
        thumbnail: "./assets/2020-03-11-slides-angular-pro-4f650f.png",
    },
    {
        name: "Angular Security Culture",
        link: "./2019-08-31-slides-angular-security-culture.html",
        date: "Oct 31, 2019",
        thumbnail: "./assets/2019-08-31-slides-angular-security-culture.png",
    },
    {
        name: "KharkivJs - Security in Web",
        link: "./2019-08-01-slides-web-security-20.html",
        date: "Aug 1, 2019",
        thumbnail: "./assets/2019-08-01-slides-web-security-20.png",
    },
    {
        name: "DevDays - Web Security",
        link: "./2019-04-30-slides-devdays2019-web-security.html",
        date: "Apr 30, 2019",
        thumbnail: "./assets/2019-04-30-slides-devdays2019-web-security.png",
    },
    {
        name: "Angular Master Class @ Tinkoff",
        link: "./2019-04-05-slides-angular-master-class-tinkoff.html",
        date: "Apr 5, 2019",
        thumbnail: "./assets/2019-04-05-slides-angular-master-class-tinkoff.png",
    },
    {
        name: "Javascript Workshop @ Softhouse",
        link: "./2019-01-23-slides-advanced-javascript.html",
        date: "Jan 23, 2019",
        thumbnail: "./assets/2019-01-23-slides-advanced-javascript.png",
    },
    {
        name: "Web Security @ Softhouse", 
        link: "./2019-01-23-slides-web-security.html",
        date: "Jan 23, 2019",
        thumbnail: "./assets/2019-01-23-slides-web-security.png",
    },
    {
        name: "Angular Master Class @ Luxoft",
        link: "./2018-12-25-slides-angular-master-class-luxoft.html",
        date: "Dec 25, 2018",
        thumbnail: "./assets/2018-12-25-slides-angular-master-class-luxoft.png",
    },
    {
        name: "Use Angular CLI in a Full Mode",
        link: "./2018-06-24-slides-angular-cli-14.html",
        date: "Jun 24, 2018",
        thumbnail: "./assets/2018-06-24-slides-angular-cli-14.png",
    },
    {
        name: "Angular Karkiv Meetup #3",
        link: "./2018-05-04-slides-ngkha3.html",
        date: "May 4, 2018",
        thumbnail: "./assets/2018-05-04-slides-ngkha3.png",
    },
    {
        name: "ng-conf - Brief Review",
        link: "./2018-04-22-slides-deck-11.html",
        date: "Apr 22, 2018",
        thumbnail: "./assets/2018-04-22-slides-deck-11.png",
    },
    {
        name: "ngVikings - Thoughts about Angular CLI",
        link: "./2018-02-27-slides-ng-install-11.html",
        date: "Feb 27, 2018",
        thumbnail: "./assets/2018-02-27-slides-ng-install-11.png",
    },
    {
        name: "@ngkharkiv Second Edition",
        link: "./2018-02-23-slides-deck-9.html",
        date: "Feb 23, 2018",
        thumbnail: "./assets/2018-02-23-slides-deck-9.png",
    },
    {
        name: "Thoughts about Angular CLI",
        link: "./2018-01-01-slides-ng-install.html",
        date: "Jan 1, 2018",
        thumbnail: "./assets/2018-01-01-slides-ng-install.png",
    },
    {
        name: "Angular Master Class @ Codewise",
        link: "./2017-07-16-slides-angular-master-class.html",
        date: "July 16, 2017",
        thumbnail: "./assets/2017-07-16-slides-angular-master-class.png"
    },
    {
        name: "Error Handling",
        link: "./2017-03-31-slides-error.html",
        date: "March 31, 2017",
        thumbnail: "./assets/2017-03-31-slides-error.png"
    },
    {
        name: "Does AngularJS have performance issues?",
        link: "./2015-05-30-slides-does-angularjs-have-performance-issues-2.html",
        date: "May 30, 2015",
        thumbnail: "./assets/2015-05-30-slides-does-angularjs-have-performance-issues-2.png"
    },
    {
        name: "Chome Dev Tools - Nothing New",
        link: "./2015-02-14-slides-chrome-development.html",
        date: "Feb 14, 2015",
        thumbnail: "./assets/2015-02-14-slides-chrome-development.png"
    },
];

const presentationGrid = document.getElementById('presentationGrid');

presentations.forEach(presentation => {
    const card = document.createElement('div');
    card.className = 'presentation-card';

    card.innerHTML = `
        <a href="${presentation.link}" target="_blank">
            <img src="${presentation.thumbnail}" alt="${presentation.name}">
            <div class="card-content">
                <h2>${presentation.name}</h2>
                <p>Date: ${presentation.date}</p>
            </div>
        </a>
    `;

    presentationGrid.appendChild(card);
});