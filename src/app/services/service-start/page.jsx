"use client";

import React, { useState, useEffect } from "react";
import styles from "./serviceStart.module.css";
import { useSearchParams } from "next/navigation";
import Summary from "./summary";
import Select from "react-select";

const baseControlStyle = {
  height: "2rem",
  minHeight: "2rem",
  display: "flex",
  alignItems: "center",
  paddingRight: 0,
  fontSize: "0.875rem",
  boxShadow: "none",
  borderRadius: 0,
};

const customWhiteStyles = {
  control: (provided) => ({
    ...provided,
    ...baseControlStyle,
    backgroundColor: "#ffffff",
    "&:hover": { borderColor: "#60a5fa" },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "2rem",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "2rem",
    display: "flex",
    alignItems: "center",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    height: "1rem",
    marginTop: "auto",
    marginBottom: "auto",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 4,
    display: "flex",
    alignItems: "center",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#ffffff",
    zIndex: 50,
    borderRadius: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#c6f4f4" : "#ffffff",
    color: "#1f2937",
    cursor: "pointer",
    padding: 10,
  }),
};

const Page = () => {
  const searchParams = useSearchParams();

  const platformOptions = [
    { value: "Facebook", label: "Facebook" },
    { value: "Twitter", label: "Twitter" },
    { value: "Instagram", label: "Instagram" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Pinterest", label: "Pinterest" },
  ];

  const [prevFrequency, setPrevFrequency] = useState(null);
  const [prevTotal, setPrevTotal] = useState(null);

  const basePrice = parseInt(searchParams.get("base")) || 100;
  const baseTitle = searchParams.get("title") || "Basic";
  const featuresRaw = searchParams.get("features");
  const featureList = featuresRaw
    ? JSON.parse(featuresRaw)
    : [
        "3 bespoke social media posts per week",
        "Posted to 2 networks of your choice",
        "Dedicated account manager",
      ];

  const [formData, setFormData] = useState({
    planTitle: baseTitle,
    planFeatures: featureList,
    frequency: 3,
  });

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
          <h2 className={styles.step_title}>
            {formData.planTitle} Package Details
          </h2>
          <div className={styles.base_package}>
            <ul className={styles.base_package_list}>
              {formData.planFeatures.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p className={styles.base_package_price}>৳{basePrice}.00/month</p>
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
                    className={`${styles.page_button} ${
                      alreadySelected ? styles.activePage_button : ""
                    }`}
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
                    <p className={styles.page_button_price}>+ £30.00</p>
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
          <Select
            options={platformOptions}
            placeholder="Platform 1"
            styles={customWhiteStyles}
            onChange={(selectedOption) =>
              updateFormData({ platform1: selectedOption?.value })
            }
          />
          {/* <select
            className={styles.select_input}
            onChange={(e) => updateFormData({ platform2: e.target.value })}
          >
            <option value="">Platform 2</option>
            <option>Facebook</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Pinterest</option>
          </select> */}
        </div>

        {/* Step 4: Post Frequency Upgrade */}
        <div className={styles.step_box}>
          <h2 className={styles.step_title}>
            4. How many posts per week do you want?
          </h2>
          <div className={styles.grid_two_column}>
            <button
              className={`${styles.page_button} ${
                formData.frequency === 7 ? styles.activePage_button : ""
              }`}
              onClick={() => {
                const oldFreq = formData.frequency || 0;

                if (formData.frequency === 7) {
                  // Toggle off: revert to previous state if any
                  if (prevFrequency !== null && prevTotal !== null) {
                    updateFormData({ frequency: prevFrequency });
                    setTotal(prevTotal);
                  } else {
                    updateFormData({ frequency: null });
                    setTotal(basePrice);
                  }
                  setPrevFrequency(null);
                  setPrevTotal(null);
                } else {
                  // Save current state before changing
                  setPrevFrequency(oldFreq);
                  setPrevTotal(total);

                  // Apply new frequency 7 posts
                  const newFreq = 7;
                  updateFormData({ frequency: newFreq });
                  updateTotal(15 * (newFreq - oldFreq)); // updateTotal needs adjustment (see below)
                }
              }}
            >
              <p className={styles.page_button_title}>7 posts per week</p>
              <p className={styles.page_button_desc}>£{15 * 7}.00/month</p>
            </button>

            {/* Custom number input remains same */}
            <div className={styles.custom_input_container}>
              <label htmlFor="customFrequency" className={styles.custom_label}>
                Custom number of posts (max 15):
              </label>
              <input
                type="number"
                id="customFrequency"
                min={3}
                max={15}
                value={formData.frequency === 7 ? "" : formData.frequency || ""}
                onChange={(e) => {
                  let val = parseInt(e.target.value) || 1;
                  if (val > 15) val = 15;
                  const oldFreq = formData.frequency || 0;

                  setPrevFrequency(oldFreq);
                  setPrevTotal(total);

                  updateFormData({ frequency: val });
                  updateTotal(15 * (val - oldFreq)); // See note below
                }}
                className={styles.custom_input}
              />
              <p className={styles.page_button_desc}>
                £{(formData.frequency || 0) * 15}.00/month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right_summary}>
        <Summary formData={formData} total={total} />
      </div>
    </div>
  );
};

export default Page;
