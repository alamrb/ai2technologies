import React from "react";
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
                <h3 className={styles.pricing_title}>Basic Plan</h3>
                <p className={styles.pricing_price}>20,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>Vulnerability scan</li>
                <li>Basic firewall setup and monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>Monthly security report</li>
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
                <p className={styles.pricing_price}>30,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>Vulnerability scan</li>
                <li>Basic firewall setup and monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>Monthly security report</li>
                <li>Intrusion detection system (IDS) setup</li>
                <li>Endpoint protection (5–15 devices)</li>
                <li>Secure cloud configuration audit</li>
                <li>Data loss prevention (DLP) basics</li>
                <li>Security awareness training (quarterly)</li>
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
                <p className={styles.pricing_price}>45,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>Vulnerability scan</li>
                <li>Basic firewall setup and monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>Monthly security report</li>
                <li>Intrusion detection system (IDS) setup</li>
                <li>Endpoint protection (5–15 devices)</li>
                <li>Secure cloud configuration audit</li>
                <li>Data loss prevention (DLP) basics</li>
                <li>Security awareness training (quarterly)</li>
                <li>24/7 threat monitoring & incident response</li>
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
                <p className={styles.pricing_price}>65,000 BDT</p>
                <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
              </div>
              <hr />
              <ul className={styles.pricing_features}>
                <li>Vulnerability scan</li>
                <li>Basic firewall setup and monitoring</li>
                <li>Anti-virus & malware protection</li>
                <li>Data backup consultation</li>
                <li>Email security setup</li>
                <li>Monthly security report</li>
                <li>Intrusion detection system (IDS) setup</li>
                <li>Endpoint protection (5–15 devices)</li>
                <li>Secure cloud configuration audit</li>
                <li>Data loss prevention (DLP) basics</li>
                <li>Security awareness training (quarterly)</li>
                <li>24/7 threat monitoring & incident response</li>
                <li>
                  A/B Testing of SERP title & description to improve
                  clickthrough
                </li>
                <li>Advanced penetration testing (bi-annually)</li>
                <li>Zero-trust architecture consulting</li>
                <li>Identity & Access Management (IAM) setup</li>
                <li>Compliance support (GDPR, ISO, HIPAA)</li>
                <li>Dedicated Security Consultant</li>
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
