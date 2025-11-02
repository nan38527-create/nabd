const routeData = [
    { id: 1, title: "Burj Khalifa", time: "10:00 AM - 12:00 PM", icon: "fa-landmark", coords: [25.1972, 55.2744], crowdLevel: 95 },
    { id: 2, title: "The Dubai Mall", time: "12:30 PM - 3:00 PM", icon: "fa-shopping-bag", coords: [25.1983, 55.2795], crowdLevel: 85 },
    { id: 3, title: "Lunch at Time Out Market", time: "3:00 PM - 4:00 PM", icon: "fa-utensils", coords: [25.2028, 55.2833], crowdLevel: 80 },
    { id: 4, title: "Dubai Fountain Show", time: "6:00 PM", icon: "fa-water", coords: [25.1959, 55.2758], crowdLevel: 90 }
];

const suggestionsData = [
    { title: "Coffee Break at % Arabica", info: "Famous for its minimalist design and great coffee.", icon: "fa-coffee", realTime: false, rating: 4.5, coords: [25.1990, 55.2790] },
    { title: "Ice Rink Fun", info: "Escape the heat at the Dubai Ice Rink.", icon: "fa-snowflake", realTime: false, rating: 4.4, coords: [25.1975, 55.2785] },
    { title: "Light Traffic Alert", info: "Roads around Downtown are clear. Good time to travel!", icon: "fa-traffic-light", realTime: true, rating: null, coords: null },
    { title: "Sunset Photo Spot", info: "Head to the waterfront for amazing sunset views of Burj Khalifa.", icon: "fa-camera", realTime: true, rating: null, coords: [25.1945, 55.2730] }
];