import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';


export default function Blog() {

  const posts = [
    {
      title: "Tech-E, The AI Companion",
      link: "https://medium.com/@pavithanunenthiran29/introducing-tech-e-revolutionizing-the-work-life-balance-for-it-professionals-e34c82448511",
      date: "26 November",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tMyNIGh6eEMB8TZGqQK1Eg.png',
      source: "medium.com",
      excerpt: "Introducing Tech-E, a revolutionary AI-powered companion designed to enhance work-life balance for IT professionals, boosting productivity and well-being."
    },
    {
      title: "My Experience in YGCIF",
      link: "https://medium.com/@pavithanunenthiran29/my-experience-in-ygcif-151ee26b5e94",
      date: "6 Aug",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GVevoMrYIEAuBLsNtCFILw.jpeg',
      source: "medium.com",
      excerpt: "A personal account of my transformative experience in the YGCIF program, where I gained valuable insights and skills to shape my professional journey."
    },
    {
      title: "The Loneliness Epidemic Among IT Professionals",
      link: "https://medium.com/@pavithanunenthiran29/the-loneliness-epidemic-among-it-professionals-360cf413d323",
      date: "5 October",
      image: 'https://miro.medium.com/v2/resize:fit:540/format:webp/0*YI73DPEpvb5lUyrs',
      source: "medium.com",
      excerpt: "Exploring the growing issue of loneliness among IT professionals, the impact it has on mental health, and strategies for overcoming it in the tech industry."
    },
    {
      title: "The Hidden Art of Data Organization",
      link: "https://medium.com/@pavithanunenthiran29/the-hidden-art-of-data-organization-61fa64cfb477",
      date: "12 September",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCSWnkqPhO4aMxJMEzhubj0hjexeZC29yNw&s',
      source: "medium.com",
      excerpt: "A deep dive into the importance of proper data organization in modern businesses and how effective data management can drive growth and efficiency."
    },
    {
      title: "UX/UI Design: Building Intuitive and Attractive Digital Products",
      link: "https://medium.com/@pavithanunenthiran29/ux-ui-design-building-intuitive-and-attractive-digital-products-37917b102494",
      date: "17 September",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DutljBruY7gsod-a2wj3GA.png',
      source: "medium.com",
      excerpt: "This post explores the principles of UX/UI design and how to create seamless, user-friendly digital products that offer both functionality and aesthetic appeal."
    },
    {
      title: "MVC Architecture Explained: How MVC Interacts Modern Applications",
      link: "https://medium.com/@pavithanunenthiran29/mvc-architecture-explained-how-mvc-interacts-modern-applications-58b81be62308",
      date: "26 August",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eC7TlZ3TVbm-4GDzH_vJOw.jpeg',
      source: "medium.com",
      excerpt: "Understanding the MVC (Model-View-Controller) architecture and how it plays a pivotal role in organizing modern web applications for scalable and maintainable code."
    },
    {
      title: "Project IDX: Unleashing the Potential of Web Technologies",
      link: "https://medium.com/@pavithanunenthiran29/project-idx-unleashing-the-potential-of-web-technologies-a566fe671ad3",
      date: "7 July",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FWv_kPGukDA1wxxf7S7wiw.png',
      source: "medium.com",
      excerpt: "An exploration of Project IDX, a groundbreaking initiative to unlock the full potential of web technologies in building innovative and efficient applications."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1A1A1A] pt-24 pb-20"
    >
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-6 text-4xl font-bold">Blog</h1>
          <div className="w-12 h-1 bg-yellow-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group overflow-hidden rounded-2xl bg-[#2A2A2A]"
            >
              <div className="relative h-64 w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-4 text-xl font-semibold">
                  <a href={post.link} className="text-white hover:text-yellow-400">
                    {post.title}
                  </a>
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
