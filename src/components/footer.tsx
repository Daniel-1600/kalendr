// src/components/footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted text-muted-foreground py-6 ">
      <div className="container mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Kalendr. All rights reserved.
      </div>
    </footer>
  );
}
