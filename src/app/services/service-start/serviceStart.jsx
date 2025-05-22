"use client";

import React, { useState } from "react";
import styles from "./serviceStart.module.css";
import { useSearchParams } from "next/navigation";
import Summary from "./summary";
const MultiStepForm = () => {
  const searchParams = useSearchParams(); 
  const basePrice = parseInt(searchParams.get("base")) || 100;

  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(basePrice); 

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const updateTotal = (amount, operation = "add") => {
    setTotal((prev) => (operation === "add" ? prev + amount : prev - amount));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_section}>
        {/* Step 1: Base Plan */}
        <div className={styles.step_box}>
          <h2 className={styles.step_title}>1. Your base package</h2>
          <div className={styles.base_package}>
            <ul className={styles.base_package_list}>
              <li>3 bespoke social media posts per week</li>
              <li>Posted to 2 networks of your choice</li>
              <li>Dedicated account manager</li>
            </ul>
            <p className={styles.base_package_price}>£100.00/month</p>
          </div>
        </div>

        {/* Step 2: Page Creation */}
        <div className={styles.step_box}>
          <h2 className={styles.step_title}>
            2. Do you need us to create any social media pages?
          </h2>
          <div className={styles.grid_two_column}>
            {["Facebook", "Twitter", "Instagram", "LinkedIn", "Pinterest"].map(
              (platform) => {
                const selected = formData.pages || [];
                const alreadySelected = selected.includes(platform);
                return (
                  <button
                    key={platform}
                    className={styles.page_button}
                    onClick={() => {
                      const updated = alreadySelected
                        ? selected.filter((p) => p !== platform)
                        : [...selected, platform];
                      updateFormData({ pages: updated });
                      updateTotal(30, alreadySelected ? "subtract" : "add");
                    }}
                  >
                    <p className={styles.page_button_title}>
                      Create {platform} Page
                    </p>
                    <p className={styles.page_button_desc}>
                      Professionally designed with your branding
                    </p>
                    <p className={styles.page_button_price}>£30.00</p>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Step 3: Choose Networks */}
        <div className={styles.step_box}>
          <h2 className={styles.step_title}>
            3. Where should we publish posts?
          </h2>
          <select
            className={styles.select_input}
            onChange={(e) => updateFormData({ platform1: e.target.value })}
          >
            <option value="">Platform 1</option>
            <option>Facebook</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Pinterest</option>
          </select>
          <select
            className={styles.select_input}
            onChange={(e) => updateFormData({ platform2: e.target.value })}
          >
            <option value="">Platform 2</option>
            <option>Facebook</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Pinterest</option>
          </select>
        </div>

        {/* Step 4: Post Frequency Upgrade */}
        <div className={styles.step_box}>
          <h2 className={styles.step_title}>
            4. Do you want more posts per week?
          </h2>
          <div className={styles.grid_two_column}>
            <button
              className={styles.page_button}
              onClick={() => {
                updateFormData({ frequency: 5 });
                updateTotal(35);
              }}
            >
              <p className={styles.page_button_title}>
                Upgrade to 5 posts per week
              </p>
              <p className={styles.page_button_desc}>£35.00/month</p>
            </button>
            <button
              className={styles.page_button}
              onClick={() => {
                updateFormData({ frequency: 7 });
                updateTotal(70);
              }}
            >
              <p className={styles.page_button_title}>
                Upgrade to 7 posts per week
              </p>
              <p className={styles.page_button_desc}>£70.00/month</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.right_summary}>
        <Summary formData={formData} total={total} />
      </div>
    </div>
  );
};

export default MultiStepForm;
