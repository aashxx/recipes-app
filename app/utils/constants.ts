
export const SERVICES = [
    {
        image: "/dietPlan.webp",
        title: "Personalized Diet Plans",
        description: "Unlock your health potential with personalized diet plans designed just for you. Our expert nutritionists craft custom plans to match your tastes.",
        link: "/diets",
    },
    {
        image: "/recipes.jpg",
        title: "Food Recipes",
        description: "Explore a world of flavor with our enticing and delicious recipes. From quick fixes to gourmet wonders, there's something for everyone.",
        link: "/recipes",
    },
    {
        image: "/medicalElder.jpg",
        title: "Medical Assistance",
        description: "Get instant access to compassionate care and guidance tailored to your needs. Click for reliable assistance and peace of mind on aging-related health issues.",
        link: "/assistance",
    },
]

export const PRICING = [
  {
      name: "Free",
      description: "Trial version to get familiar with Nutriverse.",
      price: 0,
      billed: "/mo",
      link: "/signup",
      heading: "Free Plan Features",
      features: [
          "Nutriverse Platform",
          "Access to limited recipes",
          "Limited Diet Plans",
          "Basic Analytics",
          "24/7 Customer Support"
      ]
  },
  {
      name: "Pro",
      description: "Access to all recipes and diet plans",
      price: 1500,
      billed: "/mo",
      link: "https://buy.stripe.com/test_3cs5m1g6Kg2z3G8aEQ",
      heading: "Pro Plan Features",
      features: [
          "Access 2100+ recipes",
          "Access 5+ diet plans",
          "Download diet charts",
          "Daily diet reminders",
          "24/7 Customer Support"
      ]
  },
  {
      name: "Premium",
      description: "Full access with all features unlocked.",
      price: 3000,
      billed: "/mo",
      link: "https://buy.stripe.com/test_cN29Ch2fU4jRekM6oB",
      buttonText: "Contact Sales",
      heading: "Premium Plan Features",
      features: [
          "Medical assistance",
          "Assistance from 15 to 30 days",
          "Unlocks all features in platform",
          "Advanced recipe search",
          "24/7 Customer Support"
      ]
  },
]

export const RATINGS = [
    {
        rate: 5,
        review: "Excellent Service",
        description: "Their service is brilliant! I really hope some of them are now using your service.",
        customer: "Dayal"
    },
    {
        rate: 5,
        review: "Love the Recipices",
        description: "The recipes were easy to make and the filter functionality was helpful to find the perfect dish.",
        customer: "Thakur"
    },
    {
        rate: 4,
        review: "Fantastic quality",
        description: "I'm really appreciating the quality and presentation. The flavour of the veg is outstanding.",
        customer: "Birla"
    },
]

export const TEAM = [
    {
        photo: "/samir.jpeg",
        name: "Mohamed Samir",
        desgn: "Cheif Executive Officer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nemo!",
        email: "mailto:210071601109@crescent.education"
    },
    {
        photo: "/hasin.jpeg",
        name: "Mohammed Hasin",
        desgn: "Cheif Marketing Officer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nemo!",
        email: "mailto:210071601109@crescent.education"
    },
    {
        photo: "/mujahith.jpeg",
        name: "Mohamed Mujahith",
        desgn: "Cheif Operating Officer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nemo!",
        email: "mailto:210071601109@crescent.education"
    },
]

export const ANIMATIONS = {

    left: {
      initial: {
        x: -100,
        opacity: 0
      },

      whileInView: {
        x: 0,
        opacity: 1
      },

      transition: {
        delay: 0.2,
        duration: 0.7
      },

      viewport: {
        once: true
      }
    },

    right: {
      initial: {
        x: 100,
        opacity: 0
      },

      whileInView: {
        x: 0,
        opacity: 1
      },

      transition: {
        delay: 0.2,
        duration: 0.7
      },

      viewport: {
        once: true
      }
    },

    up: {
      initial: {
        y: 100,
        opacity: 0
      },

      whileInView: {
        y: 0,
        opacity: 1
      },

      transition: {
        delay: 0.2,
        duration: 0.7
      },

      viewport: {
        once: true
      }
    }
}

export const FILTERS = [
  {
    types: ["Balanced", "High-Fiber", "High-Protein", "Low-Carb", "Low-Fat", "Low-Sodium"],
    name: "Diet"
  },
  {
    types: ["alcohol-free", "gluten-free", "immuno-supportive", "pork-free", "vegan", "low-sugar"],
    name: "Health Labels"
  },
  {
    types: ["French", "Indian", "Italian", "Chinese", "Mexican"],
    name: "Cuisine Type"
  },
  {
    types: ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"],
    name: "Meal Type"
  }
]

export const DIETS = [
  {
    id: "vegetarian-diet-plan",
    name: "Vegetarian Diet",
    description: "A vegetarian diet does not include any meat, poultry, or seafood. It is a meal plan made up of foods that come mostly from plants. These include whole fruits and vegetables and whole grains.",
    image: "/veg-diet.jpg"
  },
  {
    id: "non-vegetarian-diet-plan",
    name: "Non Vegetarian Diet",
    description: "Non vegetarians were defined as those consuming some meat, and the total of meat and fish >1 time/week. Semi vegetarians may consume dairy products and/or eggs, eat some meat ≥1 time/month.",
    image: "/non-veg-diet.jpg"
  },
  {
    id: "keto-diet-plan",
    name: "Keto Diet",
    description: "The ketogenic diet is a high-fat, adequate-protein, low-carbohydrate dietary therapy that in conventional medicine is used mainly to treat hard-to-control epilepsy in children.",
    image: "/keto-diet.jpg"
  },
  {
    id: "high-protein-diet-plan",
    name: "High Protein Diet",
    description: "A high-protein diet is a diet in which 20% or more of the total daily calories come from protein. Many high protein diets are high in saturated fat and restrict intake of carbohydrates. ",
    image: "/protein-diet.jpg"
  },
  {
    id: "vegan-diet-plan",
    name: "Vegan Diet",
    description: "A vegan diet is based on plants (such as vegetables, grains, nuts and fruits) and foods made from plants. Vegans do not eat foods that come from animals, including dairy products and eggs.",
    image: "/vegan-diet.jpg"
  },
]

export const DIETS_PLANS = [
  {
    id: "vegetarian-diet-plan",
    name: "Vegetarian Diet Plan",
    summary: "A vegetarian diet primarily consists of plant-based foods, excluding animal flesh. It emphasizes fruits, vegetables, grains, legumes, nuts, and seeds, providing essential nutrients like vitamins, minerals, fiber, and antioxidants. Vegetarians typically avoid meat, poultry, seafood, and products containing animal-derived ingredients, embracing a diet rich in plant diversity for health and ethical reasons.",
    image: "/veg-diet.jpg",
    download: "https://drive.google.com/uc?export=download&id=1UUCMbmA3OYSuXA5hRKX1GJ6bzWEvbRQe",
    health: [
      "Lowered cholesterol",
      "Improved digestion",
      "Weight management",
      "Better heart health",
      "Enhanced mood",
      "Lower blood pressure",
      "Reduced risk of cancer"
    ]  
  },
  {
    id: "non-vegetarian-diet-plan",
    name: "Non Vegetarian Diet Plan",
    summary: "A non-vegetarian diet includes animal-derived foods such as meat, poultry, seafood, and sometimes eggs and dairy products. It provides high-quality protein, essential amino acids, vitamins like B12, and minerals such as iron and zinc. Non-vegetarians may consume a variety of animal-based dishes for nutrition and culinary preferences.",
    image: "/non-veg-diet.jpg",
    download: "https://drive.google.com/uc?export=download&id=15Fk_PfZbQxdx3272R_kEA8lkRiRvR-rs",
    health: [
      "High protein intake",
      "Improved muscle strength",
      "Rich in essential nutrients",
      "Source of omega-3 fatty acids",
      "Iron absorption",
      "Enhanced cognitive function",
      "Boosted immune system"
    ]
  },
  {
    id: "keto-diet-plan",
    name: "Keto Diet Plan",
    summary: "The ketogenic (keto) diet is a high-fat, low-carbohydrate eating plan designed to induce ketosis, a metabolic state where the body burns fat for fuel instead of carbohydrates. It emphasizes foods like meat, fish, eggs, nuts, seeds, oils, and non-starchy vegetables while restricting grains, sugars, fruits, and some vegetables to promote weight loss and metabolic health.",
    image: "/keto-diet.jpg",
    download: "https://drive.google.com/uc?export=download&id=1H_XXAUoBVK2cTmFXyPxsVG_0vHvM28On",
    health: [
      "Weight loss",
      "Improved mental focus",
      "Stable blood sugar levels",
      "Reduced inflammation",
      "Increased energy levels",
      "Better cholesterol levels",
      "Reduced risk of seizures"
    ]
  },
  {
    id: "high-protein-diet-plan",
    name: "High Protein Diet Plan",
    summary: "A high-protein diet involves consuming increased amounts of protein-rich foods such as meat, poultry, fish, eggs, dairy, legumes, nuts, and seeds. It aims to support muscle repair and growth, enhance satiety, boost metabolism, aid in weight loss, improve bone health, and regulate hunger hormones for overall health and fitness.",
    image: "/protein-diet.jpg",
    download: "https://drive.google.com/uc?export=download&id=1tXGV29xn6FXpvsLycaSos_JULfIOi-ML",
    health: [
      "Muscle repair and growth",
      "Increased satiety",
      "Improved metabolism",
      "Supports weight loss",
      "Better bone health",
      "Reduced cravings",
      "Improved wound healing"
    ]
  },
  {
    id: "vegan-diet-plan",
    name: "Vegan Diet Plan",
    summary: "A vegan diet is a plant-based eating pattern that excludes all animal-derived products, including meat, dairy, eggs, and honey. It centers on fruits, vegetables, grains, legumes, nuts, and seeds, providing essential nutrients like vitamins, minerals, fiber, and antioxidants. Veganism promotes ethical, environmental, and health-related benefits, fostering compassion and sustainability.",
    image: "/vegan-diet.jpg",
    download: "https://drive.google.com/uc?export=download&id=1PsYFiAKAE0dGIsea-HZHFyMZIYlqwbGB",
    health: [
      "Lower risk of heart disease",
      "Reduced inflammation",
      "Improved digestion",
      "Healthy weight management",
      "Lower blood pressure",
      "Reduced risk of type 2 diabetes",
      "Lower cholesterol levels"
    ]
  },
]