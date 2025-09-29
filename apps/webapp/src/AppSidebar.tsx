import {
	Briefcase,
	Home,
	LogOut,
	Settings,
	User,
	Wallet,
} from 'lucide-react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';

export function AppSidebar() {
	const menuItems = [
		{
			title: 'Home',
			url: '#',
			icon: Home,
		},
		{
			title: 'Bids',
			url: '#',
			icon: Wallet,
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings,
		},
	];

	return (
		<Sidebar>
			<SidebarHeader>
				<Select defaultValue="sales">
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a workspace" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="sales">
							<div className="flex items-center gap-2">
								<Briefcase className="h-4 w-4" />
								<span>Sales</span>
							</div>
						</SelectItem>
						<SelectItem value="production">
							<div className="flex items-center gap-2">
								<Briefcase className="h-4 w-4" />
								<span>Production</span>
							</div>
						</SelectItem>
					</SelectContent>
				</Select>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon className="h-4 w-4" />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<User className="h-4 w-4" />
							<span>Mark Delorey</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<LogOut className="h-4 w-4" />
							<span>Log Out</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}

export default AppSidebar;
