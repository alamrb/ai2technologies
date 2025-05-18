import React from "react";
import Link from "next/link";
import styles from "../../home.module.css";

export default function Page() {
  return (
    <div className={styles.landing}>
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
                Build a powerful online presence with our tailored web
                development packages.
              </p>
            </div>
            <div
              className={`${styles.pricing_table} ${styles.pricing_table_custom}`}
            >
              {/* Basic Plan */}
              <div
                className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
              >
                <div className={styles.pricingHead}>
                  <h3 className={styles.pricing_title}>Basic Plan</h3>
                  <p className={styles.pricing_price}>8000 BDT</p>
                </div>
                <hr />
                <ul className={styles.pricing_features}>
                  <li>Up to 5 pages (Home, About, Services, Contact, etc.)</li>
                  <li>Mobile responsive design</li>
                  <li>Basic SEO optimization</li>
                  <li>Contact form integration</li>
                  <li>Delivery: 5–7 business days</li>
                  <li>Great customer support</li>
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
                  <h3 className={styles.pricing_title}>Standard Plan</h3>
                  <p className={styles.pricing_price}>20000 BDT</p>
                </div>
                <hr />
                <ul className={styles.pricing_features}>
                  <li>Up to 10 pages</li>
                  <li>Custom design & branding</li>
                  <li>Blog integration</li>
                  <li>Keyword mapping to target pages</li>
                  <li>Live chat setup (optional)</li>
                  <li>Basic analytics setup (Google Analytics)</li>
                  <li>Header Tags Optimized (Ex. H1s)</li>
                  <li>Delivery: 7–10 business days</li>
                  <li>Image optimization</li>
                  <li>Custom 404 error page setup and optimization</li>
                  <li>Great customer support</li>
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
                  <h3 className={styles.pricing_title}>Premium Plan</h3>
                  <p className={styles.pricing_price}>60000 BDT</p>
                </div>
                <hr />
                <ul className={styles.pricing_features}>
                  <li>Ecommerce Website</li>
                  <li>Custom design & branding</li>
                  <li>Blog integration</li>
                  <li>Keyword mapping to target pages</li>
                  <li>Live chat setup (optional)</li>
                  <li>Basic analytics setup (Google Analytics)</li>
                  <li>Header Tags Optimized (Ex. H1s)</li>
                  <li>Delivery: 10–25 business days</li>
                  <li>Image optimization</li>
                  <li>Custom 404 error page setup and optimization</li>
                  <li>Product listing & category pages</li>
                  <li>Shopping cart & checkout system</li>
                  <li>Payment gateway integration</li>
                  <li>Order management dashboard</li>
                  <li>Inventory management</li>
                  <li>Fast customer support</li>
                </ul>
                <Link href="#" className={styles.pricing_btn}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
