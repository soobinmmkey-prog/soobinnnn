/**
 * TEMU CLONE - Complete Interactive Application Logic
 * Pure Vanilla JavaScript (No Frameworks)
 * Features:
 * - Product Catalog & Filtering (Category, Sort, Search)
 * - Flash Deals Live Countdown Timer
 * - Persistent Cart with Quantity Controls & Free Shipping Tracker
 * - Authentication (Sign In & Sign Up with Validation & Session Persistence)
 * - Flying Add-to-Cart Animation
 * - Quick View Modal & Gallery Thumbnails
 * - Spin & Win Lucky Roulette Gamification
 * - Wishlist Management
 * - Toast Notification System
 * - Mobile Navigation & Responsive Interactions
 */

'use strict';

// ==========================================================================
// 1. PRODUCT DATABASE (Realistic e-commerce dataset)
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: 'temu-101',
    title: 'Wireless Bluetooth 5.3 Earbuds with ENC Noise Cancelling & LED Display Case',
    price: 4.29,
    originalPrice: 38.99,
    category: 'electronics',
    tags: ['bestseller', 'lightning'],
    rating: 4.9,
    reviewsCount: 14820,
    soldCount: '180k+ sold',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Ultra-low latency wireless earphones with crystal clear Hi-Fi sound, waterproof nano-coating, and 40-hour battery standby.',
    specialBadge: "Temu's Choice",
    claimedPercent: 88,
    colors: ['Classic Black', 'Pearl White', 'Midnight Blue']
  },
  {
    id: 'temu-102',
    title: 'Military Grade Smart Watch with Heart Rate, SpO2 & 100+ Sports Modes',
    price: 12.48,
    originalPrice: 69.99,
    category: 'electronics',
    tags: ['bestseller', 'lightning'],
    rating: 4.8,
    reviewsCount: 9540,
    soldCount: '95k+ sold',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Rugged outdoor smartwatch with 1.85-inch HD touch screen, Bluetooth calling, real-time health monitoring, and IP68 waterproof rating.',
    specialBadge: 'Top Seller',
    claimedPercent: 92,
    colors: ['Tactical Black', 'Army Green', 'Titanium Grey']
  },
  {
    id: 'temu-103',
    title: 'Cozy Fleece Oversized Kangaroo Pocket Hoodie with Drawstring Hood',
    price: 9.49,
    originalPrice: 48.00,
    category: 'fashion',
    tags: ['under10', 'bestseller'],
    rating: 4.7,
    reviewsCount: 6320,
    soldCount: '45k+ sold',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Super soft brushed fleece lining gives exceptional warmth and cloud-like comfort for lounging, daily outings, or relaxed travel.',
    specialBadge: 'Clearance Deal',
    claimedPercent: 74,
    colors: ['Heather Grey', 'Coffee Brown', 'Charcoal Black', 'Dusty Rose']
  },
  {
    id: 'temu-104',
    title: 'RGB Backlit Mechanical Gaming Keyboard with Hot-Swappable Blue Switches',
    price: 18.90,
    originalPrice: 79.99,
    category: 'electronics',
    tags: ['bestseller'],
    rating: 4.9,
    reviewsCount: 12100,
    soldCount: '62k+ sold',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Compact 87-key anti-ghosting mechanical keyboard with 18 dynamic RGB lighting presets and ergonomic floating keycaps.',
    specialBadge: 'Gamers Pick',
    claimedPercent: 81,
    colors: ['Neon White', 'Stealth Black']
  },
  {
    id: 'temu-105',
    title: 'Multi-Functional Vegetable Chopper & Mandoline Slicer 12-in-1 Kitchen Gadget',
    price: 7.89,
    originalPrice: 32.50,
    category: 'home',
    tags: ['under10', 'bestseller'],
    rating: 4.8,
    reviewsCount: 18900,
    soldCount: '210k+ sold',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Effortlessly dice, slice, and julienne veggies in seconds with food container, hand guard, and interchangeable stainless steel blades.',
    specialBadge: 'Viral Product',
    claimedPercent: 95,
    colors: ['Emerald Green', 'Cloud Grey']
  },
  {
    id: 'temu-106',
    title: '32.8ft Smart LED Strip Lights with App & Music Sync Remote Control',
    price: 5.60,
    originalPrice: 28.00,
    category: 'home',
    tags: ['under10', 'lightning'],
    rating: 4.6,
    reviewsCount: 7800,
    soldCount: '88k+ sold',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Transform your room atmosphere with 16 million colors, dancing light rhythm sync with music, and easy peel-and-stick backing.',
    specialBadge: 'Lightning Deal',
    claimedPercent: 90,
    colors: ['Multicolor RGB']
  },
  {
    id: 'temu-107',
    title: 'Men Casual Breathable Air Cushion Running Sneakers & Athletic Gym Shoes',
    price: 15.30,
    originalPrice: 62.00,
    category: 'mens',
    tags: ['bestseller'],
    rating: 4.8,
    reviewsCount: 8400,
    soldCount: '54k+ sold',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Shock-absorbing honeycomb insole, breathable mesh upper, and anti-skid rubber outsole designed for all-day walking comfort.',
    specialBadge: "Temu's Choice",
    claimedPercent: 78,
    colors: ['Ruby Red', 'Pitch Black', 'Lunar White']
  },
  {
    id: 'temu-108',
    title: 'Hydrating Matte Velvet Liquid Lipstick 6-Piece Gift Set Long Lasting',
    price: 3.49,
    originalPrice: 24.00,
    category: 'beauty',
    tags: ['under10', 'new'],
    rating: 4.9,
    reviewsCount: 4120,
    soldCount: '32k+ sold',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Smudge-proof waterproof liquid lip tint collection enriched with Vitamin E for silky, kiss-proof color all day.',
    specialBadge: 'Popular Gift',
    claimedPercent: 86,
    colors: ['Nude Sunset Set', 'Berry Romantic Set']
  },
  {
    id: 'temu-109',
    title: '18K Gold Plated Layered Herringbone & Paperclip Chain Necklace Set',
    price: 2.89,
    originalPrice: 19.99,
    category: 'jewelry',
    tags: ['under10', 'bestseller'],
    rating: 4.9,
    reviewsCount: 16500,
    soldCount: '130k+ sold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Tarnish-resistant hypoallergenic stainless steel necklace duo with high-polish mirror finish and lobster claw clasp.',
    specialBadge: '5-Star Rated',
    claimedPercent: 91,
    colors: ['18K Yellow Gold', 'Silver Plated']
  },
  {
    id: 'temu-110',
    title: 'Kids STEM Programmable Robot Building Blocks Kit with Remote Control',
    price: 19.99,
    originalPrice: 65.00,
    category: 'toys',
    tags: ['new'],
    rating: 4.8,
    reviewsCount: 3200,
    soldCount: '18k+ sold',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=80'
    ],
    description: '392-piece educational building set featuring dual motors, smartphone app controls, gyroscope stunts, and USB rechargeable battery.',
    specialBadge: 'STEM Certified',
    claimedPercent: 67,
    colors: ['Cobalt Blue', 'Cyber Orange']
  },
  {
    id: 'temu-111',
    title: 'Mini Portable USB Rechargeable Personal Smoothie Blender 380ml',
    price: 8.75,
    originalPrice: 34.99,
    category: 'home',
    tags: ['under10', 'lightning'],
    rating: 4.7,
    reviewsCount: 5600,
    soldCount: '42k+ sold',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=80'
    ],
    description: '6 stainless steel blades crush ice and frozen fruits effortlessly. BPA-free food grade material with magnetic safety lock.',
    specialBadge: 'Lightning Deal',
    claimedPercent: 89,
    colors: ['Blush Pink', 'Mint Green', 'Sky Blue']
  },
  {
    id: 'temu-112',
    title: 'Silicone Air Fryer Reusable Liner Baskets Non-Stick Heat Resistant (2-Pack)',
    price: 3.25,
    originalPrice: 16.50,
    category: 'home',
    tags: ['under10', 'bestseller'],
    rating: 4.9,
    reviewsCount: 22400,
    soldCount: '340k+ sold',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Keep your air fryer clean without paper waste. Food-grade silicone withstands up to 450°F (230°C) with elevated oil drainage grooves.',
    specialBadge: 'Kitchen Essential',
    claimedPercent: 96,
    colors: ['Warm Grey & Red', 'Teal & Black']
  },
  {
    id: 'temu-113',
    title: 'High-Waisted Seamless Tummy Control Yoga Leggings with Side Pockets',
    price: 7.99,
    originalPrice: 39.00,
    category: 'fashion',
    tags: ['under10', 'bestseller'],
    rating: 4.8,
    reviewsCount: 11200,
    soldCount: '87k+ sold',
    image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Squat-proof 4-way stretch fabric hugs curves with compressive waistband and two deep phone pockets for hands-free workouts.',
    specialBadge: "Temu's Choice",
    claimedPercent: 84,
    colors: ['Deep Onyx', 'Slate Blue', 'Olive Green']
  },
  {
    id: 'temu-114',
    title: 'Men Tactical Outdoor Multi-Pocket Cargo Pants Water Resistant',
    price: 14.80,
    originalPrice: 58.00,
    category: 'mens',
    tags: ['bestseller'],
    rating: 4.7,
    reviewsCount: 6800,
    soldCount: '39k+ sold',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Ripstop reinforced fabric with Teflon coating resists spills, stains, and abrasions. Features 9 tactical utility pockets.',
    specialBadge: 'Durable Gear',
    claimedPercent: 79,
    colors: ['Khaki Tan', 'Camo Black', 'Military Olive']
  },
  {
    id: 'temu-115',
    title: 'Luxury Diamond Quilted Leather Crossbody Shoulder Bag with Chain Strap',
    price: 8.95,
    originalPrice: 45.00,
    category: 'fashion',
    tags: ['under10', 'lightning'],
    rating: 4.9,
    reviewsCount: 13400,
    soldCount: '98k+ sold',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=80'
    ],
    description: 'Timeless quilted pattern crafted from supple vegan leather with golden turn-lock clasp and woven chain shoulder strap.',
    specialBadge: 'Flash Deal',
    claimedPercent: 93,
    colors: ['Matte Black', 'Cream Ivory', 'Caramel Tan']
  },
  {
    id: 'temu-116',
    title: 'Ultrasonic Electric Toothbrush with 8 Brush Heads & Travel Case',
    price: 9.99,
    originalPrice: 49.99,
    category: 'beauty',
    tags: ['under10', 'bestseller'],
    rating: 4.8,
    reviewsCount: 15200,
    soldCount: '110k+ sold',
    image: 'https://images.unsplash.com/photo-1559591937-e1032b4a5323?w=500&auto=format&fit=crop&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1559591937-e1032b4a5323?w=500&auto=format&fit=crop&q=80'
    ],
    description: '40,000 VPM sonic motor removes 10x more plaque. 5 custom brushing modes, 2-minute smart timer, and 60-day battery life per charge.',
    specialBadge: 'Dentist Approved',
    claimedPercent: 87,
    colors: ['Snow White', 'Obsidian Black', 'Baby Pink']
  }
];

// ==========================================================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================================================
const AppState = {
  cart: [],
  wishlist: [],
  currentUser: null,
  activeCategory: 'all',
  activeCatalogFilter: 'all',
  searchQuery: '',
  appliedCoupon: null,
  couponDiscountAmount: 0,
  sortBy: 'featured',
  displayedProductsCount: 12,
  shippingThreshold: 30.00, // $30 for free shipping tracker

  // LocalStorage Helpers
  initStorage() {
    try {
      const storedCart = localStorage.getItem('temu_cart');
      if (storedCart) this.cart = JSON.parse(storedCart);

      const storedWishlist = localStorage.getItem('temu_wishlist');
      if (storedWishlist) this.wishlist = JSON.parse(storedWishlist);

      const storedUser = localStorage.getItem('temu_user');
      if (storedUser) this.currentUser = JSON.parse(storedUser);

      const storedCoupon = localStorage.getItem('temu_coupon');
      if (storedCoupon) this.appliedCoupon = JSON.parse(storedCoupon);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },

  saveCart() {
    localStorage.setItem('temu_cart', JSON.stringify(this.cart));
    updateHeaderCounters();
    renderCartDrawer();
  },

  saveWishlist() {
    localStorage.setItem('temu_wishlist', JSON.stringify(this.wishlist));
    updateHeaderCounters();
  },

  saveUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('temu_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('temu_user');
    }
    updateUserInterface();
  }
};

// ==========================================================================
// 3. DOM ELEMENTS CACHE
// ==========================================================================
const DOM = {
  // Header & Counters
  mainHeader: document.getElementById('mainHeader'),
  cartCount: document.getElementById('cartCount'),
  wishlistCount: document.getElementById('wishlistCount'),
  mobCartCount: document.getElementById('mobCartCount'),
  mobWishlistCount: document.getElementById('mobWishlistCount'),
  userGreeting: document.getElementById('userGreeting'),
  userNameLabel: document.getElementById('userNameLabel'),
  userDropdownMenu: document.getElementById('userDropdownMenu'),
  userAvatar: document.getElementById('userAvatar'),
  dropdownUserName: document.getElementById('dropdownUserName'),
  dropdownUserEmail: document.getElementById('dropdownUserEmail'),
  logoutBtn: document.getElementById('logoutBtn'),

  // Search
  searchInput: document.getElementById('searchInput'),
  searchForm: document.getElementById('searchForm'),
  searchClearBtn: document.getElementById('searchClearBtn'),
  searchDropdown: document.getElementById('searchDropdown'),
  recentSearchesSection: document.getElementById('recentSearchesSection'),
  recentList: document.getElementById('recentList'),
  clearRecentBtn: document.getElementById('clearRecentBtn'),
  activeFilterBar: document.getElementById('activeFilterBar'),
  filterQueryText: document.getElementById('filterQueryText'),
  clearFilterBtn: document.getElementById('clearFilterBtn'),

  // Category & Filters
  categoryPills: document.querySelectorAll('.cat-pill'),
  catalogTabs: document.querySelectorAll('.catalog-tab-btn'),
  catalogSort: document.getElementById('catalogSort'),
  productsGrid: document.getElementById('productsGrid'),
  flashDealsGrid: document.getElementById('flashDealsGrid'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),

  // Modals & Drawers
  authModalBackdrop: document.getElementById('authModalBackdrop'),
  authModalTrigger: document.getElementById('authModalTrigger'),
  authModalClose: document.getElementById('authModalClose'),
  tabSignInBtn: document.getElementById('tabSignInBtn'),
  tabRegisterBtn: document.getElementById('tabRegisterBtn'),
  signInForm: document.getElementById('signInForm'),
  registerForm: document.getElementById('registerForm'),
  fillDemoCredentials: document.getElementById('fillDemoCredentials'),

  // Cart Drawer
  cartBackdrop: document.getElementById('cartBackdrop'),
  cartDrawerTrigger: document.getElementById('cartDrawerTrigger'),
  cartCloseBtn: document.getElementById('cartCloseBtn'),
  cartDrawerTotalCount: document.getElementById('cartDrawerTotalCount'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartDrawerFooter: document.getElementById('cartDrawerFooter'),
  cartEmptyState: document.getElementById('cartEmptyState'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartDiscount: document.getElementById('cartDiscount'),
  cartDiscountLine: document.getElementById('cartDiscountLine'),
  cartShipping: document.getElementById('cartShipping'),
  cartTotal: document.getElementById('cartTotal'),
  couponInput: document.getElementById('couponInput'),
  applyCouponBtn: document.getElementById('applyCouponBtn'),
  couponStatusMsg: document.getElementById('couponStatusMsg'),
  shippingTrackerMsg: document.getElementById('shippingTrackerMsg'),
  shippingProgressFill: document.getElementById('shippingProgressFill'),
  checkoutBtn: document.getElementById('checkoutBtn'),

  // Quick View Modal
  quickViewBackdrop: document.getElementById('quickViewBackdrop'),
  quickViewClose: document.getElementById('quickViewClose'),
  qvMainImage: document.getElementById('qvMainImage'),
  qvBadge: document.getElementById('qvBadge'),
  qvThumbnails: document.getElementById('qvThumbnails'),
  qvSoldTag: document.getElementById('qvSoldTag'),
  qvTitle: document.getElementById('qvTitle'),
  qvStars: document.getElementById('qvStars'),
  qvRating: document.getElementById('qvRating'),
  qvReviews: document.getElementById('qvReviews'),
  qvPrice: document.getElementById('qvPrice'),
  qvOriginalPrice: document.getElementById('qvOriginalPrice'),
  qvSaveTag: document.getElementById('qvSaveTag'),
  qvDescription: document.getElementById('qvDescription'),
  qvColorOptions: document.getElementById('qvColorOptions'),
  selectedColorName: document.getElementById('selectedColorName'),
  qvQtyInput: document.getElementById('qvQtyInput'),
  qvQtyMinus: document.getElementById('qvQtyMinus'),
  qvQtyPlus: document.getElementById('qvQtyPlus'),
  qvAddToCartBtn: document.getElementById('qvAddToCartBtn'),
  qvWishlistBtn: document.getElementById('qvWishlistBtn'),

  // Wheel Modal
  luckyWheelBackdrop: document.getElementById('luckyWheelBackdrop'),
  wheelModalClose: document.getElementById('wheelModalClose'),
  spinWheelBtn: document.getElementById('spinWheelBtn'),
  heroSpinTrigger: document.getElementById('heroSpinTrigger'),
  spinCenterBtn: document.getElementById('spinCenterBtn'),
  wheelDisk: document.getElementById('wheelDisk'),
  wheelResultBox: document.getElementById('wheelResultBox'),
  wonPrizeName: document.getElementById('wonPrizeName'),
  wonPrizeCode: document.getElementById('wonPrizeCode'),
  claimPrizeBtn: document.getElementById('claimPrizeBtn'),

  // Order Success Modal
  orderSuccessBackdrop: document.getElementById('orderSuccessBackdrop'),
  successOrderId: document.getElementById('successOrderId'),
  successOrderTotal: document.getElementById('successOrderTotal'),
  continueShoppingAfterOrderBtn: document.getElementById('continueShoppingAfterOrderBtn'),

  // App Download Modal
  appModalBackdrop: document.getElementById('appModalBackdrop'),
  openAppModalBtn: document.getElementById('openAppModalBtn'),
  appModalClose: document.getElementById('appModalClose'),
  closeAppModalBtn: document.getElementById('closeAppModalBtn'),

  // Notifications & Utilities
  toastContainer: document.getElementById('toastContainer'),
  backToTopBtn: document.getElementById('backToTopBtn')
};

// Currently selected item in Quick View modal
let currentQvProduct = null;
let currentQvSelectedColor = '';

// ==========================================================================
// 4. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  AppState.initStorage();
  
  initTopAnnouncementSlider();
  initHeroCarousel();
  initFlashDealsTimer();
  renderFlashDeals();
  renderProductsCatalog();
  updateHeaderCounters();
  updateUserInterface();
  setupEventListeners();
  renderRecentSearches();

  // Smooth appearance of page
  document.body.classList.add('page-loaded');
});

// ==========================================================================
// 5. ANNOUNCEMENT & HERO CAROUSEL LOGIC
// ==========================================================================
function initTopAnnouncementSlider() {
  const items = document.querySelectorAll('.announcement-slider .announcement-item');
  if (items.length < 2) return;
  let currentIndex = 0;

  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, 4000);
}

function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-indicators .dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const carousel = document.getElementById('heroCarousel');

  if (!slides.length) return;

  let currentSlide = 0;
  let carouselTimer = null;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startAutoPlay() {
    carouselTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(carouselTimer);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { showSlide(currentSlide + 1); stopAutoPlay(); startAutoPlay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { showSlide(currentSlide - 1); stopAutoPlay(); startAutoPlay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      showSlide(idx);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

// ==========================================================================
// 6. FLASH DEALS & LIVE COUNTDOWN TIMER
// ==========================================================================
function initFlashDealsTimer() {
  const hoursEl = document.getElementById('timerHours');
  const minsEl = document.getElementById('timerMins');
  const secsEl = document.getElementById('timerSecs');

  let totalSeconds = 5 * 3600 + 42 * 60 + 19; // 5 hours, 42 mins, 19 secs

  setInterval(() => {
    if (totalSeconds <= 0) {
      totalSeconds = 8 * 3600; // Reset timer for seamless demo
    } else {
      totalSeconds--;
    }

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

function renderFlashDeals() {
  if (!DOM.flashDealsGrid) return;
  const flashProducts = PRODUCTS_DATA.filter(p => p.tags.includes('lightning') || p.tags.includes('bestseller')).slice(0, 6);

  DOM.flashDealsGrid.innerHTML = flashProducts.map(product => {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    return `
      <article class="flash-card" data-id="${product.id}">
        <div class="flash-img-wrapper">
          <span class="flash-badge-corner">-${discount}%</span>
          <img src="${product.image}" alt="${escapeHtml(product.title)}" loading="lazy">
        </div>
        <div class="flash-price-row">
          <span class="flash-current-price">$${product.price.toFixed(2)}</span>
          <span class="flash-original-price">$${product.originalPrice.toFixed(2)}</span>
        </div>
        <h4 class="flash-title">${escapeHtml(product.title)}</h4>
        <div class="deal-progress-wrapper">
          <div class="deal-progress-bar">
            <div class="deal-progress-fill" style="width: ${product.claimedPercent}%;"></div>
          </div>
          <div class="deal-status-text">
            <span>${product.claimedPercent}% Claimed</span>
            <span class="text-red">Almost gone</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Click card to open Quick View
  DOM.flashDealsGrid.querySelectorAll('.flash-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.id;
      const product = PRODUCTS_DATA.find(p => p.id === pid);
      if (product) openQuickView(product);
    });
  });
}

// ==========================================================================
// 7. PRODUCT CATALOG RENDERING & FILTERING
// ==========================================================================
function renderProductsCatalog(isLoadMore = false) {
  if (!DOM.productsGrid) return;

  // 1. Filter by category
  let filtered = PRODUCTS_DATA.filter(p => {
    if (AppState.activeCategory === 'all') return true;
    if (AppState.activeCategory === 'under10') return p.price < 10;
    if (AppState.activeCategory === 'bestsellers') return p.tags.includes('bestseller');
    if (AppState.activeCategory === 'lightning') return p.tags.includes('lightning');
    return p.category === AppState.activeCategory;
  });

  // 2. Filter by search query
  if (AppState.searchQuery.trim()) {
    const q = AppState.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // 3. Filter by catalog tab
  if (AppState.activeCatalogFilter !== 'all') {
    if (AppState.activeCatalogFilter === 'bestseller') {
      filtered = filtered.filter(p => p.tags.includes('bestseller'));
    } else if (AppState.activeCatalogFilter === 'under10') {
      filtered = filtered.filter(p => p.price < 10);
    } else if (AppState.activeCatalogFilter === 'new') {
      filtered = filtered.filter(p => p.tags.includes('new') || p.id.endsWith('0') || p.id.endsWith('8'));
    } else if (AppState.activeCatalogFilter === 'rating') {
      filtered = filtered.filter(p => p.rating >= 4.8);
    }
  }

  // 4. Sort
  if (AppState.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (AppState.sortBy === 'sold') {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  // Handle empty state
  if (filtered.length === 0) {
    DOM.productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #fff; border-radius: 12px;">
        <span style="font-size: 3rem;">🔍</span>
        <h3 style="margin-top: 1rem; font-size: 1.3rem;">No products found</h3>
        <p style="color: #777; margin: 0.5rem 0 1.5rem;">Try adjusting your search terms or filters.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    if (DOM.loadMoreBtn) DOM.loadMoreBtn.style.display = 'none';
    return;
  }

  // Pagination slice
  const itemsToDisplay = filtered.slice(0, AppState.displayedProductsCount);

  // Update Load More visibility
  if (DOM.loadMoreBtn) {
    DOM.loadMoreBtn.style.display = itemsToDisplay.length < filtered.length ? 'inline-flex' : 'none';
  }

  // Generate cards HTML
  DOM.productsGrid.innerHTML = itemsToDisplay.map(product => {
    const isWishlisted = AppState.wishlist.some(w => w.id === product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-media">
          <span class="badge-discount">-${discount}%</span>
          ${product.specialBadge ? `<span class="badge-special">${product.specialBadge}</span>` : ''}
          <button type="button" class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Toggle wishlist">
            <svg class="icon heart-icon" viewBox="0 0 24 24" fill="${isWishlisted ? '#e02b2b' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <img src="${product.image}" alt="${escapeHtml(product.title)}" loading="lazy">
          <div class="card-quick-view-overlay">
            <button type="button" class="btn-card-quickview" data-id="${product.id}">Quick View</button>
          </div>
        </div>

        <div class="card-content">
          <h3 class="card-title">${escapeHtml(product.title)}</h3>
          
          <div class="card-rating-row">
            <span class="stars-gold">★★★★★</span>
            <span class="sold-count">${product.soldCount}</span>
          </div>

          <div class="card-price-action-row">
            <div class="card-prices">
              <span class="price-main">$${product.price.toFixed(2)}</span>
              <span class="price-sub">$${product.originalPrice.toFixed(2)}</span>
            </div>
            <button type="button" class="card-add-cart-btn" data-id="${product.id}" title="Add to Cart" aria-label="Add to Cart">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachProductCardEvents();
}

function attachProductCardEvents() {
  // Wishlist toggle
  DOM.productsGrid.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.dataset.id;
      toggleWishlist(pid, btn);
    });
  });

  // Add to cart click
  DOM.productsGrid.querySelectorAll('.card-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.dataset.id;
      const product = PRODUCTS_DATA.find(p => p.id === pid);
      if (product) {
        addToCart(product, 1, product.colors ? product.colors[0] : 'Standard');
        triggerFlyToCartAnimation(btn);
      }
    });
  });

  // Quick View triggers
  DOM.productsGrid.querySelectorAll('.btn-card-quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.dataset.id;
      const product = PRODUCTS_DATA.find(p => p.id === pid);
      if (product) openQuickView(product);
    });
  });

  // Card click defaults to Quick View
  DOM.productsGrid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.id;
      const product = PRODUCTS_DATA.find(p => p.id === pid);
      if (product) openQuickView(product);
    });
  });
}

function resetAllFilters() {
  AppState.searchQuery = '';
  AppState.activeCategory = 'all';
  AppState.activeCatalogFilter = 'all';
  AppState.sortBy = 'featured';
  AppState.displayedProductsCount = 12;

  if (DOM.searchInput) DOM.searchInput.value = '';
  if (DOM.searchClearBtn) DOM.searchClearBtn.style.display = 'none';
  if (DOM.activeFilterBar) DOM.activeFilterBar.style.display = 'none';
  if (DOM.catalogSort) DOM.catalogSort.value = 'featured';

  DOM.categoryPills.forEach(pill => pill.classList.toggle('active', pill.dataset.category === 'all'));
  DOM.catalogTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.filter === 'all'));

  renderProductsCatalog();
  showToast('Filters cleared', 'info');
}

// ==========================================================================
// 8. CART MANAGEMENT (Add, Remove, Update, Drawer, Free Shipping)
// ==========================================================================
function addToCart(product, quantity = 1, selectedVariant = 'Standard') {
  const existingIndex = AppState.cart.findIndex(
    item => item.id === product.id && item.variant === selectedVariant
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      variant: selectedVariant,
      quantity: quantity
    });
  }

  AppState.saveCart();
  showToast(`Added to Cart: ${product.title.substring(0, 30)}...`, 'success');
}

function removeFromCart(index) {
  if (index >= 0 && index < AppState.cart.length) {
    const removedItem = AppState.cart.splice(index, 1)[0];
    AppState.saveCart();
    showToast(`Removed "${removedItem.title.substring(0, 20)}..."`, 'info');
  }
}

function updateCartItemQuantity(index, delta) {
  if (AppState.cart[index]) {
    const newQty = AppState.cart[index].quantity + delta;
    if (newQty <= 0) {
      removeFromCart(index);
    } else {
      AppState.cart[index].quantity = newQty;
      AppState.saveCart();
    }
  }
}

function renderCartDrawer() {
  const totalItemCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (DOM.cartDrawerTotalCount) DOM.cartDrawerTotalCount.textContent = totalItemCount;

  if (AppState.cart.length === 0) {
    if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'block';
    if (DOM.cartDrawerFooter) DOM.cartDrawerFooter.style.display = 'none';
    if (DOM.cartItemsList) {
      // Remove any previously rendered items except empty state
      const items = DOM.cartItemsList.querySelectorAll('.cart-item-card');
      items.forEach(el => el.remove());
    }
    updateShippingTracker(0);
    return;
  }

  if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'none';
  if (DOM.cartDrawerFooter) DOM.cartDrawerFooter.style.display = 'block';

  // Calculate pricing
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (AppState.appliedCoupon) {
    if (AppState.appliedCoupon.type === 'percent') {
      discountAmount = (subtotal * AppState.appliedCoupon.value) / 100;
    } else if (AppState.appliedCoupon.type === 'fixed') {
      discountAmount = Math.min(subtotal, AppState.appliedCoupon.value);
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  // Update Free Shipping Progress Tracker
  updateShippingTracker(subtotal);

  // Render items list
  if (DOM.cartItemsList) {
    const itemsHtml = AppState.cart.map((item, index) => `
      <div class="cart-item-card">
        <button type="button" class="cart-item-remove-btn" data-index="${index}" title="Remove item">&times;</button>
        <img src="${item.image}" alt="${escapeHtml(item.title)}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${escapeHtml(item.title)}</h4>
          <span class="cart-item-variant">Option: ${escapeHtml(item.variant)}</span>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="qty-stepper">
              <button type="button" class="qty-btn cart-qty-minus" data-index="${index}">&minus;</button>
              <input type="number" value="${item.quantity}" readonly>
              <button type="button" class="qty-btn cart-qty-plus" data-index="${index}">&plus;</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    DOM.cartItemsList.innerHTML = itemsHtml;

    // Attach cart item quantity & remove buttons
    DOM.cartItemsList.querySelectorAll('.cart-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => updateCartItemQuantity(parseInt(btn.dataset.index, 10), -1));
    });
    DOM.cartItemsList.querySelectorAll('.cart-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => updateCartItemQuantity(parseInt(btn.dataset.index, 10), 1));
    });
    DOM.cartItemsList.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index, 10)));
    });
  }

  // Update footer summary numbers
  if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  
  if (discountAmount > 0) {
    if (DOM.cartDiscountLine) DOM.cartDiscountLine.style.display = 'flex';
    if (DOM.cartDiscount) DOM.cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (DOM.cartDiscountLine) DOM.cartDiscountLine.style.display = 'none';
  }

  if (DOM.cartTotal) DOM.cartTotal.textContent = `$${finalTotal.toFixed(2)}`;
}

function updateShippingTracker(subtotal) {
  const threshold = AppState.shippingThreshold;
  const percentage = Math.min(100, Math.round((subtotal / threshold) * 100));

  if (DOM.shippingProgressFill) {
    DOM.shippingProgressFill.style.width = `${percentage}%`;
  }

  if (DOM.shippingTrackerMsg) {
    if (subtotal >= threshold) {
      DOM.shippingTrackerMsg.innerHTML = '🎉 <strong>CONGRATULATIONS!</strong> You unlocked <strong>FREE EXPRESS SHIPPING!</strong> 🚚';
    } else {
      const remaining = (threshold - subtotal).toFixed(2);
      DOM.shippingTrackerMsg.innerHTML = `Add <strong>$${remaining}</strong> more for <strong>FREE EXPRESS SHIPPING!</strong> 🚚`;
    }
  }
}

function applyCouponCode(code) {
  const cleanCode = code.trim().toUpperCase();
  if (!cleanCode) {
    showCouponMessage('Please enter a coupon code.', 'error');
    return;
  }

  const validCoupons = {
    'TEMU90': { code: 'TEMU90', type: 'percent', value: 20, desc: '20% OFF Everything' },
    'TEMU100': { code: 'TEMU100', type: 'fixed', value: 15, desc: '$15 OFF orders' },
    'FREESHIP': { code: 'FREESHIP', type: 'percent', value: 10, desc: '10% Extra OFF + Free Shipping' },
    'WELCOME': { code: 'WELCOME', type: 'percent', value: 25, desc: '25% Welcome Discount' }
  };

  if (validCoupons[cleanCode]) {
    AppState.appliedCoupon = validCoupons[cleanCode];
    localStorage.setItem('temu_coupon', JSON.stringify(AppState.appliedCoupon));
    renderCartDrawer();
    showCouponMessage(`✔ Coupon applied: ${validCoupons[cleanCode].desc}!`, 'success');
    showToast(`Coupon applied: ${cleanCode}`, 'success');
  } else {
    showCouponMessage('Invalid or expired coupon code. Try: TEMU90', 'error');
  }
}

function showCouponMessage(msg, type) {
  if (!DOM.couponStatusMsg) return;
  DOM.couponStatusMsg.textContent = msg;
  DOM.couponStatusMsg.style.color = type === 'success' ? 'var(--temu-green)' : 'var(--temu-red)';
}

function handleCheckout() {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }

  // Calculate total before clearing
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (AppState.appliedCoupon) {
    discount = AppState.appliedCoupon.type === 'percent' 
      ? (subtotal * AppState.appliedCoupon.value) / 100 
      : Math.min(subtotal, AppState.appliedCoupon.value);
  }
  const totalPaid = Math.max(0, subtotal - discount);

  // Close cart drawer
  closeCartDrawer();

  // Populate Order Success Modal
  const orderId = 'TEMU-' + Math.floor(10000000 + Math.random() * 90000000);
  if (DOM.successOrderId) DOM.successOrderId.textContent = orderId;
  if (DOM.successOrderTotal) DOM.successOrderTotal.textContent = `$${totalPaid.toFixed(2)}`;

  // Clear cart
  AppState.cart = [];
  AppState.saveCart();

  // Open Order Success Modal
  openModal(DOM.orderSuccessBackdrop);
  showToast('Order confirmed! Happy shopping!', 'success');
}

// ==========================================================================
// 9. QUICK VIEW MODAL
// ==========================================================================
function openQuickView(product) {
  currentQvProduct = product;
  currentQvSelectedColor = product.colors ? product.colors[0] : 'Standard';

  if (DOM.qvMainImage) DOM.qvMainImage.src = product.image;
  if (DOM.qvTitle) DOM.qvTitle.textContent = product.title;
  if (DOM.qvPrice) DOM.qvPrice.textContent = `$${product.price.toFixed(2)}`;
  if (DOM.qvOriginalPrice) DOM.qvOriginalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
  
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  if (DOM.qvBadge) DOM.qvBadge.textContent = `-${discount}%`;
  if (DOM.qvSaveTag) DOM.qvSaveTag.textContent = `Save ${discount}%`;
  
  if (DOM.qvSoldTag) DOM.qvSoldTag.textContent = `🔥 ${product.soldCount} on Temu`;
  if (DOM.qvRating) DOM.qvRating.textContent = product.rating.toFixed(1);
  if (DOM.qvReviews) DOM.qvReviews.textContent = `${product.reviewsCount.toLocaleString()} reviews`;
  if (DOM.qvDescription) DOM.qvDescription.textContent = product.description;
  if (DOM.qvQtyInput) DOM.qvQtyInput.value = 1;
  if (DOM.selectedColorName) DOM.selectedColorName.textContent = currentQvSelectedColor;

  // Render Thumbnails
  if (DOM.qvThumbnails) {
    const thumbs = product.thumbnails && product.thumbnails.length ? product.thumbnails : [product.image];
    DOM.qvThumbnails.innerHTML = thumbs.map((imgUrl, i) => `
      <img src="${imgUrl}" alt="Thumbnail" class="qv-thumb ${i === 0 ? 'active' : ''}" data-url="${imgUrl}">
    `).join('');

    DOM.qvThumbnails.querySelectorAll('.qv-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        DOM.qvThumbnails.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (DOM.qvMainImage) DOM.qvMainImage.src = thumb.dataset.url;
      });
    });
  }

  // Wishlist button state
  const isWishlisted = AppState.wishlist.some(w => w.id === product.id);
  if (DOM.qvWishlistBtn) {
    DOM.qvWishlistBtn.classList.toggle('active', isWishlisted);
  }

  openModal(DOM.quickViewBackdrop);
}

// ==========================================================================
// 10. AUTHENTICATION & REGISTRATION SYSTEM
// ==========================================================================
function switchAuthTab(targetTab) {
  if (targetTab === 'signin') {
    DOM.tabSignInBtn.classList.add('active');
    DOM.tabRegisterBtn.classList.remove('active');
    DOM.signInForm.style.display = 'flex';
    DOM.registerForm.style.display = 'none';
  } else {
    DOM.tabRegisterBtn.classList.add('active');
    DOM.tabSignInBtn.classList.remove('active');
    DOM.registerForm.style.display = 'flex';
    DOM.signInForm.style.display = 'none';
  }
}

function handleSignIn(e) {
  e.preventDefault();
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPassword');
  const emailError = document.getElementById('loginEmailError');
  const passError = document.getElementById('loginPassError');

  let isValid = true;
  emailError.textContent = '';
  passError.textContent = '';
  emailInput.classList.remove('is-invalid');
  passInput.classList.remove('is-invalid');

  // Validate Email
  const emailVal = emailInput.value.trim();
  if (!emailVal) {
    emailError.textContent = 'Please enter your email or phone number.';
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else if (!validateEmail(emailVal)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('is-invalid');
    isValid = false;
  }

  // Validate Password
  const passVal = passInput.value;
  if (!passVal) {
    passError.textContent = 'Please enter your password.';
    passInput.classList.add('is-invalid');
    isValid = false;
  } else if (passVal.length < 6) {
    passError.textContent = 'Password must be at least 6 characters.';
    passInput.classList.add('is-invalid');
    isValid = false;
  }

  if (!isValid) return;

  // Retrieve existing users database
  let users = [];
  try {
    const storedUsers = localStorage.getItem('temu_registered_users');
    if (storedUsers) users = JSON.parse(storedUsers);
  } catch (err) {}

  // Check user credentials or match demo
  const user = users.find(u => u.email.toLowerCase() === emailVal.toLowerCase() && u.password === passVal) ||
               (emailVal.toLowerCase() === 'demo@temu.com' && passVal === 'Temu123!' ? { name: 'Demo Shopper', email: 'demo@temu.com' } : null);

  if (user) {
    AppState.saveUser({
      name: user.name,
      email: user.email
    });
    closeModal(DOM.authModalBackdrop);
    showToast(`Welcome back, ${user.name}! 🎉`, 'success');
  } else {
    passError.textContent = 'Invalid credentials. Try Auto-fill Demo Account!';
    passInput.classList.add('is-invalid');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const nameInput = document.getElementById('regName');
  const emailInput = document.getElementById('regEmail');
  const passInput = document.getElementById('regPassword');
  const termsCheck = document.getElementById('termsCheck');

  const nameError = document.getElementById('regNameError');
  const emailError = document.getElementById('regEmailError');
  const passError = document.getElementById('regPassError');
  const termsError = document.getElementById('termsError');

  let isValid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  passError.textContent = '';
  termsError.textContent = '';

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const passVal = passInput.value;

  if (!nameVal) {
    nameError.textContent = 'Please provide your full name.';
    isValid = false;
  }

  if (!emailVal || !validateEmail(emailVal)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!passVal || passVal.length < 6) {
    passError.textContent = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  if (!termsCheck.checked) {
    termsError.textContent = 'You must agree to the Terms of Use to register.';
    isValid = false;
  }

  if (!isValid) return;

  // Check if email already registered
  let users = [];
  try {
    const storedUsers = localStorage.getItem('temu_registered_users');
    if (storedUsers) users = JSON.parse(storedUsers);
  } catch (err) {}

  const exists = users.some(u => u.email.toLowerCase() === emailVal.toLowerCase());
  if (exists) {
    emailError.textContent = 'This email is already registered. Please sign in.';
    return;
  }

  // Register new user
  const newUser = {
    name: nameVal,
    email: emailVal,
    password: passVal
  };
  users.push(newUser);
  localStorage.setItem('temu_registered_users', JSON.stringify(users));

  // Log in immediately
  AppState.saveUser({
    name: newUser.name,
    email: newUser.email
  });

  // Give welcome coupon
  AppState.appliedCoupon = { code: 'TEMU100', type: 'fixed', value: 15, desc: '$15 Welcome Voucher' };
  localStorage.setItem('temu_coupon', JSON.stringify(AppState.appliedCoupon));

  closeModal(DOM.authModalBackdrop);
  showToast(`Account created! Welcome, ${newUser.name}! Claimed $100 coupon pack! 🎁`, 'success');
}

function handleLogout() {
  AppState.saveUser(null);
  if (DOM.userDropdownMenu) DOM.userDropdownMenu.classList.remove('active');
  showToast('You have signed out successfully.', 'info');
}

function updateUserInterface() {
  if (AppState.currentUser) {
    if (DOM.userGreeting) DOM.userGreeting.textContent = `Hi, ${AppState.currentUser.name.split(' ')[0]}`;
    if (DOM.userNameLabel) DOM.userNameLabel.textContent = 'My Account ▾';
    if (DOM.dropdownUserName) DOM.dropdownUserName.textContent = AppState.currentUser.name;
    if (DOM.dropdownUserEmail) DOM.dropdownUserEmail.textContent = AppState.currentUser.email;
    if (DOM.userAvatar) DOM.userAvatar.textContent = AppState.currentUser.name.charAt(0).toUpperCase();
  } else {
    if (DOM.userGreeting) DOM.userGreeting.textContent = 'Sign in / Register';
    if (DOM.userNameLabel) DOM.userNameLabel.textContent = 'Orders & Account';
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ==========================================================================
// 11. WISHLIST MANAGEMENT
// ==========================================================================
function toggleWishlist(productId, btnElement = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const index = AppState.wishlist.findIndex(w => w.id === productId);

  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    if (btnElement) {
      btnElement.classList.remove('active');
      const icon = btnElement.querySelector('.heart-icon');
      if (icon) icon.setAttribute('fill', 'none');
    }
    showToast(`Removed from Wishlist: ${product.title.substring(0, 25)}...`, 'info');
  } else {
    AppState.wishlist.push(product);
    if (btnElement) {
      btnElement.classList.add('active');
      const icon = btnElement.querySelector('.heart-icon');
      if (icon) icon.setAttribute('fill', '#e02b2b');
    }
    showToast(`Saved to Wishlist: ${product.title.substring(0, 25)}... ❤️`, 'success');
  }

  AppState.saveWishlist();
  if (currentQvProduct && currentQvProduct.id === productId && DOM.qvWishlistBtn) {
    DOM.qvWishlistBtn.classList.toggle('active', index === -1);
  }
}

// ==========================================================================
// 12. LUCKY ROULETTE / SPIN & WIN WHEEL
// ==========================================================================
let isSpinning = false;

function spinLuckyWheel() {
  if (isSpinning) return;
  isSpinning = true;

  if (DOM.wheelResultBox) DOM.wheelResultBox.style.display = 'none';

  // Random spin degrees: at least 5 full rotations (1800deg) + random angle
  const randomRot = 1800 + Math.floor(Math.random() * 360);
  if (DOM.wheelDisk) {
    DOM.wheelDisk.style.transform = `rotate(${randomRot}deg)`;
  }

  setTimeout(() => {
    isSpinning = false;
    if (DOM.wheelResultBox) {
      DOM.wheelResultBox.style.display = 'block';
      if (DOM.wonPrizeName) DOM.wonPrizeName.textContent = '$100 COUPON BUNDLE';
      if (DOM.wonPrizeCode) DOM.wonPrizeCode.textContent = 'TEMU90';
    }
    showToast('🎉 You won $100 OFF Coupon Bundle!', 'success');
  }, 4100);
}

// ==========================================================================
// 13. SEARCH SUGGESTIONS & RECENT SEARCHES
// ==========================================================================
function handleSearchInput(e) {
  const query = e.target.value;
  if (DOM.searchClearBtn) {
    DOM.searchClearBtn.style.display = query ? 'block' : 'none';
  }

  // Live filter debounce
  clearTimeout(handleSearchInput.debounceTimer);
  handleSearchInput.debounceTimer = setTimeout(() => {
    AppState.searchQuery = query;
    AppState.displayedProductsCount = 12;

    if (query.trim()) {
      if (DOM.activeFilterBar) {
        DOM.activeFilterBar.style.display = 'flex';
        DOM.filterQueryText.textContent = `"${query}"`;
      }
    } else {
      if (DOM.activeFilterBar) DOM.activeFilterBar.style.display = 'none';
    }

    renderProductsCatalog();
  }, 250);
}

function executeSearch(query) {
  if (!query) return;
  saveRecentSearch(query);
  AppState.searchQuery = query;
  if (DOM.searchInput) DOM.searchInput.value = query;
  if (DOM.searchClearBtn) DOM.searchClearBtn.style.display = 'block';
  if (DOM.searchDropdown) DOM.searchDropdown.classList.remove('active');
  if (DOM.activeFilterBar) {
    DOM.activeFilterBar.style.display = 'flex';
    DOM.filterQueryText.textContent = `"${query}"`;
  }
  AppState.displayedProductsCount = 12;
  renderProductsCatalog();

  // Scroll smoothly to catalog
  const catalogEl = document.getElementById('catalogSection');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
}

function saveRecentSearch(query) {
  try {
    let recent = JSON.parse(localStorage.getItem('temu_recent_searches') || '[]');
    recent = recent.filter(item => item.toLowerCase() !== query.toLowerCase());
    recent.unshift(query);
    if (recent.length > 5) recent.pop();
    localStorage.setItem('temu_recent_searches', JSON.stringify(recent));
    renderRecentSearches();
  } catch (e) {}
}

function renderRecentSearches() {
  if (!DOM.recentList || !DOM.recentSearchesSection) return;
  try {
    const recent = JSON.parse(localStorage.getItem('temu_recent_searches') || '[]');
    if (recent.length === 0) {
      DOM.recentSearchesSection.style.display = 'none';
      return;
    }
    DOM.recentSearchesSection.style.display = 'block';
    DOM.recentList.innerHTML = recent.map(item => `
      <li class="recent-item" data-query="${escapeHtml(item)}">
        <span>🕒 ${escapeHtml(item)}</span>
      </li>
    `).join('');

    DOM.recentList.querySelectorAll('.recent-item').forEach(el => {
      el.addEventListener('click', () => {
        executeSearch(el.dataset.query);
      });
    });
  } catch (e) {}
}

// ==========================================================================
// 14. ANIMATIONS & MICRO-INTERACTIONS
// ==========================================================================
function triggerFlyToCartAnimation(buttonElement) {
  const cartBtn = DOM.cartDrawerTrigger;
  if (!buttonElement || !cartBtn) return;

  const btnRect = buttonElement.getBoundingClientRect();
  const cartRect = cartBtn.getBoundingClientRect();

  const dot = document.createElement('div');
  dot.className = 'flying-cart-dot';
  dot.textContent = '1';
  dot.style.top = `${btnRect.top + btnRect.height / 2 - 14}px`;
  dot.style.left = `${btnRect.left + btnRect.width / 2 - 14}px`;
  document.body.appendChild(dot);

  // Force reflow
  dot.getBoundingClientRect();

  // Fly to target
  dot.style.top = `${cartRect.top + cartRect.height / 2 - 14}px`;
  dot.style.left = `${cartRect.left + cartRect.width / 2 - 14}px`;
  dot.style.transform = 'scale(0.3)';
  dot.style.opacity = '0.5';

  setTimeout(() => {
    dot.remove();
    // Bump badge
    if (DOM.cartCount) {
      DOM.cartCount.classList.remove('bump');
      void DOM.cartCount.offsetWidth; // Trigger reflow
      DOM.cartCount.classList.add('bump');
    }
  }, 650);
}

function updateHeaderCounters() {
  const totalCartQty = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistQty = AppState.wishlist.length;

  if (DOM.cartCount) DOM.cartCount.textContent = totalCartQty;
  if (DOM.mobCartCount) DOM.mobCartCount.textContent = totalCartQty;
  if (DOM.wishlistCount) DOM.wishlistCount.textContent = totalWishlistQty;
  if (DOM.mobWishlistCount) DOM.mobWishlistCount.textContent = totalWishlistQty;
}

// Toast notification helper
function showToast(message, type = 'info') {
  if (!DOM.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✔';
  if (type === 'error') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Modal management
function openModal(modalBackdrop) {
  if (!modalBackdrop) return;
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalBackdrop) {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function openCartDrawer() {
  if (DOM.cartBackdrop) {
    DOM.cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  if (DOM.cartBackdrop) {
    DOM.cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==========================================================================
// 15. GLOBAL EVENT LISTENERS BINDINGS
// ==========================================================================
function setupEventListeners() {

  // --- Sticky Header Elevation & Back to Top ---
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (DOM.mainHeader) {
      DOM.mainHeader.classList.toggle('scrolled', scrollY > 20);
    }
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.classList.toggle('visible', scrollY > 350);
    }
  });

  if (DOM.backToTopBtn) {
    DOM.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Search Bar Events ---
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', handleSearchInput);
    DOM.searchInput.addEventListener('focus', () => {
      if (DOM.searchDropdown) DOM.searchDropdown.classList.add('active');
    });
  }

  // Hide dropdown on outside click
  document.addEventListener('click', (e) => {
    if (DOM.searchDropdown && !e.target.closest('#searchContainer')) {
      DOM.searchDropdown.classList.remove('active');
    }
    if (DOM.userDropdownMenu && !e.target.closest('#userMenuWrapper')) {
      DOM.userDropdownMenu.classList.remove('active');
    }
  });

  if (DOM.searchClearBtn) {
    DOM.searchClearBtn.addEventListener('click', () => {
      AppState.searchQuery = '';
      DOM.searchInput.value = '';
      DOM.searchClearBtn.style.display = 'none';
      if (DOM.activeFilterBar) DOM.activeFilterBar.style.display = 'none';
      AppState.displayedProductsCount = 12;
      renderProductsCatalog();
    });
  }

  // Trending tags in search dropdown
  document.querySelectorAll('.trend-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      executeSearch(tag.textContent.trim());
    });
  });

  if (DOM.clearRecentBtn) {
    DOM.clearRecentBtn.addEventListener('click', () => {
      localStorage.removeItem('temu_recent_searches');
      renderRecentSearches();
    });
  }

  if (DOM.clearFilterBtn) {
    DOM.clearFilterBtn.addEventListener('click', resetAllFilters);
  }

  // --- Category Strip Pills ---
  DOM.categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.activeCategory = pill.dataset.category;
      AppState.displayedProductsCount = 12;
      renderProductsCatalog();
    });
  });

  // --- Catalog Tabs (Recommend, Top Sellers, Under $10, etc.) ---
  DOM.catalogTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.catalogTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.activeCatalogFilter = tab.dataset.filter;
      AppState.displayedProductsCount = 12;
      renderProductsCatalog();
    });
  });

  // --- Catalog Sorting ---
  if (DOM.catalogSort) {
    DOM.catalogSort.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderProductsCatalog();
    });
  }

  // --- Load More Products ---
  if (DOM.loadMoreBtn) {
    DOM.loadMoreBtn.addEventListener('click', () => {
      const spinner = DOM.loadMoreBtn.querySelector('.spinner');
      const text = DOM.loadMoreBtn.querySelector('.btn-text');
      if (spinner && text) {
        spinner.style.display = 'inline-block';
        text.style.display = 'none';
      }

      setTimeout(() => {
        AppState.displayedProductsCount += 6;
        renderProductsCatalog(true);
        if (spinner && text) {
          spinner.style.display = 'none';
          text.style.display = 'inline';
        }
      }, 500);
    });
  }

  // --- Cart Drawer Triggers ---
  if (DOM.cartDrawerTrigger) DOM.cartDrawerTrigger.addEventListener('click', openCartDrawer);
  if (DOM.cartCloseBtn) DOM.cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (DOM.cartBackdrop) {
    DOM.cartBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.cartBackdrop) closeCartDrawer();
    });
  }

  const startShoppingBtn = document.getElementById('startShoppingBtn');
  if (startShoppingBtn) startShoppingBtn.addEventListener('click', closeCartDrawer);

  if (DOM.applyCouponBtn) {
    DOM.applyCouponBtn.addEventListener('click', () => {
      if (DOM.couponInput) applyCouponCode(DOM.couponInput.value);
    });
  }

  if (DOM.checkoutBtn) DOM.checkoutBtn.addEventListener('click', handleCheckout);

  // --- Auth Modal Triggers ---
  if (DOM.authModalTrigger) {
    DOM.authModalTrigger.addEventListener('click', () => {
      if (AppState.currentUser) {
        if (DOM.userDropdownMenu) DOM.userDropdownMenu.classList.toggle('active');
      } else {
        openModal(DOM.authModalBackdrop);
      }
    });
  }

  if (DOM.authModalClose) DOM.authModalClose.addEventListener('click', () => closeModal(DOM.authModalBackdrop));
  if (DOM.authModalBackdrop) {
    DOM.authModalBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.authModalBackdrop) closeModal(DOM.authModalBackdrop);
    });
  }

  if (DOM.tabSignInBtn) DOM.tabSignInBtn.addEventListener('click', () => switchAuthTab('signin'));
  if (DOM.tabRegisterBtn) DOM.tabRegisterBtn.addEventListener('click', () => switchAuthTab('register'));

  if (DOM.signInForm) DOM.signInForm.addEventListener('submit', handleSignIn);
  if (DOM.registerForm) DOM.registerForm.addEventListener('submit', handleRegister);
  if (DOM.logoutBtn) DOM.logoutBtn.addEventListener('click', handleLogout);

  // Auto-fill demo credentials
  if (DOM.fillDemoCredentials) {
    DOM.fillDemoCredentials.addEventListener('click', () => {
      switchAuthTab('signin');
      const emailInput = document.getElementById('loginEmail');
      const passInput = document.getElementById('loginPassword');
      if (emailInput && passInput) {
        emailInput.value = 'demo@temu.com';
        passInput.value = 'Temu123!';
        showToast('Demo credentials filled! Click Sign In', 'info');
      }
    });
  }

  // Password visibility toggle
  document.querySelectorAll('.toggle-password-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (input) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        btn.textContent = isPassword ? '🙈' : '👁️';
      }
    });
  });

  // Password strength visual indicator
  const regPassword = document.getElementById('regPassword');
  if (regPassword) {
    regPassword.addEventListener('input', (e) => {
      const val = e.target.value;
      const indicator = document.querySelector('.strength-indicator');
      if (!indicator) return;

      indicator.className = 'strength-indicator';
      if (val.length === 0) {
        indicator.style.width = '0%';
      } else if (val.length < 6) {
        indicator.classList.add('strength-weak');
      } else if (val.length < 10) {
        indicator.classList.add('strength-medium');
      } else {
        indicator.classList.add('strength-strong');
      }
    });
  }

  // Social login mock buttons
  const socialGoogleBtn = document.getElementById('socialGoogleBtn');
  const socialAppleBtn = document.getElementById('socialAppleBtn');
  if (socialGoogleBtn) {
    socialGoogleBtn.addEventListener('click', () => {
      AppState.saveUser({ name: 'Google Shopper', email: 'google.user@example.com' });
      closeModal(DOM.authModalBackdrop);
      showToast('Signed in via Google! Welcome!', 'success');
    });
  }
  if (socialAppleBtn) {
    socialAppleBtn.addEventListener('click', () => {
      AppState.saveUser({ name: 'Apple Shopper', email: 'apple.user@example.com' });
      closeModal(DOM.authModalBackdrop);
      showToast('Signed in via Apple! Welcome!', 'success');
    });
  }

  // --- Quick View Modal Events ---
  if (DOM.quickViewClose) DOM.quickViewClose.addEventListener('click', () => closeModal(DOM.quickViewBackdrop));
  if (DOM.quickViewBackdrop) {
    DOM.quickViewBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.quickViewBackdrop) closeModal(DOM.quickViewBackdrop);
    });
  }

  // Color options in Quick View
  if (DOM.qvColorOptions) {
    DOM.qvColorOptions.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.qvColorOptions.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentQvSelectedColor = btn.dataset.color;
        if (DOM.selectedColorName) DOM.selectedColorName.textContent = currentQvSelectedColor;
      });
    });
  }

  // Quantity stepper in Quick View
  if (DOM.qvQtyMinus && DOM.qvQtyInput) {
    DOM.qvQtyMinus.addEventListener('click', () => {
      let val = parseInt(DOM.qvQtyInput.value, 10) || 1;
      if (val > 1) DOM.qvQtyInput.value = val - 1;
    });
  }
  if (DOM.qvQtyPlus && DOM.qvQtyInput) {
    DOM.qvQtyPlus.addEventListener('click', () => {
      let val = parseInt(DOM.qvQtyInput.value, 10) || 1;
      if (val < 99) DOM.qvQtyInput.value = val + 1;
    });
  }

  if (DOM.qvAddToCartBtn) {
    DOM.qvAddToCartBtn.addEventListener('click', () => {
      if (!currentQvProduct) return;
      const qty = parseInt(DOM.qvQtyInput.value, 10) || 1;
      addToCart(currentQvProduct, qty, currentQvSelectedColor);
      triggerFlyToCartAnimation(DOM.qvAddToCartBtn);
      closeModal(DOM.quickViewBackdrop);
    });
  }

  if (DOM.qvWishlistBtn) {
    DOM.qvWishlistBtn.addEventListener('click', () => {
      if (currentQvProduct) toggleWishlist(currentQvProduct.id);
    });
  }

  // --- Spin & Win Lucky Wheel Events ---
  if (DOM.spinWheelBtn) DOM.spinWheelBtn.addEventListener('click', () => openModal(DOM.luckyWheelBackdrop));
  if (DOM.heroSpinTrigger) DOM.heroSpinTrigger.addEventListener('click', () => openModal(DOM.luckyWheelBackdrop));
  if (DOM.wheelModalClose) DOM.wheelModalClose.addEventListener('click', () => closeModal(DOM.luckyWheelBackdrop));
  if (DOM.luckyWheelBackdrop) {
    DOM.luckyWheelBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.luckyWheelBackdrop) closeModal(DOM.luckyWheelBackdrop);
    });
  }

  if (DOM.spinCenterBtn) DOM.spinCenterBtn.addEventListener('click', spinLuckyWheel);
  if (DOM.claimPrizeBtn) {
    DOM.claimPrizeBtn.addEventListener('click', () => {
      applyCouponCode('TEMU90');
      closeModal(DOM.luckyWheelBackdrop);
      openCartDrawer();
    });
  }

  // --- Hero CTAs and Navigation shortcuts ---
  document.querySelectorAll('.scroll-to-deals').forEach(btn => {
    btn.addEventListener('click', () => {
      const dealsSection = document.getElementById('flashDealsSection');
      if (dealsSection) dealsSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const filterTechBtn = document.querySelector('.filter-tech-btn');
  if (filterTechBtn) {
    filterTechBtn.addEventListener('click', () => {
      const techPill = document.querySelector('.cat-pill[data-category="electronics"]');
      if (techPill) techPill.click();
      const catalogEl = document.getElementById('catalogSection');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const filterUnder10Btn = document.querySelector('.filter-under10-btn');
  if (filterUnder10Btn) {
    filterUnder10Btn.addEventListener('click', () => {
      const pill = document.querySelector('.cat-pill[data-category="under10"]');
      if (pill) pill.click();
      const catalogEl = document.getElementById('catalogSection');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Order Success Modal ---
  if (DOM.continueShoppingAfterOrderBtn) {
    DOM.continueShoppingAfterOrderBtn.addEventListener('click', () => {
      closeModal(DOM.orderSuccessBackdrop);
    });
  }

  // --- App Download Modal ---
  if (DOM.openAppModalBtn) DOM.openAppModalBtn.addEventListener('click', () => openModal(DOM.appModalBackdrop));
  if (DOM.appModalClose) DOM.appModalClose.addEventListener('click', () => closeModal(DOM.appModalBackdrop));
  if (DOM.closeAppModalBtn) DOM.closeAppModalBtn.addEventListener('click', () => closeModal(DOM.appModalBackdrop));
  if (DOM.appModalBackdrop) {
    DOM.appModalBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.appModalBackdrop) closeModal(DOM.appModalBackdrop);
    });
  }

  // --- Mobile Bottom Navigation ---
  const mobNavHome = document.getElementById('mobNavHome');
  const mobNavCategories = document.getElementById('mobNavCategories');
  const mobNavSpin = document.getElementById('mobNavSpin');
  const mobNavWishlist = document.getElementById('mobNavWishlist');
  const mobNavCart = document.getElementById('mobNavCart');
  const mobNavUser = document.getElementById('mobNavUser');

  if (mobNavHome) {
    mobNavHome.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (mobNavCategories) {
    mobNavCategories.addEventListener('click', () => {
      const categoryNav = document.getElementById('categoryNav');
      if (categoryNav) categoryNav.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (mobNavSpin) {
    mobNavSpin.addEventListener('click', () => openModal(DOM.luckyWheelBackdrop));
  }
  if (mobNavWishlist) {
    mobNavWishlist.addEventListener('click', () => {
      showToast(`Wishlist contains ${AppState.wishlist.length} saved items`, 'info');
    });
  }
  if (mobNavCart) {
    mobNavCart.addEventListener('click', openCartDrawer);
  }
  if (mobNavUser) {
    mobNavUser.addEventListener('click', () => {
      if (AppState.currentUser) {
        showToast(`Signed in as ${AppState.currentUser.name}`, 'info');
      } else {
        openModal(DOM.authModalBackdrop);
      }
    });
  }

  // Keyboard accessibility: ESC closes active modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(DOM.authModalBackdrop);
      closeModal(DOM.quickViewBackdrop);
      closeModal(DOM.luckyWheelBackdrop);
      closeModal(DOM.orderSuccessBackdrop);
      closeModal(DOM.appModalBackdrop);
      closeCartDrawer();
      if (DOM.searchDropdown) DOM.searchDropdown.classList.remove('active');
    }
  });
}
