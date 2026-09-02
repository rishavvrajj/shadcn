import Image from 'next/image';

import { Badge } from './ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from './ui/card';
import {
    ScrollArea,
    ScrollBar,
} from './ui/scroll-area';

type CardItem = {
    id: number;
    title: string;
    badge: string;
    image: string;
    value: string;
};

const popularContent: CardItem[] = [
    {
        id: 1,
        title: 'BrightLayer Technologies',
        badge: '6.3k learners',
        image:
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&h=400&q=80',
        value: '25.0K',
    },
    {
        id: 2,
        title: 'Building Scalable APIs',
        badge: '9.8K learners',
        image:
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=400&q=80',
        value: '9.8K',
    },
    {
        id: 3,
        title: 'Mastering PostgreSQL',
        badge: '7.6K learners',
        image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&h=400&q=80',
        value: '7.6K',
    },
    {
        id: 4,
        title: 'Docker for Developers',
        badge: '6.4K learners',
        image:
            'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=400&h=400&q=80',
        value: '6.4K',
    },
];

const activeCustomers: CardItem[] = [
    {
        id: 1,
        title: 'Aarav Sharma',
        badge: 'Growth plan',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
        value: 'Active',
    },
    {
        id: 2,
        title: 'BrightLayer Technologies',
        badge: 'Enterprise plan',
        image:
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&h=400&q=80',
        value: 'Active',
    },
    {
        id: 3,
        title: 'Neha Verma',
        badge: 'Pro plan',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
        value: 'Active',
    },
    {
        id: 4,
        title: 'Rohan Kumar',
        badge: 'Starter plan',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
        value: 'Active',
    },
];

export default function CardList({
    title,
}: {
    title: string;
}) {
    const list =
        title === 'Popular Content'
            ? popularContent
            : activeCustomers;

    return (
        <ScrollArea className="h-full min-h-0 w-full p-1">
            <div>
                <ScrollBar orientation="vertical" />

                <h1 className="mb-2 text-lg font-medium">
                    {title}
                </h1>

                <div className="flex flex-col gap-2 mx-1">
                    {list.map((item) => (
                        <Card
                            key={item.id}
                            className="flex flex-row items-center justify-between gap-3 p-2"
                        >
                            {/* Image Section */}
                            <div className="relative h-12 w-12 overflow-hidden rounded-sm shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    unoptimized
                                    sizes="48px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="min-w-0 flex-1 space-y-1">
                                <CardTitle className="truncate text-xs font-medium">
                                    {item.title}
                                </CardTitle>
                                <Badge variant="secondary" className='text-xs'>
                                    {item.badge}
                                </Badge>
                            </div>

                            {/* Value Section */}
                            <div className="text-xs shrink-0">
                                {item.value}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </ScrollArea>
    );
};