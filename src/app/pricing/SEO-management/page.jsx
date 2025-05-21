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
            <p className={styles.your_queries_title}>SEO Management Package</p>
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
                <h3 className={styles.pricing_title}>Basic</h3>
                <p className={styles.pricing_price}>1,500 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1.</span> SEO ADIT </li>
                <li><span>2.</span> CONTENT WRITING & BLOG
                  POST </li>
                <li><span>3. </span> LOCAL SEO AUDIT AND
                  OPTIMIZATION </li>
                <li><span>4. </span>BRANDED GRAPHICS </li>
                <li><span>5. </span>TECHNICAL SEO </li>
                <li><span>6. </span>GREAT CUSTOMER SUPPORT </li>
                <li><span>7. </span>GREAT CUSTOMER SUPPORT </li>
                <li><span>8. </span>FAST CUSTOMER SUPPORT </li>
                <li><span>9. </span>NULL </li>
                <li><span>10. </span>NULL</li>
                <li><span>11. </span>NULL </li>
                <li><span>12. </span>NULL </li>
                <li><span>13. </span>NULL </li>
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
                <p className={styles.pricing_price}>3,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>PAGES OPTIMIZED </li>
                <li><span>2. </span>KEYWORD RESEARCH &
                  SELECTION </li>
                <li><span>3. </span>BOOST SOCIAL ENGAGEMENT </li>
                <li><span>4. </span>KEYWORD MAPPING TO TARGET
                  PAGES </li>
                <li><span>5. </span>TITLE TAGS & META
                  DESCRIPTIONS </li>
                <li><span>6. </span>DUPLICATE CONTENT ANALYSIS </li>
                <li><span>7. </span>HEADER TAGS OPTIMIZED </li>
                <li><span>8. </span>SETUP OF WEBSITE SITEMAP </li>
                <li><span>9. </span>CUSTOM 404 ERROR PAGE
                  SETUP AND OPTIMIZATION </li>
                <li><span>10. </span>GOOGLE ANALYTICS SETUP W/
                  CONVERSION TRACKING </li>
                <li><span>11. </span>GOOGLE ANALYTICS TRAFFIC
                  ANALYSIS </li>
                <li><span>12. </span>A/B TESTING OF SERP TITLE &
                  DESCRIPTION TO IMPROVE
                  CLICKTHROUGH </li>
                <li><span>13. </span>NULL </li>
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
                <p className={styles.pricing_price}>5,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>PAGES OPTIMIZED </li>
                <li><span>2. </span>KEYWORD RESEARCH &
                  SELECTION </li>
                <li><span>3. </span>BOOST SOCIAL ENGAGEMENT </li>
                <li><span>4. </span>KEYWORD MAPPING TO TARGET
                  PAGES </li>
                <li><span>5. </span>DUPLICATE CONTENT ANALYSIS </li>
                <li><span>6. </span>HEADER TAGS OPTIMIZED </li>
                <li><span>7. </span>IMAGE OPTIMIZATION </li>
                <li><span>8. </span>SETUP OF WEBSITE SITEMAP </li>
                <li><span>9. </span>CUSTOM 404 ERROR PAGE
                  SETUP AND OPTIMIZATION </li>
                <li><span>10. </span>GOOGLE ANALYTICS SETUP W/
                  CONVERSION TRACKING </li>
                <li><span>11. </span> GOOGLE ANALYTICS TRAFFIC
                  ANALYSIS </li>
                <li><span>12. </span>A/B TESTING OF SERP TITLE &
                  DESCRIPTION TO IMPROVE
                  CLICKTHROUGH </li>
                <li><span>13. </span>NULL </li>
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
                <p className={styles.pricing_price}>7,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>7 POSTS PER WEEK </li>
                <li><span>2. </span>UNIQUE CONTENT SPECIFIC TO
                  YOUR BUSINESS </li>
                <li><span>3. </span>BOOST SOCIAL ENGAGEMENT
                  AND ACCOUNT GROWTH </li>
                <li><span>4. </span>BRANDED GRAPHICS </li>
                <li><span>5. </span>PREVIEW POSTS ONE WEEK IN
                  ADVANCE </li>
                <li><span>6. </span>REAL-TIME SOCIAL MEDIA
                  ANALYTICS </li>
                <li><span>7. </span>1 STRATEGY CALL PER MONTH
                  INCLUDED </li>
                <li><span>8. </span>1 X 500-WORD SEO-OPTIMISED
                  BLOG POST </li>
                <li><span>9. </span>ADDITIONAL SERVICES ARE
                  AVAILABLE AT CHECKOUT </li>
                <li><span>10. </span>FACEBOOK ADS CAMPAIGN
                  INCLUDED </li>
                <li><span>11. </span>MONTHLY ROLLING CONTRACT
                  - CANCEL ANY TIME </li>
                <li><span>12. </span>KEYWORD RANK CHECKER
                  ACCESS WITH WEEKLY UPDATES </li>
                <li><span>13. </span>PRIORITY CUSTOMER SUPPORT </li>
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
