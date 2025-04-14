const sampleStays = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBjb3R0YWdlfGVufDB8fDB8fHww",
    },
    price: 2500,
    location: "Gokarna",
    state: "Karnataka",
    owner: "67fc8de75e92870618f42144",
  },
  {
    title: "Modern Loft",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1704428381312-0579346a779c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwTG9mdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2000,
    location: "Delhi",
    state: "Delhi",
    owner: "67fc8dc85e92870618f4213c",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpbGwlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2300,
    location: "Kasol",
    state: "Himachal Pradesh",
    owner: "67fc8da95e92870618f42134",
  },
  {
    title: "Swaroop Villa",
    description:
      "Experience the charm of Udaipur in this beautifully restored villa.",
    image: {
      url: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4000,
    location: "Udaipur",
    state: "Rajasthan",
    owner: "67fc8d8e5e92870618f4212c",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1604004218771-05c55db4f9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1800,
    location: "Munnar",
    state: "Kerala",
    owner: "67fc8d8e5e92870618f4212c",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww",
    },
    price: 2000,
    location: "Havelock Island",
    state: "Andaman",
    owner: "67fc8d6f5e92870618f42124",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFrZWhvdXNlfGVufDB8fDB8fHww",
    },
    price: 900,
    location: "Umiam Lake",
    state: "Meghalaya",
    owner: "67fc8d6f5e92870618f42124",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVudGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 3500,
    location: "Mumbai",
    state: "Maharastra",
    owner: "67fc8d6f5e92870618f42124",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1553550319-d8d5393e1c80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vdyUyMGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 3000,
    location: "Gulmarg",
    state: "Kashmir",
    owner: "67fc8d6f5e92870618f42124",
  },
  {
    title: "Floating lake house",
    description: "Spend a peaceful night in a lakehouse in srinagar",
    image: {
      url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3JpbmFnYXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 4000,
    location: "Srinagar",
    state: "Kashmir",
    owner: "67fc8d6f5e92870618f42124",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1516091877740-fde016699f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpdmF0ZSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 10000,
    location: "Lakshadweep",
    state: "Lakshadweep",
    owner: "67fbdfe630b93d7af61c58ac",
  },
  {
    title: "Charming Cottage",
    description:
      "Escape to the picturesque views in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1200,
    location: "Pondicherry",
    state: "Pondicherry",
    owner: "67fbdfe630b93d7af61c58ac",
  },
  {
    title: "Beachfront Bungalow ",
    description:
      "Relax on the sandy shoresin this beautiful beachfront bungalow with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMHBvb2x8ZW58MHx8MHx8fDA%3D",
    },
    price: 1800,
    location: "Goa",
    state: "Goa",
    owner: "67fbdfe630b93d7af61c58ac",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Rockies.",
    image: {
      url: "https://img.cdn.zostel.com/zostel/gallery/images/t28FdEoHSze96ggOL8unZA/zostel-coorg-madikeri-20230214114950.jpg?w=720",
    },
    price: 1500,
    location: "Coorg",
    state: "Karnataka",
    owner: "67fc8c435e92870618f420fc",
  },
  {
    title: "Tropical Villa",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1600760380065-2fcdc9e73007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5maW5pdHklMjBwb29sfGVufDB8fDB8fHww",
    },
    price: 3000,
    location: "Goa",
    state: "Goa",
    owner: "67fc8c435e92870618f420fc",
  },
  {
    title: "Historic Castle",
    description:
      "Live like royalty in this historic castle. Explore the rugged beauty of the area.",
    image: {
      url: "https://images.unsplash.com/photo-1600324831351-1c89514af7df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG15c3VydXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4000,
    location: "Mysuru",
    state: "Karnataka",
    owner: "67fc8c435e92870618f420fc",
  },
  {
    title: "Desert villa",
    description: "Experience luxury in the middle of the desert.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729958605-b27137644fbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzZXJ0JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000,
    location: "Jaisalmer",
    state: "Rajasthan",
    owner: "67fc8cdc5e92870618f42114",
  },
  {
    title: "Luxury Villa in the Andamans",
    description:
      "Indulge in luxury in this overwater villa in the Andamans with stunning views of the Indian Ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
    },
    price: 6000,
    location: "Andaman",
    state: "Andaman",
    owner: "67fc8cdc5e92870618f42114",
  },
  {
    title: "Ski Chalet",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famousski resort.",
    image: {
      url: "https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4000,
    location: "Manali",
    state: "Himachal Pradesh",
    owner: "67fc8cdc5e92870618f42114",
  },
];

module.exports = { data: sampleStays };
