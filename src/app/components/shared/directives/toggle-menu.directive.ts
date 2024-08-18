import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleMenu]',
  standalone: true,
})
export class ToggleMenuDirective {
  private isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen;
    const menu = this.el.nativeElement.nextElementSibling; 
    if (this.isOpen) {
      menu.style.display = 'block'; 
    } else {
      menu.style.display = 'none'; 
    }
  }
  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const menu = this.el.nativeElement.nextElementSibling;

    if (this.isOpen && !this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
      menu.style.display = 'none'; // Menüyü gizle
    }
  }
}
