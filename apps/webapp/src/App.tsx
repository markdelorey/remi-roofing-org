import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './AppSidebar';

function App() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="ml-16 p-4">
				<SidebarTrigger />
				<h1 className="text-2xl font-bold">Remi Roofing CRM</h1>
				<p>Main application content goes here.</p>
			</main>
		</SidebarProvider>
	);
}

export default App;
