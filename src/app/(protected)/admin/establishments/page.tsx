'use client';

import { Plus, Search, Hotel, MapPin, MoreVertical, Edit2, Trash2 } from 'lucide-react';

export default function AdminEstablishments() {
    const establishments = [
        { establishment_id: 1, name: 'Surf & Soul Riad', type: 'Accommodation', area: 'Taghazout Bay', city_id: 1, whatsapp: '+212 661 22 33 44', star: 4 },
        { establishment_id: 2, name: 'Mina Heritage', type: 'Accommodation', area: 'Medina', city_id: 4, whatsapp: '+212 661 55 66 77', star: 5 },
        { establishment_id: 3, name: 'Ocean View Apartments', type: 'Accommodation', area: 'Marina', city_id: 1, whatsapp: '+212 661 88 99 00', star: 3 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">Manage Establishments</h2>
                <button className="bg-brand text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-brand-dark transition-colors">
                    <Plus size={18} /> Add Establishment
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                                <th className="px-6 py-4">Establishment</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">WhatsApp</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {establishments.map((est) => (
                                <tr key={est.establishment_id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                                <Hotel size={20} />
                                            </div>
                                            <div className="font-bold text-slate-900">{est.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-sm text-slate-600">
                                            <MapPin size={14} className="text-slate-400" /> {est.area}, City ID: {est.city_id}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-700">{est.type}</span>
                                            {est.star && <span className="text-xs text-amber-500 font-bold">{'★'.repeat(est.star)}</span>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {est.whatsapp}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-brand transition-colors"><Edit2 size={18} /></button>
                                            <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
