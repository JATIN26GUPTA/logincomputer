import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Brain, Bot, LineChart, MessageSquare, Eye, Cpu } from "lucide-react"

export const metadata = {
  title: "AI Courses - Login Computer",
  description: "Master Artificial Intelligence with our comprehensive AI training courses",
}

export default function AICoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI & Machine Learning Courses</h1>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Master the future of technology with our comprehensive AI and Machine Learning training programs.
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
              <h2 className="text-2xl font-bold tracking-tighter">Foundational AI Courses</h2>
              <p className="text-muted-foreground">Build a strong foundation in artificial intelligence concepts and fundamentals.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Introduction to AI"
                description="Learn the fundamentals of artificial intelligence, including history, key concepts, applications, and ethical considerations in AI development."
                duration="6 Weeks"
                level="Beginner"
                icon={<Brain className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/intro-to-ai"
              />
              <CourseCard
                title="Python for AI"
                description="Master Python programming specifically for AI applications, including NumPy, Pandas, Matplotlib, and essential libraries for machine learning."
                duration="8 Weeks"
                level="Beginner to Intermediate"
                icon={<Brain className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/python-for-ai"
              />
              <CourseCard
                title="Mathematics for AI"
                description="Essential mathematics for AI including linear algebra, calculus, probability, and statistics needed for machine learning algorithms."
                duration="10 Weeks"
                level="Intermediate"
                icon={<LineChart className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/math-for-ai"
              />
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Machine Learning & Deep Learning</h2>
              <p className="text-muted-foreground">Dive deep into machine learning algorithms and neural network architectures.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Machine Learning Fundamentals"
                description="Comprehensive training in supervised and unsupervised learning, regression, classification, clustering, and model evaluation techniques."
                duration="12 Weeks"
                level="Intermediate"
                icon={<Cpu className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/ml-fundamentals"
              />
              <CourseCard
                title="Deep Learning with TensorFlow"
                description="Master deep learning using TensorFlow and Keras. Build neural networks, CNNs, RNNs, and deploy production-ready models."
                duration="14 Weeks"
                level="Advanced"
                icon={<Cpu className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/deep-learning-tensorflow"
              />
              <CourseCard
                title="Deep Learning with PyTorch"
                description="Learn PyTorch framework for deep learning research and development. Build custom neural architectures and train complex models."
                duration="14 Weeks"
                level="Advanced"
                icon={<Cpu className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/deep-learning-pytorch"
              />
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">Specialized AI Applications</h2>
              <p className="text-muted-foreground">Apply AI to specific domains and build specialized intelligent systems.</p>
              <Separator className="my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Natural Language Processing"
                description="Master NLP techniques including text processing, sentiment analysis, named entity recognition, transformers, and LLM applications."
                duration="12 Weeks"
                level="Intermediate to Advanced"
                icon={<MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/nlp"
              />
              <CourseCard
                title="Computer Vision"
                description="Learn image processing, object detection, image segmentation, facial recognition, and video analysis using deep learning."
                duration="12 Weeks"
                level="Intermediate to Advanced"
                icon={<Eye className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/computer-vision"
              />
              <CourseCard
                title="Generative AI & LLMs"
                description="Explore generative models, GANs, diffusion models, and large language models. Learn prompt engineering and fine-tuning techniques."
                duration="10 Weeks"
                level="Advanced"
                icon={<Bot className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/generative-ai"
              />
              <CourseCard
                title="AI for Business Analytics"
                description="Apply AI and ML to business problems. Learn predictive analytics, customer segmentation, and decision support systems."
                duration="8 Weeks"
                level="Intermediate"
                icon={<LineChart className="w-6 h-6 text-purple-600 dark:text-purple-300" />}
                href="/ai-courses/ai-business-analytics"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your AI Journey?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our expert-led AI courses will equip you with the skills needed to excel in this rapidly evolving field.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/courses">
                  View All Courses
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
        <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
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
