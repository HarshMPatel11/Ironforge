import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gradient-ember opacity-25 blur-[140px] aurora" />
      <div className="relative text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-gradient-ember">404</h1>
        <p className="mt-6 text-xl text-foreground/90">This page hasn't been fabricated yet.</p>
        <p className="mt-2 text-muted-foreground">Let's get you back to something we've actually built.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-ember px-6 py-3 text-sm font-semibold text-white shadow-ember hover:scale-105 transition-transform">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
