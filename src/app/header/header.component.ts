import { Component, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  isMenuOpen = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
    // Close the mobile menu after navigating
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$))
      .subscribe(() => (this.isMenuOpen = false));
  }

  isRoot(): boolean {
    return this.router.url === '/';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

