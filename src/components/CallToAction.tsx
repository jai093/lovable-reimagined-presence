
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-8 py-16 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Next Web App?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses who are shipping faster with Lovable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-medium">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
