import { LayoutDashboard, Map, Hotel, Activity, Package, Users, CalendarDays, LogOut } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar"
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Cities', icon: Map, href: '/admin/cities' },
    { name: 'Establishments', icon: Hotel, href: '/admin/establishments' },
    { name: 'Activities', icon: Activity, href: '/admin/activities' },
    { name: 'Packs', icon: Package, href: '/admin/packs' },
    { name: 'Clients', icon: Users, href: '/admin/clients' },
    { name: 'Bookings', icon: CalendarDays, href: '/admin/bookings' },
];

export function AdminSidebar() {
    return (
        <Sidebar variant="sidebar" className="border-r border-slate-200">
            <SidebarHeader className="border-b border-slate-200 p-4 min-h-[72px] flex items-center justify-center">
                <Link href="/admin" className="flex items-center gap-3 w-full justify-start pl-2">
                    <Image src="/logo.svg" alt="logo" width={32} height={32} className="dark:invert" />
                    <span className="font-bold text-xl tracking-tight text-slate-900">Medina Admin</span>
                </Link>
            </SidebarHeader>
            <SidebarContent className="p-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-slate-500">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild tooltip={item.name} className="text-slate-600 hover:text-brand hover:bg-slate-100 font-medium">
                                        <Link href={item.href}>
                                            <item.icon className="!size-5" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-slate-200 p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="text-slate-600 hover:text-red-600 hover:bg-red-50 font-medium">
                            <Link href="/">
                                <LogOut className="!size-5" />
                                <span>Exit to Site</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
