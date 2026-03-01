'use client';

import { Plus, Package, Calendar, BarChart3, Edit2, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function AdminPacks() {
    const packs = [
        { pack_id: 1, pack_name: 'Full Surf Package', total_days: 7, difficulty_level: 'Beginner', estimate_price: 549 },
        { pack_id: 2, pack_name: 'Surf & Yoga Retreat', total_days: 7, difficulty_level: 'Intermediate', estimate_price: 629 },
        { pack_id: 3, pack_name: 'Imperial Cities Tour', total_days: 10, difficulty_level: 'Easy', estimate_price: 1299 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">Manage Experience Packs</h2>
                <Button className="font-bold text-sm flex items-center gap-2">
                    <Plus size={18} /> Create New Pack
                </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent border-slate-100">
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Pack Name</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Duration</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Difficulty</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Est. Price</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            {packs.map((pack) => (
                                <TableRow key={pack.pack_id} className="hover:bg-slate-50 transition-colors border-slate-100">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                                <Package size={20} />
                                            </div>
                                            <div className="font-bold text-slate-900">{pack.pack_name}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-sm text-slate-600">
                                            <Calendar size={14} className="text-slate-400" /> {pack.total_days} Days
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-sm text-slate-600">
                                            <BarChart3 size={14} className="text-slate-400" /> {pack.difficulty_level}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm font-bold text-slate-900">
                                        €{pack.estimate_price}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-brand"><Edit2 size={16} /></Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-500"><Trash2 size={16} /></Button>
                                        </div>
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
