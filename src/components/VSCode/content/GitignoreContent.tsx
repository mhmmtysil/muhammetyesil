'use client';

export default function GitignoreContent() {
    return (
        <div className="p-8 text-gray-300 font-mono text-sm leading-relaxed">
            <div className="space-y-1">
                <div className="text-gray-500"># Hayattan ignore edilmesi gerekenler</div>
                <div className="text-gray-500"># (Ama ne yazık ki Git gibi kolay değil)</div>
                <div className="mt-4"></div>

                <div className="text-gray-500"># Negatif düşünceler</div>
                <div className="text-orange-400">negativity/</div>
                <div className="text-orange-400">self-doubt/</div>
                <div className="text-orange-400">imposter-syndrome.js</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Erteleme alışkanlıkları</div>
                <div className="text-orange-400">procrastination/</div>
                <div className="text-orange-400">tomorrow.todo</div>
                <div className="text-orange-400">later.md</div>
                <div className="text-orange-400">someday-maybe/</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Toxic insanlar ve durumlar</div>
                <div className="text-orange-400">toxic-people/</div>
                <div className="text-orange-400">drama/</div>
                <div className="text-orange-400">unnecessary-stress/</div>
                <div className="text-orange-400">past-mistakes.log</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Anlamsız endişeler</div>
                <div className="text-orange-400">what-if/</div>
                <div className="text-orange-400">overthinking/</div>
                <div className="text-orange-400">worries-at-3am/</div>
                <div className="text-orange-400">*.anxiety</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Kötü alışkanlıklar</div>
                <div className="text-orange-400">junk-food/</div>
                <div className="text-orange-400">late-night-snacks/</div>
                <div className="text-orange-400">sleeping-late.habit</div>
                <div className="text-orange-400">social-media-addiction/</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Gereksiz karşılaştırmalar</div>
                <div className="text-orange-400">others-success/</div>
                <div className="text-orange-400">comparison-trap/</div>
                <div className="text-orange-400">perfect-life-on-instagram/</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Eski hatalar (commit history&apos;de kalsın yeter)</div>
                <div className="text-orange-400">regrets/</div>
                <div className="text-orange-400">should-have-done/</div>
                <div className="text-orange-400">cringe-memories.json</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Mükemmeliyetçilik</div>
                <div className="text-orange-400">perfectionism/</div>
                <div className="text-orange-400">never-good-enough.txt</div>
                <div className="text-orange-400">one-more-tweak/</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Bahane dosyaları</div>
                <div className="text-orange-400">excuses/</div>
                <div className="text-orange-400">not-ready-yet.md</div>
                <div className="text-orange-400">waiting-for-perfect-time/</div>
                <div className="mt-3"></div>

                <div className="text-gray-500"># Fear of failure</div>
                <div className="text-orange-400">fear/</div>
                <div className="text-orange-400">what-people-think/</div>
                <div className="text-orange-400">rejection.cache</div>
                <div className="mt-4"></div>

                <div className="text-gray-500"># ⚠️ ASLA ignore edilmemesi gerekenler:</div>
                <div className="text-green-400">!dreams/</div>
                <div className="text-green-400">!goals/</div>
                <div className="text-green-400">!family/</div>
                <div className="text-green-400">!health/</div>
                <div className="text-green-400">!learning/</div>
                <div className="text-green-400">!kindness.js</div>
                <div className="text-green-400">!gratitude.md</div>
                <div className="text-green-400">!self-care/</div>
                <div className="mt-4"></div>

                <div className="text-gray-500"># Pro tip: Hayatta da .gitignore kullanabilsek keşke 😄</div>
                <div className="text-gray-500"># Her gün biraz daha iyi bir versiyon olmak için commit atmaya devam! 🚀</div>
            </div>
        </div>
    );
}
