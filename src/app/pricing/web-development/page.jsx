import Link from "next/link";
import styles from "../../home.module.css";

export default function Page() {
  return (
    <div
      className={`${styles.product_container} ${styles.pricing_bottom}`}
      id="pricing"
    >
      <div className={styles.product_item}>
        <div className={styles.pricing_container}>
          <div className={styles.section_top}>
            <p className={styles.your_queries_title}>
              Web Development Service Packages
            </p>
            <p className={styles.your_queries_sub_title}>
              Build a powerful online presence with our tailored web development
              packages.
            </p>
          </div>
          <div
            className={`${styles.pricing_table} ${styles.pricing_table_custom}`}
          >
            {/* Basic Plan */}
            {/* Basic Plan */}
            <div
              className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
            >
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Basic</h3>
                <p className={styles.pricing_price}>5,000 BDT</p>
                <h3 className={styles.pricing_title_month}> </h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>5 WEB PAGES </li>
                <li><span>2. </span> MOBILE RESPONSIVE DESIGN</li>
                <li><span>3. </span>BASIC SEO OPTIMIZATION </li>
                <li><span>4. </span>CONTACT FORM INTEGRATION</li>
                <li><span>5. </span>CONTACT FORM INTEGRATION</li>
                <li><span>6. </span>GREAT CUSTOMER SUPPORT</li>
                <li><span>7. </span>NULL</li>
                <li><span>8. </span>NULL</li>
                <li><span>9. </span>NULL</li>
                <li><span>10. </span>NULL</li>
                <li><span>11. </span>NULL</li>
                <li><span>12. </span>NULL</li>
                <li><span>13. </span>NULL</li>

              </ul>
              <Link href="#" className={styles.pricing_btn}>
                Get Started
              </Link>
            </div>

            {/* Standard Plan */}
            <div
              className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
            >
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Standard</h3>
                <p className={styles.pricing_price}>8,000 BDT</p>
                <h3 className={styles.pricing_title_month}> </h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>10 WEB PAGES</li>
                <li><span>2. </span>CUSTOM DESIGN & BRANDING </li>
                <li><span>3. </span>BLOG INTEGRATION </li>
                <li><span>4. </span>KEYWORD MAPPING TO TARGET
                  PAGES</li>
                <li><span>5. </span>GOOGLE ANALYTICS</li>
                <li><span>6. </span>HEADER TAGS OPTIMIZE</li>
                <li><span>7. </span>DELIVERY: 7–10 BUSINESS DAYS</li>
                <li><span>8. </span> IMAGE OPTIMIZATION</li>
                <li><span>9. </span>CUSTOM 404 ERROR PAGE
                  SETUP AND OPTIMIZATION</li>
                <li><span>10. </span>GREAT CUSTOMER SUPPORT</li>
                <li><span>11. </span>NULL</li>
                <li><span>12. </span>NULL</li>
                <li><span>13. </span>NULL</li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div
              className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
            >
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Premium</h3>
                <p className={styles.pricing_price}>10,000 BDT</p>
                <h3 className={styles.pricing_title_month}> </h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span> ECOMMERCE WEBSITE</li>
                <li><span>2. </span>CUSTOM DESIGN & BRANDING</li>
                <li><span>3. </span>BLOG INTEGRATION</li>
                <li><span>4. </span>KEYWORD MAPPING TO TARGET
                  PAGES</li>
                <li><span>5. </span>LIVE CHAT SETUP (OPTIONAL)</li>
                <li><span>6. </span>GOOGLE ANALYTICS</li>
                <li><span>7. </span>HEADER TAGS OPTIMIZED</li>
                <li><span>8. </span>DELIVERY: 10–25 BUSINESS
                  DAYS</li>
                <li><span>9. </span>CUSTOM 404 ERROR PAGE
                  SETUP AND OPTIMIZATION</li>
                <li><span>10. </span>IMAGE OPTIMIZATION</li>
                <li><span>11. </span>PRODUCT LISTING & CATEGORY
                  PAGES</li>
                <li><span>12. </span>NULL</li>
                <li><span>13. </span>NULL</li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>
                Get Started
              </Link>
            </div>

            <div
              className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
            >
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>PLATINUM</h3>
                <p className={styles.pricing_price}>15,000 BDT</p>
                <h3 className={styles.pricing_title_month}> </h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span> ECOMMERCE WEBSITE</li>
                <li><span>2. </span>CUSTOM DESIGN & BRANDING</li>
                <li><span>3. </span>BLOG INTEGRATION</li>
                <li><span>4. </span>KEYWORD MAPPING TO TARGET
                  PAGES</li>
                <li><span>5. </span>LIVE CHAT SETUP (OPTIONAL)</li>
                <li><span>6. </span>GOOGLE ANALYTICS</li>
                <li><span>7. </span>HEADER TAGS OPTIMIZED</li>
                <li><span>8. </span>DELIVERY: 10–25 BUSINESS
                  DAYS</li>
                <li><span>9. </span>CUSTOM 404 ERROR PAGE
                  SETUP AND OPTIMIZATION</li>
                <li><span>10. </span>IMAGE OPTIMIZATION</li>
                <li><span>11. </span>PRODUCT LISTING & CATEGORY
                  PAGES</li>
                <li><span>12. </span>SHOPPING CART & CHECKOUT
                  SYSTEM</li>
                <li><span>13. </span>AYMENT GATEWAY,
                  DASHBOARD & INVENTORY
                  MANAGEMENT</li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>
                Get Started
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
