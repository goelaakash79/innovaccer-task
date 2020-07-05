import React from "react";

const Blog = ({ data }) => {
	return (
		<div className="blog-section">
			<h3 className="section-heading">Blog</h3>
			<ul className="mt-4">
				{data &&
					data.map(blog => {
						return (
							<li className="card" key={blog.title}>
								<a href={blog.link}>
									<h5>
										{"🚀"} {blog.title}
									</h5>
									<p
										className="description"
										style={{
											fontWeight: 400,
											fontSize: 14
										}}
									>
										<span className="tag">
											{blog.readtime} read
										</span>{" "}
										{blog.tagline}
									</p>
								</a>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Blog;
