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
              Social Media Management Package
            </p>
            <p className={styles.your_queries_sub_title}>
              Flexible plans tailored to your business needs. Choose what suits
              you best.
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
                <p className={styles.pricing_price}>7000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>1 bespoke post per week to 1 platform</li>
                <li>
                  Unique content specific to your business and interesting to
                  your followers
                </li>
                <li>A content strategy designed to boost social engagement</li>
                <li>Branded graphics unique to your business</li>
                <li>
                  Upgrade any time, additional services available at checkout
                </li>
                <li>Monthly rolling contract - cancel any time</li>
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
                <p className={styles.pricing_price}>12000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>1 bespoke post per week to 1 platform</li>
                <li>
                  Unique content specific to your business and interesting to
                  your followers
                </li>
                <li>A content strategy designed to boost social engagement</li>
                <li>Branded graphics unique to your business</li>
                <li>Real time social media analytics</li>
                <li>
                  Upgrade any time, additional services available at checkout
                </li>
                <li>Monthly rolling contract - cancel any time</li>
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
                <p className={styles.pricing_price}>20000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>5 bespoke posts per week to 3 platforms</li>
                <li>
                  Unique content specific to your business and interesting to
                  your followers
                </li>
                <li>
                  A content strategy designed to boost social engagement and
                  account growth
                </li>
                <li>Branded graphics unique to your business</li>
                <li>Preview posts one week in advance</li>
                <li>Real time social media analytics</li>
                <li>1 strategy call per month included</li>
                <li>
                  Upgrade or downgrade any time, additional services available
                  at checkout
                </li>
                <li>Monthly rolling contract - cancel any time</li>
                <li>Fast customer support</li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>
                Get Started
              </Link>
            </div>

            {/* Deluxe Plan */}
            <div
              className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
            >
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>PLATINUM</h3>
                <p className={styles.pricing_price}>40000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>7 bespoke posts per week to 4 platforms</li>
                <li>
                  Unique content specific to your business and interesting to
                  your followers
                </li>
                <li>
                  A content strategy designed to boost social engagement and
                  account growth
                </li>
                <li>Branded graphics unique to your business</li>
                <li>Preview posts one week in advance</li>
                <li>Real time social media analytics</li>
                <li>1 strategy call per month included</li>
                <li>1 x 500 word SEO-optimised blog post</li>
                <li>Facebook Ads campaign included</li>
                <li>
                  Downgrade at any time, additional services available at
                  checkout
                </li>
                <li>Monthly rolling contract - cancel any time</li>
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
