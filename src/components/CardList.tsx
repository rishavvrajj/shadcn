import Image from 'next/image'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Badge } from './ui/badge';

const popularContent = [
    {
        id: 1,
        title: 'Introduction to Next.js',
        badge: '12.5K learners',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
        count: 12500,
    },
    {
        id: 2,
        title: 'Building Scalable APIs',
        badge: '9.8K learners',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
        count: 9800,
    },
    {
        id: 3,
        title: 'Mastering PostgreSQL',
        badge: '7.6K learners',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
        count: 7600,
    },
    {
        id: 4,
        title: 'Docker for Developers',
        badge: '6.4K learners',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b',
        count: 6400,
    },
    
];

const latestTransactions = [
    {
        id: 1,
        title: 'Premium subscription',
        badge: '₹125',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
        count: 125,
    },
    {
        id: 2,
        title: 'Cloud hosting payment',
        badge: '₹89',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
        count: 89,
    },
    {
        id: 3,
        title: 'Domain renewal',
        badge: '₹45',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
        count: 45,
    },
    {
        id: 4,
        title: 'Team workspace plan',
        badge: '₹32',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
        count: 32,
    },
];

export default function CardList({ title }: { title: string }) {
    const list = title === 'Popular Content' ? popularContent : latestTransactions

    return (
        <ScrollArea className='w-full h-full min-h-0 p-1'>
            <div>
                <ScrollBar orientation='vertical' />
                <h1 className="mb-2 text-lg font-medium">{title}</h1>

                <div className="flex flex-col gap-2">
                    {list.map((item) => (
                        <Card
                            key={item.id}
                            className="flex-row items-center justify-between m-0.5 p-2"
                        >
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    unoptimized
                                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                    className="object-cover"
                                />
                            </div>

                            <CardContent className="flex-1 space-y-1 p-0">
                                <CardTitle className="text-xs font-medium">
                                    {item.title}
                                </CardTitle>

                                <Badge variant={'secondary'}>
                                    {item.badge}
                                </Badge>
                            </CardContent>

                            <CardFooter className="p-0 text-xs text-muted-foreground">
                                {item.count >= 1000
                                    ? `${(item.count / 1000).toFixed(1)}K`
                                    : item.count}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </ScrollArea>
    )
}