import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../lib/api';
import Post from './Post';

const PostsList = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['posts'],
		queryFn: fetchPosts
	});

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		return <h2>Something went wrong: {error.message}</h2>;
	}

	return (
		<div className="">
			<h2>Posts: {data?.length || 0}</h2>

			{data?.map(post => (
				<Post
					key={post.id}
					post={post}
				/>
			))}
		</div>
	);
};

export default PostsList;
