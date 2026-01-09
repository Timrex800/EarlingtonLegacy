import { type FC } from 'react';
import { ShoppingBag, Cake, Calendar, ArrowRight } from 'lucide-react';

const EventsSection: FC = () => {
    const events = [
        {
            id: 'flea-market',
            title: "Earlington Day Flea Market",
            date: "Coming Soon",
            description: "A community-focused flea market celebrating local vendors and heritage. Join us for a day of commerce and connection.",
            icon: <ShoppingBag className="text-primary" size={32} />,
            color: "from-amber-500/10 to-transparent"
        },
        {
            id: 'birthday',
            title: "45th Birthday Celebration",
            date: "December 2025",
            description: "Honoring four and a half decades of excellence. A grand ceremony for alumni, students, and the community.",
            icon: <Cake className="text-primary" size={32} />,
            color: "from-primary/10 to-transparent"
        }
    ];

    return (
        <section id="events" className="py-24 bg-slate-50 dark:bg-black/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Upcoming <span className="text-primary italic">Events</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Join us in celebrating our heritage and supporting our community through these special initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event) => (
                        <div 
                            key={event.id}
                            className={`relative p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 bg-white dark:bg-surface-dark overflow-hidden group hover:border-primary/50 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                        {event.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mb-1">
                                            <Calendar size={12} />
                                            {event.date}
                                        </div>
                                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{event.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    {event.description}
                                </p>
                                <button 
                                    type="button"
                                    disabled
                                    className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all opacity-50 cursor-not-allowed"
                                >
                                    Registration Opening Soon <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        <span className="font-black text-primary uppercase mr-2 tracking-wider">Account Portal:</span>
                        Secure user accounts for vendors and attendees are being developed via Firebase.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
