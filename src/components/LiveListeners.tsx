'use client'

import {
    ScrollArea,
} from './ui/scroll-area';
import { Separator } from './ui/separator';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Link from 'next/link';

const activeCustomers = [
    {
        title: "@rishavvrajj",
        href: "https://open.spotify.com/user/316boh3i4mwmkvq5wjvuyj5zjil4",
        trackName: "Midnight City",
        artist: "M83",
        date: "Just now",
    },
    {
        title: "@aditya_99",
        href: "https://open.spotify.com/user/aditya99spotify",
        trackName: "Blinding Lights",
        artist: "The Weeknd",
        date: "2m ago",
    },
    {
        title: "@priyanka.music",
        href: "https://open.spotify.com/user/priyankamusic",
        trackName: "Kesariya",
        artist: "Arijit Singh",
        date: "5m ago",
    },
    {
        title: "@neeraj_codes",
        href: "https://open.spotify.com/user/neerajcodes",
        trackName: "Code Radio – Lofi Beats",
        artist: "Various Artists",
        date: "7m ago",
    },
    {
        title: "@sneha.plays",
        href: "https://open.spotify.com/user/snehaplays",
        trackName: "Anti-Hero",
        artist: "Taylor Swift",
        date: "10m ago",
    },
    {
        title: "@rahul_beats",
        href: "https://open.spotify.com/user/rahulbeats",
        trackName: "Raataan Lambiyan",
        artist: "Jubin Nautiyal",
        date: "12m ago",
    },
    {
        title: "@ananya_vibes",
        href: "https://open.spotify.com/user/ananyavibes",
        trackName: "Levitating",
        artist: "Dua Lipa",
        date: "15m ago",
    },
    {
        title: "@vikram_dev",
        href: "https://open.spotify.com/user/vikramdev",
        trackName: "Starboy",
        artist: "The Weeknd",
        date: "18m ago",
    },
    {
        title: "@ishita.music",
        href: "https://open.spotify.com/user/ishitamusic",
        trackName: "Apna Bana Le",
        artist: "Arijit Singh",
        date: "20m ago",
    },
    {
        title: "@karthik.lofi",
        href: "https://open.spotify.com/user/karthiklofi",
        trackName: "Lofi Study Beats",
        artist: "Chillhop Music",
        date: "22m ago",
    },
    {
        title: "@divya.playlist",
        href: "https://open.spotify.com/user/divyaplaylist",
        trackName: "Calm Down",
        artist: "Rema & Selena Gomez",
        date: "25m ago",
    },
    {
        title: "@arjun_rockz",
        href: "https://open.spotify.com/user/arjunrockz",
        trackName: "Believer",
        artist: "Imagine Dragons",
        date: "28m ago",
    },
    {
        title: "@meera.sings",
        href: "https://open.spotify.com/user/meerasings",
        trackName: "Tum Hi Ho",
        artist: "Arijit Singh",
        date: "30m ago",
    },
    {
        title: "@rohan.grooves",
        href: "https://open.spotify.com/user/rohangrooves",
        trackName: "As It Was",
        artist: "Harry Styles",
        date: "35m ago",
    },
    {
        title: "@pooja.music",
        href: "https://open.spotify.com/user/poojamusic",
        trackName: "Chaleya",
        artist: "Arijit Singh & Shilpa Rao",
        date: "40m ago",
    },
    {
        title: "@sidharth.beats",
        href: "https://open.spotify.com/user/sidharthbeats",
        trackName: "Shape of You",
        artist: "Ed Sheeran",
        date: "45m ago",
    },
    {
        title: "@kavya.vibes",
        href: "https://open.spotify.com/user/kavyavibes",
        trackName: "Srivalli",
        artist: "Javed Ali",
        date: "50m ago",
    },
    {
        title: "@nitish.codes",
        href: "https://open.spotify.com/user/nitishcodes",
        trackName: "Deep Focus",
        artist: "Spotify Studios",
        date: "1h ago",
    },
    {
        title: "@riya.playlist",
        href: "https://open.spotify.com/user/riyaplaylist",
        trackName: "Flowers",
        artist: "Miley Cyrus",
        date: "1h ago",
    },
    {
        title: "@amit.music",
        href: "https://open.spotify.com/user/amitmusic",
        trackName: "Oo Antava",
        artist: "Indravathi Chauhan",
        date: "1h ago",
    },
    {
        title: "@tanya.sings",
        href: "https://open.spotify.com/user/tanyasings",
        trackName: "Someone Like You",
        artist: "Adele",
        date: "1h ago",
    },
    {
        title: "@varun.lofi",
        href: "https://open.spotify.com/user/varunlofi",
        trackName: "Night Lofi",
        artist: "Lofi Girl",
        date: "2h ago",
    },
    {
        title: "@simran.vibes",
        href: "https://open.spotify.com/user/simranvibes",
        trackName: "Excuses",
        artist: "AP Dhillon",
        date: "2h ago",
    },
    {
        title: "@gaurav.beats",
        href: "https://open.spotify.com/user/gauravbeats",
        trackName: "Heat Waves",
        artist: "Glass Animals",
        date: "2h ago",
    },
    {
        title: "@ananya.codes",
        href: "https://open.spotify.com/user/ananyacodes",
        trackName: "Coding Mode",
        artist: "Spotify Studios",
        date: "2h ago",
    },
    {
        title: "@manish.music",
        href: "https://open.spotify.com/user/manishmusic",
        trackName: "Naatu Naatu",
        artist: "Rahul Sipligunj",
        date: "3h ago",
    },
    {
        title: "@nidhi.playlist",
        href: "https://open.spotify.com/user/nidhiplaylist",
        trackName: "Unstoppable",
        artist: "Sia",
        date: "3h ago",
    },
    {
        title: "@abhishek.rock",
        href: "https://open.spotify.com/user/abhishekrock",
        trackName: "Demons",
        artist: "Imagine Dragons",
        date: "3h ago",
    },
    {
        title: "@sanya.music",
        href: "https://open.spotify.com/user/sanyamusic",
        trackName: "Pasoori",
        artist: "Ali Sethi & Arijit Singh",
        date: "4h ago",
    },
    {
        title: "@harsh.vibes",
        href: "https://open.spotify.com/user/harshvibes",
        trackName: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        date: "4h ago",
    },
];

export default function LiveListeners() {
    return (
        <div className="h-90 w-full">
            <h1 className="mb-2 text-md font-medium">Live Listeners</h1>
            <ScrollArea className="h-78">
                <div className='flex flex-col m-0.5 mr-4'>
                    {activeCustomers.map((item) => (
                        <div key={item.title}>
                            <div
                                className="flex flex-row items-center justify-between rounded-md h-4"
                            >
                                {/* Content Section */}
                                <div className="flex justify-between items-center text-xs text-zinc-400 hover:text-zinc-100 w-full">
                                    <span className='flex'>
                                        <HoverCard>
                                            <HoverCardTrigger delay={10} closeDelay={10} render={<Link href={item.href ?? "https://open.spotify.com/user/316boh3i4mwmkvq5wjvuyj5zjil4"}>{item.title}</Link>} />
                                            <HoverCardContent className="w-64">
                                                <Link
                                                    className="text-sm font-semibold hover:underline"
                                                    href="https://open.spotify.com/user/316boh3i4mwmkvq5wjvuyj5zjil4"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.title}
                                                </Link>
                                                <p className="text-sm">
                                                    Currently listening to{" "}
                                                    <span className="font-medium">“{item.trackName}”</span> by{" "}
                                                    <span className="font-medium">@{item.artist}</span>
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">{item.date}</p>
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
                <span>1,284 Users</span>
                <span>↗ 8.4% this month</span>
            </div>
        </div>
    );
};