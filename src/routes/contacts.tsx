import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contacts')({
	component: RouteComponent
});

function RouteComponent() {
	return <div>Contacts Page</div>;
}
