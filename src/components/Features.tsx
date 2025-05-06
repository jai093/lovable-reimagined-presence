
import { Check, Code, Image, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Code Generation",
      description: "Transform your ideas into production-ready code through simple conversations."
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Smart Debugging",
      description: "AI-powered debugging helps identify and fix issues in your code automatically."
    },
    {
      icon: <Image className="h-12 w-12 text-blue-600" />,
      title: "Design to Code",
      description: "Describe your design vision and watch as it transforms into responsive UI components."
    },
    {
      icon: <Check className="h-12 w-12 text-blue-600" />,
      title: "Full Stack Support",
      description: "Create both frontend and backend components all within the same platform."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> for Modern Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build production-ready web applications without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover-lift">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Real-time Collaboration
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Work together with your team in real-time. See changes as they happen and provide instant feedback.
                </p>
                <ul className="space-y-3">
                  {["Live code preview", "Team permissions", "Version history", "Comment threads"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-md">
                <div className="flex space-x-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  <div className="mt-4 h-20 bg-white/20 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
