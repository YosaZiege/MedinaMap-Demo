'use client';

import { Plus, Clock, Euro, Users, Activity, Edit2, Trash2 } from 'lucide-react';

export default function AdminActivities() {
    const activities = [
        { activity_id: 1, title: 'Morning Surf Lesson', city_id: 1, duration_estimate: '2.5h', base_price: 45, is_group_activity: true },
        { activity_id: 2, title: 'Sunrise Yoga', city_id: 1, duration_estimate: '1.5h', base_price: 20, is_group_activity: true },
        { activity_id: 3, title: 'Guided Medina Tour', city_id: 4, duration_estimate: '4h', base_price: 60, is_group_activity: false },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">Manage Activities</h2>
                <button className="bg-brand text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-brand-dark transition-colors">
                    <Plus size={18} /> Add Activity
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                                <th className="px-6 py-4">Activity</th>
                                <th className="px-6 py-4">City</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {activities.map((act) => (
                                <tr key={act.activity_id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                                <Activity size={20} />
                                            </div>
                                            <div className="font-bold text-slate-900">{act.title}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">ID: {act.city_id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-sm text-slate-600">
                                            <Clock size={14} className="text-slate-400" /> {act.duration_estimate}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                                            <Euro size={14} className="text-slate-400" /> {act.base_price}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-sm text-slate-600">
                                            <Users size={14} className="text-slate-400" /> {act.is_group_activity ? 'Group' : 'Private'}
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
