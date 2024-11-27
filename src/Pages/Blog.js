import '../Assets/Style/Blog.css';
import Blog1 from '../Assets/Images/project3.jpeg';
import Blog2 from '../Assets/Images/blog1.jpeg';
import Blog3 from '../Assets/Images/blog2.jpg';
import Blog4 from '../Assets/Images/blog3.jpg';
import Blog5 from '../Assets/Images/blog5.jpg';
import Blog6 from '../Assets/Images/blog6.jpg';
import Blog7 from '../Assets/Images/blog7.jpg';


const Blog = () => {
  const blogPosts = [
    {
      title: "Tech-E, The AI Companion",
      link: "https://medium.com/@pavithanunenthiran29/introducing-tech-e-revolutionizing-the-work-life-balance-for-it-professionals-e34c82448511",
      date: "26 November",
      image: Blog1, 
      source: "medium.com",
    },
    {
      title: "My Experience in YGCIF",
      link: "https://medium.com/@pavithanunenthiran29/my-experience-in-ygcif-151ee26b5e94",
      date: "6 Aug",
      image: Blog2, 
      source: "medium.com",
    },
    {
      title: "The Loneliness Epidemic Among IT Professionals",
      link: "https://medium.com/@pavithanunenthiran29/the-loneliness-epidemic-among-it-professionals-360cf413d323",
      date: "5 October",
      image: Blog3,
      source: "medium.com",
    },
    {
      title: "The Hidden Art of Data Organization",
      link: "https://medium.com/@pavithanunenthiran29/the-hidden-art-of-data-organization-61fa64cfb477",
      date: "12 September",
      image: Blog4, 
      source: "medium.com",
    },
    {
      title: "UX/UI Design: Building Intuitive and Attractive Digital Products",
      link: "https://medium.com/@pavithanunenthiran29/ux-ui-design-building-intuitive-and-attractive-digital-products-37917b102494",
      date: "17 September",
      image: Blog5, 
      source: "medium.com",
    },    {
      title: "MVC Architecture Explained: How MVC Interacts Modern Applications",
      link: "https://medium.com/@pavithanunenthiran29/mvc-architecture-explained-how-mvc-interacts-modern-applications-58b81be62308",
      date: "26 August",
      image: Blog6, 
      source: "medium.com",
    },    {
      title: "Project IDX: Unleashing the Potential of Web Technologies",
      link: "https://medium.com/@pavithanunenthiran29/project-idx-unleashing-the-potential-of-web-technologies-a566fe671ad3",
      date: "7 July",
      image: Blog7, 
      source: "medium.com",
    },
  ];

  return (
    <>
    <div className="container my-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-gradient" style={{fontSize: '2.5rem'}}>Blog</h1>
        <button
          className="btn btn-outline-light py-2"
          onClick={() => window.open('https://medium.com/@pavithanunenthiran29', '_blank', 'noopener,noreferrer')}
        >
          More Blogs
        </button>
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control text-white custom-input"
          placeholder="Search blog posts..."
          aria-label="Search blog posts"
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: '0 0 10px #88A4E6',
          }}
        />
        <button 
          className="btn btn-dark border-secondary" 
          type="button"
          style={{
            background: 'transparent',
            boxShadow: '0 0 10px #88A4E6',
          }}
          >
          <i className="bi bi-search text-light"></i>
        </button>
      </div>
    </div>

<div className="container my-5">
<div className="row">
  {blogPosts.map((post, index) => (
    <div key={index} className="col-12 mb-4">
      <div className="card  text-light border-0 shadow p-3">
        <div className="row g-0 align-items-center">
          
          <div className="col-md-3">
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid rounded"
            />
          </div>
          
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  {post.title}
                </a>
              </h5>
              <p className="card-text">
                <small className="text-white">
                  Published on {post.source}
                </small>
              </p>
              <p className="card-text">
                <small className="text-info">
                  <i className="bi bi-calendar"></i> {post.date}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</>
  );
};

export default Blog;
