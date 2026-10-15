// All mock data for the Planned onboarding concept. Every company, person and venue is fictional.
window.PLANNED_DATA = {
  company: {
    name: "Fernway",
    size: "8,000 people",
    policyLimit: 20000,
    approver: "Jordan Lee",
    approverRole: "Finance",
    card: "Fernway corporate card •• 4417",
    costCentre: "Product · 4100",
    hotels: "Belvédère, Maison Nord",
    currency: "CAD"
  },
  planner: { name: "Maya", fullName: "Maya Chen", role: "Executive Assistant to the VP Product" },
  supplier: { name: "Sophie", fullName: "Sophie Tremblay", venue: "The Foundry Loft", site: "thefoundryloft.example" },

  // Flow A: planner intake
  eventTypes: [
    { id: "offsite", label: "Team offsite", icon: "offsite", title: "Product team offsite" },
    { id: "dinner", label: "Team dinner", icon: "dinner", title: "Product team dinner" },
    { id: "kickoff", label: "Sales kickoff", icon: "kickoff", title: "Sales kickoff" },
    { id: "client", label: "Client event", icon: "client", title: "Client event" },
    { id: "workshop", label: "Workshop or training", icon: "workshop", title: "Product team workshop" },
    { id: "holiday", label: "Holiday party", icon: "holiday", title: "Product holiday party" },
    { id: "board", label: "Board meeting", icon: "board", title: "Board meeting" },
    { id: "other", label: "Something else", icon: "other", title: "Product team event" }
  ],
  originCities: [
    { id: "tor", label: "Toronto", count: 10 },
    { id: "mtl", label: "Montreal", count: 8 },
    { id: "nyc", label: "New York", count: 6 }
  ],
  extraCity: { id: "ott", label: "Ottawa", count: 0 },
  flexibility: ["Exact dates", "± 1 week", "Any time that month"],
  durations: [
    { id: "half", label: "Half day", days: 0.5 },
    { id: "1", label: "1 day", days: 1 },
    { id: "2", label: "2 days", days: 2 },
    { id: "3", label: "3 days", days: 3 }
  ],
  destinations: [
    { id: "mtl", label: "Montreal", travel: "1h 20m", note: "Recommended: shortest average travel", art: "city" },
    { id: "tor", label: "Toronto", travel: "1h 35m", note: "", art: "rooftop" },
    { id: "ott", label: "Ottawa", travel: "1h 50m", note: "", art: "historic" }
  ],
  feelPairs: [
    { id: "style", a: { id: "historic", label: "Historic character" }, b: { id: "modern", label: "Modern minimal" } },
    { id: "setting", a: { id: "city", label: "City buzz" }, b: { id: "retreat", label: "Quiet retreat" } },
    { id: "pace", a: { id: "structured", label: "Structured agenda" }, b: { id: "social", label: "Loose and social" } },
    { id: "view", a: { id: "rooftop", label: "Rooftop views" }, b: { id: "lakeside", label: "Lakeside" } }
  ],
  mustHaves: ["Meeting room", "Group dinner", "Team activity", "Overnight rooms", "AV and screens", "Breakout rooms"],
  dietary: ["Vegetarian", "Vegan", "Gluten-free", "Halal", "Kosher", "Nut allergy"],
  access: ["Step-free access", "Hearing loop", "Quiet room"],
  priorities: ["Cost", "Location", "Wow factor", "Convenience"],

  // Plan Preview: index = number of intake answers given so far
  venueCounts: [3860, 1120, 640, 212, 86, 23, 14, 14],
  ranges: { start: "$9k–$38k", budget: "$15k–$21k", feel: "$16k–$19.5k" },

  building: [
    "Applying Fernway's event policy",
    "Matching 14 venues in Montreal",
    "Checking live rates and availability",
    "Pairing catering and an activity",
    "Fitting it to your budget"
  ],

  agenda: [
    { day: "Day 1 · Wed, Nov 18", items: [["9:00", "Arrival and coffee"], ["9:30", "Strategy session"], ["12:30", "Lunch"], ["14:00", "Workshop"], ["17:00", "Cooking class"], ["19:30", "Group dinner"]] },
    { day: "Day 2 · Thu, Nov 19", items: [["8:30", "Breakfast"], ["9:00", "Working session"], ["12:30", "Lunch"], ["15:00", "Wrap-up"]] }
  ],

  // Plan options. Component prices sum to each option's total.
  options: [
    {
      id: "best", label: "Best match", venue: "The Foundry Loft",
      components: [
        { kind: "Venue", art: "loft", name: "The Foundry Loft", detail: "Old Montreal · boardroom for 24, main hall for the workshop", price: 5800, status: "bookable",
          why: "Historic character, fits 24 boardroom-style, 25 min from the airport",
          alts: [
            { art: "modern", name: "Atelier 19", detail: "Griffintown · modern loft, one room", price: 3900, status: "bookable", why: "Lower cost, one shared room for both days" },
            { art: "historic", name: "Salle Bonsecours", detail: "Old Port · former bank hall", price: 6400, status: "estimate", why: "Grand historic hall, 10 min walk from the hotel" }
          ] },
        { kind: "Catering", art: "catering", name: "Petit Four Catering", detail: "2 days of breakfast, lunch and breaks", price: 4560, status: "bookable",
          why: "Covers 3 vegetarian and 1 gluten-free guests",
          alts: [
            { art: "catering", name: "Marché Vert", detail: "Plant-forward menu, 2 days", price: 4120, status: "bookable", why: "Fully vegetarian, lower cost" },
            { art: "catering", name: "Maison Duval Traiteur", detail: "Plated lunches, 2 days", price: 5340, status: "estimate", why: "Seated lunches for a more formal feel" }
          ] },
        { kind: "Group dinner", art: "dinner", name: "Bistro Ardoise", detail: "Private room, set menu for 24", price: 2880, status: "estimate",
          why: "Private room for 24, a 6 min walk from the venue",
          alts: [
            { art: "dinner", name: "Taverne du Port", detail: "Long table, family style", price: 2160, status: "bookable", why: "Loose and social, lower cost" },
            { art: "rooftop", name: "Terrasse Sept", detail: "Rooftop dining room", price: 3480, status: "estimate", why: "City views for a bigger moment" }
          ] },
        { kind: "Activity", art: "cooking", name: "Mise en Place Cooking Studio", detail: "Team cooking class, 2 hours", price: 1920, status: "confirming",
          why: "A hands-on activity that fits between the workshop and dinner",
          alts: [
            { art: "city", name: "Old Montreal food walk", detail: "Guided, 90 minutes", price: 1180, status: "bookable", why: "Outdoors, lower cost" },
            { art: "social", name: "Atelier Céramique", detail: "Pottery workshop, 2 hours", price: 2160, status: "bookable", why: "Calm and creative, everyone takes a piece home" }
          ] },
        { kind: "Rooms", art: "hotel", name: "Hôtel Belvédère", detail: "10 rooms × 1 night", price: 2490, status: "bookable",
          why: "For the 16 travelling guests; Fernway-preferred brand",
          alts: [
            { art: "hotel", name: "Maison Nord", detail: "10 rooms × 1 night", price: 2290, status: "bookable", why: "Fernway-preferred, 12 min walk to the venue" },
            { art: "historic", name: "Le Saint-Paul", detail: "10 rooms × 1 night", price: 3150, status: "estimate", why: "Boutique hotel next door to the venue" }
          ] },
        { kind: "AV", art: "av", name: "Screens, mics and video call kit", detail: "Supplied by the venue", price: 0, status: "included", why: "", alts: [] }
      ]
    },
    {
      id: "lower", label: "Lower cost", venue: "Atelier 19",
      components: [
        { kind: "Venue", art: "modern", name: "Atelier 19", detail: "Griffintown · modern loft, one room for both days", price: 3900, status: "bookable", why: "Fits 24, modern minimal, 20 min from the airport", alts: [] },
        { kind: "Catering", art: "catering", name: "Petit Four Catering", detail: "2 days of breakfast and lunch", price: 3980, status: "bookable", why: "Covers 3 vegetarian and 1 gluten-free guests", alts: [] },
        { kind: "Group dinner", art: "dinner", name: "Taverne du Port", detail: "Long table, family style", price: 2160, status: "bookable", why: "Loose and social, close to the venue", alts: [] },
        { kind: "Activity", art: "city", name: "Old Montreal food walk", detail: "Guided, 2 hours", price: 1670, status: "bookable", why: "Gets the team outside after the workshop", alts: [] },
        { kind: "Rooms", art: "hotel", name: "Hôtel Belvédère", detail: "10 rooms × 1 night", price: 2490, status: "bookable", why: "For the 16 travelling guests; Fernway-preferred brand", alts: [] },
        { kind: "AV", art: "av", name: "Screen and speakerphone", detail: "Supplied by the venue", price: 0, status: "included", why: "", alts: [] }
      ]
    },
    {
      id: "memorable", label: "Most memorable", venue: "Lakehouse North",
      components: [
        { kind: "Venue", art: "lakeside", name: "Lakehouse North", detail: "Lakeside lodge, 45 minutes from the city", price: 9400, status: "bookable", why: "Quiet lakeside setting with a private meeting barn", alts: [] },
        { kind: "Catering", art: "catering", name: "Lakehouse kitchen", detail: "2 days, all meals on site", price: 5280, status: "bookable", why: "Covers 3 vegetarian and 1 gluten-free guests", alts: [] },
        { kind: "Group dinner", art: "dinner", name: "Chef's table by the fire", detail: "Five courses for 24", price: 3360, status: "estimate", why: "A dinner people will talk about", alts: [] },
        { kind: "Activity", art: "retreat", name: "Nordic spa afternoon", detail: "Private session for 24", price: 2150, status: "confirming", why: "A reset between the two working days", alts: [] },
        { kind: "Rooms", art: "retreat", name: "Lakehouse North lodge", detail: "10 rooms × 1 night", price: 2710, status: "bookable", why: "Everyone stays on site, no transfers", alts: [] },
        { kind: "AV", art: "av", name: "Screens and mics", detail: "Supplied by the venue", price: 0, status: "included", why: "", alts: [] }
      ]
    }
  ],

  statuses: {
    bookable: { label: "Bookable now", tone: "success", tip: "This venue shares live pricing and availability" },
    estimate: { label: "Estimate", tone: "neutral", tip: "Price confirmed by the supplier after booking" },
    confirming: { label: "Supplier confirming · usually within 2 hours", tone: "warning", tip: "We asked the supplier to hold the slot" },
    included: { label: "Included", tone: "neutral", tip: "" }
  },

  // Flow B: supplier listing
  listing: {
    name: "The Foundry Loft",
    location: "Old Montreal, QC",
    address: "412 rue Saint-Paul Ouest, Montréal",
    description: "A restored 1880s foundry in Old Montreal with exposed brick, timber beams and tall windows. Two spaces for meetings, workshops and dinners.",
    photos: ["loft", "hall", "boardroom", "historic", "dinner", "social"],
    spaces: [
      { name: "Main Hall", art: "hall", layouts: [["theatre", "Theatre", 120], ["classroom", "Classroom", 70], ["banquet", "Banquet", 80], ["reception", "Reception", 150]] },
      { name: "Boardroom", art: "boardroom", layouts: [["boardroom", "Boardroom", 24]] }
    ],
    pricing: [
      ["Day rental · Main Hall", "$3,200"],
      ["Day rental · Boardroom", "$1,300"],
      ["Food and beverage minimum", "$2,000"],
      ["Peak-season uplift (Sep–Dec)", "15%"]
    ],
    blackouts: [7, 14, 28],
    cancellation: ["Flexible", "Moderate", "Strict", "Custom"],
    cancellationNotes: {
      Flexible: "Full refund up to 7 days before the event.",
      Moderate: "Full refund up to 30 days before, 50% up to 14 days before.",
      Strict: "50% refund up to 60 days before. No refund after.",
      Custom: "Your own terms, shown to planners before they book."
    }
  },
  quality: [
    { id: "photos", step: 1, pts: 40, label: "Photos of every space", payoff: "Planners trust what they can see" },
    { id: "capacity", step: 2, pts: 20, label: "Capacity by layout", payoff: "Matched to more requests" },
    { id: "pricing", step: 3, pts: 20, label: "Pricing rules", payoff: "Unlocks instant quotes" },
    { id: "insurance", step: 4, pts: 15, label: "Insurance certificate", payoff: "Eligible for enterprise programs" },
    { id: "response", step: 5, pts: 5, label: "Response promise", payoff: "Ranked as a reliable partner" }
  ]
};
