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
                <li>5 WEB pages</li>
                <li>Custom design & branding</li>
                <li>Blog integration</li>
                <li><span>Keyword mapping to target pages</span></li>
                <li><span>Live chat setup (optional)</span></li>
                <li>Google Analytics</li>
                <li> <span>Header Tags Optimized</span> </li>
                <li> <span>Product listing & category pages</span> </li>
                <li> <span>Payment gateway, dashboard &
                  Inventory management</span> </li>
                <li> <span>SEO optimization</span> </li>
                <li>Priority customer support</li>
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
                <li>10 WEB pages</li>
                <li>Custom design & branding</li>
                <li>Blog integration</li>
                <li>Keyword mapping to target pages</li>
                <li>Live chat setup (optional)</li>
                <li>Google Analytics</li>
                <li> <span>Header Tags Optimized</span> </li>
                <li> <span>Product listing & category pages</span> </li>
                <li> <span>Payment gateway, dashboard &
                  Inventory management</span> </li>
                <li> <span>SEO optimization</span> </li>
                <li>Priority customer support</li>
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
                <li>15 WEB pages</li>
                <li>Custom design & branding</li>
                <li>Blog integration</li>
                <li>Keyword mapping to target pages</li>
                <li>Live chat setup (optional)</li>
                <li>Google Analytics</li>
                <li>Header Tags Optimized</li>
                <li>Product listing & category pages</li>
                <li>Payment gateway, dashboard &
                  Inventory management</li>
                <li> <span>SEO optimization</span> </li>
                <li>Priority customer support</li>
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
                <li>20 WEB pages</li>
                <li>Custom design & branding</li>
                <li>Blog integration</li>
                <li>Keyword mapping to target pages</li>
                <li>Live chat setup (optional)</li>
                <li>Google Analytics</li>
                <li>Header Tags Optimized</li>
                <li>Product listing & category pages</li>
                <li>Payment gateway, dashboard &
                  Inventory management</li>
                <li>SEO optimization</li>
                <li>Priority customer support</li>
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
