import React from "react";

const JobLocationSelector = () => {
  return (
    <div>
      <span className="head">
        Job is restricted to locations? <span className="badge">New</span>
      </span>
      <select
        multiple="multiple"
        data-required="required"
        autoComplete="off"
        className="select_locations tomselected ts-hidden-accessible"
        id="select_locations"
        placeholder="Type a location this job is restricted to like Worldwide, Europe, or Netherlands"
        tabIndex="-1"
      >
        <option></option>
        <optgroup label="Regions">
          <option value="region_AS">⛩ Asia</option>
          <option value="region_EU">🇪🇺 Europe</option>
          <option value="region_ME">🕌 Middle East</option>
          <option value="region_NA">⛰️ North America</option>
          <option value="region_OC">🌊 Oceania</option>
        </optgroup>
        <optgroup label="Countries">
          <option value="AF">🇦🇫 Afghanistan</option>
          <option value="AL">🇦🇱 Albania</option>
          {/* More country options... */}
          <option value="ZW">🇿🇼 Zimbabwe</option>
        </optgroup>
        <option value="Worldwide" selected>
          🌏 Worldwide
        </option>
        <option value="region_AF">🦁 Africa</option>
        <option value="region_LA">💃 Latin America</option>
      </select>
      <div className="ts-wrapper select_locations multi plugin-remove_button has-items focus input-active dropdown-active">
        {/* Dropdown content */}
      </div>
      <span className="info" style={{ marginTop: "-8px", marginLeft: "18px" }}>
        If you'd only like to hire people from a specific location or timezone
        this remote job is restricted to (e.g. Europe, United States or Japan).
        If not restricted, please leave it as "Worldwide". The less restricted
        this is, the more applicants you will get. Keeping it "Worldwide" is
        highly recommended as you'll have access to a worldwide pool of talent.{" "}
        <strong>
          To promote fairness in remote work positions,{" "}
          <a
            target="_blank"
            href="https://twitter.com/levelsio/status/1394260973406457863?s=20"
          >
            worldwide jobs are ranked higher
          </a>
          .
        </strong>
      </span>
    </div>
  );
};

export default JobLocationSelector;
