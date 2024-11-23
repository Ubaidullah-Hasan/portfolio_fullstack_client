import SectionTitle from '@/src/components/SectionTitle';
import ProjectCard from '@/src/components/cards/ProjectCard';
import { getProjectsData } from '@/src/services/projects.services';

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills. It includes sections for my work experience, education, and contact information.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        startDate: new Date("2023-01-15"),
        endDate: null,
        isOngoing: true,
        link: "https://github.com/username/portfolio-website",
        images: [
            "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
            "https://example.com/images/portfolio2.png",
            "https://example.com/images/portfolio3.png"
        ]
    },
    {
        title: "E-commerce Platform",
        description: "An online e-commerce platform that allows users to browse products, add them to a cart, and make purchases. Features user authentication and payment integration.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        startDate: new Date("2022-06-01"),
        endDate: new Date("2023-05-30"),
        isOngoing: false,
        link: "https://github.com/username/e-commerce-platform",
        images: [
            "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
            "https://example.com/images/ecommerce2.png",
            "https://example.com/images/ecommerce3.png"
        ]
    },
    {
        title: "Blog Application",
        description: "A blogging platform where users can create, edit, and delete their posts. It includes features like comments, likes, and user profiles.",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        startDate: new Date("2023-03-10"),
        endDate: null,
        isOngoing: true,
        link: "https://github.com/username/blog-application",
        images: [
            "https://149818895.v2.pressablecdn.com/wp-content/uploads/2019/06/Daffodil-International-University.jpg",
            "https://example.com/images/blog2.png",
            "https://example.com/images/blog3.png"
        ]
    }
];

const ProjectsPage = async() => {
    const projectsData = await getProjectsData();
    // console.log(projectData);

    return (
        <section
            className="scroll-mt-[120px] bg-white p-8 rounded-2xl flex flex-col"
            id="projects"
        >
            <div className="mb-10">
                <SectionTitle
                    className="flex flex-col justify-center items-center text-center w-1/3 mx-auto"
                    slogan="Crafting Ideas into Reality"
                    title="Projects"
                />
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} i={index} project={project} />
                ))}
            </div>
            <div />
        </section>
    );
};

export default ProjectsPage;