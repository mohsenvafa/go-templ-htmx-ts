// Main TypeScript entry point
// Uses component registry for lazy loading

import { registerComponent, initializeComponents } from './components/registry'
import { IndexComponent } from '@components/index/index.component'
import { UserProfileComponent } from '@components/user-profile/user-profile.component'
import { UserAddressComponent } from '@components/user-address/user-address.component'
import { PageHeaderComponent } from '@components/page-header/page-header.component'

// Register components (they won't initialize until their templates are rendered)
registerComponent('index', () => new IndexComponent())
registerComponent('user-profile', () => new UserProfileComponent())
registerComponent('user-address', () => new UserAddressComponent())
registerComponent('page-header', () => new PageHeaderComponent())

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', initializeComponents)
