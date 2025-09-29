/**
 * Index Component
 * Main page component logic
 */
export class IndexComponent {
  constructor() {
    this.init()
  }

  private init(): void {
    console.log('Index component initialized')
    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    // Listen for HTMX events
    document.addEventListener('htmx:beforeRequest', (event: any) => {
      console.log('Loading component...')
    })

    document.addEventListener('htmx:afterRequest', (event: any) => {
      console.log('Component loaded')
    })
  }
}
