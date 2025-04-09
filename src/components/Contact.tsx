
import { useState } from 'react';
import { Mail, MessageSquare, Send, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "メッセージを送信しました",
        description: "お問い合わせありがとうございます。折り返しご連絡いたします。",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            プロジェクトのご相談、AIの導入支援、登壇依頼など、お気軽にお問い合わせください。
          </p>
          <div className="w-20 h-1 bg-apollo-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-apollo-primary bg-opacity-10 p-4 rounded-full mb-4">
                  <Mail className="text-apollo-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">メール</h3>
                <p className="text-gray-600">info@apollo-ai.example.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-apollo-primary bg-opacity-10 p-4 rounded-full mb-4">
                  <MessageSquare className="text-apollo-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">SNS</h3>
                <p className="text-gray-600">Twitter: @apollo_ai</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-apollo-primary bg-opacity-10 p-4 rounded-full mb-4">
                  <Users className="text-apollo-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">コミュニティ</h3>
                <p className="text-gray-600">AIの社（Discord）</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="山田 太郎"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">件名</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="お問い合わせの件名"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">メッセージ</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    className="bg-apollo-primary hover:bg-opacity-90 text-white px-8 py-6 rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        送信中...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        送信する
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
