interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-8 w-8">
        <img
          src="/logo.jpg"
          alt="MUATB Logo"
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-lg font-semibold text-gray-900">
        Intranet MUATB
      </span>
    </div>
  );
}
