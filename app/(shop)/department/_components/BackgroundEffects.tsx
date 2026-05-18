export default function BackgroundEffects() {
  return (
    <>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,163,115,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,163,115,0.03)_1px,transparent_1px)] bg-size-[24px_24px] animate-[pulse_4s_ease-in-out_infinite]"></div>

      {/* Radial Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-[pulse_8s_ease-in-out_infinite_2s]"></div>
    </>
  );
}
