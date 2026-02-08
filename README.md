# ScheduleMeetingNextjs

A simple scheduler built with **Next.js 16 (App Router)**, **Tailwind CSS v5**, and **Chadcn UI**. The project demonstrates dynamic pages driven by a unified data source (slug-based routing), server/client components, and typical build/dev workflows.

## Project overview

This repository contains a meeting scheduler example. It shows how to:

* Use the Next.js 16 App Router.
* Model pages dynamically using a **single, unified data source** (for example, `data/meetings.ts` or `lib/content.ts`).
* Style with Tailwind CSS v5 and use Chadcn UI components.
* Implement server-side rendering, static generation, or incremental rendering around slug routes.

The aim is to keep the content and routing simple so you can focus on integrating backend APIs, auth, or a database later.

## Features

* Slug-based dynamic pages for meetings (e.g. `/meetings/team-sync`).
* Centralized data store for pages (JSON/TS file or headless CMS).
* Example components using Chadcn UI and Tailwind.
* Ready-to-run dev & production scripts.

## Tech stack

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS v5
* Chadcn UI (shadcn-compatible components)

## Prerequisites

* Node.js 18 or newer
* npm

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# opens at http://localhost:3000
```

(Optional) Build for production:

```bash
npm run build
npm run start
```

"# Appointment-App-NextJs" 
