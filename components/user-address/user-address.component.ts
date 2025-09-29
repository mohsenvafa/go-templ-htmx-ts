/**
 * User Address Component
 * Handles address management interactions
 */
export class UserAddressComponent {
  constructor() {
    this.init()
  }

  private init(): void {
    console.log('User Address component initialized')
    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    // Listen for address-specific events
    document.addEventListener('htmx:afterRequest', (event: any) => {
      if (event.detail.xhr.responseURL.includes('/user-address')) {
        this.onAddressesLoaded()
      }
    })

    // Listen for address actions
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      
      if (target.matches('.address-actions .btn-sm')) {
        this.handleAddressAction(target)
      }
    })
  }

  private onAddressesLoaded(): void {
    console.log('User addresses loaded')
    this.initializeAddressInteractions()
  }

  private initializeAddressInteractions(): void {
    // Add hover effects to address items
    document.querySelectorAll('.address-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hover-effect')
      })
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover-effect')
      })
    })
  }

  private handleAddressAction(button: HTMLElement): void {
    const action = button.textContent?.trim()
    console.log(`Address action: ${action}`)
    
    // Handle different actions
    if (action === 'Edit') {
      this.editAddress(button)
    } else if (action === 'Set Default') {
      this.setDefaultAddress(button)
    }
  }

  private editAddress(button: HTMLElement): void {
    console.log('Edit address clicked')
    // Add edit functionality here
  }

  private setDefaultAddress(button: HTMLElement): void {
    console.log('Set default address clicked')
    // Add set default functionality here
  }
}
