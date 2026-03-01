import { Map, Hotel, Activity, Package, Users, CalendarDays, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const stats = [
    { name: 'Total Cities', value: '8', icon: Map, iconColor: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Active Packs', value: '12', icon: Package, iconColor: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'Total Bookings', value: '142', icon: CalendarDays, iconColor: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'Happy Clients', value: '480', icon: Users, iconColor: 'text-orange-600', bgColor: 'bg-orange-100' },
];

export default function AdminDashboard() {
    const recentBookings = [
        { booking_id: '4821', client_id: 1, booking_type: 'pack', status: 'confirmed', total_price: 549 },
        { booking_id: '4822', client_id: 2, booking_type: 'pack', status: 'pending', total_price: 629 },
        { booking_id: '4823', client_id: 3, booking_type: 'pack', status: 'confirmed', total_price: 549 },
        { booking_id: '4824', client_id: 4, booking_type: 'activity', status: 'cancelled', total_price: 120 },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.name} className="shadow-sm border-slate-200">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-500">{stat.name}</CardTitle>
                            <div className={`p-2 rounded-xl ${stat.bgColor}`}>
                                <stat.icon className={`size-4 ${stat.iconColor}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Bookings */}
                <Card className="shadow-sm border-slate-200 flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                        <CardTitle className="text-lg font-bold text-slate-900">Recent Bookings</CardTitle>
                        <Button variant="ghost" size="sm" asChild className="text-brand font-bold text-sm h-8 gap-1 pl-2 pr-1">
                            <Link href="/admin/bookings">
                                View All <ArrowRight size={14} />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent border-slate-100">
                                    <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">ID</TableHead>
                                    <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Client</TableHead>
                                    <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Type</TableHead>
                                    <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</TableHead>
                                    <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentBookings.map((bk) => (
                                    <TableRow key={bk.booking_id} className="hover:bg-slate-50 border-slate-100">
                                        <TableCell className="font-mono text-xs font-bold text-slate-400">#{bk.booking_id}</TableCell>
                                        <TableCell>
                                            <div className="font-bold text-slate-900 text-xs">ID: {bk.client_id}</div>
                                        </TableCell>
                                        <TableCell className="text-xs text-slate-600 capitalize">{bk.booking_type}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`text-[10px] font-bold uppercase tracking-wider border-none ${bk.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                    bk.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {bk.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm font-bold text-slate-900">€{bk.total_price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Top Destinations */}
                <Card className="shadow-sm border-slate-200 flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                        <CardTitle className="text-lg font-bold text-slate-900">Top Destinations</CardTitle>
                        <div className="flex items-center gap-1 text-xs text-slate-400 font-bold uppercase">
                            <TrendingUp size={14} /> Trending
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        {[
                            { name: 'Agadir', count: 42, percent: 85 },
                            { name: 'Taghazout', count: 31, percent: 70 },
                            { name: 'Marrakech', count: 18, percent: 45 },
                            { name: 'Fes', count: 12, percent: 30 },
                        ].map((city) => (
                            <div key={city.name} className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-slate-700">{city.name}</span>
                                    <span className="text-slate-500 font-medium">{city.count} bookings</span>
                                </div>
                                <Progress value={city.percent} className="h-2" />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
