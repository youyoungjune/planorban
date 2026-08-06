import { ESkillCategories, IProject, ISkill } from "../types/types";

export const Projects: IProject[] = [
  {
    basics: {
      name: "AIMS Events (Lite)",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLTPwL7l2uGCs53q0HRFJjxfngKbVZk68OXcYQ",
    },
    description: `A modern Android mobile app built from the ground up with one other teammate. Used by universities/municipalities to validate and sell event tickets/permits by integrating with payment hardware such as card readers and receipt printers and third-party API's such as Ticketmaster. Check it out on the Google Play Store.`,
    link: "https://play.google.com/store/apps/details?id=com.aimsparking.aimsevents.googlePlay&utm_source=na_Med",
  },
  {
    basics: {
      name: "syraviews.com",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLXAV4lOc39AZVJ2mqlrWf3bT4DUeS7ukICx0a",
    },
    description: `A small app to invite friends and collect RSVPs for my son's gender reveal party, written in Golang (mux) and TypeScript (Next.js) with PostgreSQL and JWT authentication. Deployed via Vercel and Fly.io. Log in with "recruiter" and "r3cruiter!".`,
  },
  {
    basics: {
      name: "simbababyshower.vercel.app",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLwTlTJDQTKm6gGPnphtaix74bOwFfUSl8YM31",
    },
    description: `Forked from syraviews.com for our baby shower, I added some new tables and changed login logic, written in Golang (mux) and TypeScript (Next.js) with PostgreSQL and JWT authentication. Deployed via Vercel and Fly.io.`,
  },
];

export const Skills: ISkill[] = [
  {
    basics: {
      name: "Typescript",
      image:
        "https://m2my1rq4tt.ufs.sh/f/0c063887-ad21-4361-83f9-5d22f9c9d653-8myeez.png",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "Claude Code",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLF0Ah7Kul6K25DGPkXTZn7jetRmC0bSOw1Bxf",
    },
    category: ESkillCategories.AI,
  },
  {
    basics: {
      name: "Gemini API",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLFyGtJXul6K25DGPkXTZn7jetRmC0bSOw1Bxf",
    },
    category: ESkillCategories.AI,
  },
  {
    basics: {
      name: "Kotlin",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLz0MeCiEwfIZTOd5vKqxuLcyDSkljEV8JNaXH",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "Golang",
      image:
        "https://m2my1rq4tt.ufs.sh/f/8f68be8b-4a32-4709-a1dc-ab1fe6edce6c-2js.png",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "Python",
      image:
        "https://m2my1rq4tt.ufs.sh/f/f5d9dfd5-a566-46ae-83f0-8094a153a1a4-g3ezok.png",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "Java",
      image:
        "https://m2my1rq4tt.ufs.sh/f/18697db9-42df-4a31-b981-ababe7b32bb7-1xrfm.png",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "GitHub Copilot",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLRMqOOGWMPrg2mankZ7QlfBv0FbJ4tAeYoV3u",
    },
    category: ESkillCategories.AI,
  },
  {
    basics: {
      name: "C#",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLnDYIIWdqectlQXLhk6oKRjmaTi8nwNMzuGYf",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "PHP",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLtbiVwnmo1TbgR82kftzaUVMw7Zxcr9pIXHj3",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "VBA",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLNLL5onKsj3zEpuaT6CV5KBnHyb7dFweclmg2",
    },
    category: ESkillCategories.LANGUAGES,
  },
  {
    basics: {
      name: "PostgreSQL",
      image:
        "https://m2my1rq4tt.ufs.sh/f/34331b9c-04d9-46fe-bf2b-80b6b4d78a23-ytjru4.png",
    },
    category: ESkillCategories.DATABASES,
  },
  {
    basics: {
      name: "Microsoft SQL Server",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLgjfqOoAMTV2AB0J5N6Ct9dKa3jseqzGhpR17",
    },
    category: ESkillCategories.DATABASES,
  },
  {
    basics: {
      name: "MongoDB",
      image:
        "https://m2my1rq4tt.ufs.sh/f/b2db0c49-4824-43b4-816d-094ab300115e-1pysc4.png",
    },
    category: ESkillCategories.DATABASES,
  },
  {
    basics: {
      name: "AWS",
      image:
        "https://m2my1rq4tt.ufs.sh/f/e947aa1f-326e-4897-aa8f-9cb8bd70b916-22v1.webp",
    },
    category: ESkillCategories.CLOUD,
  },
  {
    basics: {
      name: "Inertia.js",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLCWXS6njOwfepZnmHXaPd2KcTGY6845Ry7Jjb",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "React",
      image:
        "https://m2my1rq4tt.ufs.sh/f/e3892ea3-6d89-41d2-be4e-2496b69b5802-1sj3pb.png",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Django",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLQ7TAIFHq3sgr8WbP6Uo5ndEyf7iVCIRz4h1B",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Next.js",
      image:
        "https://m2my1rq4tt.ufs.sh/f/6cec46fa-d49f-480f-b875-964225c3792d-20eer.png",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Spring Boot",
      image:
        "https://m2my1rq4tt.ufs.sh/f/c89ce08c-0926-4b1f-bbc7-2e4306bab049-mj0jnj.png",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "jQuery",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLAyeiemabqfmiLrBU6b4JvXS2OgIRYVkt1lQo",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Laravel",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLXplF9539AZVJ2mqlrWf3bT4DUeS7ukICx0ah",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Blazor",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLrZK6K7S7IOpmfUycPWDB4RvMeEHKFw9XSiuQ",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Smarty Template Engine",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLxyyLg7MCGPjSaxegOIHKo1hBrNWfqYzQ2M0s",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Gonertia",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLAaSt54bqfmiLrBU6b4JvXS2OgIRYVkt1lQoD",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Playwright (Typescript + C#)",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLcK79kBGXkgQ8fZnNRcBxymG7h5qLvISUudaH",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Espresso",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLtPHGZUmo1TbgR82kftzaUVMw7Zxcr9pIXHj3",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "JUnit",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL12TcZo0SIuqtM4hzaKeJOjZwsAQ20XiFH7g5",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "NUnit",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLEe7yOz5zG9qQVaUmxS7eFRX1uwhZO6iWpclM",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  // {
  //   basics: {
  //     name: "PHPUnit",
  //     image:
  //       "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLGfjdWs6CTHsWgPjEl8BvQRmFd4D9UzLN6k7r",
  //   },
  //   category: ESkillCategories.FRAMEWORKS,
  // },
  {
    basics: {
      name: "JMeter",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLL5WrM4Y7EmPedUXZIz23wynVoYKMqrhuk5Fa",
    },
    category: ESkillCategories.FRAMEWORKS,
  },
  {
    basics: {
      name: "Cloudflare",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL6u9hCPaxG5jmiqyXaIwh1Y2ZnsMOocBEUFkp",
    },
    category: ESkillCategories.CLOUD,
  },
  {
    basics: {
      name: "Vercel",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLmLkAveWxJD4qIgwUPfQjndMSrBTvFNGE5ueL",
    },
    category: ESkillCategories.CLOUD,
    needsInvert: true,
  },
  {
    basics: {
      name: "Fly.io",
      image:
        "https://m2my1rq4tt.ufs.sh/f/72df50f8-3c93-4a65-8b7e-11f6c3e09312-26b7.svg",
    },
    category: ESkillCategories.CLOUD,
  },
  {
    basics: {
      name: "Supabase",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLeZ6LqhyfFMSdZJQO8unA4H9iI1Vaz3WXPmUx",
    },
    category: ESkillCategories.CLOUD,
  },
  {
    basics: {
      name: "Render",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL5Du2YP8fLieHIWtKpZ0mgDCXwsE51NrnTlS4",
    },
    category: ESkillCategories.CLOUD,
  },
  {
    basics: {
      name: "Koyeb",
      image:
        "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLLiqWqoY7EmPedUXZIz23wynVoYKMqrhuk5Fa",
    },
    category: ESkillCategories.CLOUD,
    needsInvert: true,
  },
];
