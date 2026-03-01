'use client';

import { Plus, Search, Eye, Edit2, Trash2 } from 'lucide-react';
import { cities } from '@/data/cities';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AdminCities() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">Manage Cities</h2>
                <Button className="font-bold text-sm flex items-center gap-2">
                    <Plus size={18} /> Add New City
                </Button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input
                        type="text"
                        placeholder="Search cities..."
                        className="w-full pl-10 pr-4 py-2 h-10 bg-slate-50 border-none shadow-none rounded-xl text-sm transition-all focus-visible:ring-brand/20"
                    />
                </div>
                <select className="bg-slate-50 border-none rounded-xl text-sm px-4 py-2 h-10 outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer">
                    <option>All Regions</option>
                    <option>Atlantic Coast</option>
                    <option>Imperial Cities</option>
                    <option>Atlas Mountains</option>
                </select>
                <select className="bg-slate-50 border-none rounded-xl text-sm px-4 py-2 h-10 outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer">
                    <option>Status: All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

            {/* Cities Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent border-slate-100">
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">City</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400">Packages</TableHead>
                                <TableHead className="text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                            {cities.map((city) => (
                                <TableRow key={city.city_id} className="hover:bg-slate-50 transition-colors border-slate-100">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 relative">
                                                {city.image_url && <img src={city.image_url} alt="" className="w-full h-full object-cover" />}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">{city.name}</div>
                                                <div className="text-xs text-slate-500 truncate max-w-[200px]">{city.tagline}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600">
                                        {city.latitude?.toFixed(2)}, {city.longitude?.toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        {city.is_active ? (
                                            <Badge variant="outline" className="bg-green-100 text-green-700 border-none text-[10px] items-center font-bold uppercase tracking-wider">Active</Badge>
                                        ) : (
                                            <Badge variant="outline" className="bg-slate-100 text-slate-500 border-none text-[10px] items-center font-bold uppercase tracking-wider">Coming Soon</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-sm font-medium text-slate-700">
                                        {city.packagesCount} Packs
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-brand"><Eye size={16} /></Button>
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
