import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Code, Database, FileSpreadsheet, BarChart3, Globe } from "lucide-react"

export const metadata = {
  title: "Courses - Login Computer",
  description: "Explore our wide range of professional IT training courses",
}

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Courses</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive range of professional training courses designed to boost your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="w-full py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Programming Courses</h2>
              <p className="text-muted-foreground">Master the fundamentals and advanced concepts of programming languages.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Java Programming"
                description="Comprehensive training in core Java concepts, object-oriented programming, collections, multithreading, and real-world application development."
                duration="12 Weeks"
                level="Beginner to Advanced"
                icon={<Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/java"
              />
              <CourseCard
                title="Python Development"
                description="Learn Python programming from basics to advanced topics, including data structures, frameworks like Django and Flask, automation, and more."
                duration="10 Weeks"
                level="All Levels"
                icon={<Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/python"
              />
              <CourseCard
                title="C Programming"
                description="Master C programming fundamentals, memory management, data structures, and algorithm implementation."
                duration="8 Weeks"
                level="Beginner to Intermediate"
                icon={<Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/c"
              />
              <CourseCard
                title="C++ Programming"
                description="Learn modern C++ programming, object-oriented principles, STL, and build robust applications."
                duration="10 Weeks"
                level="Intermediate"
                icon={<Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/cpp"
              />
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Web Development</h2>
              <p className="text-muted-foreground">Master the skills needed to build modern, responsive websites and web applications.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Frontend Development"
                description="Learn HTML, CSS, JavaScript, and modern frontend frameworks like React to build dynamic and responsive user interfaces."
                duration="12 Weeks"
                level="Beginner to Advanced"
                icon={<Globe className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/frontend"
              />
              <CourseCard
                title="Backend Development"
                description="Master server-side programming with Node.js, Express, databases, authentication, and API development."
                duration="10 Weeks"
                level="Intermediate"
                icon={<Database className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/backend"
              />
              <CourseCard
                title="Full Stack Development"
                description="Comprehensive training in both frontend and backend technologies to become a versatile full-stack developer."
                duration="16 Weeks"
                level="Intermediate to Advanced"
                icon={<Globe className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/fullstack"
              />
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Data Analytics & Business Skills</h2>
              <p className="text-muted-foreground">Gain practical skills in data analysis, visualization, and business applications.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Data Analytics"
                description="Learn data processing, visualization techniques, statistical analysis, and tools like Tableau and Power BI."
                duration="10 Weeks"
                level="All Levels"
                icon={<BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/data-analytics"
              />
              <CourseCard
                title="Advanced Excel"
                description="Master Excel functions, PivotTables, data analysis techniques, VBA programming, and dashboard creation."
                duration="6 Weeks"
                level="Beginner to Advanced"
                icon={<FileSpreadsheet className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/excel"
              />
              <CourseCard
                title="SQL & Database Management"
                description="Learn database design, SQL querying, data manipulation, and management of relational databases."
                duration="8 Weeks"
                level="All Levels"
                icon={<Database className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                href="/courses/sql"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Enhance Your Skills?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our expert-led courses are designed to help you achieve your career goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CourseCard({
  title,
  description,
  duration,
  level,
  icon,
  href
}: {
  title: string,
  description: string,
  duration: string,
  level: string,
  icon: React.ReactNode,
  href: string
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
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="font-medium">Duration</p>
            <p className="text-muted-foreground">{duration}</p>
          </div>
          <div>
            <p className="font-medium">Level</p>
            <p className="text-muted-foreground">{level}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link href={href}>
            View Course Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
