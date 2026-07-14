export function Footer() {
  return (
    <footer className="border-t border-token px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-tertiary sm:flex-row">
        <span>© {new Date().getFullYear()} Hanae Khayyi</span>
        <span className="font-mono">data_engineer &amp;&amp; ai_enthusiast</span>
      </div>
    </footer>
  );
}
