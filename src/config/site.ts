import { Wrench as WrenchIcon, Hammer as ToolIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
/**
 * src/config/site.ts
 * Updated site configuration
 */
export const siteConfig = {
    name: "Rhino Garage Doors",
    description: "Professional garage door services with military precision",
    nav: [
        { title: "Services", href: "#services" },
        { title: "About", href: "#about" },
        { title: "Book", href: "#housecall" },
    ],
    services: [
        {
            title: "Installation",
            subtitle: "New Garage Doors",
            description: "Professional installation of top-quality garage doors, customized to your preferences and budget.",
            icon: WrenchIcon, // Import from lucide-react
        },
        {
            title: "Repairs",
            subtitle: "Emergency Support",
            description: "Prompt repair services for broken springs, panels, openers, and more—keep your door running smoothly.",
            icon: ToolIcon,
        },
        {
            title: "Maintenance",
            subtitle: "Prevention & Upkeep",
            description: "Regular tune-ups and inspections to prevent costly breakdowns and extend the life of your garage door.",
            icon: ShieldCheckIcon,
        },
    ],
};