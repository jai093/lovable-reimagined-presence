
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Beautiful Web Apps with 
              <span className="gradient-text block"> AI-Powered Code</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Create stunning, responsive web applications through simple conversations. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-bg text-lg py-6 px-8">Try for Free</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
                See Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <div className="bg-gray-100 rounded-md">
                  <div className="flex items-center space-x-2 p-3 border-b border-gray-200 bg-gray-50 rounded-t-md">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-2 text-sm text-gray-500">Lovable Editor</div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm text-blue-600 font-medium">U</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-200 p-3 rounded-lg rounded-tl-none">
                          <p className="text-gray-800">Create a landing page with a gradient hero section</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-sm text-purple-600 font-medium">AI</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-purple-100 p-3 rounded-lg rounded-tl-none">
                          <p className="text-gray-800">I'll create that for you with a modern gradient design...</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-medium">Generated Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
