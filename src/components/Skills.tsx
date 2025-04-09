
import { CheckCircle2 } from 'lucide-react';

type SkillCategory = {
  title: string;
  skills: {
    name: string;
    level?: number; // 1-5 for proficiency level
  }[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI モデル / API",
      skills: [
        { name: "GPT-4 / GPT-3.5", level: 5 },
        { name: "Claude", level: 4 },
        { name: "Gemini", level: 3 },
        { name: "Stable Diffusion", level: 4 },
        { name: "DALL-E 3", level: 4 },
        { name: "Midjourney", level: 3 },
        { name: "ElevenLabs", level: 3 }
      ]
    },
    {
      title: "自動化ツール",
      skills: [
        { name: "Make (Integromat)", level: 4 },
        { name: "Zapier", level: 3 },
        { name: "n8n", level: 2 },
        { name: "Bubble", level: 3 },
        { name: "Voiceflow", level: 3 },
        { name: "AutoGPT", level: 3 },
        { name: "LangChain (基礎)", level: 2 }
      ]
    },
    {
      title: "コンテンツ制作",
      skills: [
        { name: "AI執筆補助", level: 5 },
        { name: "AI画像生成", level: 4 },
        { name: "AI動画編集", level: 3 },
        { name: "Webサイト構築", level: 3 },
        { name: "YouTube運用", level: 4 },
        { name: "SNSマーケティング", level: 3 },
        { name: "書籍出版", level: 4 }
      ]
    },
    {
      title: "その他スキル",
      skills: [
        { name: "コミュニティ運営", level: 4 },
        { name: "プロジェクト管理", level: 3 },
        { name: "ビジネス戦略立案", level: 3 },
        { name: "Python (基礎)", level: 2 },
        { name: "マーケティング", level: 3 },
        { name: "教育/トレーニング", level: 4 },
        { name: "クライアント対応", level: 4 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            非エンジニアながらも、AIと自動化ツールを駆使して様々な課題を解決します。技術と実用のバランスを重視したスキルセットをご紹介します。
          </p>
          <div className="w-20 h-1 bg-apollo-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle2 size={18} className="text-apollo-primary mr-2" />
                      <span className="text-gray-800">{skill.name}</span>
                    </div>
                    {skill.level && (
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level! ? 'bg-apollo-primary' : 'bg-gray-300'
                            }`}
                          ></span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">提供できる価値</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold mb-3 text-apollo-primary">業務効率化</h4>
              <p className="text-gray-700">
                AIと自動化ツールを活用して、反復的な業務や時間のかかるタスクを効率化。人間はより創造的な仕事に集中できる環境を構築します。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold mb-3 text-apollo-primary">コンテンツ制作</h4>
              <p className="text-gray-700">
                AIを活用した効率的なコンテンツ制作フローを構築。アイデア出しから執筆、画像生成まで、質を保ちながら制作速度を飛躍的に向上させます。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold mb-3 text-apollo-primary">AI導入支援</h4>
              <p className="text-gray-700">
                非エンジニア視点での実践的なAI活用法を提案。技術的な壁を感じることなく、すぐに業務やプロジェクトにAIを取り入れる方法をサポートします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
