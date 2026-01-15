document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1) Contact form ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let box = document.getElementById("msgBox");
      if (!box) {
        box = document.createElement("div");
        box.id = "msgBox";
        box.style.marginTop = "12px";
        box.style.padding = "10px 14px";
        box.style.borderRadius = "8px";
        box.style.background = "#E6F7E9";
        box.style.color = "#14532d";
        box.style.border = "1px solid #C6F6D5";
      }

      box.innerText = "Mesajınız başarıyla gönderildi!";
      contactForm.after(box);
      setTimeout(() => box.remove(), 3500);
      contactForm.reset();
    });
  }

  /* ---------- 2) Mobil nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

    /* ---------- 2.1) Ürünler dropdown ---------- */
  const productsNav = document.getElementById("productsNav");
  const productsNavBtn = document.getElementById("productsNavBtn");

  function closeProductsDropdown() {
    if (!productsNav || !productsNavBtn) return;
    productsNav.classList.remove("open");
    productsNavBtn.setAttribute("aria-expanded", "false");
  }

  function toggleProductsDropdown() {
    if (!productsNav || !productsNavBtn) return;
    const isOpen = productsNav.classList.toggle("open");
    productsNavBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  if (productsNav && productsNavBtn) {
    productsNavBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleProductsDropdown();
    });

    // dışarı tıklayınca kapat
    document.addEventListener("click", (e) => {
      if (!productsNav.classList.contains("open")) return;
      if (!productsNav.contains(e.target)) closeProductsDropdown();
    }, true);

    // ESC ile kapat
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeProductsDropdown();
    });
  }

  // Modallar (scroll kilidi için referans)
  const cartModal = document.getElementById("cartModal");
  const productModal = document.getElementById("productModal");

  function syncBodyScroll() {
    const navOpen = mainNav && mainNav.classList.contains("open");
    const cartOpen = cartModal && cartModal.classList.contains("open");
    const productOpen = productModal && productModal.classList.contains("open");
    document.body.style.overflow = (navOpen || cartOpen || productOpen) ? "hidden" : "";
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      syncBodyScroll();
    });

    document.addEventListener("click", function (e) {
      if (!mainNav.classList.contains("open")) return;
      if (e.target === navToggle) return;
      if (!mainNav.contains(e.target)) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        syncBodyScroll();
      }
    }, true);
  }

  // =========================
  // ÜRÜN VERİLERİ (TL)
  // =========================
  const FAMILY_SET_DESC = "Aile seti: yumuşak pamuk dokusu, yüksek emicilik ve konfor. Çiftlere/ailenize uygun kombin renklerle şık görünüm sunar.";

  const PRODUCTS = [
    // HAVLU (510 / 1020 TL sabit)
    { id:"havlu-arina", category:"Havlu", name:"ARINA", material:"%100 Pamuk",
      desc:"Yüksek emicilik ve yumuşak dokusuyla günlük kullanım için idealdir.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/arina.jpg"
    },
    { id:"havlu-armina", category:"Havlu", name:"ARMINA", material:"%100 Pamuk",
      desc:"Şık dokuma deseni ve yumuşaklığıyla banyonuza zarafet katar.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/armina.jpg"
    },
    { id:"havlu-delfin", category:"Havlu", name:"DELFIN", material:"%100 Pamuk",
      desc:"Dayanıklı yapısı ve hızlı kuruyan dokusuyla uzun ömürlü kullanım sunar.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/delfin.jpg"
    },
    { id:"havlu-elena", category:"Havlu", name:"ELENA", material:"%100 Pamuk",
      desc:"Yumuşak dokusu ve premium görünümüyle misafir banyoları için de uygundur.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/elena.jpg"
    },
    { id:"havlu-elenora", category:"Havlu", name:"ELENORA", material:"%100 Pamuk",
      desc:"Konforlu, şık ve yüksek emiciliğe sahip kaliteli pamuk havlu seti.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/elenora.jpg"
    },
    { id:"havlu-ella", category:"Havlu", name:"ELLA", material:"%100 Pamuk",
      desc:"Günlük kullanımda maksimum konfor: yumuşak, emici ve dayanıklı.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/ella.jpg"
    },
    { id:"havlu-eslina", category:"Havlu", name:"ESLINA", material:"%100 Pamuk",
      desc:"Cilt dostu dokusu ile hassas kullanım için de uygundur.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/eslina.jpg"
    },
    { id:"havlu-granit", category:"Havlu", name:"GRANIT", material:"%100 Pamuk",
      desc:"Güçlü emicilik ve tok dokusuyla premium hissiyat sağlar.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/granit.jpg"
    },
    { id:"havlu-tripolis", category:"Havlu", name:"TRİPOLİS", material:"%100 Pamuk",
      desc:"Yumuşak dokusu ve yüksek emiciliği ile günlük kullanıma uygundur.",
      prices:[ {size:"50×90", price:"510 TL"}, {size:"70×140", price:"1020 TL"} ],
      img:"img/urunler/havlu/tripolis.jpg"
    },

    // NEVRESİM
    {
      id:"nevresim-izgi", category:"Nevresim", name:"İZGİ", material:"%100 Pamuk",
      desc:"Nefes alan pamuk dokusu ile konforlu uyku deneyimi sunar.",
      prices:[ {size:"Takım", price:"790 TL"} ],
      colors:[
        { key:"green",   label:"Green",   hex:"#4f7a55", img:"img/urunler/nevresim/izgi-green.jpeg" },
        { key:"tobacco", label:"Tobacco", hex:"#7a5a3a", img:"img/urunler/nevresim/izgi-tobacco.jpeg" },
        { key:"mustard", label:"Mustard", hex:"#caa23b", img:"img/urunler/nevresim/izgi-mustard.jpeg" },
        { key:"powder",  label:"Powder",  hex:"#f2c9d1", img:"img/urunler/nevresim/izgi-powder.jpeg" },
        { key:"rose",    label:"Rose",    hex:"#d58b8f", img:"img/urunler/nevresim/izgi-rose.jpeg" },
        { key:"white",   label:"White",   hex:"#ffffff", img:"img/urunler/nevresim/izgi-white.jpeg" }
      ]
    },
    {
      id:"nevresim-mahver", category:"Nevresim", name:"MAHVER", material:"%100 Pamuk",
      desc:"Zarif görünüm, kolay bakım ve yumuşak dokuyla premium hissiyat.",
      prices:[ {size:"Takım", price:"890 TL"} ],
      colors:[
        { key:"anthracite", label:"Anthracite", hex:"#3a3a3a", img:"img/urunler/nevresim/mahver-anthracite.jpeg" },
        { key:"coral",      label:"Coral",      hex:"#c86a5a", img:"img/urunler/nevresim/mahver-coral.jpeg" },
        { key:"green",      label:"Green",      hex:"#4f7a55", img:"img/urunler/nevresim/mahver-green.jpeg" },
        { key:"powder",     label:"Powder",     hex:"#f2c9d1", img:"img/urunler/nevresim/mahver-powder.jpeg" },
        { key:"salmon",     label:"Salmon",     hex:"#f2a29b", img:"img/urunler/nevresim/mahver-salmon.jpeg" },
        { key:"white",      label:"White",      hex:"#ffffff", img:"img/urunler/nevresim/mahver-white.jpeg" }
      ]
    },
    {
      id:"nevresim-monaco", category:"Nevresim", name:"MONACO", material:"%100 Pamuk",
      desc:"Modern renk seçenekleri ve pamuk dokusuyla şık bir yatak odası görünümü.",
      prices:[ {size:"Takım", price:"740 TL"} ],
      colors:[
        { key:"blue",   label:"Blue",   hex:"#4a6f9a", img:"img/urunler/nevresim/monaco-blue.jpeg" },
        { key:"coral",  label:"Coral",  hex:"#c86a5a", img:"img/urunler/nevresim/monaco-coral.jpeg" },
        { key:"yellow", label:"Yellow", hex:"#d6b04b", img:"img/urunler/nevresim/monaco-yellow.jpeg" }
      ]
    },
    {
      id:"nevresim-piraye", category:"Nevresim", name:"PİRAYE", material:"%100 Pamuk",
      desc:"Yumuşak dokusu ve sade tasarımıyla rahat ve ferah bir kullanım sunar.",
      prices:[ {size:"Takım", price:"680 TL"} ],
      colors:[
        { key:"beige",  label:"Beige",  hex:"#d8c3a5", img:"img/urunler/nevresim/piraye-beige.jpeg" },
        { key:"green",  label:"Green",  hex:"#4f7a55", img:"img/urunler/nevresim/piraye-green.jpeg" },
        { key:"grey",   label:"Grey",   hex:"#9aa0a6", img:"img/urunler/nevresim/piraye-grey.jpeg" },
        { key:"pink",   label:"Pink",   hex:"#f2a0b6", img:"img/urunler/nevresim/piraye-pink.jpeg" },
        { key:"white",  label:"White",  hex:"#ffffff", img:"img/urunler/nevresim/piraye-white.jpeg" },
        { key:"yellow", label:"Yellow", hex:"#d6b04b", img:"img/urunler/nevresim/piraye-yellow.jpeg" }
      ]
    },

    // BORNOZ - AİLE SETLERİ
    { id:"bornoz-bambogupurlu", category:"Bornoz", name:"BAMBO GÜPÜRLÜ AİLE", material:"%100 Pamuk",
      desc: FAMILY_SET_DESC,
      isFamily: true,
      familyContent: ["2 Adet Bornoz", "2 Adet Havlu"],
      prices:[ {size:"Aile Seti", price:"2190 TL"} ],
      img:"img/urunler/bornoz/bambogupurlu.jpeg"
    },
    {
      id:"bornoz-bambojakarli", category:"Bornoz", name:"BAMBO JAKARLI AİLE", material:"%100 Pamuk",
      desc: FAMILY_SET_DESC,
      isFamily: true,
      familyContent: ["2 Adet Bornoz", "2 Adet Havlu"],
      prices:[ {size:"Aile Seti", price:"2390 TL"} ],
      colors:[
        { key:"blue-cream",  label:"Blue / Cream",  hex:"#4a6f9a", img:"img/urunler/bornoz/bambojakarli-blue-cream.jpeg" },
        { key:"grey-rose",   label:"Grey / Rose",   hex:"#9aa0a6", img:"img/urunler/bornoz/bambojakarli-grey-rose.jpeg" },
        { key:"orange-grey", label:"Orange / Grey", hex:"#d89a5b", img:"img/urunler/bornoz/bambojakarli-orange-grey.jpeg" },
        { key:"white-black", label:"White / Black", hex:"#ffffff", img:"img/urunler/bornoz/bambojakarli-white-black.jpeg" }
      ]
    },
    {
      id:"bornoz-cottonjakarli", category:"Bornoz", name:"COTTON JAKARLI AİLE", material:"%100 Pamuk",
      desc: FAMILY_SET_DESC,
      isFamily: true,
      familyContent: ["2 Adet Bornoz", "2 Adet Havlu"],
      prices:[ {size:"Aile Seti", price:"2290 TL"} ],
      colors:[
        { key:"brown-cream",      label:"Brown / Cream",      hex:"#8a5a3c", img:"img/urunler/bornoz/cottonjakarli-brown-cream.jpeg" },
        { key:"cream-anthracite", label:"Cream / Anthracite", hex:"#e8dcc7", img:"img/urunler/bornoz/cottonjakarli-cream-anthracite.jpeg" },
        { key:"green-orange",     label:"Green / Orange",     hex:"#4f7a55", img:"img/urunler/bornoz/cottonjakarli-green-orange.jpeg" },
        { key:"lilac-cream",      label:"Lilac / Cream",      hex:"#b7a1d6", img:"img/urunler/bornoz/cottonjakarli-lilac-cream.jpeg" },
        { key:"rose-anthracite",  label:"Rose / Anthracite",  hex:"#d58b8f", img:"img/urunler/bornoz/cottonjakarli-rose-anthracite.jpeg" },
        { key:"rose-silver",      label:"Rose / Silver",      hex:"#d58b8f", img:"img/urunler/bornoz/cottonjakarli-rose-silver.jpeg" }
      ]
    },
    {
      id:"bornoz-purrynakisliaile", category:"Bornoz", name:"PURRY NAKIŞLI AİLE", material:"%100 Pamuk",
      desc:"Aile seti için şık kombin renkler ve yumuşak pamuk dokusu.",
      isFamily: true,
      familyContent: ["2 Adet Bornoz", "2 Adet Havlu"],
      prices:[ {size:"Aile Seti", price:"1800 TL"} ],
      colors:[
        { key:"green-rose",   label:"Green / Rose",   hex:"#4f7a55", img:"img/urunler/bornoz/purrynakisli-green-rose.jpeg" },
        { key:"silver-lilac", label:"Silver / Lilac", hex:"#aeb4bb", img:"img/urunler/bornoz/purrynakisli-silver-lilac.jpeg" },
        { key:"brown-cream",  label:"Brown / Cream",  hex:"#8a5a3c", img:"img/urunler/bornoz/purrynakisli-brown-cream.jpeg" },
        { key:"brown-white",  label:"Brown / White",  hex:"#8a5a3c", img:"img/urunler/bornoz/purrynakisli-brown-white.jpeg" },
        { key:"camel-white",  label:"Camel / White",  hex:"#c49a6c", img:"img/urunler/bornoz/purrynakisli-camel-white.jpeg" }
      ]
    },

    // BORNOZ - Standartlar
    { id:"bornoz-cottonlila", category:"Bornoz", name:"COTTON (LİLA)", material:"%100 Pamuk",
      desc:"Yumuşak ve rahat kullanım sunan klasik bornoz seti.",
      prices:[ {size:"Standart", price:"780 TL"} ],
      img:"img/urunler/bornoz/cotton-lila.jpeg"
    },
    { id:"bornoz-cottonblue", category:"Bornoz", name:"COTTON (MAVİ)", material:"%100 Pamuk",
      desc:"Hızlı kuruyan dokusu ve yumuşak yapısıyla günlük kullanıma uygundur.",
      prices:[ {size:"Standart", price:"760 TL"} ],
      img:"img/urunler/bornoz/cottonblue.jpeg"
    },
    { id:"bornoz-ella", category:"Bornoz", name:"ELLA", material:"%100 Pamuk",
      desc:"Şık görünüm ve konforu bir arada sunar.",
      prices:[ {size:"Standart", price:"820 TL"} ],
      img:"img/urunler/bornoz/ellabornoz.jpeg"
    },
    { id:"bornoz-harosa", category:"Bornoz", name:"HAROŞA", material:"%100 Pamuk",
      desc:"Tok doku, dayanıklı kullanım ve premium görünüm.",
      prices:[ {size:"Standart", price:"860 TL"} ],
      img:"img/urunler/bornoz/harosa.jpeg"
    },
    { id:"bornoz-miranda", category:"Bornoz", name:"MIRANDA", material:"%100 Pamuk",
      desc:"Banyo sonrası konfor için ideal yumuşaklık ve emicilik.",
      prices:[ {size:"Standart", price:"740 TL"} ],
      img:"img/urunler/bornoz/miranda.jpeg"
    },
    { id:"bornoz-perla", category:"Bornoz", name:"PERLA", material:"%100 Pamuk",
      desc:"Sade ve premium tasarım; konforlu pamuk dokusu.",
      prices:[ {size:"Standart", price:"700 TL"} ],
      img:"img/urunler/bornoz/perla.jpeg"
    },
    { id:"bornoz-silver", category:"Bornoz", name:"SİLVER", material:"%100 Pamuk",
      desc:"Klasik çizgi, yüksek emicilik ve konfor.",
      prices:[ {size:"Standart", price:"690 TL"} ],
      img:"img/urunler/bornoz/silver.jpeg"
    },
    { id:"bornoz-sonbahar", category:"Bornoz", name:"SONBAHAR", material:"%100 Pamuk",
      desc:"Şık görünüm ve yumuşak dokuyla keyifli kullanım.",
      prices:[ {size:"Standart", price:"720 TL"} ],
      img:"img/urunler/bornoz/sonbahar.jpeg"
    },
    { id:"bornoz-waffle", category:"Bornoz", name:"WAFFLE", material:"%100 Pamuk",
      desc:"Waffle dokusu sayesinde hafif, nefes alan ve hızlı kuruyan yapı.",
      prices:[ {size:"Standart", price:"810 TL"} ],
      img:"img/urunler/bornoz/waffle.jpeg"
    },
  ];

  // =========================
  // Helpers: TL parse + price by size
  // =========================
  function parseTL(raw){
    return Number(String(raw || "0").replace(/[^\d]/g, "")) || 0;
  }
  function getPriceBySizeTL(p, size) {
    if (!Array.isArray(p.prices) || !p.prices.length) return 0;
    const found = p.prices.find(x => (x.size || "") === size);
    return parseTL(found ? found.price : p.prices[0].price);
  }

  function iconForFamilyItem(text){
    const t = String(text || "").toLowerCase();
    if (t.includes("bornoz")) return "👘";
    if (t.includes("havlu")) return "🧺";
    return "•";
  }

  // =========================
  // SEPET (localStorage)
  // =========================
  const CART_KEY = "SIKEL_CART_V1";

  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
    catch { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount(cart);
  }
  function updateCartCount(cart = loadCart()) {
    const countEl = document.getElementById("cartCount");
    if (!countEl) return;
    const totalQty = cart.reduce((sum, i) => sum + (i.qty || 0), 0);
    countEl.textContent = String(totalQty);
  }
  updateCartCount();

  function getVariantTitle(p, selectedColorLabel, selectedSize) {
    const parts = [];
    if (selectedSize) parts.push(selectedSize);
    if (selectedColorLabel) parts.push(selectedColorLabel);
    return parts.length ? `${p.name} (${parts.join(" • ")})` : p.name;
  }

  function addToCart(productId, selectedImg, selectedColorLabel, selectedSize, unitTL) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;

    const cart = loadCart();
    const key = `${productId}__${selectedImg || ""}__${selectedSize || ""}`;

    const existing = cart.find(x => x.key === key);
    if (existing) existing.qty += 1;
    else {
      cart.push({
        key,
        id: productId,
        title: getVariantTitle(p, selectedColorLabel || "", selectedSize || ""),
        img: selectedImg || (p.img || (p.colors?.[0]?.img || "")),
        unit: Number(unitTL || 0),
        qty: 1
      });
    }

    saveCart(cart);
  }

  // =========================
  // SEPET MODAL UI
  // =========================
  const cartBtn = document.getElementById("cartBtn");
  const cartClose = document.getElementById("cartClose");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartClearBtn = document.getElementById("cartClear");
  const cartCheckoutBtn = document.getElementById("cartCheckout");

  function formatTL(n) { return `${n.toLocaleString("tr-TR")} TL`; }

  function openCart() {
    if (!cartModal) return;
    renderCart();
    cartModal.classList.add("open");
    cartModal.setAttribute("aria-hidden", "false");
    syncBodyScroll();
  }
  function closeCart() {
    if (!cartModal) return;
    cartModal.classList.remove("open");
    cartModal.setAttribute("aria-hidden", "true");
    syncBodyScroll();
  }

  function renderCart() {
    if (!cartItemsEl || !cartTotalEl) return;

    const cart = loadCart();
    if (!cart.length) {
      cartItemsEl.innerHTML = `<div style="opacity:.8;padding:12px;">Sepetiniz boş.</div>`;
      cartTotalEl.textContent = "0 TL";
      return;
    }

    let total = 0;
    cartItemsEl.innerHTML = cart.map(item => {
      const line = (item.unit || 0) * (item.qty || 0);
      total += line;

      return `
        <div class="cart-item" data-key="${item.key}">
          <img src="${item.img}" alt="${item.title}">
          <div>
            <div class="ci-title">${item.title}</div>
            <div class="ci-sub">Birim: ${formatTL(item.unit || 0)}</div>
          </div>
          <div class="ci-controls">
            <div class="qty">
              <button class="qty-dec" aria-label="Azalt">−</button>
              <span>${item.qty}</span>
              <button class="qty-inc" aria-label="Arttır">+</button>
            </div>
            <button class="ci-remove">Sil</button>
          </div>
        </div>
      `;
    }).join("");

    cartTotalEl.textContent = formatTL(total);
  }

  function changeQty(key, delta) {
    const cart = loadCart();
    const item = cart.find(x => x.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      const idx = cart.findIndex(x => x.key === key);
      cart.splice(idx, 1);
    }
    saveCart(cart);
    renderCart();
  }

  function removeItem(key) {
    const cart = loadCart().filter(x => x.key !== key);
    saveCart(cart);
    renderCart();
  }

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);

  document.addEventListener("click", (e) => {
    if (e.target && e.target.dataset && e.target.dataset.cartClose === "1") closeCart();
  });

// Sepeti Temizle
if (cartClearBtn) {
  cartClearBtn.addEventListener("click", () => {
    saveCart([]);
    renderCart();
  });
}

// Satın Al (Demo)
if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener("click", () => {
    const cart = loadCart();
    if (!cart.length) {
      alert("Sepetiniz boş.");
      return;
    }

    alert("✅ Siparişiniz alınmıştır.\nEn kısa sürede sizinle iletişime geçilecektir.");

    // demo için sepeti temizle + modalı kapat
    saveCart([]);
    renderCart();
    closeCart();
  });
}


  document.addEventListener("click", (e) => {
    const row = e.target.closest(".cart-item");
    if (!row) return;
    const key = row.dataset.key;

    if (e.target.classList.contains("qty-inc")) changeQty(key, +1);
    if (e.target.classList.contains("qty-dec")) changeQty(key, -1);
    if (e.target.classList.contains("ci-remove")) removeItem(key);
  });

  // =========================
  // Ürün Detay Modal
  // =========================
  const modalImg = document.getElementById("pmodalImg");
  const modalTitle = document.getElementById("pmodalTitle");
  const modalMaterial = document.getElementById("pmodalMaterial");
  const modalDesc = document.getElementById("pmodalDesc");
  const modalPrices = document.getElementById("pmodalPrices");
  const modalColorsWrap = document.getElementById("pmodalColorsWrap");
  const modalColors = document.getElementById("pmodalColors");
  const modalCloseBtn = document.getElementById("pmodalClose");
  const addToCartBtn = document.getElementById("addToCartBtn");

  const modalSizesWrap = document.getElementById("pmodalSizesWrap");
  const modalSizes = document.getElementById("pmodalSizes");

  // Aile içeriği + badge
  const modalFamilyWrap = document.getElementById("pmodalFamilyWrap");
  const modalFamilyList = document.getElementById("pmodalFamilyList");
  const modalFamilyBadge = document.getElementById("pmodalFamilyBadge");

  let currentProductId = null;
  let currentSelectedImg = null;
  let currentSelectedColorLabel = "";
  let currentSelectedSize = "";
  let currentSelectedUnitTL = 0;

  function openProductModal(p) {
    if (!productModal) return;

    const hasColors = Array.isArray(p.colors) && p.colors.length > 0;
    const firstImg = hasColors ? p.colors[0].img : p.img;

    currentProductId = p.id;
    currentSelectedImg = firstImg;
    currentSelectedColorLabel = hasColors ? (p.colors[0].label || "") : "";

    modalImg.src = firstImg;
    modalImg.alt = p.name || "";
    modalTitle.textContent = p.name || "";
    modalMaterial.textContent = p.material || "";
    modalDesc.textContent = p.desc || "";

    // ✅ Aile seti badge + içerik
    const isFamily = !!p.isFamily;
    if (modalFamilyBadge) modalFamilyBadge.style.display = isFamily ? "inline-flex" : "none";

    if (isFamily && modalFamilyWrap && modalFamilyList) {
      modalFamilyWrap.style.display = "block";
      const list = Array.isArray(p.familyContent) ? p.familyContent : [];
      modalFamilyList.innerHTML = list.map(txt => {
        const icon = iconForFamilyItem(txt);
        return `<li>${icon} ${txt}</li>`;
      }).join("");
    } else if (modalFamilyWrap && modalFamilyList) {
      modalFamilyWrap.style.display = "none";
      modalFamilyList.innerHTML = "";
    }

    // Boyutlar: sadece 2+ seçenek varsa göster
    if (modalSizesWrap && modalSizes && Array.isArray(p.prices) && p.prices.length >= 2) {
      modalSizesWrap.style.display = "block";
      currentSelectedSize = p.prices[0].size || "";
      currentSelectedUnitTL = getPriceBySizeTL(p, currentSelectedSize);

      modalSizes.innerHTML = p.prices.map((x, i) => `
        <button class="pmodal-size-btn ${i===0 ? "active":""}" data-size="${x.size}">
          ${x.size}
        </button>
      `).join("");
    } else {
      if (modalSizesWrap && modalSizes) {
        modalSizesWrap.style.display = "none";
        modalSizes.innerHTML = "";
      }
      currentSelectedSize = (p.prices && p.prices[0]) ? (p.prices[0].size || "") : "";
      currentSelectedUnitTL = getPriceBySizeTL(p, currentSelectedSize);
    }

    // fiyatlar
    if (Array.isArray(p.prices) && p.prices.length) {
      modalPrices.style.display = "block";
      modalPrices.innerHTML = p.prices.map(x => {
        const active = (x.size || "") === currentSelectedSize;
        return `
          <div class="price-row" style="${active ? "background:rgba(13,110,253,0.08); border-radius:10px; padding:8px;" : ""}">
            <span>${x.size || ""}</span>
            <strong>${x.price || ""}</strong>
          </div>
        `;
      }).join("");
    } else {
      modalPrices.style.display = "none";
      modalPrices.innerHTML = "";
    }

    // renkler
    if (hasColors) {
      if (modalColorsWrap) modalColorsWrap.style.display = "block";
      modalColors.innerHTML = p.colors.map((c, i) => `
        <span class="pmodal-color-btn ${i===0 ? "active":""}"
              title="${c.label}"
              data-img="${c.img}"
              data-label="${c.label}"
              style="background:${c.hex};"></span>
      `).join("");
    } else {
      if (modalColorsWrap) modalColorsWrap.style.display = "none";
      modalColors.innerHTML = "";
    }

    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    syncBodyScroll();
  }

  function closeProductModal() {
    if (!productModal) return;
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    syncBodyScroll();

    currentProductId = null;
    currentSelectedImg = null;
    currentSelectedColorLabel = "";
    currentSelectedSize = "";
    currentSelectedUnitTL = 0;
  }

  // ESC kapatma
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeProductModal();
    }
  });

  // =========================
  // ÜRÜNLER SAYFASI RENDER
  // =========================
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  function productCardHTML(p) {
    const hasColors = Array.isArray(p.colors) && p.colors.length > 0;
    const defaultImg = hasColors ? p.colors[0].img : p.img;

    const colorRow = hasColors
      ? `<div class="color-row">
          ${p.colors.map((c, i) => `
            <span class="color-btn ${i === 0 ? "active" : ""}"
                  title="${c.label}"
                  data-img="${c.img}"
                  data-label="${c.label}"
                  style="background:${c.hex};"></span>
          `).join("")}
        </div>`
      : "";

    return `
      <div class="urun-kart" data-cat="${p.category}" data-id="${p.id}">
        <img src="${defaultImg}" alt="${p.name}" class="product-img">
        <h3>${p.name}</h3>
        ${colorRow}
      </div>
    `;
  }

  function renderProducts(filter = "Hepsi") {
    const list = (filter === "Hepsi")
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === filter);

    grid.innerHTML = list.map(productCardHTML).join("");
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.filter);
      });
    });
  }
  renderProducts("Hepsi");

    // ✅ URL hash ile filtre seçimi (urunler.html#nevresim gibi)
  function applyFilterFromHash() {
    const raw = (location.hash || "").replace("#", "").toLowerCase();
    if (!raw) return;

    const map = {
      "hepsi": "Hepsi",
      "tüm": "Hepsi",
      "tum": "Hepsi",
      "tümürünler": "Hepsi",
      "tumurunler": "Hepsi",
      "nevresim": "Nevresim",
      "bornoz": "Bornoz",
      "havlu": "Havlu"
    };

    const target = map[raw];
    if (!target) return;

    // buton active ayarla
    filterButtons.forEach(b => {
      b.classList.toggle("active", b.dataset.filter === target);
    });

    renderProducts(target);
  }

  applyFilterFromHash();
  window.addEventListener("hashchange", applyFilterFromHash);

  // Kart içi renk seçimi (kartta resmi değiştirir)
  grid.addEventListener("click", (e) => {
    const swatch = e.target.closest(".color-btn");
    if (!swatch) return;

    e.stopPropagation();
    const row = swatch.closest(".color-row");
    row.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
    swatch.classList.add("active");

    const card = swatch.closest(".urun-kart");
    const imgEl = card.querySelector(".product-img");
    imgEl.src = swatch.dataset.img;
  });

  // Kart tıklanınca modal aç
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".urun-kart");
    if (!card) return;
    if (e.target.closest(".color-btn")) return;

    const id = card.dataset.id;
    const p = PRODUCTS.find(x => x.id === id);
    if (p) openProductModal(p);
  });

  // Modal içi click handler (renk + boyut + kapatma)
  document.addEventListener("click", (e) => {
    if (!productModal || !productModal.classList.contains("open")) return;

    // Boyut seçimi
    const sizeBtn = e.target.closest(".pmodal-size-btn");
    if (sizeBtn && modalSizes) {
      modalSizes.querySelectorAll(".pmodal-size-btn").forEach(b => b.classList.remove("active"));
      sizeBtn.classList.add("active");

      currentSelectedSize = sizeBtn.dataset.size || "";
      const p = PRODUCTS.find(x => x.id === currentProductId);
      if (p) {
        currentSelectedUnitTL = getPriceBySizeTL(p, currentSelectedSize);

        if (Array.isArray(p.prices) && p.prices.length) {
          modalPrices.innerHTML = p.prices.map(x => {
            const active = (x.size || "") === currentSelectedSize;
            return `
              <div class="price-row" style="${active ? "background:rgba(13,110,253,0.08); border-radius:10px; padding:8px;" : ""}">
                <span>${x.size || ""}</span>
                <strong>${x.price || ""}</strong>
              </div>
            `;
          }).join("");
        }
      }
      return;
    }

    // Renk seçimi
    const sw = e.target.closest(".pmodal-color-btn");
    if (sw) {
      modalColors.querySelectorAll(".pmodal-color-btn").forEach(b => b.classList.remove("active"));
      sw.classList.add("active");
      modalImg.src = sw.dataset.img;
      currentSelectedImg = sw.dataset.img;
      currentSelectedColorLabel = sw.dataset.label || "";
      return;
    }

    // Kapatma
    if (e.target.dataset.close === "1" || e.target.id === "pmodalClose") {
      closeProductModal();
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);

  // ✅ Sepete Ekle: modal kapat + sepet aç
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      if (!currentProductId) return;

      addToCart(
        currentProductId,
        currentSelectedImg,
        currentSelectedColorLabel,
        currentSelectedSize,
        currentSelectedUnitTL
      );

      closeProductModal();
      openCart();
    });
  }

});
