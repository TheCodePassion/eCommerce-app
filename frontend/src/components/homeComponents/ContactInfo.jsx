function ContactInfo() {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>We're here for you 24/7</h5>
            <p>+ 098 (0420) 340-24-53</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Head office</h5>
            <p>Kyiv, Patorzhynskoho Street, 14</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Telegram / WhatsApp</h5>
            <p>+ 098 (0420) 340-24-53</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactInfo
