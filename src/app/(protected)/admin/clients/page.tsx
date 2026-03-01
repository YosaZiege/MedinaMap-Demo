'use client';

import { Search, User, Mail, Phone, Globe, Edit2, Trash2 } from 'lucide-react';

export default function AdminClients() {
    const clients = [
        { user_id: 1, full_name: 'Sofia Martinez', email: 'sofia@example.com', phone_number: '+34 600 000 000', preferred_language: 'Spanish' },
        { user_id: 2, full_name: 'Lucas Dubois', email: 'lucas@example.com', phone_number: '+33 600 000 000', preferred_language: 'French' },
        { user_id: 3, full_name: 'Emma Richards', email: 'emma@example.com', phone_number: '+44 700 000 000', preferred_language: 'English' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">Clients Management</h2>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search clients..."
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand/20 outline-none"
                    />
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                                <th className="px-6 py-4">Client</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Language</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {clients.map((client) => (
                                <tr key={client.user_id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                                {client.full_name[0]}
                                            </div>
                                            <div className="font-bold text-slate-900">{client.full_name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Mail size={14} className="text-slate-400" /> {client.email}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Phone size={14} className="text-slate-400" /> {client.phone_number}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Globe size={14} className="text-slate-400" /> {client.preferred_language}
                                        </div>
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
