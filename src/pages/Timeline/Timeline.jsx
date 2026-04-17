import React from 'react';

function Timeline() {
  return (
    <section>
      <div className="py-20">
        <div>
          <h1>Timeline</h1>

          <select name="activity" id="activity">
            <option value="" disabled selected hidden>
              Filter Timeline
            </option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
