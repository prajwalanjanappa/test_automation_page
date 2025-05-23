"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Code, Github } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { trackClick } from "@/utils/analytics"

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" onClick={() => trackClick("navigation", "home_logo")}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">Test Automation Practice</span>
            <span className="font-bold text-lg sm:hidden">TAP</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/forms"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackClick("navigation", "forms_nav")}
          >
            Forms
          </Link>
          <Link
            href="/dynamic-elements"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackClick("navigation", "dynamic_elements_nav")}
          >
            Dynamic Elements
          </Link>
          <Link
            href="/tables"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackClick("navigation", "tables_nav")}
          >
            Tables
          </Link>
          <Link
            href="/advanced-interactions"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackClick("navigation", "advanced_nav")}
          >
            Advanced
          </Link>
          <Link
            href="/authentication"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackClick("navigation", "auth_nav")}
          >
            Auth
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/prajwal183/test_automation_page"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackClick("external_link", "github_header")}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => trackClick("navigation", "mobile_menu_open")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "home_mobile_nav")}
                >
                  Home
                </Link>
                <Link
                  href="/forms"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "forms_mobile_nav")}
                >
                  Forms
                </Link>
                <Link
                  href="/dynamic-elements"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "dynamic_elements_mobile_nav")}
                >
                  Dynamic Elements
                </Link>
                <Link
                  href="/tables"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "tables_mobile_nav")}
                >
                  Tables
                </Link>
                <Link
                  href="/alerts-modals"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "alerts_modals_mobile_nav")}
                >
                  Alerts & Modals
                </Link>
                <Link
                  href="/drag-drop"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "drag_drop_mobile_nav")}
                >
                  Drag & Drop
                </Link>
                <Link
                  href="/iframes"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "iframes_mobile_nav")}
                >
                  iFrames
                </Link>
                <Link
                  href="/authentication"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "auth_mobile_nav")}
                >
                  Authentication
                </Link>
                <Link
                  href="/advanced-interactions"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => trackClick("navigation", "advanced_mobile_nav")}
                >
                  Advanced Interactions
                </Link>
                <a
                  href="https://github.com/prajwal183/test_automation_page"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => trackClick("external_link", "github_mobile_nav")}
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
