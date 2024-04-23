
export const SERVICES = [
    {
        image: "/dietPlan.webp",
        title: "Personalized Diet Plans",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate corrupti rerum libero repellendus incidunt non optio consequuntur, ipsa dolores?",
        link: "/",
    },
    {
        image: "/recipes.jpg",
        title: "Food Recipes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate corrupti rerum libero repellendus incidunt non optio consequuntur, ipsa dolores?",
        link: "/recipes",
    },
    {
        image: "/medicalElder.jpg",
        title: "Medical Assistance",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate corrupti rerum libero repellendus incidunt non optio consequuntur, ipsa dolores?",
        link: "/",
    },
]

export const RATINGS = [
    {
        rate: 5,
        review: "Excellent Service",
        description: "Their service is brilliant! I really hope some of them are now using your service.",
        customer: "Fiona"
    },
    {
        rate: 5,
        review: "Love the flexibility",
        description: "We are very happy with the box and we value that we can have the standard box or choose our own.",
        customer: "Joseph"
    },
    {
        rate: 4,
        review: "Fantastic quality",
        description: "I'm really appreciating the quality and presentation. The flavour of the veg is outstanding.",
        customer: "Michelle"
    },
]

export const TEAM = [
    {
        photo: "/farooq.jpg",
        name: "Mohamed Samir",
        desgn: "Cheif Executive Officer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nemo!",
        email: "mailto:210071601109@crescent.education"
    },
    {
        photo: "/farooq.jpg",
        name: "Mohammed Hasin",
        desgn: "Cheif Executive Officer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nemo!",
        email: "mailto:210071601109@crescent.education"
    },
    {
        photo: "/farooq.jpg",
        name: "Mohamed Mujahith",
        desgn: "Cheif Executive Officer",
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