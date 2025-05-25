import Link from "next/link";
import styles from "../../home.module.css";

export default function Page() {
  return (

    <div className={`${styles.product_container} ${styles.pricing_bottom}`} id="pricing">
      <div className={styles.product_item}>
        <div className={styles.pricing_container}>
          <div className={styles.section_top}>
            <p className={styles.your_queries_title}>Social Media Management Package</p>
            <p className={styles.your_queries_sub_title}>Flexible plans tailored to your business needs. Choose what suits you best.</p>
          </div>
          <div className={`${styles.pricing_table} ${styles.pricing_table_custom}`}>

            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Basic</h3>
                <p className={styles.pricing_price}>1,500 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
                {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
              </div>
              <hr></hr>
              <ul className={styles.pricing_features}>
                <li> 7 posts per week </li>
                <li>Unique content</li>
                <li>Boost social engagement and
                  account growth</li>
                <li> <span>Preview posts one week in advance</span> </li>
                <li> <span>Real-time social media analytics</span> </li>
                <li> SEO-optimised blog post </li>
                <li> <span>Facebook Ads campaign included</span> </li>
                <li> <span>Additional services are available at
                  checkout</span> </li>
                <li> <span>Monthly rolling contract</span> </li>
                <li> Priority customer support</li>

              </ul>
              <Link href="#" className={styles.pricing_btn}>Get Started</Link>
            </div>

            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Standard</h3>
                <p className={styles.pricing_price}>3,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
                {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
              </div>
              <hr></hr>
              <ul className={styles.pricing_features}>
                <li> 14 posts per week </li>
                <li>Unique content</li>
                <li>Boost social engagement and
                  account growth</li>
                <li> Preview posts one week in advance </li>
                <li> Real-time social media analytics</li>
                <li> SEO-optimised blog post </li>
                <li> <span>Facebook Ads campaign included</span> </li>
                <li> <span>Additional services are available at
                  checkout</span> </li>
                <li> <span>Monthly rolling contract</span> </li>
                <li> Priority customer support</li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>Get Started</Link>
            </div>


            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>Premium</h3>
                <p className={styles.pricing_price}>5,000 BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
                {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
              </div>
              <hr></hr>
              <ul className={styles.pricing_features}>
                <li> 14 posts per week </li>
                <li>Unique content</li>
                <li>Boost social engagement and
                  account growth</li>
                <li> Preview posts one week in advance </li>
                <li> Real-time social media analytics</li>
                <li> SEO-optimised blog post </li>
                <li> Facebook Ads campaign included </li>
                <li> <span>Additional services are available at
                  checkout</span> </li>
                <li> <span>Monthly rolling contract</span> </li>
                <li> Priority customer support</li>
              </ul>
              <Link href="#" className={styles.pricing_btn}>Get Started</Link>
            </div>


            <div className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}>
              <div className={styles.pricingHead}>
                <h3 className={styles.pricing_title}>PLATINUM</h3>
                <p className={styles.pricing_price}>7,000BDT</p>
                {/* <h3 className={styles.pricing_title_month}>Per Month + Vat</h3> */}
                {/* <p className={styles.pricing_price}>£<span className={styles.priceInner}>299</span></p> */}
              </div>
              <hr></hr>
              <ul className={styles.pricing_features}>


                <li> 21 posts per week </li>
                <li>Unique content</li>
                <li>Boost social engagement and
                  account growth</li>
                <li> Preview posts one week in advance </li>
                <li> Real-time social media analytics</li>
                <li> SEO-optimised blog post </li>
                <li>Facebook Ads campaign included</li>
                <li> Additional services are available at
                  checkout</li>
                <li> Monthly rolling contract</li>
                <li> Priority customer support</li>

              </ul>
              <Link
                href={{
                  pathname: "/services/service-start",
                  query: {
                    base: 7000,
                    title: "PLATINUM",
                    features: JSON.stringify([
                      "7 POSTS PER WEEK",
                      "UNIQUE CONTENT",
                      "BOOST SOCIAL ENGAGEMENT AND GROWTH",
                      "PREVIEW POSTS ONE WEEK IN ADVANCE",
                      "REAL-TIME SOCIAL MEDIA ANALYTICS",
                      "1 STRATEGY CALL PER MONTH INCLUDED",
                      "1 X 500-WORD SEO-OPTIMISED BLOG POST",
                      "FACEBOOK ADS CAMPAIGN INCLUDED",
                      "ADDITIONAL SERVICES ARE AVAILABLE",
                      "MONTHLY ROLLING CONTRACT",
                      "PRIORITY CUSTOMER SUPPORT"
                    ])
                  }
                }}
                className={styles.pricing_btn}
              >
                Get Started
              </Link>
            </div>







          </div>
        </div>
      </div>
    </div>


    // <div
    //   className={`${styles.product_container} ${styles.pricing_bottom}`}
    //   id="pricing"
    // >
    //   <div className={styles.product_item}>
    //     <div className={styles.pricing_container}>
    //       <div className={styles.section_top}>
    //         <p className={styles.your_queries_title}>
    //           Social Media Management Package
    //         </p>
    //         <p className={styles.your_queries_sub_title}>
    //           Flexible plans tailored to your business needs. Choose what suits
    //           you best.
    //         </p>
    //       </div>
    //       <div
    //         className={`${styles.pricing_table} ${styles.pricing_table_custom}`}
    //       >
    //         {/* Basic Plan */}
    //         <div
    //           className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
    //         >
    //           <div className={styles.pricingHead}>
    //             <h3 className={styles.pricing_title}>Basic Plan</h3>
    //             <p className={styles.pricing_price}>7000 BDT</p>
    //             <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
    //           </div>
    //           <hr />
    //           <ul className={styles.pricing_features}>
    //             <li>1 bespoke post per week to 1 platform</li>
    //             <li>
    //               Unique content specific to your business and interesting to
    //               your followers
    //             </li>
    //             <li>A content strategy designed to boost social engagement</li>
    //             <li>Branded graphics unique to your business</li>
    //             <li>
    //               Upgrade any time, additional services available at checkout
    //             </li>
    //             <li>Monthly rolling contract - cancel any time</li>
    //             <li>Great customer support</li>
    //           </ul>
    //           <Link href="#" className={styles.pricing_btn}>
    //             Get Started
    //           </Link>
    //         </div>

    //         {/* Standard Plan */}
    //         <div
    //           className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
    //         >
    //           <div className={styles.pricingHead}>
    //             <h3 className={styles.pricing_title}>Standard Plan</h3>
    //             <p className={styles.pricing_price}>12000 BDT</p>
    //             <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
    //           </div>
    //           <hr />
    //           <ul className={styles.pricing_features}>
    //             <li>1 bespoke post per week to 1 platform</li>
    //             <li>
    //               Unique content specific to your business and interesting to
    //               your followers
    //             </li>
    //             <li>A content strategy designed to boost social engagement</li>
    //             <li>Branded graphics unique to your business</li>
    //             <li>Real time social media analytics</li>
    //             <li>
    //               Upgrade any time, additional services available at checkout
    //             </li>
    //             <li>Monthly rolling contract - cancel any time</li>
    //             <li>Great customer support</li>
    //           </ul>
    //           <Link href="#" className={styles.pricing_btn}>
    //             Get Started
    //           </Link>
    //         </div>

    //         {/* Premium Plan */}
    //         <div
    //           className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
    //         >
    //           <div className={styles.pricingHead}>
    //             <h3 className={styles.pricing_title}>Premium Plan</h3>
    //             <p className={styles.pricing_price}>20000 BDT</p>
    //             <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
    //           </div>
    //           <hr />
    //           <ul className={styles.pricing_features}>
    //             <li>5 bespoke posts per week to 3 platforms</li>
    //             <li>
    //               Unique content specific to your business and interesting to
    //               your followers
    //             </li>
    //             <li>
    //               A content strategy designed to boost social engagement and
    //               account growth
    //             </li>
    //             <li>Branded graphics unique to your business</li>
    //             <li>Preview posts one week in advance</li>
    //             <li>Real time social media analytics</li>
    //             <li>1 strategy call per month included</li>
    //             <li>
    //               Upgrade or downgrade any time, additional services available
    //               at checkout
    //             </li>
    //             <li>Monthly rolling contract - cancel any time</li>
    //             <li>Fast customer support</li>
    //           </ul>
    //           <Link href="#" className={styles.pricing_btn}>
    //             Get Started
    //           </Link>
    //         </div>

    //         {/* Deluxe Plan */}
    //         <div
    //           className={`${styles.pricing_card} ${styles.featured} ${styles.pricing_card_custom}`}
    //         >
    //           <div className={styles.pricingHead}>
    //             <h3 className={styles.pricing_title}>PLATINUM</h3>
    //             <p className={styles.pricing_price}>40000 BDT</p>
    //             <h3 className={styles.pricing_title_month}>Per Month + Vat</h3>
    //           </div>
    //           <hr />
    //           <ul className={styles.pricing_features}>
    //             <li>7 bespoke posts per week to 4 platforms</li>
    //             <li>
    //               Unique content specific to your business and interesting to
    //               your followers
    //             </li>
    //             <li>
    //               A content strategy designed to boost social engagement and
    //               account growth
    //             </li>
    //             <li>Branded graphics unique to your business</li>
    //             <li>Preview posts one week in advance</li>
    //             <li>Real time social media analytics</li>
    //             <li>1 strategy call per month included</li>
    //             <li>1 x 500 word SEO-optimised blog post</li>
    //             <li>Facebook Ads campaign included</li>
    //             <li>
    //               Downgrade at any time, additional services available at
    //               checkout
    //             </li>
    //             <li>Monthly rolling contract - cancel any time</li>
    //             <li>Priority customer support</li>
    //           </ul>
    //           <Link href="#" className={styles.pricing_btn}>
    //             Get Started
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
