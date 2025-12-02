import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Lock, Mail, MessageSquare, ArrowRight, Smartphone, AlertTriangle, Users } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">LockAlerts</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Try It
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Decorative background elements */}
          <div className="absolute -right-40 -top-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
          <div className="absolute -left-40 top-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2s" />

          <div className="relative text-center">
            {/* Hero visual with lock, battery, and notification */}
            <div className="mb-12 flex justify-center">
              <HeroIllustration />
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Smart Lock Battery Automation,
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Zero Downtime</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Don't let your guests get locked out.&nbsp; LockAlerts monitors your smart lock's health to give you maximum peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base h-12 px-8">
                Try It
                <br />
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            The Problem with Smart Locks
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Without monitoring, you're flying blind
          </p>

          <div className="grid md:grid-cols-3 gap-8 justify-start items-start">
            <div className="p-8 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg mb-4">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Missed Alerts</h3>
              <p className="text-slate-600">
                Manual checks are unreliable. You need instant notifications when the issue occurs.
              </p>
            </div>

            <div className="p-8 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white hover:shadow-lg transition-shadow mb-7">
              <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg mb-4">
                <Smartphone className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Locked Out</h3>
              <p className="text-slate-600">
                Without a spare key, guests will be locked out of your house and will need to reach out to you for help.
              </p>
            </div>

            <div className="p-8 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white hover:shadow-lg transition-shadow mb-7">
              <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg mb-4">
                <Users className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Bad Guest Experience</h3>
              <p className="text-slate-600">
                Poor lock reliability leads to negative reviews and cancellations from potential guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How LockAlerts Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            How LockAlerts Works
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Simple, automated, always-on monitoring
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-lg font-semibold text-white">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Connect Your Locks</h3>
                <p className="text-slate-600">
                  Integrate with your smart lock systems using Seam. Works with all major brands.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-lg font-semibold text-white">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Automatic Health Checks</h3>
                <p className="text-slate-600">
                  LockAlerts continuously monitors your locks' status, battery, connectivity, and more.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-lg font-semibold text-white">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Instant Alerts</h3>
                <p className="text-slate-600">
                  Critical issues trigger real-time notifications via email and SMS so you can act fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Built for Peace of Mind
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Everything you need to keep your smart locks running perfectly
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Real-Time Monitoring</h3>
                <p className="text-slate-600">24/7 continuous health checks across all your smart locks</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Multi-Channel Alerts</h3>
                <p className="text-slate-600">Critical notifications via email and SMS so you never miss an issue</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Battery Alerts</h3>
                <p className="text-slate-600">Get notified before batteries die so you can replace them proactively</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Connectivity Checks</h3>
                <p className="text-slate-600">Know instantly if a lock loses network connection</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Guest Protection</h3>
                <p className="text-slate-600">Ensure guests never encounter locked-out situations</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Multi-Property Support</h3>
                <p className="text-slate-600">Monitor and manage locks across multiple properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Alert Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Stay Connected, Always Alert
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Multiple channels to keep you informed
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Email Notifications</h3>
              <p className="text-slate-600">
                Detailed alerts delivered to your inbox with full context about what happened and how to fix it.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">SMS Alerts</h3>
              <p className="text-slate-600">
                Get critical alerts as text messages so you're notified instantly, even when you're on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Stop Worrying About Your Smart Locks
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get real-time alerts and peace of mind. Start your free trial today.
          </p>
          <Button size="lg" className="bg-white hover:bg-slate-100 text-blue-600 font-semibold text-base h-12 px-8">
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">LockAlerts</span>
              </div>
              <p className="text-sm text-slate-500">
                Smart lock health monitoring for landlords and hosts.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-slate-300">Features</a></li>
                <li><a href="#" className="hover:text-slate-300">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-300">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-slate-300">About</a></li>
                <li><a href="#" className="hover:text-slate-300">Blog</a></li>
                <li><a href="#" className="hover:text-slate-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-slate-300">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-300">Terms</a></li>
                <li><a href="#" className="hover:text-slate-300">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2024 LockAlerts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
