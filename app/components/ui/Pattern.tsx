export default function Pattern() {
  return (
    <div
      className="absolute inset-0 z-1 bg-repeat bg-cover"
      style={{
        backgroundImage: "url('/bg-pattern.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    />
  );
}
