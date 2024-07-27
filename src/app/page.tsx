/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vpJduHkaeru
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-foreground px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Emir Küçükosman</h1>
          <p className="text-muted-foreground">Software Developer</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://github.com/emirkucukosman"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emir-kucukosman/"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com/EmirKucukosman"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:m.emirkucukosman@gmail.com"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <MailIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          {/* <p className="text-muted-foreground">
            I am a passionate software developer with a deep love for crafting elegant and efficient
            solutions. With years of experience in the industry, I have honed my skills in a variety
            of technologies. I am constantly learning and exploring new ways to push the boundaries
            of what&apos;s possible in the digital world.
          </p> */}
          <p className="text-muted-foreground">
            Hi 👋 I&apos;m Emir, a software engineer, gamer, coffee adict, and fitness lover based
            in Istanbul, Turkey.
          </p>
          <p className="text-muted-foreground">
            I develop things as a Software Engineer at Trendyol. Previously, I worked as a Software
            Engineer at Getir and TAFT Coffee Co.
          </p>
        </div>
        {/* <div className="space-y-4">
          <h2 className="text-2xl font-bold">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-muted rounded-md p-4 text-center">
              <CodepenIcon className="w-8 h-8 mx-auto mb-2" />
              <p>React</p>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <NetworkIcon className="w-8 h-8 mx-auto mb-2" />
              <p>Node.js</p>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <EclipseIcon className="w-8 h-8 mx-auto mb-2" />
              <p>JavaScript</p>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <TypeIcon className="w-8 h-8 mx-auto mb-2" />
              <p>TypeScript</p>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <GitGraphIcon className="w-8 h-8 mx-auto mb-2" />
              <p>Git</p>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <FigmaIcon className="w-8 h-8 mx-auto mb-2" />
              <p>Figma</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

// function CodepenIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
//       <line x1="12" x2="12" y1="22" y2="15.5" />
//       <polyline points="22 8.5 12 15.5 2 8.5" />
//       <polyline points="2 15.5 12 8.5 22 15.5" />
//       <line x1="12" x2="12" y1="2" y2="8.5" />
//     </svg>
//   )
// }

// function EclipseIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M12 2a7 7 0 1 0 10 10" />
//     </svg>
//   )
// }

// function FigmaIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
//       <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
//       <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
//       <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
//       <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
//     </svg>
//   )
// }

// function GitGraphIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="5" cy="6" r="3" />
//       <path d="M5 9v6" />
//       <circle cx="5" cy="18" r="3" />
//       <path d="M12 3v18" />
//       <circle cx="19" cy="6" r="3" />
//       <path d="M16 15.7A9 9 0 0 0 19 9" />
//     </svg>
//   )
// }

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// function NetworkIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="16" y="16" width="6" height="6" rx="1" />
//       <rect x="2" y="16" width="6" height="6" rx="1" />
//       <rect x="9" y="2" width="6" height="6" rx="1" />
//       <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
//       <path d="M12 12V8" />
//     </svg>
//   )
// }

// function TypeIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="4 7 4 4 20 4 20 7" />
//       <line x1="9" x2="15" y1="20" y2="20" />
//       <line x1="12" x2="12" y1="4" y2="20" />
//     </svg>
//   )
// }

// function XIcon(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }
