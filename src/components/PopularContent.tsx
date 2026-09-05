import {
    ScrollArea,
} from './ui/scroll-area';
import { Separator } from './ui/separator';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Link from 'next/link';

type MusicItem = {
    id: number;
    title: string;
    trackName: string;
    artist: string;
    date: string;
    href?: string;
};

const popularMusic: MusicItem[] = [
    {
        id: 1,
        title: 'Blinding Lights',
        trackName: 'Blinding Lights',
        artist: 'The Weeknd',
        date: '4.2M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 2,
        title: 'As It Was',
        trackName: 'As It Was',
        artist: 'Harry Styles',
        date: '3.8M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 3,
        title: 'Flowers',
        trackName: 'Flowers',
        artist: 'Miley Cyrus',
        date: '3.5M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 4,
        title: 'Shape of You',
        trackName: 'Shape of You',
        artist: 'Ed Sheeran',
        date: '3.1M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 5,
        title: 'Starboy',
        trackName: 'Starboy',
        artist: 'The Weeknd',
        date: '2.9M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 6,
        title: 'Stay',
        trackName: 'Stay',
        artist: 'The Kid LAROI & Justin Bieber',
        date: '2.7M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 7,
        title: 'One Dance',
        trackName: 'One Dance',
        artist: 'Drake',
        date: '2.6M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 8,
        title: 'Someone Like You',
        trackName: 'Someone Like You',
        artist: 'Adele',
        date: '2.5M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 9,
        title: 'Believer',
        trackName: 'Believer',
        artist: 'Imagine Dragons',
        date: '2.4M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 10,
        title: 'Perfect',
        trackName: 'Perfect',
        artist: 'Ed Sheeran',
        date: '2.3M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 11,
        title: 'Levitating',
        trackName: 'Levitating',
        artist: 'Dua Lipa',
        date: '2.2M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 12,
        title: 'Bad Guy',
        trackName: 'bad guy',
        artist: 'Billie Eilish',
        date: '2.1M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 13,
        title: 'Dance Monkey',
        trackName: 'Dance Monkey',
        artist: 'Tones and I',
        date: '2.0M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 14,
        title: 'Watermelon Sugar',
        trackName: 'Watermelon Sugar',
        artist: 'Harry Styles',
        date: '1.9M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 15,
        title: 'Heat Waves',
        trackName: 'Heat Waves',
        artist: 'Glass Animals',
        date: '1.8M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 16,
        title: 'Havana',
        trackName: 'Havana',
        artist: 'Camila Cabello',
        date: '1.7M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 17,
        title: 'Sunflower',
        trackName: 'Sunflower',
        artist: 'Post Malone & Swae Lee',
        date: '1.6M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 18,
        title: 'Save Your Tears',
        trackName: 'Save Your Tears',
        artist: 'The Weeknd',
        date: '1.5M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 19,
        title: 'Industry Baby',
        trackName: 'INDUSTRY BABY',
        artist: 'Lil Nas X & Jack Harlow',
        date: '1.4M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 20,
        title: 'Lovely',
        trackName: 'lovely',
        artist: 'Billie Eilish & Khalid',
        date: '1.3M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 21,
        title: 'Lucid Dreams',
        trackName: 'Lucid Dreams',
        artist: 'Juice WRLD',
        date: '1.2M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 22,
        title: 'Counting Stars',
        trackName: 'Counting Stars',
        artist: 'OneRepublic',
        date: '1.1M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 23,
        title: 'Something Just Like This',
        trackName: 'Something Just Like This',
        artist: 'The Chainsmokers & Coldplay',
        date: '1.0M plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 24,
        title: 'Thunder',
        trackName: 'Thunder',
        artist: 'Imagine Dragons',
        date: '985K plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 25,
        title: 'Rockstar',
        trackName: 'rockstar',
        artist: 'Post Malone',
        date: '940K plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 26,
        title: 'Shallow',
        trackName: 'Shallow',
        artist: 'Lady Gaga & Bradley Cooper',
        date: '890K plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 27,
        title: 'Attention',
        trackName: 'Attention',
        artist: 'Charlie Puth',
        date: '850K plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 28,
        title: 'Cheap Thrills',
        trackName: 'Cheap Thrills',
        artist: 'Sia',
        date: '810K plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 29,
        title: 'Radioactive',
        trackName: 'Radioactive',
        artist: 'Imagine Dragons',
        date: '770K plays',
        href: 'https://open.spotify.com/',
    },
    {
        id: 30,
        title: 'Memories',
        trackName: 'Memories',
        artist: 'Maroon 5',
        date: '730K plays',
        href: 'https://open.spotify.com/',
    },
];

export default function PopularContent() {
    return (
        <div className="h-92 w-full">
            <h1 className="mb-2 text-md font-medium">Popular Music</h1>

            <ScrollArea className="h-78">
                <div className='flex flex-col m-0.5 mr-4'>
                    {popularMusic.map((item) => (
                        <div key={item.id}>
                            <div
                                className="flex flex-row items-center justify-between rounded-md h-4"
                            >
                                {/* Content Section */}
                                <div className="flex justify-between items-center text-xs text-zinc-400 hover:text-zinc-100 w-full">
                                    <span className='flex'>
                                        <HoverCard>
                                            <HoverCardTrigger
                                                delay={10}
                                                closeDelay={10}
                                                render={
                                                    <Link
                                                        href={item.href ?? "https://open.spotify.com/"}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                }
                                            />

                                            <HoverCardContent className="w-64">
                                                <Link
                                                    className="text-sm font-semibold hover:underline"
                                                    href={item.href ?? "https://open.spotify.com/"}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.title}
                                                </Link>

                                                <p className="text-sm">
                                                    Popular track{" "}
                                                    <span className="font-medium">
                                                        “{item.trackName}”
                                                    </span>{" "}
                                                    by{" "}
                                                    <span className="font-medium">
                                                        @{item.artist}
                                                    </span>
                                                </p>

                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {item.date}
                                                </p>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </span>

                                    {/* Value Section */}
                                    <span className="text-xs shrink-0">
                                        {item.date}
                                    </span>
                                </div>
                            </div>

                            <Separator className={'my-2'} />
                        </div>
                    ))}
                </div>
            </ScrollArea>

            <div className='flex justify-between items-center text-xs py-2 mr-4 border-t border-zinc-600'>
                <span>12.4M Plays</span>
                <span>↗ 12.8% this month</span>
            </div>
        </div>
    );
};
