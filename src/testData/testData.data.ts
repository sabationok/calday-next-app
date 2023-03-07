import images from '@/img';

export const navLinks = [
  { name: 'Features', path: '#' },
  { name: 'UseCases', path: '#' },
  { name: 'Blog', path: '#' },
  { name: 'FAQ', path: '#' },
  { name: 'Pricing', path: '#' },
];

export const heroData = {
  title: 'Small Business Scheduling Software',
  subTitle:
    'Our appointment scheduler allows you to easily manage your appointments, send automated reminders, and customize your availability. Plus, with our intuitive interface and powerful features',
  profitsList: [
    {
      id: '1',
      icon: images.icon_timer,
      alt: 'icon_timer',
      title: '24/7 booking',
      descr: 'Clients can schedule appointments while you are sleeping',
    },
    {
      id: '2',
      icon: images.icon_alert,
      alt: 'icon_alert',
      title: 'Less no-shows',
      descr: 'We will remind your clients about upcoming appointments',
    },
    {
      id: '3',
      icon: images.icon_clipboard_blue,
      alt: 'icon_clipboard_blue',
      title: 'No empty slots',
      descr: 'Waitlist can help you to feel canceled appointments',
    },
    {
      id: '4',
      icon: images.icon_phonebook,
      alt: 'icon_phonebook',
      title: 'Manage Clients',
      descr: 'Store & manage clients info and contacts',
    },
  ],
};

export const createEventFormData = {
  note: '*You will be able setup event details later',
  eventInputPlaceholder: 'Enter event title',
  eventInputName: 'eventName',
  timeInputName: 'eventTime',
  timeInputPlaceholder: '30 min',
  submitButtonName: 'Get your link',
  submitButtonNameMobile: 'Get your scheduling link',
};

export const featuresSectionData = {
  title: 'Features',
  featuresList: [
    {
      id: '1',
      icon: images.icon_calendar,
      alt: 'icon calendar',
      title: 'Appointment Calendar',
      descr:
        'Use free slots feature to get the best time for scheduling new appointment or add breaks to relax',
      imgURL: '',
    },
    {
      id: '2',
      icon: images.icon_store,
      alt: 'icon store',
      title: 'Personal Booking Page for Clients',
      descr:
        "We've taken the best practices from the most popular calendar applications to make our the best",
      imgURL: '',
    },
    {
      id: '3',
      icon: images.icon_clipboard,
      alt: 'icon clipboard',
      title: 'Waitlist',
      descr:
        'Use free slots feature to get the best time for scheduling new appointment or add breaks to relax',
      imgURL: '',
    },
    {
      id: '4',
      icon: images.icon_mail_inbox,
      alt: 'icon mail inbox',
      title: 'Reminders for You and Your Clients',
      descr:
        'Use free slots feature to get the best time for scheduling new appointment or add breaks to relax',
      imgURL: '',
    },
  ],
  integrations: {
    title: ' Integrate with your workflow',
    subTitle: 'Streamline operations and improve efficiency in any industry.',
    integrationsList: [
      {
        id: '1',
        icon: images.icon_google_calendar,
        alt: 'icon calendar',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        id: '2',
        icon: images.icon_monday_ten,
        alt: 'icon monday ten',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        id: '3',
        icon: images.icon_zoom,
        alt: 'icon zoom',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        id: '4',
        icon: images.icon_google_meet,
        alt: 'icon google meet',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
    ],
  },
};

export const shedulingSectionData = {
  title: 'Scheduling that adapts to any business',
  subTitle: 'Streamline operations and improve efficiency in any industry.',
  list: [
    {
      transfer: {
        from: 'Teacher',
        to: 'Student',
      },
      transferColor: '#62C45B',
      descrList: [
        'Track assignments.',
        ' Manage classes.',
        '  Plan lessons.',
        ' Track progress.',
        ' Monitor grades.',
      ],
    },
    {
      transfer: {
        from: 'Business',
        to: 'Client',
      },
      transferColor: '#EA8C1F',
      descrList: [
        'Track assignments.',
        ' Manage classes.',
        '  Plan lessons.',
        ' Track progress.',
        ' Monitor grades.',
      ],
    },
    {
      transfer: {
        from: 'Expert',
        to: 'Folows',
      },
      transferColor: '#5B6CC4',
      descrList: [
        'Track assignments.',
        ' Manage classes.',
        '  Plan lessons.',
        ' Track progress.',
        ' Monitor grades.',
      ],
    },
    {
      transfer: {
        from: 'Trainer',
        to: 'Trainee',
      },
      transferColor: '#C45B5B',
      descrList: [
        'Track assignments.',
        ' Manage classes.',
        '  Plan lessons.',
        ' Track progress.',
        ' Monitor grades.',
      ],
    },
  ],
};

export const faqSectionData = {
  faqList: [
    {
      id: '1',
      title: 'What is booking page?',
      descr:
        'We are planning on adding an integration with Google Meet first, which will be followed by Zoom.',
    },
    {
      id: '2',
      title: 'Does you have integration with Meet and Zoom?',
      descr:
        'We are planning on adding an integration with Google Meet first, which will be followed by Zoom.',
    },
    {
      id: '3',
      title: 'Does you have integration with Google Calendar and iCal?',
      descr:
        'We are planning on adding an integration with Google Meet first, which will be followed by Zoom.',
    },
    {
      id: '4',
      title: 'How works waitlist feature?',
      descr:
        'We are planning on adding an integration with Google Meet first, which will be followed by Zoom.',
    },
  ],
};

export const buyNowSectionData = {
  title: 'Small Business Scheduling',
  subtitle:
    'We help to organize tasks, appointments, and events, allowing users to save time and increase productivity',
  pricingPeriods: [
    { id: '1', title: 'Week' },
    { id: '2', title: 'Month' },
    { id: '3', title: 'Year' },
  ],
  descr:
    'We help to organize tasks, appointments, and events, allowing users to save time and increase productivity',
};

// outlinedSmall: {
//   backgroundColor: '#372F2A',
//   borderColor: '#D8B681',
//   fill: '#FFF06B',
//   color: '#40464E',
//   backgroundColorHover: '#372F2A',
//   borderColorHover: '#EA8C1F',
//   fillHover: '#EA8C1F',
//   colorHover: '#40464E',
//   backgroundColorActive: '#F7F6F0',
//   borderColorActive: '#E9E7DD',
//   fillActive: '#40464E',
//   colorActive: '#40464E',
//   borderRadius: '100px',
//   fontSize: '14px',
//   lineHeight: '0.93',
//   minHeight: '36px',
//   minWidth: '127px',
//   padding: '10px 19px',
// },
