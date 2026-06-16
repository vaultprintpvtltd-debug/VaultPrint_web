# VaultPrint — Marketing Website PRD v2.0

> **Built with Next.js 14 (App Router) · Deployed on Vercel**
> Site URL: `vaultprintpvtltd.online`
> Audience: B2C (students, professionals) + B2B (venues, franchisees, advertisers)
> Primary Goal: Convert visitors into venue rental leads and franchise enquiries

---

## Changelog from v1.0

| # | Change | Reason |
|---|--------|---------|
| 1 | Next.js 14 App Router project structure added | v1 had no implementation guidance for the dev team |
| 2 | Component breakdown added per page | Needed to avoid duplication across 7 pages |
| 3 | Form submission handled via Next.js Server Actions | Simpler than a separate form backend; integrates with existing Supabase setup |
| 4 | Image strategy section added | Missing from v1; critical for LCP performance target |
| 5 | `/sitemap.xml` and `robots.txt` as Next.js routes | Should be auto-generated, not manual files |
| 6 | Analytics via `@vercel/analytics` + custom events | Replaces vague "track this" note with concrete implementation |
| 7 | Error and loading states added to all forms | Missing from v1 entirely |
| 8 | Waitlist form moved to shared Server Action | Was described as "email input only" without any backend plan |
| 9 | `next/font` specified (Geist Sans + Geist Mono) | v1 left typography fully open; needed for consistency across pages |
| 10 | `robots.txt` disallow rules specified | v1 mentioned it without the actual rules |

---

## 1. Document Overview

| Field | Detail |
|-------|--------|
| Document | VaultPrint Marketing Website PRD |
| Version | 2.0 |
| Site URL | `vaultprintpvtltd.online` |
| Framework | Next.js 14 (App Router) |
| Deployment | Vercel |
| Database | Supabase (same project as core app) |
| Email | AWS SES (already configured) |
| Payments | Not applicable on marketing site |
| Total Pages | 7 — Home, How It Works, For Venues, Franchise, Advertising, Pricing, About & Contact |
| Reference | qwikprint.in — studied for structure, gaps, and positioning |

### 1.1 How to Read This Document

Each page section contains:
- **Skeleton** — structural hierarchy of every element
- **Content** — exact copy, headlines, CTAs, body text
- **Components** — reusable Next.js component names to build
- **Notes** — implementation callouts for developers

---

## 2. Project Structure

```
vaultprint-marketing/
├── app/
│   ├── layout.tsx                  # Root layout: Nav + Footer + Analytics
│   ├── page.tsx                    # Home /
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── for-venues/
│   │   └── page.tsx
│   ├── franchise/
│   │   └── page.tsx
│   ├── advertising/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx                # Legal — generate before launch
│   ├── terms/
│   │   └── page.tsx                # Legal — generate before launch
│   ├── refund/
│   │   └── page.tsx                # Legal — generate before launch
│   ├── sitemap.ts                  # Auto-generated sitemap
│   └── robots.ts                   # Auto-generated robots.txt
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── AnnouncementBanner.tsx
│   ├── sections/                   # Page-level sections (used once)
│   └── ui/                        # Reusable primitives
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── FormField.tsx
│       └── SectionHeader.tsx
├── actions/
│   ├── submitVenueEnquiry.ts       # Server Action
│   ├── submitFranchiseApplication.ts
│   ├── submitAdvertisingEnquiry.ts
│   ├── submitContactMessage.ts
│   └── submitWaitlist.ts
├── lib/
│   ├── supabase.ts                 # Supabase client (server-side only)
│   └── analytics.ts               # Custom event helpers
└── public/
    └── images/
        ├── kiosk-hero.webp
        ├── step-1-scan.webp
        ├── step-2-upload.webp
        ├── step-3-pay.webp
        └── step-4-collect.webp
```

---

## 3. Global Elements

### 3.1 Navigation (sticky, present on all pages)

| Element | Content | Behaviour |
|---------|---------|-----------|
| Logo | VaultPrint wordmark | Links to `/` |
| Nav link 1 | How It Works | Links to `/how-it-works` |
| Nav link 2 | For Venues | Links to `/for-venues` |
| Nav link 3 | Franchise | Links to `/franchise` |
| Nav link 4 | Pricing | Links to `/pricing` |
| Nav link 5 | About | Links to `/about` |
| Primary CTA | Partner With Us | Links to `/for-venues#enquiry` — filled button |
| Mobile | Hamburger icon | Full-screen overlay menu on tap |

**Component:** `components/layout/Nav.tsx`
- Use `usePathname()` to highlight active link
- Hamburger state managed with `useState`
- Sticky with `position: sticky; top: 0; z-index: 50`

### 3.2 Footer

| Column | Content |
|--------|---------|
| Column 1 — Brand | VaultPrint logo, tagline: *Secure printing, everywhere.*, 1-line description |
| Column 2 — Product | How It Works, Pricing, For Venues, Franchise, Advertising |
| Column 3 — Company | About Us, Contact, Blog *(coming soon)*, Careers *(coming soon)* |
| Column 4 — Legal | Privacy Policy, Terms of Service, Refund Policy |

Bottom bar: `© 2026 VaultPrint Pvt Ltd · CIN: [number] · GST: [number]`
Social icons: LinkedIn, Instagram, Twitter/X

### 3.3 Announcement Banner

- Dismissible (hide on `localStorage` flag)
- Content: *Now available across Jharkhand campuses — Find a kiosk near you →*
- **Component:** `components/layout/AnnouncementBanner.tsx` — client component

---

## 4. Page 1 — Home (`/`)

> Serves two audiences simultaneously: end users (understand the product) and business owners (host a kiosk). Flow: hook everyone → show users how it works → show businesses what's in it for them.

### Section 1A — Hero

**Skeleton**
- Announcement banner (dismissible)
- Sticky nav
- Eyebrow tag
- H1 headline
- Subheadline
- Two CTAs side by side
- Trust badge strip (6 items)
- Hero visual (kiosk illustration or photo)

**Content**

- **Eyebrow:** `Self-service · Secure · Under 60 seconds`
- **H1:** Print from your phone. No staff. No queue. No risk.
- **Sub:** VaultPrint kiosks let anyone print securely from their phone in under 60 seconds — scan, upload, pay, collect. Zero app download. Zero account.
- **CTA 1 (primary):** Find a Kiosk → *(links to `/how-it-works`)*
- **CTA 2 (secondary):** Bring VaultPrint to Your Venue *(links to `/for-venues`)*

**Trust badges (6)**

| Badge | Text |
|-------|------|
| 1 | App-free — works in any browser |
| 2 | OTP-secured — only you collect your print |
| 3 | Files deleted after printing |
| 4 | Under 60 seconds end-to-end |
| 5 | Supports UPI, cards and wallets |
| 6 | Available 24 × 7 |

```
[ HERO WIREFRAME ]
[ANNOUNCEMENT BANNER — full width, dismissible ×]
────────────────────────────────────────
[NAV] VaultPrint  How It Works  For Venues  Franchise  Pricing  About  [Partner With Us ▶]
────────────────────────────────────────
                                            ┌──────────────────┐
[tag] Self-service · Secure · Under 60s     │                  │
                                            │   KIOSK VISUAL   │
Print from your phone.                      │   (illustration  │
No staff. No queue. No risk.                │    or photo)     │
                                            │                  │
VaultPrint kiosks let anyone print...       └──────────────────┘

[Find a Kiosk →]  [Bring VaultPrint to Your Venue]
────────────────────────────────────────
✓ App-free  ✓ OTP-secured  ✓ Files deleted  ✓ 60s  ✓ UPI  ✓ 24×7
```

---

### Section 1B — The Problem

**Content**
- **Eyebrow:** The old way of printing
- **Headline:** You shouldn't have to hand your documents to a stranger.

| Old Way ✗ | VaultPrint Way ✓ |
|-----------|-----------------|
| Share your file with a shopkeeper you don't know | OTP-locked release — only you can collect your print |
| Wait in a queue for someone to print manually | Under 60 seconds, start to finish, every time |
| Limited shop hours — closed at night and weekends | Available 24 hours, 7 days, 365 days |
| No receipt, no transparency on pricing | Live price shown before you pay — no surprises |
| Install apps or carry USB drives | Works in any phone browser — zero downloads |

---

### Section 1C — How It Works (4 steps)

**Content**
- **Eyebrow:** How VaultPrint works
- **Headline:** From QR scan to paper in your hand — in under 60 seconds.
- **Sub:** Fast. Secure. Completely contactless.

| Step | Title | Description |
|------|-------|-------------|
| Step 1 | Scan the QR code | Every VaultPrint kiosk shows a unique QR code. Scan with your phone camera — no app, no login, no account. |
| Step 2 | Upload your document | Select your PDF from your phone, Google Drive, or any file app. Encrypted immediately on upload. Never seen by any staff member. |
| Step 3 | Choose settings and pay | Set B&W or colour, copies, page range, single or double sided. See the exact price before you pay via UPI, card, or wallet. |
| Step 4 | Enter OTP and collect | After payment, a 6-digit OTP appears on your phone. Enter it at the kiosk numpad and collect your printout. File is deleted automatically. |

- **Bottom CTA:** See a kiosk near you → or Bring VaultPrint to your venue →

---

### Section 1D — Why VaultPrint (6 feature cards)

- **Eyebrow:** Why VaultPrint
- **Headline:** Built differently. Because printing should be private.

| Card | Title | Body |
|------|-------|------|
| 1 | App-free, always | No download, no account, no login. The entire experience runs in your phone's browser. Any device, any time. |
| 2 | Your file, your privacy | Your document is encrypted in transit, stored privately, and permanently deleted after your job completes. No staff member ever sees your file. |
| 3 | 100% uptime | VaultPrint handles maintenance, ink refills, paper restocking, and hardware. The machine is always ready when you need it. |
| 4 | Instant, every time | No waiting for a shopkeeper. No queue. Scan to print in under 60 seconds. |
| 5 | Pay your way | UPI, credit card, debit card, or digital wallet. Powered by Razorpay. Every payment is secure and verifiable. |
| 6 | OTP-protected release | A 6-digit one-time code is the key to your print. Only the person who paid can collect. No mix-ups, no theft. |

---

### Section 1E — Comparison Table

- **Headline:** Why VaultPrint stands out
- **Sub:** Self-service printing vs. traditional print shops

| Feature | Traditional Print Shop | VaultPrint |
|---------|----------------------|------------|
| Availability | Shop hours only | 24 × 7 — always on |
| Speed | Queue + manual — 5 to 20 minutes | Under 60 seconds, every time |
| Privacy | File visible to shopkeeper | Encrypted, private, auto-deleted |
| File handling | Shopkeeper may keep a copy | Never downloaded by anyone |
| Staff interaction | Required | Zero — fully self-service |
| Pricing | Variable, often unclear | Fixed, shown before payment |
| Receipts | Rarely provided | Digital confirmation always |
| Document safety | No guarantees | OTP-locked — only you can release |

---

### Section 1F — Stats & Social Proof

**Stats strip (4)**

| Stat | Number | Label |
|------|--------|-------|
| 1 | 60s | Average end-to-end print time |
| 2 | 100% | Uptime SLA commitment |
| 3 | 0 | App downloads required |
| 4 | ₹2 | Starting price per page |

**Testimonials (3 cards)**

| Person | Quote |
|--------|-------|
| Priya S., BIT Mesra | I needed to print my assignment at 11pm and VaultPrint was the only option. Took less than a minute. Couldn't believe it was that easy. |
| Rahul M., HR Manager | We installed VaultPrint in our office lobby and it's been brilliant. Employees print documents without waiting for the admin. |
| Ananya K., PG resident | Living in a hostel means no access to a printer at odd hours. VaultPrint nearby changed everything for me during exam season. |

> ⚠️ **Replace with real testimonials before go-live.** These represent three core personas: student, professional, hostel resident.

---

### Section 1G — Where VaultPrint Belongs

- **Headline:** Where VaultPrint belongs
- **Sub:** VaultPrint is designed for high-footfall locations where people need to print on the go.

| Venue | Why It Works There |
|-------|-------------------|
| Engineering & Medical Colleges | Students constantly need to print assignments, lab files, and exam forms at all hours |
| Government Offices | Citizens visiting offices need to print forms on the spot |
| Hostels & PGs | Residents need printing late at night and early morning when shops are shut |
| Public Libraries | Researchers and students need to print references and notes |
| Co-working Spaces | Freelancers and startup teams need occasional printing without owning a printer |
| Shopping Malls | High footfall, people often need to print tickets, forms, and documents on the go |
| Railway Stations & Bus Stands | Travellers need to print tickets, ID proofs, and reservations urgently |

---

### Section 1H — For Businesses (3 revenue model cards)

- **Eyebrow:** For businesses
- **Headline:** Own the kiosk. Or just benefit from one.

| Model | Headline | Body | CTA |
|-------|----------|------|-----|
| Kiosk Rental | Turn unused space into a premium service | You provide the space. VaultPrint supplies, installs, and maintains the kiosk at zero operational cost to you. | Enquire About Rental → |
| Franchise | Run your own VaultPrint business | Own and operate VaultPrint kiosks in your city. Hardware, software, and support provided. Earn from day one. | Explore Franchise → |
| Brand Advertising | Reach users at the moment of action | Your brand appears on-screen during idle time and transaction flows — captive, engaged impressions. | Book Ad Space → |

---

### Section 1I — CTA Banner

- **Headline:** Ready to bring VaultPrint to your venue?
- **Sub:** Whether you're a college administrator, entrepreneur, or brand — there's a VaultPrint model for you.
- **CTA 1:** Partner With Us →
- **CTA 2:** Contact Our Team

---

### Home Page Scroll Order

```
1A. HERO
1B. PROBLEM (Old way vs VaultPrint)
1C. HOW IT WORKS (4 steps)
1D. WHY VAULTPRINT (6 feature cards)
1E. COMPARISON TABLE
1F. STATS + TESTIMONIALS
1G. VENUE GRID
1H. FOR BUSINESSES (3 model cards)
1I. FULL-WIDTH CTA BANNER
FOOTER
```

---

## 5. Page 2 — How It Works (`/how-it-works`)

> Deeper walkthrough for users who scanned a kiosk QR or venue partners evaluating the experience.

### 5.1 Hero

| Element | Content |
|---------|---------|
| Eyebrow | From phone to paper |
| H1 | How VaultPrint works — from QR scan to print in hand. |
| Sub | A full walkthrough of the VaultPrint experience. No app. No account. No staff. |
| CTA | Find a kiosk near you → |

### 5.2 The 4 Steps — Full Expanded

> Each step: full-width panel alternating left/right (visual + text). On mobile: visual on top, text below.

| Step | Headline | Full Body |
|------|----------|-----------|
| Step 1 — Scan QR | Scan the unique QR code from the kiosk screen | Every VaultPrint kiosk displays a unique QR code. Open your phone camera and point it at the code. No scanning app needed. No login. No account. No personal information required. The QR is tied to the specific kiosk you're standing at. |
| Step 2 — Upload | Upload your document from anywhere on your phone | Select your PDF from phone storage, Google Drive, Dropbox, or any connected app. Your file is uploaded using an encrypted connection directly to a private server — never stored on a shared device or seen by any person. Page count is extracted automatically. |
| Step 3 — Configure & Pay | Choose your print settings and pay securely | Set your preferences: page range, B&W or colour, number of copies, single or double sided, and orientation. Price updates live as you change settings. Pay via UPI, card, or digital wallet through Razorpay. Payment is verified server-side before anything is printed. |
| Step 4 — OTP & Collect | Enter your OTP at the kiosk and collect | After payment, a 6-digit one-time code appears on your phone. Walk to the kiosk and enter the code on the numpad. The kiosk verifies it, sends your document to the printer, and pages are ready within seconds. Your file is permanently deleted immediately after printing. |

### 5.3 Security Callout Section

- **Headline:** Your file stays private. Always.
- **Body:** VaultPrint was built with privacy as the first principle. Your document is encrypted in transit and stored in a private server bucket. It is accessible only via a time-limited signed link — no staff member, no shopkeeper, no third party can open it. The moment your print job completes, the file is permanently deleted.

| Protection Layer | What It Means |
|-----------------|---------------|
| Encrypted upload | File travels over HTTPS — the same security standard used by banks |
| Private storage | Stored in a private bucket with no public URL |
| Time-limited access | Even our print agent only gets a 2-minute access link |
| OTP release | Only the person who paid can trigger the print |
| Auto-deletion | Files deleted after printing; max 24-hour retention for system issues |

### 5.4 FAQ Section

| Question | Answer |
|----------|--------|
| What file formats does VaultPrint support? | PDF files only in v1. Word documents, images (JPG, PNG), and PowerPoint support is planned. |
| What if my OTP expires before I reach the kiosk? | OTPs are valid for 15 minutes. Contact support for a refund or to regenerate. |
| What if the print fails? | The job is automatically flagged and a full refund is initiated within 24 hours. |
| Can I print multiple copies? | Yes — up to 50 copies per job. Set the number in the customize step. |
| Is my payment information stored? | No. VaultPrint uses Razorpay. We never see or store your card or UPI details. |
| Can I print from a laptop or desktop? | Yes — scan the kiosk QR with your phone, then enter a URL or cloud drive link on the upload page. |
| What paper size is supported? | A4 only in v1. A3 support is planned. |
| Can I get a receipt? | A payment confirmation is sent to your email if you provide it. Razorpay also sends a transaction receipt automatically. |

> **Implementation note:** Use an accordion component for the FAQ. Expand/collapse via `useState` or the native `<details>` element.

---

## 6. Page 3 — For Venues (`/for-venues`)

> Primary B2B conversion page. Visitor is a college administrator, hostel owner, co-working space manager, or mall operator.

### 6.1 Hero

| Element | Content |
|---------|---------|
| Eyebrow | For colleges, offices, hostels & co-working spaces |
| H1 | Turn unused space into a premium service for your visitors. |
| Sub | VaultPrint supplies, installs, and maintains a fully automated printing kiosk at your venue — at zero operational cost to you. |
| CTA primary | Get a Free Consultation → |
| CTA secondary | See how it works first ↓ |

### 6.2 Venue Type Grid

- **Headline:** Built for venues where people need to print

| Venue | Tagline | Why It Works |
|-------|---------|-------------|
| Engineering & Medical Colleges | For students who need to print at midnight | Assignment deadlines, lab files, exam forms — students need printing at all hours. |
| Government Offices | For citizens who come in needing a printout | Visitors arrive needing to print forms on the spot. Remove the friction without hiring extra staff. |
| Hostels & PGs | For residents with no printer nearby | A shared-living essential. Students print at odd hours without leaving the premises. |
| Public Libraries | For researchers and readers | A natural fit for a self-service printing terminal. |
| Co-working Spaces | For teams who print occasionally | Members get occasional printing without the overhead of owning a printer. |
| Shopping Malls | For shoppers with urgent print needs | High footfall. Travellers, shoppers, and visitors print tickets, forms, and documents on the go. |

### 6.3 The Rental Model

- **Headline:** How the kiosk rental works
- **Sub:** Three steps between you and a working kiosk.

| Step | What Happens |
|------|-------------|
| Step 1 — Free consultation | We assess your venue's footfall, space, and connectivity. Proposal within 48 hours. No commitment required. |
| Step 2 — Installation | VaultPrint handles everything — hardware delivery, kiosk setup, printer configuration, software deployment. Typically 2–3 hours on site. |
| Step 3 — We run it | VaultPrint monitors the kiosk 24/7. We handle ink, paper, maintenance, updates, and customer support. You do nothing. |

### 6.4 Responsibilities Split

| VaultPrint Handles | You Provide |
|-------------------|-------------|
| Kiosk hardware and printer | A ~60cm × 60cm installation spot |
| Software platform and updates | A standard power outlet nearby |
| Maintenance, repairs, replacements | Internet connectivity (4G hotspot works) |
| Ink and paper restocking | Permission to place the kiosk |
| Remote 24/7 monitoring | That's it. |
| Customer support for all print issues | |
| Regular usage and revenue reporting | |

### 6.5 Benefits to Your Venue

| Benefit | Detail |
|---------|--------|
| Enhanced visitor experience | Students, residents, or guests get a premium facility usable at any hour |
| Zero operational effort | No ink to buy, no paper to load, no maintenance to schedule |
| Modern, tech-forward image | A VaultPrint kiosk signals your venue takes visitor experience seriously |
| Potential revenue share | Depending on footfall and contract terms, venue partners may receive a revenue share |
| Free to the venue | No cost to the hosting venue in the standard rental model |

### 6.6 Enquiry Form

> **Anchor:** `id="enquiry"` — linked from nav CTA "Partner With Us"

| Field | Type | Required |
|-------|------|----------|
| Your name | Text | Yes |
| Organisation name | Text | Yes |
| Your designation/role | Text | Yes |
| City | Text | Yes |
| Venue type | Dropdown: College / Hostel / Government Office / Co-working / Mall / Other | Yes |
| Estimated daily footfall | Dropdown: Under 100 / 100–500 / 500–2000 / Above 2000 | Yes |
| Phone number | Tel input | Yes |
| Email address | Email input | Yes |
| Anything else? | Textarea | No |

- **Submit CTA:** Request a Consultation →
- **Below button:** We typically respond within 24 hours. For urgent enquiries, WhatsApp us at [number].

**Server Action:** `actions/submitVenueEnquiry.ts`
- Writes to `contact_enquiries` table in Supabase
- Sends email notification to admin via AWS SES
- Sends auto-reply email to submitter

**Form states to implement:** idle → loading → success → error

---

## 7. Page 4 — Franchise (`/franchise`)

> Targets entrepreneurs who want to build a business around VaultPrint kiosks. Tone: aspirational.

### 7.1 Hero

| Element | Content |
|---------|---------|
| Eyebrow | VaultPrint Franchise Opportunity |
| H1 | Run your own VaultPrint business. We give you everything else. |
| Sub | Own and operate VaultPrint kiosks in your city. Hardware, software, and full operational support provided. Earn per-print revenue from day one. No technical expertise required. |
| CTA primary | Apply for a Franchise → |
| CTA secondary | Download Franchise Brochure |

### 7.2 Opportunity Stats (3 cards)

| Stat | Context |
|------|---------|
| 900M+ | Indians who use smartphones — your potential customer base |
| ₹0 | Technical expertise required to operate a kiosk |
| 24/7 | Revenue potential — kiosks earn even while you sleep |

### 7.3 What You Get as a Franchise Partner

| What You Get | Detail |
|-------------|--------|
| VaultPrint-branded kiosk hardware | Physical kiosk machine, printer, and accessories — supplied and installed |
| Full software platform license | Web app, admin dashboard, print agent, real-time monitoring — all included |
| Payment infrastructure | Razorpay integration, refund handling, transaction reporting — all managed |
| Installation and onboarding | VaultPrint installs and configures everything. Operational within a day. |
| Operational SOPs | Step-by-step guides for paper restocking and daily checks |
| Training | Remote onboarding session covering operations, admin dashboard, escalation |
| Ongoing software updates | All updates automatic — kiosk always runs latest version |
| Marketing support | VaultPrint branding assets, social templates, local marketing guidance |

### 7.4 Your Responsibilities

| Responsibility | Detail |
|---------------|--------|
| Secure venue locations | Identify and negotiate placement agreements in your territory |
| Manage local relationships | Be the face of VaultPrint in your city |
| Paper restocking | Load paper when low — guided by admin dashboard alerts. A4 from any stationery supplier. |
| Basic daily check | Confirm kiosk is powered on and showing QR screen. Admin app shows live status remotely. |
| Local marketing | Run local awareness campaigns — posters, social posts, word of mouth |

### 7.5 Revenue Model

> ⚠️ **Specific revenue splits disclosed during the franchise consultation call only — not on the website.**

- **Headline:** How you earn
- **Body:** As a VaultPrint franchise partner, you earn a share of every print job completed on your kiosks. The more kiosks you operate and the higher the footfall, the greater your monthly revenue. Partners with kiosks in high-footfall college locations typically see consistent daily usage from the first week of installation.

### 7.6 Franchise Application Form

| Field | Type |
|-------|------|
| Full name | Text |
| City you want to operate in | Text |
| Number of kiosks interested in | Dropdown: 1 / 2–5 / 6–10 / 10+ |
| Current occupation | Text |
| Do you have existing venue relationships? | Radio: Yes / No / Working on it |
| Phone number | Tel |
| Email | Email |
| Why do you want to partner with VaultPrint? | Textarea (min 50 chars) |

- **Submit CTA:** Submit Franchise Application →

**Server Action:** `actions/submitFranchiseApplication.ts`
- Writes to `franchise_applications` table in Supabase
- Sends admin notification + submitter auto-reply via AWS SES

---

## 8. Page 5 — Advertising (`/advertising`)

> Targets brands and marketing teams wanting to reach students and professionals at the moment of printing. Tight and data-forward.

### 8.1 Hero

| Element | Content |
|---------|---------|
| Eyebrow | Advertise on VaultPrint |
| H1 | Reach 1,000+ daily users at the exact moment they're engaged. |
| Sub | VaultPrint kiosk screens sit in colleges, offices, and co-working spaces. Your brand appears when users are actively engaged — not scrolling past. |
| CTA | Book Ad Space → |

### 8.2 Why Kiosk Advertising Works

| Reason | Detail |
|--------|--------|
| Captive audience | Users interact with the kiosk for 30 to 90 seconds — far longer than a typical digital ad view |
| No ad blockers | Physical screen displays cannot be blocked or skipped |
| Known demographics | College students 18–25, government office visitors 25–45, co-working professionals 22–35 |
| High-intent context | People printing are completing important tasks — receptive to relevant offers |
| Hyper-local targeting | Target specific locations: a college in Ranchi, an office in Bengaluru, a hostel in Pune |

### 8.3 Ad Formats

| Format | Description | Best For |
|--------|-------------|----------|
| On-screen display ads | Full-screen brand creative during kiosk idle time. 10–15 second rotation. | Brand awareness, product launches |
| QR-based promotions | QR code with your offer on the print confirmation screen — highest-attention moment. | Offers, downloads, sign-ups |
| Branded OTP screen | Your brand message and logo on the OTP delivery screen — shown to every paying user. | Brand recall, local offers |
| Print receipt branding | Your logo and a short message on the digital receipt sent after print completion. | Brand affinity, loyalty offers |

### 8.4 Audience Segments

| Segment | Profile | Sample Brands |
|---------|---------|--------------|
| College students 18–25 | Engineering, medical, and commerce students. High usage during exam season. | Ed-tech, food delivery, clothing, coaching institutes |
| Government office visitors 25–45 | Citizens visiting for documentation, licensing, certificates. Practical and value-oriented. | Insurance, banking, legal services, government scheme apps |
| Co-working professionals 22–35 | Freelancers, startup founders, consultants. Tech-savvy, higher disposable income. | SaaS tools, co-working memberships, fintech |

### 8.5 Campaign Enquiry Form

| Field | Type |
|-------|------|
| Brand or company name | Text |
| Campaign type | Dropdown: Brand awareness / Lead generation / Offer promotion / App download / Other |
| Target city or locations | Text |
| Target audience | Dropdown: College students / Office professionals / Both |
| Monthly budget range | Dropdown: Under ₹5,000 / ₹5,000–₹20,000 / ₹20,000–₹1 lakh / Above ₹1 lakh |
| Name | Text |
| Email | Email |
| Phone | Tel |

- **Submit CTA:** Submit Advertising Enquiry →

**Server Action:** `actions/submitAdvertisingEnquiry.ts`
- Writes to `ad_enquiries` table in Supabase

---

## 9. Page 6 — Pricing (`/pricing`)

### 9.1 Hero

| Element | Content |
|---------|---------|
| H1 | Simple, transparent pricing. No hidden fees. |
| Sub | The price you see is the price you pay. No service charges, no convenience fees, no surprises. |

### 9.2 Pricing Table (A4 only — v1)

| Print Type | Paper Size | Sides | Price Per Page |
|-----------|-----------|-------|---------------|
| Black & White | A4 | Single-sided | ₹2.00 |
| Black & White | A4 | Double-sided | ₹1.50 per side |
| Colour | A4 | Single-sided | ₹5.00 |
| Colour | A4 | Double-sided | ₹4.00 per side |

> Note below table: Prices shown are per page. Total is calculated automatically based on your settings and shown on screen before you pay.

> ℹ️ **A3 pricing and subscription plans are planned for a later phase. Only the 4 A4 tiers above are live in v1.**

### 9.3 No Hidden Fees Callout

| What's Included | What's Not Charged |
|----------------|-------------------|
| Per-page price as shown | No service fee |
| Live price shown before payment | No platform convenience charge |
| Digital payment confirmation | No GST added on top for end users (B2C) |
| Full refund if print fails | No cancellation fee if job fails |

### 9.4 Pricing Example

| Setting | Value |
|---------|-------|
| Document | 12-page PDF |
| Page range | All 12 pages |
| Print type | Black & White |
| Sides | Single-sided |
| Copies | 2 |
| Price per page | ₹2.00 |
| Total pages | 12 × 2 copies = 24 pages |
| **Total amount** | **24 × ₹2.00 = ₹48.00** |

### 9.5 Monthly Pass Waitlist

- **Headline:** Regular printer? Monthly passes coming soon.
- **Body:** A VaultPrint monthly pass will let you print at a reduced per-page rate. Join the waitlist to be first to know.
- **CTA:** Join the waitlist → [email input + submit button]

**Server Action:** `actions/submitWaitlist.ts`
- Writes to `waitlist` table in Supabase: `{ email, created_at }`

---

## 10. Page 7 — About & Contact (`/about`)

### 10.1 About Hero

| Element | Content |
|---------|---------|
| H1 | Built because printing shouldn't require trust in a stranger. |
| Para 1 | VaultPrint was born from a simple frustration: why do you have to hand your ID proof, bank statement, or assignment to someone you've never met, on a device you have no control over, with no idea whether they'll keep a copy? |
| Para 2 | We built VaultPrint to give people complete control over their documents — from the moment they select a file to the moment they collect a printout. No staff involvement. No shared devices. No data retention. |
| Para 3 | We're starting in Jharkhand — building for colleges, hostels, and government offices where the need is most acute — and expanding across India as we grow. |

### 10.2 Values

| Value | Statement |
|-------|-----------|
| Privacy first | Every design decision is evaluated against one question: does this protect the user's document? If not, it doesn't ship. |
| Zero friction | If it takes longer than 60 seconds, we haven't done our job. Speed is a feature. |
| Transparent pricing | We show you the total before you pay. There is no other price. |
| Always available | A kiosk that's down is a broken promise. Uptime is an obligation, not a target. |

### 10.3 Team Section

> ⚠️ **Keep team section minimal for launch — founder card(s) only. Add team as you grow.**

- **Headline:** The team behind VaultPrint
- **Body:** VaultPrint is built by a small founding team from Jharkhand with backgrounds in technology, product, and operations. We're students and professionals who experienced the problem firsthand — and decided to solve it.

### 10.4 Contact Form

| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Email | Email | Yes |
| Phone | Tel | No |
| Subject | Dropdown: Kiosk Rental / Franchise / Advertising / Technical Support / Press & Media / Other | Yes |
| Message | Textarea (min 20 chars) | Yes |

- **Submit CTA:** Send Message →

**Server Action:** `actions/submitContactMessage.ts`
- Writes to `contact_messages` table in Supabase
- Sends admin notification + submitter auto-reply via AWS SES

### 10.5 Contact Details

| Channel | Detail |
|---------|--------|
| Email | hello@vaultprintpvtltd.online |
| WhatsApp | [number] — typically replies within 2 hours |
| Location | Jharkhand, India |
| Social | LinkedIn · Instagram · Twitter/X |

---

## 11. SEO & Metadata

> **Implementation:** Use Next.js `generateMetadata()` in each `page.tsx`. Never hardcode meta tags.

| Page | Title Tag | Meta Description |
|------|-----------|-----------------|
| `/` | VaultPrint — Secure Self-Service Printing Kiosks in India | Print from your phone in under 60 seconds. No app, no queue, no staff. VaultPrint kiosks across colleges, offices, and hostels in India. |
| `/how-it-works` | How VaultPrint Works — QR Scan to Print in 60 Seconds | See how VaultPrint's self-service printing kiosk works — scan a QR, upload your PDF, pay securely, enter OTP and collect. |
| `/for-venues` | Host a VaultPrint Kiosk at Your Venue — Free Installation | Bring self-service printing to your college, hostel, or office. VaultPrint supplies, installs, and runs the kiosk at zero cost to you. |
| `/franchise` | VaultPrint Franchise Opportunity — Earn from Self-Service Printing | Own and operate VaultPrint kiosks in your city. Full hardware, software, and support provided. Earn per-print revenue from day one. |
| `/advertising` | Advertise on VaultPrint Kiosks — Reach Students and Professionals | Place your brand on VaultPrint kiosk screens in colleges, offices, and co-working spaces. Captive audience, no ad blockers. |
| `/pricing` | VaultPrint Pricing — Transparent Per-Page Print Rates | VaultPrint pricing starts at ₹2 per A4 page. No service charges, no hidden fees. |
| `/about` | About VaultPrint — Built for Private, Self-Service Printing in India | Learn about VaultPrint — why we built it, what we believe, and how to get in touch. |

### Sitemap & Robots

**`app/sitemap.ts`**
```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://vaultprintpvtltd.online', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://vaultprintpvtltd.online/how-it-works', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://vaultprintpvtltd.online/for-venues', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://vaultprintpvtltd.online/franchise', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://vaultprintpvtltd.online/advertising', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://vaultprintpvtltd.online/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://vaultprintpvtltd.online/about', changeFrequency: 'monthly', priority: 0.6 },
  ]
}
```

**`app/robots.ts`**
```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://vaultprintpvtltd.online/sitemap.xml',
  }
}
```

---

## 12. Database Tables (Supabase — Marketing Site)

```sql
-- Venue rental enquiries
create table contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organisation text not null,
  designation text not null,
  city text not null,
  venue_type text not null,
  daily_footfall text not null,
  phone text not null,
  email text not null,
  message text,
  created_at timestamptz default now()
);

-- Franchise applications
create table franchise_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  city text not null,
  kiosk_count text not null,
  occupation text not null,
  has_venue_relationships text not null,
  phone text not null,
  email text not null,
  motivation text not null,
  created_at timestamptz default now()
);

-- Advertising enquiries
create table ad_enquiries (
  id uuid primary key default gen_random_uuid(),
  brand_name text not null,
  campaign_type text not null,
  target_locations text not null,
  target_audience text not null,
  budget_range text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  created_at timestamptz default now()
);

-- General contact messages
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Pricing waitlist
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);
```

> All tables: enable RLS. Marketing site inserts via **Service Role key from Server Actions only** — never expose service key to the client.

---

## 13. Analytics Events

**Implementation:** `@vercel/analytics` for page views + custom `track()` events.

| Event Name | Trigger | Why It Matters |
|-----------|---------|---------------|
| `hero_cta_click` | Click on either hero CTA | Primary conversion signal |
| `how_it_works_scroll` | User scrolls past 80% of how-it-works section | Content engagement |
| `venue_form_start` | User focuses first form field on `/for-venues` | Intent signal |
| `venue_form_submit` | Successful form submission on `/for-venues` | Primary B2B conversion |
| `franchise_form_submit` | Successful franchise application submission | Secondary B2B conversion |
| `pricing_page_view` | Visit to `/pricing` | High-intent user signal |
| `waitlist_signup` | Email submitted on `/pricing` waitlist | Future customer pipeline |
| `ad_enquiry_submit` | Advertising form submitted | Advertiser pipeline |

---

## 14. Performance Requirements

| Metric | Target | Why |
|--------|--------|-----|
| Lighthouse Performance (mobile) | ≥ 85 | Primary users are on mobile |
| Largest Contentful Paint | < 2.5s on 4G | Hero must load fast — first impression |
| Cumulative Layout Shift | < 0.1 | No layout jump as images/fonts load |
| Core Web Vitals | All green | Required for Google Search ranking |
| HTTPS | Required everywhere | Security and trust signal |

**Image strategy:**
- All images as `.webp` format
- Use `next/image` with `priority` on the hero image
- Explicit `width` and `height` on every `<Image />` to prevent CLS
- No unoptimised third-party images

**Font strategy:**
- Use `next/font/google` with `Geist` (sans + mono)
- `display: swap` and `preload: true`
- Subset to `latin` only

---

## 15. Mobile Requirements

- All pages fully functional at **360px minimum width**
- Touch targets: minimum **44 × 44px** for all buttons, links, form fields
- Forms: `inputMode="numeric"` for phone fields, `type="email"` for email fields
- Navigation: hamburger menu with full-screen or drawer overlay
- No horizontal scrolling at any breakpoint

---

## 16. Pages Not in This PRD (Required Before Launch)

| Page | Status | Notes |
|------|--------|-------|
| `/privacy` | Required before launch | Generate using legal template; customise for VaultPrint's data practices |
| `/terms` | Required before launch | Cover payment terms, refund policy, and service availability |
| `/refund` | Required before launch | State clearly: full refund if print fails; no refund after successful print |
| `/blog` | Post-launch | SEO content strategy — printing tips, college life, document privacy |
| `/sitemap.xml` | Auto-generated via `app/sitemap.ts` | Submit to Google Search Console after launch |
| `robots.txt` | Auto-generated via `app/robots.ts` | Disallow `/admin/` and `/api/` |

---

*VaultPrint Pvt Ltd · vaultprintpvtltd.online · Confidential — not for distribution*
