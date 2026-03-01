import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdminSidebar } from "@/components/admin-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import '../../globals.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AdminSidebar />
                <SidebarInset className="bg-slate-50 min-h-screen">
                    {/* Header */}
                    <header className="flex h-20 items-center justify-between px-8 bg-white/50 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-30">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger className="-ml-3" />
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Dashboard</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="relative text-slate-500 hover:text-slate-900 transition-colors">
                                <span className="sr-only">Notifications</span>
                                <div className="w-2 h-2 bg-red-500 rounded-full absolute right-0 top-0 border border-white" />
                                <Bell size={20} />
                            </button>
                            <div className="h-8 w-[1px] bg-slate-200"></div>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9 border border-slate-200 shadow-sm">
                                    <AvatarFallback className="bg-brand text-white font-bold text-sm">A</AvatarFallback>
                                </Avatar>
                                <span className="font-medium text-sm text-slate-700 hidden sm:inline-block">Admin User</span>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="p-8">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    );
}

