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
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>SEO ADIT </li>
                <li>Unique content specific to your
                  business</li>
                <li> Boost social engagement and
                  account growth</li>
                <li> <span>Branded graphics </span> </li>
                <li> <span>Preview posts one week in advance</span> </li>
                <li>Real-time social media analytics </li>
                <li> <span>1 strategy call per month included</span> </li>
                <li> <span>1 x 500-word SEO-optimised blog post</span></li>
                <li> <span>Keyword rank checker access with
                  weekly updates </span> </li>
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
                <p className={styles.pricing_price}>3,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>SEO ADIT </li>
                <li>Unique content specific to your
                  business</li>
                <li> Boost social engagement and
                  account growth</li>
                <li>Branded graphics </li>
                <li>Preview posts one week in advance</li>
                <li>Real-time social media analytics </li>
                <li> <span>1 strategy call per month included</span> </li>
                <li> <span>1 x 500-word SEO-optimised blog post</span></li>
                <li> <span>Keyword rank checker access with
                  weekly updates </span> </li>
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
                <p className={styles.pricing_price}>5,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>SEO ADIT </li>
                <li>Unique content specific to your
                  business</li>
                <li> Boost social engagement and
                  account growth</li>
                <li>Branded graphics </li>
                <li>Preview posts one week in advance</li>
                <li>Real-time social media analytics </li>
                <li>1 strategy call per month included </li>
                <li> <span>1 x 500-word SEO-optimised blog post</span> </li>
                <li>Keyword rank checker access with
                  weekly updates </li>
                <li>Priority customer support</li>
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
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>SEO ADIT </li>
                <li>Unique content specific to your
                  business</li>
                <li> Boost social engagement and
                  account growth</li>
                <li>Branded graphics </li>
                <li>Preview posts one week in advance</li>
                <li>Real-time social media analytics </li>
                <li>1 strategy call per month included </li>
                <li>1 x 500-word SEO-optimised blog post</li>
                <li>Keyword rank checker access with
                  weekly updates </li>
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
