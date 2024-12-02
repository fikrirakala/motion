import Link from "next/link";

const links = [
  {
    title: "Basic animation",
    href: "/basic",
  },
  {
    title: "Basic scrolling animation",
    href: "/basic-scolling-animation",
  },
  {
    title: "Basic using whileInView",
    href: "/basic-whileinview",
  },
  {
    title: "useInView hook",
    href: "/useinview-hook",
  },
  {
    title: "The basics of useScroll",
    href: "/basics-of-usescroll",
  },
  {
    title: "useScroll with target elements",
    href: "/usescroll-with-target-elements",
  },
  {
    title: "The motion component",
    href: "/motion-component",
  },
  {
    title: "Make the animation loop with keyframes",
    href: "/make-the-animation-loop-with-keyframes",
  },
  {
    title: "Simple text stagger animation",
    href: "/simple-text-stagger-animation",
  },
  {
    title: "Motion values",
    href: "/motion-values",
  },
  {
    title: "Animating elements removed from the DOM",
    href: "animating-elements-removed-from-dom",
  },
  {
    title: "whileInView: Animate an element entering the viewport",
    href: "/whileinview",
  },
  {
    title: "Scroll animations with position sticky",
    href: "/sticky-animation",
  },
  {
    title: "Background image parallax",
    href: "/background-image-parallax",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-20">
      <h1 className="mb-6 text-2xl font-medium">Motion</h1>
      <ul className="flex list-decimal flex-col gap-4">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="hover:text-blue-600">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
