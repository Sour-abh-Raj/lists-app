import Head from "next/head";
import CourseList from "./components/CourseList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Course List App</title>
        <meta
          name="description"
          content="A simple course list app using Next.js and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-light-gray">
        <CourseList />
      </main>
    </div>
  );
}
