export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-background text-muted-foreground">
      <div className="h-8 w-8 rounded-full border-2 border-muted border-t-foreground animate-spin" />
      <p>Your website is being prepared...</p>
    </div>
  );
}
