// ============================================
// SERRA VANO MILANO - INTERACTIVE FUNCTIONALITY
// ============================================

// Products data
const productsData = [
  {
    "row_number": 2,
    "title": "Fused-Tine Dinner Fork",
    "price": "$165.00",
    "tag": "FLAT TIP",
    "category": "dining",
    "description": "Stainless-steel dinner fork with a straight handle and four evenly spaced tines fused into a single solid, flat blade-like tip. The fused tip forms a continuous planar surface with a uniform edge and no tine separation.",
    "features": [
      "18/10 stainless-steel construction",
      "Four tine channels fused into one solid flat tip",
      "Straight, linear handle profile",
      "Mirror-polished finish with softened edges"
    ],
    "media": {
      "image": "images/product-2-image.png",
      "video": "images/product-2-video.mp4"
    }
  },
  {
    "row_number": 3,
    "title": "Aperture Door Refrigerator",
    "price": "$4,250.00",
    "tag": "REFRIGERATOR",
    "category": "kitchen",
    "description": "Standard-format refrigerator in white-painted steel with a top-mounted freezer and smooth metal doors. The main door is precision-cut with a centered circular aperture that exposes the interior cavity.",
    "features": [
      "Top-freezer, bottom fresh-food configuration",
      "White-painted steel exterior with smooth planar doors",
      "Centered circular cutout through main door panel",
      "Interior compartment visible through door aperture"
    ],
    "media": {
      "image": "images/product-3-image.png",
      "video": "images/product-3-video.mp4"
    }
  },
  {
    "row_number": 4,
    "title": "Sealed-Top Two-Slot Toaster",
    "price": "$420.00",
    "tag": "STAINLESS STEEL",
    "category": "kitchen",
    "description": "Two-slot stainless-steel toaster with a full-width solid metal top plate that seals over both slot apertures, leaving a continuous surface. Standard side lever and slide-out crumb tray are retained within the body's rectilinear geometry.",
    "features": [
      "Solid metal top plate fully covers both slot openings",
      "Brushed stainless-steel housing with straight-edge profile",
      "Mechanical side lever with fixed detent positions",
      "Removable pull-out crumb tray integrated at base"
    ],
    "media": {
      "image": "images/product-4-image.png",
      "video": "images/product-4-video.mp4"
    }
  },
  {
    "row_number": 5,
    "title": "Perforated Base Stainless Pot",
    "price": "$220.00",
    "tag": "COOKWARE",
    "category": "kitchen",
    "description": "Standard stainless-steel pot formed with a flat base, straight cylindrical sides, and two loop handles. The bottom panel is punched with large round drain holes distributed across the base plane.",
    "features": [
      "Stainless-steel body with brushed finish",
      "Flat base with multiple large round punched drain holes",
      "Straight-sided cylindrical geometry",
      "Two symmetric loop handles fixed at the rim"
    ],
    "media": {
      "image": "images/product-5-image.png",
      "video": "images/product-5-video.mp4"
    }
  },
  {
    "row_number": 6,
    "title": "Domed Surface Chopping Board",
    "price": "$240.00",
    "tag": "CUTTING BOARD",
    "category": "kitchen",
    "description": "Rectangular solid wood board with radiused corners and a continuous convex cutting face molded across the full surface. The domed geometry creates a single apex and consistent slope toward the perimeter while maintaining standard board thickness at the edge.",
    "features": [
      "Solid wood construction with end-grain oriented cutting face",
      "Full-surface convex dome with smooth continuous radius",
      "Radiused corners with rectangular planform",
      "Standard thickness profile with eased perimeter edge"
    ],
    "media": {
      "image": "images/product-6-image.png",
      "video": "images/product-6-video.mp4"
    }
  },
  {
    "row_number": 7,
    "title": "Box Grater, Smooth-Face Stainless Steel",
    "price": "$120.00",
    "tag": "KITCHEN TOOL",
    "category": "tools",
    "description": "Rectangular box grater formed from folded stainless-steel sheet with a fixed top handle and four uninterrupted smooth faces. With no perforations or teeth, the surfaces present continuous planes and do not cut or abrade material during contact.",
    "features": [
      "Stainless-steel sheet construction with folded box geometry",
      "Four smooth grating faces with zero holes or teeth",
      "Integrated top handle with closed-loop profile",
      "Standard rectangular footprint with open base"
    ],
    "media": {
      "image": "images/product-7-image.png",
      "video": "images/product-7-video.mp4"
    }
  },
  {
    "row_number": 8,
    "title": "Domed Lattice Trivet",
    "price": "$145.00",
    "tag": "METAL TRIVET",
    "category": "kitchen",
    "description": "Square metal trivet with a lattice-cut top surface formed into a continuous convex dome. Four short rubber feet elevate the frame and provide stable contact on flat surfaces.",
    "features": [
      "Square planform with pronounced convex dome profile",
      "Lattice top surface for heat dissipation",
      "All-metal body with smooth, continuous curvature",
      "Four short rubber feet for grip and clearance"
    ],
    "media": {
      "image": "images/product-8-image.png",
      "video": "images/product-8-video.mp4"
    }
  },
  {
    "row_number": 9,
    "title": "Sealed Rim Wine Glass",
    "price": "$220.00",
    "tag": "CLOSED TOP",
    "category": "dining",
    "description": "Clear soda-lime glass wine glass with a standard bowl, slender stem, and circular base, finished with a flat glass disc fused to the rim to form a closed top. The sealed rim creates a continuous planar surface above the bowl while maintaining a conventional stemmed geometry below.",
    "features": [
      "Clear glass construction with polished surfaces",
      "Flat glass disc fused flush to the rim for a closed opening",
      "Standard bowl profile with slender stem transition",
      "Round, flat base aligned to the stem axis"
    ],
    "media": {
      "image": "images/product-9-image.png",
      "video": "images/product-9-video.mp4"
    }
  },
  {
    "row_number": 10,
    "title": "Fused-Wire Balloon Whisk",
    "price": "$140.00",
    "tag": "STAINLESS STEEL",
    "category": "tools",
    "description": "Standard stainless-steel handle with a balloon whisk head whose wire loops are tightly fused into a single rod-like bundle. The consolidated head forms a rigid, cylindrical mass with minimal flex and reduced open voids.",
    "features": [
      "All whisk loops fused into one solid rod-like bundle",
      "Rigid head geometry with low elastic deflection",
      "Stainless-steel construction throughout",
      "Conventional straight handle profile"
    ],
    "media": {
      "image": "images/product-10-image.png",
      "video": "images/product-10-video.mp4"
    }
  },
  {
    "row_number": 11,
    "title": "Side-Display Knife Block, Five-Slot",
    "price": "$320.00",
    "tag": "KNIFE BLOCK",
    "category": "tools",
    "description": "Solid wood knife block with five internal slots oriented at 90 degrees, presenting blades laterally with handles seated inside the body. Blade entry channels are machined to fixed widths and depths to maintain alignment while leaving only the blade faces visible.",
    "features": [
      "Holds five knives with blades protruding sideways",
      "Rotated slot geometry: 90° from conventional vertical orientation",
      "Machined internal channels with fixed depth stops for consistent seating",
      "Solid wood body with concealed handle cavities"
    ],
    "media": {
      "image": "images/product-11-image.png",
      "video": "images/product-11-video.mp4"
    }
  },
  {
    "row_number": 12,
    "title": "Wickless Wax Pillar Candle",
    "price": "$68.00",
    "tag": "WAX PILLAR",
    "category": "dining",
    "description": "Smooth-cast paraffin wax pillar with a flat top and uninterrupted surface, manufactured without a wick channel or opening. Cylindrical geometry is uniform with clean edges and a continuous outer skin.",
    "features": [
      "No wick opening; seamless top surface",
      "Flat top with crisp perimeter edge",
      "Smooth, uninterrupted exterior finish",
      "Self-supporting solid wax construction"
    ],
    "media": {
      "image": "images/product-12-image.png",
      "video": "images/product-12-video.mp4"
    }
  },
  {
    "row_number": 13,
    "title": "Solid-Rod Spiral Corkscrew",
    "price": "$185.00",
    "tag": "CORKSCREW",
    "category": "tools",
    "description": "Traditional metal corkscrew with a folding lever handle and a smooth, solid-rod spiral terminating in a rounded ball tip. The spiral has no helical threading, presenting a continuous circular profile along its length.",
    "features": [
      "Metal construction with folding lever handle",
      "Smooth solid-rod spiral with no helical threading",
      "Rounded ball tip at spiral end",
      "Lever pivots to a closed, compact profile"
    ],
    "media": {
      "image": "images/product-13-image.png",
      "video": "images/product-13-video.mp4"
    }
  },
  {
    "row_number": 14,
    "title": "Stone Mortar & Pestle, Convex Bowl",
    "price": "$220.00",
    "tag": "MORTAR SET",
    "category": "tools",
    "description": "A standard stone mortar and pestle set with typical proportions and a uniform matte finish. The mortar's interior grinding surface is a smooth convex dome with no concave cavity.",
    "features": [
      "Natural stone construction with matte, non-coated finish",
      "Mortar interior formed as a continuous convex dome",
      "Standard mortar wall thickness and exterior profile",
      "Pestle sized to match standard set proportions"
    ],
    "media": {
      "image": "images/product-14-image.png",
      "video": "images/product-14-video.mp4"
    }
  },
  {
    "row_number": 15,
    "title": "Roller-Head Vegetable Peeler",
    "price": "$145.00",
    "tag": "KITCHEN TOOL",
    "category": "tools",
    "description": "A metal-and-polymer vegetable peeler with a standard handle profile and a solid head assembly that replaces the blade slot with a seated smooth roller. The roller rotates on a concealed axle within the head, presenting a continuous rounded contact surface.",
    "features": [
      "Solid head construction with integrated smooth roller in place of a cutting blade",
      "Metal core with molded polymer grip surfaces",
      "Roller rotates freely on a concealed internal axle",
      "Standard peeler handle and head geometry for controlled hand positioning"
    ],
    "media": {
      "image": "images/product-15-image.png",
      "video": "images/product-15-video.mp4"
    }
  }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Animate on scroll
function initAOS() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

// Create product card HTML
function createProductCard(product) {
  // Always use image for product cards (no videos on listing pages)
  const mediaHTML = `<img src="${product.media.image}" alt="${product.title}" loading="lazy">`;

  return `
    <a href="product-detail.html?id=${product.row_number}" class="product-card" data-category="${product.category || 'all'}">
      <div class="product-card-image">
        <span class="product-card-tag">${product.tag}</span>
        ${mediaHTML}
      </div>
      <div class="product-card-content">
        <h3 class="product-card-title">${product.title}</h3>
        <p class="product-card-price">${product.price}</p>
      </div>
    </a>
  `;
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // Navbar scroll effect
  const nav = document.getElementById('nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
      } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
      }

      lastScroll = currentScroll;
    });
  }
}

// ============================================
// HOMEPAGE
// ============================================

function initHomepage() {
  const featuredGrid = document.getElementById('featuredGrid');

  if (featuredGrid) {
    // Show specific featured products: Chopping Board (6), Whisk (10), Knife Block (11)
    const featuredIds = [6, 10, 11];
    const featuredProducts = productsData.filter(p => featuredIds.includes(p.row_number));
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
  }
}

// ============================================
// PRODUCTS PAGE
// ============================================

function initProductsPage() {
  const productsGrid = document.getElementById('productsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (productsGrid) {
    // Display all products initially
    renderProducts('all');

    // Filter functionality
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter products
        renderProducts(filter);
      });
    });
  }

  function renderProducts(filter) {
    let filteredProducts = productsData;

    if (filter !== 'all') {
      filteredProducts = productsData.filter(p => p.category === filter);
    }

    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
  }
}

// ============================================
// PRODUCT DETAIL PAGE
// ============================================

function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  if (!productId) return;

  const product = productsData.find(p => p.row_number === productId);

  if (!product) {
    window.location.href = 'products.html';
    return;
  }

  // Update page title
  document.title = `${product.title} | Serra Vano Milano`;

  // Populate product details
  document.getElementById('productTag').textContent = product.tag;
  document.getElementById('productTitle').textContent = product.title;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productDescription').textContent = product.description;

  // Features
  const featuresList = document.getElementById('productFeatures');
  featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

  // Media gallery
  const mediaMain = document.getElementById('mediaMain');
  const mediaThumbnails = document.getElementById('mediaThumbnails');

  // Add image
  const imgThumb = document.createElement('div');
  imgThumb.className = 'media-thumb active';
  imgThumb.innerHTML = `<img src="${product.media.image}" alt="${product.title}">`;
  imgThumb.addEventListener('click', () => {
    setMainMedia('image', product.media.image, product.title);
    setActiveThumb(imgThumb);
  });
  mediaThumbnails.appendChild(imgThumb);

  // Add video/GIF if exists
  if (product.media.video) {
    const vidThumb = document.createElement('div');
    vidThumb.className = 'media-thumb';

    // Check if it's a GIF or video
    const isGif = product.media.video.endsWith('.gif');
    if (isGif) {
      vidThumb.innerHTML = `<img src="${product.media.video}" alt="${product.title}">`;
    } else {
      vidThumb.innerHTML = `<video muted loop><source src="${product.media.video}" type="video/mp4"></video>`;
    }

    vidThumb.addEventListener('click', () => {
      setMainMedia(product.media.video, product.title);
      setActiveThumb(vidThumb);
    });
    mediaThumbnails.appendChild(vidThumb);
  }

  // Set initial main media
  setMainMedia(product.media.image, product.title);

  function setMainMedia(src, alt) {
    // Auto-detect if it's a video or image/GIF based on extension
    if (src.endsWith('.mp4')) {
      mediaMain.innerHTML = `<video autoplay muted loop playsinline><source src="${src}" type="video/mp4"></video>`;
    } else {
      mediaMain.innerHTML = `<img src="${src}" alt="${alt}">`;
    }
  }

  function setActiveThumb(activeThumb) {
    document.querySelectorAll('.media-thumb').forEach(t => t.classList.remove('active'));
    activeThumb.classList.add('active');
  }

  // Related products
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const relatedProducts = productsData
      .filter(p => p.row_number !== productId && p.category === product.category)
      .slice(0, 3);

    relatedGrid.innerHTML = relatedProducts.map(p => createProductCard(p)).join('');
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  initNavigation();

  // Initialize animations
  initAOS();

  // Initialize page-specific functionality
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (currentPage === 'index.html' || currentPage === '') {
    initHomepage();
  } else if (currentPage === 'products.html') {
    initProductsPage();
  } else if (currentPage === 'product-detail.html') {
    initProductDetailPage();
  }
});
