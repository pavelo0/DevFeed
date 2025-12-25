import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { fetchPostById } from '../lib/api';

export const Route = createFileRoute('/posts/$id')({
	component: PostDetailPage
});

function PostDetailPage() {
	const { id } = Route.useParams();

	const {
		data: post,
		isLoading,
		error
	} = useQuery({
		queryKey: ['post', id],
		queryFn: () => fetchPostById(id)
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className="max-w-2xl mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">{post.title}</h1>
			<p className="mb-4">{post.body}</p>
			<div className="mb-4">
				<p>Tags: {post.tags.join(', ')}</p>
				<p>
					{post.reactions.likes} likes | {post.reactions.dislikes} dislikes
				</p>
				<p>{post.views} views</p>
			</div>
		</div>
	);
}
