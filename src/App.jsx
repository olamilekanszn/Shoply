import './App.css'

function App() {
  const products = [
    { id: 1, name: 'Jackets', price: 49.99, oldPrice: 79.99, image: 'https://images.unsplash.com/photo-1620812112510-ea35f4cc7875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzJTIwcmVsYXRlZCUyMHRvJTIwamFja2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 2, name: 'Smart Watch', price: 89.99, oldPrice: 129.99, image: 'https://image.coolblue.nl/max/1024xauto/content/07d1978ebe5abc13e1f89c18fdab7098' },
    { id: 3, name: 'Running Sneakers', price: 59.99, oldPrice: 99.99, image: 'https://img2.storyblok.com/filters:format(webp)/f/122804/1305x560/6a9145b640/img1-shoepermarket.jpg' },
    { id: 4, name: 'DSLR Camera', price: 499.99, oldPrice: 699.99, image: 'https://amytakespictures.com/wp-content/uploads/2016/09/eos-rebel-t6i-dslr-camera-front-open-d-optimized.jpg' },
    { id: 5, name: 'Leather Backpack', price: 79.99, oldPrice: 119.99, image: 'https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2VzJTIwcmVsYXRlZCUyMHRvJTIwTGVhdGhlciUyMEJhY2twYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
    { id: 6, name: 'Sunglasses', price: 24.99, oldPrice: 39.99, image: 'https://images.unsplash.com/photo-1656035378783-d474dad077bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031' },
    { id: 7, name: 'Belts', price: 39.99, oldPrice: 69.99, image: 'https://images.unsplash.com/photo-1664285612706-b32633c95820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzJTIwcmVsYXRlZCUyMHRvJTIwYmVsdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 8, name: 'Furniture', price: 129.99, oldPrice: 189.99, image: 'https://plus.unsplash.com/premium_photo-1674165228639-ac4b9bb9b3cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlcyUyMHJlbGF0ZWQlMjB0byUyMGZ1cm5pdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
  ]

  return (
    <>
      <header className="lp-header">
        <div className="container">
          <div className="brand">Shoply</div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#categories">Categories</a>
            <a href="#deals">Deals</a>
            <a href="#contact">Contact</a>
            <button className="btn btn-primary">Sign In</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Discover products you&apos;ll love</h1>
            <p>Curated deals across fashion, gadgets, and home essentials. Fresh finds every day.</p>
            <div className="hero-cta">
              <input className="search" placeholder="Search for products, brands, and more" />
              <button className="btn btn-accent">Search</button>
            </div>
            <div className="trust">
              <span>✓ Free shipping over $50</span>
              <span>✓ 30-day returns</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
          <div className="hero-media" aria-hidden>
            <div className="hero-card large summer">Summer Sale</div>
            <div className="hero-card arrivals">New Arrivals</div>
            <div className="hero-card best">Best Sellers</div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container grid-3">
          <div className="feature">
            <div className="icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered in 2-4 days with real-time tracking.</p>
          </div>
          <div className="feature">
            <div className="icon">💳</div>
            <h3>Secure Payments</h3>
            <p>Multiple payment options secured with industry-leading encryption.</p>
          </div>
          <div className="feature">
            <div className="icon">⭐</div>
            <h3>Top-rated</h3>
            <p>Thousands of 5-star reviews from happy customers worldwide.</p>
          </div>
        </div>
      </section>

      <section id="categories" className="categories">
        <div className="container">
          <div className="section-header">
            <h2>Shop by category</h2>
            <a href="#" className="link">View all</a>
          </div>
          <div className="category-grid">
            <div className="category-card">Fashion</div>
            <div className="category-card">Gadgets</div>
            <div className="category-card">Furniture</div>
            <div className="category-card">Beauty</div>
            <div className="category-card">Sports</div>
            <div className="category-card">Electronics</div>
          </div>
        </div>
      </section>

      <section id="deals" className="deals">
        <div className="container">
          <div className="section-header">
            <h2>Today&apos;s best deals</h2>
            <a href="#" className="link">See all deals</a>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <h4>{p.name}</h4>
                  <p className="price">
                    <span className="current">${p.price.toFixed(2)}</span>
                    <span className="old">${p.oldPrice.toFixed(2)}</span>
                  </p>
                  <button className="btn btn-primary w-full">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h3>Join 1M+ savvy shoppers</h3>
          <p>Get exclusive offers and early access to drops.</p>
          <div className="cta-actions">
            <input className="email" placeholder="Enter your email" type="email" />
            <button className="btn btn-accent">Subscribe</button>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">Shoply</div>
            <p className="muted">Quality products. Fair prices. Great service.</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <span className="muted">© {new Date().getFullYear()} Shoply, Inc.</span>
          <div className="socials" aria-label="social links">
            <a href="#" aria-label="Twitter">X</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
