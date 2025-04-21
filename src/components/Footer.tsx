import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary">Login Computer</h3>
            <p className="text-sm text-muted-foreground">
              Professional training and consultancy services in programming, data analytics, and more.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Courses
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Our Courses</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/courses/java" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Java
              </Link>
              <Link href="/courses/python" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Python
              </Link>
              <Link href="/courses/c-cpp" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                C/C++
              </Link>
              <Link href="/courses/web-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Web Development
              </Link>
              <Link href="/courses/data-analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Data Analytics
              </Link>
              <Link href="/courses/excel" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Advanced Excel
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact Us</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>Login Computer, 6-C-4,</p>
              <p> Mahaveer Nagar Extension, Kota,(Raj.) 324009</p>
              <p>Phone: (91)9887782717</p>
              <p>Email: jatin26gupta@gmail.com</p>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Login Computer. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
