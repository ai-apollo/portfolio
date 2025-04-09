
import { Book, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-apollo-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 mb-6">
              はじめまして、<span className="highlight-text">あぽろ</span>と申します。私は<span className="highlight-text">非エンジニアバックグラウンド</span>を持ちながらも、AI開発の可能性に魅了され、特に<span className="highlight-text">自動化エージェント</span>の構築に情熱を注いでいます。
            </p>
            <p className="text-lg text-gray-700 mb-6">
              「吸って吐いたらコンテンツまで」というコンセプトのもと、AIを活用した業務効率化から、コンテンツ制作、知識の共有まで、一気通貫で取り組んでいます。エンジニアではなくても、最新のAI技術を駆使して<span className="highlight-text">実用的な価値</span>を生み出せることを証明したいと考えています。
            </p>
            <p className="text-lg text-gray-700 mb-6">
              現在は「<span className="highlight-text">AIの社</span>」というコミュニティを運営し、「<span className="highlight-text">生成AIを学ぶなら漫画から</span>」という書籍も出版。AI技術の可能性を多くの人に伝え、共に成長していくことを目指しています。
            </p>
            <p className="text-lg text-gray-700">
              テクノロジーの進化と共に、<span className="highlight-text">人生の可能性も無限に広がる</span>と信じています。あなたのプロジェクトやビジョンに、私のAI知識と実践力で貢献できれば幸いです。
            </p>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-apollo-primary bg-opacity-10 p-3 rounded-full">
                  <Zap className="text-apollo-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">自動化の力</h3>
                  <p className="text-gray-600">
                    エンジニアでなくても、AIツールを活用することで複雑なタスクを自動化。時間と労力を大幅に節約し、本当に重要なことに集中できる環境を構築します。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-apollo-primary bg-opacity-10 p-3 rounded-full">
                  <Book className="text-apollo-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">コンテンツ創造</h3>
                  <p className="text-gray-600">
                    AIと人間の強みを組み合わせた独自のコンテンツ制作フロー。情報収集から制作、配信まで、効率的かつ質の高いアウトプットを実現します。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-apollo-primary bg-opacity-10 p-3 rounded-full">
                  <Users className="text-apollo-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">コミュニティ育成</h3>
                  <p className="text-gray-600">
                    「AIの社」運営を通じて培った、技術と人をつなぐ視点。AIの可能性を最大限に引き出しながら、人々にとって意味のある価値を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
