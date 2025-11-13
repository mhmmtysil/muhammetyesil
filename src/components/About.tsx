export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Hakkımda
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Merhaba! Ben Muhammet Yeşil, web geliştirme alanında tutkulu bir yazılım geliştiricisiyim.
              Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan projeler geliştiriyorum.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Frontend ve backend geliştirme konusunda deneyimliyim. React, Next.js, Node.js ve 
              TypeScript gibi teknolojilerle çalışarak ölçeklenebilir web uygulamaları oluşturuyorum.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sürekli öğrenmeye ve gelişmeye açık, problem çözme odaklı bir yaklaşıma sahibim.
              Yeni teknolojileri takip ediyor ve projelerimde en iyi pratikleri uygulamaya çalışıyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
