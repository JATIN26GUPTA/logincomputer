import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Terms of Service - Login Computer",
  description: "Login Computer's terms of service and conditions of use",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: April 8, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Login Computer. These terms and conditions outline the rules and regulations for the use of Login Computer's website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Login Computer's website if you do not accept all of the terms and conditions stated on this page.
              </p>
              <p className="text-muted-foreground">
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials (information or software) on Login Computer's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Login Computer's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-muted-foreground">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Login Computer at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Payment and Refund Policy</h2>
              <p className="text-muted-foreground">
                Payment for all courses and services must be made in advance unless otherwise arranged with Login Computer. We accept various payment methods as indicated on our website or communicated to you during the enrollment process.
              </p>
              <p className="text-muted-foreground">
                Refunds are available up to 7 days before the course start date. After this period, we may offer credit for future courses or allow transfer to another batch at our discretion. No refunds will be provided once a course has commenced or for no-shows.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Course Participation</h2>
              <p className="text-muted-foreground">
                By enrolling in any course offered by Login Computer, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Attend scheduled classes on time</li>
                <li>Complete required assignments and projects</li>
                <li>Participate actively in learning activities</li>
                <li>Respect the intellectual property rights of materials provided</li>
                <li>Engage respectfully with instructors and other students</li>
                <li>Adhere to any code of conduct provided for specific courses</li>
              </ul>
              <p className="text-muted-foreground">
                Login Computer reserves the right to dismiss any student from a course for disruptive behavior, plagiarism, or other violations of these terms without refund.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Login Computer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Login Computer's website, even if Login Computer or a Login Computer authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-muted-foreground">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Revisions and Errata</h2>
              <p className="text-muted-foreground">
                The materials appearing on Login Computer's website could include technical, typographical, or photographic errors. Login Computer does not warrant that any of the materials on its website are accurate, complete, or current. Login Computer may make changes to the materials contained on its website at any time without notice. Login Computer does not, however, make any commitment to update the materials.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Governing Law</h2>
              <p className="text-muted-foreground">
                Any claim relating to Login Computer's website shall be governed by the laws of the country without regard to its conflict of law provisions. General Terms and Conditions applicable to Use of a Website.
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Changes to Terms</h2>
              <p className="text-muted-foreground">
                Login Computer may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </div>

            <div className="pt-8 flex justify-center">
              <Button asChild variant="outline">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
