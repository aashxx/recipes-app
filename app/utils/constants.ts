
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