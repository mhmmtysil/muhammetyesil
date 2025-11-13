const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL']
  },
  {
    title: 'Veritabanı',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    title: 'Araçlar & Diğer',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'Webpack']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Yetenekler
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
