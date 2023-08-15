import { Project } from "@/public/types/projectDetailsType";

export const projectData : Project[] =[
    {   id : 1,
        name: "Event Mart",
        related : "Event booking Website",
        image : "https://i.ibb.co/qjL6gz2/event-SSSSS.png",
        about : [
            "This site includes a firebase email-password-based and google authentication system.",
            "This site has different features for different roles. There is two role admin and user.",
            "You can pay using your credit card.",
            "For an admin role user there in the dashboard he can cancel any unpaid order . make other admin and my profile page.",
            "Admin Can Add new Event"
    ],
    technology : ["Next Js",  "Mongoose", "Tailwind Css", "MongoDB", "Express" , "Stripe", "Daisy UI"],
    liveLink: "https://event-app-pi.vercel.app/",
    github: "https://github.com/hafizuddinraju/event-app",
    screenShortImage : ["https://i.ibb.co/qjL6gz2/event-SSSSS.png", "https://i.ibb.co/vQNdg2x/event-SSSS.png", "https://i.ibb.co/1XbtzTv/eventSSS.png"]
    }
]