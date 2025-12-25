import { useNavigate } from '@tanstack/react-router';
import type { Post as PostType } from '../lib/api';

type PostProps = {
	post: PostType;
};

const Post = ({ post }: PostProps) => {
	const navigate = useNavigate();
	const { id, title, body, tags, reactions, views, userId } = post;

	return (
		<div
			onClick={() => navigate({ to: '/posts/$id', params: { id: String(id) } })}
			className="border-b border-blue-500 pb-4 max-w-2xl mx-auto overflow-hidden cursor-pointer"
		>
			<h2 className="text-2xl font-bold">{title}</h2>
			<p>{body}</p>
			<p>{tags.join(', ')}</p>
			<p>
				{reactions.likes} likes, {reactions.dislikes} dislikes
			</p>
			<p>{views} views</p>
			<p>User ID: {userId}</p>
		</div>
	);
};

export default Post;
