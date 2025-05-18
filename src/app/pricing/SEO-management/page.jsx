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
                SEO Management Package
              </p>
              <p className={styles.your_queries_sub_title}>
                Optimize your website for visibility, traffic, and performance.
                Choose a plan that works for your business goals.
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
                  <h3 className={styles.pricing_title_month}>
                    Per Month + Vat
                  </h3>
                </div>
                <hr />
                <ul className={styles.pricing_features}>
                  <li>SEO Audit (One Time)</li>
                  <li>
                    Content Writing & Blog Post (Depending on length and
                    Complexity)
                  </li>
                  <li>Local SEO Audit and Optimization</li>
                  <li>Branded graphics unique to your business</li>
                  <li>Technical SEO (Depending on length and Complexity)</li>
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
                  <h3 className={styles.pricing_title_month}>
                    Per Month + Vat
                  </h3>
                </div>
                <hr />
                <ul className={styles.pricing_features}>
                  <li>Pages Optimized</li>
                  <li>Keyword research & selection</li>
                  <li>
                    A content strategy designed to boost social engagement
                  </li>
                  <li>Keyword mapping to target pages</li>
                  <li>Title Tags & Meta descriptions</li>
                  <li>Duplicate content analysis</li>
                  <li>Header Tags Optimized (Ex. H1s)</li>
                  <li>Setup of website sitemap</li>
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
                  <p className={styles.pricing_price}>25000 BDT</p>
                  <h3 className={styles.pricing_title_month}>
                    Per Month + Vat
                  </h3>
                </div>
                <hr />
                <ul className={styles.pricing_features}>
                  <li>Pages Optimized</li>
                  <li>Keyword research & selection</li>
                  <li>
                    A content strategy designed to boost social engagement
                  </li>
                  <li>Keyword mapping to target pages</li>
                  <li>Title Tags & Meta descriptions</li>
                  <li>Duplicate content analysis</li>
                  <li>Header Tags Optimized (Ex. H1s)</li>
                  <li>Setup of website sitemap</li>
                  <li>Image optimization</li>
                  <li>Custom 404 error page setup and optimization</li>
                  <li>Google Analytics setup w/ conversion tracking</li>
                  <li>Google Analytics traffic analysis</li>
                  <li>
                    Ongoing user experience reporting (bounce rate, device
                    category, etc.)
                  </li>
                  <li>
                    Keyword rank checker access with weekly updates (if
                    requested)
                  </li>
                  <li>
                    Ability to check location data accuracy across 40+ local
                    directories
                  </li>
                  <li>
                    A/B Testing of SERP title & description to improve
                    clickthrough
                  </li>
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
                  <h3 className={styles.pricing_title}>Deluxe Plan</h3>
                  <p className={styles.pricing_price}>45000 BDT</p>
                  <h3 className={styles.pricing_title_month}>
                    Per Month + Vat
                  </h3>
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
    </div>
  );
}
