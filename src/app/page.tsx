import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Code,
  Database,
  FileSpreadsheet,
  Globe,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Professional IT Training
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unlock Your Potential with{" "}
                <span className="text-primary">Login Computer</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Professional training in Java, Python, C/C++, Web Development,
                Data Analytics, and more. Boost your career with our expert-led
                courses.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Start Learning Today
                  </h2>
                  <p className="text-lg mb-6">
                    Join thousands of successful students
                  </p>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/courses">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features That Set Us Apart
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our training programs are designed to provide practical skills
                that are in high demand in the industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of practical
                  experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Hands-on Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practice-oriented curriculum with real-world projects and
                  exercises.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Job-Ready Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Curriculum designed to prepare you for in-demand roles in the
                  tech industry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose between online, in-person, or hybrid learning options.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prepare for certification exams with our specialized courses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Career Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Resume building, interview preparation, and job placement
                  assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Our Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Top-Rated Training Programs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our wide range of courses designed to boost your career
                in technology.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <CourseCard
              title="Java Programming"
              description="Learn core Java concepts, OOP, collections, multithreading, and build real-world applications."
              icon={
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              href="/courses/java"
            />
            <CourseCard
              title="Python Development"
              description="Master Python programming, data structures, frameworks like Django and Flask, and automation."
              icon={
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              href="/courses/python"
            />
            <CourseCard
              title="C/C++ Programming"
              description="Build a solid foundation in C/C++, memory management, data structures, and algorithms."
              icon={
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              href="/courses/c-cpp"
            />
            <CourseCard
              title="Web Development"
              description="Learn HTML, CSS, JavaScript, React, Node.js and build modern, responsive websites."
              icon={
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              href="/courses/web-development"
            />
            <CourseCard
              title="Data Analytics"
              description="Learn data processing, visualization, statistics, and make data-driven decisions."
              icon={
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              href="/courses/data-analytics"
            />
            <CourseCard
              title="Advanced Excel"
              description="Master Excel functions, PivotTables, data analysis, VBA programming, and dashboards."
              icon={
                <FileSpreadsheet className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              href="/courses/excel"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Students Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied students who have transformed their
                careers with our training.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="The Java course was comprehensive and hands-on. It helped me transition from a manual tester to a Java developer in just 4 months."
              author="Sarah K."
              position="Software Developer"
            />
            <TestimonialCard
              quote="Learning Python at Login Computer was one of the best career decisions I've made. The instructors were knowledgeable and supportive."
              author="Michael T."
              position="Data Scientist"
            />
            <TestimonialCard
              quote="The Web Development bootcamp is intense but extremely rewarding. I landed a job as a frontend developer right after completing the course!"
              author="Jessica M."
              position="Frontend Developer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who have transformed their careers
                with Login Computer.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link href={href}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function TestimonialCard({
  quote,
  author,
  position,
}: {
  quote: string;
  author: string;
  position: string;
}) {
  return (
    <Card className="text-left">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <p className="italic text-muted-foreground">"{quote}"</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
