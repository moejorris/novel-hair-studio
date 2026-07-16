import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ServiceTab = 'highlights' | 'color' | 'cuts';

interface Service {
  name: string;
  desc: string;
  price: string;
  duration: string;
}

interface GalleryImage {
  id: string;
  w: number;
  h: number;
  alt: string;
  span: string;
}

@Component({
  selector: 'app-novel-hair-studio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novel-hair-studio.component.html',
})
export class NovelHairStudioComponent {
  mobileOpen = signal(false);
  activeTab = signal<ServiceTab>('highlights');
  selectedTime = signal('');
  bookingDone = signal(false);

  navLinks = ['Services', 'Gallery', 'About', 'Book'];

  highlightServices: Service[] = [
    { name: 'The Full Story',  desc: 'A complete highlight transformation — full head, maximum dimension.', price: 'From $220', duration: '3.5 hrs' },
    { name: 'The Novella',     desc: 'Partial highlights for a sun-kissed, blended result.',               price: 'From $185', duration: '3 hrs'   },
    { name: 'The Short Story', desc: 'A focused highlight service for targeted brightness.',               price: 'From $120', duration: '2 hrs'   },
  ];

  colorServices: Service[] = [
    { name: 'The Final Draft',  desc: 'Full color service, perfected from root to end.',                        price: 'From $130', duration: '2.5 hrs' },
    { name: 'The Plot Twist',   desc: 'A color correction or dramatic change — expect the unexpected.',         price: 'From $95',  duration: '1.5 hrs' },
    { name: 'The Next Chapter', desc: 'Refresh your existing color with a glossy, vibrant update.',             price: 'From $100', duration: '2 hrs'   },
    { name: 'The Footnote',     desc: 'A quick root touch-up between appointments.',                           price: 'From $50',  duration: '30 min'  },
  ];

  cutServices: Service[] = [
    { name: 'The Novel Cut',       desc: "A full consultation cut with blowout — your signature look, written fresh.", price: 'From $80', duration: '75 min' },
    { name: "The Editor's Cut",    desc: 'Precision cut and style by an experienced hand.',                           price: 'From $70', duration: '60 min' },
    { name: 'The Page Turner',     desc: 'A cut that keeps things moving — clean, confident, efficient.',             price: 'From $50', duration: '60 min' },
    { name: 'Between the Lines',   desc: 'A trim to maintain shape and keep your style sharp.',                       price: 'From $30', duration: '45 min' },
  ];

  galleryImages: GalleryImage[] = [
    { id: 'photo-1522337360788-8b13dee7a37e', w: 600, h: 800, alt: 'Blended balayage color result',         span: 'row-span-2' },
    { id: 'photo-1560869713-da86a9ec0744',    w: 600, h: 400, alt: 'Dimensional lived-in highlights',       span: ''           },
    { id: 'photo-1595476108010-b4d1f102b1b1', w: 600, h: 400, alt: 'Warm golden color service',             span: ''           },
    { id: 'photo-1519699047748-de8e457a634e', w: 600, h: 700, alt: 'Blowout and style finish',              span: 'row-span-2' },
    { id: 'photo-1527799820374-dcf8d9d4a388', w: 600, h: 400, alt: 'Novel Hair Studio Raleigh interior',    span: ''           },
  ];

  allServices = [
    'The Full Story (Highlights)',
    'The Novella (Highlights)',
    'The Short Story (Highlights)',
    'The Final Draft (Color)',
    'The Plot Twist (Color)',
    'The Next Chapter (Color)',
    'The Footnote (Color)',
    'The Novel Cut',
    "The Editor's Cut",
    'The Page Turner',
    'Between the Lines',
    'The Smooth Story Line (Treatment)',
    'The Color Prologue (Consultation)',
  ];

  certifications = ['Redken Color', 'Keratin Complex', 'Hair Extensions', 'Balayage'];

  times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  selectedService = '';
  preferredDate = '';
  hairNotes = '';

  get activeServices(): Service[] {
    const map: Record<ServiceTab, Service[]> = {
      highlights: this.highlightServices,
      color: this.colorServices,
      cuts: this.cutServices,
    };
    return map[this.activeTab()];
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  setTab(tab: ServiceTab): void {
    this.activeTab.set(tab);
  }

  setTime(time: string): void {
    this.selectedTime.set(time);
  }

  imageUrl(id: string, w: number, h: number): string {
    return `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`;
  }

  onSubmit(): void {
    this.bookingDone.set(true);
  }

  resetForm(): void {
    this.bookingDone.set(false);
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.selectedService = '';
    this.preferredDate = '';
    this.selectedTime.set('');
    this.hairNotes = '';
  }
}
