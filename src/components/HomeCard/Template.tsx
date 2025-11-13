import React from 'react'
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from '../ui/minimal-card'

const Template = () => {
    const cards = [
        {
            title: "Landing Page",
            description: "Modern landing page template featuring Framer Motion animations, custom navigation components, and responsive design optimized for conversions.",
            image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ25uNTV5cmtkc3ozZmJsN2JoeG45cDduMmkwa291N2J6M2poN2NwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U6kgl4bKY8Leb87KqY/giphy.gif" // Replace with your actual GIF video link
        },
        {
            title: "Manifest",
            description: "Vector embedding solution for building Perplexity-style AI applications with RAG retrieval, real-time source citations, and powerful search functionality.",
            image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHUyZGw4aWR4ZXpuMzBnbXkweHlqN3k0dm5jcmhqemNpaW14OGxlaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FH9xzq6w8OSEA1AJe2/giphy.gif" // Replace with your actual GIF video link
        },
        {
            title: "Dev Portfolio",
            description: "Comprehensive SEO analysis tool with web crawling, performance testing, and AI-powered optimization recommendations for website improvement.",
            image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHg1eGpzN2tjamM2ZGJrbGxzdHl5bHY5Y2xzc3V5cGdqZ3BkaGR1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11K3vjrew7IFGw/giphy.gif" // Replace with your actual GIF video link
        }
    ]

    return (
        <div className='min-h-screen w-full flex items-center justify-center '>
            <div className="h-auto w-4xl p-4 justify-center border border-dashed rounded-lg space-y-4">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <MinimalCard key={index}>
                            <MinimalCardImage src={card.image} alt={card.title} />
                            <MinimalCardTitle>{card.title}</MinimalCardTitle>
                            <MinimalCardDescription>
                                {card.description}
                            </MinimalCardDescription>
                        </MinimalCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Template





