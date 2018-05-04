import React from 'react'

export const EventsListHeader = () => (
  <div>
    <div className="events-header">
      <span className="events-header-title">Events</span>
      <div className="events-filter-container">
        <input type="text" className="events-filter" placeholder="Tx Hash or Block Number..." />
        <select className="events-select">
          <option value="77">POA Sokol</option>
          <option value="42">Eth Kovan</option>
        </select>
      </div>
    </div>
    <div className="events-columns">
      <span className="column-title txhash-column">TxHash</span>
      <span className="column-title recipient-column">Recipient</span>
      <span className="column-title value-column">Recipient Value</span>
      <span className="column-title block-column">Block Number</span>
    </div>
    <div className="events-header-separator" />
  </div>
)
