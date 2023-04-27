import { reactive } from 'vue';

export const store = reactive({
    cards: [
        {
            icon: 'svg-1.svg',
            name: 'Audit & Assurance',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: 'svg-2.svg',
            name: 'Financial Advisory',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: 'svg-3.svg',
            name: 'Analytics and M&A',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: 'svg-4.svg',
            name: 'Middel Marketing',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: 'svg-5.svg',
            name: 'Legal Consulting',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: 'svg-6.svg',
            name: 'Regulatory Risk',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },

    ],
    company: [
        {
            icon: '',
            title: 'Tradition',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '',
            title: 'Security',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '',
            title: 'Certificate',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '',
            title: 'Expertise',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
        },
    ],
    projects: [
        {
            text: 'Accademic professional program in social media',
            image: 'project-1.jpg'
        },
        {
            text: "President's speech at the annual meeting",
            image: 'project-2.jpg'
        },
        {
            text: 'International business trip in Shangai',
            image: 'project-3.jpg'
        },
        {
            text: 'Technology workshop with education theme',
            image: 'project-4.jpg'
        },
        {
            text: 'Donation of clothes and food to the partner NGO',
            image: 'project-5.jpg'
        },
        {
            text: 'Confraternization of the procurement team',
            image: 'project-6.jpg'
        },
    ],
    resultsImage: [
        'logo-4.png',
        'logo-5.png',
        'logo-1.png',
        'logo-2.png',
        'logo-3.png',
        'logo-4.png',
    ],
    info: [
        {
            text: '+1 (305) 1234-5678',
            item: 'fas fa-phone-alt'
        },
        {
            text: 'hello@example.com',
            item: 'fas fa-envelope'
        },
        {
            text: 'Main Avenue, 987',
            item: 'fas fa-map-marker-alt'
        }
    ],
    footer: [
        {
            title: 'About',
            list: [
                'The Company',
                'Institutional',
                'Social & Events',
                'Innovation',
                'Enviroment',
                'Technology'
            ]
        },
        {
            title: 'Services',
            list: [
                'Audit & Assurance',
                'Financial Advisory',
                'Analytics M&A',
                'Middle Marketing',
                'Legal Consulting',
                'Regulatory Risk'
            ]
        },
        {
            title: 'Support',
            list: [
                'Responsability',
                'Terms of Use',
                'About Cookies',
                'Privacy Policy',
                'Accessibility',
                'Information'
            ]
        }
    ]
    
})