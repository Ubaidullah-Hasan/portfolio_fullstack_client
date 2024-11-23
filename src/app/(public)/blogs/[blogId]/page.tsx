
type TParams = {
    params: {
        blogId: string
    }
}
const BlogDetails = ({ params }: TParams) => {
    const {blogId} = params

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{blogId}</h1>
            <p>Here goes the blog details...</p>
        </div>
    );
};

export default BlogDetails;
