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
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>VULNERABILITY SCAN  </li>
                <li><span>2. </span>FIREWALL SETUP & MONITORING </li>
                <li><span>3. </span>ANTI-VIRUS & MALWARE
                  PROTECTION </li>
                <li><span>4. </span>DATA BACKUP CONSULTATION  </li>
                <li><span>5. </span>EMAIL SECURITY SETUP  </li>
                <li><span>6. </span>NULL </li>
                <li><span>7. </span>NULL </li>
                <li><span>8. </span>NULL </li>
                <li><span>9. </span>NULL </li>
                <li><span>10. </span>NULL </li>
                <li><span>11. </span>NULL </li>
                <li><span>12. </span>NULL </li>
                <li><span>13. </span>NULL </li>
                <li><span>14. </span>NULL </li>
                <li><span>15. </span>NULL </li>
                <li><span>16. </span>NULL </li>
                <li><span>17. </span>NULL </li>
                <li><span>18. </span>NULL </li>
                <li><span>19. </span>NULL </li>
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
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>VULNERABILITY SCAN </li>
                <li><span>2. </span>FIREWALL SETUP & MONITORING </li>
                <li><span>3. </span>ANTI-VIRUS & MALWARE
                  PROTECTION </li>
                <li><span>4. </span>DATA BACKUP CONSULTATION </li>
                <li><span>5. </span>EMAIL SECURITY SETUP </li>
                <li><span>6. </span>MONTHLY SECURITY REPORT </li>
                <li><span>7. </span>INTRUSION DETECTION SYSTEM
                  (IDS) SETUP </li>
                <li><span>8. </span>ENDPOINT PROTECTION (5–15
                  DEVICES) </li>
                <li><span>9. </span>ENSURE CLOUD
                  CONFIGURATION AUDIT </li>
                <li><span>10. </span>DATA LOSS PREVENTION (DLP)
                  BASICS </li>
                <li><span>11. </span>SECURITY AWARENESS
                  TRAINING (QUARTERLY) </li>
                <li><span>12. </span>GREAT CUSTOMER SUPPORT </li>
                <li><span>13. </span>NULL </li>
                <li><span>14. </span>NULL </li>
                <li><span>15. </span>NULL </li>
                <li><span>16. </span>NULL </li>
                <li><span>17. </span>NULL </li>
                <li><span>18. </span>NULL </li>
                <li><span>19. </span>NULL</li>
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
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>VULNERABILITY SCAN</li>
                <li><span>2. </span>FIREWALL SETUP & MONITORING</li>
                <li><span>3. </span>ANTI-VIRUS & MALWARE
                  PROTECTION</li>
                <li><span>4. </span>DATA BACKUP CONSULTATION</li>
                <li><span>5. </span>EMAIL SECURITY SETUP</li>
                <li><span>6. </span>MONTHLY SECURITY REPORT</li>
                <li><span>7. </span>INTRUSION DETECTION SYSTEM
                  (IDS) SETUP</li>
                <li><span>8. </span>ENDPOINT PROTECTION (5–15
                  DEVICES)</li>
                <li><span>9. </span>ENSURE CLOUD
                  CONFIGURATION AUDIT</li>
                <li><span>10. </span>DATA LOSS PREVENTION (DLP)
                  BASICS</li>
                <li><span>11. </span>SECURITY AWARENESS
                  TRAINING (QUARTERLY)</li>
                <li><span>12. </span>24/7 THREAT MONITORING &
                  INCIDENT RESPONSE</li>
                <li><span>13. </span>A/B TESTING OF SERP TITLE &
                  DESCRIPTION TO IMPROVE
                  CLICKTHROUGH</li>
                <li><span>14. </span>FAST CUSTOMER SUPPORT</li>
                <li><span>15. </span>NULL</li>
                <li><span>16. </span>NULL</li>
                <li><span>17. </span>NULL</li>
                <li><span>18. </span>NULL</li>
                <li><span>19. </span>NULL</li>
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
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li><span>1. </span>VULNERABILITY SCAN</li>
                <li><span>2. </span>FIREWALL SETUP & MONITORING</li>
                <li><span>3. </span>ANTI-VIRUS & MALWARE
                  PROTECTION</li>
                <li><span>4. </span>DATA BACKUP CONSULTATION</li>
                <li><span>5. </span>EMAIL SECURITY SETUP</li>
                <li><span>6. </span>MONTHLY SECURITY REPORT</li>
                <li><span>7. </span>INTRUSION DETECTION SYSTEM
                  (IDS) SETUP</li>
                <li><span>8. </span>ENDPOINT PROTECTION (5–15
                  DEVICES)</li>
                <li><span>9. </span>ENSURE CLOUD
                  CONFIGURATION AUDIT</li>
                <li><span>10. </span>DATA LOSS PREVENTION (DLP)
                  BASICS</li>
                <li><span>11. </span>SECURITY AWARENESS
                  TRAINING (QUARTERLY)</li>
                <li><span>12. </span>24/7 THREAT MONITORING &
                  INCIDENT RESPONSE</li>
                <li><span>13. </span>A/B TESTING OF SERP TITLE &
                  DESCRIPTION TO IMPROVE
                  CLICKTHROUGH</li>
                <li><span>14. </span>ADVANCED PENETRATION
                  TESTING (BI-ANNUALLY)</li>
                <li><span>15. </span>ZERO-TRUST ARCHITECTURE
                  CONSULTING</li>
                <li><span>16. </span>IDENTITY & ACCESS
                  MANAGEMENT (IAM) SETUP</li>
                <li><span>17. </span>COMPLIANCE SUPPORT (GDPR,
                  ISO, HIPAA)</li>
                <li><span>18. </span>DEDICATED SECURITY
                  CONSULTANT</li>
                <li><span>19. </span>PRIORITY CUSTOMER SUPPORT</li>
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
