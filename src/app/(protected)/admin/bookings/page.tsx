'use client';

import { Search, Filter, CalendarDays, User, Mail, CheckCircle2, MoreVertical } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminBookings() {
    const bookings = [
        { booking_id: 'BK-4821', client_id: 1, booking_type: 'pack', booking_date: 'Feb 28, 2026', scheduled_date: 'Mar 15, 2026', status: 'confirmed', total_price: 549 },
        { booking_id: 'BK-4822', client_id: 2, booking_type: 'pack', booking_date: 'Feb 27, 2026', scheduled_date: 'Apr 10, 2026', status: 'pending', total_price: 629 },
        { booking_id: 'BK-4823', client_id: 3, booking_type: 'activity', booking_date: 'Feb 25, 2026', scheduled_date: 'Mar 20, 2026', status: 'cancelled', total_price: 549 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">Bookings Management</h2>
                <div className="flex gap-2">
                    <Button variant="outline" className="font-bold text-sm flex items-center gap-2 bg-white">
                        <Filter size={16} /> Filters
                    </Button>
                    <Button className="font-bold text-sm">
                        Export Report
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent border-slate-100">
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Booking ID</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Client</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Package</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Dates</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Amount</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            {bookings.map((bk) => (
                                <TableRow key={bk.booking_id} className="hover:bg-slate-50 transition-colors border-slate-100">
                                    <TableCell className="font-mono text-xs font-bold text-slate-400">{bk.booking_id}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                                <User size={16} />
                                            </div>
                                            <div className="font-bold text-slate-900">Client ID: {bk.client_id}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600 capitalize">{bk.booking_type}</TableCell>
                                    <TableCell>
                                        <div className="text-xs font-bold text-slate-900">{bk.scheduled_date}</div>
                                        <div className="text-[10px] text-slate-400 uppercase">Booked: {bk.booking_date}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`border-none text-[10px] font-bold uppercase tracking-wider ${bk.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                bk.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {bk.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm font-bold text-slate-900">€{bk.total_price}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-brand"><MoreVertical size={16} /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
