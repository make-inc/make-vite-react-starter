"use client";

export default function App() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-background text-foreground">
      <main className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-3">
          <div
            className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
            aria-label="Make Inc Logo"
          >
            M
          </div>
          <h1 className="text-3xl font-bold">make.inc</h1>
        </div>
        <div className="max-w-xl flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-center">
            This is a starter template.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Your AI agent is working and you should see changes soon.
          </p>
        </div>
      </main>
    </div>
  );
}
