// Summary.jsx
import React from "react";
import styles from "./serviceStart.module.css";
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

const Summary = ({ formData, total }) => {
  const countryCodeOptions = [
    { value: "+880", label: "Bangladesh (+880)" },
    { value: "+91", label: "India (+91)" },
    { value: "+44", label: "UK (+44)" },
  ];
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryBox}>
        <h2 className={styles.title}>Summary</h2>
        <div className={styles.lineItem}>
          <span>Basic Plan +</span>
          <span>£{total}</span>
        </div>

        {formData.pages &&
          formData.pages.map((page, idx) => (
            <div key={idx} className={styles.lineItem}>
              <span>{page} Page</span>
              <span>£30.00</span>
            </div>
          ))}

        {formData.frequency && (
          <div className={styles.lineItem}>
            <span>{`Upgrade to ${formData.frequency} posts/week`}</span>
            <span>{formData.frequency === 5 ? "£35.00" : "£70.00"}</span>
          </div>
        )}

        <hr className={styles.divider} />

        <div className={styles.totalLine}>
          <strong>Total</strong>
          <strong>£{total}.00</strong>
        </div>
      </div>
      <div className={styles.summaryBox}>
        <div className={styles.checkoutSection}>
          <h2 className={styles.sectionTitle}>Checkout</h2>
          <form className={styles.form}>
            <div className={styles.row}>
              <input className={styles.inputHalf} placeholder="First name" />
              <input className={styles.inputHalf} placeholder="Last name" />
            </div>
            <input className={styles.inputFull} placeholder="Email" />
            <div className={styles.row}>
              <input className={styles.inputHalf} placeholder="Phone" />
              <select className={styles.inputHalf}>
                <option>Bangladesh (+880)</option>
              </select>
            </div>
            <input className={styles.inputFull} placeholder="Address" />
            <div className={styles.row}>
              <input className={styles.inputThird} placeholder="City" />
              <select className={styles.inputThird}>
                <option>Bangladesh</option>
              </select>
              <input
                className={styles.inputThird}
                placeholder="Postal / Zip Code"
              />
            </div>

            <div className={styles.checkboxRow}>
              <input type="checkbox" />
              <label>I’m purchasing for a company</label>
            </div>
            <div className={styles.checkboxRow}>
              <input type="checkbox" required />
              <label> agree to terms and conditions</label>
            </div>

            <button className={styles.submitButton}>Complete Purchase</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Summary;
