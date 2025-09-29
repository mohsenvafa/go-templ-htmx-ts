/**
 * User Profile Component
 * Handles user profile interactions
 */
export class UserProfileComponent {
  constructor() {
    this.init()
  }

  private init(): void {
    console.log('User Profile component initialized')
    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    // Listen for profile-specific events
    document.addEventListener('htmx:afterRequest', (event: any) => {
      if (event.detail.xhr.responseURL.includes('/user-profile')) {
        this.onProfileLoaded()
      }
    })
  }

  private onProfileLoaded(): void {
    console.log('User profile loaded')
    this.initializeProfileInteractions()
  }

  private initializeProfileInteractions(): void {
    // Add hover effects to avatar
    const avatar = document.querySelector('.profile-avatar')
    if (avatar) {
      avatar.addEventListener('mouseenter', () => {
        avatar.classList.add('hover-effect')
      })
      
      avatar.addEventListener('mouseleave', () => {
        avatar.classList.remove('hover-effect')
      })
    }
  }
}
