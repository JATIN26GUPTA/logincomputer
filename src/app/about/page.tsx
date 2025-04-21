import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Award, BookOpen, Clock, Users, CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us - Login Computer",
  description: "Learn about Login Computer - Your trusted partner for professional IT training and consultancy",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Login Computer</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your trusted partner for professional IT training and consultancy services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Empowering Careers Through Quality Education
              </h2>
              <p className="text-muted-foreground">
                Founded in 2010, Login Computer has been at the forefront of IT education and training. What started as a small coaching center has now evolved into a comprehensive training institute with a mission to bridge the gap between academic education and industry requirements.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have trained thousands of students and professionals, helping them build successful careers in the technology sector. Our focus has always been on practical, hands-on training that prepares our students for real-world challenges.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">10+</span>
                  <span className="text-sm text-muted-foreground">Years of Experience</span>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">5000+</span>
                  <span className="text-sm text-muted-foreground">Students Trained</span>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">15+</span>
                  <span className="text-sm text-muted-foreground">Professional Courses</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    To provide industry-relevant, practical training that transforms individuals into job-ready professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">What Sets Us Apart</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Our commitment to excellence and student success makes us the preferred choice for IT training.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">Industry Experts</h3>
                <p className="text-muted-foreground">
                  Learn from trainers with extensive industry experience and technical expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">Practical Curriculum</h3>
                <p className="text-muted-foreground">
                  Hands-on training with real-world projects that prepare you for the industry.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Choose from weekend, weekday, or evening batches to fit your schedule.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">Career Support</h3>
                <p className="text-muted-foreground">
                  Resume building, interview preparation, and job placement assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <p className="text-lg">
                    Combining theoretical knowledge with practical implementation for comprehensive learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">How We Ensure Your Success</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Comprehensive Curriculum</h3>
                    <p className="text-muted-foreground">
                      Our courses cover fundamental concepts to advanced topics, ensuring a strong foundation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Hands-on Projects</h3>
                    <p className="text-muted-foreground">
                      Work on real-world projects to apply your knowledge and build a portfolio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Small Batch Sizes</h3>
                    <p className="text-muted-foreground">
                      Limited students per batch ensuring personalized attention and better learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Regular Assessments</h3>
                    <p className="text-muted-foreground">
                      Frequent evaluations to track progress and ensure understanding of concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Your Learning Journey Today</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who have transformed their careers with Login Computer.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/courses">
                  Explore Courses
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
