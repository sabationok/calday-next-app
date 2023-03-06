import images from '@/img';

export const advantagesList = [
  {
    iconId: '',
    title: '24/7 booking',
    descr: 'Clients can schedule appointments while you are sleeping',
  },
  {
    iconId: '',
    title: 'Less no-shows',
    descr: 'We will remind your clients about upcoming appointments',
  },
  {
    iconId: '',
    title: 'No empty slots',
    descr: 'Waitlist can help you to feel canceled appointments',
  },
  {
    iconId: '',
    title: 'Manage Clients',
    descr: 'Store & manage clients info and contacts',
  },
];

export const heroData = {
  title: 'Small Business Scheduling Software',
  subTitle:
    'Our appointment scheduler allows you to easily manage your appointments, send automated reminders, and customize your availability. Plus, with our intuitive interface and powerful features',
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
      icon: images.icon_calendar,
      alt: 'icon calendar',
      title: 'Appointment Calendar',
      descr:
        'Use free slots feature to get the best time for scheduling new appointment or add breaks to relax',
      imgURL: '',
    },
    {
      icon: images.icon_store,
      alt: 'icon store',
      title: 'Personal Booking Page for Clients',
      descr:
        "We've taken the best practices from the most popular calendar applications to make our the best",
      imgURL: '',
    },
    {
      icon: images.icon_clipboard,
      alt: 'icon clipboard',
      title: 'Waitlist',
      descr:
        'Use free slots feature to get the best time for scheduling new appointment or add breaks to relax',
      imgURL: '',
    },
    {
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
        icon: images.icon_calendar,
        alt: 'icon calendar',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        icon: images.icon_monday_ten,
        alt: 'icon monday ten',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
        icon: images.icon_zoom,
        alt: 'icon zoom',
        descr:
          "Integrate with Google Calendar to ensure you're never double booked.",
      },
      {
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
