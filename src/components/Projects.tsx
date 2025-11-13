const projects = [
  {
    id: 1,
    title: 'E-Ticaret Platformu',
    description: 'Next.js ve Tailwind CSS ile geliştirilmiş modern bir e-ticaret uygulaması. Kullanıcı kimlik doğrulama, sepet yönetimi ve ödeme entegrasyonu içerir.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Yönetim Sistemi',
    description: 'Ekipler için geliştirilmiş real-time görev takip ve proje yönetim uygulaması. Drag & drop özelliği ve bildirim sistemi içerir.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#'
  },
  {
    id: 3,
    title: 'Portföy Web Sitesi',
    description: 'Kişisel portföy ve blog uygulaması. Markdown desteği, dark mode ve responsive tasarım ile geliştirildi.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 4,
    title: 'Hava Durumu Uygulaması',
    description: 'API entegrasyonu ile geliştirilmiş hava durumu uygulaması. Konum tabanlı tahmin ve 7 günlük hava durumu görüntüleme.',
    technologies: ['React', 'OpenWeather API', 'CSS'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projeler
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Projeyi Görüntüle →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
