import { Component } from "@angular/core";

@Component({
    selector: "max-work",
    templateUrl: './work.html'
})
export class WorkPage {
    public works: Array<any>;
    
    public constructor() {
        this.works = [
            {
                name: 'Driving Theory Malta',
                description: 'This is a free webapp I\'ve built for my wife to help study Maltese driving theory and afterwards made it public for purposes to provide free education and test example for people studying Malta Driving Theory.',
                image: 'drivingtheory.png',
                url: 'https://drivingtheory.maxorlovsky.com',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'UniCon eSports',
                description: 'UniCon eSports, branch of UniCon Latvia responsible for Esports',
                image: 'unicon-esports.png',
                url: 'https://esports.unicon.lv',
                html: true,
                js: true,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'StarVegas.es (Greentube)',
                description: 'Online Casino for Spanish market. Did development of a project in a team and new features afterwards. Symphony CMS and internal API was used for storring config and data in database. XSLT as templating system.',
                image: 'starvegas-es.png',
                url: 'https://www.starvegas.es',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'FenikssCasino.Lv (Greentube)',
                description: 'Online Casino for Spanish market. Did development of a project in a team and new features afterwards. Symphony CMS and internal API was used for storring config and data in database. XSLT as templating system.',
                image: 'fenikss.png',
                url: 'https://www.feniksscasino.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Pentaclick eSports',
                description: 'My biggest yet pet project. Project is about "eSports" or competitive gaming. Website with difficult tournament management system.',
                image: 'pcesports.png',
                url: 'http://www.pcesports.com',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Brandingstart',
                description: 'Heavy Frontend project. Unfortunatelly used jQuery to build it, not worth it, but great experience. A lot of animations.',
                image: 'brandingstart.png',
                url: 'http://www.brandingstart.com',
                html: true,
                js: true,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Velobox',
                description: 'Relatively simple project, written using my CMS as WordPress didn\'t match requirements. There are 3 access points for different panels required for different people, with advance access system.',
                image: 'velobox.png',
                url: 'http://www.velobox.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'SoftBinary (Egamings)',
                description: 'Company "business card" website, plain and simple, no CMS.',
                image: 'softbinary.png',
                url: 'http://www.softbinary.com',
                html: true,
                js: true,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Egamings',
                description: 'Company "business card" website, developed using WordPress. Owned by Egamings of course, developed by me.',
                image: 'egamings.png',
                url: 'https://www.egamings.com',
                html: true,
                js: true,
                css: false,
                php: true,
                db: false
            },
            {
                name: 'Grand Rio (Egamings)',
                description: 'Online casino build on made by our team White Label Casino solutions. It was second after Binarium.',
                image: 'grandrio-com.png',
                url: 'https://www.grandrio.com',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Binarium (Egamings)',
                description: 'Egamings.com project is not owned but build by me. Website was written in a mix of frameworks and CMSes that were used. Too much to describe in this small block.',
                image: 'binarium.png',
                url: 'https://www.binarium.ru',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Elbors',
                description: 'Another WordPress project and another "business card" website.',
                image: 'elbors.png',
                url: 'http://www.elbors.lv',
                html: true,
                js: false,
                css: true,
                php: true,
                db: false
            },
            {
                name: 'Kuhni Belarusi',
                description: 'Really simple project of take HTML and put it in WordPress.',
                image: 'kuhnibelarusi.png',
                url: 'http://www.kuhnibelarusi.lv',
                html: false,
                js: false,
                css: false,
                php: true,
                db: false
            },
            {
                name: 'Aquarius',
                description: 'Another "business card" website, that do Sea shipping. Just to display what company is doing and general stuff.',
                image: 'aquarius.png',
                url: 'http://www.aquarius.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Project Adviser',
                description: '"Business card" website, for jurisdictional company. Only HTML & CSS layout.',
                image: 'project-adviser.png',
                url: 'http://www.projectadviser.lv',
                html: true,
                js: false,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Vulkan',
                description: 'Latvian Casino website. Just another "business card" website, with some interesting functionality.',
                image: 'vulkan.png',
                url: 'http://www.vulkan.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'TrainingInfo (UniWeb)',
                description: 'UniWeb.be project is not owned by me. Worked on it for a long time, this project was really interesting to work with as there was a lot of interesting problems that I had to solve regarding backend/sql side.',
                image: 'traininginfo.png',
                url: 'http://www.traininginfo.be',
                html: false,
                js: true,
                css: false,
                php: true,
                db: true
            },
            {
                name: 'Secure password tool (UniWeb)',
                description: 'UniWeb.be project is not owned but build by me. Tool created only by myself on the backend side. Secure tool to transfer passwords between company and clients',
                image: 'spt.png',
                url: 'https://password.uniweb.be/',
                html: false,
                js: true,
                css: false,
                php: true,
                db: true
            },
            {
                name: 'Poster',
                description: 'Interesting project with heavy Frontend side. Website giving ability using jQuery to create personalised post cards and wallets.',
                image: 'poster.png',
                url: '',
                html: true,
                js: true,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Tiens 4 You',
                description: 'Social marketing website that I didn\'t build from the start. Many freelancers worked on it before and after me. I was implementing few social features on the website such as chats and extending "tree level system".',
                image: 'tiens4you.png',
                url: 'http://www.tiens4you.eu',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Weekend in Riga',
                description: 'Project for tourists visiting Riga, who interested in city night life. Website offering an easy and interactive catalog where you can order interesting offers.',
                image: 'wir.png',
                url: 'http://www.weekendinriga.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'BSL Pro',
                description: 'Website "business card" for a company doing foundry, hydraulics etc',
                image: 'bslpro.png',
                url: 'http://www.bslpro.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Davay-Davay',
                description: 'Project for people in Germany who would like to learn Russian language, e-commerce involved',
                image: 'davay-davay.png',
                url: 'http://www.davay-davay.de',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Bithill',
                description: 'Project to monitor, buy and sell bitcoin. Only HTML and CSS work was done.',
                image: 'bithill.jpg',
                url: '',
                html: true,
                js: false,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Ir Atbildes',
                description: 'Question/Answer forum with possibility to ask only experts to reply on the question. SMF forum engine was used to kick off this project.',
                image: 'iratbildes.png',
                url: 'http://www.iratbildes.lv',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Together 888',
                description: 'Social network project that was given to me for full technical support, that include server side as well and implementing of the new features.',
                image: 'together888.png',
                url: 'http://www.together888.net',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'PostScriptum',
                description: 'Necrolog database. With psychologist experts providing their help. Website is heavy on both frontend and backend sides',
                image: 'postscriptum.png',
                url: 'http://www.postscriptum.ru',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'VMail',
                description: 'Another heavy Frontend project when Frontend wasn\'t even a thing yet. This was planned as GMail killer for Latvian market, that concentrated and promoted mostly video mails.',
                image: 'vmail.png',
                url: 'http://www.vmail.lv',
                html: true,
                js: false,
                css: true,
                php: true,
                db: false
            },
            {
                name: '7 Sky',
                description: 'Event organizing website, extended Christmas and New Year ever section',
                image: '7sky.png',
                url: 'http://www.7sky.lv',
                html: true,
                js: false,
                css: true,
                php: true,
                db: false
            },
            {
                name: 'Trip On Easy',
                description: 'Discount tickets website like GroupOn. That concentrate on trips.',
                image: 'tripon.png',
                url: 'http://www.triponeasy.com',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Latspas',
                description: 'HTML/Styling job, nothing fancy',
                image: 'latspas.png',
                url: '',
                html: true,
                js: false,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Asia Cargo',
                description: 'Logistic website for Asia market. Was backend heavy, as simple logistics website was merged with a lot of social network features. Project was successful, but was killed by client buying black SEO resulting in site being blocked in all search engines.',
                image: 'asiacargo.png',
                url: 'http://www.asiacargo.ru',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'RentRiga.Eu',
                description: 'Website that was really heavy on database side. Portal for brokers. To create catalog of house and flat rentals. It was planned to start with Europe and grow to have database through the world. Project did not survived for long though.',
                image: 'rentriga.png',
                url: '',
                html: false,
                js: true,
                css: false,
                php: true,
                db: true
            },
            {
                name: 'Ragnarok Online TM',
                description: 'Website for my old Pet project, Ragnarok Online private server. Was one of the massive projects I\'ve done at that time as it require connection with a lot of different products and services to work.',
                image: 'ragnarok.png',
                url: '',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Modno.Lv',
                description: 'HTML/Styling job, nothing fancy',
                image: 'modno.png',
                url: 'http://www.modno.lv',
                html: true,
                js: false,
                css: true,
                php: false,
                db: false
            },
            {
                name: 'Nature & Life',
                description: 'Shop project, written using OpenCart engine. Lot of rewrites of core functionality to match shop requirements.',
                image: 'naturelife.png',
                url: 'http://www.naturelifegmbh.com',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'iCreative',
                description: 'This was a challenging project as it was heavy on the Frontend side in 2009. Back then Frontend wasn\'t even a thing yet and only jQuery lib existed.',
                image: 'icreative.png',
                url: 'http://www.icreative.ru',
                html: true,
                js: true,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'Grand-1',
                description: 'My first website build from scratch using PHP+MySQL+CSV. It was a corporate webshop for webshops in Latvia. PHP+MySQL was used for basic functionality and CSV "database" was used for product list, for managers comfort.',
                image: 'grand1.png',
                url: 'http://www.grand1.lv',
                html: true,
                js: false,
                css: true,
                php: true,
                db: true
            },
            {
                name: 'GrandShop',
                description: 'First website I worked on. Initially written by different company. My responsibility was developing of new features, change of styles and rewriting outdated features.',
                image: 'grandshop.png',
                url: 'http://www.grandshop.lv',
                html: true,
                js: false,
                css: true,
                php: true,
                db: false
            },
        ];
    }
}