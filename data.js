const routeData = [
    { id: 1, title: "Burj Khalifa", time: "10:00 AM - 12:00 PM", icon: "fa-landmark", coords: [25.1972, 55.2744], crowdLevel: 95, isHigh: true },
    { id: 2, title: "The Dubai Mall", time: "12:30 PM - 3:00 PM", icon: "fa-shopping-bag", coords: [25.1983, 55.2795], crowdLevel: 85 },
    { id: 3, title: "Lunch at Time Out Market", time: "3:00 PM - 4:00 PM", icon: "fa-utensils", coords: [25.2028, 55.2833], crowdLevel: 80 },
    { id: 4, title: "Dubai Fountain Show", time: "6:00 PM", icon: "fa-water", coords: [25.1959, 55.2758], crowdLevel: 90 }
];

const suggestionsData = [
    { title: "Coffee Break at % Arabica", info: "Famous for its minimalist design and great coffee.", icon: "fa-coffee", realTime: false, rating: 4.5, coords: [25.1990, 55.2790], crowdLevel: 75 },
    { title: "Ice Rink Fun", info: "Escape the heat at the Dubai Ice Rink.", icon: "fa-snowflake", realTime: false, rating: 4.4, coords: [25.1975, 55.2785], crowdLevel: 85 },
    { title: "Light Traffic Alert", info: "Roads around Downtown are clear. Good time to travel!", icon: "fa-traffic-light", realTime: true, rating: null, coords: null },
    { title: "Quiet Park Bench", info: "A peaceful spot in Safa Park to relax and read.", icon: "fa-leaf", realTime: false, rating: 4.6, coords: [25.1958, 55.2444], crowdLevel: 20 }
];

const luxuryRestaurantsData = [
    { name: "At.mosphere, Burj Khalifa", info: "Fine dining on the 122nd floor.", icon: "fa-utensils", coords: [25.1972, 55.2744], price: "$$$$", calories: "Avg. 800-1200", isHigh: true },
    { name: "Pierchic", info: "Elegant seafood over the water.", icon: "fa-fish", coords: [25.1383, 55.1821], price: "$$$$", calories: "Avg. 700-1100" },
    { name: "Zuma Dubai", info: "Contemporary Japanese cuisine.", icon: "fa-sushi", coords: [25.2145, 55.2768], price: "$$$", calories: "Avg. 600-1000" },
    { name: "La Petite Maison", info: "Chic French-Mediterranean dishes.", icon: "fa-wine-glass-alt", coords: [25.2134, 55.2771], price: "$$$", calories: "Avg. 750-1150" }
];