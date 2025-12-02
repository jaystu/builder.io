export function HeroIllustration() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full opacity-10 animate-pulse" />
      <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Main container */}
      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
        {/* Lock (center-left) */}
        <g>
          {/* Lock body */}
          <rect x="40" y="85" width="50" height="55" rx="5" fill="none" stroke="url(#lockGradient)" strokeWidth="2.5"/>
          {/* Lock shackle */}
          <path d="M 55 85 Q 55 55, 75 55 Q 95 55, 95 85" fill="none" stroke="url(#lockGradient)" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Lock dot */}
          <circle cx="75" cy="105" r="3" fill="url(#lockGradient)"/>
        </g>

        {/* Battery (right side, slightly behind) */}
        <g>
          {/* Battery body */}
          <rect x="110" y="90" width="35" height="50" rx="3" fill="none" stroke="url(#batteryGradient)" strokeWidth="2.5"/>
          {/* Battery terminal */}
          <rect x="122" y="85" width="11" height="6" rx="1" fill="url(#batteryGradient)"/>
          {/* Battery level indicator */}
          <rect x="115" y="100" width="25" height="30" rx="2" fill="url(#batteryGradient)" opacity="0.3"/>
          <rect x="115" y="115" width="25" height="15" rx="2" fill="url(#batteryGradient)"/>
        </g>

        {/* Notification/Alert (top-right, floating) */}
        <g>
          {/* Notification bubble */}
          <circle cx="140" cy="55" r="18" fill="url(#notificationGradient)" opacity="0.9"/>
          {/* Notification dot/exclamation */}
          <circle cx="140" cy="52" r="2" fill="white"/>
          <line x1="140" y1="56" x2="140" y2="62" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          {/* Pulse rings around notification */}
          <circle cx="140" cy="55" r="20" fill="none" stroke="url(#notificationGradient)" strokeWidth="1.5" opacity="0.4"/>
        </g>

        {/* Connection lines showing relationship */}
        <g stroke="url(#connectionGradient)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2">
          <line x1="95" y1="95" x2="110" y2="95" />
          <line x1="120" y1="90" x2="135" y2="70" />
        </g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(37, 99, 235)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(96, 165, 250)', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="notificationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(37, 99, 235)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(37, 99, 235)', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(96, 165, 250)', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
