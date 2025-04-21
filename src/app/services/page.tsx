import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, BookOpen, Database, FileCode, Compass, Users, Briefcase, FileCog } from "lucide-react"

export const metadata = {
  title: "Services - Login Computer",
  description: "Explore our IT training services, corporate programs, and consultancy offerings",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT training and consultancy services to meet your professional needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Training Services</h2>
              <p className="text-muted-foreground">Structured programs to help you master in-demand technical skills.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Individual Training"
                description="Personalized training programs tailored to your skill level, learning pace, and career goals."
                icon={<BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "One-on-one sessions with expert trainers",
                  "Customized curriculum based on your needs",
                  "Flexible scheduling options",
                  "Dedicated support throughout your learning journey"
                ]}
                href="/contact"
                buttonText="Inquire Now"
              />
              <ServiceCard
                title="Group Classes"
                description="Structured classroom training with a fixed curriculum and schedule for efficient learning."
                icon={<Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Small batch sizes for optimal learning",
                  "Collaborative learning environment",
                  "Regular assessments and feedback",
                  "Networking opportunities with peers"
                ]}
                href="/courses"
                buttonText="Browse Classes"
              />
              <ServiceCard
                title="Online Training"
                description="Learn at your own pace with our comprehensive online courses and virtual instructor sessions."
                icon={<Compass className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "24/7 access to course materials",
                  "Live virtual classes with instructors",
                  "Interactive learning resources",
                  "Online community support"
                ]}
                href="/courses"
                buttonText="Explore Online Courses"
              />
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Corporate Services</h2>
              <p className="text-muted-foreground">Custom training solutions for businesses to upskill their workforce.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Corporate Training"
                description="Tailored training programs for companies looking to enhance their team's technical capabilities."
                icon={<Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Customized curriculum based on company needs",
                  "On-site or virtual training options",
                  "Flexible scheduling to minimize disruption",
                  "Progress tracking and reporting"
                ]}
                href="/contact"
                buttonText="Request Corporate Training"
              />
              <ServiceCard
                title="Skill Assessment"
                description="Evaluate your team's technical proficiency and identify skill gaps for targeted training."
                icon={<FileCode className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Comprehensive technical assessments",
                  "Detailed skill gap analysis",
                  "Personalized training recommendations",
                  "Benchmark against industry standards"
                ]}
                href="/contact"
                buttonText="Schedule Assessment"
              />
              <ServiceCard
                title="Employee Development Programs"
                description="Long-term training and development strategies to nurture talent within your organization."
                icon={<Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Structured learning paths for career growth",
                  "Mentorship and guidance from industry experts",
                  "Regular progress evaluations",
                  "Certification preparation and support"
                ]}
                href="/contact"
                buttonText="Discuss Your Needs"
              />
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Consultancy Services</h2>
              <p className="text-muted-foreground">Expert guidance for your technology and training initiatives.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="IT Strategy Consulting"
                description="Strategic guidance for technology adoption, digital transformation, and IT infrastructure planning."
                icon={<Compass className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Technology roadmap development",
                  "Digital transformation strategy",
                  "IT infrastructure assessment",
                  "Technology stack recommendations"
                ]}
                href="/contact"
                buttonText="Book a Consultation"
              />
              <ServiceCard
                title="Training Program Development"
                description="Design and development of custom training programs for educational institutions and businesses."
                icon={<FileCog className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Curriculum design and development",
                  "Learning materials creation",
                  "Assessment frameworks",
                  "Train-the-trainer programs"
                ]}
                href="/contact"
                buttonText="Discuss Your Requirements"
              />
              <ServiceCard
                title="Project-Based Consultancy"
                description="Expert guidance for specific technology projects, implementations, and upgrades."
                icon={<Database className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
                features={[
                  "Technical architecture design",
                  "Implementation guidance",
                  "Best practices recommendations",
                  "Performance optimization"
                ]}
                href="/contact"
                buttonText="Start a Project"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a Custom Solution?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us to discuss your specific requirements and how we can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get in Touch
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

function ServiceCard({
  title,
  description,
  icon,
  features,
  href,
  buttonText
}: {
  title: string,
  description: string,
  icon: React.ReactNode,
  features: string[],
  href: string,
  buttonText: string
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
        <div className="space-y-2">
          <p className="font-medium">Key Features:</p>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-300 mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link href={href}>
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
