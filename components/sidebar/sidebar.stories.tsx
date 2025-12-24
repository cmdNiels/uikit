import {
	IconBell,
	IconChevronRight,
	IconFile,
	IconFolder,
	IconHome,
	IconInbox,
	IconSettings,
	IconUser,
} from "@tabler/icons-react";

import Sidebar from "./Sidebar";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import SidebarGroup from "./SidebarGroup";
import SidebarGroupAction from "./SidebarGroupAction";
import SidebarGroupContent from "./SidebarGroupContent";
import SidebarGroupLabel from "./SidebarGroupLabel";
import SidebarHeader from "./SidebarHeader";
import SidebarInput from "./SidebarInput";
import SidebarInset from "./SidebarInset";
import SidebarMenu from "./SidebarMenu";
import SidebarMenuAction from "./SidebarMenuAction";
import SidebarMenuBadge from "./SidebarMenuBadge";
import SidebarMenuButton from "./SidebarMenuButton";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarMenuSub from "./SidebarMenuSub";
import SidebarMenuSubButton from "./SidebarMenuSubButton";
import SidebarMenuSubItem from "./SidebarMenuSubItem";
import SidebarProvider from "./SidebarProvider";
import SidebarRail from "./SidebarRail";
import SidebarSeparator from "./SidebarSeparator";
import SidebarTrigger from "./SidebarTrigger";

import type { Story } from "@ladle/react";

export const Default: Story = () => (
	<SidebarProvider>
		<Sidebar>
			<SidebarHeader>
				<h2 className="px-2 text-lg font-semibold">Application</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Platform</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconInbox />
									<span>Inbox</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconBell />
									<span>Notifications</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconSettings />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">Main Content</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="aspect-video rounded-xl bg-muted/50" />
					<div className="aspect-video rounded-xl bg-muted/50" />
					<div className="aspect-video rounded-xl bg-muted/50" />
				</div>
				<div className="min-h-screen flex-1 rounded-xl bg-muted/50" />
			</div>
		</SidebarInset>
	</SidebarProvider>
);

export const WithSearchAndGroups: Story = () => (
	<SidebarProvider>
		<Sidebar>
			<SidebarHeader>
				<SidebarInput placeholder="Search..." />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive>
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconInbox />
									<span>Inbox</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconUser />
									<span>Profile</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Projects</SidebarGroupLabel>
					<SidebarGroupAction>
						<IconChevronRight />
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconFolder />
									<span>Design System</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconFolder />
									<span>Website Redesign</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconFolder />
									<span>Mobile App</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<IconUser />
							<span>John Doe</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">Dashboard</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<p>Content area with sidebar search and multiple groups.</p>
			</div>
		</SidebarInset>
	</SidebarProvider>
);

export const WithBadgesAndActions: Story = () => (
	<SidebarProvider>
		<Sidebar>
			<SidebarHeader>
				<h2 className="px-2 text-lg font-semibold">Dashboard</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconInbox />
									<span>Inbox</span>
								</SidebarMenuButton>
								<SidebarMenuBadge>24</SidebarMenuBadge>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconBell />
									<span>Notifications</span>
								</SidebarMenuButton>
								<SidebarMenuBadge>5</SidebarMenuBadge>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconFile />
									<span>Documents</span>
								</SidebarMenuButton>
								<SidebarMenuAction showOnHover>
									<IconChevronRight />
								</SidebarMenuAction>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">With Badges and Actions</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<p>This example shows menu items with badges and action buttons.</p>
			</div>
		</SidebarInset>
	</SidebarProvider>
);

export const WithSubmenus: Story = () => (
	<SidebarProvider>
		<Sidebar>
			<SidebarHeader>
				<h2 className="px-2 text-lg font-semibold">File Explorer</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Files</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconFolder />
									<span>Projects</span>
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>
											<IconFile />
											<span>Project 1</span>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>
											<IconFile />
											<span>Project 2</span>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton isActive>
											<IconFile />
											<span>Project 3</span>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconFolder />
									<span>Documents</span>
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>
											<IconFile />
											<span>Report.pdf</span>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>
											<IconFile />
											<span>Notes.md</span>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">With Submenus</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<p>This example demonstrates nested submenu items.</p>
			</div>
		</SidebarInset>
	</SidebarProvider>
);

export const WithTooltips: Story = () => (
	<SidebarProvider defaultOpen={false}>
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<h2 className="px-2 text-lg font-semibold">App</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Home">
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Inbox">
									<IconInbox />
									<span>Inbox</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Notifications">
									<IconBell />
									<span>Notifications</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Settings">
									<IconSettings />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">Collapsed with Tooltips</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<p>
					This sidebar starts collapsed. When collapsed, tooltips appear on hover. Try clicking the sidebar
					toggle button to expand it.
				</p>
			</div>
		</SidebarInset>
	</SidebarProvider>
);

export const FloatingVariant: Story = () => (
	<SidebarProvider>
		<Sidebar variant="floating">
			<SidebarHeader>
				<h2 className="px-2 text-lg font-semibold">Floating</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive>
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconInbox />
									<span>Inbox</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconUser />
									<span>Profile</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconSettings />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">Floating Variant</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<p>The floating variant adds padding and a shadow to the sidebar for a floating effect.</p>
			</div>
		</SidebarInset>
	</SidebarProvider>
);

export const InsetVariant: Story = () => (
	<SidebarProvider>
		<Sidebar variant="inset">
			<SidebarHeader>
				<h2 className="px-2 text-lg font-semibold">Inset</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive>
									<IconHome />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconInbox />
									<span>Inbox</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconUser />
									<span>Profile</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<IconSettings />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 className="text-xl font-semibold">Inset Variant</h1>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<p>The inset variant adds margin and rounded corners to the main content area.</p>
			</div>
		</SidebarInset>
	</SidebarProvider>
);
