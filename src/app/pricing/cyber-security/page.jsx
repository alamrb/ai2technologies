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
              Cyber Security Service Packages
            </p>
            <p className={styles.your_queries_sub_title}>
              Protect your business with proactive, professional cybersecurity
              solutions tailored to your scale and needs.
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
                <p className={styles.pricing_price}>2,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>vulnerability scan</li>
                <li>Firewall setup & monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li> <span>Data backup consultation</span> </li>
                <li> <span>Email security setup</span></li>
                <li>ndpoint protection (5–15 devices) </li>
                <li> <span>nsure cloud configuration audit</span> </li>
                <li> <span>Identity & Access Management (IAM)
                  setup </span></li>
                <li> <span>Compliance support (GDPR, ISO,
                  HIPAA)</span> </li>
                <li>Priority customer support </li>
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
                <p className={styles.pricing_price}>5,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>vulnerability scan</li>
                <li>Firewall setup & monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>ndpoint protection (5–15 devices) </li>
                <li> <span>nsure cloud configuration audit</span> </li>
                <li> <span>Identity & Access Management (IAM)
                  setup </span></li>
                <li> <span>Compliance support (GDPR, ISO,
                  HIPAA)</span> </li>
                <li>Priority customer support </li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>
                Get Started
              </Link>
            </div>

            {/* Premium Pşan */}
            <div
              className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
            >
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Premium</h3>
                <p className={styles.pricing_price}>10,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>vulnerability scan</li>
                <li>Firewall setup & monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>ndpoint protection (5–15 devices) </li>
                <li>nsure cloud configuration audit </li>
                <li> <span>Identity & Access Management (IAM)
                  setup</span> </li>
                <li>Compliance support (GDPR, ISO,
                  HIPAA)</li>
                <li>Priority customer support </li>
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
                <p className={styles.pricing_price}>20,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>vulnerability scan</li>
                <li>Firewall setup & monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>ndpoint protection (5–15 devices) </li>
                <li>nsure cloud configuration audit </li>
                <li>Identity & Access Management (IAM)
                  setup </li>
                <li>Compliance support (GDPR, ISO,
                  HIPAA)</li>
                <li>Priority customer support </li>
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
