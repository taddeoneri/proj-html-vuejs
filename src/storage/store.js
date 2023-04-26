import { reactive } from 'vue';

export const store = reactive({
    cards: [
        {
            icon: '../assets/image/svg-1.svg',
            name: 'Audit & Assurance',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '../assets/image/svg-2.svg',
            name: 'Financial Advisory',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '../assets/image/svg-3.svg',
            name: 'Analytics and M&A',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '../assets/image/svg-4.svg',
            name: 'Middel Marketing',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '../assets/image/svg-5.svg',
            name: 'Legal Consulting',
            par: 'Lorem ipsum solor sit amet consectetur adipiscing elit.'
        },
        {
            icon: '../assets/image/svg-6.svg',
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
    ]
    
})